/* ==========================================================================
   방방곡곡 대한민국 · app.js
   Renders the cover, the 10 city cards and each city's one-day course.
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
    filter: 'all',
    city: null,
    scrollY: 0
  };

  const T = () => UI[state.lang];
  const cityById = (id) => CITIES.find((c) => c.id === id);

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

  function tint(hex, amount) {
    // mix a hex colour with white — amount 0..1
    const n = parseInt(hex.slice(1), 16);
    const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    const m = (v) => Math.round(v + (255 - v) * amount);
    return `rgb(${m(r)},${m(g)},${m(b)})`;
  }

  const regionName = (id) => {
    const r = REGIONS.find((x) => x.id === id);
    return r ? r[state.lang] : '';
  };

  /* ---------------------------------------------------------- static copy */
  function applyStatic() {
    document.documentElement.lang = state.lang === 'ko' ? 'ko' : 'en';
    const t = T();
    $$('[data-t]').forEach((el) => {
      const key = el.getAttribute('data-t');
      if (typeof t[key] === 'string') el.textContent = t[key];
    });
    // hero headline keeps its decorated <em>
    const h1 = $('#heroTitle');
    if (h1) h1.innerHTML = `${esc(t.h1a)} <em>${esc(t.h1b)}</em>`;
    document.title = state.city && cityById(state.city)
      ? `${cityById(state.city).name[state.lang]} · ${state.lang === 'ko' ? '방방곡곡 대한민국' : 'Korea, Corner by Corner'}`
      : (state.lang === 'ko' ? '방방곡곡 대한민국 · Korea, Corner by Corner — 열 곳의 하루 코스' : 'Korea, Corner by Corner · 방방곡곡 대한민국 — ten one-day routes');
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
    const fg = $('#filters');
    if (fg) fg.setAttribute('aria-label', state.lang === 'ko' ? '지역' : 'Region');
    const cl = $('#cluster');
    if (cl) cl.setAttribute('aria-label', state.lang === 'ko' ? '도시 바로가기' : 'Jump to a city');
    const dm = document.querySelector('meta[name="description"]');
    if (dm) dm.setAttribute('content', t.lede);
  }

  /* --------------------------------------------------------------- cover */
  function renderStickers() {
    const picks = ['seoul', 'busan', 'jeju', 'gyeongju', 'gangneung', 'anseong'];
    const rot = [-4, 3, -2, 4, -3, 2];
    const y = [0, -6, 4, -3, 5, -2];
    $('#cluster').innerHTML = picks.map((id, i) => {
      const c = cityById(id);
      return `<button class="sticker" type="button" data-city="${c.id}"
        style="--r:${rot[i]}deg;--y:${y[i]}px" aria-label="${esc(c.name[state.lang])}">
        <span class="tile"><span class="emo" aria-hidden="true">${c.emoji}</span></span>
        <span class="nm">${esc(c.name[state.lang])}<em>${esc(c.name[state.lang === 'ko' ? 'en' : 'ko'])}</em></span>
      </button>`;
    }).join('');
  }

  function renderFilters() {
    $('#filters').innerHTML = REGIONS.map((r) => {
      const n = r.id === 'all' ? CITIES.length : CITIES.filter((c) => c.region === r.id).length;
      return `<button type="button" data-region="${r.id}" aria-pressed="${state.filter === r.id}">${esc(r[state.lang])}<small>${n}</small></button>`;
    }).join('');
  }

  function cardHTML(c) {
    const t = T();
    const first = c.courses[0];
    const stops = first.steps.length;
    return `<button class="card" type="button" data-city="${c.id}" style="--tint:${c.tint}">
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

  function renderGrid() {
    const list = state.filter === 'all' ? CITIES : CITIES.filter((c) => c.region === state.filter);
    $('#count').textContent = T().count(list.length);
    $('#grid').innerHTML = list.length ? list.map(cardHTML).join('')
      : `<p class="empty">${esc(T().notFound)}</p>`;
  }

  /* ---------------------------------------------------------------- city */
  function stepHTML(s, idx, city) {
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
        <p class="move">${isStart ? '' : moveIcon()}${esc(moveTxt)}</p>
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
    course.steps.forEach((s, i) => {
      if (s.phase !== lastPhase) {
        out += `<li class="phase"><span class="ph-dot" aria-hidden="true"></span>${esc(t.phase[s.phase])}</li>`;
        lastPhase = s.phase;
      }
      out += stepHTML(s, i, city);
    });
    return out;
  }

  function cityHTML(c) {
    const t = T();
    const course = c.courses[0];
    const tabs = c.courses.length > 1
      ? `<div class="course-tabs">${c.courses.map((cc, i) => `<button type="button" aria-pressed="${i === 0}">${esc(cc.title[state.lang])}</button>`).join('')}</div>`
      : '';
    return `
    <div class="city-bar">
      <button class="back" type="button" data-close>&larr; ${esc(t.back)}</button>
      <span class="bar-name">${esc(c.name[state.lang])}</span>
      <span class="bar-tools">
        <span class="lang" role="group" aria-label="Language">
          <button type="button" data-lang="ko" aria-pressed="${state.lang === 'ko'}">KR</button>
          <button type="button" data-lang="en" aria-pressed="${state.lang === 'en'}">EN</button>
        </span>
        <button class="share" type="button" data-share aria-label="${esc(t.share)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V4"/><path d="m8 7.5 4-3.5 4 3.5"/><path d="M5 13v5.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V13"/></svg>
          <span class="share-tx">${esc(t.share)}</span>
        </button>
      </span>
    </div>
    <div class="city-hero">
      <img src="images/${c.id}-cover.jpg" alt="${esc(c.name[state.lang])}" width="1300" height="900">
      <div class="cap">
        <p class="region">${esc(c.emoji)} ${esc(regionName(c.region))} · ${esc(c.sub[state.lang])}</p>
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
        <div class="sec-head">
          <h3>${esc(t.course)}</h3>
          <span class="k">${esc(t.courseOne)}</span>
        </div>
        <p class="sec-sub"><b>${esc(course.title[state.lang])}</b> · ${esc(course.meta[state.lang])}</p>
        ${tabs}
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

      <div class="city-foot">
        <button class="btn-ghost" type="button" data-close>&larr; ${esc(t.back)}</button>
        <button class="btn-ghost" type="button" data-next>${esc(t.next)} &rarr;</button>
      </div>
    </div>`;
  }

  function openCity(id, opts) {
    const c = cityById(id);
    if (!c) return;
    const first = !state.city;
    if (first) state.scrollY = window.scrollY;
    state.city = id;
    const panel = $('#city');
    panel.innerHTML = cityHTML(c);
    panel.hidden = false;
    panel.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    document.title = `${c.name[state.lang]} · ${state.lang === 'ko' ? '방방곡곡 대한민국' : 'Korea, Corner by Corner'}`;
    if (!opts || opts.hash !== false) {
      if (location.hash !== '#' + id) history.pushState(null, '', '#' + id);
    }
    const back = panel.querySelector('[data-close]');
    if (back) back.focus({ preventScroll: true });
  }

  function closeCity(viaHistory) {
    const panel = $('#city');
    if (panel.hidden) return;
    panel.hidden = true;
    panel.innerHTML = '';
    document.body.style.overflow = '';
    state.city = null;
    document.title = state.lang === 'ko' ? '방방곡곡 대한민국 · Korea, Corner by Corner — 열 곳의 하루 코스' : 'Korea, Corner by Corner · 방방곡곡 대한민국 — ten one-day routes';
    if (!viaHistory && location.hash) history.pushState(null, '', location.pathname + location.search);
    requestAnimationFrame(() => window.scrollTo({ top: state.scrollY, behavior: 'instant' in window ? 'instant' : 'auto' }));
  }

  function toast(msg, emoji) {
    const el = $('#toast');
    el.innerHTML = `<span aria-hidden="true">${emoji || '✅'}</span><span>${esc(msg)}</span>`;
    el.classList.add('is-in');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('is-in'), 2400);
  }

  async function doShare(btn) {
    const url = location.origin + location.pathname + (state.city ? '#' + state.city : '');
    const t = T();
    const title = state.city
      ? `${cityById(state.city).name[state.lang]} · ${t.brand}`
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
      toast(t.shareFail, '⚠️');
    }
  }

  function roll() {
    const dice = $('#dice');
    dice.classList.add('is-rolling');
    setTimeout(() => dice.classList.remove('is-rolling'), 650);
    const pool = CITIES.filter((c) => c.id !== state.city);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setTimeout(() => {
      openCity(pick.id);
      toast(`${pick.emoji} ${pick.name[state.lang]}`, '🎲');
    }, 380);
  }

  /* ------------------------------------------------------------- credits */
  function renderCredits() {
    const t = T();
    const seen = new Set();
    const items = [];
    CITIES.forEach((c) => {
      const files = [`${c.id}-cover`].concat(c.photos.map((p) => p.file));
      files.forEach((f) => {
        if (seen.has(f)) return;
        seen.add(f);
        const cr = (typeof PHOTO_CREDITS !== 'undefined' && PHOTO_CREDITS[f]) || null;
        items.push({ f, cr, cap: (c.photos.find((p) => p.file === f) || {}).cap });
      });
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
      const cityBtn = e.target.closest('[data-city]');
      if (cityBtn) { openCity(cityBtn.dataset.city); return; }

      const langBtn = e.target.closest('[data-lang]');
      if (langBtn) {
        if (state.lang !== langBtn.dataset.lang) {
          state.lang = langBtn.dataset.lang;
          store.set('kbc-lang', state.lang);
          paint();
        }
        return;
      }

      if (e.target.closest('[data-share]')) { doShare(e.target.closest('[data-share]')); return; }
      if (e.target.closest('[data-close]')) { closeCity(false); return; }
      if (e.target.closest('#backTop')) { closeCity(false); return; }

      const nextBtn = e.target.closest('[data-next]');
      if (nextBtn && state.city) {
        const i = CITIES.findIndex((c) => c.id === state.city);
        const nx = CITIES[(i + 1) % CITIES.length];
        openCity(nx.id);
        $('#city').scrollTop = 0;
        return;
      }

      const f = e.target.closest('[data-region]');
      if (f) {
        state.filter = f.dataset.region;
        renderFilters();
        renderGrid();
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
        if (!state.city) document.body.style.overflow = '';
      }
    });

    $('#dice').addEventListener('click', roll);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!$('#credits').hidden) { $('#credits').hidden = true; if (!state.city) document.body.style.overflow = ''; }
        else if (state.city) closeCity(false);
      }
    });

    window.addEventListener('hashchange', () => {
      const id = location.hash.replace('#', '');
      if (id && cityById(id)) openCity(id, { hash: false });
      else if (!id && state.city) closeCity(true);
    });
  }

  /* ---------------------------------------------------------------- paint */
  function paint() {
    applyStatic();
    renderStickers();
    renderFilters();
    renderGrid();
    if (state.city) {
      const id = state.city;
      const panel = $('#city');
      const top = panel.scrollTop;
      panel.innerHTML = cityHTML(cityById(id));
      panel.scrollTop = top;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    paint();
    const id = location.hash.replace('#', '');
    if (id && cityById(id)) openCity(id, { hash: false });
  });
})();
