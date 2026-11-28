/* -------------------------------------------------------- 02 바다·해안 드라이브 */
{
  id: 'coast', emoji: '🌊', tint: '#7EC8E3',
  name: { ko: '바다 · 해안 드라이브', en: 'Sea & coastal drives' },
  sub: { ko: '바다를 옆에 두고 달리는 하루', en: 'A day with the sea on your left' },
  tag: { ko: '해안도로 · 포구 · 노을', en: 'Coastal roads, harbours, sunset' },
  intro: {
    ko: '해안 드라이브는 목적지보다 순서가 중요합니다. 바다를 왼쪽에 두고 달리고, 포구에서 점심을 먹고, 해 질 무렵 전망대에 도착하도록 짜면 하루가 저절로 좋아집니다. 여기서는 배를 타지 않고도 하루에 다 돌 수 있는 통영 미륵도 한 바퀴를 기본 코스로 잡았어요.',
    en: 'On a coastal drive the order matters more than the destination. Keep the water on your left, eat at a harbour, and be at a lookout by sunset, and the day arranges itself. This route is one loop of Tongyeong\u2019s Mireuk island — no ferries needed.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }],
  transport: { ko: '렌터카 권장 · 버스 가능', en: 'Rental car recommended · buses possible' },
  duration: { ko: '약 10시간 · 주행 60km', en: 'About 10 hours · 60 km driving' },
  hub: {
    ko: '통영종합버스터미널', en: 'Tongyeong Bus Terminal', q: '통영종합버스터미널',
    note: {
      ko: '서울 남부에서 4시간 반, 부산 서부에서 1시간 반. 터미널 옆에서 렌터카를 받으면 미륵도까지 15분입니다.',
      en: 'Four and a half hours from southern Seoul, ninety minutes from west Busan. Pick up a car beside the terminal and Mireuk island is fifteen minutes away.'
    }
  },
  course: {
    title: { ko: '미륵도 한 바퀴 — 케이블카에서 달아공원 노을까지', en: 'One lap of Mireuk — cable car to the sunset at Dara' },
    meta: { ko: '7곳 · 약 10시간 · 주행 60km', en: '7 stops · about 10 hours · 60 km' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '통영종합버스터미널', en: 'Tongyeong Bus Terminal' }, q: '통영종합버스터미널', move: { ko: '출발', en: 'Start' },
        desc: { ko: '차를 받고 미륵도 방향으로. 통영대교를 건너는 순간부터 창밖이 바다입니다.', en: 'Collect the car and head for Mireuk island — from the bridge onward the window is all water.' } },
      { phase: 'morning', time: '10:00', name: { ko: '통영케이블카', en: 'Tongyeong cable car' }, q: '통영케이블카', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '한려수도를 통째로 내려다보는 케이블카. 오전에는 바다 쪽 빛이 맑아 사진이 잘 나옵니다.', en: 'A cable car over the Hallyeo waterway. Morning light off the sea is the clearest for photographs.' },
        photo: 'th-coast' },
      { phase: 'morning', time: '11:30', name: { ko: '미륵도 해안도로', en: 'Mireuk coastal road' }, q: '미륵도 해안도로', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '왼쪽은 바다, 오른쪽은 동백숲. 중간중간 차를 세울 수 있는 작은 포구가 있습니다.', en: 'Sea on the left, camellia woods on the right, with little harbours where you can pull over.' } },
      { phase: 'lunch', time: '12:30', name: { ko: '미륵도 포구 점심', en: 'Lunch at a Mireuk harbour' }, q: '미륵도', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '바다를 보는 자리에서 해산물 한 상. 통영은 굴과 멍게, 해물칼국수가 기본입니다.', en: 'A seafood table facing the water — Tongyeong runs on oysters, sea squirts and seafood noodles.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '달아공원', en: 'Dara Park' }, q: '달아공원', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '섬이 겹겹이 늘어선 다도해 전망. 낮에도 좋지만 이 코스의 마지막에 다시 오는 자리이기도 합니다.', en: 'Layers of islands — good by day, and it is also where this route ends at sunset.' } },
      { phase: 'afternoon', time: '15:30', name: { ko: '동피랑 벽화마을', en: 'Dongpirang mural village' }, q: '동피랑벽화마을', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '언덕 골목의 벽화와 통영 앞바다. 차는 아래 공영주차장에 두고 걸어 올라가세요.', en: 'Murals on a hillside with the harbour below. Park in the public lot and walk up.' } },
      { phase: 'afternoon', time: '16:40', name: { ko: '서호시장', en: 'Seoho Market' }, q: '서호시장', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '간식은 시장에서. 통영 꿀빵과 어묵, 말린 멸치를 조금씩 사 두세요.', en: 'Snacks at the market: honey buns, fish cake, a bag of dried anchovies.' } },
      { phase: 'evening', time: '18:00', name: { ko: '달아공원 노을', en: 'Sunset at Dara Park' }, q: '달아공원', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
        desc: { ko: '해가 지는 시각에 맞춰 다시 올라갑니다. 주차장이 좁으니 30분 일찍 도착하세요.', en: 'Come back up for sunset. The car park is small — arrive half an hour early.' } },
      { phase: 'return', time: '19:30', name: { ko: '통영종합버스터미널', en: 'Tongyeong Bus Terminal' }, q: '통영종합버스터미널', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '차를 반납하고 터미널로. 막차 시간은 미리 확인해 두세요.', en: 'Return the car and walk to the terminal; check the last bus in advance.' } }
    ]
  },
  conds: [
    { k: { ko: '이동', en: 'Getting around' }, v: { ko: '렌터카 권장 · 버스는 배차 30~60분', en: 'Car recommended; buses run every 30–60 min' } },
    { k: { ko: '비용', en: 'Cost' }, v: { ko: '렌터카 1일 6~9만원 · 케이블카 별도', en: 'Car ₩60,000–90,000 a day; cable car extra' } },
    { k: { ko: '주의', en: 'Watch out' }, v: { ko: '해안도로는 차를 세울 곳이 드물어 포구 주차장 이용', en: 'Few places to stop on the coast road — use harbour car parks' } }
  ],
  places: [
    { name: { ko: '77호선 해안도로', en: 'Route 77 coastal road' }, region: 'jeolla', q: '남해 77번 국도', note: { ko: '목포에서 부산까지 이어지는 남해안 국도. 구간을 골라 달려도 좋습니다.', en: 'The south-coast road from Mokpo to Busan — pick any stretch.' } },
    { name: { ko: '제주 신창풍차해안도로', en: 'Jeju Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '바다 위 풍력발전기와 데크 산책로. 일몰 시간대가 가장 좋습니다.', en: 'Wind turbines over the water and a boardwalk; best at sunset.' } },
    { name: { ko: '강릉 안목~사천', en: 'Gangneung Anmok to Sacheon' }, region: 'gangwon', q: '안목해변', note: { ko: '바다를 붙여 달리는 짧은 해안도로. 커피거리와 이어집니다.', en: 'A short run right against the water, joined to the coffee street.' } },
    { name: { ko: '부산 해운대~송정', en: 'Busan Haeundae to Songjeong' }, region: 'gyeongsang', q: '해운대 블루라인파크', note: { ko: '해변열차와 해안도로가 나란히 이어집니다. 주말에는 열차 예약을 권합니다.', en: 'Beach train and coast road side by side — book the train at weekends.' } },
    { name: { ko: '삼척 초곡~장호항', en: 'Samcheok Chogok to Jangho' }, region: 'gangwon', q: '장호항', note: { ko: '용굴촛대바위와 맑은 항구. 스노클링으로도 알려져 있습니다.', en: 'A rock arch and a clear harbour, also known for snorkelling.' } },
    { name: { ko: '울릉도 해안일주도로', en: 'Ulleungdo ring road' }, region: 'gyeongsang', q: '울릉도', note: { ko: '배로 들어가야 하지만, 섬 한 바퀴가 그 자체로 드라이브 코스입니다.', en: 'You have to take a ferry, but the island loop is a drive in itself.' } },
    { name: { ko: '거제 해금강~구조라', en: 'Geoje Haegeumgang to Gujora' }, region: 'gyeongsang', q: '거제 해금강', note: { ko: '몽돌 해변과 바위섬이 번갈아 나오는 남해안 최고 구간 중 하나.', en: 'Pebble beaches and rock islets alternating — one of the best stretches on the south coast.' } },
    { name: { ko: '양양 낙산~하조대', en: 'Yangyang Naksan to Hajodae' }, region: 'gangwon', q: '하조대', note: { ko: '낙산사와 하조대 사이 해안. 아침 햇빛이 바다로 들어옵니다.', en: 'The coast between Naksansa and Hajodae; morning light comes in off the water.' } },
    { name: { ko: '태안 안면도', en: 'Taean Anmyeondo' }, region: 'jeolla', q: '안면도', note: { ko: '꽃지 해변과 소나무 숲길. 서해 노을 드라이브에 좋습니다.', en: 'Ggotji beach and pine lanes — a good west-coast sunset drive.' } },
    { name: { ko: '변산반도', en: 'Byeonsan peninsula' }, region: 'jeolla', q: '변산반도', note: { ko: '채석강 절벽과 격포항. 물때를 맞추면 해안 절벽 아래를 걸을 수 있습니다.', en: 'The Chaeseokgang cliffs and Gyeokpo harbour; at low tide you can walk beneath the cliffs.' } },
    { name: { ko: '여수 돌산~향일암', en: 'Yeosu Dolsan to Hyangiram' }, region: 'jeolla', q: '돌산도', note: { ko: '돌산대교를 건너 섬 끝까지. 왼쪽으로 계속 섬이 따라옵니다.', en: 'Cross Dolsan bridge to the end of the island, islands following you the whole way.' } },
    { name: { ko: '고성 청간정', en: 'Goseong Cheongganjeong' }, region: 'gangwon', q: '청간정', note: { ko: '절벽 위 정자에서 보는 동해. 7번 국도 드라이브의 대표 정차 지점입니다.', en: 'A pavilion on the cliff over the East Sea — the classic stop on Route 7.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '해장국 · 굴국밥', en: 'Hangover soup · oyster rice soup' }, note: { ko: '남해안은 아침부터 굴과 국물이 있습니다.', en: 'On the south coast oysters come with breakfast.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🦪', dish: { ko: '해물칼국수 · 멍게비빔밥 · 굴', en: 'Seafood noodles · sea-squirt bibimbap · oysters' }, note: { ko: '포구 식당은 12시 전에 들어가면 자리가 있습니다.', en: 'Harbour tables are still free before noon.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍯', dish: { ko: '꿀빵 · 어묵 · 말린 멸치', en: 'Honey buns · fish cake · dried anchovies' }, note: { ko: '시장에서 봉지째 사서 차에 두세요.', en: 'Buy a bag at the market and keep it in the car.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🔥', dish: { ko: '조개구이 · 회 · 해물탕', en: 'Grilled shellfish · sashimi · seafood stew' }, note: { ko: '노을을 보고 내려와 포구에서 저녁.', en: 'Come down from the sunset and eat at the harbour.' } }
  ],
  photos: [
    { file: 'th-coast', cap: { ko: '케이블카에서 본 다도해', en: 'Islands seen from the cable car' } },
    { file: 'th-coast-p2', cap: { ko: '해안도로의 포구', en: 'A harbour along the coast road' } }
  ],
  tip: { ko: '해안도로는 방파제 주차장 말고는 정차할 곳이 적습니다. 사진은 포구에서 찍으세요.', en: 'The coast road has few places to stop besides harbour car parks — take photographs there.' }
},
