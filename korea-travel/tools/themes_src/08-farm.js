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
