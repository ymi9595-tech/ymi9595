/* ------------------------------------------------------- 05 계절 축제 */
{
  id: 'festival', emoji: '🎉', tint: '#FFB59B',
  name: { ko: '계절 축제', en: 'Seasonal festivals' },
  sub: { ko: '그 계절에만 열리는 하루', en: 'A day that exists only in its season' },
  tag: { ko: '축제 · 불빛 · 계절 한정', en: 'Festivals, lights, one season only' },
  intro: {
    ko: '축제는 날짜가 전부입니다. 해가 지고 불이 들어올 때가 하이라이트이므로, 오후에 도착해 천천히 둘러보다 어두워질 때 중심으로 들어가는 동선이 좋습니다. 여기서는 10월 진주 남강유등축제를 기본 코스로 잡았어요. 다른 축제는 아래 목록에서 시기를 보고 골라 같은 방식으로 하루를 짜면 됩니다.',
    en: 'For a festival the date is everything. The highlight comes when the lights go on, so arrive in the afternoon, wander, and move to the centre as it gets dark. This route follows the Jinju lantern festival in October; pick another from the list and plan the same shape of day.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울', en: 'Winter' }],
  transport: { ko: 'KTX + 도보', en: 'KTX + on foot' },
  duration: { ko: '약 7시간', en: 'About 7 hours' },
  hub: {
    ko: '진주역', en: 'Jinju Station', q: '진주역',
    note: {
      ko: 'KTX 경전선. 축제 기간에는 역에서 행사장까지 셔틀버스가 다니고, 도보로도 25분 거리입니다. 축제일은 도로가 통제되니 대중교통을 쓰세요.',
      en: 'On the KTX Gyeongjeon line. During the festival a shuttle runs from the station, and the site is a 25-minute walk; roads close on festival days, so use transit.'
    }
  },
  course: {
    title: { ko: '진주 남강유등축제 — 해가 지면 불이 켜진다', en: 'Jinju lantern festival — the lights come on at dusk' },
    meta: { ko: '6곳 · 약 7시간 · 셔틀 2회', en: '6 stops · about 7 hours · 2 shuttles' },
    steps: [
      { phase: 'start', time: '15:00', name: { ko: '진주역', en: 'Jinju Station' }, q: '진주역', move: { ko: '출발', en: 'Start' },
        desc: { ko: '축제 기간에는 역 앞 셔틀을 타고 행사장으로. 짐은 역 보관함에 맡기세요.', en: 'In festival week take the shuttle from outside the station; leave the bag in a locker.' } },
      { phase: 'afternoon', time: '15:40', name: { ko: '진주성 · 촉석루', en: 'Jinju Fortress & Chokseongnu' }, q: '진주성', move: { ko: '셔틀·도보 약 20분', en: 'Shuttle or walk, about 20 min' },
        desc: { ko: '남강을 굽어보는 누각. 축제 전에 조용히 올라가 보면 밤과는 다른 얼굴입니다.', en: 'A pavilion over the Namgang. Go up before the festival and you see a different face from the night one.' } },
      { phase: 'afternoon', time: '16:40', name: { ko: '남강 둔치 유등 전시', en: 'Namgang lantern display' }, q: '남강유등축제', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
        desc: { ko: '낮에는 유등의 뼈대와 색을 볼 수 있습니다. 해가 지기 전 둔치를 한 바퀴 돌아 두세요.', en: 'By daylight you can see how the lanterns are built; walk the whole bank once before dark.' },
        photo: 'th-festival' },
      { phase: 'evening', time: '18:00', name: { ko: '점등', en: 'Lights on' }, q: '남강유등축제', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '점등 순간이 이 축제의 전부입니다. 강 건너에서 보면 불빛이 물에 한 번 더 내려앉습니다.', en: 'The moment of lighting is the whole festival — from across the water every lantern appears twice.' },
        photo: 'th-festival-p2' },
      { phase: 'evening', time: '19:00', name: { ko: '축제장 저녁', en: 'Dinner at the festival' }, q: '진주 남강', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '부스에서 조금씩 사 먹는 게 축제의 저녁입니다. 진주는 비빔밥과 냉면으로 알려져 있어요.', en: 'Dinner is whatever you pick up stall by stall — Jinju is known for bibimbap and cold noodles.' } },
      { phase: 'evening', time: '20:30', name: { ko: '남강 야경 산책', en: 'Night walk by the Namgang' }, q: '진주 남강', move: { ko: '도보', en: 'On foot' },
        desc: { ko: '인파가 빠진 뒤 한 바퀴 더. 21시 전후가 사진 찍기 가장 좋습니다.', en: 'One more loop after the crowd thins — around nine is the best light for photographs.' } },
      { phase: 'return', time: '21:30', name: { ko: '진주역', en: 'Jinju Station' }, q: '진주역', move: { ko: '셔틀 약 15분', en: 'Shuttle, about 15 min' },
        desc: { ko: '막차 시간은 축제 기간에 연장되기도 합니다. 미리 확인해 두세요.', en: 'Last trains are sometimes extended during the festival — check ahead.' } }
    ]
  },
  conds: [
    { k: { ko: '시기', en: 'When' }, v: { ko: '축제마다 1~2주, 해마다 날짜가 바뀜', en: 'Each festival runs one to two weeks; dates move every year' } },
    { k: { ko: '요금', en: 'Tickets' }, v: { ko: '무료 축제가 많지만 일부는 입장료·체험비 별도', en: 'Many are free; some charge entry or per activity' } },
    { k: { ko: '교통', en: 'Traffic' }, v: { ko: '행사장 주변 도로 통제, 셔틀·전철 이용', en: 'Roads around the site close — take the shuttle or the train' } }
  ],
  places: [
    { name: { ko: '진주 남강유등축제', en: 'Jinju Namgang Lantern Festival' }, region: 'gyeongsang', q: '남강유등축제', note: { ko: '10월 초. 남강 위로 수만 개의 등이 뜹니다.', en: 'Early October, when tens of thousands of lanterns float on the Namgang.' } },
    { name: { ko: '화천 산천어축제', en: 'Hwacheon Sancheoneo Ice Festival' }, region: 'gangwon', q: '화천 산천어축제', note: { ko: '1월. 얼음 위 얼음낚시와 눈 조각. 방한복 필수.', en: 'January: ice fishing and snow sculpture; proper winter gear essential.' } },
    { name: { ko: '보령 머드축제', en: 'Boryeong Mud Festival' }, region: 'jeolla', q: '보령머드축제', note: { ko: '7월. 대천해수욕장에서 열리는 여름 축제.', en: 'July on Daecheon beach — the big summer one.' } },
    { name: { ko: '함평 나비축제', en: 'Hampyeong Butterfly Festival' }, region: 'jeolla', q: '함평나비축제', note: { ko: '4~5월. 나비와 봄꽃, 아이와 함께 좋습니다.', en: 'April–May: butterflies and spring flowers, good with children.' } },
    { name: { ko: '안동 국제탈춤축제', en: 'Andong Mask Dance Festival' }, region: 'gyeongsang', q: '안동국제탈춤축제', note: { ko: '9~10월. 하회탈과 세계 탈춤 공연.', en: 'September–October: Hahoe masks and mask dance from around the world.' } },
    { name: { ko: '강릉 단오제', en: 'Gangneung Danoje' }, region: 'gangwon', q: '강릉단오제', note: { ko: '5월 단오. 유네스코 인류무형유산, 관노가면극.', en: 'Around Dano in May: a UNESCO-listed shaman rite and mask play.' } },
    { name: { ko: '부산 불꽃축제', en: 'Busan Fireworks Festival' }, region: 'gyeongsang', q: '부산불꽃축제', note: { ko: '11월. 광안리 앞바다 위 불꽃. 숙소는 일찍 예약하세요.', en: 'November fireworks over Gwangalli — book a room early.' } },
    { name: { ko: '서울 빛초롱축제', en: 'Seoul Lantern Festival' }, region: 'capital', q: '서울빛초롱축제', note: { ko: '12월. 청계천을 따라 등이 이어집니다.', en: 'December: lanterns along the Cheonggyecheon.' } },
    { name: { ko: '진도 영등축제', en: 'Jindo Yeongdeung Festival' }, region: 'jeolla', q: '진도 영등축제', note: { ko: '2~3월. 바닷길이 열리는 때에 맞춘 축제.', en: 'February–March, timed to the parting of the sea road.' } },
    { name: { ko: '문경 찻사발축제', en: 'Mungyeong Tea Bowl Festival' }, region: 'gyeongsang', q: '문경찻사발축제', note: { ko: '4~5월. 도자기를 직접 만져 보고 사는 축제.', en: 'April–May: handle and buy pottery straight from the kilns.' } },
    { name: { ko: '청도 소싸움축제', en: 'Cheongdo Bullfighting Festival' }, region: 'gyeongsang', q: '청도소싸움축제', note: { ko: '3월. 국내 유일의 전통 소싸움.', en: 'March: the country\u2019s traditional bull fighting.' } },
    { name: { ko: '제주 들불축제', en: 'Jeju Fire Festival' }, region: 'jeju', q: '제주들불축제', note: { ko: '3월. 오름에 불을 놓는 봄맞이 축제.', en: 'March: hillsides set alight to welcome spring.' } }
  ],
  food: [
    { slot: { ko: '아침', en: 'Breakfast' }, emoji: '🍚', dish: { ko: '국밥 · 비빔밥', en: 'Rice soup · bibimbap' }, note: { ko: '축제장은 밤이 중심이라 낮은 간단히.', en: 'The festival peaks at night — keep the day light.' } },
    { slot: { ko: '점심', en: 'Lunch' }, emoji: '🥗', dish: { ko: '진주비빔밥 · 냉면', en: 'Jinju bibimbap · cold noodles' }, note: { ko: '진주는 비빔밥과 냉면으로 알려진 동네입니다.', en: 'Jinju is known for bibimbap and cold noodles.' } },
    { slot: { ko: '간식', en: 'Snack' }, emoji: '🍢', dish: { ko: '축제 부스 간식 · 붕어빵 · 츄러스', en: 'Festival stalls · bungeoppang · churros' }, note: { ko: '한 바퀴 돌며 조금씩 사 먹는 재미.', en: 'Buy a little from each lap.' } },
    { slot: { ko: '저녁', en: 'Dinner' }, emoji: '🔥', dish: { ko: '닭강정 · 불고기 · 어묵국', en: 'Fried chicken · bulgogi · fish-cake soup' }, note: { ko: '점등 뒤에는 줄이 길어져 미리 사 두세요.', en: 'Queues get long after the lights go on — buy early.' } }
  ],
  photos: [
    { file: 'th-festival', cap: { ko: '강 위에 걸린 축제 등', en: 'Festival lanterns on the water' } },
    { file: 'th-festival-p2', cap: { ko: '점등 뒤의 축제장', en: 'The festival after the lights come on' } }
  ],
  tip: { ko: '축제 날짜는 해마다 바뀝니다. 가기 전에 공식 안내로 확정 날짜를 확인하세요.', en: 'Festival dates move every year — confirm on the official notice before travelling.' }
},
