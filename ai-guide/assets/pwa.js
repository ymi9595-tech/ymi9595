/* ==========================================================================
   단비랩 AI 가이드 — 홈 화면에 추가 (앱처럼 설치)
   · 안드로이드 크롬: beforeinstallprompt 가 있으면 브라우저 기본 설치 창을 띄웁니다.
   · 그 밖(아이폰 사파리·삼성 인터넷·카카오톡 안 브라우저): 손으로 추가하는 방법을 안내합니다.
   언어는 <html lang> 을 따라가므로 KR/EN 전환과 저절로 맞습니다.
   ========================================================================== */
(function () {
  'use strict';

  var NAME = { ko: '단비랩 AI 가이드', en: 'DanbiLab AI Guide' };

  var TXT = {
    ko: {
      btn: '홈 화면에 추가', btnShort: '홈 화면',
      kicker: '홈 화면에 추가',
      sub: '앱처럼 바로 열립니다 · 무료 · 회원가입 없음',
      lead: '바탕화면에 아이콘을 두면 다음부터는 브라우저를 거치지 않고 이 가이드가 바로 열립니다. 프롬프트 복사도 그대로 됩니다.',
      install: '지금 바로 추가',
      now: '이 기기',
      s_android_t: '안드로이드 · 크롬',
      s_android_d: '오른쪽 위 <i class="kbd">⋮</i> 메뉴 → <b>홈 화면에 추가</b> (또는 앱 설치)',
      s_samsung_t: '안드로이드 · 삼성 인터넷',
      s_samsung_d: '아래 <i class="kbd">≡</i> 메뉴 → 현재 페이지 추가 → 홈 화면',
      s_ios_t: '아이폰 · 사파리',
      s_ios_d: '아래 공유 버튼 <i class="kbd">□↑</i> → <b>홈 화면에 추가</b>',
      s_inapp_t: '카카오톡·인스타그램 안에서 열렸다면',
      s_inapp_d: '오른쪽 위 <i class="kbd">⋯</i> → 다른 브라우저로 열기 → 위 방법대로 추가',
      note: '아이콘 그림과 이름은 위와 같습니다. 지우고 싶을 때는 아이콘을 길게 눌러 삭제하면 됩니다.',
      done: '홈 화면에 추가했습니다',
      already: '지금 앱처럼 열려 있어요',
      fail: '브라우저 메뉴에서 직접 추가해 주세요',
      close: '닫기'
    },
    en: {
      btn: 'Add to Home', btnShort: 'Add',
      kicker: 'Add to home screen',
      sub: 'Opens like an app · free · no sign-up',
      lead: 'Keep the icon on your home screen and this guide opens straight away, with no address bar — copy-ready prompts included.',
      install: 'Add it now',
      now: 'This device',
      s_android_t: 'Android · Chrome',
      s_android_d: 'Top-right <i class="kbd">⋮</i> menu → <b>Add to Home screen</b> (or Install app)',
      s_samsung_t: 'Android · Samsung Internet',
      s_samsung_d: '<i class="kbd">≡</i> menu at the bottom → Add page to → Home screen',
      s_ios_t: 'iPhone · Safari',
      s_ios_d: 'Share button <i class="kbd">□↑</i> at the bottom → <b>Add to Home Screen</b>',
      s_inapp_t: 'Opened inside KakaoTalk or Instagram?',
      s_inapp_d: 'Top-right <i class="kbd">⋯</i> → Open in browser, then follow the steps above',
      note: 'The icon and name are the ones shown above. To remove it later, long-press the icon and delete it.',
      done: 'Added to your home screen',
      already: 'Already running like an app',
      fail: 'Please add it from your browser menu',
      close: 'Close'
    }
  };

  var btn = document.getElementById('pwaBtn');
  var modal = document.getElementById('pwaModal');
  if (!btn || !modal) return;

  var deferred = window.__pwaInstall || null;
  var lastFocus = null;

  function lang() {
    var l = String(document.documentElement.lang || 'ko').toLowerCase();
    if (l === 'en') return 'en';
    if (l.indexOf('ja') === 0) return 'jp';
    if (l.indexOf('zh') === 0) return 'cn';
    return 'ko';
  }
  /* JP · CN 문구는 i18n-jp-cn.js 의 I18N 에서 가져오고, 없으면 영어로 대신합니다. */
  function t() {
    var l = lang();
    var extra = (window.I18N && I18N[l] && I18N[l].pwa) || null;
    return extra || TXT[l] || TXT.en;
  }
  function brand() {
    var l = lang();
    return (window.UI && UI[l] && UI[l].brand) || NAME[l] || NAME.en;
  }

  function media(q) { return !!(window.matchMedia && window.matchMedia(q).matches); }
  function isStandalone() {
    return media('(display-mode: standalone)') || media('(display-mode: fullscreen)') ||
      window.navigator.standalone === true;
  }

  function platform() {
    var ua = navigator.userAgent || '';
    if (/KAKAOTALK|Instagram|FBAN|FBAV|Line\/|NAVER\(inapp|Snapchat/i.test(ua)) return 'inapp';
    if (/iP(hone|ad|od)/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'ios';
    if (/SamsungBrowser/.test(ua)) return 'samsung';
    if (/Android/.test(ua)) return 'android';
    return 'desktop';
  }

  /* ------------------------------------------------------------- toast */
  function toast(msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('is-in', 'on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove('is-in', 'on'); }, 2400);
  }

  /* ------------------------------------------------------------- label */
  function paintButton() {
    var x = t();
    btn.querySelector('.pwa-tx-l').textContent = x.btn;
    btn.querySelector('.pwa-tx-s').textContent = x.btnShort;
    btn.setAttribute('aria-label', x.btn + ' — ' + brand());
    btn.setAttribute('aria-haspopup', 'dialog');
  }

  /* ------------------------------------------------------------- modal */
  function stepsHTML() {
    var x = t();
    var os = platform();
    var order = ['android', 'samsung', 'ios', 'inapp'];
    if (os === 'ios') order = ['ios', 'android', 'samsung', 'inapp'];
    else if (os === 'samsung') order = ['samsung', 'android', 'ios', 'inapp'];
    else if (os === 'inapp') order = ['inapp', 'android', 'ios', 'samsung'];
    return order.map(function (key) {
      return '<li class="pwa-step' + (key === os ? ' is-you' : '') + '">' +
        '<span class="pwa-step-k">' + (key === os ? '<em>' + x.now + '</em>' : '') +
        '<b>' + x['s_' + key + '_t'] + '</b>' +
        '<span>' + x['s_' + key + '_d'] + '</span></span></li>';
    }).join('');
  }

  function paintModal() {
    var x = t();
    modal.innerHTML =
      '<button class="pwa-back" type="button" data-pwa-close tabindex="-1" aria-hidden="true"></button>' +
      '<div class="pwa-sheet" role="document">' +
        '<button class="pwa-x" type="button" data-pwa-close aria-label="' + x.close + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="pwa-head">' +
          '<img class="pwa-ic" src="./icons/icon-192.png" width="64" height="64" alt="">' +
          '<div class="pwa-hd-tx">' +
            '<p class="pwa-kicker">' + x.kicker + '</p>' +
            '<h2 id="pwaTitle">' + brand() + '</h2>' +
            '<p class="pwa-sub">' + x.sub + '</p>' +
          '</div>' +
        '</div>' +
        '<p class="pwa-lead">' + x.lead + '</p>' +
        (deferred && !isStandalone() ? '<button class="pwa-now" type="button" data-pwa-install>' + x.install + '</button>' : '') +
        '<ul class="pwa-steps">' + stepsHTML() + '</ul>' +
        '<p class="pwa-note">' + x.note + '</p>' +
      '</div>';
  }

  function openModal() {
    lastFocus = document.activeElement;
    paintModal();
    modal.hidden = false;
    document.body.classList.add('pwa-lock');
    var x = modal.querySelector('.pwa-x');
    if (x) x.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('pwa-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function promptInstall() {
    var ev = deferred;
    deferred = null;
    window.__pwaInstall = null;
    if (!ev || typeof ev.prompt !== 'function') { openModal(); return; }
    try {
      ev.prompt();
      var choice = ev.userChoice;
      if (choice && choice.then) {
        choice.then(function (c) {
          if (c && c.outcome === 'accepted') { closeModal(); toast(t().done); }
          else { openModal(); }
        }, function () { openModal(); });
      }
    } catch (e) { openModal(); }
  }

  function paintModalOnAir() {
    if (!modal.hidden) paintModal();
  }

  /* ------------------------------------------------------------- events */
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    window.__pwaInstall = e;
    paintModalOnAir();
  });

  window.addEventListener('appinstalled', function () {
    deferred = null;
    window.__pwaInstall = null;
    closeModal();
    toast(t().done);
  });

  btn.addEventListener('click', function () {
    if (isStandalone()) { toast(t().already); return; }
    if (deferred) { promptInstall(); return; }
    openModal();
  });

  modal.addEventListener('click', function (e) {
    if (e.target.closest('[data-pwa-close]')) { closeModal(); return; }
    if (e.target.closest('[data-pwa-install]')) { promptInstall(); return; }
  });

  document.addEventListener('keydown', function (e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key !== 'Tab') return;
    var items = Array.prototype.slice.call(
      modal.querySelectorAll('button:not([tabindex="-1"]), a[href], input, [tabindex]:not([tabindex="-1"])'));
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* KR/EN 전환을 따라갑니다 (앱의 언어 버튼이 <html lang> 을 바꿉니다). */
  var mo = window.MutationObserver ? new MutationObserver(function () {
    paintButton();
    if (!modal.hidden) paintModal();
  }) : null;
  if (mo) mo.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  paintButton();

  /* 서비스 워커 — 홈 화면 설치 조건을 채우는 통과 전용 워커 (캐시 없음) */
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () {});
    });
  }
})();
