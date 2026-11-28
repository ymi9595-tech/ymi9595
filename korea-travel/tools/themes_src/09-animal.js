/* --------------------------------------------- 09 동물농장·목장 체험 */
{
  id: 'animal', emoji: '🐄', tint: '#FFD9A0',
  name: { ko: '동물농장 · 목장 체험', ja: '動物農場・牧場体験', zh: '动物农场·牧场体验', en: 'Animal farms & ranches' },
  sub: { ko: '먹이 주고, 쓰다듬고, 초원을 걷는 하루', ja: '餌をやり、なでて、草原を歩く一日', zh: '喂食、抚摸、在草原上走的一天', en: 'Feed, touch, and walk the pasture' },
  tag: { ko: '양·알파카·송아지 · 먹이주기', ja: '羊・アルパカ・子牛・餌やり', zh: '羊·羊驼·小牛·喂食', en: 'Sheep, alpacas, calves — feeding time' },
  intro: {
    ko: '동물농장은 고도와 계절이 중요합니다. 대관령은 여름에도 서늘하고, 겨울에는 방목이 줄어듭니다. 여기서는 KTX 진부역에서 버스로 닿는 대관령 목장 세 곳을 잇는 하루를 기본으로 잡았어요. 전국의 목장과 동물농장, 그리고 동물별 체험 종류는 아래 목록에 정리했습니다.', ja: '動物農場は高度と季節が重要です。大管領は夏にも涼しく、冬には放牧が減ります。ここでは、KTX鎮部駅からバスで到着する大関嶺牧場の3か所をつなぐ一日を基本とした。全国の牧場や動物農場、そして動物別体験の種類は下のリストにまとめました。', zh: '海拔和季节对于动物农场来说很重要。大关岭夏季气候凉爽，冬季放牧减少。在这里，我们决定花一天时间连接三个大关岭牧场，从KTX珍富站乘坐巴士即可到达。下面列出了全国各地的牧场和动物农场，以及每种动物的体验类型。',
    en: 'Altitude and season decide an animal-farm day: Daegwallyeong stays cool in summer and grazes less in winter. This route links three ranches above Gangneung, reachable by bus from Jinbu station on the KTX. Ranches and animal farms around the country are listed below.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }],
  transport: { ko: 'KTX + 버스·택시', ja: 'KTX＋バス・タクシー', zh: 'KTX＋巴士·出租车', en: 'KTX + bus or taxi' },
  duration: { ko: '약 9시간', ja: '約9時間', zh: '约9小时', en: 'About 9 hours' },
  hub: {
    ko: '진부역(오대산)', ja: '金武駅（五台山）', zh: '珍富站（五台山）', en: 'Jinbu (Odaesan) Station', q: '진부역',
    note: {
      ko: 'KTX 강릉선. 서울 청량리에서 1시간 10분. 역에서 대관령 목장 지대까지 버스로 25분, 택시로 20분입니다. 목장끼리는 서로 멀어 택시를 쓰는 편이 낫습니다.', ja: 'KTX江陵線。ソウル清涼里から1時間10分。駅から大関領牧場地帯までバスで25分、タクシーで20分です。牧場同士は互いに離れてタクシーを使う方が良いです。', zh: 'KTX江陵线。距离首尔清凉里1小时10分钟。从车站乘坐巴士25分钟或乘坐出租车20分钟即可到达大关岭牧场。牧场之间距离较远，最好乘坐出租车。',
      en: 'On the KTX Gangneung line, seventy minutes from Cheongnyangni. The ranch area is 25 minutes by bus or 20 by taxi; the ranches are far apart, so a taxi between them saves time.'
    }
  },
  course: {
    title: { ko: '대관령 — 양떼목장에서 하늘목장까지', ja: '大関嶺 — 羊の牧場から空の牧場まで', zh: '大关岭——从羊群牧场到天空牧场', en: 'Daegwallyeong — sheep ranch to sky ranch' },
    meta: { ko: '6곳 · 약 9시간 · 이동 40km', ja: '6か所・約9時間・移動40km', zh: '6个地点，约9小时，行程40公里', en: '6 stops · about 9 hours · 40 km' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '진부역', ja: '金武駅', zh: '珍富站', en: 'Jinbu Station' }, q: '진부역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역에서 대관령 방면 버스로. 목장은 예약 없이도 들어갈 수 있지만, 먹이 주기는 현장 구매입니다.', ja: '駅から大関領方面バスへ。牧場は予約なしで入ることができますが、給餌は現場での購入です。', zh: '从车站乘坐前往大关岭方向的巴士。无需预约即可进入牧场，但饲料需现场购买。', en: 'A Daegwallyeong bus from outside; ranches admit walk-ins, with feed bought on site.' } },
      { phase: 'morning', time: '10:00', name: { ko: '대관령 양떼목장', ja: '大管領羊群牧場', zh: '大关岭羊牧场', en: 'Daegwallyeong Sheep Ranch' }, q: '대관령양떼목장', move: { ko: '버스 약 25분', ja: 'バス約25分', zh: '巴士约25分钟', en: 'Bus, about 25 min' },
        desc: { ko: '초원을 따라 40분쯤 걷는 목장. 양 먹이 주기 체험이 있고, 울타리 안으로 들어가면 양이 먼저 다가옵니다.', ja: '草原に沿って40分ほど歩く牧場。羊の餌付け体験があり、フェンスの中に入ると羊が先に近づきます。', zh: '可以沿着草地步行约40分钟的牧场。有喂羊体验，当你进入围栏时，羊会先靠近你。', en: 'A forty-minute walk around a pasture, with sheep feed on sale — step inside the fence and they come to you.' },
        photo: 'th-animal' },
      { phase: 'morning', time: '11:40', name: { ko: '대관령 삼양목장', ja: '大管領サムヤン牧場', zh: '大关岭三养牧场', en: 'Samyang Ranch' }, q: '대관령 삼양목장', note: { ko: '', en: '' }, move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '차로 초원을 통과하는 목장. 정상 전망대에서 동해까지 보이는 날이 있습니다. 겨울에는 방목이 줄어듭니다.', ja: '車で牧草地を通過する牧場。頂上展望台から東海まで見える日があります。冬には放牧が減ります。', zh: '开车经过一片草地的牧场。有时从山顶展望台可以看到东海。冬季放牧减少。', en: 'A ranch you drive through; on clear days the East Sea shows from the top. Grazing thins out in winter.' } },
      { phase: 'lunch', time: '13:00', name: { ko: '대관령 점심', ja: '大管領ランチ', zh: '大关岭午餐', en: 'Lunch at Daegwallyeong' }, q: '대관령면', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '황태와 감자, 메밀로 만든 산간 음식. 목장 사이 식당은 12시부터 붐빕니다.', ja: '王子とジャガイモ、そばで作られた山間料理。牧場の間のレストランは12時から混雑しています。', zh: '由干明太鱼、土豆和荞麦制成的山食品。牧场之间的餐厅从12点开始就变得拥挤起来。', en: 'Mountain food: dried pollack, potatoes, buckwheat. The places between ranches fill from noon.' } },
      { phase: 'afternoon', time: '14:20', name: { ko: '대관령 하늘목장', ja: '大管領天牧場', zh: '大关岭天空牧场', en: 'Daegwallyeong Sky Ranch' }, q: '대관령 하늘목장', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '트랙터 마차를 타고 초원 위로 올라갑니다. 양과 염소에게 먹이를 주는 시간이 정해져 있으니 입구에서 확인하세요.', ja: 'トラクターの馬車に乗って草原の上に上がります。羊やヤギに餌を与える時間が決まっているので、入り口で確認してください。', zh: '乘坐拖拉机货车行驶在草地上。绵羊和山羊有固定的喂食时间，因此请在入口处检查。', en: 'A tractor wagon climbs the pasture; feeding times for sheep and goats are posted at the gate.' },
        photo: 'th-animal-p2' },
      { phase: 'afternoon', time: '16:00', name: { ko: '주주파크', ja: '株主パーク', zh: '朱朱公园', en: 'Juju Park' }, q: '대관령 주주파크', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '아기 양과 토끼, 조랑말을 가까이에서 보는 작은 목장. 아이와 함께라면 여기서 시간이 다 갑니다.', ja: '赤ちゃんの羊とウサギ、ポニーを間近で見る小さな牧場。子どもと一緒ならここで時間が尽きます。', zh: '一个小牧场，您可以近距离看到小绵羊、兔子和小马。如果你带着孩子，这里的时间就不够了。', en: 'A small farm with lambs, rabbits and ponies up close — with children, the afternoon disappears here.' } },
      { phase: 'return', time: '17:40', name: { ko: '진부역', ja: '金武駅', zh: '珍富站', en: 'Jinbu Station' }, q: '진부역', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
        desc: { ko: '역으로 내려와 KTX. 목장에서는 옷에 냄새가 배니 갈아입을 것을 하나 챙기세요.', ja: '駅に降りてKTX。牧場では、服に臭いがバニー着替えることをひとつ取ります。', zh: '到车站乘坐 KTX。在牧场，你的衣服会有异味，所以要带换洗的衣服。', en: 'Down to the station for the KTX — bring a change of clothes, ranch air stays on you.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Cost' }, v: { ko: '목장 입장 8,000~18,000원, 먹이·승마 별도', ja: '牧場入場 8,000～18,000ウォン、餌・乗馬別途', zh: '牧场入场费8,000~18,000韩元，喂食和骑马分开。', en: 'Entry ₩8,000–18,000; feed and rides extra' } },
    { k: { ko: '예약', ja: '予約', zh: '预约', en: 'Booking' }, v: { ko: '대형 목장은 당일 가능, 체험 프로그램은 예약제', ja: '大型牧場は当日可能、体験プログラムは予約制', zh: '大型牧场可当天开放，体验项目需预约。', en: 'Large ranches take walk-ins; programmes need booking' } },
    { k: { ko: '동물 예절', ja: '動物の礼節', zh: '动物礼仪', en: 'Animal manners' }, v: { ko: '손 펴서 먹이, 눈높이 맞추기, 뛰지 않기, 촬영 금지 구역 확인', ja: '手を伸ばして餌、目の高さを合わせる、走らない、撮影禁止エリアを確認する', zh: '张开双手喂食，保持视线水平，不要奔跑，检查禁止拍照的区域。', en: 'Flat palm for feed, get down to their height, no running, watch no-photo signs' } }
  ],
  places: [
    { name: { ko: '안성팜랜드', ja: '安城パームランド', zh: '安城农场', en: 'Anseong Farmland' }, region: 'capital', q: '안성팜랜드', note: { ko: '안성 공도. 양·염소·토끼·알파카 먹이주기와 승마. 대인 15,000원 안내, 평일 10~18시.', ja: '安城ハイウェー。羊・ヤギ・ウサギ・アルパカの餌付けと乗馬。大人15,000ウォン案内、平日10～18時。', zh: '安城高速公路。喂养绵羊、山羊、兔子和羊驼并骑马。成人15,000韩元，工作日晚上10点至18点', en: 'Gongdo, Anseong: feeding for sheep, goats, rabbits and alpacas plus riding; around ₩15,000 for adults, 10–18:00 on weekdays.' } },
    { name: { ko: '대관령 양떼목장', ja: '大管領羊群牧場', zh: '大关岭羊牧场', en: 'Daegwallyeong Sheep Ranch' }, region: 'gangwon', q: '대관령양떼목장', note: { ko: '초원 산책 40분, 양 먹이 주기. 진부역에서 버스.', ja: '草原散歩40分、羊の餌やり。金武駅からバス。', zh: '40分钟在草地上散步，喂羊。从珍富站乘坐巴士。', en: 'A forty-minute pasture walk and sheep feeding, bus from Jinbu station.' } },
    { name: { ko: '대관령 삼양목장', ja: '大管領サムヤン牧場', zh: '大关岭三养牧场', en: 'Samyang Ranch' }, region: 'gangwon', q: '대관령 삼양목장', note: { ko: '차로 도는 초원 목장. 동절기 방목 제한.', ja: '車で回る草原牧場。冬の放牧制限。', zh: '开车即可到达的草地牧场。限制冬季放牧。', en: 'A drive-through pasture; grazing is limited in winter.' } },
    { name: { ko: '대관령 하늘목장', ja: '大管領天牧場', zh: '大关岭天空牧场', en: 'Sky Ranch' }, region: 'gangwon', q: '대관령 하늘목장', note: { ko: '트랙터 마차와 양 먹이주기. 초원이 넓습니다.', ja: 'トラクターの馬車と羊の供給。草原は広いです。', zh: '拖拉机车和羊饲料。草原很宽阔。', en: 'Tractor wagon and sheep feeding across a wide pasture.' } },
    { name: { ko: '알파카월드', ja: 'アルパカワールド', zh: '羊驼世界', en: 'Alpaca World' }, region: 'gangwon', q: '알파카월드', note: { ko: '홍천. 알파카 산책과 먹이주기, 10~18시, 입장 18,000원 안내.', ja: 'ホンチョン。アルパカ散歩と餌やり、10～18時、入場18,000ウォンのご案内。', zh: '洪川.羊驼散步和喂食，晚上10点至18点，入场费18,000韩元。', en: 'Hongcheon: alpaca walks and feeding, 10–18:00, around ₩18,000.' } },
    { name: { ko: '홍천동키마을', ja: 'ホンチョンドンキ村', zh: '洪川洞重点村', en: 'Hongcheon Donkey Village' }, region: 'gangwon', q: '홍천동키마을', note: { ko: '당나귀·말·토끼·앵무새. 승마 체험도 있습니다.', ja: 'ロバ・馬・ウサギ・オウム。乗馬体験もあります。', zh: '驴、马、兔、鹦鹉。还有骑马体验。', en: 'Donkeys, horses, rabbits and parrots, with pony rides.' } },
    { name: { ko: '은아목장', ja: 'ウンア牧場', zh: '尤娜牧场', en: 'Euna Ranch' }, region: 'capital', q: '은아목장', note: { ko: '여주. 젖 짜기와 치즈·피자 만들기 체험.', ja: 'ヨジュ。搾りとチーズ・ピザ作り体験。', zh: '骊州。体验挤牛奶、制作奶酪和披萨。', en: 'Yeoju: milking plus cheese and pizza making.' } },
    { name: { ko: '농도원목장', ja: '濃度源牧場', zh: '东远牧场', en: 'Nongdowon Ranch' }, region: 'capital', q: '농도원목장', note: { ko: '용인. 송아지 우유주기와 트랙터 체험, 사전예약.', ja: '龍仁。子牛ミルクサイクルとトラクター体験、事前予約。', zh: '龙仁。牛犊挤奶和拖拉机体验，需提前预约。', en: 'Yongin: bottle-feeding calves and a tractor ride, by reservation.' } },
    { name: { ko: '가평 양떼목장', ja: '加平羊群牧場', zh: '加平养羊场', en: 'Gapyeong Sheep Ranch' }, region: 'capital', q: '가평양떼목장', note: { ko: '양·알파카·당나귀 먹이주기. 서울에서 한 시간.', ja: '羊・アルパカ・ロバの餌付け。ソウルで1時間。', zh: '喂养绵羊、羊驼和驴。距离首尔一小时。', en: 'Feed sheep, alpacas and donkeys, an hour from Seoul.' } },
    { name: { ko: '새별프렌즈', ja: '鳥星フレンズ', zh: '新星朋友', en: 'Saebyeol Friends' }, region: 'jeju', q: '새별프렌즈', note: { ko: '제주 애월. 알파카·말·당나귀·사슴 먹이주기.', ja: '済州の愛月。アルパカ・馬・ロバ・鹿の餌付け。', zh: '涯月，济州岛。喂养羊驼、马、驴和鹿。', en: 'Aewol, Jeju: feeding alpacas, horses, donkeys and deer.' } },
    { name: { ko: '아침미소목장', ja: '朝美小牧場', zh: '晨笑牧场', en: 'Achim Miso Ranch' }, region: 'jeju', q: '아침미소목장', note: { ko: '제주. 송아지 우유주기와 목장 산책.', ja: '済州。子牛のミルクサイクルと牧場の散歩。', zh: '济州岛。挤牛奶和行走牧场。', en: 'Jeju: bottle-feeding calves and a pasture walk.' } },
    { name: { ko: '산토끼노래동산', ja: 'サンウサギの歌の園', zh: '山兔歌园', en: 'Santoki Song Garden' }, region: 'gyeongsang', q: '산토끼노래동산', note: { ko: '창녕. 토끼 10종과 작은 동물원, 성인 2,000원.', ja: 'チャンニョン。ウサギ10種と小動物園、大人2,000ウォン。', zh: '昌宁. 10种兔子和一个小动物园，成人2000韩元。', en: 'Changnyeong: ten rabbit breeds and a small zoo, ₩2,000 for adults.' } },
    { name: { ko: '아가새농장', ja: '赤ちゃん農場', zh: '阿加斯农场', en: 'Agasae Farm' }, region: 'jeolla', q: '아가새농장', note: { ko: '홍성. 앵무새·토끼·기니피그·파충류 관찰.', ja: 'ホンソン。オウム・ウサギ・モルモット・爬虫類観察。', zh: '洪城.观察鹦鹉、兔子、豚鼠和爬行动物。', en: 'Hongseong: parrots, rabbits, guinea pigs and reptiles.' } },
    { name: { ko: '에코팜', ja: 'エコパーム', zh: '生态农场', en: 'Eco Farm' }, region: 'jeolla', q: '진천 에코팜', note: { ko: '진천. 사슴·말·토끼와 여러 품종의 닭.', ja: 'ジンチョン。鹿・馬・ウサギと様々な品種の鶏。', zh: '镇川.鹿、马、兔子和各种品种的鸡。', en: 'Jincheon: deer, horses, rabbits and many chicken breeds.' } },
    { name: { ko: '몽토랑산양목장', ja: 'モントラン山羊牧場', zh: '蒙托兰山羊牧场', en: 'Mongtorang goat ranch' }, region: 'gangwon', q: '몽토랑산양목장', note: { ko: '산양 먹이주기와 아이스크림·비누 만들기.', ja: 'ヤギの餌やりとアイスクリーム・石鹸作り。', zh: '喂养山羊并制作冰淇淋和肥皂。', en: 'Goat feeding with ice cream and soap making.' } },
    { name: { ko: '하양목장', ja: 'ハヤン牧場', zh: '河阳牧场', en: 'Hayang Ranch' }, region: 'gangwon', q: '하양목장', note: { ko: '홍천. 양과 동물 교감, 목동 체험.', ja: 'ホンチョン。羊と動物の交感、牧童体験。', zh: '洪川.与羊、动物交流，体验牧羊。', en: 'Hongcheon: sheep, small animals and shepherd-for-a-day.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥛', dish: { ko: '우유 · 빵 · 요거트', ja: '牛乳・パン・ヨーグルト', zh: '牛奶、面包、酸奶', en: 'Milk · bread · yoghurt' }, note: { ko: '목장 지대라 유제품이 신선합니다.', ja: '牧場地帯で乳製品が新鮮です。', zh: '因为是牧场区，所以奶制品很新鲜。', en: 'Dairy country — the milk is fresh.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🐟', dish: { ko: '황태해장국 · 감자전 · 메밀전', ja: 'ファンテヘジャングク・ジャガイモ展・そば展', zh: '明太醒酒汤、土豆煎饼、荞麦煎饼', en: 'Dried-pollack soup · potato pancake · buckwheat pancake' }, note: { ko: '대관령의 산간 음식.', ja: '大管領の山間料理。', zh: '大关岭的山地美食。', en: 'The mountain food of Daegwallyeong.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍦', dish: { ko: '목장 아이스크림 · 치즈', ja: '牧場アイスクリーム・チーズ', zh: '牧场冰淇淋和奶酪', en: 'Ranch ice cream · cheese' }, note: { ko: '체험으로 만든 치즈는 집에 가져갈 수 있습니다.', ja: '体験で作ったチーズは家に持ち帰ることができます。', zh: '您可以将制作的奶酪带回家。', en: 'Cheese you make in a workshop travels home.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🥩', dish: { ko: '한우구이 · 감자탕', ja: '韓牛焼・ジャガイモ', zh: '烤韩牛·Gamjatang', en: 'Grilled beef · potato stew' }, note: { ko: '평창·횡성은 한우로 알려져 있습니다.', ja: '平昌・横城は韓牛として知られています。', zh: '平昌和横城以韩国牛肉而闻名。', en: 'Pyeongchang and Hoengseong are beef country.' } }
  ],
  photos: [
    { file: 'th-animal', cap: { ko: '초원의 양', ja: '草原の量', zh: '草地上的羊', en: 'Sheep in the pasture' } },
    { file: 'th-animal-p2', cap: { ko: '목장의 트랙터 마차', ja: '牧場のトラクター馬車', zh: '牧场上的拖拉机货车', en: 'A tractor wagon at the ranch' } }
  ],
  tip: { ko: '먹이는 손을 펴서 주세요. 손가락을 말아 쥐면 물립니다. 겨울에는 방목 시간이 짧아 오전 방문이 좋습니다.', ja: '供給する手を伸ばしてください。指を引っ張ると噛みます。冬には放牧時間が短く、午前の訪問が良いです。', zh: '请张开喂食的手。如果你弯曲手指并挤压它，它就会咬人。冬季放牧时间较短，建议上午游览。', en: 'Feed with a flat palm, never a curled fist. In winter grazing hours are short, so go in the morning.' }
},
