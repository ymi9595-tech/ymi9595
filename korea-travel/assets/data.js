/* ==========================================================================
   당장 가볼까? · Go Now? Korea Day-Trip Courses
   data.js — 10 cities, one 1-day course each, bilingual (ko / en)
   --------------------------------------------------------------------------
   Adding a new city: copy one block into CITIES.
   Adding another course to a city: make `courses` an array and push a block
   shaped like { id, title:{ko,en}, meta:{ko,en}, steps:[…] }.
   Course steps use phase: start | morning | lunch | afternoon | evening | return
   Every place needs a `q` — the words typed into Google / Naver Maps.
   Food entries are dishes only (no shop names), as the user asked.
   ========================================================================== */

const REGIONS = [
  { id: 'all',       ko: '전체',      en: 'All' },
  { id: 'capital',   ko: '수도권',    en: 'Capital' },
  { id: 'gangwon',   ko: '강원',      en: 'Gangwon' },
  { id: 'jeolla',    ko: '충청·전라', en: 'Jeolla' },
  { id: 'gyeongsang',ko: '경상',      en: 'Gyeongsang' },
  { id: 'jeju',      ko: '제주',      en: 'Jeju' }
];

const UI = {
  ko: {
    brand: '당장 가볼까?',
    brandSub: '바로 출발, 한국 하루 코스',
    kicker: '우리나라 한 바퀴',
    heroSub: '바로 출발, 한국 하루 코스',
    h1a: '당장',
    h1b: '가볼까?',
    lede: '터미널에 내려서부터 하루. 도착역에서 시작해 저녁 야경까지 이어지는 당일치기 코스로 우리나라 열 곳을, 그리고 산·바다·시장·축제·동물농장·반려견·일출·사계절까지 스물두 가지 테마로 소개합니다. 사진은 모두 실제 촬영한 풍경이고, 안쪽은 그 동네에서 먹는 음식까지 담았어요.',
    dice: '오늘 어디 갈까?',
    share: '공유',
    shareDone: '링크를 복사했어요',
    shareFail: '공유할 수 없어요',
    trust1: '10개 도시',
    trust2: '도착 터미널에서 시작',
    trust3: '실제 촬영 사진',
    pickTitle: '어디로 갈까요?',
    pickSub: '지역으로 골라도 되고, 카드를 눌러 하루 코스를 봐도 좋아요.',
    count: (n) => `도시 ${n}곳`,
    viewCourse: '하루 코스 보기',
    start: '출발',
    course: '1일 코스',
    courseOne: '당일치기',
    courseMeta: (n, t) => `${n}곳 · ${t}`,
    hubLabel: '여기서 시작',
    hubNoteDefault: '도착하면 여기서부터 코스가 시작됩니다.',
    google: '구글 지도',
    naver: '네이버 지도',
    foodTitle: '이 동네에서 먹는 것',
    foodSub: '식당 이름 대신, 그 동네 사람들이 먹는 음식만 골랐어요.',
    photosTitle: '실제 풍경',
    photosSub: '모두 위키미디어 공용의 실제 촬영 사진입니다.',
    alsoTitle: '시간이 남으면',
    tipTitle: '한 줄 팁',
    credits: '사진 출처',
    creditsTitle: '사진 출처와 라이선스',
    creditsNote: '아래 사진은 위키미디어 공용에서 가져왔습니다. 각 사진의 촬영자와 라이선스를 적어 두었어요.',
    close: '닫기',
    back: '목록으로',
    next: '다른 도시',
    home: '처음으로',
    notFound: '없는 도시예요',
    moved: '이동',
    phase: { start: '출발', morning: '오전', lunch: '점심', afternoon: '오후', evening: '저녁', return: '귀환' },
    dayOne: '당일치기 하루 코스',
    langName: '한국어',
    by: '단비랩',
    footer: '단비랩이 만든 무료 여행 노트 · 광고 없음 · 개인정보 수집 없음',
    stripB: '도착하는 곳에서 시작합니다.',
    strip: '서울역, 부산역, 제주공항, 경주고속버스터미널처럼 내리는 자리에서 코스가 열리고, 저녁에는 다시 그 터미널로 돌아옵니다.',
    booksTitle: '📚 단비랩 여행 · 한국 책',
    booksSub: '이 사이트에 담은 길과 동네를 더 깊이 다룬 단비랩 전자책입니다. 맛보기를 먼저 읽고, 필요하면 서점으로 이어집니다.',
    booksShelf: '전체 서가 보기',
    booksSideHint: '여행·한국 체험 전자책',
    booksCount: (n) => `${n}권`,
    bookBuy: '스마트스토어에서 보기',
    bookPages: (p) => `${p}쪽`,
    bookWas: (p) => `정가 ${p}`,
    bookInDetail: '이 코스와 함께 보면 좋은 책',
    bookExcerpt: '맛보기',
    bookAlso: '책 더 보기'
  },
  en: {
    brand: 'Go Now?',
    brandSub: 'Ready-to-Go Korea Day Trips',
    kicker: 'One country, ten corners',
    heroSub: 'Ready-to-Go Korea Day Trips',
    h1a: 'Go',
    h1b: 'now?',
    lede: 'Step off the bus and the day starts right there. Ten one-day routes from the station you arrive at to the evening lights, plus twenty-two themes from mountains and markets to animal farms, dogs, sunrise and all four seasons — with real photographs and the food each town is known for.',
    dice: 'Surprise me',
    share: 'Share',
    shareDone: 'Link copied',
    shareFail: 'Could not share',
    trust1: '10 cities',
    trust2: 'Start at the terminal',
    trust3: 'Real photographs',
    pickTitle: 'Where to?',
    pickSub: 'Filter by region, or open a card to see the whole day.',
    count: (n) => `${n} cities`,
    viewCourse: 'See the day',
    start: 'Start',
    course: '1-day course',
    courseOne: 'One day',
    courseMeta: (n, t) => `${n} stops · ${t}`,
    hubLabel: 'Start here',
    hubNoteDefault: 'This is where your day begins.',
    google: 'Google Maps',
    naver: 'Naver Map',
    foodTitle: 'What this town eats',
    foodSub: 'No restaurant names — just the dishes locals are known for.',
    photosTitle: 'Real views',
    photosSub: 'Every photograph here was really taken. Sources are Wikimedia Commons.',
    alsoTitle: 'If you have more time',
    tipTitle: 'One tip',
    credits: 'Photo credits',
    creditsTitle: 'Photo credits and licences',
    creditsNote: 'These photographs come from Wikimedia Commons. Photographer and licence are listed for each.',
    close: 'Close',
    back: 'All cities',
    next: 'Another city',
    home: 'Home',
    notFound: 'No such city',
    moved: 'Getting there',
    phase: { start: 'Start', morning: 'Morning', lunch: 'Lunch', afternoon: 'Afternoon', evening: 'Evening', return: 'Return' },
    dayOne: 'One-day course',
    langName: 'English',
    by: 'Danbi Lab',
    footer: 'A free travel notebook by Danbi Lab · no ads · no data collected',
    stripB: 'Every route starts where you arrive.',
    strip: 'At Seoul Station, Busan Station, Jeju Airport or the Gyeongju express terminal — the course opens at the door you walk out of, and comes back there in the evening.',
    booksTitle: '📚 DanbiLab Books',
    booksSub: 'DanbiLab e-books that go deeper into the routes and towns on this site — read a short excerpt first, then the shop.',
    booksShelf: 'See all books',
    booksSideHint: 'Travel & Korea experience e-books',
    booksCount: (n) => `${n} books`,
    bookBuy: 'Open on Payhip',
    bookPages: (p) => `${p} pp.`,
    bookWas: (p) => `list ${p}`,
    bookInDetail: 'A DanbiLab book for this course',
    bookExcerpt: 'Excerpt',
    bookAlso: 'More books'
  }
};

