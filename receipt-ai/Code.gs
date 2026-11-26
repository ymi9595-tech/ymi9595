/**
 * 영수증 경비장부 — Google Sheets 백엔드 (Code.gs)
 * ---------------------------------------------------------------
 * 설치 (5분)
 * 1) 구글 시트를 새로 만든다. (이름 예: 영수증 경비장부)
 * 2) 확장 프로그램 > Apps Script 를 연다.
 * 3) 기본 Code.gs 내용을 지우고 이 파일 전체를 붙여넣는다.
 * 4) 파일 > HTML 을 눌러 이름을 index 로 만들고, index.html 내용 전체를 붙여넣는다.
 * 5) 배포 > 새 배포 > 유형 '웹 앱'
 *      - 다음 사용자로 실행: 나
 *      - 액세스 권한: 모든 사용자(Anyone)
 *    → 배포하고 나온 웹 앱 URL(.../exec)을 저장한다.
 * 6) 그 URL을 그대로 쓰면 시트 앱으로 바로 사용할 수 있다.
 *    (GitHub Pages 앱에서 쓰려면 그 URL을 앱 설정 > 구글 시트 연동에 붙여넣는다.)
 *
 * - 시트의 '영수증경비' 탭에 한 줄씩 쌓인다. 없으면 자동으로 만든다.
 * - 총액·공급가액·부가세는 숫자로 저장되어 시트에서 바로 합계를 낼 수 있다.
 */

var SHEET_NAME = '영수증경비';
var HEADERS = ['등록일시','날짜','매장','상호명','총액(원)','공급가액(원)','부가세(원)','부가세구분','경비과목','주요품목','메모'];

/** 웹 앱 첫 화면 */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('영수증 경비장부')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** 웹 앱 POST — GitHub Pages 앱에서 호출 */
function doPost(e) {
  try {
    var body = {};
    if (e && e.postData && e.postData.contents) {
      try { body = JSON.parse(e.postData.contents); } catch (err) { body = {}; }
    } else if (e && e.parameter && e.parameter.action) {
      body = e.parameter;
    }
    var action = body.action || 'append';
    if (action === 'ping') {
      var sh0 = getSheet_();
      return json_({ ok: true, sheet: SHEET_NAME, rows: Math.max(0, sh0.getLastRow() - 1) });
    }
    if (action === 'append') {
      return json_(appendReceipt(body.receipt || body));
    }
    return json_({ ok: false, error: '알 수 없는 action: ' + action });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

/** 앱(시트 버전)에서 직접 호출하는 저장 함수 */
function appendReceipt(r) {
  if (!r) return { ok: false, error: '영수증 데이터가 없습니다' };
  var vendor = String(r.vendor || '').slice(0, 120);
  var total = Number(r.total) || 0;
  if (!vendor || total <= 0) return { ok: false, error: '상호명과 총액이 필요합니다' };

  var sh = getSheet_();
  var now = new Date();
  var createdAt = r.createdAt ? new Date(r.createdAt) : now;
  if (isNaN(createdAt.getTime())) createdAt = now;
  var vat = Number(r.vat) || 0;
  var supply = (r.supply !== undefined && r.supply !== null && r.supply !== '')
    ? Number(r.supply) || 0
    : Math.max(0, total - vat);

  sh.appendRow([
    Utilities.formatDate(createdAt, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm'),
    String(r.date || Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd')),
    String(r.store || ''),
    vendor,
    total,
    supply,
    vat,
    r.vatEstimated ? '추정' : '표기',
    String(r.category || '기타'),
    String(r.items || '').slice(0, 300),
    String(r.memo || '').slice(0, 300)
  ]);
  return { ok: true, row: sh.getLastRow() };
}

/** 연결 확인용 */
function ping() {
  var sh = getSheet_();
  return 'ok · ' + SHEET_NAME + ' · ' + Math.max(0, sh.getLastRow() - 1) + '건';
}

/** 시트 탭을 미리 만들어 두고 싶을 때 한 번 실행 */
function setup() {
  var sh = getSheet_();
  SpreadsheetApp.getActiveSpreadsheet().toast('준비 완료: ' + SHEET_NAME, '경비장부', 5);
  return sh.getName();
}

/** ---------------- 내부 ---------------- */
function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('구글 시트에 연결된 스크립트에서 실행해 주세요(시트 > 확장 프로그램 > Apps Script).');
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sh.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#10241B')
      .setFontColor('#F3EDDD')
      .setVerticalAlignment('middle');
    sh.setFrozenRows(1);
    sh.setRowHeight(1, 28);
    var widths = [130, 100, 130, 190, 110, 110, 100, 90, 100, 240, 150];
    for (var i = 0; i < widths.length; i++) sh.setColumnWidth(i + 1, widths[i]);
    sh.getRange('E:G').setNumberFormat('#,##0');
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
