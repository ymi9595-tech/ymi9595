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
