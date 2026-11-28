/* ---------------------------------------------------- 14 반려견 동반 */
{
  id: 'dog', emoji: '🐶', tint: '#FFD9A0',
  name: { ko: '반려견 동반', en: 'Travelling with your dog' },
  sub: { ko: '목줄 하나로 떠나는 하루', en: 'A day out on the lead' },
  tag: { ko: '반려견 해변 · 놀이터 · 산책로', en: 'Dog beaches, parks, forest paths' },
  intro: {
    ko: '반려견 여행에서 가장 중요한 건 도착지가 아니라 조건입니다. 입장 가능한 구역, 체중 제한, 실내 출입 여부, 목줄·이동장 규정이 장소마다 다릅니다. 여기서는 조건이 비교적 명확한 춘천 강아지숲을 중심으로 하루를 짰어요. 해변과 숲, 놀이터는 아래 목록에서 골라 다녀오세요.',
    en: 'With a dog the conditions matter more than the destination: which areas admit dogs, weight limits, indoor access, lead and carrier rules — they differ place by place. This day is built around the dog park at Chuncheon, where the rules are clear. Beaches, forests and playgrounds are listed below.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }, { ko: '여름 해변', en: 'Summer beaches' }],
  transport: { ko: '전철 + 택시', en: 'Metro + taxi' },
  duration: { ko: '약 7시간', en: 'About 7 hours' },
  hub: {
    ko: '춘천역', en: 'Chuncheon Station', q: '춘천역',
    note: {
      ko: '경춘선·ITX-청춘. 서울 용산에서 1시간 10분. 반려견과 함께 탈 때는 이동장 또는 목줄을 확인하고, 역에서 강아지숲까지 택시로 20분입니다.',
      en: 'ITX-Cheongchun from Yongsan in seventy minutes. Check the carrier and lead rules for the train; the dog park is twenty minutes by taxi from the station.'
    }
  },
  course: {
    title: { ko: '춘천 — 강아지숲에서 의암호 산책까지', en: 'Chuncheon — dog park to the Uiam lakeside' },
    meta: { ko: '5곳 · 약 7시간 · 택시 2회', en: '5 stops · about 7 hours · 2 taxi rides' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '춘천역', en: 'Chuncheon Station' }, q: '춘천역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '물과 배변봉투, 수건을 챙겼는지 확인하고 택시로 이동합니다. 대형견은 택시 승차 전에 알려 주세요.', en: 'Check water, bags and a towel, then take a taxi; tell the driver in advance if the dog is large.' } },
      { phase: 'morning', time: '10:30', name: { ko: '강아지숲', en: 'Dog forest park' }, q: '강아지숲', move: { ko: '택시 약 20분', en: 'Taxi, about 20 min' },
        desc: { ko: '반려견 전용 테마파크. 운동장과 산책로, 계절별 수영장이 있고, 입장 전 예방접종 확인을 합니다.', en: 'A park built for dogs: exercise yards, paths and a seasonal pool, with vaccination checks at the gate.' },
        photo: 'th-dog' },
      { phase: 'lunch', time: '13:00', name: { ko: '춘천 시내 점심', en: 'Lunch in Chuncheon' }, q: '춘천', move: { ko: '택시 약 20분', en: 'Taxi, about 20 min' },
        desc: { ko: '춘천은 닭갈비와 막국수. 실내 동반이 안 되는 곳이 많으니 테라스 자리를 미리 확인하세요.', en: 'Chuncheon runs on chicken galbi and buckwheat noodles; many rooms do not admit dogs, so ask about a terrace.' } },
      { phase: 'afternoon', time: '14:30', name: { ko: '의암호 산책로', en: 'Uiam lakeside path' }, q: '의암호', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '호수를 끼고 난 넓은 길. 목줄을 하고 걷기 좋고, 물놀이는 금지 구역을 확인하세요.', en: 'A wide path along the lake — good on a lead; check where swimming is off limits.' },
        photo: 'th-dog-p2' },
      { phase: 'afternoon', time: '16:00', name: { ko: '공지천 산책', en: 'Gongjicheon walk' }, q: '공지천', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '도심 하천을 따라 이어지는 산책로. 그늘이 많아 오후에 걷기 좋습니다.', en: 'A path along the stream through town, well shaded for the afternoon.' } },
      { phase: 'return', time: '17:30', name: { ko: '춘천역', en: 'Chuncheon Station' }, q: '춘천역', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '역으로 돌아와 귀가. 열차 안에서는 이동장 또는 안아서, 다른 승객과의 거리를 지키세요.', en: 'Back to the station; on the train keep the dog in a carrier or your arms, with space from other passengers.' } }
    ]
  },
  conds: [
    { k: { ko: '체중', en: 'Weight' }, v: { ko: '5kg·10kg·15kg 제한이 흔함, 대형견 전용 구역 확인', en: 'Limits of 5, 10 or 15 kg are common; check for large-dog areas' } },
    { k: { ko: '실내', en: 'Indoors' }, v: { ko: '식당·카페 대부분 실내 불가, 야외석만 가능', en: 'Most restaurants and cafés allow dogs only at outdoor tables' } },
    { k: { ko: '목줄', en: 'Lead' }, v: { ko: '전 구역 목줄 필수(놀이터 예외), 이동장 준비', en: 'Lead required everywhere except fenced runs; bring a carrier' } },
    { k: { ko: '준비물', en: 'Bring' }, v: { ko: '예방접종 증명, 배변봉투, 물·식기, 수건', en: 'Vaccination record, waste bags, water and bowl, towel' } }
  ],
  places: [
    { name: { ko: '강아지숲', en: 'Dog forest park' }, region: 'gangwon', q: '강아지숲', note: { ko: '춘천. 반려견 전용 테마파크, 운동장·수영장·전시.', en: 'Chuncheon: a theme park for dogs with runs, a pool and exhibitions.' } },
    { name: { ko: '오산반려동물테마파크', en: 'Osan pet theme park' }, region: 'capital', q: '오산반려동물테마파크', note: { ko: '경기 오산. 놀이와 교육 프로그램.', en: 'Osan: play areas and training programmes.' } },
    { name: { ko: '인천대공원 반려견놀이터', en: 'Incheon Grand Park dog run' }, region: 'capital', q: '인천대공원 반려견놀이터', note: { ko: '무료 야외 놀이터, 목줄 해제 구역 별도.', en: 'A free outdoor run with a separate off-lead area.' } },
    { name: { ko: '멍비치', en: 'Meong Beach' }, region: 'gangwon', q: '멍비치', note: { ko: '양양. 반려견 전용 해변, 여름 시즌 운영.', en: 'Yangyang: a dog-only beach, open in the summer season.' } },
    { name: { ko: '명사해수욕장', en: 'Myeongsa Beach' }, region: 'gyeongsang', q: '명사해수욕장', note: { ko: '거제. 반려견 해수욕 운영 사례가 있는 해변.', en: 'Geoje: a beach with a history of dog-friendly bathing.' } },
    { name: { ko: '안목해변', en: 'Anmok Beach' }, region: 'gangwon', q: '안목해변', note: { ko: '강릉. 산책과 바다, 여름엔 펫 비치 운영.', en: 'Gangneung: a walk and the sea, with a pet beach in summer.' } },
    { name: { ko: '꽃지해수욕장', en: 'Ggotji Beach' }, region: 'jeolla', q: '꽃지해수욕장', note: { ko: '태안. 넓은 모래사장과 노을.', en: 'Taean: wide sand and a famous sunset.' } },
    { name: { ko: '신두리해수욕장', en: 'Sinduri Beach' }, region: 'jeolla', q: '신두리해수욕장', note: { ko: '태안. 모래언덕과 긴 해변.', en: 'Taean: dunes and a long shore.' } },
    { name: { ko: '와온해변', en: 'Waon Beach' }, region: 'jeolla', q: '와온해변', note: { ko: '순천. 갯벌과 일몰, 물때 확인.', en: 'Suncheon: tidal flats and sunset; check the tide.' } },
    { name: { ko: '해파랑길 44·45코스', en: 'Haeparang trail 44–45' }, region: 'gangwon', q: '해파랑길', note: { ko: '양양·속초 해안 도보 구간. 목줄 필수.', en: 'Coastal walking between Yangyang and Sokcho; lead required.' } },
    { name: { ko: '남해 다랭이마을', en: 'Namhae Darangyi village' }, region: 'gyeongsang', q: '다랭이마을', note: { ko: '계단식 논과 바다. 좁은 길은 안고 가세요.', en: 'Terraced paddies above the sea; carry the dog on the narrow steps.' } },
    { name: { ko: '국립천관산자연휴양림', en: 'Cheongwansan recreational forest' }, region: 'jeolla', q: '천관산자연휴양림', note: { ko: '장흥. 반려견 동반 가능 숙소와 숲길.', en: 'Jangheung: dog-friendly rooms and forest paths.' } },
    { name: { ko: '계족산 황톳길', en: 'Gyejoksan red-clay path' }, region: 'jeolla', q: '계족산 황톳길', note: { ko: '대전. 맨발 산책로 옆 숲길을 함께 걷습니다.', en: 'Daejeon: forest paths beside the barefoot clay trail.' } },
    { name: { ko: '보문관광단지', en: 'Bomun resort area' }, region: 'gyeongsang', q: '보문관광단지', note: { ko: '경주. 호수 둘레 산책로와 반려동물 동반 숙소.', en: 'Gyeongju: lakeside paths and dog-friendly stays.' } },
    { name: { ko: '예당호 출렁다리', en: 'Yedangho suspension bridge' }, region: 'jeolla', q: '예당호출렁다리', note: { ko: '예산. 호수 전망과 산책, 야간 경관.', en: 'Yesan: a lake view, a walk and night lighting.' } },
    { name: { ko: '임실 오수의견관광지', en: 'Imsil dog memorial site' }, region: 'jeolla', q: '오수의견관광지', note: { ko: '오수개 설화와 반려동물 문화 공간.', en: 'The Osu dog legend and a companion-animal culture site.' } },
    { name: { ko: '의성 펫월드', en: 'Uiseong Pet World' }, region: 'gyeongsang', q: '의성 펫월드', note: { ko: '반려견 중심 테마 공간, 대형견도 가능.', en: 'A dog-centred park that also admits large breeds.' } },
    { name: { ko: 'PTP 애견테마파크', en: 'PTP dog park' }, region: 'jeolla', q: 'PTP 애견테마파크', note: { ko: '익산. 대형견 이용 가능한 반려견 공간.', en: 'Iksan: a park that takes large dogs.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥪', dish: { ko: '토스트 · 김밥', en: 'Toast · kimbap' }, note: { ko: '이동 전에 가볍게, 강아지 물도 챙기세요.', en: 'Something light before travelling; water for the dog too.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍗', dish: { ko: '닭갈비 · 막국수', en: 'Chicken galbi · buckwheat noodles' }, note: { ko: '야외석이 있는 곳을 고르세요.', en: 'Choose a place with outdoor tables.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍠', dish: { ko: '군고구마 · 삶은 닭가슴살(강아지)', en: 'Roast sweet potato · boiled chicken for the dog' }, note: { ko: '기름진 음식은 피하세요.', en: 'Keep the dog away from fatty food.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍲', dish: { ko: '국밥 · 찜닭', en: 'Rice soup · braised chicken' }, note: { ko: '돌아와서 실내에서 천천히.', en: 'Back home, eat indoors at ease.' } }
  ],
  photos: [
    { file: 'th-dog', cap: { ko: '반려견과 걷는 길', en: 'Walking with the dog' } },
    { file: 'th-dog-p2', cap: { ko: '해변의 반려견', en: 'A dog on the beach' } }
  ],
  tip: { ko: '대부분의 관광지는 목줄과 배변봉투를 확인합니다. 체중 제한은 시설마다 달라 방문 전 전화가 가장 확실합니다.', en: 'Almost everywhere checks lead and bags. Weight limits vary by venue — a phone call is the surest check.' }
},
