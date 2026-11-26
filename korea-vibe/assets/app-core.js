/* ==========================================================================
   Jeong · core — utilities, tabs, Korean name card
   ========================================================================== */
(function () {
  'use strict';
  const J = (window.J = window.J || {});

  /* ------------------------------ utilities ------------------------------ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function hash32(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  let toastTimer = null;
  function toast(msg) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) { /* fall through */ }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function download(canvas, filename) {
    try {
      const a = document.createElement('a');
      a.download = filename;
      a.href = canvas.toDataURL('image/png');
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      toast('The image could not be saved in this browser.');
    }
  }

  function openLightbox(src) {
    const lb = $('#lightbox');
    const img = $('#lightboxImg');
    if (!lb || !img) return;
    img.src = src;
    lb.classList.add('open');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  /* letter-spaced canvas text */
  function drawSpaced(ctx, text, x, y, spacing, align) {
    if ('letterSpacing' in ctx) {
      const prevAlign = ctx.textAlign;
      const prevSpacing = ctx.letterSpacing;
      ctx.letterSpacing = spacing + 'px';
      ctx.textAlign = align || 'left';
      ctx.fillText(text, x, y);
      ctx.letterSpacing = prevSpacing;
      ctx.textAlign = prevAlign;
      return;
    }
    const chars = Array.from(text);
    let total = 0;
    chars.forEach((c, i) => { total += ctx.measureText(c).width + (i < chars.length - 1 ? spacing : 0); });
    let cx = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
    chars.forEach((c) => {
      ctx.fillText(c, cx, y);
      cx += ctx.measureText(c).width + spacing;
    });
    return total;
  }

  function wrapLines(ctx, text, maxWidth) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = '';
    words.forEach((w) => {
      const test = line ? line + ' ' + w : w;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = w;
      } else {
        line = test;
      }
    });
    if (line) lines.push(line);
    return lines;
  }

  async function ensureFonts(samples = ['하늘', '가나다라', '정']) {
    if (!document.fonts || !document.fonts.load) return;
    const loads = [];
    samples.forEach((s) => {
      loads.push(document.fonts.load('400 100px "Jua"', s).catch(() => {}));
      loads.push(document.fonts.load('400 40px "Noto Sans KR"', s).catch(() => {}));
      loads.push(document.fonts.load('500 40px "Noto Sans KR"', s).catch(() => {}));
      loads.push(document.fonts.load('700 40px "Noto Sans KR"', s).catch(() => {}));
      loads.push(document.fonts.load('400 40px "Gaegu"', s).catch(() => {}));
      loads.push(document.fonts.load('700 40px "Gaegu"', s).catch(() => {}));
    });
    ['Jeong', 'Haneul', 'Seoul'].forEach((s) => {
      loads.push(document.fonts.load('600 60px "Fredoka"', s).catch(() => {}));
      loads.push(document.fonts.load('500 60px "Plus Jakarta Sans"', s).catch(() => {}));
      loads.push(document.fonts.load('700 60px "Plus Jakarta Sans"', s).catch(() => {}));
      loads.push(document.fonts.load('800 60px "Plus Jakarta Sans"', s).catch(() => {}));
    });
    try { await Promise.all(loads); } catch (e) { /* ignore */ }
    try { await document.fonts.ready; } catch (e) { /* ignore */ }
  }

  /* paper texture for canvas */
  function paperTexture(ctx, w, h, seed = 1) {
    const rnd = mulberry32(seed);
    ctx.save();
    for (let i = 0; i < 3200; i++) {
      const x = rnd() * w;
      const y = rnd() * h;
      const s = 0.5 + rnd() * 1.6;
      ctx.fillStyle = `rgba(${120 + rnd() * 60 | 0},${95 + rnd() * 50 | 0},${60 + rnd() * 40 | 0},${(0.012 + rnd() * 0.035).toFixed(3)})`;
      ctx.fillRect(x, y, s, s);
    }
    ctx.restore();
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  Object.assign(J, {
    $, $$, hash32, mulberry32, toast, copyText, download, openLightbox,
    escapeHtml, todayKey, drawSpaced, wrapLines, ensureFonts, paperTexture, roundRect
  });

  /* ------------------------------- header -------------------------------- */
  const head = $('#siteHead');
  function onScroll() {
    if (!head) return;
    head.classList.toggle('solid', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* -------------------------------- tabs --------------------------------- */
  const tabNames = ['name', 'rain', 'phrases', 'kitchen'];
  const tabs = $$('.tab');
  const panels = $$('.panel');

  function activateTab(name, opts = {}) {
    if (!tabNames.includes(name)) return;
    tabs.forEach((t) => {
      const on = t.dataset.tab === name;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach((p) => p.classList.toggle('is-active', p.id === 'panel-' + name));
    if (opts.updateHash !== false && history.replaceState) {
      history.replaceState(null, '', '#' + name);
    }
    if (opts.scroll) {
      const target = $('#tools');
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    document.dispatchEvent(new CustomEvent('jeong:tab', { detail: { name } }));
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab, { scroll: false }));
    tab.addEventListener('keydown', (e) => {
      const i = tabNames.indexOf(tab.dataset.tab);
      let next = null;
      if (e.key === 'ArrowRight') next = tabNames[(i + 1) % tabNames.length];
      if (e.key === 'ArrowLeft') next = tabNames[(i - 1 + tabNames.length) % tabNames.length];
      if (e.key === 'Home') next = tabNames[0];
      if (e.key === 'End') next = tabNames[tabNames.length - 1];
      if (next) {
        e.preventDefault();
        activateTab(next, { scroll: false });
        const btn = tabs.find((t) => t.dataset.tab === next);
        if (btn) btn.focus();
      }
    });
  });

  $$('[data-tab-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(link.dataset.tabLink, { scroll: true });
    });
  });

  const initial = (location.hash || '').replace('#', '');
  if (tabNames.includes(initial)) {
    activateTab(initial, { updateHash: false });
  }

  window.addEventListener('hashchange', () => {
    const h = (location.hash || '').replace('#', '');
    if (tabNames.includes(h)) activateTab(h, { updateHash: false });
  });

  /* ---------------------------- rain in scenes --------------------------- */
  const SVGNS = 'http://www.w3.org/2000/svg';
  function makeRain(group, count, w, h, scale = 1) {
    if (!group) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const len = (12 + Math.random() * 26) * scale;
      const line = document.createElementNS(SVGNS, 'line');
      line.setAttribute('x1', x.toFixed(1));
      line.setAttribute('y1', y.toFixed(1));
      line.setAttribute('x2', (x - 5 * scale).toFixed(1));
      line.setAttribute('y2', (y + len).toFixed(1));
      line.setAttribute('class', 'rain-drop');
      line.style.strokeWidth = (0.6 + Math.random() * 1.1).toFixed(2);
      line.style.opacity = (0.22 + Math.random() * 0.42).toFixed(2);
      line.style.animationDuration = (1.15 + Math.random() * 1.7).toFixed(2) + 's';
      line.style.animationDelay = (-Math.random() * 3).toFixed(2) + 's';
      frag.appendChild(line);
    }
    group.appendChild(frag);
  }
  /* drifting cherry petals in the hero illustration */
  const PETAL_COLORS = ['#FFC2D4', '#FFD9E4', '#FFB7C8', '#FFF0F5', '#F7C7DA'];
  function makePetals(group, count, w, h) {
    if (!group) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const petal = document.createElementNS(SVGNS, 'ellipse');
      petal.setAttribute('cx', (Math.random() * w).toFixed(1));
      petal.setAttribute('cy', (Math.random() * h - h).toFixed(1));
      petal.setAttribute('rx', (5 + Math.random() * 4).toFixed(1));
      petal.setAttribute('ry', (3 + Math.random() * 2.5).toFixed(1));
      petal.setAttribute('fill', PETAL_COLORS[i % PETAL_COLORS.length]);
      petal.setAttribute('class', 'petal');
      petal.style.opacity = (0.5 + Math.random() * 0.45).toFixed(2);
      petal.style.animationDuration = (11 + Math.random() * 13).toFixed(1) + 's';
      petal.style.animationDelay = (-Math.random() * 16).toFixed(1) + 's';
      frag.appendChild(petal);
    }
    group.appendChild(frag);
  }
  makePetals($('#heroPetals'), 18, 640, 520);
  J.makePetals = makePetals;
  makeRain($('#timerRain'), 80, 900, 520, 0.9);
  J.makeRain = makeRain;

  // keep the hero rain alive if the tab was hidden for a long while
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) onScroll();
  });

  /* ------------------------- Korean name & zodiac ------------------------ */
  const NAMES = window.JEONG_NAMES;
  const ZODIAC = window.JEONG_ZODIAC;

  function zodiacForYear(year) {
    const idx = (((year - 4) % 12) + 12) % 12;
    return ZODIAC[idx];
  }

  function sortLabel(traits) {
    return traits.join(' · ');
  }

  function pick(arr, rnd) {
    return arr[Math.floor(rnd() * arr.length) % arr.length];
  }

  function buildResult({ name, dateStr, vibe, salt }) {
    const d = new Date(dateStr + 'T12:00:00');
    if (isNaN(d.getTime())) return null;
    const year = d.getFullYear();
    const z = zodiacForYear(year);
    const seed = hash32([name.trim().toLowerCase(), dateStr, vibe, salt, 'jeong-v1'].join('|'));
    const rnd = mulberry32(seed);
    const pool = NAMES.names.filter((n) => n.vibe === vibe);
    const given = pick(pool, rnd);
    const surname = pick(NAMES.surnames, rnd);
    // today's luck is shared by everyone born in the same year — a small daily ritual
    const dayRnd = mulberry32(hash32(todayKey() + '|' + z.key + '|luck'));
    const food = pick(z.foods, dayRnd);
    const color = pick(z.colors, dayRnd);
    const phrase = pick(z.phrases, dayRnd);
    return { name: name.trim(), given, surname, year, zodiac: z, food, color, phrase, vibe };
  }

  const nameForm = $('#nameForm');
  const card = $('#nameCard');
  let currentResult = null;

  function paintCard(res) {
    if (!res) return;
    $('#cardName').textContent = res.given.ko;
    $('#cardFull').textContent = `${res.surname.ko} ${res.given.ko}`;
    $('#cardRom').textContent = `${res.surname.ro} ${res.given.ro}`;
    $('#cardMeaning').innerHTML = `<b>${escapeHtml(res.given.en)}</b> — ${escapeHtml(res.given.line)}`;
    $('#cardZodiacLabel').textContent = `born in the year of the ${res.zodiac.animal.toLowerCase()} · ${res.year}`;
    $('#cardZodiacName').innerHTML = `${res.zodiac.ko} <em>${res.zodiac.animal} · ${res.zodiac.hanja}</em>`;
    $('#cardTraits').textContent = sortLabel(res.zodiac.traits);
    $('#cardFood').innerHTML = `<b lang="ko">${escapeHtml(res.food.ko)}</b> ${escapeHtml(res.food.en)}`;
    $('#cardColor').innerHTML = `<span class="sw" style="background:${res.color.hex}"></span><b lang="ko">${escapeHtml(res.color.ko)}</b> ${escapeHtml(res.color.en)}`;
    $('#cardPhrase').innerHTML = `<b lang="ko">${escapeHtml(res.phrase.ko)}</b> “${escapeHtml(res.phrase.en)}”`;
    card.classList.remove('is-empty');
    card.classList.remove('pop');
    void card.offsetWidth;
    card.classList.add('pop');
  }

  let salt = 0;

  function currentVibe() {
    const checked = $('input[name="vibe"]:checked');
    return checked ? checked.value : 'gentle';
  }

  function drawName(useSalt) {
    const name = $('#givenName').value.trim();
    const dateStr = $('#birthDate').value;
    if (!name) {
      toast('Write your name first — a first name is enough.');
      $('#givenName').focus();
      return;
    }
    if (!dateStr) {
      toast('Add your birth date so we can find your 띠.');
      $('#birthDate').focus();
      return;
    }
    if (useSalt) salt += 1;
    else salt = 0;
    const res = buildResult({ name, dateStr, vibe: currentVibe(), salt });
    if (!res) {
      toast('That date did not look right — please check it.');
      return;
    }
    currentResult = res;
    paintCard(res);
    try {
      localStorage.setItem('jeong.name', JSON.stringify({ name, date: dateStr, vibe: currentVibe(), salt }));
    } catch (e) { /* ignore */ }
  }

  if (nameForm) {
    nameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      drawName(false);
    });
    $('#btnAnotherName').addEventListener('click', () => drawName(true));
    // restore last card
    try {
      const saved = JSON.parse(localStorage.getItem('jeong.name') || 'null');
      if (saved && saved.name && saved.date) {
        $('#givenName').value = saved.name;
        $('#birthDate').value = saved.date;
        const radio = $(`input[name="vibe"][value="${saved.vibe}"]`);
        if (radio) radio.checked = true;
        salt = Number(saved.salt) || 0;
        const res = buildResult({ name: saved.name, dateStr: saved.date, vibe: saved.vibe || 'gentle', salt });
        if (res) { currentResult = res; paintCard(res); }
      }
    } catch (e) { /* ignore */ }
  }

  /* --------------------------- name card canvas -------------------------- */
  /* A K-pop photocard: pastel gradient, masking tape, stickers, Jua type.   */
  const CARD_W = 1000;
  const CARD_H = 1400;

  const CC = {
    ink: '#3B2E48', ink2: '#5E5070', ink3: '#9A8BAA',
    coral: '#FF7FA2', coralD: '#EE5E87', pink: '#FFC2D4',
    lilac: '#9A83F5', mint: '#5FA98A', butter: '#FFD86B',
    plum: '#C37E9B'
  };

  function softBlob(ctx, x, y, r, rgb, alpha) {
    const g = ctx.createRadialGradient(x, y, r * 0.08, x, y, r);
    g.addColorStop(0, `rgba(${rgb},${alpha})`);
    g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, CARD_W, CARD_H);
  }

  function dotGrid(ctx, color, step, r) {
    ctx.save();
    ctx.fillStyle = color;
    for (let y = step; y < CARD_H; y += step) {
      for (let x = step; x < CARD_W; x += step) {
        ctx.beginPath();
        ctx.arc(x, y, r || 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function heartPath(ctx, cx, cy, s) {
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.62);
    ctx.bezierCurveTo(cx - s * 1.18, cy - s * 0.16, cx - s * 0.64, cy - s * 1.04, cx, cy - s * 0.4);
    ctx.bezierCurveTo(cx + s * 0.64, cy - s * 1.04, cx + s * 1.18, cy - s * 0.16, cx, cy + s * 0.62);
    ctx.closePath();
  }

  function sparkPath(ctx, cx, cy, r) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.quadraticCurveTo(cx + r * 0.16, cy - r * 0.16, cx + r, cy);
    ctx.quadraticCurveTo(cx + r * 0.16, cy + r * 0.16, cx, cy + r);
    ctx.quadraticCurveTo(cx - r * 0.16, cy + r * 0.16, cx - r, cy);
    ctx.quadraticCurveTo(cx - r * 0.16, cy - r * 0.16, cx, cy - r);
    ctx.closePath();
  }

  function starPath(ctx, cx, cy, r, points) {
    const n = points || 5;
    ctx.beginPath();
    for (let i = 0; i < n * 2; i++) {
      const ang = -Math.PI / 2 + (i * Math.PI) / n;
      const rad = i % 2 === 0 ? r : r * 0.44;
      const x = cx + Math.cos(ang) * rad;
      const y = cy + Math.sin(ang) * rad;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
  }

  function drawTape(ctx, x, y, w, h, rot, tint) {
    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(rot);
    ctx.fillStyle = tint || 'rgba(255,204,223,0.92)';
    ctx.fillRect(-w / 2, -h / 2, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.42)';
    for (let i = -w / 2; i < w / 2; i += 24) ctx.fillRect(i, -h / 2, 12, h);
    ctx.strokeStyle = 'rgba(255,255,255,0.75)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(-w / 2, -h / 2); ctx.lineTo(-w / 2, h / 2);
    ctx.moveTo(w / 2, -h / 2); ctx.lineTo(w / 2, h / 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawLuckRow(ctx, label, ko, en, y, colorHex) {
    const h = 78;
    ctx.fillStyle = 'rgba(255,255,255,0.74)';
    roundRect(ctx, 140, y, 720, h, 28);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = 2.5;
    roundRect(ctx, 140, y, 720, h, 28);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#B08BC0';
    ctx.font = '800 15px "Plus Jakarta Sans", sans-serif';
    drawSpaced(ctx, label, 178, y + 46, 2, 'left');

    let x = 384;
    if (colorHex) {
      ctx.beginPath();
      ctx.arc(x + 11, y + 39, 11, 0, Math.PI * 2);
      ctx.fillStyle = colorHex;
      ctx.fill();
      ctx.strokeStyle = 'rgba(59,46,72,0.14)';
      ctx.lineWidth = 2;
      ctx.stroke();
      x += 34;
    }
    ctx.fillStyle = CC.ink;
    ctx.font = '400 37px "Jua", "Noto Sans KR", sans-serif';
    ctx.fillText(ko, x, y + 51);
    const kw = ctx.measureText(ko).width;

    /* keep the English gloss inside the row, shrinking it if it is long */
    const enX = x + kw + 16;
    const avail = 836 - enX;
    let enSize = 24;
    ctx.font = `600 ${enSize}px "Plus Jakarta Sans", sans-serif`;
    let enW = ctx.measureText(en).width;
    if (enW > avail) {
      enSize = Math.max(15, Math.floor((enSize * avail) / enW));
      ctx.font = `600 ${enSize}px "Plus Jakarta Sans", sans-serif`;
    }
    ctx.fillStyle = CC.ink2;
    ctx.fillText(en, enX, y + 48 + (24 - enSize) * 0.18);
  }

  async function renderNameCard(res) {
    await ensureFonts([res.given.ko, res.surname.ko, res.zodiac.ko, res.food.ko, res.color.ko, res.phrase.ko]);
    const canvas = document.createElement('canvas');
    canvas.width = CARD_W;
    canvas.height = CARD_H;
    const ctx = canvas.getContext('2d');

    /* ---- pastel paper ---- */
    const bg = ctx.createLinearGradient(0, 0, CARD_W * 0.55, CARD_H);
    bg.addColorStop(0, '#FFF8FC');
    bg.addColorStop(0.44, '#F8F1FF');
    bg.addColorStop(1, '#EDF8FF');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    softBlob(ctx, CARD_W - 30, 10, 660, '255,199,219', 0.55);
    softBlob(ctx, 20, CARD_H - 10, 640, '186,224,255', 0.6);
    softBlob(ctx, CARD_W * 0.48, CARD_H * 0.42, 580, '226,212,255', 0.45);
    dotGrid(ctx, 'rgba(206,172,214,0.34)', 28, 1.3);

    /* ---- photocard edge ---- */
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.96)';
    ctx.lineWidth = 30;
    roundRect(ctx, 15, 15, CARD_W - 30, CARD_H - 30, 56);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,194,212,0.6)';
    ctx.lineWidth = 2.5;
    roundRect(ctx, 46, 46, CARD_W - 92, CARD_H - 92, 42);
    ctx.stroke();
    ctx.restore();

    /* ---- stickers ---- */
    drawTape(ctx, 76, 68, 198, 58, -0.1);
    ctx.fillStyle = CC.coral;
    heartPath(ctx, 336, 118, 20);
    ctx.fill();
    ctx.fillStyle = CC.butter;
    sparkPath(ctx, 902, 470, 16);
    ctx.fill();

    /* ---- header row ---- */
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = CC.plum;
    ctx.font = '800 20px "Plus Jakarta Sans", sans-serif';
    drawSpaced(ctx, 'MY KOREAN NAME', 96, 200, 5, 'left');

    const badgeW = 228, badgeH = 52, badgeX = CARD_W - 96 - badgeW, badgeY = 156;
    ctx.fillStyle = 'rgba(255,243,201,0.95)';
    roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 26);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,216,107,0.9)';
    ctx.lineWidth = 2;
    roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 26);
    ctx.stroke();
    ctx.fillStyle = '#9A7320';
    ctx.font = '800 21px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Lucky day', badgeX + 26, badgeY + 34);
    ctx.fillStyle = CC.butter;
    starPath(ctx, badgeX + badgeW - 38, badgeY + 26, 13);
    ctx.fill();

    /* ---- the name ---- */
    const glyphs = Array.from(res.given.ko);
    const n = glyphs.length;
    const nameSize = n <= 1 ? 210 : n === 2 ? 188 : n === 3 ? 146 : 114;
    ctx.textAlign = 'center';
    ctx.fillStyle = CC.ink;
    ctx.font = `400 ${nameSize}px "Jua", "Noto Sans KR", sans-serif`;
    // soft pink offset shadow
    ctx.fillStyle = 'rgba(255,183,200,0.75)';
    ctx.fillText(res.given.ko, CARD_W / 2 + 5, 436);
    ctx.fillStyle = CC.ink;
    ctx.fillText(res.given.ko, CARD_W / 2, 430);

    /* full name + romanisation */
    ctx.fillStyle = CC.ink3;
    ctx.font = '500 34px "Noto Sans KR", sans-serif';
    drawSpaced(ctx, `${res.surname.ko} ${res.given.ko}`, CARD_W / 2, 498, 9, 'center');

    ctx.fillStyle = CC.lilac;
    ctx.font = '700 54px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`${res.surname.ro} ${res.given.ro}`, CARD_W / 2, 562);

    /* meaning */
    ctx.fillStyle = CC.ink2;
    ctx.font = '500 29px "Plus Jakarta Sans", sans-serif';
    const meaning = `${res.given.en} — ${res.given.line}`;
    let my = 618;
    wrapLines(ctx, meaning, 780).slice(0, 3).forEach((ln) => {
      ctx.fillText(ln, CARD_W / 2, my);
      my += 40;
    });

    /* dotted divider with a heart */
    const divY = my + 18;
    ctx.strokeStyle = 'rgba(255,158,186,0.75)';
    ctx.lineWidth = 3;
    ctx.setLineDash([2, 12]);
    ctx.beginPath();
    ctx.moveTo(200, divY);
    ctx.lineTo(440, divY);
    ctx.moveTo(560, divY);
    ctx.lineTo(800, divY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = CC.coral;
    heartPath(ctx, 500, divY, 17);
    ctx.fill();

    /* ---- zodiac card ---- */
    const zTop = divY + 26;
    const zH = 146;
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    roundRect(ctx, 140, zTop, 720, zH, 34);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = 2.5;
    roundRect(ctx, 140, zTop, 720, zH, 34);
    ctx.stroke();

    ctx.fillStyle = '#EFE6FF';
    ctx.beginPath();
    ctx.arc(208, zTop + zH / 2, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = CC.lilac;
    starPath(ctx, 208, zTop + zH / 2, 18);
    ctx.fill();

    ctx.textAlign = 'left';
    ctx.fillStyle = CC.ink3;
    ctx.font = '800 15px "Plus Jakarta Sans", sans-serif';
    drawSpaced(ctx, `BORN IN THE YEAR OF THE ${res.zodiac.animal.toUpperCase()} · ${res.year}`, 262, zTop + 46, 2.2, 'left');

    ctx.fillStyle = CC.ink;
    ctx.font = '400 44px "Jua", "Noto Sans KR", sans-serif';
    ctx.fillText(res.zodiac.ko, 262, zTop + 100);
    const zKoW = ctx.measureText(res.zodiac.ko).width;
    ctx.fillStyle = CC.ink3;
    ctx.font = '700 23px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`${res.zodiac.animal} · ${res.zodiac.hanja}`, 262 + zKoW + 16, zTop + 98);

    ctx.fillStyle = CC.mint;
    ctx.font = '600 19px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(res.zodiac.traits.join('  ·  '), 262, zTop + 130);

    /* ---- luck rows ---- */
    let ry = zTop + zH + 24;
    drawLuckRow(ctx, 'LUCKY FOOD', res.food.ko, res.food.en, ry, null);
    drawLuckRow(ctx, 'LUCKY COLOUR', res.color.ko, res.color.en, ry + 90, res.color.hex);

    /* ---- a word for today ---- */
    let py = ry + 90 + 78 + 46;
    ctx.textAlign = 'left';
    ctx.fillStyle = CC.plum;
    ctx.font = '800 15px "Plus Jakarta Sans", sans-serif';
    drawSpaced(ctx, 'A WORD FOR TODAY', 150, py, 2.6, 'left');
    ctx.fillStyle = CC.butter;
    sparkPath(ctx, 850, py - 6, 15);
    ctx.fill();

    py += 56;
    ctx.textAlign = 'center';
    ctx.fillStyle = CC.ink;
    ctx.font = '400 44px "Jua", "Noto Sans KR", sans-serif';
    ctx.fillText(res.phrase.ko, CARD_W / 2, py);

    py += 46;
    ctx.fillStyle = CC.mint;
    ctx.font = 'italic 600 26px "Plus Jakarta Sans", sans-serif';
    wrapLines(ctx, `“${res.phrase.en}”`, 780).slice(0, 2).forEach((ln) => {
      ctx.fillText(ln, CARD_W / 2, py);
      py += 34;
    });

    /* ---- footer ---- */
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(154,131,170,0.9)';
    ctx.font = '800 15px "Plus Jakarta Sans", sans-serif';
    drawSpaced(ctx, 'JEONG · A LITTLE KOREA', 96, CARD_H - 74, 2.6, 'left');
    ctx.textAlign = 'right';
    drawSpaced(ctx, 'FREE · NO SIGN-UP', CARD_W - 96, CARD_H - 74, 2.6, 'right');

    /* ---- corner stickers ---- */
    ctx.fillStyle = 'rgba(255,158,186,0.95)';
    sparkPath(ctx, 900, 690, 20);
    ctx.fill();
    ctx.fillStyle = '#94D6B3';
    starPath(ctx, 118, 1180, 13);
    ctx.fill();
    ctx.fillStyle = 'rgba(185,167,255,0.95)';
    heartPath(ctx, 872, 1244, 15);
    ctx.fill();

    return canvas;
  }

  /* --------------------------------- actions ------------------------------ */
  async function saveNameCard() {
    if (!currentResult) { toast('Draw a name first.'); return; }
    const c = await renderNameCard(currentResult);
    download(c, `jeong-korean-name-${currentResult.surname.ro}-${currentResult.given.ro}`.toLowerCase() + '.png');
    toast('Card saved. It is in your downloads.');
  }

  const btnSave = $('#btnSaveCard');
  if (btnSave) btnSave.addEventListener('click', saveNameCard);

  const btnPreview = $('#btnPreviewCard');
  if (btnPreview) {
    btnPreview.addEventListener('click', async () => {
      if (!currentResult) { toast('Draw a name first.'); return; }
      const c = await renderNameCard(currentResult);
      openLightbox(c.toDataURL('image/png'));
    });
  }

  const btnShare = $('#btnShareCard');
  if (btnShare) {
    btnShare.addEventListener('click', async () => {
      if (!currentResult) { toast('Draw a name first.'); return; }
      const r = currentResult;
      const text = `My Korean name is ${r.surname.ro} ${r.given.ro} (${r.surname.ko} ${r.given.ko}) — “${r.given.en}”. Year of the ${r.zodiac.animal} (${r.zodiac.ko}). Find yours:`;
      const url = location.origin + location.pathname + '#name';
      if (navigator.share) {
        try {
          await navigator.share({ title: 'My Korean name', text, url });
          return;
        } catch (e) { /* cancelled */ }
      }
      const ok = await copyText(text + ' ' + url);
      toast(ok ? 'Copied — paste it anywhere.' : 'Could not copy. You can select the text on the card.');
    });
  }

  // lightbox close
  const lb = $('#lightbox');
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb) lb.classList.remove('open');
    });
    $('#lightboxClose').addEventListener('click', () => lb.classList.remove('open'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }

  J.renderNameCard = renderNameCard;
  J.activateTab = activateTab;
  J.zodiacForYear = zodiacForYear;
})();