const CITIES = [
  /* ---------------------------------------------------------------- SEOUL */
  {
    id: 'seoul', region: 'capital', emoji: '🏯', tint: '#FF9E7D',
    name: { ko: '서울', en: 'Seoul' },
    sub: { ko: '서울특별시', en: 'Seoul, the capital' },
    tag: { ko: '고궁과 골목, 밤의 스카이라인', en: 'Palaces, small alleys, a skyline at night' },
    intro: {
      ko: '하루에 조선의 궁궐과 600년 골목, 그리고 남산의 야경까지 다 볼 수 있는 도시는 서울뿐입니다. 지하철만 타면 동선이 저절로 이어져서, 처음 온 사람도 하루 코스를 놓치지 않고 돌 수 있어요.',
      en: 'Seoul is the rare capital where a palace, six-hundred-year-old alleys and a mountain-top night view all fit into one day — and the subway lines stitch them together for you.'
    },
    seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }, { ko: '사계절', en: 'All year' }],
    transport: { ko: '도보 + 지하철', en: 'Walk + subway' },
    duration: { ko: '약 12시간', en: 'About 12 hours' },
    hub: {
      ko: '서울역', en: 'Seoul Station', q: '서울역',
      note: { ko: 'KTX·공항철도·지하철 1·4호선이 한자리에서 만나는 서울의 관문입니다. 짐은 역 안 물품보관함에 맡기고 가볍게 출발하세요.', en: 'KTX, the airport railroad and subway lines 1 and 4 meet here. Drop your bag in a station locker and travel light.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '경복궁에서 남산 야경까지', en: 'From Gyeongbokgung to Namsan after dark' },
      meta: { ko: '9곳 · 약 12시간 · 도보 6km', en: '9 stops · about 12 hours · 6 km on foot' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', en: 'Start' },
          desc: { ko: '1호선으로 종로3가에서 3호선으로 갈아타면 경복궁까지 20분이면 닿습니다.', en: 'Line 1 to Jongno 3-ga, change to Line 3 — Gyeongbokgung is 20 minutes away.' } },
        { phase: 'morning', time: '09:30', name: { ko: '경복궁', en: 'Gyeongbokgung Palace' }, q: '경복궁', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
          desc: { ko: '근정전 마당을 지나 경회루 연못까지 천천히. 10시 수문장 교대식을 보려면 조금 서둘러 들어가세요. 화요일은 휴무입니다.', en: 'Walk the Geunjeongjeon courtyard through to the Gyeonghoeru pond. Aim to be inside for the 10 a.m. guard-changing ceremony — the palace is closed on Tuesdays.' },
          photo: 'seoul-cover' },
        { phase: 'morning', time: '11:45', name: { ko: '북촌한옥마을', en: 'Bukchon Hanok Village' }, q: '북촌한옥마을', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '기와지붕이 겹겹이 이어지는 골목. 사람이 사는 동네라 문 앞에서 조용히, 사진은 길에서만 찍는 게 예의입니다.', en: 'Layers of tiled roofs on a hillside. People live here — keep your voice down by the gates and take pictures from the street.' },
          photo: 'seoul-p2' },
        { phase: 'lunch', time: '12:40', name: { ko: '광장시장', en: 'Gwangjang Market' }, q: '광장시장', move: { ko: '택시 약 10분 · 버스 15분', en: 'Taxi 10 min · bus 15 min' },
          desc: { ko: '백 년 된 시장의 좁은 통로에서 점심. 자리 잡기 어려우면 조금 돌아 앉아도 금방 자리가 납니다.', en: 'Lunch in the narrow aisles of a hundred-year-old market. If the stools are full, walk a loop and something opens up.' },
          photo: 'seoul-p1' },
        { phase: 'afternoon', time: '14:20', name: { ko: '청계천', en: 'Cheonggyecheon Stream' }, q: '청계천', move: { ko: '도보 약 5분', en: 'Walk, about 5 min' },
          desc: { ko: '시장에서 나와 물길을 따라 동쪽으로. 도심 한가운데인데도 발소리가 달라지는 곳입니다.', en: 'Leave the market and follow the water east. It is the middle of downtown, yet your footsteps change.' },
          photo: 'seoul-p4' },
        { phase: 'afternoon', time: '15:30', name: { ko: '익선동 한옥골목', en: 'Ikseon-dong Hanok Alleys' }, q: '익선동', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '백 년 된 한옥 사이로 골목이 미로처럼 이어집니다. 커피 한 잔 들고 천천히 헤매기 좋은 동네.', en: 'A maze of alleys between century-old hanok houses — a good place to wander slowly with a coffee.' } },
        { phase: 'evening', time: '17:00', name: { ko: 'N서울타워 · 남산', en: 'N Seoul Tower & Namsan' }, q: 'N서울타워', move: { ko: '지하철 + 케이블카 약 30분', en: 'Subway + cable car, about 30 min' },
          desc: { ko: '명동역에서 케이블카를 타고 올라가면 해 질 무렵의 서울이 한눈에 들어옵니다. 해가 지고 30분이 가장 예쁩니다.', en: 'Take the cable car from Myeongdong and the whole city opens below you. The half hour after sunset is the best light.' },
          photo: 'seoul-p3' },
        { phase: 'evening', time: '19:30', name: { ko: '명동', en: 'Myeongdong' }, q: '명동', move: { ko: '케이블카 + 도보 약 20분', en: 'Cable car + walk, about 20 min' },
          desc: { ko: '내려와서 저녁. 골목이 촘촘해서 어디로 들어가도 한 끼는 나옵니다.', en: 'Come down for dinner. The alleys are dense — any turn ends in a meal.' } },
        { phase: 'return', time: '21:00', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 4호선 약 5분', en: 'Line 4, about 5 min' },
          desc: { ko: '명동역에서 4호선으로 두 정거장. 막차 전에 여유 있게 돌아옵니다.', en: 'Two stops on Line 4 from Myeongdong — back well before the last train.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '설렁탕 · 북엇국', en: 'Seolleongtang · dried pollack soup' }, note: { ko: '진한 국물로 하루를 여는 서울식 아침.', en: 'Seoul opens its day with a deep, milky beef broth.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥘', dish: { ko: '빈대떡 · 육회 · 잔치국수', en: 'Bindaetteok · yukhoe · janchi-guksu' }, note: { ko: '시장 안에서 막걸리 한 사발과 함께.', en: 'In the market, with a bowl of makgeolli.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🥟', dish: { ko: '호떡 · 붕어빵 · 약과', en: 'Hotteok · bungeoppang · yakgwa' }, note: { ko: '겨울 골목에서는 붕어빵 냄새를 따라가세요.', en: 'In winter, follow the smell of bungeoppang.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍖', dish: { ko: '삼겹살 · 김치찌개 · 평양냉면', en: 'Samgyeopsal · kimchi jjigae · Pyongyang naengmyeon' }, note: { ko: '명동 골목에서 고기 한 점, 또는 차가운 냉면 한 그릇.', en: 'A slice of pork in a Myeongdong alley, or a cold bowl of naengmyeon.' } }
    ],
    photos: [
      { file: 'seoul-p1', cap: { ko: '광장시장의 빈대떡과 전', en: 'Bindaetteok and jeon at Gwangjang Market' } },
      { file: 'seoul-p2', cap: { ko: '북촌의 한옥 골목', en: 'A hanok alley in Bukchon' } },
      { file: 'seoul-p3', cap: { ko: 'N서울타워에서 본 서울 야경', en: 'Seoul at night, seen from N Seoul Tower' } },
      { file: 'seoul-p4', cap: { ko: '청계천 물길', en: 'Along the Cheonggyecheon stream' } }
    ],
    also: [
      { name: { ko: '창덕궁 후원', en: 'Changdeokgung Secret Garden' }, q: '창덕궁 후원', desc: { ko: '예약제로 돌아보는 조선의 정원. 시간이 남으면 여기로.', en: 'A timed-entry royal garden — the best use of a spare hour.' } },
      { name: { ko: '서촌', en: 'Seochon' }, q: '서촌', desc: { ko: '경복궁 서쪽, 관광객이 덜 붐비는 골목과 작은 책방.', en: 'West of the palace: quiet alleys and tiny bookshops.' } },
      { name: { ko: '한강 · 반포', en: 'Hangang at Banpo' }, q: '반포한강공원', desc: { ko: '저녁에 강바람과 함께 달빛무지개분수(계절 운영).', en: 'Evening river breeze and the seasonal rainbow fountain.' } }
    ],
    tip: { ko: '경복궁은 화요일에 문을 닫습니다. 한복을 입으면 입장료가 무료예요.', en: 'Gyeongbokgung closes on Tuesdays, and entry is free in hanbok.' }
  },

  /* ---------------------------------------------------------------- BUSAN */
  {
    id: 'busan', region: 'gyeongsang', emoji: '🌊', tint: '#7EC8E3',
    name: { ko: '부산', en: 'Busan' },
    sub: { ko: '부산광역시', en: 'Busan, the port city' },
    tag: { ko: '언덕 마을과 시장, 밤바다', en: 'Hill villages, fish markets, a night sea' },
    intro: {
      ko: '부산은 걸어서 볼 수 없는 도시처럼 보이지만, 감천에서 영도로, 다시 자갈치로 이어지는 버스 몇 번이면 하루가 꽉 찹니다. 바다를 끼고 도는 동선이라 어디서든 시야가 탁 트여요.',
      en: 'Busan looks too spread out for one day, but a handful of buses links Gamcheon to Yeongdo and down to Jagalchi. The route hugs the sea, so the view keeps opening.'
    },
    seasons: [{ ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }, { ko: '사계절', en: 'All year' }],
    transport: { ko: '버스 + 도시철도', en: 'Bus + metro' },
    duration: { ko: '약 12시간', en: 'About 12 hours' },
    hub: {
      ko: '부산역', en: 'Busan Station', q: '부산역',
      note: { ko: 'KTX 서울에서 2시간 40분. 역 앞에서 감천행 버스가 바로 서고, 짐 보관함도 넉넉합니다.', en: 'Two hours forty from Seoul on KTX. Buses to Gamcheon stop outside, and the lockers are roomy.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '감천에서 광안리 밤바다까지', en: 'Gamcheon to the Gwangalli night sea' },
      meta: { ko: '8곳 · 약 12시간 · 버스 5회', en: '8 stops · about 12 hours · 5 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '부산역', en: 'Busan Station' }, q: '부산역', move: { ko: '출발', en: 'Start' },
          desc: { ko: '역 앞 정류장에서 감천문화마을행 버스로. 택시로 가면 20분, 요금도 얼마 안 됩니다.', en: 'Catch a Gamcheon bus outside the station, or take a short taxi — about 20 minutes.' } },
        { phase: 'morning', time: '09:20', name: { ko: '감천문화마을', en: 'Gamcheon Culture Village' }, q: '감천문화마을', move: { ko: '버스·택시 약 20분', en: 'Bus or taxi, about 20 min' },
          desc: { ko: '산비탈에 색색의 집이 층층이 쌓인 마을. 골목이 좁고 계단이 많으니 가벼운 신발로 오세요.', en: 'Colourful houses stacked up a hillside. Narrow lanes and many stairs — wear light shoes.' },
          photo: 'busan-p1' },
        { phase: 'morning', time: '11:10', name: { ko: '흰여울문화마을', en: 'Huinnyeoul Culture Village' }, q: '흰여울문화마을', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '영도 절벽 아래 바다를 따라 이어지는 길. 파도 소리가 계속 따라옵니다.', en: 'A path under the Yeongdo cliffs, with the sea running alongside the whole way.' },
          photo: 'busan-p4' },
        { phase: 'lunch', time: '12:30', name: { ko: '자갈치시장', en: 'Jagalchi Market' }, q: '자갈치시장', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
          desc: { ko: '전국에서 올라온 생선이 좌판에 깔리는 곳. 위층 식당가에서 바로 회를 떠 먹을 수 있습니다.', en: 'Fish from every coast laid out on the stalls. Upstairs they slice it for you on the spot.' },
          photo: 'busan-p2' },
        { phase: 'afternoon', time: '14:00', name: { ko: '국제시장 · 부평깡통시장', en: 'Gukje & Bupyeong Kkangtong Market' }, q: '국제시장', move: { ko: '도보 약 8분', en: 'Walk, about 8 min' },
          desc: { ko: '전쟁 뒤 장사꾼들이 모여 만든 시장. 골목마다 다른 냄새가 나서 걷는 재미가 있습니다.', en: 'A market that grew out of the years after the war — every alley smells different.' } },
        { phase: 'afternoon', time: '15:20', name: { ko: '용두산공원 · 부산타워', en: 'Yongdusan Park & Busan Tower' }, q: '용두산공원', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '에스컬레이터로 올라가면 항구가 한눈에. 잠깐 앉아 쉬기 좋은 언덕입니다.', en: 'An escalator up, and the whole harbour opens. A good hill to sit down on for a while.' } },
        { phase: 'evening', time: '16:30', name: { ko: '광안리 해변', en: 'Gwangalli Beach' }, q: '광안리해수욕장', move: { ko: '도시철도 + 버스 약 35분', en: 'Metro + bus, about 35 min' },
          desc: { ko: '모래사장 너머로 광안대교가 통째로 보입니다. 해 질 때 도착하면 낮과 밤을 한 번에.', en: 'The whole Gwangandaegyo bridge sits beyond the sand. Arrive at sunset and you get both versions.' },
          photo: 'busan-p3' },
        { phase: 'evening', time: '18:30', name: { ko: '광안리 저녁', en: 'Dinner at Gwangalli' }, q: '광안리해수욕장', move: { ko: '도보', en: 'On foot' },
          desc: { ko: '바다를 보며 회 한 접시, 조개구이 한 상. 20시에는 다리 불빛이 다 들어옵니다.', en: 'Sashimi or grilled shellfish with the sea in front of you. By 8 p.m. the bridge is fully lit.' } },
        { phase: 'return', time: '21:00', name: { ko: '부산역', en: 'Busan Station' }, q: '부산역', move: { ko: '도시철도 약 40분', en: 'Metro, about 40 min' },
          desc: { ko: '2호선에서 1호선으로 한 번 갈아타면 부산역. 막차 시간만 확인하세요.', en: 'Line 2 to Line 1, one change, and you are back. Just check the last train.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍚', dish: { ko: '돼지국밥', en: 'Dwaeji gukbap (pork rice soup)' }, note: { ko: '부산 사람은 아침부터 국밥입니다. 새벽부터 여는 집이 많아요.', en: 'Busan starts the day with pork soup — many places open before dawn.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '밀면 · 회', en: 'Milmyeon · raw fish' }, note: { ko: '차가운 밀면 한 그릇, 시장에서 회 한 접시.', en: 'A cold bowl of milmyeon, a plate of fish from the market.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🥐', dish: { ko: '씨앗호떡 · 어묵', en: 'Seed hotteok · fish cake' }, note: { ko: '시장 골목에서 갓 튀긴 것부터.', en: 'Straight from the fryer in the market alleys.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🦐', dish: { ko: '조개구이 · 회 · 물회', en: 'Grilled shellfish · sashimi · mulhoe' }, note: { ko: '광안리 바닷가에서, 다리 불빛과 함께.', en: 'On Gwangalli beach, with the bridge lit up.' } }
    ],
    photos: [
      { file: 'busan-p1', cap: { ko: '감천문화마을', en: 'Gamcheon Culture Village' } },
      { file: 'busan-p2', cap: { ko: '자갈치시장의 해산물', en: 'Seafood at Jagalchi Market' } },
      { file: 'busan-p3', cap: { ko: '광안대교 야경', en: 'Gwangandaegyo at night' } },
      { file: 'busan-p4', cap: { ko: '흰여울문화마을의 바다길', en: 'The sea path at Huinnyeoul' } }
    ],
    also: [
      { name: { ko: '태종대', en: 'Taejongdae' }, q: '태종대', desc: { ko: '절벽 위 산책로에서 남해가 탁 트입니다.', en: 'Cliff-top paths with the southern sea wide open.' } },
      { name: { ko: '해운대 · 동백섬', en: 'Haeundae & Dongbaekseom' }, q: '해운대해수욕장', desc: { ko: '모래사장과 마린시티 스카이라인.', en: 'Beach sand against the Marine City skyline.' } },
      { name: { ko: '송정해수욕장', en: 'Songjeong Beach' }, q: '송정해수욕장', desc: { ko: '서핑하는 사람들로 가득한 조용한 해변.', en: 'A quieter beach full of surfers.' } }
    ],
    tip: { ko: '감천문화마을은 주민이 사는 곳입니다. 문 앞에서는 조용히, 쓰레기는 가지고 나오세요.', en: 'People live in Gamcheon — keep quiet by the doors and carry your rubbish out.' }
  },

  /* ----------------------------------------------------------------- JEJU */
  {
    id: 'jeju', region: 'jeju', emoji: '🍊', tint: '#FFC46B',
    name: { ko: '제주', en: 'Jeju' },
    sub: { ko: '제주특별자치도', en: 'Jeju Island' },
    tag: { ko: '화산과 바다, 한라산', en: 'Volcano, sea and a mountain in the middle' },
    intro: {
      ko: '제주는 하루에 한 바퀴를 다 돌 수 없습니다. 그래서 동쪽만 골라 잡았어요. 공항에서 성산으로 달려가면 오름과 바다, 시장까지 하루에 담깁니다.',
      en: 'You cannot circle Jeju in a day, so this route takes the east. From the airport straight to Seongsan, you get a volcanic cone, the sea and a market before dark.'
    },
    seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울 감귤', en: 'Winter tangerines' }],
    transport: { ko: '렌터카 권장', en: 'Rental car recommended' },
    duration: { ko: '약 11시간', en: 'About 11 hours' },
    hub: {
      ko: '제주국제공항', en: 'Jeju International Airport', q: '제주국제공항',
      note: { ko: '공항 렌터카 하우스에서 차를 받고 바로 출발합니다. 인수에 30분은 잡아 두세요.', en: 'Pick up the car at the airport rental house and go. Allow half an hour for the paperwork.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '동쪽 한 바퀴 — 성산에서 동문시장까지', en: 'The east loop — Seongsan to Dongmun Market' },
      meta: { ko: '7곳 · 약 11시간 · 운전 3시간', en: '7 stops · about 11 hours · 3 hours driving' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '제주국제공항', en: 'Jeju International Airport' }, q: '제주국제공항', move: { ko: '출발', en: 'Start' },
          desc: { ko: '렌터카를 받고 번영로를 타고 동쪽으로. 성산까지 신호등이 거의 없습니다.', en: 'Pick up the car and take the coast road east — almost no traffic lights to Seongsan.' } },
        { phase: 'morning', time: '10:10', name: { ko: '성산일출봉', en: 'Seongsan Ilchulbong' }, q: '성산일출봉', move: { ko: '차 약 1시간 10분', en: 'Drive, about 70 min' },
          desc: { ko: '바다에서 솟은 분화구. 정상까지 계단 200여 개, 올라가면 성산 마을과 우도가 내려다보입니다.', en: 'A crater rising out of the sea. About 200 steps to the rim, with the village and Udo below.' },
          photo: 'jeju-cover' },
        { phase: 'lunch', time: '12:00', name: { ko: '성산 포구', en: 'Seongsan harbour' }, q: '성산포구', move: { ko: '차 약 5분', en: 'Drive, about 5 min' },
          desc: { ko: '포구 앞 식당가에서 점심. 바람이 세면 실내 자리를 고르세요.', en: 'Lunch by the harbour. If the wind is up, take a table inside.' } },
        { phase: 'afternoon', time: '13:10', name: { ko: '광치기해변', en: 'Gwangchigi Beach' }, q: '광치기해변', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '성산일출봉이 물 위에 거꾸로 서는 얕은 해변. 물이 빠지면 검은 현무암이 드러납니다.', en: 'A shallow beach where Seongsan stands upside down in the water. At low tide the black basalt shows.' } },
        { phase: 'afternoon', time: '13:50', name: { ko: '섭지코지', en: 'Seopjikoji' }, q: '섭지코지', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '언덕 끝에 등대가 하나. 바람이 세게 부는 날이 오히려 제주다워요.', en: 'One lighthouse at the end of a hill. A windy day is the most Jeju-like day.' } },
        { phase: 'afternoon', time: '15:20', name: { ko: '만장굴', en: 'Manjanggul Lava Tube' }, q: '만장굴', move: { ko: '차 약 30분', en: 'Drive, about 30 min' },
          desc: { ko: '용암이 흐르던 동굴 안은 여름에도 서늘합니다. 긴팔 하나 챙기세요.', en: 'The lava tube stays cool even in summer — bring a light layer.' } },
        { phase: 'evening', time: '16:50', name: { ko: '동문시장', en: 'Dongmun Market' }, q: '동문시장', move: { ko: '차 약 40분', en: 'Drive, about 40 min' },
          desc: { ko: '제주 시내의 큰 시장. 저녁에는 야시장이 열려 한 바퀴만 돌아도 배가 부릅니다.', en: 'The big market in Jeju City. In the evening the night market opens — one lap and you are full.' },
          photo: 'jeju-p3' },
        { phase: 'return', time: '20:00', name: { ko: '제주국제공항', en: 'Jeju International Airport' }, q: '제주국제공항', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '차를 반납하고 공항으로. 주유소는 공항 근처에 미리 들르세요.', en: 'Return the car and walk in. Fill up at a station near the airport first.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '전복죽 · 몸국', en: 'Abalone porridge · momguk' }, note: { ko: '제주식 해장은 돼지고기와 메밀가루를 푼 몸국.', en: 'The island hangover cure is momguk — pork and buckwheat.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '고기국수 · 물회', en: 'Gogi-guksu · mulhoe' }, note: { ko: '진한 돼지 육수에 국수, 더우면 차가운 물회.', en: 'Noodles in rich pork broth; when it is hot, cold mulhoe.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🍊', dish: { ko: '감귤 · 오메기떡', en: 'Tangerines · omegi rice cake' }, note: { ko: '겨울이면 감귤, 사계절 내내 오메기떡.', en: 'Tangerines in winter, omegi rice cake all year.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🐖', dish: { ko: '흑돼지 · 갈치구이', en: 'Black pork · grilled hairtail' }, note: { ko: '불판 위에 두툼한 흑돼지 한 점.', en: 'A thick slice of black pork on the grill.' } }
    ],
    photos: [
      { file: 'jeju-p1', cap: { ko: '우도 해변', en: 'Udo Island beach' } },
      { file: 'jeju-p2', cap: { ko: '대포 주상절리', en: 'Daepo Jusangjeolli columns' } },
      { file: 'jeju-p3', cap: { ko: '동문시장 골목', en: 'Dongmun Market' } },
      { file: 'jeju-p4', cap: { ko: '한라산 능선', en: 'The Hallasan ridge' } }
    ],
    also: [
      { name: { ko: '우도', en: 'Udo' }, q: '우도', desc: { ko: '배로 15분, 섬 전체를 자전거로 도는 하루.', en: 'Fifteen minutes by ferry; a whole island by bicycle.' } },
      { name: { ko: '비자림', en: 'Bijarim Forest' }, q: '비자림', desc: { ko: '천 년 된 비자나무가 이어지는 숲길.', en: 'A path through thousand-year-old nutmeg trees.' } },
      { name: { ko: '협재해변', en: 'Hyeopjae Beach' }, q: '협재해변', desc: { ko: '서쪽의 옥빛 바다와 비양도.', en: 'The west coast turquoise, with Biyangdo on the horizon.' } }
    ],
    tip: { ko: '만장굴은 매달 첫 수요일에 쉬고, 렌터카는 미리 예약해야 합니다.', en: 'Manjanggul closes on the first Wednesday of each month; book the car ahead.' }
  },

  /* -------------------------------------------------------------- GYEONGJU */
  {
    id: 'gyeongju', region: 'gyeongsang', emoji: '🏛️', tint: '#C9B6F5',
    name: { ko: '경주', en: 'Gyeongju' },
    sub: { ko: '경상북도 경주시', en: 'Gyeongju, ancient Silla capital' },
    tag: { ko: '천 년 고도, 밤에 더 예쁜 도시', en: 'A thousand-year capital, better after dark' },
    intro: {
      ko: '경주는 유적이 도시 안에 그대로 놓여 있습니다. 터미널에서 걸어 나오면 바로 고분이 나오고, 해가 지면 동궁과 월지가 물 위에 불을 켭니다.',
      en: 'In Gyeongju the ruins are simply part of the town: step out of the terminal and the tombs begin. After dark, Donggung Palace lights up over its pond.'
    },
    seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }],
    transport: { ko: '도보 + 시내버스', en: 'Walking + city bus' },
    duration: { ko: '약 11시간', en: 'About 11 hours' },
    hub: {
      ko: '경주고속버스터미널', en: 'Gyeongju Express Bus Terminal', q: '경주고속버스터미널',
      note: { ko: '시내 한복판에 있어서 대릉원까지 걸어서 10분. KTX를 타면 시내와 먼 신경주역에 내리니 주의하세요.', en: 'Right downtown — ten minutes on foot to Daereungwon. Note the KTX station sits far outside town.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '천년 고도 하루 — 고분에서 야경까지', en: 'A day in the old capital — tombs to night lights' },
      meta: { ko: '8곳 · 약 11시간 · 시내버스 4회', en: '8 stops · about 11 hours · 4 bus hops' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '경주고속버스터미널', en: 'Gyeongju Express Bus Terminal' }, q: '경주고속버스터미널', move: { ko: '출발', en: 'Start' },
          desc: { ko: '터미널을 나와 왼쪽으로 조금만 걸으면 고분군이 시작됩니다. 모든 시내버스가 여기서 출발해요.', en: 'Walk out and left — the tombs begin in a few minutes. Every city bus starts from here.' } },
        { phase: 'morning', time: '09:15', name: { ko: '대릉원 · 천마총', en: 'Daereungwon & Cheonmachong' }, q: '대릉원', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '신라 왕들의 봉분이 잔디로 덮여 이어집니다. 천마총 안으로 들어가 보면 무덤 구조가 그대로 보입니다.', en: 'Silla royal mounds under grass, one after another. Step inside Cheonmachong to see the tomb itself.' },
          photo: 'gyeongju-p3' },
        { phase: 'morning', time: '10:00', name: { ko: '첨성대', en: 'Cheomseongdae' }, q: '첨성대', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '선덕여왕 때 세운 천문대. 돌 362개가 1년의 날짜를 담았다는 이야기가 있습니다.', en: 'A seventh-century observatory — 362 stones, one for each day, the story goes.' },
          photo: 'gyeongju-p2' },
        { phase: 'morning', time: '10:40', name: { ko: '국립경주박물관', en: 'Gyeongju National Museum' }, q: '국립경주박물관', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '성덕대왕신종과 금관이 한자리에. 실내라 잠깐 더위를 피하기도 좋습니다.', en: 'The Emille Bell and gold crowns in one place — and a cool indoor pause.' } },
        { phase: 'lunch', time: '12:00', name: { ko: '황리단길', en: 'Hwangnidan-gil' }, q: '황리단길', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '한옥을 고쳐 만든 작은 가게가 늘어선 골목. 점심을 여기서 먹고 잠깐 쉬어 갑니다.', en: 'A street of small shops in old hanok houses — lunch and a short rest here.' } },
        { phase: 'afternoon', time: '13:20', name: { ko: '불국사', en: 'Bulguksa Temple' }, q: '불국사', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
          desc: { ko: '청운교와 백운교, 다보탑과 석가탑. 사진보다 실제 계단이 훨씬 가파릅니다.', en: 'The stone bridges, Dabotap and Seokgatap. The stairways are far steeper than they look.' },
          photo: 'gyeongju-p1' },
        { phase: 'afternoon', time: '15:00', name: { ko: '석굴암', en: 'Seokguram Grotto' }, q: '석굴암', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
          desc: { ko: '산 위 동굴 안의 본존불. 안쪽은 사진 촬영이 안 되니 눈으로 오래 보세요.', en: 'The Buddha in a mountain grotto. No photos inside — give it time instead.' },
          photo: 'gyeongju-p4' },
        { phase: 'evening', time: '17:40', name: { ko: '동궁과 월지', en: 'Donggung Palace & Wolji Pond' }, q: '동궁과 월지', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
          desc: { ko: '해가 지고 조명이 들어오면 물 위에 궁이 하나 더 생깁니다. 이 코스의 하이라이트.', en: 'When the lights come on, a second palace appears in the water. The highlight of the day.' },
          photo: 'gyeongju-cover' },
        { phase: 'evening', time: '19:30', name: { ko: '경주 시내 저녁', en: 'Dinner downtown' }, q: '황리단길', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
          desc: { ko: '시내로 돌아와 저녁. 시장 골목은 늦게까지 불이 켜져 있습니다.', en: 'Back downtown for dinner — the market alleys stay lit late.' } },
        { phase: 'return', time: '20:40', name: { ko: '경주고속버스터미널', en: 'Gyeongju Express Bus Terminal' }, q: '경주고속버스터미널', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '터미널까지 걸어서. 막차 시간은 미리 확인해 두세요.', en: 'A ten-minute walk to the terminal. Check the last departure in advance.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 잔치국수', en: 'Gukbap · janchi-guksu' }, note: { ko: '터미널 근처 시장 골목에서 가볍게.', en: 'Something light in the market alleys near the terminal.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥗', dish: { ko: '육회물회 · 한정식', en: 'Yukhoe mulhoe · hanjeongsik' }, note: { ko: '경주는 육회와 물회를 함께 내는 집이 많습니다.', en: 'Gyeongju often serves raw beef and cold fish soup in one bowl.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🫘', dish: { ko: '팥빵 · 찰보리빵', en: 'Red bean bread · glutinous barley bread' }, note: { ko: '황남빵 스타일의 팥빵이 이 동네 간식.', en: 'The local sweet is a Hwangnam-style red bean bun.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍱', dish: { ko: '한정식 · 불고기', en: 'Hanjeongsik · bulgogi' }, note: { ko: '상을 가득 차려 내는 경주 한정식.', en: 'The Gyeongju table set with a dozen small dishes.' } }
    ],
    photos: [
      { file: 'gyeongju-p1', cap: { ko: '불국사 대웅전', en: 'Daeungjeon Hall at Bulguksa' } },
      { file: 'gyeongju-p2', cap: { ko: '첨성대', en: 'Cheomseongdae' } },
      { file: 'gyeongju-p3', cap: { ko: '대릉원 고분군', en: 'The tombs of Daereungwon' } },
      { file: 'gyeongju-p4', cap: { ko: '석굴암 본존불', en: 'The Buddha of Seokguram' } }
    ],
    also: [
      { name: { ko: '월정교', en: 'Woljeonggyo Bridge' }, q: '월정교', desc: { ko: '밤에 불이 들어오는 신라의 다리.', en: 'A rebuilt Silla bridge, lit at night.' } },
      { name: { ko: '보문호', en: 'Bomun Lake' }, q: '보문호', desc: { ko: '호수를 도는 산책로와 벚나무.', en: 'A lakeside path under cherry trees.' } },
      { name: { ko: '양동마을', en: 'Yangdong Village' }, q: '양동마을', desc: { ko: '조선의 양반 마을이 그대로 남은 곳.', en: 'A Joseon yangban village, still standing.' } }
    ],
    tip: { ko: '동궁과 월지는 해 진 뒤 30분이 가장 예쁩니다. 입장 마감 시간을 확인하세요.', en: 'Donggung is best half an hour after sunset — check the last entry time.' }
  },

  /* -------------------------------------------------------------- GANGNEUNG */
  {
    id: 'gangneung', region: 'gangwon', emoji: '☕', tint: '#9BD3C4',
    name: { ko: '강릉', en: 'Gangneung' },
    sub: { ko: '강원도 강릉시', en: 'Gangneung, on the east coast' },
    tag: { ko: '바다와 커피, 오래된 집', en: 'Sea, coffee and old houses' },
    intro: {
      ko: 'KTX로 두 시간이면 바다가 나옵니다. 오죽헌 같은 오래된 집과 경포호, 안목의 커피거리를 한 줄로 이으면 강릉의 하루가 됩니다.',
      en: 'Two hours on the KTX and the sea appears. Line up the old houses, Gyeongpo lake and the coffee street at Anmok, and you have Gangneung in a day.'
    },
    seasons: [{ ko: '여름', en: 'Summer' }, { ko: '겨울 커피', en: 'Winter coffee' }, { ko: '사계절', en: 'All year' }],
    transport: { ko: '버스 + 택시', en: 'Bus + taxi' },
    duration: { ko: '약 11시간', en: 'About 11 hours' },
    hub: {
      ko: '강릉역', en: 'Gangneung Station (KTX)', q: '강릉역',
      note: { ko: '서울 청량리에서 KTX로 1시간 50분. 역에서 오죽헌까지 버스로 15분입니다.', en: 'Under two hours from Cheongnyangni. Ojukheon is a 15-minute bus ride from the station.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '오죽헌에서 강문 바다까지', en: 'Ojukheon to the Gangmun sea' },
      meta: { ko: '8곳 · 약 11시간 · 버스 4회', en: '8 stops · about 11 hours · 4 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '강릉역', en: 'Gangneung Station' }, q: '강릉역', move: { ko: '출발', en: 'Start' },
          desc: { ko: '역 앞 버스정류장에서 오죽헌 방면 버스로. 짐은 역 물품보관함에 두고 다니면 편합니다.', en: 'A bus to Ojukheon leaves from outside the station. Leave bags in the station lockers.' } },
        { phase: 'morning', time: '09:20', name: { ko: '오죽헌', en: 'Ojukheon House' }, q: '오죽헌', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
          desc: { ko: '신사임당이 율곡 이이를 키운 집. 마당의 오죽(검은 대나무)이 이름의 유래입니다.', en: 'Where Shin Saimdang raised Yulgok Yi I. The black bamboo in the garden gave the house its name.' },
          photo: 'gangneung-p1' },
        { phase: 'morning', time: '10:30', name: { ko: '선교장', en: 'Seongyojang House' }, q: '선교장', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '연못을 품은 조선 시대 양반 저택. 마루에 앉아 있으면 시간이 느려집니다.', en: 'A Joseon noble house with its own pond. Sit on the wooden veranda and time slows down.' },
          photo: 'gangneung-p3' },
        { phase: 'lunch', time: '12:00', name: { ko: '초당동', en: 'Chodang-dong' }, q: '초당동', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '바닷물로 간수를 낸 순두부의 고장. 점심은 여기서 정합니다.', en: 'The home of soft tofu set with sea water — lunch is decided here.' } },
        { phase: 'afternoon', time: '13:20', name: { ko: '경포호', en: 'Gyeongpo Lake' }, q: '경포호', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '호수와 바다가 나란히 있는 드문 풍경. 둘레길은 자전거로도 좋습니다.', en: 'A lake running beside the sea — rare enough to remember. The loop is good by bike.' },
          photo: 'gangneung-cover' },
        { phase: 'afternoon', time: '14:20', name: { ko: '경포해변', en: 'Gyeongpo Beach' }, q: '경포해변', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '모래가 곱고 수심이 얕아 가족 단위가 많습니다. 여름엔 파라솔이 빼곡해요.', en: 'Fine sand and shallow water, full of families. In summer the parasols fill every gap.' },
          photo: 'gangneung-p4' },
        { phase: 'afternoon', time: '15:20', name: { ko: '안목해변 커피거리', en: 'Anmok Beach coffee street' }, q: '안목해변', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '바다를 통째로 창에 담은 카페들이 늘어서 있습니다. 커피 한 잔에 한 시간쯤.', en: 'Cafés with the whole sea in the window. An hour goes by with one cup.' },
          photo: 'gangneung-p2' },
        { phase: 'evening', time: '17:00', name: { ko: '강릉중앙시장', en: 'Gangneung Jungang Market' }, q: '강릉중앙시장', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
          desc: { ko: '간식은 여기서. 닭강정과 감자옹심이, 회는 저녁에.', en: 'Snacks here: fried chicken, potato dumpling soup — save the raw fish for dinner.' } },
        { phase: 'evening', time: '18:30', name: { ko: '강문해변', en: 'Gangmun Beach' }, q: '강문해변', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '바다를 보며 저녁. 밤에는 파도 소리만 남습니다.', en: 'Dinner looking at the water. At night only the waves are left.' } },
        { phase: 'return', time: '20:00', name: { ko: '강릉역', en: 'Gangneung Station' }, q: '강릉역', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
          desc: { ko: '역으로 돌아와 마지막 KTX. 좌석은 미리 예매하세요.', en: 'Back to the station for the last train — book the seat ahead.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥔', dish: { ko: '감자옹심이', en: 'Gamja ongsimi' }, note: { ko: '감자를 갈아 만든 새알심이 들어간 국.', en: 'Potato dumplings in a clear broth.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍲', dish: { ko: '초당순두부', en: 'Chodang sundubu' }, note: { ko: '바닷물 간수로 굳힌 부드러운 두부.', en: 'Soft tofu set with sea-water brine.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🍗', dish: { ko: '닭강정 · 커피', en: 'Dakgangjeong · coffee' }, note: { ko: '시장에서 갓 튀긴 닭강정, 바다 앞에서 커피.', en: 'Fresh-fried chicken in the market, coffee by the sea.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🐟', dish: { ko: '회 · 물회 · 짬뽕', en: 'Hoe · mulhoe · jjamppong' }, note: { ko: '강문이나 사근진에서 회 한 접시.', en: 'A plate of raw fish at Gangmun or Sageunjin.' } }
    ],
    photos: [
      { file: 'gangneung-p1', cap: { ko: '오죽헌', en: 'Ojukheon House' } },
      { file: 'gangneung-p2', cap: { ko: '안목해변', en: 'Anmok Beach' } },
      { file: 'gangneung-p3', cap: { ko: '선교장의 마루', en: 'Inside Seongyojang' } },
      { file: 'gangneung-p4', cap: { ko: '경포해변', en: 'Gyeongpo Beach' } }
    ],
    also: [
      { name: { ko: '주문진', en: 'Jumunjin' }, q: '주문진', desc: { ko: '항구와 등대, 드라마 촬영지로 알려진 방파제.', en: 'A harbour, a lighthouse and the famous breakwater.' } },
      { name: { ko: '경포가시연습지', en: 'Gyeongpo Wetland' }, q: '경포가시연습지', desc: { ko: '여름에 가시연꽃이 피는 습지.', en: 'A wetland that flowers with prickly water lilies in summer.' } },
      { name: { ko: '정동진', en: 'Jeongdongjin' }, q: '정동진', desc: { ko: '바다로 바로 떨어지는 기차역과 일출.', en: 'A station that drops straight to the sea, best at sunrise.' } }
    ],
    tip: { ko: '안목 커피거리는 오후 햇빛이 바다 쪽으로 들어옵니다. 창가 자리는 15시 이후가 좋아요.', en: 'At Anmok the afternoon light falls across the sea — window seats are best after three.' }
  },

  /* ---------------------------------------------------------------- JEONJU */
  {
    id: 'jeonju', region: 'jeolla', emoji: '🍚', tint: '#F7A8B8',
    name: { ko: '전주', en: 'Jeonju' },
    sub: { ko: '전라북도 전주시', en: 'Jeonju, North Jeolla' },
    tag: { ko: '한옥 지붕과 비빔밥', en: 'Hanok roofs and a bowl of bibimbap' },
    intro: {
      ko: '전주는 걸음이 느려지는 도시입니다. 한옥마을 골목을 한 바퀴 돌고, 오목대에 올라 지붕을 내려다보고, 저녁에 남부시장으로 넘어가면 하루가 다 갑니다.',
      en: 'Jeonju slows you down. A loop of the hanok alleys, a climb to Omokdae to look back over the roofs, and an evening in Nambu Market — that is the day.'
    },
    seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }, { ko: '사계절', en: 'All year' }],
    transport: { ko: '도보 + 시내버스', en: 'Walking + city bus' },
    duration: { ko: '약 11시간', en: 'About 11 hours' },
    hub: {
      ko: '전주고속버스터미널', en: 'Jeonju Express Bus Terminal', q: '전주고속버스터미널',
      note: { ko: '한옥마을까지 버스로 15분, 택시로 10분 남짓. 시외버스터미널과는 다른 곳이니 이름을 확인하세요.', en: 'Fifteen minutes by bus to the hanok village, a little less by taxi. Note this is a different terminal from the intercity one.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '한옥마을 한 바퀴, 시장까지', en: 'A loop of the hanok village, ending at the market' },
      meta: { ko: '9곳 · 약 11시간 · 도보 5km', en: '9 stops · about 11 hours · 5 km on foot' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '전주고속버스터미널', en: 'Jeonju Express Bus Terminal' }, q: '전주고속버스터미널', move: { ko: '출발', en: 'Start' },
          desc: { ko: '터미널 앞에서 한옥마을 방면 버스로. 짐은 터미널 보관함에 맡기면 하루가 가볍습니다.', en: 'A bus to the hanok village leaves from the front. Leave the bag in a terminal locker.' } },
        { phase: 'morning', time: '09:20', name: { ko: '경기전', en: 'Gyeonggijeon Shrine' }, q: '경기전', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
          desc: { ko: '태조 이성계의 어진을 모신 곳. 마당의 큰 은행나무가 계절마다 색을 바꿉니다.', en: 'Home to the portrait of King Taejo. The great ginkgo in the courtyard changes colour with the season.' },
          photo: 'jeonju-p1' },
        { phase: 'morning', time: '10:10', name: { ko: '전주향교', en: 'Jeonju Hyanggyo' }, q: '전주향교', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '조선 시대 지방 교육기관. 은행나무 그늘이 넓어 잠깐 앉기 좋습니다.', en: 'A Joseon-era local school with deep ginkgo shade — a good place to sit.' } },
        { phase: 'morning', time: '10:50', name: { ko: '오목대', en: 'Omokdae' }, q: '오목대', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '언덕 위 정자에서 한옥 지붕이 물결처럼 펼쳐집니다. 전주에서 가장 좋은 사진 자리.', en: 'From the hilltop pavilion the hanok roofs spread like waves — the best photograph in town.' },
          photo: 'jeonju-p4' },
        { phase: 'morning', time: '11:30', name: { ko: '전동성당', en: 'Jeondong Cathedral' }, q: '전동성당', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '붉은 벽돌과 로마네스크 지붕. 한옥 사이에 갑자기 나타나서 더 눈에 들어옵니다.', en: 'Red brick and Romanesque arches, appearing suddenly among the hanok roofs.' },
          photo: 'jeonju-p2' },
        { phase: 'lunch', time: '12:10', name: { ko: '전주한옥마을', en: 'Jeonju Hanok Village' }, q: '전주한옥마을', move: { ko: '도보 약 5분', en: 'Walk, about 5 min' },
          desc: { ko: '점심은 여기서. 700채가 넘는 한옥 사이 골목이 미로처럼 이어집니다.', en: 'Lunch here, among more than seven hundred hanok houses and their maze of alleys.' },
          photo: 'jeonju-cover' },
        { phase: 'afternoon', time: '13:40', name: { ko: '한옥마을 골목 · 한복', en: 'Hanok alleys & hanbok' }, q: '전주한옥마을', move: { ko: '도보', en: 'On foot' },
          desc: { ko: '한복을 빌려 입으면 사진이 확실히 다르게 나옵니다. 오후 두 시간은 천천히 걷는 시간.', en: 'Rent a hanbok and the photographs change completely. Two slow hours of walking.' } },
        { phase: 'afternoon', time: '15:40', name: { ko: '자만벽화마을', en: 'Jaman Mural Village' }, q: '자만벽화마을', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '언덕길 벽에 그림이 이어집니다. 오르막이 가파르니 물을 챙기세요.', en: 'Murals along a hillside lane. The climb is steep — bring water.' } },
        { phase: 'evening', time: '16:50', name: { ko: '남부시장', en: 'Nambu Market' }, q: '남부시장', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '저녁은 시장에서. 청년몰 골목과 야시장이 겹치는 시간대가 가장 활기찹니다.', en: 'Dinner at the market — the youth mall and night market overlap into the liveliest hour.' },
          photo: 'jeonju-p3' },
        { phase: 'return', time: '20:00', name: { ko: '전주고속버스터미널', en: 'Jeonju Express Bus Terminal' }, q: '전주고속버스터미널', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '터미널로 돌아와 마무리. 막차 시간을 미리 확인하세요.', en: 'Back to the terminal. Check the last bus before you sit down to dinner.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '콩나물국밥', en: 'Kongnamul gukbap' }, note: { ko: '전주 사람은 아침에도 콩나물국밥을 먹습니다.', en: 'In Jeonju, bean-sprout soup is breakfast too.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍚', dish: { ko: '전주비빔밥', en: 'Jeonju bibimbap' }, note: { ko: '돌솥에 눌린 밥까지 긁어 먹는 맛.', en: 'The best part is the scorched rice at the bottom.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🍫', dish: { ko: '수제 초코파이 · 모주', en: 'Handmade choco-pie · moju' }, note: { ko: '모주는 막걸리에 약재를 넣은 전주 술.', en: 'Moju is the local rice drink, brewed with herbs.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🥘', dish: { ko: '피순대 · 한정식', en: 'Pi-sundae · hanjeongsik' }, note: { ko: '시장 골목에서 순대 한 접시, 또는 한 상 차림.', en: 'A plate of sundae in the market, or a full table.' } }
    ],
    photos: [
      { file: 'jeonju-p1', cap: { ko: '경기전', en: 'Gyeonggijeon Shrine' } },
      { file: 'jeonju-p2', cap: { ko: '전동성당', en: 'Jeondong Cathedral' } },
      { file: 'jeonju-p3', cap: { ko: '남부시장 청년몰', en: 'The youth mall at Nambu Market' } },
      { file: 'jeonju-p4', cap: { ko: '오목대에서 본 지붕', en: 'Rooftops seen from Omokdae' } }
    ],
    also: [
      { name: { ko: '덕진공원', en: 'Deokjin Park' }, q: '덕진공원', desc: { ko: '여름 연꽃이 가득한 호수 공원.', en: 'A lake park packed with lotus flowers in summer.' } },
      { name: { ko: '전주천', en: 'Jeonjucheon' }, q: '전주천', desc: { ko: '저녁 산책로. 물소리가 도심을 가로지릅니다.', en: 'An evening path where a stream crosses the town.' } },
      { name: { ko: '와룡서원', en: 'Waryong Seowon' }, q: '와룡서원', desc: { ko: '한옥마을 뒤 조용한 서원.', en: 'A quiet academy behind the hanok village.' } }
    ],
    tip: { ko: '한복 대여는 오전이 한산합니다. 오후에는 인기 가게에 줄이 깁니다.', en: 'Rent hanbok in the morning — the popular shops queue up after lunch.' }
  },

  /* ----------------------------------------------------------------- YEOSU */
  {
    id: 'yeosu', region: 'jeolla', emoji: '🚢', tint: '#8FB8F0',
    name: { ko: '여수', en: 'Yeosu' },
    sub: { ko: '전라남도 여수시', en: 'Yeosu, South Jeolla' },
    tag: { ko: '밤바다와 케이블카', en: 'A night sea and a cable car over it' },
    intro: {
      ko: '여수는 밤에 진짜 얼굴을 보여줍니다. 낮에는 향일암과 오동도를 돌고, 해가 지면 낭만포차거리에서 바다를 마주 앉으세요.',
      en: 'Yeosu shows its real face at night. See Hyangiram and Odongdo by day, then sit facing the water at the pocha street after sunset.'
    },
    seasons: [{ ko: '여름', en: 'Summer' }, { ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }],
    transport: { ko: '버스 + 도보', en: 'Bus + walking' },
    duration: { ko: '약 11시간', en: 'About 11 hours' },
    hub: {
      ko: '여수엑스포역', en: 'Yeosu Expo Station', q: '여수엑스포역',
      note: { ko: 'KTX 용산에서 2시간 50분. 역에서 오동도와 케이블카까지 걸어서 15분 거리입니다.', en: 'Two hours fifty from Yongsan on KTX. Odongdo and the cable car are fifteen minutes on foot.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '향일암의 아침에서 여수 밤바다까지', en: 'Morning at Hyangiram, night on the Yeosu sea' },
      meta: { ko: '7곳 · 약 11시간 · 버스 3회', en: '7 stops · about 11 hours · 3 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '여수엑스포역', en: 'Yeosu Expo Station' }, q: '여수엑스포역', move: { ko: '출발', en: 'Start' },
          desc: { ko: '역 앞에서 향일암 방면 버스로. 편도 40분이라 왕복 시간을 미리 계산해 두세요.', en: 'A bus to Hyangiram from outside the station — forty minutes each way, so plan the return.' } },
        { phase: 'morning', time: '09:40', name: { ko: '향일암', en: 'Hyangiram Hermitage' }, q: '향일암', move: { ko: '버스 약 40분', en: 'Bus, about 40 min' },
          desc: { ko: '돌산 끝 절벽에 매달린 암자. 계단이 가파르지만 올라서면 다도해가 통째로 보입니다.', en: 'A hermitage clinging to the cliff at the end of Dolsan. Steep steps, then the whole archipelago.' },
          photo: 'yeosu-p1' },
        { phase: 'lunch', time: '11:40', name: { ko: '돌산', en: 'Dolsan' }, q: '돌산', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
          desc: { ko: '돌산 갓으로 유명한 동네. 점심을 먹고 돌산대교를 건너 시내로 넘어갑니다.', en: 'The town famous for its mustard greens. Eat, then cross Dolsan Bridge into the city.' } },
        { phase: 'afternoon', time: '13:00', name: { ko: '오동도', en: 'Odongdo Island' }, q: '오동도', move: { ko: '차 약 35분', en: 'Drive, about 35 min' },
          desc: { ko: '방파제를 걸어 들어가는 작은 섬. 동백나무 길을 따라 한 바퀴 40분이면 충분합니다.', en: 'A small island you walk to along the breakwater. Forty minutes around the camellia path.' },
          photo: 'yeosu-p2' },
        { phase: 'afternoon', time: '14:40', name: { ko: '여수해상케이블카', en: 'Yeosu Maritime Cable Car' }, q: '여수해상케이블카', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '바다 위를 가로지르는 케이블카. 돌산 쪽 자산공원까지 왕복하면 항구 전체가 눈에 들어옵니다.', en: 'A cable car over open water. The round trip to Jasan Park shows you the whole harbour.' } },
        { phase: 'evening', time: '16:20', name: { ko: '이순신광장', en: 'Yi Sun-sin Square' }, q: '이순신광장', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '항구를 마주한 넓은 광장. 노을 시간에 맞추면 배와 하늘이 같이 붉어집니다.', en: 'A wide square facing the harbour. At sunset the boats and the sky go red together.' } },
        { phase: 'evening', time: '17:30', name: { ko: '낭만포차거리', en: 'Nangman Pocha Street' }, q: '여수낭만포차거리', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
          desc: { ko: '저녁은 바다 앞 포차에서. 20시에 돌산대교 조명이 들어오면 이 코스가 완성됩니다.', en: 'Dinner at a pocha facing the water. At eight the bridge lights come on and the day is complete.' } },
        { phase: 'return', time: '19:30', name: { ko: '여수엑스포역', en: 'Yeosu Expo Station' }, q: '여수엑스포역', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '바닷길을 따라 역으로. 마지막 KTX 좌석은 미리 예매하세요.', en: 'Follow the water back to the station. Book the last KTX seat ahead.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '해장국 · 국밥', en: 'Haejang-guk · gukbap' }, note: { ko: '역 근처에서 뜨끈한 국물로 시작.', en: 'Start with something hot near the station.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🐟', dish: { ko: '서대회 · 게장백반', en: 'Seodae-hoe · gejang' }, note: { ko: '여수 앞바다에서 잡은 서대와 꽃게.', en: 'Sole and blue crab from these waters.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🥬', dish: { ko: '돌산갓김치 · 갓피클', en: 'Dolsan mustard kimchi' }, note: { ko: '알싸한 갓김치는 여수에서 꼭 사 가는 것.', en: 'The peppery mustard kimchi everyone takes home.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍢', dish: { ko: '조개구이 · 해산물 포차 안주', en: 'Grilled shellfish · pocha seafood' }, note: { ko: '밤바다 앞에서 조개구이 한 상.', en: 'A tray of grilled shellfish with the night sea in front of you.' } }
    ],
    photos: [
      { file: 'yeosu-p1', cap: { ko: '향일암', en: 'Hyangiram Hermitage' } },
      { file: 'yeosu-p2', cap: { ko: '오동도', en: 'Odongdo Island' } },
      { file: 'yeosu-p3', cap: { ko: '여수해상케이블카', en: 'The maritime cable car' } },
      { file: 'yeosu-p4', cap: { ko: '여수 엑스포 야경', en: 'Yeosu Expo at night' } }
    ],
    also: [
      { name: { ko: '돌산공원', en: 'Dolsan Park' }, q: '돌산공원', desc: { ko: '케이블카 건너편, 여수 시내를 내려다보는 자리.', en: 'Across the cable car, looking down over the city.' } },
      { name: { ko: '거문도', en: 'Geomundo' }, q: '거문도', desc: { ko: '배로 두 시간, 섬마을 하루.', en: 'Two hours by ferry for a day on a slow island.' } },
      { name: { ko: '여수예술랜드', en: 'Yeosu Art Land' }, q: '여수예술랜드', desc: { ko: '바다를 배경으로 한 조형물 정원.', en: 'A sculpture garden with the sea behind it.' } }
    ],
    tip: { ko: '향일암은 일출로 유명합니다. 이 코스를 새벽으로 앞당기면 일출까지 볼 수 있어요.', en: 'Hyangiram is famous for sunrise — start earlier and you can catch it.' }
  },

  /* ---------------------------------------------------------------- SOKCHO */
  {
    id: 'sokcho', region: 'gangwon', emoji: '🏔️', tint: '#A8C9E8',
    name: { ko: '속초', en: 'Sokcho' },
    sub: { ko: '강원도 속초시', en: 'Sokcho, by Seoraksan' },
    tag: { ko: '설악산과 바다가 붙어 있는 곳', en: 'Where the mountain meets the sea' },
    intro: {
      ko: '속초는 산과 바다가 차로 20분 거리입니다. 오전에 설악산 계곡을 걷고, 오후에 바다로 내려오면 하루에 두 가지 풍경을 다 갖게 됩니다.',
      en: 'In Sokcho the mountain and the sea are twenty minutes apart. Walk a Seoraksan valley in the morning and come down to the water in the afternoon.'
    },
    seasons: [{ ko: '가을 단풍', en: 'Autumn leaves' }, { ko: '여름', en: 'Summer' }, { ko: '겨울 설경', en: 'Snow' }],
    transport: { ko: '버스 + 택시', en: 'Bus + taxi' },
    duration: { ko: '약 11시간', en: 'About 11 hours' },
    hub: {
      ko: '속초고속버스터미널', en: 'Sokcho Express Bus Terminal', q: '속초고속버스터미널',
      note: { ko: '동서울에서 2시간 남짓. 터미널에서 설악산행 버스가 바로 서고, 시내까지는 버스로 10분입니다.', en: 'A little over two hours from Dong Seoul. Seoraksan buses leave from the terminal; town is ten minutes away.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '설악산 계곡에서 동해 바다까지', en: 'From a Seoraksan valley to the East Sea' },
      meta: { ko: '7곳 · 약 11시간 · 도보 7km', en: '7 stops · about 11 hours · 7 km on foot' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '속초고속버스터미널', en: 'Sokcho Express Bus Terminal' }, q: '속초고속버스터미널', move: { ko: '출발', en: 'Start' },
          desc: { ko: '터미널에서 설악산 소공원행 버스로. 산에 오래 머물 생각이면 점심은 미리 사 두세요.', en: 'Take the Seoraksan bus from the terminal. If you plan to linger, buy lunch before you go up.' } },
        { phase: 'morning', time: '09:20', name: { ko: '설악산 소공원 · 비선대', en: 'Seoraksan Sogongwon & Biseondae' }, q: '설악산 소공원', move: { ko: '버스 약 25분', en: 'Bus, about 25 min' },
          desc: { ko: '계곡을 따라 걷는 완만한 코스. 비선대까지 왕복 두 시간 남짓, 바위와 물소리가 계속 이어집니다.', en: 'A gentle walk up the valley. About two hours round trip to Biseondae, rock and water the whole way.' },
          photo: 'sokcho-cover' },
        { phase: 'lunch', time: '12:00', name: { ko: '청호동 아바이마을', en: 'Abai Village, Cheongho-dong' }, q: '아바이마을', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
          desc: { ko: '함경도 피란민이 모여 만든 마을. 갯배를 타고 청초호를 건너는 것도 이 동네의 오래된 일상입니다.', en: 'A village built by refugees from Hamgyong. The little ferry across Cheongcho Lake is part of daily life here.' } },
        { phase: 'afternoon', time: '13:30', name: { ko: '영금정', en: 'Yeonggeumjeong' }, q: '영금정', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
          desc: { ko: '바위 위에 세운 정자에서 동해가 바로 앞입니다. 파도가 세면 물보라가 정자까지 올라옵니다.', en: 'A pavilion on the rocks with the East Sea in front of it. In rough weather the spray reaches the rail.' },
          photo: 'sokcho-p4' },
        { phase: 'afternoon', time: '14:30', name: { ko: '속초관광수산시장', en: 'Sokcho Tourist & Fish Market' }, q: '속초관광수산시장', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '간식은 여기서. 닭강정과 쥐포, 오징어순대를 조금씩 맛보기 좋습니다.', en: 'Snacks here: fried chicken, dried fish, squid sundae — a little of each.' },
          photo: 'sokcho-p3' },
        { phase: 'afternoon', time: '15:40', name: { ko: '속초해변 · 외옹치 바다향기로', en: 'Sokcho Beach & Oeongchi sea path' }, q: '외옹치바다향기로', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
          desc: { ko: '바다 위로 난 데크 길을 따라 대포항까지. 걷는 동안 계속 파도 소리가 따라옵니다.', en: 'A boardwalk over the water toward Daepo harbour, waves underneath the whole way.' },
          photo: 'sokcho-p2' },
        { phase: 'evening', time: '17:30', name: { ko: '대포항', en: 'Daepo Harbour' }, q: '대포항', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
          desc: { ko: '활어회 골목이 늘어선 작은 항구. 저녁은 여기서 먹고 버스로 시내로 돌아옵니다.', en: 'A small harbour lined with raw-fish stalls — dinner here, then a bus back to town.' } },
        { phase: 'return', time: '19:30', name: { ko: '속초고속버스터미널', en: 'Sokcho Express Bus Terminal' }, q: '속초고속버스터미널', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '터미널로 돌아와 마무리. 주말 저녁 막차는 일찍 매진될 수 있어요.', en: 'Back to the terminal. Weekend evening buses can sell out early.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 해장국', en: 'Gukbap · haejang-guk' }, note: { ko: '산에 오르기 전 뜨끈한 국물 한 그릇.', en: 'A hot bowl before the climb.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🦑', dish: { ko: '오징어순대 · 아바이순대', en: 'Squid sundae · Abai sundae' }, note: { ko: '함경도 방식으로 만든 순대.', en: 'Sundae made the Hamgyong way.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🍗', dish: { ko: '닭강정 · 쥐포', en: 'Dakgangjeong · dried filefish' }, note: { ko: '시장에서 봉지째 사 들고 바다로.', en: 'Buy a bag at the market and take it to the sea.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🐟', dish: { ko: '활어회 · 물회 · 오징어불고기', en: 'Hoe · mulhoe · squid bulgogi' }, note: { ko: '대포항에서 갓 떠 올린 회.', en: 'Fish straight off the boats at Daepo.' } }
    ],
    photos: [
      { file: 'sokcho-p1', cap: { ko: '속초해변', en: 'Sokcho Beach' } },
      { file: 'sokcho-p2', cap: { ko: '외옹치 해변', en: 'Oeongchi Beach' } },
      { file: 'sokcho-p3', cap: { ko: '속초관광수산시장', en: 'Sokcho Tourist & Fish Market' } },
      { file: 'sokcho-p4', cap: { ko: '영금정', en: 'Yeonggeumjeong' } }
    ],
    also: [
      { name: { ko: '울산바위', en: 'Ulsanbawi Rock' }, q: '울산바위', desc: { ko: '설악산을 대표하는 바위. 왕복 세 시간.', en: 'Seoraksan\u2019s great rock — three hours round trip.' } },
      { name: { ko: '영랑호', en: 'Yeongnangho Lake' }, q: '영랑호', desc: { ko: '호수를 도는 자전거길과 철새.', en: 'A bike loop around the lake, and migratory birds.' } },
      { name: { ko: '낙산사', en: 'Naksansa Temple' }, q: '낙산사', desc: { ko: '바다를 마주한 절, 남쪽으로 30분.', en: 'A temple facing the sea, thirty minutes south.' } }
    ],
    tip: { ko: '설악산 케이블카는 오전에 줄이 짧습니다. 산행 대신 케이블카로 권금성에 올라도 좋아요.', en: 'The Seoraksan cable car queues are shorter in the morning — it also works instead of the hike.' }
  },

  /* --------------------------------------------------------------- DAMYANG */
  {
    id: 'damyang', region: 'jeolla', emoji: '🎋', tint: '#A9D9A0',
    name: { ko: '담양', en: 'Damyang' },
    sub: { ko: '전라남도 담양군', en: 'Damyang, South Jeolla' },
    tag: { ko: '대나무숲과 느린 정자', en: 'Bamboo shade and old pavilions' },
    intro: {
      ko: '담양은 여름에 가장 좋은 곳입니다. 대나무숲 그늘이 5도쯤 시원하고, 그 사이로 정자와 원림이 이어집니다. 터미널에서 걸어서 시작할 수 있는 것도 장점이에요.',
      en: 'Damyang is a summer place: the bamboo shade runs several degrees cooler, and old gardens and pavilions sit between the groves. You can start on foot from the terminal.'
    },
    seasons: [{ ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }],
    transport: { ko: '도보 + 택시', en: 'Walking + taxi' },
    duration: { ko: '약 10시간', en: 'About 10 hours' },
    hub: {
      ko: '담양공용버스터미널', en: 'Damyang Bus Terminal', q: '담양공용버스터미널',
      note: { ko: '광주에서 40분. 터미널에서 죽녹원까지 걸어서 15분이라 차 없이도 하루가 됩니다.', en: 'Forty minutes from Gwangju. Juknokwon is a fifteen-minute walk, so the day works without a car.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '죽녹원에서 소쇄원까지, 대나무 하루', en: 'Juknokwon to Soswaewon, a day in bamboo' },
      meta: { ko: '7곳 · 약 10시간 · 택시 3회', en: '7 stops · about 10 hours · 3 short taxi rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '담양공용버스터미널', en: 'Damyang Bus Terminal' }, q: '담양공용버스터미널', move: { ko: '출발', en: 'Start' },
          desc: { ko: '터미널에서 죽녹원까지 걸어서 15분. 길이 완만해서 짐이 있어도 괜찮습니다.', en: 'Fifteen flat minutes on foot to Juknokwon — fine even with a bag.' } },
        { phase: 'morning', time: '09:15', name: { ko: '죽녹원', en: 'Juknokwon Bamboo Garden' }, q: '죽녹원', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '대나무 사이로 난 길이 여덟 갈래. 오전 햇빛이 잎을 통과할 때 가장 예쁩니다.', en: 'Eight paths through the bamboo. Best in the morning, when the light comes through the leaves.' },
          photo: 'damyang-cover' },
        { phase: 'morning', time: '10:40', name: { ko: '관방제림', en: 'Gwanbangjerim' }, q: '관방제림', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '제방을 따라 늘어선 300년 된 나무들. 대나무숲과는 또 다른, 시원한 그늘길입니다.', en: 'Three-hundred-year-old trees along the riverbank — a different kind of cool shade.' },
          photo: 'damyang-p3' },
        { phase: 'morning', time: '11:30', name: { ko: '메타세쿼이아길', en: 'Metasequoia Road' }, q: '담양메타세쿼이아길', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '차로 달리면 나무가 터널처럼 이어집니다. 걸어도 좋고, 사진은 길 가운데서 찍으세요.', en: 'The trees close into a tunnel above the road. Walk it if you like — best photographed from the middle.' },
          photo: 'damyang-p1' },
        { phase: 'lunch', time: '12:40', name: { ko: '담양읍', en: 'Damyang town' }, q: '담양읍', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '점심은 읍내에서. 떡갈비와 국수를 같이 시키는 게 이 동네 방식입니다.', en: 'Lunch in town — the local way is grilled beef patty and noodles together.' } },
        { phase: 'afternoon', time: '14:00', name: { ko: '소쇄원', en: 'Soswaewon Garden' }, q: '소쇄원', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '물길과 대나무, 정자가 한 폭의 그림처럼 놓인 조선의 원림. 앉아 있으면 발소리부터 달라집니다.', en: 'A Joseon garden of water, bamboo and pavilions arranged like a painting. Even your footsteps change.' },
          photo: 'damyang-p2' },
        { phase: 'afternoon', time: '15:10', name: { ko: '면앙정', en: 'Myeonangjeong Pavilion' }, q: '면앙정', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '들판 한가운데 솟은 정자. 사방이 논이라 계절마다 풍경이 통째로 바뀝니다.', en: 'A pavilion standing alone in the fields — the view changes completely with the season.' },
          photo: 'damyang-p4' },
        { phase: 'evening', time: '16:30', name: { ko: '담양 시내 · 대나무 카페', en: 'Damyang town & a bamboo café' }, q: '담양읍', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
          desc: { ko: '해 질 때까지 읍내에서 쉬다가 저녁. 대나무숲을 낀 카페가 많습니다.', en: 'Rest in town until sunset, then dinner. Many cafés sit right against the groves.' } },
        { phase: 'return', time: '19:00', name: { ko: '담양공용버스터미널', en: 'Damyang Bus Terminal' }, q: '담양공용버스터미널', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
          desc: { ko: '터미널로 걸어와 마무리. 광주행 막차 시간을 확인하세요.', en: 'A short walk back. Check the last bus to Gwangju.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍜', dish: { ko: '잔치국수 · 국밥', en: 'Janchi-guksu · gukbap' }, note: { ko: '터미널 근처에서 가볍게 시작.', en: 'Something light near the terminal.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥩', dish: { ko: '떡갈비 · 국수', en: 'Tteokgalbi · noodles' }, note: { ko: '담양 떡갈비는 다진 고기를 숯불에 구운 것.', en: 'Damyang tteokgalbi is minced beef over charcoal.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🍓', dish: { ko: '딸기 · 죽순 요리', en: 'Strawberries · bamboo shoots' }, note: { ko: '겨울엔 딸기, 봄엔 죽순.', en: 'Strawberries in winter, bamboo shoots in spring.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍚', dish: { ko: '대통밥 · 한정식', en: 'Daetongbap · hanjeongsik' }, note: { ko: '대나무통에 지은 밥, 그 향이 오래 남습니다.', en: 'Rice steamed in bamboo — the scent stays with you.' } }
    ],
    photos: [
      { file: 'damyang-p1', cap: { ko: '메타세쿼이아길', en: 'The metasequoia road' } },
      { file: 'damyang-p2', cap: { ko: '소쇄원', en: 'Soswaewon Garden' } },
      { file: 'damyang-p3', cap: { ko: '관방제림', en: 'Gwanbangjerim' } },
      { file: 'damyang-p4', cap: { ko: '면앙정', en: 'Myeonangjeong' } }
    ],
    also: [
      { name: { ko: '한국대나무박물관', en: 'Korea Bamboo Museum' }, q: '한국대나무박물관', desc: { ko: '대나무로 만든 생활 도구와 공예품.', en: 'Tools and crafts made of bamboo.' } },
      { name: { ko: '죽향문화체험마을', en: 'Jukhyang Culture Village' }, q: '죽향문화체험마을', desc: { ko: '대나무 공예를 직접 해 보는 곳.', en: 'Try bamboo craft yourself.' } },
      { name: { ko: '추성훈련원', en: 'Chuseong Training Ground' }, q: '추성훈련원', desc: { ko: '조선 수군의 훈련터, 숲이 깊습니다.', en: 'A Joseon naval training ground, deep in the trees.' } }
    ],
    tip: { ko: '죽녹원은 오전 9시 직후가 가장 한적합니다. 여름엔 모기 기피제를 챙기세요.', en: 'Juknokwon is quietest just after nine. In summer, bring mosquito repellent.' }
  },

  /* ---------------------------------------------------------------- ANSEONG */
  {
    id: 'anseong', region: 'capital', emoji: '🍇', tint: '#D9C0F0',
    name: { ko: '안성', en: 'Anseong' },
    sub: { ko: '경기도 안성시', en: 'Anseong, Gyeonggi' },
    tag: { ko: '남사당과 산사, 포도의 고장', en: 'Namsadang players, mountain temples, grapes' },
    intro: {
      ko: '안성은 관광지보다 생활의 도시에 가깝습니다. 그래서 하루가 오히려 편안합니다. 남사당 공연과 오래된 산사, 시내의 객사와 향교를 천천히 도는 코스로 짰어요.',
      en: 'Anseong is more a working town than a tourist town, which is exactly why a day here feels calm: namsadang performance, old mountain temples, and the guest house and Confucian school downtown.'
    },
    seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을 포도', en: 'Autumn grapes' }],
    transport: { ko: '버스 + 택시', en: 'Bus + taxi' },
    duration: { ko: '약 10시간', en: 'About 10 hours' },
    hub: {
      ko: '안성종합버스터미널', en: 'Anseong Bus Terminal', q: '안성종합버스터미널',
      note: { ko: '서울 강남에서 1시간 10분. 터미널에서 시내까지 버스로 10분, 산사까지는 30분쯤 걸립니다.', en: 'Seventy minutes from Gangnam. Ten minutes by bus into town, half an hour to the temples.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '객사에서 남사당 공연까지', en: 'From the old guest house to a namsadang performance' },
      meta: { ko: '7곳 · 약 10시간 · 버스 4회', en: '7 stops · about 10 hours · 4 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '안성종합버스터미널', en: 'Anseong Bus Terminal' }, q: '안성종합버스터미널', move: { ko: '출발', en: 'Start' },
          desc: { ko: '터미널에서 시내 방면 버스로. 짐은 보관함에 맡기고 가볍게 움직이세요.', en: 'A town bus from the terminal. Leave the bag in a locker and travel light.' } },
        { phase: 'morning', time: '09:20', name: { ko: '안성객사', en: 'Anseong Gaegsa' }, q: '안성객사', move: { ko: '버스 약 10분', en: 'Bus, about 10 min' },
          desc: { ko: '조선 시대 관리가 머물던 숙소. 낮은 담장 너머로 마당과 정청이 한눈에 들어옵니다.', en: 'Where travelling officials once stayed — low walls, an open courtyard, a raised hall.' },
          photo: 'anseong-cover' },
        { phase: 'morning', time: '10:00', name: { ko: '안성향교', en: 'Anseong Hyanggyo' }, q: '안성향교', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
          desc: { ko: '조선의 지방 교육기관. 은행나무 두 그루가 마당을 덮고 있습니다.', en: 'The Joseon local academy, with two ginkgos shading the yard.' },
          photo: 'anseong-p4' },
        { phase: 'morning', time: '10:40', name: { ko: '칠장사', en: 'Chiljangsa Temple' }, q: '칠장사', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
          desc: { ko: '서운산 자락의 오래된 절. 대웅전 앞 계단을 오르면 산이 사방으로 열립니다.', en: 'An old temple on the shoulder of Seounsan — climb the steps and the mountains open around you.' },
          photo: 'anseong-p1' },
        { phase: 'lunch', time: '12:20', name: { ko: '안성 시내', en: 'Anseong town' }, q: '안성시 중앙로', move: { ko: '차 약 30분', en: 'Drive, about 30 min' },
          desc: { ko: '시내로 내려와 점심. 장터 국밥과 한우, 어느 쪽으로 정해도 후회 없습니다.', en: 'Back down for lunch — market gukbap or local beef, either is right.' } },
        { phase: 'afternoon', time: '13:40', name: { ko: '안성맞춤랜드 · 남사당공연장', en: 'Anseong Matchum Land & Namsadang Theatre' }, q: '안성맞춤랜드', move: { ko: '버스 약 25분', en: 'Bus, about 25 min' },
          desc: { ko: '3월부터 11월까지 주말 오후 2시에 남사당 상설공연이 열립니다. 공연이 없는 날은 잔디광장과 야생화단지를 걷는 것으로 충분합니다.', en: 'From March to November the namsadang performs at two on weekends. Without a show, the lawns and wildflower beds are enough.' } },
        { phase: 'afternoon', time: '16:00', name: { ko: '청룡사', en: 'Cheongnyongsa Temple' }, q: '청룡사', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
          desc: { ko: '고즈넉한 산사. 대웅전 뒤로 산 능선이 겹겹이 이어집니다.', en: 'A quiet mountain temple, ridges folding away behind the hall.' },
          photo: 'anseong-p2' },
        { phase: 'evening', time: '17:30', name: { ko: '안성천 · 시내', en: 'Anseongcheon & downtown' }, q: '안성천', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
          desc: { ko: '해 질 무렵 물길을 따라 산책하다가 저녁. 포도 디저트로 하루를 닫습니다.', en: 'Walk the stream at sunset, then dinner, and close the day with something made of grapes.' } },
        { phase: 'return', time: '19:30', name: { ko: '안성종합버스터미널', en: 'Anseong Bus Terminal' }, q: '안성종합버스터미널', move: { ko: '버스 약 10분', en: 'Bus, about 10 min' },
          desc: { ko: '터미널로 돌아와 마무리. 서울행 막차는 21시 전후까지 있습니다.', en: 'Back to the terminal. The last bus to Seoul runs until around nine.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 해장국', en: 'Gukbap · haejang-guk' }, note: { ko: '터미널 근처 국밥집이 아침부터 문을 엽니다.', en: 'The gukbap places near the terminal open early.' } },
      { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥩', dish: { ko: '안성 한우 · 장터국밥', en: 'Anseong hanwoo · market gukbap' }, note: { ko: '안성은 한우로 이름난 곳입니다.', en: 'Anseong is known for its hanwoo beef.' } },
      { slot: { ko: '간식', en: 'Snack' }, emoji: '🍇', dish: { ko: '포도 · 배 · 인삼', en: 'Grapes · pears · ginseng' }, note: { ko: '가을이면 포도, 겨울이면 배.', en: 'Grapes in autumn, pears into winter.' } },
      { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍖', dish: { ko: '한우구이 · 순대국', en: 'Grilled hanwoo · sundae guk' }, note: { ko: '하루의 끝은 불판 위 고기 한 점.', en: 'End the day with beef on the grill.' } }
    ],
    photos: [
      { file: 'anseong-cover', cap: { ko: '안성객사', en: 'Anseong Gaegsa' } },
      { file: 'anseong-p1', cap: { ko: '칠장사 대웅전', en: 'Chiljangsa Temple' } },
      { file: 'anseong-p2', cap: { ko: '청룡사', en: 'Cheongnyongsa Temple' } },
      { file: 'anseong-p3', cap: { ko: '죽주산성', en: 'Jukjusanseong Fortress' } }
    ],
    also: [
      { name: { ko: '안성팜랜드', en: 'Anseong Farmland' }, q: '안성팜랜드', desc: { ko: '목장과 초원, 아이와 함께라면 여기.', en: 'Pasture and meadow — the place to bring children.' } },
      { name: { ko: '죽주산성', en: 'Jukjusanseong' }, q: '죽주산성', desc: { ko: '산성을 따라 걷는 짧은 등산로.', en: 'A short walk along an old mountain fortress.' } },
      { name: { ko: '금광저수지', en: 'Geumgwang Reservoir' }, q: '금광저수지', desc: { ko: '해 질 무렵 물 위로 산이 내려앉는 곳.', en: 'Where the hills settle onto the water at dusk.' } }
    ],
    tip: { ko: '남사당 상설공연은 3~11월 주말 오후 2시입니다. 평일에는 공연이 없으니 일정을 맞춰 보세요.', en: 'The namsadang show runs at 2 p.m. on weekends from March to November — no weekday shows.' }
  }
];
