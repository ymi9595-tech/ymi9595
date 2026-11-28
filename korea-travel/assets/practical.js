/* ==========================================================================
   당장 가볼까? · practical.js — 하루 실용 정보 (예산 · 귀환)
   --------------------------------------------------------------------------
   이동 수단과 소요 시간은 data.js / themes.js 의 transport·duration·코스에서
   자동으로 만들고, 여기에는 코스마다 다른 두 가지만 적습니다.
     budget : 1인 예상 경비 (교통 + 입장·체험 + 식사·간식, 어림값)
     back   : 출발한 터미널·역으로 돌아오는 안내
   키는 'city:<id>' 와 'theme:<id>' 입니다. 가격은 2026년 11월 어림값이고,
   요금은 출발지·시기·할인에 따라 달라집니다.
   ========================================================================== */

const PRACTICAL = {
  /* ───────────────────────────── 도시 10곳 ───────────────────────────── */
  'city:seoul': {
    budget: {
      ko: '지하철·버스 6,000원 안팎 + 경복궁 입장 3,000원 + 시장 점심 1만원 + 커피·간식 8,000원 = 3만원 안팎',
      en: 'Around ₩30,000: subway and bus ₩6,000, palace entry ₩3,000, market lunch ₩10,000, coffee and snacks ₩8,000.'
    },
    back: {
      ko: '명동에서 지하철로 서울역까지 10분이면 돌아옵니다. 돌아가는 기차 막차는 코레일 앱에서 미리 확인하세요.',
      en: 'Myeongdong to Seoul Station is ten minutes by subway. Check the last train home in the Korail app before dinner.'
    }
  },
  'city:busan': {
    budget: {
      ko: 'KTX 서울↔부산 왕복 12만원 안팎(편도 6만원) + 시내 교통 5,000원 + 식사·간식 3만원 = 15만원 안팎. 무궁화·고속버스로 가면 절반입니다.',
      en: 'Around ₩150,000: KTX return about ₩120,000, city transport ₩5,000, meals ₩30,000. Slower trains or coaches cost about half.'
    },
    back: {
      ko: '코스는 부산역에서 끝납니다. 서울행 KTX 막차가 이른 편이라 저녁은 역 근처에서 마무리하는 게 안전합니다.',
      en: 'The day ends at Busan Station. The last KTX to Seoul leaves early enough that dinner is best kept near the station.'
    }
  },
  'city:jeju': {
    budget: {
      ko: '왕복 항공 8만~15만원(시즌 차이 큼) + 렌터카나 버스 2만~5만원 + 식사 3만원 = 13만~23만원',
      en: '₩130,000–230,000: return flight ₩80,000–150,000, car or bus ₩20,000–50,000, meals ₩30,000.'
    },
    back: {
      ko: '코스는 제주국제공항으로 돌아옵니다. 렌터카를 빌렸다면 반납 시간 1시간 전에 공항 쪽으로 출발하세요.',
      en: 'The route returns to Jeju airport. With a rental car, head back an hour before the return time.'
    }
  },
  'city:gyeongju': {
    budget: {
      ko: 'KTX 서울↔경주 왕복 10만원 안팎 + 시내버스 5,000원 + 입장료 1만원 + 식사 2만 5천원 = 14만원 안팎',
      en: 'Around ₩140,000: KTX return ₩100,000, city buses ₩5,000, entries ₩10,000, meals ₩25,000.'
    },
    back: {
      ko: '코스는 경주고속버스터미널에서 끝납니다. 서울행 막차 시간을 출발 전에 확인하고, 저녁은 터미널 근처에서 드세요.',
      en: 'The day ends at Gyeongju express terminal. Check the last coach to Seoul first and eat dinner nearby.'
    }
  },
  'city:gangneung': {
    budget: {
      ko: 'KTX 서울↔강릉 왕복 6만원 안팎 + 커피·식사 3만원 + 입장료 5,000원 = 10만원 안팎',
      en: 'Around ₩100,000: KTX return ₩60,000, coffee and meals ₩30,000, entries ₩5,000.'
    },
    back: {
      ko: '강릉역에서 KTX로 돌아옵니다. 서울까지 2시간 안팎이니 저녁 8시 전후에 역에 도착하면 됩니다.',
      en: 'KTX from Gangneung takes about two hours to Seoul — reach the station by eight in the evening.'
    }
  },
  'city:jeonju': {
    budget: {
      ko: 'KTX 서울↔전주 왕복 7만원 안팎 + 한옥마을 산책 무료 + 식사·간식 3만원 = 10만원 안팎',
      en: 'Around ₩100,000: KTX return ₩70,000, the hanok village is free to walk, meals ₩30,000.'
    },
    back: {
      ko: '전주고속버스터미널에서 서울로 돌아옵니다. 한옥마을에서 버스로 15분 거리라 저녁까지 보고 나와도 됩니다.',
      en: 'The coach back to Seoul leaves from Jeonju express terminal, fifteen minutes by bus from the hanok village.'
    }
  },
  'city:yeosu': {
    budget: {
      ko: 'KTX 서울↔여수 왕복 10만원 안팎 + 케이블카 1만 5천원 + 식사 3만원 = 14만원 안팎',
      en: 'Around ₩140,000: KTX return ₩100,000, cable car ₩15,000, meals ₩30,000.'
    },
    back: {
      ko: '여수엑스포역에서 KTX로 돌아옵니다. 서울까지 3시간 안팎이라 저녁은 역 근처에서 간단히 하는 편이 좋습니다.',
      en: 'KTX from Yeosu Expo takes about three hours; keep dinner simple near the station.'
    }
  },
  'city:sokcho': {
    budget: {
      ko: '서울↔속초 시외버스 왕복 4만원 안팎 + 식사·커피 3만원 = 7만원 안팎',
      en: 'Around ₩70,000: return coach from Seoul ₩40,000, meals and coffee ₩30,000.'
    },
    back: {
      ko: '속초고속버스터미널에서 서울로 돌아옵니다. 시장 저녁을 마치고 나와도 되도록 막차 시간을 먼저 확인하세요.',
      en: 'The coach back leaves from Sokcho express terminal — check the last departure before settling into a market dinner.'
    }
  },
  'city:damyang': {
    budget: {
      ko: '서울↔담양 버스 왕복 5만원 안팎(광주 경유) + 대나무숲 입장 3,000원 + 식사 2만 5천원 = 8만원 안팎',
      en: 'Around ₩80,000: return coach via Gwangju ₩50,000, bamboo grove ₩3,000, meals ₩25,000.'
    },
    back: {
      ko: '담양공용버스터미널에서 광주를 거쳐 서울로 돌아옵니다. 환승 시간이 있으니 저녁 8시 전후에는 터미널로 향하세요.',
      en: 'Back through Gwangju from Damyang bus terminal — aim for the terminal around eight to allow for the change.'
    }
  },
  'city:anseong': {
    budget: {
      ko: '수도권 전철·버스 왕복 6,000원 안팎 + 체험·입장 1만~2만원 + 식사 2만원 = 4만~5만원',
      en: '₩40,000–50,000: return subway and bus ₩6,000, experiences ₩10,000–20,000, meals ₩20,000.'
    },
    back: {
      ko: '안성종합버스터미널에서 서울로 오는 버스가 늦은 시간까지 있습니다. 전철로는 평택·천안을 거쳐 돌아올 수 있습니다.',
      en: 'Coaches run late from Anseong terminal; by rail, come back through Pyeongtaek or Cheonan.'
    }
  },

  /* ───────────────────────────── 테마 22가지 ───────────────────────────── */
  'theme:mountain': {
    budget: {
      ko: '지하철 왕복 3,000원 + 김밥·물 8,000원 + 하산 후 식사 1만 5천원 = 3만원 안팎',
      en: 'Around ₩30,000: subway ₩3,000, kimbap and water ₩8,000, a meal after the descent ₩15,000.'
    },
    back: {
      ko: '도봉산역으로 내려와 1·7호선으로 돌아갑니다. 해 지기 1시간 전에는 하산을 시작하세요.',
      en: 'Come down to Dobongsan Station for lines 1 and 7 — start descending an hour before sunset.'
    }
  },
  'theme:coast': {
    budget: {
      ko: '서울↔통영 버스 왕복 6만원 안팎 + 현지 버스·택시 2만원 + 식사 3만원 = 11만원 안팎',
      en: 'Around ₩110,000: coach return ₩60,000, local bus or taxi ₩20,000, meals ₩30,000.'
    },
    back: {
      ko: '통영종합버스터미널에서 서울로 돌아옵니다. 섬에 들어갔다면 배편 마지막 시간을 먼저 확인하세요.',
      en: 'Back from Tongyeong terminal — if you take a ferry, check the last sailing first.'
    }
  },
  'theme:play': {
    budget: {
      ko: '입장권 4만~6만원 + 식사 2만원 + 교통 1만원 = 7만~9만원',
      en: '₩70,000–90,000: park ticket ₩40,000–60,000, meals ₩20,000, transport ₩10,000.'
    },
    back: {
      ko: '전대·에버랜드역에서 용인 경전철로 돌아옵니다. 폐장 시간에는 셔틀과 전철이 붐비니 30분 일찍 움직이세요.',
      en: 'Back by the EverLine from Jeondae–Everland — leave half an hour before closing to skip the crush.'
    }
  },
  'theme:market': {
    budget: {
      ko: '지하철 3,000원 + 시장 음식 2만원 = 2만 5천원 안팎(사 갈 것은 따로)',
      en: 'Around ₩25,000: subway ₩3,000 and ₩20,000 of market food, shopping aside.'
    },
    back: {
      ko: '서울역으로 돌아와 지하철로 흩어집니다. 시장에서 산 것은 들고 다니기 무거우니 마지막에 사세요.',
      en: 'Return to Seoul Station and fan out by subway — buy heavy market things last.'
    }
  },
  'theme:festival': {
    budget: {
      ko: '교통 3만원 안팎 + 입장·체험 1만원 + 식사 2만원 = 6만원 안팎',
      en: 'Around ₩60,000: transport ₩30,000, entry or experience ₩10,000, meals ₩20,000.'
    },
    back: {
      ko: '진주역에서 서울로 돌아옵니다. 축제 기간에는 열차가 일찍 마감되니 표를 먼저 예매하세요.',
      en: 'Back from Jinju Station — during a festival trains sell out, so book the return first.'
    }
  },
  'theme:onsen': {
    budget: {
      ko: '기차·버스 왕복 2만원 안팎 + 온천 1만~1만 5천원 + 식사 2만원 = 6만원 안팎',
      en: 'Around ₩60,000: return train ₩20,000, bath ₩10,000–15,000, meals ₩20,000.'
    },
    back: {
      ko: '온양온천역에서 기차로 돌아옵니다. 온천 뒤에는 물을 한 병 더 마시고 천천히 움직이세요.',
      en: 'Back by train from Onyang Oncheon — drink a little more water after the bath and take the walk slowly.'
    }
  },
  'theme:hanok': {
    budget: {
      ko: '지하철·버스 5,000원 + 궁궐·고택 입장 5,000원 + 식사 2만원 = 3만 5천원 안팎',
      en: 'Around ₩35,000: subway and bus ₩5,000, palace and house entries ₩5,000, meals ₩20,000.'
    },
    back: {
      ko: '서울역으로 돌아옵니다. 궁궐과 고택은 해 지기 전에 닫으니 마지막 관람 시간을 확인하세요.',
      en: 'Back to Seoul Station — palaces and old houses close before dark, so check the last entry.'
    }
  },
  'theme:farm': {
    budget: {
      ko: '기차 왕복 4만원 안팎 + 체험 1만 5천원 + 식사 2만원 = 7만원 안팎',
      en: 'Around ₩70,000: return train ₩40,000, farm experience ₩15,000, meals ₩20,000.'
    },
    back: {
      ko: '평창역에서 KTX로 돌아옵니다. 체험 농장은 마감이 이른 곳이 많아 오후 4시 전에 마무리하세요.',
      en: 'KTX from Pyeongchang — many farms close early, so finish by four.'
    }
  },
  'theme:animal': {
    budget: {
      ko: '입장 1만~2만원 + 교통 2만원 + 식사 2만원 = 6만원 안팎(먹이 체험은 따로)',
      en: 'Around ₩60,000: entry ₩10,000–20,000, transport ₩20,000, meals ₩20,000; feed bags are extra.'
    },
    back: {
      ko: '진부역에서 KTX로 돌아옵니다. 동물농장은 입장 마감이 오후 5시 전후이니 서두르지 않게 일정을 잡으세요.',
      en: 'KTX from Jinbu — most farms stop admitting around five, so plan the afternoon backwards from that.'
    }
  },
  'theme:night': {
    budget: {
      ko: '교통 5만원 안팎(부산 KTX 기준) + 전망대·케이블카 1만 5천원 + 식사 2만 5천원 = 9만원 안팎',
      en: 'Around ₩90,000: transport ₩50,000, lookout or cable car ₩15,000, meals ₩25,000.'
    },
    back: {
      ko: '부산역에서 KTX로 돌아옵니다. 야경을 오래 보려면 막차가 이른 편이라 좌석을 미리 잡아 두세요.',
      en: 'KTX from Busan — the last train is early, so reserve a seat if you want a long night view.'
    }
  },
  'theme:hotel': {
    budget: {
      ko: '호텔 1박 10만~20만원 + 식사 4만원 = 15만~25만원(1박 기준, 교통 별도)',
      en: '₩150,000–250,000 for the night: hotel ₩100,000–200,000 plus ₩40,000 of meals, transport extra.'
    },
    back: {
      ko: '1박을 묶었다면 다음 날 오전에 부산역으로 돌아옵니다. 체크아웃 시간과 기차 시간을 함께 맞춰 두세요.',
      en: 'With a night booked, come back to Busan Station the next morning — line up checkout with the train.'
    }
  },
  'theme:beauty': {
    budget: {
      ko: '체험·시술 3만~8만원 + 교통 5,000원 + 식사 2만원 = 6만~11만원',
      en: '₩60,000–110,000: treatment ₩30,000–80,000, transport ₩5,000, meals ₩20,000.'
    },
    back: {
      ko: '강남역에서 지하철로 돌아갑니다. 시술을 받은 날은 사우나와 수영을 피하고, 예약 시간을 여유 있게 잡으세요.',
      en: 'Back by subway from Gangnam — skip sauna and swimming that day, and leave slack around appointments.'
    }
  },
  'theme:drama': {
    budget: {
      ko: '기차·버스 왕복 3만원 안팎 + 촬영장 입장 5,000원 + 식사 2만원 = 6만원 안팎',
      en: 'Around ₩60,000: return train ₩30,000, set entry ₩5,000, meals ₩20,000.'
    },
    back: {
      ko: '순천역에서 기차로 돌아옵니다. 촬영장은 해 질 무렵 닫으니 저녁은 역 근처에서 드세요.',
      en: 'Back by train from Suncheon — the sets close near sunset, so eat near the station.'
    }
  },
  'theme:dog': {
    budget: {
      ko: '교통 2만원 + 입장 1만원 + 식사 2만원 = 5만원 안팎(반려견 동반 요금 별도)',
      en: 'Around ₩50,000: transport ₩20,000, entry ₩10,000, meals ₩20,000; dog fees extra.'
    },
    back: {
      ko: '춘천역에서 ITX로 돌아옵니다. 반려견 동반 객실·카페는 미리 예약해야 하는 곳이 많으니 하루 전에 확인하세요.',
      en: 'ITX from Chuncheon — dog-friendly rooms and cafés usually need booking a day ahead.'
    }
  },
  'theme:healing': {
    budget: {
      ko: '교통 2만원 + 치유 프로그램 1만~3만원 + 식사 2만원 = 6만원 안팎',
      en: 'Around ₩60,000: transport ₩20,000, healing programme ₩10,000–30,000, meals ₩20,000.'
    },
    back: {
      ko: '풍기역에서 기차로 돌아옵니다. 프로그램은 끝나는 시간이 정해져 있으니 그에 맞춰 역으로 가세요.',
      en: 'Back by train from Punggi — programmes end at set times, so plan the station around them.'
    }
  },
  'theme:hidden': {
    budget: {
      ko: '교통 2만원 + 입장 5,000원 + 식사 2만원 = 5만원 안팎',
      en: 'Around ₩50,000: transport ₩20,000, entries ₩5,000, meals ₩20,000.'
    },
    back: {
      ko: '영월역에서 기차로 돌아옵니다. 버스가 드문 곳이라 마지막 버스 시간을 먼저 확인하세요.',
      en: 'Back by train from Yeongwol — buses are sparse, so check the last one first.'
    }
  },
  'theme:photo': {
    budget: {
      ko: '교통 1만원 + 스튜디오·입장 2만원 + 식사 2만원 = 5만원 안팎',
      en: 'Around ₩50,000: transport ₩10,000, studio or entry ₩20,000, meals ₩20,000.'
    },
    back: {
      ko: '의정부역에서 지하철로 돌아옵니다. 사진은 해 질 무렵 빛이 가장 좋으니 그 시간을 노려 잡으세요.',
      en: 'Back by subway from Uijeongbu — aim to shoot in the hour before sunset.'
    }
  },
  'theme:retro': {
    budget: {
      ko: '교통 2만원 + 입장·교복 대여 1만 5천원 + 식사 2만원 = 6만원 안팎',
      en: 'Around ₩60,000: transport ₩20,000, entry and uniform rental ₩15,000, meals ₩20,000.'
    },
    back: {
      ko: '군산역에서 기차로 돌아옵니다. 옛 거리는 저녁에 불이 꺼지는 곳이 많아 낮에 도는 편이 좋습니다.',
      en: 'Back by train from Gunsan — old streets go dark early, so walk them in daylight.'
    }
  },
  'theme:sunrise': {
    budget: {
      ko: '교통 3만원 + 식사 2만원 = 5만원 안팎(새벽 이동은 택시비가 따로 듭니다)',
      en: 'Around ₩50,000: transport ₩30,000, meals ₩20,000; a pre-dawn taxi is extra.'
    },
    back: {
      ko: '정동진역에서 기차로 돌아옵니다. 일출을 보고 아침 기차를 타면 오전 일정까지 지킬 수 있습니다.',
      en: 'Back by train from Jeongdongjin — the morning train after sunrise still leaves the rest of the day free.'
    }
  },
  'theme:camp': {
    budget: {
      ko: '캠핑장 3만~5만원 + 장비 대여 3만원 + 식비 2만원 = 8만~10만원',
      en: '₩80,000–100,000: campsite ₩30,000–50,000, gear rental ₩30,000, food ₩20,000.'
    },
    back: {
      ko: '가평역에서 경춘선으로 돌아옵니다. 장비를 정리하는 시간까지 넣어 마지막 전철 시간을 잡으세요.',
      en: 'Back on the Gyeongchun line from Gapyeong — count packing time before the last train.'
    }
  },
  'theme:museum': {
    budget: {
      ko: '지하철·버스 5,000원 + 입장 1만원 + 식사 2만원 = 3만 5천원 안팎',
      en: 'Around ₩35,000: subway and bus ₩5,000, entries ₩10,000, meals ₩20,000.'
    },
    back: {
      ko: '서울역으로 돌아옵니다. 박물관은 월요일 휴관이 많으니 가는 날의 요일을 확인하세요.',
      en: 'Back to Seoul Station — many museums close on Mondays, so check the weekday.'
    }
  },
  'theme:seasons': {
    budget: {
      ko: '교통 2만원 + 입장·체험 1만원 + 식사 2만원 = 5만원 안팎',
      en: 'Around ₩50,000: transport ₩20,000, entry or experience ₩10,000, meals ₩20,000.'
    },
    back: {
      ko: '서울역으로 돌아옵니다. 계절마다 마지막 코스가 달라지니 그날의 일몰 시간을 보고 저녁을 정하세요.',
      en: 'Back to Seoul Station — each season ends differently, so set dinner by that day’s sunset.'
    }
  }
};
