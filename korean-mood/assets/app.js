/* ============================================================
   Today's Korean Mood — DanbiLab
   Curated Korean lines, audio, and a 1080×1350 poster card.
   ============================================================ */
(function () {
  'use strict';

  var PAGE_URL = 'https://ymi9595-tech.github.io/ymi9595/korean-mood/';
  var CREDIT = 'DanbiLab · danbilab.substack.com';

  /* ---------------- content ---------------- */

  var MOODS = {
    midnight: {
      label: 'Midnight in Seoul',
      emoji: '🌙',
      accent: '#3c4a72',
      cards: [
        {
          hangul: '윤슬',
          roman: 'yunseul',
          meaning: 'moonlight scattered on moving water',
          note: 'Korean keeps a word for this one small thing: the way moonlight breaks into pieces on water. Seoul at night is full of it — the Han River, a puddle after rain, the glass of a bus window. Some beauty only appears because something is moving.'
        },
        {
          hangul: '고요',
          roman: 'goyo',
          meaning: 'stillness — the quiet after the noise',
          note: 'Not silence exactly. 고요 is the quiet that arrives when the city finally exhales: an empty street at two in the morning, a room after everyone has gone to bed. Koreans use it for the mind too, when it goes still on its own.'
        },
        {
          hangul: '밤이 깊었네',
          roman: 'bami gipeonne',
          meaning: 'the night has grown deep',
          note: 'A soft, slightly old-fashioned way to say it is late. It turns up in songs, and in messages between two people who should already be asleep. Saying it is a small kindness — we are both still awake.'
        },
        {
          hangul: '잠시 멈춤',
          roman: 'jamsi meomchum',
          meaning: 'a short pause',
          note: 'You will see it on a small sign where a road narrows. Koreans borrow the phrase for life: not a stop, not a detour, just a moment of 멈춤 before you carry on. The sign asks nothing more than that.'
        },
        {
          hangul: '별빛',
          roman: 'byeolbit',
          meaning: 'starlight',
          note: 'In Korean, light often arrives rather than exists — 별빛, 햇빛, 달빛. The city dims the stars, so on clear nights people drive to the edges of Seoul just to look up. It is worth the drive.'
        }
      ]
    },

    rain: {
      label: 'Rainy & Reflective',
      emoji: '🌧️',
      accent: '#42636b',
      cards: [
        {
          hangul: '빗소리',
          roman: 'bitsori',
          meaning: 'the sound of rain',
          note: 'Koreans do not only get wet in the rain; they listen to it. 빗소리 is what people put on when they cannot sleep — rain on a window, on a tin roof, on leaves. A whole shelf of Korean music is just this sound.'
        },
        {
          hangul: '그리움',
          roman: 'geurium',
          meaning: 'longing — missing someone or somewhere, warmly',
          note: 'Not the painful kind of missing. 그리움 is what stays after someone leaves: fond, a little sad, and strangely pleasant. It is one of the most Korean words there is, and one of the hardest to carry into English.'
        },
        {
          hangul: '추적추적',
          roman: 'chujeokchujeok',
          meaning: 'rain falling steadily, softly, without hurry',
          note: 'Korean has words for the manner of rain, not just the fact of it. 추적추적 is that fine, patient drizzle that does not quite need an umbrella but changes the mood of an entire afternoon.'
        },
        {
          hangul: '창밖',
          roman: 'changbak',
          meaning: 'outside the window',
          note: 'In Korean songs, 창밖 is where the story happens: someone leaving, the first snow, the city waking up. It is never really about the window. It is about watching a life go past from a warm room.'
        },
        {
          hangul: '비 오는 날엔',
          roman: 'bi oneun naren',
          meaning: 'on a rainy day',
          note: 'Koreans plan rain differently: fewer places to be, more soup, more staying in. There is rainy-day food made for it — 파전 with makgeolli, hand-cut noodle soup — comfort timed to the sound outside.'
        }
      ]
    },

    cozy: {
      label: 'Cozy & Slow',
      emoji: '🍵',
      accent: '#8a6a45',
      cards: [
        {
          hangul: '소확행',
          roman: 'sohwakhaeng',
          meaning: 'small but certain happiness',
          note: 'A made-up word — short for 소소하지만 확실한 행복 — that quietly took over Korean life. Not the big trip. The first sip of coffee, a good parking spot, socks still warm from the dryer. Small, but certain.'
        },
        {
          hangul: '천천히 가도 괜찮아',
          roman: 'cheoncheonhi gado gwaenchana',
          meaning: 'it is okay to go slowly',
          note: 'Korea moves fast, and Koreans know it. This is what a friend says when you feel behind everyone else. It does not mean stop. It means the pace is yours to choose.'
        },
        {
          hangul: '여유',
          roman: 'yeoyu',
          meaning: 'room to spare — in time, in the heart',
          note: 'Literally "room left over". A person with 여유 is not idle; they simply are not crowded. Koreans admire 여유 in someone about as much as anything else — it is the calm that has to be earned.'
        },
        {
          hangul: '온기',
          roman: 'ongi',
          meaning: 'the warmth left in a thing',
          note: 'Not heat. 온기 is the warmth still inside a cup, a seat, a hand. When Koreans say a room has 온기, they mean it feels lived in. It is warmth as memory, and it is why people linger.'
        },
        {
          hangul: '느긋',
          roman: 'neugeut',
          meaning: 'unhurried, easy, in no rush',
          note: 'The word for a Sunday with nothing on the list. A 느긋한 person is not lazy; they have decided that the clock can wait a little. Koreans use it with affection, even a little envy.'
        }
      ]
    },

    hopeful: {
      label: 'Hopeful & New',
      emoji: '🌸',
      accent: '#a8607a',
      cards: [
        {
          hangul: '새봄',
          roman: 'saebom',
          meaning: 'the new spring',
          note: 'Koreans say 새봄 like a promise rather than a season. After a long winter it means the first warm day, the cherry trees at the reservoir, the coat you finally leave at home. A whole year feels possible again.'
        },
        {
          hangul: '첫걸음',
          roman: 'cheotgeoreum',
          meaning: 'the first step',
          note: 'Koreans say the hardest step is the first one, and keep a word for it. A language, a business, a new city — 첫걸음 is enough for today. Nobody asks the first step to be a good one.'
        },
        {
          hangul: '하나씩',
          roman: 'hanassik',
          meaning: 'one at a time',
          note: 'What Koreans say when everything is too much: 하나씩. Not all of it today. One thing, then the next. It sounds like very little advice until you try to do anything the other way.'
        },
        {
          hangul: '잘될 거야',
          roman: 'jaldoel geoya',
          meaning: 'it is going to work out',
          note: 'Said plainly, often with a hand on your back. It is not a guarantee and no one pretends it is. It is what you say to someone you believe in, which is a different thing from a promise.'
        },
        {
          hangul: '싹',
          roman: 'ssak',
          meaning: 'a sprout — and the very beginning of things',
          note: 'One syllable for the green tip of a seed, and for the start of almost anything. Farmers watch for 싹 after planting; so do people starting over. It also means "thoroughly", as in fixing something 싹 고치다.'
        }
      ]
    },

    tired: {
      label: 'Tired, Need Comfort',
      emoji: '🔥',
      accent: '#a9553f',
      cards: [
        {
          hangul: '수고했어 오늘도',
          roman: 'sugohaesseo oneuldo',
          meaning: 'you worked hard today, too',
          note: '수고했어 is what Koreans say at the end of a shift, a semester, a hard day — to each other, and to themselves. The 오늘도, "today too", is where the whole weight of it sits.'
        },
        {
          hangul: '괜찮아',
          roman: 'gwaenchana',
          meaning: 'it is okay',
          note: 'The most used and most generous word in Korean. It can mean "I am fine", "don\'t worry about it", or "you are allowed to be a mess right now". Often all three at once.'
        },
        {
          hangul: '힘내',
          roman: 'himnae',
          meaning: 'take heart — gather your strength',
          note: 'Literally "put out strength". Short, a little blunt, deeply warm: the thing a Korean grandmother, coach and coworker all say. You do not have to feel strong to be told it.'
        },
        {
          hangul: '애썼어',
          roman: 'aesseosseo',
          meaning: 'you really tried',
          note: 'Softer and more personal than 수고했어. You say it when the result did not come but the effort did — and the effort is the part that deserves to be seen.'
        },
        {
          hangul: '내려놓아도 돼',
          roman: 'naeryeonoado dwae',
          meaning: 'you are allowed to put it down',
          note: 'Said of a heavy bag, an old grudge, or a plan that has grown too heavy to carry. Korean comfort rarely says "try harder". More often it says: you can set this down for a while.'
        }
      ]
    },

    jeong: {
      label: 'Warm Jeong',
      emoji: '💌',
      accent: '#96465a',
      cards: [
        {
          hangul: '정 (情)',
          say: '정',
          roman: 'jeong',
          meaning: 'the affection that settles between people who share time',
          note: 'There is no English word for 정. It is not love or friendship exactly — it is the stickiness that forms between people who have eaten together, waited together, been a little annoyed together. Koreans say 정이 들었다: affection has settled in.'
        },
        {
          hangul: '다정 (多情)',
          say: '다정',
          roman: 'dajeong',
          meaning: 'tender-hearted — full of warm feeling',
          note: 'Literally "much feeling". A 다정한 person notices you are cold before you do, remembers what you take in your coffee. Koreans use it for small gestures rather than grand ones.'
        },
        {
          hangul: '함께',
          roman: 'hamkke',
          meaning: 'together',
          note: 'Koreans say 함께 where English would say "together" in a toast or a letter; it carries a little more weight than the everyday 같이. 함께 가자 — let us go together. Five syllables that make a hard road easier.'
        },
        {
          hangul: '고마워',
          roman: 'gomawo',
          meaning: 'thank you — the warm, everyday kind',
          note: '감사합니다 is for the world; 고마워 is for people close to you. It is what you say when someone remembers something small about you. Say it a little softer than you think you should.'
        },
        {
          hangul: '보고 싶어',
          roman: 'bogo sipeo',
          meaning: 'I miss you',
          note: 'Literally "I want to see you". Koreans use it for people far away, for a place, even for a season. One of the few Korean lines that is exactly as warm as it sounds.'
        }
      ]
    }
  };

  var MOOD_ORDER = ['midnight', 'rain', 'cozy', 'hopeful', 'tired', 'jeong'];

  /* ---------------- state ---------------- */

  var currentMood = 'midnight';
  var currentCard = MOODS.midnight.cards[0];
  var queues = {};   // mood -> array of indices still unshown in this cycle
  var lastIndex = {}; // mood -> index currently shown

  MOOD_ORDER.forEach(function (m) {
    queues[m] = shuffle(MOODS[m].cards.map(function (_, i) { return i; }));
    lastIndex[m] = -1;
  });
  // start on the first card of Midnight in Seoul
  queues.midnight = [1, 2, 3, 4, 0];
  lastIndex.midnight = 0;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------------- dom ---------------- */

  var $ = function (id) { return document.getElementById(id); };

  var cardEl = $('card');
  var moodEl = $('cardMood');
  var counterEl = $('cardCounter');
  var hangulEl = $('cardHangul');
  var romanEl = $('cardRoman');
  var meaningEl = $('cardMeaning');
  var noteEl = $('cardNote');
  var drawBtn = $('drawBtn');
  var listenBtn = $('listenBtn');
  var saveBtn = $('saveBtn');
  var copyBtn = $('copyBtn');
  var toastEl = $('toast');
  var hintEl = $('hint');

  var moodButtons = Array.prototype.slice.call(document.querySelectorAll('.mood'));
  var DEFAULT_HINT = hintEl ? hintEl.innerHTML : '';

  /* ---------------- rendering ---------------- */

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function paint(moodKey, cardIndex, animate) {
    var mood = MOODS[moodKey];
    var card = mood.cards[cardIndex];

    currentMood = moodKey;
    currentCard = card;
    lastIndex[moodKey] = cardIndex;

    cardEl.style.setProperty('--accent', mood.accent);

    moodEl.textContent = mood.emoji + '  ' + mood.label;
    counterEl.textContent = pad(cardIndex + 1) + ' / ' + pad(mood.cards.length);
    hangulEl.textContent = card.hangul;
    romanEl.textContent = card.roman;
    meaningEl.textContent = card.meaning;
    noteEl.textContent = card.note;

    moodButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.mood === moodKey ? 'true' : 'false');
    });

    if (animate) {
      cardEl.classList.remove('is-swapping');
      // force reflow so the animation replays
      void cardEl.offsetWidth;
      cardEl.classList.add('is-swapping');
    }
  }

  function nextCard(moodKey) {
    var q = queues[moodKey];
    if (!q || q.length === 0) {
      // new cycle: every card once, never starting with the one on screen
      q = shuffle(MOODS[moodKey].cards.map(function (_, i) { return i; }));
      if (MOODS[moodKey].cards.length > 1 && q[0] === lastIndex[moodKey]) {
        q.push(q.shift());
      }
      queues[moodKey] = q;
    }
    var idx = q.shift();
    paint(moodKey, idx, true);
  }

  /* ---------------- toast ---------------- */

  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 3200);
  }

  /* ---------------- speech ---------------- */

  var speechOk = typeof window.speechSynthesis !== 'undefined' &&
                 typeof window.SpeechSynthesisUtterance !== 'undefined';
  var koVoice = null;

  function pickVoice() {
    if (!speechOk) return;
    var voices = window.speechSynthesis.getVoices() || [];
    var ko = voices.filter(function (v) {
      return (v.lang || '').toLowerCase().indexOf('ko') === 0;
    });
    if (!ko.length) { koVoice = null; return; }
    // prefer a named Korean voice, then any ko-KR one
    koVoice = ko.filter(function (v) {
      return /korean|한국|yuna|sora|hyunsu|injoon|google/i.test(v.name);
    })[0] || ko[0];
  }

  if (speechOk) {
    pickVoice();
    if (typeof window.speechSynthesis.addEventListener === 'function') {
      window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    } else {
      window.speechSynthesis.onvoiceschanged = pickVoice;
    }
  }

  function speak() {
    if (!speechOk) {
      toast('This browser cannot play audio — but the romanisation above will get you close.');
      return;
    }
    var text = currentCard.say || currentCard.hangul.replace(/\s*\(.*?\)\s*/g, '');

    try {
      window.speechSynthesis.cancel();
      var u = new window.SpeechSynthesisUtterance(text);
      u.lang = 'ko-KR';
      if (koVoice) u.voice = koVoice;
      u.rate = 0.86;
      u.pitch = 1;
      u.onstart = function () { listenBtn.classList.add('is-playing'); };
      u.onend = function () { listenBtn.classList.remove('is-playing'); };
      u.onerror = function () {
        listenBtn.classList.remove('is-playing');
        toast('Audio could not start here. On iPhone, check that Silent Mode is off.');
      };
      window.speechSynthesis.speak(u);

      if (!koVoice) {
        setTimeout(function () {
          if (!window.speechSynthesis.speaking) {
            toast('No Korean voice is installed on this device, so the pronunciation may be rough.');
          }
        }, 700);
      }
    } catch (e) {
      toast('Audio is not available in this browser.');
    }
  }

  /* ---------------- share text ---------------- */

  function shareText() {
    var c = currentCard;
    return c.hangul + ' · ' + c.roman + '\n' +
           c.meaning + '\n\n' +
           c.note.replace(/\s*\(.*?\)\s*/g, '') + '\n\n' +
           'Today\u2019s Korean Mood \u00b7 DanbiLab\n' + PAGE_URL;
  }

  function copyText(text, okMsg) {
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      toast(ok ? okMsg : 'Copying is blocked here — long-press the card text to copy it.');
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fallback);
    } else {
      fallback();
    }
  }

  /* ---------------- poster card (canvas) ---------------- */

  var W = 1080, H = 1350;

  function loadFonts() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var jobs = [
      document.fonts.load('400 96px "Gowun Batang"', '윤슬 정'),
      document.fonts.load('400 30px "Inter"', 'a'),
      document.fonts.load('500 30px "Inter"', 'a'),
      document.fonts.load('italic 500 34px "Cormorant Garamond"', 'yunseul')
    ].map(function (p) { return p.catch(function () {}); });
    return Promise.all(jobs).then(function () {
      return document.fonts.ready;
    }).catch(function () {});
  }

  function tracked(ctx, text, cx, y, spacing) {
    // letter-spacing for browsers without ctx.letterSpacing
    var chars = Array.from(text);
    var total = 0, i;
    for (i = 0; i < chars.length; i++) total += ctx.measureText(chars[i]).width + spacing;
    total -= spacing;
    var x = cx - total / 2;
    var prevAlign = ctx.textAlign;
    ctx.textAlign = 'left';
    for (i = 0; i < chars.length; i++) {
      ctx.fillText(chars[i], x, y);
      x += ctx.measureText(chars[i]).width + spacing;
    }
    ctx.textAlign = prevAlign;
    return total;
  }

  function wrap(ctx, text, maxWidth) {
    var words = text.split(/\s+/);
    var lines = [], line = '';
    for (var i = 0; i < words.length; i++) {
      var test = line ? line + ' ' + words[i] : words[i];
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = words[i];
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function layoutHangul(ctx, text, maxWidth, maxLines, startSize, minSize) {
    var size = startSize;
    while (size >= minSize) {
      ctx.font = '400 ' + size + 'px "Gowun Batang", "Noto Serif KR", "Nanum Myeongjo", serif';
      var lines = wrap(ctx, text, maxWidth);
      var fits = lines.length <= maxLines;
      for (var i = 0; fits && i < lines.length; i++) {
        if (ctx.measureText(lines[i]).width > maxWidth) fits = false;
      }
      if (fits) return { size: size, lines: lines };
      size -= 4;
    }
    ctx.font = '400 ' + minSize + 'px "Gowun Batang", "Noto Serif KR", "Nanum Myeongjo", serif';
    return { size: minSize, lines: wrap(ctx, text, maxWidth) };
  }

  function drawPoster(canvas) {
    var ctx = canvas.getContext('2d');
    var mood = MOODS[currentMood];
    var card = currentCard;
    var accent = mood.accent;

    ctx.clearRect(0, 0, W, H);

    // --- paper
    ctx.fillStyle = '#fbf6e8';
    ctx.fillRect(0, 0, W, H);
    var g1 = ctx.createRadialGradient(W * 0.2, H * 0.05, 40, W * 0.2, H * 0.05, H * 0.9);
    g1.addColorStop(0, 'rgba(255,255,250,0.95)');
    g1.addColorStop(1, 'rgba(255,255,250,0)');
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, W, H);
    var g2 = ctx.createRadialGradient(W * 0.9, H, 60, W * 0.9, H, H * 0.85);
    g2.addColorStop(0, 'rgba(226,206,168,0.55)');
    g2.addColorStop(1, 'rgba(226,206,168,0)');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);

    // --- grain
    var seed = 1;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (var i = 0; i < 2600; i++) {
      var x = rnd() * W, y = rnd() * H;
      ctx.fillStyle = 'rgba(120,96,52,' + (0.015 + rnd() * 0.03).toFixed(3) + ')';
      ctx.fillRect(x, y, 1.4, 1.4);
    }

    // --- frames
    ctx.strokeStyle = 'rgba(176,141,63,0.55)';
    ctx.lineWidth = 2;
    ctx.strokeRect(48, 48, W - 96, H - 96);
    ctx.strokeStyle = 'rgba(176,141,63,0.32)';
    ctx.lineWidth = 1;
    ctx.strokeRect(64, 64, W - 128, H - 128);

    // corner brackets
    function corner(cx, cy, sx, sy) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(176,141,63,0.85)';
      ctx.lineWidth = 2;
      ctx.moveTo(cx + 34 * sx, cy);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx, cy + 34 * sy);
      ctx.stroke();
    }
    corner(84, 84, 1, 1);
    corner(W - 84, 84, -1, 1);
    corner(84, H - 84, 1, -1);
    corner(W - 84, H - 84, -1, -1);

    // --- seal
    ctx.fillStyle = 'rgba(168,67,58,0.92)';
    ctx.fillRect(W - 148, 96, 52, 52);
    ctx.fillStyle = '#fdf6e9';
    ctx.font = '400 30px "Noto Serif KR", "Nanum Myeongjo", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('丹', W - 122, 123);

    // --- header
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    ctx.fillStyle = 'rgba(124,114,99,0.95)';
    ctx.font = '500 20px "Inter", sans-serif';
    tracked(ctx, 'TODAY\u2019S KOREAN MOOD', W / 2, 176, 7);

    ctx.fillStyle = accent;
    ctx.font = '500 26px "Inter", sans-serif';
    tracked(ctx, mood.label.toUpperCase(), W / 2, 216, 4);

    // short hairline under header
    ctx.strokeStyle = 'rgba(176,141,63,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 46, 240);
    ctx.lineTo(W / 2 + 46, 240);
    ctx.stroke();

    // --- measure the content block so it sits balanced between header and footer
    var hg = layoutHangul(ctx, card.hangul, 820, 2, 150, 76);
    var lineH = hg.size * 1.2;

    ctx.font = '500 38px "Inter", sans-serif';
    var mLines = wrap(ctx, card.meaning, 760);
    ctx.font = '400 28px "Inter", sans-serif';
    var nLines = wrap(ctx, card.note, 740);
    var maxNoteLines = 6;
    var shownNote = Math.min(nLines.length, maxNoteLines);

    var gapAfterHangul = 54, romanH = 42, gapBeforeRule = 46, gapAfterRule = 62,
        meaningLineH = 50, gapAfterMeaning = 50, noteLineH = 46;

    var totalH = hg.lines.length * lineH + gapAfterHangul + romanH + gapBeforeRule +
                 gapAfterRule + mLines.length * meaningLineH + gapAfterMeaning +
                 shownNote * noteLineH;

    var zoneTop = 276, zoneBottom = H - 244;
    var y = zoneTop + Math.max(0, (zoneBottom - zoneTop - totalH) / 2);

    // --- hangul
    ctx.font = '400 ' + hg.size + 'px "Gowun Batang", "Noto Serif KR", "Nanum Myeongjo", serif';
    ctx.fillStyle = '#221d18';
    for (var l = 0; l < hg.lines.length; l++) {
      ctx.fillText(hg.lines[l], W / 2, y + hg.size * 0.86 + l * lineH);
    }
    y += hg.lines.length * lineH + gapAfterHangul;

    // --- romanisation
    ctx.font = 'italic 500 34px "Cormorant Garamond", "Times New Roman", serif';
    ctx.fillStyle = accent;
    tracked(ctx, card.roman, W / 2, y + 26, 2);
    y += romanH + gapBeforeRule;

    // --- rule with diamond
    var grad = ctx.createLinearGradient(W / 2 - 170, 0, W / 2 + 170, 0);
    grad.addColorStop(0, 'rgba(176,141,63,0)');
    grad.addColorStop(0.5, 'rgba(176,141,63,0.85)');
    grad.addColorStop(1, 'rgba(176,141,63,0)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 170, y);
    ctx.lineTo(W / 2 - 16, y);
    ctx.moveTo(W / 2 + 16, y);
    ctx.lineTo(W / 2 + 170, y);
    ctx.stroke();
    ctx.save();
    ctx.translate(W / 2, y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.8;
    ctx.fillRect(-5, -5, 10, 10);
    ctx.restore();
    y += gapAfterRule;

    // --- English meaning
    ctx.font = '500 38px "Inter", sans-serif';
    ctx.fillStyle = '#221d18';
    for (var mi = 0; mi < mLines.length; mi++) {
      ctx.fillText(mLines[mi], W / 2, y + 30 + mi * meaningLineH);
    }
    y += mLines.length * meaningLineH + gapAfterMeaning;

    // --- note (left-aligned column, easier to read than centred prose)
    ctx.font = '400 28px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(78,70,60,0.95)';
    ctx.textAlign = 'left';
    var noteX = W / 2 - 370;
    for (var ni = 0; ni < shownNote; ni++) {
      var lineText = nLines[ni];
      if (ni === maxNoteLines - 1 && nLines.length > maxNoteLines) {
        lineText = lineText.replace(/[,.;:]?\s*$/, '') + '…';
      }
      ctx.fillText(lineText, noteX, y + 28 + ni * noteLineH);
    }
    ctx.textAlign = 'center';

    // --- footer
    ctx.strokeStyle = 'rgba(34,29,24,0.10)';
    ctx.beginPath();
    ctx.moveTo(150, H - 196);
    ctx.lineTo(W - 150, H - 196);
    ctx.stroke();

    ctx.font = '500 24px "Inter", sans-serif';
    ctx.fillStyle = accent;
    tracked(ctx, 'DanbiLab', W / 2, H - 152, 3);

    ctx.font = '400 21px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(124,114,99,0.95)';
    tracked(ctx, 'danbilab.substack.com', W / 2, H - 118, 1.5);

    ctx.font = '400 16px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(124,114,99,0.72)';
    tracked(ctx, 'TODAY\u2019S KOREAN MOOD \u00b7 FREE TO SHARE', W / 2, H - 84, 3);
  }

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }

  function saveCard() {
    var old = saveBtn.innerHTML;
    saveBtn.disabled = true;
    saveBtn.textContent = 'Drawing your card…';

    loadFonts().then(function () {
      var canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      drawPoster(canvas);

      var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      var name = 'korean-mood-' + slugify(currentCard.roman || 'card') + '.png';

      function finish() {
        saveBtn.disabled = false;
        saveBtn.innerHTML = old;
      }

      if (canvas.toBlob) {
        canvas.toBlob(function (blob) {
          if (!blob) { finish(); toast('Could not create the image here.'); return; }
          var url = URL.createObjectURL(blob);
          if (isIOS) {
            // iOS Safari ignores download on blob links; open the image to save it
            window.open(url, '_blank');
            toast('Tap and hold the image to save it to Photos.');
            setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
          } else {
            var a = document.createElement('a');
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(function () { URL.revokeObjectURL(url); }, 20000);
            toast('Saved — check your downloads.');
          }
          finish();
        }, 'image/png');
      } else {
        try {
          var a2 = document.createElement('a');
          a2.href = canvas.toDataURL('image/png');
          a2.download = name;
          document.body.appendChild(a2);
          a2.click();
          document.body.removeChild(a2);
          toast('Saved — check your downloads.');
        } catch (e) {
          toast('This browser could not export the image.');
        }
        finish();
      }
    });
  }

  /* ---------------- events ---------------- */

  moodButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var m = btn.dataset.mood;
      if (!MOODS[m]) return;
      if (m === currentMood) {
        nextCard(m);
        return;
      }
      // step into the mood with a card not currently on screen
      nextCard(m);
    });
  });

  drawBtn.addEventListener('click', function () { nextCard(currentMood); });
  listenBtn.addEventListener('click', speak);
  saveBtn.addEventListener('click', saveCard);
  copyBtn.addEventListener('click', function () {
    copyText(shareText(), 'Card text copied — paste it anywhere.');
  });

  document.addEventListener('keydown', function (e) {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') { nextCard(currentMood); }
  });

  // stop speech when leaving the page
  window.addEventListener('pagehide', function () {
    if (speechOk) { try { window.speechSynthesis.cancel(); } catch (e) {} }
  });

  /* ---------------- start ---------------- */

  paint('midnight', 0, false);

  // warm the font cache so the first "Save card" is instant
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (hintEl) hintEl.innerHTML = DEFAULT_HINT;
    });
  }

  // expose a tiny hook for verification
  window.__koreanMood = {
    moods: MOODS,
    current: function () { return { mood: currentMood, card: currentCard }; },
    draw: function () { nextCard(currentMood); },
    poster: function () {
      var c = document.createElement('canvas');
      c.width = W; c.height = H;
      return loadFonts().then(function () { drawPoster(c); return c.toDataURL('image/png'); });
    }
  };
})();
