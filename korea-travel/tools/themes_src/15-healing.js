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
