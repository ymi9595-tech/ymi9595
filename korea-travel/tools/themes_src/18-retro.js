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
