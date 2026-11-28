/* ------------------------------------------------ 03 놀이공원·액티비티 */
{
  id: 'play', emoji: '🎢', tint: '#FFC46B',
  name: { ko: '놀이공원 · 액티비티', ja: '遊園地・アクティビティ', zh: '游乐园·体验活动', en: 'Theme parks & action' },
  sub: { ko: '하루 종일 소리 지르는 날', ja: '一日じゅう叫ぶ日', zh: '整天尖叫的一天', en: 'A day of screaming, in a good way' },
  tag: { ko: '어트랙션 · 짚라인 · 래프팅', ja: 'アトラクション・ジップライン・ラフティング', zh: '游乐设施·滑索·漂流', en: 'Rides, ziplines, rafting' },
  intro: {
    ko: '놀이공원은 동선이 곧 만족도입니다. 개장 시간에 맞춰 들어가 가장 긴 줄부터 처리하고, 해가 기울면 정원과 퍼레이드로 넘어가는 순서가 좋아요. 여기서는 수인분당선으로 바로 닿는 에버랜드 하루를 기본으로 짰고, 전국의 놀이공원과 액티비티는 아래에 모았습니다.', ja: '遊園地は東線がまもなく満足度です。開場時間に合わせて一番長い行から処理し、太陽が傾くと庭園とパレードに進む順序がいいです。ここでは水仁盆唐線ですぐ届くエバーランドの一日を基本に編み、全国の遊園地とアクティビティは以下に集めました。', zh: '在游乐园里，人流是满意度的关键。我喜欢在开放时间进去的想法，先处理最长的队伍，然后在日落时前往花园和游行。在这里，我们计划在可乘水仁盆唐线直达的爱宝乐园度过一天，下面收集了全国各地的游乐园和活动。',
    en: 'In a theme park the route is the experience: arrive at opening, take the longest queue first, and move to the gardens and the parade as the light drops. This day runs at Everland, reachable on the Suin–Bundang line; other parks and outdoor activities are listed below.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울', ja: '冬', zh: '冬天', en: 'Winter' }],
  transport: { ko: '전철 + 셔틀버스', ja: '電車＋シャトルバス', zh: '地铁＋班车', en: 'Metro + shuttle' },
  duration: { ko: '약 11시간', ja: '約11時間', zh: '约11小时', en: 'About 11 hours' },
  hub: {
    ko: '전대·에버랜드역', ja: '戦隊・エバーランド駅', zh: '前台/爱宝乐园站', en: 'Jeondae–Everland Station', q: '전대 에버랜드역',
    note: {
      ko: '수인분당선 종점. 역에서 공원까지 무료 셔틀버스가 10~15분 간격으로 다닙니다. 개장 30분 전에 역에 도착하면 첫 차를 탈 수 있어요.', ja: 'スインブンダン線の終点。駅から公園への無料シャトルバスが10～15分間隔で運行しています。開場の30分前に駅に着いたら、最初の車に乗れます。', zh: '水仁盆唐线的终点站。从车站到公园的免费班车每10至15分钟一班。如果您在开门前30分钟到达车站，就可以赶上首班车。',
      en: 'The end of the Suin–Bundang line, with a free shuttle to the park every 10–15 minutes. Be at the station half an hour before opening to catch the first one.'
    }
  },
  course: {
    title: { ko: '에버랜드 — 개장부터 야간 퍼레이드까지', ja: 'エバーランド — オープンからナイトパレードまで', zh: '爱宝乐园 — 从开幕到夜间游行', en: 'Everland — opening bell to the night parade' },
    meta: { ko: '7곳 · 약 11시간 · 셔틀 2회', ja: '7か所・約11時間・シャトル2回', zh: '7个地点，约11小时，2趟班车', en: '7 stops · about 11 hours · 2 shuttles' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '전대·에버랜드역', ja: '戦隊・エバーランド駅', zh: '前台/爱宝乐园站', en: 'Jeondae–Everland Station' }, q: '전대 에버랜드역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역 앞 셔틀 정류장에서 공원으로. 표는 미리 예매해 두면 입구 줄을 한 번 줄일 수 있습니다.', ja: '駅前のシャトル停留所から公園へ。表はあらかじめ前売っておけば入口行を一度減らすことができます。', zh: '从车站前的班车站到公园。如果提前订票，可以缩短入口处的排队时间。', en: 'Take the shuttle from outside the station. Booking ahead removes one of the two queues at the gate.' } },
      { phase: 'morning', time: '10:00', name: { ko: '에버랜드 입장', ja: 'エバーランドへの入場', zh: '爱宝乐园入口', en: 'Everland gate' }, q: '에버랜드', move: { ko: '셔틀 약 10분', ja: 'シャトル約10分', zh: '班车约10分钟', en: 'Shuttle, about 10 min' },
        desc: { ko: '입장하자마자 가장 긴 줄의 어트랙션부터. 오전 11시 전이 대기 시간이 가장 짧습니다.', ja: '入場するとすぐに最長列のアトラクションから。午前11時の遷移待ち時間が最短です。', zh: '进入后，先从排队最长的景点开始。上午11点前等待时间最短。', en: 'Go straight for the longest queue. Waits are shortest before eleven.' },
        photo: 'th-play' },
      { phase: 'morning', time: '10:20', name: { ko: '티익스프레스 · 사파리', ja: 'ティーエクスプレス・サファリ', zh: 'T Express·Safari', en: 'T Express & Safari' }, q: '에버랜드', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '급강하 코스터와 사파리 버스 중 하나를 먼저. 멀미가 걱정되면 사파리부터 타세요.', ja: '急降下コースターとサファリバスのいずれかを先に。乗り物酔いが気になったらサファリから乗ってください。', zh: '首先，要么是急速过山车，要么是野生动物巴士。如果担心晕车，可以先去探险。', en: 'Take either the big coaster or the safari bus first — if motion sickness is a worry, start with the safari.' } },
      { phase: 'lunch', time: '12:00', name: { ko: '공원 안 점심', ja: '公園内ランチ', zh: '在公园吃午餐', en: 'Lunch in the park' }, q: '에버랜드', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '12시부터 모든 식당이 붐빕니다. 11시 40분쯤 들어가면 기다리지 않아요.', ja: '12時から全てのレストランが混んでいます。 11時40分ごろに入ると待ちません。', zh: '从12点开始，所有的餐馆都挤满了人。 11点40分左右进去的话，不用等。', en: 'Every counter fills at noon; go at twenty to twelve and walk straight in.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '판다월드 · 아마존', ja: 'パンダワールド・アマゾン', zh: '熊猫世界·亚马逊', en: 'Panda World & Amazon' }, q: '에버랜드 판다월드', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '실내 위주로 돌면 오후 더위를 피할 수 있습니다. 판다월드는 대기 줄이 길어 앱 예약을 확인하세요.', ja: '屋内中心に向かうと、午後の暑さを避けることができます。パンダワールドは待ち行列が長く、アプリの予約を確認してください。', zh: '您可以呆在室内以避免下午的炎热。熊猫世界排队等候的时间很长，因此请检查应用程序预订。', en: 'Indoor attractions are the way through the afternoon heat; check the app for Panda World timings.' } },
      { phase: 'afternoon', time: '15:30', name: { ko: '사계절 정원 · 장미원', ja: '四季の庭園・バラ園', zh: '四季花园·玫瑰园', en: 'Four Seasons Garden' }, q: '에버랜드 장미원', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '놀이기구를 잠깐 쉬고 꽃밭을 걷는 시간. 사진은 여기서 찍는 게 가장 예쁩니다.', ja: '乗り物を少し休んで花畑を歩く時間。写真はここで撮るのが最もかわいいです。', zh: '是时候从游乐设施中短暂休息并漫步穿过花田了。最漂亮的照片都是在这里拍的。', en: 'A pause from the rides among the flower beds — the best photographs of the day are here.' },
        photo: 'th-play-p2' },
      { phase: 'evening', time: '17:30', name: { ko: '저녁 · 야간 조명', ja: '夕方・夜間照明', zh: '傍晚/夜间照明', en: 'Dinner & evening lights' }, q: '에버랜드', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '해가 지면 공원 전체가 조명으로 바뀝니다. 퍼레이드 시간은 계절마다 달라 앱에서 확인하세요.', ja: '日が沈むと、公園全体が照明に変わります。パレード時間は季節によって異なり、アプリで確認してください。', zh: '当太阳落山时，整个公园都被照亮了。游行时间因季节而异，因此请查看应用程序。', en: 'After sunset the whole park turns to lights. Parade times change with the season — check the app.' } },
      { phase: 'return', time: '20:30', name: { ko: '전대·에버랜드역', ja: '戦隊・エバーランド駅', zh: '前台/爱宝乐园站', en: 'Jeondae–Everland Station' }, q: '전대 에버랜드역', move: { ko: '셔틀 약 15분', ja: 'シャトル約15分', zh: '班车约15分钟', en: 'Shuttle, about 15 min' },
        desc: { ko: '폐장 직후 셔틀은 만원입니다. 20분 일찍 나오면 앉아서 돌아옵니다.', ja: '閉場直後のシャトルは満員です。 20分早く出ると座って帰ります。', zh: '班车关闭后就满了。如果你提前20分钟到达，你可以坐下来再回来。', en: 'The first shuttle after closing is packed; leaving twenty minutes early gets you a seat.' } }
    ]
  },
  conds: [
    { k: { ko: '입장', ja: '入場', zh: '入场', en: 'Tickets' }, v: { ko: '정가보다 앱·제휴 할인이 큼, 날짜 지정권 권장', ja: '定価よりアプリ・提携割引が大きい、日付指定券推奨', zh: '应用程序和合作伙伴折扣高于正常价格，建议特定日期门票。', en: 'App and partner discounts beat the gate price; date-specific tickets are best' } },
    { k: { ko: '대기', ja: '待ち時間', zh: '等待', en: 'Queues' }, v: { ko: '주말 오후 60~90분, 평일 오전 20분 이내', ja: '週末午後60～90分、平日午前20分以内', zh: '周末60-90分钟，工作日20分钟以内', en: '60–90 min on weekend afternoons, under 20 on weekday mornings' } },
    { k: { ko: '준비', ja: '準備', zh: '准备', en: 'Bring' }, v: { ko: '우비, 보조배터리, 편한 신발 (우산은 어트랙션에서 제한)', ja: 'レインコート、補助バッテリー、快適な靴（傘はアトラクションで制限）', zh: '雨衣、备用电池、舒适的鞋子（雨伞仅限景点）', en: 'Raincoat, power bank, comfortable shoes — umbrellas are restricted on rides' } }
  ],
  places: [
    { name: { ko: '에버랜드', ja: 'エバーランド', zh: '爱宝乐园', en: 'Everland' }, region: 'capital', q: '에버랜드', note: { ko: '용인. 어트랙션·사파리·정원·퍼레이드가 한곳에. 셔틀은 전대·에버랜드역.', ja: '龍仁。アトラクション・サファリ・庭園・パレードが一箇所に。シャトルは戦隊・エバーランド駅。', zh: '龙仁。景点、探险、花园和游行都集中在一处。前往全台/爱宝乐园站的班车。', en: 'Yongin: rides, safari, gardens and parades in one park, shuttled from Jeondae–Everland station.' } },
    { name: { ko: '롯데월드 어드벤처', ja: 'ロッテワールドアドベンチャー', zh: '乐天世界冒险', en: 'Lotte World Adventure' }, region: 'capital', q: '롯데월드 어드벤처', note: { ko: '잠실. 실내 어드벤처와 야외 마법의성. 비 오는 날 대안 1순위.', ja: 'チャムシル。屋内アドベンチャーと屋外の魔法の城。雨の日の代替1位。', zh: '蚕室。室内冒险和室外魔法城堡。雨天的第一选择。', en: 'Jamsil: an indoor park plus an outdoor island — the first choice on a rainy day.' } },
    { name: { ko: '서울랜드', ja: 'ソウルランド', zh: '首尔乐园', en: 'Seoul Land' }, region: 'capital', q: '서울랜드', note: { ko: '과천. 규모는 작지만 대기가 짧고 서울대공원과 이어집니다.', ja: '果川。規模は小さいが大気が短く、ソウル大公園と続く。', zh: '果川。虽然面积小，但等待时间短，而且与首尔大公园相连。', en: 'Gwacheon: smaller, shorter queues, and next door to Seoul Grand Park.' } },
    { name: { ko: '경주월드', ja: '慶州ワールド', zh: '庆州世界', en: 'Gyeongju World' }, region: 'gyeongsang', q: '경주월드', note: { ko: '경주 보문단지 옆. 워터파크가 함께 있어 여름에 좋습니다.', ja: '慶州普門団地の隣。ウォーターパークが一緒にあり、夏に良いです。', zh: '庆州普门园区旁边。这里有水上乐园，非常适合夏天。', en: 'Beside Gyeongju\u2019s Bomun resort area, with a water park for summer.' } },
    { name: { ko: '이월드', ja: 'イワールド', zh: '电子世界', en: 'E-World' }, region: 'gyeongsang', q: '이월드', note: { ko: '대구 도심. 83타워 전망대까지 한 표로 이어집니다.', ja: '大邱市内中心部。 83タワー展望台まで1票につながります。', zh: '大邱市中心。一票通向83塔观景台。', en: 'Central Daegu, with the 83 Tower observatory on the same ticket.' } },
    { name: { ko: '광주패밀리랜드', ja: '光州ファミリーランド', zh: '光州家庭土地', en: 'Gwangju Family Land' }, region: 'jeolla', q: '광주패밀리랜드', note: { ko: '광주 북구. 가족 단위 어트랙션 중심으로 가격이 낮습니다.', ja: '広州北区。ファミリーユニットのアトラクションを中心に価格が低くなります。', zh: '光州北区。家庭景点的价格较低。', en: 'North Gwangju: family rides at low prices.' } },
    { name: { ko: '통영 스카이라인루지', ja: '統営スカイラインルージュ', zh: '统营天际斜坡滑车', en: 'Tongyeong Skyline Luge' }, region: 'gyeongsang', q: '스카이라인루지 통영', note: { ko: '바다를 보며 내려오는 루지. 케이블카와 함께 묶으면 좋습니다.', ja: '海を見ながら降りるルージュ。ケーブルカーと一緒に縛ると良いです。', zh: '一边看海一边滑行下去。和缆车结合起来还是不错的。', en: 'A luge run with the sea in view — pair it with the cable car.' } },
    { name: { ko: '강화 루지', ja: '江華ルージュ', zh: '江华斜坡滑车', en: 'Ganghwado Luge' }, region: 'capital', q: '강화루지', note: { ko: '서울에서 한 시간. 초보도 바로 탈 수 있는 완만한 코스.', ja: 'ソウルで1時間。初心者でもすぐに乗れる緩やかなコース。', zh: '距离首尔一小时。即使是初学者也能立即骑行的平缓路线。', en: 'An hour from Seoul, with gentle tracks beginners can take immediately.' } },
    { name: { ko: '인제 래프팅', ja: 'インジェラフティング', zh: '麟蹄漂流', en: 'Inje rafting' }, region: 'gangwon', q: '인제 내린천 래프팅', note: { ko: '내린천 급류. 5~9월 운영, 예약 필수입니다.', ja: '降りた川の急流。 5～9月運営、予約必須です。', zh: '奈仁川急流。运营时间为五月至九月；需要预约。', en: 'White water on the Naerincheon, May to September, booking essential.' } },
    { name: { ko: '양양 서핑', ja: '陽陽サーフィン', zh: '襄阳冲浪', en: 'Yangyang surfing' }, region: 'gangwon', q: '양양 죽도해변 서핑', note: { ko: '죽도·기사문 해변에서 강습과 장비 대여. 초보는 오전 파도가 좋습니다.', ja: '竹島・騎士門ビーチで講習と装備レンタル。初心者は午前の波が良いです。', zh: '在竹岛和Gisamun海滩进行课程和设备租赁。晨浪对于初学者来说很有好处。', en: 'Lessons and board hire at Jukdo and Gisamun beaches; mornings suit beginners.' } },
    { name: { ko: '가평 패러글라이딩', ja: '加平パラグライダー', zh: '加平滑翔伞', en: 'Gapyeong paragliding' }, region: 'capital', q: '가평 패러글라이딩', note: { ko: '북한강을 내려다보는 이착륙. 날씨에 따라 취소되니 당일 확인하세요.', ja: '北朝鮮川を見下ろす離着陸。天候によってキャンセルされますので、当日ご確認ください。', zh: '起飞和降落时俯瞰北汉河。根据天气情况，可能会取消，请务必确认当天的情况。', en: 'Launch above the Bukhan river; flights cancel in wind, so confirm on the day.' } },
    { name: { ko: '단양 패러글라이딩', ja: '丹陽パラグライダー', zh: '丹阳滑翔伞', en: 'Danyang paragliding' }, region: 'jeolla', q: '단양 패러글라이딩', note: { ko: '도담삼봉과 남한강을 한눈에. 비행 15~20분.', ja: 'ドダムサムボンと南漢江を一目で。飛行15～20分。', zh: '道潭三峰和南汉江一目了然。飞行15-20分钟。', en: 'Dodamsambong and the Namhan river below, in a 15–20 minute flight.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥪', dish: { ko: '토스트 · 김밥', ja: 'トースト・キンバップ', zh: '吐司·紫菜包饭', en: 'Toast · kimbap' }, note: { ko: '개장 전에 역 앞에서 간단히.', ja: '開場前に駅前で簡単に。', zh: '开放前在车站前短暂停留。', en: 'Something quick by the station before opening.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍗', dish: { ko: '닭강정 · 돈까스 · 떡볶이', ja: '鶏カンジョン・トンカツ・トッポッキ', zh: '江丁鸡、炸猪排、炒年糕', en: 'Fried chicken · cutlet · tteokbokki' }, note: { ko: '공원 안에서는 11시 40분이 가장 한산합니다.', ja: '公園内では11時40分が最も寒山です。', zh: '11点40分是公园最热闹的时间。', en: 'Inside the park, twenty to twelve is the quiet window.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍦', dish: { ko: '아이스크림 · 츄러스', ja: 'アイスクリーム・チュラス', zh: '冰淇淋和油条', en: 'Ice cream · churros' }, note: { ko: '줄 서는 동안 먹을 것 하나는 챙기세요.', ja: '並んでいる間に食べるものの一つを取ります。', zh: '排队等候的时候随便吃点东西。', en: 'One thing to eat while queueing goes a long way.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍜', dish: { ko: '라면 · 김치찌개 · 국밥', ja: 'ラーメン・キムチチゲ・クッパ', zh: '拉面、泡菜汤、汤饭', en: 'Noodles · kimchi stew · rice soup' }, note: { ko: '나오는 길에 역 근처에서 따뜻하게.', ja: '出る道の駅の近くで暖かく。', zh: '出门时在车站附近热身。', en: 'Something warm near the station on the way out.' } }
  ],
  photos: [
    { file: 'th-play', cap: { ko: '놀이공원의 어트랙션', ja: '遊園地のアトラクション', zh: '游乐园景点', en: 'Rides at the park' } },
    { file: 'th-play-p2', cap: { ko: '공원 안의 꽃밭', ja: '公園内の花畑', zh: '公园里的花田', en: 'Flower beds inside the park' } }
  ],
  tip: { ko: '여름에는 물놀이 시설과 우비를, 겨울에는 야간 조명과 방한복을 먼저 챙기세요.', ja: '夏には水遊び施設とレインコートを、冬には夜間照明と防寒服を先に手に入れてください。', zh: '夏天带上水上游乐设备和雨衣，冬天带上夜灯和冬装。', en: 'In summer bring a raincoat for the water rides; in winter, warm clothes for the night lights.' }
},
