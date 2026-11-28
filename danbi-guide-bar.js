/* ==========================================================================
   단비랩 · K-가이드 — 세 사이트 공통 연결 띠 (DanbiLab · K-Guide)
   --------------------------------------------------------------------------
   ai-guide / korea-travel / playground 세 사이트의 하단에 같은 모양의
   연결 띠를 그립니다. 각 페이지에 아래 한 줄을 두고,

     <div id="danbi-guide-bar" data-base="../" data-lang="ko"></div>
     <script src="../danbi-guide-bar.js?v=2" defer></script>

   언어가 바뀌면 그 페이지의 앱이 DanbiGuide.render('en') 을 다시 불러 줍니다.
   (놀이터는 영어가 기본이고 한글 부제를 함께 보여 줍니다.)

   · 무료·무가입·무광고 철학 한 줄
   · 세 사이트를 바로 오가는 링크 세 개 (지금 보고 있는 곳 표시)
   · KR/EN 연동: 링크를 누를 때 두 사이트의 언어 저장값을 같이 맞춰,
     영어로 보던 사람이 넘어가도 영어로 열립니다.
   · 이용 안내 한 줄 + '이용 안내 · Legal & Privacy' 단추 → 일곱 가지 전문
     (독립 정보 사이트·상표·요금·참고용·저작권·개인정보·전문가 확인)
     모달 안에서도 KR/EN 을 바꿀 수 있습니다.
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
      langNote: 'Korean',
      legalLine: '무료 · 무가입 · 익명 방문 집계만 사용 · 독립 정보 사이트 · 제휴 없음',
      updated: '최근 업데이트 2026.11.28',
      legalBtn: '이용 안내 · Legal & Privacy'
    },
    en: {
      kicker: 'DanbiLab · K-Guide',
      lead: 'Three free sites, one line apart — press the one you want and you are there.',
      philosophy: 'Free · no sign-up · no ads — three free sites made by DanbiLab',
      here: 'You are here',
      langNote: 'English',
      legalLine: 'Free · no sign-up · anonymous visit counts only · an independent guide · no affiliation',
      updated: 'Updated Nov 28, 2026',
      legalBtn: 'Legal & Privacy · 이용 안내'
    }
  };

  /* 이용 안내 전문 — 일곱 항목. 모달 안에서 KR/EN 을 바꿀 수 있습니다. */
  var LEGAL = {
    ko: {
      title: '이용 안내',
      subtitle: '이 사이트를 쓰시기 전에 알아 두실 일곱 가지',
      close: '닫기',
      items: [
        {
          h: '독립 정보 사이트입니다',
          p: '이 사이트는 단비랩(DanbiLab)이 직접 만들어 운영하는 독립 정보·학습 사이트이며, 소개하는 외부 서비스나 기업의 공식 사이트가 아닙니다. 어떤 서비스와도 공식 제휴·후원·보증 관계가 없고, 제휴 링크나 유료 링크가 있을 때는 그 링크에 따로 표시합니다.'
        },
        {
          h: '서비스 이름과 상표는 각 권리자에게 있습니다',
          p: '사이트에 나오는 서비스·제품·회사 이름과 상표는 무엇인지 설명하기 위해 이름만 언급한 것으로, 모두 해당 권리자에게 있습니다. 단비랩은 어떤 서비스의 공식 로고나 캐릭터도 사용하지 않으며, 어떤 서비스도 이 사이트를 보증하지 않습니다.'
        },
        {
          h: '요금과 이용 조건은 공식 사이트에서 확인하세요',
          p: '외부 서비스의 기능, 요금, 무료로 쓸 수 있는 범위, 이용 조건은 예고 없이 바뀔 수 있습니다. 이 사이트의 설명은 작성한 시점을 기준으로 한 것이므로, 실제로 쓰시기 전에 각 서비스의 공식 사이트 안내를 기준으로 확인해 주세요.'
        },
        {
          h: '설명과 예시는 참고용입니다',
          p: '이 사이트의 설명, 예시, 프롬프트, 여행 코스는 참고와 학습을 위한 것입니다. 실제 AI의 결과, 운임과 요금, 운영시간, 예약 가능 여부를 보장하지 않으니, 여행이나 결제 전에는 공식 안내를 다시 확인해 주세요.'
        },
        {
          h: '글·이미지·소스를 무단으로 복제하지 마세요',
          p: '이 사이트의 글, 이미지, 소스 코드와 다른 곳에서 가져온 콘텐츠는 각 권리자의 것입니다. 다른 곳에서 가져온 사진의 출처는 해당 사이트의 \'사진 출처\' 안내에 적어 두었습니다. 무단 복제·재배포·재판매를 금하며, 인용하실 때는 출처를 밝혀 주세요.'
        },
        {
          h: '개인정보를 모으지 않습니다',
          p: '회원가입과 로그인이 없고, 이름·전화번호 같은 개인정보를 받지 않습니다. 즐겨찾기와 작성하신 내용은 브라우저(localStorage) 안에만 저장되고 서버로 보내지 않습니다. 방문자 수를 세기 위해서만 익명 통계(Google Analytics 4, IP 익명화)를 쓰며, 누가 왔는지는 알 수 없습니다. 외부 AI 서비스의 입력창에 개인정보나 민감한 자료를 넣지 않도록 주의해 주세요 — 그곳에 적은 내용은 해당 서비스로 전송됩니다. 브라우저의 \'사이트 데이터 삭제\'로 저장된 내용을 언제든 지우실 수 있습니다.'
        },
        {
          h: '중요한 판단은 전문가와 함께',
          p: '업무, 법률, 의료, 금융처럼 결과가 큰 판단을 이 사이트의 설명만으로 내리지 마세요. 해당 분야의 전문가나 공식 기관에서 확인하신 뒤 결정하시기를 권합니다.'
        }
      ],
      meta: '운영: DanbiLab (단비랩) · 최종 업데이트: 2026년 11월 28일',
      contactLabel: '오류 제보 · 저작권/수정 요청:'
    },
    en: {
      title: 'Legal & Privacy',
      subtitle: 'Seven things worth knowing before you use this site',
      close: 'Close',
      items: [
        {
          h: 'An independent guide',
          p: 'This site is an independent guide made and run by DanbiLab. It is not the official site of any service or company it describes, and it has no partnership with, sponsorship from or endorsement by them. Where a link is an affiliate or paid link, it is marked as such.'
        },
        {
          h: 'Names and trademarks belong to their owners',
          p: 'Service, product and company names and trademarks appear here only to describe them, and each one belongs to its owner. DanbiLab uses no official logos or characters, and no service endorses this site.'
        },
        {
          h: 'Check prices and terms on the official site',
          p: 'The features, prices, free limits and terms of outside services change without notice. What is written here reflects the time it was written, so before you use a service, check its official site for what actually applies.'
        },
        {
          h: 'For reference and learning',
          p: 'The explanations, examples, prompts and travel courses here are for reference and learning. They do not guarantee what an AI will actually produce, nor fares, prices, opening hours or availability — please re-check official information before you travel or pay.'
        },
        {
          h: 'Please do not copy our text, images or code',
          p: 'The text, images and code of this site, and content taken from other sources, belong to their respective owners. Photo credits are listed in the site\'s credits note. Please do not copy, repost or resell them without permission, and credit the source when you quote.'
        },
        {
          h: 'No personal information is collected',
          p: 'There is no sign-up or login, and we ask for no name, phone number or other personal details. Favourites and anything you write stay in your browser (localStorage) and are not sent to a server. Visit counts use anonymous statistics only (Google Analytics 4 with IP anonymisation); we cannot tell who visited. Please do not put personal or sensitive material into the input boxes of outside AI services — what you type there is sent to that service. You can clear what is stored at any time with your browser\'s site-data settings.'
        },
        {
          h: 'Important decisions: check with a professional',
          p: 'Please do not base decisions with real consequences — work, legal, medical or financial — on this site alone. Check with a qualified professional or the official body first.'
        }
      ],
      meta: 'Operated by DanbiLab (단비랩) · Last updated: 28 November 2026',
      contactLabel: 'Corrections, copyright or removal requests:'
    }
  };

  var MAIL = 'ymi9595@gmail.com';

  var CSS = `
.dlg-bar{margin:44px auto 0;max-width:1080px;padding:0 2px}
.dlg-box{background:linear-gradient(160deg,#FFF6EC 0%,#FDF1F3 52%,#EEF7F2 100%);
border:1px solid #F2E3D6;border-radius:20px;padding:18px clamp(14px,2.4vw,22px) 16px;
font-family:Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR','Segoe UI',sans-serif;
color:#3B3540;box-shadow:0 14px 34px -30px rgba(90,63,48,.55)}
.dlg-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin:0 0 2px}
.dlg-kicker{margin:0;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#C4653F}
.dlg-lead{margin:0;font-size:12px;color:#7A7180;line-height:1.6}
.dlg-links{list-style:none;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0 0;padding:0}
.dlg-links a{display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.86);border:1px solid #F1E4D9;
border-radius:14px;padding:10px 12px;text-decoration:none;color:#3B3540;transition:transform .14s,box-shadow .14s,background .14s;min-width:0}
.dlg-links a:hover{transform:translateY(-2px);box-shadow:0 12px 24px -20px rgba(90,63,48,.75);background:#fff}
.dlg-links a:focus-visible{outline:2px solid #C4653F;outline-offset:2px}
.dlg-em{font-size:19px;line-height:1;flex:none}
.dlg-tx{display:flex;flex-direction:column;min-width:0}
.dlg-tx b{font-size:13px;font-weight:800;letter-spacing:-.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dlg-tx small{font-size:10.5px;color:#8B8391;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dlg-links a[aria-current="page"]{background:#FFF2E6;border-color:#EFC9AE}
.dlg-links a[aria-current="page"] .dlg-tx b{color:#B4512C}
.dlg-here{display:none;font-size:9px;font-weight:800;letter-spacing:.06em;color:#B4512C;text-transform:uppercase}
.dlg-links a[aria-current="page"] .dlg-here{display:block}
.dlg-foot{margin:10px 0 0;font-size:11px;color:#8B8391;line-height:1.6}
.dlg-legal{margin:10px 0 0;padding-top:10px;border-top:1px dashed #E7D6C8;display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px}
.dlg-legal p{margin:0;flex:1 1 240px;min-width:0;font-size:11px;line-height:1.65;color:#8B8391}
.dlg-upd{white-space:nowrap;font-weight:700;color:#6F6676;margin-left:2px}
.dlg-legal-btn{flex:none;font-family:inherit;font-size:11.5px;font-weight:800;letter-spacing:-.01em;color:#B4512C;background:#fff;
border:1px solid #EBCDB6;border-radius:999px;padding:7px 13px;cursor:pointer;line-height:1.2;
transition:background .14s,border-color .14s,transform .14s}
.dlg-legal-btn:hover{background:#FFF4EA;border-color:#DFB496;transform:translateY(-1px)}
.dlg-legal-btn:focus-visible{outline:2px solid #C4653F;outline-offset:2px}
.dlg-legal-btn span{font-weight:600;opacity:.72}
/* 이용 안내 모달 */
.dlg-lmodal{position:fixed;inset:0;z-index:2147483500;display:flex;align-items:center;justify-content:center;
padding:clamp(10px,3vh,30px) clamp(10px,3vw,24px);background:rgba(45,33,28,.44);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
.dlg-lmodal[hidden]{display:none}
.dlg-lpanel{width:min(720px,100%);max-height:min(88vh,900px);display:flex;flex-direction:column;
background:#FFFCF8;border:1px solid #F0DFD0;border-radius:22px;overflow:hidden;
box-shadow:0 34px 90px -40px rgba(60,40,30,.65);color:#3B3540;
font-family:Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR','Segoe UI',sans-serif}
.dlg-lhead{flex:none;display:flex;align-items:flex-start;gap:10px;padding:16px 18px 12px clamp(16px,3vw,24px);border-bottom:1px solid #F4E7DC;background:#FFF8F2}
.dlg-lhead-tx{flex:1;min-width:0}
.dlg-ltitle{margin:0;font-size:15px;font-weight:900;letter-spacing:-.02em;color:#3B3540}
.dlg-ltitle span{font-weight:700;color:#B4512C;font-size:12.5px;letter-spacing:0}
.dlg-lsub{margin:3px 0 0;font-size:11.5px;color:#8B8391;line-height:1.5}
.dlg-ltools{display:flex;align-items:center;gap:6px;flex:none}
.dlg-lswitch{display:inline-flex;border:1px solid #EBD9C9;background:#fff;border-radius:999px;padding:2px}
.dlg-lswitch button{font-family:inherit;font-size:11px;font-weight:800;color:#8B8391;background:none;border:0;border-radius:999px;padding:4px 9px;cursor:pointer;line-height:1.1}
.dlg-lswitch button[aria-pressed="true"]{background:#FFEEDF;color:#B4512C}
.dlg-lswitch button:focus-visible{outline:2px solid #C4653F;outline-offset:1px}
.dlg-lclose{width:30px;height:30px;display:grid;place-items:center;border:1px solid #EBD9C9;background:#fff;border-radius:50%;cursor:pointer;color:#7A7180}
.dlg-lclose:hover{background:#FFF4EA;color:#B4512C}
.dlg-lclose:focus-visible{outline:2px solid #C4653F;outline-offset:2px}
.dlg-lclose svg{width:15px;height:15px}
.dlg-lbody{flex:1 1 auto;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:6px clamp(16px,3vw,24px) 4px}
.dlg-litem{display:flex;gap:11px;padding:13px 0;border-bottom:1px dashed #EFE1D5}
.dlg-litem:last-of-type{border-bottom:0}
.dlg-lnum{flex:none;width:22px;height:22px;border-radius:50%;background:#FFEEDF;color:#B4512C;
font-size:11px;font-weight:900;display:grid;place-items:center;margin-top:1px}
.dlg-litem-tx{min-width:0}
.dlg-litem h4{margin:0 0 3px;font-size:12.8px;font-weight:800;color:#3B3540;line-height:1.45;letter-spacing:-.01em}
.dlg-litem p{margin:0;font-size:12px;line-height:1.68;color:#6C6472;overflow-wrap:anywhere;word-break:keep-all}
.dlg-lmeta{flex:none;padding:12px clamp(16px,3vw,24px) 14px;border-top:1px solid #F4E7DC;background:#FFF8F2}
.dlg-lmeta p{margin:0;font-size:11.5px;line-height:1.7;color:#8B8391}
.dlg-lmeta a{color:#B4512C;font-weight:800;text-decoration:none;border-bottom:1px solid rgba(180,81,44,.32);overflow-wrap:anywhere}
.dlg-lmeta a:hover{border-bottom-color:#B4512C}
.dlg-lmeta .dlg-lmail{display:block;margin-top:2px}
body.dlg-lock{overflow:hidden}
@media (max-width:760px){.dlg-bar{margin-top:34px}.dlg-box{padding:15px 13px 14px;border-radius:18px}
.dlg-links{gap:6px}.dlg-links a{padding:9px 8px;gap:7px;border-radius:12px}
.dlg-em{font-size:16px}.dlg-tx b{font-size:11.8px}.dlg-tx small{display:none}
.dlg-lmodal{padding:0;align-items:flex-end}
.dlg-lpanel{max-height:92vh;border-radius:20px 20px 0 0;width:100%}}
@media (max-width:430px){.dlg-links{grid-template-columns:1fr}.dlg-lead{font-size:11.5px}
.dlg-links a{padding:10px 12px}.dlg-tx small{display:block}
.dlg-legal{gap:8px}.dlg-legal p{flex:1 1 100%}.dlg-legal-btn{width:100%;text-align:center;padding:9px 13px}
.dlg-lsub{display:none}}
@media (max-width:380px){.dlg-lhead{gap:6px;padding:14px 12px 10px}.dlg-ltitle{font-size:13.5px}
.dlg-lswitch button{padding:4px 7px;font-size:10.5px}.dlg-lclose{width:28px;height:28px}
.dlg-litem p{font-size:11.5px}.dlg-litem h4{font-size:12.2px}}
@media (prefers-reduced-motion:reduce){.dlg-legal-btn:hover{transform:none}.dlg-links a:hover{transform:none}}
`;

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

  /* ------------------------------------------------------------------ 모달 */

  var modal = null;          /* { wrap, panel, body, title, sub, kbtn, ebtn, closeBtn } */
  var modalLang = 'ko';      /* 모달이 지금 보여 주는 언어 */
  var pageLang = 'ko';       /* 페이지가 지금 쓰는 언어 (render 로 들어옴) */
  var lastFocus = null;

  function ensureModal() {
    if (modal) return modal;
    inject();

    var wrap = document.createElement('div');
    wrap.className = 'dlg-lmodal';
    wrap.id = 'dlg-legal-modal';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'dlg-legal-title');
    wrap.setAttribute('tabindex', '-1');
    wrap.hidden = true;

    wrap.innerHTML = '<div class="dlg-lpanel" role="document">'
      + '<div class="dlg-lhead">'
      + '<div class="dlg-lhead-tx">'
      + '<h3 class="dlg-ltitle" id="dlg-legal-title"></h3>'
      + '<p class="dlg-lsub"></p>'
      + '</div>'
      + '<div class="dlg-ltools">'
      + '<span class="dlg-lswitch" role="group" aria-label="Language / 언어">'
      + '<button type="button" data-dlg-lang="ko" aria-pressed="false">KR</button>'
      + '<button type="button" data-dlg-lang="en" aria-pressed="false">EN</button>'
      + '</span>'
      + '<button type="button" class="dlg-lclose" data-dlg-close aria-label="Close">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
      + '</button>'
      + '</div>'
      + '</div>'
      + '<div class="dlg-lbody" data-dlg-body></div>'
      + '<div class="dlg-lmeta"></div>'
      + '</div>';

    document.body.appendChild(wrap);

    modal = {
      wrap: wrap,
      panel: wrap.querySelector('.dlg-lpanel'),
      body: wrap.querySelector('[data-dlg-body]'),
      title: wrap.querySelector('.dlg-ltitle'),
      sub: wrap.querySelector('.dlg-lsub'),
      meta: wrap.querySelector('.dlg-lmeta'),
      kbtn: wrap.querySelector('[data-dlg-lang="ko"]'),
      ebtn: wrap.querySelector('[data-dlg-lang="en"]'),
      closeBtn: wrap.querySelector('[data-dlg-close]')
    };

    /* 바깥을 누르면 닫기 */
    wrap.addEventListener('mousedown', function (e) {
      if (e.target === wrap) closeModal();
    });
    wrap.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest && t.closest('[data-dlg-close]')) { closeModal(); return; }
      var lb = t.closest && t.closest('[data-dlg-lang]');
      if (lb) { setModalLang(lb.getAttribute('data-dlg-lang')); }
    });

    document.addEventListener('keydown', function (e) {
      if (!modal || modal.wrap.hidden) return;
      if (e.key === 'Escape' || e.key === 'Esc') { e.preventDefault(); closeModal(); return; }
      if (e.key !== 'Tab') return;
      var f = modal.wrap.querySelectorAll('a[href], button:not([disabled])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === modal.wrap)) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });

    return modal;
  }

  function renderModal() {
    var m = ensureModal();
    var t = LEGAL[modalLang] || LEGAL.ko;
    m.wrap.setAttribute('lang', modalLang);
    m.title.innerHTML = modalLang === 'ko'
      ? '이용 안내 <span>· Legal &amp; Privacy</span>'
      : 'Legal &amp; Privacy <span>· 이용 안내</span>';
    m.sub.textContent = t.subtitle;
    m.kbtn.setAttribute('aria-pressed', modalLang === 'ko' ? 'true' : 'false');
    m.ebtn.setAttribute('aria-pressed', modalLang === 'en' ? 'true' : 'false');
    m.closeBtn.setAttribute('aria-label', t.close);

    var items = '';
    for (var i = 0; i < t.items.length; i++) {
      items += '<div class="dlg-litem"><span class="dlg-lnum" aria-hidden="true">' + (i + 1) + '</span>'
        + '<div class="dlg-litem-tx"><h4>' + esc(t.items[i].h) + '</h4><p>' + esc(t.items[i].p) + '</p></div></div>';
    }
    m.body.innerHTML = items;
    m.meta.innerHTML = '<p>' + esc(t.meta) + '</p>'
      + '<p class="dlg-lmail">' + esc(t.contactLabel) + ' '
      + '<a href="mailto:' + MAIL + '">' + MAIL + '</a></p>';
    m.body.scrollTop = 0;
  }

  function setModalLang(l) {
    modalLang = l === 'en' ? 'en' : 'ko';
    renderModal();
    if (modal && !modal.wrap.hidden) {
      var b = modal.wrap.querySelector('[data-dlg-lang="' + modalLang + '"]');
      if (b) b.focus();
    }
  }

  function openModal(trigger) {
    var m = ensureModal();
    lastFocus = trigger || document.activeElement;
    modalLang = pageLang;
    renderModal();
    m.wrap.hidden = false;
    document.body.classList.add('dlg-lock');
    try { m.panel.scrollTop = 0; } catch (e) {}
    m.closeBtn.focus();
  }

  function closeModal() {
    if (!modal || modal.wrap.hidden) return;
    modal.wrap.hidden = true;
    document.body.classList.remove('dlg-lock');
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }

  /* ------------------------------------------------------------------ 띠 */

  function render(lang) {
    var el = document.getElementById('danbi-guide-bar');
    if (!el) return;
    inject();
    var l = lang === 'en' ? 'en' : 'ko';
    pageLang = l;
    if (modal && modal.wrap.hidden) modalLang = l;
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
      + '<div class="dlg-legal"><p>' + esc(t.legalLine)
      + ' · <span class="dlg-upd">' + esc(t.updated) + '</span></p>'
      + '<button type="button" class="dlg-legal-btn" data-dlg-legal aria-haspopup="dialog" aria-controls="dlg-legal-modal">'
      + esc(t.legalBtn) + '</button></div>'
      + '</div>';

    Array.prototype.forEach.call(el.querySelectorAll('.dlg-links a'), function (a) {
      a.addEventListener('click', function () { syncLang(l); });
    });

    /* 이용 안내 단추 — 띠를 다시 그려도 한 번만 붙도록 위임으로 처리합니다. */
    if (!el.__dlgLegalBound) {
      el.__dlgLegalBound = true;
      el.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('[data-dlg-legal]') : null;
        if (!b) return;
        e.preventDefault();
        openModal(b);
      });
    }
  }

  window.DanbiGuide = {
    render: render, sites: SITES, syncLang: syncLang,
    openLegal: function () { openModal(null); },
    closeLegal: closeModal
  };

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
