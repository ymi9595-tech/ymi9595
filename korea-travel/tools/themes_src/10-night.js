/* --------------------------------------------------------- 10 야경 명소 */
{
  id: 'night', emoji: '🌃', tint: '#8FB8F0',
  name: { ko: '야경 명소', ja: '夜景スポット', zh: '夜景好去处', en: 'Night views' },
  sub: { ko: '해가 진 뒤에 시작되는 하루', ja: '日が沈んでから始まる一日', zh: '太阳落下后开始的一天', en: 'A day that starts after sunset' },
  tag: { ko: '전망대 · 다리 · 빛 · 별', ja: '展望台・橋・光・星', zh: '观景台·桥·灯光·星', en: 'Lookouts, bridges, lights, stars' },
  intro: {
    ko: '야경은 시간을 거꾸로 짜는 여행입니다. 늦게 출발해 노을에 맞춰 전망대에 오르고, 어두워진 뒤 시내로 내려와 마지막까지 걷습니다. 다만 종류가 많습니다. 도시 불빛, 바다와 다리, 궁궐과 성곽, 빛 축제, 미디어아트, 드론쇼, 별과 은하수, 야시장, 유람선, 야경 드라이브까지 — 오늘 보고 싶은 밤을 먼저 고르세요. 여기서는 부산의 바다와 도심을 함께 보는 하루를 기본 코스로 잡았습니다.', ja: '夜景は時間を逆さまにする旅です。遅れて出発し、夕焼けに合わせて展望台に上がり、暗くなった後、市内に降りて最後まで歩きます。ただ種類が多いです。街の光、海と橋、宮殿と城、光の祭り、メディアアート、ドローンショー、星と天の川、ナイトマーケット、クルーズ船、夜景ドライブまで - 今日見たい夜を最初に選んでください。ここでは、釜山の海と都心を一緒に見る一日を基本コースとして捉えました。', zh: '夜景是一场逆转时间的旅程。我们出发得很晚，正好赶上日落到达天文台，天黑后下山到市区，一直走到终点。然而，有很多类型。城市灯光、大海和桥梁、宫殿和城堡、灯光节、媒体艺术、无人机表演、星星和银河、夜市、游轮和夜景驾车——首先选择你今天想看的夜晚。在这里，我们决定一起参观釜山的大海和市中心的一日游。',
    en: 'A night-view trip runs backwards: leave late, be at a lookout for sunset, then come down into the lit city. But the kinds differ — city lights, sea and bridges, palaces and fortress walls, light festivals, media art, drone shows, stars, night markets, cruises, night drives. Choose the night you want first. This route takes in both the sea and the city of Busan.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '맑은 날', ja: '晴れた日', zh: '阳光灿烂的日子', en: 'Clear days' }],
  transport: { ko: '도시철도 + 버스·택시', ja: '都市鉄道＋バス・タクシー', zh: '地铁＋巴士·出租车', en: 'Metro + bus or taxi' },
  duration: { ko: '약 7시간', ja: '約7時間', zh: '约7小时', en: 'About 7 hours' },
  hub: {
    ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station', q: '부산역',
    note: {
      ko: 'KTX 서울에서 2시간 40분. 짐은 역 보관함에 맡기고 1호선으로 시내로 들어갑니다. 야경 코스는 해 지는 시각에서 거꾸로 계산하세요.', ja: 'KTXソウルから2時間40分。荷物は駅の保管箱に預け、1号線で市内に入ります。夜景コースは、失われた時刻から逆に計算してください。', zh: '从首尔乘坐 KTX 2小时40分钟。将行李寄存在车站储物柜，然后乘坐1号线进城。对于夜景路线，从太阳落山的时间开始倒算。',
      en: 'Two hours forty from Seoul. Leave the bag in a station locker and take Line 1 into town; work the route back from sunset.'
    }
  },
  course: {
    title: { ko: '부산 야경 — 흰여울 노을에서 황령산 불빛까지', ja: '釜山の夜景 — 白浅の夕焼けから荒嶺山の灯まで', zh: '釜山夜景——从白浅滩晚霞到荒岭山灯光', en: 'Busan at night — Huitnyeoul dusk to Hwangnyeongsan lights' },
    meta: { ko: '6곳 · 약 7시간 · 택시 3회', ja: '6か所・約7時間・タクシー3回', zh: '6个地点，约7小时，乘坐3次出租车', en: '6 stops · about 7 hours · 3 taxi rides' },
    steps: [
      { phase: 'start', time: '15:00', name: { ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station' }, q: '부산역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '1호선으로 남포동까지 10분. 야경까지 시간이 남으니 커피 한 잔으로 천천히 시작합니다.', ja: '1号線で南浦洞まで10分。夜景まで時間が残るので、一杯のコーヒーでゆっくりと始まります。', zh: '乘坐1号线10分钟到达南浦洞。距离夜景还有时间，就喝杯咖啡慢慢开始吧。', en: 'Ten minutes on Line 1 to Nampo-dong; there is time before dark, so start slowly.' } },
      { phase: 'afternoon', time: '15:40', name: { ko: '영도 흰여울문화마을', ja: 'ヨンド ホワイトヨール文化村', zh: '影岛辛烈文化村', en: 'Huinnyeoul culture village' }, q: '흰여울문화마을', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
        desc: { ko: '절벽 아래 바다를 따라 난 길. 해 질 무렵 물색이 가장 깊어집니다.', ja: '崖の下の海に沿って私は道。夕暮れ時の水色が最も深くなります。', zh: '悬崖下方的海边道路。日落时水的颜色变得最深。', en: 'A path under the cliffs along the water — deepest colour at dusk.' },
        photo: 'th-night' },
      { phase: 'evening', time: '17:20', name: { ko: '감천문화마을', ja: '甘川文化村', zh: '甘川文化村', en: 'Gamcheon culture village' }, q: '감천문화마을', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '해가 지면 골목의 불이 하나씩 켜집니다. 주민이 사는 곳이라 늦은 시간에는 조용히, 어두워지면 내려오세요.', ja: '太陽が出ると、路地の火が一つずつ点灯します。住民が住む場所なので、遅い時間には静かに、暗くなったら降りてください。', zh: '夕阳西下，巷子里的灯一盏一盏地亮起来。这里是居民居住的地方，所以深夜保持安静，天黑后下来。', en: 'Windows light one by one after sunset. People live here: be quiet late in the evening and head down as it gets dark.' } },
      { phase: 'evening', time: '18:40', name: { ko: '광안리 해변', ja: '広安里ビーチ', zh: '广安里海水浴场', en: 'Gwangalli Beach' }, q: '광안리해수욕장', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '다리 조명이 다 들어오는 20시 전에 도착해 저녁을 먹습니다. 드론 라이트쇼가 있는 날은 해변 전체가 공연장이 됩니다.', ja: '足の照明が入る20時前に到着し、夕食を食べます。ドローンライトショーがある日はビーチ全体が会場となります。', zh: '20:00桥灯亮起时抵达并享用晚餐。每逢有无人机灯光秀的日子，整个海滩就变成了表演场地。', en: 'Eat before eight, when the bridge is fully lit. On drone-show nights the whole beach becomes a theatre.' } },
      { phase: 'evening', time: '20:30', name: { ko: '마린시티 · 황령산', ja: 'マリンシティ・黄霊山', zh: '海洋城·皇令山', en: 'Marine City & Hwangnyeongsan' }, q: '황령산봉수대', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
        desc: { ko: '고층 빌딩 불빛이 물에 비치는 마린시티를 지나 황령산 전망대로. 밤에는 바람이 차니 겉옷을 챙기세요.', ja: '高層ビルの光が水に映るマリンシティを過ぎ、黄嶺山展望台に。夜は風が降り、上着を持ってください。', zh: '经过高楼大厦灯光倒映在水中的海洋城，前往黄翎山展望台。晚上风大，要带件外套。', en: 'Past Marine City, where towers double in the water, up to the Hwangnyeongsan lookout. It is windy and cold at night — bring a layer.' },
        photo: 'th-night-p2' },
      { phase: 'return', time: '21:40', name: { ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station' }, q: '부산역', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
        desc: { ko: '택시로 역까지. 막차 시간을 확인하고, 짐은 보관함에서 찾으세요.', ja: 'タクシーで駅まで。終車時間を確認し、荷物はロッカーで探してください。', zh: '乘坐出租车前往车站。检查末班车时间并从储物柜领取行李。', en: 'A taxi back to the station; check the last train and collect your bag.' } }
    ]
  },
  subs: {
    title: { ko: '야경·야간 여행 열다섯 가지', ja: '夜景・夜の旅15', zh: '夜景·夜间旅行的十五种', en: 'Fifteen kinds of night' },
    items: [
      { emoji: '🏙️', name: { ko: '도시 야경', ja: '都市の夜景', zh: '城市夜景', en: 'City lights' }, desc: { ko: '빌딩·타워·스카이라인. 남산, DDP, 석촌호수처럼.', ja: 'ビル・タワー・スカイライン。南山、DDP、石村湖のように。', zh: '建筑物、塔楼、天际线。比如南山、DDP、石村湖。', en: 'Towers and skylines — Namsan, DDP, Seokchon lake.' } },
      { emoji: '⚓', name: { ko: '바다 야경', ja: '海の夜景', zh: '海景夜景', en: 'Sea at night' }, desc: { ko: '항구·해변·등대·해상교량. 광안리, 묵호, 돌산대교.', ja: '港・海辺・灯台・海上橋梁。広安里、黙号、石山大橋。', zh: '港口、海滩、灯塔、海上桥梁。广安里、墨湖、突山大桥。', en: 'Harbours, beaches, lighthouses, sea bridges.' } },
      { emoji: '🏯', name: { ko: '고궁·역사 야간', ja: '古宮・歴史夜間', zh: '故宫/历史之夜', en: 'Palaces & history' }, desc: { ko: '궁궐·성곽·한옥. 경복궁 야간관람은 예매제.', ja: '宮廷・城郭・韓屋。景福宮の夜間観覧は前売り。', zh: '宫殿、城堡、韩屋。景福宫夜景需要预约。', en: 'Palaces and walls; Gyeongbokgung at night is ticketed.' } },
      { emoji: '✨', name: { ko: '빛 축제', ja: 'ライトフェスティバル', zh: '灯光节', en: 'Light festivals' }, desc: { ko: '일루미네이션과 빛의 정원. 겨울에 많습니다.', ja: 'イルミネーションと光の庭園。冬に多いです。', zh: '照明和光之花园。冬天有很多。', en: 'Illuminations and light gardens, mostly in winter.' } },
      { emoji: '🖼️', name: { ko: '미디어아트', ja: 'メディアアート', zh: '媒体艺术', en: 'Media art' }, desc: { ko: '파사드·프로젝션 맵핑. 수원화성, 공산성 같은 성곽에서도.', ja: 'ファサード・プロジェクションマッピング。水原華城、共産省のような城郭でも。', zh: '立面/投影映射。即使是水原华城、公山城等城堡。', en: 'Facades and projection mapping, including on fortress walls.' } },
      { emoji: '🚀', name: { ko: '드론쇼·불꽃', ja: 'ドローンショー・花火', zh: '无人机表演和烟花', en: 'Drone & firework shows' }, desc: { ko: '광안리 M드론라이트쇼, 서울세계불꽃축제. 일정 확인 필수.', ja: '広安里Mドローンライトショー、ソウル世界花火祭り。スケジュール確認必須。', zh: '首尔国际烟花节广安里 M 无人机灯光秀。需要确认时间表。', en: 'The Gwangalli drone show and the Seoul fireworks — check dates.' } },
      { emoji: '🌌', name: { ko: '별·은하수', ja: '星・天の川', zh: '星星，银河系', en: 'Stars' }, desc: { ko: '천문대와 어두운 하늘. 영양, 안반데기, 별마로천문대.', ja: '天文台と暗い空。栄養、アンバンデギ、別馬で天文台。', zh: '天文台和黑暗的天空。英阳、安班德基、碧马吕展望台。', en: 'Observatories and dark skies: Yeongyang, Anbandegi, Byeolmaro.' } },
      { emoji: '🌉', name: { ko: '호수·강 야경', ja: '湖・川の夜景', zh: '湖河夜景', en: 'Lakes & rivers' }, desc: { ko: '출렁다리·분수·수변 산책. 예당호, 산정호수.', ja: '出張橋・噴水・水辺散策。イェダンホ、山頂湖。', zh: '吊桥、喷泉、水边步道。礼堂湖、山井湖。', en: 'Suspension bridges, fountains, waterside walks.' } },
      { emoji: '🍢', name: { ko: '야시장', ja: 'ナイトマーケット', zh: '夜市', en: 'Night markets' }, desc: { ko: '먹거리와 공연. 전주 남부시장, 대구 서문시장 야시장.', ja: 'グルメとパフォーマンス。全州南部市場、大邱西門市場ナイトマーケット。', zh: '美食和表演。全州南部市场、大邱西门市场夜市。', en: 'Food and performances — Jeonju Nambu, Daegu Seomun.' } },
      { emoji: '🚢', name: { ko: '야간 유람선', ja: '夜間クルーズ船', zh: '夜间巡游', en: 'Night cruises' }, desc: { ko: '한강·바다 위에서 보는 야경.', ja: '漢江・海の上から見る夜景。', zh: '从空中俯瞰汉江和大海的夜景。', en: 'The city seen from the water.' } },
      { emoji: '🚗', name: { ko: '야경 드라이브', ja: '夜景ドライブ', zh: '夜景开车', en: 'Night drives' }, desc: { ko: '전망대·해안도로·산악도로. 북악스카이웨이, 미시령.', ja: '展望台・海岸道路・山岳道路。北アックスカイウェイ、ミシリョン。', zh: '展望台、滨海路、山路。北岳高架公路，米西岭。', en: 'Lookouts, coast and mountain roads.' } },
      { emoji: '🌙', name: { ko: '야간 산책·힐링', ja: '夜間散歩・癒し', zh: '夜间散步/疗愈', en: 'Night walks' }, desc: { ko: '공원·숲길·달빛 산책. 낙산공원 성곽길.', ja: '公園・森通り・月光散策。ナクサン公園城郭道。', zh: '公园、森林小径、月光漫步。骆山公园要塞路。', en: 'Parks, forest paths, moonlit walls.' } },
      { emoji: '🎠', name: { ko: '야간 테마파크', ja: '夜のテーマパーク', zh: '夜间主题公园', en: 'Night theme parks' }, desc: { ko: '야간 퍼레이드와 조명. 통영 디피랑 같은 야간 전용 공간도.', ja: '夜のパレードと照明。統営ディフィランのような夜間専用スペースも。', zh: '夜间游行和灯光。还有统营Dpirang等夜间专属空间。', en: 'Night parades and lights, including night-only parks.' } },
      { emoji: '📸', name: { ko: '야간 인생샷', ja: 'ナイトライフショット', zh: '夜出片照', en: 'Night photos' }, desc: { ko: '포토존과 감성 거리. 삼각대가 있으면 달라집니다.', ja: 'フォトゾーンと感性通り。三脚があれば変わります。', zh: '照片区域和情感距离。拥有三脚架会有所不同。', en: 'Photo spots and atmospheric streets; a tripod changes everything.' } },
      { emoji: '🔦', name: { ko: '야간 이색 체험', ja: '夜間の異色体験', zh: '独特的夜间体验', en: 'Night experiences' }, desc: { ko: '야간 투어·야간 박물관·공포 체험.', ja: '夜間ツアー・夜間博物館・ホラー体験。', zh: '夜游、夜间博物馆、恐怖体验。', en: 'Night tours, night museums, scare experiences.' } }
    ]
  },
  conds: [
    { k: { ko: '시간', ja: '時間', zh: '时间', en: 'Timing' }, v: { ko: '일몰 30~40분 전 전망대 도착이 가장 좋음', ja: '日没30〜40分前展望台到着が一番', zh: '最好在日落前30-40分钟到达展望台。', en: 'Be at the lookout 30–40 minutes before sunset' } },
    { k: { ko: '운영', ja: '営業', zh: '营业', en: 'Opening' }, v: { ko: '야간개장·분수·케이블카 막차·드론쇼는 날짜와 계절에 따라 다름', ja: '夜間開場・噴水・ケーブルカー終車・ドローンショーは日付と季節によって異なる', zh: '夜间开放、喷泉、末班车和无人机表演根据日期和季节而有所不同。', en: 'Night openings, fountains, last cable cars and drone shows vary by date' } },
    { k: { ko: '날씨', ja: '天気', zh: '天气', en: 'Weather' }, v: { ko: '미세먼지·안개·강풍이면 조명이 흐려지고 공연이 취소됩니다', ja: '細かいほこり・霧・強風の場合、照明がぼやけて公演がキャンセルされます', zh: '如果有细尘、雾气或强风，灯光将变暗，演出将被取消。', en: 'Dust, fog or wind dim the lights and cancel shows' } }
  ],
  places: [
    { name: { ko: '남산서울타워', ja: '南山ソウルタワー', zh: '南山首尔塔', en: 'N Seoul Tower' }, region: 'capital', q: 'N서울타워', note: { ko: '도시 전체 전망. 남산 케이블카와 산책로.', ja: '都市全体の眺め。南山ケーブルカーと遊歩道。', zh: '整个城市的景色。南山缆车和步行道。', en: 'The whole city below, by cable car and footpath.' } },
    { name: { ko: '동대문디자인플라자', ja: '東大門デザインプラザ', zh: '东大门设计广场', en: 'Dongdaemun Design Plaza' }, region: 'capital', q: '동대문디자인플라자', note: { ko: '곡선형 건축과 야간 조명, 건축 사진.', ja: '湾曲した建築と夜の照明、建築写真。', zh: '弧形建筑、夜间照明和建筑摄影。', en: 'Curved architecture under night lighting.' } },
    { name: { ko: '경복궁 야간관람', ja: '景福宮の夜間観覧', zh: '景福宫夜游', en: 'Gyeongbokgung at night' }, region: 'capital', q: '경복궁 야간관람', note: { ko: '지정 기간에만, 예매제. 광화문·북촌과 연계.', ja: '指定期間のみ、前売り制。光化門・北村と連携。', zh: '仅限指定期间内提前预订。与光化门、北村相连。', en: 'Only in set periods, ticketed; pair with Gwanghwamun and Bukchon.' } },
    { name: { ko: '덕수궁 돌담길', ja: '徳寿宮石垣', zh: '德寿宫石墙路', en: 'Deoksugung stone wall road' }, region: 'capital', q: '덕수궁 돌담길', note: { ko: '고궁과 근대 건축 사이의 조용한 밤 산책.', ja: '古宮と近代建築の間の静かな夜の散歩。', zh: '在古老宫殿和现代建筑之间安静的夜间漫步。', en: 'A quiet night walk between palace and modern buildings.' } },
    { name: { ko: '반포대교 달빛무지개분수', ja: 'バンポ大橋ムーンライト虹噴水', zh: '半坡桥月光彩虹喷泉', en: 'Banpo rainbow fountain' }, region: 'capital', q: '반포대교 달빛무지개분수', note: { ko: '음악과 조명의 분수. 계절 운영 확인.', ja: '音楽と照明の噴水。季節の運営確認。', zh: '音乐和灯光的喷泉。检查季节性运营。', en: 'Music and lit water; seasonal, so check the schedule.' } },
    { name: { ko: '세빛섬', ja: 'セライト島', zh: '一些塞维特', en: 'Sebitseom' }, region: 'capital', q: '세빛섬', note: { ko: '한강 위 조명 건축물.', ja: '漢江の上の照明建築。', zh: '汉江上的照明大厦。', en: 'Lit pavilions on the Han.' } },
    { name: { ko: '북악스카이웨이 팔각정', ja: '北アックスカイウェイ八角亭', zh: '北岳高架桥八角亭', en: 'Bugak Skyway pavilion' }, region: 'capital', q: '북악스카이웨이', note: { ko: '도심 파노라마, 야경 드라이브의 고전.', ja: '市内中心部のパノラマ、夜景ドライブの古典。', zh: '经典的城市全景和夜景驾驶。', en: 'A panorama of downtown — the classic night drive.' } },
    { name: { ko: '낙산공원', ja: 'ナクサン公園', zh: '骆山公园', en: 'Naksan Park' }, region: 'capital', q: '낙산공원', note: { ko: '한양도성 성곽길과 도심 불빛.', ja: '漢陽都城城郭道と都心の光。', zh: '汉阳都城墙路和城市灯光。', en: 'The city wall and the city lights.' } },
    { name: { ko: '응봉산 팔각정', ja: '応奉山八角亭', zh: '应峰山八角亭', en: 'Eungbongsan pavilion' }, region: 'capital', q: '응봉산팔각정', note: { ko: '한강과 교량 불빛. 오르막이 있습니다.', ja: '漢江と橋の光。上り坂があります。', zh: '汉江和桥梁灯光。有一段上坡路。', en: 'River and bridge lights, up a short climb.' } },
    { name: { ko: '롯데월드타워·석촌호수', ja: 'ロッテワールドタワー・石村湖', zh: '乐天世界塔·石村湖', en: 'Lotte Tower & Seokchon lake' }, region: 'capital', q: '석촌호수', note: { ko: '초고층 빌딩이 호수에 비칩니다.', ja: '超高層ビルが湖に映る。', zh: '摩天大楼倒映在湖中。', en: 'The tower doubled in the lake.' } },
    { name: { ko: '송도 센트럴파크', ja: '松島セントラルパーク', zh: '松岛中央公园', en: 'Songdo Central Park' }, region: 'capital', q: '송도 센트럴파크', note: { ko: '인천. 빌딩과 수로가 만드는 도시 야경.', ja: '仁川。建物と水路が作る街の夜景。', zh: '仁川。由建筑物和水道营造出的城市夜景。', en: 'Incheon: towers and canals at night.' } },
    { name: { ko: '인천 개항장·차이나타운', ja: '仁川開港場・チャイナタウン', zh: '仁川开港·唐人街', en: 'Incheon open port & Chinatown' }, region: 'capital', q: '인천 차이나타운', note: { ko: '이국적인 골목 조명과 근대 건축.', ja: 'エキゾチックな路地照明と近代建築。', zh: '充满异国情调的小巷灯光和现代建筑。', en: 'Foreign-looking lanes and modern-era buildings.' } },
    { name: { ko: '수원화성 방화수류정', ja: '水原華城防火水流錠', zh: '水原华城方华水流亭', en: 'Suwon Hwaseong & Banghwasuryujeong' }, region: 'capital', q: '방화수류정', note: { ko: '성곽 조명과 연못 반영. 미디어아트 행사도.', ja: '城の照明と池の反射。メディアアートイベントも。', zh: '城堡照明和池塘倒影。媒体艺术活动也是如此。', en: 'Lit walls reflected in the pond, with media-art events.' } },
    { name: { ko: '김포 라베니체', ja: '金浦ラベニツェ', zh: '金浦·拉韦尼斯', en: 'Gimpo Laveniche' }, region: 'capital', q: '라베니체', note: { ko: '수로와 다리 조명이 이어지는 거리.', ja: '水路と橋の照明が続く距離。', zh: '一条有水道和桥灯的街道。', en: 'A street of canals and lit bridges.' } },
    { name: { ko: '남한산성 서문전망대', ja: '南漢山城西門展望台', zh: '南汉山城西门展望台', en: 'Namhansanseong west gate lookout' }, region: 'capital', q: '남한산성 서문전망대', note: { ko: '수도권 도시 불빛. 야간 산길 주의.', ja: '首都圏の街灯。夜間の山道注意。', zh: '大都市的灯光。晚上在山路上要小心。', en: 'The lights of the capital region; take care on the mountain road.' } },
    { name: { ko: '아침고요수목원 오색별빛정원전', ja: '朝高陽樹木園五色星光庭園展', zh: '晨静植物园五色星光园展', en: 'Morning Calm winter lights' }, region: 'capital', q: '아침고요수요원 오색별빛정원전', note: { ko: '겨울철 조명 축제, 계절 한정.', ja: '冬季照明祭り、季節限定。', zh: '冬季灯光节，仅限季节性。', en: 'A winter light festival, seasonal only.' } },
    { name: { ko: '안반데기', ja: 'アンバンデギ', zh: '南极洲', en: 'Anbandegi' }, region: 'gangwon', q: '안반데기', note: { ko: '강릉. 고지대 은하수, 도로 상황 확인.', ja: '江陵。高地天の天の川、道路状況確認。', zh: '江陵。高空银河，查看路况。', en: 'Gangneung: the Milky Way from high ground; check the road.' } },
    { name: { ko: '별마로천문대', ja: '別に天文台', zh: '星马路展望台', en: 'Byeolmaro observatory' }, region: 'gangwon', q: '별마로천문대', note: { ko: '영월. 천체 관측과 별자리 여행.', ja: '永月。天体観測と星座旅行。', zh: '宁越。天文观测和星座旅行。', en: 'Yeongwol: telescopes and constellations.' } },
    { name: { ko: '추암해변', ja: 'チュアムビーチ', zh: '楚姆海滩', en: 'Chuam Beach' }, region: 'gangwon', q: '추암해변', note: { ko: '동해. 촛대바위와 바다 야경, 일출과 연계.', ja: '東海。ローソク足の岩と海の夜景、日の出との連携。', zh: '东海。草台岩和与日出相连的夜景。', en: 'Donghae: rock formations over the night sea, paired with sunrise.' } },
    { name: { ko: '묵호항·묵호등대', ja: '黙号港・黙護灯台', zh: '墨湖港/墨湖灯塔', en: 'Mukho harbour & lighthouse' }, region: 'gangwon', q: '묵호등대', note: { ko: '항구 조명과 밤바다 산책.', ja: '港の照明と夜の海の散歩。', zh: '港口灯光和夜间海上散步。', en: 'Harbour lights and a night sea walk.' } },
    { name: { ko: '단양강 잔도', ja: '丹陽川残島', zh: '丹阳河残迹', en: 'Danyang cliff walkway' }, region: 'jeolla', q: '단양강잔도', note: { ko: '강변 절벽을 따라 걷는 야간 산책.', ja: '川辺の崖に沿って歩く夜の散歩。', zh: '晚上沿着河边悬崖散步。', en: 'A night walk along the cliff above the river.' } },
    { name: { ko: '수양개 빛터널', ja: '水揚げ光トンネル', zh: '水阳盖灯光隧道', en: 'Suyanggae light tunnel' }, region: 'jeolla', q: '수양개빛터널', note: { ko: '터널 미디어아트. 운영일 확인.', ja: 'トンネルメディアアート。営業日確認。', zh: '隧道媒体艺术。检查营业天数。', en: 'A media-art tunnel; check opening days.' } },
    { name: { ko: '예당호 출렁다리', ja: 'イェダンホ', zh: '礼堂湖吊桥', en: 'Yedangho bridge' }, region: 'jeolla', q: '예당호출렁다리', note: { ko: '호수 위 다리와 음악분수, 야간 조명.', ja: '湖の上の橋と音楽噴水、夜間照明。', zh: '湖上的桥梁、音乐喷泉和夜间灯光。', en: 'A lake bridge, music fountain and night lighting.' } },
    { name: { ko: '부여 궁남지', ja: '付与宮南地', zh: '扶余宫南地', en: 'Buyeo Gungnamji' }, region: 'jeolla', q: '궁남지', note: { ko: '연못과 정자의 수면 반영.', ja: '池と精子の睡眠を反映。', zh: '池塘和亭子的水中倒影。', en: 'Pavilion and pond reflected.' } },
    { name: { ko: '공주 공산성', ja: 'プリンセス共産省', zh: '恭山城公主', en: 'Gongju Gongsanseong' }, region: 'jeolla', q: '공산성', note: { ko: '백제 성곽과 야간 조명, 미디어아트 행사.', ja: '百済の城と夜の照明、メディアアートのイベント。', zh: '百济城、夜间灯光和媒体艺术活动。', en: 'Baekje walls with night lighting and media-art events.' } },
    { name: { ko: '삽교호 관광지', ja: 'シャッホ湖観光地', zh: '叉桥湖旅游景点', en: 'Sapgyo lake park' }, region: 'jeolla', q: '삽교호관광지', note: { ko: '대관람차와 호수 야경.', ja: '大観覧車と湖の夜景。', zh: '摩天轮和湖夜景。', en: 'A big wheel and the lake at night.' } },
    { name: { ko: '홍성스카이타워', ja: 'ホンソンスカイタワー', zh: '洪城天空塔', en: 'Hongseong Sky Tower' }, region: 'jeolla', q: '홍성스카이타워', note: { ko: '남당항과 서해 조망.', ja: '南党港と西海の眺め。', zh: '南堂港和西海的景色。', en: 'Over Namdang harbour and the west sea.' } },
    { name: { ko: '경주 동궁과 월지', ja: '慶州東宮とウォルジー', zh: '庆州东宫和月池', en: 'Gyeongju Donggung & Wolji' }, region: 'gyeongsang', q: '동궁과 월지', note: { ko: '해 진 뒤 30분이 가장 예쁩니다.', ja: 'なってから30分が一番きれいです。', zh: '日落后30分钟是最美的时候。', en: 'Best half an hour after sunset.' } },
    { name: { ko: '경주 월정교', ja: '慶州月精橋', zh: '庆州月精大桥', en: 'Gyeongju Woljeonggyo' }, region: 'gyeongsang', q: '월정교', note: { ko: '전통 목조 다리와 조명.', ja: '伝統的な木製の橋と照明。', zh: '传统的木桥和灯光。', en: 'A rebuilt timber bridge, lit.' } },
    { name: { ko: '포항 스페이스워크', ja: '浦項スペースワーク', zh: '浦项太空漫步', en: 'Pohang Space Walk' }, region: 'gyeongsang', q: '스페이스워크', note: { ko: '철제 곡선 구조물과 영일만 전망. 입장 마감 확인.', ja: '鉄製曲線構造物と英日湾展望。入場締切確認。', zh: '钢制弧形结构和宁日湾的景色。确认报名截止日期。', en: 'A steel curve over Yeongil bay; check last entry.' } },
    { name: { ko: '안동 월영교', ja: '安東月営橋', zh: '安东月岭大桥', en: 'Andong Woryeonggyo' }, region: 'gyeongsang', q: '월영교', note: { ko: '달빛과 목조 다리, 조용한 산책.', ja: '月明かりと木製の橋、静かな散歩。', zh: '月光下，木桥，安静的行走。', en: 'Moonlight on a timber bridge.' } },
    { name: { ko: '영양 국제밤하늘보호공원', ja: '栄養国際夜空保護公園', zh: '英阳国际暗夜保护公园', en: 'Yeongyang dark sky park' }, region: 'gyeongsang', q: '영양 국제밤하늘보호공원', note: { ko: '어두운 밤하늘과 은하수, 천체 사진.', ja: '暗い夜空と天の川、天体の写真。', zh: '漆黑的夜空，银河，天文摄影。', en: 'A dark sky and the Milky Way.' } },
    { name: { ko: '광안리해수욕장', ja: '広安里海水浴場', zh: '广安里海水浴场', en: 'Gwangalli Beach' }, region: 'gyeongsang', q: '광안리해수욕장', note: { ko: '광안대교 조명, 드론 라이트쇼.', ja: '広安大橋照明、ドローンライトショー。', zh: '广安大桥灯光秀、无人机灯光秀。', en: 'Bridge lights and the drone show.' } },
    { name: { ko: '황령산 전망쉼터', ja: '黄霊山展望避難所', zh: '皇令山山景休息处', en: 'Hwangnyeongsan lookout' }, region: 'gyeongsang', q: '황령산봉수대', note: { ko: '부산 도심과 광안대교 파노라마.', ja: '釜山市中心部と広安大橋のパノラマ。', zh: '釜山市中心和广安大桥的全景。', en: 'The city and the bridge in one panorama.' } },
    { name: { ko: '통영 디피랑', ja: '統営ディフィラン', zh: '统营迪菲郎', en: 'Tongyeong Dipirang' }, region: 'gyeongsang', q: '디피랑', note: { ko: '빛·영상·음악의 야간 테마파크. 휴장일 확인.', ja: '光・映像・音楽の夜間テーマパーク。休日の確認。', zh: '灯光、视频和音乐的夜间主题公园。检查关闭日期。', en: 'A night park of light, image and music; check closing days.' } },
    { name: { ko: '사천바다케이블카', ja: '四川海ケーブルカー', zh: '泗川海上缆车', en: 'Sacheon sea cable car' }, region: 'gyeongsang', q: '사천바다케이블카', note: { ko: '바다와 섬, 다리 조망. 야간 운행일 확인.', ja: '海と島、橋の眺め。夜間運行日確認。', zh: '可观看大海、岛屿和桥梁风景。检查夜间运营日期。', en: 'Sea, islands and bridges; check night operation.' } },
    { name: { ko: '여수 돌산대교', ja: '麗水ドルサン大橋', zh: '丽水突山大桥', en: 'Yeosu Dolsan bridge' }, region: 'jeolla', q: '돌산대교', note: { ko: '다리 조명과 여수항 야경, 낭만포차거리.', ja: '橋の照明と麗水港の夜景、ロマンチックな通り。', zh: '大桥灯光、丽水港夜景、浪漫马车街。', en: 'Bridge lights over the harbour, with the pocha street.' } },
    { name: { ko: '여수 빅오쇼', ja: '麗水ビッグショー', zh: '丽水大O秀', en: 'Yeosu Big-O Show' }, region: 'jeolla', q: '빅오쇼', note: { ko: '워터스크린과 영상·음악 공연. 시즌 확인.', ja: 'ウォータースクリーンと映像・音楽公演。シーズン確認。', zh: '水幕、视频和音乐表演。检查季节。', en: 'A water-screen show; seasonal.' } },
    { name: { ko: '남원 광한루원', ja: '南原クァンハンルーワン', zh: '南原广寒路院', en: 'Namwon Gwanghalluwon' }, region: 'jeolla', q: '광한루원', note: { ko: '연못과 오작교의 야경, 야간 개장 기간 확인.', ja: '池と五作橋の夜景、夜間開場期間確認。', zh: '池塘和乌雀桥的夜景，请确认夜间开放时间。', en: 'A pond and bridge at night; check the night opening.' } },
    { name: { ko: '광양 구봉산 전망대', ja: '光陽九峰山展望台', zh: '光阳九峰山展望台', en: 'Gwangyang Gubongsan lookout' }, region: 'jeolla', q: '구봉산 전망대', note: { ko: '광양만 산업단지와 바다 야경.', ja: '光陽湾産業団地と海の夜景。', zh: '光阳湾工业园区和海景夜景。', en: 'The bay, the port and the lights.' } },
    { name: { ko: '목포 해상케이블카', ja: '木浦海上ケーブルカー', zh: '木浦海上缆车', en: 'Mokpo sea cable car' }, region: 'jeolla', q: '목포해상케이블카', note: { ko: '유달산과 목포대교 야경. 야간 운행 확인.', ja: 'ユダル山と木浦大橋の夜景。夜間運行確認。', zh: '儒达山和木浦大桥的夜景。检查夜间驾驶。', en: 'Yudalsan and the bridge; check night service.' } },
    { name: { ko: '순천만국가정원 야간', ja: '順天万国家庭園夜間', zh: '顺天湾国家花园的夜景', en: 'Suncheon garden at night' }, region: 'jeolla', q: '순천만국가정원', note: { ko: '정원 조명과 야간 산책.', ja: '庭の照明と夜の散歩。', zh: '花园灯光和夜间散步。', en: 'A lit garden and a night walk.' } },
    { name: { ko: '군산 고군산군도', ja: '群山高郡山群島', zh: '群山古群山群岛', en: 'Gunsan Gogunsan islands' }, region: 'jeolla', q: '고군산군도', note: { ko: '섬과 다리, 바다의 야간 드라이브.', ja: '島と橋、海の夜間ドライブ。', zh: '晚上开车前往岛屿、桥梁和大海。', en: 'Islands, bridges and a night drive over the sea.' } },
    { name: { ko: '제주 새연교', ja: '済州新連橋', zh: '济州新缘桥', en: 'Jeju Saeyeongyo' }, region: 'jeju', q: '새연교', note: { ko: '바다 위 보행교와 조명.', ja: '海の上の歩行橋と照明。', zh: '海上的人行桥和灯光。', en: 'A footbridge over the water, lit.' } },
    { name: { ko: '제주별빛누리공원', ja: '済州スターライトヌリ公園', zh: '济州星光努里公园', en: 'Jeju star park' }, region: 'jeju', q: '제주별빛누리공원', note: { ko: '천문 전시와 천체 관측.', ja: '天文展示と天体観測。', zh: '天文展览和天体观测。', en: 'Astronomy displays and telescopes.' } },
    { name: { ko: '용눈이오름', ja: '龍雪が上がる', zh: '龙努尼火山', en: 'Yongnuni oreum' }, region: 'jeju', q: '용눈이오름', note: { ko: '오름 능선과 밤하늘. 야간 출입 제한 확인.', ja: '昇る尾根と夜空。夜間アクセス制限の確認。', zh: '奥勒姆山脊和夜空。检查夜间访问限制。', en: 'A volcanic ridge under the night sky; check access rules.' } },
    { name: { ko: '섭지코지', ja: '摂地コージー', zh: '涉地可支', en: 'Seopjikoji' }, region: 'jeju', q: '섭지코지', note: { ko: '해안과 등대의 저녁, 야간 드라이브.', ja: '海岸と灯台の夜、夜間ドライブ。', zh: '晚上，夜车前往海岸和灯塔。', en: 'Coast and lighthouse at dusk, then a night drive.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '☕', dish: { ko: '토스트 · 커피', ja: 'トースト・コーヒー', zh: '吐司·咖啡', en: 'Toast · coffee' }, note: { ko: '늦게 시작하는 날이라 가볍게.', ja: '遅く始まる日なので軽く。', zh: '今天开始的时间比较晚，所以放轻松。', en: 'A late start needs only something small.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '밀면 · 국밥', ja: '押し面・クッパ', zh: '米尔面·汤包饭', en: 'Cold wheat noodles · rice soup' }, note: { ko: '부산은 밀면과 국밥이 기본입니다.', ja: '釜山は小麦綿とクッパが基本です。', zh: '在釜山，面条和汤是基本的。', en: 'In Busan it is milmyeon and gukbap.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🥐', dish: { ko: '씨앗호떡 · 어묵', ja: '種子餅・おまけ', zh: '种子火锅·鱼饼', en: 'Seed hotteok · fish cake' }, note: { ko: '해변 골목에서 갓 튀긴 것.', ja: 'ビーチの路地で新鮮な揚げ物。', zh: '来自海滩小巷的新鲜油炸食品。', en: 'Fresh from the fryer in the beach alleys.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🦐', dish: { ko: '조개구이 · 회 · 해물탕', ja: '貝焼・刺身・海鮮湯', zh: '烤蛤蜊、生鱼、海鲜炖菜', en: 'Grilled shellfish · sashimi · seafood stew' }, note: { ko: '다리 조명을 보며 바닷가에서.', ja: '橋の照明を見てビーチで。', zh: '在海边看桥上的灯光。', en: 'On the beach, with the bridge lit in front of you.' } }
  ],
  photos: [
    { file: 'th-night', cap: { ko: '해 질 무렵의 바다 마을', ja: '夕暮れ時の海の村', zh: '夕阳下的海村', en: 'A seaside village at dusk' } },
    { file: 'th-night-p2', cap: { ko: '도시의 야경', ja: '街の夜景', zh: '城市夜景', en: 'City lights at night' } }
  ],
  tip: { ko: '야경은 일몰 30분 뒤가 가장 진합니다. 상시 명소와 날짜 한정 야간개장·공연을 구분해 계획하면 헛걸음이 없습니다.', ja: '夜景は日没30分後が一番濃いです。常時スポットと日程限定夜間開場・公演を区分して計画すると無駄がありません。', zh: '日落后30分钟夜景最亮。如果你单独规划永久景点和限时夜间开放和表演，就不会出错。', en: 'The light is deepest half an hour after sunset. Separate permanent spots from date-limited openings and shows before you plan.' }
},
