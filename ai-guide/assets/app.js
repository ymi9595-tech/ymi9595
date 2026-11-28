/* 단비랩 AI 활용·응용 가이드 — 화면 그리기
   index.html · assets/data.js 를 함께 씁니다. 외부 라이브러리 없음. */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var state = { lang: store.get('dgl-lang', 'ko') === 'en' ? 'en' : 'ko', route: 'home' };
  var T = function () { return UI[state.lang]; };
  var L = function (o) { return (o && (o[state.lang] || o.ko)) || ''; };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function nl2br(s) { return esc(s).replace(/\n/g, '<br>'); }

  var byId = {};
  ITEMS.forEach(function (it) { byId[it.id] = it; });

  /* 책 → 서가에서 눌렀을 때 열 항목 */
  var bookTheme = {
    ai1: 'chatgpt', ai2: 'claude', agent10: 'gemini',
    realtor: 'realtor', realtor200: 'realtor',
    farmai: 'farm', farm200: 'farm', farm365: 'farm',
    adobe: 'image-ai', stock: 'image-ai',
    localmkt: 'blog-sns', unmanned: 'small-shop',
    overseas: 'ebook', host50: 'english'
  };
  function bookById(id) { return BOOKS[id] || null; }
  function priceOf(b) {
    if (state.lang !== 'en') return b.price;
    return '₩' + String(b.price).replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function promptTotal(it) { return it.prompts.length + ((it.preview && it.preview.quotes) || []).length; }

  /* ───────── 사이드바 ───────── */
  function sideItem(id, emoji, name, sub, active) {
    return '<li><a class="side-link' + (active ? ' on' : '') + '" href="#' + id + '"' +
      (active ? ' aria-current="page"' : '') + '>' +
      '<span class="si-em" aria-hidden="true">' + emoji + '</span>' +
      '<span class="si-tx"><b>' + esc(name) + '</b><small>' + esc(sub) + '</small></span></a></li>';
  }

  function renderSide() {
    var t = T();
    var tools = ITEMS.filter(function (i) { return i.group === 'tool'; });
    var recipes = ITEMS.filter(function (i) { return i.group === 'recipe'; });
    var html = '';
    html += '<p class="side-group"><span aria-hidden="true">🤖</span>' + esc(t.navTools) +
      ' <em>' + esc(t.navToolsCount) + '</em></p><ul class="side-list">';
    tools.forEach(function (i) {
      html += sideItem(i.id, i.emoji, i.name[state.lang], i.sub[state.lang], state.route === i.id);
    });
    html += '</ul>';
    html += '<p class="side-group"><span aria-hidden="true">🎯</span>' + esc(t.navRecipes) +
      ' <em>' + esc(t.navRecipesCount) + '</em></p><ul class="side-list">';
    recipes.forEach(function (i) {
      html += sideItem(i.id, i.emoji, i.name[state.lang], i.sub[state.lang], state.route === i.id);
    });
    html += '</ul>';
    html += '<p class="side-group"><span aria-hidden="true">📚</span>' + esc(t.navBooks) +
      ' <em>' + esc(t.navBooksCount) + '</em></p><ul class="side-list">' +
      sideItem('books', '📚', t.bookshelfTitle.replace('📚 ', ''), t.bookshelfLead.slice(0, 34) + '…', state.route === 'books') +
      '</ul>';

    var list = $('#sideBody');
    if (list) list.innerHTML = html;
    $$('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang));
    });
  }

  /* ───────── 카드 ───────── */
  function card(it) {
    return '<a class="card" href="#' + it.id + '" style="--c1:' + it.c1 + ';--c2:' + it.c2 + '">' +
      '<span class="card-em" aria-hidden="true">' + it.emoji + '</span>' +
      '<span class="card-name">' + esc(it.name[state.lang]) + '</span>' +
      '<span class="card-sub">' + esc(it.sub[state.lang]) + '</span>' +
      '<span class="card-tag">' + esc(it.tag[state.lang]) + '</span>' +
      '<span class="card-meta">' + esc(T().promptsCount(promptTotal(it))) +
      ((it.preview && it.preview.books.length) ? ' · 📖 ' + it.preview.books.length : '') +
      '</span></a>';
  }

  /* ───────── 홈 ───────── */
  function renderHome() {
    var t = T();
    return '' +
      '<section class="hero">' +
        '<div class="hero-blob" aria-hidden="true"></div>' +
        '<p class="kicker">' + esc(t.kicker) + '</p>' +
        '<h1>' + t.title + '</h1>' +
        '<p class="lead">' + esc(t.lead) + '</p>' +
        '<div class="chips">' +
          '<span class="chip">🤖 ' + esc(t.chipTools) + '</span>' +
          '<span class="chip">🎯 ' + esc(t.chipRecipes) + '</span>' +
          '<span class="chip">📋 ' + esc(t.chipPrompts) + '</span>' +
          '<span class="chip">📚 ' + esc(t.chipBooks) + '</span>' +
          '<span class="chip chip-free">' + esc(t.chipFree) + '</span>' +
        '</div>' +
      '</section>' +

      '<section class="block">' +
        '<h2>' + esc(t.howTitle) + '</h2>' +
        '<div class="how">' + t.how.map(function (h) {
          return '<div class="how-card"><b>' + esc(h.t) + '</b><p>' + esc(h.d) + '</p></div>';
        }).join('') + '</div>' +
      '</section>' +

      '<section class="block">' +
        '<h2>' + esc(t.toolsTitle) + '</h2>' +
        '<p class="block-lead">' + esc(t.toolsLead) + '</p>' +
        '<div class="grid">' + ITEMS.filter(function (i) { return i.group === 'tool'; }).map(card).join('') + '</div>' +
      '</section>' +

      '<section class="block">' +
        '<h2>' + esc(t.recipesTitle) + '</h2>' +
        '<p class="block-lead">' + esc(t.recipesLead) + '</p>' +
        '<div class="grid">' + ITEMS.filter(function (i) { return i.group === 'recipe'; }).map(card).join('') + '</div>' +
      '</section>' +

      '<section class="block">' +
        '<h2>' + esc(t.bookshelfTitle) + '</h2>' +
        '<p class="block-lead">' + esc(t.bookshelfLead) + '</p>' +
        '<div class="shelf">' + Object.keys(BOOKS).map(shelfCard).join('') + '</div>' +
      '</section>' +

      '<section class="block promise">' +
        '<h2>' + esc(t.promiseTitle) + '</h2>' +
        '<div class="promise-list">' + t.promises.map(function (p) {
          return '<div class="promise-item"><b>' + esc(p.t) + '</b><p>' + esc(p.d) + '</p></div>';
        }).join('') + '</div>' +
      '</section>';
  }

  function shelfCard(id) {
    var b = BOOKS[id];
    var theme = bookTheme[id];
    return '<div class="shelf-card" style="--c1:' + b.c + '">' +
      '<span class="shelf-em" aria-hidden="true">' + b.emoji + '</span>' +
      '<b>' + esc(b.title[state.lang]) + '</b>' +
      '<span class="shelf-meta">' + esc(T().shelfPages(b.pages)) + ' · ' + esc(priceOf(b)) + '</span>' +
      '<span class="shelf-desc">' + esc(b.desc[state.lang]) + '</span>' +
      '<span class="shelf-links">' +
        (theme ? '<a class="mini" href="#' + theme + '">' + esc(T().shelfExcerpt) + '</a>' : '') +
        '<a class="mini mini-ghost" href="' + pUrl(b.id) + '" target="_blank" rel="noopener">' + esc(T().shelfBuy) + ' ↗</a>' +
      '</span></div>';
  }

  /* ───────── 상세 ───────── */
  function promptCard(p, tag, idx) {
    return '<article class="prompt">' +
      '<div class="prompt-head">' +
        '<b>' + (tag ? '<span class="pnum">' + esc(tag) + '</span> ' : '') + esc(p.t[state.lang]) + '</b>' +
        '<button class="copy" type="button" data-copy="' + idx + '" aria-label="' + esc(T().copy) + '">📋 <span>' + esc(T().copy) + '</span></button>' +
      '</div>' +
      '<pre class="prompt-body" data-prompt="' + idx + '">' + esc(p.b[state.lang] || p.b.ko) + '</pre>' +
      '</article>';
  }

  function renderDetail(it) {
    var t = T();
    var idx = 0;
    var mainPrompts = it.prompts.map(function (p) {
      var id = 'p' + (idx++);
      return promptCard(p, '', id);
    }).join('');

    var quotes = '';
    var bookCards = '';
    if (it.preview) {
      var qlist = it.preview.quotes || [];
      quotes = qlist.map(function (q) {
        var id = 'q' + (idx++);
        return '<article class="prompt prompt-book">' +
          '<div class="prompt-head"><b><span class="pnum">' + esc(q.n) + '</span> ' + esc(L(q.t)) + '</b>' +
          '<button class="copy" type="button" data-copy="' + id + '" aria-label="' + esc(t.copy) + '">📋 <span>' + esc(t.copy) + '</span></button></div>' +
          '<pre class="prompt-body" data-prompt="' + id + '">' + esc(q.b) + '</pre>' +
          (state.lang === 'en' ? '<p class="quote-note">' + esc(t.quoteLang) + '</p>' : '') +
          '</article>';
      }).join('');

      bookCards = '<div class="keys"><h4>' + esc(t.bookKeys) + '</h4><ol class="key-list">' +
        it.preview.keys.map(function (k) { return '<li>' + esc(L(k)) + '</li>'; }).join('') + '</ol></div>';

      bookCards += '<div class="book-links">' + it.preview.books.map(function (bid) {
        var b = bookById(bid);
        if (!b) return '';
        return '<div class="book-row">' +
          '<span class="br-em" aria-hidden="true">' + b.emoji + '</span>' +
          '<span class="br-tx"><b>' + esc(b.title[state.lang]) + '</b>' +
          '<small>' + esc(t.shelfPages(b.pages)) + ' · ' + esc(priceOf(b)) + ' · ' + esc(t.bookNote) + '</small>' +
          '<span class="br-desc">' + esc(b.desc[state.lang]) + '</span></span>' +
          '<a class="btn-store" href="' + pUrl(b.id) + '" target="_blank" rel="noopener">' + esc(t.bookStore) + ' ↗</a>' +
          '</div>';
      }).join('') + '</div>';
    }

    var theme = ITEMS.map(function (i) { return i.id; });
    var at = theme.indexOf(it.id);
    var prev = at > 0 ? byId[theme[at - 1]] : null;
    var next = at >= 0 && at < theme.length - 1 ? byId[theme[at + 1]] : null;

    return '' +
      '<article class="detail" style="--c1:' + it.c1 + ';--c2:' + it.c2 + '">' +
        '<a class="back" href="#home">← ' + esc(t.back) + '</a>' +
        '<header class="detail-head">' +
          '<span class="d-em" aria-hidden="true">' + it.emoji + '</span>' +
          '<div class="d-tx">' +
            '<p class="d-group">' + (it.group === 'tool' ? '🤖 ' + esc(t.navTools) : '🎯 ' + esc(t.navRecipes)) + '</p>' +
            '<h1>' + esc(it.name[state.lang]) + '</h1>' +
            '<p class="d-sub">' + esc(it.sub[state.lang]) + '</p>' +
            '<p class="d-tag">' + esc(it.tag[state.lang]) + '</p>' +
          '</div>' +
        '</header>' +

        '<section class="sec sec-when">' +
          '<h2><i>①</i> ' + esc(t.whenLabel.replace('① ', '')) + '</h2>' +
          '<p>' + esc(L(it.when)) + '</p>' +
        '</section>' +

        '<section class="sec">' +
          '<h2><i>②</i> ' + esc(t.tipsLabel.replace('② ', '')) + '</h2>' +
          '<ol class="tips">' + it.tips.map(function (x, i) {
            return '<li><span class="tnum">' + (i + 1) + '</span><span>' + esc(L(x)) + '</span></li>';
          }).join('') + '</ol>' +
        '</section>' +

        '<section class="sec">' +
          '<h2><i>③</i> ' + esc(t.promptsLabel.replace('③ ', '')) + '</h2>' +
          '<p class="sec-hint">' + esc(t.promptsHint) + '</p>' +
          '<div class="prompts">' + mainPrompts + '</div>' +
        '</section>' +

        '<section class="sec sec-notes">' +
          '<h2><i>④</i> ' + esc(t.notesLabel) + '</h2>' +
          '<ul class="notes">' + it.notes.map(function (n) {
            return '<li>' + esc(L(n)) + '</li>';
          }).join('') + '</ul>' +
        '</section>' +

        '<section class="sec sec-book">' +
          '<h2><i>⑤</i> ' + esc(t.bookLabel) + '</h2>' +
          (it.preview ?
            '<h3 class="book-h">' + esc(t.bookPreviewTitle) + '</h3>' +
            '<p class="sec-hint">' + esc(t.bookPreviewLead) + '</p>' +
            '<div class="book-body">' + bookCards +
              '<h4 class="q-title">' + esc(t.bookPrompts) + '</h4>' +
              '<div class="prompts">' + quotes + '</div>' +
            '</div>' : '') +
          '<div class="buy-line">' +
            '<a class="btn-store" href="' + STORE + '" target="_blank" rel="noopener">' + esc(t.bookAll) + ' ↗</a>' +
            '<a class="btn-store btn-ghost" href="' + PAYHIP + '" target="_blank" rel="noopener">' + esc(t.bookPayhip) + ' ↗</a>' +
          '</div>' +
        '</section>' +

        '<nav class="pager">' +
          (prev ? '<a class="pg" href="#' + prev.id + '"><small>' + esc(t.prev) + '</small><b>' + prev.emoji + ' ' + esc(prev.name[state.lang]) + '</b></a>' : '<span></span>') +
          (next ? '<a class="pg pg-next" href="#' + next.id + '"><small>' + esc(t.next) + '</small><b>' + next.emoji + ' ' + esc(next.name[state.lang]) + '</b></a>' : '<span></span>') +
        '</nav>' +
      '</article>';
  }

  /* ───────── 책 서가 페이지 ───────── */
  function renderBooks() {
    var t = T();
    return '<article class="detail">' +
      '<a class="back" href="#home">← ' + esc(t.back) + '</a>' +
      '<header class="detail-head"><span class="d-em" aria-hidden="true">📚</span>' +
        '<div class="d-tx"><p class="d-group">' + esc(t.footMade) + '</p>' +
        '<h1>' + esc(t.bookshelfTitle.replace('📚 ', '')) + '</h1>' +
        '<p class="d-sub">' + esc(t.bookshelfLead) + '</p></div></header>' +
      '<div class="shelf shelf-page">' + Object.keys(BOOKS).map(shelfCard).join('') + '</div>' +
      '<section class="sec sec-buy"><h2><i>＋</i> ' + esc(t.bookLabel) + '</h2>' +
        '<div class="buy-line">' +
        '<a class="btn-store" href="' + STORE + '" target="_blank" rel="noopener">' + esc(t.bookAll) + ' ↗</a>' +
        '<a class="btn-store btn-ghost" href="' + PAYHIP + '" target="_blank" rel="noopener">' + esc(t.bookPayhip) + ' ↗</a>' +
        '</div></section>' +
      '</article>';
  }

  /* ───────── 그리기 ───────── */
  function render(push) {
    var t = T();
    document.documentElement.lang = t.htmlLang;
    var view = $('#view');

    if (state.route === 'home') {
      view.innerHTML = renderHome();
      document.title = state.lang === 'ko'
        ? '단비랩 AI 활용·응용 가이드 — AI 도구 8종 · 목적별 레시피 6종'
        : 'DanbiLab AI Guide — eight tools, six jobs';
    } else if (state.route === 'books') {
      view.innerHTML = renderBooks();
      document.title = (state.lang === 'ko' ? '단비랩 전자책 서가' : 'The DanbiLab shelf') + ' · ' + t.brand;
    } else if (byId[state.route]) {
      var it = byId[state.route];
      view.innerHTML = renderDetail(it);
      document.title = it.name[state.lang] + ' · ' + t.brand;
    } else {
      view.innerHTML = '<article class="detail"><p class="notfound">' + esc(t.notFound) + '</p>' +
        '<p><a class="back" href="#home">← ' + esc(t.back) + '</a></p></article>';
    }

    renderSide();
    if (push !== false) {
      var crumb = $('#crumb');
      if (crumb) {
        crumb.textContent = state.route === 'home' ? '' : (state.route === 'books' ? t.bookshelfTitle : (byId[state.route] ? byId[state.route].name[state.lang] : ''));
      }
    }
    window.scrollTo(0, 0);
    closeDrawer();
  }

  function routeFromHash() {
    var h = (location.hash || '').replace(/^#/, '');
    return (!h || h === 'home') ? 'home' : h;
  }

  /* ───────── 복사 ───────── */
  function copyText(text, btn) {
    var done = function (ok) {
      if (!btn) return;
      var span = btn.querySelector('span');
      var old = span ? span.textContent : '';
      btn.classList.toggle('ok', ok);
      if (span) span.textContent = ok ? T().copied : T().copyFail;
      setTimeout(function () {
        btn.classList.remove('ok');
        if (span) span.textContent = old;
      }, 2400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallback(text, done); });
    } else {
      fallback(text, done);
    }
  }
  function fallback(text, done) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      done(!!ok);
    } catch (e) { done(false); }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.copy') : null;
    if (btn) {
      var pre = document.querySelector('[data-prompt="' + btn.dataset.copy + '"]');
      if (pre) copyText(pre.textContent, btn);
      return;
    }
    var langBtn = e.target.closest ? e.target.closest('[data-lang]') : null;
    if (langBtn) {
      state.lang = langBtn.dataset.lang === 'en' ? 'en' : 'ko';
      store.set('dgl-lang', state.lang);
      render();
      return;
    }
    if (e.target.closest && e.target.closest('[data-share]')) {
      share();
      return;
    }
    if (e.target.closest && e.target.closest('#navBtn')) { openDrawer(); return; }
    if (e.target.closest && (e.target.closest('#sideClose') || e.target.closest('#scrim'))) { closeDrawer(); return; }
    if (e.target.closest && e.target.closest('.side-link')) { closeDrawer(); }
  });

  function share() {
    var url = location.href.split('#')[0] + (state.route === 'home' ? '' : '#' + state.route);
    var title = document.title;
    if (navigator.share) {
      navigator.share({ title: title, url: url }).catch(function () {});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { toast(T().shareDone); }, function () { toast(url); });
    } else {
      toast(url);
    }
  }
  function toast(msg) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('on');
    setTimeout(function () { el.classList.remove('on'); }, 2000);
  }

  /* ───────── 서랍 (모바일) ───────── */
  function openDrawer() {
    document.body.classList.add('drawer');
    var b = $('#navBtn'); if (b) b.setAttribute('aria-expanded', 'true');
    var s = $('#scrim'); if (s) s.hidden = false;
  }
  function closeDrawer() {
    document.body.classList.remove('drawer');
    var b = $('#navBtn'); if (b) b.setAttribute('aria-expanded', 'false');
    var s = $('#scrim'); if (s) s.hidden = true;
  }

  window.addEventListener('hashchange', function () {
    state.route = routeFromHash();
    render();
  });

  document.addEventListener('DOMContentLoaded', function () {
    state.route = routeFromHash();
    var navBtn = $('#navBtn');
    if (navBtn) navBtn.addEventListener('click', openDrawer);
    var closeBtn = $('#sideClose');
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    var scrim = $('#scrim');
    if (scrim) scrim.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
    render();
  });
})();
