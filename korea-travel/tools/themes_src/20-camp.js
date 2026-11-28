/* -------------------------------------------------- 20 글램핑·캠핑 */
{
  id: 'camp', emoji: '⛺', tint: '#C9E4A5',
  name: { ko: '글램핑 · 캠핑', en: 'Glamping & camping' },
  sub: { ko: '하룻밤을 야외에서 보내는 코스', en: 'A night outdoors, or a whole day of one' },
  tag: { ko: '글램핑 · 카라반 · 오션뷰', en: 'Glamping, caravans, sea views' },
  intro: {
    ko: '캠핑은 장비가 아니라 조건을 고르는 일입니다. 텐트를 세울지, 침대가 있는 글램핑을 쓸지, 카라반이나 차박을 할지에 따라 준비물이 완전히 달라집니다. 여기서는 장비 없이 갈 수 있는 가평의 계곡 글램핑을 하루 코스로 잡았습니다. 1박으로 늘리면 불멍과 별이 남습니다. 여덟 가지 유형과 지역별 캠핑장은 아래에 정리했어요.',
    en: 'Camping is less about gear than about which conditions you choose: a tent you pitch, a glamping unit with a bed, a caravan, or sleeping in the car. This route is a valley glamping site in Gapyeong that needs no equipment, run as a day; add a night and the fire and stars are what you keep. Eight types and regional sites are below.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름 계곡', en: 'Summer valleys' }, { ko: '가을 불멍', en: 'Autumn fires' }, { ko: '겨울 온돌', en: 'Winter ondol' }],
  transport: { ko: '전철 + 셔틀·택시', en: 'Metro + shuttle or taxi' },
  duration: { ko: '약 10시간 (1박 권장)', en: 'About 10 hours (a night is better)' },
  hub: {
    ko: '가평역', en: 'Gapyeong Station', q: '가평역',
    note: {
      ko: '경춘선·ITX-청춘. 용산에서 1시간. 역에서 캠핑장까지 택시로 15분이고, 장을 볼 곳은 역 앞 마트가 마지막입니다.',
      en: 'ITX-Cheongchun from Yongsan in an hour. The campsite is fifteen minutes by taxi, and the mart by the station is the last place to shop.'
    }
  },
  course: {
    title: { ko: '가평 — 계곡 글램핑에서 불멍까지', en: 'Gapyeong — valley glamping to the fire' },
    meta: { ko: '6곳 · 약 10시간 · 택시 2회', en: '6 stops · about 10 hours · 2 taxi rides' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '가평역', en: 'Gapyeong Station' }, q: '가평역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역 앞에서 장을 봅니다. 숯과 얼음, 물은 캠핑장에서도 팔지만 값이 다릅니다.', en: 'Shop by the station — charcoal, ice and water are sold at the site too, at other prices.' } },
      { phase: 'morning', time: '10:30', name: { ko: '계곡 글램핑장', en: 'A valley glamping site' }, q: '가평 글램핑', move: { ko: '택시 약 15분', en: 'Taxi, about 15 min' },
        desc: { ko: '짐을 먼저 맡기고 사이트를 확인합니다. 데크와 침구, 취사도구가 갖춰져 있어 텐트는 필요 없습니다.', en: 'Drop the bags and see the site: deck, bedding and cooking gear are there, so no tent is needed.' },
        photo: 'th-camp' },
      { phase: 'lunch', time: '12:00', name: { ko: '바비큐 점심', en: 'Barbecue lunch' }, q: '가평 글램핑', move: { ko: '사이트', en: 'At the site' },
        desc: { ko: '개별 화로가 있는 곳을 고르세요. 불 피우는 시간과 소화기 위치를 먼저 확인합니다.', en: 'Choose a site with its own brazier, and check the fire hours and extinguisher first.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '계곡 산책 · 물놀이', en: 'Valley walk & water' }, q: '가평 계곡', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '여름에는 계곡물이 가장 좋은 시간. 수심이 얕은 곳을 골라 들어가세요.', en: 'In summer the valley is at its best; pick a shallow stretch to step in.' },
        photo: 'th-camp-p2' },
      { phase: 'afternoon', time: '16:00', name: { ko: '자라섬 · 남이섬 산책', en: 'Jarasum & Nami walk' }, q: '자라섬', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '강 위의 섬을 한 바퀴. 자전거를 빌리면 40분이면 충분합니다.', en: 'A loop of the island in the river; forty minutes by rented bike.' } },
      { phase: 'evening', time: '18:00', name: { ko: '저녁 · 불멍', en: 'Dinner & the fire' }, q: '가평 글램핑', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '해가 지면 화로 앞에 앉습니다. 장작은 마른 것만, 불은 22시 전에 정리하는 곳이 많습니다.', en: 'After dark you sit at the brazier. Dry wood only, and most sites want the fire out by ten.' } },
      { phase: 'return', time: '21:00', name: { ko: '가평역', en: 'Gapyeong Station' }, q: '가평역', move: { ko: '택시 약 15분', en: 'Taxi, about 15 min' },
        desc: { ko: '당일이면 막차로 돌아옵니다. 1박이면 다음 날 아침 계곡 안개까지 보고 오세요.', en: 'For a day trip, take the last train; with a night, stay for the valley mist in the morning.' } }
    ]
  },
  subs: {
    title: { ko: '캠핑 여덟 가지 유형', en: 'Eight ways to camp' },
    items: [
      { emoji: '🛏️', name: { ko: '럭셔리 글램핑', en: 'Luxury glamping' }, desc: { ko: '침대·냉난방·가구가 갖춰진 숙박형. 장비가 필요 없습니다.', en: 'Bed, heating and furniture provided — no gear at all.' } },
      { emoji: '🚗', name: { ko: '오토캠핑', en: 'Auto camping' }, desc: { ko: '차와 개인 텐트로. 사이트 크기와 전기 사용 여부를 확인하세요.', en: 'Car and your own tent; check pitch size and whether power is available.' } },
      { emoji: '🚐', name: { ko: '카라반', en: 'Caravan' }, desc: { ko: '이동식 숙소. 개별 화장실·주방 유무가 만족도를 가릅니다.', en: 'A mobile cabin — private bathroom and kitchen decide the experience.' } },
      { emoji: '🌊', name: { ko: '오션뷰 캠핑', en: 'Sea-view camping' }, desc: { ko: '바다를 앞에 둔 사이트. 바람과 소음, 일출 시간을 확인하세요.', en: 'A pitch facing the water; check wind, noise and sunrise time.' } },
      { emoji: '🌲', name: { ko: '숲속 캠핑', en: 'Forest camping' }, desc: { ko: '산림·계곡의 그늘. 여름에 가장 시원합니다.', en: 'Shade of forest and valley — coolest in summer.' } },
      { emoji: '🔮', name: { ko: '돔·이글루', en: 'Dome & igloo' }, desc: { ko: '투명 돔과 이글루형 숙소. 사진이 잘 나오고 겨울에도 따뜻합니다.', en: 'Transparent domes and igloos: photogenic and warm in winter.' } },
      { emoji: '🐕', name: { ko: '애견 동반', en: 'With the dog' }, desc: { ko: '반려견 전용 사이트와 운동장. 체중·목줄 조건을 확인하세요.', en: 'Dog pitches and runs; check weight and lead rules.' } },
      { emoji: '🎠', name: { ko: '키즈 캠핑', en: 'Camping with children' }, desc: { ko: '놀이터·수영장·체험시설. 개별 화장실이 있으면 훨씬 편합니다.', en: 'Playground, pool and activities; a private bathroom makes it far easier.' } }
    ]
  },
  conds: [
    { k: { ko: '숙박 유형', en: 'Type' }, v: { ko: '글램핑·카라반·텐트·차박 — 준비물이 완전히 다름', en: 'Glamping, caravan, tent or car — the packing list differs completely' } },
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '글램핑 주중 10~20만원, 주말 20~35만원, 성수기 할증', en: 'Glamping ₩100,000–200,000 midweek, ₩200,000–350,000 at weekends, more in peak season' } },
    { k: { ko: '확인', en: 'Check' }, v: { ko: '개별 화장실·샤워, 온수, 난방, 바비큐·화로, 반려견 동반 여부', en: 'Private bathroom and shower, hot water, heating, barbecue, dog policy' } },
    { k: { ko: '예약', en: 'Booking' }, v: { ko: '주말·성수기는 1~2달 전 마감, 취소 규정 확인', en: 'Weekends and peak season close one to two months out; read the cancellation terms' } }
  ],
  places: [
    { name: { ko: '캠핑어클락', en: 'Camping O’Clock' }, region: 'capital', q: '캠핑어클락', note: { ko: '가평. 맑은 계곡과 그늘의 자연형 캠핑장.', en: 'Gapyeong: a natural site on a clear valley with shade.' } },
    { name: { ko: '안성맞춤 캠핑장', en: 'Anseong Matchum campsite' }, region: 'capital', q: '안성맞춤 캠핑장', note: { ko: '안성. 숲속·가족 캠핑, 안성맞춤랜드와 연계.', en: 'Anseong: forest camping for families, next to Matchum Land.' } },
    { name: { ko: '왕송호수 캠핑장', en: 'Wangsong lake campsite' }, region: 'capital', q: '왕송호수 캠핑장', note: { ko: '의왕. 호수 전망 카라반·글램핑, 초보에게 좋습니다.', en: 'Uiwang: lake-view caravans and glamping, good for beginners.' } },
    { name: { ko: '평화누리캠핑장', en: 'Pyeonghwa Nuri campsite' }, region: 'capital', q: '평화누리캠핑장', note: { ko: '파주. 임진각·DMZ 여행과 연계.', en: 'Paju: paired with Imjingak and the DMZ.' } },
    { name: { ko: '수원 솔내음 캠핑장', en: 'Suwon Solnaeeum campsite' }, region: 'capital', q: '솔내음캠핑장', note: { ko: '수원. 도심형 글램핑·카라반, 대중교통으로 접근.', en: 'Suwon: city glamping and caravans, reachable by transit.' } },
    { name: { ko: '글램포레스트 대부도', en: 'Glamp Forest Daebudo' }, region: 'capital', q: '글램포레스트 대부도', note: { ko: '안산 대부도. 바다와 숲을 함께, 일몰이 좋습니다.', en: 'Daebudo, Ansan: sea and forest, with a good sunset.' } },
    { name: { ko: '남이섬 베스트카라반', en: 'Nami Island best caravan' }, region: 'capital', q: '남이섬 카라반', note: { ko: '가평. 카라반과 글램핑, 남이섬 관광 연계.', en: 'Gapyeong: caravans and glamping tied to Nami Island.' } },
    { name: { ko: '캠프 오후 4시', en: 'Camp 4PM' }, region: 'capital', q: '캠프 오후 4시', note: { ko: '포천. 소규모 감성 캠핑, 커플에게 인기.', en: 'Pocheon: a small, atmospheric site popular with couples.' } },
    { name: { ko: '평화강변수목 캠핑장', en: 'Pyeonghwa riverside campsite' }, region: 'capital', q: '평화강변수목캠핑장', note: { ko: '연천. 강변과 수목, 조용한 자연.', en: 'Yeoncheon: riverside trees and quiet.' } },
    { name: { ko: '스테이네이처', en: 'Stay Nature' }, region: 'capital', q: '스테이네이처', note: { ko: '양평. 혼자 또는 둘이 조용히 쉬는 캠핑.', en: 'Yangpyeong: camping for one or two, quietly.' } },
    { name: { ko: '박사마을 어린이 글램핑장', en: 'Baksa village kids glamping' }, region: 'gangwon', q: '박사마을 글램핑장', note: { ko: '춘천. 북한강 전망과 별, 아이 동반 가족.', en: 'Chuncheon: a view over the Bukhan river, stars, and children welcome.' } },
    { name: { ko: '하이원 추추파크', en: 'High1 Choo Choo Park' }, region: 'gangwon', q: '추추파크', note: { ko: '삼척. 기차·레일바이크와 캠핑을 함께.', en: 'Samcheok: trains, rail bikes and camping in one.' } },
    { name: { ko: '석산계곡 코코비발디', en: 'Seoksan valley Coccobivaldi' }, region: 'gangwon', q: '코코비발디', note: { ko: '홍천. 숲과 계곡, 여름 가족 여행.', en: 'Hongcheon: forest and valley, a summer family site.' } },
    { name: { ko: '망상오토캠핑리조트', en: 'Mangsang auto camping resort' }, region: 'gangwon', q: '망상오토캠핑리조트', note: { ko: '동해. 망상해변 바로 앞, 오션뷰 사이트.', en: 'Donghae: right at Mangsang beach, with sea-view pitches.' } },
    { name: { ko: '라라플레이스 글램핑', en: 'Lala Place glamping' }, region: 'gangwon', q: '라라플레이스', note: { ko: '양양. 하조대 해변 도보 접근.', en: 'Yangyang: walking distance to Hajodae beach.' } },
    { name: { ko: '동강전망자연휴양림', en: 'Donggang recreational forest' }, region: 'gangwon', q: '동강전망자연휴양림', note: { ko: '정선. 강과 운해, 사진 찍기 좋은 야영장.', en: 'Jeongseon: river and cloud sea, a photographer\u2019s campsite.' } },
    { name: { ko: '청포대솔밭야영장', en: 'Cheongpodae pine campsite' }, region: 'jeolla', q: '청포대솔밭야영장', note: { ko: '태안. 해수욕장 앞 솔밭, 일몰 캠핑.', en: 'Taean: pines in front of the beach, for a sunset camp.' } },
    { name: { ko: '더반 힐 글램핑', en: 'The Ban Hill glamping' }, region: 'jeolla', q: '더반힐 글램핑', note: { ko: '보령. 오션뷰와 잔디광장.', en: 'Boryeong: sea views and a lawn.' } },
    { name: { ko: '황토둥지 글램핑', en: 'Hwangto Dunji glamping' }, region: 'jeolla', q: '황토둥지 글램핑', note: { ko: '제천. 청풍호와 황토방, 아이 동반.', en: 'Jecheon: Cheongpung lake and clay rooms, children welcome.' } },
    { name: { ko: '서천 장항글램핑장', en: 'Seocheon Janghang glamping' }, region: 'jeolla', q: '장항글램핑장', note: { ko: '서천. 객실별 썬룸과 바비큐, 겨울 감성.', en: 'Seocheon: sunrooms and barbecues, good in winter.' } },
    { name: { ko: '포레스트카라반', en: 'Forest Caravan' }, region: 'jeolla', q: '포레스트카라반', note: { ko: '천안. 문암제 저수지 전망 카라반.', en: 'Cheonan: caravans over the Munam reservoir.' } },
    { name: { ko: '임실 저스트 글램핑', en: 'Imsil Just glamping' }, region: 'jeolla', q: '저스트글램핑', note: { ko: '임실. 장비 없이 즐기는 숙박 캠핑.', en: 'Imsil: glamping with no equipment at all.' } },
    { name: { ko: '느랭이골 자연휴양림', en: 'Neuraengigol recreational forest' }, region: 'jeolla', q: '느랭이골', note: { ko: '광양. 편백숲과 야간 조명.', en: 'Gwangyang: cypress forest and night lighting.' } },
    { name: { ko: '대숲글램핑장', en: 'Daesup glamping' }, region: 'jeolla', q: '대숲글램핑장', note: { ko: '담양. 대나무숲과 광주호 전망.', en: 'Damyang: bamboo and the Gwangju lake.' } },
    { name: { ko: '지리산천왕봉오토캠핑장', en: 'Jirisan Cheonwangbong campsite' }, region: 'jeolla', q: '지리산천왕봉오토캠핑장', note: { ko: '남원. 지리산 트레킹과 연계.', en: 'Namwon: base for Jirisan walks.' } },
    { name: { ko: '웅천친수공원 야영장', en: 'Ungcheon waterfront campsite' }, region: 'jeolla', q: '웅천친수공원 야영장', note: { ko: '여수. 바다와 도심이 가까운 가벼운 캠핑.', en: 'Yeosu: light camping close to sea and town.' } },
    { name: { ko: '럭셔리 비토섬 제이글램핑', en: 'Bito island J glamping' }, region: 'gyeongsang', q: '비토섬 제이글램핑', note: { ko: '사천. 섬과 바다를 앞에 둔 럭셔리 글램핑.', en: 'Sacheon: luxury glamping facing an island and the sea.' } },
    { name: { ko: '황매산잣나무숲야영장', en: 'Hwangmaesan pine campsite' }, region: 'gyeongsang', q: '황매산잣나무숲야영장', note: { ko: '합천. 숲과 별, 황매산 억새.', en: 'Hapcheon: forest, stars and the Hwangmaesan reeds.' } },
    { name: { ko: '별자리 캠핑랜드', en: 'Constellation camping land' }, region: 'gyeongsang', q: '별자리캠핑랜드', note: { ko: '경주. 별 관측과 역사 여행을 함께.', en: 'Gyeongju: stargazing with the history sights.' } },
    { name: { ko: '썬라이즈 코스트 호미곶', en: 'Sunrise Coast Homigot' }, region: 'gyeongsang', q: '썬라이즈코스트', note: { ko: '포항. 호미곶 일출을 앞에 둔 오션뷰.', en: 'Pohang: sea views facing the Homigot sunrise.' } },
    { name: { ko: '화금지 숲속캠핑장', en: 'Hwageumji forest campsite' }, region: 'gyeongsang', q: '화금지 숲속캠핑장', note: { ko: '청도. 저수지와 새벽 안개.', en: 'Cheongdo: a reservoir and dawn mist.' } },
    { name: { ko: '통영해뜰캠핑농원', en: 'Tongyeong Haetteul campsite' }, region: 'gyeongsang', q: '통영해뜰캠핑농원', note: { ko: '통영. 글램핑·캠핑·차박이 함께.', en: 'Tongyeong: glamping, tents and car camping together.' } },
    { name: { ko: '곽지몬스터캠핑', en: 'Gwakji Monster camping' }, region: 'jeju', q: '곽지몬스터캠핑', note: { ko: '제주 애월. 바다와 야자수 숲.', en: 'Aewol, Jeju: sea and palm grove.' } },
    { name: { ko: '어반티지 글램핑 카라반', en: 'Urban Tige glamping caravan' }, region: 'capital', q: '어반티지 글램핑', note: { ko: '인천 강화. 카라반과 글램핑 복합형.', en: 'Ganghwa: caravans and glamping combined.' } },
    { name: { ko: '오크힐 글램핑', en: 'Oak Hill glamping' }, region: 'capital', q: '오크힐 글램핑', note: { ko: '인천 강화. 숲속 가족 캠핑.', en: 'Ganghwa: forest camping for families.' } },
    { name: { ko: '선재담 글램핑 & 카라반', en: 'Seonjaedam glamping & caravan' }, region: 'capital', q: '선재담 글램핑', note: { ko: '옹진 선재도. 섬과 바다, 카라반.', en: 'Seonjaedo island: sea and caravans.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥖', dish: { ko: '빵 · 커피 · 과일', en: 'Bread · coffee · fruit' }, note: { ko: '장을 볼 때 아침거리도 함께.', en: 'Buy breakfast with the rest of the shopping.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🔥', dish: { ko: '바비큐 · 구이', en: 'Barbecue' }, note: { ko: '숯과 그릴, 개별 화로 여부를 확인하세요.', en: 'Check charcoal, grill and whether the brazier is private.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍠', dish: { ko: '군고구마 · 감자 · 마시멜로', en: 'Roast sweet potato · potatoes · marshmallows' }, note: { ko: '불멍의 기본 조합.', en: 'The fire-side standard.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍜', dish: { ko: '라면 · 버섯전골 · 캠핑 스튜', en: 'Noodles · mushroom hotpot · camp stew' }, note: { ko: '기온이 떨어지면 국물이 답입니다.', en: 'When the temperature drops, a pot is the answer.' } }
  ],
  photos: [
    { file: 'th-camp', cap: { ko: '숲속 글램핑 사이트', en: 'A glamping pitch in the trees' } },
    { file: 'th-camp-p2', cap: { ko: '캠핑장의 저녁', en: 'Evening at the campsite' } }
  ],
  tip: { ko: '글램핑은 개별 화장실·샤워 유무가 만족도를 크게 가릅니다. 예약 전에 이 세 가지(화장실·난방·화로)를 확인하세요.', en: 'At a glamping site the private bathroom decides how the night goes. Check three things before booking: bathroom, heating, fire pit.' }
},
