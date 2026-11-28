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
  { id: 'all',       ko: '전체', ja: 'すべて', zh: '全部',      en: 'All' },
  { id: 'capital',   ko: '수도권', ja: '首都圏', zh: '首都圈',    en: 'Capital' },
  { id: 'gangwon',   ko: '강원', ja: '江原', zh: '江原',      en: 'Gangwon' },
  { id: 'jeolla',    ko: '충청·전라', ja: '忠清・全羅', zh: '忠清·全罗', en: 'Jeolla' },
  { id: 'gyeongsang',ko: '경상', ja: '慶尚', zh: '庆尚',      en: 'Gyeongsang' },
  { id: 'jeju',      ko: '제주', ja: '済州', zh: '济州',      en: 'Jeju' }
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
    findTitle: '어디로, 무엇을 하러 갈까요?',
    findLead: '지역 이름이나 하고 싶은 일을 한 단어로 적어 보세요. 취향 칩을 누르면 그 테마의 코스만 남습니다.',
    findPlaceholder: '지역·테마·키워드 — 예: 바다, 경주, 반려견',
    findTaste: '취향으로 고르기',
    findAll: '전체',
    findClear: '지우기',
    findResult: (c, t) => `도시 ${c}곳 · 테마 ${t}가지가 맞습니다`,
    findTasteOnly: (name, t) => `‘${name}’ 테마 ${t}가지 — 아래 테마 코스에서 골라 보세요`,
    findNone: '맞는 곳이 없습니다. “바다”, “시장”, “한옥”처럼 짧게 써 보세요.',
    findNoneCity: '맞는 도시가 없습니다.',
    findNoneTheme: '맞는 테마가 없습니다.',
    pracTitle: '하루 실용 정보',
    pracMove: '이동',
    pracBudget: '예산 (1인, 어림)',
    pracBack: '귀환',
    pracStops: (n) => `${n}곳 · 당일치기`,
    pracNote: '요금과 운행 시간은 출발지·시기에 따라 달라집니다. 떠나기 전에 한 번 더 확인하세요. 식당·카페 이름은 싣지 않습니다.',
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
    findTitle: 'Where to, and what for?',
    findLead: 'Type a town or the thing you want to do, or press a taste chip to keep only that theme.',
    findPlaceholder: 'Region, theme or keyword — sea, Gyeongju, dogs',
    findTaste: 'Pick by taste',
    findAll: 'All',
    findClear: 'Clear',
    findResult: (c, t) => `${c} cities · ${t} themes match`,
    findTasteOnly: (name, t) => `‘${name}’ — ${t} theme, see the course below`,
    findNone: 'Nothing matched. Try a shorter word such as “sea”, “market” or “hanok”.',
    findNoneCity: 'No city matched.',
    findNoneTheme: 'No theme matched.',
    pracTitle: 'The day at a glance',
    pracMove: 'Getting around',
    pracBudget: 'Budget (per person, rough)',
    pracBack: 'Getting back',
    pracStops: (n) => `${n} stops · one day`,
    pracNote: 'Fares and times vary by where you start and the season — check once before you go. We never list restaurant or café names.',
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
    name: { ko: '서울', ja: 'ソウル', zh: '首尔', en: 'Seoul' },
    sub: { ko: '서울특별시', ja: 'ソウル特別市', zh: '首尔特别市', en: 'Seoul, the capital' },
    tag: { ko: '고궁과 골목, 밤의 스카이라인', ja: '古宮と路地、夜のスカイライン', zh: '古宫、小巷与夜晚的天际线', en: 'Palaces, small alleys, a skyline at night' },
    intro: {
      ko: '하루에 조선의 궁궐과 600년 골목, 그리고 남산의 야경까지 다 볼 수 있는 도시는 서울뿐입니다. 지하철만 타면 동선이 저절로 이어져서, 처음 온 사람도 하루 코스를 놓치지 않고 돌 수 있어요.', ja: '一日に朝鮮の宮殿と600年の路地、そして南山の夜景まで見渡せる都市はソウルだけです。地下鉄に乗ると銅線が自然につながり、初めて来た人も一日コースを逃さずに回れます。', zh: '首尔是唯一一个可以在一天内观赏朝鲜宫殿、600年历史的小巷和南山夜景的城市。只要乘坐地铁，路线就会自动延续，因此即使是初次来访的游客也可以游览路线，不会错过任何一天。',
      en: 'Seoul is the rare capital where a palace, six-hundred-year-old alleys and a mountain-top night view all fit into one day — and the subway lines stitch them together for you.'
    },
    seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }],
    transport: { ko: '도보 + 지하철', ja: '徒歩＋地下鉄', zh: '步行＋地铁', en: 'Walk + subway' },
    duration: { ko: '약 12시간', ja: '約12時間', zh: '约12小时', en: 'About 12 hours' },
    hub: {
      ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station', q: '서울역',
      note: { ko: 'KTX·공항철도·지하철 1·4호선이 한자리에서 만나는 서울의 관문입니다. 짐은 역 안 물품보관함에 맡기고 가볍게 출발하세요.', ja: 'KTX・空港鉄道・地下鉄1・4号線が一堂に会うソウルの関門です。荷物は駅の中の物品保管箱に預け、軽く出発してください。', zh: '这里是通往首尔的门户，KTX、机场铁路、地铁1号线和4号线在此交汇。将行李寄存在车站的储物柜中，然后轻松出发。', en: 'KTX, the airport railroad and subway lines 1 and 4 meet here. Drop your bag in a station locker and travel light.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '경복궁에서 남산 야경까지', ja: '景福宮から南山の夜景まで', zh: '从景福宫到南山夜景', en: 'From Gyeongbokgung to Namsan after dark' },
      meta: { ko: '9곳 · 약 12시간 · 도보 6km', ja: '9ヶ所・約12時間・徒歩6km', zh: '9个地点，约12小时，步行6公里', en: '9 stops · about 12 hours · 6 km on foot' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '1호선으로 종로3가에서 3호선으로 갈아타면 경복궁까지 20분이면 닿습니다.', ja: '1号線で鍾路3街から3号線に乗り換えると景福宮まで20分で到着します。', zh: '如果在1号线钟路3街换乘3号线，20分钟即可到达景福宫。', en: 'Line 1 to Jongno 3-ga, change to Line 3 — Gyeongbokgung is 20 minutes away.' } },
        { phase: 'morning', time: '09:30', name: { ko: '경복궁', ja: '景福宮', zh: '景福宫', en: 'Gyeongbokgung Palace' }, q: '경복궁', move: { ko: '지하철 약 20분', ja: '地下鉄約20分', zh: '乘坐地铁约20分钟', en: 'Subway, about 20 min' },
          desc: { ko: '근정전 마당을 지나 경회루 연못까지 천천히. 10시 수문장 교대식을 보려면 조금 서둘러 들어가세요. 화요일은 휴무입니다.', ja: '勤政殿庭を通り、慶会楼池までゆっくり。 10時の水門場の交代式​​を見るには少し急いで入ってください。火曜日は休業です。', zh: '慢慢穿过勤政殿，到达庆会楼。如果想看10点的卫兵换岗仪式，就早点到吧。每周二休息。', en: 'Walk the Geunjeongjeon courtyard through to the Gyeonghoeru pond. Aim to be inside for the 10 a.m. guard-changing ceremony — the palace is closed on Tuesdays.' },
          photo: 'seoul-cover' },
        { phase: 'morning', time: '11:45', name: { ko: '북촌한옥마을', ja: '北村韓屋村', zh: '北村韩屋村', en: 'Bukchon Hanok Village' }, q: '북촌한옥마을', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '기와지붕이 겹겹이 이어지는 골목. 사람이 사는 동네라 문 앞에서 조용히, 사진은 길에서만 찍는 게 예의입니다.', ja: '瓦屋根が重なり合う路地。人が住む町のドアの前で静かに、写真は道でしか撮らないのが礼儀です。', zh: '一条有着层层瓦顶的小巷。由于是人口密集区，门前保持安静，只在街上拍照是有礼貌的。', en: 'Layers of tiled roofs on a hillside. People live here — keep your voice down by the gates and take pictures from the street.' },
          photo: 'seoul-p2' },
        { phase: 'lunch', time: '12:40', name: { ko: '광장시장', ja: '広場市場', zh: '广藏市场', en: 'Gwangjang Market' }, q: '광장시장', move: { ko: '택시 약 10분 · 버스 15분', ja: 'タクシー約10分・バス15分', zh: '乘坐出租车约10分钟、乘坐巴士约15分钟', en: 'Taxi 10 min · bus 15 min' },
          desc: { ko: '백 년 된 시장의 좁은 통로에서 점심. 자리 잡기 어려우면 조금 돌아 앉아도 금방 자리가 납니다.', ja: '百年の市場の狭い通路でランチ。座りにくい場合は少し回って座ってもすぐに席があります。', zh: '在百年市场的狭窄通道中享用午餐。如果找不到座位，可以稍微转个身，很快就能找到座位。', en: 'Lunch in the narrow aisles of a hundred-year-old market. If the stools are full, walk a loop and something opens up.' },
          photo: 'seoul-p1' },
        { phase: 'afternoon', time: '14:20', name: { ko: '청계천', ja: '清渓川', zh: '清溪川', en: 'Cheonggyecheon Stream' }, q: '청계천', move: { ko: '도보 약 5분', ja: '徒歩約5分', zh: '步行约5分钟', en: 'Walk, about 5 min' },
          desc: { ko: '시장에서 나와 물길을 따라 동쪽으로. 도심 한가운데인데도 발소리가 달라지는 곳입니다.', ja: '市場から出て水道に沿って東へ。都心の真ん中でも足音が変わるところです。', zh: '离开市场，沿着水路向东行驶。尽管身处市中心，脚步声却发生了变化。', en: 'Leave the market and follow the water east. It is the middle of downtown, yet your footsteps change.' },
          photo: 'seoul-p4' },
        { phase: 'afternoon', time: '15:30', name: { ko: '익선동 한옥골목', ja: '益善洞韓屋路地', zh: '益善洞韩屋胡同', en: 'Ikseon-dong Hanok Alleys' }, q: '익선동', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '백 년 된 한옥 사이로 골목이 미로처럼 이어집니다. 커피 한 잔 들고 천천히 헤매기 좋은 동네.', ja: '百年の韓屋の間に路地が迷路のようにつながります。一杯のコーヒーを持ってゆっくりと迷いやすい近所。', zh: '小巷像迷宫一样延伸在百年韩屋之间。一个很棒的街区，适合喝杯咖啡慢慢漫步。', en: 'A maze of alleys between century-old hanok houses — a good place to wander slowly with a coffee.' } },
        { phase: 'evening', time: '17:00', name: { ko: 'N서울타워 · 남산', ja: 'Nソウルタワー・南山', zh: 'N首尔塔·南山', en: 'N Seoul Tower & Namsan' }, q: 'N서울타워', move: { ko: '지하철 + 케이블카 약 30분', ja: '地下鉄+ケーブルカー約30分', zh: '地铁+缆车约30分钟', en: 'Subway + cable car, about 30 min' },
          desc: { ko: '명동역에서 케이블카를 타고 올라가면 해 질 무렵의 서울이 한눈에 들어옵니다. 해가 지고 30분이 가장 예쁩니다.', ja: '明洞駅からケーブルカーに乗って上がると、夕暮れのソウルが一目でわかります。太陽が降り、30分が最もきれいです。', zh: '从明洞站乘坐缆车上去的话，可以看到首尔的日落。日落后30分钟是最美的时候。', en: 'Take the cable car from Myeongdong and the whole city opens below you. The half hour after sunset is the best light.' },
          photo: 'seoul-p3' },
        { phase: 'evening', time: '19:30', name: { ko: '명동', ja: '明洞', zh: '明洞', en: 'Myeongdong' }, q: '명동', move: { ko: '케이블카 + 도보 약 20분', ja: 'ケーブルカー＋徒歩約20分', zh: '缆车+步行约20分钟', en: 'Cable car + walk, about 20 min' },
          desc: { ko: '내려와서 저녁. 골목이 촘촘해서 어디로 들어가도 한 끼는 나옵니다.', ja: '降りて夕方。路地が細かくてどこに入っても一食は出ます。', zh: '下来吃晚饭吧。巷子很窄，无论走到哪里，都能找到吃的。', en: 'Come down for dinner. The alleys are dense — any turn ends in a meal.' } },
        { phase: 'return', time: '21:00', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 4호선 약 5분', ja: '地下鉄4号線約5分', zh: '地铁4号线，约5分钟', en: 'Line 4, about 5 min' },
          desc: { ko: '명동역에서 4호선으로 두 정거장. 막차 전에 여유 있게 돌아옵니다.', ja: '明洞駅から4号線で2駅。終車前に余裕をもって戻ります。', zh: '距4号线明洞站两站。我会在末班车之前回来，还有充足的空闲时间。', en: 'Two stops on Line 4 from Myeongdong — back well before the last train.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '설렁탕 · 북엇국', ja: 'ソルロンタン・北斗', zh: '宣陵汤·北明太鱼汤', en: 'Seolleongtang · dried pollack soup' }, note: { ko: '진한 국물로 하루를 여는 서울식 아침.', ja: '濃いスープで一日を開くソウル朝。', zh: '首尔风格的早餐，以浓郁的汤开始新的一天。', en: 'Seoul opens its day with a deep, milky beef broth.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥘', dish: { ko: '빈대떡 · 육회 · 잔치국수', ja: 'ビン大餅・肉会・ごちそう', zh: 'Bindaetteok、Yukhoe、宴会面', en: 'Bindaetteok · yukhoe · janchi-guksu' }, note: { ko: '시장 안에서 막걸리 한 사발과 함께.', ja: '市場の中でマッコリしたボールで。', zh: '市场里有一碗马格利酒。', en: 'In the market, with a bowl of makgeolli.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🥟', dish: { ko: '호떡 · 붕어빵 · 약과', ja: 'お餅・パンパン・薬科', zh: '烧饼、Bungeobbang、药果', en: 'Hotteok · bungeoppang · yakgwa' }, note: { ko: '겨울 골목에서는 붕어빵 냄새를 따라가세요.', ja: '冬の路地では、パンのにおいをたどってください。', zh: '沿着冬天的小巷追寻bungeoppang的气味。', en: 'In winter, follow the smell of bungeoppang.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍖', dish: { ko: '삼겹살 · 김치찌개 · 평양냉면', ja: 'サムギョプサル・キムチチゲ・平壌冷麺', zh: '五花肉、泡菜炖菜、平壤冷面', en: 'Samgyeopsal · kimchi jjigae · Pyongyang naengmyeon' }, note: { ko: '명동 골목에서 고기 한 점, 또는 차가운 냉면 한 그릇.', ja: '明洞の路地で肉一点、または冷たい冷たい鉢。', zh: '明洞小巷里的一块肉或一碗冷面。', en: 'A slice of pork in a Myeongdong alley, or a cold bowl of naengmyeon.' } }
    ],
    photos: [
      { file: 'seoul-p1', cap: { ko: '광장시장의 빈대떡과 전', ja: '広場市場のビンデ餅と元', zh: '广藏市场的煎饼和煎饼', en: 'Bindaetteok and jeon at Gwangjang Market' } },
      { file: 'seoul-p2', cap: { ko: '북촌의 한옥 골목', ja: '北村の韓屋路地', zh: '北村韩屋胡同', en: 'A hanok alley in Bukchon' } },
      { file: 'seoul-p3', cap: { ko: 'N서울타워에서 본 서울 야경', ja: 'Nソウルタワーから見たソウルの夜景', zh: '从 N 首尔塔看首尔夜景', en: 'Seoul at night, seen from N Seoul Tower' } },
      { file: 'seoul-p4', cap: { ko: '청계천 물길', ja: '清渓川水道', zh: '清溪川水道', en: 'Along the Cheonggyecheon stream' } }
    ],
    also: [
      { name: { ko: '창덕궁 후원', ja: '昌徳宮後援', zh: '昌德宫赞助', en: 'Changdeokgung Secret Garden' }, q: '창덕궁 후원', desc: { ko: '예약제로 돌아보는 조선의 정원. 시간이 남으면 여기로.', ja: '予約制に振り返る朝鮮の庭園。時間が残ったらここに。', zh: '可以预约参观的朝鲜庭园。如果你有时间，就来这里吧。', en: 'A timed-entry royal garden — the best use of a spare hour.' } },
      { name: { ko: '서촌', ja: '西村', zh: '西村', en: 'Seochon' }, q: '서촌', desc: { ko: '경복궁 서쪽, 관광객이 덜 붐비는 골목과 작은 책방.', ja: '景福宮の西、観光客があまり混雑していない路地と小さな本屋。', zh: '景福宫西侧，一条小巷和小书店，游客较少。', en: 'West of the palace: quiet alleys and tiny bookshops.' } },
      { name: { ko: '한강 · 반포', ja: '漢江・珠浦', zh: '汉江·半坡', en: 'Hangang at Banpo' }, q: '반포한강공원', desc: { ko: '저녁에 강바람과 함께 달빛무지개분수(계절 운영).', ja: '夕方に川風と共に月光虹噴水（季節運営）。', zh: '月光彩虹喷泉（季节性开放），傍晚河风徐徐。', en: 'Evening river breeze and the seasonal rainbow fountain.' } }
    ],
    tip: { ko: '경복궁은 화요일에 문을 닫습니다. 한복을 입으면 입장료가 무료예요.', ja: '景福宮は火曜日に休業します。韓服を着ると入場料が無料です。', zh: '景福宫每周二不营业。穿韩服的话免费入场。', en: 'Gyeongbokgung closes on Tuesdays, and entry is free in hanbok.' }
  },

  /* ---------------------------------------------------------------- BUSAN */
  {
    id: 'busan', region: 'gyeongsang', emoji: '🌊', tint: '#7EC8E3',
    name: { ko: '부산', ja: '釜山', zh: '釜山', en: 'Busan' },
    sub: { ko: '부산광역시', ja: '釜山広域市', zh: '釜山广域市', en: 'Busan, the port city' },
    tag: { ko: '언덕 마을과 시장, 밤바다', ja: '丘の町と市場、夜の海', zh: '山坡上的村子、市场与夜海', en: 'Hill villages, fish markets, a night sea' },
    intro: {
      ko: '부산은 걸어서 볼 수 없는 도시처럼 보이지만, 감천에서 영도로, 다시 자갈치로 이어지는 버스 몇 번이면 하루가 꽉 찹니다. 바다를 끼고 도는 동선이라 어디서든 시야가 탁 트여요.', ja: '釜山は歩いて見えない都市のように見えますが、甘川から霊島へ、またチャガルチにつながるバス数回であれば一日がいっぱいです。海を挟んで回る銅線なのでどこでも視界がパノラマです。', zh: '釜山似乎是一个无法步行探索的城市，但从甘川到影岛再返回札嘎其的几趟巴士就可以花上一天的时间。由于路线是环海的，所以无论你在哪里，景色都很清晰。',
      en: 'Busan looks too spread out for one day, but a handful of buses links Gamcheon to Yeongdo and down to Jagalchi. The route hugs the sea, so the view keeps opening.'
    },
    seasons: [{ ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }],
    transport: { ko: '버스 + 도시철도', ja: 'バス＋都市鉄道', zh: '巴士＋地铁', en: 'Bus + metro' },
    duration: { ko: '약 12시간', ja: '約12時間', zh: '约12小时', en: 'About 12 hours' },
    hub: {
      ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station', q: '부산역',
      note: { ko: 'KTX 서울에서 2시간 40분. 역 앞에서 감천행 버스가 바로 서고, 짐 보관함도 넉넉합니다.', ja: 'KTXソウルから2時間40分。駅前から甘川行きのバスがすぐ立ち、荷物預かりもたっぷりです。', zh: '从首尔乘坐 KTX 2小时40分钟。前往甘川市的巴士就停在车站前，并设有充足的行李寄存处。', en: 'Two hours forty from Seoul on KTX. Buses to Gamcheon stop outside, and the lockers are roomy.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '감천에서 광안리 밤바다까지', ja: '甘川から広安里の夜の海まで', zh: '从甘川到广安里夜海', en: 'Gamcheon to the Gwangalli night sea' },
      meta: { ko: '8곳 · 약 12시간 · 버스 5회', ja: '8か所・約12時間・バス5回', zh: '8个地点，约12小时，5辆巴士', en: '8 stops · about 12 hours · 5 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station' }, q: '부산역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '역 앞 정류장에서 감천문화마을행 버스로. 택시로 가면 20분, 요금도 얼마 안 됩니다.', ja: '駅前停留所から甘川文化村行きバスで。タクシーで行けば20分、料金もわずかです。', zh: '在车站前乘坐开往甘川文化村的巴士。打车20分钟，车费不多。', en: 'Catch a Gamcheon bus outside the station, or take a short taxi — about 20 minutes.' } },
        { phase: 'morning', time: '09:20', name: { ko: '감천문화마을', ja: '甘川文化村', zh: '甘川文化村', en: 'Gamcheon Culture Village' }, q: '감천문화마을', move: { ko: '버스·택시 약 20분', ja: 'バス・タクシー約20分', zh: '巴士/出租车约20分钟', en: 'Bus or taxi, about 20 min' },
          desc: { ko: '산비탈에 색색의 집이 층층이 쌓인 마을. 골목이 좁고 계단이 많으니 가벼운 신발로 오세요.', ja: '山坂に色の家が階層がたまった町。路地が狭くて階段が多いので、軽い靴でお越しください。', zh: '一个村庄，色彩缤纷的房子堆积在山腰上。小巷狭窄，楼梯较多，请穿轻便的鞋子。', en: 'Colourful houses stacked up a hillside. Narrow lanes and many stairs — wear light shoes.' },
          photo: 'busan-p1' },
        { phase: 'morning', time: '11:10', name: { ko: '흰여울문화마을', ja: '白瀬文化村', zh: '休尼耶尔文化村', en: 'Huinnyeoul Culture Village' }, q: '흰여울문화마을', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '영도 절벽 아래 바다를 따라 이어지는 길. 파도 소리가 계속 따라옵니다.', ja: '霊島の崖の下の海に沿って続く道。波の音が続きます。', zh: '影岛悬崖下沿着大海延伸的道路。海浪声继续响起。', en: 'A path under the Yeongdo cliffs, with the sea running alongside the whole way.' },
          photo: 'busan-p4' },
        { phase: 'lunch', time: '12:30', name: { ko: '자갈치시장', ja: 'チャガルチ市場', zh: '札嘎其市场', en: 'Jagalchi Market' }, q: '자갈치시장', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
          desc: { ko: '전국에서 올라온 생선이 좌판에 깔리는 곳. 위층 식당가에서 바로 회를 떠 먹을 수 있습니다.', ja: '全国から上がった魚が座板に敷かれるところ。上階のレストランですぐに会を浮かべることができます。', zh: '摊位上摆放着来自全国各地的鱼。您可以在楼上的餐厅吃生鱼。', en: 'Fish from every coast laid out on the stalls. Upstairs they slice it for you on the spot.' },
          photo: 'busan-p2' },
        { phase: 'afternoon', time: '14:00', name: { ko: '국제시장 · 부평깡통시장', ja: '国際市場・富平缶市場', zh: '国际市场·富平康通市场', en: 'Gukje & Bupyeong Kkangtong Market' }, q: '국제시장', move: { ko: '도보 약 8분', ja: '徒歩約8分', zh: '步行约8分钟', en: 'Walk, about 8 min' },
          desc: { ko: '전쟁 뒤 장사꾼들이 모여 만든 시장. 골목마다 다른 냄새가 나서 걷는 재미가 있습니다.', ja: '戦争後、商人が集まって作った市場。路地ごとに異なる匂いがして歩くのが楽しいです。', zh: '战后由商人创建的市场。每条巷子都有不同的气味，走起来很有趣。', en: 'A market that grew out of the years after the war — every alley smells different.' } },
        { phase: 'afternoon', time: '15:20', name: { ko: '용두산공원 · 부산타워', ja: '龍頭山公園・釜山タワー', zh: '龙头山公园·釜山塔', en: 'Yongdusan Park & Busan Tower' }, q: '용두산공원', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '에스컬레이터로 올라가면 항구가 한눈에. 잠깐 앉아 쉬기 좋은 언덕입니다.', ja: 'エスカレーターに上がると港が一目で。ちょっと座りやすい休憩です。', zh: '乘自动扶梯上去，一眼就能看到港口。这是一个很好的山丘，可以坐下来休息一会儿。', en: 'An escalator up, and the whole harbour opens. A good hill to sit down on for a while.' } },
        { phase: 'evening', time: '16:30', name: { ko: '광안리 해변', ja: '広安里ビーチ', zh: '广安里海水浴场', en: 'Gwangalli Beach' }, q: '광안리해수욕장', move: { ko: '도시철도 + 버스 약 35분', ja: '都市鉄道＋バス約35分', zh: '城铁+公交车约35分钟', en: 'Metro + bus, about 35 min' },
          desc: { ko: '모래사장 너머로 광안대교가 통째로 보입니다. 해 질 때 도착하면 낮과 밤을 한 번에.', ja: '砂浜を越えて広安大橋が丸ごと見えます。なると到着したら昼と夜を一度に。', zh: '在沙滩之外可以看到广安大桥的全貌。如果您在日落时到达，您可以同时享受白天和黑夜。', en: 'The whole Gwangandaegyo bridge sits beyond the sand. Arrive at sunset and you get both versions.' },
          photo: 'busan-p3' },
        { phase: 'evening', time: '18:30', name: { ko: '광안리 저녁', ja: '広安里夜', zh: '广安里之夜', en: 'Dinner at Gwangalli' }, q: '광안리해수욕장', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
          desc: { ko: '바다를 보며 회 한 접시, 조개구이 한 상. 20시에는 다리 불빛이 다 들어옵니다.', ja: '海を見ながら回した皿、貝殻が一枚。 20時には足の光がすべて入ってきます。', zh: '一边看着大海，一边吃着一盘生鱼和烤蛤蜊。 20:00，所有桥灯亮起。', en: 'Sashimi or grilled shellfish with the sea in front of you. By 8 p.m. the bridge is fully lit.' } },
        { phase: 'return', time: '21:00', name: { ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station' }, q: '부산역', move: { ko: '도시철도 약 40분', ja: '都市鉄道約40分', zh: '乘坐城铁约40分钟', en: 'Metro, about 40 min' },
          desc: { ko: '2호선에서 1호선으로 한 번 갈아타면 부산역. 막차 시간만 확인하세요.', ja: '2号線から1号線に一度乗り換えると釜山駅。最後の時間だけを確認してください。', zh: '从2号线换乘1号线即可到达釜山站。只要查一下末班车时间就可以了。', en: 'Line 2 to Line 1, one change, and you are back. Just check the last train.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍚', dish: { ko: '돼지국밥', ja: '豚クッパ', zh: '猪肉汤和米饭', en: 'Dwaeji gukbap (pork rice soup)' }, note: { ko: '부산 사람은 아침부터 국밥입니다. 새벽부터 여는 집이 많아요.', ja: '釜山の人は朝からクッパです。夜明けから開く家が多いです。', zh: '釜山人早餐喝汤。有很多房子从一大早就开门营业。', en: 'Busan starts the day with pork soup — many places open before dawn.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '밀면 · 회', ja: '押し面・回', zh: '米尔面·生鱼片', en: 'Milmyeon · raw fish' }, note: { ko: '차가운 밀면 한 그릇, 시장에서 회 한 접시.', ja: '冷たいふわふわのボウル、市場で回した皿。', zh: '一碗冷面和一盘从市场买来的生鱼。', en: 'A cold bowl of milmyeon, a plate of fish from the market.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🥐', dish: { ko: '씨앗호떡 · 어묵', ja: '種子餅・おまけ', zh: '种子火锅·鱼饼', en: 'Seed hotteok · fish cake' }, note: { ko: '시장 골목에서 갓 튀긴 것부터.', ja: '市場の路地で揚げたばかりから。', zh: '来自市场小巷的新鲜油炸食品。', en: 'Straight from the fryer in the market alleys.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🦐', dish: { ko: '조개구이 · 회 · 물회', ja: '貝焼き・会・水会', zh: '烤蛤蜊、生鱼片、生鱼片', en: 'Grilled shellfish · sashimi · mulhoe' }, note: { ko: '광안리 바닷가에서, 다리 불빛과 함께.', ja: '広安里浜で、橋の光と。', zh: '广安里海水浴场，桥上的灯光。', en: 'On Gwangalli beach, with the bridge lit up.' } }
    ],
    photos: [
      { file: 'busan-p1', cap: { ko: '감천문화마을', ja: '甘川文化村', zh: '甘川文化村', en: 'Gamcheon Culture Village' } },
      { file: 'busan-p2', cap: { ko: '자갈치시장의 해산물', ja: 'チャガルチ市場のシーフード', zh: '札嘎其市场的海鲜', en: 'Seafood at Jagalchi Market' } },
      { file: 'busan-p3', cap: { ko: '광안대교 야경', ja: '広安大橋の夜景', zh: '广安大桥夜景', en: 'Gwangandaegyo at night' } },
      { file: 'busan-p4', cap: { ko: '흰여울문화마을의 바다길', ja: '白瀬文化村の海道', zh: 'Huinnyeoul文化村的海上之路', en: 'The sea path at Huinnyeoul' } }
    ],
    also: [
      { name: { ko: '태종대', ja: '太宗大学', zh: '太宗台', en: 'Taejongdae' }, q: '태종대', desc: { ko: '절벽 위 산책로에서 남해가 탁 트입니다.', ja: '崖の上の遊歩道から南海がパノラマです。', zh: '从悬崖顶的步道上可以看到南海。', en: 'Cliff-top paths with the southern sea wide open.' } },
      { name: { ko: '해운대 · 동백섬', ja: '海雲台・椿島', zh: '海云台·冬柏岛', en: 'Haeundae & Dongbaekseom' }, q: '해운대해수욕장', desc: { ko: '모래사장과 마린시티 스카이라인.', ja: '砂浜とマリンシティのスカイライン。', zh: '沙滩和海洋城市天际线。', en: 'Beach sand against the Marine City skyline.' } },
      { name: { ko: '송정해수욕장', ja: '松井海水浴場', zh: '松亭海滩', en: 'Songjeong Beach' }, q: '송정해수욕장', desc: { ko: '서핑하는 사람들로 가득한 조용한 해변.', ja: 'サーフィンする人でいっぱいの静かなビーチ。', zh: '安静的海滩挤满了冲浪者。', en: 'A quieter beach full of surfers.' } }
    ],
    tip: { ko: '감천문화마을은 주민이 사는 곳입니다. 문 앞에서는 조용히, 쓰레기는 가지고 나오세요.', ja: '甘川文化村は住民が住む場所です。ドアの前では静かに、ゴミは持ってきてください。', zh: '甘川文化村是居民居住的地方。请在门口保持安静，并将垃圾倒掉。', en: 'People live in Gamcheon — keep quiet by the doors and carry your rubbish out.' }
  },

  /* ----------------------------------------------------------------- JEJU */
  {
    id: 'jeju', region: 'jeju', emoji: '🍊', tint: '#FFC46B',
    name: { ko: '제주', ja: '済州', zh: '济州', en: 'Jeju' },
    sub: { ko: '제주특별자치도', ja: '済州特別自治道', zh: '济州特别自治道', en: 'Jeju Island' },
    tag: { ko: '화산과 바다, 한라산', ja: '火山と海、漢拏山', zh: '火山与大海，汉拿山', en: 'Volcano, sea and a mountain in the middle' },
    intro: {
      ko: '제주는 하루에 한 바퀴를 다 돌 수 없습니다. 그래서 동쪽만 골라 잡았어요. 공항에서 성산으로 달려가면 오름과 바다, 시장까지 하루에 담깁니다.', ja: '済州は一日一輪を回すことはできません。それで東だけを選んで捕まえました。空港から城山に走ると、上りと海、市場まで一日に盛り込まれます。', zh: '济州岛一天不可能绕一圈。所以我只选了东边。如果从机场开车到城山，一日之内可以看山、看海、看市场。',
      en: 'You cannot circle Jeju in a day, so this route takes the east. From the airport straight to Seongsan, you get a volcanic cone, the sea and a market before dark.'
    },
    seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울 감귤', ja: '冬の柑橘類', zh: '冬橘', en: 'Winter tangerines' }],
    transport: { ko: '렌터카 권장', ja: 'レンタカー推奨', zh: '建议租车', en: 'Rental car recommended' },
    duration: { ko: '약 11시간', ja: '約11時間', zh: '约11小时', en: 'About 11 hours' },
    hub: {
      ko: '제주국제공항', ja: '済州国際空港', zh: '济州国际机场', en: 'Jeju International Airport', q: '제주국제공항',
      note: { ko: '공항 렌터카 하우스에서 차를 받고 바로 출발합니다. 인수에 30분은 잡아 두세요.', ja: '空港レンタカーハウスから車を受けてすぐに出発します。買収に30分は取っておいてください。', zh: '在机场租车行取车并立即出发。请预留30分钟的时间进行交接。', en: 'Pick up the car at the airport rental house and go. Allow half an hour for the paperwork.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '동쪽 한 바퀴 — 성산에서 동문시장까지', ja: '東をひと回り — 城山から東門市場まで', zh: '绕东边一圈——从城山到东门市场', en: 'The east loop — Seongsan to Dongmun Market' },
      meta: { ko: '7곳 · 약 11시간 · 운전 3시간', ja: '7か所・約11時間・運転3時間', zh: '7个地点，约11小时，车程3小时', en: '7 stops · about 11 hours · 3 hours driving' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '제주국제공항', ja: '済州国際空港', zh: '济州国际机场', en: 'Jeju International Airport' }, q: '제주국제공항', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '렌터카를 받고 번영로를 타고 동쪽으로. 성산까지 신호등이 거의 없습니다.', ja: 'レンタカーを受けて繁栄路に乗って東へ。城山まで信号灯はほとんどありません。', zh: '租一辆车，沿着 Beonying-ro 向东行驶。城山几乎没有红绿灯。', en: 'Pick up the car and take the coast road east — almost no traffic lights to Seongsan.' } },
        { phase: 'morning', time: '10:10', name: { ko: '성산일출봉', ja: '城山日出峰', zh: '城山日出峰', en: 'Seongsan Ilchulbong' }, q: '성산일출봉', move: { ko: '차 약 1시간 10분', ja: '車約1時間10分', zh: '车程约1小时10分钟', en: 'Drive, about 70 min' },
          desc: { ko: '바다에서 솟은 분화구. 정상까지 계단 200여 개, 올라가면 성산 마을과 우도가 내려다보입니다.', ja: '海から湧き出たクレーター。頂上まで階段200余り、上がると城山村と尤度を見渡せます。', zh: '一个从海中升起的火山口。登顶大约有200级台阶，爬上去可以看到城山村和牛岛。', en: 'A crater rising out of the sea. About 200 steps to the rim, with the village and Udo below.' },
          photo: 'jeju-cover' },
        { phase: 'lunch', time: '12:00', name: { ko: '성산 포구', ja: '城山ポーグ', zh: '城山港', en: 'Seongsan harbour' }, q: '성산포구', move: { ko: '차 약 5분', ja: '車約5分', zh: '车程约5分钟', en: 'Drive, about 5 min' },
          desc: { ko: '포구 앞 식당가에서 점심. 바람이 세면 실내 자리를 고르세요.', ja: '砲口の前のレストランでランチ。風が数えたら屋内席を選んでください。', zh: '在港口前的餐厅享用午餐。如果风很大，请选择室内座位。', en: 'Lunch by the harbour. If the wind is up, take a table inside.' } },
        { phase: 'afternoon', time: '13:10', name: { ko: '광치기해변', ja: '狂気のビーチ', zh: '广其吉海滩', en: 'Gwangchigi Beach' }, q: '광치기해변', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '성산일출봉이 물 위에 거꾸로 서는 얕은 해변. 물이 빠지면 검은 현무암이 드러납니다.', ja: '城山日出峰が水の上に逆さまに立つ浅いビーチ。水が落ちると黒玄武岩が現れます。', zh: '城山日出峰倒立在水面上的浅滩。当水退去时，黑色玄武岩显露出来。', en: 'A shallow beach where Seongsan stands upside down in the water. At low tide the black basalt shows.' } },
        { phase: 'afternoon', time: '13:50', name: { ko: '섭지코지', ja: '摂地コージー', zh: '涉地可支', en: 'Seopjikoji' }, q: '섭지코지', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '언덕 끝에 등대가 하나. 바람이 세게 부는 날이 오히려 제주다워요.', ja: '丘の端に灯台が一つ。風が強く吹く日がむしろ済州らしいです。', zh: '山的尽头有一座灯塔。实际上感觉就像是大风天的济州岛。', en: 'One lighthouse at the end of a hill. A windy day is the most Jeju-like day.' } },
        { phase: 'afternoon', time: '15:20', name: { ko: '만장굴', ja: '満場窟', zh: '万丈窟', en: 'Manjanggul Lava Tube' }, q: '만장굴', move: { ko: '차 약 30분', ja: '車約30分', zh: '车程约30分钟', en: 'Drive, about 30 min' },
          desc: { ko: '용암이 흐르던 동굴 안은 여름에도 서늘합니다. 긴팔 하나 챙기세요.', ja: '溶岩が流れる洞窟の中は夏でも涼しい。長袖ひとつ取ります。', zh: '熔岩流淌的洞内即使在夏天也很凉爽。带上长袖。', en: 'The lava tube stays cool even in summer — bring a light layer.' } },
        { phase: 'evening', time: '16:50', name: { ko: '동문시장', ja: '東門市場', zh: '东门市场', en: 'Dongmun Market' }, q: '동문시장', move: { ko: '차 약 40분', ja: '車約40分', zh: '车程约40分钟', en: 'Drive, about 40 min' },
          desc: { ko: '제주 시내의 큰 시장. 저녁에는 야시장이 열려 한 바퀴만 돌아도 배가 부릅니다.', ja: '済州市の大きな市場。夜はナイトマーケットが開かれて一輪だけ回っても船が呼びます。', zh: '济州岛市中心的一个大型市场。晚上还有夜市，逛逛就能填饱肚子。', en: 'The big market in Jeju City. In the evening the night market opens — one lap and you are full.' },
          photo: 'jeju-p3' },
        { phase: 'return', time: '20:00', name: { ko: '제주국제공항', ja: '済州国際空港', zh: '济州国际机场', en: 'Jeju International Airport' }, q: '제주국제공항', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '차를 반납하고 공항으로. 주유소는 공항 근처에 미리 들르세요.', ja: '車を返却し、空港に。ガソリンスタンドは空港近くに事前に立ち寄ってください。', zh: '还车并前往机场。提前停在机场附近的加油站。', en: 'Return the car and walk in. Fill up at a station near the airport first.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '전복죽 · 몸국', ja: 'アワビ粥・体国', zh: '鲍鱼粥·身体汤', en: 'Abalone porridge · momguk' }, note: { ko: '제주식 해장은 돼지고기와 메밀가루를 푼 몸국.', ja: '済州式海賊は豚肉とそば粉を解いた体国。', zh: '济州式解酒汤是一种用猪肉和荞麦粉制成的身体汤。', en: 'The island hangover cure is momguk — pork and buckwheat.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '고기국수 · 물회', ja: '肉麺・水会', zh: '肉面、生鱼汤', en: 'Gogi-guksu · mulhoe' }, note: { ko: '진한 돼지 육수에 국수, 더우면 차가운 물회.', ja: '濃い豚のスープに麺、さらに冷たい水会。', zh: '浓郁的猪肉汤面条，如果天气热的话可以冷生生鱼。', en: 'Noodles in rich pork broth; when it is hot, cold mulhoe.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍊', dish: { ko: '감귤 · 오메기떡', ja: '柑橘・オメギ餅', zh: '橘子·Omegi 年糕', en: 'Tangerines · omegi rice cake' }, note: { ko: '겨울이면 감귤, 사계절 내내 오메기떡.', ja: '冬なら柑橘系、四季を通してオメギ餅。', zh: '冬天有橘子，一年四季都有梅糕。', en: 'Tangerines in winter, omegi rice cake all year.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🐖', dish: { ko: '흑돼지 · 갈치구이', ja: '黒豚・たまご焼き', zh: '烤黑猪肉和带鱼', en: 'Black pork · grilled hairtail' }, note: { ko: '불판 위에 두툼한 흑돼지 한 점.', ja: '不判の上に厚い黒豚一点。', zh: '烤架上放着一块厚厚的黑猪肉。', en: 'A thick slice of black pork on the grill.' } }
    ],
    photos: [
      { file: 'jeju-p1', cap: { ko: '우도 해변', ja: 'ウドビーチ', zh: '牛岛海滩', en: 'Udo Island beach' } },
      { file: 'jeju-p2', cap: { ko: '대포 주상절리', ja: '大砲柱状節理', zh: '大浦柱状节理', en: 'Daepo Jusangjeolli columns' } },
      { file: 'jeju-p3', cap: { ko: '동문시장 골목', ja: '東門市場路地', zh: '东门市场胡同', en: 'Dongmun Market' } },
      { file: 'jeju-p4', cap: { ko: '한라산 능선', ja: '漢拏山尾根', zh: '汉拿山岭', en: 'The Hallasan ridge' } }
    ],
    also: [
      { name: { ko: '우도', ja: 'ウド', zh: '乌多', en: 'Udo' }, q: '우도', desc: { ko: '배로 15분, 섬 전체를 자전거로 도는 하루.', ja: '船で15分、島全体を自転車で回る一日。', zh: '乘船15分钟，骑自行车环岛一周。', en: 'Fifteen minutes by ferry; a whole island by bicycle.' } },
      { name: { ko: '비자림', ja: 'ビザリム', zh: '榧子林', en: 'Bijarim Forest' }, q: '비자림', desc: { ko: '천 년 된 비자나무가 이어지는 숲길.', ja: '千年のビザの木が続く森の道。', zh: '一条林间小路，两旁种满了千年肉豆蔻树。', en: 'A path through thousand-year-old nutmeg trees.' } },
      { name: { ko: '협재해변', ja: 'ヒョプジェビーチ', zh: '挟才海水浴场', en: 'Hyeopjae Beach' }, q: '협재해변', desc: { ko: '서쪽의 옥빛 바다와 비양도.', ja: '西の翡翠の海と飛び道。', zh: '西边是玉海和碧阳岛。', en: 'The west coast turquoise, with Biyangdo on the horizon.' } }
    ],
    tip: { ko: '만장굴은 매달 첫 수요일에 쉬고, 렌터카는 미리 예약해야 합니다.', ja: '満場牡蠣は毎月最初の水曜日に休み、レンタカーは事前に予約する必要があります。', zh: '万丈窟每月第一个星期三关闭，租车必须提前预订。', en: 'Manjanggul closes on the first Wednesday of each month; book the car ahead.' }
  },

  /* -------------------------------------------------------------- GYEONGJU */
  {
    id: 'gyeongju', region: 'gyeongsang', emoji: '🏛️', tint: '#C9B6F5',
    name: { ko: '경주', ja: '慶州', zh: '庆州', en: 'Gyeongju' },
    sub: { ko: '경상북도 경주시', ja: '慶尚北道慶州市', zh: '庆尚北道庆州市', en: 'Gyeongju, ancient Silla capital' },
    tag: { ko: '천 년 고도, 밤에 더 예쁜 도시', ja: '千年の古都、夜がいっそう美しい街', zh: '千年古都，夜晚更美的城市', en: 'A thousand-year capital, better after dark' },
    intro: {
      ko: '경주는 유적이 도시 안에 그대로 놓여 있습니다. 터미널에서 걸어 나오면 바로 고분이 나오고, 해가 지면 동궁과 월지가 물 위에 불을 켭니다.', ja: '慶州は遺跡が街の中に置かれています。ターミナルから歩くとすぐに古墳が出て、日が沈むと東宮と月池が水の上に火をつけます。', zh: '在庆州，城内的遗迹完好无损。一走出客运站，就能看到古墓，夕阳西下时，东宫和月池在水面上闪闪发亮。',
      en: 'In Gyeongju the ruins are simply part of the town: step out of the terminal and the tombs begin. After dark, Donggung Palace lights up over its pond.'
    },
    seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }],
    transport: { ko: '도보 + 시내버스', ja: '徒歩＋市内バス', zh: '步行＋市内公交', en: 'Walking + city bus' },
    duration: { ko: '약 11시간', ja: '約11時間', zh: '约11小时', en: 'About 11 hours' },
    hub: {
      ko: '경주고속버스터미널', ja: '慶州高速バスターミナル', zh: '庆州高速巴士客运站', en: 'Gyeongju Express Bus Terminal', q: '경주고속버스터미널',
      note: { ko: '시내 한복판에 있어서 대릉원까지 걸어서 10분. KTX를 타면 시내와 먼 신경주역에 내리니 주의하세요.', ja: '市内の真ん中で大陵園まで徒歩10分。 KTXに乗ると、市内と遠い神経主駅に降りるので注意してください。', zh: '它位于市中心，所以步行10分钟即可到达大陵苑。如果您乘坐KTX，请小心，因为您将在距离市中心较远的新庆州站下车。', en: 'Right downtown — ten minutes on foot to Daereungwon. Note the KTX station sits far outside town.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '천년 고도 하루 — 고분에서 야경까지', ja: '千年の古都の一日 — 古墳から夜景まで', zh: '千年古都的一天——从古坟到夜景', en: 'A day in the old capital — tombs to night lights' },
      meta: { ko: '8곳 · 약 11시간 · 시내버스 4회', ja: '8か所・約11時間・市内バス4回', zh: '8个地点，约11小时，4辆城市公交车', en: '8 stops · about 11 hours · 4 bus hops' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '경주고속버스터미널', ja: '慶州高速バスターミナル', zh: '庆州高速巴士客运站', en: 'Gyeongju Express Bus Terminal' }, q: '경주고속버스터미널', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '터미널을 나와 왼쪽으로 조금만 걸으면 고분군이 시작됩니다. 모든 시내버스가 여기서 출발해요.', ja: 'ターミナルを出て左に少し歩くと古墳群が始まります。すべての市内バスがここから出発します。', zh: '出了客运站，往左走一点，就到了古墓群。所有城市公交车都从这里出发。', en: 'Walk out and left — the tombs begin in a few minutes. Every city bus starts from here.' } },
        { phase: 'morning', time: '09:15', name: { ko: '대릉원 · 천마총', ja: '大陵園・天馬銃', zh: '大陵苑和天马冢', en: 'Daereungwon & Cheonmachong' }, q: '대릉원', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '신라 왕들의 봉분이 잔디로 덮여 이어집니다. 천마총 안으로 들어가 보면 무덤 구조가 그대로 보입니다.', ja: '新羅王たちの封分が草で覆われて続く。天馬銃の中に入ってみると墓構造がそのまま見えます。', zh: '新罗国王的坟墓上长满了青草。如果进入天马冢古墓内部，就能看到古墓的结构。', en: 'Silla royal mounds under grass, one after another. Step inside Cheonmachong to see the tomb itself.' },
          photo: 'gyeongju-p3' },
        { phase: 'morning', time: '10:00', name: { ko: '첨성대', ja: '瞻星台', zh: '瞻星台', en: 'Cheomseongdae' }, q: '첨성대', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '선덕여왕 때 세운 천문대. 돌 362개가 1년의 날짜를 담았다는 이야기가 있습니다.', ja: '善徳女王の時に建てた天文台。石362個が1年の日付を盛り込んだという話があります。', zh: '善德王后时期建造的天文台。有一个故事说，362块石头上有一年的日期。', en: 'A seventh-century observatory — 362 stones, one for each day, the story goes.' },
          photo: 'gyeongju-p2' },
        { phase: 'morning', time: '10:40', name: { ko: '국립경주박물관', ja: '国立慶州博物館', zh: '国立庆州博物馆', en: 'Gyeongju National Museum' }, q: '국립경주박물관', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '성덕대왕신종과 금관이 한자리에. 실내라 잠깐 더위를 피하기도 좋습니다.', ja: '城徳大王神宗と金管が一堂に。屋内なので、しばらく暑さを避けるのも良いです。', zh: '圣德大王神钟和金冠在一处。由于是在室内，所以是避暑的好地方。', en: 'The Emille Bell and gold crowns in one place — and a cool indoor pause.' } },
        { phase: 'lunch', time: '12:00', name: { ko: '황리단길', ja: 'ファンリダンギル', zh: '黄里团路', en: 'Hwangnidan-gil' }, q: '황리단길', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '한옥을 고쳐 만든 작은 가게가 늘어선 골목. 점심을 여기서 먹고 잠깐 쉬어 갑니다.', ja: '韓屋を直して作った小さなお店が並ぶ路地。ランチをここで食べてしばらく休んでいきます。', zh: '一条小巷，两旁都是用韩屋改造而成的小商店。我们将在这里吃午餐并短暂休息。', en: 'A street of small shops in old hanok houses — lunch and a short rest here.' } },
        { phase: 'afternoon', time: '13:20', name: { ko: '불국사', ja: '仏国寺', zh: '佛国寺', en: 'Bulguksa Temple' }, q: '불국사', move: { ko: '버스 약 30분', ja: 'バス約30分', zh: '巴士约30分钟', en: 'Bus, about 30 min' },
          desc: { ko: '청운교와 백운교, 다보탑과 석가탑. 사진보다 실제 계단이 훨씬 가파릅니다.', ja: '青雲橋と白雲橋、ダボ塔と石家塔。写真よりも実際の階段がはるかに急になります。', zh: '青云桥、白云桥、多宝塔、石甲塔。实际的楼梯比照片上的陡得多。', en: 'The stone bridges, Dabotap and Seokgatap. The stairways are far steeper than they look.' },
          photo: 'gyeongju-p1' },
        { phase: 'afternoon', time: '15:00', name: { ko: '석굴암', ja: '石窟岩', zh: '石窟庵', en: 'Seokguram Grotto' }, q: '석굴암', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
          desc: { ko: '산 위 동굴 안의 본존불. 안쪽은 사진 촬영이 안 되니 눈으로 오래 보세요.', ja: '山の上の洞窟の中の本尊火。内側は写真撮影ができないので目で長く見てください。', zh: '主佛在山上的一个洞窟里。里面不可以拍照，所以要长长看看。', en: 'The Buddha in a mountain grotto. No photos inside — give it time instead.' },
          photo: 'gyeongju-p4' },
        { phase: 'evening', time: '17:40', name: { ko: '동궁과 월지', ja: '東宮と月池', zh: '东宫和月池', en: 'Donggung Palace & Wolji Pond' }, q: '동궁과 월지', move: { ko: '버스 약 30분', ja: 'バス約30分', zh: '巴士约30分钟', en: 'Bus, about 30 min' },
          desc: { ko: '해가 지고 조명이 들어오면 물 위에 궁이 하나 더 생깁니다. 이 코스의 하이라이트.', ja: '太陽が出て照明が入ると、水の上に弓がもう1つあります。このコースのハイライト。', zh: '当夕阳西下，华灯初上时，水面上又出现了一座宫殿。本课程的亮点。', en: 'When the lights come on, a second palace appears in the water. The highlight of the day.' },
          photo: 'gyeongju-cover' },
        { phase: 'evening', time: '19:30', name: { ko: '경주 시내 저녁', ja: '慶州市の夜', zh: '庆州市中心的傍晚', en: 'Dinner downtown' }, q: '황리단길', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
          desc: { ko: '시내로 돌아와 저녁. 시장 골목은 늦게까지 불이 켜져 있습니다.', ja: 'ダウンタウンに戻って夕方。市場の路地は遅くまで点灯しています。', zh: '晚餐回城。市场小巷灯火通明直至深夜。', en: 'Back downtown for dinner — the market alleys stay lit late.' } },
        { phase: 'return', time: '20:40', name: { ko: '경주고속버스터미널', ja: '慶州高速バスターミナル', zh: '庆州高速巴士客运站', en: 'Gyeongju Express Bus Terminal' }, q: '경주고속버스터미널', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '터미널까지 걸어서. 막차 시간은 미리 확인해 두세요.', ja: 'ターミナルまで歩いて。終車時間はあらかじめ確認しておいてください。', zh: '步行至客运站。请提前查询末班车时间。', en: 'A ten-minute walk to the terminal. Check the last departure in advance.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 잔치국수', ja: 'クッパ・ごちそう', zh: '汤饭·宴会面', en: 'Gukbap · janchi-guksu' }, note: { ko: '터미널 근처 시장 골목에서 가볍게.', ja: 'ターミナル近くの市場の路地で軽く。', zh: '在客运站附近的市场小巷里悠闲地漫步。', en: 'Something light in the market alleys near the terminal.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥗', dish: { ko: '육회물회 · 한정식', ja: '六回物会・限定式', zh: '玉和水会·韩定食', en: 'Yukhoe mulhoe · hanjeongsik' }, note: { ko: '경주는 육회와 물회를 함께 내는 집이 많습니다.', ja: '慶州は肉会と水会を一緒に出す家が多い。', zh: '庆州有很多既供应生鱼又供应生鱼的餐厅。', en: 'Gyeongju often serves raw beef and cold fish soup in one bowl.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🫘', dish: { ko: '팥빵 · 찰보리빵', ja: '小豆パン・チャールズパン', zh: '红豆面包、糯米面包', en: 'Red bean bread · glutinous barley bread' }, note: { ko: '황남빵 스타일의 팥빵이 이 동네 간식.', ja: '黄南パンスタイルの小豆パンがこの近所のおやつ。', zh: '皇南红豆面包是当地的小吃。', en: 'The local sweet is a Hwangnam-style red bean bun.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍱', dish: { ko: '한정식 · 불고기', ja: '限定食・焼肉', zh: '韩定食·烤肉', en: 'Hanjeongsik · bulgogi' }, note: { ko: '상을 가득 차려 내는 경주 한정식.', ja: '賞を満載の慶州限定式。', zh: '庆州韩定食，奖品满满。', en: 'The Gyeongju table set with a dozen small dishes.' } }
    ],
    photos: [
      { file: 'gyeongju-p1', cap: { ko: '불국사 대웅전', ja: '仏国寺大雄殿', zh: '佛国寺大雄宝殿', en: 'Daeungjeon Hall at Bulguksa' } },
      { file: 'gyeongju-p2', cap: { ko: '첨성대', ja: '瞻星台', zh: '瞻星台', en: 'Cheomseongdae' } },
      { file: 'gyeongju-p3', cap: { ko: '대릉원 고분군', ja: '大陵園古墳郡', zh: '大陵苑古坟群', en: 'The tombs of Daereungwon' } },
      { file: 'gyeongju-p4', cap: { ko: '석굴암 본존불', ja: '石窟岩本尊火', zh: '石窟庵的原始佛像', en: 'The Buddha of Seokguram' } }
    ],
    also: [
      { name: { ko: '월정교', ja: '月精橋', zh: '月精桥', en: 'Woljeonggyo Bridge' }, q: '월정교', desc: { ko: '밤에 불이 들어오는 신라의 다리.', ja: '夜に火が入る新羅の橋。', zh: '新罗桥在夜间亮起灯光。', en: 'A rebuilt Silla bridge, lit at night.' } },
      { name: { ko: '보문호', ja: 'ボムンホ', zh: '普门湖', en: 'Bomun Lake' }, q: '보문호', desc: { ko: '호수를 도는 산책로와 벚나무.', ja: '湖を回る遊歩道と桜。', zh: '环湖和樱花树的步行道。', en: 'A lakeside path under cherry trees.' } },
      { name: { ko: '양동마을', ja: 'バケツ村', zh: '阳东村', en: 'Yangdong Village' }, q: '양동마을', desc: { ko: '조선의 양반 마을이 그대로 남은 곳.', ja: '朝鮮の両班村がそのまま残った所。', zh: '朝鲜贵族村落遗迹所在地。', en: 'A Joseon yangban village, still standing.' } }
    ],
    tip: { ko: '동궁과 월지는 해 진 뒤 30분이 가장 예쁩니다. 입장 마감 시간을 확인하세요.', ja: '東宮とウォルジーは海の後30分が最もきれいです。入場の締め切りを確認してください。', zh: '东宫和月池是日落后30分钟最美的时候。请检查报名截止日期。', en: 'Donggung is best half an hour after sunset — check the last entry time.' }
  },

  /* -------------------------------------------------------------- GANGNEUNG */
  {
    id: 'gangneung', region: 'gangwon', emoji: '☕', tint: '#9BD3C4',
    name: { ko: '강릉', ja: '江陵', zh: '江陵', en: 'Gangneung' },
    sub: { ko: '강원도 강릉시', ja: '江原道江陵市', zh: '江原道江陵市', en: 'Gangneung, on the east coast' },
    tag: { ko: '바다와 커피, 오래된 집', ja: '海とコーヒー、古い家', zh: '大海、咖啡与老屋', en: 'Sea, coffee and old houses' },
    intro: {
      ko: 'KTX로 두 시간이면 바다가 나옵니다. 오죽헌 같은 오래된 집과 경포호, 안목의 커피거리를 한 줄로 이으면 강릉의 하루가 됩니다.', ja: 'KTXで2時間で海が出ます。オ・ジュクホンのような古い家や慶浦湖、目のコーヒーの通りを一列にすると江陵の一日になります。', zh: '乘坐KTX 两个小时即可到达海边。如果把乌竹轩、镜浦湖、安木咖啡街等老房子排列起来，那就成了江陵的一天。',
      en: 'Two hours on the KTX and the sea appears. Line up the old houses, Gyeongpo lake and the coffee street at Anmok, and you have Gangneung in a day.'
    },
    seasons: [{ ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '겨울 커피', ja: '冬のコーヒー', zh: '冬季咖啡', en: 'Winter coffee' }, { ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }],
    transport: { ko: '버스 + 택시', ja: 'バス＋タクシー', zh: '巴士＋出租车', en: 'Bus + taxi' },
    duration: { ko: '약 11시간', ja: '約11時間', zh: '约11小时', en: 'About 11 hours' },
    hub: {
      ko: '강릉역', ja: '江陵駅', zh: '江陵站', en: 'Gangneung Station (KTX)', q: '강릉역',
      note: { ko: '서울 청량리에서 KTX로 1시간 50분. 역에서 오죽헌까지 버스로 15분입니다.', ja: 'ソウル清涼里からKTXで1時間50分。駅からオジュンホンまでバスで15分です。', zh: '从首尔清凉里乘坐KTX 1小时50分钟。从车站乘坐巴士到乌竹轩需要15分钟。', en: 'Under two hours from Cheongnyangni. Ojukheon is a 15-minute bus ride from the station.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '오죽헌에서 강문 바다까지', ja: 'オ・ジュクホンから江門海まで', zh: '从乌竹轩到江门海', en: 'Ojukheon to the Gangmun sea' },
      meta: { ko: '8곳 · 약 11시간 · 버스 4회', ja: '8か所・約11時間・バス4回', zh: '8个地点，约11小时，4辆巴士', en: '8 stops · about 11 hours · 4 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '강릉역', ja: '江陵駅', zh: '江陵站', en: 'Gangneung Station' }, q: '강릉역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '역 앞 버스정류장에서 오죽헌 방면 버스로. 짐은 역 물품보관함에 두고 다니면 편합니다.', ja: '駅前のバス停からオシュクホン方面バスへ。荷物は駅物品保管箱に置いて通えば楽です。', zh: '从车站前的巴士站乘坐前往乌竹轩方向的巴士。把行李寄存在车站的储物柜里很方便。', en: 'A bus to Ojukheon leaves from outside the station. Leave bags in the station lockers.' } },
        { phase: 'morning', time: '09:20', name: { ko: '오죽헌', ja: 'ヒョンホン', zh: '乌竹轩', en: 'Ojukheon House' }, q: '오죽헌', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
          desc: { ko: '신사임당이 율곡 이이를 키운 집. 마당의 오죽(검은 대나무)이 이름의 유래입니다.', ja: '神社任堂が渓谷イ・イを育てた家。庭のごちそう（黒竹）が名前の由来です。', zh: '申师任堂养育栗谷一世的房子。这个名字来源于院子里的乌竹。', en: 'Where Shin Saimdang raised Yulgok Yi I. The black bamboo in the garden gave the house its name.' },
          photo: 'gangneung-p1' },
        { phase: 'morning', time: '10:30', name: { ko: '선교장', ja: '宣教長', zh: '船桥庄', en: 'Seongyojang House' }, q: '선교장', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '연못을 품은 조선 시대 양반 저택. 마루에 앉아 있으면 시간이 느려집니다.', ja: '池を抱く朝鮮時代の両班屋敷。床に座ると時間が遅くなります。', zh: '朝鲜王朝贵族住宅，有池塘。当你坐在地板上时，时间就会变慢。', en: 'A Joseon noble house with its own pond. Sit on the wooden veranda and time slows down.' },
          photo: 'gangneung-p3' },
        { phase: 'lunch', time: '12:00', name: { ko: '초당동', ja: 'スンドンドン', zh: '草堂洞', en: 'Chodang-dong' }, q: '초당동', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '바닷물로 간수를 낸 순두부의 고장. 점심은 여기서 정합니다.', ja: '海水で看水を出したスンドゥブの故障。ランチはここで決めます。', zh: '用海水焯过的软豆腐的故乡。午餐就在这里决定了。', en: 'The home of soft tofu set with sea water — lunch is decided here.' } },
        { phase: 'afternoon', time: '13:20', name: { ko: '경포호', ja: '鏡浦ホ', zh: '镜浦湖', en: 'Gyeongpo Lake' }, q: '경포호', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '호수와 바다가 나란히 있는 드문 풍경. 둘레길은 자전거로도 좋습니다.', ja: '湖と海が並ぶ珍しい風景。周りの道は自転車としても良いです。', zh: '湖与海并肩的罕见景观。这条小路也适合骑自行车。', en: 'A lake running beside the sea — rare enough to remember. The loop is good by bike.' },
          photo: 'gangneung-cover' },
        { phase: 'afternoon', time: '14:20', name: { ko: '경포해변', ja: '鏡浦ビーチ', zh: '镜浦海水浴场', en: 'Gyeongpo Beach' }, q: '경포해변', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '모래가 곱고 수심이 얕아 가족 단위가 많습니다. 여름엔 파라솔이 빼곡해요.', ja: '砂が大きく、水深が浅く、家族単位が多い。夏にはパラソルが抜けます。', zh: '沙细水浅，所以这里的家庭很多。夏天有很多遮阳伞。', en: 'Fine sand and shallow water, full of families. In summer the parasols fill every gap.' },
          photo: 'gangneung-p4' },
        { phase: 'afternoon', time: '15:20', name: { ko: '안목해변 커피거리', ja: '目のビーチのコーヒー通り', zh: '安木海滩咖啡街', en: 'Anmok Beach coffee street' }, q: '안목해변', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '바다를 통째로 창에 담은 카페들이 늘어서 있습니다. 커피 한 잔에 한 시간쯤.', ja: '海を丸ごと窓に入れたカフェが並んでいます。コーヒー1杯に1時間ほど。', zh: '许多咖啡馆的窗户都可以看到海景。喝杯咖啡大约一个小时。', en: 'Cafés with the whole sea in the window. An hour goes by with one cup.' },
          photo: 'gangneung-p2' },
        { phase: 'evening', time: '17:00', name: { ko: '강릉중앙시장', ja: '江陵中央市場', zh: '江陵中央市场', en: 'Gangneung Jungang Market' }, q: '강릉중앙시장', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
          desc: { ko: '간식은 여기서. 닭강정과 감자옹심이, 회는 저녁에.', ja: 'おやつはここ。鶏カンジョンとジャガイモが、会は夕方に。', zh: '这里有小吃。晚餐有鸡肉姜丁、土豆翁西米和生鱼。', en: 'Snacks here: fried chicken, potato dumpling soup — save the raw fish for dinner.' } },
        { phase: 'evening', time: '18:30', name: { ko: '강문해변', ja: '江門ビーチ', zh: '江门海滩', en: 'Gangmun Beach' }, q: '강문해변', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '바다를 보며 저녁. 밤에는 파도 소리만 남습니다.', ja: '海を見て夕方。夜は波の音だけが残ります。', zh: '边吃晚餐边看海。夜晚，只剩下海浪声。', en: 'Dinner looking at the water. At night only the waves are left.' } },
        { phase: 'return', time: '20:00', name: { ko: '강릉역', ja: '江陵駅', zh: '江陵站', en: 'Gangneung Station' }, q: '강릉역', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
          desc: { ko: '역으로 돌아와 마지막 KTX. 좌석은 미리 예매하세요.', ja: '駅に戻って最後のKTX。座席は事前に予約してください。', zh: '返回车站并乘坐最后一班 KTX。提前预订座位。', en: 'Back to the station for the last train — book the seat ahead.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥔', dish: { ko: '감자옹심이', ja: 'ジャガイモのオンジミ', zh: '土豆丸子汤', en: 'Gamja ongsimi' }, note: { ko: '감자를 갈아 만든 새알심이 들어간 국.', ja: 'ジャガイモを着替えた新アルシムが入った局。', zh: '用磨碎的土豆制成的鲭鱼汤。', en: 'Potato dumplings in a clear broth.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍲', dish: { ko: '초당순두부', ja: '毎秒スンドゥブ', zh: '草堂软豆腐', en: 'Chodang sundubu' }, note: { ko: '바닷물 간수로 굳힌 부드러운 두부.', ja: '海水の看守で固まった柔らかい豆腐。', zh: '软豆腐用盐水硬化。', en: 'Soft tofu set with sea-water brine.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍗', dish: { ko: '닭강정 · 커피', ja: '鶏カンジョン・コーヒー', zh: '鸡江正·咖啡', en: 'Dakgangjeong · coffee' }, note: { ko: '시장에서 갓 튀긴 닭강정, 바다 앞에서 커피.', ja: '市場で揚げたての鶏のカンチョン、海の前でコーヒー。', zh: '市场上新鲜炸的鸡，面朝大海的咖啡。', en: 'Fresh-fried chicken in the market, coffee by the sea.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🐟', dish: { ko: '회 · 물회 · 짬뽕', ja: '会・水会・チャンポン', zh: '生鱼片、生鱼、Jjambbong', en: 'Hoe · mulhoe · jjamppong' }, note: { ko: '강문이나 사근진에서 회 한 접시.', ja: '江門やサグンジンから回した皿。', zh: '江门或四根津的一盘生鱼。', en: 'A plate of raw fish at Gangmun or Sageunjin.' } }
    ],
    photos: [
      { file: 'gangneung-p1', cap: { ko: '오죽헌', ja: 'ヒョンホン', zh: '乌竹轩', en: 'Ojukheon House' } },
      { file: 'gangneung-p2', cap: { ko: '안목해변', ja: '目のビーチ', zh: '安木海滩', en: 'Anmok Beach' } },
      { file: 'gangneung-p3', cap: { ko: '선교장의 마루', ja: '宣教長の床', zh: '船桥庄的地板', en: 'Inside Seongyojang' } },
      { file: 'gangneung-p4', cap: { ko: '경포해변', ja: '鏡浦ビーチ', zh: '镜浦海水浴场', en: 'Gyeongpo Beach' } }
    ],
    also: [
      { name: { ko: '주문진', ja: '注文', zh: '注文津', en: 'Jumunjin' }, q: '주문진', desc: { ko: '항구와 등대, 드라마 촬영지로 알려진 방파제.', ja: '港や灯台、ドラマ撮影地として知られる防波堤。', zh: '港口、灯塔和防波堤，被称为戏剧拍摄地。', en: 'A harbour, a lighthouse and the famous breakwater.' } },
      { name: { ko: '경포가시연습지', ja: '鏡浦ガシ練習地', zh: '镜浦荆棘练习中心', en: 'Gyeongpo Wetland' }, q: '경포가시연습지', desc: { ko: '여름에 가시연꽃이 피는 습지.', ja: '夏に可視蓮の花が咲く湿地。', zh: '夏季，荷花盛开的湿地。', en: 'A wetland that flowers with prickly water lilies in summer.' } },
      { name: { ko: '정동진', ja: '正東津', zh: '郑东进', en: 'Jeongdongjin' }, q: '정동진', desc: { ko: '바다로 바로 떨어지는 기차역과 일출.', ja: '海に直接落ちる鉄道駅と日の出。', zh: '火车站和日出直接落入大海。', en: 'A station that drops straight to the sea, best at sunrise.' } }
    ],
    tip: { ko: '안목 커피거리는 오후 햇빛이 바다 쪽으로 들어옵니다. 창가 자리는 15시 이후가 좋아요.', ja: '目のコーヒーは午後の日差しが海側に入ります。窓際席は15時以降がいいです。', zh: '安木咖啡街沐浴着朝大海的午后阳光。靠窗的座位最好在15:00之后。', en: 'At Anmok the afternoon light falls across the sea — window seats are best after three.' }
  },

  /* ---------------------------------------------------------------- JEONJU */
  {
    id: 'jeonju', region: 'jeolla', emoji: '🍚', tint: '#F7A8B8',
    name: { ko: '전주', ja: '全州', zh: '全州', en: 'Jeonju' },
    sub: { ko: '전라북도 전주시', ja: '全羅北道全州市', zh: '全罗北道全州市', en: 'Jeonju, North Jeolla' },
    tag: { ko: '한옥 지붕과 비빔밥', ja: '韓屋の屋根とビビンバ', zh: '韩屋屋顶与拌饭', en: 'Hanok roofs and a bowl of bibimbap' },
    intro: {
      ko: '전주는 걸음이 느려지는 도시입니다. 한옥마을 골목을 한 바퀴 돌고, 오목대에 올라 지붕을 내려다보고, 저녁에 남부시장으로 넘어가면 하루가 다 갑니다.', ja: '全州は歩くのが遅い都市です。韓屋村の路地を一周し、窪みに上がって屋根を見下ろし、夕方に南部市場に進むと一日が行きます。', zh: '全州是一座节奏缓慢的城市。一整天的时间是在韩屋村的小巷里散步，爬上梧木台俯瞰屋顶，晚上前往南部市场。',
      en: 'Jeonju slows you down. A loop of the hanok alleys, a climb to Omokdae to look back over the roofs, and an evening in Nambu Market — that is the day.'
    },
    seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }],
    transport: { ko: '도보 + 시내버스', ja: '徒歩＋市内バス', zh: '步行＋市内公交', en: 'Walking + city bus' },
    duration: { ko: '약 11시간', ja: '約11時間', zh: '约11小时', en: 'About 11 hours' },
    hub: {
      ko: '전주고속버스터미널', ja: '全州高速バスターミナル', zh: '全州高速巴士客运站', en: 'Jeonju Express Bus Terminal', q: '전주고속버스터미널',
      note: { ko: '한옥마을까지 버스로 15분, 택시로 10분 남짓. 시외버스터미널과는 다른 곳이니 이름을 확인하세요.', ja: '韓屋村までバスで15分、タクシーで10分余り。市外バスターミナルとは別の場所なので、名前を確認してください。', zh: '乘坐巴士约15分钟或乘坐出租车约10分钟即可到达韩屋村。这与城际巴士总站不同，所以请检查名称。', en: 'Fifteen minutes by bus to the hanok village, a little less by taxi. Note this is a different terminal from the intercity one.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '한옥마을 한 바퀴, 시장까지', ja: '韓屋村をひと回り、市場まで', zh: '绕韩屋村一圈，直到市场', en: 'A loop of the hanok village, ending at the market' },
      meta: { ko: '9곳 · 약 11시간 · 도보 5km', ja: '9ヶ所・約11時間・徒歩5km', zh: '9个地点，约11小时，步行5公里', en: '9 stops · about 11 hours · 5 km on foot' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '전주고속버스터미널', ja: '全州高速バスターミナル', zh: '全州高速巴士客运站', en: 'Jeonju Express Bus Terminal' }, q: '전주고속버스터미널', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '터미널 앞에서 한옥마을 방면 버스로. 짐은 터미널 보관함에 맡기면 하루가 가볍습니다.', ja: 'ターミナル前から韓屋村方面バスで。荷物はターミナルロッカーに預けると一日が軽いです。', zh: '在客运站前乘坐开往韩屋村的巴士。如果您将行李寄存在客运站储物柜中，您的一天就会轻松很多。', en: 'A bus to the hanok village leaves from the front. Leave the bag in a terminal locker.' } },
        { phase: 'morning', time: '09:20', name: { ko: '경기전', ja: '試合前', zh: '比赛前', en: 'Gyeonggijeon Shrine' }, q: '경기전', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
          desc: { ko: '태조 이성계의 어진을 모신 곳. 마당의 큰 은행나무가 계절마다 색을 바꿉니다.', ja: '太祖異性界の御陣を祀った所。庭の大きなイチョウが季節ごとに色を変えます。', zh: '供奉着太祖李成桂画像的地方。院子里的大银杏树随着季节变换颜色。', en: 'Home to the portrait of King Taejo. The great ginkgo in the courtyard changes colour with the season.' },
          photo: 'jeonju-p1' },
        { phase: 'morning', time: '10:10', name: { ko: '전주향교', ja: '全州郷校', zh: '全州乡校', en: 'Jeonju Hyanggyo' }, q: '전주향교', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '조선 시대 지방 교육기관. 은행나무 그늘이 넓어 잠깐 앉기 좋습니다.', ja: '朝鮮時代の地方教育機関。イチョウの木陰が広く、しばらく座るのに最適です。', zh: '朝鲜王朝时期的地方教育机构。银杏树荫很大，很适合小坐一会儿。', en: 'A Joseon-era local school with deep ginkgo shade — a good place to sit.' } },
        { phase: 'morning', time: '10:50', name: { ko: '오목대', ja: '凹面', zh: '五木台', en: 'Omokdae' }, q: '오목대', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '언덕 위 정자에서 한옥 지붕이 물결처럼 펼쳐집니다. 전주에서 가장 좋은 사진 자리.', ja: '丘の上の精子では、韓屋根が波のように広がっています。全州で最高の写真スポット。', zh: '从山上的亭子望去，韩屋的屋顶像波浪一样展开。全州最佳拍照地点。', en: 'From the hilltop pavilion the hanok roofs spread like waves — the best photograph in town.' },
          photo: 'jeonju-p4' },
        { phase: 'morning', time: '11:30', name: { ko: '전동성당', ja: '電動大聖堂', zh: '殿洞大教堂', en: 'Jeondong Cathedral' }, q: '전동성당', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '붉은 벽돌과 로마네스크 지붕. 한옥 사이에 갑자기 나타나서 더 눈에 들어옵니다.', ja: '赤レンガとロマネスクの屋根。韓屋の間に突然現れ、さらに目に入る。', zh: '红砖和罗马式屋顶。它突然出现在韩屋之中，更加引人注目。', en: 'Red brick and Romanesque arches, appearing suddenly among the hanok roofs.' },
          photo: 'jeonju-p2' },
        { phase: 'lunch', time: '12:10', name: { ko: '전주한옥마을', ja: '全州韓屋村', zh: '全州韩屋村', en: 'Jeonju Hanok Village' }, q: '전주한옥마을', move: { ko: '도보 약 5분', ja: '徒歩約5分', zh: '步行约5分钟', en: 'Walk, about 5 min' },
          desc: { ko: '점심은 여기서. 700채가 넘는 한옥 사이 골목이 미로처럼 이어집니다.', ja: 'ランチはここ。 700軒を超える韓屋間の路地が迷路のように繋がります。', zh: '午餐就到这里了。 700多间韩屋之间的小巷像迷宫一样延伸。', en: 'Lunch here, among more than seven hundred hanok houses and their maze of alleys.' },
          photo: 'jeonju-cover' },
        { phase: 'afternoon', time: '13:40', name: { ko: '한옥마을 골목 · 한복', ja: '韓屋村の路地・韓服', zh: '韩屋村胡同·韩服', en: 'Hanok alleys & hanbok' }, q: '전주한옥마을', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
          desc: { ko: '한복을 빌려 입으면 사진이 확실히 다르게 나옵니다. 오후 두 시간은 천천히 걷는 시간.', ja: '韓服を借りて着ると写真がしっかり違って出てきます。午後2時間はゆっくり歩く時間。', zh: '如果你租一套韩服穿上，你的照片一定会看起来不一样。下午两个小时是慢走的时间。', en: 'Rent a hanbok and the photographs change completely. Two slow hours of walking.' } },
        { phase: 'afternoon', time: '15:40', name: { ko: '자만벽화마을', ja: 'ジャマン壁画村', zh: '贾曼壁画村', en: 'Jaman Mural Village' }, q: '자만벽화마을', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '언덕길 벽에 그림이 이어집니다. 오르막이 가파르니 물을 챙기세요.', ja: '丘の道の壁に絵が続きます。上り坂の急な水を取ります。', zh: '山坡上的墙壁上继续画着这些画。爬坡很陡，所以要带水。', en: 'Murals along a hillside lane. The climb is steep — bring water.' } },
        { phase: 'evening', time: '16:50', name: { ko: '남부시장', ja: '南部市場', zh: '南部市场', en: 'Nambu Market' }, q: '남부시장', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '저녁은 시장에서. 청년몰 골목과 야시장이 겹치는 시간대가 가장 활기찹니다.', ja: '夕方は市場で。青年モールの路地とナイトマーケットが重なる時間帯が最も活気があります。', zh: '晚餐在市场。青年商城胡同和夜市重叠的时候是最热闹的时候。', en: 'Dinner at the market — the youth mall and night market overlap into the liveliest hour.' },
          photo: 'jeonju-p3' },
        { phase: 'return', time: '20:00', name: { ko: '전주고속버스터미널', ja: '全州高速バスターミナル', zh: '全州高速巴士客运站', en: 'Jeonju Express Bus Terminal' }, q: '전주고속버스터미널', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '터미널로 돌아와 마무리. 막차 시간을 미리 확인하세요.', ja: 'ターミナルに戻って仕上げ。最後の時間を事前に確認してください。', zh: '返回终端以完成。提前查询末班车时间。', en: 'Back to the terminal. Check the last bus before you sit down to dinner.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '콩나물국밥', ja: 'もやしクッパ', zh: '豆芽汤饭', en: 'Kongnamul gukbap' }, note: { ko: '전주 사람은 아침에도 콩나물국밥을 먹습니다.', ja: '全州人は朝にももやしクッパを食べます。', zh: '全州人早餐也吃豆芽汤。', en: 'In Jeonju, bean-sprout soup is breakfast too.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍚', dish: { ko: '전주비빔밥', ja: '全州ビビンバ', zh: '全州拌饭', en: 'Jeonju bibimbap' }, note: { ko: '돌솥에 눌린 밥까지 긁어 먹는 맛.', ja: '石鍋に押されたご飯まで掻いて食べる味。', zh: '从石锅里刮米的味道。', en: 'The best part is the scorched rice at the bottom.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍫', dish: { ko: '수제 초코파이 · 모주', ja: '手作りチョコパイ・モジュ', zh: '自制巧克力派 · Moju', en: 'Handmade choco-pie · moju' }, note: { ko: '모주는 막걸리에 약재를 넣은 전주 술.', ja: 'モージュはマッコリに薬剤を入れた全酒酒。', zh: 'Moju 是一种将马格利酒与药用成分混合而成的全州酒。', en: 'Moju is the local rice drink, brewed with herbs.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🥘', dish: { ko: '피순대 · 한정식', ja: 'ピスンデ・限定式', zh: '血圣代·韩定食', en: 'Pi-sundae · hanjeongsik' }, note: { ko: '시장 골목에서 순대 한 접시, 또는 한 상 차림.', ja: '市場の路地での純粋な皿、またはワンランク上。', zh: '一盘圣代冰淇淋或市场小巷中的一张桌子。', en: 'A plate of sundae in the market, or a full table.' } }
    ],
    photos: [
      { file: 'jeonju-p1', cap: { ko: '경기전', ja: '試合前', zh: '比赛前', en: 'Gyeonggijeon Shrine' } },
      { file: 'jeonju-p2', cap: { ko: '전동성당', ja: '電動大聖堂', zh: '殿洞大教堂', en: 'Jeondong Cathedral' } },
      { file: 'jeonju-p3', cap: { ko: '남부시장 청년몰', ja: '南部市場青年モール', zh: '南部市场青年购物中心', en: 'The youth mall at Nambu Market' } },
      { file: 'jeonju-p4', cap: { ko: '오목대에서 본 지붕', ja: '凹所から見た屋根', zh: '从梧木台看到的屋顶', en: 'Rooftops seen from Omokdae' } }
    ],
    also: [
      { name: { ko: '덕진공원', ja: '徳津公園', zh: '德津公园', en: 'Deokjin Park' }, q: '덕진공원', desc: { ko: '여름 연꽃이 가득한 호수 공원.', ja: '夏の蓮がいっぱいの湖公園。', zh: '夏季荷花开满的湖滨公园。', en: 'A lake park packed with lotus flowers in summer.' } },
      { name: { ko: '전주천', ja: '全州川', zh: '全州溪流', en: 'Jeonjucheon' }, q: '전주천', desc: { ko: '저녁 산책로. 물소리가 도심을 가로지릅니다.', ja: '夜の遊歩道。水の音が市内中心部を横切る。', zh: '晚上散步。水声流过市中心。', en: 'An evening path where a stream crosses the town.' } },
      { name: { ko: '와룡서원', ja: '和龍書院', zh: '卧龙书院', en: 'Waryong Seowon' }, q: '와룡서원', desc: { ko: '한옥마을 뒤 조용한 서원.', ja: '韓屋村の後に静かな書院。', zh: '韩屋村后面的安静书院。', en: 'A quiet academy behind the hanok village.' } }
    ],
    tip: { ko: '한복 대여는 오전이 한산합니다. 오후에는 인기 가게에 줄이 깁니다.', ja: '韓服レンタルは午前が寒山です。午後は人気店に減ります。', zh: '早上的韩服出租店很安静。下午，热门商店里排起了长队。', en: 'Rent hanbok in the morning — the popular shops queue up after lunch.' }
  },

  /* ----------------------------------------------------------------- YEOSU */
  {
    id: 'yeosu', region: 'jeolla', emoji: '🚢', tint: '#8FB8F0',
    name: { ko: '여수', ja: '麗水', zh: '丽水', en: 'Yeosu' },
    sub: { ko: '전라남도 여수시', ja: '全羅南道麗水市', zh: '全罗南道丽水市', en: 'Yeosu, South Jeolla' },
    tag: { ko: '밤바다와 케이블카', ja: '夜の海とケーブルカー', zh: '夜海与缆车', en: 'A night sea and a cable car over it' },
    intro: {
      ko: '여수는 밤에 진짜 얼굴을 보여줍니다. 낮에는 향일암과 오동도를 돌고, 해가 지면 낭만포차거리에서 바다를 마주 앉으세요.', ja: '麗水は夜に本当の顔を示しています。日中は香一岩と五洞島を回り、日が沈むとロマンポチャ通りで海に面してください。', zh: '丽水在夜晚展现出它的真面目。白天游览香吉庵和梧桐岛，夕阳西下时，坐在浪漫的波差街面朝大海。',
      en: 'Yeosu shows its real face at night. See Hyangiram and Odongdo by day, then sit facing the water at the pocha street after sunset.'
    },
    seasons: [{ ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }],
    transport: { ko: '버스 + 도보', ja: 'バス＋徒歩', zh: '巴士＋步行', en: 'Bus + walking' },
    duration: { ko: '약 11시간', ja: '約11時間', zh: '约11小时', en: 'About 11 hours' },
    hub: {
      ko: '여수엑스포역', ja: '麗水エキスポ駅', zh: '丽水世博会站', en: 'Yeosu Expo Station', q: '여수엑스포역',
      note: { ko: 'KTX 용산에서 2시간 50분. 역에서 오동도와 케이블카까지 걸어서 15분 거리입니다.', ja: 'KTX龍山から2時間50分。駅から五洞島とケーブルカーまで徒歩15分です。', zh: '距离龙山KTX 2小时50分钟。从车站步行15分钟即可到达梧桐岛和缆车。', en: 'Two hours fifty from Yongsan on KTX. Odongdo and the cable car are fifteen minutes on foot.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '향일암의 아침에서 여수 밤바다까지', ja: '向日庵の朝から麗水の夜の海まで', zh: '从向日庵的清晨到丽水的夜海', en: 'Morning at Hyangiram, night on the Yeosu sea' },
      meta: { ko: '7곳 · 약 11시간 · 버스 3회', ja: '7か所・約11時間・バス3回', zh: '7个地点，约11小时，3辆巴士', en: '7 stops · about 11 hours · 3 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '여수엑스포역', ja: '麗水エキスポ駅', zh: '丽水世博会站', en: 'Yeosu Expo Station' }, q: '여수엑스포역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '역 앞에서 향일암 방면 버스로. 편도 40분이라 왕복 시간을 미리 계산해 두세요.', ja: '駅前から香一岩方面バスで。片道40分で往復時間をあらかじめ計算しておいてください。', zh: '在车站前乘坐开往香吉兰方向的巴士。单程需要40分钟，所以提前计算好往返时间。', en: 'A bus to Hyangiram from outside the station — forty minutes each way, so plan the return.' } },
        { phase: 'morning', time: '09:40', name: { ko: '향일암', ja: '香一岩', zh: '香吉兰隐修院', en: 'Hyangiram Hermitage' }, q: '향일암', move: { ko: '버스 약 40분', ja: 'バス約40分', zh: '巴士约40分钟', en: 'Bus, about 40 min' },
          desc: { ko: '돌산 끝 절벽에 매달린 암자. 계단이 가파르지만 올라서면 다도해가 통째로 보입니다.', ja: '突山の端の崖にぶら下がっている庵。階段が急であるが上がると茶道海が丸ごと見えます。', zh: '一座悬于石山尽头悬崖上的隐修院。楼梯很陡，但爬上去可以看到整个群岛。', en: 'A hermitage clinging to the cliff at the end of Dolsan. Steep steps, then the whole archipelago.' },
          photo: 'yeosu-p1' },
        { phase: 'lunch', time: '11:40', name: { ko: '돌산', ja: 'ドルサン', zh: '石山', en: 'Dolsan' }, q: '돌산', move: { ko: '버스 약 30분', ja: 'バス約30分', zh: '巴士约30分钟', en: 'Bus, about 30 min' },
          desc: { ko: '돌산 갓으로 유명한 동네. 점심을 먹고 돌산대교를 건너 시내로 넘어갑니다.', ja: 'ドルサンガドで有名な近所。ランチを食べてドルサン大橋を渡り、市内に進みます。', zh: '以突山帽子而闻名的街区。午餐后，穿过突山大桥，前往市区。', en: 'The town famous for its mustard greens. Eat, then cross Dolsan Bridge into the city.' } },
        { phase: 'afternoon', time: '13:00', name: { ko: '오동도', ja: '桐洞', zh: '乌东多', en: 'Odongdo Island' }, q: '오동도', move: { ko: '차 약 35분', ja: '車約35分', zh: '车程约35分钟', en: 'Drive, about 35 min' },
          desc: { ko: '방파제를 걸어 들어가는 작은 섬. 동백나무 길을 따라 한 바퀴 40분이면 충분합니다.', ja: '防波堤を歩く小さな島。ツバキの道に沿って1輪40分で十分です。', zh: '穿过防波堤即可到达的小岛。沿着茶花路步行40分钟就够了。', en: 'A small island you walk to along the breakwater. Forty minutes around the camellia path.' },
          photo: 'yeosu-p2' },
        { phase: 'afternoon', time: '14:40', name: { ko: '여수해상케이블카', ja: '麗水海上ケーブルカー', zh: '丽水海上缆车', en: 'Yeosu Maritime Cable Car' }, q: '여수해상케이블카', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '바다 위를 가로지르는 케이블카. 돌산 쪽 자산공원까지 왕복하면 항구 전체가 눈에 들어옵니다.', ja: '海の上を横切るケーブルカー。石山側の資産公園まで往復すると、港全体が目に入ります。', zh: '缆车穿越大海。如果往返突山一侧的紫山公园，整个港口都会映入眼帘。', en: 'A cable car over open water. The round trip to Jasan Park shows you the whole harbour.' } },
        { phase: 'evening', time: '16:20', name: { ko: '이순신광장', ja: 'イ・スンシン広場', zh: '李舜臣广场', en: 'Yi Sun-sin Square' }, q: '이순신광장', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '항구를 마주한 넓은 광장. 노을 시간에 맞추면 배와 하늘이 같이 붉어집니다.', ja: '港に面した広々とした広場。夕焼けの時間に合わせると、船と空が赤くなります。', zh: '面向港口的大广场。如果配合日落时间，船和天都会一起变红。', en: 'A wide square facing the harbour. At sunset the boats and the sky go red together.' } },
        { phase: 'evening', time: '17:30', name: { ko: '낭만포차거리', ja: 'ロマンチック車', zh: '浪漫的马车街', en: 'Nangman Pocha Street' }, q: '여수낭만포차거리', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
          desc: { ko: '저녁은 바다 앞 포차에서. 20시에 돌산대교 조명이 들어오면 이 코스가 완성됩니다.', ja: '夕方は海の前で砲車で。 20時に石山大橋の照明が入ると、このコースが完成します。', zh: '在海边的炮车上享用晚餐。 20:00突山大桥灯光亮起时该路线结束。', en: 'Dinner at a pocha facing the water. At eight the bridge lights come on and the day is complete.' } },
        { phase: 'return', time: '19:30', name: { ko: '여수엑스포역', ja: '麗水エキスポ駅', zh: '丽水世博会站', en: 'Yeosu Expo Station' }, q: '여수엑스포역', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '바닷길을 따라 역으로. 마지막 KTX 좌석은 미리 예매하세요.', ja: '海道沿いの駅へ。最後のKTX席は事前に予約してください。', zh: '沿着海路返回。提前预订 KTX 最后的座位。', en: 'Follow the water back to the station. Book the last KTX seat ahead.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '해장국 · 국밥', ja: 'ヘジャングク・クッパ', zh: '解酒汤和汤饭', en: 'Haejang-guk · gukbap' }, note: { ko: '역 근처에서 뜨끈한 국물로 시작.', ja: '駅近くで熱いスープで始まります。', zh: '从车站附近的热汤开始。', en: 'Start with something hot near the station.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🐟', dish: { ko: '서대회 · 게장백반', ja: '西大会・ゲジャン白斑', zh: '西大湖·蟹白饭', en: 'Seodae-hoe · gejang' }, note: { ko: '여수 앞바다에서 잡은 서대와 꽃게.', ja: '麗水の沖合で捕まった西大とカニ。', zh: '在丽水海岸捕获的西大蟹和青蟹。', en: 'Sole and blue crab from these waters.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🥬', dish: { ko: '돌산갓김치 · 갓피클', ja: 'ドルサンゴッドキムチ・ゴッドピクルス', zh: '突山芥末泡菜·戈特泡菜', en: 'Dolsan mustard kimchi' }, note: { ko: '알싸한 갓김치는 여수에서 꼭 사 가는 것.', ja: 'とても安いキムチは麗水でぜひ買っていくこと。', zh: '辣芥末泡菜是丽水必买的。', en: 'The peppery mustard kimchi everyone takes home.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍢', dish: { ko: '조개구이 · 해산물 포차 안주', ja: '貝焼き・シーフード砲車 おつまみ', zh: '烤蛤蜊和海鲜小吃', en: 'Grilled shellfish · pocha seafood' }, note: { ko: '밤바다 앞에서 조개구이 한 상.', ja: '夜の海の前で貝殻が一賞。', zh: '夜海前的一桌烤蛤蜊。', en: 'A tray of grilled shellfish with the night sea in front of you.' } }
    ],
    photos: [
      { file: 'yeosu-p1', cap: { ko: '향일암', ja: '香一岩', zh: '香吉兰隐修院', en: 'Hyangiram Hermitage' } },
      { file: 'yeosu-p2', cap: { ko: '오동도', ja: '桐洞', zh: '乌东多', en: 'Odongdo Island' } },
      { file: 'yeosu-p3', cap: { ko: '여수해상케이블카', ja: '麗水海上ケーブルカー', zh: '丽水海上缆车', en: 'The maritime cable car' } },
      { file: 'yeosu-p4', cap: { ko: '여수 엑스포 야경', ja: '麗水博覧会の夜景', zh: '丽水世博会夜景', en: 'Yeosu Expo at night' } }
    ],
    also: [
      { name: { ko: '돌산공원', ja: 'ドルサン公園', zh: '突山公园', en: 'Dolsan Park' }, q: '돌산공원', desc: { ko: '케이블카 건너편, 여수 시내를 내려다보는 자리.', ja: 'ケーブルカーの向かい、麗水市内を見下ろす席。', zh: '缆车对面，俯瞰丽水市中心。', en: 'Across the cable car, looking down over the city.' } },
      { name: { ko: '거문도', ja: '巨文島', zh: '巨文岛', en: 'Geomundo' }, q: '거문도', desc: { ko: '배로 두 시간, 섬마을 하루.', ja: '船で2時間、島村の日。', zh: '坐船两小时，岛村一日。', en: 'Two hours by ferry for a day on a slow island.' } },
      { name: { ko: '여수예술랜드', ja: '麗水アートランド', zh: '丽水艺术乐园', en: 'Yeosu Art Land' }, q: '여수예술랜드', desc: { ko: '바다를 배경으로 한 조형물 정원.', ja: '海を背景にした造形園。', zh: '以大海为背景的雕塑花园。', en: 'A sculpture garden with the sea behind it.' } }
    ],
    tip: { ko: '향일암은 일출로 유명합니다. 이 코스를 새벽으로 앞당기면 일출까지 볼 수 있어요.', ja: '香一岩は日の出で有名です。このコースを夜明けに進めば、日の出まで見ることができます。', zh: '香吉林寺以其日出而闻名。如果你早上很早参加这个课程，你可以看到日出。', en: 'Hyangiram is famous for sunrise — start earlier and you can catch it.' }
  },

  /* ---------------------------------------------------------------- SOKCHO */
  {
    id: 'sokcho', region: 'gangwon', emoji: '🏔️', tint: '#A8C9E8',
    name: { ko: '속초', ja: '束草', zh: '束草', en: 'Sokcho' },
    sub: { ko: '강원도 속초시', ja: '江原道束草市', zh: '江原道束草市', en: 'Sokcho, by Seoraksan' },
    tag: { ko: '설악산과 바다가 붙어 있는 곳', ja: '雪岳山と海がすぐそばにある町', zh: '雪岳山与大海相连的地方', en: 'Where the mountain meets the sea' },
    intro: {
      ko: '속초는 산과 바다가 차로 20분 거리입니다. 오전에 설악산 계곡을 걷고, 오후에 바다로 내려오면 하루에 두 가지 풍경을 다 갖게 됩니다.', ja: '束草は山と海から車で20分です。午前中に雪岳山渓谷を歩き、午後に海に降りてくると、1日に2つの風景がすべてあります。', zh: '束草距离山和海有20分钟的车程。如果早上徒步穿过雪岳山山谷，下午下山到海边，一天之内就能欣赏到两处风景。',
      en: 'In Sokcho the mountain and the sea are twenty minutes apart. Walk a Seoraksan valley in the morning and come down to the water in the afternoon.'
    },
    seasons: [{ ko: '가을 단풍', ja: '秋の紅葉', zh: '秋天的树叶', en: 'Autumn leaves' }, { ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '겨울 설경', ja: '冬の雪景色', zh: '冬天的雪景', en: 'Snow' }],
    transport: { ko: '버스 + 택시', ja: 'バス＋タクシー', zh: '巴士＋出租车', en: 'Bus + taxi' },
    duration: { ko: '약 11시간', ja: '約11時間', zh: '约11小时', en: 'About 11 hours' },
    hub: {
      ko: '속초고속버스터미널', ja: '束草高速バスターミナル', zh: '束草高速巴士总站', en: 'Sokcho Express Bus Terminal', q: '속초고속버스터미널',
      note: { ko: '동서울에서 2시간 남짓. 터미널에서 설악산행 버스가 바로 서고, 시내까지는 버스로 10분입니다.', ja: '東ソウルで2時間余り。ターミナルから雪岳山行きのバスがすぐそばにあり、市内までバスで10分です。', zh: '距东首尔约2小时车程。前往雪岳山的巴士就停在终点站，乘坐巴士10分钟即可到达市中心。', en: 'A little over two hours from Dong Seoul. Seoraksan buses leave from the terminal; town is ten minutes away.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '설악산 계곡에서 동해 바다까지', ja: '雪岳山渓谷から東海へ', zh: '从雪岳山山谷到东海', en: 'From a Seoraksan valley to the East Sea' },
      meta: { ko: '7곳 · 약 11시간 · 도보 7km', ja: '7ヶ所・約11時間・徒歩7km', zh: '7个地点，约11小时，步行7公里', en: '7 stops · about 11 hours · 7 km on foot' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '속초고속버스터미널', ja: '束草高速バスターミナル', zh: '束草高速巴士总站', en: 'Sokcho Express Bus Terminal' }, q: '속초고속버스터미널', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '터미널에서 설악산 소공원행 버스로. 산에 오래 머물 생각이면 점심은 미리 사 두세요.', ja: 'ターミナルから雪岳山小公園行きのバスで。山に長く滞在しようと思ったら、ランチはあらかじめ買っておいてください。', zh: '从客运站乘坐巴士前往雪岳山小公园。如果打算在山上停留较长时间，请提前购买午餐。', en: 'Take the Seoraksan bus from the terminal. If you plan to linger, buy lunch before you go up.' } },
        { phase: 'morning', time: '09:20', name: { ko: '설악산 소공원 · 비선대', ja: '雪岳山小公園・非線大', zh: '雪岳山小公园·飞仙台', en: 'Seoraksan Sogongwon & Biseondae' }, q: '설악산 소공원', move: { ko: '버스 약 25분', ja: 'バス約25分', zh: '巴士约25分钟', en: 'Bus, about 25 min' },
          desc: { ko: '계곡을 따라 걷는 완만한 코스. 비선대까지 왕복 두 시간 남짓, 바위와 물소리가 계속 이어집니다.', ja: '谷に沿って歩く穏やかなコース。非線帯までの往復2時間余り、岩と水の音が続く。', zh: '沿着山谷的平缓路线。飞仙台往返大约需要两个小时，岩石和水声不断。', en: 'A gentle walk up the valley. About two hours round trip to Biseondae, rock and water the whole way.' },
          photo: 'sokcho-cover' },
        { phase: 'lunch', time: '12:00', name: { ko: '청호동 아바이마을', ja: 'チョンホドンアバイ村', zh: '青湖洞阿拜村', en: 'Abai Village, Cheongho-dong' }, q: '아바이마을', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
          desc: { ko: '함경도 피란민이 모여 만든 마을. 갯배를 타고 청초호를 건너는 것도 이 동네의 오래된 일상입니다.', ja: '咸鏡島ピランミンが集まった町。干潟に乗って清楚湖を渡るのもこの町の古い日常です。', zh: '咸镜道难民创建的村庄。乘坐斗船横渡青草湖也是这个地区的一项古老的日常活动。', en: 'A village built by refugees from Hamgyong. The little ferry across Cheongcho Lake is part of daily life here.' } },
        { phase: 'afternoon', time: '13:30', name: { ko: '영금정', ja: 'ヤングムジョン', zh: '灵金亭', en: 'Yeonggeumjeong' }, q: '영금정', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
          desc: { ko: '바위 위에 세운 정자에서 동해가 바로 앞입니다. 파도가 세면 물보라가 정자까지 올라옵니다.', ja: '岩の上に建てられた精子で東海がすぐ前です。波が数えると、水しぶきが精子まで上がります。', zh: '建在岩石上的亭子前面就是东海。当海浪很大时，水花就会涌到亭子上。', en: 'A pavilion on the rocks with the East Sea in front of it. In rough weather the spray reaches the rail.' },
          photo: 'sokcho-p4' },
        { phase: 'afternoon', time: '14:30', name: { ko: '속초관광수산시장', ja: '束草観光水産市場', zh: '束草观光水产市场', en: 'Sokcho Tourist & Fish Market' }, q: '속초관광수산시장', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '간식은 여기서. 닭강정과 쥐포, 오징어순대를 조금씩 맛보기 좋습니다.', ja: 'おやつはここ。チキンカンジョンとネズミ、イカのスンデを少しずつ味わえます。', zh: '这里有小吃。尝尝辣鸡、老鼠猪肉和鱿鱼圣代真是太棒了。', en: 'Snacks here: fried chicken, dried fish, squid sundae — a little of each.' },
          photo: 'sokcho-p3' },
        { phase: 'afternoon', time: '15:40', name: { ko: '속초해변 · 외옹치 바다향기로', ja: '束草海辺・外暁海の香りで', zh: '束草海水浴场·大池海香', en: 'Sokcho Beach & Oeongchi sea path' }, q: '외옹치바다향기로', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
          desc: { ko: '바다 위로 난 데크 길을 따라 대포항까지. 걷는 동안 계속 파도 소리가 따라옵니다.', ja: '海を上るデッキの道に沿って大砲港まで。歩いている間、波の音が続きます。', zh: '沿着海上甲板路前往大浦港。当你行走时，海浪的声音伴随着你。', en: 'A boardwalk over the water toward Daepo harbour, waves underneath the whole way.' },
          photo: 'sokcho-p2' },
        { phase: 'evening', time: '17:30', name: { ko: '대포항', ja: '大浦港', zh: '大浦港', en: 'Daepo Harbour' }, q: '대포항', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
          desc: { ko: '활어회 골목이 늘어선 작은 항구. 저녁은 여기서 먹고 버스로 시내로 돌아옵니다.', ja: 'ライブの路地が並ぶ小さな港。夕方はここで食べてバスでダウンタウンに戻ります。', zh: '一个小港口，两旁都是生鱼巷。我们在这里吃晚饭，然后乘巴士返回市区。', en: 'A small harbour lined with raw-fish stalls — dinner here, then a bus back to town.' } },
        { phase: 'return', time: '19:30', name: { ko: '속초고속버스터미널', ja: '束草高速バスターミナル', zh: '束草高速巴士总站', en: 'Sokcho Express Bus Terminal' }, q: '속초고속버스터미널', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '터미널로 돌아와 마무리. 주말 저녁 막차는 일찍 매진될 수 있어요.', ja: 'ターミナルに戻って仕上げ。週末の夜の終車は早く完売できます。', zh: '返回终端以完成。周末晚上的末班车可能会提前售完。', en: 'Back to the terminal. Weekend evening buses can sell out early.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 해장국', ja: 'クッパ・ヘジャングク', zh: '汤饭·解酒汤', en: 'Gukbap · haejang-guk' }, note: { ko: '산에 오르기 전 뜨끈한 국물 한 그릇.', ja: '山に登る前に熱いスープのボウル。', zh: '爬山前喝一碗热汤。', en: 'A hot bowl before the climb.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🦑', dish: { ko: '오징어순대 · 아바이순대', ja: 'イカスンデ・アバイスンデ', zh: '鱿鱼圣代·阿拜圣代', en: 'Squid sundae · Abai sundae' }, note: { ko: '함경도 방식으로 만든 순대.', ja: '咸鏡道方式で作ったスンデ。', zh: '咸镜道风格的圣代。', en: 'Sundae made the Hamgyong way.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍗', dish: { ko: '닭강정 · 쥐포', ja: '鶏カンジョン・ラッポ', zh: '鸡江亭·Jwipo', en: 'Dakgangjeong · dried filefish' }, note: { ko: '시장에서 봉지째 사 들고 바다로.', ja: '市場で袋目を買って海に。', zh: '我在市场买了一个包就出发去海边了。', en: 'Buy a bag at the market and take it to the sea.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🐟', dish: { ko: '활어회 · 물회 · 오징어불고기', ja: '活魚会・水会・イカ焼肉', zh: '生鱼，生鱼，烤鱿鱼', en: 'Hoe · mulhoe · squid bulgogi' }, note: { ko: '대포항에서 갓 떠 올린 회.', ja: '大浦港で新しく浮かんだ会。', zh: '在大浦港新鲜捕获的生鱼片。', en: 'Fish straight off the boats at Daepo.' } }
    ],
    photos: [
      { file: 'sokcho-p1', cap: { ko: '속초해변', ja: '束草海辺', zh: '束草海滩', en: 'Sokcho Beach' } },
      { file: 'sokcho-p2', cap: { ko: '외옹치 해변', ja: '外灘ビーチ', zh: '大池海滩', en: 'Oeongchi Beach' } },
      { file: 'sokcho-p3', cap: { ko: '속초관광수산시장', ja: '束草観光水産市場', zh: '束草观光水产市场', en: 'Sokcho Tourist & Fish Market' } },
      { file: 'sokcho-p4', cap: { ko: '영금정', ja: 'ヤングムジョン', zh: '灵金亭', en: 'Yeonggeumjeong' } }
    ],
    also: [
      { name: { ko: '울산바위', ja: '蔚山岩', zh: '蔚山岩', en: 'Ulsanbawi Rock' }, q: '울산바위', desc: { ko: '설악산을 대표하는 바위. 왕복 세 시간.', ja: '雪岳山を代表する岩。往復3時間。', zh: '代表雪岳山的岩石。往返三小时。', en: 'Seoraksan\u2019s great rock — three hours round trip.' } },
      { name: { ko: '영랑호', ja: 'ヨンラン湖', zh: '灵郎湖', en: 'Yeongnangho Lake' }, q: '영랑호', desc: { ko: '호수를 도는 자전거길과 철새.', ja: '湖を回る自転車道と渡り鳥。', zh: '环湖自行车道和候鸟。', en: 'A bike loop around the lake, and migratory birds.' } },
      { name: { ko: '낙산사', ja: 'ナクサン寺', zh: '洛山寺', en: 'Naksansa Temple' }, q: '낙산사', desc: { ko: '바다를 마주한 절, 남쪽으로 30분.', ja: '海に面した寺院、南へ30分。', zh: '寺庙面朝大海，向南30分钟。', en: 'A temple facing the sea, thirty minutes south.' } }
    ],
    tip: { ko: '설악산 케이블카는 오전에 줄이 짧습니다. 산행 대신 케이블카로 권금성에 올라도 좋아요.', ja: '雪岳山ケーブルカーは午前中は短くなります。散行の代わりにケーブルカーで巻金城に上がってもいいです。', zh: '早上雪岳山缆车的线路很短。除了徒步之外，您还可以乘坐缆车登上权金城。', en: 'The Seoraksan cable car queues are shorter in the morning — it also works instead of the hike.' }
  },

  /* --------------------------------------------------------------- DAMYANG */
  {
    id: 'damyang', region: 'jeolla', emoji: '🎋', tint: '#A9D9A0',
    name: { ko: '담양', ja: '潭陽', zh: '潭阳', en: 'Damyang' },
    sub: { ko: '전라남도 담양군', ja: '全羅南道潭陽郡', zh: '全罗南道潭阳郡', en: 'Damyang, South Jeolla' },
    tag: { ko: '대나무숲과 느린 정자', ja: '竹林と、ゆっくりした亭', zh: '竹林与悠闲的亭子', en: 'Bamboo shade and old pavilions' },
    intro: {
      ko: '담양은 여름에 가장 좋은 곳입니다. 대나무숲 그늘이 5도쯤 시원하고, 그 사이로 정자와 원림이 이어집니다. 터미널에서 걸어서 시작할 수 있는 것도 장점이에요.', ja: '潭陽は夏に最適な場所です。竹林の色合いが5度ほど涼しく、その間に精子と園林が続きます。ターミナルから歩いて始められるのも利点です。', zh: '潭阳是夏天最好的地方。竹林的树荫凉爽5度左右，亭与花园相连。另一个优点是您可以从客运站步行开始。',
      en: 'Damyang is a summer place: the bamboo shade runs several degrees cooler, and old gardens and pavilions sit between the groves. You can start on foot from the terminal.'
    },
    seasons: [{ ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }],
    transport: { ko: '도보 + 택시', ja: '徒歩＋タクシー', zh: '步行＋出租车', en: 'Walking + taxi' },
    duration: { ko: '약 10시간', ja: '約10時間', zh: '约10小时', en: 'About 10 hours' },
    hub: {
      ko: '담양공용버스터미널', ja: '潭陽公共バスターミナル', zh: '潭阳公共巴士总站', en: 'Damyang Bus Terminal', q: '담양공용버스터미널',
      note: { ko: '광주에서 40분. 터미널에서 죽녹원까지 걸어서 15분이라 차 없이도 하루가 됩니다.', ja: '光州から40分。ターミナルから竹緑園まで歩いて15分なので車なしでも一日になります。', zh: '距光州40分钟车程。从客运站到竹绿园只需步行15分钟，不用开车也能度过愉快的一天。', en: 'Forty minutes from Gwangju. Juknokwon is a fifteen-minute walk, so the day works without a car.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '죽녹원에서 소쇄원까지, 대나무 하루', ja: '竹緑園から潇洒園まで、竹の一日', zh: '从竹绿园到潇洒园，竹林的一天', en: 'Juknokwon to Soswaewon, a day in bamboo' },
      meta: { ko: '7곳 · 약 10시간 · 택시 3회', ja: '7か所・約10時間・タクシー3回', zh: '7个地点，约10小时，3辆出租车', en: '7 stops · about 10 hours · 3 short taxi rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '담양공용버스터미널', ja: '潭陽公共バスターミナル', zh: '潭阳公共巴士总站', en: 'Damyang Bus Terminal' }, q: '담양공용버스터미널', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '터미널에서 죽녹원까지 걸어서 15분. 길이 완만해서 짐이 있어도 괜찮습니다.', ja: 'ターミナルから竹緑園まで徒歩15分。長さが緩やかで荷物があっても大丈夫です。', zh: '从客运站到竹绿苑步行15分钟。路很平缓，即使有行李也没关系。', en: 'Fifteen flat minutes on foot to Juknokwon — fine even with a bag.' } },
        { phase: 'morning', time: '09:15', name: { ko: '죽녹원', ja: '竹緑園', zh: '竹绿园', en: 'Juknokwon Bamboo Garden' }, q: '죽녹원', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '대나무 사이로 난 길이 여덟 갈래. 오전 햇빛이 잎을 통과할 때 가장 예쁩니다.', ja: '竹の間に私は長さ8つに行きます。午前日光が葉を通過するときに最もきれいです。', zh: '竹间有八条路。当早晨的阳光透过树叶时，它是最美丽的。', en: 'Eight paths through the bamboo. Best in the morning, when the light comes through the leaves.' },
          photo: 'damyang-cover' },
        { phase: 'morning', time: '10:40', name: { ko: '관방제림', ja: '官房制林', zh: '官房杰林', en: 'Gwanbangjerim' }, q: '관방제림', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '제방을 따라 늘어선 300년 된 나무들. 대나무숲과는 또 다른, 시원한 그늘길입니다.', ja: '堤防に沿って並ぶ300年の木々。竹林とはまた違う、涼しい日陰です。', zh: '堤岸两旁种植着300年树龄的树木。这是一条不同于竹林的阴凉小道。', en: 'Three-hundred-year-old trees along the riverbank — a different kind of cool shade.' },
          photo: 'damyang-p3' },
        { phase: 'morning', time: '11:30', name: { ko: '메타세쿼이아길', ja: 'メタセコイアギル', zh: '水杉路', en: 'Metasequoia Road' }, q: '담양메타세쿼이아길', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '차로 달리면 나무가 터널처럼 이어집니다. 걸어도 좋고, 사진은 길 가운데서 찍으세요.', ja: '車で走ると、木はトンネルのようにつながります。歩いてもいいし、写真は途中で撮ってください。', zh: '当你开车时，树木像隧道一样连接起来。可以步行，但要在路中间拍照。', en: 'The trees close into a tunnel above the road. Walk it if you like — best photographed from the middle.' },
          photo: 'damyang-p1' },
        { phase: 'lunch', time: '12:40', name: { ko: '담양읍', ja: '潭陽邑', zh: '潭阳邑', en: 'Damyang town' }, q: '담양읍', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '점심은 읍내에서. 떡갈비와 국수를 같이 시키는 게 이 동네 방식입니다.', ja: 'ランチは町内で。もちカルビと麺を一緒にさせるのがこの近所方式です。', zh: '午餐在城里。这是这附近的做法，把炒年糕和面条一起点。', en: 'Lunch in town — the local way is grilled beef patty and noodles together.' } },
        { phase: 'afternoon', time: '14:00', name: { ko: '소쇄원', ja: '焼砕源', zh: '索斯瓦院', en: 'Soswaewon Garden' }, q: '소쇄원', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '물길과 대나무, 정자가 한 폭의 그림처럼 놓인 조선의 원림. 앉아 있으면 발소리부터 달라집니다.', ja: '水道と竹、精子が一幅の絵のように置かれた朝鮮の原林。座ると足音から変わります。', zh: '朝鲜园林，水道、竹林、亭台楼阁，如画一般。当你坐下时，脚步声就会改变。', en: 'A Joseon garden of water, bamboo and pavilions arranged like a painting. Even your footsteps change.' },
          photo: 'damyang-p2' },
        { phase: 'afternoon', time: '15:10', name: { ko: '면앙정', ja: '面安亭', zh: '明囊亭', en: 'Myeonangjeong Pavilion' }, q: '면앙정', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '들판 한가운데 솟은 정자. 사방이 논이라 계절마다 풍경이 통째로 바뀝니다.', ja: '畑の真ん中に湧いた精子。四方が水田なので季節ごとに風景が丸ごと変わります。', zh: '一座亭子矗立在田野中央。到处都是稻田，所以景色随着季节的变化而变化。', en: 'A pavilion standing alone in the fields — the view changes completely with the season.' },
          photo: 'damyang-p4' },
        { phase: 'evening', time: '16:30', name: { ko: '담양 시내 · 대나무 카페', ja: '潭陽市内・竹カフェ', zh: '潭阳市中心·Bamboo Cafe', en: 'Damyang town & a bamboo café' }, q: '담양읍', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
          desc: { ko: '해 질 때까지 읍내에서 쉬다가 저녁. 대나무숲을 낀 카페가 많습니다.', ja: 'なるまで町内で休んで夕方。竹林をはめたカフェがたくさんあります。', zh: '在城里休息直到日落，然后吃晚饭。竹林环绕的咖啡馆林立。', en: 'Rest in town until sunset, then dinner. Many cafés sit right against the groves.' } },
        { phase: 'return', time: '19:00', name: { ko: '담양공용버스터미널', ja: '潭陽公共バスターミナル', zh: '潭阳公共巴士总站', en: 'Damyang Bus Terminal' }, q: '담양공용버스터미널', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
          desc: { ko: '터미널로 걸어와 마무리. 광주행 막차 시간을 확인하세요.', ja: 'ターミナルに歩いて仕上げ。光走行終車時間を確認してください。', zh: '步行至终点站并完成。查看前往光州的末班车时间。', en: 'A short walk back. Check the last bus to Gwangju.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍜', dish: { ko: '잔치국수 · 국밥', ja: 'ごちそう麺・クッパ', zh: '宴会面·汤饭', en: 'Janchi-guksu · gukbap' }, note: { ko: '터미널 근처에서 가볍게 시작.', ja: 'ターミナル近くで軽くスタート。', zh: '在客运站附近轻轻启动。', en: 'Something light near the terminal.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥩', dish: { ko: '떡갈비 · 국수', ja: 'もちカルビ・麺', zh: '炒年糕·面条', en: 'Tteokgalbi · noodles' }, note: { ko: '담양 떡갈비는 다진 고기를 숯불에 구운 것.', ja: '潭陽餅は、切り刻んだ肉を炭火で焼いたもの。', zh: '潭阳年糕排骨是用木炭烤制的肉末。', en: 'Damyang tteokgalbi is minced beef over charcoal.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍓', dish: { ko: '딸기 · 죽순 요리', ja: 'いちご・たけのこ料理', zh: '草莓竹笋菜肴', en: 'Strawberries · bamboo shoots' }, note: { ko: '겨울엔 딸기, 봄엔 죽순.', ja: '冬にはイチゴ、春にはたけのこ。', zh: '冬天有草莓，春天有竹笋。', en: 'Strawberries in winter, bamboo shoots in spring.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍚', dish: { ko: '대통밥 · 한정식', ja: '大豆ご飯・限定食', zh: '大同饭·韩定食', en: 'Daetongbap · hanjeongsik' }, note: { ko: '대나무통에 지은 밥, 그 향이 오래 남습니다.', ja: '竹筒に建てたご飯、その香りが長く残ります。', zh: '竹篓里煮出来的米饭，香味悠长。', en: 'Rice steamed in bamboo — the scent stays with you.' } }
    ],
    photos: [
      { file: 'damyang-p1', cap: { ko: '메타세쿼이아길', ja: 'メタセコイアギル', zh: '水杉路', en: 'The metasequoia road' } },
      { file: 'damyang-p2', cap: { ko: '소쇄원', ja: '焼砕源', zh: '索斯瓦院', en: 'Soswaewon Garden' } },
      { file: 'damyang-p3', cap: { ko: '관방제림', ja: '官房制林', zh: '官房杰林', en: 'Gwanbangjerim' } },
      { file: 'damyang-p4', cap: { ko: '면앙정', ja: '面安亭', zh: '明囊亭', en: 'Myeonangjeong' } }
    ],
    also: [
      { name: { ko: '한국대나무박물관', ja: '韓国竹博物館', zh: '韩国竹博物馆', en: 'Korea Bamboo Museum' }, q: '한국대나무박물관', desc: { ko: '대나무로 만든 생활 도구와 공예품.', ja: '竹で作られたライフツールと工芸品。', zh: '由竹子制成的家用工具和工艺品。', en: 'Tools and crafts made of bamboo.' } },
      { name: { ko: '죽향문화체험마을', ja: '竹香文化体験村', zh: '竹香文化体验村', en: 'Jukhyang Culture Village' }, q: '죽향문화체험마을', desc: { ko: '대나무 공예를 직접 해 보는 곳.', ja: '竹工芸を直接してみるところ。', zh: '一个可以尝试竹工艺的地方。', en: 'Try bamboo craft yourself.' } },
      { name: { ko: '추성훈련원', ja: '秋城訓練院', zh: '中城培训中心', en: 'Chuseong Training Ground' }, q: '추성훈련원', desc: { ko: '조선 수군의 훈련터, 숲이 깊습니다.', ja: '朝鮮水軍の訓練場、森が深い。', zh: '朝鲜海军的训练场位于森林深处。', en: 'A Joseon naval training ground, deep in the trees.' } }
    ],
    tip: { ko: '죽녹원은 오전 9시 직후가 가장 한적합니다. 여름엔 모기 기피제를 챙기세요.', ja: '竹緑園は午前9時直後が最も限られています。夏には蚊忌避剤を手に入れましょう。', zh: '竹绿院早上9点以后最安静。夏天请带上防蚊剂。', en: 'Juknokwon is quietest just after nine. In summer, bring mosquito repellent.' }
  },

  /* ---------------------------------------------------------------- ANSEONG */
  {
    id: 'anseong', region: 'capital', emoji: '🍇', tint: '#D9C0F0',
    name: { ko: '안성', ja: '安城', zh: '安城', en: 'Anseong' },
    sub: { ko: '경기도 안성시', ja: '京畿道安城市', zh: '京畿道安城市', en: 'Anseong, Gyeonggi' },
    tag: { ko: '남사당과 산사, 포도의 고장', ja: '南寺堂と山寺、ぶどうの里', zh: '南寺堂与山寺，葡萄之乡', en: 'Namsadang players, mountain temples, grapes' },
    intro: {
      ko: '안성은 관광지보다 생활의 도시에 가깝습니다. 그래서 하루가 오히려 편안합니다. 남사당 공연과 오래된 산사, 시내의 객사와 향교를 천천히 도는 코스로 짰어요.', ja: '安城は観光地よりも生活の街に近い。だから一日はむしろ快適です。南祠堂公演と古い山寺、市内の客社と郷校をゆっくり回るコースで編みます。', zh: '安城市更接近于一个生活城市而不是一个旅游目的地。所以这一天还是比较舒服的。我们计划了一个缓慢的路线，包括在南寺堂、一座古老的山寺和当地的神社和当地的神社进行表演。',
      en: 'Anseong is more a working town than a tourist town, which is exactly why a day here feels calm: namsadang performance, old mountain temples, and the guest house and Confucian school downtown.'
    },
    seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을 포도', ja: '秋のブドウ', zh: '秋天的葡萄', en: 'Autumn grapes' }],
    transport: { ko: '버스 + 택시', ja: 'バス＋タクシー', zh: '巴士＋出租车', en: 'Bus + taxi' },
    duration: { ko: '약 10시간', ja: '約10時間', zh: '约10小时', en: 'About 10 hours' },
    hub: {
      ko: '안성종합버스터미널', ja: '安城総合バスターミナル', zh: '安城巴士客运站', en: 'Anseong Bus Terminal', q: '안성종합버스터미널',
      note: { ko: '서울 강남에서 1시간 10분. 터미널에서 시내까지 버스로 10분, 산사까지는 30분쯤 걸립니다.', ja: 'ソウル江南から1時間10分。ターミナルから市内までバスで10分、山寺までは30分ほどかかります。', zh: '距离首尔江南区1小时10分钟。从客运站乘坐公交车到市中心需10分钟，到山寺约30分钟。', en: 'Seventy minutes from Gangnam. Ten minutes by bus into town, half an hour to the temples.' }
    },
    courses: [{
      id: 'oneday',
      title: { ko: '객사에서 남사당 공연까지', ja: '客舎から南寺堂の公演まで', zh: '从客舍到南寺堂表演', en: 'From the old guest house to a namsadang performance' },
      meta: { ko: '7곳 · 약 10시간 · 버스 4회', ja: '7か所・約10時間・バス4回', zh: '7个地点，约10小时，4辆巴士', en: '7 stops · about 10 hours · 4 bus rides' },
      steps: [
        { phase: 'start', time: '09:00', name: { ko: '안성종합버스터미널', ja: '安城総合バスターミナル', zh: '安城巴士客运站', en: 'Anseong Bus Terminal' }, q: '안성종합버스터미널', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
          desc: { ko: '터미널에서 시내 방면 버스로. 짐은 보관함에 맡기고 가볍게 움직이세요.', ja: 'ターミナルから市内方面バスへ。荷物を保管箱に預けて軽く動かしてください。', zh: '从客运站乘坐巴士前往市区。将行李寄存在储物柜内，轻装上阵。', en: 'A town bus from the terminal. Leave the bag in a locker and travel light.' } },
        { phase: 'morning', time: '09:20', name: { ko: '안성객사', ja: '安城客', zh: '安城阁寺', en: 'Anseong Gaegsa' }, q: '안성객사', move: { ko: '버스 약 10분', ja: 'バス約10分', zh: '巴士约10分钟', en: 'Bus, about 10 min' },
          desc: { ko: '조선 시대 관리가 머물던 숙소. 낮은 담장 너머로 마당과 정청이 한눈에 들어옵니다.', ja: '朝鮮時代の管理がとどまった宿。低いフェンスを越えて、庭とチョンチョンが一目で入ってきます。', zh: '朝鲜时代官员居住的住所。矮墙外一眼就能看到院子和衙门。', en: 'Where travelling officials once stayed — low walls, an open courtyard, a raised hall.' },
          photo: 'anseong-cover' },
        { phase: 'morning', time: '10:00', name: { ko: '안성향교', ja: '安城郷橋', zh: '安城乡校', en: 'Anseong Hyanggyo' }, q: '안성향교', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
          desc: { ko: '조선의 지방 교육기관. 은행나무 두 그루가 마당을 덮고 있습니다.', ja: '朝鮮の地方教育機関。イチョウの木の2本が庭を覆っています。', zh: '朝鲜当地的教育机构。院子里长满了两棵银杏树。', en: 'The Joseon local academy, with two ginkgos shading the yard.' },
          photo: 'anseong-p4' },
        { phase: 'morning', time: '10:40', name: { ko: '칠장사', ja: '漆商', zh: '七将寺', en: 'Chiljangsa Temple' }, q: '칠장사', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
          desc: { ko: '서운산 자락의 오래된 절. 대웅전 앞 계단을 오르면 산이 사방으로 열립니다.', ja: '西雲山の裾の古い寺院。大雄殿の前の階段を登ると、山が四方に開きます。', zh: '宣云山山麓的一座古老寺庙。登上大殿前的阶梯，山势四通八达。', en: 'An old temple on the shoulder of Seounsan — climb the steps and the mountains open around you.' },
          photo: 'anseong-p1' },
        { phase: 'lunch', time: '12:20', name: { ko: '안성 시내', ja: '安城市', zh: '安城市中心', en: 'Anseong town' }, q: '안성시 중앙로', move: { ko: '차 약 30분', ja: '車約30分', zh: '车程约30分钟', en: 'Drive, about 30 min' },
          desc: { ko: '시내로 내려와 점심. 장터 국밥과 한우, 어느 쪽으로 정해도 후회 없습니다.', ja: 'ダウンタウンに降りて昼食。チャンタークッパと韓牛、どちらに決めても後悔しません。', zh: '进城吃午饭。您不会后悔选择市场汤和韩国牛肉。', en: 'Back down for lunch — market gukbap or local beef, either is right.' } },
        { phase: 'afternoon', time: '13:40', name: { ko: '안성맞춤랜드 · 남사당공연장', ja: '安城カスタムランド・南社堂公演場', zh: '安城Machum Land南寺堂表演厅', en: 'Anseong Matchum Land & Namsadang Theatre' }, q: '안성맞춤랜드', move: { ko: '버스 약 25분', ja: 'バス約25分', zh: '巴士约25分钟', en: 'Bus, about 25 min' },
          desc: { ko: '3월부터 11월까지 주말 오후 2시에 남사당 상설공연이 열립니다. 공연이 없는 날은 잔디광장과 야생화단지를 걷는 것으로 충분합니다.', ja: '3月から11月までの週末午後2時に南祠堂常設公演が行われます。公演のない日は芝生広場や野生花団地を歩くだけで十分です。', zh: '3月至11月期间，每周末下午2点都会在 Namsadang 举行常设表演。没有演出的日子，逛逛草地广场和野花丛就足够了。', en: 'From March to November the namsadang performs at two on weekends. Without a show, the lawns and wildflower beds are enough.' } },
        { phase: 'afternoon', time: '16:00', name: { ko: '청룡사', ja: '青龍寺', zh: '清龙寺', en: 'Cheongnyongsa Temple' }, q: '청룡사', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
          desc: { ko: '고즈넉한 산사. 대웅전 뒤로 산 능선이 겹겹이 이어집니다.', ja: '静かな山寺。大雄殿の後ろに山の尾根が重なり合います。', zh: '一座安静的山寺。大雄殿后面，山脊层层叠叠。', en: 'A quiet mountain temple, ridges folding away behind the hall.' },
          photo: 'anseong-p2' },
        { phase: 'evening', time: '17:30', name: { ko: '안성천 · 시내', ja: '安城川・市内', zh: '安城川', en: 'Anseongcheon & downtown' }, q: '안성천', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
          desc: { ko: '해 질 무렵 물길을 따라 산책하다가 저녁. 포도 디저트로 하루를 닫습니다.', ja: '夕暮れ時の水路に沿って散歩して夕方。ブドウのデザートで一日を閉じます。', zh: '日落时沿着水道散步。以葡萄甜点结束一天的生活。', en: 'Walk the stream at sunset, then dinner, and close the day with something made of grapes.' } },
        { phase: 'return', time: '19:30', name: { ko: '안성종합버스터미널', ja: '安城総合バスターミナル', zh: '安城巴士客运站', en: 'Anseong Bus Terminal' }, q: '안성종합버스터미널', move: { ko: '버스 약 10분', ja: 'バス約10分', zh: '巴士约10分钟', en: 'Bus, about 10 min' },
          desc: { ko: '터미널로 돌아와 마무리. 서울행 막차는 21시 전후까지 있습니다.', ja: 'ターミナルに戻って仕上げ。ソウル行きの終車は21時前後まであります。', zh: '返回终端以完成。前往首尔的末班车运行至21:00左右。', en: 'Back to the terminal. The last bus to Seoul runs until around nine.' } }
      ]
    }],
    food: [
      { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 해장국', ja: 'クッパ・ヘジャングク', zh: '汤饭·解酒汤', en: 'Gukbap · haejang-guk' }, note: { ko: '터미널 근처 국밥집이 아침부터 문을 엽니다.', ja: 'ターミナル近くのクッパ屋さんが朝からドアを開けます。', zh: '客运站附近的汤餐厅早上营业。', en: 'The gukbap places near the terminal open early.' } },
      { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥩', dish: { ko: '안성 한우 · 장터국밥', ja: '安城ハンウ・チャンタークッパ', zh: '安城韩牛·酱油汤饭', en: 'Anseong hanwoo · market gukbap' }, note: { ko: '안성은 한우로 이름난 곳입니다.', ja: '安城は韓牛と名付けられた場所です。', zh: '安城以韩国牛肉而闻名。', en: 'Anseong is known for its hanwoo beef.' } },
      { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍇', dish: { ko: '포도 · 배 · 인삼', ja: 'ぶどう・船・高麗人参', zh: '葡萄、梨、人参', en: 'Grapes · pears · ginseng' }, note: { ko: '가을이면 포도, 겨울이면 배.', ja: '秋ならぶどう、冬なら腹。', zh: '秋天种葡萄，冬天种梨。', en: 'Grapes in autumn, pears into winter.' } },
      { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍖', dish: { ko: '한우구이 · 순대국', ja: '韓牛焼・スンデグク', zh: '烤韩牛·Sundaeguk', en: 'Grilled hanwoo · sundae guk' }, note: { ko: '하루의 끝은 불판 위 고기 한 점.', ja: '一日の終わりは不判の上の肉一点。', zh: '这一天以烤架上的一块肉结束。', en: 'End the day with beef on the grill.' } }
    ],
    photos: [
      { file: 'anseong-cover', cap: { ko: '안성객사', ja: '安城客', zh: '安城阁寺', en: 'Anseong Gaegsa' } },
      { file: 'anseong-p1', cap: { ko: '칠장사 대웅전', ja: '漆商大雄殿', zh: '七丈寺大雄殿', en: 'Chiljangsa Temple' } },
      { file: 'anseong-p2', cap: { ko: '청룡사', ja: '青龍寺', zh: '清龙寺', en: 'Cheongnyongsa Temple' } },
      { file: 'anseong-p3', cap: { ko: '죽주산성', ja: '竹州山城', zh: '竹州山城', en: 'Jukjusanseong Fortress' } }
    ],
    also: [
      { name: { ko: '안성팜랜드', ja: '安城パームランド', zh: '安城农场', en: 'Anseong Farmland' }, q: '안성팜랜드', desc: { ko: '목장과 초원, 아이와 함께라면 여기.', ja: '牧場や牧草地、子供と一緒ならここ。', zh: '牧场和草地，如果您带着孩子，这里就是您的好去处。', en: 'Pasture and meadow — the place to bring children.' } },
      { name: { ko: '죽주산성', ja: '竹州山城', zh: '竹州山城', en: 'Jukjusanseong' }, q: '죽주산성', desc: { ko: '산성을 따라 걷는 짧은 등산로.', ja: '山に沿って歩く短い登山道。', zh: '沿着山腰的一条短途徒步小径。', en: 'A short walk along an old mountain fortress.' } },
      { name: { ko: '금광저수지', ja: '金鉱貯水池', zh: '金光水库', en: 'Geumgwang Reservoir' }, q: '금광저수지', desc: { ko: '해 질 무렵 물 위로 산이 내려앉는 곳.', ja: '夕暮れ時の水の上に山が降る場所。', zh: '日落时山倒水的地方。', en: 'Where the hills settle onto the water at dusk.' } }
    ],
    tip: { ko: '남사당 상설공연은 3~11월 주말 오후 2시입니다. 평일에는 공연이 없으니 일정을 맞춰 보세요.', ja: '南社堂常設公演は3～11月の週末午後2時です。平日には公演がないので、スケジュールを合わせてみてください。', zh: '南寺堂的常设表演于3月至11月的周末下午2点举行。工作日没有演出，所以要做好相应的计划。', en: 'The namsadang show runs at 2 p.m. on weekends from March to November — no weekday shows.' }
  }
];

/* ───────────── 취향 칩 (홈 통합 찾기) ─────────────
   id 는 themes.js 의 테마 id 와 같습니다. 칩을 누르면 그 테마만 남습니다. */
const TASTES = [
  { id: 'coast',    emoji: '🌊', ko: '바다', ja: '海', zh: '海',    en: 'Sea' },
  { id: 'mountain', emoji: '⛰️', ko: '산', ja: '山', zh: '山',      en: 'Mountains' },
  { id: 'dog',      emoji: '🐶', ko: '반려견', ja: 'ペット犬', zh: '宠物狗',  en: 'Dogs' },
  { id: 'night',    emoji: '🌃', ko: '야경', ja: '夜景', zh: '夜景',    en: 'Night views' },
  { id: 'hanok',    emoji: '🏯', ko: '한옥', ja: '韓屋', zh: '韩屋',    en: 'Hanok' },
  { id: 'onsen',    emoji: '♨️', ko: '온천', ja: '温泉', zh: '温泉',    en: 'Hot springs' },
  { id: 'market',   emoji: '🧺', ko: '시장', ja: '市場', zh: '市场',    en: 'Markets' },
  { id: 'photo',    emoji: '📸', ko: '인생샷', ja: '映え写真', zh: '出片照',  en: 'Photo spots' }
];
