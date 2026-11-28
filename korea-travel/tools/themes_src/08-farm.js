/* ------------------------------------------------ 08 체험농장·수확 */
{
  id: 'farm', emoji: '🌾', tint: '#C9E4A5',
  name: { ko: '체험농장 · 수확', ja: '体験農場・収穫', zh: '体验农场·收获', en: 'Farm experiences & harvest' },
  sub: { ko: '손으로 거두는 하루', ja: '手で収穫する一日', zh: '用双手收获的一天', en: 'A day you pick yourself' },
  tag: { ko: '수확 · 농촌 체험 · 계절', ja: '収穫・農村体験・季節', zh: '收获·乡村体验·季节', en: 'Harvest, farm life, seasons' },
  intro: {
    ko: '체험농장은 품목마다 철이 다릅니다. 딸기는 겨울, 감자는 초여름, 사과와 배는 가을, 메밀꽃은 9월이에요. 여기서는 9월의 평창 봉평을 기본 코스로 잡았습니다. 메밀꽃밭과 감자밭, 물레방아가 한 동네에 있어 걷기만 해도 하루가 됩니다.', ja: '体験農場は作物ごとに旬が違います。イチゴは冬、ジャガイモは初夏、リンゴと梨は秋、そばの花は9月です。ここでは9月の平昌・蓬坪を基本コースにしました。そばの花畑とジャガイモ畑、水車が同じ集落にあり、歩くだけで一日になります。', zh: '体验农场的每种作物时令都不同。草莓在冬天，土豆在初夏，苹果和梨在秋天，荞麦花在九月。这里以九月的平昌蓬坪为基本路线：荞麦花田、土豆田和水车都在同一个村子里，光是走走就是一天。',
    en: 'Every crop has its own week: strawberries in winter, potatoes in early summer, apples and pears in autumn, buckwheat flowers in September. This route is Bongpyeong in Pyeongchang in September — buckwheat fields, potato plots and a watermill all in one village.'
  },
  seasons: [{ ko: '봄 딸기', ja: '春のイチゴ', zh: '春天的草莓', en: 'Spring strawberries' }, { ko: '여름 감자', ja: '夏のジャガイモ', zh: '夏季土豆', en: 'Summer potatoes' }, { ko: '가을 사과·메밀', ja: '秋りんご・そば', zh: '秋天的苹果和荞麦', en: 'Autumn apples & buckwheat' }],
  transport: { ko: 'KTX + 버스·택시', ja: 'KTX＋バス・タクシー', zh: 'KTX＋巴士·出租车', en: 'KTX + bus or taxi' },
  duration: { ko: '약 8시간', ja: '約8時間', zh: '约8小时', en: 'About 8 hours' },
  hub: {
    ko: '평창역', ja: '平昌駅', zh: '平昌站', en: 'Pyeongchang Station', q: '평창역',
    note: {
      ko: 'KTX 강릉선. 서울 청량리에서 1시간 20분. 역에서 봉평까지 버스로 25분, 택시로 15분입니다.', ja: 'KTX江陵線。ソウル清涼里から1時間20分。駅から奉平までバスで25分、タクシーで15分です。', zh: 'KTX江陵线。距离首尔清凉里1小时20分钟。从车站乘坐巴士25分钟或乘坐出租车15分钟即可到达蓬坪。',
      en: 'On the KTX Gangneung line, eighty minutes from Cheongnyangni. Bongpyeong is 25 minutes by bus or 15 by taxi.'
    }
  },
  course: {
    title: { ko: '봉평 — 메밀꽃밭에서 감자밭까지', ja: '蓬坪 — そばの花畑からジャガイモ畑まで', zh: '蓬坪——从荞麦花田到马铃薯田', en: 'Bongpyeong — buckwheat flowers to potato plots' },
    meta: { ko: '6곳 · 약 8시간 · 버스 2회', ja: '6か所・約8時間・バス2回', zh: '6个地点，约8小时，2辆巴士', en: '6 stops · about 8 hours · 2 buses' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '평창역', ja: '平昌駅', zh: '平昌站', en: 'Pyeongchang Station' }, q: '평창역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역 앞에서 봉평행 버스로. 수확 체험은 예약제가 많으니 도착 시간을 미리 알려 두세요.', ja: '駅前から奉平行きバスで。収穫体験は予約制が多いので到着時間を事前にお知らせください。', zh: '在车站前乘坐前往蓬坪的巴士。许多收获体验需要预约，因此请提前告知我们您的抵达时间。', en: 'A Bongpyeong bus leaves from outside; harvest visits are usually booked, so tell the farm your arrival time.' } },
      { phase: 'morning', time: '10:00', name: { ko: '이효석문화마을', ja: 'イ・ヒョソク文化村', zh: '李孝石文化村', en: 'Yi Hyo-seok culture village' }, q: '이효석문화마을', move: { ko: '버스 약 25분', ja: 'バス約25分', zh: '巴士约25分钟', en: 'Bus, about 25 min' },
        desc: { ko: '소설 「메밀꽃 필 무렵」의 배경. 생가와 오래된 담장길이 이어집니다.', ja: '小説「そば花筆頃」の背景。生家と古いフェンスが続きます。', zh: '小说《荞麦花开时》的背景。出生地和古老的栅栏路相连。', en: 'The setting of the story “When the Buckwheat Blooms” — the writer\u2019s house and old walled lanes.' },
        photo: 'th-farm' },
      { phase: 'morning', time: '11:00', name: { ko: '메밀꽃밭', ja: 'そばの花畑', zh: '荞麦花田', en: 'Buckwheat fields' }, q: '봉평 메밀꽃밭', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '9월 초순이 절정. 밭 사이로 난 길을 따라 걸으면 사진이 잘 나옵니다.', ja: '9月上旬が絶頂。畑の間に出た道を歩くと写真がよく出てきます。', zh: '高峰期是九月初。沿着田野间的小路行走，就能拍出好照片。', en: 'Peak in early September; the paths between the plots are the photographs.' },
        photo: 'th-farm-p2' },
      { phase: 'lunch', time: '12:30', name: { ko: '봉평 장터', ja: 'ボンピョンジャンター', zh: '蓬坪市场', en: 'Bongpyeong market' }, q: '봉평장', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '점심은 메밀국수와 메밀전. 장날(2·7)이면 시장 골목이 함께 열립니다.', ja: 'ランチはそばとそば展。長日（2・7）なら市場路地が一緒に開きます。', zh: '午餐是荞麦面和荞麦煎饼。集市日（2月7日），集市巷一起开放。', en: 'Buckwheat noodles and pancakes for lunch — and on market days (2nd and 7th) the stalls open too.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '감자밭 수확 체험', ja: 'じゃがいも畑の収穫体験', zh: '马铃薯田收获体验', en: 'Potato harvest' }, q: '봉평 감자밭 체험', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '6~7월에 감자, 9월에는 고구마와 옥수수로 바뀝니다. 장갑과 흙 묻어도 되는 옷을 입으세요.', ja: '6～7月にジャガイモ、9月にはサツマイモとトウモロコシに変わります。手袋と汚れのある服を着てください。', zh: '六月和七月改为土豆，九月改为红薯和玉米。戴上手套和可能会弄脏的衣服。', en: 'Potatoes in June–July, sweetcorn and sweet potato by September. Bring gloves and clothes that can take soil.' } },
      { phase: 'afternoon', time: '15:30', name: { ko: '물레방아 · 흥정천', ja: 'ムレバンア・フンジョンチョン', zh: '水磨坊·兴政川', en: 'Watermill & Heungjeong stream' }, q: '봉평 물레방아', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '계곡을 따라 난 산책로. 수확한 것을 씻고 쉬기 좋은 자리입니다.', ja: '谷に沿って私は遊歩道。収穫したものを洗って休むのに良い場所です。', zh: '沿着山谷的步行道。这是清洗收获物和休息的好地方。', en: 'A path along the stream — a good place to rinse the harvest and sit down.' } },
      { phase: 'return', time: '17:30', name: { ko: '평창역', ja: '平昌駅', zh: '平昌站', en: 'Pyeongchang Station' }, q: '평창역', move: { ko: '버스 약 25분', ja: 'バス約25分', zh: '巴士约25分钟', en: 'Bus, about 25 min' },
        desc: { ko: '역으로 돌아와 KTX. 수확한 것을 들고 가려면 비닐봉지와 쿨백을 챙기세요.', ja: '駅に戻ってKTX。収穫したものを持って行くには、ビニール袋とクールバックを取ります。', zh: '返回车站并乘坐 KTX。如果您想随身携带收获物，请带上塑料袋和冷藏袋。', en: 'Back to the station; bring a bag and a cool bag if you are carrying produce home.' } }
    ]
  },
  conds: [
    { k: { ko: '시기', ja: '時期', zh: '时期', en: 'Season' }, v: { ko: '품목별로 2~4주뿐 — 방문 전 수확 가능 여부 확인', ja: '品目別に2〜4週間のみ - 訪問前に収穫可能かどうかを確認', zh: '每件商品仅售2-4周 - 参观前请检查是否有收获', en: 'Each crop has only two to four weeks; confirm before booking' } },
    { k: { ko: '예약', ja: '予約', zh: '预约', en: 'Booking' }, v: { ko: '대부분 사전 예약, 인원 제한 있음', ja: 'ほとんど事前予約、人数制限あり', zh: '大多数预订都是提前预订的，但有人数限制。', en: 'Mostly by reservation, with limited places' } },
    { k: { ko: '복장', ja: '服装', zh: '服装', en: 'Clothes' }, v: { ko: '장갑·긴팔·흙 묻어도 되는 신발, 쿨백', ja: '手袋・長袖・汚れてもよい靴、クールバック', zh: '手套、长袖、容易弄脏的鞋子、凉爽的包', en: 'Gloves, long sleeves, shoes that can get muddy, a cool bag' } }
  ],
  places: [
    { name: { ko: '봉평 메밀꽃밭', ja: 'ボンピョソバの花畑', zh: '蓬坪荞麦花田', en: 'Bongpyeong buckwheat fields' }, region: 'gangwon', q: '봉평 메밀꽃밭', note: { ko: '9월 초 절정. 평창역에서 버스 25분.', ja: '9月上旬のピーク。平昌駅からバスで25分。', zh: '九月初达到高峰。从平昌站乘坐巴士25分钟。', en: 'Peak in early September, 25 minutes by bus from Pyeongchang station.' } },
    { name: { ko: '평창 감자밭', ja: '平昌ジャガイモ畑', zh: '平昌马铃薯田', en: 'Pyeongchang potato farms' }, region: 'gangwon', q: '평창 감자 체험', note: { ko: '6~7월 수확. 흙 속에서 캐는 체험이 아이에게 좋습니다.', ja: '6～7月の収穫。土の中で遊ぶ体験が子供に良いです。', zh: '六月至七月收获。挖土的经历对孩子来说是有好处的。', en: 'Harvested June–July; digging them out is the fun for children.' } },
    { name: { ko: '이천 쌀·복숭아', ja: '利川米・桃', zh: '利川大米和桃子', en: 'Icheon rice & peaches' }, region: 'capital', q: '이천 쌀 체험', note: { ko: '경강선 부발역 인근. 모내기(6월)와 벼베기(10월).', ja: '慶江線副発駅近く。モネギ（6月）とイネベギ（10月）。', zh: '京江线布巴尔站附近。播种水稻（六月）和收割（十月）。', en: 'Near Bubal station: planting in June, reaping in October.' } },
    { name: { ko: '안성 배·포도', ja: '安城梨・ぶどう', zh: '安城梨和葡萄', en: 'Anseong pears & grapes' }, region: 'capital', q: '안성 배 수확', note: { ko: '9~10월. 과수원 체험은 예약제가 많습니다.', ja: '9～10月。果樹園体験は予約制が多いです。', zh: '九月至十月。许多果园体验都需要预订。', en: 'September–October; orchard visits usually need booking.' } },
    { name: { ko: '청송 사과', ja: '青松りんご', zh: '青松苹果', en: 'Cheongsong apples' }, region: 'gyeongsang', q: '청송 사과 체험', note: { ko: '10월. 사과밭과 주왕산을 함께.', ja: '10月。りんご畑と酒王山を一緒に。', zh: '十月。苹果园和居王山在一起。', en: 'October — pair the orchards with Juwangsan.' } },
    { name: { ko: '나주 배', ja: 'ナジュ船', zh: '罗州梨', en: 'Naju pears' }, region: 'jeolla', q: '나주 배 체험', note: { ko: '9월. 배꽃은 4월, 수확은 가을.', ja: '9月。蓮の花は4月、収穫は秋。', zh: '九月。梨花四月采收，秋季采收。', en: 'Blossom in April, harvest in autumn.' } },
    { name: { ko: '논산 딸기', ja: 'ノンサンイチゴ', zh: '论山草莓', en: 'Nonsan strawberries' }, region: 'jeolla', q: '논산 딸기 체험', note: { ko: '12~5월. 겨울 실내 체험이라 아이와 가기 좋습니다.', ja: '12～5月。冬の室内体験だから子どもと行きたいです。', zh: '十二月至五月。这是冬天的室内体验，所以很适合带孩子一起去。', en: 'December–May, indoors in winter — good with children.' } },
    { name: { ko: '담양 딸기', ja: '潭陽イチゴ', zh: '潭阳草莓', en: 'Damyang strawberries' }, region: 'jeolla', q: '담양 딸기 체험', note: { ko: '12~5월. 죽녹원과 함께 묶기 좋습니다.', ja: '12～5月。竹緑園と一緒に結ぶのがいいです。', zh: '十二月至五月。和竹绿院在一起真是太好了。', en: 'December–May, easy to combine with the bamboo garden.' } },
    { name: { ko: '김제 벽골제 논', ja: 'キム・ジェウォール', zh: '金堤碧谷堤稻田', en: 'Gimje Byeokgolje paddies' }, region: 'jeolla', q: '벽골제', note: { ko: '국내 가장 오래된 저수지. 모내기·추수 체험.', ja: '国内最古の貯水池。募り・収穫体験。', zh: '韩国最古老的水库。水稻种植和收获体验。', en: 'The country\u2019s oldest reservoir, with planting and harvest days.' } },
    { name: { ko: '양평 블루베리', ja: '楊平ブルーベリー', zh: '杨平蓝莓', en: 'Yangpyeong blueberries' }, region: 'capital', q: '양평 블루베리 체험', note: { ko: '6~8월. 서울에서 한 시간.', ja: '6～8月。ソウルで1時間。', zh: '六月至八月。距离首尔一小时。', en: 'June–August, an hour from Seoul.' } },
    { name: { ko: '고성 감자', ja: '古城ポテト', zh: '高城马铃薯', en: 'Goseong potatoes' }, region: 'gangwon', q: '고성 감자 체험', note: { ko: '6월. 동해 바다와 함께 다녀오기 좋습니다.', ja: '6月。東海の海と一緒に行きます。', zh: '六月。与东海并肩，是游览的好去处。', en: 'June — easy to combine with the east coast.' } },
    { name: { ko: '제주 감귤', ja: '済州柑橘類', zh: '济州柑橘', en: 'Jeju tangerines' }, region: 'jeju', q: '제주 감귤 체험', note: { ko: '11~2월. 서귀포 일대 농장.', ja: '11～2月。西帰浦一帯農場。', zh: '十一月至二月。西归浦周边的农场。', en: 'November–February, on farms around Seogwipo.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍙', dish: { ko: '주먹밥 · 감자수제비', ja: 'おにぎり・じゃがいも自家製', zh: '饭团·土豆苏杰比', en: 'Rice balls · potato dumpling soup' }, note: { ko: '농촌 아침은 든든하게.', ja: '農村の朝は心強く。', zh: '乡村的一个充实的早晨。', en: 'Farm-country breakfasts are hearty.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '메밀국수 · 메밀전 · 감자전', ja: 'そば・そば展・じゃがいも展', zh: '荞麦面、荞麦煎饼、土豆煎饼', en: 'Buckwheat noodles · buckwheat pancake · potato pancake' }, note: { ko: '봉평은 메밀 요리가 기본입니다.', ja: 'ボンピョンはそば料理が基本です。', zh: '蓬坪的基本菜肴是荞麦。', en: 'In Bongpyeong, buckwheat is the default.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🌽', dish: { ko: '삶은 감자 · 옥수수 · 사과', ja: 'ゆでポテト・トウモロコシ・リンゴ', zh: '煮土豆、玉米、苹果', en: 'Boiled potatoes · corn · apples' }, note: { ko: '방금 캔 것을 그 자리에서 쪄 먹습니다.', ja: 'ちょうど缶をその場で蒸して食べます。', zh: '刚罐装的东西可以当场蒸熟吃。', en: 'Steam what you just dug up.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🥘', dish: { ko: '감자탕 · 닭볶음탕 · 산채비빔밥', ja: 'じゃがいも・チキン炒め物・山菜ビビンバ', zh: '甘家汤·辣鸡汤·野菜拌饭', en: 'Potato stew · braised chicken · wild-vegetable bibimbap' }, note: { ko: '수확한 재료로 끓인 한 그릇.', ja: '収穫した食材で沸騰したボウル。', zh: '一碗用收获的食材制成的炖菜。', en: 'A pot made from what the fields gave.' } }
  ],
  photos: [
    { file: 'th-farm', cap: { ko: '밭과 마을 풍경', ja: '畑と村の風景', zh: '田野和乡村风光', en: 'Fields and village' } },
    { file: 'th-farm-p2', cap: { ko: '수확철의 밭길', ja: '収穫鉄の畑', zh: '收获季节的田间小路', en: 'A field path at harvest' } }
  ],
  tip: { ko: '수확 체험은 작물 상태에 따라 당일 취소되기도 합니다. 하루 전 전화로 확인하세요.', ja: '収穫体験は作物の状態によって当日キャンセルされることもあります。 1日前に電話で確認してください。', zh: '根据农作物的状况，当天的收获体验可能会取消。请提前一天通过电话确认。', en: 'Harvest visits are sometimes cancelled on the day — call the day before.' }
},
