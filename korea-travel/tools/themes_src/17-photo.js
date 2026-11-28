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
