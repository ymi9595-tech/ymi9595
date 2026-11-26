/* ==========================================================================
   Jeong · warm Korean phrases + downloadable postcard
   ========================================================================== */
(function () {
  'use strict';
  const J = window.J;
  const $ = J.$;
  const PHRASES = window.JEONG_PHRASES;
  const PLACES = ['Seoul', 'Andong', 'Jeonju', 'Gangneung', 'Busan', 'Gyeongju', 'Anesseong', 'Sokcho', 'Damyang', 'Jeju'];

  const state = {
    index: 0,
    queue: [],
    pos: 0
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildQueue(keepFirst) {
    state.queue = shuffle(PHRASES.map((_, i) => i)).filter((i) => i !== keepFirst);
    state.pos = 0;
  }

  function render() {
    const p = PHRASES[state.index];
    if (!p) return;
    $('#pcKo').textContent = p.ko;
    $('#pcRo').textContent = p.ro;
    $('#pcEn').textContent = p.en;
    $('#pcNote').textContent = p.note;
    $('#phraseCounter').textContent = `No. ${state.index + 1} · ${PHRASES.length} phrases`;
    $('#pcPlace').textContent = `${PLACES[state.index % PLACES.length]} · Korea`;
    $('#postcard').classList.remove('flip');
    void $('#postcard').offsetWidth;
    $('#postcard').classList.add('flip');
  }

  function next() {
    if (state.pos >= state.queue.length) buildQueue(state.index);
    state.index = state.queue[state.pos++];
    render();
  }

  buildQueue(-1);
  state.index = 0;
  state.queue = state.queue.filter((i) => i !== 0);
  state.pos = 0;
  render();

  $('#btnPhrase').addEventListener('click', next);

  /* names on the card */
  const toInput = $('#pcToInput');
  const fromInput = $('#pcFromInput');
  function syncNames() {
    const to = toInput.value.trim();
    const from = fromInput.value.trim();
    $('#pcTo').textContent = to ? `To. ${to}` : '';
    $('#pcFrom').textContent = from ? `— ${from}` : '— jeong';
  }
  if (toInput) { toInput.addEventListener('input', syncNames); fromInput.addEventListener('input', syncNames); }

  /* speech */
  let voiceHinted = false;
  function speak() {
    const p = PHRASES[state.index];
    if (!p) return;
    if (!('speechSynthesis' in window)) {
      J.toast('This browser has no speech voice. Try Chrome or Safari.');
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(p.ko);
      u.lang = 'ko-KR';
      u.rate = 0.9;
      u.pitch = 1;
      const voices = window.speechSynthesis.getVoices() || [];
      const ko = voices.find((v) => (v.lang || '').toLowerCase().indexOf('ko') === 0);
      if (ko) u.voice = ko;
      window.speechSynthesis.speak(u);
      if (!ko && !voiceHinted) {
        voiceHinted = true;
        J.toast('No Korean voice found on this device — the text is above if it stays silent.');
      }
    } catch (e) {
      J.toast('Playback is not available here.');
    }
  }
  $('#btnSpeak').addEventListener('click', speak);

  /* copy */
  $('#btnCopyPhrase').addEventListener('click', async () => {
    const p = PHRASES[state.index];
    const text = `${p.ko}\n${p.ro}\n${p.en}`;
    const ok = await J.copyText(text);
    J.toast(ok ? 'Copied — Korean, pronunciation and meaning.' : 'Could not copy. Try selecting the text.');
  });

  /* --------------------------- postcard canvas --------------------------- */
  const W = 1200;
  const H = 800;

  const PC = {
    ink: '#3B2E48', ink2: '#5E5070', ink3: '#9A8BAA',
    coral: '#FF7FA2', coralD: '#EE5E87', lilac: '#9A83F5', mint: '#5FA98A',
    butter: '#FFD86B', plum: '#C37E9B'
  };

  function heartShape(ctx, cx, cy, s) {
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.62);
    ctx.bezierCurveTo(cx - s * 1.18, cy - s * 0.16, cx - s * 0.64, cy - s * 1.04, cx, cy - s * 0.4);
    ctx.bezierCurveTo(cx + s * 0.64, cy - s * 1.04, cx + s * 1.18, cy - s * 0.16, cx, cy + s * 0.62);
    ctx.closePath();
  }

  function sparkShape(ctx, cx, cy, r) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.quadraticCurveTo(cx + r * 0.16, cy - r * 0.16, cx + r, cy);
    ctx.quadraticCurveTo(cx + r * 0.16, cy + r * 0.16, cx, cy + r);
    ctx.quadraticCurveTo(cx - r * 0.16, cy + r * 0.16, cx - r, cy);
    ctx.quadraticCurveTo(cx - r * 0.16, cy - r * 0.16, cx, cy - r);
    ctx.closePath();
  }

  function stampFlower(ctx, cx, cy, r) {
    ctx.save();
    ctx.fillStyle = 'rgba(255,127,162,0.9)';
    for (let i = 0; i < 5; i++) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((Math.PI * 2 / 5) * i);
      ctx.beginPath();
      ctx.ellipse(0, -r * 0.62, r * 0.34, r * 0.62, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.24, 0, Math.PI * 2);
    ctx.fillStyle = '#FFD86B';
    ctx.fill();
    ctx.restore();
  }

  function washiTape(ctx, x, y, w, h, rot, tint) {
    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(rot);
    ctx.fillStyle = tint || 'rgba(232,220,255,0.95)';
    ctx.fillRect(-w / 2, -h / 2, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    for (let i = -w / 2; i < w / 2; i += 22) ctx.fillRect(i, -h / 2, 11, h);
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(-w / 2, -h / 2); ctx.lineTo(-w / 2, h / 2);
    ctx.moveTo(w / 2, -h / 2); ctx.lineTo(w / 2, h / 2);
    ctx.stroke();
    ctx.restore();
  }

  async function renderPostcard() {
    const p = PHRASES[state.index];
    await J.ensureFonts([p.ko, '정', toInput.value || 'To', fromInput.value || 'From']);
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    /* pastel paper */
    const bg = ctx.createLinearGradient(0, 0, W * 0.6, H);
    bg.addColorStop(0, '#FFF8FC');
    bg.addColorStop(0.5, '#F8F1FF');
    bg.addColorStop(1, '#EEF8FF');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    let g = ctx.createRadialGradient(W - 30, -10, 30, W - 30, -10, 620);
    g.addColorStop(0, 'rgba(255,199,219,0.55)');
    g.addColorStop(1, 'rgba(255,199,219,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    g = ctx.createRadialGradient(10, H, 10, 10, H, 540);
    g.addColorStop(0, 'rgba(186,224,255,0.55)');
    g.addColorStop(1, 'rgba(186,224,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.fillStyle = 'rgba(206,172,214,0.32)';
    for (let y = 26; y < H; y += 28) {
      for (let x = 26; x < W; x += 28) {
        ctx.beginPath();
        ctx.arc(x, y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();

    /* white photocard edge */
    ctx.strokeStyle = 'rgba(255,255,255,0.96)';
    ctx.lineWidth = 24;
    J.roundRect(ctx, 12, 12, W - 24, H - 24, 44);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,194,212,0.55)';
    ctx.lineWidth = 2;
    J.roundRect(ctx, 38, 38, W - 76, H - 76, 32);
    ctx.stroke();

    /* washi tape + stickers */
    washiTape(ctx, 150, 24, 200, 52, -0.06);
    ctx.fillStyle = 'rgba(255,127,162,0.95)';
    heartShape(ctx, 86, H - 196, 26);
    ctx.fill();
    ctx.fillStyle = PC.butter;
    sparkShape(ctx, 1140, H - 70, 20);
    ctx.fill();
    ctx.fillStyle = 'rgba(185,167,255,0.95)';
    sparkShape(ctx, 1092, 330, 16);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,216,107,0.95)';
    sparkShape(ctx, 1050, 250, 12);
    ctx.fill();

    /* label */
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = PC.plum;
    ctx.font = '800 18px "Plus Jakarta Sans", sans-serif';
    J.drawSpaced(ctx, 'A POSTCARD FROM KOREA', 92, 120, 5, 'left');
    ctx.fillStyle = '#B08BC0';
    ctx.font = '400 30px "Gaegu", "Jua", cursive';
    ctx.fillText('lucky day, sent warmly ✿', 92, 158);

    /* stamp */
    const sx = W - 232, sy = 74, sw = 112, sh = 136;
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    J.roundRect(ctx, sx, sy, sw, sh, 18);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,127,162,0.6)';
    ctx.setLineDash([7, 6]);
    ctx.lineWidth = 2.4;
    J.roundRect(ctx, sx, sy, sw, sh, 18);
    ctx.stroke();
    ctx.restore();
    stampFlower(ctx, sx + sw / 2, sy + sh / 2 - 12, 30);
    ctx.fillStyle = PC.coral;
    ctx.font = '800 11px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    J.drawSpaced(ctx, 'KOREA', sx + sw / 2, sy + sh - 16, 2, 'center');

    /* Korean phrase */
    const maxW = 720;
    ctx.textAlign = 'left';
    const koSize = p.ko.length > 30 ? 42 : p.ko.length > 20 ? 50 : 58;
    ctx.font = `400 ${koSize}px "Jua", "Noto Sans KR", sans-serif`;
    let lines = J.wrapLines(ctx, p.ko, maxW);
    const blockH = lines.length * (koSize * 1.5);
    let y = 250 - blockH / 2 + koSize * 1.1;
    // pink offset shadow
    lines.forEach((ln, i) => {
      ctx.fillStyle = 'rgba(255,183,200,0.7)';
      ctx.fillText(ln, 95, y + i * koSize * 1.5 + 3);
      ctx.fillStyle = PC.ink;
      ctx.fillText(ln, 92, y + i * koSize * 1.5);
    });
    y += (lines.length - 1) * koSize * 1.5;

    /* romanisation */
    y += 46;
    ctx.fillStyle = PC.lilac;
    ctx.font = '600 30px "Plus Jakarta Sans", sans-serif';
    J.wrapLines(ctx, p.ro, maxW).forEach((ln) => {
      ctx.fillText(ln, 92, y);
      y += 40;
    });

    /* meaning */
    y += 12;
    ctx.fillStyle = PC.ink2;
    ctx.font = '500 25px "Plus Jakarta Sans", sans-serif';
    J.wrapLines(ctx, '“' + p.en + '”', maxW).forEach((ln) => {
      ctx.fillText(ln, 92, y);
      y += 36;
    });

    /* note in a soft rounded box */
    y += 22;
    const noteLines = J.wrapLines(ctx, p.note, 640).slice(0, 2);
    const boxH = noteLines.length * 30 + 26;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    J.roundRect(ctx, 92, y - 20, 700, boxH, 18);
    ctx.fill();
    ctx.fillStyle = PC.ink3;
    ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
    noteLines.forEach((ln) => {
      ctx.fillText(ln, 112, y + 4);
      y += 30;
    });

    /* a handwritten line to fill the card */
    ctx.fillStyle = PC.plum;
    ctx.font = '400 34px "Gaegu", "Jua", cursive';
    ctx.fillText('lucky day · 행운을 빌어요 ✿', 96, y + 46);

    /* bottom divider */
    ctx.strokeStyle = 'rgba(185,167,255,0.7)';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 9]);
    ctx.beginPath();
    ctx.moveTo(92, H - 150);
    ctx.lineTo(W - 92, H - 150);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = PC.ink3;
    ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
    J.drawSpaced(ctx, 'TO', 92, H - 104, 2.6, 'left');
    const toName = toInput.value.trim() || 'you, somewhere';
    ctx.fillStyle = PC.ink;
    ctx.font = '400 32px "Jua", "Noto Sans KR", sans-serif';
    ctx.fillText(toName, 138, H - 102);

    ctx.fillStyle = PC.ink3;
    ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
    J.drawSpaced(ctx, 'FROM', W - 372, H - 104, 2.6, 'left');
    const fromName = fromInput.value.trim() || 'jeong';
    ctx.fillStyle = PC.plum;
    ctx.font = '400 34px "Gaegu", "Jua", cursive';
    ctx.fillText(fromName, W - 320, H - 100);

    ctx.fillStyle = 'rgba(154,131,170,0.75)';
    ctx.font = '800 11px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    J.drawSpaced(ctx, 'JEONG · A LITTLE KOREA, EVERY DAY', 92, H - 62, 2.2, 'left');

    ctx.textAlign = 'right';
    ctx.fillStyle = PC.coral;
    ctx.font = '400 24px "Gaegu", "Jua", cursive';
    ctx.fillText('be happy today ✿', W - 92, H - 58);

    return canvas;
  }

  $('#btnSavePostcard').addEventListener('click', async () => {
    try {
      const c = await renderPostcard();
      J.download(c, 'jeong-postcard.png');
      J.toast('Postcard saved as an image.');
    } catch (e) {
      J.toast('The postcard could not be drawn in this browser.');
    }
  });

  // click the card to preview full size
  $('#postcard').addEventListener('click', async (e) => {
    if (e.target.closest('input')) return;
    try {
      const c = await renderPostcard();
      J.openLightbox(c.toDataURL('image/png'));
    } catch (err) { /* ignore */ }
  });

  window.speechSynthesis && window.speechSynthesis.getVoices();
})();
