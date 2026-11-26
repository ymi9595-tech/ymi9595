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

  function flower(ctx, cx, cy, r, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = color;
    for (let i = 0; i < 6; i++) {
      ctx.save();
      ctx.rotate((Math.PI / 3) * i);
      ctx.beginPath();
      ctx.ellipse(0, -r * 0.58, r * 0.3, r * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.26, 0, Math.PI * 2);
    ctx.fillStyle = '#c9a24a';
    ctx.fill();
    ctx.restore();
  }

  async function renderPostcard() {
    const p = PHRASES[state.index];
    await J.ensureFonts([p.ko, '정', toInput.value || 'To', fromInput.value || 'From']);
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#fdf9ef');
    bg.addColorStop(0.55, '#f7eeda');
    bg.addColorStop(1, '#f0e2c9');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    let g = ctx.createRadialGradient(W - 40, -20, 40, W - 40, -20, 620);
    g.addColorStop(0, 'rgba(230,205,164,0.55)');
    g.addColorStop(1, 'rgba(230,205,164,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    g = ctx.createRadialGradient(0, H, 20, 0, H, 520);
    g.addColorStop(0, 'rgba(196,216,202,0.4)');
    g.addColorStop(1, 'rgba(196,216,202,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    J.paperTexture(ctx, W, H, 21);

    ctx.strokeStyle = 'rgba(177,138,82,0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(36, 36, W - 72, H - 72);
    ctx.strokeStyle = 'rgba(177,138,82,0.28)';
    ctx.lineWidth = 1;
    ctx.strokeRect(50, 50, W - 100, H - 100);

    // label
    ctx.textAlign = 'left';
    ctx.fillStyle = '#b18a52';
    ctx.font = '400 17px "Gowun Dodum", sans-serif';
    J.drawSpaced(ctx, 'A POSTCARD FROM KOREA', 96, 112, 5, 'left');
    ctx.fillStyle = 'rgba(123,111,96,0.85)';
    ctx.font = 'italic 400 20px "Cormorant Garamond", serif';
    ctx.fillText('written slowly, sent warmly', 96, 140);

    // stamp
    const sx = W - 210, sy = 84, sw = 92, sh = 116;
    ctx.save();
    ctx.strokeStyle = 'rgba(166,62,45,0.45)';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1.4;
    ctx.strokeRect(sx, sy, sw, sh);
    ctx.restore();
    ctx.fillStyle = 'rgba(255,253,247,0.55)';
    ctx.fillRect(sx + 4, sy + 4, sw - 8, sh - 8);
    flower(ctx, sx + sw / 2, sy + sh / 2 - 8, 30, 'rgba(166,62,45,0.78)');
    ctx.fillStyle = 'rgba(166,62,45,0.85)';
    ctx.font = '400 11px "Gowun Dodum", sans-serif';
    ctx.textAlign = 'center';
    J.drawSpaced(ctx, 'KOREA', sx + sw / 2, sy + sh - 14, 2, 'center');

    // postmark
    ctx.save();
    ctx.strokeStyle = 'rgba(90,80,66,0.32)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(sx - 36, sy + 44, 38, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(sx - 36, sy + 44, 29, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'rgba(90,80,66,0.42)';
    ctx.font = '400 10px "Gowun Dodum", sans-serif';
    J.drawSpaced(ctx, 'SEOUL', sx - 36, sy + 42, 1.6, 'center');
    ctx.font = '400 9px "Gowun Dodum", sans-serif';
    ctx.fillText('KOREA', sx - 36, sy + 56);
    ctx.restore();

    // Korean phrase
    const maxW = 700;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#241f1a';
    const koSize = p.ko.length > 30 ? 44 : p.ko.length > 20 ? 52 : 58;
    ctx.font = `400 ${koSize}px "Gowun Batang", serif`;
    let lines = J.wrapLines(ctx, p.ko, maxW);
    const blockH = lines.length * (koSize * 1.45);
    let y = 330 - blockH / 2 + koSize;
    lines.forEach((ln) => {
      ctx.fillText(ln, 96, y);
      y += koSize * 1.45;
    });

    // romanisation
    y += 6;
    ctx.fillStyle = '#3c6153';
    ctx.font = 'italic 400 32px "Cormorant Garamond", serif';
    const romLines = J.wrapLines(ctx, p.ro, maxW);
    romLines.forEach((ln) => {
      ctx.fillText(ln, 96, y);
      y += 40;
    });

    // meaning
    y += 12;
    ctx.fillStyle = '#4b4238';
    ctx.font = '400 25px "Gowun Dodum", sans-serif';
    const enLines = J.wrapLines(ctx, '“' + p.en + '”', maxW);
    enLines.forEach((ln) => {
      ctx.fillText(ln, 96, y);
      y += 36;
    });

    // small note
    y += 14;
    ctx.fillStyle = 'rgba(123,111,96,0.95)';
    ctx.font = '400 18px "Gowun Dodum", sans-serif';
    J.wrapLines(ctx, p.note, 620).slice(0, 2).forEach((ln) => {
      ctx.fillText(ln, 96, y);
      y += 28;
    });

    // bottom rule
    ctx.strokeStyle = 'rgba(177,138,82,0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(96, H - 132);
    ctx.lineTo(W - 96, H - 132);
    ctx.stroke();

    ctx.fillStyle = 'rgba(123,111,96,0.95)';
    ctx.font = '400 13px "Gowun Dodum", sans-serif';
    J.drawSpaced(ctx, 'TO', 96, H - 96, 3, 'left');
    const toName = toInput.value.trim() || 'you, somewhere';
    ctx.fillStyle = '#241f1a';
    ctx.font = '400 30px "Gowun Batang", serif';
    ctx.fillText(toName, 150, H - 94);

    ctx.fillStyle = 'rgba(123,111,96,0.95)';
    ctx.font = '400 13px "Gowun Dodum", sans-serif';
    J.drawSpaced(ctx, 'FROM', W - 360, H - 96, 3, 'left');
    const fromName = fromInput.value.trim() || 'jeong';
    ctx.fillStyle = '#3c6153';
    ctx.font = 'italic 400 32px "Gowun Batang", serif';
    ctx.fillText(fromName, W - 290, H - 92);

    ctx.fillStyle = 'rgba(123,111,96,0.55)';
    ctx.font = '400 12px "Gowun Dodum", sans-serif';
    ctx.textAlign = 'left';
    J.drawSpaced(ctx, 'JEONG · A LITTLE KOREA, EVERY DAY', 96, H - 58, 2, 'left');

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
