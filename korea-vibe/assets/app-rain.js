/* ==========================================================================
   Jeong · hanok rain pomodoro — timer + live Web Audio rain & chimes
   ========================================================================== */
(function () {
  'use strict';
  const J = window.J;
  const $ = J.$;

  /* ------------------------------- sound --------------------------------- */
  const Sound = (function () {
    let ctx = null;
    let master = null;
    let rainGain = null;
    let chimeGain = null;
    let dropTimer = null;
    let chimeTimer = null;
    let dropBuffer = null;
    let loopsRunning = false;
    let enabled = true;
    let rainLevel = 0.62;
    let chimeLevel = 0.38;

    function makePinkNoise(context, seconds) {
      const len = Math.floor(context.sampleRate * seconds);
      const buffer = context.createBuffer(1, len, context.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.969 * b2 + white * 0.153852;
        b3 = 0.8665 * b3 + white * 0.3104856;
        b4 = 0.55 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.016898;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.1;
        b6 = white * 0.115926;
      }
      return buffer;
    }

    function makeTickBuffer(context) {
      const len = Math.floor(context.sampleRate * 0.14);
      const buffer = context.createBuffer(1, len, context.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3.2);
      }
      return buffer;
    }

    function build() {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.0001;
      master.connect(ctx.destination);

      // rain: pink noise, gently filtered, with a slow breathing low-pass
      const src = ctx.createBufferSource();
      src.buffer = makePinkNoise(ctx, 6);
      src.loop = true;

      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 180;
      hp.Q.value = 0.5;

      const lp1 = ctx.createBiquadFilter();
      lp1.type = 'lowpass';
      lp1.frequency.value = 1250;
      lp1.Q.value = 0.7;

      const lp2 = ctx.createBiquadFilter();
      lp2.type = 'lowpass';
      lp2.frequency.value = 620;
      lp2.Q.value = 0.4;

      rainGain = ctx.createGain();
      rainGain.gain.value = 0.0001;

      src.connect(hp);
      hp.connect(lp1);
      lp1.connect(lp2);
      lp2.connect(rainGain);
      rainGain.connect(master);
      src.start();

      // slow LFO so the rain "breathes" instead of hissing statically
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.055;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 320;
      lfo.connect(lfoGain);
      lfoGain.connect(lp1.frequency);
      lfo.start();

      const lfo2 = ctx.createOscillator();
      lfo2.frequency.value = 0.021;
      const lfo2Gain = ctx.createGain();
      lfo2Gain.gain.value = 0.12;
      lfo2.connect(lfo2Gain);
      lfo2Gain.connect(rainGain.gain);
      lfo2.start();

      chimeGain = ctx.createGain();
      chimeGain.gain.value = 0.0001;
      chimeGain.connect(master);

      dropBuffer = makeTickBuffer(ctx);
      applyLevels();
      return true;
    }

    function ensure() {
      if (!ctx) {
        if (!build()) return null;
      }
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      return ctx;
    }

    function applyLevels() {
      if (!ctx) return;
      const now = ctx.currentTime;
      const r = enabled ? Math.pow(rainLevel, 1.5) * 0.5 : 0.0001;
      const c = enabled ? Math.pow(chimeLevel, 1.7) * 0.55 : 0.0001;
      rainGain.gain.cancelScheduledValues(now);
      rainGain.gain.setTargetAtTime(Math.max(r, 0.0001), now, 0.4);
      chimeGain.gain.cancelScheduledValues(now);
      chimeGain.gain.setTargetAtTime(Math.max(c, 0.0001), now, 0.4);
      master.gain.cancelScheduledValues(now);
      master.gain.setTargetAtTime(enabled ? 0.85 : 0.0001, now, 0.25);
    }

    function playDrop() {
      if (!ctx || ctx.state !== 'running') return;
      const t = ctx.currentTime + 0.02;
      const src = ctx.createBufferSource();
      src.buffer = dropBuffer;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 700 + Math.random() * 2200;
      bp.Q.value = 1.4 + Math.random();
      const g = ctx.createGain();
      const peak = 0.05 + Math.random() * 0.09;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(peak, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09 + Math.random() * 0.14);
      src.connect(bp);
      bp.connect(g);
      g.connect(master);
      src.start(t);
      src.stop(t + 0.3);
    }

    function strike(freq, when, amp, dur) {
      if (!ctx) return;
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;
      const o2 = ctx.createOscillator();
      o2.type = 'sine';
      o2.frequency.value = freq * 2.01;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, when);
      g.gain.linearRampToValueAtTime(amp, when + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
      const g2 = ctx.createGain();
      g2.gain.value = 0.22;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 5200;
      o.connect(g);
      o2.connect(g2);
      g2.connect(g);
      g.connect(lp);
      lp.connect(chimeGain);
      o.start(when);
      o2.start(when);
      o.stop(when + dur + 0.1);
      o2.stop(when + dur + 0.1);
    }

    const CHIME_NOTES = [783.99, 880, 1046.5, 1174.66, 1318.51, 1567.98];

    function playChime() {
      if (!ctx) return;
      const t = ctx.currentTime + 0.08;
      const n = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < n; i++) {
        const f = CHIME_NOTES[Math.floor(Math.random() * CHIME_NOTES.length)];
        strike(f, t + i * (0.14 + Math.random() * 0.1), 0.1 + Math.random() * 0.05, 3.6 + Math.random() * 1.4);
      }
    }

    function loopDrops() {
      if (!loopsRunning) return;
      playDrop();
      dropTimer = setTimeout(loopDrops, 110 + Math.random() * 300);
    }

    function loopChimes() {
      if (!loopsRunning) return;
      playChime();
      chimeTimer = setTimeout(loopChimes, 8000 + Math.random() * 10000);
    }

    function startLoops() {
      if (loopsRunning) return;
      loopsRunning = true;
      applyLevels();
      loopDrops();
      loopChimes();
    }

    function stopLoops() {
      loopsRunning = false;
      clearTimeout(dropTimer);
      clearTimeout(chimeTimer);
    }

    function bell() {
      if (!ensure()) return;
      const t = ctx.currentTime + 0.06;
      [783.99, 659.25, 523.25].forEach((f, i) => {
        const when = t + i * 0.62;
        const o = ctx.createOscillator();
        o.type = 'sine';
        o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, when);
        g.gain.linearRampToValueAtTime(0.16, when + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, when + 5);
        o.connect(g);
        g.connect(master);
        o.start(when);
        o.stop(when + 5.2);
      });
    }

    return {
      start() { if (!ensure()) return false; startLoops(); return true; },
      setEnabled(on) { enabled = on; if (ctx) applyLevels(); },
      setRain(v) { rainLevel = v; if (ctx) applyLevels(); },
      setChime(v) { chimeLevel = v; if (ctx) applyLevels(); },
      bell,
      state() { return ctx ? ctx.state : 'none'; }
    };
  })();

  /* ------------------------------- timer --------------------------------- */
  const CIRC = 2 * Math.PI * 106;
  const prog = $('#dialProg');
  if (prog) {
    prog.style.strokeDasharray = CIRC.toFixed(2);
    prog.style.strokeDashoffset = '0';
  }

  const timeText = $('#timeText');
  const timerPhase = $('#timerPhase');
  const timerMode = $('#timerMode');
  const modeLamp = $('#modeLamp');
  const sessionCount = $('#sessionCount');
  const btnStart = $('#btnStart');
  const focusInput = $('#focusMin');
  const breakInput = $('#breakMin');
  const titleBase = document.title;

  const state = {
    mode: 'focus',
    total: 25 * 60,
    remaining: 25 * 60,
    running: false,
    endAt: 0,
    sessions: 0,
    tick: null
  };

  function todayCount() {
    try {
      const raw = JSON.parse(localStorage.getItem('jeong.sessions') || 'null');
      if (raw && raw.date === J.todayKey()) return Number(raw.count) || 0;
    } catch (e) { /* ignore */ }
    return 0;
  }
  function saveCount() {
    try {
      localStorage.setItem('jeong.sessions', JSON.stringify({ date: J.todayKey(), count: state.sessions }));
    } catch (e) { /* ignore */ }
  }

  function fmt(sec) {
    const s = Math.max(0, Math.round(sec));
    return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  }

  function minutesFor(mode) {
    const v = mode === 'focus' ? Number(focusInput.value) : Number(breakInput.value);
    const min = mode === 'focus' ? 1 : 1;
    const max = mode === 'focus' ? 120 : 60;
    return Math.min(max, Math.max(min, Math.round(v) || (mode === 'focus' ? 25 : 5)));
  }

  function paint() {
    if (timeText) timeText.textContent = fmt(state.remaining);
    if (prog) {
      const frac = state.total > 0 ? 1 - state.remaining / state.total : 0;
      prog.style.strokeDashoffset = (CIRC * Math.min(1, Math.max(0, frac))).toFixed(2);
      prog.classList.toggle('break', state.mode === 'break');
    }
    if (timerMode) timerMode.textContent = state.mode === 'focus' ? 'Focus · 집중' : 'Rest · 휴식';
    if (modeLamp) modeLamp.classList.toggle('break', state.mode === 'break');
    if (timerPhase) timerPhase.textContent = state.running ? (state.mode === 'focus' ? 'stay with it' : 'breathe') : 'press start';
    if (btnStart) btnStart.textContent = state.running ? 'Pause' : (state.remaining < state.total ? 'Resume' : 'Start');
    if (sessionCount) sessionCount.textContent = state.sessions <= 0 ? 'no sessions yet today' : `${state.sessions} session${state.sessions > 1 ? 's' : ''} today`;
    if (state.running) {
      document.title = `${fmt(state.remaining)} · ${state.mode === 'focus' ? 'focus' : 'rest'} — Jeong`;
    } else if (document.title !== titleBase) {
      document.title = titleBase;
    }
  }

  function stopTick() {
    if (state.tick) { clearInterval(state.tick); state.tick = null; }
  }

  function tick() {
    const left = Math.max(0, (state.endAt - Date.now()) / 1000);
    state.remaining = left;
    if (left <= 0.2) {
      complete();
      return;
    }
    paint();
  }

  function start() {
    if (state.running) {
      pause();
      return;
    }
    if (state.remaining <= 0.5) {
      state.total = minutesFor(state.mode) * 60;
      state.remaining = state.total;
    }
    state.running = true;
    state.endAt = Date.now() + state.remaining * 1000;
    stopTick();
    state.tick = setInterval(tick, 250);
    const okAudio = Sound.start();
    if (audioStatus) {
      if (!okAudio) status('Sound is not available in this browser — the timer still works.');
      else if (soundOn && !soundOn.checked) status('Sound is off');
      else status('Live rain · chime, generated here');
    }
    paint();
  }

  function pause() {
    state.running = false;
    stopTick();
    state.remaining = Math.max(0, (state.endAt - Date.now()) / 1000);
    paint();
  }

  function prepare(mode) {
    state.mode = mode;
    state.total = minutesFor(mode) * 60;
    state.remaining = state.total;
    state.running = false;
    stopTick();
    paint();
  }

  function complete() {
    stopTick();
    state.running = false;
    if (state.mode === 'focus') {
      state.sessions += 1;
      saveCount();
      Sound.bell();
      J.toast('One session done. Rest for a moment — 처마에 비가 그치지 않네요.');
      prepare('break');
      setTimeout(() => { if (!state.running) start(); }, 1200);
    } else {
      Sound.bell();
      J.toast('Rest is over. Shall we go again?');
      prepare('focus');
      setTimeout(() => { if (!state.running) start(); }, 1200);
    }
  }

  function reset() {
    prepare(state.mode);
    J.toast('Timer reset.');
  }

  function skip() {
    complete();
  }

  if (btnStart) {
    state.sessions = todayCount();
    paint();
    btnStart.addEventListener('click', start);
    $('#btnReset').addEventListener('click', reset);
    $('#btnSkip').addEventListener('click', skip);

    focusInput.addEventListener('change', () => {
      if (state.running) { J.toast('Pause first, then change the rhythm.'); focusInput.value = Math.round(state.total / 60); return; }
      if (state.mode === 'focus') prepare('focus');
    });
    breakInput.addEventListener('change', () => {
      if (state.running) { J.toast('Pause first, then change the rhythm.'); breakInput.value = 5; return; }
      if (state.mode === 'break') prepare('break');
    });
  }

  /* -------------------------------- sound UI ------------------------------ */
  const soundOn = $('#soundOn');
  const rainVol = $('#rainVol');
  const chimeVol = $('#chimeVol');
  const audioStatus = $('#audioStatus');

  function status(text) {
    if (audioStatus) audioStatus.textContent = text;
  }

  function syncSound() {
    const on = soundOn ? soundOn.checked : true;
    Sound.setEnabled(on);
    Sound.setRain(Number(rainVol.value) / 100);
    Sound.setChime(Number(chimeVol.value) / 100);
    status(on ? 'Live rain · chime, generated here' : 'Sound is off');
  }

  if (soundOn) {
    soundOn.addEventListener('change', () => {
      syncSound();
      if (soundOn.checked) {
        const ok = Sound.start();
        if (!ok) {
          status('This browser cannot play generated sound.');
          soundOn.checked = false;
          Sound.setEnabled(false);
        } else if (Sound.state() === 'suspended') {
          status('Tap once more if the rain does not start.');
        }
      }
    });
    rainVol.addEventListener('input', syncSound);
    chimeVol.addEventListener('input', syncSound);
    status('Sound starts with the timer');
  }

  J.timer = { start, pause, reset, skip, state };
})();
