/* ============================================================
   Wish Before It Flies · 한옥 다리 소원 풍등
   A one-minute lantern wish game. No dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------------------------------------- copy */
  var I18N = {
    en: {
      title: 'Wish Before <em>It Flies</em>',
      eyebrow: 'A one-minute wish game · 한옥 다리 풍등',
      lede: 'Lanterns drift over a hanok stone bridge on a still night. One of them is a dokkaebi in disguise. Write your wish quickly — the first letter starts the clock, and late words belong to the sky.',
      cta: 'Light a lantern',
      note: 'No sign-in. Seven lanterns. About a minute.',
      legend: 'One of these lanterns hides a dokkaebi',
      hudRound: 'Lantern',
      hudScore: 'Score',
      hudCombo: 'Combo',
      hintIdle: 'Your first letter starts the clock.',
      hintTyping: 'Tap a lantern to send it.',
      hintUrgent: 'Hurry — the sky is impatient!',
      ph: 'Write your wish…',
      skyBtn: 'My sky',
      lanternN: 'Lantern {n}',
      resultEyebrow: 'Your night sky',
      stWishes: 'wishes kept',
      stTricks: 'dokkaebi tricks',
      stCombo: 'best combo',
      stScore: 'score',
      wishesHeading: 'Your words',
      flopsHeading: "The sky's words",
      listEmptyGood: 'Not one wish kept — the sky wrote them all.',
      listEmptyBad: 'No tricks at all. The dokkaebi slept through it.',
      download: 'Download card',
      again: 'Play again',
      share: 'Copy link',
      copied: 'Link copied 🌙',
      footBook: 'Korea After Midnight',
      footCredit: 'Danbi Lab, Anseong',
      toastGood: 'your wish is on its way',
      toastTimeout: 'Too slow! The sky got impatient…',
      toastMine: 'That was a dokkaebi lantern! 💥',
      msgEmpty: 'Give the lantern a wish first ✨',
      msgBlocked: 'The sky is a little shy — try kinder words 🌙',
      msgLink: "The sky can't open links 🌙",
      msgRepeat: "That's a lot of the same letter 🌙",
      msgEnter: 'Tap a lantern to send it 🏮',
      soundOn: 'Sound on',
      soundOff: 'Sound off',
      cardWishes: 'wishes kept',
      cardTricks: 'dokkaebi',
      cardCombo: 'best combo',
      cardScore: 'score',
      cardWords: 'Your words',
      cardSky: "The sky's words",
      cardTag: 'Wish Before It Flies · 한옥 다리 소원 풍등'
    },
    ko: {
      title: '날아가기 전에, <em>소원</em>',
      eyebrow: '1분 소원 게임 · 한옥 다리 풍등',
      lede: '고요한 밤, 한옥 돌다리 위로 풍등이 떠 있어요. 그중 하나는 도깨비가 숨어든 풍등. 소원을 빠르게 적어 보세요 — 첫 글자를 쓰는 순간 시계가 돌고, 늦은 소원은 하늘 것이 돼요.',
      cta: '풍등 켜기',
      note: '로그인 없이, 풍등 일곱 개, 약 1분.',
      legend: '이 중 하나는 도깨비가 숨어 있어요',
      hudRound: '풍등',
      hudScore: '점수',
      hudCombo: '콤보',
      hintIdle: '첫 글자를 쓰면 시간이 시작돼요.',
      hintTyping: '풍등을 눌러 소원을 보내세요.',
      hintUrgent: '서두르세요 — 하늘이 기다려요!',
      ph: '소원을 적어 보세요…',
      skyBtn: '내 밤하늘',
      lanternN: '{n}번 풍등',
      resultEyebrow: '나의 밤하늘',
      stWishes: '지켜진 소원',
      stTricks: '도깨비 장난',
      stCombo: '최고 콤보',
      stScore: '점수',
      wishesHeading: '내가 쓴 소원',
      flopsHeading: '하늘이 대신 쓴 소원',
      listEmptyGood: '지켜진 소원이 없어요 — 하늘이 전부 대신 썼습니다.',
      listEmptyBad: '도깨비 장난이 없었어요. 도깨비가 잠들었나 봐요.',
      download: '카드 저장하기',
      again: '다시 하기',
      share: '링크 복사',
      copied: '링크를 복사했어요 🌙',
      footBook: 'Korea After Midnight',
      footCredit: '안성 · 단비랩',
      toastGood: '소원이 하늘로 올라갔어요',
      toastTimeout: '늦었어요! 하늘이 못 기다렸나 봐요…',
      toastMine: '도깨비 풍등이었어요! 💥',
      msgEmpty: '풍등에 실을 소원을 먼저 적어 주세요 ✨',
      msgBlocked: '하늘이 조금 부끄러워해요 — 착한 말로 다시 적어 주세요 🌙',
      msgLink: '하늘은 링크를 열지 못해요 🌙',
      msgRepeat: '같은 글자가 너무 많아요 🌙',
      msgEnter: '풍등을 눌러 소원을 보내세요 🏮',
      soundOn: '소리 켜짐',
      soundOff: '소리 꺼짐',
      cardWishes: '지켜진 소원',
      cardTricks: '도깨비',
      cardCombo: '최고 콤보',
      cardScore: '점수',
      cardWords: '내가 쓴 소원',
      cardSky: '하늘이 대신 쓴 소원',
      cardTag: 'Wish Before It Flies · 한옥 다리 소원 풍등'
    }
  };

  /* harmless, funny lines — never insults, never anyone's misfortune */
  var SILLY = {
    en: [
      'My cat knows my bank PIN',
      'I accidentally ordered 47 dumplings',
      'Please make tomorrow Sunday again',
      'I forgot why I opened the fridge',
      'May my socks always match',
      'I would like one more slice of cake, please',
      'My plant is judging my life choices',
      'I reheated my coffee four times today',
      'Please let the bus wait ten more seconds',
      "I said 'you too' to a waiter who said 'enjoy your meal'",
      'My rice cooker sings better than I do',
      'I waved at a mannequin today',
      'Please make the Wi-Fi love me again',
      'I put the remote in the fridge',
      'May my hair behave on windy days',
      'I just ate a snack for emotional support',
      'Please let there be one more fry at the bottom',
      'I clapped when the plane landed',
      'My phone battery is my only enemy',
      'I want to nap professionally',
      'May the elevator already be on my floor',
      'I searched for my glasses while wearing them',
      'Please let my favourite show have one more season',
      'I sneezed and forgot my whole sentence',
      'My pillow deserves a promotion',
      'I would like to be a cat for one weekend',
      'Please let the kimchi be perfectly ripe today',
      'I told the dog all my secrets',
      'My umbrella only works when I forget it',
      'I want zero emails and one bowl of noodles',
      'Please make the traffic light notice me',
      "I answered 'good morning' to a cat",
      'My houseplant got more compliments than me',
      'I ate the last cookie and blamed the wind',
      'Please let my rice cook itself',
      'I have been holding this sneeze since Tuesday',
      'My favourite song is stuck in my head again',
      'I need a nap and a small mountain of tteokbokki',
      'Please let my next haircut be a good one',
      'I forgot my age for a full ten seconds'
    ],
    ko: [
      '고양이가 내 통장 비번 앎',
      '지금 당장 라면 2봉지 끓여 먹고 싶음',
      '방금 냉장고 왜 열었는지 까먹음',
      '내일 월요일 취소 바람',
      '양말 두 짝이 꼭 같기를',
      '케이크 한 조각만 더 주세요',
      '우리 화분이 내 인생을 평가 중',
      '오늘 커피를 네 번 데웠음',
      '버스가 10초만 더 기다려 주길',
      '점원이 "맛있게 드세요" 했는데 "네!"라고만 대답함',
      '내 밥솥이 나보다 노래를 잘함',
      '마네킹한테 손 흔들었음',
      '와이파이가 나를 다시 사랑하게 해 주세요',
      '리모컨을 냉장고에 넣었음',
      '바람 부는 날 머리카락이 착하게 있기를',
      '감정 지지용으로 과자를 먹었음',
      '감자튀김 통 바닥에 하나만 더 있기를',
      '비행기 착륙할 때 혼자 박수 쳤음',
      '내 유일한 적은 휴대폰 배터리',
      '낮잠을 직업으로 하고 싶음',
      '엘리베이터가 이미 내 층에 있기를',
      '안경 쓴 채로 안경을 찾았음',
      '내 최애 드라마 시즌 하나만 더',
      '재채기하니까 문장을 다 까먹음',
      '내 베개 승진 좀 시켜 주세요',
      '주말만 고양이로 살고 싶음',
      '오늘 김치가 딱 좋게 익었기를',
      '강아지한테 내 비밀을 다 말했음',
      '우산은 내가 안 챙길 때만 잘 작동함',
      '메일 0통, 국수 1그릇이면 만족',
      '신호등이 나를 봐줬으면',
      '고양이한테 "안녕하세요"라고 인사함',
      '화분이 나보다 칭찬을 많이 받음',
      '마지막 쿠키 먹고 바람 탓했음',
      '밥이 알아서 지어졌으면',
      '화요일부터 참은 재채기를 아직 참는 중',
      '최애 노래가 머리에서 안 나감',
      '낮잠 한 번과 떡볶이 작은 산이 필요함',
      '다음에 머리 자르는 건 꼭 잘 되기를',
      '10초 동안 내 나이를 까먹었음'
    ]
  };

  var TITLES = {
    en: [
      { min: 7, name: "The Sky's Favourite", sub: 'Seven wishes, not one trick. The dokkaebi went home sulking.' },
      { min: 5, name: 'Half Angel, Half Dokkaebi', sub: 'The sky kept most of your words — and borrowed a few.' },
      { min: 3, name: "Dokkaebi's Favourite Customer", sub: 'A balanced night: some wishes yours, some written by the sky.' },
      { min: 1, name: 'The Sky Rewrote Your Wish', sub: 'Your lanterns all flew, just not always with your words on them.' },
      { min: 0, name: 'A Night Written Entirely by the Sky', sub: 'You gave the dokkaebi a perfect evening. Honestly, impressive.' }
    ],
    ko: [
      { min: 7, name: '하늘이 총애하는 소원꾼', sub: '일곱 번 모두 내 글이 하늘에 닿았어요. 도깨비는 삐져서 돌아갔습니다.' },
      { min: 5, name: '반은 천사, 반은 도깨비', sub: '대부분의 소원은 하늘이 지켜줬고, 몇 개는 하늘이 가져갔어요.' },
      { min: 3, name: '도깨비 단골손님', sub: '내 소원과 하늘이 대신 쓴 소원이 반반인 밤.' },
      { min: 1, name: '하늘이 소원을 대신 쓴 밤', sub: '풍등은 다 떴지만, 글이 늘 내 것이었던 건 아니에요.' },
      { min: 0, name: '하늘이 전부 대신 쓴 밤', sub: '도깨비에게 완벽한 저녁을 선물했어요. 이것도 대단합니다.' }
    ]
  };

  /* words we quietly keep out of the sky */
  var BLOCK = {
    en: ['fuck', 'fucks', 'fucking', 'fucked', 'fucker', 'motherfuck', 'shit', 'shitty', 'bullshit', 'bitch', 'bitches',
      'bastard', 'asshole', 'assholes', 'dick', 'dicks', 'cock', 'cocks', 'cunt', 'pussy', 'whore', 'slut', 'douche',
      'prick', 'wanker', 'bollocks', 'porn', 'porno', 'nude', 'nudes', 'naked', 'rape', 'raped', 'rapist', 'sex', 'sexy',
      'suicide', 'kys', 'kill', 'killed', 'killing', 'murder', 'murderer', 'die', 'died', 'dead', 'death',
      'nazi', 'hitler', 'nigger', 'nigga', 'faggot', 'fag', 'retard', 'retarded', 'tranny', 'molest', 'pedo', 'incest',
      'cocaine', 'heroin', 'meth'],
    ko: ['씨발', '씨팔', '시발', '시팔', '씹', '좆', '좇', '병신', '븅신', '지랄', '염병', '개새끼', '새끼', '니미',
      '미친놈', '미친년', '창녀', '갈보', '걸레', '보지', '자지', '후장', '항문', '강간', '성폭', '성추행', '야동',
      '야설', '음란', '섹스', '자위', '발기', '죽어', '죽이', '죽고싶', '뒈져', '뒤져', '자살', '한남', '한녀',
      '김치녀', '맘충', '틀딱', '짱깨', '쪽바리', '조센징', 'ㅅㅂ', 'ㅆㅂ', 'ㅂㅅ', 'ㅈㄹ', 'ㄷㅊ'],
    phrase: ['killyourself', 'fuckyourself', 'gofuckyourself', 'killyourselfplease']
  };

  /* difficulty per lantern: seconds, lanterns on the water */
  var PLAN = [
    { t: 10, n: 6 }, { t: 10, n: 6 }, { t: 9, n: 6 }, { t: 8, n: 5 },
    { t: 8, n: 5 }, { t: 7, n: 4 }, { t: 6, n: 4 }
  ];
  var TOTAL = PLAN.length;

  /* ---------------------------------------------------------- dom */
  var $ = function (s) { return document.querySelector(s); };
  var body = document.body;
  var lanternsEl = $('#lanterns');
  var input = $('#wishInput');
  var charsEl = $('#chars');
  var hintEl = $('#hint');
  var msgEl = $('#msg');
  var clock = $('#clock');
  var timeNum = $('#timeNum');
  var meterFill = $('#meterFill');
  var meterEl = document.querySelector('.meter');
  var roundNum = $('#roundNum');
  var roundTotal = $('#roundTotal');
  var scoreNum = $('#scoreNum');
  var comboNum = $('#comboNum');
  var comboWrap = $('#composer') && document.getElementById('comboWrap');
  var floatersEl = $('#floaters');
  var overlay = $('#result');
  var toastEl = $('#toast');

  /* ---------------------------------------------------------- state */
  var state = {
    lang: 'en',
    sound: true,
    playing: false,
    locked: false,
    round: 0,
    score: 0,
    combo: 0,
    best: 0,
    dur: 10,
    count: 6,
    mine: -1,
    wishes: [],
    flops: [],
    log: [],
    timer: { on: false, start: 0, dur: 0, raf: 0, lastSec: -1 },
    card: null,
    cardUrl: ''
  };

  try {
    var sl = localStorage.getItem('wbf.lang');
    if (sl === 'ko' || sl === 'en') state.lang = sl;
    if (localStorage.getItem('wbf.sound') === 'off') state.sound = false;
  } catch (e) { /* private mode */ }

  function t(key) {
    var d = I18N[state.lang] || I18N.en;
    return d[key] != null ? d[key] : (I18N.en[key] || '');
  }
  function rand(n) { return Math.floor(Math.random() * n); }
  function pick(a) { return a[rand(a.length)]; }
  function fmt(n) { return Number(n).toLocaleString(state.lang === 'ko' ? 'ko-KR' : 'en-US'); }

  /* ---------------------------------------------------------- language */
  function applyLang(lang) {
    state.lang = lang;
    try { localStorage.setItem('wbf.lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
    body.setAttribute('data-lang', lang);
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      var v = t(k);
      if (k === 'title') nodes[i].innerHTML = v; else nodes[i].textContent = v;
    }
    var phs = document.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < phs.length; j++) phs[j].setAttribute('placeholder', t(phs[j].getAttribute('data-i18n-ph')));
    var lbs = document.querySelectorAll('.lang button');
    for (var m = 0; m < lbs.length; m++) lbs[m].classList.toggle('active', lbs[m].getAttribute('data-lang') === lang);
    var sb = $('#soundBtn');
    if (sb) { sb.setAttribute('aria-label', state.sound ? t('soundOn') : t('soundOff')); }
    if (state.playing) {
      if (hintEl.dataset.mode === 'typing') hintEl.textContent = t('hintTyping');
      else if (hintEl.dataset.mode === 'urgent') hintEl.textContent = t('hintUrgent');
      else hintEl.textContent = t('hintIdle');
      refreshLanternLabels();
    }
    if (!overlay.hidden) renderResultTexts();
  }

  function refreshLanternLabels() {
    var btns = lanternsEl.querySelectorAll('.lantern');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-label', t('lanternN').replace('{n}', i + 1));
    }
  }

  /* ---------------------------------------------------------- ambient canvas */
  var fx = document.getElementById('fx');
  var ctx = fx.getContext('2d');
  var stars = [], motes = [], glimmers = [];
  var fxW = 0, fxH = 0, fxDpr = 1, fxRaf = 0, fxLast = 0;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function buildFx() {
    var W = fxW, H = fxH;
    stars = [];
    var starCount = Math.round(W * H / 16000);
    starCount = Math.max(40, Math.min(150, starCount));
    for (var i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.58,
        r: Math.random() * 1.25 + 0.25,
        p: Math.random() * Math.PI * 2,
        s: 0.4 + Math.random() * 1.1,
        a: 0.18 + Math.random() * 0.55
      });
    }
    motes = [];
    for (var j = 0; j < 16; j++) {
      motes.push({
        x: Math.random() * W, y: H * (0.35 + Math.random() * 0.5),
        r: 0.8 + Math.random() * 1.6, vy: 0.06 + Math.random() * 0.14,
        vx: (Math.random() - 0.5) * 0.12, p: Math.random() * 6.28, a: 0.12 + Math.random() * 0.3
      });
    }
    glimmers = [];
    for (var k = 0; k < 26; k++) {
      glimmers.push({
        x: W * (0.08 + Math.random() * 0.84),
        y: H * (0.76 + Math.random() * 0.2),
        w: 12 + Math.random() * 60,
        p: Math.random() * 6.28,
        s: 0.5 + Math.random() * 1.2
      });
    }
  }

  function resizeFx() {
    fxDpr = Math.min(2, window.devicePixelRatio || 1);
    fxW = window.innerWidth; fxH = window.innerHeight;
    fx.width = Math.round(fxW * fxDpr);
    fx.height = Math.round(fxH * fxDpr);
    ctx.setTransform(fxDpr, 0, 0, fxDpr, 0, 0);
    buildFx();
    drawFx(performance.now(), true);
  }

  function drawFx(now, once) {
    var W = fxW, H = fxH;
    ctx.clearRect(0, 0, W, H);
    var time = once ? 0 : now / 1000;

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var tw = once ? 0.6 : 0.5 + 0.5 * Math.sin(time * s.s + s.p);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 6.283);
      ctx.fillStyle = 'rgba(255,246,225,' + (s.a * tw).toFixed(3) + ')';
      ctx.fill();
    }

    for (var m = 0; m < motes.length; m++) {
      var o = motes[m];
      if (!once) {
        o.y -= o.vy; o.x += o.vx;
        if (o.y < H * 0.3) { o.y = H * 0.86; o.x = Math.random() * W; }
      }
      var glow = 0.4 + 0.6 * Math.sin(time * 1.2 + o.p);
      var g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 7);
      g.addColorStop(0, 'rgba(255,206,140,' + (o.a * glow).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(255,180,90,0)');
      ctx.beginPath(); ctx.arc(o.x, o.y, o.r * 7, 0, 6.283);
      ctx.fillStyle = g; ctx.fill();
    }

    for (var k = 0; k < glimmers.length; k++) {
      var l = glimmers[k];
      var a = once ? 0.18 : 0.1 + 0.16 * (0.5 + 0.5 * Math.sin(time * 0.8 + l.p));
      ctx.beginPath();
      ctx.ellipse(l.x, l.y, l.w * (0.8 + 0.2 * Math.sin(time * 0.5 + l.p)), 1.4, 0, 0, 6.283);
      ctx.fillStyle = 'rgba(255,200,135,' + a.toFixed(3) + ')';
      ctx.fill();
    }

    if (!once) fxRaf = requestAnimationFrame(drawFx);
  }

  function startFx() {
    if (reduceMotion) { drawFx(performance.now(), true); return; }
    cancelAnimationFrame(fxRaf);
    fxLast = performance.now();
    fxRaf = requestAnimationFrame(drawFx);
  }

  /* ---------------------------------------------------------- sound */
  var ac = null, noise = null;
  function audioCtx() {
    if (!state.sound) return null;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!ac) ac = new AC();
      if (ac.state === 'suspended') ac.resume();
      return ac;
    } catch (e) { return null; }
  }
  function tone(freq, delay, dur, gain, type, glide) {
    var c = audioCtx(); if (!c) return;
    var t0 = c.currentTime + (delay || 0);
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(30, glide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function noiseBurst(dur, gain, cut) {
    var c = audioCtx(); if (!c) return;
    if (!noise) {
      noise = c.createBuffer(1, c.sampleRate * 0.6, c.sampleRate);
      var d = noise.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    }
    var src = c.createBufferSource(); src.buffer = noise;
    var f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = cut || 700;
    var g = c.createGain();
    g.gain.setValueAtTime(gain, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    src.connect(f); f.connect(g); g.connect(c.destination);
    src.start(); src.stop(c.currentTime + dur);
  }
  function chime() {
    if (!state.sound) return;
    tone(523.25, 0, 1.4, 0.05, 'sine');
    tone(659.25, 0.1, 1.3, 0.042, 'sine');
    tone(783.99, 0.2, 1.5, 0.034, 'sine');
    tone(1046.5, 0.32, 1.6, 0.018, 'triangle');
  }
  function boom(soft) {
    if (!state.sound) return;
    noiseBurst(soft ? 0.3 : 0.45, soft ? 0.05 : 0.09, 500);
    tone(150, 0, 0.4, soft ? 0.05 : 0.09, 'sine', 60);
  }
  function tick() { if (!state.sound) return; tone(1250, 0, 0.045, 0.018, 'square'); }

  /* ---------------------------------------------------------- text guard */
  function normalize(s) {
    var v = s.toLowerCase().normalize ? s.toLowerCase().normalize('NFKC') : s.toLowerCase();
    v = v.replace(/[\u200b-\u200d\ufeff]/g, '');
    v = v.replace(/[0@$!|13457+]/g, function (ch) {
      return ({ '0': 'o', '1': 'i', '@': 'a', '$': 's', '!': 'i', '|': 'l', '3': 'e', '4': 'a', '5': 's', '7': 't', '+': 't' })[ch] || ch;
    });
    var spaced = v.replace(/[^0-9a-z\uac00-\ud7a3\s]/g, ' ').replace(/\s+/g, ' ').trim();
    var compact = spaced.replace(/\s/g, '');
    return { spaced: spaced, compact: compact };
  }

  function checkWish(raw) {
    var text = raw.replace(/\s+/g, ' ').trim();
    if (!text) return { ok: false, msg: t('msgEmpty') };
    if (/https?:\/\/|www\.|\.com\b|\.net\b|\.kr\b/i.test(text)) return { ok: false, msg: t('msgLink') };
    if (/^(.)\1+$/.test(text.replace(/\s/g, ''))) return { ok: false, msg: t('msgRepeat') };
    var n = normalize(text);
    var en = BLOCK.en;
    for (var i = 0; i < en.length; i++) {
      var w = en[i];
      var re = new RegExp('\\b' + w + '\\b');
      if (re.test(n.spaced)) return { ok: false, msg: t('msgBlocked') };
      if (w.length >= 5 && n.compact.indexOf(w) !== -1) return { ok: false, msg: t('msgBlocked') };
    }
    for (var p = 0; p < BLOCK.phrase.length; p++) {
      if (n.compact.indexOf(BLOCK.phrase[p]) !== -1) return { ok: false, msg: t('msgBlocked') };
    }
    var ko = BLOCK.ko;
    for (var j = 0; j < ko.length; j++) {
      if (n.compact.indexOf(ko[j]) !== -1) return { ok: false, msg: t('msgBlocked') };
    }
    return { ok: true, text: text };
  }

  /* ---------------------------------------------------------- ui helpers */
  var msgTimer = 0, toastTimer = 0;
  function setMsg(text, bad) {
    clearTimeout(msgTimer);
    msgEl.textContent = text || '';
    msgEl.classList.toggle('bad', !!bad);
    msgEl.classList.toggle('show', !!text);
    if (text) msgTimer = setTimeout(function () { msgEl.classList.remove('show'); }, 3200);
  }
  function toast(text) {
    clearTimeout(toastTimer);
    toastEl.textContent = text;
    toastEl.classList.add('show');
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2400);
  }
  function setHint(key, mode) {
    hintEl.dataset.mode = mode || '';
    hintEl.textContent = t(key);
    hintEl.classList.toggle('warn', mode === 'urgent');
  }
  function setScore() {
    scoreNum.textContent = fmt(state.score);
    comboNum.textContent = '×' + Math.max(1, state.combo);
    comboWrap.classList.add('pop');
    setTimeout(function () { comboWrap.classList.remove('pop'); }, 260);
  }

  /* ---------------------------------------------------------- lanterns */
  var lanternEls = [];

  function buildLanterns(n) {
    lanternsEl.innerHTML = '';
    lanternEls = [];
    for (var i = 0; i < n; i++) {
      (function (idx) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'lantern';
        b.style.setProperty('--i', idx);
        b.style.setProperty('--hue', (idx * 8) % 24);
        b.setAttribute('aria-label', t('lanternN').replace('{n}', idx + 1));
        b.innerHTML = '<span class="sway"><span class="lamp"></span><span class="tassel"></span></span>';
        b.addEventListener('click', function () { onPick(idx); });
        lanternsEl.appendChild(b);
        lanternEls.push(b);
        if (!reduceMotion) {
          b.animate(
            [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'none' }],
            { duration: 520, delay: idx * 55, easing: 'cubic-bezier(.2,.7,.25,1)', fill: 'backwards' }
          );
        }
      })(i);
    }
  }

  function onPick(i) {
    if (!state.playing || state.locked) return;
    var v = input.value.replace(/\s+/g, ' ').trim();
    if (!v) { setMsg(t('msgEmpty'), false); input.focus(); return; }
    var res = checkWish(input.value);
    if (!res.ok) { setMsg(res.msg, true); input.focus(); return; }
    if (!state.timer.on) startTimer();
    if (i === state.mine) fail('dokkaebi', i, res.text);
    else succeed(i, res.text);
  }

  /* ---------------------------------------------------------- timer */
  function startTimer() {
    state.timer.on = true;
    state.timer.start = performance.now();
    state.timer.dur = state.dur * 1000;
    state.timer.lastSec = -1;
    clock.classList.remove('urgent');
    meterEl.classList.remove('low');
    setHint('hintTyping', 'typing');
    state.timer.raf = requestAnimationFrame(tickTimer);
  }

  function tickTimer(now) {
    if (!state.timer.on) return;
    var left = state.timer.dur - (now - state.timer.start);
    var p = Math.max(0, left / state.timer.dur);
    meterFill.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    clock.style.setProperty('--p', (p * 100).toFixed(1));
    var sec = Math.ceil(left / 1000);
    if (sec !== state.timer.lastSec) {
      state.timer.lastSec = sec;
      timeNum.textContent = Math.max(0, sec);
      if (sec <= 3 && sec > 0) tick();
      if (sec <= 3) { clock.classList.add('urgent'); meterEl.classList.add('low'); setHint('hintUrgent', 'urgent'); }
    }
    if (left <= 0) { timeUp(); return; }
    state.timer.raf = requestAnimationFrame(tickTimer);
  }

  function stopTimer() {
    state.timer.on = false;
    cancelAnimationFrame(state.timer.raf);
  }

  function timeUp() {
    stopTimer();
    timeNum.textContent = '0';
    meterFill.style.transform = 'scaleX(0)';
    clock.style.setProperty('--p', '0');
    var idx = lanternEls.length ? rand(lanternEls.length) : 0;
    var silly = pick(SILLY[state.lang]);
    fail('timeout', idx, silly);
  }

  /* ---------------------------------------------------------- outcomes */
  function remainingSeconds() {
    if (!state.timer.on) return 0;
    return Math.max(0, (state.timer.dur - (performance.now() - state.timer.start)) / 1000);
  }

  function succeed(i, text) {
    var left = remainingSeconds();
    stopTimer();
    state.locked = true;
    var mult = Math.min(4, state.combo + 1);
    var pts = Math.round((100 + left * 12) * mult);
    state.score += pts;
    state.combo += 1;
    state.best = Math.max(state.best, state.combo);
    setScore();
    state.wishes.push(text);
    state.log.push({ ok: true, text: text });

    var el = lanternEls[i];
    var rect = el ? el.getBoundingClientRect() : composerRect();
    if (el) { el.classList.add('taken'); el.disabled = true; }
    launchFloater(text, true, rect);
    chime();
    toast('+' + fmt(pts) + ' · ' + t('toastGood'));
    input.value = '';
    charsEl.textContent = '0';
    input.disabled = true;
    setHint('hintTyping', 'typing');
    setTimeout(nextRound, 1500);
  }

  function fail(reason, idx, text) {
    stopTimer();
    state.locked = true;
    input.disabled = true;
    var silly = text || pick(SILLY[state.lang]);
    state.flops.push(silly);
    state.log.push({ ok: false, text: silly, reason: reason });
    state.combo = 0;
    setScore();
    input.value = '';
    charsEl.textContent = '0';

    var el = idx != null ? lanternEls[idx] : null;
    var rect = el ? el.getBoundingClientRect() : composerRect();
    if (el) {
      if (reason === 'dokkaebi') { el.classList.add('cursed'); el.disabled = true; }
      el.classList.add('taken');
    }
    launchFloater(silly, false, rect);
    flash(rect, reason === 'dokkaebi');
    puff(rect, reason === 'dokkaebi');
    boom(reason !== 'dokkaebi');
    toast(reason === 'dokkaebi' ? t('toastMine') : t('toastTimeout'));
    setTimeout(nextRound, 2100);
  }

  function nextRound() {
    state.round += 1;
    if (state.round > TOTAL) { showResults(); return; }
    var plan = PLAN[state.round - 1];
    state.dur = plan.t;
    state.count = plan.n;
    state.mine = rand(plan.n);
    state.locked = false;
    buildLanterns(plan.n);
    input.value = '';
    input.disabled = false;
    charsEl.textContent = '0';
    roundNum.textContent = state.round;
    roundTotal.textContent = TOTAL;
    timeNum.textContent = plan.t;
    clock.style.setProperty('--p', '100');
    clock.classList.remove('urgent');
    meterFill.style.transform = 'scaleX(1)';
    meterEl.classList.remove('low');
    setMsg('');
    setHint('hintIdle', 'idle');
    updateHud();
    if (window.matchMedia('(hover:hover)').matches) input.focus({ preventScroll: true });
  }

  function updateHud() {
    scoreNum.textContent = fmt(state.score);
    comboNum.textContent = '×' + Math.max(1, state.combo);
  }

  function composerRect() {
    var r = document.querySelector('.composer').getBoundingClientRect();
    return { left: r.left, top: r.top, width: r.width, height: r.height };
  }

  /* ---------------------------------------------------------- floaters */
  function launchFloater(text, good, rect) {
    var f = document.createElement('div');
    f.className = 'floater ' + (good ? 'good' : 'odd');
    var inner = document.createElement('div');
    inner.className = 'float-inner';
    inner.innerHTML = '<span class="mini"><i class="mini-glow"></i><i class="mini-body"></i></span><span class="tag"></span>';
    inner.querySelector('.tag').textContent = text;
    f.appendChild(inner);
    floatersEl.appendChild(f);

    var vw = window.innerWidth, vh = window.innerHeight;
    var sx = rect ? rect.left + rect.width / 2 : vw / 2;
    var sy = rect ? rect.top + rect.height * 0.2 : vh * 0.7;
    var ty = Math.max(vh * 0.13, Math.min(vh * 0.34, sy - vh * 0.3)) + (Math.random() * 28 - 14);
    var tx = sx + (Math.random() * 140 - 70);
    if (tx < 80) tx = 80;
    if (tx > vw - 80) tx = vw - 80;
    var midx = (sx + tx) / 2, midy = (sy + ty) / 2 - 20;

    f.style.transform = 'translate3d(' + sx + 'px,' + sy + 'px,0)';
    var anim = f.animate([
      { transform: 'translate3d(' + sx + 'px,' + sy + 'px,0) scale(.45)', opacity: .2 },
      { transform: 'translate3d(' + midx + 'px,' + midy + 'px,0) scale(.85)', opacity: 1, offset: .45 },
      { transform: 'translate3d(' + tx + 'px,' + ty + 'px,0) scale(1)', opacity: 1 }
    ], { duration: 2600, easing: 'cubic-bezier(.18,.72,.24,1)', fill: 'forwards' });

    setTimeout(function () { f.classList.add('revealed'); }, 900);
    if (anim && anim.finished && anim.finished.then) {
      anim.finished.then(function () {
        f.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0)';
        f.classList.add('settled');
      }).catch(function () {});
    } else {
      f.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0)';
    }
    var live = floatersEl.querySelectorAll('.floater');
    if (live.length > 9) live[0].remove();
  }

  function flash(rect, cold) {
    var d = document.createElement('div');
    d.className = 'flash' + (cold ? ' cold' : '');
    var cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    var cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    d.style.setProperty('--fx', cx + 'px');
    d.style.setProperty('--fy', cy + 'px');
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 700);
  }

  function puff(rect, cold) {
    var cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    var cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    var colors = cold ? ['#d9fffb', '#9fe6e1', '#6fc3c2'] : ['#fff2d2', '#ffcf8a', '#ff9d4d'];
    for (var i = 0; i < 16; i++) {
      var p = document.createElement('span');
      p.className = 'puff';
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.background = colors[i % colors.length];
      p.style.boxShadow = '0 0 10px 3px ' + colors[i % colors.length] + '66';
      document.body.appendChild(p);
      var a = Math.random() * Math.PI * 2;
      var dist = 30 + Math.random() * 100;
      var dx = Math.cos(a) * dist;
      var dy = Math.sin(a) * dist - 40 - Math.random() * 40;
      var anim = p.animate([
        { transform: 'translate(-50%,-50%) scale(1)', opacity: .95 },
        { transform: 'translate(calc(-50% + ' + dx + 'px), calc(-50% + ' + dy + 'px)) scale(0)', opacity: 0 }
      ], { duration: 700 + Math.random() * 500, easing: 'cubic-bezier(.2,.65,.3,1)', fill: 'forwards' });
      if (anim && anim.finished && anim.finished.then) anim.finished.then((function (node) { return function () { node.remove(); }; })(p)).catch(function () {});
      else setTimeout((function (node) { return function () { node.remove(); }; })(p), 1300);
    }
  }

  /* ---------------------------------------------------------- flow */
  function startGame() {
    state.playing = true;
    state.locked = false;
    state.round = 0;
    state.score = 0;
    state.combo = 0;
    state.best = 0;
    state.wishes = [];
    state.flops = [];
    state.log = [];
    floatersEl.innerHTML = '';
    scoreNum.textContent = '0';
    comboNum.textContent = '×1';
    overlay.hidden = true;
    body.classList.add('playing');
    setMsg('');
    nextRound();
  }

  function resetToIntro() {
    state.playing = false;
    state.locked = false;
    stopTimer();
    body.classList.remove('playing');
    floatersEl.innerHTML = '';
    state.round = 0;
    state.score = 0;
    state.combo = 0;
    buildLanterns(6);
    input.value = '';
    input.disabled = false;
    charsEl.textContent = '0';
    setMsg('');
    if (document.activeElement === input) input.blur();
    window.scrollTo(0, 0);
  }

  function resultTitle(n) {
    var list = TITLES[state.lang] || TITLES.en;
    for (var i = 0; i < list.length; i++) if (n >= list[i].min) return list[i];
    return list[list.length - 1];
  }

  function renderResultTexts() {
    var good = state.wishes.length, bad = state.flops.length;
    var ti = resultTitle(good);
    $('#resultTitle').textContent = ti.name;
    $('#resultSub').textContent = ti.sub;
    $('#stGood').textContent = good;
    $('#stBad').textContent = bad;
    $('#stCombo').textContent = state.best;
    $('#stScore').textContent = fmt(state.score);

    var gl = $('#goodList'), bl = $('#badList');
    gl.innerHTML = ''; bl.innerHTML = '';
    if (good) {
      state.wishes.slice(0, 4).forEach(function (w) {
        var li = document.createElement('li'); li.textContent = w; gl.appendChild(li);
      });
    } else {
      var e1 = document.createElement('li'); e1.className = 'empty'; e1.textContent = t('listEmptyGood'); gl.appendChild(e1);
    }
    if (bad) {
      state.flops.slice(0, 4).forEach(function (w) {
        var li = document.createElement('li'); li.textContent = w; bl.appendChild(li);
      });
    } else {
      var e2 = document.createElement('li'); e2.className = 'empty'; e2.textContent = t('listEmptyBad'); bl.appendChild(e2);
    }
    bl.parentElement.querySelector('ul').classList.add('odd');
  }

  function showResults() {
    stopTimer();
    state.playing = true; /* keep scene collapsed */
    state.locked = true;
    input.disabled = true;
    renderResultTexts();
    overlay.hidden = false;
    overlay.scrollTop = 0;
    buildCard().then(function (card) {
      if (!card) return;
      state.card = card.canvas;
      state.cardUrl = card.url;
      $('#cardImg').src = card.url;
      $('#downloadBtn').disabled = false;
    }).catch(function () {});
  }

  /* ---------------------------------------------------------- result card */
  var bgImg = new Image();
  var bgReady = false;
  bgImg.onload = function () { bgReady = true; };
  bgImg.src = 'assets/hanok-night-wide.jpg';

  function ensureBg() {
    return new Promise(function (resolve) {
      if (bgReady || (bgImg.complete && bgImg.naturalWidth)) { bgReady = true; resolve(bgImg); return; }
      var done = function () { bgReady = true; resolve(bgImg); };
      bgImg.addEventListener('load', done, { once: true });
      bgImg.addEventListener('error', function () { resolve(null); }, { once: true });
      setTimeout(function () { resolve(bgReady ? bgImg : null); }, 2500);
    });
  }

  function seeded(seed) {
    var s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }

  function wrapText(c, text, maxW, font) {
    c.font = font;
    var words = String(text).split(/\s+/);
    var lines = [], line = '';
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      var test = line ? line + ' ' + w : w;
      if (c.measureText(test).width <= maxW) { line = test; continue; }
      if (line) lines.push(line);
      if (c.measureText(w).width > maxW) {
        var chunk = '';
        for (var j = 0; j < w.length; j++) {
          if (c.measureText(chunk + w[j]).width > maxW) { lines.push(chunk); chunk = w[j]; }
          else chunk += w[j];
        }
        line = chunk;
      } else line = w;
    }
    if (line) lines.push(line);
    return lines;
  }

  function fitFont(c, text, maxW, family, weight, size, min) {
    var s = size;
    while (s > min) {
      c.font = weight + ' ' + s + 'px ' + family;
      if (c.measureText(text).width <= maxW) break;
      s -= 2;
    }
    return s;
  }

  function drawLanternIcon(c, x, y, w, h, cold, glow) {
    c.save();
    if (glow) {
      var g = c.createRadialGradient(x, y, 0, x, y, w * 3.2);
      g.addColorStop(0, cold ? 'rgba(150,230,225,.45)' : 'rgba(255,180,100,.5)');
      g.addColorStop(1, 'rgba(255,160,80,0)');
      c.fillStyle = g;
      c.beginPath(); c.arc(x, y, w * 3.2, 0, 6.283); c.fill();
    }
    c.beginPath();
    c.moveTo(x - w / 2, y - h / 2 + h * 0.12);
    c.quadraticCurveTo(x - w / 2, y - h / 2, x, y - h / 2);
    c.quadraticCurveTo(x + w / 2, y - h / 2, x + w / 2, y - h / 2 + h * 0.12);
    c.lineTo(x + w / 2, y + h / 2 - h * 0.2);
    c.quadraticCurveTo(x + w / 2, y + h / 2, x, y + h / 2);
    c.quadraticCurveTo(x - w / 2, y + h / 2, x - w / 2, y + h / 2 - h * 0.2);
    c.closePath();
    var lg = c.createLinearGradient(x, y - h / 2, x, y + h / 2);
    if (cold) { lg.addColorStop(0, '#eafcfb'); lg.addColorStop(.55, '#9fdedb'); lg.addColorStop(1, '#4e9398'); }
    else { lg.addColorStop(0, '#fff8e2'); lg.addColorStop(.5, '#ffd18a'); lg.addColorStop(1, '#e08f3a'); }
    c.fillStyle = lg; c.fill();
    c.restore();
  }

  async function buildCard() {
    var isKo = state.lang === 'ko';
    var serif = isKo ? '"Jua","Fredoka","Noto Sans KR",sans-serif'
                     : '"Fredoka","Jua","Noto Sans KR",sans-serif';
    var sans = isKo ? '"Dongle","Quicksand","Noto Sans KR",sans-serif'
                    : '"Quicksand","Dongle","Noto Sans KR",sans-serif';
    var hand = isKo ? '"Gaegu","Patrick Hand","Dongle",cursive'
                    : '"Patrick Hand","Gaegu",cursive';
    var wD = isKo ? '400' : '600';
    var wB = isKo ? '400' : '500';
    var wH = isKo ? '700' : '400';
    var wC = isKo ? '700' : '600';
    var ti0 = resultTitle(state.wishes.length);

    /* Hangul webfonts arrive as many unicode-range subsets and canvas text does not fetch
       them on its own: ask every family for the exact strings that will be drawn. */
    var cardText = ti0.name + ' ' + ti0.sub + ' ' + state.wishes.join(' ') + ' ' + state.flops.join(' ') +
      ' ' + t('cardWishes') + ' ' + t('cardTricks') + ' ' + t('cardCombo') + ' ' + t('cardScore') +
      ' ' + t('cardWords') + ' ' + t('cardSky') + ' ' + t('cardTag') + ' WISH BEFORE IT FLIES 0123456789';
    try {
      await Promise.all([
        document.fonts.load(wD + ' 70px "Jua"', cardText),
        document.fonts.load('600 70px "Fredoka"', cardText),
        document.fonts.load(wB + ' 23px "Dongle"', cardText),
        document.fonts.load('500 23px "Quicksand"', cardText),
        document.fonts.load(wH + ' 38px "Gaegu"', cardText),
        document.fonts.load('400 38px "Patrick Hand"', cardText)
      ]);
    } catch (e) {}
    try { await document.fonts.ready; } catch (e) {}

    var W = 1080, H = 1350;
    var c = document.createElement('canvas');
    c.width = W; c.height = H;
    var x = c.getContext('2d');

    var img = await ensureBg();
    if (img) {
      var s = Math.max(W / img.width, H / img.height);
      var dw = img.width * s, dh = img.height * s;
      x.drawImage(img, (W - dw) / 2, H - dh, dw, dh);
    } else {
      var back = x.createLinearGradient(0, 0, 0, H);
      back.addColorStop(0, '#0b1730'); back.addColorStop(1, '#050a14');
      x.fillStyle = back; x.fillRect(0, 0, W, H);
    }

    /* night scrim */
    var g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, 'rgba(4,9,20,.9)');
    g.addColorStop(.32, 'rgba(4,9,20,.62)');
    g.addColorStop(.62, 'rgba(4,9,20,.5)');
    g.addColorStop(1, 'rgba(3,7,16,.93)');
    x.fillStyle = g; x.fillRect(0, 0, W, H);

    /* moonlight glow, kept above the title so nothing collides */
    var moon = x.createRadialGradient(W * .5, -40, 0, W * .5, -40, 520);
    moon.addColorStop(0, 'rgba(255,238,200,.28)');
    moon.addColorStop(.4, 'rgba(255,224,160,.1)');
    moon.addColorStop(1, 'rgba(255,220,150,0)');
    x.fillStyle = moon; x.fillRect(0, 0, W, 520);

    var rnd = seeded(7 + state.wishes.length * 13 + state.score);
    for (var i = 0; i < 90; i++) {
      var sx = rnd() * W, sy = rnd() * H * 0.55, sr = rnd() * 1.6 + .4;
      x.beginPath(); x.arc(sx, sy, sr, 0, 6.283);
      x.fillStyle = 'rgba(255,246,225,' + (0.15 + rnd() * 0.55).toFixed(2) + ')'; x.fill();
    }

    /* header */
    x.textAlign = 'center';
    x.textBaseline = 'alphabetic';
    x.fillStyle = 'rgba(255,198,120,.92)';
    x.font = wC + ' 21px ' + sans;
    var hd = 'WISH BEFORE IT FLIES';
    x.setTransform(1, 0, 0, 1, 0, 0);
    drawSpaced(x, hd, W / 2, 108, 7);
    x.fillStyle = 'rgba(255,214,160,.35)';
    x.fillRect(W / 2 - 60, 132, 120, 1);

    /* title */
    var ti = resultTitle(state.wishes.length);
    var tSize = fitFont(x, ti.name, W - 200, serif, wD, 70, 42);
    x.font = wD + ' ' + tSize + 'px ' + serif;
    x.fillStyle = '#fdf5e6';
    var lines = wrapText(x, ti.name, W - 180, wD + ' ' + tSize + 'px ' + serif).slice(0, 2);
    var titleY = 240;
    for (var li = 0; li < lines.length; li++) {
      x.fillText(lines[li], W / 2, titleY + li * (tSize * 1.2));
    }
    var afterTitle = titleY + (lines.length - 1) * (tSize * 1.2);

    x.font = wB + ' 26px ' + sans;
    x.fillStyle = 'rgba(251,242,226,.66)';
    var subLines = wrapText(x, ti.sub, W - 200, wB + ' 26px ' + sans).slice(0, 2);
    for (var si = 0; si < subLines.length; si++) {
      x.fillText(subLines[si], W / 2, afterTitle + 58 + si * 38);
    }

    /* stats */
    var statsY = 600;
    var good = state.wishes.length, bad = state.flops.length;
    var stats = [
      { n: good, l: t('cardWishes') },
      { n: bad, l: t('cardTricks') },
      { n: state.best, l: t('cardCombo') },
      { n: fmt(state.score), l: t('cardScore') }
    ];
    x.fillStyle = 'rgba(255,214,160,.2)';
    x.fillRect(90, statsY - 62, W - 180, 1);
    x.fillRect(90, statsY + 92, W - 180, 1);
    for (var k = 0; k < stats.length; k++) {
      var cx = 90 + (W - 180) * (k + 0.5) / stats.length;
      x.textAlign = 'center';
      x.fillStyle = '#ffc678';
      x.font = wD + ' 58px ' + serif;
      x.fillText(String(stats[k].n), cx, statsY + 26);
      x.fillStyle = 'rgba(251,242,226,.5)';
      x.font = wC + ' 20px ' + sans;
      x.fillText(stats[k].l.toUpperCase(), cx, statsY + 62);
    }

    /* lantern strip */
    var lY = 792, lCount = Math.max(state.log.length, 1);
    var gap = 54;
    var startX = W / 2 - (lCount - 1) * gap / 2;
    for (var q = 0; q < lCount; q++) {
      var item = state.log[q];
      drawLanternIcon(x, startX + q * gap, lY, 26, 34, !!(item && !item.ok), true);
    }

    /* words */
    var colX = 108, colW = W - 216;

    function truncTo(c, text, maxW, size, family) {
      c.font = wH + ' ' + size + 'px ' + family;
      if (c.measureText(text).width <= maxW) return text;
      var cut = text;
      while (cut.length > 2 && c.measureText(cut + '…').width > maxW) cut = cut.slice(0, -1);
      return cut + '…';
    }

    function section(label, items, cold, startY, max) {
      x.textAlign = 'left';
      x.fillStyle = cold ? 'rgba(160,225,222,.8)' : 'rgba(255,198,120,.8)';
      x.font = wC + ' 20px ' + sans;
      drawSpacedLeft(x, label.toUpperCase(), colX, startY, 4);
      var yy = startY + 52;
      var list = items.slice(0, max);
      if (!list.length) {
        x.fillStyle = 'rgba(251,242,226,.32)';
        x.font = wD + ' 26px ' + serif;
        x.fillText('—', colX, yy);
        return yy + 10;
      }
      for (var i2 = 0; i2 < list.length; i2++) {
        var txt = '“' + list[i2] + '”';
        var size = 38;
        x.font = wH + ' ' + size + 'px ' + hand;
        if (x.measureText(txt).width > colW) { size = 31; x.font = wH + ' ' + size + 'px ' + hand; }
        txt = truncTo(x, txt, colW, size, hand);
        x.fillStyle = cold ? '#c3ece9' : '#f7ead3';
        x.fillText(txt, colX, yy);
        yy += 58;
      }
      return yy;
    }

    var y2 = section(t('cardWords'), state.wishes, false, 872, 3);
    section(t('cardSky'), state.flops, true, Math.max(y2 + 8, 1072), 2);

    /* footer */
    x.textAlign = 'center';
    x.fillStyle = 'rgba(251,242,226,.36)';
    x.font = wB + ' 20px ' + sans;
    x.fillText(t('cardTag'), W / 2, 1272);
    x.fillStyle = 'rgba(251,242,226,.28)';
    x.font = wB + ' 18px ' + sans;
    x.fillText('ymi9595-tech.github.io/ymi9595/hanok-lantern', W / 2, 1302);

    var url = c.toDataURL('image/png');
    return { canvas: c, url: url };
  }

  function drawSpaced(c, text, cx, y, spacing) {
    c.save();
    c.textAlign = 'left';
    var total = 0, i;
    for (i = 0; i < text.length; i++) total += c.measureText(text[i]).width + spacing;
    total -= spacing;
    var x0 = cx - total / 2;
    for (i = 0; i < text.length; i++) {
      c.fillText(text[i], x0, y);
      x0 += c.measureText(text[i]).width + spacing;
    }
    c.restore();
  }
  function drawSpacedLeft(c, text, x0, y, spacing) {
    c.save();
    c.textAlign = 'left';
    for (var i = 0; i < text.length; i++) {
      c.fillText(text[i], x0, y);
      x0 += c.measureText(text[i]).width + spacing;
    }
    c.restore();
  }

  function downloadCard() {
    var canvas = state.card;
    if (!canvas) return;
    try {
      canvas.toBlob(function (blob) {
        if (!blob) return;
        var a = document.createElement('a');
        var url = URL.createObjectURL(blob);
        a.href = url;
        a.download = 'wish-before-it-flies.png';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1500);
      }, 'image/png');
    } catch (e) {}
  }

  /* ---------------------------------------------------------- events */
  $('#beginBtn').addEventListener('click', function () {
    audioCtx();
    startGame();
  });

  input.addEventListener('input', function () {
    charsEl.textContent = input.value.length;
    if (!state.playing || state.locked) return;
    if (!state.timer.on && input.value.trim()) startTimer();
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (state.playing && !state.locked) setMsg(t('msgEnter'), false);
    }
  });

  $('#skyBtn').addEventListener('click', function () {
    if (state.locked && state.round > TOTAL) { showResults(); return; }
    if (state.round === 0) return;
    stopTimer();
    state.locked = true;
    input.disabled = true;
    showResults();
  });

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  $('#soundBtn').addEventListener('click', function () {
    state.sound = !state.sound;
    try { localStorage.setItem('wbf.sound', state.sound ? 'on' : 'off'); } catch (e) {}
    this.setAttribute('aria-pressed', state.sound ? 'true' : 'false');
    this.setAttribute('aria-label', state.sound ? t('soundOn') : t('soundOff'));
    if (state.sound) { tone(880, 0, 0.5, 0.03, 'sine'); }
  });

  $('#downloadBtn').addEventListener('click', downloadCard);
  $('#againBtn').addEventListener('click', function () { overlay.hidden = true; startGame(); });
  $('#shareBtn').addEventListener('click', function () {
    var url = location.href;
    if (navigator.share) {
      navigator.share({ title: 'Wish Before It Flies', text: t('eyebrow'), url: url }).catch(function () {});
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { toast(t('copied')); }, function () { toast(url); });
    } else {
      toast(url);
    }
  });
  $('#closeResult').addEventListener('click', function () {
    overlay.hidden = true;
    resetToIntro();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) {
      overlay.hidden = true;
      resetToIntro();
    }
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) { overlay.hidden = true; resetToIntro(); }
  });

  window.addEventListener('resize', function () {
    resizeFx();
    if (reduceMotion) drawFx(performance.now(), true);
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) cancelAnimationFrame(fxRaf);
    else startFx();
  });

  /* ---------------------------------------------------------- init */
  applyLang(state.lang);
  $('#soundBtn').setAttribute('aria-pressed', state.sound ? 'true' : 'false');
  $('#soundBtn').setAttribute('aria-label', state.sound ? t('soundOn') : t('soundOff'));
  roundTotal.textContent = TOTAL;
  timeNum.textContent = PLAN[0].t;
  resizeFx();
  startFx();
  buildLanterns(6);
  overlay.hidden = true;
})();
