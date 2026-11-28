/* ==========================================================================
   당장 가볼까? · Go Now? Korea Day-Trip Courses
   themes.js — 22 one-day themes (generated; edit tools/themes_src/*.js)
   --------------------------------------------------------------------------
   Every theme: name / tag / intro / hub (terminal, station or airport),
   one day course, key conditions (conds), representative places (places),
   local dishes only (no restaurant names), real photographs.
   ========================================================================== */

const THEMES = [
/* ------------------------------------------------------------------ 01 산 */
{
  id: 'mountain', emoji: '⛰️', tint: '#9BD3C4',
  name: { ko: '산 · 트레킹', en: 'Mountains & trekking' },
  sub: { ko: '능선에 올라 하루를 보내는 코스', en: 'A day spent above the treeline' },
  tag: { ko: '계곡 · 능선 · 정상 전망', en: 'Valleys, ridges, a summit view' },
  intro: {
    ko: '산은 준비물이 조금 필요하지만, 그만큼 하루가 단단해집니다. 서울 안에서 시작해 저녁에는 다시 도심으로 내려올 수 있는 도봉산 코스를 기본으로 잡았어요. 계곡을 따라 오르다가 마당바위에서 숨을 고르고, 신선대에서 서울을 내려다보고 내려옵니다. 전국 명산은 아래 목록에서 골라 같은 방식으로 하루를 짜면 됩니다.',
    en: 'A mountain day needs a little preparation and gives back a solid day. This route starts inside Seoul and still gets you back to the city by evening: up a valley, a rest at Madangbawi, a look down over Seoul from Sinseondae, then down. Pick any of the peaks listed below and shape the same kind of day around it.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을 단풍', en: 'Autumn leaves' }, { ko: '겨울 설경', en: 'Snow' }],
  transport: { ko: '지하철 + 도보', en: 'Subway + on foot' },
  duration: { ko: '약 7시간 · 도보 7km', en: 'About 7 hours · 7 km on foot' },
  hub: {
    ko: '도봉산역', en: 'Dobongsan Station', q: '도봉산역',
    note: {
      ko: '1호선과 7호선이 만나는 역이라 어디서 출발해도 한 번에 닿습니다. 역 앞에서 물과 김밥을 사 두면 산 위 준비가 끝납니다.',
      en: 'Lines 1 and 7 meet here, so you reach it in one ride from most of Seoul. Buy water and a roll of kimbap by the exit and you are ready.'
    }
  },
  course: {
    title: { ko: '도봉산 — 계곡에서 신선대까지', en: 'Dobongsan — from the valley to Sinseondae' },
    meta: { ko: '6곳 · 약 7시간 · 도보 7km', en: '6 stops · about 7 hours · 7 km' },
    steps: [
      { phase: 'start', time: '08:00', name: { ko: '도봉산역', en: 'Dobongsan Station' }, q: '도봉산역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역 2번 출구로 나오면 등산로 안내판이 보입니다. 화장실과 매점이 여기까지라 마지막 준비는 역 앞에서 하세요.', en: 'Exit 2 leads straight to the trail board. Toilets and the last shop are here, so finish your preparations before you walk in.' } },
      { phase: 'morning', time: '08:20', name: { ko: '도봉탐방지원센터', en: 'Dobong trail centre' }, q: '도봉산 탐방지원센터', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '산길이 본격적으로 시작되는 지점. 통제 구간과 일몰 시간을 안내판에서 확인하고 들어가세요.', en: 'Where the real climb begins. Check the board for closed sections and sunset time before you go in.' },
        photo: 'th-mountain-p2' },
      { phase: 'morning', time: '09:10', name: { ko: '천축사', en: 'Cheonchuksa Temple' }, q: '천축사', move: { ko: '도보 약 40분', en: 'Walk, about 40 min' },
        desc: { ko: '계곡을 따라 완만하게 오르는 길 끝의 절. 마당에서 잠깐 앉아 물을 마시기 좋습니다.', en: 'A temple at the top of a gentle valley path — a good courtyard to sit in and drink some water.' } },
      { phase: 'morning', time: '10:20', name: { ko: '마당바위', en: 'Madangbawi rock' }, q: '마당바위', move: { ko: '도보 약 40분', en: 'Walk, about 40 min' },
        desc: { ko: '너른 바위 마당이 갑자기 열립니다. 여기서부터 계단이 가팔라지니 이곳에서 간식을 꺼내세요.', en: 'A wide rock terrace opens suddenly. The stairs get steep after this — take out your snacks here.' } },
      { phase: 'lunch', time: '11:30', name: { ko: '신선대 아래 점심', en: 'Lunch below Sinseondae' }, q: '신선대', move: { ko: '도보 약 30분', en: 'Walk, about 30 min' },
        desc: { ko: '바위 그늘에 앉아 도시락을 먹습니다. 산 위에서는 취사가 안 되니 미리 싸 온 것으로.', en: 'Sit in the rock shade with a packed lunch — cooking is not allowed up here, so bring it ready-made.' } },
      { phase: 'afternoon', time: '12:30', name: { ko: '신선대', en: 'Sinseondae' }, q: '도봉산 신선대', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
        desc: { ko: '서울이 통째로 내려다보이는 바위 전망대. 난간 밖으로 나가지 말고 앉을 수 있는 넓은 바위를 찾으세요.', en: 'A rock lookout with the whole city below. Stay inside the rail and find one of the broad flat rocks to sit on.' },
        photo: 'th-mountain' },
      { phase: 'afternoon', time: '13:30', name: { ko: '도봉대피소', en: 'Dobong shelter' }, q: '도봉대피소', move: { ko: '도보 약 30분', en: 'Walk, about 30 min' },
        desc: { ko: '하산길에 만나는 대피소. 무릎이 아프면 여기서 스트레칭을 하고 천천히 내려오세요.', en: 'The shelter on the way down. If your knees complain, stretch here and take the descent slowly.' } },
      { phase: 'return', time: '15:30', name: { ko: '도봉산역', en: 'Dobongsan Station' }, q: '도봉산역', move: { ko: '도보 약 50분', en: 'Walk, about 50 min' },
        desc: { ko: '역으로 내려와 마무리. 7호선으로 두 정거장이면 온천과 시장이 있는 도심이라 저녁까지 이어집니다.', en: 'Back at the station. Two stops on Line 7 puts you in the middle of town for dinner.' } }
    ]
  },
  conds: [
    { k: { ko: '난이도', en: 'Difficulty' }, v: { ko: '중급 · 왕복 7km · 오르막 3시간', en: 'Moderate · 7 km round trip · 3 hours up' } },
    { k: { ko: '준비물', en: 'What to bring' }, v: { ko: '물 1.5L, 도시락, 등산화, 바람막이', en: '1.5 L water, packed lunch, boots, windbreaker' } },
    { k: { ko: '통제', en: 'Closures' }, v: { ko: '산불 조심 기간·호우 시 입산 통제, 일몰 1시간 전 하산', en: 'Closed in fire-risk or heavy-rain periods; start down an hour before sunset' } }
  ],
  places: [
    { name: { ko: '설악산 대청봉', en: 'Seoraksan Daecheongbong' }, region: 'gangwon', q: '설악산 대청봉', note: { ko: '1,708m. 당일은 소공원~비선대~양폭 코스가 무리 없습니다. 대청봉은 새벽 출발 또는 1박.', en: '1,708 m. For a day, the Sogongwon–Biseondae–Yangpok route is comfortable; the summit needs a dawn start or a night.' } },
    { name: { ko: '지리산 노고단', en: 'Jirisan Nogodan' }, region: 'jeolla', q: '지리산 노고단', note: { ko: '성삼재에서 30분이면 능선. 운해가 뜨는 이른 아침이 가장 좋습니다.', en: 'Thirty minutes from Seongsamjae to the ridge; best early, when cloud fills the valleys.' } },
    { name: { ko: '소백산 비로봉', en: 'Sobaekasan Birobong' }, region: 'gyeongsang', q: '소백산 비로봉', note: { ko: '풍기에서 출발. 봄 철쭉과 겨울 눈꽃으로 이름난 능선입니다.', en: 'Start from Punggi; famous for spring azaleas and winter snow on the ridge.' } },
    { name: { ko: '태백산 천제단', en: 'Taebaeksan Cheonjedan' }, region: 'gangwon', q: '태백산 천제단', note: { ko: '당골에서 왕복 4시간 남짓. 겨울 설경과 일출이 특히 좋습니다.', en: 'About four hours round trip from Danggol; best in snow at sunrise.' } },
    { name: { ko: '오대산', en: 'Odaesan' }, region: 'gangwon', q: '오대산', note: { ko: '상원사와 월정사를 잇는 숲길이 완만해 가족 산행에 좋습니다.', en: 'A gentle forest path linking Sangwonsa and Woljeongsa — good for families.' } },
    { name: { ko: '월악산', en: 'Woraksan' }, region: 'jeolla', q: '월악산', note: { ko: '덕주사~영봉 코스. 마지막 철계단이 가파릅니다.', en: 'Deokjusa to Yeongbong; the final steel stairs are steep.' } },
    { name: { ko: '속리산', en: 'Songnisan' }, region: 'jeolla', q: '속리산', note: { ko: '법주사에서 문장대까지. 절과 산을 한 번에 담는 코스.', en: 'Beopjusa up to Munjangdae — a temple and a peak in one walk.' } },
    { name: { ko: '무등산', en: 'Mudeungsan' }, region: 'jeolla', q: '무등산', note: { ko: '광주 도심에서 20분. 서석대 주상절리대가 볼거리입니다.', en: 'Twenty minutes from central Gwangju; the Seoseokdae column cliffs are the sight.' } },
    { name: { ko: '치악산', en: 'Chiaksan' }, region: 'gangwon', q: '치악산', note: { ko: '구룡사~비로봉. 가을 단풍철에는 아침 일찍 들어가세요.', en: 'Guryongsa to Birobong; in autumn colour, go early.' } },
    { name: { ko: '한라산', en: 'Hallasan' }, region: 'jeju', q: '한라산', note: { ko: '성판악 코스는 왕복 9시간. 당일은 어리목~윗세오름이 현실적입니다.', en: 'Seongpanak is nine hours round trip; for one day, Eorimok to Witseoreum is realistic.' } },
    { name: { ko: '북한산 백운대', en: 'Bukhansan Baegundae' }, region: 'capital', q: '북한산 백운대', note: { ko: '서울 안에서 정상까지. 주말에는 입산 대기가 길어집니다.', en: 'A summit inside Seoul; weekend queues at the trailhead get long.' } },
    { name: { ko: '주왕산', en: 'Juwangsan' }, region: 'gyeongsang', q: '주왕산', note: { ko: '계곡과 기암이 이어지는 짧은 코스. 여름이 시원합니다.', en: 'A short route through gorge and rock; cool in summer.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍙', dish: { ko: '김밥 · 주먹밥', en: 'Kimbap · rice balls' }, note: { ko: '산에서는 취사가 안 되니 역 앞에서 사 가세요.', en: 'No cooking on the trail — buy it at the station.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥢', dish: { ko: '도시락 · 삶은 달걀 · 과일', en: 'Packed lunch · boiled eggs · fruit' }, note: { ko: '바위 그늘에서 먹는 도시락이 산행의 절반입니다.', en: 'A lunch in rock shade is half the climb.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍫', dish: { ko: '초콜릿 · 견과 · 인절미', en: 'Chocolate · nuts · injeolmi rice cake' }, note: { ko: '당이 떨어지면 계단이 두 배로 힘듭니다.', en: 'When your sugar drops the stairs double in weight.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍲', dish: { ko: '해장국 · 칼국수 · 막걸리와 파전', en: 'Hangover soup · noodles · makgeolli with scallion pancake' }, note: { ko: '하산 후에는 뜨끈한 국물이 답입니다.', en: 'After a descent, hot broth is the answer.' } }
  ],
  photos: [
    { file: 'th-mountain', cap: { ko: '능선에서 내려다본 계곡', en: 'A valley seen from the ridge' } },
    { file: 'th-mountain-p2', cap: { ko: '탐방로 입구의 숲길', en: 'The forest path at the trailhead' } }
  ],
  tip: { ko: '겨울에는 해가 17시 전에 집니다. 정상에서 14시를 넘기면 바로 내려오세요.', en: 'In winter the sun sets before five — turn around at the summit by two.' }
},
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
/* ------------------------------------------------ 03 놀이공원·액티비티 */
{
  id: 'play', emoji: '🎢', tint: '#FFC46B',
  name: { ko: '놀이공원 · 액티비티', en: 'Theme parks & action' },
  sub: { ko: '하루 종일 소리 지르는 날', en: 'A day of screaming, in a good way' },
  tag: { ko: '어트랙션 · 짚라인 · 래프팅', en: 'Rides, ziplines, rafting' },
  intro: {
    ko: '놀이공원은 동선이 곧 만족도입니다. 개장 시간에 맞춰 들어가 가장 긴 줄부터 처리하고, 해가 기울면 정원과 퍼레이드로 넘어가는 순서가 좋아요. 여기서는 수인분당선으로 바로 닿는 에버랜드 하루를 기본으로 짰고, 전국의 놀이공원과 액티비티는 아래에 모았습니다.',
    en: 'In a theme park the route is the experience: arrive at opening, take the longest queue first, and move to the gardens and the parade as the light drops. This day runs at Everland, reachable on the Suin–Bundang line; other parks and outdoor activities are listed below.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울', en: 'Winter' }],
  transport: { ko: '전철 + 셔틀버스', en: 'Metro + shuttle' },
  duration: { ko: '약 11시간', en: 'About 11 hours' },
  hub: {
    ko: '전대·에버랜드역', en: 'Jeondae–Everland Station', q: '전대 에버랜드역',
    note: {
      ko: '수인분당선 종점. 역에서 공원까지 무료 셔틀버스가 10~15분 간격으로 다닙니다. 개장 30분 전에 역에 도착하면 첫 차를 탈 수 있어요.',
      en: 'The end of the Suin–Bundang line, with a free shuttle to the park every 10–15 minutes. Be at the station half an hour before opening to catch the first one.'
    }
  },
  course: {
    title: { ko: '에버랜드 — 개장부터 야간 퍼레이드까지', en: 'Everland — opening bell to the night parade' },
    meta: { ko: '7곳 · 약 11시간 · 셔틀 2회', en: '7 stops · about 11 hours · 2 shuttles' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '전대·에버랜드역', en: 'Jeondae–Everland Station' }, q: '전대 에버랜드역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역 앞 셔틀 정류장에서 공원으로. 표는 미리 예매해 두면 입구 줄을 한 번 줄일 수 있습니다.', en: 'Take the shuttle from outside the station. Booking ahead removes one of the two queues at the gate.' } },
      { phase: 'morning', time: '10:00', name: { ko: '에버랜드 입장', en: 'Everland gate' }, q: '에버랜드', move: { ko: '셔틀 약 10분', en: 'Shuttle, about 10 min' },
        desc: { ko: '입장하자마자 가장 긴 줄의 어트랙션부터. 오전 11시 전이 대기 시간이 가장 짧습니다.', en: 'Go straight for the longest queue. Waits are shortest before eleven.' },
        photo: 'th-play' },
      { phase: 'morning', time: '10:20', name: { ko: '티익스프레스 · 사파리', en: 'T Express & Safari' }, q: '에버랜드', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '급강하 코스터와 사파리 버스 중 하나를 먼저. 멀미가 걱정되면 사파리부터 타세요.', en: 'Take either the big coaster or the safari bus first — if motion sickness is a worry, start with the safari.' } },
      { phase: 'lunch', time: '12:00', name: { ko: '공원 안 점심', en: 'Lunch in the park' }, q: '에버랜드', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '12시부터 모든 식당이 붐빕니다. 11시 40분쯤 들어가면 기다리지 않아요.', en: 'Every counter fills at noon; go at twenty to twelve and walk straight in.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '판다월드 · 아마존', en: 'Panda World & Amazon' }, q: '에버랜드 판다월드', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '실내 위주로 돌면 오후 더위를 피할 수 있습니다. 판다월드는 대기 줄이 길어 앱 예약을 확인하세요.', en: 'Indoor attractions are the way through the afternoon heat; check the app for Panda World timings.' } },
      { phase: 'afternoon', time: '15:30', name: { ko: '사계절 정원 · 장미원', en: 'Four Seasons Garden' }, q: '에버랜드 장미원', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '놀이기구를 잠깐 쉬고 꽃밭을 걷는 시간. 사진은 여기서 찍는 게 가장 예쁩니다.', en: 'A pause from the rides among the flower beds — the best photographs of the day are here.' },
        photo: 'th-play-p2' },
      { phase: 'evening', time: '17:30', name: { ko: '저녁 · 야간 조명', en: 'Dinner & evening lights' }, q: '에버랜드', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '해가 지면 공원 전체가 조명으로 바뀝니다. 퍼레이드 시간은 계절마다 달라 앱에서 확인하세요.', en: 'After sunset the whole park turns to lights. Parade times change with the season — check the app.' } },
      { phase: 'return', time: '20:30', name: { ko: '전대·에버랜드역', en: 'Jeondae–Everland Station' }, q: '전대 에버랜드역', move: { ko: '셔틀 약 15분', en: 'Shuttle, about 15 min' },
        desc: { ko: '폐장 직후 셔틀은 만원입니다. 20분 일찍 나오면 앉아서 돌아옵니다.', en: 'The first shuttle after closing is packed; leaving twenty minutes early gets you a seat.' } }
    ]
  },
  conds: [
    { k: { ko: '입장', en: 'Tickets' }, v: { ko: '정가보다 앱·제휴 할인이 큼, 날짜 지정권 권장', en: 'App and partner discounts beat the gate price; date-specific tickets are best' } },
    { k: { ko: '대기', en: 'Queues' }, v: { ko: '주말 오후 60~90분, 평일 오전 20분 이내', en: '60–90 min on weekend afternoons, under 20 on weekday mornings' } },
    { k: { ko: '준비', en: 'Bring' }, v: { ko: '우비, 보조배터리, 편한 신발 (우산은 어트랙션에서 제한)', en: 'Raincoat, power bank, comfortable shoes — umbrellas are restricted on rides' } }
  ],
  places: [
    { name: { ko: '에버랜드', en: 'Everland' }, region: 'capital', q: '에버랜드', note: { ko: '용인. 어트랙션·사파리·정원·퍼레이드가 한곳에. 셔틀은 전대·에버랜드역.', en: 'Yongin: rides, safari, gardens and parades in one park, shuttled from Jeondae–Everland station.' } },
    { name: { ko: '롯데월드 어드벤처', en: 'Lotte World Adventure' }, region: 'capital', q: '롯데월드 어드벤처', note: { ko: '잠실. 실내 어드벤처와 야외 마법의성. 비 오는 날 대안 1순위.', en: 'Jamsil: an indoor park plus an outdoor island — the first choice on a rainy day.' } },
    { name: { ko: '서울랜드', en: 'Seoul Land' }, region: 'capital', q: '서울랜드', note: { ko: '과천. 규모는 작지만 대기가 짧고 서울대공원과 이어집니다.', en: 'Gwacheon: smaller, shorter queues, and next door to Seoul Grand Park.' } },
    { name: { ko: '경주월드', en: 'Gyeongju World' }, region: 'gyeongsang', q: '경주월드', note: { ko: '경주 보문단지 옆. 워터파크가 함께 있어 여름에 좋습니다.', en: 'Beside Gyeongju\u2019s Bomun resort area, with a water park for summer.' } },
    { name: { ko: '이월드', en: 'E-World' }, region: 'gyeongsang', q: '이월드', note: { ko: '대구 도심. 83타워 전망대까지 한 표로 이어집니다.', en: 'Central Daegu, with the 83 Tower observatory on the same ticket.' } },
    { name: { ko: '광주패밀리랜드', en: 'Gwangju Family Land' }, region: 'jeolla', q: '광주패밀리랜드', note: { ko: '광주 북구. 가족 단위 어트랙션 중심으로 가격이 낮습니다.', en: 'North Gwangju: family rides at low prices.' } },
    { name: { ko: '통영 스카이라인루지', en: 'Tongyeong Skyline Luge' }, region: 'gyeongsang', q: '스카이라인루지 통영', note: { ko: '바다를 보며 내려오는 루지. 케이블카와 함께 묶으면 좋습니다.', en: 'A luge run with the sea in view — pair it with the cable car.' } },
    { name: { ko: '강화 루지', en: 'Ganghwado Luge' }, region: 'capital', q: '강화루지', note: { ko: '서울에서 한 시간. 초보도 바로 탈 수 있는 완만한 코스.', en: 'An hour from Seoul, with gentle tracks beginners can take immediately.' } },
    { name: { ko: '인제 래프팅', en: 'Inje rafting' }, region: 'gangwon', q: '인제 내린천 래프팅', note: { ko: '내린천 급류. 5~9월 운영, 예약 필수입니다.', en: 'White water on the Naerincheon, May to September, booking essential.' } },
    { name: { ko: '양양 서핑', en: 'Yangyang surfing' }, region: 'gangwon', q: '양양 죽도해변 서핑', note: { ko: '죽도·기사문 해변에서 강습과 장비 대여. 초보는 오전 파도가 좋습니다.', en: 'Lessons and board hire at Jukdo and Gisamun beaches; mornings suit beginners.' } },
    { name: { ko: '가평 패러글라이딩', en: 'Gapyeong paragliding' }, region: 'capital', q: '가평 패러글라이딩', note: { ko: '북한강을 내려다보는 이착륙. 날씨에 따라 취소되니 당일 확인하세요.', en: 'Launch above the Bukhan river; flights cancel in wind, so confirm on the day.' } },
    { name: { ko: '단양 패러글라이딩', en: 'Danyang paragliding' }, region: 'jeolla', q: '단양 패러글라이딩', note: { ko: '도담삼봉과 남한강을 한눈에. 비행 15~20분.', en: 'Dodamsambong and the Namhan river below, in a 15–20 minute flight.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥪', dish: { ko: '토스트 · 김밥', en: 'Toast · kimbap' }, note: { ko: '개장 전에 역 앞에서 간단히.', en: 'Something quick by the station before opening.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍗', dish: { ko: '닭강정 · 돈까스 · 떡볶이', en: 'Fried chicken · cutlet · tteokbokki' }, note: { ko: '공원 안에서는 11시 40분이 가장 한산합니다.', en: 'Inside the park, twenty to twelve is the quiet window.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍦', dish: { ko: '아이스크림 · 츄러스', en: 'Ice cream · churros' }, note: { ko: '줄 서는 동안 먹을 것 하나는 챙기세요.', en: 'One thing to eat while queueing goes a long way.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍜', dish: { ko: '라면 · 김치찌개 · 국밥', en: 'Noodles · kimchi stew · rice soup' }, note: { ko: '나오는 길에 역 근처에서 따뜻하게.', en: 'Something warm near the station on the way out.' } }
  ],
  photos: [
    { file: 'th-play', cap: { ko: '놀이공원의 어트랙션', en: 'Rides at the park' } },
    { file: 'th-play-p2', cap: { ko: '공원 안의 꽃밭', en: 'Flower beds inside the park' } }
  ],
  tip: { ko: '여름에는 물놀이 시설과 우비를, 겨울에는 야간 조명과 방한복을 먼저 챙기세요.', en: 'In summer bring a raincoat for the water rides; in winter, warm clothes for the night lights.' }
},
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
/* ------------------------------------------------------- 05 계절 축제 */
{
  id: 'festival', emoji: '🎉', tint: '#FFB59B',
  name: { ko: '계절 축제', en: 'Seasonal festivals' },
  sub: { ko: '그 계절에만 열리는 하루', en: 'A day that exists only in its season' },
  tag: { ko: '축제 · 불빛 · 계절 한정', en: 'Festivals, lights, one season only' },
  intro: {
    ko: '축제는 날짜가 전부입니다. 해가 지고 불이 들어올 때가 하이라이트이므로, 오후에 도착해 천천히 둘러보다 어두워질 때 중심으로 들어가는 동선이 좋습니다. 여기서는 10월 진주 남강유등축제를 기본 코스로 잡았어요. 다른 축제는 아래 목록에서 시기를 보고 골라 같은 방식으로 하루를 짜면 됩니다.',
    en: 'For a festival the date is everything. The highlight comes when the lights go on, so arrive in the afternoon, wander, and move to the centre as it gets dark. This route follows the Jinju lantern festival in October; pick another from the list and plan the same shape of day.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울', en: 'Winter' }],
  transport: { ko: 'KTX + 도보', en: 'KTX + on foot' },
  duration: { ko: '약 7시간', en: 'About 7 hours' },
  hub: {
    ko: '진주역', en: 'Jinju Station', q: '진주역',
    note: {
      ko: 'KTX 경전선. 축제 기간에는 역에서 행사장까지 셔틀버스가 다니고, 도보로도 25분 거리입니다. 축제일은 도로가 통제되니 대중교통을 쓰세요.',
      en: 'On the KTX Gyeongjeon line. During the festival a shuttle runs from the station, and the site is a 25-minute walk; roads close on festival days, so use transit.'
    }
  },
  course: {
    title: { ko: '진주 남강유등축제 — 해가 지면 불이 켜진다', en: 'Jinju lantern festival — the lights come on at dusk' },
    meta: { ko: '6곳 · 약 7시간 · 셔틀 2회', en: '6 stops · about 7 hours · 2 shuttles' },
    steps: [
      { phase: 'start', time: '15:00', name: { ko: '진주역', en: 'Jinju Station' }, q: '진주역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '축제 기간에는 역 앞 셔틀을 타고 행사장으로. 짐은 역 보관함에 맡기세요.', en: 'In festival week take the shuttle from outside the station; leave the bag in a locker.' } },
      { phase: 'afternoon', time: '15:40', name: { ko: '진주성 · 촉석루', en: 'Jinju Fortress & Chokseongnu' }, q: '진주성', move: { ko: '셔틀·도보 약 20분', en: 'Shuttle or walk, about 20 min' },
        desc: { ko: '남강을 굽어보는 누각. 축제 전에 조용히 올라가 보면 밤과는 다른 얼굴입니다.', en: 'A pavilion over the Namgang. Go up before the festival and you see a different face from the night one.' } },
      { phase: 'afternoon', time: '16:40', name: { ko: '남강 둔치 유등 전시', en: 'Namgang lantern display' }, q: '남강유등축제', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '낮에는 유등의 뼈대와 색을 볼 수 있습니다. 해가 지기 전 둔치를 한 바퀴 돌아 두세요.', en: 'By daylight you can see how the lanterns are built; walk the whole bank once before dark.' },
        photo: 'th-festival' },
      { phase: 'evening', time: '18:00', name: { ko: '점등', en: 'Lights on' }, q: '남강유등축제', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '점등 순간이 이 축제의 전부입니다. 강 건너에서 보면 불빛이 물에 한 번 더 내려앉습니다.', en: 'The moment of lighting is the whole festival — from across the water every lantern appears twice.' },
        photo: 'th-festival-p2' },
      { phase: 'evening', time: '19:00', name: { ko: '축제장 저녁', en: 'Dinner at the festival' }, q: '진주 남강', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '부스에서 조금씩 사 먹는 게 축제의 저녁입니다. 진주는 비빔밥과 냉면으로 알려져 있어요.', en: 'Dinner is whatever you pick up stall by stall — Jinju is known for bibimbap and cold noodles.' } },
      { phase: 'evening', time: '20:30', name: { ko: '남강 야경 산책', en: 'Night walk by the Namgang' }, q: '진주 남강', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '인파가 빠진 뒤 한 바퀴 더. 21시 전후가 사진 찍기 가장 좋습니다.', en: 'One more loop after the crowd thins — around nine is the best light for photographs.' } },
      { phase: 'return', time: '21:30', name: { ko: '진주역', en: 'Jinju Station' }, q: '진주역', move: { ko: '셔틀 약 15분', en: 'Shuttle, about 15 min' },
        desc: { ko: '막차 시간은 축제 기간에 연장되기도 합니다. 미리 확인해 두세요.', en: 'Last trains are sometimes extended during the festival — check ahead.' } }
    ]
  },
  conds: [
    { k: { ko: '시기', en: 'When' }, v: { ko: '축제마다 1~2주, 해마다 날짜가 바뀜', en: 'Each festival runs one to two weeks; dates move every year' } },
    { k: { ko: '요금', en: 'Tickets' }, v: { ko: '무료 축제가 많지만 일부는 입장료·체험비 별도', en: 'Many are free; some charge entry or per activity' } },
    { k: { ko: '교통', en: 'Traffic' }, v: { ko: '행사장 주변 도로 통제, 셔틀·전철 이용', en: 'Roads around the site close — take the shuttle or the train' } }
  ],
  places: [
    { name: { ko: '진주 남강유등축제', en: 'Jinju Namgang Lantern Festival' }, region: 'gyeongsang', q: '남강유등축제', note: { ko: '10월 초. 남강 위로 수만 개의 등이 뜹니다.', en: 'Early October, when tens of thousands of lanterns float on the Namgang.' } },
    { name: { ko: '화천 산천어축제', en: 'Hwacheon Sancheoneo Ice Festival' }, region: 'gangwon', q: '화천 산천어축제', note: { ko: '1월. 얼음 위 얼음낚시와 눈 조각. 방한복 필수.', en: 'January: ice fishing and snow sculpture; proper winter gear essential.' } },
    { name: { ko: '보령 머드축제', en: 'Boryeong Mud Festival' }, region: 'jeolla', q: '보령머드축제', note: { ko: '7월. 대천해수욕장에서 열리는 여름 축제.', en: 'July on Daecheon beach — the big summer one.' } },
    { name: { ko: '함평 나비축제', en: 'Hampyeong Butterfly Festival' }, region: 'jeolla', q: '함평나비축제', note: { ko: '4~5월. 나비와 봄꽃, 아이와 함께 좋습니다.', en: 'April–May: butterflies and spring flowers, good with children.' } },
    { name: { ko: '안동 국제탈춤축제', en: 'Andong Mask Dance Festival' }, region: 'gyeongsang', q: '안동국제탈춤축제', note: { ko: '9~10월. 하회탈과 세계 탈춤 공연.', en: 'September–October: Hahoe masks and mask dance from around the world.' } },
    { name: { ko: '강릉 단오제', en: 'Gangneung Danoje' }, region: 'gangwon', q: '강릉단오제', note: { ko: '5월 단오. 유네스코 인류무형유산, 관노가면극.', en: 'Around Dano in May: a UNESCO-listed shaman rite and mask play.' } },
    { name: { ko: '부산 불꽃축제', en: 'Busan Fireworks Festival' }, region: 'gyeongsang', q: '부산불꽃축제', note: { ko: '11월. 광안리 앞바다 위 불꽃. 숙소는 일찍 예약하세요.', en: 'November fireworks over Gwangalli — book a room early.' } },
    { name: { ko: '서울 빛초롱축제', en: 'Seoul Lantern Festival' }, region: 'capital', q: '서울빛초롱축제', note: { ko: '12월. 청계천을 따라 등이 이어집니다.', en: 'December: lanterns along the Cheonggyecheon.' } },
    { name: { ko: '진도 영등축제', en: 'Jindo Yeongdeung Festival' }, region: 'jeolla', q: '진도 영등축제', note: { ko: '2~3월. 바닷길이 열리는 때에 맞춘 축제.', en: 'February–March, timed to the parting of the sea road.' } },
    { name: { ko: '문경 찻사발축제', en: 'Mungyeong Tea Bowl Festival' }, region: 'gyeongsang', q: '문경찻사발축제', note: { ko: '4~5월. 도자기를 직접 만져 보고 사는 축제.', en: 'April–May: handle and buy pottery straight from the kilns.' } },
    { name: { ko: '청도 소싸움축제', en: 'Cheongdo Bullfighting Festival' }, region: 'gyeongsang', q: '청도소싸움축제', note: { ko: '3월. 국내 유일의 전통 소싸움.', en: 'March: the country\u2019s traditional bull fighting.' } },
    { name: { ko: '제주 들불축제', en: 'Jeju Fire Festival' }, region: 'jeju', q: '제주들불축제', note: { ko: '3월. 오름에 불을 놓는 봄맞이 축제.', en: 'March: hillsides set alight to welcome spring.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍚', dish: { ko: '국밥 · 비빔밥', en: 'Rice soup · bibimbap' }, note: { ko: '축제장은 밤이 중심이라 낮은 간단히.', en: 'The festival peaks at night — keep the day light.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥗', dish: { ko: '진주비빔밥 · 냉면', en: 'Jinju bibimbap · cold noodles' }, note: { ko: '진주는 비빔밥과 냉면으로 알려진 동네입니다.', en: 'Jinju is known for bibimbap and cold noodles.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍢', dish: { ko: '축제 부스 간식 · 붕어빵 · 츄러스', en: 'Festival stalls · bungeoppang · churros' }, note: { ko: '한 바퀴 돌며 조금씩 사 먹는 재미.', en: 'Buy a little from each lap.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🔥', dish: { ko: '닭강정 · 불고기 · 어묵국', en: 'Fried chicken · bulgogi · fish-cake soup' }, note: { ko: '점등 뒤에는 줄이 길어져 미리 사 두세요.', en: 'Queues get long after the lights go on — buy early.' } }
  ],
  photos: [
    { file: 'th-festival', cap: { ko: '강 위에 걸린 축제 등', en: 'Festival lanterns on the water' } },
    { file: 'th-festival-p2', cap: { ko: '점등 뒤의 축제장', en: 'The festival after the lights come on' } }
  ],
  tip: { ko: '축제 날짜는 해마다 바뀝니다. 가기 전에 공식 안내로 확정 날짜를 확인하세요.', en: 'Festival dates move every year — confirm on the official notice before travelling.' }
},
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
/* ------------------------------------- 07 한옥 · 고궁 · 전통문화 */
{
  id: 'hanok', emoji: '🏯', tint: '#E2C9A0',
  name: { ko: '한옥 · 고궁 · 전통문화', en: 'Hanok, palaces & tradition' },
  sub: { ko: '지붕 아래로 하루를 걷는 코스', en: 'A day under tiled roofs' },
  tag: { ko: '궁궐 · 고택 · 서원 · 한복', en: 'Palaces, old houses, academies, hanbok' },
  intro: {
    ko: '한국의 옛 건축은 세 가지로 나눠 보면 이해가 빠릅니다. 왕이 사는 궁궐, 양반이 사는 고택, 선비가 공부하던 서원. 여기에 사람이 사는 한옥마을과 전통 공예·음식 체험이 붙습니다. 서울의 궁궐은 서로 가까워 하루에 세 시대를 지나갈 수 있어요. 후원은 하루 인원이 정해져 있으니 예약이 이 코스의 유일한 숙제입니다.',
    en: 'Korean traditional architecture divides neatly: palaces for kings, large houses for the yangban, academies for scholars — with living hanok villages and craft or food experiences attached. Seoul\u2019s palaces sit close enough to cross three centuries in a day; the secret garden\u2019s daily quota is the only thing you must book.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울 설경', en: 'Snow' }],
  transport: { ko: '도보 + 지하철', en: 'Walking + subway' },
  duration: { ko: '약 10시간', en: 'About 10 hours' },
  hub: {
    ko: '서울역', en: 'Seoul Station', q: '서울역',
    note: {
      ko: 'KTX·공항철도·1·4호선. 3호선으로 갈아타면 경복궁까지 20분입니다. 짐은 역 보관함에 두세요.',
      en: 'KTX, airport railroad, lines 1 and 4. Change to Line 3 and Gyeongbokgung is 20 minutes away; leave bags in the station.'
    }
  },
  course: {
    title: { ko: '경복궁에서 창덕궁 후원까지', en: 'Gyeongbokgung to the secret garden' },
    meta: { ko: '7곳 · 약 10시간 · 도보 6km', en: '7 stops · about 10 hours · 6 km on foot' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '3호선으로 경복궁역까지. 5번 출구로 나오면 궁 담장이 바로 보입니다.', en: 'Line 3 to Gyeongbokgung station — exit 5 puts you at the palace wall.' } },
      { phase: 'morning', time: '09:30', name: { ko: '경복궁', en: 'Gyeongbokgung Palace' }, q: '경복궁', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '근정전 마당과 경회루 연못. 10시 수문장 교대식을 보려면 조금 서둘러 들어가세요. 화요일 휴무.', en: 'The Geunjeongjeon courtyard and Gyeonghoeru pond — be inside for the 10 a.m. guard change. Closed Tuesdays.' },
        photo: 'th-hanok' },
      { phase: 'morning', time: '11:30', name: { ko: '북촌한옥마을', en: 'Bukchon hanok street' }, q: '북촌한옥마을', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '기와지붕이 겹겹이 이어지는 언덕 골목. 실제 주민이 사는 곳이라 문 앞에서 조용히, 사진은 길에서만.', en: 'Tiled roofs stacked up a hill. People live here: quiet at the gates, photographs from the street.' } },
      { phase: 'lunch', time: '12:40', name: { ko: '인사동', en: 'Insadong' }, q: '인사동', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '점심은 인사동에서. 골목 안쪽으로 들어가면 전통차를 내는 집과 공예 가게가 이어집니다.', en: 'Lunch in Insadong; the inner alleys have tea rooms and craft shops.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '창덕궁', en: 'Changdeokgung Palace' }, q: '창덕궁', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '담장이 낮고 건물이 언덕을 따라 앉아 있습니다. 월요일 휴무, 후원은 별도 예약.', en: 'Low walls and buildings following the slope. Closed Mondays; the garden needs its own booking.' },
        photo: 'th-hanok-p2' },
      { phase: 'afternoon', time: '15:00', name: { ko: '창덕궁 후원', en: 'Changdeokgung secret garden' }, q: '창덕궁 후원', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '해설사와 함께 90분. 연못과 정자가 계곡을 따라 놓여 있어 한 시간이 금방 갑니다.', en: 'Ninety minutes with a guide through ponds and pavilions set along a valley.' } },
      { phase: 'evening', time: '17:00', name: { ko: '종묘', en: 'Jongmyo Shrine' }, q: '종묘', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
        desc: { ko: '조선 왕과 왕비의 신위를 모신 곳. 끝없이 이어지는 긴 마루가 인상적입니다.', en: 'The royal ancestral shrine — one endless veranda is the thing to see.' } },
      { phase: 'evening', time: '18:30', name: { ko: '익선동 한옥골목', en: 'Ikseon-dong hanok alleys' }, q: '익선동', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '백 년 된 한옥 사이 골목이 미로처럼 이어집니다. 저녁은 여기서.', en: 'A maze of alleys between century-old houses — dinner here.' } },
      { phase: 'return', time: '20:00', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '1호선 종로3가에서 두 정거장. 막차 전에 여유 있게.', en: 'Two stops on Line 1 from Jongno 3-ga — comfortably before the last train.' } }
    ]
  },
  subs: {
    title: { ko: '한옥·전통문화 스물다섯 가지', en: 'Twenty-five ways into tradition' },
    items: [
      { emoji: '🏘️', name: { ko: '한옥마을', en: 'Hanok villages' }, desc: { ko: '전통 한옥이 모여 있는 마을. 주민 거주 여부를 구분하세요.', en: 'Villages of hanok houses — note whether people live there.' } },
      { emoji: '🏚️', name: { ko: '전통 고택', en: 'Old noble houses' }, desc: { ko: '양반집·종가·명문가. 관람과 숙박이 다릅니다.', en: 'Yangban houses and clan homes; visiting and staying differ.' } },
      { emoji: '🛏️', name: { ko: '한옥 숙박', en: 'Hanok stays' }, desc: { ko: '온돌방·툇마루·대청마루. 화장실과 난방을 확인하세요.', en: 'Ondol rooms and wooden verandas; check bathroom and heating.' } },
      { emoji: '🏯', name: { ko: '궁궐', en: 'Palaces' }, desc: { ko: '왕궁과 왕실 생활. 휴무일이 궁마다 다릅니다.', en: 'Royal palaces and court life; closing days differ.' } },
      { emoji: '⚰️', name: { ko: '왕릉', en: 'Royal tombs' }, desc: { ko: '조선왕릉과 왕실 역사. 산책로가 잘 나 있습니다.', en: 'Joseon royal tombs with good walking paths.' } },
      { emoji: '📜', name: { ko: '서원', en: 'Seowon academies' }, desc: { ko: '선비문화와 교육기관. 세계유산 서원이 여럿입니다.', en: 'Scholar culture and schools, several of them World Heritage.' } },
      { emoji: '🏫', name: { ko: '향교', en: 'Hyanggyo' }, desc: { ko: '지방 교육과 유교문화의 자리.', en: 'Local Confucian schools.' } },
      { emoji: '🌾', name: { ko: '전통 마을', en: 'Traditional villages' }, desc: { ko: '옛 마을과 공동체 생활.', en: 'Old villages and communal life.' } },
      { emoji: '🎎', name: { ko: '민속촌', en: 'Folk villages' }, desc: { ko: '전통 생활과 옛 거리 재현.', en: 'Recreated traditional life and streets.' } },
      { emoji: '🛕', name: { ko: '사찰·산사', en: 'Temples' }, desc: { ko: '전통 목조건축과 불교문화.', en: 'Timber architecture and Buddhist culture.' } },
      { emoji: '🧱', name: { ko: '성곽·읍성', en: 'Fortresses' }, desc: { ko: '옛 성곽과 성 안의 마을.', en: 'Fortress walls and the villages inside them.' } },
      { emoji: '🪷', name: { ko: '전통 정원', en: 'Traditional gardens' }, desc: { ko: '연못과 누정의 한국식 정원.', en: 'Korean gardens of ponds and pavilions.' } },
      { emoji: '🌤️', name: { ko: '정자·누각', en: 'Pavilions' }, desc: { ko: '풍류문화의 자리. 해 질 무렵이 좋습니다.', en: 'Places of music and company, best at dusk.' } },
      { emoji: '🍵', name: { ko: '전통 다도', en: 'Tea ceremony' }, desc: { ko: '다례와 전통차. 하동·보성이 대표 산지.', en: 'Tea ceremony; Hadong and Boseong are the tea country.' } },
      { emoji: '👘', name: { ko: '한복 체험', en: 'Hanbok' }, desc: { ko: '한복 대여와 사진. 궁궐 입장료가 면제됩니다.', en: 'Rent a hanbok, and palace entry is free.' } },
      { emoji: '💍', name: { ko: '전통 혼례', en: 'Traditional wedding' }, desc: { ko: '전통 혼례와 예절 체험.', en: 'Traditional wedding and etiquette experiences.' } },
      { emoji: '🖌️', name: { ko: '한지·서예', en: 'Paper & calligraphy' }, desc: { ko: '한지 제작과 붓글씨.', en: 'Making hanji paper and brush writing.' } },
      { emoji: '🏺', name: { ko: '도자기·옹기', en: 'Ceramics' }, desc: { ko: '도예·백자·청자·옹기.', en: 'Pottery, white and celadon ware, onggi jars.' } },
      { emoji: '🪡', name: { ko: '전통 공예', en: 'Crafts' }, desc: { ko: '나전칠기·목공·매듭·자수.', en: 'Lacquer, woodwork, knotting, embroidery.' } },
      { emoji: '🍚', name: { ko: '전통 음식', en: 'Traditional food' }, desc: { ko: '한식·향토음식·궁중음식.', en: 'Korean, regional and court cuisine.' } },
      { emoji: '🧺', name: { ko: '전통시장', en: 'Traditional markets' }, desc: { ko: '오일장과 옛 장터.', en: 'Five-day and old market streets.' } },
      { emoji: '🥁', name: { ko: '전통 음악', en: 'Traditional music' }, desc: { ko: '국악·판소리·풍물 공연.', en: 'Gugak, pansori and percussion bands.' } },
      { emoji: '🎋', name: { ko: '전통 놀이', en: 'Folk games' }, desc: { ko: '윷놀이·연날리기·탈춤.', en: 'Yut, kite flying, mask dance.' } },
      { emoji: '📖', name: { ko: '선비문화', en: 'Scholar culture' }, desc: { ko: '서책·고택·유교문화와 문학.', en: 'Books, old houses and Confucian letters.' } },
      { emoji: '🏮', name: { ko: '전통 야경', en: 'Traditional nights' }, desc: { ko: '한옥 야경과 궁궐 야간개장.', en: 'Lit hanok streets and palace night openings.' } }
    ]
  },
  conds: [
    { k: { ko: '휴무', en: 'Closing days' }, v: { ko: '경복궁 화 · 창덕궁·덕수궁·종묘 월', en: 'Gyeongbokgung Tue; Changdeokgung, Deoksugung, Jongmyo Mon' } },
    { k: { ko: '후원', en: 'Secret garden' }, v: { ko: '해설 시간제, 하루 인원 제한, 온라인 예약', en: 'Timed guided entry with a daily cap; book online' } },
    { k: { ko: '구분', en: 'Know the difference' }, v: { ko: '주민 거주 마을 / 관람용 한옥마을, 관람 / 숙박 가능 고택', en: 'Lived-in village or tourist hanok village; houses you can visit or stay in' } },
    { k: { ko: '요금', en: 'Tickets' }, v: { ko: '한복 착용 시 궁궐 입장료 무료', en: 'Palace entry is free in hanbok' } }
  ],
  places: [
    { name: { ko: '경복궁', en: 'Gyeongbokgung' }, region: 'capital', q: '경복궁', note: { ko: '조선 법궁. 수문장 교대식과 경회루.', en: 'The main Joseon palace: guard change and the Gyeonghoeru pond.' } },
    { name: { ko: '창덕궁', en: 'Changdeokgung' }, region: 'capital', q: '창덕궁', note: { ko: '유네스코 세계유산. 후원이 핵심.', en: 'A World Heritage site; the secret garden is the heart of it.' } },
    { name: { ko: '창경궁', en: 'Changgyeonggung' }, region: 'capital', q: '창경궁', note: { ko: '명정전과 춘당지. 창덕궁과 이어집니다.', en: 'Myeongjeongjeon and the Chundang pond, joined to Changdeokgung.' } },
    { name: { ko: '덕수궁', en: 'Deoksugung' }, region: 'capital', q: '덕수궁', note: { ko: '돌담길과 서양식 석조전.', en: 'A stone wall road and a Western-style hall.' } },
    { name: { ko: '종묘', en: 'Jongmyo' }, region: 'capital', q: '종묘', note: { ko: '유네스코 세계유산. 정전의 긴 마루.', en: 'World Heritage: one very long veranda.' } },
    { name: { ko: '북촌한옥마을', en: 'Bukchon hanok village' }, region: 'capital', q: '북촌한옥마을', note: { ko: '주거지. 오전이 한산하고 예절이 필요합니다.', en: 'A lived-in neighbourhood: quiet in the morning, and behave accordingly.' } },
    { name: { ko: '남산골한옥마을', en: 'Namsangol hanok village' }, region: 'capital', q: '남산골한옥마을', note: { ko: '한옥 다섯 채와 전통정원, 한복·공예 체험.', en: 'Five hanok houses, a garden, hanbok and craft experiences.' } },
    { name: { ko: '은평한옥마을', en: 'Eunpyeong hanok village' }, region: 'capital', q: '은평한옥마을', note: { ko: '북한산 아래 현대 한옥마을, 산책로.', en: 'A modern hanok quarter below Bukhansan.' } },
    { name: { ko: '수원 화성 · 행궁동', en: 'Suwon Hwaseong & Haenggung' }, region: 'capital', q: '수원화성', note: { ko: '정조의 성곽과 한옥거리, 야간 조명.', en: 'Jeongjo\u2019s fortress, a hanok street and night lighting.' } },
    { name: { ko: '강화 고려궁지', en: 'Ganghwa Goryeo palace site' }, region: 'capital', q: '고려궁지', note: { ko: '고려 궁궐 터와 조선의 전통가옥.', en: 'A Goryeo palace site with later traditional houses.' } },
    { name: { ko: '한국민속촌', en: 'Korean Folk Village' }, region: 'capital', q: '한국민속촌', note: { ko: '전국 전통가옥과 생활문화, 공연.', en: 'Traditional houses from across the country, with performances.' } },
    { name: { ko: '강릉 선교장', en: 'Gangneung Seongyojang' }, region: 'gangwon', q: '선교장', note: { ko: '연못을 품은 조선 상류 주택.', en: 'A noble house with its own pond.' } },
    { name: { ko: '강릉 오죽헌', en: 'Gangneung Ojukheon' }, region: 'gangwon', q: '오죽헌', note: { ko: '신사임당과 율곡의 집.', en: 'The house of Shin Saimdang and Yulgok.' } },
    { name: { ko: '공주한옥마을', en: 'Gongju hanok village' }, region: 'jeolla', q: '공주한옥마을', note: { ko: '온돌 숙박과 한지·도자기 체험, 공산성 연계.', en: 'Ondol stays, paper and ceramic workshops, next to Gongsanseong.' } },
    { name: { ko: '아산 외암민속마을', en: 'Asan Oeam folk village' }, region: 'jeolla', q: '외암민속마을', note: { ko: '초가·기와집·돌담길, 실제 마을.', en: 'Thatched and tiled houses with stone walls, still lived in.' } },
    { name: { ko: '서산 해미읍성', en: 'Seosan Haemieupseong' }, region: 'jeolla', q: '해미읍성', note: { ko: '조선 읍성의 모습이 남은 성곽.', en: 'A Joseon town fortress still standing.' } },
    { name: { ko: '논산 명재고택', en: 'Nonsan Myeongjae house' }, region: 'jeolla', q: '명재고택', note: { ko: '사대부 고택과 장독대, 전통 정원.', en: 'A scholar\u2019s house with jar terraces and a garden.' } },
    { name: { ko: '전주한옥마을', en: 'Jeonju hanok village' }, region: 'jeolla', q: '전주한옥마을', note: { ko: '700여 채의 한옥, 한복·한식·한지.', en: 'Seven hundred hanok houses, hanbok, food and paper.' } },
    { name: { ko: '고창읍성', en: 'Gochang eupseong' }, region: 'jeolla', q: '고창읍성', note: { ko: '조선 읍성과 성곽길.', en: 'A Joseon town wall and its path.' } },
    { name: { ko: '순천 낙안읍성', en: 'Suncheon Naganeupseong' }, region: 'jeolla', q: '낙안읍성', note: { ko: '주민이 사는 초가 마을과 성곽.', en: 'A thatched village inside walls, still inhabited.' } },
    { name: { ko: '구례 운조루', en: 'Gurye Unjoru' }, region: 'jeolla', q: '운조루', note: { ko: '조선 양반 고택과 옛 생활문화.', en: 'A yangban house and its old way of living.' } },
    { name: { ko: '안동 하회마을', en: 'Andong Hahoe' }, region: 'gyeongsang', q: '하회마을', note: { ko: '세계유산. 낙동강이 감싸는 마을과 탈놀이.', en: 'World Heritage: a village inside a river bend, with mask dance.' } },
    { name: { ko: '경주 양동마을', en: 'Gyeongju Yangdong' }, region: 'gyeongsang', q: '양동마을', note: { ko: '세계유산. 조선 양반마을의 공간 구성.', en: 'World Heritage: the layout of a yangban village.' } },
    { name: { ko: '안동 도산서원', en: 'Andong Dosan Seowon' }, region: 'gyeongsang', q: '도산서원', note: { ko: '퇴계 이황과 선비문화, 야간개장.', en: 'Toegye and scholar culture, with night openings.' } },
    { name: { ko: '안동 병산서원', en: 'Andong Byeongsan Seowon' }, region: 'gyeongsang', q: '병산서원', note: { ko: '만대루와 낙동강 풍경.', en: 'The Mandae pavilion over the Nakdong.' } },
    { name: { ko: '영주 소수서원', en: 'Yeongju Sosu Seowon' }, region: 'gyeongsang', q: '소수서원', note: { ko: '우리나라 최초의 사액서원.', en: 'The country\u2019s first royally endowed academy.' } },
    { name: { ko: '경주 교촌한옥마을', en: 'Gyeongju Gyochon village' }, region: 'gyeongsang', q: '교촌한옥마을', note: { ko: '최부자댁과 전통마을, 첨성대 연계.', en: 'The Choi family house and old lanes, near Cheomseongdae.' } },
    { name: { ko: '영주 무섬마을', en: 'Yeongju Museom village' }, region: 'gyeongsang', q: '무섬마을', note: { ko: '외나무다리로 이어지는 물 위의 마을.', en: 'A village joined by a single-log bridge.' } },
    { name: { ko: '제주 성읍민속마을', en: 'Jeju Seongeup village' }, region: 'jeju', q: '성읍민속마을', note: { ko: '제주 초가와 돌담, 전통 주거.', en: 'Jeju thatch, stone walls and traditional houses.' } },
    { name: { ko: '전주 전통한지원', en: 'Jeonju hanji workshop' }, region: 'jeolla', q: '전주 전통한지원', note: { ko: '한지 제작과 전통 종이 체험.', en: 'Making hanji paper by hand.' } },
    { name: { ko: '이천 도자예술마을', en: 'Icheon ceramic village' }, region: 'capital', q: '이천 도자예술마을', note: { ko: '물레·공방 체험과 도자 전시.', en: 'Wheel throwing, workshops and ceramics displays.' } },
    { name: { ko: '안동 하회세계탈박물관', en: 'Andong mask museum' }, region: 'gyeongsang', q: '하회세계탈박물관', note: { ko: '하회탈과 세계의 탈, 공연문화.', en: 'Hahoetal, masks from elsewhere and performance culture.' } },
    { name: { ko: '나주 천연염색박물관', en: 'Naju natural dye museum' }, region: 'jeolla', q: '나주천연염색박물관', note: { ko: '천연염색과 전통 섬유문화.', en: 'Natural dyeing and textile tradition.' } },
    { name: { ko: '보성 한국차문화공원', en: 'Boseong tea culture park' }, region: 'jeolla', q: '한국차문화공원', note: { ko: '다례와 차밭 문화 체험.', en: 'Tea ceremony and tea-field experiences.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '설렁탕 · 북엇국', en: 'Beef soup · pollack soup' }, note: { ko: '궁궐 근처 아침 식당은 8시부터.', en: 'Places near the palaces open at eight.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍱', dish: { ko: '한정식 · 비빔밥', en: 'Hanjeongsik · bibimbap' }, note: { ko: '인사동은 상 차림이 정갈한 집이 많습니다.', en: 'Insadong does tidy set tables well.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍵', dish: { ko: '전통차 · 약과 · 떡', en: 'Traditional tea · yakgwa · rice cake' }, note: { ko: '오후에 차 한 잔으로 쉬어 가세요.', en: 'A tea break in the afternoon.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍶', dish: { ko: '삼겹살 · 전 · 막걸리', en: 'Pork belly · pancakes · makgeolli' }, note: { ko: '익선동 골목에서 마무리.', en: 'Finish in the Ikseon-dong alleys.' } }
  ],
  photos: [
    { file: 'th-hanok', cap: { ko: '궁궐의 전각', en: 'A palace hall' } },
    { file: 'th-hanok-p2', cap: { ko: '한옥 지붕이 이어지는 골목', en: 'An alley of tiled roofs' } }
  ],
  tip: { ko: '궁궐은 휴무일이 서로 다릅니다. 경복궁 화요일, 창덕궁·덕수궁·종묘 월요일을 피해 일정을 짜세요.', en: 'The palaces close on different days — Gyeongbokgung on Tuesday, the others on Monday.' }
},
/* ------------------------------------------------ 08 체험농장·수확 */
{
  id: 'farm', emoji: '🌾', tint: '#C9E4A5',
  name: { ko: '체험농장 · 수확', en: 'Farm experiences & harvest' },
  sub: { ko: '손으로 거두는 하루', en: 'A day you pick yourself' },
  tag: { ko: '수확 · 농촌 체험 · 계절', en: 'Harvest, farm life, seasons' },
  intro: {
    ko: '체험농장은 품목마다 철이 다릅니다. 딸기는 겨울, 감자는 초여름, 사과와 배는 가을, 메밀꽃은 9월이에요. 여기서는 9월의 평창 봉평을 기본 코스로 잡았습니다. 메밀꽃밭과 감자밭, 물레방아가 한 동네에 있어 걷기만 해도 하루가 됩니다.',
    en: 'Every crop has its own week: strawberries in winter, potatoes in early summer, apples and pears in autumn, buckwheat flowers in September. This route is Bongpyeong in Pyeongchang in September — buckwheat fields, potato plots and a watermill all in one village.'
  },
  seasons: [{ ko: '봄 딸기', en: 'Spring strawberries' }, { ko: '여름 감자', en: 'Summer potatoes' }, { ko: '가을 사과·메밀', en: 'Autumn apples & buckwheat' }],
  transport: { ko: 'KTX + 버스·택시', en: 'KTX + bus or taxi' },
  duration: { ko: '약 8시간', en: 'About 8 hours' },
  hub: {
    ko: '평창역', en: 'Pyeongchang Station', q: '평창역',
    note: {
      ko: 'KTX 강릉선. 서울 청량리에서 1시간 20분. 역에서 봉평까지 버스로 25분, 택시로 15분입니다.',
      en: 'On the KTX Gangneung line, eighty minutes from Cheongnyangni. Bongpyeong is 25 minutes by bus or 15 by taxi.'
    }
  },
  course: {
    title: { ko: '봉평 — 메밀꽃밭에서 감자밭까지', en: 'Bongpyeong — buckwheat flowers to potato plots' },
    meta: { ko: '6곳 · 약 8시간 · 버스 2회', en: '6 stops · about 8 hours · 2 buses' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '평창역', en: 'Pyeongchang Station' }, q: '평창역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역 앞에서 봉평행 버스로. 수확 체험은 예약제가 많으니 도착 시간을 미리 알려 두세요.', en: 'A Bongpyeong bus leaves from outside; harvest visits are usually booked, so tell the farm your arrival time.' } },
      { phase: 'morning', time: '10:00', name: { ko: '이효석문화마을', en: 'Yi Hyo-seok culture village' }, q: '이효석문화마을', move: { ko: '버스 약 25분', en: 'Bus, about 25 min' },
        desc: { ko: '소설 「메밀꽃 필 무렵」의 배경. 생가와 오래된 담장길이 이어집니다.', en: 'The setting of the story “When the Buckwheat Blooms” — the writer\u2019s house and old walled lanes.' },
        photo: 'th-farm' },
      { phase: 'morning', time: '11:00', name: { ko: '메밀꽃밭', en: 'Buckwheat fields' }, q: '봉평 메밀꽃밭', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '9월 초순이 절정. 밭 사이로 난 길을 따라 걸으면 사진이 잘 나옵니다.', en: 'Peak in early September; the paths between the plots are the photographs.' },
        photo: 'th-farm-p2' },
      { phase: 'lunch', time: '12:30', name: { ko: '봉평 장터', en: 'Bongpyeong market' }, q: '봉평장', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '점심은 메밀국수와 메밀전. 장날(2·7)이면 시장 골목이 함께 열립니다.', en: 'Buckwheat noodles and pancakes for lunch — and on market days (2nd and 7th) the stalls open too.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '감자밭 수확 체험', en: 'Potato harvest' }, q: '봉평 감자밭 체험', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '6~7월에 감자, 9월에는 고구마와 옥수수로 바뀝니다. 장갑과 흙 묻어도 되는 옷을 입으세요.', en: 'Potatoes in June–July, sweetcorn and sweet potato by September. Bring gloves and clothes that can take soil.' } },
      { phase: 'afternoon', time: '15:30', name: { ko: '물레방아 · 흥정천', en: 'Watermill & Heungjeong stream' }, q: '봉평 물레방아', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '계곡을 따라 난 산책로. 수확한 것을 씻고 쉬기 좋은 자리입니다.', en: 'A path along the stream — a good place to rinse the harvest and sit down.' } },
      { phase: 'return', time: '17:30', name: { ko: '평창역', en: 'Pyeongchang Station' }, q: '평창역', move: { ko: '버스 약 25분', en: 'Bus, about 25 min' },
        desc: { ko: '역으로 돌아와 KTX. 수확한 것을 들고 가려면 비닐봉지와 쿨백을 챙기세요.', en: 'Back to the station; bring a bag and a cool bag if you are carrying produce home.' } }
    ]
  },
  conds: [
    { k: { ko: '시기', en: 'Season' }, v: { ko: '품목별로 2~4주뿐 — 방문 전 수확 가능 여부 확인', en: 'Each crop has only two to four weeks; confirm before booking' } },
    { k: { ko: '예약', en: 'Booking' }, v: { ko: '대부분 사전 예약, 인원 제한 있음', en: 'Mostly by reservation, with limited places' } },
    { k: { ko: '복장', en: 'Clothes' }, v: { ko: '장갑·긴팔·흙 묻어도 되는 신발, 쿨백', en: 'Gloves, long sleeves, shoes that can get muddy, a cool bag' } }
  ],
  places: [
    { name: { ko: '봉평 메밀꽃밭', en: 'Bongpyeong buckwheat fields' }, region: 'gangwon', q: '봉평 메밀꽃밭', note: { ko: '9월 초 절정. 평창역에서 버스 25분.', en: 'Peak in early September, 25 minutes by bus from Pyeongchang station.' } },
    { name: { ko: '평창 감자밭', en: 'Pyeongchang potato farms' }, region: 'gangwon', q: '평창 감자 체험', note: { ko: '6~7월 수확. 흙 속에서 캐는 체험이 아이에게 좋습니다.', en: 'Harvested June–July; digging them out is the fun for children.' } },
    { name: { ko: '이천 쌀·복숭아', en: 'Icheon rice & peaches' }, region: 'capital', q: '이천 쌀 체험', note: { ko: '경강선 부발역 인근. 모내기(6월)와 벼베기(10월).', en: 'Near Bubal station: planting in June, reaping in October.' } },
    { name: { ko: '안성 배·포도', en: 'Anseong pears & grapes' }, region: 'capital', q: '안성 배 수확', note: { ko: '9~10월. 과수원 체험은 예약제가 많습니다.', en: 'September–October; orchard visits usually need booking.' } },
    { name: { ko: '청송 사과', en: 'Cheongsong apples' }, region: 'gyeongsang', q: '청송 사과 체험', note: { ko: '10월. 사과밭과 주왕산을 함께.', en: 'October — pair the orchards with Juwangsan.' } },
    { name: { ko: '나주 배', en: 'Naju pears' }, region: 'jeolla', q: '나주 배 체험', note: { ko: '9월. 배꽃은 4월, 수확은 가을.', en: 'Blossom in April, harvest in autumn.' } },
    { name: { ko: '논산 딸기', en: 'Nonsan strawberries' }, region: 'jeolla', q: '논산 딸기 체험', note: { ko: '12~5월. 겨울 실내 체험이라 아이와 가기 좋습니다.', en: 'December–May, indoors in winter — good with children.' } },
    { name: { ko: '담양 딸기', en: 'Damyang strawberries' }, region: 'jeolla', q: '담양 딸기 체험', note: { ko: '12~5월. 죽녹원과 함께 묶기 좋습니다.', en: 'December–May, easy to combine with the bamboo garden.' } },
    { name: { ko: '김제 벽골제 논', en: 'Gimje Byeokgolje paddies' }, region: 'jeolla', q: '벽골제', note: { ko: '국내 가장 오래된 저수지. 모내기·추수 체험.', en: 'The country\u2019s oldest reservoir, with planting and harvest days.' } },
    { name: { ko: '양평 블루베리', en: 'Yangpyeong blueberries' }, region: 'capital', q: '양평 블루베리 체험', note: { ko: '6~8월. 서울에서 한 시간.', en: 'June–August, an hour from Seoul.' } },
    { name: { ko: '고성 감자', en: 'Goseong potatoes' }, region: 'gangwon', q: '고성 감자 체험', note: { ko: '6월. 동해 바다와 함께 다녀오기 좋습니다.', en: 'June — easy to combine with the east coast.' } },
    { name: { ko: '제주 감귤', en: 'Jeju tangerines' }, region: 'jeju', q: '제주 감귤 체험', note: { ko: '11~2월. 서귀포 일대 농장.', en: 'November–February, on farms around Seogwipo.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍙', dish: { ko: '주먹밥 · 감자수제비', en: 'Rice balls · potato dumpling soup' }, note: { ko: '농촌 아침은 든든하게.', en: 'Farm-country breakfasts are hearty.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '메밀국수 · 메밀전 · 감자전', en: 'Buckwheat noodles · buckwheat pancake · potato pancake' }, note: { ko: '봉평은 메밀 요리가 기본입니다.', en: 'In Bongpyeong, buckwheat is the default.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🌽', dish: { ko: '삶은 감자 · 옥수수 · 사과', en: 'Boiled potatoes · corn · apples' }, note: { ko: '방금 캔 것을 그 자리에서 쪄 먹습니다.', en: 'Steam what you just dug up.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🥘', dish: { ko: '감자탕 · 닭볶음탕 · 산채비빔밥', en: 'Potato stew · braised chicken · wild-vegetable bibimbap' }, note: { ko: '수확한 재료로 끓인 한 그릇.', en: 'A pot made from what the fields gave.' } }
  ],
  photos: [
    { file: 'th-farm', cap: { ko: '밭과 마을 풍경', en: 'Fields and village' } },
    { file: 'th-farm-p2', cap: { ko: '수확철의 밭길', en: 'A field path at harvest' } }
  ],
  tip: { ko: '수확 체험은 작물 상태에 따라 당일 취소되기도 합니다. 하루 전 전화로 확인하세요.', en: 'Harvest visits are sometimes cancelled on the day — call the day before.' }
},
/* --------------------------------------------- 09 동물농장·목장 체험 */
{
  id: 'animal', emoji: '🐄', tint: '#FFD9A0',
  name: { ko: '동물농장 · 목장 체험', en: 'Animal farms & ranches' },
  sub: { ko: '먹이 주고, 쓰다듬고, 초원을 걷는 하루', en: 'Feed, touch, and walk the pasture' },
  tag: { ko: '양·알파카·송아지 · 먹이주기', en: 'Sheep, alpacas, calves — feeding time' },
  intro: {
    ko: '동물농장은 고도와 계절이 중요합니다. 대관령은 여름에도 서늘하고, 겨울에는 방목이 줄어듭니다. 여기서는 KTX 진부역에서 버스로 닿는 대관령 목장 세 곳을 잇는 하루를 기본으로 잡았어요. 전국의 목장과 동물농장, 그리고 동물별 체험 종류는 아래 목록에 정리했습니다.',
    en: 'Altitude and season decide an animal-farm day: Daegwallyeong stays cool in summer and grazes less in winter. This route links three ranches above Gangneung, reachable by bus from Jinbu station on the KTX. Ranches and animal farms around the country are listed below.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }],
  transport: { ko: 'KTX + 버스·택시', en: 'KTX + bus or taxi' },
  duration: { ko: '약 9시간', en: 'About 9 hours' },
  hub: {
    ko: '진부역(오대산)', en: 'Jinbu (Odaesan) Station', q: '진부역',
    note: {
      ko: 'KTX 강릉선. 서울 청량리에서 1시간 10분. 역에서 대관령 목장 지대까지 버스로 25분, 택시로 20분입니다. 목장끼리는 서로 멀어 택시를 쓰는 편이 낫습니다.',
      en: 'On the KTX Gangneung line, seventy minutes from Cheongnyangni. The ranch area is 25 minutes by bus or 20 by taxi; the ranches are far apart, so a taxi between them saves time.'
    }
  },
  course: {
    title: { ko: '대관령 — 양떼목장에서 하늘목장까지', en: 'Daegwallyeong — sheep ranch to sky ranch' },
    meta: { ko: '6곳 · 약 9시간 · 이동 40km', en: '6 stops · about 9 hours · 40 km' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '진부역', en: 'Jinbu Station' }, q: '진부역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역에서 대관령 방면 버스로. 목장은 예약 없이도 들어갈 수 있지만, 먹이 주기는 현장 구매입니다.', en: 'A Daegwallyeong bus from outside; ranches admit walk-ins, with feed bought on site.' } },
      { phase: 'morning', time: '10:00', name: { ko: '대관령 양떼목장', en: 'Daegwallyeong Sheep Ranch' }, q: '대관령양떼목장', move: { ko: '버스 약 25분', en: 'Bus, about 25 min' },
        desc: { ko: '초원을 따라 40분쯤 걷는 목장. 양 먹이 주기 체험이 있고, 울타리 안으로 들어가면 양이 먼저 다가옵니다.', en: 'A forty-minute walk around a pasture, with sheep feed on sale — step inside the fence and they come to you.' },
        photo: 'th-animal' },
      { phase: 'morning', time: '11:40', name: { ko: '대관령 삼양목장', en: 'Samyang Ranch' }, q: '대관령 삼양목장', note: { ko: '', en: '' }, move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '차로 초원을 통과하는 목장. 정상 전망대에서 동해까지 보이는 날이 있습니다. 겨울에는 방목이 줄어듭니다.', en: 'A ranch you drive through; on clear days the East Sea shows from the top. Grazing thins out in winter.' } },
      { phase: 'lunch', time: '13:00', name: { ko: '대관령 점심', en: 'Lunch at Daegwallyeong' }, q: '대관령면', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '황태와 감자, 메밀로 만든 산간 음식. 목장 사이 식당은 12시부터 붐빕니다.', en: 'Mountain food: dried pollack, potatoes, buckwheat. The places between ranches fill from noon.' } },
      { phase: 'afternoon', time: '14:20', name: { ko: '대관령 하늘목장', en: 'Daegwallyeong Sky Ranch' }, q: '대관령 하늘목장', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '트랙터 마차를 타고 초원 위로 올라갑니다. 양과 염소에게 먹이를 주는 시간이 정해져 있으니 입구에서 확인하세요.', en: 'A tractor wagon climbs the pasture; feeding times for sheep and goats are posted at the gate.' },
        photo: 'th-animal-p2' },
      { phase: 'afternoon', time: '16:00', name: { ko: '주주파크', en: 'Juju Park' }, q: '대관령 주주파크', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '아기 양과 토끼, 조랑말을 가까이에서 보는 작은 목장. 아이와 함께라면 여기서 시간이 다 갑니다.', en: 'A small farm with lambs, rabbits and ponies up close — with children, the afternoon disappears here.' } },
      { phase: 'return', time: '17:40', name: { ko: '진부역', en: 'Jinbu Station' }, q: '진부역', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
        desc: { ko: '역으로 내려와 KTX. 목장에서는 옷에 냄새가 배니 갈아입을 것을 하나 챙기세요.', en: 'Down to the station for the KTX — bring a change of clothes, ranch air stays on you.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '목장 입장 8,000~18,000원, 먹이·승마 별도', en: 'Entry ₩8,000–18,000; feed and rides extra' } },
    { k: { ko: '예약', en: 'Booking' }, v: { ko: '대형 목장은 당일 가능, 체험 프로그램은 예약제', en: 'Large ranches take walk-ins; programmes need booking' } },
    { k: { ko: '동물 예절', en: 'Animal manners' }, v: { ko: '손 펴서 먹이, 눈높이 맞추기, 뛰지 않기, 촬영 금지 구역 확인', en: 'Flat palm for feed, get down to their height, no running, watch no-photo signs' } }
  ],
  places: [
    { name: { ko: '안성팜랜드', en: 'Anseong Farmland' }, region: 'capital', q: '안성팜랜드', note: { ko: '안성 공도. 양·염소·토끼·알파카 먹이주기와 승마. 대인 15,000원 안내, 평일 10~18시.', en: 'Gongdo, Anseong: feeding for sheep, goats, rabbits and alpacas plus riding; around ₩15,000 for adults, 10–18:00 on weekdays.' } },
    { name: { ko: '대관령 양떼목장', en: 'Daegwallyeong Sheep Ranch' }, region: 'gangwon', q: '대관령양떼목장', note: { ko: '초원 산책 40분, 양 먹이 주기. 진부역에서 버스.', en: 'A forty-minute pasture walk and sheep feeding, bus from Jinbu station.' } },
    { name: { ko: '대관령 삼양목장', en: 'Samyang Ranch' }, region: 'gangwon', q: '대관령 삼양목장', note: { ko: '차로 도는 초원 목장. 동절기 방목 제한.', en: 'A drive-through pasture; grazing is limited in winter.' } },
    { name: { ko: '대관령 하늘목장', en: 'Sky Ranch' }, region: 'gangwon', q: '대관령 하늘목장', note: { ko: '트랙터 마차와 양 먹이주기. 초원이 넓습니다.', en: 'Tractor wagon and sheep feeding across a wide pasture.' } },
    { name: { ko: '알파카월드', en: 'Alpaca World' }, region: 'gangwon', q: '알파카월드', note: { ko: '홍천. 알파카 산책과 먹이주기, 10~18시, 입장 18,000원 안내.', en: 'Hongcheon: alpaca walks and feeding, 10–18:00, around ₩18,000.' } },
    { name: { ko: '홍천동키마을', en: 'Hongcheon Donkey Village' }, region: 'gangwon', q: '홍천동키마을', note: { ko: '당나귀·말·토끼·앵무새. 승마 체험도 있습니다.', en: 'Donkeys, horses, rabbits and parrots, with pony rides.' } },
    { name: { ko: '은아목장', en: 'Euna Ranch' }, region: 'capital', q: '은아목장', note: { ko: '여주. 젖 짜기와 치즈·피자 만들기 체험.', en: 'Yeoju: milking plus cheese and pizza making.' } },
    { name: { ko: '농도원목장', en: 'Nongdowon Ranch' }, region: 'capital', q: '농도원목장', note: { ko: '용인. 송아지 우유주기와 트랙터 체험, 사전예약.', en: 'Yongin: bottle-feeding calves and a tractor ride, by reservation.' } },
    { name: { ko: '가평 양떼목장', en: 'Gapyeong Sheep Ranch' }, region: 'capital', q: '가평양떼목장', note: { ko: '양·알파카·당나귀 먹이주기. 서울에서 한 시간.', en: 'Feed sheep, alpacas and donkeys, an hour from Seoul.' } },
    { name: { ko: '새별프렌즈', en: 'Saebyeol Friends' }, region: 'jeju', q: '새별프렌즈', note: { ko: '제주 애월. 알파카·말·당나귀·사슴 먹이주기.', en: 'Aewol, Jeju: feeding alpacas, horses, donkeys and deer.' } },
    { name: { ko: '아침미소목장', en: 'Achim Miso Ranch' }, region: 'jeju', q: '아침미소목장', note: { ko: '제주. 송아지 우유주기와 목장 산책.', en: 'Jeju: bottle-feeding calves and a pasture walk.' } },
    { name: { ko: '산토끼노래동산', en: 'Santoki Song Garden' }, region: 'gyeongsang', q: '산토끼노래동산', note: { ko: '창녕. 토끼 10종과 작은 동물원, 성인 2,000원.', en: 'Changnyeong: ten rabbit breeds and a small zoo, ₩2,000 for adults.' } },
    { name: { ko: '아가새농장', en: 'Agasae Farm' }, region: 'jeolla', q: '아가새농장', note: { ko: '홍성. 앵무새·토끼·기니피그·파충류 관찰.', en: 'Hongseong: parrots, rabbits, guinea pigs and reptiles.' } },
    { name: { ko: '에코팜', en: 'Eco Farm' }, region: 'jeolla', q: '진천 에코팜', note: { ko: '진천. 사슴·말·토끼와 여러 품종의 닭.', en: 'Jincheon: deer, horses, rabbits and many chicken breeds.' } },
    { name: { ko: '몽토랑산양목장', en: 'Mongtorang goat ranch' }, region: 'gangwon', q: '몽토랑산양목장', note: { ko: '산양 먹이주기와 아이스크림·비누 만들기.', en: 'Goat feeding with ice cream and soap making.' } },
    { name: { ko: '하양목장', en: 'Hayang Ranch' }, region: 'gangwon', q: '하양목장', note: { ko: '홍천. 양과 동물 교감, 목동 체험.', en: 'Hongcheon: sheep, small animals and shepherd-for-a-day.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥛', dish: { ko: '우유 · 빵 · 요거트', en: 'Milk · bread · yoghurt' }, note: { ko: '목장 지대라 유제품이 신선합니다.', en: 'Dairy country — the milk is fresh.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🐟', dish: { ko: '황태해장국 · 감자전 · 메밀전', en: 'Dried-pollack soup · potato pancake · buckwheat pancake' }, note: { ko: '대관령의 산간 음식.', en: 'The mountain food of Daegwallyeong.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍦', dish: { ko: '목장 아이스크림 · 치즈', en: 'Ranch ice cream · cheese' }, note: { ko: '체험으로 만든 치즈는 집에 가져갈 수 있습니다.', en: 'Cheese you make in a workshop travels home.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🥩', dish: { ko: '한우구이 · 감자탕', en: 'Grilled beef · potato stew' }, note: { ko: '평창·횡성은 한우로 알려져 있습니다.', en: 'Pyeongchang and Hoengseong are beef country.' } }
  ],
  photos: [
    { file: 'th-animal', cap: { ko: '초원의 양', en: 'Sheep in the pasture' } },
    { file: 'th-animal-p2', cap: { ko: '목장의 트랙터 마차', en: 'A tractor wagon at the ranch' } }
  ],
  tip: { ko: '먹이는 손을 펴서 주세요. 손가락을 말아 쥐면 물립니다. 겨울에는 방목 시간이 짧아 오전 방문이 좋습니다.', en: 'Feed with a flat palm, never a curled fist. In winter grazing hours are short, so go in the morning.' }
},
/* --------------------------------------------------------- 10 야경 명소 */
{
  id: 'night', emoji: '🌃', tint: '#8FB8F0',
  name: { ko: '야경 명소', en: 'Night views' },
  sub: { ko: '해가 진 뒤에 시작되는 하루', en: 'A day that starts after sunset' },
  tag: { ko: '전망대 · 다리 · 빛 · 별', en: 'Lookouts, bridges, lights, stars' },
  intro: {
    ko: '야경은 시간을 거꾸로 짜는 여행입니다. 늦게 출발해 노을에 맞춰 전망대에 오르고, 어두워진 뒤 시내로 내려와 마지막까지 걷습니다. 다만 종류가 많습니다. 도시 불빛, 바다와 다리, 궁궐과 성곽, 빛 축제, 미디어아트, 드론쇼, 별과 은하수, 야시장, 유람선, 야경 드라이브까지 — 오늘 보고 싶은 밤을 먼저 고르세요. 여기서는 부산의 바다와 도심을 함께 보는 하루를 기본 코스로 잡았습니다.',
    en: 'A night-view trip runs backwards: leave late, be at a lookout for sunset, then come down into the lit city. But the kinds differ — city lights, sea and bridges, palaces and fortress walls, light festivals, media art, drone shows, stars, night markets, cruises, night drives. Choose the night you want first. This route takes in both the sea and the city of Busan.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '맑은 날', en: 'Clear days' }],
  transport: { ko: '도시철도 + 버스·택시', en: 'Metro + bus or taxi' },
  duration: { ko: '약 7시간', en: 'About 7 hours' },
  hub: {
    ko: '부산역', en: 'Busan Station', q: '부산역',
    note: {
      ko: 'KTX 서울에서 2시간 40분. 짐은 역 보관함에 맡기고 1호선으로 시내로 들어갑니다. 야경 코스는 해 지는 시각에서 거꾸로 계산하세요.',
      en: 'Two hours forty from Seoul. Leave the bag in a station locker and take Line 1 into town; work the route back from sunset.'
    }
  },
  course: {
    title: { ko: '부산 야경 — 흰여울 노을에서 황령산 불빛까지', en: 'Busan at night — Huitnyeoul dusk to Hwangnyeongsan lights' },
    meta: { ko: '6곳 · 약 7시간 · 택시 3회', en: '6 stops · about 7 hours · 3 taxi rides' },
    steps: [
      { phase: 'start', time: '15:00', name: { ko: '부산역', en: 'Busan Station' }, q: '부산역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '1호선으로 남포동까지 10분. 야경까지 시간이 남으니 커피 한 잔으로 천천히 시작합니다.', en: 'Ten minutes on Line 1 to Nampo-dong; there is time before dark, so start slowly.' } },
      { phase: 'afternoon', time: '15:40', name: { ko: '영도 흰여울문화마을', en: 'Huinnyeoul culture village' }, q: '흰여울문화마을', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
        desc: { ko: '절벽 아래 바다를 따라 난 길. 해 질 무렵 물색이 가장 깊어집니다.', en: 'A path under the cliffs along the water — deepest colour at dusk.' },
        photo: 'th-night' },
      { phase: 'evening', time: '17:20', name: { ko: '감천문화마을', en: 'Gamcheon culture village' }, q: '감천문화마을', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '해가 지면 골목의 불이 하나씩 켜집니다. 주민이 사는 곳이라 늦은 시간에는 조용히, 어두워지면 내려오세요.', en: 'Windows light one by one after sunset. People live here: be quiet late in the evening and head down as it gets dark.' } },
      { phase: 'evening', time: '18:40', name: { ko: '광안리 해변', en: 'Gwangalli Beach' }, q: '광안리해수욕장', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '다리 조명이 다 들어오는 20시 전에 도착해 저녁을 먹습니다. 드론 라이트쇼가 있는 날은 해변 전체가 공연장이 됩니다.', en: 'Eat before eight, when the bridge is fully lit. On drone-show nights the whole beach becomes a theatre.' } },
      { phase: 'evening', time: '20:30', name: { ko: '마린시티 · 황령산', en: 'Marine City & Hwangnyeongsan' }, q: '황령산봉수대', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
        desc: { ko: '고층 빌딩 불빛이 물에 비치는 마린시티를 지나 황령산 전망대로. 밤에는 바람이 차니 겉옷을 챙기세요.', en: 'Past Marine City, where towers double in the water, up to the Hwangnyeongsan lookout. It is windy and cold at night — bring a layer.' },
        photo: 'th-night-p2' },
      { phase: 'return', time: '21:40', name: { ko: '부산역', en: 'Busan Station' }, q: '부산역', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
        desc: { ko: '택시로 역까지. 막차 시간을 확인하고, 짐은 보관함에서 찾으세요.', en: 'A taxi back to the station; check the last train and collect your bag.' } }
    ]
  },
  subs: {
    title: { ko: '야경·야간 여행 열다섯 가지', en: 'Fifteen kinds of night' },
    items: [
      { emoji: '🏙️', name: { ko: '도시 야경', en: 'City lights' }, desc: { ko: '빌딩·타워·스카이라인. 남산, DDP, 석촌호수처럼.', en: 'Towers and skylines — Namsan, DDP, Seokchon lake.' } },
      { emoji: '⚓', name: { ko: '바다 야경', en: 'Sea at night' }, desc: { ko: '항구·해변·등대·해상교량. 광안리, 묵호, 돌산대교.', en: 'Harbours, beaches, lighthouses, sea bridges.' } },
      { emoji: '🏯', name: { ko: '고궁·역사 야간', en: 'Palaces & history' }, desc: { ko: '궁궐·성곽·한옥. 경복궁 야간관람은 예매제.', en: 'Palaces and walls; Gyeongbokgung at night is ticketed.' } },
      { emoji: '✨', name: { ko: '빛 축제', en: 'Light festivals' }, desc: { ko: '일루미네이션과 빛의 정원. 겨울에 많습니다.', en: 'Illuminations and light gardens, mostly in winter.' } },
      { emoji: '🖼️', name: { ko: '미디어아트', en: 'Media art' }, desc: { ko: '파사드·프로젝션 맵핑. 수원화성, 공산성 같은 성곽에서도.', en: 'Facades and projection mapping, including on fortress walls.' } },
      { emoji: '🚀', name: { ko: '드론쇼·불꽃', en: 'Drone & firework shows' }, desc: { ko: '광안리 M드론라이트쇼, 서울세계불꽃축제. 일정 확인 필수.', en: 'The Gwangalli drone show and the Seoul fireworks — check dates.' } },
      { emoji: '🌌', name: { ko: '별·은하수', en: 'Stars' }, desc: { ko: '천문대와 어두운 하늘. 영양, 안반데기, 별마로천문대.', en: 'Observatories and dark skies: Yeongyang, Anbandegi, Byeolmaro.' } },
      { emoji: '🌉', name: { ko: '호수·강 야경', en: 'Lakes & rivers' }, desc: { ko: '출렁다리·분수·수변 산책. 예당호, 산정호수.', en: 'Suspension bridges, fountains, waterside walks.' } },
      { emoji: '🍢', name: { ko: '야시장', en: 'Night markets' }, desc: { ko: '먹거리와 공연. 전주 남부시장, 대구 서문시장 야시장.', en: 'Food and performances — Jeonju Nambu, Daegu Seomun.' } },
      { emoji: '🚢', name: { ko: '야간 유람선', en: 'Night cruises' }, desc: { ko: '한강·바다 위에서 보는 야경.', en: 'The city seen from the water.' } },
      { emoji: '🚗', name: { ko: '야경 드라이브', en: 'Night drives' }, desc: { ko: '전망대·해안도로·산악도로. 북악스카이웨이, 미시령.', en: 'Lookouts, coast and mountain roads.' } },
      { emoji: '🌙', name: { ko: '야간 산책·힐링', en: 'Night walks' }, desc: { ko: '공원·숲길·달빛 산책. 낙산공원 성곽길.', en: 'Parks, forest paths, moonlit walls.' } },
      { emoji: '🎠', name: { ko: '야간 테마파크', en: 'Night theme parks' }, desc: { ko: '야간 퍼레이드와 조명. 통영 디피랑 같은 야간 전용 공간도.', en: 'Night parades and lights, including night-only parks.' } },
      { emoji: '📸', name: { ko: '야간 인생샷', en: 'Night photos' }, desc: { ko: '포토존과 감성 거리. 삼각대가 있으면 달라집니다.', en: 'Photo spots and atmospheric streets; a tripod changes everything.' } },
      { emoji: '🔦', name: { ko: '야간 이색 체험', en: 'Night experiences' }, desc: { ko: '야간 투어·야간 박물관·공포 체험.', en: 'Night tours, night museums, scare experiences.' } }
    ]
  },
  conds: [
    { k: { ko: '시간', en: 'Timing' }, v: { ko: '일몰 30~40분 전 전망대 도착이 가장 좋음', en: 'Be at the lookout 30–40 minutes before sunset' } },
    { k: { ko: '운영', en: 'Opening' }, v: { ko: '야간개장·분수·케이블카 막차·드론쇼는 날짜와 계절에 따라 다름', en: 'Night openings, fountains, last cable cars and drone shows vary by date' } },
    { k: { ko: '날씨', en: 'Weather' }, v: { ko: '미세먼지·안개·강풍이면 조명이 흐려지고 공연이 취소됩니다', en: 'Dust, fog or wind dim the lights and cancel shows' } }
  ],
  places: [
    { name: { ko: '남산서울타워', en: 'N Seoul Tower' }, region: 'capital', q: 'N서울타워', note: { ko: '도시 전체 전망. 남산 케이블카와 산책로.', en: 'The whole city below, by cable car and footpath.' } },
    { name: { ko: '동대문디자인플라자', en: 'Dongdaemun Design Plaza' }, region: 'capital', q: '동대문디자인플라자', note: { ko: '곡선형 건축과 야간 조명, 건축 사진.', en: 'Curved architecture under night lighting.' } },
    { name: { ko: '경복궁 야간관람', en: 'Gyeongbokgung at night' }, region: 'capital', q: '경복궁 야간관람', note: { ko: '지정 기간에만, 예매제. 광화문·북촌과 연계.', en: 'Only in set periods, ticketed; pair with Gwanghwamun and Bukchon.' } },
    { name: { ko: '덕수궁 돌담길', en: 'Deoksugung stone wall road' }, region: 'capital', q: '덕수궁 돌담길', note: { ko: '고궁과 근대 건축 사이의 조용한 밤 산책.', en: 'A quiet night walk between palace and modern buildings.' } },
    { name: { ko: '반포대교 달빛무지개분수', en: 'Banpo rainbow fountain' }, region: 'capital', q: '반포대교 달빛무지개분수', note: { ko: '음악과 조명의 분수. 계절 운영 확인.', en: 'Music and lit water; seasonal, so check the schedule.' } },
    { name: { ko: '세빛섬', en: 'Sebitseom' }, region: 'capital', q: '세빛섬', note: { ko: '한강 위 조명 건축물.', en: 'Lit pavilions on the Han.' } },
    { name: { ko: '북악스카이웨이 팔각정', en: 'Bugak Skyway pavilion' }, region: 'capital', q: '북악스카이웨이', note: { ko: '도심 파노라마, 야경 드라이브의 고전.', en: 'A panorama of downtown — the classic night drive.' } },
    { name: { ko: '낙산공원', en: 'Naksan Park' }, region: 'capital', q: '낙산공원', note: { ko: '한양도성 성곽길과 도심 불빛.', en: 'The city wall and the city lights.' } },
    { name: { ko: '응봉산 팔각정', en: 'Eungbongsan pavilion' }, region: 'capital', q: '응봉산팔각정', note: { ko: '한강과 교량 불빛. 오르막이 있습니다.', en: 'River and bridge lights, up a short climb.' } },
    { name: { ko: '롯데월드타워·석촌호수', en: 'Lotte Tower & Seokchon lake' }, region: 'capital', q: '석촌호수', note: { ko: '초고층 빌딩이 호수에 비칩니다.', en: 'The tower doubled in the lake.' } },
    { name: { ko: '송도 센트럴파크', en: 'Songdo Central Park' }, region: 'capital', q: '송도 센트럴파크', note: { ko: '인천. 빌딩과 수로가 만드는 도시 야경.', en: 'Incheon: towers and canals at night.' } },
    { name: { ko: '인천 개항장·차이나타운', en: 'Incheon open port & Chinatown' }, region: 'capital', q: '인천 차이나타운', note: { ko: '이국적인 골목 조명과 근대 건축.', en: 'Foreign-looking lanes and modern-era buildings.' } },
    { name: { ko: '수원화성 방화수류정', en: 'Suwon Hwaseong & Banghwasuryujeong' }, region: 'capital', q: '방화수류정', note: { ko: '성곽 조명과 연못 반영. 미디어아트 행사도.', en: 'Lit walls reflected in the pond, with media-art events.' } },
    { name: { ko: '김포 라베니체', en: 'Gimpo Laveniche' }, region: 'capital', q: '라베니체', note: { ko: '수로와 다리 조명이 이어지는 거리.', en: 'A street of canals and lit bridges.' } },
    { name: { ko: '남한산성 서문전망대', en: 'Namhansanseong west gate lookout' }, region: 'capital', q: '남한산성 서문전망대', note: { ko: '수도권 도시 불빛. 야간 산길 주의.', en: 'The lights of the capital region; take care on the mountain road.' } },
    { name: { ko: '아침고요수목원 오색별빛정원전', en: 'Morning Calm winter lights' }, region: 'capital', q: '아침고요수요원 오색별빛정원전', note: { ko: '겨울철 조명 축제, 계절 한정.', en: 'A winter light festival, seasonal only.' } },
    { name: { ko: '안반데기', en: 'Anbandegi' }, region: 'gangwon', q: '안반데기', note: { ko: '강릉. 고지대 은하수, 도로 상황 확인.', en: 'Gangneung: the Milky Way from high ground; check the road.' } },
    { name: { ko: '별마로천문대', en: 'Byeolmaro observatory' }, region: 'gangwon', q: '별마로천문대', note: { ko: '영월. 천체 관측과 별자리 여행.', en: 'Yeongwol: telescopes and constellations.' } },
    { name: { ko: '추암해변', en: 'Chuam Beach' }, region: 'gangwon', q: '추암해변', note: { ko: '동해. 촛대바위와 바다 야경, 일출과 연계.', en: 'Donghae: rock formations over the night sea, paired with sunrise.' } },
    { name: { ko: '묵호항·묵호등대', en: 'Mukho harbour & lighthouse' }, region: 'gangwon', q: '묵호등대', note: { ko: '항구 조명과 밤바다 산책.', en: 'Harbour lights and a night sea walk.' } },
    { name: { ko: '단양강 잔도', en: 'Danyang cliff walkway' }, region: 'jeolla', q: '단양강잔도', note: { ko: '강변 절벽을 따라 걷는 야간 산책.', en: 'A night walk along the cliff above the river.' } },
    { name: { ko: '수양개 빛터널', en: 'Suyanggae light tunnel' }, region: 'jeolla', q: '수양개빛터널', note: { ko: '터널 미디어아트. 운영일 확인.', en: 'A media-art tunnel; check opening days.' } },
    { name: { ko: '예당호 출렁다리', en: 'Yedangho bridge' }, region: 'jeolla', q: '예당호출렁다리', note: { ko: '호수 위 다리와 음악분수, 야간 조명.', en: 'A lake bridge, music fountain and night lighting.' } },
    { name: { ko: '부여 궁남지', en: 'Buyeo Gungnamji' }, region: 'jeolla', q: '궁남지', note: { ko: '연못과 정자의 수면 반영.', en: 'Pavilion and pond reflected.' } },
    { name: { ko: '공주 공산성', en: 'Gongju Gongsanseong' }, region: 'jeolla', q: '공산성', note: { ko: '백제 성곽과 야간 조명, 미디어아트 행사.', en: 'Baekje walls with night lighting and media-art events.' } },
    { name: { ko: '삽교호 관광지', en: 'Sapgyo lake park' }, region: 'jeolla', q: '삽교호관광지', note: { ko: '대관람차와 호수 야경.', en: 'A big wheel and the lake at night.' } },
    { name: { ko: '홍성스카이타워', en: 'Hongseong Sky Tower' }, region: 'jeolla', q: '홍성스카이타워', note: { ko: '남당항과 서해 조망.', en: 'Over Namdang harbour and the west sea.' } },
    { name: { ko: '경주 동궁과 월지', en: 'Gyeongju Donggung & Wolji' }, region: 'gyeongsang', q: '동궁과 월지', note: { ko: '해 진 뒤 30분이 가장 예쁩니다.', en: 'Best half an hour after sunset.' } },
    { name: { ko: '경주 월정교', en: 'Gyeongju Woljeonggyo' }, region: 'gyeongsang', q: '월정교', note: { ko: '전통 목조 다리와 조명.', en: 'A rebuilt timber bridge, lit.' } },
    { name: { ko: '포항 스페이스워크', en: 'Pohang Space Walk' }, region: 'gyeongsang', q: '스페이스워크', note: { ko: '철제 곡선 구조물과 영일만 전망. 입장 마감 확인.', en: 'A steel curve over Yeongil bay; check last entry.' } },
    { name: { ko: '안동 월영교', en: 'Andong Woryeonggyo' }, region: 'gyeongsang', q: '월영교', note: { ko: '달빛과 목조 다리, 조용한 산책.', en: 'Moonlight on a timber bridge.' } },
    { name: { ko: '영양 국제밤하늘보호공원', en: 'Yeongyang dark sky park' }, region: 'gyeongsang', q: '영양 국제밤하늘보호공원', note: { ko: '어두운 밤하늘과 은하수, 천체 사진.', en: 'A dark sky and the Milky Way.' } },
    { name: { ko: '광안리해수욕장', en: 'Gwangalli Beach' }, region: 'gyeongsang', q: '광안리해수욕장', note: { ko: '광안대교 조명, 드론 라이트쇼.', en: 'Bridge lights and the drone show.' } },
    { name: { ko: '황령산 전망쉼터', en: 'Hwangnyeongsan lookout' }, region: 'gyeongsang', q: '황령산봉수대', note: { ko: '부산 도심과 광안대교 파노라마.', en: 'The city and the bridge in one panorama.' } },
    { name: { ko: '통영 디피랑', en: 'Tongyeong Dipirang' }, region: 'gyeongsang', q: '디피랑', note: { ko: '빛·영상·음악의 야간 테마파크. 휴장일 확인.', en: 'A night park of light, image and music; check closing days.' } },
    { name: { ko: '사천바다케이블카', en: 'Sacheon sea cable car' }, region: 'gyeongsang', q: '사천바다케이블카', note: { ko: '바다와 섬, 다리 조망. 야간 운행일 확인.', en: 'Sea, islands and bridges; check night operation.' } },
    { name: { ko: '여수 돌산대교', en: 'Yeosu Dolsan bridge' }, region: 'jeolla', q: '돌산대교', note: { ko: '다리 조명과 여수항 야경, 낭만포차거리.', en: 'Bridge lights over the harbour, with the pocha street.' } },
    { name: { ko: '여수 빅오쇼', en: 'Yeosu Big-O Show' }, region: 'jeolla', q: '빅오쇼', note: { ko: '워터스크린과 영상·음악 공연. 시즌 확인.', en: 'A water-screen show; seasonal.' } },
    { name: { ko: '남원 광한루원', en: 'Namwon Gwanghalluwon' }, region: 'jeolla', q: '광한루원', note: { ko: '연못과 오작교의 야경, 야간 개장 기간 확인.', en: 'A pond and bridge at night; check the night opening.' } },
    { name: { ko: '광양 구봉산 전망대', en: 'Gwangyang Gubongsan lookout' }, region: 'jeolla', q: '구봉산 전망대', note: { ko: '광양만 산업단지와 바다 야경.', en: 'The bay, the port and the lights.' } },
    { name: { ko: '목포 해상케이블카', en: 'Mokpo sea cable car' }, region: 'jeolla', q: '목포해상케이블카', note: { ko: '유달산과 목포대교 야경. 야간 운행 확인.', en: 'Yudalsan and the bridge; check night service.' } },
    { name: { ko: '순천만국가정원 야간', en: 'Suncheon garden at night' }, region: 'jeolla', q: '순천만국가정원', note: { ko: '정원 조명과 야간 산책.', en: 'A lit garden and a night walk.' } },
    { name: { ko: '군산 고군산군도', en: 'Gunsan Gogunsan islands' }, region: 'jeolla', q: '고군산군도', note: { ko: '섬과 다리, 바다의 야간 드라이브.', en: 'Islands, bridges and a night drive over the sea.' } },
    { name: { ko: '제주 새연교', en: 'Jeju Saeyeongyo' }, region: 'jeju', q: '새연교', note: { ko: '바다 위 보행교와 조명.', en: 'A footbridge over the water, lit.' } },
    { name: { ko: '제주별빛누리공원', en: 'Jeju star park' }, region: 'jeju', q: '제주별빛누리공원', note: { ko: '천문 전시와 천체 관측.', en: 'Astronomy displays and telescopes.' } },
    { name: { ko: '용눈이오름', en: 'Yongnuni oreum' }, region: 'jeju', q: '용눈이오름', note: { ko: '오름 능선과 밤하늘. 야간 출입 제한 확인.', en: 'A volcanic ridge under the night sky; check access rules.' } },
    { name: { ko: '섭지코지', en: 'Seopjikoji' }, region: 'jeju', q: '섭지코지', note: { ko: '해안과 등대의 저녁, 야간 드라이브.', en: 'Coast and lighthouse at dusk, then a night drive.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '☕', dish: { ko: '토스트 · 커피', en: 'Toast · coffee' }, note: { ko: '늦게 시작하는 날이라 가볍게.', en: 'A late start needs only something small.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '밀면 · 국밥', en: 'Cold wheat noodles · rice soup' }, note: { ko: '부산은 밀면과 국밥이 기본입니다.', en: 'In Busan it is milmyeon and gukbap.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🥐', dish: { ko: '씨앗호떡 · 어묵', en: 'Seed hotteok · fish cake' }, note: { ko: '해변 골목에서 갓 튀긴 것.', en: 'Fresh from the fryer in the beach alleys.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🦐', dish: { ko: '조개구이 · 회 · 해물탕', en: 'Grilled shellfish · sashimi · seafood stew' }, note: { ko: '다리 조명을 보며 바닷가에서.', en: 'On the beach, with the bridge lit in front of you.' } }
  ],
  photos: [
    { file: 'th-night', cap: { ko: '해 질 무렵의 바다 마을', en: 'A seaside village at dusk' } },
    { file: 'th-night-p2', cap: { ko: '도시의 야경', en: 'City lights at night' } }
  ],
  tip: { ko: '야경은 일몰 30분 뒤가 가장 진합니다. 상시 명소와 날짜 한정 야간개장·공연을 구분해 계획하면 헛걸음이 없습니다.', en: 'The light is deepest half an hour after sunset. Separate permanent spots from date-limited openings and shows before you plan.' }
},
/* ------------------------------------------------- 11 호캉스·도심 휴식 */
{
  id: 'hotel', emoji: '🏨', tint: '#D9CCFF',
  name: { ko: '호캉스 · 도심 휴식', en: 'Hotel days & city rest' },
  sub: { ko: '멀리 가지 않고 하루를 쉬는 법', en: 'A day off without going far' },
  tag: { ko: '호텔 · 스파 · 오션뷰', en: 'Hotels, spas, ocean views' },
  intro: {
    ko: '호캉스는 일정을 비우는 여행입니다. 체크인 시간에 맞춰 도착해 짐을 맡기고, 수영장과 사우나를 오가다가 해 질 무렵 산책하고, 저녁은 호텔 밖에서 먹는 정도가 가장 만족도가 높아요. 여기서는 해운대의 바다 보이는 호텔을 하루 쓰는 코스로 잡았습니다. 당일이면 데이유즈 상품을 확인하세요.',
    en: 'A hotel day is a trip with the schedule removed: arrive at check-in, leave the bag, drift between pool and sauna, walk at dusk, and eat dinner outside the hotel. This route uses a sea-facing hotel at Haeundae for one day — for a same-day visit, check day-use rates.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '겨울 실내', en: 'Winter indoors' }],
  transport: { ko: 'KTX + 도시철도', en: 'KTX + metro' },
  duration: { ko: '약 9시간', en: 'About 9 hours' },
  hub: {
    ko: '부산역', en: 'Busan Station', q: '부산역',
    note: {
      ko: 'KTX 서울에서 2시간 40분. 1호선에서 2호선으로 갈아타 해운대까지 40분. 호텔에 짐을 먼저 맡기고 시작하세요.',
      en: 'Two hours forty from Seoul. Line 1 to Line 2 puts you at Haeundae in forty minutes; leave the bag at the hotel first.'
    }
  },
  course: {
    title: { ko: '해운대 호캉스 — 체크인에서 야경까지', en: 'Haeundae hotel day — check-in to night view' },
    meta: { ko: '6곳 · 약 9시간 · 도보 4km', en: '6 stops · about 9 hours · 4 km on foot' },
    steps: [
      { phase: 'start', time: '12:30', name: { ko: '부산역', en: 'Busan Station' }, q: '부산역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '1호선 서면에서 2호선으로 갈아타 해운대까지. 짐은 호텔에 먼저 맡기면 몸이 가볍습니다.', en: 'Line 1 to Seomyeon, change to Line 2 for Haeundae; drop the bag at the hotel first.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '해운대해수욕장', en: 'Haeundae Beach' }, q: '해운대해수욕장', move: { ko: '도시철도 약 40분', en: 'Metro, about 40 min' },
        desc: { ko: '체크인 전에 모래사장을 한 번 걷습니다. 여름이 아니어도 바람이 좋습니다.', en: 'Walk the sand before check-in; even out of season the wind is worth it.' },
        photo: 'th-hotel' },
      { phase: 'afternoon', time: '14:20', name: { ko: '동백섬', en: 'Dongbaekseom' }, q: '동백섬', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '해변 끝의 작은 섬을 잇는 산책로. 20분이면 한 바퀴입니다.', en: 'A path around the little island at the end of the beach — twenty minutes.' } },
      { phase: 'afternoon', time: '15:00', name: { ko: '호텔 체크인 · 수영장', en: 'Check in & pool' }, q: '해운대 호텔', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '체크인하고 바로 수영장이나 스파로. 수영복과 수영모를 챙기세요. 사우나는 별도 요금인 경우가 많습니다.', en: 'Check in and go straight to the pool or spa; bring a swimsuit and cap. The sauna is often charged separately.' } },
      { phase: 'evening', time: '17:30', name: { ko: '오션뷰 휴식', en: 'Rest with the view' }, q: '해운대', move: { ko: '객실', en: 'In the room' },
        desc: { ko: '해가 지는 시간을 객실에서 보냅니다. 이 코스에서 유일하게 아무것도 하지 않는 시간입니다.', en: 'Watch the sun go down from the room — the only hour of the day with nothing to do.' },
        photo: 'th-hotel-p2' },
      { phase: 'evening', time: '19:00', name: { ko: '해운대 저녁', en: 'Dinner at Haeundae' }, q: '해운대', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '호텔 밖으로 나가 바다를 보며 저녁. 조개구이와 회, 밀면이 이 동네 기본입니다.', en: 'Out for dinner facing the water — grilled shellfish, sashimi and cold noodles are the local set.' } },
      { phase: 'return', time: '21:00', name: { ko: '해변 야경 · 객실', en: 'Beach at night & the room' }, q: '해운대해수욕장', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '모래사장을 한 번 더 걷고 들어갑니다. 1박으로 늘리면 다음 날 아침 일출까지 볼 수 있어요.', en: 'One more turn on the sand, then in. Stretch it to a night and you can catch sunrise from the room.' } }
    ]
  },
  conds: [
    { k: { ko: '예약', en: 'Booking' }, v: { ko: '주말은 2~3주 전 마감, 평일이 20~30% 저렴', en: 'Weekends sell out two to three weeks ahead; weekdays run 20–30% less' } },
    { k: { ko: '당일', en: 'Same day' }, v: { ko: '데이유즈 상품 여부와 입실 시간 확인', en: 'Check whether day-use is offered and from when' } },
    { k: { ko: '준비', en: 'Bring' }, v: { ko: '수영복·수영모·선크림, 사우나 이용 여부', en: 'Swimsuit, cap, sun cream; check sauna access' } }
  ],
  places: [
    { name: { ko: '해운대 오션뷰 호텔', en: 'Haeundae ocean-view hotels' }, region: 'gyeongsang', q: '해운대 호텔', note: { ko: '바다 정면 객실은 비싸지만 이 코스의 핵심입니다.', en: 'Front-row sea rooms cost more and are the point of the route.' } },
    { name: { ko: '송정·달맞이', en: 'Songjeong & Dalmaji' }, region: 'gyeongsang', q: '송정해수욕장', note: { ko: '해운대보다 한적한 바다와 언덕 호텔.', en: 'A quieter beach and hillside hotels than Haeundae.' } },
    { name: { ko: '서울 도심 호텔', en: 'Central Seoul hotels' }, region: 'capital', q: '서울 호텔', note: { ko: '광화문·을지로 쪽은 도보 관광과 함께 쓰기 좋습니다.', en: 'Gwanghwamun and Euljiro work well with sightseeing on foot.' } },
    { name: { ko: '한강뷰 호텔', en: 'Han river-view hotels' }, region: 'capital', q: '한강뷰 호텔', note: { ko: '여의도·용산 쪽 객실에서 강과 다리를 봅니다.', en: 'Rooms in Yeouido and Yongsan look onto the river and bridges.' } },
    { name: { ko: '경주 보문단지', en: 'Gyeongju Bomun resort area' }, region: 'gyeongsang', q: '보문관광단지', note: { ko: '호수를 끼고 리조트가 모여 있습니다.', en: 'Resorts gathered around a lake.' } },
    { name: { ko: '제주 중문 리조트', en: 'Jeju Jungmun resorts' }, region: 'jeju', q: '중문관광단지', note: { ko: '바다와 곶자왈 사이의 대형 리조트 지구.', en: 'A resort district between the sea and the lava forest.' } },
    { name: { ko: '여수 오션뷰 호텔', en: 'Yeosu ocean-view hotels' }, region: 'jeolla', q: '여수 호텔', note: { ko: '밤바다와 케이블카가 보이는 객실.', en: 'Rooms over the night sea and the cable car.' } },
    { name: { ko: '속초·양양 리조트', en: 'Sokcho & Yangyang resorts' }, region: 'gangwon', q: '속초 리조트', note: { ko: '설악산과 바다를 한 번에. 온천 딸린 곳이 많습니다.', en: 'Mountain and sea together, often with a hot spring attached.' } },
    { name: { ko: '평창 리조트', en: 'Pyeongchang resorts' }, region: 'gangwon', q: '평창 리조트', note: { ko: '여름엔 골프와 산책, 겨울엔 스키.', en: 'Golf and walks in summer, skiing in winter.' } },
    { name: { ko: '대구 도심 호텔', en: 'Daegu city hotels' }, region: 'gyeongsang', q: '대구 호텔', note: { ko: '도심 쇼핑과 야경을 함께.', en: 'City shopping and night views together.' } },
    { name: { ko: '전주 한옥 스테이', en: 'Jeonju hanok stays' }, region: 'jeolla', q: '전주 한옥스테이', note: { ko: '마루에서 자는 작은 한옥 숙소.', en: 'Small hanok houses where you sleep on the wooden floor.' } },
    { name: { ko: '부산 서면 비즈니스 호텔', en: 'Seomyeon business hotels' }, region: 'gyeongsang', q: '서면 호텔', note: { ko: '가격이 낮고 교통이 편한 실속형.', en: 'Cheaper, well connected, no view.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥐', dish: { ko: '호텔 조식 · 빵과 커피', en: 'Hotel breakfast · bread and coffee' }, note: { ko: '조식 포함 여부가 가격 차이를 만듭니다.', en: 'Breakfast included or not is where the price difference sits.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '밀면 · 국밥', en: 'Cold noodles · rice soup' }, note: { ko: '체크인 전에 가볍게.', en: 'Something light before check-in.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍰', dish: { ko: '케이크 · 아이스크림', en: 'Cake · ice cream' }, note: { ko: '객실에서 먹을 디저트를 하나.', en: 'One dessert for the room.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🦪', dish: { ko: '조개구이 · 회 · 스테이크', en: 'Grilled shellfish · sashimi · steak' }, note: { ko: '바다를 보는 자리에서.', en: 'At a table facing the water.' } }
  ],
  photos: [
    { file: 'th-hotel', cap: { ko: '바다를 보는 호텔', en: 'A hotel facing the sea' } },
    { file: 'th-hotel-p2', cap: { ko: '객실에서 본 노을', en: 'Sunset from the room' } }
  ],
  tip: { ko: '데이유즈는 보통 10시~18시, 1박보다 30~50% 저렴합니다. 주말에는 조식과 수영장 시간을 미리 확인하세요.', en: 'Day-use usually runs 10:00–18:00 at 30–50% of an overnight. At weekends, confirm breakfast and pool hours.' }
},
/* ----------------------------------------- 12 데이트·K-뷰티 체험 */
{
  id: 'beauty', emoji: '💕', tint: '#FFC6DA',
  name: { ko: '데이트 · K-뷰티 체험', en: 'Dates & K-beauty' },
  sub: { ko: '강남에서 한강까지, 둘이 걷는 하루', en: 'Gangnam to the Han, two of you walking' },
  tag: { ko: '퍼스널컬러 · 산책 · 야경', en: 'Colour analysis, walks, night views' },
  intro: {
    ko: '요즘 서울 데이트의 절반은 체험입니다. 퍼스널컬러 진단을 받고, 그 결과로 옷과 화장을 골라 보고, 저녁에는 한강으로 나가는 흐름이 자연스러워요. 진단은 60~90분 예약제라 하루의 중심에 두고 나머지를 그 주위에 배치했습니다.',
    en: 'Half of a Seoul date now is an experience: a personal-colour analysis, then clothes and make-up chosen from the result, then the river in the evening. The session runs 60–90 minutes and needs booking, so it sits in the middle of the day with everything else around it.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '봄·가을 산책', en: 'Spring and autumn walks' }],
  transport: { ko: '지하철 + 도보', en: 'Subway + on foot' },
  duration: { ko: '약 10시간', en: 'About 10 hours' },
  hub: {
    ko: '강남역', en: 'Gangnam Station', q: '강남역',
    note: {
      ko: '2호선과 신분당선이 만나는 곳. 퍼스널컬러 스튜디오가 모여 있는 신논현·강남 일대의 중심입니다.',
      en: 'Where Line 2 meets the Shinbundang line, at the centre of the Sinnonhyeon and Gangnam studio district.'
    }
  },
  course: {
    title: { ko: '강남에서 한강까지 — 진단하고 걷고 노을 보기', en: 'Gangnam to the Han — analyse, walk, watch the sunset' },
    meta: { ko: '7곳 · 약 10시간 · 지하철 3회', en: '7 stops · about 10 hours · 3 subway rides' },
    steps: [
      { phase: 'start', time: '11:00', name: { ko: '강남역', en: 'Gangnam Station' }, q: '강남역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '11시에 만나 브런치부터. 진단 전에는 화장을 평소처럼 하고 오는 게 결과가 정확합니다.', en: 'Meet at eleven for brunch. Come with your usual make-up — the reading is more accurate that way.' } },
      { phase: 'morning', time: '11:40', name: { ko: '퍼스널컬러 진단', en: 'Personal-colour analysis' }, q: '강남 퍼스널컬러', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '조명 아래에서 천을 얼굴에 대 보며 톤을 찾습니다. 60~90분, 결과지를 받으면 옷 고르기가 쉬워집니다.', en: 'Drapes are held to your face under controlled light to find your tone; 60–90 minutes, and the report makes shopping simple.' },
        photo: 'th-beauty' },
      { phase: 'lunch', time: '13:30', name: { ko: '강남 점심', en: 'Lunch in Gangnam' }, q: '강남역', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '강남은 점심시간(12~13시)이 가장 붐빕니다. 13시 30분이면 한산해집니다.', en: 'Gangnam peaks at lunch (12–13:00); by half past one it empties.' } },
      { phase: 'afternoon', time: '14:30', name: { ko: '신사동 가로수길', en: 'Garosu-gil, Sinsa' }, q: '가로수길', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '은행나무 그늘 아래 옷가게와 작은 전시가 이어집니다. 진단 결과로 색을 골라 보세요.', en: 'Clothes shops and small exhibitions under the ginkgoes — try the colours your report suggested.' } },
      { phase: 'afternoon', time: '16:00', name: { ko: '봉은사', en: 'Bongeunsa Temple' }, q: '봉은사', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '도심 한가운데의 절. 마당에 앉아 있으면 소음이 한 겹 걷힙니다.', en: 'A temple in the middle of the city; sit in the yard and one layer of noise lifts.' } },
      { phase: 'evening', time: '17:20', name: { ko: '코엑스 · 별마당', en: 'COEX & Starfield Library' }, q: '코엑스', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '높은 책장 아래에서 사진 한 장. 주말 오후에는 사람이 많으니 평일 저녁이 좋습니다.', en: 'One photograph beneath the tall shelves; weekday evenings are quieter than weekend afternoons.' } },
      { phase: 'evening', time: '18:30', name: { ko: '한강 반포', en: 'Banpo on the Han' }, q: '반포한강공원', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '해 질 무렵 강바람과 다리 조명. 달빛무지개분수는 계절 운영이라 시간을 확인하세요.', en: 'River wind and bridge lights at dusk; the rainbow fountain is seasonal, so check its hours.' },
        photo: 'th-beauty-p2' },
      { phase: 'return', time: '20:30', name: { ko: '강남역', en: 'Gangnam Station' }, q: '강남역', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '9호선에서 2호선으로 한 번. 저녁은 강남에서 마무리합니다.', en: 'Line 9 to Line 2, one change; finish with dinner in Gangnam.' } }
    ]
  },
  conds: [
    { k: { ko: '예약', en: 'Booking' }, v: { ko: '퍼스널컬러 1인 5~15만원 · 주말은 1~2주 전 마감', en: '₩50,000–150,000 per person; weekends book out one to two weeks ahead' } },
    { k: { ko: '진단 전', en: 'Before the session' }, v: { ko: '평소 화장·민낯 중 선택, 흰 옷이 결과 보기 편함', en: 'Come as you normally are; white clothing makes the draping easier to see' } },
    { k: { ko: '동반', en: 'Together' }, v: { ko: '커플·친구 동반 가능, 2인 패키지가 많은 편', en: 'Couples and friends are welcome; many studios offer two-person packages' } }
  ],
  places: [
    { name: { ko: '강남 퍼스널컬러 스튜디오', en: 'Gangnam colour studios' }, region: 'capital', q: '강남 퍼스널컬러', note: { ko: '신논현·강남역 일대에 집중. 예약제 60~90분.', en: 'Clustered around Sinnonhyeon and Gangnam; 60–90 minutes, by booking.' } },
    { name: { ko: '신사동 가로수길', en: 'Garosu-gil' }, region: 'capital', q: '가로수길', note: { ko: '산책과 쇼핑을 같이. 오후 햇빛이 좋습니다.', en: 'A walk and shopping in one; the afternoon light is best.' } },
    { name: { ko: '청담 뷰티 거리', en: 'Cheongdam beauty street' }, region: 'capital', q: '청담동', note: { ko: '향수·스킨케어 매장이 모인 거리.', en: 'A street of fragrance and skincare stores.' } },
    { name: { ko: '성수동', en: 'Seongsu-dong' }, region: 'capital', q: '성수동', note: { ko: '오래된 공장을 고친 공간과 작은 편집숍.', en: 'Old factories turned into studios and small shops.' } },
    { name: { ko: '익선동 한옥골목', en: 'Ikseon-dong' }, region: 'capital', q: '익선동', note: { ko: '한옥 사이 골목, 저녁 데이트에 좋습니다.', en: 'Alleys between hanok houses — good in the evening.' } },
    { name: { ko: '봉은사', en: 'Bongeunsa' }, region: 'capital', q: '봉은사', note: { ko: '도심 사찰. 템플스테이와 차담 프로그램도 있습니다.', en: 'A city temple with templestay and tea programmes.' } },
    { name: { ko: '코엑스 아쿠아리움', en: 'COEX Aquarium' }, region: 'capital', q: '코엑스 아쿠아리움', note: { ko: '실내 데이트 대안. 비 오는 날 좋습니다.', en: 'An indoor option for a rainy day.' } },
    { name: { ko: '서울스카이', en: 'Seoul Sky' }, region: 'capital', q: '롯데월드타워 서울스카이', note: { ko: '잠실 555m 전망대, 해 질 무렵이 좋습니다.', en: 'The 555 m observatory at Jamsil, best at sunset.' } },
    { name: { ko: '남산 케이블카', en: 'Namsan cable car' }, region: 'capital', q: '남산케이블카', note: { ko: '야경 데이트의 고전. 주말 저녁은 줄이 깁니다.', en: 'The classic night-view date; weekend queues are long.' } },
    { name: { ko: '한강 유람선', en: 'Han river cruise' }, region: 'capital', q: '한강유람선', note: { ko: '여의도·잠실 선착장에서 40~60분 코스.', en: 'Forty to sixty minutes from Yeouido or Jamsil piers.' } },
    { name: { ko: '부산 흰여울', en: 'Huinnyeoul, Busan' }, region: 'gyeongsang', q: '흰여울문화마을', note: { ko: '바다를 보는 절벽길, 해 질 무렵.', en: 'A cliff path over the water at dusk.' } },
    { name: { ko: '제주 카멜리아힐', en: 'Camellia Hill, Jeju' }, region: 'jeju', q: '카멜리아힐', note: { ko: '겨울 동백 정원. 사진 찍기 좋은 동선.', en: 'A winter camellia garden laid out for photographs.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥐', dish: { ko: '브런치 · 커피', en: 'Brunch · coffee' }, note: { ko: '11시에 만나 브런치로 시작.', en: 'Meet at eleven over brunch.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '냉면 · 파스타 · 덮밥', en: 'Cold noodles · pasta · rice bowl' }, note: { ko: '13시 30분 이후가 한산합니다.', en: 'After half past one it quiets down.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍰', dish: { ko: '케이크 · 마카롱 · 아이스크림', en: 'Cake · macarons · ice cream' }, note: { ko: '가로수길에서 하나씩 골라 보세요.', en: 'Pick one each on Garosu-gil.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍷', dish: { ko: '이자카야 안주 · 파스타 · 고기', en: 'Izakaya plates · pasta · grilled meat' }, note: { ko: '한강 산책 뒤에는 강남에서 마무리.', en: 'After the river, finish in Gangnam.' } }
  ],
  photos: [
    { file: 'th-beauty', cap: { ko: '진단을 받는 자리', en: 'In the colour-analysis chair' } },
    { file: 'th-beauty-p2', cap: { ko: '해 질 무렵의 도심', en: 'The city at dusk' } }
  ],
  tip: { ko: '진단은 오전이 가장 정확합니다. 피곤하거나 술을 마신 다음 날은 피하세요.', en: 'Morning sessions read most accurately; avoid the day after drinking or a bad night.' }
},
/* ------------------------------------------ 13 K-드라마·영화 촬영지 */
{
  id: 'drama', emoji: '🎬', tint: '#C9B6F5',
  name: { ko: 'K-드라마 · 영화 촬영지', en: 'K-drama & film locations' },
  sub: { ko: '화면 속 거리를 실제로 걷는 하루', en: 'Walking the streets you saw on screen' },
  tag: { ko: '촬영지 · 세트장 · 옛 거리', en: 'Sets, locations, old streets' },
  intro: {
    ko: '드라마 촬영지는 두 종류입니다. 실제 거리를 그대로 쓰는 곳과, 세트장을 지어 놓은 곳. 실제 거리는 사람이 살아서 낮에 좋고, 세트장은 시대를 통째로 옮겨 놓아서 사진이 잘 나옵니다. 여기서는 순천에서 둘 다 보는 하루를 잡았어요. 오전에 세트장, 오후에 실제 갈대밭과 바다입니다.',
    en: 'There are two kinds of location: a real street used as it is, and a set built for the camera. Real streets are lived-in and best by day; sets move a whole era and photograph beautifully. This day in Suncheon does both — the set in the morning, the real reeds and sea in the afternoon.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '가을 갈대', en: 'Autumn reeds' }],
  transport: { ko: 'KTX + 버스', en: 'KTX + bus' },
  duration: { ko: '약 9시간', en: 'About 9 hours' },
  hub: {
    ko: '순천역', en: 'Suncheon Station', q: '순천역',
    note: {
      ko: 'KTX 전라선. 용산에서 2시간 40분. 역에서 촬영장까지 버스로 15분, 순천만까지 30분입니다.',
      en: 'On the KTX Jeolla line, two hours forty from Yongsan. The film set is 15 minutes by bus, the bay thirty.'
    }
  },
  course: {
    title: { ko: '순천 — 세트장에서 갈대밭 노을까지', en: 'Suncheon — film set to reeds at sunset' },
    meta: { ko: '6곳 · 약 9시간 · 버스 3회', en: '6 stops · about 9 hours · 3 buses' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '순천역', en: 'Suncheon Station' }, q: '순천역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역에서 촬영장 방면 버스로. 짐은 역 보관함에 맡기세요.', en: 'A bus to the film set from outside; leave the bag in a station locker.' } },
      { phase: 'morning', time: '10:00', name: { ko: '순천드라마촬영장', en: 'Suncheon drama set' }, q: '순천드라마촬영장', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
        desc: { ko: '1960~80년대 순천 읍내와 서울 달동네를 재현한 세트. 교복 대여와 옛 골목 체험이 있습니다.', en: 'Sets recreating a 1960s–80s country town and a Seoul hillside neighbourhood, with school-uniform rental.' },
        photo: 'th-drama' },
      { phase: 'lunch', time: '12:00', name: { ko: '순천 시내 점심', en: 'Lunch in town' }, q: '순천시', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
        desc: { ko: '순천은 국밥과 백반, 벌교 짱뚱어탕이 유명합니다. 시내 골목 안쪽이 한산합니다.', en: 'Suncheon is known for rice soup, set rice tables and mudskipper stew from Beolgyo.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '순천만국가정원', en: 'Suncheon Bay National Garden' }, q: '순천만국가정원', move: { ko: '버스 약 25분', en: 'Bus, about 25 min' },
        desc: { ko: '세계 각국의 정원이 이어집니다. 입구에서 지도 한 장을 받아 동선을 정하세요.', en: 'Gardens from around the world; take a map at the gate and choose a route.' },
        photo: 'th-drama-p2' },
      { phase: 'afternoon', time: '15:30', name: { ko: '순천만습지', en: 'Suncheon Bay wetland' }, q: '순천만습지', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
        desc: { ko: '갈대밭 사이로 난 데크길. S자 물길과 갈대가 이 동네의 사진입니다.', en: 'A boardwalk through the reeds — the S-shaped channel and the reeds are the photograph of this place.' } },
      { phase: 'evening', time: '17:20', name: { ko: '와온해변 노을', en: 'Sunset at Waon beach' }, q: '와온해변', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '갯벌 위로 해가 내려앉는 곳. 물때를 확인하면 물이 거울처럼 남습니다.', en: 'The sun drops onto the tidal flats; check the tide and the water stays like a mirror.' } },
      { phase: 'return', time: '19:00', name: { ko: '순천역', en: 'Suncheon Station' }, q: '순천역', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
        desc: { ko: '역으로 돌아와 저녁. 막차 시간은 미리 확인하세요.', en: 'Back to the station for dinner; check the last train ahead.' } }
    ]
  },
  conds: [
    { k: { ko: '촬영장', en: 'Sets' }, v: { ko: '입장료 3,000~5,000원, 촬영이 있을 때 일부 구역 통제', en: 'Entry ₩3,000–5,000; parts close when filming is under way' } },
    { k: { ko: '물때', en: 'Tide' }, v: { ko: '갯벌·바다 촬영지는 물때표 확인 필수', en: 'For flats and sea locations, check the tide table' } },
    { k: { ko: '예절', en: 'Respect' }, v: { ko: '주거지 촬영지는 조용히, 주차는 지정된 곳에', en: 'Quiet in residential locations; park only where allowed' } }
  ],
  places: [
    { name: { ko: '순천드라마촬영장', en: 'Suncheon drama set' }, region: 'jeolla', q: '순천드라마촬영장', note: { ko: '1960~80년대 옛 거리 세트. 교복 대여.', en: 'A 1960s–80s street set, with school-uniform rental.' } },
    { name: { ko: '합천영상테마파크', en: 'Hapcheon image theme park' }, region: 'gyeongsang', q: '합천영상테마파크', note: { ko: '경성과 1950~80년대 서울 거리 재현.', en: 'Recreated Gyeongseong and mid-century Seoul streets.' } },
    { name: { ko: '군산 시간여행마을', en: 'Gunsan time-travel village' }, region: 'jeolla', q: '군산 시간여행마을', note: { ko: '일본식 가옥과 근대 골목. 실제 거리 촬영지.', en: 'Japanese-era houses and modern alleys — a real street location.' } },
    { name: { ko: '양양 주문진 방파제', en: 'Jumunjin breakwater' }, region: 'gangwon', q: '주문진 방파제', note: { ko: '바다로 뻗은 방파제. 아침 빛이 좋습니다.', en: 'A breakwater running into the sea, best in morning light.' } },
    { name: { ko: '강릉 경포해변', en: 'Gyeongpo beach' }, region: 'gangwon', q: '경포해변', note: { ko: '모래사장과 소나무 숲이 배경.', en: 'Sand and pine forest as a backdrop.' } },
    { name: { ko: '전주한옥마을', en: 'Jeonju hanok village' }, region: 'jeolla', q: '전주한옥마을', note: { ko: '기와지붕 골목. 한복 대여가 많습니다.', en: 'Tiled-roof alleys with plenty of hanbok rental.' } },
    { name: { ko: '서울 북촌', en: 'Bukchon, Seoul' }, region: 'capital', q: '북촌한옥마을', note: { ko: '주거지라 조용히. 오전이 한산합니다.', en: 'A residential area — quiet, and emptiest in the morning.' } },
    { name: { ko: '남산골한옥마을', en: 'Namsangol hanok village' }, region: 'capital', q: '남산골한옥마을', note: { ko: '도심 안의 한옥 다섯 채와 정원.', en: 'Five hanok houses and a garden in the city centre.' } },
    { name: { ko: '인천 개항장거리', en: 'Incheon open port street' }, region: 'capital', q: '인천 개항장거리', note: { ko: '근대 건축과 일본식 골목.', en: 'Modern-era buildings and Japanese-style lanes.' } },
    { name: { ko: '제주 우도', en: 'Udo, Jeju' }, region: 'jeju', q: '우도', note: { ko: '섬 전체가 배경. 배로 15분.', en: 'A whole island for a backdrop, fifteen minutes by ferry.' } },
    { name: { ko: '문경새재', en: 'Mungyeong Saejae' }, region: 'gyeongsang', q: '문경새재', note: { ko: '옛길과 성문. 사극 촬영지로 자주 쓰입니다.', en: 'An old road and gate, often used for period drama.' } },
    { name: { ko: '파주 헤이리', en: 'Heyri, Paju' }, region: 'capital', q: '헤이리예술마을', note: { ko: '예술 마을의 건축과 골목.', en: 'Art-village buildings and lanes.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 해장국', en: 'Rice soup · hangover soup' }, note: { ko: '역 근처에서 뜨끈하게.', en: 'Something hot near the station.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍚', dish: { ko: '순천 백반 · 짱뚱어탕', en: 'Suncheon rice table · mudskipper stew' }, note: { ko: '벌교 짱뚱어탕은 이 지역 별미입니다.', en: 'The mudskipper stew from Beolgyo is the local speciality.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍡', dish: { ko: '옛날 과자 · 달고나', en: 'Old-fashioned sweets · dalgona' }, note: { ko: '세트장 안에서 추억 간식.', en: 'Nostalgic sweets inside the set.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🦀', dish: { ko: '꽃게탕 · 해물찜', en: 'Blue crab stew · braised seafood' }, note: { ko: '순천만 근처에서 해산물로.', en: 'Seafood near the bay.' } }
  ],
  photos: [
    { file: 'th-drama', cap: { ko: '촬영장의 옛 거리', en: 'An old street on the film set' } },
    { file: 'th-drama-p2', cap: { ko: '갈대밭의 물길', en: 'The channel through the reeds' } }
  ],
  tip: { ko: '세트장은 오전이 한산하고 사진이 잘 나옵니다. 실제 촬영이 있는 날은 일부 구역이 막히니 공지 확인은 필수.', en: 'Sets are quietest and photograph best in the morning; check the notice, as filming closes sections.' }
},
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
/* ------------------------------------------- 15 혼자 떠나는 마음 치유 */
{
  id: 'healing', emoji: '🧘', tint: '#B9EBD6',
  name: { ko: '혼자 떠나는 마음 치유', en: 'A quiet day for the mind' },
  sub: { ko: '말하지 않고 걷고 쉬는 하루', en: 'A day of walking and resting, unspeaking' },
  tag: { ko: '명상 · 숲 · 템플스테이 · 차', en: 'Meditation, forest, temples, tea' },
  intro: {
    ko: '마음 치유 여행은 경치 좋은 곳을 찾는 일이 아닙니다. 호흡을 고르고, 숲을 걷고, 차를 마시고, 아무것도 하지 않는 시간을 하루에 넣는 일이에요. 여기서는 영주 풍기에서 시작하는 숲 치유 하루를 기본 코스로 잡았습니다. 아래에 여덟 가지 세부 유형과 전국 20곳을 정리했으니, 오늘 내게 필요한 유형부터 골라 보세요.',
    en: 'A healing trip is not about a beautiful view. It is about putting breathing, a forest walk, a cup of tea and an hour of doing nothing into one day. This route starts at Punggi in Yeongju, built around forest therapy. Below are eight kinds of healing trip and twenty places across the country — start from the kind you need today.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울', en: 'Winter' }],
  transport: { ko: '기차 + 버스·택시', en: 'Train + bus or taxi' },
  duration: { ko: '약 9시간', en: 'About 9 hours' },
  hub: {
    ko: '풍기역', en: 'Punggi Station', q: '풍기역',
    note: {
      ko: '중앙선 기차역. 서울 청량리에서 무궁화로 2시간 남짓. 역에서 국립산림치유원까지 차로 10분, 부석사까지 20분입니다. 프로그램은 예약제이니 미리 신청하세요.',
      en: 'A Jungang line station, a little over two hours from Cheongnyangni. The forest therapy centre is ten minutes by car, Buseoksa twenty. Programmes are booked in advance.'
    }
  },
  course: {
    title: { ko: '풍기 — 숲에서 시작해 절에서 끝나는 하루', en: 'Punggi — a day that starts in forest and ends at a temple' },
    meta: { ko: '6곳 · 약 9시간 · 차 2회', en: '6 stops · about 9 hours · 2 drives' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '풍기역', en: 'Punggi Station' }, q: '풍기역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역에서 산림치유원으로. 아침에는 말을 아끼고 걸음만 세어 보세요. 그것으로 시작입니다.', en: 'From the station to the forest centre. Keep quiet on the way and count your steps; that is enough of a start.' } },
      { phase: 'morning', time: '09:40', name: { ko: '국립산림치유원', en: 'National forest therapy centre' }, q: '국립산림치유원', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '숲 활동 60분과 아쿠아테라피로 구성된 예약 프로그램. 해설사가 호흡과 걷기를 안내합니다.', en: 'A booked programme of sixty minutes of forest work and aqua therapy, guided through breath and walking.' },
        photo: 'th-healing' },
      { phase: 'lunch', time: '12:00', name: { ko: '풍기 시내 점심', en: 'Lunch in Punggi' }, q: '풍기', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '풍기는 인삼과 한우로 알려진 동네. 혼자여도 한 상 차려 주는 집이 많습니다.', en: 'Punggi is ginseng and beef country; plenty of places will set a table for one.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '부석사', en: 'Buseoksa Temple' }, q: '부석사', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '무량수전 마루에 앉아 마당을 봅니다. 사진은 밖에서, 안에서는 조용히.', en: 'Sit on the Muryangsujeon veranda and look at the courtyard; photographs outside, quiet inside.' },
        photo: 'th-healing-p2' },
      { phase: 'afternoon', time: '15:20', name: { ko: '소수서원', en: 'Sosu Seowon' }, q: '소수서원', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '우리나라 첫 서원. 숲과 물길 사이에 앉아 책 한 장을 읽거나 일기를 씁니다.', en: 'The country\u2019s first Confucian academy — sit between the trees and the water with a book or a notebook.' } },
      { phase: 'afternoon', time: '16:40', name: { ko: '풍기 시내 차 한 잔', en: 'A cup of tea in town' }, q: '풍기', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
        desc: { ko: '하루의 마무리는 차 한 잔. 휴대전화는 가방에 넣고 30분만 두세요.', en: 'Finish with tea; put the phone in the bag for thirty minutes.' } },
      { phase: 'return', time: '18:00', name: { ko: '풍기역', en: 'Punggi Station' }, q: '풍기역', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '역으로 돌아와 기차. 창밖을 보며 오늘 걸은 것을 다시 한 번 떠올려 보세요.', en: 'Back to the station for the train; watch the window and run the day through once more.' } }
    ]
  },
  subs: {
    title: { ko: '마음 치유 여행 여덟 가지', en: 'Eight kinds of quiet trip' },
    items: [
      { emoji: '🌬️', name: { ko: '명상 · 호흡', en: 'Meditation & breath' }, desc: { ko: '호흡과 마음챙김으로 내면에 집중합니다. 처음이면 30분 프로그램부터.', en: 'Breath and mindfulness, inward. Start with a thirty-minute session.' } },
      { emoji: '🌲', name: { ko: '숲속 치유', en: 'Forest therapy' }, desc: { ko: '피톤치드와 산림욕. 걷는 속도만 늦춰도 효과가 다릅니다.', en: 'Phytoncides and forest air — slowing the pace alone changes it.' } },
      { emoji: '🛕', name: { ko: '템플스테이', en: 'Templestay' }, desc: { ko: '예불·참선·차담. 1박 2일이 기본이지만 당일 체험도 있습니다.', en: 'Chanting, sitting, tea. Two days is standard, with day programmes too.' } },
      { emoji: '🍵', name: { ko: '차 명상', en: 'Tea meditation' }, desc: { ko: '다도와 차 한 잔의 고요. 하동·보성 같은 차 산지가 좋습니다.', en: 'The quiet of a tea ceremony — tea country such as Hadong or Boseong suits it.' } },
      { emoji: '🌊', name: { ko: '바다 마음 치유', en: 'Sea for the mind' }, desc: { ko: '파도 소리와 해변 걷기. 몽돌해변의 돌 구르는 소리가 대표적입니다.', en: 'Waves and a beach walk; the rolling stones of a pebble beach are the classic sound.' } },
      { emoji: '🧎', name: { ko: '요가 · 몸과 마음', en: 'Yoga & the body' }, desc: { ko: '요가와 스트레칭으로 몸부터 풉니다. 리조트·웰니스 시설에 많습니다.', en: 'Yoga and stretching to loosen the body first, common at resorts.' } },
      { emoji: '🔔', name: { ko: '소리 치유', en: 'Sound healing' }, desc: { ko: '싱잉볼과 사운드 배스. 누워서 소리만 듣는 시간.', en: 'Singing bowls and sound baths — lying down, only listening.' } },
      { emoji: '📖', name: { ko: '독서 · 사색', en: 'Reading & reflection' }, desc: { ko: '독서와 일기, 자기 성찰. 서원·정원·도서관이 어울립니다.', en: 'Books, a notebook, reflection — academies, gardens and libraries.' } }
    ]
  },
  conds: [
    { k: { ko: '예약', en: 'Booking' }, v: { ko: '산림치유·템플스테이는 예약제, 주말은 2주 전 마감', en: 'Forest therapy and templestay need booking; weekends close two weeks out' } },
    { k: { ko: '비용', en: 'Cost' }, v: { ko: '숲길·사찰 산책은 무료~5,000원, 프로그램 2~10만원', en: 'Forest paths and temples ₩0–5,000; programmes ₩20,000–100,000' } },
    { k: { ko: '숙박', en: 'Staying over' }, v: { ko: '당일 가능, 1박으로 늘리면 아침 명상까지', en: 'Day visits work; a night adds the morning sitting' } },
    { k: { ko: '주의', en: 'Note' }, v: { ko: '치료가 아닌 휴식·성찰의 여행입니다. 몸이 아프면 병원이 먼저입니다.', en: 'This is rest and reflection, not treatment; if you are ill, a doctor comes first' } }
  ],
  places: [
    { hot: true, name: { ko: '로미지안 가든', en: 'Romian Garden' }, region: 'gangwon', q: '로미지안가든', note: { ko: '정선. 산과 정원을 따라 걷는 자연 명상. 혼자 조용히 생각을 정리하기 좋습니다.', en: 'Jeongseon: a garden set into a mountain for walking meditation — good for sorting out thoughts alone.' } },
    { hot: true, name: { ko: '깊은산속 옹달샘', en: 'Deep Mountain Spring' }, region: 'jeolla', q: '깊은산속 옹달샘', note: { ko: '제천. 통나무 명상·걷기 명상·요가. 숙박형 프로그램이 중심입니다.', en: 'Jecheon: log meditation, walking meditation and yoga, mostly as residential programmes.' } },
    { hot: true, name: { ko: '국립산림치유원', en: 'National forest therapy centre' }, region: 'gyeongsang', q: '국립산림치유원', note: { ko: '영주. 숲 활동 60분·아쿠아테라피 등 예약 프로그램. 숙박 가능.', en: 'Yeongju: booked programmes of forest work and aqua therapy, with lodging.' } },
    { hot: true, name: { ko: '취다선 리조트 Tea & Meditation', en: 'Chuidasun tea & meditation' }, region: 'jeju', q: '취다선', note: { ko: '제주. 차 명상과 요가 중심의 숙박형 웰니스.', en: 'Jeju: a stay built around tea meditation and yoga.' } },
    { name: { ko: '메이필드호텔 서울', en: 'Mayfield Hotel Seoul' }, region: 'capital', q: '메이필드호텔', note: { ko: '정원 산책과 전통 공간에서의 휴식. 멀리 떠나지 않고 하루 쉬고 싶을 때.', en: 'Garden walks and traditional rooms — for a day off without leaving the city.' } },
    { name: { ko: '비스타 워커힐 웰니스클럽', en: 'Vista Walkerhill wellness club' }, region: 'capital', q: '비스타 워커힐', note: { ko: '호텔 웰니스 시설과 휴식 프로그램.', en: 'Hotel wellness facilities and rest programmes.' } },
    { name: { ko: '트리비움', en: 'Trivium' }, region: 'capital', q: '트리비움', note: { ko: '경기. 2025년 신규 우수 웰니스 관광지. 운영 프로그램 확인 필요.', en: 'Gyeonggi: a newly listed wellness destination; confirm the programme is running.' } },
    { name: { ko: '미리내 힐빙클럽', en: 'Mirinae healing club' }, region: 'capital', q: '미리내 힐빙클럽', note: { ko: '양평. 자연 속 웰니스 공간에서 몸과 마음을 쉽니다.', en: 'Yangpyeong: a wellness space in nature for body and mind.' } },
    { name: { ko: '경원재 앰배서더 인천', en: 'Gyeongwonjae Ambassador Incheon' }, region: 'capital', q: '경원재 앰배서더', note: { ko: '한옥 스테이. 조용하고 특별한 숙박 여행.', en: 'A hanok stay for a quiet, particular night.' } },
    { name: { ko: '하이힐링원', en: 'Hi Healing One' }, region: 'gangwon', q: '하이힐링원', note: { ko: '홍천. 산림치유와 휴식 프로그램.', en: 'Hongcheon: forest therapy and rest programmes.' } },
    { name: { ko: '하이원 리조트', en: 'High1 Resort' }, region: 'gangwon', q: '하이원리조트', note: { ko: '정선. 산악 풍경과 숙박을 결합한 휴식.', en: 'Jeongseon: mountain scenery with a bed.' } },
    { name: { ko: '파크로쉬 리조트앤웰니스', en: 'Park Roche resort & wellness' }, region: 'gangwon', q: '파크로쉬', note: { ko: '정선. 요가·명상 중심의 웰니스 프로그램.', en: 'Jeongseon: wellness programmes built on yoga and meditation.' } },
    { name: { ko: '뮤지엄 SAN 명상관', en: 'Museum SAN meditation hall' }, region: 'gangwon', q: '뮤지엄 SAN', note: { ko: '원주. 자연과 건축, 예술을 함께 보는 조용한 공간.', en: 'Wonju: nature, architecture and art in one quiet place.' } },
    { name: { ko: '국립제천치유의숲', en: 'Jecheon healing forest' }, region: 'jeolla', q: '국립제천치유의숲', note: { ko: '숲을 활용한 치유 체험. 천천히 걷고 싶은 날.', en: 'Forest-based therapy for a day of slow walking.' } },
    { name: { ko: '구이안덕 건강힐링체험마을', en: 'Guian Deok healing village' }, region: 'jeolla', q: '구이안덕', note: { ko: '완주. 전통 건강 체험과 자연 휴식.', en: 'Wanju: traditional health practices and rest.' } },
    { name: { ko: '대흥사', en: 'Daeheungsa' }, region: 'jeolla', q: '대흥사', note: { ko: '해남 두륜산. 산사 명상과 숲길, 템플스테이.', en: 'Haenam, on Duryunsan: temple meditation, forest paths and templestay.' } },
    { name: { ko: '정남진 편백숲 우드랜드', en: 'Jeongnamjin cypress forest' }, region: 'jeolla', q: '정남진 편백숲', note: { ko: '장흥. 편백숲 산책과 목재 체험.', en: 'Jangheung: cypress walks and wood workshops.' } },
    { name: { ko: '하동 차 문화시설', en: 'Hadong tea culture centres' }, region: 'gyeongsang', q: '하동 차문화', note: { ko: '다도와 차 명상. 야생차밭이 이어지는 동네.', en: 'Tea ceremony and tea meditation among wild tea fields.' } },
    { name: { ko: '숲애서', en: 'Supae-seo' }, region: 'gyeongsang', q: '숲애서', note: { ko: '양산. 산림치유와 건강 프로그램을 결합한 공간.', en: 'Yangsan: forest therapy combined with health programmes.' } },
    { name: { ko: '서귀포 치유의 숲', en: 'Seogwipo healing forest' }, region: 'jeju', q: '서귀포치유의숲', note: { ko: '제주 고유의 숲 풍경과 산책로.', en: 'Jeju\u2019s own forest, with walking trails.' } },
    { name: { ko: '법주사', en: 'Beopjusa' }, region: 'jeolla', q: '법주사', note: { ko: '보은 속리산. 2박 3일 호흡 명상·108배·세조길 걷기 프로그램이 있습니다.', en: 'Boeun, Songnisan: breath meditation, 108 bows and the Sejo path over two nights.' } },
    { name: { ko: '용연사', en: 'Yongyeonsa' }, region: 'gangwon', q: '용연사', note: { ko: '강릉. 치유 요가·스님과의 차담·타종 체험 프로그램.', en: 'Gangneung: healing yoga, tea with a monk and bell ringing.' } },
    { name: { ko: '산청 대원사', en: 'Daewonsa, Sancheong' }, region: 'gyeongsang', q: '대원사', note: { ko: '아침 명상·염주 만들기·계곡 산책.', en: 'Morning sitting, bead making and a valley walk.' } },
    { name: { ko: '귀정사', en: 'Gwijeongsa' }, region: 'jeolla', q: '귀정사', note: { ko: '남원. 5박 6일 1인 1실 수행 프로그램으로 알려진 암자.', en: 'Namwon: a hermitage known for a five-night solo practice programme.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '죽 · 산채비빔밥', en: 'Porridge · wild-vegetable bibimbap' }, note: { ko: '사찰 음식은 맵지 않고 담백합니다.', en: 'Temple food is mild and clean.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍲', dish: { ko: '인삼갈비탕 · 산채정식', en: 'Ginseng rib soup · wild-vegetable table' }, note: { ko: '풍기는 인삼과 산나물의 동네입니다.', en: 'Punggi is ginseng and mountain greens.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍵', dish: { ko: '차 · 약과 · 떡', en: 'Tea · yakgwa · rice cake' }, note: { ko: '차는 천천히, 세 모금에 나눠 마십니다.', en: 'Drink tea slowly, in three sips.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🥗', dish: { ko: '산채비빔밥 · 버섯전골', en: 'Wild-vegetable bibimbap · mushroom hotpot' }, note: { ko: '가볍게 먹고 일찍 잠자리에 드세요.', en: 'Eat lightly and go to bed early.' } }
  ],
  photos: [
    { file: 'th-healing', cap: { ko: '숲길', en: 'A forest path' } },
    { file: 'th-healing-p2', cap: { ko: '산사의 마당', en: 'A temple courtyard' } }
  ],
  tip: { ko: '프로그램은 대부분 예약제입니다. 혼자 참가할 수 있는지, 묵언이 가능한지 먼저 물어보면 하루가 훨씬 편안해집니다.', en: 'Most programmes need booking. Ask first whether you can come alone and whether silence is kept — it changes the day.' }
},
/* ----------------------------------------------- 16 숨은 명소·이색 여행 */
{
  id: 'hidden', emoji: '🧭', tint: '#A8C9E8',
  name: { ko: '숨은 명소 · 이색 여행', en: 'Hidden & unusual places' },
  sub: { ko: '지도에 잘 안 나오는 곳으로', en: 'Off the usual map' },
  tag: { ko: '동굴 · 폐광 · 비밀 정원', en: 'Caves, old mines, secret gardens' },
  intro: {
    ko: '이색 여행은 "여기가 한국 맞나" 싶은 장면을 찾는 일입니다. 폐광을 예술 공간으로 바꾼 동굴, 강물이 감싸 도는 섬, 배를 타야만 닿는 암자까지. 여기서는 영월에서 시작하는 하루를 잡았어요. 버스로 닿는 거리에 동굴 같은 미술관과 강이 함께 있습니다.',
    en: 'An unusual trip is about the moment you wonder whether you are still in Korea: a mine turned into an art cave, an island inside a bend of a river, a hermitage reached by water. This day starts in Yeongwol, where an art park and a river sit within a bus ride of each other.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '여름 동굴', en: 'Caves in summer' }],
  transport: { ko: '기차 + 버스·택시', en: 'Train + bus or taxi' },
  duration: { ko: '약 8시간', en: 'About 8 hours' },
  hub: {
    ko: '영월역', en: 'Yeongwol Station', q: '영월역',
    note: {
      ko: '태백선 기차역. 청량리에서 3시간 안팎. 역에서 시내까지 도보 15분, 젊은달와이파크까지 차로 15분입니다.',
      en: 'A Taebaek line station, about three hours from Cheongnyangni. Town is fifteen minutes on foot; the art park fifteen by car.'
    }
  },
  course: {
    title: { ko: '영월 — 붉은 조형물과 강 위의 섬', en: 'Yeongwol — red sculptures and an island in the river' },
    meta: { ko: '6곳 · 약 8시간 · 차 3회', en: '6 stops · about 8 hours · 3 drives' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '영월역', en: 'Yeongwol Station' }, q: '영월역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역에서 택시로 젊은달와이파크까지. 대중교통은 배차가 길어 택시를 권합니다.', en: 'A taxi to the art park; buses are infrequent here.' } },
      { phase: 'morning', time: '10:30', name: { ko: '젊은달와이파크', en: 'Youngwol Y Park' }, q: '젊은달와이파크', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '붉은 대형 조형물과 설치미술. 폐산업 시설을 예술로 바꾼 공간이라 사진이 독특하게 나옵니다.', en: 'Big red sculptures and installations in a former industrial site — photographs come out unlike anywhere else.' },
        photo: 'th-hidden' },
      { phase: 'lunch', time: '12:00', name: { ko: '영월 시내 점심', en: 'Lunch in Yeongwol' }, q: '영월읍', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '영월은 감자와 메밀, 산채의 동네. 시내 골목 식당이 12시에 붐빕니다.', en: 'Potatoes, buckwheat and mountain greens; town fills at noon.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '한반도섬', en: 'Hanbando island' }, q: '한반도섬', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '강물이 감싸 도는 섬. 전망대에 올라야 한반도 모양이 보입니다.', en: 'An island wrapped by the river — the peninsula shape only appears from the lookout.' } },
      { phase: 'afternoon', time: '15:00', name: { ko: '청령포', en: 'Cheongnyeongpo' }, q: '청령포', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '단종이 유배되었던 강 위의 숲. 배로 건너 20분이면 한 바퀴입니다.', en: 'The river grove where King Danjong was exiled; a short crossing and a twenty-minute loop.' },
        photo: 'th-hidden-p2' },
      { phase: 'evening', time: '16:30', name: { ko: '별마로천문대', en: 'Byeolmaro observatory' }, q: '별마로천문대', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '해가 지기 전에 올라가 노을과 첫 별을 함께 봅니다. 야간 개장 시간을 확인하세요.', en: 'Go up before sunset for both the afterglow and the first stars; check the evening opening.' } },
      { phase: 'return', time: '18:30', name: { ko: '영월역', en: 'Yeongwol Station' }, q: '영월역', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '역으로 돌아와 기차. 하루에 두세 곳만 봐도 충분히 이상한 날이 됩니다.', en: 'Back at the station. Two or three places is enough to make the day feel strange in the right way.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '동굴·미술관 5,000~15,000원, 마을·섬은 무료가 많음', en: 'Caves and museums ₩5,000–15,000; villages and islands often free' } },
    { k: { ko: '이동', en: 'Getting around' }, v: { ko: '대중교통 배차가 길어 렌터카·택시가 현실적', en: 'Buses are sparse; a car or taxi is realistic' } },
    { k: { ko: '물때', en: 'Tide' }, v: { ko: '갯벌·부교 명소는 물때 확인 필수', en: 'For tidal flats and pontoon paths, check the tide' } }
  ],
  places: [
    { name: { ko: '광명동굴', en: 'Gwangmyeong Cave' }, region: 'capital', q: '광명동굴', note: { ko: '폐광을 예술 공간으로. 연중 12℃, 실내 관광.', en: 'A disused mine turned art space, 12℃ all year.' } },
    { name: { ko: '젊은달와이파크', en: 'Youngwol Y Park' }, region: 'gangwon', q: '젊은달와이파크', note: { ko: '영월. 붉은 조형물과 설치미술.', en: 'Yeongwol: red sculptures and installations.' } },
    { name: { ko: '한반도섬', en: 'Hanbando island' }, region: 'gangwon', q: '한반도섬', note: { ko: '양구. 인공습지 안의 한반도 모양 섬.', en: 'Yanggu: a peninsula-shaped island in a wetland.' } },
    { name: { ko: '청령포', en: 'Cheongnyeongpo' }, region: 'gangwon', q: '청령포', note: { ko: '영월. 강 위의 숲, 배로 건넙니다.', en: 'Yeongwol: a river grove reached by boat.' } },
    { name: { ko: '무진정', en: 'Mujinjeong' }, region: 'gyeongsang', q: '무진정', note: { ko: '함안. 물 위로 불꽃이 흩날리는 낙화놀이로 유명. 행사일 확인.', en: 'Haman: known for the falling-fire flower play over water; check event dates.' } },
    { name: { ko: '운곡람사르습지', en: 'Ungok Ramsar wetland' }, region: 'jeolla', q: '운곡람사르습지', note: { ko: '고창. 회복된 습지 생태계와 숲길.', en: 'Gochang: a recovered wetland and forest paths.' } },
    { name: { ko: '초곡용굴촛대바위길', en: 'Chogok rock-arch coast path' }, region: 'gangwon', q: '초곡용굴촛대바위', note: { ko: '삼척. 기암과 바다 절벽을 따라 걷는 길.', en: 'Samcheok: a path along rock formations and sea cliffs.' } },
    { name: { ko: '단양강 잔도', en: 'Danyang cliff walkway' }, region: 'jeolla', q: '단양강 잔도', note: { ko: '암벽 옆에 붙은 강변 산책로.', en: 'A walkway pinned to the cliff above the river.' } },
    { name: { ko: '신창풍차해안도로', en: 'Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '바다 위 풍력발전기와 데크.', en: 'Turbines over the water, with a boardwalk.' } },
    { name: { ko: '행남해안산책로', en: 'Haengnam coastal path' }, region: 'gyeongsang', q: '울릉도 행남해안산책로', note: { ko: '울릉도. 절벽과 자연동굴을 잇는 길.', en: 'Ulleungdo: cliffs and a natural cave linked by a path.' } },
    { name: { ko: '안면암', en: 'Anmyeonam' }, region: 'jeolla', q: '안면암', note: { ko: '태안. 바다 위 부교로 들어가는 암자, 물때 확인.', en: 'Taean: a hermitage reached by a floating bridge; check the tide.' } },
    { name: { ko: '퍼플섬 반월도·박지도', en: 'Purple Island' }, region: 'jeolla', q: '퍼플섬', note: { ko: '신안. 섬 전체가 보라색, 보행교로 연결.', en: 'Sinan: an island painted purple, linked by footbridges.' } },
    { name: { ko: '문무대왕릉', en: 'Tomb of King Munmu' }, region: 'gyeongsang', q: '문무대왕릉', note: { ko: '경주. 바다의 바위섬에 자리한 수중릉.', en: 'Gyeongju: a royal tomb on a rock in the sea.' } },
    { name: { ko: '옻골마을', en: 'Otgol village' }, region: 'gyeongsang', q: '옻골마을', note: { ko: '대구. 400년 고택과 돌담길.', en: 'Daegu: a four-hundred-year-old house and stone walls.' } },
    { name: { ko: '면천읍성', en: 'Myeoncheon fortress' }, region: 'jeolla', q: '면천읍성', note: { ko: '당진. 성곽 안에 주민이 사는 마을.', en: 'Dangjin: a village living inside fortress walls.' } },
    { name: { ko: '강경근대거리', en: 'Ganggyeong modern street' }, region: 'jeolla', q: '강경근대거리', note: { ko: '논산. 옛 상업도시의 근대 건축 골목.', en: 'Nonsan: the modern buildings of an old trading town.' } },
    { name: { ko: '성안올레', en: 'Seongan Olle' }, region: 'jeju', q: '제주 성안올레', note: { ko: '제주 원도심의 역사 골목길.', en: 'Historic lanes in old Jeju town.' } },
    { name: { ko: '순창발효테마파크', en: 'Sunchang fermentation park' }, region: 'jeolla', q: '순창발효테마파크', note: { ko: '발효와 미생물을 주제로 한 체험 공간.', en: 'A park built around fermentation and microbes.' } },
    { name: { ko: '클레이아크김해미술관', en: 'Clayarch Gimhae museum' }, region: 'gyeongsang', q: '클레이아크김해미술관', note: { ko: '도자와 건축을 결합한 돔 형태 미술관.', en: 'A domed museum combining ceramics and architecture.' } },
    { name: { ko: '가우도', en: 'Gawdo island' }, region: 'jeolla', q: '가우도', note: { ko: '강진. 출렁다리와 짚트랙으로 이어지는 섬.', en: 'Gangjin: an island reached by a suspension bridge and a zipline.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 감자수제비', en: 'Rice soup · potato dumplings' }, note: { ko: '영월은 감자 요리가 흔합니다.', en: 'Potato dishes are everywhere in Yeongwol.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥘', dish: { ko: '산채비빔밥 · 메밀전', en: 'Wild-vegetable bibimbap · buckwheat pancake' }, note: { ko: '산간 지역은 나물이 신선합니다.', en: 'Mountain regions have the fresh greens.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍠', dish: { ko: '군고구마 · 옥수수', en: 'Roast sweet potato · corn' }, note: { ko: '동굴 앞에서 먹는 군고구마가 별미.', en: 'A roast sweet potato outside a cave tastes better.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍲', dish: { ko: '올갱이국 · 닭백숙', en: 'Freshwater snail soup · chicken broth' }, note: { ko: '강이 있는 동네의 저녁.', en: 'Dinner in a river town.' } }
  ],
  photos: [
    { file: 'th-hidden', cap: { ko: '이색 공간의 조형물', en: 'Sculpture in an unusual space' } },
    { file: 'th-hidden-p2', cap: { ko: '강과 숲', en: 'River and forest' } }
  ],
  tip: { ko: '이색 명소는 운영이 자주 바뀝니다. 떠나기 전에 전화로 영업 여부를 확인하면 헛걸음이 없습니다.', en: 'Unusual places change hands and hours often — a phone call before you go saves the trip.' }
},
/* --------------------------------------------- 17 전국 인생샷 명소 */
{
  id: 'photo', emoji: '📸', tint: '#D9CCFF',
  name: { ko: '전국 인생샷 명소', en: 'Photo spots' },
  sub: { ko: '한 장을 위해 움직이는 하루', en: 'A day that moves for one picture' },
  tag: { ko: '정원 · 호수 · 이국적 풍경', en: 'Gardens, lakes, foreign-looking corners' },
  intro: {
    ko: '사진 명소는 빛의 시간이 절반입니다. 같은 자리도 오전과 해 질 무렵이 전혀 다르게 나옵니다. 여기서는 포천의 폐채석장 정원에서 시작해 호수와 수목원으로 이어지는 하루를 잡았습니다. 사람이 적은 평일 오전이 가장 좋고, 계절마다 주제를 바꿔 다시 갈 만한 곳입니다.',
    en: 'At a photo spot half of it is the light: the same place at ten and at dusk are different photographs. This day starts in a disused quarry garden in Pocheon and ends at a lake and an arboretum. Weekday mornings are quietest, and it is worth returning each season for a different subject.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울 설경', en: 'Snow' }],
  transport: { ko: '전철 + 버스·택시', en: 'Metro + bus or taxi' },
  duration: { ko: '약 9시간', en: 'About 9 hours' },
  hub: {
    ko: '의정부역', en: 'Uijeongbu Station', q: '의정부역',
    note: {
      ko: '1호선과 의정부경전철이 만나는 곳. 포천 방면 버스가 역 앞에서 출발하고, 택시로는 30분 안팎입니다.',
      en: 'Line 1 meets the Uijeongbu light rail here; buses for Pocheon leave outside, and a taxi takes about half an hour.'
    }
  },
  course: {
    title: { ko: '포천 — 채석장 정원에서 호수까지', en: 'Pocheon — quarry garden to the lake' },
    meta: { ko: '6곳 · 약 9시간 · 차 3회', en: '6 stops · about 9 hours · 3 drives' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '의정부역', en: 'Uijeongbu Station' }, q: '의정부역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '포천 방면 버스로. 사진은 오전 빛이 좋으니 첫 목적지에 10시 전에 닿는 게 좋습니다.', en: 'Take a Pocheon bus; morning light is best, so aim to be at the first stop before ten.' } },
      { phase: 'morning', time: '09:50', name: { ko: '포천아트밸리', en: 'Pocheon Art Valley' }, q: '포천아트밸리', move: { ko: '버스 약 50분', en: 'Bus, about 50 min' },
        desc: { ko: '폐채석장 절벽과 에메랄드빛 호수. 전망대에서 내려다보는 구도가 대표 사진입니다.', en: 'Quarry cliffs over an emerald lake — the view from the upper terrace is the photograph.' },
        photo: 'th-photo' },
      { phase: 'lunch', time: '12:00', name: { ko: '포천 점심', en: 'Lunch in Pocheon' }, q: '포천', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '포천은 이동갈비와 막걸리로 알려져 있습니다. 점심시간을 조금 비켜 가면 한산합니다.', en: 'Pocheon is galbi and makgeolli country; go a little after noon and it is quiet.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '허브아일랜드', en: 'Herb Island' }, q: '허브아일랜드', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: '정원과 온실, 계절별 꽃밭. 입구보다 안쪽 정원이 사진이 잘 나옵니다.', en: 'Gardens, greenhouses and seasonal beds — the inner gardens photograph better than the entrance.' },
        photo: 'th-photo-p2' },
      { phase: 'afternoon', time: '15:30', name: { ko: '산정호수', en: 'Sanjeong lake' }, q: '산정호수', move: { ko: '차 약 25분', en: 'Drive, about 25 min' },
        desc: { ko: '산이 물에 비치는 호수. 둘레길을 40분쯤 걸으면 반대편 구도가 나옵니다.', en: 'A lake with the mountain in it; forty minutes around gives you the opposite view.' } },
      { phase: 'evening', time: '17:30', name: { ko: '노을 · 귀환', en: 'Sunset & back' }, q: '산정호수', move: { ko: '차 약 30분', en: 'Drive, about 30 min' },
        desc: { ko: '해 질 무렵 물 위 색이 가장 진합니다. 어두워지기 전에 버스 시간을 확인하세요.', en: 'The water is deepest at sunset; check the bus before it gets dark.' } },
      { phase: 'return', time: '19:00', name: { ko: '의정부역', en: 'Uijeongbu Station' }, q: '의정부역', move: { ko: '차 약 40분', en: 'Drive, about 40 min' },
        desc: { ko: '1호선으로 귀가. 사진은 그날 밤에 한 장만 골라 두세요.', en: 'Home on Line 1 — pick just one photograph from the day before bed.' } }
    ]
  },
  conds: [
    { k: { ko: '빛', en: 'Light' }, v: { ko: '오전 9~11시, 해 지기 40분 전이 가장 좋음', en: '9–11 a.m. and forty minutes before sunset are best' } },
    { k: { ko: '계절', en: 'Season' }, v: { ko: '봄 꽃 · 여름 물 · 가을 단풍 · 겨울 눈', en: 'Spring flowers, summer water, autumn leaves, winter snow' } },
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '정원·수목원 8,000~15,000원, 호수·공원 무료', en: 'Gardens ₩8,000–15,000; lakes and parks free' } }
  ],
  places: [
    { name: { ko: '올림픽공원 나홀로나무', en: 'Olympic Park lone tree' }, region: 'capital', q: '올림픽공원 나홀로나무', note: { ko: '서울. 넓은 잔디와 홀로 선 나무, 가을 오전.', en: 'Seoul: one tree in a wide lawn, autumn mornings.' } },
    { name: { ko: '북촌한옥마을', en: 'Bukchon hanok village' }, region: 'capital', q: '북촌한옥마을', note: { ko: '한복 사진. 주거지라 오전 일찍, 조용히.', en: 'Hanbok photographs — early, and quietly, since people live here.' } },
    { name: { ko: '세빛섬·반포한강', en: 'Sebitseom & Banpo' }, region: 'capital', q: '세빛섬', note: { ko: '야경과 분수. 분수 운영 일정 확인.', en: 'Night views and the fountain; check its schedule.' } },
    { name: { ko: '송월동 동화마을', en: 'Songwol-dong fairy village' }, region: 'capital', q: '송월동동화마을', note: { ko: '인천. 알록달록한 골목과 벽화.', en: 'Incheon: bright alleys and murals.' } },
    { name: { ko: '아침고요수목원', en: 'Garden of Morning Calm' }, region: 'capital', q: '아침고요수목원', note: { ko: '계절 정원과 야간 조명.', en: 'Seasonal gardens and evening lighting.' } },
    { name: { ko: '포천아트밸리', en: 'Pocheon Art Valley' }, region: 'capital', q: '포천아트밸리', note: { ko: '채석장 절벽과 호수.', en: 'Quarry cliffs and a lake.' } },
    { name: { ko: '하슬라아트월드', en: 'Haslla Art World' }, region: 'gangwon', q: '하슬라아트월드', note: { ko: '강릉. 바다를 액자처럼 담는 조형물.', en: 'Gangneung: frames that hold the sea.' } },
    { name: { ko: '육백마지기', en: 'Yukbaek Majigi' }, region: 'gangwon', q: '육백마지기', note: { ko: '정선. 고산 초원과 풍력발전기. 도로 통제 확인.', en: 'Jeongseon: high meadow and turbines; check road closures.' } },
    { name: { ko: '원대리 자작나무숲', en: 'Wondae-ri birch forest' }, region: 'gangwon', q: '원대리 자작나무숲', note: { ko: '인제. 겨울 설경, 입산 기간 확인.', en: 'Inje: snow among birches; check the access period.' } },
    { name: { ko: '미인폭포', en: 'Miin waterfall' }, region: 'gangwon', q: '미인폭포', note: { ko: '삼척. 에메랄드빛 폭포와 협곡.', en: 'Samcheok: an emerald fall in a gorge.' } },
    { name: { ko: '꽃지해수욕장', en: 'Ggotji Beach' }, region: 'jeolla', q: '꽃지해수욕장', note: { ko: '태안. 할미·할아비바위와 붉은 석양.', en: 'Taean: the old-couple rocks and a red sunset.' } },
    { name: { ko: '궁남지', en: 'Gungnamji' }, region: 'jeolla', q: '궁남지', note: { ko: '부여. 연꽃과 정자, 여름 아침.', en: 'Buyeo: lotus and pavilion on a summer morning.' } },
    { name: { ko: '도담삼봉', en: 'Dodamsambong' }, region: 'jeolla', q: '도담삼봉', note: { ko: '단양. 강 위 세 봉우리.', en: 'Danyang: three peaks in the river.' } },
    { name: { ko: '문광저수지 은행나무길', en: 'Mungwang reservoir ginkgo road' }, region: 'jeolla', q: '문광저수지', note: { ko: '괴산. 가을 노란 은행나무 반영.', en: 'Goesan: yellow ginkgoes doubled in the water.' } },
    { name: { ko: '감천문화마을', en: 'Gamcheon culture village' }, region: 'gyeongsang', q: '감천문화마을', note: { ko: '부산. 알록달록한 집과 골목.', en: 'Busan: coloured houses and alleys.' } },
    { name: { ko: '매미성', en: 'Maemiseong' }, region: 'gyeongsang', q: '매미성', note: { ko: '거제. 바다를 배경으로 한 돌성.', en: 'Geoje: a stone castle against the sea.' } },
    { name: { ko: '바람의 언덕', en: 'Windy Hill' }, region: 'gyeongsang', q: '바람의언덕', note: { ko: '거제. 초록 언덕과 풍차.', en: 'Geoje: a green hill and a windmill.' } },
    { name: { ko: '실안노을 전망교', en: 'Silan sunset bridge' }, region: 'gyeongsang', q: '실안낙조', note: { ko: '사천. 바다와 섬, 노을을 한 프레임에.', en: 'Sacheon: sea, islands and sunset in one frame.' } },
    { name: { ko: '첨성대', en: 'Cheomseongdae' }, region: 'gyeongsang', q: '첨성대', note: { ko: '경주. 유적과 계절 꽃밭.', en: 'Gyeongju: the observatory and seasonal flowers.' } },
    { name: { ko: '성이시돌목장 테쉬폰', en: 'Isidore Ranch teshpon' }, region: 'jeju', q: '성이시돌목장', note: { ko: '제주. 곡선형 건축과 초원.', en: 'Jeju: curved buildings on a meadow.' } },
    { name: { ko: '신창풍차해안도로', en: 'Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '풍차와 바다, 노을.', en: 'Turbines, sea and sunset.' } },
    { name: { ko: '사려니숲길', en: 'Saryeoni forest path' }, region: 'jeju', q: '사려니숲길', note: { ko: '삼나무 숲길, 빛이 내려오는 오전.', en: 'A cedar path, best in morning light.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '☕', dish: { ko: '커피 · 베이커리', en: 'Coffee · bakery' }, note: { ko: '이동이 긴 날이라 아침은 간단히.', en: 'A long travel day wants a simple breakfast.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥩', dish: { ko: '이동갈비 · 막국수', en: 'Galbi · buckwheat noodles' }, note: { ko: '포천의 대표 점심.', en: 'The Pocheon lunch.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍦', dish: { ko: '아이스크림 · 허브차', en: 'Ice cream · herb tea' }, note: { ko: '정원 안에서 잠깐 쉬어 가세요.', en: 'Take a pause inside the garden.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍲', dish: { ko: '닭갈비 · 국밥', en: 'Chicken galbi · rice soup' }, note: { ko: '돌아오는 길에 따뜻하게.', en: 'Something warm on the way back.' } }
  ],
  photos: [
    { file: 'th-photo', cap: { ko: '채석장 절벽과 호수', en: 'Quarry cliffs and lake' } },
    { file: 'th-photo-p2', cap: { ko: '정원의 꽃밭', en: 'Flower beds in the garden' } }
  ],
  tip: { ko: '같은 자리도 시간에 따라 전혀 다릅니다. 한 곳에서 두 번(오전·해 질 무렵) 찍을 계획을 세우면 성공률이 높아집니다.', en: 'The same place at two hours is two photographs — plan to shoot one spot twice, morning and dusk.' }
},
/* --------------------------------------------------- 18 레트로·빈티지 */
{
  id: 'retro', emoji: '📻', tint: '#E2C9A0',
  name: { ko: '레트로 · 빈티지', en: 'Retro & vintage' },
  sub: { ko: '지난 세기의 거리를 걷는 하루', en: 'A day in the last century' },
  tag: { ko: '옛 거리 · 극장 · 골동품', en: 'Old streets, cinemas, flea markets' },
  intro: {
    ko: '레트로 여행은 두 갈래입니다. 실제로 그 시대에 지어진 거리와, 그 시대를 다시 지어 놓은 세트장. 군산은 앞쪽입니다. 일제강점기와 1960~70년대 건물이 그대로 남아 있어, 낮에 걸으면 사진이 저절로 옛날이 됩니다. 오전에 시간여행마을, 오후에 철길마을로 이어지는 하루를 잡았어요.',
    en: 'Retro travel splits in two: streets actually built in that era, and sets rebuilt to look like it. Gunsan is the first kind — Japanese colonial and 1960s–70s buildings still standing, so a daytime walk photographs itself into the past. This day runs the time-travel village in the morning and the railway village in the afternoon.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '가을', en: 'Autumn' }],
  transport: { ko: 'KTX + 버스·도보', en: 'KTX + bus or on foot' },
  duration: { ko: '약 8시간', en: 'About 8 hours' },
  hub: {
    ko: '군산역', en: 'Gunsan Station', q: '군산역',
    note: {
      ko: 'KTX 장항선. 용산에서 2시간 30분. 역에서 시간여행마을까지 버스로 20분, 택시로 15분입니다.',
      en: 'On the KTX Janghang line, two and a half hours from Yongsan. The time-travel village is 20 minutes by bus, 15 by taxi.'
    }
  },
  course: {
    title: { ko: '군산 — 시간여행마을에서 철길마을까지', en: 'Gunsan — time-travel village to the railway village' },
    meta: { ko: '6곳 · 약 8시간 · 버스 2회', en: '6 stops · about 8 hours · 2 buses' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '군산역', en: 'Gunsan Station' }, q: '군산역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '역에서 시간여행마을 방면 버스로. 짐은 역 보관함에 맡기고 가볍게 걷습니다.', en: 'A bus to the time-travel village; leave the bag in a station locker and walk light.' } },
      { phase: 'morning', time: '10:20', name: { ko: '군산 시간여행마을', en: 'Gunsan time-travel village' }, q: '군산 시간여행마을', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
        desc: { ko: '일본식 가옥과 근대 상점, 옛 사진관이 이어지는 골목. 교복 대여점이 많아 사진이 확실히 달라집니다.', en: 'Japanese-era houses, old shops and a period photo studio; uniform rental changes the photographs completely.' },
        photo: 'th-retro' },
      { phase: 'lunch', time: '12:00', name: { ko: '군산 시내 점심', en: 'Lunch in Gunsan' }, q: '군산시', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '군산은 짬뽕과 빵으로 알려진 항구 도시. 점심시간을 조금 비켜 가면 한산합니다.', en: 'A port town known for jjambbong and bakeries; go a little after noon.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '경암동 철길마을', en: 'Gyeongam-dong railway village' }, q: '경암동철길마을', move: { ko: '버스 약 15분', en: 'Bus, about 15 min' },
        desc: { ko: '집 사이로 철길이 지나는 동네. 문방구와 옛 간판, 교복 체험이 있습니다.', en: 'A neighbourhood with a railway running between the houses — stationery shops, old signs and uniform rental.' },
        photo: 'th-retro-p2' },
      { phase: 'afternoon', time: '15:00', name: { ko: '군산 근대역사박물관', en: 'Gunsan modern history museum' }, q: '군산근대역사박물관', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '항구 도시가 어떻게 생겼는지 한 번에 보는 곳. 실내라 더위를 피하기도 좋습니다.', en: 'How the port grew, in one building — and a cool indoor pause.' } },
      { phase: 'evening', time: '16:30', name: { ko: '은파호수공원', en: 'Eunpa lake park' }, q: '은파호수공원', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '호수를 도는 산책로와 조명. 해 질 무렵 한 바퀴가 좋습니다.', en: 'A lakeside path with lighting — one loop at dusk.' } },
      { phase: 'return', time: '18:00', name: { ko: '군산역', en: 'Gunsan Station' }, q: '군산역', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '역으로 돌아와 기차. 저녁은 역 근처에서 가볍게.', en: 'Back to the station; eat lightly nearby.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '옛 거리 무료, 박물관·세트장 3,000~10,000원', en: 'Old streets free; museums and sets ₩3,000–10,000' } },
    { k: { ko: '대여', en: 'Rental' }, v: { ko: '교복·옷 대여 10,000~20,000원, 주말 대기', en: 'Uniform or costume hire ₩10,000–20,000; queues at weekends' } },
    { k: { ko: '주의', en: 'Note' }, v: { ko: '실제 주거지가 많아 조용히, 상점 촬영은 양해를 구하세요', en: 'Many are lived-in: keep quiet, and ask before photographing inside shops' } }
  ],
  places: [
    { name: { ko: '돈의문박물관마을', en: 'Donuimun museum village' }, region: 'capital', q: '돈의문박물관마을', note: { ko: '서울. 옛 골목·교실·음악다방을 재현한 무료 공간.', en: 'Seoul: recreated alleys, classrooms and a music room, free.' } },
    { name: { ko: '익선동 한옥거리', en: 'Ikseon-dong hanok street' }, region: 'capital', q: '익선동', note: { ko: '빈티지 한옥 골목과 작은 가게.', en: 'Vintage hanok alleys and small shops.' } },
    { name: { ko: '세운상가', en: 'Sewoon Plaza' }, region: 'capital', q: '세운상가', note: { ko: '1960년대 전자상가, 아날로그 기기.', en: 'A 1960s electronics arcade full of analogue machines.' } },
    { name: { ko: '서울풍물시장', en: 'Seoul Folk Flea Market' }, region: 'capital', q: '서울풍물시장', note: { ko: '골동품·LP·옛 생활용품.', en: 'Antiques, records, old household goods.' } },
    { name: { ko: '동묘벼룩시장', en: 'Dongmyo flea market' }, region: 'capital', q: '동묘벼룩시장', note: { ko: '구제 의류와 오래된 물건, 아침이 활기찹니다.', en: 'Second-hand clothes and old objects; best in the morning.' } },
    { name: { ko: '인천 개항장거리', en: 'Incheon open port street' }, region: 'capital', q: '인천 개항장거리', note: { ko: '근대 은행·일본식 건축·오래된 골목.', en: 'Modern banks, Japanese-era buildings, old lanes.' } },
    { name: { ko: '수도국산달동네박물관', en: 'Sudoguksan museum of housing' }, region: 'capital', q: '수도국산달동네박물관', note: { ko: '1960~70년대 달동네 생활상 재현.', en: 'Recreated 1960s–70s hillside life.' } },
    { name: { ko: '추억의 청춘뮤지엄', en: 'Youth nostalgia museum' }, region: 'capital', q: '추억의청춘뮤지엄', note: { ko: '양평. 옛 교복·교실·음악다방과 포토존.', en: 'Yangpyeong: uniforms, classrooms, a music room and photo zones.' } },
    { name: { ko: '한국근현대사박물관', en: 'Korean modern history museum' }, region: 'capital', q: '한국근현대사박물관', note: { ko: '파주. 1960~90년대 옛 상점과 거리.', en: 'Paju: shops and streets from the 1960s to 1990s.' } },
    { name: { ko: '동광극장', en: 'Donggwang cinema' }, region: 'capital', q: '동광극장', note: { ko: '1959년 개관한 단관 극장, 실제 영화 상영.', en: 'A single-screen cinema opened in 1959, still showing films.' } },
    { name: { ko: '철암탄광역사촌', en: 'Cheoram coal town' }, region: 'gangwon', q: '철암탄광역사촌', note: { ko: '태백. 광부들의 생활상이 남은 탄광촌.', en: 'Taebaek: a coal town with miners\u2019 houses intact.' } },
    { name: { ko: '판교 시간이 멈춘 마을', en: 'Pangyo frozen-in-time village' }, region: 'jeolla', q: '판교 시간이멈춘마을', note: { ko: '서천. 옛 극장·사진관·주조장 거리.', en: 'Seocheon: an old cinema, photo studio and brewery street.' } },
    { name: { ko: '규암마을 자온길', en: 'Gyugam Jaon-gil' }, region: 'jeolla', q: '규암마을', note: { ko: '부여. 담배 가게를 고친 책방과 공방, 한옥 숙소.', en: 'Buyeo: bookshops and workshops in old shops, with hanok stays.' } },
    { name: { ko: '의림지파크랜드', en: 'Uirimji Parkland' }, region: 'jeolla', q: '의림지파크랜드', note: { ko: '제천. 종이 티켓과 회전목마가 남은 옛 놀이공원.', en: 'Jecheon: paper tickets and a carousel in an old amusement park.' } },
    { name: { ko: '화본역', en: 'Hwabon Station' }, region: 'gyeongsang', q: '화본역', note: { ko: '군위. 1938년 간이역과 급수탑, 벚꽃길.', en: 'Gunwi: a 1938 country station, water tower and cherry road.' } },
    { name: { ko: '엄마아빠어렸을적에', en: 'When Mum and Dad Were Young' }, region: 'gyeongsang', q: '엄마아빠어렸을적에', note: { ko: '폐교를 고친 옛 교실·문방구·이발소.', en: 'A closed school remade as old classrooms, a stationer and a barber.' } },
    { name: { ko: '향촌문화관', en: 'Hyangchon cultural centre' }, region: 'gyeongsang', q: '향촌문화관', note: { ko: '대구. 1950년대 피란 시절의 거리와 문화.', en: 'Daegu: wartime streets and culture of the 1950s.' } },
    { name: { ko: '추억보물섬', en: 'Nostalgia treasure island' }, region: 'gyeongsang', q: '추억보물섬', note: { ko: '부산. 삐삐·워크맨·브라운관·오락실 게임.', en: 'Busan: pagers, Walkmans, CRT televisions and arcade games.' } },
    { name: { ko: '장생포고래문화마을', en: 'Jangsaengpo whale village' }, region: 'gyeongsang', q: '장생포고래문화마을', note: { ko: '울산. 1970년대 고래잡이 마을 재현.', en: 'Ulsan: a 1970s whaling village rebuilt.' } },
    { name: { ko: '합천영상테마파크', en: 'Hapcheon image theme park' }, region: 'gyeongsang', q: '합천영상테마파크', note: { ko: '경성과 1950~80년대 서울 거리 세트.', en: 'Sets of Gyeongseong and mid-century Seoul.' } },
    { name: { ko: '경암동 철길마을', en: 'Gyeongam-dong railway village' }, region: 'jeolla', q: '경암동철길마을', note: { ko: '군산. 집 사이 철길과 옛 간판, 교복 체험.', en: 'Gunsan: a railway between houses, old signs, uniform rental.' } },
    { name: { ko: '군산 시간여행마을', en: 'Gunsan time-travel village' }, region: 'jeolla', q: '군산 시간여행마을', note: { ko: '근대 가옥과 상점, 옛 사진관.', en: 'Modern-era houses, shops and a period photo studio.' } },
    { name: { ko: '전주난장', en: 'Jeonju Nanjang' }, region: 'jeolla', q: '전주난장', note: { ko: '옛 가정집·교실·상점을 모은 추억 테마관.', en: 'A nostalgia hall of old homes, classrooms and shops.' } },
    { name: { ko: '순천드라마촬영장', en: 'Suncheon drama set' }, region: 'jeolla', q: '순천드라마촬영장', note: { ko: '1960~80년대 읍내와 달동네 세트.', en: 'Country-town and hillside sets from the 1960s–80s.' } },
    { name: { ko: '담양 추억의 골목', en: 'Damyang memory alley' }, region: 'jeolla', q: '담양 추억의골목', note: { ko: '옛 극장·학교·만화방 재현.', en: 'An old cinema, school and comic room rebuilt.' } },
    { name: { ko: '부평역 지하상가', en: 'Bupyeong underground arcade' }, region: 'capital', q: '부평 지하상가', note: { ko: '인천. Y2K 감성의 상가와 패션.', en: 'Incheon: a Y2K arcade of shops and fashion.' } },
    { name: { ko: '아스카 게임박물관', en: 'Aska game museum' }, region: 'capital', q: '아스카게임박물관', note: { ko: '옛 오락실 게임기와 아케이드.', en: 'Old arcade machines and games.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍞', dish: { ko: '옛날식 빵 · 커피', en: 'Old-style bread · coffee' }, note: { ko: '군산은 오래된 빵집이 많은 항구 도시입니다.', en: 'Gunsan is a port town of old bakeries.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '짬뽕 · 짜장면', en: 'Spicy noodle soup · black bean noodles' }, note: { ko: '항구 도시의 중국 음식.', en: 'The Chinese-Korean food of a port.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍬', dish: { ko: '달고나 · 옛날 과자 · 아이스크림', en: 'Dalgona · old sweets · ice cream' }, note: { ko: '문방구 간식이 이 여행의 절반입니다.', en: 'Stationery-shop sweets are half the trip.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍲', dish: { ko: '국밥 · 해물칼국수', en: 'Rice soup · seafood noodles' }, note: { ko: '역 근처에서 따뜻하게.', en: 'Something warm near the station.' } }
  ],
  photos: [
    { file: 'th-retro', cap: { ko: '옛 거리의 건물', en: 'Buildings on an old street' } },
    { file: 'th-retro-p2', cap: { ko: '철길과 골목', en: 'A railway and its alleys' } }
  ],
  tip: { ko: '교복 대여는 오전이 한산합니다. 실제 주거지가 많으니 골목에서는 조용히 걷고, 상점 안은 양해를 구하고 찍으세요.', en: 'Rent the uniform in the morning. Many streets are lived in — walk quietly and ask before photographing inside shops.' }
},
/* ------------------------------------------------------- 19 일출·일몰 */
{
  id: 'sunrise', emoji: '🌅', tint: '#FFB59B',
  name: { ko: '일출 · 일몰 코스', en: 'Sunrise & sunset' },
  sub: { ko: '해가 뜨고 지는 시간에 맞춘 하루', en: 'A day timed to the sun' },
  tag: { ko: '동해 일출 · 서해 낙조', en: 'Sunrise in the east, sunset in the west' },
  intro: {
    ko: '일출·일몰 여행은 시각표가 일정표입니다. 해 뜨는 시각은 계절에 따라 두 시간 넘게 차이가 나므로, 날짜를 정한 뒤 기상청 안내로 시각을 확인하고 거꾸로 하루를 짜야 합니다. 여기서는 강릉 정동진 일출로 하루를 여는 코스를 잡았습니다. 동해는 수평선에서 해가 떠오르고, 서해는 갯벌 위로 내려앉습니다.',
    en: 'For a sunrise trip the timetable is the itinerary: sunrise moves by more than two hours across the year, so fix the date, check the time, then build the day backwards. This route opens with sunrise at Jeongdongjin near Gangneung. In the east the sun rises out of the horizon; in the west it sinks onto the tidal flats.'
  },
  seasons: [{ ko: '겨울 일출', en: 'Winter sunrise' }, { ko: '여름 일출', en: 'Summer sunrise' }, { ko: '사계절 일몰', en: 'Sunset all year' }],
  transport: { ko: 'KTX + 버스·택시', en: 'KTX + bus or taxi' },
  duration: { ko: '약 12시간', en: 'About 12 hours' },
  hub: {
    ko: '정동진역', en: 'Jeongdongjin Station', q: '정동진역',
    note: {
      ko: '강릉선 KTX가 서는 바닷가 역. 서울 청량리에서 2시간 안팎. 역에서 해변까지 걸어서 5분이라 일출 보기에 가장 편합니다.',
      en: 'A seaside station on the Gangneung KTX line, about two hours from Cheongnyangni; the beach is five minutes on foot.'
    }
  },
  course: {
    title: { ko: '정동진 일출에서 경포·안목까지', en: 'Jeongdongjin sunrise, then Gyeongpo and Anmok' },
    meta: { ko: '7곳 · 약 12시간 · 버스 3회', en: '7 stops · about 12 hours · 3 buses' },
    steps: [
      { phase: 'start', time: '05:30', name: { ko: '정동진역', en: 'Jeongdongjin Station' }, q: '정동진역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '일출 40분 전에 도착하도록 첫차를 잡습니다. 시각은 계절에 따라 다르니 기상청 안내로 확인하세요.', en: 'Take a train that lands forty minutes before sunrise; the time shifts with the season, so check it first.' } },
      { phase: 'morning', time: '05:45', name: { ko: '정동진 해변 · 모래시계공원', en: 'Jeongdongjin beach' }, q: '정동진해수욕장', move: { ko: '도보 약 5분', en: 'Walk, about 5 min' },
        desc: { ko: '수평선이 트인 모래사장. 파도가 조용한 날은 물 위에 해가 한 번 더 뜹니다.', en: 'Open horizon from the sand; on a calm day the sun rises twice.' },
        photo: 'th-sunrise' },
      { phase: 'morning', time: '06:30', name: { ko: '일출', en: 'Sunrise' }, q: '정동진', move: { ko: '해변', en: 'On the beach' },
        desc: { ko: '해가 다 오르면 사람들이 조용히 돌아섭니다. 그 10분이 이 코스의 전부입니다.', en: 'Once it is up, everyone turns away quietly — those ten minutes are the whole point.' } },
      { phase: 'morning', time: '07:10', name: { ko: '아침 국밥', en: 'Breakfast soup' }, q: '정동진', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '역 근처에서 뜨끈한 국물로 몸을 녹입니다. 이 시간에 문을 여는 집이 몇 곳 있습니다.', en: 'Something hot near the station; a few places open at this hour.' } },
      { phase: 'morning', time: '08:30', name: { ko: '경포호', en: 'Gyeongpo lake' }, q: '경포호', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
        desc: { ko: '호수와 바다가 나란히 있는 곳. 아침 빛에 둘레길이 조용합니다.', en: 'A lake running beside the sea; the loop is quiet in morning light.' },
        photo: 'th-sunrise-p2' },
      { phase: 'morning', time: '10:00', name: { ko: '안목해변', en: 'Anmok Beach' }, q: '안목해변', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
        desc: { ko: '바다를 창에 담은 커피거리. 일출을 본 뒤의 커피 한 잔은 이유가 다릅니다.', en: 'A coffee street with the sea in the window; after sunrise the cup means something else.' } },
      { phase: 'lunch', time: '11:30', name: { ko: '강릉중앙시장', en: 'Gangneung Jungang Market' }, q: '강릉중앙시장', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '점심과 간식을 시장에서. 닭강정과 감자옹심이가 이 동네 기본입니다.', en: 'Lunch and snacks at the market: fried chicken and potato dumpling soup.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '오죽헌', en: 'Ojukheon House' }, q: '오죽헌', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
        desc: { ko: '신사임당과 율곡의 집. 일찍 일어난 하루를 오후에 천천히 닫는 자리입니다.', en: 'The house of Shin Saimdang and Yulgok — a slow close to an early day.' } },
      { phase: 'return', time: '16:00', name: { ko: '강릉역', en: 'Gangneung Station' }, q: '강릉역', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
        desc: { ko: 'KTX로 귀가. 서해 일몰을 보고 싶다면 아래 목록에서 서해 쪽 거점을 골라 같은 방식으로 짜세요.', en: 'Home by KTX. For a west-coast sunset, pick a base from the list and plan the day the same way.' } }
    ]
  },
  conds: [
    { k: { ko: '시각', en: 'Timing' }, v: { ko: '일출·일몰 시각은 계절에 따라 2시간 이상 차이 — 기상청 안내 확인', en: 'Sunrise and sunset shift by more than two hours across the year' } },
    { k: { ko: '날씨', en: 'Weather' }, v: { ko: '구름·안개·미세먼지로 해가 안 보일 수 있음', en: 'Cloud, fog or dust can hide it entirely' } },
    { k: { ko: '안전', en: 'Safety' }, v: { ko: '갯벌·해안은 물때와 파도 확인, 산 정상은 통제 시간 확인', en: 'Check tides and surf on the coast, and closing times on peaks' } }
  ],
  places: [
    { name: { ko: '정동진해수욕장', en: 'Jeongdongjin Beach' }, region: 'gangwon', q: '정동진해수욕장', note: { ko: '동해 일출의 대표. 역에서 도보 5분.', en: 'The classic east-coast sunrise, five minutes from the station.' } },
    { name: { ko: '경포해변', en: 'Gyeongpo Beach' }, region: 'gangwon', q: '경포해변', note: { ko: '넓은 백사장과 수평선 일출.', en: 'Wide sand and an open horizon.' } },
    { name: { ko: '추암 촛대바위', en: 'Chuam rock formations' }, region: 'gangwon', q: '추암 촛대바위', note: { ko: '동해. 바위 사이로 해가 오릅니다.', en: 'Donghae: the sun rising between the rocks.' } },
    { name: { ko: '영금정', en: 'Yeonggeumjeong' }, region: 'gangwon', q: '영금정', note: { ko: '속초. 바위 위 정자에서 보는 해돋이.', en: 'Sokcho: sunrise from a pavilion on the rocks.' } },
    { name: { ko: '낙산사 의상대', en: 'Naksansa Uisangdae' }, region: 'gangwon', q: '의상대', note: { ko: '사찰과 동해가 함께 있는 일출.', en: 'A temple and the East Sea in one sunrise.' } },
    { name: { ko: '하조대', en: 'Hajodae' }, region: 'gangwon', q: '하조대', note: { ko: '양양. 기암절벽과 등대, 바다 전망.', en: 'Yangyang: cliffs, lighthouse and open sea.' } },
    { name: { ko: '남애항', en: 'Namae harbour' }, region: 'gangwon', q: '남애항', note: { ko: '빨간 등대와 어선, 수평선 일출.', en: 'A red lighthouse, boats and the horizon.' } },
    { name: { ko: '호미곶 해맞이광장', en: 'Homigot sunrise square' }, region: 'gyeongsang', q: '호미곶', note: { ko: '포항. 상생의 손 사이로 해가 오릅니다.', en: 'Pohang: the sun between the great hands.' } },
    { name: { ko: '간절곶', en: 'Ganjeolgot' }, region: 'gyeongsang', q: '간절곶', note: { ko: '울주. 육지에서 해가 가장 먼저 뜨는 곳 중 하나.', en: 'Ulju: among the first places on the mainland to see the sun.' } },
    { name: { ko: '문무대왕릉', en: 'Tomb of King Munmu' }, region: 'gyeongsang', q: '문무대왕릉', note: { ko: '경주. 바다 위 수중릉과 일출.', en: 'Gyeongju: a tomb in the sea at sunrise.' } },
    { name: { ko: '토함산', en: 'Tohamsan' }, region: 'gyeongsang', q: '토함산', note: { ko: '산 정상의 일출과 운해.', en: 'A summit sunrise above the cloud sea.' } },
    { name: { ko: '성산일출봉', en: 'Seongsan Ilchulbong' }, region: 'jeju', q: '성산일출봉', note: { ko: '제주 대표 해돋이. 정상까지 20분.', en: 'Jeju\u2019s signature sunrise; twenty minutes to the rim.' } },
    { name: { ko: '광치기해변', en: 'Gwangchigi Beach' }, region: 'jeju', q: '광치기해변', note: { ko: '물웅덩이에 성산과 해가 반영됩니다.', en: 'Seongsan and the sun reflected in the pools.' } },
    { name: { ko: '우도 검멀레', en: 'Udo Geommeolle' }, region: 'jeju', q: '우도 검멀레해변', note: { ko: '검은 모래와 절벽, 섬의 아침.', en: 'Black sand, cliffs and an island morning.' } },
    { name: { ko: '함덕·서우봉', en: 'Hamdeok & Seoubong' }, region: 'jeju', q: '서우봉', note: { ko: '푸른 바다와 오름 능선의 아침.', en: 'Turquoise water and a ridge in the morning.' } },
    { name: { ko: '섭지코지', en: 'Seopjikoji' }, region: 'jeju', q: '섭지코지', note: { ko: '등대와 해안 절벽의 일출.', en: 'A lighthouse and cliffs at sunrise.' } },
    { name: { ko: '장화리 낙조 전망대', en: 'Janghwa-ri sunset lookout' }, region: 'capital', q: '장화리 낙조전망대', note: { ko: '강화. 갯벌과 섬 사이로 지는 해.', en: 'Ganghwa: the sun going down between flats and islands.' } },
    { name: { ko: '동막해변', en: 'Dongmak Beach' }, region: 'capital', q: '동막해변', note: { ko: '강화. 넓은 갯벌과 서해 낙조.', en: 'Ganghwa: wide flats and a west-coast sunset.' } },
    { name: { ko: '오이도', en: 'Oido' }, region: 'capital', q: '오이도', note: { ko: '시흥. 빨간 등대와 노을, 전철로 접근.', en: 'Siheung: a red lighthouse at sunset, on the subway.' } },
    { name: { ko: '탄도항·누에섬', en: 'Tando harbour & Nueseom' }, region: 'capital', q: '탄도항', note: { ko: '안산. 풍력발전기와 바닷길. 물때 확인.', en: 'Ansan: turbines and a tidal path; check the tide.' } },
    { name: { ko: '구봉도 낙조전망대', en: 'Gubongdo sunset lookout' }, region: 'capital', q: '구봉도 낙조전망대', note: { ko: '안산. 바다 위 조형물 사이로 지는 해.', en: 'Ansan: sunset between sculptures over the water.' } },
    { name: { ko: '꽃지해수욕장', en: 'Ggotji Beach' }, region: 'jeolla', q: '꽃지해수욕장', note: { ko: '태안. 서해 3대 낙조, 할미·할아비바위.', en: 'Taean: one of the west coast\u2019s great sunsets.' } },
    { name: { ko: '왜목마을', en: 'Waemok village' }, region: 'jeolla', q: '왜목마을', note: { ko: '당진. 지형 따라 일출과 일몰을 모두.', en: 'Dangjin: by shape of the coast, both sunrise and sunset.' } },
    { name: { ko: '마량포구', en: 'Maryang harbour' }, region: 'jeolla', q: '마량포구', note: { ko: '서천. 해돋이와 해넘이를 함께 보는 포구.', en: 'Seocheon: a harbour that sees both sun-up and sun-down.' } },
    { name: { ko: '무창포해수욕장', en: 'Muchangpo Beach' }, region: 'jeolla', q: '무창포해수욕장', note: { ko: '보령. 바닷길과 석양, 물때 확인.', en: 'Boryeong: the parting sea road and sunset; check the tide.' } },
    { name: { ko: '간월암', en: 'Ganwolam' }, region: 'jeolla', q: '간월암', note: { ko: '서산. 물이 차면 섬이 되는 암자와 노을.', en: 'Seosan: a hermitage that becomes an island, at sunset.' } },
    { name: { ko: '채석강', en: 'Chaeseokgang' }, region: 'jeolla', q: '채석강', note: { ko: '부안. 퇴적암 절벽과 바다 위 석양.', en: 'Buan: layered cliffs and the sun on the water.' } },
    { name: { ko: '적벽강', en: 'Jeokbyeokgang' }, region: 'jeolla', q: '적벽강', note: { ko: '부안. 붉은 절벽과 노을.', en: 'Buan: red cliffs at sunset.' } },
    { name: { ko: '와온해변', en: 'Waon Beach' }, region: 'jeolla', q: '와온해변', note: { ko: '순천. S자 물길과 갯벌 노을.', en: 'Suncheon: an S-shaped channel and sunset on the flats.' } },
    { name: { ko: '순천만 용산전망대', en: 'Suncheon Bay lookout' }, region: 'jeolla', q: '순천만 용산전망대', note: { ko: '황금빛 갈대와 갯벌의 일몰.', en: 'Golden reeds and the bay at sunset.' } },
    { name: { ko: '세방낙조', en: 'Sebang sunset' }, region: 'jeolla', q: '세방낙조', note: { ko: '진도. 여러 섬 사이로 해가 내려앉습니다.', en: 'Jindo: the sun setting between islands.' } },
    { name: { ko: '땅끝마을 전망대', en: 'Ttangkkeut lookout' }, region: 'jeolla', q: '땅끝마을', note: { ko: '해남. 육지의 끝에서 보는 저녁.', en: 'Haenam: evening at the end of the land.' } },
    { name: { ko: '달아공원', en: 'Dara Park' }, region: 'gyeongsang', q: '달아공원', note: { ko: '통영. 다도해 낙조.', en: 'Tongyeong: sunset over the archipelago.' } },
    { name: { ko: '상주은모래비치', en: 'Sangju silver sand' }, region: 'gyeongsang', q: '상주은모래비치', note: { ko: '남해. 은빛 모래와 저녁 바다.', en: 'Namhae: silver sand and an evening sea.' } },
    { name: { ko: '다랭이마을', en: 'Darangyi village' }, region: 'gyeongsang', q: '다랭이마을', note: { ko: '남해. 계단식 논과 바다의 노을.', en: 'Namhae: terraced paddies and the sea at sunset.' } },
    { name: { ko: '실안해안도로', en: 'Silan coastal road' }, region: 'gyeongsang', q: '실안낙조', note: { ko: '사천. 노을 드라이브.', en: 'Sacheon: a sunset drive.' } },
    { name: { ko: '다대포해수욕장', en: 'Dadaepo Beach' }, region: 'gyeongsang', q: '다대포해수욕장', note: { ko: '부산 도심의 노을 명소.', en: 'Busan\u2019s city sunset.' } },
    { name: { ko: '황령산', en: 'Hwangnyeongsan' }, region: 'gyeongsang', q: '황령산봉수대', note: { ko: '도시 전체를 내려다보는 일몰과 야경.', en: 'Sunset and lights over the whole city.' } },
    { name: { ko: '협재해수욕장', en: 'Hyeopjae Beach' }, region: 'jeju', q: '협재해수욕장', note: { ko: '비양도와 에메랄드빛 바다의 노을.', en: 'Biyangdo and turquoise water at sunset.' } },
    { name: { ko: '신창풍차해안도로', en: 'Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '풍차와 붉은 하늘.', en: 'Turbines and a red sky.' } },
    { name: { ko: '수월봉', en: 'Suwolbong' }, region: 'jeju', q: '수월봉', note: { ko: '차귀도와 지질 절벽 위의 석양.', en: 'Sunset over Chagwido from a geological cliff.' } },
    { name: { ko: '송악산', en: 'Songaksan' }, region: 'jeju', q: '송악산', note: { ko: '산방산과 형제섬, 바다를 배경으로.', en: 'Sanbangsan, the twin islets and the sea.' } },
    { name: { ko: '노고단', en: 'Nogodan' }, region: 'jeolla', q: '지리산 노고단', note: { ko: '운해와 산 정상 일출.', en: 'A summit sunrise above the cloud sea.' } },
    { name: { ko: '설악산 울산바위', en: 'Ulsanbawi' }, region: 'gangwon', q: '울산바위', note: { ko: '기암과 일출, 은하수.', en: 'Rock, sunrise and a dark sky.' } },
    { name: { ko: '태백산 천제단', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산 천제단', note: { ko: '겨울 설경과 해돋이.', en: 'Snow and sunrise in winter.' } },
    { name: { ko: '치악산 비로봉', en: 'Chiaksan Birobong' }, region: 'gangwon', q: '치악산 비로봉', note: { ko: '산 정상 일출, 이른 출발 필요.', en: 'A summit sunrise; start early.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '해장국 · 국밥', en: 'Hangover soup · rice soup' }, note: { ko: '일출 뒤에 먹는 국물이 이 여행의 보상입니다.', en: 'The soup after sunrise is the reward.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '감자옹심이 · 짬뽕', en: 'Potato dumpling soup · spicy noodles' }, note: { ko: '강릉은 감자와 해물 요리.', en: 'Gangneung runs on potatoes and seafood.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍗', dish: { ko: '닭강정 · 커피', en: 'Fried chicken · coffee' }, note: { ko: '시장에서 닭강정, 바다 앞에서 커피.', en: 'Chicken from the market, coffee by the sea.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🐟', dish: { ko: '회 · 물회 · 해물탕', en: 'Sashimi · cold fish soup · seafood stew' }, note: { ko: '동해는 회, 서해는 조개구이.', en: 'Sashimi in the east, grilled shellfish in the west.' } }
  ],
  photos: [
    { file: 'th-sunrise', cap: { ko: '수평선 위로 오르는 해', en: 'The sun rising over the horizon' } },
    { file: 'th-sunrise-p2', cap: { ko: '일출 뒤의 물빛', en: 'The water after sunrise' } }
  ],
  tip: { ko: '일출 시각은 계절에 따라 두 시간 넘게 차이 납니다. 겨울은 7시 30분 전후, 여름은 5시 전후로 보고 하루를 거꾸로 짜세요.', en: 'Sunrise moves by more than two hours across the year — around 7:30 in winter, before 5 in summer. Build the day backwards from it.' }
},
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
/* ------------------------------------------------ 21 박물관·과학관 */
{
  id: 'museum', emoji: '🏛️', tint: '#C9D8F0',
  name: { ko: '박물관 · 과학관', en: 'Museums & science centres' },
  sub: { ko: '비가 와도 좋은 하루', en: 'A day that works in the rain' },
  tag: { ko: '역사 · 과학 · 자연사 · 미술', en: 'History, science, natural history, art' },
  intro: {
    ko: '박물관 여행은 날씨를 이기기 쉽고, 하루에 두세 곳이면 충분히 찹니다. 국립박물관은 상설전시가 대부분 무료라 부담도 적어요. 여기서는 서울역에서 시작해 고대사에서 근현대까지 한 줄로 이어 보는 하루를 잡았습니다. 아래에 스무 가지 세부 주제와 전국 전시·체험지를 정리했으니, 관심 있는 주제부터 골라 보세요.',
    en: 'A museum day beats the weather, and two or three places fill it. Permanent exhibitions at the national museums are mostly free. This route starts at Seoul Station and runs ancient history to modern Korea in one line; below are twenty subject areas and venues across the country.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '비 오는 날', en: 'Rainy days' }],
  transport: { ko: '지하철 + 도보', en: 'Subway + on foot' },
  duration: { ko: '약 8시간', en: 'About 8 hours' },
  hub: {
    ko: '서울역', en: 'Seoul Station', q: '서울역',
    note: {
      ko: 'KTX·공항철도·1·4호선. 짐은 역 물품보관함에 맡기고 4호선으로 이촌역까지 한 정거장이면 첫 박물관입니다.',
      en: 'KTX, the airport railroad and lines 1 and 4. Leave the bag in a locker; one stop on Line 4 to Ichon and you are at the first museum.'
    }
  },
  course: {
    title: { ko: '서울 역사 하루 — 고대사에서 근현대까지', en: 'A day of Korean history — ancient to modern' },
    meta: { ko: '5곳 · 약 8시간 · 지하철 3회', en: '5 stops · about 8 hours · 3 subway rides' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '4호선으로 이촌역까지. 박물관은 10시에 열고, 오전이 가장 조용합니다.', en: 'Line 4 to Ichon; the museum opens at ten and the morning is quietest.' } },
      { phase: 'morning', time: '10:00', name: { ko: '국립중앙박물관', en: 'National Museum of Korea' }, q: '국립중앙박물관', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '선사시대부터 근현대까지 한 건물에서. 두 시간으로는 다 못 보니 시대를 골라 집중하세요.', en: 'Prehistory to the present in one building; two hours will not cover it, so choose one period.' },
        photo: 'th-museum' },
      { phase: 'lunch', time: '12:20', name: { ko: '이촌동 점심', en: 'Lunch in Ichon' }, q: '이촌동', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '박물관 앞 골목에 식당이 많습니다. 12시 정각을 피하면 줄이 짧습니다.', en: 'Plenty of places by the museum; avoid the stroke of noon.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '전쟁기념관', en: 'War Memorial of Korea' }, q: '전쟁기념관', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '전쟁사를 다루는 큰 전시관과 야외 장비. 무거운 주제라 오후에 시간을 넉넉히 두세요.', en: 'Large galleries and outdoor equipment; the subject is heavy, so give it a full afternoon.' } },
      { phase: 'afternoon', time: '15:40', name: { ko: '대한민국역사박물관', en: 'National Museum of Korean Contemporary History' }, q: '대한민국역사박물관', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '광화문. 개항기부터 오늘까지의 사회사. 실내가 넓어 마지막 관람지로 좋습니다.', en: 'Gwanghwamun: social history from the open ports to today — a good last stop.' },
        photo: 'th-museum-p2' },
      { phase: 'evening', time: '17:30', name: { ko: '광화문 · 경복궁 담장', en: 'Gwanghwamun & the palace wall' },
        q: '광화문', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '박물관에서 본 것을 실제 자리에서 한 번 더. 해 질 무렵 담장길이 좋습니다.', en: 'One more look at the real place after the exhibits — the wall is best at dusk.' } },
      { phase: 'return', time: '18:30', name: { ko: '서울역', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '1호선으로 한 정거장, 또는 걸어서 20분. 저녁은 역 근처에서.', en: 'One stop on Line 1, or twenty minutes on foot; eat near the station.' } }
    ]
  },
  subs: {
    title: { ko: '박물관·과학관 스무 가지 주제', en: 'Twenty kinds of museum' },
    items: [
      { emoji: '🏺', name: { ko: '역사·고고학', en: 'History & archaeology' }, desc: { ko: '선사시대·고대국가·근현대사.', en: 'Prehistory, ancient states, modern history.' } },
      { emoji: '🏠', name: { ko: '민속·전통문화', en: 'Folk & tradition' }, desc: { ko: '의식주와 세시풍속, 민속놀이.', en: 'Daily life, seasonal customs, folk play.' } },
      { emoji: '🔬', name: { ko: '과학관', en: 'Science centres' }, desc: { ko: '물리·화학·생명과학·기술 체험.', en: 'Physics, chemistry, biology and technology.' } },
      { emoji: '🚀', name: { ko: '우주·천문', en: 'Space & astronomy' }, desc: { ko: '행성·별·천문대·천체투영관.', en: 'Planets, stars, observatories, planetariums.' } },
      { emoji: '🦕', name: { ko: '자연사·공룡', en: 'Natural history & dinosaurs' }, desc: { ko: '화석·광물·생물 진화.', en: 'Fossils, minerals, evolution.' } },
      { emoji: '🖼️', name: { ko: '미술관·예술', en: 'Art museums' }, desc: { ko: '회화·조각·현대미술.', en: 'Painting, sculpture, contemporary art.' } },
      { emoji: '📐', name: { ko: '건축·디자인', en: 'Architecture & design' }, desc: { ko: '건축물·공간·산업디자인.', en: 'Buildings, space and industrial design.' } },
      { emoji: '🚂', name: { ko: '교통·철도·자동차', en: 'Transport' }, desc: { ko: '기차·자동차·항공·선박.', en: 'Trains, cars, aircraft, ships.' } },
      { emoji: '✈️', name: { ko: '항공·우주항공', en: 'Aviation & aerospace' }, desc: { ko: '비행기와 조종 체험.', en: 'Aircraft and flight simulators.' } },
      { emoji: '🚢', name: { ko: '해양·선박', en: 'Maritime' }, desc: { ko: '바다·배·해양생태·항구.', en: 'Sea, ships, marine life and ports.' } },
      { emoji: '🌾', name: { ko: '농업·농촌', en: 'Agriculture' }, desc: { ko: '농기구·식량·농업기술.', en: 'Farm tools, food and farming technology.' } },
      { emoji: '🍲', name: { ko: '음식·식문화', en: 'Food culture' }, desc: { ko: '한식·발효·전통음식.', en: 'Korean food, fermentation, tradition.' } },
      { emoji: '🏺', name: { ko: '공예·도자기', en: 'Craft & ceramics' }, desc: { ko: '도자·목공·금속·섬유.', en: 'Ceramics, wood, metal, textiles.' } },
      { emoji: '🕊️', name: { ko: '독립운동·전쟁·평화', en: 'Independence & war' }, desc: { ko: '독립운동·전쟁·인권.', en: 'Independence, war, human rights.' } },
      { emoji: '💡', name: { ko: '미디어아트·디지털', en: 'Media art' }, desc: { ko: '몰입형 전시와 디지털 기술.', en: 'Immersive shows and digital technology.' } },
      { emoji: '🧒', name: { ko: '어린이 체험', en: 'For children' }, desc: { ko: '놀이·교육·직접 체험.', en: 'Play, learning, hands-on rooms.' } },
      { emoji: '🪨', name: { ko: '지질·광물·화석', en: 'Geology' }, desc: { ko: '암석·지층·화석.', en: 'Rocks, strata, fossils.' } },
      { emoji: '🌳', name: { ko: '생태·환경', en: 'Ecology & environment' }, desc: { ko: '생태계·기후·환경보호.', en: 'Ecosystems, climate, conservation.' } },
      { emoji: '🏘️', name: { ko: '지역 역사·향토', en: 'Local history' }, desc: { ko: '지역 인물·유물·문화유산.', en: 'Local figures, objects, heritage.' } },
      { emoji: '🎲', name: { ko: '이색·전문 테마', en: 'Unusual themes' }, desc: { ko: '특이한 수집품과 전문 주제.', en: 'Unusual collections and specialist subjects.' } }
    ]
  },
  conds: [
    { k: { ko: '관람료', en: 'Tickets' }, v: { ko: '국립박물관 상설전 무료가 많음, 특별전·체험은 유료', en: 'Permanent shows at national museums are often free; specials and workshops charge' } },
    { k: { ko: '휴관', en: 'Closing days' }, v: { ko: '대부분 월요일 휴관, 시설별 확인', en: 'Most close on Mondays — check each one' } },
    { k: { ko: '시간', en: 'Time' }, v: { ko: '큰 박물관은 2~3시간, 과학관 체험은 4시간 이상', en: 'Two to three hours for a big museum; four or more at a science centre' } }
  ],
  places: [
    { name: { ko: '국립중앙박물관', en: 'National Museum of Korea' }, region: 'capital', q: '국립중앙박물관', note: { ko: '서울 용산. 선사부터 근현대까지, 상설전 무료.', en: 'Yongsan: prehistory to the present, permanent shows free.' } },
    { name: { ko: '국립민속박물관', en: 'National Folk Museum' }, region: 'capital', q: '국립민속박물관', note: { ko: '경복궁 안. 의식주와 세시풍속.', en: 'Inside Gyeongbokgung: daily life and seasonal custom.' } },
    { name: { ko: '국립과천과학관', en: 'Gwacheon National Science Museum' }, region: 'capital', q: '국립과천과학관', note: { ko: '우주·항공·자연사·천문관. 하루가 걸립니다.', en: 'Space, aviation, natural history and a planetarium — a full day.' } },
    { name: { ko: '서울시립과학관', en: 'Seoul Science Center' }, region: 'capital', q: '서울시립과학관', note: { ko: '참여형 전시, 어린이와 입문자에게.', en: 'Hands-on exhibits for children and beginners.' } },
    { name: { ko: '전쟁기념관', en: 'War Memorial of Korea' }, region: 'capital', q: '전쟁기념관', note: { ko: '전쟁사와 야외 장비 전시.', en: 'War history with outdoor equipment.' } },
    { name: { ko: '국립현대미술관 서울', en: 'MMCA Seoul' }, region: 'capital', q: '국립현대미술관 서울', note: { ko: '현대미술과 미디어아트, 경복궁 옆.', en: 'Contemporary and media art beside Gyeongbokgung.' } },
    { name: { ko: '대한민국역사박물관', en: 'National Museum of Korean Contemporary History' }, region: 'capital', q: '대한민국역사박물관', note: { ko: '광화문. 개항기부터 오늘까지.', en: 'Gwanghwamun: from the open ports to today.' } },
    { name: { ko: '국립항공박물관', en: 'National Aviation Museum' }, region: 'capital', q: '국립항공박물관', note: { ko: '김포. 항공 역사와 조종 시뮬레이터.', en: 'Gimpo: aviation history and flight simulators.' } },
    { name: { ko: '국립농업박물관', en: 'National Agricultural Museum' }, region: 'capital', q: '국립농업박물관', note: { ko: '수원. 농기구·식량·농업기술과 식물원.', en: 'Suwon: tools, food, farming technology and a garden.' } },
    { name: { ko: '수원화성박물관', en: 'Suwon Hwaseong Museum' }, region: 'capital', q: '수원화성박물관', note: { ko: '정조와 화성의 도시·건축.', en: 'Jeongjo, the fortress and its architecture.' } },
    { name: { ko: '삼성이노베이션뮤지엄', en: 'Samsung Innovation Museum' }, region: 'capital', q: '삼성이노베이션뮤지엄', note: { ko: '수원. 반도체·디스플레이·전자산업사. 예약 확인.', en: 'Suwon: semiconductors, displays and electronics history; check booking.' } },
    { name: { ko: '경기도자박물관', en: 'Gyeonggi Ceramic Museum' }, region: 'capital', q: '경기도자박물관', note: { ko: '광주. 조선백자와 도자 체험.', en: 'Gwangju: Joseon white porcelain and hands-on ceramics.' } },
    { name: { ko: '한국민속촌', en: 'Korean Folk Village' }, region: 'capital', q: '한국민속촌', note: { ko: '용인. 전통가옥과 생활문화, 공연.', en: 'Yongin: traditional houses, daily life and performances.' } },
    { name: { ko: '국립인천해양박물관', en: 'National Maritime Museum Incheon' }, region: 'capital', q: '국립인천해양박물관', note: { ko: '해양 역사·항만·선박.', en: 'Maritime history, ports and ships.' } },
    { name: { ko: '국립중앙과학관', en: 'National Science Museum' }, region: 'jeolla', q: '국립중앙과학관', note: { ko: '대전. 자연사·과학기술·천체관.', en: 'Daejeon: natural history, technology and a planetarium.' } },
    { name: { ko: '독립기념관', en: 'Independence Hall of Korea' }, region: 'jeolla', q: '독립기념관', note: { ko: '천안. 독립운동사와 야외 조형물.', en: 'Cheonan: the independence movement, with outdoor monuments.' } },
    { name: { ko: '국립공주박물관', en: 'Gongju National Museum' }, region: 'jeolla', q: '국립공주박물관', note: { ko: '무령왕릉과 백제 왕실 문화.', en: 'The Muryeong royal tomb and Baekje court culture.' } },
    { name: { ko: '국립부여박물관', en: 'Buyeo National Museum' }, region: 'jeolla', q: '국립부여박물관', note: { ko: '백제금동대향로와 사비 백제.', en: 'The Baekje incense burner and Sabi-period Baekje.' } },
    { name: { ko: '한국조폐공사 화폐박물관', en: 'Currency Museum' }, region: 'jeolla', q: '화폐박물관', note: { ko: '대전. 화폐의 역사와 위조방지 기술.', en: 'Daejeon: the history of money and anti-counterfeiting.' } },
    { name: { ko: '국립청주박물관', en: 'Cheongju National Museum' }, region: 'jeolla', q: '국립청주박물관', note: { ko: '금속공예와 불교미술.', en: 'Metalwork and Buddhist art.' } },
    { name: { ko: '국립춘천박물관', en: 'Chuncheon National Museum' }, region: 'gangwon', q: '국립춘천박물관', note: { ko: '강원 역사와 불교미술.', en: 'Gangwon history and Buddhist art.' } },
    { name: { ko: '국립산악박물관', en: 'National Mountain Museum' }, region: 'gangwon', q: '국립산악박물관', note: { ko: '속초. 한국 등산사와 장비.', en: 'Sokcho: the history of Korean climbing and its gear.' } },
    { name: { ko: '태백석탄박물관', en: 'Taebaek Coal Museum' }, region: 'gangwon', q: '태백석탄박물관', note: { ko: '광산의 역사와 갱도 체험.', en: 'Mining history and a mine tunnel experience.' } },
    { name: { ko: '국립경주박물관', en: 'Gyeongju National Museum' }, region: 'gyeongsang', q: '국립경주박물관', note: { ko: '신라 금관과 성덕대왕신종.', en: 'Silla gold crowns and the Emille Bell.' } },
    { name: { ko: '국립대구과학관', en: 'Daegu National Science Museum' }, region: 'gyeongsang', q: '국립대구과학관', note: { ko: '자동차·로봇·어린이 체험.', en: 'Cars, robots and children\u2019s exhibits.' } },
    { name: { ko: '국립해양과학관', en: 'National Marine Science Museum' }, region: 'gyeongsang', q: '국립해양과학관', note: { ko: '울진. 해중전망대와 바닷속 생태.', en: 'Uljin: an underwater observatory and marine ecology.' } },
    { name: { ko: '국립등대박물관', en: 'National Lighthouse Museum' }, region: 'gyeongsang', q: '국립등대박물관', note: { ko: '포항. 등대와 항로표지 기술.', en: 'Pohang: lighthouses and navigation aids.' } },
    { name: { ko: '국립부산과학관', en: 'Busan National Science Museum' }, region: 'gyeongsang', q: '국립부산과학관', note: { ko: '자동차·항공우주·에너지.', en: 'Cars, aerospace and energy.' } },
    { name: { ko: '국립해양박물관', en: 'National Maritime Museum' }, region: 'gyeongsang', q: '국립해양박물관', note: { ko: '부산. 선박과 해양문화, 수족관.', en: 'Busan: ships, maritime culture and an aquarium.' } },
    { name: { ko: '국립김해박물관', en: 'Gimhae National Museum' }, region: 'gyeongsang', q: '국립김해박물관', note: { ko: '가야의 철기문화와 고분.', en: 'Gaya ironwork and tombs.' } },
    { name: { ko: '국립진주박물관', en: 'Jinju National Museum' }, region: 'gyeongsang', q: '국립진주박물관', note: { ko: '임진왜란과 동아시아 전쟁사.', en: 'The Imjin war and East Asian conflict.' } },
    { name: { ko: '국립광주과학관', en: 'Gwangju National Science Museum' }, region: 'jeolla', q: '국립광주과학관', note: { ko: '우주·에너지·생활과학.', en: 'Space, energy and everyday science.' } },
    { name: { ko: '국립광주박물관', en: 'Gwangju National Museum' }, region: 'jeolla', q: '국립광주박물관', note: { ko: '아시아 도자문화와 신안 해저 유물.', en: 'Asian ceramics and the Sinan shipwreck finds.' } },
    { name: { ko: '국립나주박물관', en: 'Naju National Museum' }, region: 'jeolla', q: '국립나주박물관', note: { ko: '마한·영산강 유역 고분문화.', en: 'Mahan and Yeongsan river tomb culture.' } },
    { name: { ko: '해남공룡박물관', en: 'Haenam Dinosaur Museum' }, region: 'jeolla', q: '해남공룡박물관', note: { ko: '공룡 화석과 발자국, 골격 전시.', en: 'Fossils, footprints and mounted skeletons.' } },
    { name: { ko: '고창고인돌박물관', en: 'Gochang Dolmen Museum' }, region: 'jeolla', q: '고창고인돌박물관', note: { ko: '청동기 고인돌 유적과 선사문화.', en: 'Bronze Age dolmens and prehistoric life.' } },
    { name: { ko: '국립제주박물관', en: 'Jeju National Museum' }, region: 'jeju', q: '국립제주박물관', note: { ko: '탐라 역사와 해양문화.', en: 'Tamna history and maritime culture.' } },
    { name: { ko: '제주민속자연사박물관', en: 'Jeju folklore & natural history museum' }, region: 'jeju', q: '제주민속자연사박물관', note: { ko: '화산섬의 지질과 생활문화.', en: 'The geology and life of a volcanic island.' } },
    { name: { ko: '제주항공우주박물관', en: 'Jeju Aerospace Museum' }, region: 'jeju', q: '제주항공우주박물관', note: { ko: '항공사와 우주과학, 비행 체험.', en: 'Aviation history, space science and flight experiences.' } },
    { name: { ko: '넥슨컴퓨터박물관', en: 'Nexon Computer Museum' }, region: 'jeju', q: '넥슨컴퓨터박물관', note: { ko: '옛 컴퓨터와 게임의 역사.', en: 'Old computers and the history of games.' } },
    { name: { ko: '뮤지엄김치간', en: 'Museum Kimchikan' }, region: 'capital', q: '뮤지엄김치간', note: { ko: '서울. 김치와 발효문화.', en: 'Seoul: kimchi and fermentation.' } },
    { name: { ko: '철도박물관', en: 'Railroad Museum' }, region: 'capital', q: '철도박물관', note: { ko: '의왕. 기차와 철도 역사, 야외 차량.', en: 'Uiwang: trains, railway history and outdoor rolling stock.' } },
    { name: { ko: '국립세계문자박물관', en: 'National Museum of World Writing' }, region: 'capital', q: '국립세계문자박물관', note: { ko: '인천 송도. 세계 문자와 문명.', en: 'Songdo: writing systems and civilisations.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥐', dish: { ko: '토스트 · 커피', en: 'Toast · coffee' }, note: { ko: '개관 시간에 맞춰 일찍 움직입니다.', en: 'Move early enough to be at the door when it opens.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍱', dish: { ko: '정식 · 덮밥 · 국수', en: 'Set meal · rice bowl · noodles' }, note: { ko: '박물관 앞 골목은 12시에 붐빕니다.', en: 'The alleys by the museum fill at noon.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '☕', dish: { ko: '커피 · 케이크', en: 'Coffee · cake' }, note: { ko: '관람 사이 한 시간을 쉬어 갑니다.', en: 'Take an hour between buildings.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍲', dish: { ko: '국밥 · 찌개 · 고기', en: 'Rice soup · stew · grilled meat' }, note: { ko: '하루에 많이 걸었으니 든든하게.', en: 'You have walked a lot; eat properly.' } }
  ],
  photos: [
    { file: 'th-museum', cap: { ko: '박물관의 전시실', en: 'A museum gallery' } },
    { file: 'th-museum-p2', cap: { ko: '전시장의 유물', en: 'Objects on display' } }
  ],
  tip: { ko: '국립박물관은 월요일 휴관이 많고 상설전은 무료입니다. 특별전은 예약이 필요한 경우가 있으니 홈페이지를 먼저 보세요.', en: 'National museums mostly close on Mondays and permanent shows are free; special exhibitions sometimes need booking.' }
},
/* ------------------------------------------------- 22 사계절 테마여행 */
{
  id: 'seasons', emoji: '🌸', tint: '#FFC6DA',
  name: { ko: '사계절 테마여행', en: 'Four seasons' },
  sub: { ko: '봄·여름·가을·겨울, 계절마다 다른 하루', en: 'A different day in each season' },
  tag: { ko: '꽃 · 바다 · 단풍 · 눈', en: 'Blossom, sea, leaves, snow' },
  intro: {
    ko: '계절은 여행지의 성격을 바꿉니다. 같은 산이라도 봄에는 철쭉, 가을에는 단풍, 겨울에는 눈꽃이 됩니다. 아래에서 계절을 고르면 그 계절의 세부 테마 스무 가지와 대표 여행지, 그리고 역·터미널에서 시작하는 당일 코스가 나옵니다. 꽃과 단풍, 얼음축제는 해마다 시기가 달라지니 떠나기 전에 공지를 확인하세요.',
    en: 'Season changes what a place is: the same mountain is azaleas in spring, maples in autumn and snow in winter. Choose a season below for its twenty sub-themes, the places to go, and a one-day course starting at a station or terminal. Blooming, peak foliage and ice festivals shift every year — check the notice before you go.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울', en: 'Winter' }],
  transport: { ko: 'KTX·기차 + 버스', en: 'KTX or train + bus' },
  duration: { ko: '계절별 8~12시간', en: '8–12 hours per season' },
  hub: {
    ko: '서울역', en: 'Seoul Station', q: '서울역',
    note: {
      ko: '사계절 코스는 각 계절의 대표 역·터미널에서 시작합니다. 아래 계절을 골라 출발지와 시간을 확인하세요. 서울에서는 KTX로 두 시간 안팎이면 대부분 닿습니다.',
      en: 'Each seasonal course starts at its own station or terminal — pick a season below to see the start and the times. Most are within about two hours of Seoul by KTX.'
    }
  },
  conds: [
    { k: { ko: '시기', en: 'Timing' }, v: { ko: '꽃·단풍·얼음은 해마다 2~3주 차이 — 개화·절정 공지 확인', en: 'Blooms, foliage and ice shift by two to three weeks a year' } },
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '공원·산 무료, 축제·케이블카·수목원은 유료', en: 'Parks and mountains free; festivals, cable cars and gardens charge' } },
    { k: { ko: '준비', en: 'Bring' }, v: { ko: '계절별 복장·신발, 물, 주말엔 주차보다 대중교통', en: 'Season-appropriate clothes and shoes, water; transit beats parking at weekends' } }
  ],
  seasons4: {
    title: { ko: '계절을 골라 보세요', en: 'Pick a season' },
    items: [
      {
        key: 'spring', emoji: '🌸',
        name: { ko: '봄 여행', en: 'Spring' }, months: { ko: '3~5월', en: 'March–May' },
        blurb: { ko: '꽃과 새싹, 정원과 봄나들이. 벚꽃·매화·산수유·유채가 차례로 피고, 남도에서는 봄나물과 주꾸미가 제철입니다.', en: 'Blossom and new green: cherry, plum, cornel and rapeseed in turn, with spring greens and webfoot octopus in the south.' },
        themes: [
          { ko: '벚꽃', en: 'Cherry blossom' }, { ko: '진달래·철쭉', en: 'Azalea' }, { ko: '유채꽃', en: 'Rapeseed' }, { ko: '튤립', en: 'Tulips' },
          { ko: '매화', en: 'Plum blossom' }, { ko: '산수유', en: 'Cornelian cherry' }, { ko: '목련', en: 'Magnolia' }, { ko: '복사꽃·배꽃', en: 'Peach & pear blossom' },
          { ko: '봄 야생화', en: 'Wildflowers' }, { ko: '봄 정원', en: 'Spring gardens' }, { ko: '봄 바다', en: 'Spring sea' }, { ko: '봄 섬', en: 'Spring islands' },
          { ko: '봄 산행', en: 'Spring hiking' }, { ko: '봄 트레킹', en: 'Spring trails' }, { ko: '봄 피크닉', en: 'Picnics' }, { ko: '봄 캠핑', en: 'Spring camping' },
          { ko: '봄 농촌 체험', en: 'Farm visits' }, { ko: '봄 먹거리', en: 'Spring food' }, { ko: '봄 사진', en: 'Spring photography' }, { ko: '봄 감성', en: 'Quiet spring corners' }
        ],
        places: [
          { name: { ko: '진해 여좌천', en: 'Jinhae Yeojwacheon' }, region: 'gyeongsang', q: '여좌천', note: { ko: '벚꽃 터널과 개천 산책. 봄 벚꽃축제의 대표 명소.', en: 'A tunnel of cherries over the stream — the classic blossom walk.' } },
          { name: { ko: '광양 매화마을', en: 'Gwangyang plum village' }, region: 'jeolla', q: '광양 매화마을', note: { ko: '섬진강을 배경으로 한 하얀 매화. 3월 중순.', en: 'White plum against the Seomjin river, mid-March.' } },
          { name: { ko: '구례 산수유마을', en: 'Gurye cornelian village' }, region: 'jeolla', q: '구례 산수유마을', note: { ko: '노란 산수유꽃 군락과 산촌 풍경. 3월.', en: 'Yellow cornel blossoms over a mountain village, March.' } },
          { name: { ko: '하동 십리벚꽃길', en: 'Hadong cherry road' }, region: 'gyeongsang', q: '하동 십리벚꽃길', note: { ko: '섬진강을 따라 이어지는 벚꽃 드라이브.', en: 'A cherry drive along the Seomjin.' } },
          { name: { ko: '경주 보문호', en: 'Gyeongju Bomun lake' }, region: 'gyeongsang', q: '보문호', note: { ko: '호수 둘레 벚꽃과 유적 여행을 함께.', en: 'Lakeside blossom with the Silla sites.' } },
          { name: { ko: '보성 녹차밭', en: 'Boseong tea fields' }, region: 'jeolla', q: '보성 녹차밭', note: { ko: '봄 신록의 차밭. 차 문화 체험과 함께.', en: 'Spring green tea terraces, with tea culture.' } },
          { name: { ko: '제주 섭지코지', en: 'Seopjikoji, Jeju' }, region: 'jeju', q: '섭지코지', note: { ko: '유채꽃과 푸른 바다, 봄 해안 드라이브.', en: 'Rapeseed and blue water on a spring drive.' } },
          { name: { ko: '태안 튤립꽃밭', en: 'Taean tulip fields' }, region: 'jeolla', q: '태안 세계튤립꽃박람회', note: { ko: '4월 튤립 정원. 행사 개최 여부 확인.', en: 'Tulip gardens in April; check whether the event runs.' } }
        ],
        course: {
          title: { ko: '진해 — 벚꽃터널 하루', en: 'Jinhae — a day under the cherry tunnel' },
          meta: { ko: '6곳 · 약 8시간 · 도보 5km', en: '6 stops · about 8 hours · 5 km on foot' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '진해역', en: 'Jinhae Station' }, q: '진해역', move: { ko: '출발', en: 'Start' },
              desc: { ko: '경전선 기차역. 축제 기간에는 열차가 증편되고, 역에서 여좌천까지 걸어서 20분입니다.', en: 'On the Gyeongjeon line; trains are added in festival week and the stream is twenty minutes on foot.' } },
            { phase: 'morning', time: '09:30', name: { ko: '여좌천 벚꽃터널', en: 'Yeojwacheon cherry tunnel' }, q: '여좌천', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
              desc: { ko: '개천 위로 벚나무가 터널을 만듭니다. 오전 10시 전이 사람이 가장 적습니다.', en: 'The cherries close over the stream; before ten is the quietest.' },
              photo: 'th-seasons' },
            { phase: 'morning', time: '11:00', name: { ko: '경화역 벚꽃길', en: 'Gyeonghwa Station cherry road' }, q: '경화역', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
              desc: { ko: '기차 선로 옆으로 벚나무가 이어지는 사진 명소. 열차 통과 시간을 확인하세요.', en: 'Cherries along the track — a famous photograph; check when a train passes.' } },
            { phase: 'lunch', time: '12:30', name: { ko: '진해 중앙시장', en: 'Jinhae central market' }, q: '진해 중앙시장', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '점심은 시장에서. 진해는 해물과 회, 군항제 기간의 거리 음식이 많습니다.', en: 'Lunch at the market: seafood, raw fish and festival street food.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '진해루 · 해양공원', en: 'Jinhaeru & marine park' }, q: '진해루', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
              desc: { ko: '호수와 바다를 잇는 공원. 벚꽃 아래에서 쉬기 좋습니다.', en: 'A park between lake and sea — a good place to sit under the blossom.' } },
            { phase: 'afternoon', time: '15:30', name: { ko: '안민고개', en: 'Anmin ridge' }, q: '안민고개', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '진해 시내와 바다를 내려다보는 고개. 벚꽃과 어우러진 전망이 좋습니다.', en: 'A ridge over town and sea, with blossom in the foreground.' } },
            { phase: 'return', time: '17:00', name: { ko: '진해역', en: 'Jinhae Station' }, q: '진해역', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '역으로 돌아와 기차. 축제 기간 막차는 일찍 매진될 수 있습니다.', en: 'Back to the station; festival-week trains sell out early.' } }
          ]
        }
      },
      {
        key: 'summer', emoji: '🌊',
        name: { ko: '여름 여행', en: 'Summer' }, months: { ko: '6~8월', en: 'June–August' },
        blurb: { ko: '물과 그늘. 해수욕장과 계곡, 폭포, 서핑과 래프팅, 연꽃과 수국, 그리고 더위를 피하는 숲길과 동굴입니다.', en: 'Water and shade: beaches, valleys, waterfalls, surfing and rafting, lotus and hydrangea, and forest paths or caves to escape the heat.' },
        themes: [
          { ko: '해수욕장', en: 'Beaches' }, { ko: '계곡', en: 'Valleys' }, { ko: '폭포', en: 'Waterfalls' }, { ko: '섬 여행', en: 'Islands' },
          { ko: '서핑', en: 'Surfing' }, { ko: '수상레포츠', en: 'Water sports' }, { ko: '래프팅', en: 'Rafting' }, { ko: '워터파크', en: 'Water parks' },
          { ko: '자연휴양림', en: 'Recreational forests' }, { ko: '계곡 캠핑', en: 'Valley camping' }, { ko: '여름 숲길', en: 'Forest walks' }, { ko: '여름 정원', en: 'Summer gardens' },
          { ko: '연꽃', en: 'Lotus' }, { ko: '수국', en: 'Hydrangea' }, { ko: '여름 꽃', en: 'Summer flowers' }, { ko: '여름 야간', en: 'Summer nights' },
          { ko: '여름 별빛', en: 'Summer stars' }, { ko: '여름 축제', en: 'Summer festivals' }, { ko: '여름 먹거리', en: 'Summer food' }, { ko: '여름 휴양', en: 'Summer rest' }
        ],
        places: [
          { name: { ko: '양양 서피비치', en: 'Surfyy Beach, Yangyang' }, region: 'gangwon', q: '서피비치', note: { ko: '서핑과 해변 액티비티. 강습과 보드 대여.', en: 'Surfing and beach activities, with lessons and board hire.' } },
          { name: { ko: '해운대해수욕장', en: 'Haeundae Beach' }, region: 'gyeongsang', q: '해운대해수욕장', note: { ko: '대표 여름 해변. 야경과 해양레포츠.', en: 'The big summer beach, with night views and water sports.' } },
          { name: { ko: '함덕해수욕장', en: 'Hamdeok Beach' }, region: 'jeju', q: '함덕해수욕장', note: { ko: '에메랄드빛 얕은 바다, 가족에게 좋습니다.', en: 'Shallow turquoise water, good for families.' } },
          { name: { ko: '문경 용추계곡', en: 'Mungyeong Yongchu valley' }, region: 'gyeongsang', q: '용추계곡', note: { ko: '숲과 계곡의 시원한 물. 여름 피서.', en: 'Cold water under forest — a summer retreat.' } },
          { name: { ko: '포천 백운계곡', en: 'Pocheon Baegun valley' }, region: 'capital', q: '백운계곡', note: { ko: '수도권에서 가까운 계곡 물놀이.', en: 'A valley close to Seoul for a water day.' } },
          { name: { ko: '정선 화암동굴', en: 'Jeongseon Hwaam cave' }, region: 'gangwon', q: '화암동굴', note: { ko: '연중 서늘한 동굴, 더위를 피하는 이색 여행.', en: 'A cave that stays cool — an unusual way to escape the heat.' } },
          { name: { ko: '담양 죽녹원', en: 'Juknokwon, Damyang' }, region: 'jeolla', q: '죽녹원', note: { ko: '대나무숲 그늘길, 여름이 가장 좋습니다.', en: 'Bamboo shade, at its best in summer.' } },
          { name: { ko: '무안 회산백련지', en: 'Muan white lotus pond' }, region: 'jeolla', q: '회산백련지', note: { ko: '7~8월 연꽃 군락. 아침에 피어 있습니다.', en: 'Lotus in July and August, open in the morning.' } },
          { name: { ko: '고성 상족암', en: 'Goseong Sangjokam' }, region: 'gyeongsang', q: '상족암', note: { ko: '해안 절경과 공룡 발자국, 해식동굴.', en: 'Sea cliffs, dinosaur footprints and a sea cave.' } },
          { name: { ko: '울릉도', en: 'Ulleungdo' }, region: 'gyeongsang', q: '울릉도', note: { ko: '맑은 바다와 해안도로, 섬 트레킹.', en: 'Clear water, a coastal road and island walking.' } },
          { name: { ko: '삼척 장호항', en: 'Samcheok Jangho' }, region: 'gangwon', q: '장호항', note: { ko: '맑은 항구, 스노클링과 해안 산책.', en: 'A clear harbour for snorkelling and a coast walk.' } },
          { name: { ko: '인제 내린천', en: 'Inje Naerincheon' }, region: 'gangwon', q: '내린천', note: { ko: '래프팅과 급류. 5~9월 예약제.', en: 'Rafting on white water, May to September, by booking.' } }
        ],
        course: {
          title: { ko: '양양 — 서핑과 동해 바다 하루', en: 'Yangyang — a day of surf and the East Sea' },
          meta: { ko: '6곳 · 약 9시간 · 버스 3회', en: '6 stops · about 9 hours · 3 buses' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '양양시외버스터미널', en: 'Yangyang bus terminal' }, q: '양양시외버스터미널', move: { ko: '출발', en: 'Start' },
              desc: { ko: '동서울에서 2시간 남짓. 터미널에서 해변까지 버스로 20분입니다.', en: 'A little over two hours from Dong Seoul; the beach is twenty minutes by bus.' } },
            { phase: 'morning', time: '09:40', name: { ko: '서피비치', en: 'Surfyy Beach' }, q: '서피비치', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
              desc: { ko: '오전 파도가 초보에게 좋습니다. 강습은 2시간, 보드와 슈트는 현장 대여가 됩니다.', en: 'Morning waves suit beginners; lessons run two hours and boards are hired on site.' },
              photo: 'th-seasons-p2' },
            { phase: 'lunch', time: '12:30', name: { ko: '해변 점심', en: 'Lunch at the beach' }, q: '양양', move: { ko: '도보', en: 'On foot' },
              desc: { ko: '바다를 보며 한 끼. 여름 양양은 해물라면과 냉면이 기본입니다.', en: 'A meal facing the water: seafood noodles and cold noodles.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '죽도해변', en: 'Jukdo Beach' }, q: '죽도해변', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '서핑으로 유명한 작은 해변. 물이 빠지면 넓은 모래밭이 드러납니다.', en: 'A small surf beach; at low tide a wide sand flat appears.' } },
            { phase: 'afternoon', time: '15:30', name: { ko: '하조대', en: 'Hajodae' }, q: '하조대', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '절벽 위 정자와 등대. 동해가 한눈에 들어옵니다.', en: 'A pavilion and lighthouse on the cliff, with the East Sea below.' } },
            { phase: 'evening', time: '17:00', name: { ko: '양양전통시장', en: 'Yangyang market' }, q: '양양전통시장', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
              desc: { ko: '저녁과 간식은 시장에서. 해산물과 옥수수가 여름의 맛입니다.', en: 'Dinner and snacks at the market — seafood and sweetcorn.' } },
            { phase: 'return', time: '18:30', name: { ko: '양양시외버스터미널', en: 'Yangyang bus terminal' }, q: '양양시외버스터미널', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
              desc: { ko: '터미널로 돌아와 버스. 여름 주말 막차는 미리 예매하세요.', en: 'Back at the terminal; book the weekend evening bus ahead.' } }
          ]
        }
      },
      {
        key: 'autumn', emoji: '🍁',
        name: { ko: '가을 여행', en: 'Autumn' }, months: { ko: '9~11월', en: 'September–November' },
        blurb: { ko: '색과 수확. 단풍과 억새, 은행나무, 갈대와 메밀꽃, 그리고 사과·감·고구마 수확과 황금 들녘입니다.', en: 'Colour and harvest: maples and silver grass, ginkgo, reeds and buckwheat, apples and persimmons, and golden rice fields.' },
        themes: [
          { ko: '단풍', en: 'Autumn leaves' }, { ko: '은행나무', en: 'Ginkgo' }, { ko: '억새', en: 'Silver grass' }, { ko: '갈대', en: 'Reeds' },
          { ko: '코스모스', en: 'Cosmos' }, { ko: '핑크뮬리', en: 'Pink muhly' }, { ko: '국화', en: 'Chrysanthemum' }, { ko: '구절초', en: 'Wild aster' },
          { ko: '메밀꽃', en: 'Buckwheat' }, { ko: '가을 정원', en: 'Autumn gardens' }, { ko: '가을 산행', en: 'Autumn hiking' }, { ko: '가을 트레킹', en: 'Autumn trails' },
          { ko: '가을 드라이브', en: 'Autumn drives' }, { ko: '농촌 수확', en: 'Harvest visits' }, { ko: '황금 들녘', en: 'Rice fields' }, { ko: '가을 캠핑', en: 'Autumn camping' },
          { ko: '가을 섬', en: 'Autumn islands' }, { ko: '가을 축제', en: 'Autumn festivals' }, { ko: '가을 먹거리', en: 'Autumn food' }, { ko: '가을 감성', en: 'Quiet autumn corners' }
        ],
        places: [
          { name: { ko: '설악산', en: 'Seoraksan' }, region: 'gangwon', q: '설악산', note: { ko: '10월 중순 단풍 절정. 케이블카와 계곡 코스.', en: 'Peak colour mid-October, by cable car or valley path.' } },
          { name: { ko: '내장산', en: 'Naejangsan' }, region: 'jeolla', q: '내장산', note: { ko: '단풍터널로 유명한 산. 11월 초가 절정.', en: 'The famous maple tunnel, peaking in early November.' } },
          { name: { ko: '화담숲', en: 'Hwadam forest' }, region: 'capital', q: '화담숲', note: { ko: '단풍과 정원, 모노레일. 예약제 운영 확인.', en: 'Maples, gardens and a monorail; check the booking system.' } },
          { name: { ko: '담양 메타세쿼이아길', en: 'Damyang metasequoia road' }, region: 'jeolla', q: '메타세쿼이아길', note: { ko: '가을 드라이브와 산책의 대표 길.', en: 'The classic autumn drive and walk.' } },
          { name: { ko: '정선 민둥산', en: 'Jeongseon Mindungsan' }, region: 'gangwon', q: '민둥산', note: { ko: '10월 억새 축제. 산 전체가 은빛이 됩니다.', en: 'Silver grass in October covering the whole mountain.' } },
          { name: { ko: '서울 하늘공원', en: 'Haneul Park, Seoul' }, region: 'capital', q: '하늘공원', note: { ko: '억새와 노을, 도심 속 가을 산책.', en: 'Silver grass and sunset, a city autumn walk.' } },
          { name: { ko: '순천만습지', en: 'Suncheon Bay wetland' }, region: 'jeolla', q: '순천만습지', note: { ko: '갈대 군락과 갯벌, 일몰.', en: 'Reeds, tidal flats and sunset.' } },
          { name: { ko: '제주 새별오름', en: 'Saebyeol oreum' }, region: 'jeju', q: '새별오름', note: { ko: '가을 억새와 오름 능선.', en: 'Autumn silver grass on a volcanic ridge.' } },
          { name: { ko: '고창 선운산', en: 'Gochang Seonunsan' }, region: 'jeolla', q: '선운산', note: { ko: '단풍과 선운사, 도솔천 계곡.', en: 'Maples, Seonunsa and the Dosol valley.' } },
          { name: { ko: '문광저수지', en: 'Mungwang reservoir' }, region: 'jeolla', q: '문광저수지', note: { ko: '노란 은행나무가 물에 비치는 가을길.', en: 'Ginkgoes doubled in the water.' } }
        ],
        course: {
          title: { ko: '정읍 — 내장산 단풍 하루', en: 'Jeongeup — a day of maples at Naejangsan' },
          meta: { ko: '6곳 · 약 9시간 · 버스 3회', en: '6 stops · about 9 hours · 3 buses' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '정읍역', en: 'Jeongeup Station' }, q: '정읍역', move: { ko: '출발', en: 'Start' },
              desc: { ko: 'KTX 호남선. 용산에서 1시간 40분. 역에서 내장산 입구까지 버스로 30분입니다.', en: 'On the KTX Honam line, a hundred minutes from Yongsan; the park entrance is thirty minutes by bus.' } },
            { phase: 'morning', time: '09:40', name: { ko: '내장산 입구', en: 'Naejangsan entrance' }, q: '내장산', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
              desc: { ko: '단풍철에는 입장 대기와 주차 대기가 깁니다. 오전 10시 전에 들어가야 합니다.', en: 'In peak season the queues are long — be inside before ten.' } },
            { phase: 'morning', time: '10:40', name: { ko: '내장사', en: 'Naejangsa Temple' }, q: '내장사', move: { ko: '도보 약 40분', en: 'Walk, about 40 min' },
              desc: { ko: '단풍터널을 지나 절에 닿습니다. 마당의 나무들이 가장 붉은 때입니다.', en: 'Through the maple tunnel to the temple, whose courtyard trees are at their reddest.' },
              photo: 'th-seasons' },
            { phase: 'lunch', time: '12:30', name: { ko: '산 아래 점심', en: 'Lunch below the mountain' }, q: '내장산', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
              desc: { ko: '정읍은 산채와 국밥, 한우로 알려져 있습니다. 단풍철 식당은 12시에 붐빕니다.', en: 'Jeongeup is known for mountain greens, rice soup and beef; eat early in leaf season.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '케이블카 · 전망대', en: 'Cable car & lookout' }, q: '내장산 케이블카', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
              desc: { ko: '케이블카로 올라가 능선을 봅니다. 표는 현장 발권이라 대기가 길면 산책로로 대신하세요.', en: 'Ride up for the ridge view; tickets are on site, so walk a trail instead if the queue is long.' } },
            { phase: 'afternoon', time: '15:40', name: { ko: '우화정', en: 'Uhwajeong pond' }, q: '내장산 우화정', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
              desc: { ko: '단풍이 물 위에 비치는 자리. 이 산의 대표 사진이 여기서 나옵니다.', en: 'Where the maples double in the pond — the photograph of this mountain.' } },
            { phase: 'return', time: '17:30', name: { ko: '정읍역', en: 'Jeongeup Station' }, q: '정읍역', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
              desc: { ko: '역으로 돌아와 KTX. 단풍철 막차는 미리 예매하세요.', en: 'Back to the station; book the peak-season train ahead.' } }
          ]
        }
      },
      {
        key: 'winter', emoji: '❄️',
        name: { ko: '겨울 여행', en: 'Winter' }, months: { ko: '12~2월', en: 'December–February' },
        blurb: { ko: '눈과 얼음, 그리고 따뜻한 쉼. 눈꽃 산행과 얼음낚시, 겨울 바다와 일출, 온천과 실내 여행입니다.', en: 'Snow and ice, and somewhere warm: snowy peaks, ice fishing, the winter sea and sunrise, hot springs and indoor days.' },
        themes: [
          { ko: '눈꽃', en: 'Snow scenery' }, { ko: '설산 산행', en: 'Snowy peaks' }, { ko: '눈꽃 트레킹', en: 'Snow trails' }, { ko: '스키', en: 'Skiing' },
          { ko: '눈썰매', en: 'Sledding' }, { ko: '얼음축제', en: 'Ice festivals' }, { ko: '얼음낚시', en: 'Ice fishing' }, { ko: '겨울 호수', en: 'Frozen lakes' },
          { ko: '겨울 폭포', en: 'Frozen falls' }, { ko: '겨울 바다', en: 'Winter sea' }, { ko: '일출', en: 'Sunrise' }, { ko: '겨울 섬', en: 'Winter islands' },
          { ko: '온천·스파', en: 'Hot springs' }, { ko: '찜질·휴식', en: 'Saunas' }, { ko: '겨울 캠핑', en: 'Winter camping' }, { ko: '겨울 별빛', en: 'Winter stars' },
          { ko: '빛축제', en: 'Light festivals' }, { ko: '크리스마스', en: 'Christmas' }, { ko: '겨울 먹거리', en: 'Winter food' }, { ko: '따뜻한 실내 여행', en: 'Indoor days' }
        ],
        places: [
          { name: { ko: '태백산', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산', note: { ko: '눈꽃과 주목 군락. 1~2월 설경이 절정.', en: 'Snow on yew trees, best in January and February.' } },
          { name: { ko: '덕유산 향적봉', en: 'Deogyusan Hyangjeokbong' }, region: 'jeolla', q: '덕유산', note: { ko: '곤돌라로 오르는 설경. 운행 확인.', en: 'A gondola up to the snow; check it is running.' } },
          { name: { ko: '대관령 양떼목장', en: 'Daegwallyeong sheep ranch' }, region: 'gangwon', q: '대관령양떼목장', note: { ko: '눈 덮인 초원과 목장 풍경.', en: 'Snow-covered pasture and ranch.' } },
          { name: { ko: '화천 산천어축제', en: 'Hwacheon ice festival' }, region: 'gangwon', q: '화천 산천어축제', note: { ko: '1월 얼음낚시. 개최 여부와 얼음 상태 확인.', en: 'Ice fishing in January; check the ice and event status.' } },
          { name: { ko: '평창송어축제', en: 'Pyeongchang trout festival' }, region: 'gangwon', q: '평창송어축제', note: { ko: '송어 얼음낚시와 눈썰매.', en: 'Trout fishing on ice and sledding.' } },
          { name: { ko: '철원 한탄강 주상절리길', en: 'Cheorwon Hantangang columnar path' }, region: 'gangwon', q: '한탄강 주상절리길', note: { ko: '협곡과 겨울 강. 결빙 통제 확인.', en: 'A gorge in winter; check closures for ice.' } },
          { name: { ko: '인제 원대리 자작나무숲', en: 'Wondae-ri birch forest' }, region: 'gangwon', q: '원대리 자작나무숲', note: { ko: '하얀 자작나무와 눈길. 입산 통제 확인.', en: 'White birch and snow; check access.' } },
          { name: { ko: '포천 산정호수', en: 'Sanjeong lake, Pocheon' }, region: 'capital', q: '산정호수', note: { ko: '겨울 호수와 산, 산책과 드라이브.', en: 'A frozen lake under the mountain.' } },
          { name: { ko: '포항 호미곶', en: 'Homigot, Pohang' }, region: 'gyeongsang', q: '호미곶', note: { ko: '새해 해돋이와 상생의 손.', en: 'New-year sunrise and the great hands.' } },
          { name: { ko: '정동진', en: 'Jeongdongjin' }, region: 'gangwon', q: '정동진', note: { ko: '겨울 바다 일출과 기차역.', en: 'Winter sunrise by the seaside station.' } },
          { name: { ko: '아침고요수목원 겨울빛축제', en: 'Morning Calm winter lights' }, region: 'capital', q: '아침고요수목원 오색별빛정원전', note: { ko: '겨울철 조명 정원, 계절 한정.', en: 'A lit winter garden, seasonal only.' } },
          { name: { ko: '여수 향일암', en: 'Hyangiram, Yeosu' }, region: 'jeolla', q: '향일암', note: { ko: '겨울 동해 일출과 절벽 사찰.', en: 'Winter sunrise at a cliffside hermitage.' } }
        ],
        course: {
          title: { ko: '태백 — 눈꽃 산행 하루', en: 'Taebaek — a day in the snow' },
          meta: { ko: '5곳 · 약 10시간 · 도보 8km', en: '5 stops · about 10 hours · 8 km on foot' },
          steps: [
            { phase: 'start', time: '08:30', name: { ko: '태백역', en: 'Taebaek Station' }, q: '태백역', move: { ko: '출발', en: 'Start' },
              desc: { ko: '태백선 기차역. 청량리에서 3시간 반. 역에서 당골 입구까지 버스로 20분입니다. 아이젠과 장갑을 챙기세요.', en: 'On the Taebaek line, three and a half hours from Cheongnyangni; Danggol is twenty minutes by bus. Bring spikes and gloves.' } },
            { phase: 'morning', time: '09:10', name: { ko: '당골광장', en: 'Danggol plaza' }, q: '태백산 당골', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
              desc: { ko: '탐방로 입구. 겨울에는 일몰이 이르니 하산 시간을 안내판에서 확인하세요.', en: 'The trailhead. Winter sunsets are early — note the descent time on the board.' } },
            { phase: 'morning', time: '10:00', name: { ko: '주목 군락', en: 'Yew grove' }, q: '태백산 주목군락', move: { ko: '도보 약 50분', en: 'Walk, about 50 min' },
              desc: { ko: '눈을 머금은 주목이 능선을 따라 이어집니다. 바람이 세면 체감이 크게 떨어집니다.', en: 'Snow-laden yews along the ridge; the wind chill is severe up here.' },
              photo: 'th-seasons-p2' },
            { phase: 'lunch', time: '12:00', name: { ko: '대피소 점심', en: 'Lunch at the shelter' }, q: '태백산 대피소', move: { ko: '도보 약 30분', en: 'Walk, about 30 min' },
              desc: { ko: '대피소에서 도시락. 취사는 안 되니 미리 싸 오세요.', en: 'A packed lunch at the shelter — no cooking, so bring it ready.' } },
            { phase: 'afternoon', time: '13:00', name: { ko: '천제단', en: 'Cheonjedan altar' }, q: '태백산 천제단', move: { ko: '도보 약 40분', en: 'Walk, about 40 min' },
              desc: { ko: '정상의 제단. 눈과 바람이 만드는 풍경이 이 산의 겨울입니다.', en: 'The summit altar — snow and wind are what this mountain is in winter.' } },
            { phase: 'return', time: '16:30', name: { ko: '태백역', en: 'Taebaek Station' }, q: '태백역', move: { ko: '도보·버스 약 60분', en: 'Walk and bus, about 60 min' },
              desc: { ko: '해가 지기 전에 내려와야 합니다. 역 근처에서 국밥으로 몸을 녹이세요.', en: 'Be down before dark, and warm up with rice soup near the station.' } }
          ]
        }
      }
    ]
  },
  places: [
    { name: { ko: '진해 여좌천', en: 'Jinhae Yeojwacheon' }, region: 'gyeongsang', q: '여좌천', note: { ko: '봄 벚꽃터널.', en: 'Spring cherry tunnel.' } },
    { name: { ko: '양양 서피비치', en: 'Surfyy Beach' }, region: 'gangwon', q: '서피비치', note: { ko: '여름 서핑과 바다.', en: 'Summer surf and sea.' } },
    { name: { ko: '내장산', en: 'Naejangsan' }, region: 'jeolla', q: '내장산', note: { ko: '가을 단풍터널.', en: 'Autumn maple tunnel.' } },
    { name: { ko: '태백산', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산', note: { ko: '겨울 눈꽃과 천제단.', en: 'Winter snow and the summit altar.' } }
  ],
  food: [
    { slot: { ko: '봄', en: 'Spring' }, emoji: '🌿', dish: { ko: '봄나물 · 주꾸미 · 도다리', en: 'Spring greens · webfoot octopus · flounder' }, note: { ko: '남도는 3~4월이 제철입니다.', en: 'In the south, March and April are the season.' } },
    { slot: { ko: '여름', en: 'Summer' }, emoji: '🍜', dish: { ko: '냉면 · 물회 · 옥수수', en: 'Cold noodles · cold fish soup · corn' }, note: { ko: '더울수록 차가운 것이 답입니다.', en: 'The hotter it gets, the colder the bowl.' } },
    { slot: { ko: '가을', en: 'Autumn' }, emoji: '🦐', dish: { ko: '대하 · 전어 · 버섯', en: 'Prawns · gizzard shad · mushrooms' }, note: { ko: '가을 바다의 맛은 구이와 회.', en: 'Autumn seafood is grilled or raw.' } },
    { slot: { ko: '겨울', en: 'Winter' }, emoji: '🦪', dish: { ko: '굴 · 대게 · 과메기', en: 'Oysters · snow crab · dried saury' }, note: { ko: '겨울 바다의 진한 맛.', en: 'The deep taste of the winter sea.' } }
  ],
  photos: [
    { file: 'th-seasons', cap: { ko: '계절의 색', en: 'The colour of the season' } },
    { file: 'th-seasons-p2', cap: { ko: '산과 물의 계절', en: 'A season of mountain and water' } }
  ],
  tip: { ko: '꽃과 단풍, 얼음축제는 해마다 2~3주씩 달라집니다. 떠나기 전에 공식 개화·절정 공지를 확인하고, 주말은 대중교통을 이용하세요.', en: 'Blooms, foliage and ice shift by two to three weeks each year — check the official notice before travelling, and take transit at weekends.' }
},
];

/* --------------------------------------------------------------------------
   UI strings for the theme layer (merged into the city UI above)
   -------------------------------------------------------------------------- */
Object.assign(UI.ko, {
  navCity: '도시별 여행',
  navTheme: '테마별 당일 코스',
  navOpen: '메뉴 열기',
  navClose: '메뉴 닫기',
  sideHint: '가고 싶은 곳을 누르면 하루 코스가 바로 열립니다.',
  sideCount: (n) => `${n}곳`,
  themeTitle: '무엇을 하러 갈까요?',
  themeSub: '산, 바다, 시장, 축제, 동물농장, 반려견, 일출, 사계절까지 — 스물두 가지 테마마다 대표 추천지와 당일 하루 코스가 있습니다.',
  themeCount: (n) => `테마 ${n}가지`,
  themeTag: '테마',
  heroThemeBtn: '테마 전체 보기',
  placesTitle: '대표 추천지',
  placesSub: '지역으로 골라 보세요. 위치와 조건을 함께 적었습니다.',
  placesCount: (n) => `${n}곳`,
  condsTitle: '핵심 조건',
  themeBack: '테마 목록',
  nextTheme: '다른 테마',
  nextCity: '다른 도시',
  regionAll: '전체',
  allThemes: '테마 전체',
  dayTheme: '테마 하루 코스'
});
Object.assign(UI.en, {
  navCity: 'Cities',
  navTheme: 'Day themes',
  navOpen: 'Open menu',
  navClose: 'Close menu',
  sideHint: 'Tap a place and its one-day course opens.',
  sideCount: (n) => `${n}`,
  themeTitle: 'What would you like to do?',
  themeSub: 'Mountains, sea, markets, festivals, animal farms, dogs, sunrise, all four seasons — twenty-two themes, each with places to go and a one-day course.',
  themeCount: (n) => `${n} themes`,
  themeTag: 'Theme',
  heroThemeBtn: 'See all themes',
  placesTitle: 'Places to go',
  placesSub: 'Filter by region; locations and conditions are noted for each.',
  placesCount: (n) => `${n} places`,
  condsTitle: 'Key conditions',
  themeBack: 'All themes',
  nextTheme: 'Another theme',
  nextCity: 'Another city',
  regionAll: 'All',
  allThemes: 'All themes',
  dayTheme: 'One-day theme'
});
