/* ==========================================================================
   Danbi K-Culture Playground — shared page kit
   --------------------------------------------------------------------------
   One script tag on any corner of the playground:

     <script src="/ymi9595/playground/danbi-nav.js"></script>

   What it adds
   · A slim bar fixed to the bottom of every app page:
       Playground  ·  Next app  ·  Save  ·  Share  ·  Invite a friend
     (the bar stays off the playground home page, which has its own navigation)
   · "Invite a friend": asks for a name (optional), builds .../playground/?invite=Mia,
     and shares it with the Web Share sheet, or copies it on desktop.
   · A warm welcome banner on any page opened through an invite link.
   · A short toast: "Link copied!".
   · Save: one tap keeps this corner in the playground's "Saved" tab (the same
     localStorage key the home page reads).
   · Anonymous visit counts: GA4 (G-2LRGRLEWFW), skipped on local files and
     whenever the page already carries the tag.

   It needs no account and no server: everything lives in the link.
   Public helpers, for buttons on the playground home page:
       DanbiKit.invite()        open the invite sheet
       DanbiKit.share()         share / copy this page
       DanbiKit.toast('Saved')  small confirmation
       DanbiKit.apps            the app list used for "Next app"
   ========================================================================== */

(function () {
  'use strict';

  if (window.__danbiKitReady) return;
  window.__danbiKitReady = true;
  if (window.top !== window.self) return;

  /* ---------------------------------------------------------------- config */

  var APPS = [
    { slug: 'hanok-lantern',     name: 'Wish Before It Flies',   glyph: '등' },
    { slug: 'korea-vibe',        name: 'Jeong 4-in-1',           glyph: '정' },
    { slug: 'korean-fortune',    name: 'Korean Fortune Card',    glyph: '복' },
    { slug: 'modern-seoul',      name: 'Modern Seoul Playbook',  glyph: '서' },
    { slug: 'korea-5day-mission', name: 'Korea 5-Day Journey',   glyph: '길' },
    { slug: 'korean-mood',       name: 'Korean Mood Cards',      glyph: '달' },
    { slug: 'hangul-name',       name: 'Your Name in Hangul',    glyph: '이' },
    { slug: 'slow-typewriter',   name: 'Slow Seoul Typewriter',  glyph: '편' },
    { slug: 'seoul-palette',     name: 'Seoul Color Studio',     glyph: '색' },
    { slug: 'korean-coloring',   name: 'Korean Coloring Pages',  glyph: '밭' },
    { slug: 'sketch-studio',     name: 'K-Vibe Sketch Studio',   glyph: '붓' },
    { slug: 'cozy-desk',         name: 'Cozy Seoul Desk',        glyph: '비' },
    { slug: 'checklist-maker',   name: 'Cozy Checklist Maker',   glyph: '꿈' },
    { slug: 'hanbok-studio',     name: 'Dress Your Hanbok',      glyph: '옷' },
    { slug: 'hanbok-coloring',   name: 'Hanbok Coloring Studio', glyph: '칠' },
    { slug: 'kfood-pdf',         name: 'K-Food Recipe Cards',    glyph: '밥' }
  ];

  /* ------------------------------------------------------------ analytics */
  /* Google Analytics 4 — one measurement ID for the whole playground site,
     so every app that loads this kit is counted without extra tags.
     The playground home also carries this tag in its <head>; the check in
     trackVisit() keeps a single page from being counted twice. */
  var GA_ID = 'G-2LRGRLEWFW';

  function trackVisit() {
    if (window.__danbiTracked) return;
    window.__danbiTracked = true;

    var host = window.location.hostname;
    if (!host || host === 'localhost' || host === '127.0.0.1' || host === '[::1]' ||
        window.location.protocol === 'file:') return;                 /* local previews */
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;

    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function () { window.dataLayer.push(arguments); };
    }
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    (document.head || document.documentElement).appendChild(tag);
  }

  /* Favourites — the playground home reads the same key, so a corner saved
     from its bottom bar shows up under the "Saved" tab. */
  var FAV_KEY = 'danbi_favs_v1';

  function readFavs() {
    try {
      var list = JSON.parse(window.localStorage.getItem(FAV_KEY) || '[]');
      return Object.prototype.toString.call(list) === '[object Array]' ? list : [];
    } catch (err) { return []; }
  }

  function writeFavs(list) {
    try { window.localStorage.setItem(FAV_KEY, JSON.stringify(list)); } catch (err) {}
  }

  var SHARE_TEXT = 'Try this cute Korean culture playground! \u2728';
  var INVITE_LEAD = ' invited you to Danbi K-Culture Playground! Pick your hanbok & Korean fortune together \u2728';

  var pathMatch = window.location.pathname.match(/^\/([^\/]+)\//);
  var ROOT = pathMatch ? '/' + pathMatch[1] + '/' : '/';
  var HOME = ROOT + 'playground/';
  /* Optional override, used by the local demo page in this kit. */
  if (typeof window.DANBI_HOME === 'string' && window.DANBI_HOME) {
    HOME = window.DANBI_HOME;
    ROOT = HOME.replace(/playground\/?$/, '');
  }
  var slugPath = window.location.pathname.replace(ROOT, '').split('/')[0] || '';
  var IS_HOME = slugPath === 'playground';
  var here = null;
  for (var i = 0; i < APPS.length; i++) {
    if (APPS[i].slug === slugPath) { here = APPS[i]; break; }
  }
  var nextApp = null;
  if (here) {
    var at = APPS.indexOf(here);
    nextApp = APPS[(at + 1) % APPS.length];
  } else {
    nextApp = APPS[0];
  }

  /* ---------------------------------------------------------------- styles */

  var CSS = ''
    + '.dbn-bar{position:fixed;left:0;right:0;bottom:0;z-index:2147483100;display:flex;align-items:stretch;'
    + 'gap:2px;padding:6px 8px calc(6px + env(safe-area-inset-bottom,0px));'
    + 'background:rgba(255,252,246,.96);border-top:1px solid rgba(72,54,34,.14);'
    + 'box-shadow:0 -14px 34px -26px rgba(60,40,20,.55);backdrop-filter:blur(10px);'
    + '-webkit-backdrop-filter:blur(10px);'
    + "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Malgun Gothic',sans-serif;"
    + 'animation:dbn-rise .28s cubic-bezier(.22,.61,.36,1) both}'
    + '@keyframes dbn-rise{from{transform:translateY(100%)}to{transform:none}}'
    + '.dbn-tool{flex:1 1 0;min-width:0;min-height:48px;display:flex;flex-direction:column;'
    + 'align-items:center;justify-content:center;gap:2px;padding:6px 4px;border:0;border-radius:12px;'
    + 'background:transparent;color:#5E5447;text-decoration:none;cursor:pointer;'
    + "font:600 11px/1.15 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Malgun Gothic',sans-serif;"
    + 'letter-spacing:.005em;-webkit-tap-highlight-color:transparent}'
    + '.dbn-tool:active{background:#F2E9D8}'
    + '.dbn-tool:focus-visible{outline:2px solid #B4462F;outline-offset:2px}'
    + '.dbn-tool .dbn-ico{line-height:1;height:20px;display:flex;align-items:center}'
    + '.dbn-tool .dbn-ico svg{display:block}'
    + '.dbn-tool .dbn-txt{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
    + '@media (max-width:420px){.dbn-tool{font-size:10px;padding-left:2px;padding-right:2px}}'
    + '@media (max-width:345px){.dbn-tool{font-size:9px;letter-spacing:0}}'
    + '.dbn-tool.dbn-accent{color:#B4462F}'
    + '.dbn-tool.dbn-strong{color:#241E19}'
    + '.dbn-toast{position:fixed;left:50%;transform:translate(-50%,10px);bottom:calc(78px + env(safe-area-inset-bottom,0px));'
    + 'z-index:2147483200;background:#241E19;color:#FFF7EE;font:600 13px/1 -apple-system,BlinkMacSystemFont,'
    + "'Segoe UI',Roboto,sans-serif;padding:12px 18px;border-radius:999px;opacity:0;pointer-events:none;"
    + 'transition:opacity .2s ease,transform .2s ease;max-width:86vw;text-align:center}'
    + '.dbn-toast.is-in{opacity:1;transform:translate(-50%,0)}'
    + '.dbn-sheet[hidden]{display:none}'
    + '.dbn-sheet{position:fixed;inset:0;z-index:2147483300;display:flex;align-items:flex-end;justify-content:center;'
    + 'background:rgba(36,30,25,.42);padding:0;animation:dbn-fade .2s ease both}'
    + '@keyframes dbn-fade{from{opacity:0}to{opacity:1}}'
    + '.dbn-card{width:100%;max-width:460px;background:#FFFCF6;color:#241E19;'
    + 'border-radius:22px 22px 0 0;padding:22px 20px calc(20px + env(safe-area-inset-bottom,0px));'
    + "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Malgun Gothic',sans-serif;"
    + 'box-shadow:0 -20px 50px -30px rgba(60,40,20,.6);animation:dbn-sheet-rise .26s cubic-bezier(.22,.61,.36,1) both}'
    + '@keyframes dbn-sheet-rise{from{transform:translateY(30px);opacity:.6}to{transform:none;opacity:1}}'
    + '.dbn-eyebrow{margin:0 0 6px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#B4462F;font-weight:700}'
    + '.dbn-h{margin:0 0 6px;font-size:19px;font-weight:700;letter-spacing:-.01em}'
    + '.dbn-p{margin:0 0 16px;font-size:13.5px;line-height:1.55;color:#5E5447}'
    + '.dbn-label{display:block;font-size:12px;font-weight:600;color:#5E5447;margin:0 0 6px}'
    + '.dbn-input{width:100%;box-sizing:border-box;font:16px/1.3 -apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;'
    + 'color:#241E19;background:#FAF6EE;border:1px solid rgba(72,54,34,.2);border-radius:12px;padding:13px 14px;min-height:48px}'
    + '.dbn-input:focus{outline:none;border-color:#B4462F;box-shadow:0 0 0 3px rgba(180,70,47,.14)}'
    + '.dbn-preview{margin:12px 0 18px;padding:12px 14px;background:#F2E9D8;border-radius:12px;'
    + 'font-size:12.5px;line-height:1.5;color:#4A3B2F;word-break:break-word}'
    + '.dbn-row{display:flex;gap:8px;flex-wrap:wrap}'
    + '.dbn-btn{flex:1 1 auto;min-height:48px;appearance:none;cursor:pointer;border-radius:12px;padding:12px 16px;'
    + "border:1px solid rgba(72,54,34,.18);background:#FFFCF6;color:#241E19;font:600 14px/1.2 -apple-system,"
    + "BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}"
    + '.dbn-btn:active{transform:translateY(1px)}'
    + '.dbn-btn.primary{background:#B4462F;border-color:#B4462F;color:#FFF7EE}'
    + '.dbn-btn.ghost{border-color:transparent;color:#8B8071;font-weight:600}'
    + '.dbn-btn:focus-visible{outline:2px solid #B4462F;outline-offset:2px}'
    + '.dbn-welcome{position:fixed;left:0;right:0;top:0;z-index:2147483150;'
    + 'background:#FFFCF6;border-bottom:1px solid rgba(72,54,34,.14);'
    + 'box-shadow:0 16px 34px -30px rgba(60,40,20,.5);'
    + "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Malgun Gothic',sans-serif;"
    + 'animation:dbn-drop .3s cubic-bezier(.22,.61,.36,1) both}'
    + '@keyframes dbn-drop{from{transform:translateY(-100%)}to{transform:none}}'
    + '.dbn-welcome-in{max-width:760px;margin:0 auto;padding:12px 14px;display:flex;align-items:center;gap:10px}'
    + '.dbn-welcome-txt{flex:1 1 auto;min-width:0;font-size:13px;line-height:1.45;color:#241E19}'
    + '.dbn-welcome-txt b{font-weight:700}'
    + '.dbn-welcome-txt span{display:block;color:#5E5447;font-size:12px;margin-top:2px}'
    + '.dbn-welcome-go{flex:0 0 auto;display:inline-flex;align-items:center;min-height:44px;padding:0 14px;'
    + 'border-radius:999px;background:#B4462F;color:#FFF7EE;text-decoration:none;font-size:12.5px;font-weight:600}'
    + '.dbn-welcome-x{flex:0 0 auto;width:44px;height:44px;border:0;background:transparent;color:#8B8071;'
    + 'font-size:20px;line-height:1;border-radius:50%;cursor:pointer}'
    + '@media (min-width:560px){.dbn-sheet{align-items:center;padding:24px}'
    + '.dbn-card{border-radius:22px}}'
    + '@media (prefers-reduced-motion:reduce){.dbn-bar,.dbn-card,.dbn-sheet,.dbn-welcome{animation:none}'
    + '.dbn-toast{transition:none}}';

  var ICON = {
    back: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5"/></svg>',
    next: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5"/></svg>',
    link: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.8 13.2a3.3 3.3 0 0 0 4.7 0l2.4-2.4a3.3 3.3 0 0 0-4.7-4.7l-1.1 1.1"/><path d="M13.2 10.8a3.3 3.3 0 0 0-4.7 0l-2.4 2.4a3.3 3.3 0 0 0 4.7 4.7l1.1-1.1"/></svg>',
    gift: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.6" y="8.6" width="16.8" height="11.8" rx="2"/><path d="M3.6 12.6h16.8M12 8.6v11.8"/><path d="M12 8.6S11 4.4 8.9 4.4a2.1 2.1 0 0 0 0 4.2M12 8.6s1-4.2 3.1-4.2a2.1 2.1 0 0 1 0 4.2"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 4.4 2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 16.38l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76z"/></svg>',
    starOn: '<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="m12 4.4 2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 16.38l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76z"/></svg>'
  };

  function injectStyles() {
    if (document.getElementById('dbn-styles')) return;
    var style = document.createElement('style');
    style.id = 'dbn-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  /* ----------------------------------------------------------------- utils */

  function toast(message) {
    var el = document.getElementById('dbnToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'dbnToast';
      el.className = 'dbn-toast';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('is-in');
    window.clearTimeout(toast._t);
    toast._t = window.setTimeout(function () { el.classList.remove('is-in'); }, 2200);
  }

  function cleanName(value) {
    if (!value) return '';
    var name = String(value).replace(/[<>"'`]/g, '').replace(/[\u0000-\u001f]/g, '').trim();
    name = name.replace(/\s+/g, ' ');
    return name.slice(0, 24);
  }

  function copyText(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(legacyCopy(text)); });
      return;
    }
    done(legacyCopy(text));
  }

  function legacyCopy(text) {
    try {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(area);
      return ok;
    } catch (err) {
      return false;
    }
  }

  function shareOrCopy(data, copiedMessage) {
    if (navigator.share) {
      navigator.share(data).catch(function (err) {
        if (err && err.name === 'AbortError') return;
        copyText(data.url + (data.text ? ' ' + data.text : ''), function () {
          toast(copiedMessage || 'Link copied!');
        });
      });
      return;
    }
    copyText(data.url, function (ok) {
      toast(ok ? (copiedMessage || 'Link copied!') : 'Copy this link: ' + data.url);
    });
  }

  /* ------------------------------------------------------------ invite sheet */

  var sheet = null;

  function buildSheet() {
    if (sheet) return sheet;
    sheet = document.createElement('div');
    sheet.className = 'dbn-sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-labelledby', 'dbnSheetTitle');
    sheet.hidden = true;
    sheet.innerHTML = ''
      + '<div class="dbn-card">'
      + '  <p class="dbn-eyebrow">Play together</p>'
      + '  <h2 class="dbn-h" id="dbnSheetTitle">Invite a friend to Danbi</h2>'
      + '  <p class="dbn-p">Add your name and the link will greet your friend by it. Both of you can then dress a hanbok, draw a fortune card, or walk the same five-day journey and compare.</p>'
      + '  <label class="dbn-label" for="dbnName">Your name (optional)</label>'
      + '  <input class="dbn-input" id="dbnName" type="text" inputmode="text" autocomplete="nickname" maxlength="24" placeholder="Mia">'
      + '  <p class="dbn-preview" id="dbnPreview"></p>'
      + '  <div class="dbn-row">'
      + '    <button class="dbn-btn primary" type="button" data-dbn-send>Share the link</button>'
      + '    <button class="dbn-btn" type="button" data-dbn-copy>Copy link</button>'
      + '  </div>'
      + '  <div class="dbn-row" style="margin-top:8px">'
      + '    <button class="dbn-btn ghost" type="button" data-dbn-cancel>Not now</button>'
      + '  </div>'
      + '</div>';
    document.body.appendChild(sheet);

    var input = sheet.querySelector('#dbnName');
    var preview = sheet.querySelector('#dbnPreview');

    function inviteUrl() {
      var name = cleanName(input.value);
      return HOME + (name ? '?invite=' + encodeURIComponent(name) : '');
    }

    function renderPreview() {
      var name = cleanName(input.value);
      var lead = name ? name + INVITE_LEAD : 'Join me at Danbi K-Culture Playground \u2728';
      preview.textContent = '\u201c' + lead + '\u201d  ' + inviteUrl();
    }

    input.addEventListener('input', renderPreview);
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        send();
      }
    });

    function send() {
      var name = cleanName(input.value);
      var url = inviteUrl();
      var text = name ? name + INVITE_LEAD : 'Join me at Danbi K-Culture Playground \u2728';
      shareOrCopy({ title: 'Danbi K-Culture Playground', text: text, url: url }, 'Invite link copied!');
      hideSheet();
    }

    sheet.querySelector('[data-dbn-send]').addEventListener('click', send);
    sheet.querySelector('[data-dbn-copy]').addEventListener('click', function () {
      var name = cleanName(input.value);
      var url = inviteUrl();
      copyText(url, function (ok) {
        toast(ok ? 'Invite link copied!' : url);
      });
    });
    sheet.querySelector('[data-dbn-cancel]').addEventListener('click', function () { hideSheet(); });
    sheet.addEventListener('click', function (event) {
      if (event.target === sheet) hideSheet();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && sheet && !sheet.hidden) hideSheet();
    });

    sheet._render = renderPreview;
    return sheet;
  }

  function openInvite() {
    var el = buildSheet();
    var input = el.querySelector('#dbnName');
    var stored = '';
    try { stored = window.localStorage.getItem('danbi.myName') || ''; } catch (err) {}
    if (stored && !input.value) input.value = stored;
    el._render();
    el.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    window.setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (err) {} }, 60);
    input.addEventListener('change', function () {
      try { window.localStorage.setItem('danbi.myName', cleanName(input.value)); } catch (err) {}
    });
  }

  function hideSheet() {
    if (!sheet || sheet.hidden) return;
    sheet.hidden = true;
    document.documentElement.style.overflow = '';
  }

  /* ------------------------------------------------------------ welcome */

  function inviteName() {
    var params = new URLSearchParams(window.location.search);
    if (!params.has('invite')) return null;
    return cleanName(params.get('invite')) || '';
  }

  function showWelcome(name) {
    if (document.querySelector('.dbn-welcome')) return;
    var bar = document.createElement('div');
    bar.className = 'dbn-welcome';
    bar.setAttribute('role', 'status');
    var inner = document.createElement('div');
    inner.className = 'dbn-welcome-in';

    var txt = document.createElement('p');
    txt.className = 'dbn-welcome-txt';
    var strong = document.createElement('b');
    strong.textContent = name ? '\u2728 ' + name + ' invited you to play together!' : '\u2728 You were invited to play together!';
    var sub = document.createElement('span');
    sub.textContent = 'Try a couple of hanbok or compare fortune cards.';
    txt.appendChild(strong);
    txt.appendChild(sub);

    var go = document.createElement('a');
    go.className = 'dbn-welcome-go';
    go.href = ROOT + 'hanbok-studio/';
    go.textContent = 'Start';

    var close = document.createElement('button');
    close.className = 'dbn-welcome-x';
    close.type = 'button';
    close.setAttribute('aria-label', 'Dismiss');
    close.innerHTML = '&times;';
    close.addEventListener('click', function () {
      bar.parentNode && bar.parentNode.removeChild(bar);
      document.documentElement.style.setProperty('--dbn-welcome', '0px');
      document.body.style.paddingTop = '';
      try { window.sessionStorage.setItem('danbi.invite.seen', '1'); } catch (err) {}
    });

    inner.appendChild(txt);
    inner.appendChild(go);
    inner.appendChild(close);
    bar.appendChild(inner);
    document.body.appendChild(bar);

    var height = bar.offsetHeight || 64;
    var current = parseFloat(window.getComputedStyle(document.body).paddingTop) || 0;
    document.body.style.paddingTop = (current + height) + 'px';
  }

  /* ------------------------------------------------------- bottom-UI compat */

  /* Some corners keep controls of their own near the bottom of the screen
     (a toast, the checklist action bar, the five-day demo bar). Lift those
     above this bar instead of leaving them hidden behind it. Each element's
     own offset is remembered once, so a rotation only shifts it again. */
  var BOTTOM_UI = ['.toast', '#toast', '.mobilebar', '.demobar'];

  function liftBottomUI(height) {
    for (var s = 0; s < BOTTOM_UI.length; s++) {
      var nodes = document.querySelectorAll(BOTTOM_UI[s]);
      for (var n = 0; n < nodes.length; n++) {
        var el = nodes[n];
        var base = parseFloat(el.getAttribute('data-dbn-base'));
        if (isNaN(base)) {
          var style = window.getComputedStyle(el);
          if (style.position !== 'fixed') continue;
          base = parseFloat(style.bottom);
          if (isNaN(base)) continue;
          el.setAttribute('data-dbn-base', String(base));
        }
        el.style.bottom = (base >= height ? base : base + height) + 'px';
      }
    }
  }

  /* ------------------------------------------------------------------- bar */

  function buildBar() {
    var bar = document.createElement('nav');
    bar.className = 'dbn-bar';
    bar.setAttribute('aria-label', 'Danbi playground');

    var home = document.createElement('a');
    home.className = 'dbn-tool dbn-strong';
    home.href = HOME;
    home.innerHTML = '<span class="dbn-ico">' + ICON.back + '</span><span class="dbn-txt">Playground</span>';

    var next = document.createElement('a');
    next.className = 'dbn-tool';
    next.href = ROOT + nextApp.slug + (nextApp.slug === 'kfood-pdf' ? '/en/' : '/');
    next.title = nextApp.name;
    next.innerHTML = '<span class="dbn-ico">' + ICON.next + '</span><span class="dbn-txt">Next app</span>';

    var share = document.createElement('button');
    share.className = 'dbn-tool';
    share.type = 'button';
    share.innerHTML = '<span class="dbn-ico">' + ICON.link + '</span><span class="dbn-txt">Share</span>';
    share.addEventListener('click', function () { sharePage(); });

    var save = document.createElement('button');
    save.className = 'dbn-tool';
    save.type = 'button';
    var slug = here ? here.slug : '';
    var paintSave = function () {
      var on = !!slug && readFavs().indexOf(slug) !== -1;
      var label = on ? 'Saved' : 'Save';
      save.innerHTML = '<span class="dbn-ico">' + (on ? ICON.starOn : ICON.star) + '</span><span class="dbn-txt">' + label + '</span>';
      save.setAttribute('aria-pressed', on ? 'true' : 'false');
      save.setAttribute('aria-label', (on ? 'Remove this corner from favourites' : 'Save this corner to favourites'));
    };
    save.addEventListener('click', function () {
      if (!slug) return;
      var list = readFavs();
      var at = list.indexOf(slug);
      if (at === -1) { list.push(slug); writeFavs(list); paintSave(); toast('Saved to favourites'); return; }
      list.splice(at, 1);
      writeFavs(list);
      paintSave();
      toast('Removed from favourites');
    });
    paintSave();

    var invite = document.createElement('button');
    invite.className = 'dbn-tool dbn-accent';
    invite.type = 'button';
    invite.innerHTML = '<span class="dbn-ico">' + ICON.gift + '</span><span class="dbn-txt">Invite</span>';
    invite.addEventListener('click', function () { openInvite(); });

    bar.appendChild(home);
    bar.appendChild(next);
    bar.appendChild(save);
    bar.appendChild(share);
    bar.appendChild(invite);
    document.body.appendChild(bar);

    var space = bar.offsetHeight || 62;
    var current = parseFloat(window.getComputedStyle(document.body).paddingBottom) || 0;
    document.body.style.paddingBottom = (current + space + 10) + 'px';
    liftBottomUI(space);

    var onResize = function () {
      var h = bar.offsetHeight || 62;
      document.body.style.paddingBottom = (current + h + 10) + 'px';
      liftBottomUI(h);
    };
    window.addEventListener('orientationchange', onResize);
  }

  /* ---------------------------------------------------------------- public */

  function sharePage() {
    shareOrCopy({
      title: 'Danbi K-Culture Playground',
      text: SHARE_TEXT,
      url: window.location.href
    }, 'Link copied!');
  }

  window.DanbiKit = {
    apps: APPS,
    home: HOME,
    root: ROOT,
    invite: openInvite,
    share: sharePage,
    toast: toast
  };

  function start() {
    trackVisit();
    injectStyles();

    if (!IS_HOME) buildBar();

    var invited = inviteName();
    var seen = false;
    try { seen = window.sessionStorage.getItem('danbi.invite.seen') === '1'; } catch (err) {}
    if (invited !== null && !seen) showWelcome(invited);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
