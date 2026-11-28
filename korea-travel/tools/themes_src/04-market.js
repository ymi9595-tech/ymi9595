/* -------------------------------------------------- 04 전통시장·5일장 */
{
  id: 'market', emoji: '🧺', tint: '#F7A8B8',
  name: { ko: '전통시장 · 5일장', en: 'Traditional & five-day markets' },
  sub: { ko: '시장 골목에서 하루를 먹고 걷는 코스', en: 'A day of eating and walking market alleys' },
  tag: { ko: '시장 · 장날 · 골목 간식', en: 'Markets, market days, alley snacks' },
  intro: {
    ko: '시장은 오전에 가장 살아 있습니다. 상인들이 물건을 펴고, 아직 사람이 많지 않고, 갓 만든 것이 가장 따뜻할 때예요. 서울 안에서 네 개의 시장을 잇는 코스를 기본으로 잡았습니다. 지방 5일장은 장날이 닷새마다 돌아오니, 아래 목록에서 날짜를 확인하고 맞춰 가세요.',
    en: 'Markets are most alive in the morning: stalls opening, crowds still thin, everything just made. This route links four Seoul markets in a day. Outside the city the five-day markets rotate on a five-day cycle, so check the date in the list below before you go.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '설·추석 전', en: 'Before holidays' }],
  transport: { ko: '지하철 + 도보', en: 'Subway + on foot' },
  duration: { ko: '약 9시간', en: 'About 9 hours' },
  hub: {
    ko: '서울역', en: 'Seoul Station', q: '서울역',
    note: {
      ko: 'KTX·공항철도·1·4호선이 만나는 곳. 짐은 역 물품보관함에 맡기고 1호선으로 두 정거장이면 첫 시장입니다.',
      en: 'KTX, the airport railroad and lines 1 and 4 meet here. Leave your bag in a locker; the first market is two stops on Line 1.'
    }
  },
  course: {
    title: { ko: '서울 문 밖 시장 하루 — 경동에서 신당까지', en: 'A day of Seoul markets — Gyeongdong to Sindang' },
    meta: { ko: '7곳 · 약 9시간 · 지하철 4회', en: '7 stops · about 9 hours · 4 subway rides' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '1호선으로 제기동까지 20분. 시장은 10시 전에 들어가야 사람이 적습니다.', en: 'Twenty minutes on Line 1 to Jegi-dong; markets are quietest before ten.' } },
      { phase: 'morning', time: '09:20', name: { ko: '경동시장 · 약령시', en: 'Gyeongdong Market & herbal street' }, q: '경동시장', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '한약재 냄새가 골목 전체에 퍼진 큰 시장. 건조 과일과 인삼, 잡곡을 조금씩 사 두세요.', en: 'A big market where the smell of herbal medicine fills the alleys — dried fruit, ginseng, grains by the handful.' },
        photo: 'th-market' },
      { phase: 'morning', time: '11:00', name: { ko: '서울풍물시장', en: 'Seoul Folk Flea Market' }, q: '서울풍물시장', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '옛 생활용품과 LP, 카메라가 쌓인 시장. 값을 부르면 깎는 재미가 있는 곳입니다.', en: 'Old household goods, records and cameras stacked high — a place where the price is a starting point.' } },
      { phase: 'lunch', time: '12:30', name: { ko: '광장시장', en: 'Gwangjang Market' }, q: '광장시장', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '점심은 여기서. 앉을 자리가 없으면 안쪽 골목으로 한 블록 들어가면 금방 생깁니다.', en: 'Lunch here; if the stools are full, one alley deeper usually opens up.' },
        photo: 'th-market-p2' },
      { phase: 'afternoon', time: '14:30', name: { ko: '남대문시장', en: 'Namdaemun Market' }, q: '남대문시장', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '수입품과 먹자골목이 미로처럼 얽힌 시장. 길을 잃어도 곧 뭔가 나옵니다.', en: 'Import goods and food alleys in a maze — getting lost is part of it.' } },
      { phase: 'afternoon', time: '16:00', name: { ko: '방산종합시장', en: 'Bangsan Market' }, q: '방산종합시장', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '인쇄 골목과 포장지 가게가 이어지는 작업하는 시장. 관광지 느낌이 없어 오히려 좋습니다.', en: 'Printing alleys and packaging shops — a working market with no tourist gloss, which is the appeal.' } },
      { phase: 'evening', time: '17:30', name: { ko: '신당동 떡볶이타운', en: 'Sindang-dong tteokbokki town' }, q: '신당동 떡볶이타운', move: { ko: '지하철 약 10분', en: 'Subway, about 10 min' },
        desc: { ko: '저녁은 즉석떡볶이로. 여러 명이 둘러앉아 사리로 양을 늘리는 방식입니다.', en: 'Dinner is tteokbokki cooked at the table, with extra portions added as you go.' } },
      { phase: 'return', time: '19:00', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '6호선에서 1호선으로 한 번 갈아타면 서울역. 사 온 것이 많으면 보관함에서 짐을 찾으세요.', en: 'Line 6 to Line 1 and you are back; collect the bag from the locker on the way.' } }
    ]
  },
  conds: [
    { k: { ko: '5일장', en: 'Five-day markets' }, v: { ko: '지역마다 장날이 2·7 / 3·8 / 4·9 / 5·10으로 다름', en: 'Market days fall on 2·7, 3·8, 4·9 or 5·10 depending on the town' } },
    { k: { ko: '결제', en: 'Paying' }, v: { ko: '현금이 편한 노점이 많음, 소액권 준비', en: 'Many stalls prefer cash — bring small notes' } },
    { k: { ko: '시간', en: 'Timing' }, v: { ko: '오전 10시 전 가장 한산, 오후 5시 이후 닫는 곳 많음', en: 'Quietest before ten; many stalls close after five' } }
  ],
  places: [
    { name: { ko: '광장시장', en: 'Gwangjang Market' }, region: 'capital', q: '광장시장', note: { ko: '서울 종로. 100년 넘은 상설시장, 먹거리 골목이 유명합니다.', en: 'Jongno, Seoul: a market over a century old, known for its food alleys.' } },
    { name: { ko: '경동시장', en: 'Gyeongdong Market' }, region: 'capital', q: '경동시장', note: { ko: '한약재·건강식품. 약령시와 이어져 있습니다.', en: 'Herbal medicine and health foods, joined to the herbal street.' } },
    { name: { ko: '남대문시장', en: 'Namdaemun Market' }, region: 'capital', q: '남대문시장', note: { ko: '600년 역사. 의류·수입품·먹자골목.', en: 'Six centuries of trade: clothes, imports and food alleys.' } },
    { name: { ko: '동대문종합시장', en: 'Dongdaemun Market' }, region: 'capital', q: '동대문종합시장', note: { ko: '새벽부터 도매가 도는 시장. 밤늦게까지 불이 켜져 있습니다.', en: 'Wholesale from dawn; the lights stay on late.' } },
    { name: { ko: '서울풍물시장', en: 'Seoul Folk Flea Market' }, region: 'capital', q: '서울풍물시장', note: { ko: '골동품·LP·옛 생활용품. 동묘앞역 9번 출구.', en: 'Antiques, records and old household things, by Dongmyo exit 9.' } },
    { name: { ko: '강화 풍물시장', en: 'Ganghwa Folk Market' }, region: 'capital', q: '강화 풍물시장', note: { ko: '2·7일 장날. 화문석과 인삼, 순무로 유명합니다.', en: 'Market days on the 2nd and 7th; known for reed mats, ginseng and turnips.' } },
    { name: { ko: '안동 구시장', en: 'Andong Gu Market' }, region: 'gyeongsang', q: '안동 구시장', note: { ko: '2·7일 장날. 찜닭 골목과 함께 보세요.', en: 'Market days on the 2nd and 7th, beside the jjimdak alleys.' } },
    { name: { ko: '전주 남부시장', en: 'Jeonju Nambu Market' }, region: 'jeolla', q: '전주 남부시장', note: { ko: '상설 + 금·토 야시장. 청년몰이 붙어 있습니다.', en: 'Permanent stalls plus a Friday–Saturday night market.' } },
    { name: { ko: '대구 서문시장', en: 'Daegu Seomun Market' }, region: 'gyeongsang', q: '대구 서문시장', note: { ko: '조선 시대부터 이어진 대형 시장. 야시장이 특히 붐빕니다.', en: 'A large market running since Joseon times; the night market is the busiest part.' } },
    { name: { ko: '부산 국제시장', en: 'Busan Gukje Market' }, region: 'gyeongsang', q: '부산 국제시장', note: { ko: '전쟁 뒤 형성된 시장. 자갈치·부평깡통시장과 이어집니다.', en: 'Born after the war, linked to Jagalchi and Bupyeong markets.' } },
    { name: { ko: '통영 서호시장', en: 'Tongyeong Seoho Market' }, region: 'gyeongsang', q: '통영 서호시장', note: { ko: '꿀빵과 어묵, 해산물. 아침 일찍이 활기찹니다.', en: 'Honey buns, fish cake and seafood; liveliest early.' } },
    { name: { ko: '속초관광수산시장', en: 'Sokcho Fish Market' }, region: 'gangwon', q: '속초관광수산시장', note: { ko: '오징어순대와 닭강정. 관광객과 주민이 함께 쓰는 시장.', en: 'Squid sundae and fried chicken, used by visitors and locals alike.' } },
    { name: { ko: '제주 동문시장', en: 'Jeju Dongmun Market' }, region: 'jeju', q: '동문시장', note: { ko: '감귤과 해산물, 저녁 야시장. 공항에서 차로 15분.', en: 'Tangerines, seafood and an evening night market, 15 minutes from the airport.' } },
    { name: { ko: '청주 육거리시장', en: 'Cheongju Yukgeori Market' }, region: 'jeolla', q: '청주 육거리시장', note: { ko: '2·7일 장날. 충북에서 가장 큰 전통시장입니다.', en: 'Market days on the 2nd and 7th — the largest traditional market in North Chungcheong.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '국밥 · 잔치국수', en: 'Rice soup · thin noodles' }, note: { ko: '시장 안 국수집은 아침 8시에 문을 엽니다.', en: 'Market noodle counters open at eight.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥘', dish: { ko: '빈대떡 · 육회 · 꼬마김밥', en: 'Mung-bean pancake · raw beef · mini kimbap' }, note: { ko: '광장시장에서는 막걸리 한 사발과 함께.', en: 'At Gwangjang, with a bowl of makgeolli.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍡', dish: { ko: '호떡 · 꿀빵 · 약과', en: 'Hotteok · honey buns · yakgwa' }, note: { ko: '갓 튀긴 것부터. 식으면 맛이 절반입니다.', en: 'Straight from the fryer — half the pleasure goes when they cool.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍢', dish: { ko: '즉석떡볶이 · 순대 · 어묵', en: 'Table tteokbokki · sundae · fish cake' }, note: { ko: '여럿이 사리를 늘려 먹는 방식.', en: 'Add portions as you eat — that is how it works.' } }
  ],
  photos: [
    { file: 'th-market', cap: { ko: '시장 골목의 좌판', en: 'Stalls in a market alley' } },
    { file: 'th-market-p2', cap: { ko: '시장에서 파는 간식', en: 'Snacks sold at the market' } }
  ],
  tip: { ko: '5일장은 오전 10시부터 오후 4시가 가장 붐빕니다. 장날은 지역마다 달라 미리 확인하세요.', en: 'Five-day markets peak between ten and four. Dates differ by town — check first.' }
},
