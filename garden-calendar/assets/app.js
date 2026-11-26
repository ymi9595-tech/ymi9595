/* ============================================================
   베란다 텃밭 · 제철 파종 & 물주기 계산기
   data.js(작물 데이터) · config.js(연결 설정) 위에서 동작합니다.
   ============================================================ */
(function () {
  'use strict';

  var D = window.GARDEN_DATA;
  var CFG = window.GARDEN_CONFIG || { books: [], supplies: [], links: {} };
  var STORE_KEY = 'garden_calendar_v1';
  var WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
  var MONTH_SHORT = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- 날짜 유틸 ---------- */
  function today() {
    var n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }
  function parseDate(str) {
    if (!str) return today();
    var p = String(str).split('-');
    var y = +p[0], m = +p[1], d = +p[2];
    if (!y || !m || !d || y < 1990 || y > 2100) return today();
    var dt = new Date(y, m - 1, d);
    return isNaN(dt.getTime()) ? today() : dt;
  }
  function addDays(d, n) {
    var x = new Date(d.getTime());
    x.setDate(x.getDate() + n);
    return x;
  }
  function dayDiff(a, b) { // b - a (일)
    return Math.round((b.getTime() - a.getTime()) / 86400000);
  }
  function ymd(d) {
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
  }
  function fmt(d) {
    var y = d.getFullYear() === today().getFullYear() ? '' : d.getFullYear() + '년 ';
    return y + (d.getMonth() + 1) + '월 ' + d.getDate() + '일(' + WEEKDAY[d.getDay()] + ')';
  }
  function fmtShort(d) {
    return (d.getMonth() + 1) + '/' + d.getDate();
  }

  /* ---------- 저장 ---------- */
  var state = {
    space: 'balcony',
    sun: 2,
    month: today().getMonth() + 1,
    cropId: 'sangchu',
    sown: ymd(today()),
    garden: [] // [{ id, sown, lastWatered }]
  };

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return;
      var s = JSON.parse(raw);
      if (s && typeof s === 'object') {
        if (s.space) state.space = s.space;
        if (s.sun) state.sun = +s.sun;
        if (s.month) state.month = +s.month;
        if (s.cropId) state.cropId = s.cropId;
        if (s.sown) state.sown = s.sown;
        if (Array.isArray(s.garden)) state.garden = s.garden.filter(function (g) { return g && g.id; });
      }
    } catch (e) { /* 저장소를 쓸 수 없으면 기본값으로 */ }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* 무시 */ }
  }

  /* ---------- 작물 조회 ---------- */
  function cropById(id) {
    for (var i = 0; i < D.crops.length; i++) if (D.crops[i].id === id) return D.crops[i];
    return D.crops[0];
  }
  function spaceById(id) {
    for (var i = 0; i < D.spaces.length; i++) if (D.spaces[i].id === id) return D.spaces[i];
    return D.spaces[1];
  }
  function sunLabel(n) {
    var s = D.suns.filter(function (x) { return x.id === n; })[0];
    return s ? s.label : '';
  }
  function diffLabel(n) {
    return n === 1 ? '쉬움' : n === 2 ? '보통' : '조금 어려움';
  }
  function glyph(crop) {
    return '<svg class="glyph" aria-hidden="true"><use href="#i-' + (crop.glyph || 'leaf') + '"/></svg>';
  }
  // 받침 유무에 따라 조사를 고릅니다. (상추를 / 바질을)
  function josa(word, withBatchim, withoutBatchim) {
    var c = word.charCodeAt(word.length - 1);
    var has = (c >= 0xAC00 && c <= 0xD7A3) ? ((c - 0xAC00) % 28) !== 0 : false;
    return has ? withBatchim : withoutBatchim;
  }

  /* ---------- 물주기 주기 ---------- */
  var WATER_BASE = { high: 2, mid: 3, low: 5 };
  var SPACE_FACTOR = { window: 1.15, balcony: 1, roof: 0.85, farm: 0.9 };

  function waterInterval(crop, month, space) {
    var season = ([12, 1, 2].indexOf(month) > -1) ? 1.9 : ([6, 7, 8].indexOf(month) > -1) ? 1 : 1.45;
    var sp = SPACE_FACTOR[space] || 1;
    return Math.max(1, WATER_BASE[crop.water] * season * sp);
  }
  function intervalText(v) {
    var lo = Math.max(1, Math.round(v - 0.55));
    var hi = Math.max(1, Math.round(v + 0.55));
    if (lo === hi) return lo + '일에 한 번';
    return lo + '~' + hi + '일에 한 번';
  }

  /* ---------- 작물 매칭 ---------- */
  function score(crop, space, sun, month) {
    var s = 0;
    if (crop.spaces.indexOf(space) > -1) s += 45;
    if (sun >= crop.sun) s += 35;
    else if (sun === crop.sun - 1) s += 14;
    if (canSow(crop, month, space)) s += 30;
    else if (canSow(crop, month === 1 ? 12 : month - 1, space) || canSow(crop, month === 12 ? 1 : month + 1, space)) s += 12;
    return s;
  }
  function isFit(crop, space, sun) {
    return crop.spaces.indexOf(space) > -1 && sun >= crop.sun;
  }
  // 실내 창가·베란다는 겨울에도 잎채소를 이어 갈 수 있어요.
  function canSow(crop, month, space) {
    if (crop.sow.indexOf(month) > -1) return true;
    if (crop.indoorWinter && (space === 'window' || space === 'balcony') && [11, 12, 1, 2].indexOf(month) > -1) return true;
    return false;
  }
  /* ---------- 렌더: 조건 선택 ---------- */
  function renderSegments() {
    var spaceBox = $('.seg[data-group="space"]');
    spaceBox.innerHTML = D.spaces.map(function (sp) {
      return '<button type="button" class="seg-btn' + (state.space === sp.id ? ' is-active' : '') + '"' +
        ' data-value="' + sp.id + '" aria-pressed="' + (state.space === sp.id) + '">' +
        '<svg class="ic" aria-hidden="true"><use href="#i-' + sp.icon + '"/></svg>' + sp.label + '</button>';
    }).join('');

    var sunBox = $('.seg[data-group="sun"]');
    sunBox.innerHTML = D.suns.map(function (s) {
      return '<button type="button" class="seg-btn' + (state.sun === s.id ? ' is-active' : '') + '"' +
        ' data-value="' + s.id + '" aria-pressed="' + (state.sun === s.id) + '">' + s.label + '</button>';
    }).join('');

    var mBox = $('.months[data-group="month"]');
    var nowM = today().getMonth() + 1;
    mBox.innerHTML = MONTH_SHORT.map(function (label, i) {
      var m = i + 1;
      return '<button type="button" class="month-btn' + (state.month === m ? ' is-active' : '') + (nowM === m ? ' is-today' : '') + '"' +
        ' data-value="' + m + '" aria-label="' + m + '월" aria-pressed="' + (state.month === m) + '">' + m + '</button>';
    }).join('');

    var spNow = spaceById(state.space);
    $('#spaceHint').textContent = spNow ? spNow.hint : '';
    var sunNow = D.suns.filter(function (s) { return s.id === state.sun; })[0];
    $('#sunHint').textContent = sunNow ? sunNow.hint : '';
  }

  /* ---------- 렌더: 작물 카드 ---------- */
  function cropCard(crop, month) {
    var badge = '';
    if (canSow(crop, month, state.space)) {
      badge = crop.sow.indexOf(month) > -1
        ? '<span class="badge">이번 달 적기</span>'
        : '<span class="badge">실내 재배 적기</span>';
    } else if (canSow(crop, month === 1 ? 12 : month - 1, state.space) || canSow(crop, month === 12 ? 1 : month + 1, state.space)) {
      badge = '<span class="badge badge--soft">곧 적기</span>';
    }
    var iv = waterInterval(crop, month, state.space);
    var harvestTxt = crop.harvest[0] >= 365
      ? '첫 수확 ' + Math.round(crop.harvest[0] / 365) + '년+'
      : crop.harvest[0] + '~' + crop.harvest[1] + '일';
    return '<button type="button" class="crop-card" data-crop="' + crop.id + '">' +
      '<span class="crop-top">' + glyph(crop) + badge + '</span>' +
      '<span class="crop-name">' + crop.name + '</span>' +
      '<span class="crop-kind">' + crop.kind + ' · 난이도 ' + diffLabel(crop.difficulty) + '</span>' +
      '<span class="crop-facts">' +
        '<span><svg class="ic" aria-hidden="true"><use href="#i-sun"/></svg>' + sunLabel(crop.sun) + '</span>' +
        '<span><svg class="ic" aria-hidden="true"><use href="#i-clock"/></svg>' + harvestTxt + '</span>' +
        '<span><svg class="ic" aria-hidden="true"><use href="#i-drop"/></svg>' + intervalText(iv) + '</span>' +
      '</span>' +
      '<span class="crop-go">계산하기 <svg class="ic" aria-hidden="true"><use href="#i-arrow"/></svg></span>' +
    '</button>';
  }

  function renderCrops() {
    var month = state.month;
    var fits = [];
    var rest = [];
    D.crops.forEach(function (c) {
      (isFit(c, state.space, state.sun) ? fits : rest).push(c);
    });
    fits.sort(function (a, b) { return score(b, state.space, state.sun, month) - score(a, state.space, state.sun, month); });
    rest.sort(function (a, b) { return score(b, state.space, state.sun, month) - score(a, state.space, state.sun, month); });

    var grid = $('#cropGrid');
    if (fits.length) {
      grid.innerHTML = fits.map(function (c) { return cropCard(c, month); }).join('');
    } else {
      grid.innerHTML = rest.splice(0, 4).map(function (c) { return cropCard(c, month); }).join('');
    }

    var note = $('#gridNote');
    if (rest.length) {
      note.innerHTML = '조건에 조금 덜 맞는 작물 ' + rest.length + '가지도 있어요. ' +
        '<button type="button" class="text-btn" id="showRest">전체 12가지 보기</button>';
      $('#showRest').addEventListener('click', function () {
        grid.innerHTML = D.crops.slice().sort(function (a, b) {
          return score(b, state.space, state.sun, month) - score(a, state.space, state.sun, month);
        }).map(function (c) { return cropCard(c, month); }).join('');
        note.innerHTML = '햇빛이 부족한 작물은 잎이 웃자랄 수 있어요. 그만큼 물도 적게 주세요.';
        bindCards();
      });
    } else {
      note.textContent = '이 조건이면 12가지 모두 잘 자랄 수 있어요.';
    }

    var sowNow = D.crops.filter(function (c) { return canSow(c, month, state.space) && isFit(c, state.space, state.sun); });
    var meta = spaceById(state.space).label + ' · ' + sunLabel(state.sun) + ' · ' + month + '월';
    var lead = sowNow.length
      ? '지금 심기 좋은 작물 <b>' + sowNow.length + '가지</b>'
      : '지금은 실내 창가 재배를 권해요';
    $('#matchLine').innerHTML = lead + '<span class="match-meta">' + meta + '</span>';

    bindCards();
  }

  function bindCards() {
    $$('#cropGrid .crop-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-crop');
        selectCrop(id, true);
        document.getElementById('detail').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- 렌더: 작물 선택 + D-day ---------- */
  function renderCropSelect() {
    var sel = $('#cropSelect');
    sel.innerHTML = D.crops.map(function (c) {
      return '<option value="' + c.id + '"' + (state.cropId === c.id ? ' selected' : '') + '>' + c.name + ' · ' + c.kind + '</option>';
    }).join('');
  }

  function selectCrop(id, fromGrid) {
    state.cropId = id;
    var g = state.garden.filter(function (x) { return x.id === id; })[0];
    if (g) state.sown = g.sown;
    else state.sown = ymd(today());
    $('#cropSelect').value = id;
    $('#sowDate').value = state.sown;
    save();
    renderDday();
    if (!fromGrid) renderCrops();
  }

  function stageOf(crop, elapsed) {
    if (elapsed < 0) return { key: 'before', label: '심기 전', idx: 0 };
    if (elapsed <= crop.germ[1]) return { key: 'germ', label: '발아 대기', idx: 1 };
    if (elapsed < crop.harvest[0]) return { key: 'grow', label: '잎·줄기 자라는 중', idx: 2 };
    return { key: 'harvest', label: '수확 시기', idx: 3 };
  }

  function waterState(crop, entry) {
    var m = today().getMonth() + 1;
    var iv = waterInterval(crop, m, state.space);
    var sow = parseDate(entry ? entry.sown : state.sown);
    var last = entry && entry.lastWatered ? parseDate(entry.lastWatered) : null;
    if (!last) {
      return { iv: iv, last: null, next: addDays(sow, 1), diff: null, due: true, first: true };
    }
    var next = addDays(last, Math.round(iv));
    var diff = dayDiff(today(), next);
    return { iv: iv, last: last, next: next, diff: diff, due: diff <= 0, first: false };
  }

  function renderDday() {
    var crop = cropById(state.cropId);
    var dateStr = $('#sowDate').value || state.sown;
    var sow = parseDate(dateStr);
    var t = today();
    var ty = t.getFullYear();
    var badDate = sow.getFullYear() < ty - 2 || sow.getFullYear() > ty + 2;
    if (badDate) sow = t;
    var invalidRaw = String(dateStr) !== ymd(sow);
    if (badDate || invalidRaw) {
      dateStr = ymd(sow);
      $('#sowDate').value = dateStr;
    }
    state.sown = dateStr;
    var elapsed = dayDiff(sow, t);
    var st = stageOf(crop, elapsed);
    var entry = state.garden.filter(function (x) { return x.id === crop.id; })[0];
    var saved = !!entry;

    var germA = addDays(sow, crop.germ[0]);
    var germB = addDays(sow, crop.germ[1]);
    var harvA = addDays(sow, crop.harvest[0]);
    var harvB = addDays(sow, crop.harvest[1]);
    var perennial = crop.harvest[0] >= 365;

    var w = waterState(crop, entry);
    var wTxt, wCls;
    if (w.first) {
      wTxt = '심은 날 물을 한 번 주고 시작해요';
      wCls = 'is-soon';
    } else if (w.diff > 1) {
      wTxt = '다음 물주기까지 ' + w.diff + '일';
      wCls = 'is-ok';
    } else if (w.diff === 1) {
      wTxt = '내일이 물 주는 날이에요';
      wCls = 'is-soon';
    } else if (w.diff === 0) {
      wTxt = '오늘 물 줄 날이에요';
      wCls = 'is-due';
    } else {
      wTxt = '물 주는 날이 ' + Math.abs(w.diff) + '일 지났어요 · 흙 상태를 확인하세요';
      wCls = 'is-due';
    }

    var harvLabel = perennial
      ? harvA.getFullYear() + '년 ' + (harvA.getMonth() + 1) + '월'
      : fmt(harvA);
    var harvRange = perennial
      ? Math.round(crop.harvest[0] / 365) + '~' + Math.round(crop.harvest[1] / 365) + '년 후'
      : fmtShort(harvA) + ' ~ ' + fmtShort(harvB);

    var ddayNum = elapsed === 0 ? 'D-DAY' : (elapsed > 0 ? 'D+' + elapsed : 'D' + elapsed);
    var progress = perennial ? 0 : Math.max(0, Math.min(100, Math.round(elapsed / crop.harvest[0] * 100)));

    var html = '' +
      '<div class="dday-head">' +
        '<div class="dday-id">' +
          '<span class="dday-ic">' + glyph(crop) + '</span>' +
          '<div><h3>' + crop.name + '</h3>' +
          '<p>' + crop.kind + ' · 난이도 ' + diffLabel(crop.difficulty) + ' · ' + sunLabel(crop.sun) + '</p></div>' +
        '</div>' +
        '<div class="dday-count"><b>' + ddayNum + '</b><span>' + st.label + '</span></div>' +
      '</div>' +

      '<div class="timeline">' +
        '<div class="tl-step is-done">' +
          '<span class="tl-dot"></span><b>파종</b><em>' + fmtShort(sow) + (elapsed >= 0 ? ' (완료)' : ' 예정') + '</em>' +
        '</div>' +
        '<div class="tl-step ' + (elapsed >= crop.germ[1] ? 'is-done' : elapsed >= 0 ? 'is-now' : '') + '">' +
          '<span class="tl-dot"></span><b>싹트기</b><em>' + fmtShort(germA) + ' ~ ' + fmtShort(germB) + '</em>' +
        '</div>' +
        '<div class="tl-step ' + (elapsed >= crop.harvest[0] ? 'is-done' : elapsed > crop.germ[1] ? 'is-now' : '') + '">' +
          '<span class="tl-dot"></span><b>생육</b><em>' + (perennial ? '나무 키우기' : '잎·줄기') + '</em>' +
        '</div>' +
        '<div class="tl-step ' + (elapsed >= crop.harvest[1] ? 'is-done' : elapsed >= crop.harvest[0] ? 'is-now' : '') + '">' +
          '<span class="tl-dot"></span><b>첫 수확</b><em>' + harvRange + '</em>' +
        '</div>' +
      '</div>' +

      (perennial ? '' :
      '<div class="progress" aria-hidden="true"><span style="width:' + progress + '%"></span></div>') +

      '<div class="stat-grid">' +
        '<div class="stat">' +
          '<span class="stat-k"><svg class="ic"><use href="#i-sprig"/></svg>예상 싹트는 날</span>' +
          '<b>' + fmt(germA) + '</b>' +
          '<em>심고 ' + crop.germ[0] + '~' + crop.germ[1] + '일 뒤 (D+' + crop.germ[0] + '~' + crop.germ[1] + ')</em>' +
        '</div>' +
        '<div class="stat">' +
          '<span class="stat-k"><svg class="ic"><use href="#i-clock"/></svg>첫 수확 예정일</span>' +
          '<b>' + harvLabel + '</b>' +
          '<em>' + (perennial
            ? '심고 ' + Math.round(crop.harvest[0] / 365) + '~' + Math.round(crop.harvest[1] / 365) + '년 뒤 · ' + crop.harvestNote
            : '심고 ' + crop.harvest[0] + '~' + crop.harvest[1] + '일 뒤') + '</em>' +
        '</div>' +
        '<div class="stat stat--water ' + wCls + '">' +
          '<span class="stat-k"><svg class="ic"><use href="#i-drop"/></svg>물주기</span>' +
          '<b>' + intervalText(w.iv) + '</b>' +
          '<em>' + wTxt + '</em>' +
        '</div>' +
      '</div>' +

      '<div class="water-bar">' +
        '<div class="water-info">' +
          '<b>' + (w.last ? '마지막 물준 날 ' + fmt(w.last) : '아직 물주기 기록이 없어요') + '</b>' +
          '<span>' + (w.last ? '다음 예정 ' + fmt(w.next) : '심은 날 물을 주면 자동으로 계산돼요') + '</span>' +
        '</div>' +
        '<button type="button" class="btn btn-soft" id="waterBtn"><svg class="ic"><use href="#i-drop"/></svg>오늘 물 줬어요</button>' +
      '</div>' +

      '<div class="tips">' +
        '<div class="tip">' +
          '<span class="tip-k">병해충 주의</span>' +
          '<p><b>' + crop.pests + '</b> — 잎 뒷면을 자주 살펴보고, 발견하면 그 잎만 떼어 내세요.</p>' +
        '</div>' +
        '<div class="tip">' +
          '<span class="tip-k">초보 팁</span>' +
          '<p>' + crop.tip + '</p>' +
        '</div>' +
      '</div>' +

      '<div class="dday-foot">' +
        '<span class="sow-note">' + crop.sowNote + '</span>' +
        (saved ? '<span class="saved-chip"><svg class="ic"><use href="#i-check"/></svg>내 텃밭에 담김</span>' : '') +
      '</div>';

    var box = $('#dday');
    box.innerHTML = html;

    $('#waterBtn').addEventListener('click', function () {
      markWatered(crop.id, w);
    });

    var help = $('#sowHelp');
    var m = sow.getMonth() + 1;
    if (badDate || invalidRaw) help.textContent = '날짜를 확인해 주세요. 오늘 날짜로 계산했어요.';
    else if (crop.sow.indexOf(m) > -1) help.textContent = '지금(' + m + '월)이 ' + crop.name + josa(crop.name, '을', '를') + ' 심기 좋은 달이에요.';
    else if (canSow(crop, m, state.space)) help.textContent = m + '월은 노지 적기는 아니지만, 실내 창가·베란다에서는 심을 수 있어요.';
    else if (crop.sow.indexOf(m === 1 ? 12 : m - 1) > -1) help.textContent = m + '월은 조금 늦은 편이지만 실내 창가에서는 가능해요.';
    else if (crop.sow.indexOf(m === 12 ? 1 : m + 1) > -1) help.textContent = '다음 달부터 ' + crop.name + josa(crop.name, '을', '를') + ' 심기 좋아요. 미리 흙을 준비해 두세요.';
    else help.textContent = '지금은 ' + crop.name + '의 적기가 아니에요. 실내 재배나 모종으로 도전해 보세요.';
  }

  function markWatered(id, w) {
    var t = today();
    var entry = state.garden.filter(function (x) { return x.id === id; })[0];
    if (!entry) {
      entry = { id: id, sown: state.sown, lastWatered: ymd(t) };
      state.garden.push(entry);
    } else {
      entry.lastWatered = ymd(t);
    }
    save();
    renderDday();
    renderGarden();
    var next = addDays(t, Math.round(w.iv));
    toast('물 주기 기록 완료 · 다음은 ' + fmtShort(next) + '이에요');
  }

  /* ---------- 렌더: 내 텃밭 ---------- */
  function renderGarden() {
    var list = $('#gardenList');
    var items = state.garden.slice().reverse();
    $('#gardenCount').textContent = items.length;
    $('#gardenEmpty').style.display = items.length ? 'none' : 'block';

    list.innerHTML = items.map(function (g) {
      var crop = cropById(g.id);
      var sow = parseDate(g.sown);
      var elapsed = dayDiff(sow, today());
      var w = waterState(crop, g);
      var chip, cls;
      if (w.first) { chip = '물 주기 전'; cls = 'is-soon'; }
      else if (w.diff > 1) { chip = '물 D-' + w.diff; cls = 'is-ok'; }
      else if (w.diff === 1) { chip = '내일 물'; cls = 'is-soon'; }
      else if (w.diff === 0) { chip = '오늘 물'; cls = 'is-due'; }
      else { chip = Math.abs(w.diff) + '일 지남'; cls = 'is-due'; }
      return '<li class="garden-item">' +
        '<button type="button" class="garden-pick" data-crop="' + g.id + '">' +
          '<span class="garden-ic">' + glyph(crop) + '</span>' +
          '<span class="garden-body"><b>' + crop.name + '</b><em>' + fmtShort(sow) + ' 파종 · ' + (elapsed >= 0 ? 'D+' + elapsed : 'D' + elapsed) + '</em></span>' +
          '<span class="water-chip ' + cls + '">' + chip + '</span>' +
        '</button>' +
        '<button type="button" class="garden-del" data-del="' + g.id + '" aria-label="' + crop.name + ' 내 텃밭에서 빼기">×</button>' +
      '</li>';
    }).join('');

    $$('#gardenList .garden-pick').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectCrop(btn.getAttribute('data-crop'), false);
        $('#cropSelect').value = state.cropId;
        $('#dday').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
    $$('#gardenList .garden-del').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-del');
        state.garden = state.garden.filter(function (x) { return x.id !== id; });
        save();
        renderGarden();
        renderDday();
        toast('내 텃밭에서 뺐어요');
      });
    });
  }

  /* ---------- 렌더: 파종 달력 ---------- */
  function renderCalendar() {
    var nowM = today().getMonth() + 1;
    var head = '<thead><tr><th class="cal-title">작물</th>' +
      MONTH_SHORT.map(function (m, i) {
        return '<th class="' + (nowM === i + 1 ? 'is-now' : '') + '">' + (i + 1) + '</th>';
      }).join('') + '</tr></thead>';

    var body = '<tbody>' + D.crops.map(function (c) {
      return '<tr><th scope="row"><span class="cal-name">' + glyph(c) + c.name + '</span></th>' +
        MONTH_SHORT.map(function (m, i) {
          var mm = i + 1;
          var on = c.sow.indexOf(mm) > -1;
          return '<td class="' + (nowM === mm ? 'is-now' : '') + '">' +
            (on ? '<span class="dot ' + (nowM === mm ? 'dot--now' : '') + '" title="' + c.name + ' ' + mm + '월 파종"></span>' : '') +
            '</td>';
        }).join('') + '</tr>';
    }).join('') + '</tbody>';

    $('#calTable').innerHTML = head + body;

    // 좁은 화면에서는 표 대신 목록으로 보여 줍니다.
    var list = $('#calList');
    if (list) {
      list.innerHTML = D.crops.map(function (c) {
        var on = c.sow.indexOf(nowM) > -1;
        var months = c.sow.map(function (mm) {
          return '<span class="' + (mm === nowM ? 'is-now' : '') + '">' + mm + '</span>';
        }).join('<i>·</i>');
        return '<li class="cal-row' + (on ? ' is-now' : '') + '">' +
          '<span class="cal-row-name">' + c.name + '</span>' +
          '<span class="cal-row-months">' + months + '월</span>' +
        '</li>';
      }).join('');
    }

    // 모바일에서는 이번 달 열이 보이도록 표를 살짝 밀어 둡니다.
    var shell = $('.table-shell');
    var nowCol = $('#calTable thead th.is-now');
    if (shell && nowCol && shell.scrollWidth > shell.clientWidth + 8) {
      var nr = nowCol.getBoundingClientRect();
      var sr = shell.getBoundingClientRect();
      shell.scrollLeft += (nr.left - sr.left) - shell.clientWidth * 0.42;
    }
  }

  /* ---------- 렌더: 계절 ---------- */
  function renderSeasons() {
    var nowM = today().getMonth() + 1;
    $('#seasonGrid').innerHTML = D.seasons.map(function (s) {
      var active = s.months.indexOf(nowM) > -1;
      return '<article class="season-card' + (active ? ' is-active' : '') + '">' +
        '<div class="season-top"><h3>' + s.name + '</h3>' + (active ? '<span class="badge">지금 계절</span>' : '') + '</div>' +
        '<p class="season-crops">' + s.crops + '</p>' +
        '<ul class="recipe-list">' + s.recipes.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul>' +
        '<p class="season-note">' + s.note + '</p>' +
        '<a class="link-arrow" href="' + CFG.links.blog + '" target="_blank" rel="noopener noreferrer">' + s.name + ' 레시피 <svg class="ic"><use href="#i-arrow"/></svg></a>' +
      '</article>';
    }).join('');
  }

  /* ---------- 렌더: 책 · 용품 ---------- */
  function renderBooks() {
    $('#bookGrid').innerHTML = (CFG.books || []).map(function (b) {
      return '<article class="book-card">' +
        '<span class="book-tag">' + b.tag + '</span>' +
        '<h3>' + b.title + '</h3>' +
        '<p>' + b.desc + '</p>' +
        '<div class="book-foot">' +
          '<span class="price">' + (b.oldPrice ? '<s>' + b.oldPrice + '</s> ' : '') + b.price + '</span>' +
          '<a class="btn btn-dark btn-sm" href="' + b.url + '" target="_blank" rel="noopener noreferrer">' + b.cta + '</a>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderSupplies() {
    $('#supplyGrid').innerHTML = (CFG.supplies || []).map(function (s) {
      return '<a class="supply-card" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="supply-name">' + s.name + '</span>' +
        '<span class="supply-why">' + s.why + '</span>' +
        '<span class="link-arrow">쿠팡에서 보기 <svg class="ic"><use href="#i-arrow"/></svg></span>' +
      '</a>';
    }).join('');
  }

  /* ---------- 토스트 ---------- */
  var toastTimer = null;
  function toast(msg) {
    var el = $('#toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-show'); }, 2600);
  }

  /* ---------- 이벤트 ---------- */
  function bindStatic() {
    $('.seg[data-group="space"]').addEventListener('click', function (e) {
      var b = e.target.closest('.seg-btn');
      if (!b) return;
      state.space = b.getAttribute('data-value');
      save();
      renderSegments();
      renderCrops();
      renderDday();
    });
    $('.seg[data-group="sun"]').addEventListener('click', function (e) {
      var b = e.target.closest('.seg-btn');
      if (!b) return;
      state.sun = +b.getAttribute('data-value');
      save();
      renderSegments();
      renderCrops();
      renderDday();
    });
    $('.months[data-group="month"]').addEventListener('click', function (e) {
      var b = e.target.closest('.month-btn');
      if (!b) return;
      state.month = +b.getAttribute('data-value');
      save();
      renderSegments();
      renderCrops();
    });

    $('#cropSelect').addEventListener('change', function (e) {
      selectCrop(e.target.value, false);
    });
    $('#sowDate').addEventListener('change', function (e) {
      state.sown = e.target.value || ymd(today());
      var entry = state.garden.filter(function (x) { return x.id === state.cropId; })[0];
      if (entry) entry.sown = state.sown;
      save();
      renderDday();
      renderGarden();
    });

    $('#saveBtn').addEventListener('click', function () {
      var id = state.cropId;
      var entry = state.garden.filter(function (x) { return x.id === id; })[0];
      if (entry) {
        entry.sown = state.sown;
      } else {
        state.garden.push({ id: id, sown: state.sown, lastWatered: null });
      }
      save();
      renderGarden();
      renderDday();
      var nm = cropById(id).name;
      toast(nm + josa(nm, '을', '를') + ' 내 텃밭에 담았어요');
    });

    // 스크롤 등장 효과 (JS가 있을 때만 적용해, 없을 때도 내용은 그대로 보입니다)
    var revealEls = $$('.panel, .crop-grid, .grid-note, .calc-grid, .table-shell, .legend, .season-grid, .feature, .book-grid, .store-strip, .sub-head, .supply-grid, .faq');
    revealEls.forEach(function (el) { el.classList.add('reveal'); });
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      $$('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      $$('.reveal').forEach(function (el) { el.classList.add('is-in'); });
    }
  }

  /* ---------- 시작 ---------- */
  load();
  if (state.garden.length && !state.garden.some(function (g) { return g.id === state.cropId; })) {
    state.cropId = state.garden[state.garden.length - 1].id;
    state.sown = state.garden[state.garden.length - 1].sown;
  }
  renderSegments();
  renderCropSelect();
  renderCrops();
  $('#sowDate').value = state.sown;
  renderDday();
  renderGarden();
  renderCalendar();
  renderSeasons();
  renderBooks();
  renderSupplies();
  bindStatic();
})();
