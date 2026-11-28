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
