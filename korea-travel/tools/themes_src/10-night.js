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
