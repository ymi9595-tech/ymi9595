/* 베란다 텃밭 · 제철 파종 & 물주기 계산기 — 작물 데이터 (한국 중부지방 기준) */
window.GARDEN_DATA = {
  spaces: [
    { id: 'window', label: '실내 창가', icon: 'window', hint: '햇빛이 창을 통해 들어오는 실내' },
    { id: 'balcony', label: '베란다', icon: 'balcony', hint: '확장형·비확장형 베란다' },
    { id: 'roof', label: '옥상·마당', icon: 'sun', hint: '노지에 가까운 야외 공간' },
    { id: 'farm', label: '주말농장', icon: 'field', hint: '텃밭 한 평 이상' }
  ],
  suns: [
    { id: 1, label: '반그늘', hint: '하루 2~3시간 정도' },
    { id: 2, label: '햇빛 4시간+', hint: '오전이나 오후 햇빛이 4시간 이상' },
    { id: 3, label: '종일 햇빛', hint: '하루 6시간 이상 볕이 드는 곳' }
  ],
  crops: [
    {
      id: 'sangchu', name: '상추', kind: '잎채소', glyph: 'leaf',
      indoorWinter: true,
      spaces: ['window', 'balcony', 'roof', 'farm'], sun: 2,
      sow: [3, 4, 5, 8, 9, 10], germ: [3, 7], harvest: [30, 45],
      water: 'high', difficulty: 1,
      sowNote: '봄(3~5월)과 가을(8~10월) 두 번 심을 수 있어요.',
      harvestNote: '잎을 바깥쪽부터 따면 2~3달 계속 수확할 수 있어요.',
      pests: '진딧물·민달팽이·잿빛곰팡이',
      tip: '겉흙이 마르면 화분 밑으로 물이 빠질 만큼 흠뻑 주세요. 낮 25℃가 넘으면 웃자라니 서늘한 창가가 좋아요.',
      recipe: '상추 겉절이 · 쌈 채소'
    },
    {
      id: 'tomato', name: '방울토마토', kind: '열매채소', glyph: 'fruit',
      spaces: ['balcony', 'roof', 'farm'], sun: 3,
      sow: [3, 4, 5], germ: [5, 10], harvest: [80, 100],
      water: 'mid', difficulty: 2,
      sowNote: '씨앗은 3~4월, 모종은 4월 말~5월에 심으면 가장 안정적이에요.',
      harvestNote: '모종으로 심으면 60~70일 뒤부터 익기 시작해요.',
      pests: '역병·흰가루병·담배나방·진딧물',
      tip: '곁순(잎과 줄기 사이 새순)을 꾸준히 따 주고, 꽃이 필 때 화분을 살짝 흔들어 주면 열매가 잘 맺혀요.',
      recipe: '카프레제 · 토마토 달걀볶음'
    },
    {
      id: 'basil', name: '바질', kind: '허브', glyph: 'sprig',
      spaces: ['window', 'balcony', 'roof'], sun: 2,
      sow: [4, 5, 6], germ: [7, 14], harvest: [40, 60],
      water: 'mid', difficulty: 1,
      sowNote: '따뜻해진 5월이 가장 잘 자라요. 씨앗은 흙에 살짝 눌러만 주세요.',
      harvestNote: '잎이 6장 이상이면 위쪽부터 조금씩 따도 계속 자라요.',
      pests: '진딧물·응애·잿빛곰팡이',
      tip: '꽃대가 올라오면 바로 잘라 주세요. 꽃이 피면 잎이 얇아지고 향이 줄어요.',
      recipe: '바질 페스토 · 토마토 샐러드'
    },
    {
      id: 'daepa', name: '대파·쪽파', kind: '잎채소', glyph: 'sprig',
      indoorWinter: true,
      spaces: ['window', 'balcony', 'roof', 'farm'], sun: 1,
      sow: [3, 4, 5, 9, 10], germ: [7, 14], harvest: [60, 90],
      water: 'mid', difficulty: 1,
      sowNote: '마트에서 산 대파의 뿌리 5cm를 심어도 잘 자라요.',
      harvestNote: '쪽파는 40~60일이면 수확, 대파는 2~3달 키워요.',
      pests: '파총채벌레·녹병',
      tip: '흙을 얕게 덮고 물을 자주 주세요. 잎이 누렇게 되면 물이 부족한 신호예요.',
      recipe: '파기름 · 대파 육개장'
    },
    {
      id: 'gochu', name: '고추', kind: '열매채소', glyph: 'fruit',
      spaces: ['balcony', 'roof', 'farm'], sun: 3,
      sow: [2, 3, 4], germ: [10, 20], harvest: [90, 120],
      water: 'low', difficulty: 2,
      sowNote: '씨앗은 2~3월에 싹을 틔우고, 모종은 5월 초에 심어요.',
      harvestNote: '모종 기준 70~90일 뒤부터 따기 시작해요.',
      pests: '진딧물·총채벌레·탄저병',
      tip: '물은 적게, 볕은 충분히. 흙이 바짝 마를 때 주는 편이 매운맛과 병 저항에 좋아요.',
      recipe: '고추장아찌 · 고추장 볶음'
    },
    {
      id: 'strawberry', name: '딸기', kind: '열매채소', glyph: 'berry',
      spaces: ['balcony', 'roof'], sun: 2,
      sow: [3, 4, 9, 10], germ: [14, 21], harvest: [90, 150],
      water: 'mid', difficulty: 2,
      sowNote: '씨앗보다 모종(런너 묘)이 훨씬 쉬워요. 봄·가을에 심어요.',
      harvestNote: '가을에 심은 모종은 이듬해 봄(4~5월)에 열매를 맺어요.',
      pests: '응애·진딧물·잿빛곰팡이',
      tip: '덩굴(러너)은 과감히 따 주세요. 열매가 흙에 닿지 않게 짚이나 받침을 깔아 주면 덜 썩어요.',
      recipe: '딸기 우유 · 딸기 잼'
    },
    {
      id: 'blueberry', name: '블루베리', kind: '과수', glyph: 'berry',
      spaces: ['roof', 'farm'], sun: 3,
      sow: [3, 4, 10, 11], germ: [20, 30], harvest: [730, 1095],
      water: 'mid', difficulty: 3,
      sowNote: '묘목으로 심는 작물이에요. 봄·가을 휴면기에 심어요.',
      harvestNote: '심은 해는 뿌리 내리기에 집중하고, 보통 2~3년 뒤부터 수확해요.',
      pests: '조류(새) 피해·탄저병',
      tip: '산성 흙(pH 4.5~5.5)을 좋아해요. 피트모스를 섞고, 2품종 이상 함께 심어야 열매가 잘 맺혀요.',
      recipe: '블루베리 요거트 · 스무디'
    },
    {
      id: 'cherry', name: '체리', kind: '과수', glyph: 'tree',
      spaces: ['roof', 'farm'], sun: 3,
      sow: [3, 11], germ: [30, 45], harvest: [1095, 1825],
      water: 'mid', difficulty: 3,
      sowNote: '접목 묘목을 겨울 휴면기(11월)나 이른 봄(3월)에 심어요.',
      harvestNote: '열매는 심고 3~5년 뒤부터. 그전까지는 나무 키우는 시기예요.',
      pests: '진딧물·잎말이나방·새 피해',
      tip: '배수가 정말 중요해요. 물이 고이는 자리는 피하고, 심을 때 접목 부위가 흙에 묻히지 않게 하세요.',
      recipe: '체리 청 · 체리 파이'
    },
    {
      id: 'sigeumchi', name: '시금치', kind: '잎채소', glyph: 'leaf',
      indoorWinter: true,
      spaces: ['window', 'balcony', 'roof', 'farm'], sun: 1,
      sow: [3, 4, 9, 10, 11], germ: [5, 10], harvest: [40, 60],
      water: 'high', difficulty: 1,
      sowNote: '서늘한 기후를 좋아해요. 가을 파종(9~11월)이 가장 잘 자라요.',
      harvestNote: '잎이 6~8장이면 통째로 뽑거나 겉잎만 따요.',
      pests: '진딧물·잎굴파리',
      tip: '흙이 마르면 잎이 얇아져요. 겉흙이 보이면 바로 물을 주세요.',
      recipe: '시금치 나물 · 시금치 된장국'
    },
    {
      id: 'rucola', name: '루콜라', kind: '잎채소', glyph: 'leaf',
      indoorWinter: true,
      spaces: ['window', 'balcony', 'roof'], sun: 2,
      sow: [3, 4, 5, 9, 10], germ: [5, 10], harvest: [30, 45],
      water: 'mid', difficulty: 1,
      sowNote: '봄·가을에 씨앗을 뿌리고 3주만 지나면 어린잎을 딸 수 있어요.',
      harvestNote: '어린잎은 3주부터, 다 자란 잎은 30~45일 뒤 수확해요.',
      pests: '벼룩잎벌레·진딧물',
      tip: '30℃가 넘으면 꽃대가 빨리 올라와요. 여름엔 서늘한 곳에 두세요.',
      recipe: '루콜라 샐러드 · 루콜라 피자'
    },
    {
      id: 'rosemary', name: '로즈메리', kind: '허브', glyph: 'sprig',
      spaces: ['balcony', 'roof'], sun: 3,
      sow: [4, 5, 9, 10], germ: [14, 25], harvest: [90, 120],
      water: 'low', difficulty: 2,
      sowNote: '씨앗 발아가 느려요. 모종이나 꺾꽂이로 시작하는 편이 쉬워요.',
      harvestNote: '가지가 20cm 이상 자라면 조금씩 잘라 쓸 수 있어요.',
      pests: '과습으로 인한 뿌리썩음·응애',
      tip: '물을 아끼는 허브예요. 흙이 바짝 말랐을 때 화분 밑으로 흐르게 주세요.',
      recipe: '로즈메리 스테이크 · 허브 오일'
    },
    {
      id: 'oi', name: '오이', kind: '열매채소', glyph: 'fruit',
      spaces: ['balcony', 'roof', 'farm'], sun: 3,
      sow: [4, 5], germ: [5, 10], harvest: [55, 70],
      water: 'high', difficulty: 2,
      sowNote: '5월 초 모종을 심으면 여름 내내 따 먹을 수 있어요.',
      harvestNote: '모종 기준 45~55일 뒤부터 수확해요.',
      pests: '노균병·흰가루병·총채벌레',
      tip: '덩굴이 뻗으니 지주를 세워 주세요. 물은 아침에 잎에 닿지 않게 흙에 주세요.',
      recipe: '오이냉국 · 오이무침'
    }
  ],
  /* 월별 수확·레시피 (계절 카드) */
  seasons: [
    { id: 'spring', name: '봄', months: [3, 4, 5], crops: '상추 · 시금치 · 루콜라 · 대파',
      recipes: ['상추 겉절이', '시금치 된장국', '딸기 잼'],
      note: '봄은 씨앗 뿌리기 좋은 계절. 잎채소는 3주면 첫 잎을 봅니다.' },
    { id: 'summer', name: '여름', months: [6, 7, 8], crops: '방울토마토 · 바질 · 오이 · 고추',
      recipes: ['카프레제', '바질 페스토', '오이냉국'],
      note: '해가 길어 열매채소가 힘을 냅니다. 물 주는 시간은 아침이 가장 좋아요.' },
    { id: 'autumn', name: '가을', months: [9, 10, 11], crops: '상추 · 시금치 · 루콜라 · 고추',
      recipes: ['고추장아찌', '상추 겉절이', '루콜라 샐러드'],
      note: '서늘해져 잎채소가 달라집니다. 11월은 김장 채소 수확철이에요.' },
    { id: 'winter', name: '겨울', months: [12, 1, 2], crops: '대파 · 시금치(실내) · 로즈메리',
      recipes: ['대파 육개장', '시금치 나물', '허브 오일'],
      note: '실내 창가에서 잎채소를 이어 갈 수 있어요. 물은 훨씬 적게 줍니다.' }
  ],
  faq: [
    { q: '파종 시기는 어떤 기준인가요?',
      a: '한국 중부지방(수도권·충청)의 평균 기온을 기준으로 잡았어요. 남부지방은 1~2주 빠르게, 강원 산지는 1~2주 늦게 보시면 됩니다. 실내 창가·베란다는 바깥보다 따뜻해 씨앗 발아가 조금 빠른 편이에요.' },
    { q: '베란다에서 물은 얼마나 자주 줘야 하나요?',
      a: '작물마다 다르지만 기본은 "겉흙 2~3cm가 마르면 흠뻑"이에요. 계산기는 작물·계절·공간(실내/베란다/옥상)을 반영해 며칠 간격인지 알려 줍니다. 여름엔 1~2일, 겨울엔 5~7일에 한 번으로 크게 차이가 나요.' },
    { q: '겨울에도 베란다에서 키울 수 있나요?',
      a: '됩니다. 다만 겨울 베란다는 해가 짧고 흙이 늦게 말라요. 상추·시금치·대파 같은 잎채소를 창가 가장 밝은 자리에 두고, 물은 흙을 만져 보고 마를 때만 주세요. 열매채소는 봄까지 기다리는 편이 좋아요.' },
    { q: '씨앗과 모종 중 무엇을 사야 하나요?',
      a: '처음이라면 모종을 권해요. 상추·루콜라는 씨앗도 쉽지만, 방울토마토·고추·딸기·오이는 모종으로 시작하면 2~3주를 아낄 수 있어요. 씨앗은 발아까지 물 관리가 필요합니다.' },
    { q: '계산된 수확일은 정확한가요?',
      a: '같은 작물이라도 햇빛·기온·화분 크기에 따라 1~3주 차이가 나요. 계산기는 평균값을 알려 주는 도구이고, 잎색과 줄기 굵기를 보며 조절하시면 됩니다.' }
  ]
};
