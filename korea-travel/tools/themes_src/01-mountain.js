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
