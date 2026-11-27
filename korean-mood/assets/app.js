/* ============================================================
   Today's Korean Mood — DanbiLab
   Eight moods · eighty curated Korean words and lines.
   A daily seed picks today's mood and card; each mood carries
   its own palette into the page and into the saved poster.
   ============================================================ */
(function () {
  'use strict';

  var PAGE_URL = 'https://ymi9595-tech.github.io/ymi9595/korean-mood/';
  var CREDIT = 'DanbiLab · danbilab.substack.com';

  /* ---------------- content ---------------- */

  var MOODS = {
    midnight: {
      label: 'Midnight in Seoul',
      desc: 'night · quiet thought',
      emoji: '🌙',
      accent: '#36436a',
      seal: '#564a7d',
      paper: '#edf0f7',
      paperDeep: '#e2e7f2',
      glowA: '#fbfcff',
      glowB: '#e7ecf9',
      cardTop: '#fdfdff',
      cardBottom: '#f2f5fc',
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
        },
        {
          hangul: '야경',
          roman: 'yagyeong',
          meaning: 'a city lit up at night',
          note: 'Literally "night scene". Koreans climb a hill to see it — Namsan, or any ridge over the Han — because Seoul looks gentler from above: bridges drawn in light, cars moving like water. Nobody talks much at a 야경.'
        },
        {
          hangul: '새벽',
          roman: 'saebyeok',
          meaning: 'the hours between night and morning',
          note: 'Not quite dawn, not quite night: the blue hour when the streetlights are still on and the first bus is out. Koreans use 새벽 for the hours kept alone — 새벽 세 시, three in the morning. It sounds lonely in English and almost peaceful in Korean.'
        },
        {
          hangul: '불면',
          roman: 'bulmyeon',
          meaning: 'sleeplessness',
          note: 'The plain word for lying awake. Koreans also say 잠이 오지 않는다 — sleep does not come — as if sleep were a visitor running late. On those nights people put on rain sounds and wait for it.'
        },
        {
          hangul: '골목',
          roman: 'golmok',
          meaning: 'a narrow alley between buildings',
          note: 'Seoul is a city of 골목: lanes too narrow for two cars, kimchi pots against a wall, one light over a doorway. People say the best restaurants hide in them. You learn a neighbourhood by walking its alleys slowly.'
        },
        {
          hangul: '밤바람',
          roman: 'bambaram',
          meaning: 'the night wind',
          note: 'The breeze after a hot day, when the pavement finally cools. Koreans open the window for it. It carries the smell of rain or someone’s dinner, and it is why the walk home can take twice as long as it should.'
        }
      ]
    },

    rain: {
      label: 'Rainy & Reflective',
      desc: 'rain · missing someone',
      emoji: '🌧️',
      accent: '#3a5b63',
      seal: '#3f6469',
      paper: '#edf3f3',
      paperDeep: '#e2ebeb',
      glowA: '#fbfefe',
      glowB: '#e6f0ef',
      cardTop: '#fdfffe',
      cardBottom: '#f3f8f7',
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
        },
        {
          hangul: '우산',
          roman: 'usan',
          meaning: 'umbrella',
          note: 'Koreans judge an umbrella by its size: too small and you arrive with a wet shoulder, too fine and you worry about losing it. On a rainy day the subway is a forest of them, and one is always left behind, folded neatly.'
        },
        {
          hangul: '장맛비',
          roman: 'jangmatbi',
          meaning: 'the long summer rains',
          note: 'The rainy season, 장마, arrives in late June and stays for weeks. Not dramatic — steady, warm, everywhere. Koreans plan laundry and moving day around it. Then one morning it is gone and the air is clean.'
        },
        {
          hangul: '빗방울',
          roman: 'bitbangul',
          meaning: 'a raindrop',
          note: 'One drop on a window, running down and taking others with it. Korean children race them with a finger. Grown-ups do it too, on a bus, when the conversation has run out and the rain has not.'
        },
        {
          hangul: '흙내음',
          roman: 'heungnaeeum',
          meaning: 'the smell of rain on dry ground',
          note: 'Koreans know the smell before the rain lands: hot dust, then earth. In the countryside it means the garden is fed; in the city it means the rain will be short, and everyone walks a little slower to keep it.'
        },
        {
          hangul: '차분',
          roman: 'chabun',
          meaning: 'calm — settled and level again',
          note: '차분하다 is the mood after crying, or after a long rain: the noise is over and something in you has gone quiet and even. Koreans say it of a person, a voice, even a colour. Not happiness. Steadiness, which is often better.'
        }
      ]
    },

    cozy: {
      label: 'Cozy & Slow',
      desc: 'unhurried · rest',
      emoji: '🍵',
      accent: '#5f6740',
      seal: '#8f6134',
      paper: '#f4f2e3',
      paperDeep: '#ebe8d2',
      glowA: '#fdfcf3',
      glowB: '#eff0dd',
      cardTop: '#fffef7',
      cardBottom: '#f8f6ea',
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
        },
        {
          hangul: '포근',
          roman: 'pogeun',
          meaning: 'soft, snug, wrapped warm',
          note: '포근하다 is a jumper out of the drawer, a blanket over your knees, a voice on the phone. Koreans use it for weather too — 포근한 겨울, a mild winter — but mostly for being looked after without anyone saying so.'
        },
        {
          hangul: '노곤',
          roman: 'nogon',
          meaning: 'pleasantly drowsy, limbs heavy',
          note: '노곤하다 is what a full stomach and a warm room do at three in the afternoon. Not tired enough to sleep, just heavy enough to sit still. In Korea that is a perfectly respectable way to spend a Sunday.'
        },
        {
          hangul: '담소',
          roman: 'damso',
          meaning: 'easy talk over tea',
          note: 'The word for talk with no purpose: a neighbour at the gate, two friends over 식혜, an aunt asking after your mother. 담소 is not gossip and, mercifully, not a meeting. It is the sound a good afternoon makes.'
        },
        {
          hangul: '온돌',
          roman: 'ondol',
          meaning: 'the heated floor of a Korean house',
          note: 'Korean houses are warmed from under the floor, so heat comes up through your feet. Children sleep on it; grandmothers swear by it for a bad back. 온돌 is why shoes come off at the door — you are meant to feel the house.'
        },
        {
          hangul: '군밤',
          roman: 'gunbam',
          meaning: 'roasted chestnuts',
          note: 'The smell finds you first on a cold street in November: a drum roaster, a paper cone, chestnuts too hot to hold. Koreans buy them on the way home and burn their fingers anyway. Winter is not official until the first 군밤.'
        }
      ]
    },

    hopeful: {
      label: 'Hopeful & New',
      desc: 'a fresh start · courage',
      emoji: '🌸',
      accent: '#98506b',
      seal: '#b45c73',
      paper: '#fbf1f2',
      paperDeep: '#f6e7ea',
      glowA: '#fffbfc',
      glowB: '#fcebef',
      cardTop: '#fffdfd',
      cardBottom: '#fdf5f6',
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
        },
        {
          hangul: '설렘',
          roman: 'seollem',
          meaning: 'the flutter before something good',
          note: 'The feeling in the chest before a trip, a first date, a letter you have been waiting for. Korean keeps it apart from plain excitement: 설레다 is that small restless lift, half joy and half nerves. Worth noticing when it happens.'
        },
        {
          hangul: '두근두근',
          roman: 'dugeundugeun',
          meaning: 'thump-thump — the heart going',
          note: 'Say it aloud and you hear it. Koreans use 두근두근 for nerves and for joy and refuse to separate the two: a first day at work, a call from someone you like. The heart does not know the difference either.'
        },
        {
          hangul: '해돋이',
          roman: 'haedochi',
          meaning: 'sunrise',
          note: 'On New Year’s Day Koreans drive to the east coast before dawn to watch the sun come up, and make a wish as it does. The word is plain — the sun rising — and that plainness is the point. Nothing to add.'
        },
        {
          hangul: '꽃길',
          roman: 'kkotgil',
          meaning: 'a path of flowers — a road ahead that goes well',
          note: 'Koreans say 꽃길만 걸어라 — may you walk only flower paths from here. It is what you tell someone graduating, recovering, starting again. Not a promise that nothing goes wrong, just a wish that the road is kind.'
        },
        {
          hangul: '용기',
          roman: 'yonggi',
          meaning: 'courage',
          note: 'Not the loud kind. Koreans talk about courage in small sizes: 용기 내서 말을 걸었다, I worked up the nerve to say hello. The word is used for asking, applying, apologising — the everyday bravery nobody claps for.'
        }
      ]
    },

    tired: {
      label: 'Tired, Need Comfort',
      desc: 'you did enough today',
      emoji: '🔥',
      accent: '#9c4a35',
      seal: '#a34b34',
      paper: '#fbf1e5',
      paperDeep: '#f6e6d5',
      glowA: '#fffbf4',
      glowB: '#fbeadb',
      cardTop: '#fffdf9',
      cardBottom: '#fdf6ec',
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
          note: 'The most used and most generous word in Korean. It can mean "I am fine", "don’t worry about it", or "you are allowed to be a mess right now". Often all three at once.'
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
        },
        {
          hangul: '위로',
          roman: 'wiro',
          meaning: 'comfort — the kind you offer, not fix',
          note: '위로 is what you give, not what you solve. Koreans bring it in small forms: a warm drink, a hand on the arm, a message at midnight. 위로가 된다 — it comforts me — is said quietly, and it means the comfort landed.'
        },
        {
          hangul: '토닥토닥',
          roman: 'todaktodak',
          meaning: 'pat, pat — the sound of a hand patting gently',
          note: 'What a Korean mother does to a child’s back at bedtime, and what adults still want on a bad day. Say 토닥토닥 aloud and the rhythm is the gesture. English has no word for it, which is a shame — everyone needs it.'
        },
        {
          hangul: '쉼',
          roman: 'swim',
          meaning: 'rest — the pause that is part of the work',
          note: 'Not quitting, not a holiday: the breath between two things. Highway rest stops here are 휴게소, but the idea is 쉽니다 — to rest — something you do on purpose, then get up from and carry on.'
        },
        {
          hangul: '한숨',
          roman: 'hansum',
          meaning: 'a sigh — and a breath let go',
          note: 'Koreans say 한숨을 돌리다 — to catch your breath — once something hard is over. The same word means the tired sigh. Both are air leaving you. One is relief, one is weight, and sometimes they are one breath.'
        },
        {
          hangul: '꿀잠',
          roman: 'kkuljam',
          meaning: 'honey-sweet sleep',
          note: 'A made-up word that stuck: sleep so deep it feels like a gift. 꿀잠 자다 — to sleep the honey sleep, the kind you wake from surprised. Koreans prescribe it for everything, and they are usually right.'
        }
      ]
    },

    jeong: {
      label: 'Warm Jeong',
      desc: '정 · love & thankfulness',
      emoji: '💌',
      accent: '#8d3f52',
      seal: '#a8433a',
      paper: '#fbf1ec',
      paperDeep: '#f5e5de',
      glowA: '#fffbf8',
      glowB: '#f9e9e2',
      cardTop: '#fffdfb',
      cardBottom: '#fdf6f2',
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
        },
        {
          hangul: '인연',
          roman: 'inyeon',
          meaning: 'a tie that was meant to happen',
          note: 'Koreans call a meeting 인연 when it feels arranged by something larger: a stranger who becomes a friend, a teacher who arrives at the right time. Not fate exactly — the sense that this person was not an accident.'
        },
        {
          hangul: '마음',
          roman: 'maeum',
          meaning: 'the heart-mind — where feeling and intention sit',
          note: 'Korean does not split heart and mind the way English does. 마음 holds both: 마음이 아프다, my heart hurts; 마음먹다, to make up your mind. 마음이 편하다 means the whole self has stopped arguing.'
        },
        {
          hangul: '안부',
          roman: 'anbu',
          meaning: 'a check-in — asking after someone',
          note: 'Koreans ask after someone’s 안부: how is your mother, how is the shop, did the knee get better. It is not small talk — it is a way of saying you have been held in mind. A short message with no purpose is often the warmest.'
        },
        {
          hangul: '살갑다',
          roman: 'salgapda',
          meaning: 'warm in manner, affectionate in small ways',
          note: 'A word for the person who remembers your coffee, asks if you ate, walks you to the corner. 살갑다 is warmth you can see in behaviour rather than hear in words. Koreans notice it at once, and miss it when it goes.'
        },
        {
          hangul: '곁',
          roman: 'gyeot',
          meaning: 'the space right beside someone',
          note: '곁에 있다 — to be at someone’s side — sounds simple and is not. It means staying without needing to talk, being there through the boring hours as well as the crisis. 곁을 지키다, to keep watch at someone’s side: that is the promise.'
        }
      ]
    },

    kitchen: {
      label: 'Kitchen & Nostalgia',
      desc: '집밥 · care on a table',
      emoji: '🍜',
      accent: '#94541f',
      seal: '#9c4f28',
      paper: '#fbf2e3',
      paperDeep: '#f4e4cf',
      glowA: '#fffcf5',
      glowB: '#f9ead4',
      cardTop: '#fffdf8',
      cardBottom: '#fdf6ea',
      cards: [
        {
          hangul: '식구',
          roman: 'sikgu',
          meaning: 'family — literally the mouths that eat together',
          note: 'Written 食口, food and mouth: a household counted by the people it feeds. Koreans extend the word freely — a neighbour, a colleague, a student far from home becomes 식구. Sharing a table is how you are let in.'
        },
        {
          hangul: '손맛',
          roman: 'sonmat',
          meaning: 'the taste that comes from a particular pair of hands',
          note: 'Two people follow the same recipe and the food is not the same. Koreans call that difference 손맛, hand taste, and treat it as real. It cannot be written down, which is why grandmothers get asked to cook one more time.'
        },
        {
          hangul: '정성',
          roman: 'jeongseong',
          meaning: 'care put into a thing — sincerity of effort',
          note: '정성 is the extra ten minutes: the soup skimmed, the fruit cut and arranged, the note slipped into the bag. Koreans taste it and say so — 정성이 들어 있네. The highest compliment you can pay a home cook.'
        },
        {
          hangul: '집밥',
          roman: 'jipbap',
          meaning: 'food from home, cooked at home',
          note: 'Not restaurant food, not delivery: the rice and side dishes of your own kitchen. Koreans living alone talk about 집밥 the way other people talk about holidays. It means someone cooked thinking of you, even if that someone is you.'
        },
        {
          hangul: '든든하다',
          roman: 'deundeunhada',
          meaning: 'hearty — full in the stomach and steady in the heart',
          note: 'One word for two feelings: a meal that sits well, and the confidence it gives you. Koreans say 배가 든든하다 after a good bowl of rice, and 사람이 든든하다 about someone reliable. Same word, because it is the same feeling.'
        },
        {
          hangul: '따끈한 국물',
          roman: 'ttakkeunhan gukmul',
          meaning: 'a steaming bowl of broth',
          note: 'The first thing Koreans want after a long day, a cold, a late night out. 따끈하다 is warmer than warm — the heat that fogs your glasses. Soup is not a side dish here; it is how a meal becomes a comfort.'
        },
        {
          hangul: '잘 먹었습니다',
          roman: 'jal meogeosseumnida',
          meaning: 'I ate well — thank you for the meal',
          note: 'Said at the end of every meal, to the cook or to the table. A thank-you with the body in it: what you ate, how it was, that you are grateful. Children learn it before they can carry their bowl to the sink.'
        },
        {
          hangul: '어머니의 김치',
          roman: 'eomeoniui kimchi',
          meaning: 'mother’s kimchi',
          note: 'Every Korean family says theirs is the best, and every one of them is right. Kimchi is made in quantity in late autumn, 김장, with the whole household helping. The taste you grew up on is the one you spend years trying to find.'
        },
        {
          hangul: '한 끼',
          roman: 'han kki',
          meaning: 'one meal',
          note: 'Koreans offer it plainly: 한 끼 먹고 가, eat one meal before you go. The smallest unit of care, and the most common. Not a restaurant, not an occasion — rice, something to go with it, and a chair for you.'
        },
        {
          hangul: '밥상머리',
          roman: 'bapsangmeori',
          meaning: 'the edge of the family table — where things are taught',
          note: 'Koreans say 밥상머리 교육, lessons at the table, for the manners and values passed down over dinner rather than at school. Sit down, wait for the eldest, talk while you eat. Most of what a family believes is taught there.'
        }
      ]
    },

    seasons: {
      label: 'Seasons & Nature',
      desc: '계절 · 여백 · weather',
      emoji: '🍃',
      accent: '#456650',
      seal: '#3f6b5a',
      paper: '#eef4ea',
      paperDeep: '#e4eddd',
      glowA: '#fbfdf8',
      glowB: '#e9f1e3',
      cardTop: '#fdfffb',
      cardBottom: '#f4f9ef',
      cards: [
        {
          hangul: '꽃샘추위',
          roman: 'kkotsaemchuwi',
          meaning: 'the cold that comes back to spite the flowers',
          note: 'Just as the apricots bloom, winter returns for a week. Koreans name it 꽃샘추위, the cold jealous of the flowers, and pack a coat again. A reminder, and a slightly cruel joke, that spring here arrives in stages.'
        },
        {
          hangul: '여백',
          roman: 'yeobaek',
          meaning: 'empty space left on purpose',
          note: 'The blank part of a painting, the pause in a sentence, the unplanted edge of a field. Korean art is built on 여백: what is left out makes the rest visible. A day with room in it is a well-made day.'
        },
        {
          hangul: '초록빛',
          roman: 'chorokbit',
          meaning: 'the colour green, seen as light',
          note: 'Korean often says colour as light — 초록빛, not just green. After the July rains the hills above the city go a green that seems to hum. Koreans drive out to look at it, then complain about the traffic home.'
        },
        {
          hangul: '산들바람',
          roman: 'sandeulbaram',
          meaning: 'a light, cool breeze',
          note: 'Not wind, not stillness: air moving just enough to notice, the kind that arrives at the end of a hot day. Koreans use it for people too — 산들바람 같은 사람, someone who cools a room without making a sound.'
        },
        {
          hangul: '단풍',
          roman: 'danpung',
          meaning: 'autumn leaves — the turning of the trees',
          note: 'From late October the mountains turn and the whole country goes to look — 설악산, the palace walls, any hill. Koreans plan weekends around 단풍 and take the same photograph as everyone else. Still worth it.'
        },
        {
          hangul: '노을',
          roman: 'noeul',
          meaning: 'the red of sunset',
          note: 'The colour the sky goes at the end of the day, and the name of that hour. Koreans stop on a bridge over the Han to photograph it, then send it to someone with no message. You share a 노을 because it is leaving.'
        },
        {
          hangul: '첫눈',
          roman: 'cheonnun',
          meaning: 'the first snow',
          note: 'Koreans treat the first snow as an event: messages go round, couples make a wish, someone always repeats the old belief that a first snow seen together means the two of you will last. Nobody checks if it is true.'
        },
        {
          hangul: '물안개',
          roman: 'muran-gae',
          meaning: 'mist rising off water',
          note: 'Early morning on a river, the water still warm from yesterday, the air cold. Mist rises and the far bank disappears. Koreans say it looks like a painting of itself — 산수화 — which is exactly the effect.'
        },
        {
          hangul: '봄비',
          roman: 'bombi',
          meaning: 'spring rain',
          note: 'Quiet rain that comes with the thaw, feeding the barley and the gardens. Koreans say 봄비에 땅이 풀린다, the ground loosens with spring rain. Not the rain you shelter from — the one farmers wait for.'
        },
        {
          hangul: '사계절',
          roman: 'sagyejeol',
          meaning: 'the four seasons',
          note: 'Koreans say the country has 사계절이 뚜렷하다, four clear seasons, as a point of pride and a form of small talk. It is true: the same hill is four different places in a year. Living here teaches you what month it is.'
        }
      ]
    }
  };

  var MOOD_ORDER = ['midnight', 'rain', 'cozy', 'hopeful', 'tired', 'jeong', 'kitchen', 'seasons'];

  /* ---------------- state ---------------- */

  var currentMood = 'midnight';
  var currentCard = MOODS.midnight.cards[0];
  var queues = {};    // mood -> indices still unshown in this cycle
  var lastIndex = {}; // mood -> index currently shown

  MOOD_ORDER.forEach(function (m) { lastIndex[m] = -1; });

  /* ---------------- daily seed ---------------- */

  function pad2(n) { return n < 10 ? '0' + n : String(n); }

  function localDateISO(d) {
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }

  function hashSeed(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Same date in, same pick out — a different one tomorrow.
  function pickForDate(dateStr) {
    var rnd = mulberry32(hashSeed('korean-mood·v2·' + dateStr));
    var mood = MOOD_ORDER[Math.floor(rnd() * MOOD_ORDER.length) % MOOD_ORDER.length];
    var idx = Math.floor(rnd() * MOODS[mood].cards.length) % MOODS[mood].cards.length;
    return { date: dateStr, mood: mood, index: idx };
  }

  // A card for a mood that was chosen for another reason (weather): still
  // fixed for the day, still different from the card next to it.
  function pickForMood(moodKey, dateStr) {
    var rnd = mulberry32(hashSeed('korean-mood·mood·' + dateStr + '·' + moodKey));
    return {
      date: dateStr,
      mood: moodKey,
      index: Math.floor(rnd() * MOODS[moodKey].cards.length) % MOODS[moodKey].cards.length
    };
  }

  function dateFingerprint(dateStr) {
    var h = 0;
    for (var i = 0; i < dateStr.length; i++) h = (h * 31 + dateStr.charCodeAt(i)) >>> 0;
    return h;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------------- theme ---------------- */

  function applyTheme(moodKey) {
    var t = MOODS[moodKey];
    if (!t) return;
    var s = document.body.style;
    s.setProperty('--accent', t.accent);
    s.setProperty('--seal', t.seal);
    s.setProperty('--paper', t.paper);
    s.setProperty('--paper-deep', t.paperDeep);
    s.setProperty('--glow-a', t.glowA);
    s.setProperty('--glow-b', t.glowB);
    s.setProperty('--card-top', t.cardTop);
    s.setProperty('--card-bottom', t.cardBottom);
    document.body.setAttribute('data-mood', moodKey);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t.paper);
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
  var todayStripEl = $('todayStrip');

  var moodButtons = Array.prototype.slice.call(document.querySelectorAll('.mood'));
  var DEFAULT_HINT = hintEl ? hintEl.innerHTML : '';
  var userTouched = false;

  /* ---------------- rendering ---------------- */

  function paint(moodKey, cardIndex, animate) {
    var mood = MOODS[moodKey];
    var card = mood.cards[cardIndex];

    currentMood = moodKey;
    currentCard = card;
    lastIndex[moodKey] = cardIndex;

    applyTheme(moodKey);

    moodEl.textContent = mood.emoji + '  ' + mood.label;
    counterEl.textContent = pad2(cardIndex + 1) + ' / ' + pad2(mood.cards.length);
    hangulEl.textContent = card.hangul;
    romanEl.textContent = card.roman;
    meaningEl.textContent = card.meaning;
    noteEl.textContent = card.note;

    moodButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.mood === moodKey ? 'true' : 'false');
    });

    if (animate) {
      cardEl.classList.remove('is-swapping');
      void cardEl.offsetWidth; // force reflow so the animation replays
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
  var HANGUL_FONT = '"Gowun Dodum", "Noto Sans KR", sans-serif';

  function hexToRgba(hex, alpha) {
    var h = String(hex).replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + alpha + ')';
  }

  function loadFonts() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var jobs = [
      document.fonts.load('400 96px "Gowun Dodum"', '윤슬 정'),
      document.fonts.load('400 30px "Plus Jakarta Sans"', 'a'),
      document.fonts.load('500 30px "Plus Jakarta Sans"', 'a'),
      document.fonts.load('italic 400 34px "Instrument Serif"', 'yunseul')
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

  function balancedWrap(ctx, words, maxWidth) {
    var single = words.join(' ');
    if (ctx.measureText(single).width <= maxWidth) return [single];

    var best = null, bestScore = Infinity;
    for (var k = 1; k < words.length; k++) {
      var a = words.slice(0, k).join(' ');
      var b = words.slice(k).join(' ');
      var wa = ctx.measureText(a).width;
      var wb = ctx.measureText(b).width;
      if (wa <= maxWidth && wb <= maxWidth) {
        var score = Math.max(wa, wb);
        if (score < bestScore) { bestScore = score; best = [a, b]; }
      }
    }
    return best;
  }

  function layoutHangul(ctx, text, maxWidth, startSize, minSize) {
    var words = text.split(/\s+/);
    var size = startSize;
    var lines = null;
    while (size >= minSize) {
      ctx.font = '400 ' + size + 'px ' + HANGUL_FONT;
      lines = balancedWrap(ctx, words, maxWidth);
      if (lines) return { size: size, lines: lines };
      size -= 4;
    }
    ctx.font = '400 ' + minSize + 'px ' + HANGUL_FONT;
    return { size: minSize, lines: wrap(ctx, text, maxWidth) };
  }

  function drawPoster(canvas, moodKey, card) {
    var ctx = canvas.getContext('2d');
    var mood = MOODS[moodKey] || MOODS[currentMood];
    var c = card || currentCard;
    var accent = mood.accent;

    ctx.clearRect(0, 0, W, H);

    // --- paper, tinted by the mood
    ctx.fillStyle = mood.paper;
    ctx.fillRect(0, 0, W, H);

    var g1 = ctx.createRadialGradient(W * 0.2, H * 0.05, 40, W * 0.2, H * 0.05, H * 0.9);
    g1.addColorStop(0, hexToRgba(mood.glowA, 0.95));
    g1.addColorStop(1, hexToRgba(mood.glowA, 0));
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, W, H);

    var g2 = ctx.createRadialGradient(W * 0.9, H, 60, W * 0.9, H, H * 0.85);
    g2.addColorStop(0, hexToRgba(mood.glowB, 0.75));
    g2.addColorStop(1, hexToRgba(mood.glowB, 0));
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);

    // --- grain, faintly in the mood's ink
    var seed = 1;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (var i = 0; i < 2600; i++) {
      var x = rnd() * W, y = rnd() * H;
      ctx.fillStyle = hexToRgba(accent, (0.012 + rnd() * 0.028).toFixed(3));
      ctx.fillRect(x, y, 1.4, 1.4);
    }

    // --- frames
    ctx.strokeStyle = hexToRgba(accent, 0.5);
    ctx.lineWidth = 2;
    ctx.strokeRect(48, 48, W - 96, H - 96);
    ctx.strokeStyle = hexToRgba(accent, 0.28);
    ctx.lineWidth = 1;
    ctx.strokeRect(64, 64, W - 128, H - 128);

    // corner brackets
    function corner(cx, cy, sx, sy) {
      ctx.beginPath();
      ctx.strokeStyle = hexToRgba(accent, 0.85);
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

    // --- seal, in the mood's own ink
    ctx.fillStyle = hexToRgba(mood.seal, 0.95);
    ctx.fillRect(W - 148, 96, 52, 52);
    ctx.fillStyle = '#fdf6e9';
    ctx.font = '400 30px "Noto Serif KR", "Nanum Myeongjo", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('丹', W - 122, 123);

    // --- header
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    ctx.fillStyle = 'rgba(110,101,87,0.95)';
    ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
    tracked(ctx, 'TODAY\u2019S KOREAN MOOD', W / 2, 176, 7);

    ctx.fillStyle = accent;
    ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
    tracked(ctx, mood.label.toUpperCase(), W / 2, 216, 4);

    // short hairline under header
    ctx.strokeStyle = hexToRgba(accent, 0.3);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 46, 240);
    ctx.lineTo(W / 2 + 46, 240);
    ctx.stroke();

    // --- measure the content block so it sits balanced between header and footer
    var isPhrase = /\s/.test(c.hangul);
    var hg = layoutHangul(ctx, c.hangul, 830, isPhrase ? 108 : 164, 72);
    var lineH = hg.size * 1.2;

    ctx.font = '500 38px "Plus Jakarta Sans", sans-serif';
    var mLines = wrap(ctx, c.meaning, 760);
    ctx.font = '400 28px "Plus Jakarta Sans", sans-serif';
    var nLines = wrap(ctx, c.note, 740);
    var maxNoteLines = 6;
    var shownNote = Math.min(nLines.length, maxNoteLines);

    var gapAfterHangul = 54, romanH = 42, gapBeforeRule = 46, gapAfterRule = 62,
        meaningLineH = 50, gapAfterMeaning = 50, noteLineH = 46;

    var totalH = hg.lines.length * lineH + gapAfterHangul + romanH + gapBeforeRule +
                 gapAfterRule + mLines.length * meaningLineH + gapAfterMeaning +
                 shownNote * noteLineH;

    var zoneTop = 300, zoneBottom = H - 224;
    var y = zoneTop + Math.max(0, (zoneBottom - zoneTop - totalH) / 2);

    // --- hangul
    ctx.font = '400 ' + hg.size + 'px ' + HANGUL_FONT;
    ctx.fillStyle = '#221d18';
    for (var l = 0; l < hg.lines.length; l++) {
      ctx.fillText(hg.lines[l], W / 2, y + hg.size * 0.86 + l * lineH);
    }
    y += hg.lines.length * lineH + gapAfterHangul;

    // --- romanisation
    ctx.font = 'italic 400 34px "Instrument Serif", "Times New Roman", serif';
    ctx.fillStyle = accent;
    tracked(ctx, c.roman, W / 2, y + 26, 2);
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
    ctx.font = '500 38px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#221d18';
    for (var mi = 0; mi < mLines.length; mi++) {
      ctx.fillText(mLines[mi], W / 2, y + 30 + mi * meaningLineH);
    }
    y += mLines.length * meaningLineH + gapAfterMeaning;

    // --- note (left-aligned column, easier to read than centred prose)
    ctx.font = '400 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(74,67,58,0.96)';
    ctx.textAlign = 'left';
    var noteX = W / 2 - 370;
    for (var ni = 0; ni < shownNote; ni++) {
      var lineText = nLines[ni];
      if (ni === maxNoteLines - 1 && nLines.length > maxNoteLines) {
        lineText = lineText.replace(/[,.;:]?\s*$/, '') + '\u2026';
      }
      ctx.fillText(lineText, noteX, y + 28 + ni * noteLineH);
    }
    ctx.textAlign = 'center';

    var contentBottom = y + (shownNote - 1) * noteLineH + 40;

    // --- footer
    ctx.strokeStyle = 'rgba(34,29,24,0.10)';
    ctx.beginPath();
    ctx.moveTo(150, H - 196);
    ctx.lineTo(W - 150, H - 196);
    ctx.stroke();

    ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = accent;
    tracked(ctx, 'DanbiLab', W / 2, H - 152, 3);

    ctx.font = '400 21px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(110,101,87,0.95)';
    tracked(ctx, 'danbilab.substack.com', W / 2, H - 118, 1.5);

    ctx.font = '400 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(110,101,87,0.72)';
    tracked(ctx, 'TODAY\u2019S KOREAN MOOD \u00b7 FREE TO SHARE', W / 2, H - 84, 3);

    return {
      mood: moodKey,
      roman: c.roman,
      hangul: c.hangul,
      hangulSize: hg.size,
      hangulLines: hg.lines.length,
      meaningLines: mLines.length,
      noteLines: nLines.length,
      noteLinesShown: shownNote,
      truncated: nLines.length > maxNoteLines,
      totalH: Math.round(totalH),
      contentBottom: Math.round(contentBottom),
      limit: H - 196 - 12,
      fits: nLines.length <= maxNoteLines && contentBottom <= H - 196 - 12
    };
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
      drawPoster(canvas, currentMood, currentCard);

      var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      var name = 'korean-mood-' + slugify(currentMood) + '-' + slugify(currentCard.roman || 'card') + '.png';

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
      userTouched = true;
      nextCard(m);
      renderBadge();
    });
  });

  drawBtn.addEventListener('click', function () {
    userTouched = true;
    nextCard(currentMood);
    renderBadge();
  });
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

  /* ---------------- badge ---------------- */

  var today = pickForDate(localDateISO(new Date()));
  var weather = null;

  function renderBadge() {
    if (!todayStripEl) return;
    while (todayStripEl.firstChild) todayStripEl.removeChild(todayStripEl.firstChild);

    var pickSeg = document.createElement('span');
    pickSeg.className = 'today-strip__seg';
    pickSeg.appendChild(document.createTextNode('Today’s pick · '));
    var t = document.createElement('time');
    t.id = 'todayDate';
    t.dateTime = today.date;
    t.textContent = today.date;
    pickSeg.appendChild(t);
    todayStripEl.appendChild(pickSeg);

    if (weather) {
      var sep = document.createElement('span');
      sep.className = 'today-strip__sep';
      sep.setAttribute('aria-hidden', 'true');
      sep.textContent = '·';
      todayStripEl.appendChild(sep);

      var wSeg = document.createElement('span');
      wSeg.className = 'today-strip__seg today-strip__seg--weather';
      var txt = 'Seoul now · ' + weather.emoji + ' ' + weather.temp + '°C';
      if (weather.mood === currentMood) txt += ' · ' + MOODS[weather.mood].label.toUpperCase();
      wSeg.textContent = txt;
      wSeg.title = weather.summary;
      todayStripEl.appendChild(wSeg);
    }
  }

  /* ---------------- Seoul weather (Open-Meteo, no key, no prompt) ---------------- */

  var WEATHER_URL = 'https://api.open-meteo.com/v1/forecast' +
    '?latitude=37.5665&longitude=126.9780' +
    '&current=weather_code,is_day,temperature_2m&timezone=Asia%2FSeoul';
  var WEATHER_TIMEOUT = 2500;

  function weatherLook(code, isDay, dateStr) {
    var fp = dateFingerprint(dateStr);
    // rain, showers, thunder
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99)) {
      return { mood: 'rain', emoji: '🌧️', summary: 'rain over Seoul' };
    }
    // snow
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) {
      return { mood: 'seasons', emoji: '❄️', summary: 'snow over Seoul' };
    }
    // night
    if (isDay === 0) {
      return { mood: 'midnight', emoji: '🌙', summary: 'night in Seoul' };
    }
    // clear
    if (code === 0 || code === 1) {
      return {
        mood: fp % 2 === 0 ? 'hopeful' : 'cozy',
        emoji: code === 0 ? '☀️' : '🌤️',
        summary: 'clear over Seoul'
      };
    }
    // cloudy, fog
    if (code === 2 || code === 3 || code === 45 || code === 48) {
      return {
        mood: fp % 2 === 0 ? 'cozy' : 'kitchen',
        emoji: code === 45 || code === 48 ? '🌫️' : '☁️',
        summary: 'cloud over Seoul'
      };
    }
    return null;
  }

  function fetchSeoulWeather() {
    return new Promise(function (resolve) {
      if (typeof window.fetch !== 'function') { resolve(null); return; }

      var done = false;
      var ctrl = (typeof window.AbortController === 'function') ? new window.AbortController() : null;
      var timer = setTimeout(function () {
        if (done) return;
        done = true;
        if (ctrl) { try { ctrl.abort(); } catch (e) {} }
        resolve(null);
      }, WEATHER_TIMEOUT);

      function settle(value) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(value);
      }

      var opts = ctrl ? { signal: ctrl.signal, cache: 'no-store' } : { cache: 'no-store' };
      window.fetch(WEATHER_URL, opts).then(function (res) {
        if (!res || !res.ok) throw new Error('weather ' + (res && res.status));
        return res.json();
      }).then(function (json) {
        var cur = json && json.current;
        if (!cur || typeof cur.weather_code !== 'number') { settle(null); return; }
        var look = weatherLook(cur.weather_code, cur.is_day, today.date);
        if (!look) { settle(null); return; }
        var temp = Math.round(Number(cur.temperature_2m));
        settle({
          code: cur.weather_code,
          isDay: cur.is_day,
          temp: isFinite(temp) ? temp : '–',
          emoji: look.emoji,
          summary: look.summary,
          mood: look.mood
        });
      }).catch(function () { settle(null); });
    });
  }

  function showPick(pick, animate) {
    queues[pick.mood] = (queues[pick.mood] || []).filter(function (i) { return i !== pick.index; });
    paint(pick.mood, pick.index, animate);
  }

  /* ---------------- start ---------------- */

  MOOD_ORDER.forEach(function (m) {
    queues[m] = shuffle(MOODS[m].cards.map(function (_, i) { return i; }))
      .filter(function (i) { return !(m === today.mood && i === today.index); });
  });

  if (todayStripEl) {
    todayStripEl.setAttribute('title', 'A new pick at midnight, every day');
  }

  // First paint is instant and works offline: the date seed.
  paint(today.mood, today.index, false);
  renderBadge();

  // Then, if Seoul answers within 2.5s and the visitor has not chosen yet,
  // the weather takes over the first screen.
  fetchSeoulWeather().then(function (w) {
    if (!w) return;
    weather = w;
    if (!userTouched) {
      var pick = pickForMood(w.mood, today.date);
      showPick(pick, true);
    }
    renderBadge();
  });

  // warm the font cache so the first "Save card" is instant
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (hintEl) hintEl.innerHTML = DEFAULT_HINT;
    });
  }

  /* ---------------- verification hooks ---------------- */

  window.__koreanMood = {
    moods: MOODS,
    order: MOOD_ORDER,
    today: today,
    current: function () { return { mood: currentMood, card: currentCard }; },
    draw: function () { nextCard(currentMood); },
    theme: function () {
      var cs = getComputedStyle(document.body);
      return {
        mood: document.body.getAttribute('data-mood'),
        accent: cs.getPropertyValue('--accent').trim(),
        paper: cs.getPropertyValue('--paper').trim(),
        seal: cs.getPropertyValue('--seal').trim()
      };
    },
    poster: function (moodKey, index) {
      var k = moodKey || currentMood;
      var c = (typeof index === 'number') ? MOODS[k].cards[index] : currentCard;
      var canvas = document.createElement('canvas');
      canvas.width = W; canvas.height = H;
      return loadFonts().then(function () {
        var m = drawPoster(canvas, k, c);
        return { dataURL: canvas.toDataURL('image/png'), metrics: m };
      });
    },
    audit: function () {
      var canvas = document.createElement('canvas');
      canvas.width = W; canvas.height = H;
      var out = [];
      MOOD_ORDER.forEach(function (m) {
        MOODS[m].cards.forEach(function (c, i) {
          var r = drawPoster(canvas, m, c);
          r.index = i;
          out.push(r);
        });
      });
      return out;
    }
  };
})();
