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
      loads.push(document.fonts.load('700 100px "Gowun Batang"', s).catch(() => {}));
      loads.push(document.fonts.load('400 40px "Gowun Batang"', s).catch(() => {}));
      loads.push(document.fonts.load('400 40px "Gowun Dodum"', s).catch(() => {}));
      loads.push(document.fonts.load('600 60px "Cormorant Garamond"', 'Jeong').catch(() => {}));
      loads.push(document.fonts.load('italic 400 60px "Cormorant Garamond"', 'Jeong').catch(() => {}));
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
      line.style.opacity = (0.1 + Math.random() * 0.26).toFixed(2);
      line.style.animationDuration = (1.15 + Math.random() * 1.7).toFixed(2) + 's';
      line.style.animationDelay = (-Math.random() * 3).toFixed(2) + 's';
      frag.appendChild(line);
    }
    group.appendChild(frag);
  }
  makeRain($('#heroRain'), 90, 1440, 760, 1);
  // keep the hanok (right side of the scene) in view on narrow screens
  const heroSvg = document.querySelector('.hero-scene svg');
  function fitHeroScene() {
    if (!heroSvg) return;
    heroSvg.setAttribute('preserveAspectRatio', window.innerWidth < 760 ? 'xMaxYMax slice' : 'xMidYMax slice');
  }
  fitHeroScene();
  window.addEventListener('resize', fitHeroScene);
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
  const CARD_W = 1000;
  const CARD_H = 1400;

  function drawSeal(ctx, x, y, size, glyph, rot) {
    ctx.save();
    ctx.translate(x + size / 2, y + size / 2);
    ctx.rotate(rot || -0.04);
    ctx.fillStyle = 'rgba(166,62,45,0.95)';
    roundRect(ctx, -size / 2, -size / 2, size, size, size * 0.14);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,246,232,0.35)';
    ctx.lineWidth = 2;
    roundRect(ctx, -size / 2 + 5, -size / 2 + 5, size - 10, size - 10, size * 0.1);
    ctx.stroke();
    ctx.fillStyle = '#fff3e2';
    ctx.font = `700 ${Math.round(size * 0.58)}px "Gowun Batang", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(glyph, 0, size * 0.02);
    ctx.restore();
  }

  function drawOrnament(ctx, cx, cy, w) {
    ctx.save();
    ctx.strokeStyle = 'rgba(177,138,82,0.55)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - w / 2, cy);
    ctx.lineTo(cx - 12, cy);
    ctx.moveTo(cx + 12, cy);
    ctx.lineTo(cx + w / 2, cy);
    ctx.stroke();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = 'rgba(177,138,82,0.8)';
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
  }

  function drawLuckRow(ctx, label, valueMain, valueRest, y, colorHex) {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(123,111,96,0.92)';
    ctx.font = '400 15px "Gowun Dodum", sans-serif';
    drawSpaced(ctx, label.toUpperCase(), 150, y, 1.6, 'left');

    let x = 390;
    if (colorHex) {
      ctx.beginPath();
      ctx.arc(x + 9, y - 7, 9, 0, Math.PI * 2);
      ctx.fillStyle = colorHex;
      ctx.fill();
      ctx.strokeStyle = 'rgba(36,31,26,0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      x += 28;
    }
    ctx.fillStyle = '#241f1a';
    ctx.font = '700 30px "Gowun Batang", serif';
    ctx.fillText(valueMain, x, y);
    const kw = ctx.measureText(valueMain).width;
    ctx.fillStyle = 'rgba(75,66,56,0.9)';
    ctx.font = '400 24px "Gowun Dodum", sans-serif';
    ctx.fillText(valueRest, x + kw + 12, y);
  }

  async function renderNameCard(res) {
    await ensureFonts([res.given.ko, res.surname.ko, res.zodiac.ko, res.food.ko, res.color.ko, res.phrase.ko]);
    const canvas = document.createElement('canvas');
    canvas.width = CARD_W;
    canvas.height = CARD_H;
    const ctx = canvas.getContext('2d');

    // paper
    const bg = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
    bg.addColorStop(0, '#fdf8ec');
    bg.addColorStop(0.5, '#f7ecd9');
    bg.addColorStop(1, '#f1e3ca');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // warm corner washes
    let g = ctx.createRadialGradient(CARD_W - 60, 40, 20, CARD_W - 60, 40, 620);
    g.addColorStop(0, 'rgba(226,201,160,0.55)');
    g.addColorStop(1, 'rgba(226,201,160,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, CARD_W, CARD_H);
    g = ctx.createRadialGradient(40, CARD_H - 40, 20, 40, CARD_H - 40, 560);
    g.addColorStop(0, 'rgba(196,215,201,0.45)');
    g.addColorStop(1, 'rgba(196,215,201,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    paperTexture(ctx, CARD_W, CARD_H, 7);

    // frames
    ctx.strokeStyle = 'rgba(177,138,82,0.55)';
    ctx.lineWidth = 2;
    ctx.strokeRect(42, 42, CARD_W - 84, CARD_H - 84);
    ctx.strokeStyle = 'rgba(177,138,82,0.28)';
    ctx.lineWidth = 1;
    ctx.strokeRect(58, 58, CARD_W - 116, CARD_H - 116);

    // header
    ctx.textAlign = 'left';
    ctx.fillStyle = '#b18a52';
    ctx.font = '400 17px "Gowun Dodum", sans-serif';
    drawSpaced(ctx, 'JEONG', 96, 122, 5, 'left');
    ctx.fillStyle = 'rgba(123,111,96,0.9)';
    ctx.font = '400 14px "Gowun Dodum", sans-serif';
    drawSpaced(ctx, 'A LITTLE KOREA, EVERY DAY', 96, 148, 2.6, 'left');

    drawSeal(ctx, CARD_W - 156, 92, 64, '情', 0.05);

    // kicker
    ctx.textAlign = 'center';
    ctx.fillStyle = '#b18a52';
    ctx.font = '400 16px "Gowun Dodum", sans-serif';
    drawSpaced(ctx, 'MY KOREAN NAME', CARD_W / 2, 262, 6, 'center');

    // given name
    const nameLen = Array.from(res.given.ko).length;
    const nameSize = nameLen <= 1 ? 190 : nameLen === 2 ? 158 : 120;
    ctx.fillStyle = '#241f1a';
    ctx.font = `700 ${nameSize}px "Gowun Batang", serif`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(res.given.ko, CARD_W / 2, 262 + nameSize * 0.92);

    // full name
    ctx.fillStyle = 'rgba(123,111,96,0.95)';
    ctx.font = '400 30px "Gowun Batang", serif';
    ctx.fillText(`${res.surname.ko} ${res.given.ko}`, CARD_W / 2, 262 + nameSize * 0.92 + 58);

    // romanisation
    ctx.fillStyle = '#3c6153';
    ctx.font = 'italic 300 52px "Cormorant Garamond", serif';
    ctx.fillText(`${res.surname.ro} ${res.given.ro}`, CARD_W / 2, 262 + nameSize * 0.92 + 142);

    // meaning
    let y = 262 + nameSize * 0.92 + 212;
    ctx.fillStyle = 'rgba(75,66,56,0.95)';
    ctx.font = '400 28px "Gowun Dodum", sans-serif';
    const meaning = `${res.given.en} — ${res.given.line}`;
    const lines = wrapLines(ctx, meaning, 660);
    lines.slice(0, 3).forEach((ln) => {
      ctx.fillText(ln, CARD_W / 2, y);
      y += 42;
    });

    // ornament
    drawOrnament(ctx, CARD_W / 2, y + 26, 260);

    // zodiac
    y += 106;
    ctx.fillStyle = 'rgba(123,111,96,0.95)';
    ctx.font = '400 14px "Gowun Dodum", sans-serif';
    drawSpaced(ctx, `BORN IN THE YEAR OF THE ${res.zodiac.animal.toUpperCase()} · ${res.year}`, CARD_W / 2, y, 3, 'center');

    y += 74;
    ctx.font = '700 54px "Gowun Batang", serif';
    const zKoW = ctx.measureText(res.zodiac.ko).width;
    const zEn = `${res.zodiac.animal} · ${res.zodiac.hanja}`;
    ctx.font = 'italic 400 30px "Cormorant Garamond", serif';
    const zEnW = ctx.measureText(zEn).width;
    const zGap = 20;
    const zx = CARD_W / 2 - (zKoW + zGap + zEnW) / 2;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#241f1a';
    ctx.font = '700 54px "Gowun Batang", serif';
    ctx.fillText(res.zodiac.ko, zx, y);
    ctx.fillStyle = 'rgba(75,66,56,0.9)';
    ctx.font = 'italic 400 30px "Cormorant Garamond", serif';
    ctx.fillText(zEn, zx + zKoW + zGap, y - 6);
    ctx.textAlign = 'center';

    y += 44;
    ctx.fillStyle = '#3c6153';
    ctx.font = '400 24px "Gowun Dodum", sans-serif';
    ctx.fillText(res.zodiac.traits.join('  ·  '), CARD_W / 2, y);

    // luck rows
    y += 78;
    ctx.strokeStyle = 'rgba(177,138,82,0.35)';
    ctx.beginPath();
    ctx.moveTo(150, y - 40);
    ctx.lineTo(CARD_W - 150, y - 40);
    ctx.stroke();

    drawLuckRow(ctx, 'Lucky food', res.food.ko, res.food.en, y, null);
    drawLuckRow(ctx, 'Lucky colour', res.color.ko, res.color.en, y + 62, res.color.hex);

    y += 132;
    ctx.fillStyle = 'rgba(123,111,96,0.92)';
    ctx.font = '400 15px "Gowun Dodum", sans-serif';
    drawSpaced(ctx, 'A WORD FOR TODAY', 150, y, 1.6, 'left');

    y += 46;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#241f1a';
    ctx.font = '400 34px "Gowun Batang", serif';
    ctx.fillText(res.phrase.ko, CARD_W / 2, y);
    y += 40;
    ctx.fillStyle = 'rgba(60,97,83,0.95)';
    ctx.font = 'italic 400 26px "Cormorant Garamond", serif';
    ctx.fillText('“' + res.phrase.en + '”', CARD_W / 2, y);

    // footer
    ctx.strokeStyle = 'rgba(177,138,82,0.35)';
    ctx.beginPath();
    ctx.moveTo(150, CARD_H - 118);
    ctx.lineTo(CARD_W - 150, CARD_H - 118);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(123,111,96,0.9)';
    ctx.font = '400 14px "Gowun Dodum", sans-serif';
    drawSpaced(ctx, 'JEONG · A LITTLE KOREA', 96, CARD_H - 78, 2.6, 'left');
    ctx.textAlign = 'right';
    drawSpaced(ctx, 'FREE · NO SIGN-UP', CARD_W - 96, CARD_H - 78, 2.6, 'right');

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

  J.activateTab = activateTab;
  J.zodiacForYear = zodiacForYear;
})();
