/* ==========================================================================
   단비랩 · K-가이드 — 세 사이트 공통 연결 띠 (DanbiLab · K-Guide)
   --------------------------------------------------------------------------
   ai-guide / korea-travel / playground 세 사이트의 하단에 같은 모양의
   연결 띠를 그립니다. 각 페이지에 아래 한 줄을 두고,

     <div id="danbi-guide-bar" data-base="../" data-lang="ko"></div>
     <script src="../danbi-guide-bar.js?v=1" defer></script>

   언어가 바뀌면 그 페이지의 앱이 DanbiGuide.render('en') 을 다시 불러 줍니다.
   (놀이터는 영어가 기본이고 한글 부제를 함께 보여 줍니다.)

   · 무료·무가입·무광고 철학 한 줄
   · 세 사이트를 바로 오가는 링크 세 개 (지금 보고 있는 곳 표시)
   · KR/EN 연동: 링크를 누를 때 두 사이트의 언어 저장값을 같이 맞춰,
     영어로 보던 사람이 넘어가도 영어로 열립니다.
   ========================================================================== */
(function () {
  'use strict';

  if (window.DanbiGuide) return;

  var SITES = [
    {
      key: 'ai-guide', folder: 'ai-guide/', emoji: '🤖',
      ko: 'AI 가이드', en: 'AI Guide',
      koSub: 'AI 도구 8종 · 프롬프트', enSub: '8 tools · prompts'
    },
    {
      key: 'korea-travel', folder: 'korea-travel/', emoji: '🧭',
      ko: '당장 가볼까? 여행', en: 'Day-trip Korea',
      koSub: '한국 하루 코스 22가지', enSub: '22 one-day courses'
    },
    {
      key: 'playground', folder: 'playground/', emoji: '🎡',
      ko: '단비 놀이터', en: 'Playground',
      koSub: '한국 문화 16코너', enSub: '16 Korean corners'
    }
  ];

  var COPY = {
    ko: {
      kicker: '단비랩 · K-가이드',
      lead: '세 사이트를 한 줄로 이어 두었습니다. 보고 싶은 곳을 누르면 바로 넘어갑니다.',
      philosophy: '무료 · 회원가입 없음 · 광고 없음 — 단비랩이 만든 세 개의 무료 사이트',
      here: '지금 보는 곳',
      langNote: 'Korean'
    },
    en: {
      kicker: 'DanbiLab · K-Guide',
      lead: 'Three free sites, one line apart — press the one you want and you are there.',
      philosophy: 'Free · no sign-up · no ads — three free sites made by DanbiLab',
      here: 'You are here',
      langNote: 'English'
    }
  };

  var CSS = ''
    + '.dlg-bar{margin:44px auto 0;max-width:1080px;padding:0 2px}'
    + '.dlg-box{background:linear-gradient(160deg,#FFF6EC 0%,#FDF1F3 52%,#EEF7F2 100%);'
    + 'border:1px solid #F2E3D6;border-radius:20px;padding:18px clamp(14px,2.4vw,22px) 16px;'
    + "font-family:Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR','Segoe UI',sans-serif;"
    + 'color:#3B3540;box-shadow:0 14px 34px -30px rgba(90,63,48,.55)}'
    + '.dlg-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin:0 0 2px}'
    + '.dlg-kicker{margin:0;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#C4653F}'
    + '.dlg-lead{margin:0;font-size:12px;color:#7A7180;line-height:1.6}'
    + '.dlg-links{list-style:none;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0 0;padding:0}'
    + '.dlg-links a{display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.86);border:1px solid #F1E4D9;'
    + 'border-radius:14px;padding:10px 12px;text-decoration:none;color:#3B3540;transition:transform .14s,box-shadow .14s,background .14s;min-width:0}'
    + '.dlg-links a:hover{transform:translateY(-2px);box-shadow:0 12px 24px -20px rgba(90,63,48,.75);background:#fff}'
    + '.dlg-links a:focus-visible{outline:2px solid #C4653F;outline-offset:2px}'
    + '.dlg-em{font-size:19px;line-height:1;flex:none}'
    + '.dlg-tx{display:flex;flex-direction:column;min-width:0}'
    + '.dlg-tx b{font-size:13px;font-weight:800;letter-spacing:-.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
    + '.dlg-tx small{font-size:10.5px;color:#8B8391;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
    + '.dlg-links a[aria-current="page"]{background:#FFF2E6;border-color:#EFC9AE}'
    + '.dlg-links a[aria-current="page"] .dlg-tx b{color:#B4512C}'
    + '.dlg-here{display:none;font-size:9px;font-weight:800;letter-spacing:.06em;color:#B4512C;text-transform:uppercase}'
    + '.dlg-links a[aria-current="page"] .dlg-here{display:block}'
    + '.dlg-foot{margin:10px 0 0;font-size:11px;color:#8B8391;line-height:1.6}'
    + '@media (max-width:760px){.dlg-bar{margin-top:34px}.dlg-box{padding:15px 13px 14px;border-radius:18px}'
    + '.dlg-links{gap:6px}.dlg-links a{padding:9px 8px;gap:7px;border-radius:12px}'
    + '.dlg-em{font-size:16px}.dlg-tx b{font-size:11.8px}.dlg-tx small{display:none}}'
    + '@media (max-width:430px){.dlg-links{grid-template-columns:1fr}.dlg-lead{font-size:11.5px}'
    + '.dlg-links a{padding:10px 12px}.dlg-tx small{display:block}}';

  function inject() {
    if (document.getElementById('dlg-styles')) return;
    var style = document.createElement('style');
    style.id = 'dlg-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function baseOf(el) {
    var b = (el && el.getAttribute('data-base')) || '../';
    if (b.charAt(b.length - 1) !== '/') b += '/';
    return b;
  }

  function hereKey() {
    var path = location.pathname;
    for (var i = 0; i < SITES.length; i++) {
      if (path.indexOf('/' + SITES[i].folder) !== -1) return SITES[i].key;
    }
    return '';
  }

  /* 세 사이트의 언어 저장값을 함께 맞춥니다. (같은 주소라 저장소를 같이 씁니다) */
  function syncLang(lang) {
    try {
      localStorage.setItem('dgl-lang', lang);
      localStorage.setItem('kbc-lang', lang);
    } catch (e) {}
  }

  function render(lang) {
    var el = document.getElementById('danbi-guide-bar');
    if (!el) return;
    inject();
    var l = lang === 'en' ? 'en' : 'ko';
    var t = COPY[l];
    var here = hereKey();
    var base = baseOf(el);
    /* 놀이터처럼 영어가 기본이면서 한글 부제를 함께 보여 주는 페이지 */
    var subLang = el.getAttribute('data-sub') === 'ko' ? 'ko' : l;

    var links = SITES.map(function (s) {
      var cur = s.key === here;
      return '<li><a href="' + base + s.folder + '" data-dlg-lang="' + l + '"' +
        (cur ? ' aria-current="page"' : '') + '>'
        + '<span class="dlg-em" aria-hidden="true">' + s.emoji + '</span>'
        + '<span class="dlg-tx"><b>' + esc(s[l]) + '</b>'
        + '<small>' + esc(s[subLang + 'Sub']) + '</small>'
        + (cur ? '<span class="dlg-here">' + esc(t.here) + '</span>' : '')
        + '</span></a></li>';
    }).join('');

    el.innerHTML = '<div class="dlg-box">'
      + '<div class="dlg-head"><p class="dlg-kicker">' + esc(t.kicker) + '</p>'
      + '<p class="dlg-lead">' + esc(t.lead) + '</p></div>'
      + '<ul class="dlg-links">' + links + '</ul>'
      + '<p class="dlg-foot">' + esc(t.philosophy) + '</p>'
      + '</div>';

    Array.prototype.forEach.call(el.querySelectorAll('.dlg-links a'), function (a) {
      a.addEventListener('click', function () { syncLang(l); });
    });
  }

  window.DanbiGuide = { render: render, sites: SITES, syncLang: syncLang };

  function start() {
    var el = document.getElementById('danbi-guide-bar');
    if (!el) return;
    var lang = el.getAttribute('data-lang');
    if (lang !== 'en' && lang !== 'ko') {
      lang = (document.documentElement.lang || 'ko').toLowerCase().indexOf('en') === 0 ? 'en' : 'ko';
    }
    render(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
