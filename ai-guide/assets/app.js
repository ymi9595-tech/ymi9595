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

  var state = { lang: store.get('dgl-lang', 'ko') === 'en' ? 'en' : 'ko', route: 'home', sq: '' };
  var FAV_KEY = 'dgl-favs', RECENT_KEY = 'dgl-recent';
  function readList(k) { try { var v = JSON.parse(localStorage.getItem(k) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function writeList(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function isFav(key) { return readList(FAV_KEY).indexOf(key) !== -1; }
  function toggleFav(key) {
    var l = readList(FAV_KEY); var i = l.indexOf(key);
    if (i === -1) l.unshift(key); else l.splice(i, 1);
    writeList(FAV_KEY, l); return i === -1;
  }
  function favKeys() { return readList(FAV_KEY); }
  function pushRecent(key) {
    if (!key) return;
    var l = readList(RECENT_KEY).filter(function (x) { return x !== key; });
    l.unshift(key); writeList(RECENT_KEY, l.slice(0, 8));
  }
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

  /* 레시피에서 쓰는 도구 → 공식 사이트 */
  var RECIPE_TOOLS = {
    'blog-sns': ['chatgpt', 'image-ai', 'perplexity'],
    'small-shop': ['chatgpt', 'image-ai', 'automation'],
    'realtor': ['chatgpt', 'claude', 'perplexity'],
    'farm': ['chatgpt', 'perplexity', 'image-ai'],
    'ebook': ['chatgpt', 'claude', 'image-ai'],
    'english': ['chatgpt', 'claude']
  };

  function reportHref(name, id) {
    var page = name;
    var url = location.origin + location.pathname + (id ? '#' + id : '');
    var subject = T().reportSubject(page);
    var body = T().reportBody(url);
    return 'mailto:ymi9595@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }
  function priceOf(b) {
    if (state.lang !== 'en') return b.price;
    return '₩' + String(b.price).replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function promptTotal(it) { return it.prompts.length + ((it.preview && it.preview.quotes) || []).length; }

  /* ───────── 통합 검색 ───────── */
  var HAY = null;
  function indexOnce() {
    if (HAY) return HAY;
    HAY = { items: [], terms: [], books: [] };
    ITEMS.forEach(function (it) {
      var hay = [it.name.ko, it.name.en, it.sub.ko, it.sub.en, it.tag.ko, it.tag.en, it.when.ko, it.when.en,
        it.tips.map(function (x) { return x.ko + ' ' + x.en; }).join(' '),
        it.notes.map(function (x) { return x.ko + ' ' + x.en; }).join(' '),
        it.prompts.map(function (p) { return p.t.ko + ' ' + p.t.en + ' ' + p.b.ko + ' ' + p.b.en; }).join(' ')
      ].join(' ').toLowerCase();
      HAY.items.push({ key: 'i:' + it.id, it: it, hay: hay });
    });
    GLOSSARY.forEach(function (g) {
      HAY.terms.push({ key: 'g:' + g.id, g: g, hay: [g.term.ko, g.term.en, g.d.ko, g.d.en].join(' ').toLowerCase() });
    });
    Object.keys(BOOKS).forEach(function (k) {
      var b = BOOKS[k];
      HAY.books.push({ key: 'b:' + k, id: k, b: b, hay: [b.title.ko, b.title.en, b.desc.ko, b.desc.en].join(' ').toLowerCase() });
    });
    return HAY;
  }
  function searchAll(q) {
    var words = String(q || '').toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return null;
    var idx = indexOnce();
    var hit = function (h) { return words.every(function (w) { return h.indexOf(w) !== -1; }); };
    /* 이름에 맞은 것을 먼저, 그다음 소개·태그, 마지막으로 본문 */
    var score = function (name, sub, hay) {
      var n = String(name || '').toLowerCase(), sb = String(sub || '').toLowerCase(), sc = 0;
      words.forEach(function (w) {
        if (n.indexOf(w) !== -1) sc += 8;
        else if (sb.indexOf(w) !== -1) sc += 4;
        else if (hay.indexOf(w) !== -1) sc += 1;
      });
      return sc;
    };
    var rank = function (list, parts) {
      return list.filter(function (x) { return hit(x.hay); })
        .map(function (x) { return { x: x, s: score(parts(x)[0], parts(x)[1], x.hay) }; })
        .sort(function (a, b) { return b.s - a.s; })
        .map(function (o) { return o.x; });
    };
    var items = rank(idx.items, function (x) { return [x.it.name.ko + ' ' + x.it.name.en, x.it.sub.ko + ' ' + x.it.tag.ko]; });
    /* '무료'로 찾으면 무료로 쓸 수 있는 AI 도구를 함께 보여 줍니다. */
    if (words.some(function (w) { return w === '무료' || w === 'free'; })) {
      idx.items.forEach(function (x) {
        if (TOOLFACTS[x.it.id] && items.indexOf(x) === -1) items.push(x);
      });
    }
    return {
      items: items.slice(0, 6),
      terms: rank(idx.terms, function (x) { return [x.g.term.ko + ' ' + x.g.term.en, '']; }).slice(0, 4),
      books: rank(idx.books, function (x) { return [x.b.title.ko + ' ' + x.b.title.en, '']; }).slice(0, 3)
    };
  }
  function searchRow(key, emoji, title, sub) {
    return '<button type="button" class="srow" data-sr="' + esc(key) + '">' +
      '<span class="sem" aria-hidden="true">' + emoji + '</span>' +
      '<span class="stx"><b>' + esc(title) + '</b><small>' + esc(sub) + '</small></span>' +
      '<span class="sgo" aria-hidden="true">→</span></button>';
  }
  function resultsHTML(q) {
    var r = searchAll(q);
    if (!r) return '';
    var t = T();
    var total = r.items.length + r.terms.length + r.books.length;
    if (!total) return '<p class="sempty">' + esc(t.searchNothing) + '</p>';
    var out = '<p class="scount">' + esc(t.searchFound(total)) + ' <span>' + esc(t.searchEnter) + '</span></p>';
    if (r.items.length) {
      out += '<p class="sgroup">' + esc(t.searchGroupItem) + '</p>' +
        r.items.map(function (x) { return searchRow(x.key, x.it.emoji, x.it.name[state.lang], x.it.sub[state.lang]); }).join('');
    }
    if (r.terms.length) {
      out += '<p class="sgroup">' + esc(t.searchGroupTerm) + '</p>' +
        r.terms.map(function (x) { return searchRow(x.key, '📖', x.g.term[state.lang], x.g.d[state.lang].slice(0, 46) + '…'); }).join('');
    }
    if (r.books.length) {
      out += '<p class="sgroup">' + esc(t.searchGroupBook) + '</p>' +
        r.books.map(function (x) { return searchRow(x.key, x.b.emoji, x.b.title[state.lang], T().shelfPages(x.b.pages) + ' · ' + priceOf(x.b)); }).join('');
    }
    return out;
  }

  function goKey(key) {
    var target = '';
    if (key.indexOf('i:') === 0) target = '#' + key.slice(2);
    else if (key.indexOf('b:') === 0) { state.focusBook = key.slice(2); target = '#books'; }
    else if (key.indexOf('g:') === 0) { state.focusTerm = key.slice(2); target = '#glossary'; }
    if (!target) return;
    if (location.hash === target) { render(); applyFocus(); }
    else location.hash = target;
  }
  function applyFocus() {
    var el = null;
    if (state.focusBook) { el = document.getElementById('book-' + state.focusBook); state.focusBook = ''; }
    else if (state.focusTerm) { el = document.getElementById('gl-' + state.focusTerm); state.focusTerm = ''; }
    if (!el) return;
    el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    el.classList.add('flash');
    setTimeout(function () { el.classList.remove('flash'); }, 1600);
  }

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
    html += '<p class="side-group"><span aria-hidden="true">🔎</span>' + esc(t.navAtGlance) +
      ' <em>' + esc(t.navAtGlanceCount) + '</em></p><ul class="side-list">';
    html += sideItem('compare', '🤖', t.compare, t.cmpSub, state.route === 'compare');
    html += sideItem('glossary', '📖', t.glossary, t.glsSub, state.route === 'glossary');
    html += sideItem('favs', '⭐', t.myFavs, (favKeys().length ? t.favCount(favKeys().length) : t.favSub), state.route === 'favs');
    html += '</ul>';
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
    html += '<p class="side-none" id="sideNone" hidden></p>';

    var list = $('#sideBody');
    if (list) list.innerHTML = html;
    filterSide();
    $$('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang));
    });
  }

  /* 사이드바 안에서 바로 찾기 — 입력한 말이 들어간 메뉴만 남깁니다. */
  function filterSide() {
    var q = String(state.sq || '').trim().toLowerCase();
    var body = $('#sideBody');
    if (!body) return;
    var any = false;
    $$('.side-list', body).forEach(function (ul) {
      var shown = 0;
      $$('li', ul).forEach(function (li) {
        var hit = !q || li.textContent.toLowerCase().indexOf(q) !== -1;
        li.hidden = !hit;
        if (hit) shown++;
      });
      var head = ul.previousElementSibling;
      if (head && head.classList.contains('side-group')) head.hidden = q ? shown === 0 : false;
      if (shown) any = true;
    });
    var none = $('#sideNone');
    if (none) { none.hidden = !q || any; none.textContent = q && !any ? T().searchNothing : ''; }
  }

  /* ───────── 카드 ───────── */
  function card(it) {
    var key = 'i:' + it.id;
    var on = isFav(key);
    return '<a class="card" href="#' + it.id + '" style="--c1:' + it.c1 + ';--c2:' + it.c2 + '">' +
      '<span class="card-em" aria-hidden="true">' + it.emoji + '</span>' +
      '<span class="card-name">' + esc(it.name[state.lang]) + '</span>' +
      '<span class="card-sub">' + esc(it.sub[state.lang]) + '</span>' +
      '<span class="card-tag">' + esc(it.tag[state.lang]) + '</span>' +
      '<span class="card-meta">' + esc(T().promptsCount(promptTotal(it))) +
      ((it.preview && it.preview.books.length) ? ' · 📖 ' + it.preview.books.length : '') +
      '</span>' +
      '<span class="fav' + (on ? ' on' : '') + '" role="button" tabindex="0" data-fav="' + key + '" aria-pressed="' + on + '" aria-label="' + esc(on ? T().favOn : T().favAdd) + '" title="' + esc(on ? T().favOn : T().favAdd) + '">' + (on ? '★' : '☆') + '</span></a>';
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

      searchBlock() +
      quickCards() +
      favSection() +
      recentSection() +

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
    return '<div class="shelf-card" id="book-' + id + '" style="--c1:' + b.c + '">' +
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
    var favKey = 'i:' + it.id;
    var on = isFav(favKey);
    var fact = TOOLFACTS[it.id] || null;
    var related = (it.group === 'recipe' ? (RECIPE_TOOLS[it.id] || []) : []).map(function (id) {
      var f = TOOLFACTS[id], tool = byId[id];
      if (!f || !tool) return '';
      return '<li><a href="#' + id + '"><b>' + tool.emoji + ' ' + esc(tool.name[state.lang]) + '</b>' +
        f.sites.map(function (s) { return '<span class="osub">' + esc(s.name) + ' ↗</span>'; }).join('') + '</a></li>';
    }).join('');
    var official = '<section class="sec sec-official">' +
      '<h2><i>🔗</i> ' + esc(t.officialTitle) + '</h2>' +
      '<div class="offi">' +
        (fact ? '<div class="offi-sites">' + fact.sites.map(function (s) {
          return '<a class="offi-main" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
            '<span class="oi-em" aria-hidden="true">' + it.emoji + '</span><span><b>' + esc(s.name) + '</b>' +
            '<small>' + esc(t.compareSite) + ' ↗</small></span></a>';
        }).join('') + '</div>' : '') +
        (related ? '<div class="offi-rel"><p class="ol">' + esc(t.officialForTools) + '</p><ul>' + related + '</ul></div>' : '') +
        '<p class="offi-note">' + esc(t.officialNote) + '</p>' +
      '</div></section>';
    var report = '<section class="report">' +
      '<div><b>' + esc(t.reportTitle) + '</b><p>' + esc(t.reportLead) + '</p></div>' +
      '<a class="report-btn" href="' + reportHref(it.name[state.lang], it.id) + '">✉️ ' + esc(t.reportBtn) + '</a>' +
      '<p class="report-mail">' + esc(t.reportMail) + '</p></section>';

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
            '<button class="fav-detail' + (on ? ' on' : '') + '" type="button" data-fav="' + favKey + '" aria-pressed="' + on + '">' +
              '<span aria-hidden="true">' + (on ? '★' : '☆') + '</span> ' + esc(on ? t.favOn : t.favAdd) + '</button>' +
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

        official +

        '<nav class="pager">' +
          (prev ? '<a class="pg" href="#' + prev.id + '"><small>' + esc(t.prev) + '</small><b>' + prev.emoji + ' ' + esc(prev.name[state.lang]) + '</b></a>' : '<span></span>') +
          (next ? '<a class="pg pg-next" href="#' + next.id + '"><small>' + esc(t.next) + '</small><b>' + next.emoji + ' ' + esc(next.name[state.lang]) + '</b></a>' : '<span></span>') +
        '</nav>' +

        report +
      '</article>';
  }

  /* ───────── 검색 · 즐겨찾기 · 최근 본 ───────── */
  var QUICK = [
    { q: '쇼츠', ko: '쇼츠', en: 'shorts' },
    { q: '이미지', ko: '이미지', en: 'image' },
    { q: '무료', ko: '무료 AI', en: 'free AI' },
    { q: '프롬프트', ko: '프롬프트', en: 'prompt' },
    { q: 'ChatGPT', ko: 'ChatGPT', en: 'ChatGPT' }
  ];

  function searchBlock() {
    var t = T();
    return '<section class="block sblock" id="search">' +
      '<h2>🔎 ' + esc(t.searchLabel) + '</h2>' +
      '<p class="block-lead">' + esc(t.searchLead) + '</p>' +
      '<div class="sbox">' +
        '<span class="sico" aria-hidden="true">🔎</span>' +
        '<label class="sr-only" for="q">' + esc(t.searchLabel) + '</label>' +
        '<input id="q" type="search" placeholder="' + esc(t.searchPlaceholder) + '" value="' + esc(state.hq || '') + '" autocomplete="off" enterkeyhint="search">' +
        '<button class="sclear" id="qClear" type="button"' + (state.hq ? '' : ' hidden') + '>' + esc(t.searchClear) + '</button>' +
      '</div>' +
      '<div class="quickq">' + QUICK.map(function (x) {
        return '<button type="button" class="qchip" data-quick="' + esc(x.q) + '">' + esc(x[state.lang]) + '</button>';
      }).join('') + '</div>' +
      '<div id="qres" class="sres" aria-live="polite"' + (state.hq ? '' : ' hidden') + '>' +
        (state.hq ? resultsHTML(state.hq) : '') + '</div>' +
      '</section>';
  }

  function quickCards() {
    var t = T();
    return '<section class="block">' +
      '<div class="quick2">' +
        '<a class="qcard qcard-a" href="#compare">' +
          '<span class="qc-em" aria-hidden="true">🤖</span>' +
          '<b>' + esc(t.compare) + '</b>' +
          '<p>' + esc(t.cmpSub) + '</p>' +
          '<span class="qc-go">' + esc(t.compareOpen) + '</span></a>' +
        '<a class="qcard qcard-b" href="#glossary">' +
          '<span class="qc-em" aria-hidden="true">📖</span>' +
          '<b>' + esc(t.glossary) + '</b>' +
          '<p>' + esc(t.glsSub) + '</p>' +
          '<span class="qc-go">' + esc(t.compareOpen) + '</span></a>' +
      '</div>' +
      '</section>';
  }

  function itemByKey(key) {
    if (key.indexOf('i:') === 0) return byId[key.slice(2)] || null;
    return null;
  }
  function bookByKey(key) { return key.indexOf('b:') === 0 ? bookById(key.slice(2)) : null; }

  function miniCard(key) {
    var t = T();
    var it = itemByKey(key), b = bookByKey(key);
    var pages = {
      'p:compare': { emoji: '🤖', href: '#compare', title: t.compare, sub: t.cmpSub, c: '#D6E8FA' },
      'p:glossary': { emoji: '📖', href: '#glossary', title: t.glossary, sub: t.glsSub, c: '#FFF1D6' },
      'p:books': { emoji: '📚', href: '#books', title: t.bookshelfTitle.replace('📚 ', ''), sub: t.bookshelfLead.slice(0, 30) + '…', c: '#F6DFE8' }
    };
    if (it) {
      return '<a class="minicard" href="#' + it.id + '" style="--c1:' + it.c1 + '">' +
        '<span aria-hidden="true">' + it.emoji + '</span><b>' + esc(it.name[state.lang]) + '</b>' +
        '<small>' + esc(it.sub[state.lang]) + '</small></a>';
    }
    if (b) {
      return '<a class="minicard" href="#books" data-book="' + key.slice(2) + '" style="--c1:' + b.c + '">' +
        '<span aria-hidden="true">' + b.emoji + '</span><b>' + esc(b.title[state.lang]) + '</b>' +
        '<small>' + esc(t.shelfPages(b.pages)) + ' · ' + esc(priceOf(b)) + '</small></a>';
    }
    if (pages[key]) {
      var p = pages[key];
      return '<a class="minicard" href="' + p.href + '" style="--c1:' + p.c + '">' +
        '<span aria-hidden="true">' + p.emoji + '</span><b>' + esc(p.title) + '</b>' +
        '<small>' + esc(p.sub) + '</small></a>';
    }
    return '';
  }

  function favSection() {
    var t = T();
    var keys = favKeys();
    var body;
    if (!keys.length) {
      body = '<p class="empty-line">' + esc(t.favEmpty) + '</p>';
    } else {
      body = '<div class="minigrid">' + keys.map(miniCard).join('') + '</div>' +
        '<div class="fav-foot"><span>' + esc(t.favCount(keys.length)) + '</span>' +
        '<button type="button" class="tiny-btn" data-fav-clear="1">' + esc(t.favClear) + '</button></div>';
    }
    return '<section class="block" id="favs-block">' +
      '<h2>' + esc(t.favTitle) + '</h2>' +
      '<p class="block-lead">' + esc(t.favLead) + '</p>' + body + '</section>';
  }

  function recentSection() {
    var t = T();
    var keys = readList(RECENT_KEY).filter(function (k) { return itemByKey(k) || bookByKey(k) || k.indexOf('p:') === 0; });
    if (!keys.length) return '';
    return '<section class="block">' +
      '<h2>' + esc(t.recentTitle) + '</h2>' +
      '<p class="block-lead">' + esc(t.recentLead) + '</p>' +
      '<div class="minigrid">' + keys.slice(0, 6).map(miniCard).join('') + '</div>' +
      '<div class="fav-foot"><button type="button" class="tiny-btn" data-recent-clear="1">' + esc(t.recentClear) + '</button></div>' +
      '</section>';
  }

  /* ───────── 비교표 ───────── */
  function levelClass(v) {
    if (!v) return 'lv-none';
    if (v.indexOf('—') === 0) return 'lv-none';
    if (v.indexOf('강함') === 0 || v.indexOf('Strong') === 0) return 'lv-strong';
    if (v.indexOf('보통') === 0 || v.indexOf('Fair') === 0) return 'lv-fair';
    if (v.indexOf('약함') === 0 || v.indexOf('Weak') === 0) return 'lv-weak';
    if (v.indexOf('없음') === 0 || v.indexOf('No ') === 0) return 'lv-none';
    return 'lv-yes';
  }
  function levelCell(v) {
    var txt = L(v);
    return '<td><span class="lv ' + levelClass(txt) + '">' + esc(txt) + '</span></td>';
  }

  function toolFact(it) { return TOOLFACTS[it.id]; }
  function siteLinks(f) {
    return f.sites.map(function (s) {
      return '<a class="csite" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) + ' ↗</a>';
    }).join('');
  }
  function freeClass(f) {
    var v = f.free[state.lang];
    return (v.indexOf('있음') === 0 || v.indexOf('Yes') === 0 || v.indexOf('Some') === 0 || v.indexOf('일부') === 0) ? 'lv-yes' : 'lv-fair';
  }

  function renderCompare() {
    var t = T();
    var tools = ITEMS.filter(function (i) { return i.group === 'tool'; });

    var rows = tools.map(function (it) {
      var f = toolFact(it);
      if (!f) return '';
      return '<tr>' +
        '<th scope="row"><a class="ctool" href="#' + it.id + '" style="--c1:' + it.c1 + '">' +
          '<span aria-hidden="true">' + it.emoji + '</span><b>' + esc(it.name[state.lang]) + '</b>' +
          '<small>' + esc(f.note[state.lang]) + '</small></a></th>' +
        '<td><span class="lv ' + freeClass(f) + '">' + esc(L(f.free)) + '</span></td>' +
        levelCell(f.ko) + levelCell(f.img) + levelCell(f.vid) + levelCell(f.doc) + levelCell(f.code) +
        '<td class="csites">' + siteLinks(f) + '<small class="cdate">2026-11</small></td>' +
        '</tr>';
    }).join('');

    var cards = tools.map(function (it) {
      var f = toolFact(it);
      if (!f) return '';
      var row = function (label, val, cls) {
        return '<div class="cc-row"><span class="cc-k">' + esc(label) + '</span>' +
          '<span class="cc-v"><span class="lv ' + (cls || '') + '">' + esc(val) + '</span></span></div>';
      };
      return '<article class="cc" style="--c1:' + it.c1 + '">' +
        '<a class="cc-head" href="#' + it.id + '">' +
          '<span class="cc-em" aria-hidden="true">' + it.emoji + '</span>' +
          '<span class="cc-tx"><b>' + esc(it.name[state.lang]) + '</b><small>' + esc(f.note[state.lang]) + '</small></span>' +
          '<span class="cc-go" aria-hidden="true">→</span></a>' +
        row(t.compareFree, L(f.free), freeClass(f)) +
        row(t.compareKorean, L(f.ko), levelClass(L(f.ko))) +
        row(t.compareImage, L(f.img), levelClass(L(f.img))) +
        row(t.compareVideo, L(f.vid), levelClass(L(f.vid))) +
        row(t.compareDoc, L(f.doc), levelClass(L(f.doc))) +
        row(t.compareCode, L(f.code), levelClass(L(f.code))) +
        '<div class="cc-sites"><span class="cc-k">' + esc(t.compareSite) + '</span>' + siteLinks(f) +
        '<small class="cdate">2026-11</small></div></article>';
    }).join('');

    return '<article class="detail cmp-page">' +
      '<a class="back" href="#home">← ' + esc(t.back) + '</a>' +
      '<header class="detail-head"><span class="d-em" aria-hidden="true">🤖</span>' +
        '<div class="d-tx"><p class="d-group">' + esc(t.navAtGlance) + '</p>' +
        '<h1>' + esc(t.compareTitle.replace('🤖 ', '')) + '</h1>' +
        '<p class="d-sub">' + esc(t.compareLead) + '</p></div></header>' +
      '<div class="tblwrap"><table class="cmp">' +
        '<caption class="sr-only">' + esc(t.compareTitle) + '</caption>' +
        '<thead><tr><th scope="col">' + esc(t.compareTool) + '</th><th scope="col">' + esc(t.compareFree) + '</th>' +
        '<th scope="col">' + esc(t.compareKorean) + '</th><th scope="col">' + esc(t.compareImage) + '</th>' +
        '<th scope="col">' + esc(t.compareVideo) + '</th><th scope="col">' + esc(t.compareDoc) + '</th>' +
        '<th scope="col">' + esc(t.compareCode) + '</th><th scope="col">' + esc(t.compareSite) + '</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table></div>' +
      '<div class="cmp-cards">' + cards + '</div>' +
      '<p class="cmp-legend">' + esc(t.compareLegend) + '</p>' +
      '<p class="cmp-legend">' + esc(t.officialNote) + '</p>' +
      '</article>';
  }

  /* ───────── 용어사전 ───────── */
  function renderGlossary() {
    var t = T();
    var cards = GLOSSARY.map(function (g) {
      return '<article class="term" id="gl-' + g.id + '">' +
        '<h2>' + esc(g.term[state.lang]) + '</h2>' +
        '<p>' + esc(g.d[state.lang]) + '</p></article>';
    }).join('');
    return '<article class="detail gls-page">' +
      '<a class="back" href="#home">← ' + esc(t.back) + '</a>' +
      '<header class="detail-head"><span class="d-em" aria-hidden="true">📖</span>' +
        '<div class="d-tx"><p class="d-group">' + esc(t.navAtGlance) + '</p>' +
        '<h1>' + esc(t.glossaryTitle.replace('📖 ', '')) + '</h1>' +
        '<p class="d-sub">' + esc(t.glossaryLead) + '</p></div></header>' +
      '<p class="gls-count">' + esc(t.glossaryCount(GLOSSARY.length)) + '</p>' +
      '<div class="termlist">' + cards + '</div></article>';
  }

  /* ───────── 즐겨찾기 페이지 ───────── */
  function renderFavs() {
    var t = T();
    var keys = favKeys();
    return '<article class="detail fav-page">' +
      '<a class="back" href="#home">← ' + esc(t.back) + '</a>' +
      '<header class="detail-head"><span class="d-em" aria-hidden="true">⭐</span>' +
        '<div class="d-tx"><p class="d-group">' + esc(t.navAtGlance) + '</p>' +
        '<h1>' + esc(t.favTitle.replace('⭐ ', '')) + '</h1>' +
        '<p class="d-sub">' + esc(t.favLead) + '</p></div></header>' +
      (keys.length
        ? '<div class="minigrid wide">' + keys.map(miniCard).join('') + '</div>' +
          '<div class="fav-foot"><span>' + esc(t.favCount(keys.length)) + '</span>' +
          '<button type="button" class="tiny-btn" data-fav-clear="1">' + esc(t.favClear) + '</button></div>'
        : '<p class="empty-line">' + esc(t.favEmpty) + '</p>') +
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
    } else if (state.route === 'compare') {
      view.innerHTML = renderCompare();
      document.title = T().compareTitle.replace('🤖 ', '') + ' · ' + t.brand;
      pushRecent('p:compare');
    } else if (state.route === 'glossary') {
      view.innerHTML = renderGlossary();
      document.title = T().glossaryTitle.replace('📖 ', '') + ' · ' + t.brand;
      pushRecent('p:glossary');
    } else if (state.route === 'favs') {
      view.innerHTML = renderFavs();
      document.title = T().favTitle.replace('⭐ ', '') + ' · ' + t.brand;
    } else if (state.route === 'books') {
      view.innerHTML = renderBooks();
      document.title = (state.lang === 'ko' ? '단비랩 전자책 서가' : 'The DanbiLab shelf') + ' · ' + t.brand;
      pushRecent('p:books');
    } else if (byId[state.route]) {
      var it = byId[state.route];
      view.innerHTML = renderDetail(it);
      document.title = it.name[state.lang] + ' · ' + t.brand;
      pushRecent('i:' + it.id);
    } else {
      view.innerHTML = '<article class="detail"><p class="notfound">' + esc(t.notFound) + '</p>' +
        '<p><a class="back" href="#home">← ' + esc(t.back) + '</a></p></article>';
    }

    renderSide();
    $$('.brand-name').forEach(function (e) { e.textContent = t.brand; });
    $$('.brand-sub').forEach(function (e) { e.textContent = t.brandSub; });
    $$('.brand').forEach(function (a) {
      a.setAttribute('aria-label', t.brand + ' — ' + t.home);
    });
    var dg = document.getElementById('danbi-guide-bar');
    if (dg) dg.setAttribute('data-lang', state.lang);
    if (window.DanbiGuide) window.DanbiGuide.render(state.lang);
    var stx = $('.share-tx');
    if (stx) stx.textContent = t.share;
    var shr = $('.share');
    if (shr) shr.setAttribute('aria-label', t.share);
    if (push !== false) {
      var crumb = $('#crumb');
      if (crumb) {
        crumb.textContent = state.route === 'home' ? '' : (state.route === 'books' ? t.bookshelfTitle : (byId[state.route] ? byId[state.route].name[state.lang] : ''));
      }
    }
    window.scrollTo(0, 0);
    closeDrawer();
    applyFocus();
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

  function setFavUI(key, on) {
    $$('[data-fav="' + key + '"]').forEach(function (el) {
      el.classList.toggle('on', on);
      el.setAttribute('aria-pressed', String(on));
      el.setAttribute('aria-label', on ? T().favOn : T().favAdd);
      el.setAttribute('title', on ? T().favOn : T().favAdd);
      if (el.classList.contains('fav')) el.textContent = on ? '★' : '☆';
      if (el.classList.contains('fav-detail')) {
        el.innerHTML = '<span aria-hidden="true">' + (on ? '★' : '☆') + '</span> ' + esc(on ? T().favOn : T().favAdd);
      }
    });
  }

  function runSearch(q) {
    state.hq = q;
    var box = $('#qres');
    if (!box) return;
    if (!String(q).trim()) { box.hidden = true; box.innerHTML = ''; return; }
    box.hidden = false;
    box.innerHTML = resultsHTML(q);
  }

  document.addEventListener('click', function (e) {
    var favBtn = e.target.closest ? e.target.closest('[data-fav]') : null;
    if (favBtn) {
      e.preventDefault(); e.stopPropagation();
      var key = favBtn.dataset.fav;
      var on = toggleFav(key);
      setFavUI(key, on);
      toast(on ? T().favSaved : T().favRemoved);
      if (state.route === 'favs' || state.route === 'home') render();
      return;
    }
    var favClear = e.target.closest ? e.target.closest('[data-fav-clear]') : null;
    if (favClear) {
      writeList(FAV_KEY, []);
      $$('[data-fav]').forEach(function (el) { setFavUI(el.dataset.fav, false); });
      render();
      return;
    }
    var recentClear = e.target.closest ? e.target.closest('[data-recent-clear]') : null;
    if (recentClear) { writeList(RECENT_KEY, []); render(); return; }
    var quick = e.target.closest ? e.target.closest('[data-quick]') : null;
    if (quick) {
      var input = $('#q');
      if (input) { input.value = quick.dataset.quick; }
      var clr = $('#qClear'); if (clr) clr.hidden = false;
      runSearch(quick.dataset.quick);
      return;
    }
    var sr = e.target.closest ? e.target.closest('[data-sr]') : null;
    if (sr) { goKey(sr.dataset.sr); return; }
    var bookLink = e.target.closest ? e.target.closest('[data-book]') : null;
    if (bookLink) {
      state.focusBook = bookLink.dataset.book;
      if (location.hash === '#books') { e.preventDefault(); render(); applyFocus(); }
      return;
    }
    if (e.target.closest && e.target.closest('#qClear')) {
      var box = $('#qres'), inp = $('#q');
      if (inp) { inp.value = ''; inp.focus(); }
      if (box) { box.hidden = true; box.innerHTML = ''; }
      state.hq = '';
      e.target.closest('#qClear').hidden = true;
      return;
    }
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
    document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'q') {
      var clr = $('#qClear'); if (clr) clr.hidden = !e.target.value;
      runSearch(e.target.value);
      return;
    }
    if (e.target && e.target.id === 'sideSearch') {
      state.sq = e.target.value;
      filterSide();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
    if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.getAttribute && e.target.getAttribute('data-fav')) {
      e.preventDefault();
      var key = e.target.getAttribute('data-fav');
      var on = toggleFav(key);
      setFavUI(key, on);
      toast(on ? T().favSaved : T().favRemoved);
      if (state.route === 'favs') render();
      return;
    }
    if (e.key === 'Enter' && e.target && e.target.id === 'q') {
      var first = document.querySelector('#qres .srow');
      if (first) { e.preventDefault(); goKey(first.dataset.sr); }
    }
  });
    render();
  });
})();
