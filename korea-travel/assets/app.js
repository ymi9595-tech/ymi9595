/* ==========================================================================
   당장 가볼까? · app.js
   Renders the left menu, the cover, 10 city courses and 21 day themes.
   ========================================================================== */
(function () {
  'use strict';

  const $  = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const store = {
    get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  const state = {
    lang: store.get('kbc-lang', 'ko') === 'en' ? 'en' : 'ko',
    tab: 'cities',
    route: { type: 'home', id: null },
    filter: 'all',
    themeFilter: 'all',
    seasonIdx: 0,
    homeScroll: 0
  };

  const T = () => UI[state.lang];
  const cityById = (id) => CITIES.find((c) => c.id === id);
  const themeById = (id) => THEMES.find((t) => t.id === id);
  const themeHash = (id) => '#t-' + id;
  const placeCount = (th) => th.seasons4 ? th.seasons4.items.reduce((n, s) => n + s.places.length, 0)
    : th.places ? th.places.length : 0;
  const themeCourse = (th, idx) => th.course || (th.seasons4 ? th.seasons4.items[idx || 0].course : null);

  /* ------------------------------------------------------------- helpers */
  function maps(q, cityName) {
    const term = q + (cityName ? ' ' + cityName : '');
    const g = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(term);
    const n = 'https://map.naver.com/p/search/' + encodeURIComponent(term);
    return `<div class="maps">
      <a href="${g}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>${esc(T().google)}</a>
      <a href="${n}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>${esc(T().naver)}</a>
    </div>`;
  }

  function moveIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13"/><path d="m13 7 5 5-5 5"/></svg>';
  }

  let trackedOnce = false;
  function trackPage() {
    if (typeof window.gtag !== 'function') return;
    if (!trackedOnce) { trackedOnce = true; return; }   /* the config call already counted this view */
    try {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: location.pathname + location.hash,
        page_location: location.href
      });
    } catch (e) {}
  }

  const regionName = (id) => {
    const r = REGIONS.find((x) => x.id === id);
    return r ? r[state.lang] : '';
  };

  const regionShort = (id) => (state.lang === 'ko'
    ? ({ capital: '수도권', gangwon: '강원', jeolla: '충청·전라', gyeongsang: '경상', jeju: '제주' }[id] || '')
    : ({ capital: 'Capital', gangwon: 'Gangwon', jeolla: 'Chungcheong·Jeolla', gyeongsang: 'Gyeongsang', jeju: 'Jeju' }[id] || ''));

  const HOME_TITLE = () => state.lang === 'ko'
    ? '당장 가볼까? · 한국 여행 코스 — 열 곳의 도시, 스물두 가지 테마'
    : 'Go Now? · Korea Day-Trip Courses — ten cities, twenty-two themes';

  /* ---------------------------------------------------------- static copy */
  function applyStatic() {
    document.documentElement.lang = state.lang === 'ko' ? 'ko' : 'en';
    const t = T();
    $$('[data-t]').forEach((el) => {
      const key = el.getAttribute('data-t');
      if (typeof t[key] === 'string') el.textContent = t[key];
    });
    const h1 = $('#heroTitle');
    if (h1) h1.innerHTML = `${esc(t.h1a)} <em>${esc(t.h1b)}</em>`;

    const dm = document.querySelector('meta[name="description"]');
    if (dm) dm.setAttribute('content', t.lede);

    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));

    const tabCity = $('#tabCityCount');
    const tabTheme = $('#tabThemeCount');
    if (tabCity) tabCity.textContent = t.sideCount(CITIES.length);
    if (tabTheme) tabTheme.textContent = t.sideCount(THEMES.length);
    const trustTheme = $('#trustTheme');
    if (trustTheme) trustTheme.textContent = t.themeCount(THEMES.length);
    const themeCount = $('#themeCount');
    if (themeCount) themeCount.textContent = t.themeCount(THEMES.length);
    const count = $('#count');
    if (count) count.textContent = t.count(CITIES.length);

    const filters = $('#filters');
    if (filters) filters.setAttribute('aria-label', state.lang === 'ko' ? '지역' : 'Region');
    const cluster = $('#cluster');
    if (cluster) cluster.setAttribute('aria-label', state.lang === 'ko' ? '도시 바로가기' : 'Jump to a city');
    const nav = $('#navBtn');
    if (nav) nav.setAttribute('aria-label', t.navOpen);
    const close = $('#sideClose');
    if (close) close.setAttribute('aria-label', t.navClose);
    const quick = $('#quick');
    if (quick) quick.setAttribute('aria-label', state.lang === 'ko' ? '빠른 이동' : 'Quick jump');

    document.title = state.route.type === 'city'
      ? `${cityById(state.route.id).name[state.lang]} · ${state.lang === 'ko' ? '당장 가볼까?' : 'Go Now?'}`
      : state.route.type === 'theme'
        ? `${themeById(state.route.id).name[state.lang]} · ${state.lang === 'ko' ? '당장 가볼까?' : 'Go Now?'}`
        : HOME_TITLE();
  }

  /* --------------------------------------------------------- side / quick */
  function sideItem(kind, id, emoji, name, sub) {
    const active = state.route.type === kind && state.route.id === id;
    const href = kind === 'city' ? '#' + id : themeHash(id);
    return `<li><a class="sitem${active ? ' is-on' : ''}" href="${href}" data-nav="${kind}:${id}"${active ? ' aria-current="true"' : ''}>
      <span class="sem" aria-hidden="true">${emoji}</span>
      <span class="stx"><b>${esc(name)}</b><small>${esc(sub || '')}</small></span>
    </a></li>`;
  }

  function renderSide() {
    const t = T();
    $$('#sideTabs [data-tab]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === state.tab)));
    const list = $('#sideList');
    if (!list) return;
    if (state.tab === 'cities') {
      list.innerHTML = CITIES.map((c) => sideItem('city', c.id, c.emoji, c.name[state.lang], regionName(c.region))).join('');
      const panelLabel = $('#tabCityCount') ? 'tabCityCount' : null;
      if (panelLabel) list.setAttribute('aria-labelledby', panelLabel);
    } else {
      list.innerHTML = THEMES.map((th) => sideItem('theme', th.id, th.emoji, th.name[state.lang], t.placesCount(placeCount(th)))).join('');
      list.setAttribute('aria-labelledby', 'tabThemeCount');
    }
    const hint = $('#sideHint');
    if (hint) hint.textContent = t.sideHint;
    renderSideBooks();
  }

  function renderQuick() {
    const box = $('#quick');
    if (!box) return;
    const t = T();
    const row = (kind, label, items) => `<div class="quick-row">
      <span class="ql">${esc(label)}</span>
      <div class="qscroll">${items.map(({ id, emoji, name, href }) => `<a href="${href}" data-nav="${kind}:${id}" class="qchip${state.route.type === kind && state.route.id === id ? ' is-on' : ''}"><span aria-hidden="true">${emoji}</span>${esc(name)}</a>`).join('')}</div>
    </div>`;
    box.innerHTML =
      row('city', state.lang === 'ko' ? '도시' : 'Cities', CITIES.map((c) => ({ id: c.id, emoji: c.emoji, name: c.name[state.lang], href: '#' + c.id }))) +
      row('theme', state.lang === 'ko' ? '테마' : 'Themes', THEMES.map((th) => ({ id: th.id, emoji: th.emoji, name: th.name[state.lang], href: themeHash(th.id) })));
    box.setAttribute('aria-label', state.lang === 'ko' ? '빠른 이동' : 'Quick jump');
    void t;
  }

  /* --------------------------------------------------------------- books */
  function bookBuyLabel(b) {
    return state.lang === 'ko' ? T().bookBuy : T().bookBuy;
  }

  function bookCard(b) {
    const t = T();
    return `<article class="book-card" style="--c1:${b.c1};--c2:${b.c2}">
      <div class="bk-head">
        <span class="bk-em" aria-hidden="true">${b.emoji}</span>
        <div class="bk-tx">
          <b>${esc(b.title)}</b>
          <small>${esc(b.meta)}</small>
        </div>
      </div>
      <p class="bk-ex"><span>${esc(t.bookExcerpt)}</span>${esc(b.excerpt)}</p>
      <div class="bk-foot">
        <span class="bk-price">${esc(b.price)}${b.was ? `<s>${esc(t.bookWas(b.was))}</s>` : ''}</span>
        <a class="bk-buy" href="${esc(b.url)}" target="_blank" rel="noopener noreferrer">${esc(bookBuyLabel(b))} <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;
  }

  function bookSecHTML(kind, id) {
    const t = T();
    const picks = (typeof bookPick === 'function') ? bookPick(state.lang, kind, id) : [];
    if (!picks.length) return '';
    return `<section class="sec book-sec">
      <div class="sec-head"><h3>📚 ${esc(t.bookInDetail)}</h3><span class="k">${esc(t.booksTitle.replace('📚 ', ''))}</span></div>
      <div class="book-grid${picks.length > 1 ? ' two' : ''}">${picks.map(bookCard).join('')}</div>
    </section>`;
  }

  function renderBookHome() {
    const grid = $('#bookGrid');
    if (!grid || typeof booksFor !== 'function') return;
    const t = T();
    grid.innerHTML = booksFor(state.lang).map(bookCard).join('');
    const shelf = $('#bookShelf');
    const shop = BOOK_SHOPS[state.lang];
    if (shelf && shop) {
      shelf.href = shop.url;
      shelf.textContent = t.booksShelf + ' ↗';
      shelf.setAttribute('aria-label', shop.label);
    }
  }

  function renderSideBooks() {
    const box = $('#sideBooks');
    if (!box || typeof booksFor !== 'function') return;
    const t = T();
    const list = booksFor(state.lang);
    const shop = BOOK_SHOPS[state.lang];
    box.innerHTML = `<p class="sbg"><span aria-hidden="true">📚</span>${esc(t.booksTitle.replace('📚 ', ''))}<em>${esc(t.booksCount(list.length))}</em></p>
      <ul class="sb-list">${list.map((b) => `<li><a href="${esc(b.url)}" target="_blank" rel="noopener noreferrer">
        <span class="sb-em" aria-hidden="true">${b.emoji}</span>
        <span class="sb-tx"><b>${esc(b.title)}</b><small>${esc(b.price)} · ${esc(t.bookPages(b.pages))}</small></span></a></li>`).join('')}</ul>
      <a class="sb-shelf" href="#books">${esc(t.booksShelf)} <span aria-hidden="true">→</span></a>
      ${shop ? `<a class="sb-shop" href="${esc(shop.url)}" target="_blank" rel="noopener noreferrer">${esc(shop.label)} ↗</a>` : ''}`;
  }

  /* --------------------------------------------------------------- home */
  function renderStickers() {
    const picks = ['seoul', 'busan', 'jeju', 'gyeongju', 'gangneung', 'anseong'];
    const rot = [-4, 3, -2, 4, -3, 2];
    const y = [0, -6, 4, -3, 5, -2];
    $('#cluster').innerHTML = picks.map((id, i) => {
      const c = cityById(id);
      return `<button class="sticker" type="button" data-open="city:${c.id}"
        style="--r:${rot[i]}deg;--y:${y[i]}px" aria-label="${esc(c.name[state.lang])}">
        <span class="tile"><span class="emo" aria-hidden="true">${c.emoji}</span></span>
        <span class="nm">${esc(c.name[state.lang])}<em>${esc(c.name[state.lang === 'ko' ? 'en' : 'ko'])}</em></span>
      </button>`;
    }).join('');
  }

  function renderFilters() {
    const box = $('#filters');
    if (!box) return;
    box.innerHTML = REGIONS.map((r) => {
      const n = r.id === 'all' ? CITIES.length : CITIES.filter((c) => c.region === r.id).length;
      return `<button type="button" data-region="${r.id}" aria-pressed="${state.filter === r.id}">${esc(r[state.lang])}<small>${n}</small></button>`;
    }).join('');
  }

  function cityCard(c) {
    const t = T();
    const first = c.courses[0];
    const stops = first.steps.length;
    return `<button class="card" type="button" data-open="city:${c.id}" style="--tint:${c.tint}">
      <span class="ph">
        <img src="images/${c.id}-cover.jpg" alt="${esc(c.name[state.lang])}" loading="lazy" decoding="async" width="1300" height="900">
        <span class="badge"><b aria-hidden="true">${c.emoji}</b>${esc(regionName(c.region))}</span>
      </span>
      <span class="body">
        <span class="cname">${esc(c.name[state.lang])}<span class="cen">${esc(c.name[state.lang === 'ko' ? 'en' : 'ko'])}</span></span>
        <span class="tagline">${esc(c.tag[state.lang])}</span>
        <span class="foot">
          <span class="meta">${esc(t.courseMeta(stops, c.duration[state.lang]))}</span>
          <span class="go">${esc(t.viewCourse)} <span class="ar">&rarr;</span></span>
        </span>
      </span>
    </button>`;
  }

  function themeCard(th) {
    const t = T();
    return `<a class="card tcard" href="${themeHash(th.id)}" data-open="theme:${th.id}" style="--tint:${th.tint}">
      <span class="ph">
        <img src="images/th-${th.id}.jpg" alt="${esc(th.name[state.lang])}" loading="lazy" decoding="async" width="1600" height="1000">
        <span class="badge"><b aria-hidden="true">${th.emoji}</b>${esc(t.themeTag)}</span>
      </span>
      <span class="body">
        <span class="cname">${esc(th.name[state.lang])}<span class="cen">${esc(th.name[state.lang === 'ko' ? 'en' : 'ko'])}</span></span>
        <span class="tagline">${esc(th.tag[state.lang])}</span>
        <span class="foot">
          <span class="meta">${esc(t.courseMeta(placeCount(th), th.duration[state.lang]))}</span>
          <span class="go">${esc(t.viewCourse)} <span class="ar">&rarr;</span></span>
        </span>
      </span>
    </a>`;
  }

  function renderHome() {
    renderStickers();
    renderFilters();
    const list = state.filter === 'all' ? CITIES : CITIES.filter((c) => c.region === state.filter);
    const count = $('#count');
    if (count) count.textContent = T().count(list.length);
    $('#grid').innerHTML = list.length ? list.map(cityCard).join('')
      : `<p class="empty">${esc(T().notFound)}</p>`;
    const tg = $('#themeGrid');
    if (tg) tg.innerHTML = THEMES.map(themeCard).join('');
    const tc = $('#themeCount');
    if (tc) tc.textContent = T().themeCount(THEMES.length);
    renderBookHome();
  }

  /* --------------------------------------------------------------- city */
  function stepHTML(s, city) {
    const t = T();
    const isStart = s.phase === 'start';
    const isReturn = s.phase === 'return';
    const pill = (isStart || isReturn) ? `<span class="pill">${esc(t.phase[s.phase])}</span>` : '';
    const moveTxt = s.move[state.lang];
    const thumb = s.photo
      ? `<span class="thumb"><img src="images/${s.photo}.jpg" alt="${esc(s.name[state.lang])}" loading="lazy" decoding="async"></span>`
      : '';
    return `<li class="step${isStart ? ' is-start' : ''}${isReturn ? ' is-return' : ''}">
      <span class="t">${esc(s.time)}</span>
      <span class="rail"><span class="dot"></span></span>
      <div class="cardstep">
        <h4>${esc(s.name[state.lang])}${pill}</h4>
        ${(isStart && moveTxt === t.phase[s.phase]) ? '' : `<p class="move">${isStart ? '' : moveIcon()}${esc(moveTxt)}</p>`}
        <p class="desc">${esc(s.desc[state.lang])}</p>
        ${maps(s.q, city.name[state.lang])}
        ${thumb}
      </div>
    </li>`;
  }

  function courseHTML(course, city) {
    const t = T();
    let out = '';
    let lastPhase = null;
    course.steps.forEach((s) => {
      if (s.phase !== lastPhase) {
        out += `<li class="phase"><span class="ph-dot" aria-hidden="true"></span>${esc(t.phase[s.phase])}</li>`;
        lastPhase = s.phase;
      }
      out += stepHTML(s, city);
    });
    return out;
  }

  function barHTML(name, backLabel, hashAttr) {
    const t = T();
    return `<div class="city-bar">
      <button class="back" type="button" data-back>&larr; ${esc(backLabel)}</button>
      <span class="bar-name">${esc(name)}</span>
    </div>`;
  }

  function cityHTML(c) {
    const t = T();
    const course = c.courses[0];
    return `
    ${barHTML(c.name[state.lang], t.back)}
    <div class="city-hero">
      <img src="images/${c.id}-cover.jpg" alt="${esc(c.name[state.lang])}" width="1300" height="900">
      <div class="cap">
        <p class="region">${esc(c.emoji)} ${esc(c.sub[state.lang])}</p>
        <h2>${esc(c.name[state.lang])}<span>${esc(c.name[state.lang === 'ko' ? 'en' : 'ko'])}</span></h2>
        <p class="tag">${esc(c.tag[state.lang])}</p>
        <div class="chips">
          <span>${esc(c.seasons.map((s) => s[state.lang]).join(' · '))}</span>
          <span>${esc(c.transport[state.lang])}</span>
          <span>${esc(c.duration[state.lang])}</span>
        </div>
      </div>
    </div>
    <div class="city-body">
      <p class="city-intro">${esc(c.intro[state.lang])}</p>
      <div class="city-cols">
      <div class="city-main">
      <section class="sec">
        <div class="hub">
          <span class="pin" aria-hidden="true">📍</span>
          <div class="hub-txt">
            <span class="lbl">${esc(t.hubLabel)}</span>
            <h4>${esc(c.hub[state.lang])}</h4>
            <p>${esc(c.hub.note[state.lang])}</p>
            ${maps(c.hub.q, c.name[state.lang])}
          </div>
        </div>
      </section>
      <section class="sec">
        <div class="sec-head"><h3>${esc(t.course)}</h3><span class="k">${esc(t.courseOne)}</span></div>
        <p class="sec-sub"><b>${esc(course.title[state.lang])}</b> · ${esc(course.meta[state.lang])}</p>
        <ol class="timeline">${courseHTML(course, c)}</ol>
      </section>
      </div>
      <aside class="city-side">
      <section class="sec">
        <div class="sec-head"><h3>${esc(t.foodTitle)}</h3></div>
        <p class="sec-sub">${esc(t.foodSub)}</p>
        <div class="food">
          ${c.food.map((f) => `<div class="fd">
            <span class="slot"><b aria-hidden="true">${f.emoji}</b>${esc(f.slot[state.lang])}</span>
            <span class="dish">${esc(f.dish[state.lang])}</span>
            <span class="note">${esc(f.note[state.lang])}</span>
          </div>`).join('')}
        </div>
      </section>
      <section class="sec">
        <div class="sec-head"><h3>${esc(t.photosTitle)}</h3></div>
        <p class="sec-sub">${esc(t.photosSub)}</p>
        <div class="gallery">
          ${c.photos.map((p) => `<figure><img src="images/${p.file}.jpg" alt="${esc(p.cap[state.lang])}" loading="lazy" decoding="async"><figcaption>${esc(p.cap[state.lang])}</figcaption></figure>`).join('')}
        </div>
      </section>
      <section class="sec">
        <div class="sec-head"><h3>${esc(t.alsoTitle)}</h3></div>
        <ul class="also">
          ${c.also.map((a) => `<li><span class="nm"><h4>${esc(a.name[state.lang])}</h4><p>${esc(a.desc[state.lang])}</p>${maps(a.q, c.name[state.lang])}</span></li>`).join('')}
        </ul>
        <p class="tip"><b>${esc(t.tipTitle)}</b> · ${esc(c.tip[state.lang])}</p>
      </section>
      </aside>
      </div>
      ${bookSecHTML('city', c.id)}
      <div class="city-foot">
        <button class="btn-ghost" type="button" data-back>&larr; ${esc(t.back)}</button>
        <button class="btn-ghost" type="button" data-next="city">${esc(t.nextCity)} &rarr;</button>
      </div>
    </div>`;
  }

  /* -------------------------------------------------------------- theme */
  function placeHTML(p, th) {
    return `<li class="place">
      <div class="ptop">
        <h4>${esc(p.name[state.lang])}${p.hot ? ' <span class="hot" aria-hidden="true">★</span>' : ''}</h4>
        <span class="preg">${esc(regionShort(p.region))}</span>
      </div>
      <p>${esc(p.note[state.lang])}</p>
      ${maps(p.q, th.hub[state.lang].replace(/\s*(역|터미널|공항).*$/, ''))}
    </li>`;
  }

  function themePlacesHTML(th) {
    const t = T();
    const rows = th.places.filter((p) => state.themeFilter === 'all' || p.region === state.themeFilter);
    const counts = {};
    th.places.forEach((p) => { counts[p.region] = (counts[p.region] || 0) + 1; });
    const chips = REGIONS.filter((r) => r.id === 'all' || counts[r.id]).map((r) => {
      const n = r.id === 'all' ? th.places.length : counts[r.id];
      return `<button type="button" data-tregion="${r.id}" aria-pressed="${state.themeFilter === r.id}">${esc(r.id === 'all' ? t.regionAll : r[state.lang])}<small>${n}</small></button>`;
    }).join('');
    return `<div class="filters theme-filters" role="group" aria-label="${esc(t.placesTitle)}">${chips}</div>
      <ul class="places">${rows.length ? rows.map((p) => placeHTML(p, th)).join('') : `<li class="empty">${esc(t.notFound)}</li>`}</ul>`;
  }

  function condsHTML(th) {
    const t = T();
    if (!th.conds || !th.conds.length) return '';
    return `<section class="sec">
      <div class="sec-head"><h3>${esc(t.condsTitle)}</h3></div>
      <dl class="conds">${th.conds.map((c) => `<div><dt>${esc(c.k[state.lang])}</dt><dd>${esc(c.v[state.lang])}</dd></div>`).join('')}</dl>
    </section>`;
  }

  function subsHTML(th) {
    if (!th.subs) return '';
    return `<section class="sec">
      <div class="sec-head"><h3>${esc(th.subs.title[state.lang])}</h3><span class="k">${th.subs.items.length}</span></div>
      <ul class="subs">${th.subs.items.map((s) => `<li><span class="se" aria-hidden="true">${s.emoji}</span><span class="sx"><b>${esc(s.name[state.lang])}</b><small>${esc(s.desc[state.lang])}</small></span></li>`).join('')}</ul>
    </section>`;
  }

  function seasonTabsHTML(th) {
    const t = T();
    if (!th.seasons4) return '';
    return `<div class="season-tabs" role="tablist" aria-label="${esc(th.seasons4.title[state.lang])}">${th.seasons4.items.map((s, i) => `<button type="button" role="tab" data-season="${i}" aria-selected="${state.seasonIdx === i}" aria-controls="seasonPanel">
      <span class="sem" aria-hidden="true">${s.emoji}</span>
      <span class="stx"><b>${esc(s.name[state.lang])}</b><small>${esc(s.months[state.lang])}</small></span>
    </button>`).join('')}</div>`;
  }

  function seasonPanelHTML(th) {
    const t = T();
    const s = th.seasons4.items[state.seasonIdx] || th.seasons4.items[0];
    return `<p class="season-blurb">${esc(s.blurb[state.lang])}</p>
      <div class="season-chips">${s.themes.map((x) => `<span class="schip">${esc(x[state.lang])}</span>`).join('')}</div>
      <div class="season-sub-h"><h4>${esc(t.dayTheme)}</h4><span class="k">${esc(s.name[state.lang])}</span></div>
      <p class="sec-sub"><b>${esc(s.course.title[state.lang])}</b> · ${esc(s.course.meta[state.lang])}</p>
      <ol class="timeline">${courseHTML(s.course, { name: th.name })}</ol>
      <div class="sec-head season-places-head"><h4>${esc(t.placesTitle)}</h4><span class="k">${esc(t.placesCount(s.places.length))}</span></div>
      <ul class="places">${s.places.map((p) => placeHTML(p, th)).join('')}</ul>`;
  }

  function themeHTML(th) {
    const t = T();
    const course = themeCourse(th, state.seasonIdx);
    return `
    ${barHTML(th.name[state.lang], t.themeBack)}
    <div class="city-hero">
      <img src="images/th-${th.id}.jpg" alt="${esc(th.name[state.lang])}" width="1600" height="1000">
      <div class="cap">
        <p class="region">${esc(th.emoji)} ${esc(th.sub[state.lang])}</p>
        <h2>${esc(th.name[state.lang])}<span>${esc(th.name[state.lang === 'ko' ? 'en' : 'ko'])}</span></h2>
        <p class="tag">${esc(th.tag[state.lang])}</p>
        <div class="chips">
          <span>${esc(t.themeTag)} · ${esc(t.placesCount(placeCount(th)))}</span>
          <span>${esc(th.seasons.map((s) => s[state.lang]).join(' · '))}</span>
          <span>${esc(th.transport[state.lang])}</span>
          <span>${esc(th.duration[state.lang])}</span>
        </div>
      </div>
    </div>
    <div class="city-body">
      <p class="city-intro">${esc(th.intro[state.lang])}</p>
      <div class="city-cols">
      <div class="city-main">
      <section class="sec">
        <div class="hub">
          <span class="pin" aria-hidden="true">📍</span>
          <div class="hub-txt">
            <span class="lbl">${esc(t.hubLabel)}</span>
            <h4>${esc(th.hub[state.lang])}</h4>
            <p>${esc(th.hub.note[state.lang])}</p>
            ${maps(th.hub.q)}
          </div>
        </div>
      </section>
      ${th.seasons4 ? `<section class="sec" id="seasonBlock">
        <div class="sec-head"><h3>${esc(th.seasons4.title[state.lang])}</h3><span class="k">4</span></div>
        ${seasonTabsHTML(th)}
        <div class="season-panel" id="seasonPanel" role="tabpanel">${seasonPanelHTML(th)}</div>
      </section>` : `<section class="sec" id="places">
        <div class="sec-head"><h3>${esc(t.placesTitle)}</h3><span class="k">${esc(t.placesCount(placeCount(th)))}</span></div>
        <p class="sec-sub">${esc(t.placesSub)}</p>
        ${themePlacesHTML(th)}
      </section>
      <section class="sec">
        <div class="sec-head"><h3>${esc(t.dayTheme)}</h3><span class="k">${esc(t.courseOne)}</span></div>
        <p class="sec-sub"><b>${esc(course.title[state.lang])}</b> · ${esc(course.meta[state.lang])}</p>
        <ol class="timeline">${courseHTML(course, { name: th.name })}</ol>
      </section>`}
      </div>
      <aside class="city-side">
      ${condsHTML(th)}
      ${subsHTML(th)}
      <section class="sec">
        <div class="sec-head"><h3>${esc(t.foodTitle)}</h3></div>
        <p class="sec-sub">${esc(t.foodSub)}</p>
        <div class="food">
          ${th.food.map((f) => `<div class="fd">
            <span class="slot"><b aria-hidden="true">${f.emoji}</b>${esc(f.slot[state.lang])}</span>
            <span class="dish">${esc(f.dish[state.lang])}</span>
            <span class="note">${esc(f.note[state.lang])}</span>
          </div>`).join('')}
        </div>
      </section>
      <section class="sec">
        <div class="sec-head"><h3>${esc(t.photosTitle)}</h3></div>
        <p class="sec-sub">${esc(t.photosSub)}</p>
        <div class="gallery">
          ${th.photos.map((p) => `<figure><img src="images/${p.file}.jpg" alt="${esc(p.cap[state.lang])}" loading="lazy" decoding="async"><figcaption>${esc(p.cap[state.lang])}</figcaption></figure>`).join('')}
        </div>
      </section>
      <section class="sec">
        <p class="tip"><b>${esc(t.tipTitle)}</b> · ${esc(th.tip[state.lang])}</p>
      </section>
      </aside>
      </div>
      ${bookSecHTML('theme', th.id)}
      <div class="city-foot">
        <button class="btn-ghost" type="button" data-back>&larr; ${esc(t.themeBack)}</button>
        <button class="btn-ghost" type="button" data-next="theme">${esc(t.nextTheme)} &rarr;</button>
      </div>
    </div>`;
  }

  /* ------------------------------------------------------------- routing */
  function cleanURL() { return location.pathname + location.search; }

  function render() {
    applyStatic();
    const detail = $('#detail');
    const home = $('#home');
    if (!detail || !home) return;
    document.body.classList.toggle('is-detail', state.route.type !== 'home');
    if (state.route.type === 'home') {
      detail.hidden = true;
      detail.innerHTML = '';
      home.hidden = false;
      renderHome();
    } else {
      const data = state.route.type === 'city' ? cityById(state.route.id) : themeById(state.route.id);
      if (!data) { state.route = { type: 'home', id: null }; render(); return; }
      home.hidden = true;
      detail.hidden = false;
      detail.innerHTML = state.route.type === 'city' ? cityHTML(data) : themeHTML(data);
    }
    renderSide();
    renderQuick();
    const crumb = $('#topCrumb');
    if (crumb) {
      crumb.textContent = state.route.type === 'city'
        ? `${T().navCity} · ${cityById(state.route.id).name[state.lang]}`
        : state.route.type === 'theme'
          ? `${T().navTheme} · ${themeById(state.route.id).name[state.lang]}`
          : '';
    }
    document.title = state.route.type === 'city'
      ? `${cityById(state.route.id).name[state.lang]} · ${state.lang === 'ko' ? '당장 가볼까?' : 'Go Now?'}`
      : state.route.type === 'theme'
        ? `${themeById(state.route.id).name[state.lang]} · ${state.lang === 'ko' ? '당장 가볼까?' : 'Go Now?'}`
        : HOME_TITLE();
    trackPage();
  }

  function routeFromHash() {
    const h = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (!h || h === 'pick' || h === 'themes') { state.route = { type: 'home', id: null }; return; }
    if (h.indexOf('t-') === 0) {
      const th = themeById(h.slice(2));
      state.route = th ? { type: 'theme', id: th.id } : { type: 'home', id: null };
      if (th) { state.themeFilter = 'all'; state.seasonIdx = 0; }
      return;
    }
    const c = cityById(h);
    state.route = c ? { type: 'city', id: c.id } : { type: 'home', id: null };
  }

  function applyRoute(scrollTop) {
    const wasHome = state.route.type === 'home';
    routeFromHash();
    const isHome = state.route.type === 'home';
    if (!isHome) state.tab = state.route.type === 'theme' ? 'themes' : 'cities';
    if (wasHome && !isHome) state.homeScroll = window.scrollY;
    render();
    if (!isHome) {
      window.scrollTo(0, 0);
    } else if (location.hash === '#books') {
      requestAnimationFrame(() => {
        const el = $('#books');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
      });
    } else if (location.hash === '#themes') {
      requestAnimationFrame(() => {
        const el = $('#themes');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
      });
    } else if (scrollTop !== false) {
      requestAnimationFrame(() => window.scrollTo({ top: state.homeScroll || 0, behavior: 'auto' }));
    }
    closeDrawer();
  }

  function navigate(hash) {
    if (location.hash === hash) { applyRoute(); return; }
    history.pushState({ kbc: 1 }, '', cleanURL() + hash);
    applyRoute();
  }

  function goBack() {
    closeDrawer();
    if (history.state && history.state.kbc) {
      history.back();
      return;
    }
    history.replaceState({}, '', cleanURL());
    applyRoute();
  }

  /* ------------------------------------------------------------ drawer */
  function openDrawer() {
    document.body.classList.add('side-open');
    const scrim = $('#scrim');
    if (scrim) scrim.hidden = false;
    const nav = $('#navBtn');
    if (nav) nav.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    document.body.classList.remove('side-open');
    const scrim = $('#scrim');
    if (scrim) scrim.hidden = true;
    const nav = $('#navBtn');
    if (nav) nav.setAttribute('aria-expanded', 'false');
  }
  const drawerOpen = () => document.body.classList.contains('side-open');

  /* ---------------------------------------------------------------- misc */
  function toast(msg, emoji) {
    const el = $('#toast');
    el.innerHTML = `<span aria-hidden="true">${emoji || '✅'}</span><span>${esc(msg)}</span>`;
    el.classList.add('is-in');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('is-in'), 2400);
  }

  async function doShare(btn) {
    const url = location.origin + cleanURL() + (state.route.type === 'city' ? '#' + state.route.id : state.route.type === 'theme' ? themeHash(state.route.id) : '');
    const t = T();
    const title = state.route.type === 'city'
      ? `${cityById(state.route.id).name[state.lang]} · ${t.brand}`
      : state.route.type === 'theme'
        ? `${themeById(state.route.id).name[state.lang]} · ${t.brand}`
        : `${t.brand}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: t.lede.slice(0, 90), url });
        return;
      } catch (e) {
        if (e && e.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      toast(t.shareDone, '🔗');
      if (btn) { btn.classList.add('is-done'); setTimeout(() => btn.classList.remove('is-done'), 1600); }
    } catch (e) {
      try {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        ta.remove();
        toast(ok ? t.shareDone : t.shareFail, ok ? '🔗' : '⚠️');
      } catch (e2) {
        toast(t.shareFail, '⚠️');
      }
    }
  }

  function roll() {
    const dice = $('#dice');
    dice.classList.add('is-rolling');
    setTimeout(() => dice.classList.remove('is-rolling'), 650);
    const pool = CITIES.concat(THEMES.map((th) => ({ theme: th })));
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setTimeout(() => {
      if (pick.theme) {
        navigate(themeHash(pick.theme.id));
        toast(`${pick.theme.emoji} ${pick.theme.name[state.lang]}`, '🎲');
      } else {
        navigate('#' + pick.id);
        toast(`${pick.emoji} ${pick.name[state.lang]}`, '🎲');
      }
    }, 380);
  }

  /* ------------------------------------------------------------- credits */
  function renderCredits() {
    const t = T();
    const seen = new Set();
    const items = [];
    const push = (f, cap) => {
      if (seen.has(f)) return;
      seen.add(f);
      const cr = (typeof PHOTO_CREDITS !== 'undefined' && PHOTO_CREDITS[f]) || null;
      items.push({ f, cr, cap });
    };
    CITIES.forEach((c) => {
      push(`${c.id}-cover`, { ko: c.name.ko + ' 대표 사진', en: c.name.en + ' — cover photograph' });
      c.photos.forEach((p) => push(p.file, p.cap));
    });
    THEMES.forEach((th) => {
      push(`th-${th.id}`, th.photos[0] ? th.photos[0].cap : { ko: th.name.ko + ' 대표 사진', en: th.name.en + ' — cover photograph' });
      th.photos.forEach((p) => push(p.file, p.cap));
    });
    $('#creditsList').innerHTML = items.map(({ f, cr, cap }) => `
      <li>
        <span class="th"><img src="images/${f}.jpg" alt="" loading="lazy"></span>
        <span><b>${esc(cap ? cap[state.lang] : f)}</b>
          <span>${esc(cr ? cr.title : '')}${cr && cr.author ? ' · ' + esc(cr.author) : ''}${cr ? ' · ' + esc(cr.license) : ''}</span>
          ${cr && cr.page ? `<span><a href="${esc(cr.page)}" target="_blank" rel="noopener noreferrer">wikimedia commons</a></span>` : ''}
        </span>
      </li>`).join('');
    $('#creditsTitle').textContent = t.creditsTitle;
    $('#creditsNote').textContent = t.creditsNote;
    $('#creditsClose').textContent = t.close;
  }

  /* --------------------------------------------------------------- events */
  function bind() {
    document.addEventListener('click', (e) => {
      const openBtn = e.target.closest('[data-open]');
      if (openBtn) {
        e.preventDefault();
        const [kind, id] = openBtn.dataset.open.split(':');
        navigate(kind === 'city' ? '#' + id : themeHash(id));
        return;
      }

      const sideLink = e.target.closest('[data-nav]');
      if (sideLink) {
        closeDrawer();
        if (sideLink.classList.contains('qchip') || sideLink.classList.contains('sitem')) {
          const [kind, id] = sideLink.dataset.nav.split(':');
          const want = kind === 'city' ? '#' + id : themeHash(id);
          if (location.hash !== want) { e.preventDefault(); navigate(want); }
        }
        return;
      }

      const tab = e.target.closest('[data-tab]');
      if (tab) {
        state.tab = tab.dataset.tab;
        renderSide();
        return;
      }

      const langBtn = e.target.closest('[data-lang]');
      if (langBtn) {
        if (state.lang !== langBtn.dataset.lang) {
          state.lang = langBtn.dataset.lang;
          store.set('kbc-lang', state.lang);
          render();
        }
        return;
      }

      if (e.target.closest('[data-share]')) { doShare(e.target.closest('[data-share]')); return; }
      if (e.target.closest('[data-back]')) { goBack(); return; }

      const nextBtn = e.target.closest('[data-next]');
      if (nextBtn) {
        if (nextBtn.dataset.next === 'city') {
          const i = CITIES.findIndex((c) => c.id === state.route.id);
          navigate('#' + CITIES[(i + 1) % CITIES.length].id);
        } else {
          const i = THEMES.findIndex((th) => th.id === state.route.id);
          navigate(themeHash(THEMES[(i + 1) % THEMES.length].id));
        }
        return;
      }

      const seasonBtn = e.target.closest('[data-season]');
      if (seasonBtn) {
        state.seasonIdx = Number(seasonBtn.dataset.season) || 0;
        const th = themeById(state.route.id);
        if (th) {
          $$('.season-tabs [data-season]').forEach((b) => b.setAttribute('aria-selected', String(Number(b.dataset.season) === state.seasonIdx)));
          const panel = $('#seasonPanel');
          if (panel) panel.innerHTML = seasonPanelHTML(th);
        }
        return;
      }

      const f = e.target.closest('[data-region]');
      if (f) {
        state.filter = f.dataset.region;
        renderFilters();
        const list = state.filter === 'all' ? CITIES : CITIES.filter((c) => c.region === state.filter);
        const count = $('#count');
        if (count) count.textContent = T().count(list.length);
        $('#grid').innerHTML = list.length ? list.map(cityCard).join('') : `<p class="empty">${esc(T().notFound)}</p>`;
        return;
      }

      const tf = e.target.closest('[data-tregion]');
      if (tf) {
        state.themeFilter = tf.dataset.tregion;
        const th = themeById(state.route.id);
        const box = $('#places');
        if (th && box) {
          box.innerHTML = `<div class="sec-head"><h3>${esc(T().placesTitle)}</h3><span class="k">${esc(T().placesCount(placeCount(th)))}</span></div>
            <p class="sec-sub">${esc(T().placesSub)}</p>${themePlacesHTML(th)}`;
        }
        return;
      }

      if (e.target.closest('#creditOpen')) {
        renderCredits();
        $('#credits').hidden = false;
        document.body.style.overflow = 'hidden';
        return;
      }
      if (e.target.closest('#creditsClose') || (e.target.id === 'credits')) {
        $('#credits').hidden = true;
        if (state.route.type === 'home') document.body.style.overflow = '';
      }

      if (e.target.closest('#navBtn')) { openDrawer(); return; }
      if (e.target.closest('#sideClose') || e.target.id === 'scrim') { closeDrawer(); return; }
      if (e.target.closest('[data-home]')) {
        e.preventDefault();
        closeDrawer();
        if (location.hash) { history.pushState({ kbc: 1 }, '', cleanURL()); applyRoute(); }
        else applyRoute();
        return;
      }
    });

    $('#dice').addEventListener('click', roll);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!$('#credits').hidden) { $('#credits').hidden = true; document.body.style.overflow = ''; }
        else if (drawerOpen()) closeDrawer();
        else if (state.route.type !== 'home') goBack();
      }
    });

    window.addEventListener('hashchange', () => applyRoute());
    window.addEventListener('popstate', () => applyRoute());
  }

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    applyRoute();
  });
})();
