/* ------------------------------------------------------ 06 온천·찜질방 */
{
  id: 'onsen', emoji: '♨️', tint: '#FFC6DA',
  name: { ko: '온천 · 찜질방', en: 'Hot springs & jjimjilbang' },
  sub: { ko: '몸을 녹이고 하루를 늘어놓는 코스', en: 'A day of soaking and slowing down' },
  tag: { ko: '천연 온천 · 스파 · 찜질', en: 'Natural springs, spas, saunas' },
  intro: {
    ko: '온천 여행은 많이 걷지 않는 게 요령입니다. 낮에는 동네를 조금 걷고, 오후에 온천에 들어가 오래 머물고, 저녁에 한 번 더 들어가는 순서가 좋아요. 다만 시설마다 성격이 다릅니다. 온천법 기준을 채운 천연 온천, 온천수를 이용한 온천 스파, 물놀이 시설 중심의 워터파크형 스파, 숙박과 결합한 호텔 스파를 구분해서 골라야 기대와 실제가 맞습니다. 여기서는 1호선으로 닿는 온양온천 하루를 기본 코스로 잡았어요.',
    en: 'The trick with a hot-spring day is not to walk much: a little in the afternoon, a long soak, dinner, then one more. But the venues differ: a natural hot spring that meets the legal standard, a spa using spring water, a water park built around pools, and a hotel spa tied to a room. Knowing which you are booking is half the trip. This route is Onyang, reachable on Line 1.'
  },
  seasons: [{ ko: '가을', en: 'Autumn' }, { ko: '겨울', en: 'Winter' }, { ko: '사계절', en: 'All year' }],
  transport: { ko: '전철 + 도보', en: 'Metro + on foot' },
  duration: { ko: '약 9시간', en: 'About 9 hours' },
  hub: {
    ko: '온양온천역', en: 'Onyang Oncheon Station', q: '온양온천역',
    note: {
      ko: '1호선(장항선) 급행으로 용산에서 1시간 30분. 역에서 온천 거리까지 걸어서 10분이고, 시장과 현충사는 버스로 10~20분입니다.',
      en: 'Ninety minutes from Yongsan on the Line 1 express. The spa street is ten minutes on foot; the market and Hyeonchungsa are 10–20 minutes by bus.'
    }
  },
  course: {
    title: { ko: '온양온천 — 민속마을에서 찜질방까지', en: 'Onyang — folk village to jjimjilbang' },
    meta: { ko: '7곳 · 약 9시간 · 버스 2회', en: '7 stops · about 9 hours · 2 buses' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '온양온천역', en: 'Onyang Oncheon Station' }, q: '온양온천역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역에서 외암민속마을 방면 버스로. 수건과 세면도구는 대부분 온천에서 빌려 줍니다.', en: 'A bus toward Oeam folk village from outside; most baths lend towels and toiletries.' } },
      { phase: 'morning', time: '10:30', name: { ko: '외암민속마을', en: 'Oeam folk village' }, q: '외암민속마을', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
        desc: { ko: '돌담과 초가, 오래된 나무가 이어지는 마을. 온천前 가볍게 걷기 좋은 코스입니다.', en: 'Stone walls, thatched roofs and old trees — an easy walk before the bath.' } },
      { phase: 'lunch', time: '12:00', name: { ko: '온양온천시장', en: 'Onyang Oncheon Market' }, q: '온양온천시장', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
        desc: { ko: '점심은 시장에서. 온양은 국밥과 칼국수, 순대가 기본입니다.', en: 'Lunch at the market — rice soup, noodles and sundae are the staples here.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '온천욕', en: 'A long soak' }, q: '온양온천', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '600년 된 온천지구. 알칼리성 물이라 미끈하고, 한 번에 10분씩 나눠 들어가는 편이 좋습니다.', en: 'A spa quarter six centuries old: alkaline water that feels slippery — soak in ten-minute spells.' },
        photo: 'th-onsen' },
      { phase: 'afternoon', time: '15:30', name: { ko: '현충사', en: 'Hyeonchungsa Shrine' }, q: '현충사', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
        desc: { ko: '이순신 장군의 사당과 옛 집. 온천 뒤 몸을 식히며 걷기 좋은 숲길이 있습니다.', en: 'Admiral Yi Sun-sin\u2019s shrine and old house, with shaded paths to cool down after the bath.' } },
      { phase: 'evening', time: '17:30', name: { ko: '온천 거리 저녁', en: 'Dinner on the spa street' }, q: '온양온천', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
        desc: { ko: '온천지구 안에는 오래된 밥집이 많습니다. 목욕 후에는 수분을 먼저 채우세요.', en: 'The old quarter is full of plain lunch rooms; drink water before you eat.' } },
      { phase: 'evening', time: '19:00', name: { ko: '찜질방', en: 'Jjimjilbang' }, q: '온양온천 찜질방', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '불가마는 짧게, 원적외선 방은 길게, 마지막은 서늘한 방에서. 훈제 달걀과 식혜가 마무리입니다.', en: 'A short spell in the kiln, longer in the infrared room, then somewhere cool — smoked eggs and sweet rice drink to finish.' } },
      { phase: 'return', time: '21:00', name: { ko: '온양온천역', en: 'Onyang Oncheon Station' }, q: '온양온천역', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '막차는 22시 전후. 온천 뒤에는 물을 한 병 더 마시고 타세요.', en: 'Last trains run around ten; drink another bottle before boarding.' } }
    ]
  },
  subs: {
    title: { ko: '온천·스파 네 가지 유형', en: 'Four kinds of bath' },
    items: [
      { emoji: '💧', name: { ko: '천연 온천', en: 'Natural hot spring' }, desc: { ko: '온천법 기준을 채운 온천수를 쓰는 곳. 성분과 수온을 시설에서 표시합니다.', en: 'Spring water that meets the legal standard; composition and temperature are posted.' } },
      { emoji: '🛁', name: { ko: '온천 스파', en: 'Spring-water spa' }, desc: { ko: '온천수로 만든 테마 탕과 물놀이 시설. 가족 단위가 많습니다.', en: 'Themed pools and water play using spring water, popular with families.' } },
      { emoji: '🌊', name: { ko: '워터파크형 스파', en: 'Water-park spa' }, desc: { ko: '실내외 풀 중심. 온천수가 아닐 수 있으니 표기를 확인하세요.', en: 'Built around indoor and outdoor pools — not always spring water, so read the label.' } },
      { emoji: '🏨', name: { ko: '호텔 스파', en: 'Hotel spa' }, desc: { ko: '숙박과 프라이빗 스파를 결합한 시설. 당일은 데이유즈 상품을 확인하세요.', en: 'A room plus a private spa; for a day visit, check day-use rates.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '대중탕 8,000~12,000원 · 스파 25,000~60,000원 · 찜질방 12,000~15,000원', en: 'Public bath ₩8,000–12,000; spa ₩25,000–60,000; jjimjilbang ₩12,000–15,000' } },
    { k: { ko: '준비', en: 'Bring' }, v: { ko: '세면도구·수건, 수영복(스파), 현금 소액', en: 'Toiletries, towel, swimsuit for spas, small cash' } },
    { k: { ko: '확인', en: 'Check first' }, v: { ko: '천연 온천수 사용 여부, 노천탕·가족탕 유무, 휴무일', en: 'Whether the water is natural, whether there is an open-air or family bath, and closing days' } }
  ],
  places: [
    { name: { ko: '온양온천', en: 'Onyang Oncheon' }, region: 'jeolla', q: '온양온천', note: { ko: '아산. 600년 전통 온천지구, 역에서 도보권. 부모님 모시기 좋습니다.', en: 'Asan: a six-century spa quarter walkable from the station, easy with parents.' } },
    { name: { ko: '파라다이스 스파 도고', en: 'Paradise Spa Dogo' }, region: 'jeolla', q: '파라다이스 스파 도고', note: { ko: '아산 도고. 온천수 풀과 야외 스파, 가족·커플에게 인기.', en: 'Dogo, Asan: spring-water pools and outdoor spas, popular with families and couples.' } },
    { name: { ko: '이천 테르메덴', en: 'Icheon Termeden' }, region: 'capital', q: '테르메덴', note: { ko: '독일식 온천 테마파크. 실내외 풀과 노천탕.', en: 'A German-style spa park with indoor and outdoor pools.' } },
    { name: { ko: '율암온천', en: 'Yuram Oncheon' }, region: 'capital', q: '율암온천', note: { ko: '화성. 숲속 노천탕, 조용한 휴식에 좋습니다.', en: 'Hwaseong: a wooded open-air bath, quiet and restful.' } },
    { name: { ko: '석모도 미네랄온천', en: 'Seongmodo mineral spring' }, region: 'capital', q: '석모도미네랄온천', note: { ko: '강화 석모도. 바다 전망 노천탕, 일몰 시간대가 좋습니다. 보문사와 함께.', en: 'Ganghwa: an open-air bath facing the sea, best at sunset, with Bomunsa nearby.' } },
    { name: { ko: '파라다이스시티 씨메르', en: 'Paradise City Cimer' }, region: 'capital', q: '씨메르', note: { ko: '인천 영종도. 유럽식 스파·아쿠아 시설. 일반 온천과는 다릅니다.', en: 'Yeongjongdo: a European-style spa and aqua area — not a traditional hot spring.' } },
    { name: { ko: '유성온천', en: 'Yuseong Oncheon' }, region: 'jeolla', q: '유성온천', note: { ko: '대전 도심. 지하철 1호선 유성온천역, 야외 족욕장이 무료입니다.', en: 'Central Daejeon on Line 1, with a free outdoor foot bath.' } },
    { name: { ko: '수안보온천', en: 'Suanbo Oncheon' }, region: 'jeolla', q: '수안보온천', note: { ko: '충주. 전통 온천마을과 족욕길, 월악산 아래.', en: 'Chungju: an old spa village and foot-bath path below Woraksan.' } },
    { name: { ko: '스플라스 리솜', en: 'Splash Resom' }, region: 'jeolla', q: '스플라스 리솜', note: { ko: '예산 덕산온천수 스파·워터파크. 수덕사와 함께 1박.', en: 'Yesan: spa and water park on Deoksan spring water, paired with Sudeoksa.' } },
    { name: { ko: '포레스트 리솜 해브나인', en: 'Forest Resom Haven9' }, region: 'jeolla', q: '포레스트 리솜 해브나인', note: { ko: '제천. 숲 전망 인피니티풀과 테마 스파.', en: 'Jecheon: forest-view infinity pool and themed spas.' } },
    { name: { ko: '척산온천', en: 'Cheoksan Oncheon' }, region: 'gangwon', q: '척산온천', note: { ko: '속초. 설악산 산행 뒤 노천탕으로 좋습니다.', en: 'Sokcho: the open-air bath to take after a Seoraksan walk.' } },
    { name: { ko: '오색탄산온천', en: 'Osaek carbonic spring' }, region: 'gangwon', q: '오색탄산온천', note: { ko: '양양. 탄산온천과 알칼리온천이 함께, 주전골과 이어집니다.', en: 'Yangyang: carbonic and alkaline baths together, next to Jujeongol.' } },
    { name: { ko: '설해원', en: 'Seolhaeone' }, region: 'gangwon', q: '설해원', note: { ko: '양양. 온천 사우나와 스파를 갖춘 리조트형 시설.', en: 'Yangyang: a resort-style spa with sauna and baths.' } },
    { name: { ko: '필례게르마늄온천', en: 'Pillye germanium spring' }, region: 'gangwon', q: '필례온천', note: { ko: '인제. 산속 온천, 자작나무숲과 묶기 좋습니다.', en: 'Inje: a mountain spring, good with the birch forest.' } },
    { name: { ko: '소노펠리체 델피노', en: 'Sono Felice Delpino' }, region: 'gangwon', q: '델피노', note: { ko: '고성 원암온천지구. 울산바위가 보이는 숙박형 스파.', en: 'Goseong: a resort spa in the Wonam spring district, with Ulsanbawi in view.' } },
    { name: { ko: '설악 워터피아', en: 'Seorak Waterpia' }, region: 'gangwon', q: '설악 워터피아', note: { ko: '속초. 온천수 기반 워터파크, 가족 단위.', en: 'Sokcho: a spring-water water park for families.' } },
    { name: { ko: '덕구온천 스파월드', en: 'Deokgu Spa World' }, region: 'gyeongsang', q: '덕구온천', note: { ko: '울진. 계곡에서 솟는 자연용출 온천수.', en: 'Uljin: water rising naturally in a valley.' } },
    { name: { ko: '소노벨 청송 솔샘온천', en: 'Sono Bel Cheongsong Solsaem' }, region: 'gyeongsang', q: '솔샘온천', note: { ko: '청송. 주왕산과 함께 1박으로.', en: 'Cheongsong: an overnight with Juwangsan.' } },
    { name: { ko: '문경 STX 온천스파', en: 'Mungyeong STX spa' }, region: 'gyeongsang', q: '문경 STX 리조트', note: { ko: '문경새재 아래 온천·숙박 시설.', en: 'Below Mungyeong Saejae: spa and lodging in one.' } },
    { name: { ko: '백암온천', en: 'Baegam Oncheon' }, region: 'gyeongsang', q: '백암온천', note: { ko: '울진 북부. 유황 성분으로 알려진 오래된 온천.', en: 'Northern Uljin: an old spring known for its sulphur.' } },
    { name: { ko: '팔공산온천', en: 'Palgongsan Oncheon' }, region: 'gyeongsang', q: '팔공산온천', note: { ko: '대구. 동화사와 케이블카를 함께.', en: 'Daegu: pair it with Donghwasa and the cable car.' } },
    { name: { ko: '허심청', en: 'Hurshimchung' }, region: 'gyeongsang', q: '허심청', note: { ko: '부산 동래. 대규모 테마탕, 도심 온천.', en: 'Dongnae, Busan: a large themed bath in the city.' } },
    { name: { ko: '부곡온천', en: 'Bugok Oncheon' }, region: 'gyeongsang', q: '부곡온천', note: { ko: '창녕. 원천 수온이 높은 온천지구, 가족탕이 많습니다.', en: 'Changnyeong: a hot district with high source temperature and many family baths.' } },
    { name: { ko: '마금산온천', en: 'Mageumsan Oncheon' }, region: 'gyeongsang', q: '마금산온천', note: { ko: '창원. 전통 온천지구와 무료 족욕장.', en: 'Changwon: an old spa district with a free foot bath.' } },
    { name: { ko: '클럽디오아시스', en: 'Club D Oasis' }, region: 'gyeongsang', q: '클럽디오아시스', note: { ko: '부산 해운대. 바다 전망 워터 스파, 온천수와는 다릅니다.', en: 'Haeundae: a water spa with sea views — not a spring bath.' } },
    { name: { ko: '거제 해수온천', en: 'Geoje seawater spa' }, region: 'gyeongsang', q: '거제 해수온천', note: { ko: '거제. 해수 온천과 물놀이 시설, 바람의 언덕과 함께.', en: 'Geoje: seawater baths and pools, with Windy Hill nearby.' } },
    { name: { ko: '고창 석정온천', en: 'Gochang Seokjeong' }, region: 'jeolla', q: '석정온천', note: { ko: '고창. 게르마늄 온천과 스파, 선운사와 함께.', en: 'Gochang: a germanium spring and spa, with Seonunsa nearby.' } },
    { name: { ko: '담양리조트 온천', en: 'Damyang resort spa' }, region: 'jeolla', q: '담양리조트 온천', note: { ko: '담양. 죽녹원과 메타세쿼이아길을 묶은 1박.', en: 'Damyang: an overnight with the bamboo garden and the tree road.' } },
    { name: { ko: '도곡온천', en: 'Dogok Oncheon' }, region: 'jeolla', q: '도곡온천', note: { ko: '화순. 운주사와 적벽을 함께 보는 코스.', en: 'Hwasun: combine with Unjusa and the red cliffs.' } },
    { name: { ko: '산방산 탄산온천', en: 'Sanbangsan carbonic spring' }, region: 'jeju', q: '산방산탄산온천', note: { ko: '제주 서남부. 탄산수 거품이 몸에 붙는 야외 노천탕.', en: 'South-west Jeju: outdoor baths where carbon dioxide bubbles cling to the skin.' } },
    { name: { ko: '디아넥스 호텔 온천', en: 'Dianex hotel spa' }, region: 'jeju', q: '디아넥스', note: { ko: '제주. 아라고나이트 온천과 실내 수영장.', en: 'Jeju: an aragonite spring and indoor pool.' } },
    { name: { ko: '제주 신화워터파크', en: 'Jeju Shinhwa Water Park' }, region: 'jeju', q: '신화워터파크', note: { ko: '중문. 워터파크형 시설로 천연 온천이 아닙니다.', en: 'Jungmun: a water park, not a natural spring.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '죽 · 국밥', en: 'Porridge · rice soup' }, note: { ko: '온천 전에는 속을 가볍게.', en: 'Keep it light before bathing.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '칼국수 · 순대 · 국밥', en: 'Knife noodles · sundae · rice soup' }, note: { ko: '온양온천시장에서 한 끼.', en: 'One meal at the Onyang market.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🥚', dish: { ko: '훈제 달걀 · 식혜', en: 'Smoked eggs · sikhye' }, note: { ko: '찜질방 안에서 먹는 조합.', en: 'The standard sauna combination.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍲', dish: { ko: '순두부 · 해장국 · 보쌈', en: 'Soft tofu · hangover soup · boiled pork' }, note: { ko: '온천 뒤에는 따뜻한 국물이 잘 맞습니다.', en: 'Hot broth sits well after a long soak.' } }
  ],
  photos: [
    { file: 'th-onsen', cap: { ko: '온천 거리의 족욕 자리', en: 'A foot bath on the spa street' } },
    { file: 'th-onsen-p2', cap: { ko: '온천지구의 오래된 거리', en: 'The old spa quarter' } }
  ],
  tip: { ko: '온천은 10분씩 나눠 들어가고 물을 자주 드세요. 시설 예약 전에 천연 온천수인지, 노천탕이 있는지 확인하면 실망이 없습니다.', en: 'Soak in ten-minute spells and drink water. Before booking, check whether the water is natural and whether there is an open-air bath.' }
},
