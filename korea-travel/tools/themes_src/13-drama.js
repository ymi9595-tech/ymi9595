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
