/* ----------------------------------------- 12 데이트·K-뷰티 체험 */
{
  id: 'beauty', emoji: '💕', tint: '#FFC6DA',
  name: { ko: '데이트 · K-뷰티 체험', en: 'Dates & K-beauty' },
  sub: { ko: '강남에서 한강까지, 둘이 걷는 하루', en: 'Gangnam to the Han, two of you walking' },
  tag: { ko: '퍼스널컬러 · 산책 · 야경', en: 'Colour analysis, walks, night views' },
  intro: {
    ko: '요즘 서울 데이트의 절반은 체험입니다. 퍼스널컬러 진단을 받고, 그 결과로 옷과 화장을 골라 보고, 저녁에는 한강으로 나가는 흐름이 자연스러워요. 진단은 60~90분 예약제라 하루의 중심에 두고 나머지를 그 주위에 배치했습니다.',
    en: 'Half of a Seoul date now is an experience: a personal-colour analysis, then clothes and make-up chosen from the result, then the river in the evening. The session runs 60–90 minutes and needs booking, so it sits in the middle of the day with everything else around it.'
  },
  seasons: [{ ko: '사계절', en: 'All year' }, { ko: '봄·가을 산책', en: 'Spring and autumn walks' }],
  transport: { ko: '지하철 + 도보', en: 'Subway + on foot' },
  duration: { ko: '약 10시간', en: 'About 10 hours' },
  hub: {
    ko: '강남역', en: 'Gangnam Station', q: '강남역',
    note: {
      ko: '2호선과 신분당선이 만나는 곳. 퍼스널컬러 스튜디오가 모여 있는 신논현·강남 일대의 중심입니다.',
      en: 'Where Line 2 meets the Shinbundang line, at the centre of the Sinnonhyeon and Gangnam studio district.'
    }
  },
  course: {
    title: { ko: '강남에서 한강까지 — 진단하고 걷고 노을 보기', en: 'Gangnam to the Han — analyse, walk, watch the sunset' },
    meta: { ko: '7곳 · 약 10시간 · 지하철 3회', en: '7 stops · about 10 hours · 3 subway rides' },
    steps: [
      { phase: 'start', time: '11:00', name: { ko: '강남역', en: 'Gangnam Station' }, q: '강남역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '11시에 만나 브런치부터. 진단 전에는 화장을 평소처럼 하고 오는 게 결과가 정확합니다.', en: 'Meet at eleven for brunch. Come with your usual make-up — the reading is more accurate that way.' } },
      { phase: 'morning', time: '11:40', name: { ko: '퍼스널컬러 진단', en: 'Personal-colour analysis' }, q: '강남 퍼스널컬러', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '조명 아래에서 천을 얼굴에 대 보며 톤을 찾습니다. 60~90분, 결과지를 받으면 옷 고르기가 쉬워집니다.', en: 'Drapes are held to your face under controlled light to find your tone; 60–90 minutes, and the report makes shopping simple.' },
        photo: 'th-beauty' },
      { phase: 'lunch', time: '13:30', name: { ko: '강남 점심', en: 'Lunch in Gangnam' }, q: '강남역', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '강남은 점심시간(12~13시)이 가장 붐빕니다. 13시 30분이면 한산해집니다.', en: 'Gangnam peaks at lunch (12–13:00); by half past one it empties.' } },
      { phase: 'afternoon', time: '14:30', name: { ko: '신사동 가로수길', en: 'Garosu-gil, Sinsa' }, q: '가로수길', move: { ko: '지하철 약 15분', en: 'Subway, about 15 min' },
        desc: { ko: '은행나무 그늘 아래 옷가게와 작은 전시가 이어집니다. 진단 결과로 색을 골라 보세요.', en: 'Clothes shops and small exhibitions under the ginkgoes — try the colours your report suggested.' } },
      { phase: 'afternoon', time: '16:00', name: { ko: '봉은사', en: 'Bongeunsa Temple' }, q: '봉은사', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '도심 한가운데의 절. 마당에 앉아 있으면 소음이 한 겹 걷힙니다.', en: 'A temple in the middle of the city; sit in the yard and one layer of noise lifts.' } },
      { phase: 'evening', time: '17:20', name: { ko: '코엑스 · 별마당', en: 'COEX & Starfield Library' }, q: '코엑스', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
        desc: { ko: '높은 책장 아래에서 사진 한 장. 주말 오후에는 사람이 많으니 평일 저녁이 좋습니다.', en: 'One photograph beneath the tall shelves; weekday evenings are quieter than weekend afternoons.' } },
      { phase: 'evening', time: '18:30', name: { ko: '한강 반포', en: 'Banpo on the Han' }, q: '반포한강공원', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '해 질 무렵 강바람과 다리 조명. 달빛무지개분수는 계절 운영이라 시간을 확인하세요.', en: 'River wind and bridge lights at dusk; the rainbow fountain is seasonal, so check its hours.' },
        photo: 'th-beauty-p2' },
      { phase: 'return', time: '20:30', name: { ko: '강남역', en: 'Gangnam Station' }, q: '강남역', move: { ko: '지하철 약 20분', en: 'Subway, about 20 min' },
        desc: { ko: '9호선에서 2호선으로 한 번. 저녁은 강남에서 마무리합니다.', en: 'Line 9 to Line 2, one change; finish with dinner in Gangnam.' } }
    ]
  },
  conds: [
    { k: { ko: '예약', en: 'Booking' }, v: { ko: '퍼스널컬러 1인 5~15만원 · 주말은 1~2주 전 마감', en: '₩50,000–150,000 per person; weekends book out one to two weeks ahead' } },
    { k: { ko: '진단 전', en: 'Before the session' }, v: { ko: '평소 화장·민낯 중 선택, 흰 옷이 결과 보기 편함', en: 'Come as you normally are; white clothing makes the draping easier to see' } },
    { k: { ko: '동반', en: 'Together' }, v: { ko: '커플·친구 동반 가능, 2인 패키지가 많은 편', en: 'Couples and friends are welcome; many studios offer two-person packages' } }
  ],
  places: [
    { name: { ko: '강남 퍼스널컬러 스튜디오', en: 'Gangnam colour studios' }, region: 'capital', q: '강남 퍼스널컬러', note: { ko: '신논현·강남역 일대에 집중. 예약제 60~90분.', en: 'Clustered around Sinnonhyeon and Gangnam; 60–90 minutes, by booking.' } },
    { name: { ko: '신사동 가로수길', en: 'Garosu-gil' }, region: 'capital', q: '가로수길', note: { ko: '산책과 쇼핑을 같이. 오후 햇빛이 좋습니다.', en: 'A walk and shopping in one; the afternoon light is best.' } },
    { name: { ko: '청담 뷰티 거리', en: 'Cheongdam beauty street' }, region: 'capital', q: '청담동', note: { ko: '향수·스킨케어 매장이 모인 거리.', en: 'A street of fragrance and skincare stores.' } },
    { name: { ko: '성수동', en: 'Seongsu-dong' }, region: 'capital', q: '성수동', note: { ko: '오래된 공장을 고친 공간과 작은 편집숍.', en: 'Old factories turned into studios and small shops.' } },
    { name: { ko: '익선동 한옥골목', en: 'Ikseon-dong' }, region: 'capital', q: '익선동', note: { ko: '한옥 사이 골목, 저녁 데이트에 좋습니다.', en: 'Alleys between hanok houses — good in the evening.' } },
    { name: { ko: '봉은사', en: 'Bongeunsa' }, region: 'capital', q: '봉은사', note: { ko: '도심 사찰. 템플스테이와 차담 프로그램도 있습니다.', en: 'A city temple with templestay and tea programmes.' } },
    { name: { ko: '코엑스 아쿠아리움', en: 'COEX Aquarium' }, region: 'capital', q: '코엑스 아쿠아리움', note: { ko: '실내 데이트 대안. 비 오는 날 좋습니다.', en: 'An indoor option for a rainy day.' } },
    { name: { ko: '서울스카이', en: 'Seoul Sky' }, region: 'capital', q: '롯데월드타워 서울스카이', note: { ko: '잠실 555m 전망대, 해 질 무렵이 좋습니다.', en: 'The 555 m observatory at Jamsil, best at sunset.' } },
    { name: { ko: '남산 케이블카', en: 'Namsan cable car' }, region: 'capital', q: '남산케이블카', note: { ko: '야경 데이트의 고전. 주말 저녁은 줄이 깁니다.', en: 'The classic night-view date; weekend queues are long.' } },
    { name: { ko: '한강 유람선', en: 'Han river cruise' }, region: 'capital', q: '한강유람선', note: { ko: '여의도·잠실 선착장에서 40~60분 코스.', en: 'Forty to sixty minutes from Yeouido or Jamsil piers.' } },
    { name: { ko: '부산 흰여울', en: 'Huinnyeoul, Busan' }, region: 'gyeongsang', q: '흰여울문화마을', note: { ko: '바다를 보는 절벽길, 해 질 무렵.', en: 'A cliff path over the water at dusk.' } },
    { name: { ko: '제주 카멜리아힐', en: 'Camellia Hill, Jeju' }, region: 'jeju', q: '카멜리아힐', note: { ko: '겨울 동백 정원. 사진 찍기 좋은 동선.', en: 'A winter camellia garden laid out for photographs.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🥐', dish: { ko: '브런치 · 커피', en: 'Brunch · coffee' }, note: { ko: '11시에 만나 브런치로 시작.', en: 'Meet at eleven over brunch.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🍜', dish: { ko: '냉면 · 파스타 · 덮밥', en: 'Cold noodles · pasta · rice bowl' }, note: { ko: '13시 30분 이후가 한산합니다.', en: 'After half past one it quiets down.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍰', dish: { ko: '케이크 · 마카롱 · 아이스크림', en: 'Cake · macarons · ice cream' }, note: { ko: '가로수길에서 하나씩 골라 보세요.', en: 'Pick one each on Garosu-gil.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🍷', dish: { ko: '이자카야 안주 · 파스타 · 고기', en: 'Izakaya plates · pasta · grilled meat' }, note: { ko: '한강 산책 뒤에는 강남에서 마무리.', en: 'After the river, finish in Gangnam.' } }
  ],
  photos: [
    { file: 'th-beauty', cap: { ko: '진단을 받는 자리', en: 'In the colour-analysis chair' } },
    { file: 'th-beauty-p2', cap: { ko: '해 질 무렵의 도심', en: 'The city at dusk' } }
  ],
  tip: { ko: '진단은 오전이 가장 정확합니다. 피곤하거나 술을 마신 다음 날은 피하세요.', en: 'Morning sessions read most accurately; avoid the day after drinking or a bad night.' }
},
