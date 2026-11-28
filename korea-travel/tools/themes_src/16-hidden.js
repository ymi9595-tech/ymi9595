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
