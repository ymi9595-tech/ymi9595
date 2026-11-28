/* ==========================================================================
   단비 놀이터 — 홈 화면에 추가 (앱처럼 설치)
   · 안드로이드 크롬: beforeinstallprompt 가 있으면 브라우저 기본 설치 창을 띄웁니다.
   · 그 밖(아이폰 사파리·삼성 인터넷·카카오톡 안 브라우저): 손으로 추가하는 방법을 안내합니다.
   ========================================================================== */
(function () {
  'use strict';

  var NAME = 'Danbi Playground';

  var T = {
    btn: 'Add to Home', btnShort: 'Add',
    kicker: 'Add to home screen',
    sub: '단비 놀이터 · opens like an app · free',
    lead: 'Keep the icon on your home screen and the playground opens straight away — no address bar, no sign-up, still free.',
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
  };

  var btn = document.getElementById('pwaBtn');
  var modal = document.getElementById('pwaModal');
  if (!btn || !modal) return;

  var deferred = window.__pwaInstall || null;
  var lastFocus = null;

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
    if (window.DanbiKit && window.DanbiKit.toast) { window.DanbiKit.toast(msg); return; }
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('is-in', 'on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove('is-in', 'on'); }, 2400);
  }

  /* ------------------------------------------------------------- modal */
  function stepsHTML() {
    var os = platform();
    var order = ['android', 'samsung', 'ios', 'inapp'];
    if (os === 'ios') order = ['ios', 'android', 'samsung', 'inapp'];
    else if (os === 'samsung') order = ['samsung', 'android', 'ios', 'inapp'];
    else if (os === 'inapp') order = ['inapp', 'android', 'ios', 'samsung'];
    return order.map(function (key) {
      return '<li class="pwa-step' + (key === os ? ' is-you' : '') + '">' +
        '<span class="pwa-step-k">' + (key === os ? '<em>' + T.now + '</em>' : '') +
        '<b>' + T['s_' + key + '_t'] + '</b>' +
        '<span>' + T['s_' + key + '_d'] + '</span></span></li>';
    }).join('');
  }

  function paintModal() {
    modal.innerHTML =
      '<button class="pwa-back" type="button" data-pwa-close tabindex="-1" aria-hidden="true"></button>' +
      '<div class="pwa-sheet" role="document">' +
        '<button class="pwa-x" type="button" data-pwa-close aria-label="' + T.close + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="pwa-head">' +
          '<img class="pwa-ic" src="./icon-192.png" width="64" height="64" alt="">' +
          '<div class="pwa-hd-tx">' +
            '<p class="pwa-kicker">' + T.kicker + '</p>' +
            '<h2 id="pwaTitle">' + NAME + '</h2>' +
            '<p class="pwa-sub">' + T.sub + '</p>' +
          '</div>' +
        '</div>' +
        '<p class="pwa-lead">' + T.lead + '</p>' +
        (deferred && !isStandalone() ? '<button class="pwa-now" type="button" data-pwa-install>' + T.install + '</button>' : '') +
        '<ul class="pwa-steps">' + stepsHTML() + '</ul>' +
        '<p class="pwa-note">' + T.note + '</p>' +
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
          if (c && c.outcome === 'accepted') { closeModal(); toast(T.done); }
          else { openModal(); }
        }, function () { openModal(); });
      }
    } catch (e) { openModal(); }
  }

  /* ------------------------------------------------------------- events */
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    window.__pwaInstall = e;
    if (!modal.hidden) paintModal();
  });

  window.addEventListener('appinstalled', function () {
    deferred = null;
    window.__pwaInstall = null;
    closeModal();
    toast(T.done);
  });

  btn.addEventListener('click', function () {
    if (isStandalone()) { toast(T.already); return; }
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

  btn.setAttribute('aria-label', T.btn + ' — ' + NAME);
  btn.setAttribute('aria-haspopup', 'dialog');

  /* 서비스 워커 — 홈 화면 설치 조건을 채우는 통과 전용 워커 (캐시 없음) */
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () {});
    });
  }
})();
