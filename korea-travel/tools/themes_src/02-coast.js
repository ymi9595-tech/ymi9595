/* -------------------------------------------------------- 02 바다·해안 드라이브 */
{
  id: 'coast', emoji: '🌊', tint: '#7EC8E3',
  name: { ko: '바다 · 해안 드라이브', ja: '海・海岸ドライブ', zh: '海岸自驾', en: 'Sea & coastal drives' },
  sub: { ko: '바다를 옆에 두고 달리는 하루', ja: '海をとなりに走る一日', zh: '把海放在身边奔跑的一天', en: 'A day with the sea on your left' },
  tag: { ko: '해안도로 · 포구 · 노을', ja: '海岸道路・漁港・夕焼け', zh: '海岸公路·渔港·晚霞', en: 'Coastal roads, harbours, sunset' },
  intro: {
    ko: '해안 드라이브는 목적지보다 순서가 중요합니다. 바다를 왼쪽에 두고 달리고, 포구에서 점심을 먹고, 해 질 무렵 전망대에 도착하도록 짜면 하루가 저절로 좋아집니다. 여기서는 배를 타지 않고도 하루에 다 돌 수 있는 통영 미륵도 한 바퀴를 기본 코스로 잡았어요.', ja: '沿岸ドライブは目的地よりも順序が重要です。海を左に置いて走り、砲口でランチを食べて、夕暮れ頃展望台に着くように組むと一日が自然に良くなります。ここでは船に乗らずに一日に回り回す統営弥勒も一輪を基本コースとして捉えました。', zh: '在沿海驾车上，顺序比目的地更重要。如果你的左边是大海，在港口吃午餐，并计划在日落时分到达展望台，那么你的一天就会自然而然地改善。在这里，基本路线是在统营弥勒岛散步，无需乘船，一天即可走完。',
    en: 'On a coastal drive the order matters more than the destination. Keep the water on your left, eat at a harbour, and be at a lookout by sunset, and the day arranges itself. This route is one loop of Tongyeong\u2019s Mireuk island — no ferries needed.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }],
  transport: { ko: '렌터카 권장 · 버스 가능', ja: 'レンタカー推奨・バス可', zh: '建议租车·也有巴士', en: 'Rental car recommended · buses possible' },
  duration: { ko: '약 10시간 · 주행 60km', ja: '約10時間・走行60km', zh: '约10小时，行驶60公里', en: 'About 10 hours · 60 km driving' },
  hub: {
    ko: '통영종합버스터미널', ja: '統営総合バスターミナル', zh: '统营综合客运站', en: 'Tongyeong Bus Terminal', q: '통영종합버스터미널',
    note: {
      ko: '서울 남부에서 4시간 반, 부산 서부에서 1시간 반. 터미널 옆에서 렌터카를 받으면 미륵도까지 15분입니다.', ja: 'ソウル南部で4時間半、釜山西部で1時間半。ターミナルの隣でレンタカーを手に入れたら、弥勒島まで15分です。', zh: '距首尔南部4个半小时车程，距釜山西部1个半小时车程。如果您在客运站旁边租车，只需15分钟即可到达弥勒岛。',
      en: 'Four and a half hours from southern Seoul, ninety minutes from west Busan. Pick up a car beside the terminal and Mireuk island is fifteen minutes away.'
    }
  },
  course: {
    title: { ko: '미륵도 한 바퀴 — 케이블카에서 달아공원 노을까지', ja: '弥勒島ひと回り — ケーブルカーから達阿公園の夕焼けまで', zh: '弥勒岛一圈——从缆车到达阿公园晚霞', en: 'One lap of Mireuk — cable car to the sunset at Dara' },
    meta: { ko: '7곳 · 약 10시간 · 주행 60km', ja: '7か所・約10時間・走行60km', zh: '7个地点，约10小时，行驶60公里', en: '7 stops · about 10 hours · 60 km' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '통영종합버스터미널', ja: '統営総合バスターミナル', zh: '统营综合客运站', en: 'Tongyeong Bus Terminal' }, q: '통영종합버스터미널', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '차를 받고 미륵도 방향으로. 통영대교를 건너는 순간부터 창밖이 바다입니다.', ja: '車を受けて弥勒道方向へ。統営大橋を渡る瞬間から窓の外が海です。', zh: '打车前往弥勒岛。从跨过统营大桥的那一刻起，窗外就是大海。', en: 'Collect the car and head for Mireuk island — from the bridge onward the window is all water.' } },
      { phase: 'morning', time: '10:00', name: { ko: '통영케이블카', ja: '統営ケーブルカー', zh: '统营缆车', en: 'Tongyeong cable car' }, q: '통영케이블카', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '한려수도를 통째로 내려다보는 케이블카. 오전에는 바다 쪽 빛이 맑아 사진이 잘 나옵니다.', ja: '韓麗水道を丸ごと見下ろすケーブルカー。午前中は海側の光が澄んで写真がよく出てきます。', zh: '乘坐缆车可以俯瞰整个闲丽水道。早上海边光线清晰，照片效果很好。', en: 'A cable car over the Hallyeo waterway. Morning light off the sea is the clearest for photographs.' },
        photo: 'th-coast' },
      { phase: 'morning', time: '11:30', name: { ko: '미륵도 해안도로', ja: '弥勒道海岸道路', zh: '弥勒岛沿海公路', en: 'Mireuk coastal road' }, q: '미륵도 해안도로', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '왼쪽은 바다, 오른쪽은 동백숲. 중간중간 차를 세울 수 있는 작은 포구가 있습니다.', ja: '左は海、右はツバキの森。中途半端に車を建てることができる小さな砲口があります。', zh: '左边是大海，右边是山茶林。有一个小港口可以停放汽车。', en: 'Sea on the left, camellia woods on the right, with little harbours where you can pull over.' } },
      { phase: 'lunch', time: '12:30', name: { ko: '미륵도 포구 점심', ja: '弥勒堂浦口ランチ', zh: '弥勒岛港口午餐', en: 'Lunch at a Mireuk harbour' }, q: '미륵도', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '바다를 보는 자리에서 해산물 한 상. 통영은 굴과 멍게, 해물칼국수가 기본입니다.', ja: '海を見る席でシーフードの賞。統営は牡蠣とあざ、海鮮刀麺が基本です。', zh: '一桌海鲜，还能看到海景。在统营，牡蛎、海鞘、海鲜汤面是基本菜。', en: 'A seafood table facing the water — Tongyeong runs on oysters, sea squirts and seafood noodles.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '달아공원', ja: 'ダルア公園', zh: '达拉公园', en: 'Dara Park' }, q: '달아공원', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '섬이 겹겹이 늘어선 다도해 전망. 낮에도 좋지만 이 코스의 마지막에 다시 오는 자리이기도 합니다.', ja: '島が二重に並ぶ茶道海の眺め。日中もいいですが、このコースの最後にまた来る席でもあります。', zh: '多岛海的景色。白天这里很棒，但也是您在课程结束后会回来的地方。', en: 'Layers of islands — good by day, and it is also where this route ends at sunset.' } },
      { phase: 'afternoon', time: '15:30', name: { ko: '동피랑 벽화마을', ja: 'ドンピラン壁画村', zh: '东皮郎壁画村', en: 'Dongpirang mural village' }, q: '동피랑벽화마을', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '언덕 골목의 벽화와 통영 앞바다. 차는 아래 공영주차장에 두고 걸어 올라가세요.', ja: '丘の路地の壁画と統営の沖合い。車は下の公営駐車場に置いて歩いてください。', zh: '山胡同里的壁画和统营附近的大海。将车停在下面的公共停车场，然后步行上去。', en: 'Murals on a hillside with the harbour below. Park in the public lot and walk up.' } },
      { phase: 'afternoon', time: '16:40', name: { ko: '서호시장', ja: '西湖市場', zh: '西湖市场', en: 'Seoho Market' }, q: '서호시장', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '간식은 시장에서. 통영 꿀빵과 어묵, 말린 멸치를 조금씩 사 두세요.', ja: 'おやつは市場で。統営蜂蜜とオオムク、乾燥アンチョビを少しずつ買っておきます。', zh: '市场上的小吃。储备一些统营蜂蜜面包、鱼饼和干凤尾鱼。', en: 'Snacks at the market: honey buns, fish cake, a bag of dried anchovies.' } },
      { phase: 'evening', time: '18:00', name: { ko: '달아공원 노을', ja: 'ダルア公園の夕焼け', zh: '达尔公园日落', en: 'Sunset at Dara Park' }, q: '달아공원', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
        desc: { ko: '해가 지는 시각에 맞춰 다시 올라갑니다. 주차장이 좁으니 30분 일찍 도착하세요.', ja: '日が沈む時刻に合わせて再び上がります。駐車場が狭いので、30分早く到着してください。', zh: '正好赶上太阳落山，我们又上山了。停车场很小，所以要提前30分钟到达。', en: 'Come back up for sunset. The car park is small — arrive half an hour early.' } },
      { phase: 'return', time: '19:30', name: { ko: '통영종합버스터미널', ja: '統営総合バスターミナル', zh: '统营综合客运站', en: 'Tongyeong Bus Terminal' }, q: '통영종합버스터미널', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '차를 반납하고 터미널로. 막차 시간은 미리 확인해 두세요.', ja: '車を返却し、ターミナルに。終車時間はあらかじめ確認しておいてください。', zh: '还车并前往客运站。请提前查询末班车时间。', en: 'Return the car and walk to the terminal; check the last bus in advance.' } }
    ]
  },
  conds: [
    { k: { ko: '이동', ja: '移動', zh: '移动', en: 'Getting around' }, v: { ko: '렌터카 권장 · 버스는 배차 30~60분', ja: 'レンタカー推奨・バスは配車30～60分', zh: '建议租车 · 巴士每30至60分钟一班', en: 'Car recommended; buses run every 30–60 min' } },
    { k: { ko: '비용', ja: '費用', zh: '费用', en: 'Cost' }, v: { ko: '렌터카 1일 6~9만원 · 케이블카 별도', ja: 'レンタカー1日6～9万ウォン・ケーブルカー別途', zh: '租车 每天60,000~90,000韩元 · 单独乘坐缆车', en: 'Car ₩60,000–90,000 a day; cable car extra' } },
    { k: { ko: '주의', ja: '注意', zh: '小心', en: 'Watch out' }, v: { ko: '해안도로는 차를 세울 곳이 드물어 포구 주차장 이용', ja: '海岸道路は車を立てる場所が珍しく、砲口駐車場利用', zh: '沿海公路上停车的地方很少，所以请使用港口停车场。', en: 'Few places to stop on the coast road — use harbour car parks' } }
  ],
  places: [
    { name: { ko: '77호선 해안도로', ja: '77号線沿岸道路', zh: '77号公路沿海公路', en: 'Route 77 coastal road' }, region: 'jeolla', q: '남해 77번 국도', note: { ko: '목포에서 부산까지 이어지는 남해안 국도. 구간을 골라 달려도 좋습니다.', ja: '木浦から釜山まで続く南海岸国道。区間を選んで走ってもいいです。', zh: '南部海岸国道从木浦延伸至釜山。您可以选择一个部分并运行。', en: 'The south-coast road from Mokpo to Busan — pick any stretch.' } },
    { name: { ko: '제주 신창풍차해안도로', ja: '済州新昌風車海岸道路', zh: '济州新昌风车海岸路', en: 'Jeju Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '바다 위 풍력발전기와 데크 산책로. 일몰 시간대가 가장 좋습니다.', ja: '海の上の風力発電機とデッキ遊歩道。夕日のタイムゾーンが最適です。', zh: '海上风力涡轮机和甲板走道。日落时间是最好的。', en: 'Wind turbines over the water and a boardwalk; best at sunset.' } },
    { name: { ko: '강릉 안목~사천', ja: '江陵安木〜四川', zh: '江陵安木~泗川', en: 'Gangneung Anmok to Sacheon' }, region: 'gangwon', q: '안목해변', note: { ko: '바다를 붙여 달리는 짧은 해안도로. 커피거리와 이어집니다.', ja: '海をつけて走る短い海岸道路。コーヒー通りにつながります。', zh: '一条靠近大海的沿海短路。它通向咖啡街。', en: 'A short run right against the water, joined to the coffee street.' } },
    { name: { ko: '부산 해운대~송정', ja: '釜山海雲台〜ソンジョン', zh: '釜山海云台~松亭', en: 'Busan Haeundae to Songjeong' }, region: 'gyeongsang', q: '해운대 블루라인파크', note: { ko: '해변열차와 해안도로가 나란히 이어집니다. 주말에는 열차 예약을 권합니다.', ja: 'ビーチ列車と海岸道路が並んでいます。週末は列車の予約をお勧めします。', zh: '沙滩列车与滨海公路并列运行。我们建议您预订周末的火车。', en: 'Beach train and coast road side by side — book the train at weekends.' } },
    { name: { ko: '삼척 초곡~장호항', ja: 'サムチョクチョゴク〜チャンホ港', zh: '三陟草谷~江湖港', en: 'Samcheok Chogok to Jangho' }, region: 'gangwon', q: '장호항', note: { ko: '용굴촛대바위와 맑은 항구. 스노클링으로도 알려져 있습니다.', ja: '龍窟の燭台岩と澄んだ港。シュノーケリングとしても知られています。', zh: 'Yonggul Chotdae岩石和清澈的港口。也称为浮潜。', en: 'A rock arch and a clear harbour, also known for snorkelling.' } },
    { name: { ko: '울릉도 해안일주도로', ja: '鬱陵島沿岸一周道路', zh: '郁陵岛沿海道路', en: 'Ulleungdo ring road' }, region: 'gyeongsang', q: '울릉도', note: { ko: '배로 들어가야 하지만, 섬 한 바퀴가 그 자체로 드라이브 코스입니다.', ja: '船に入らなければなりませんが、島一輪がそれ自体ドライブコースです。', zh: '您必须乘船到达那里，但环岛步行本身就是一种驾车。', en: 'You have to take a ferry, but the island loop is a drive in itself.' } },
    { name: { ko: '거제 해금강~구조라', ja: '巨済 海金剛〜クジョラ', zh: '巨济 海金刚～旧助罗', en: 'Geoje Haegeumgang to Gujora' }, region: 'gyeongsang', q: '거제 해금강', note: { ko: '몽돌 해변과 바위섬이 번갈아 나오는 남해안 최고 구간 중 하나.', ja: 'モンドールビーチと岩島が交互に出る南海岸の最高区間の一つ。', zh: '南部海岸最好的地区之一，Mongdol 海滩和岩石岛屿交替出现。', en: 'Pebble beaches and rock islets alternating — one of the best stretches on the south coast.' } },
    { name: { ko: '양양 낙산~하조대', ja: 'ヤンヤンナクサン〜ハジョデ', zh: '襄阳骆山 ~ 河赵台', en: 'Yangyang Naksan to Hajodae' }, region: 'gangwon', q: '하조대', note: { ko: '낙산사와 하조대 사이 해안. 아침 햇빛이 바다로 들어옵니다.', ja: '洛山寺と下条帯の間の海岸。朝の日光が海に入ります。', zh: '洛山寺和河赵台之间的海岸。清晨的阳光射入大海。', en: 'The coast between Naksansa and Hajodae; morning light comes in off the water.' } },
    { name: { ko: '태안 안면도', ja: '泰安顔面図', zh: '泰安安眠岛', en: 'Taean Anmyeondo' }, region: 'jeolla', q: '안면도', note: { ko: '꽃지 해변과 소나무 숲길. 서해 노을 드라이브에 좋습니다.', ja: '花紙ビーチと松林道。西海の夕焼けドライブに最適です。', zh: 'Kkotji 海滩和松林小径。非常适合在西海欣赏日落。', en: 'Ggotji beach and pine lanes — a good west-coast sunset drive.' } },
    { name: { ko: '변산반도', ja: '変山半島', zh: '边山半岛', en: 'Byeonsan peninsula' }, region: 'jeolla', q: '변산반도', note: { ko: '채석강 절벽과 격포항. 물때를 맞추면 해안 절벽 아래를 걸을 수 있습니다.', ja: '採石川の崖と撃砲港。水の時間を合わせると、海岸の崖の下を歩くことができます。', zh: '彩石江悬崖和格浦港。如果潮水合适，你可以在沿海悬崖下行走。', en: 'The Chaeseokgang cliffs and Gyeokpo harbour; at low tide you can walk beneath the cliffs.' } },
    { name: { ko: '여수 돌산~향일암', ja: '麗水ドルサン～香一岩', zh: '丽水突山 ~ 香吉林寺', en: 'Yeosu Dolsan to Hyangiram' }, region: 'jeolla', q: '돌산도', note: { ko: '돌산대교를 건너 섬 끝까지. 왼쪽으로 계속 섬이 따라옵니다.', ja: '石山大橋を渡って島の最後まで。左には島が続きます。', zh: '穿过突山大桥就到了岛的尽头。该岛继续向左行驶。', en: 'Cross Dolsan bridge to the end of the island, islands following you the whole way.' } },
    { name: { ko: '고성 청간정', ja: '高城チョンガンジョン', zh: '高城清安亭', en: 'Goseong Cheongganjeong' }, region: 'gangwon', q: '청간정', note: { ko: '절벽 위 정자에서 보는 동해. 7번 국도 드라이브의 대표 정차 지점입니다.', ja: '崖の上の亭から見る東海。7番国道ドライブの代表的な停車地点です。', zh: '从悬崖上的亭子看东海。7号国道自驾的代表性停车点。', en: 'A pavilion on the cliff over the East Sea — the classic stop on Route 7.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '해장국 · 굴국밥', ja: 'ヘジャングク・グルグクバプ', zh: '解酒汤·牡蛎汤饭', en: 'Hangover soup · oyster rice soup' }, note: { ko: '남해안은 아침부터 굴과 국물이 있습니다.', ja: '南海岸には朝から牡蠣とスープがあります。', zh: '在南部海岸，牡蛎和汤从早上开始供应。', en: 'On the south coast oysters come with breakfast.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🦪', dish: { ko: '해물칼국수 · 멍게비빔밥 · 굴', ja: 'シーフードナイフ麺・ヨガビビンバ・牡蠣', zh: '海鲜刀切、海鞘拌饭、牡蛎', en: 'Seafood noodles · sea-squirt bibimbap · oysters' }, note: { ko: '포구 식당은 12시 전에 들어가면 자리가 있습니다.', ja: 'ポーグレストランは12時前に入ると席があります。', zh: '如果你在12点之前进入港口餐厅，就有空位。', en: 'Harbour tables are still free before noon.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍯', dish: { ko: '꿀빵 · 어묵 · 말린 멸치', ja: 'ハチミツ・オオムシ・ドライアンチョビ', zh: '蜂蜜面包、鱼饼、凤尾鱼干', en: 'Honey buns · fish cake · dried anchovies' }, note: { ko: '시장에서 봉지째 사서 차에 두세요.', ja: '市場で袋目を買って車に入れてください。', zh: '从市场上买一个包，然后把它放在车里。', en: 'Buy a bag at the market and keep it in the car.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🔥', dish: { ko: '조개구이 · 회 · 해물탕', ja: '貝焼・刺身・海鮮湯', zh: '烤蛤蜊、生鱼、海鲜炖菜', en: 'Grilled shellfish · sashimi · seafood stew' }, note: { ko: '노을을 보고 내려와 포구에서 저녁.', ja: '夕焼けを見て降りて、砲口で夕方。', zh: '看完日落，下山到码头吃晚饭。', en: 'Come down from the sunset and eat at the harbour.' } }
  ],
  photos: [
    { file: 'th-coast', cap: { ko: '케이블카에서 본 다도해', ja: 'ケーブルカーから見た茶道', zh: '从缆车上看到的多岛海', en: 'Islands seen from the cable car' } },
    { file: 'th-coast-p2', cap: { ko: '해안도로의 포구', ja: '海岸道路の砲口', zh: '沿海公路上的港口', en: 'A harbour along the coast road' } }
  ],
  tip: { ko: '해안도로는 방파제 주차장 말고는 정차할 곳이 적습니다. 사진은 포구에서 찍으세요.', ja: '海岸道路は防波堤駐車場だけでなく停車する場所も少ない。写真は砲口で撮ってください。', zh: '滨海路上除了防波堤停车场外，几乎没有什么地方可以停车。在港口拍照。', en: 'The coast road has few places to stop besides harbour car parks — take photographs there.' }
},
