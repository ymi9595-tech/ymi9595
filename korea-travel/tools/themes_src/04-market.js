/* -------------------------------------------------- 04 전통시장·5일장 */
{
  id: 'market', emoji: '🧺', tint: '#F7A8B8',
  name: { ko: '전통시장 · 5일장', ja: '伝統市場・五日市', zh: '传统市场·五日集', en: 'Traditional & five-day markets' },
  sub: { ko: '시장 골목에서 하루를 먹고 걷는 코스', ja: '市場の路地で食べて歩く一日コース', zh: '在市场巷子里边吃边走的路线', en: 'A day of eating and walking market alleys' },
  tag: { ko: '시장 · 장날 · 골목 간식', ja: '市場・市日・路地の小吃', zh: '市场·赶集日·巷子小吃', en: 'Markets, market days, alley snacks' },
  intro: {
    ko: '시장은 오전에 가장 살아 있습니다. 상인들이 물건을 펴고, 아직 사람이 많지 않고, 갓 만든 것이 가장 따뜻할 때예요. 서울 안에서 네 개의 시장을 잇는 코스를 기본으로 잡았습니다. 지방 5일장은 장날이 닷새마다 돌아오니, 아래 목록에서 날짜를 확인하고 맞춰 가세요.', ja: '市場は午前中に最も生きています。商人が物を伸ばして、まだ人が多くなく、作りたてが最も暖かい時です。ソウルの中で4つの市場を結ぶコースを基本にとりました。地方の五日市は長日がドット毎に戻ってきますので、下のリストで日付を確認して合わせてください。', zh: '早上市场最热闹。此时正是商家拆箱的时候，人还不是很多，新鲜出炉的商品也处于最温暖的状态。我们决定选择一条连接首尔四个市场的路线。当地的五日集每五天就有一个市场日，因此请检查下面列表中的日期并进行相应的操作。',
    en: 'Markets are most alive in the morning: stalls opening, crowds still thin, everything just made. This route links four Seoul markets in a day. Outside the city the five-day markets rotate on a five-day cycle, so check the date in the list below before you go.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '설·추석 전', ja: '雪・秋夕前', zh: '农历新年和中秋节之前', en: 'Before holidays' }],
  transport: { ko: '지하철 + 도보', ja: '地下鉄＋徒歩', zh: '地铁＋步行', en: 'Subway + on foot' },
  duration: { ko: '약 9시간', ja: '約9時間', zh: '约9小时', en: 'About 9 hours' },
  hub: {
    ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station', q: '서울역',
    note: {
      ko: 'KTX·공항철도·1·4호선이 만나는 곳. 짐은 역 물품보관함에 맡기고 1호선으로 두 정거장이면 첫 시장입니다.', ja: 'KTX・空港鉄道・1・4号線が出会う場所。ジムは駅物品保管箱に預け、1号線で2駅であれば初の市場です。', zh: 'KTX、机场铁路以及1号线和4号线交汇处。将行李寄存在车站储物柜，然后乘坐1号线到第一个市场，两站路程。',
      en: 'KTX, the airport railroad and lines 1 and 4 meet here. Leave your bag in a locker; the first market is two stops on Line 1.'
    }
  },
  course: {
    title: { ko: '서울 문 밖 시장 하루 — 경동에서 신당까지', ja: 'ソウルの門の外、市場の一日 — 京東から新堂まで', zh: '首尔城门外市场的一天——从京东到新堂', en: 'A day of Seoul markets — Gyeongdong to Sindang' },
    meta: { ko: '7곳 · 약 9시간 · 지하철 4회', ja: '7か所・約9時間・地下鉄4回', zh: '7个地点，约9小时，乘坐4次地铁', en: '7 stops · about 9 hours · 4 subway rides' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '1호선으로 제기동까지 20분. 시장은 10시 전에 들어가야 사람이 적습니다.', ja: '1号線で提起洞まで20分。市場は10時前に入らなければ人が少なくなります。', zh: '1号线20分钟到祭基洞。如果10点前去市场，人会少一些。', en: 'Twenty minutes on Line 1 to Jegi-dong; markets are quietest before ten.' } },
      { phase: 'morning', time: '09:20', name: { ko: '경동시장 · 약령시', ja: '慶東市場・薬令市', zh: '京东市场·药令市', en: 'Gyeongdong Market & herbal street' }, q: '경동시장', move: { ko: '지하철 약 20분', ja: '地下鉄約20分', zh: '乘坐地铁约20分钟', en: 'Subway, about 20 min' },
        desc: { ko: '한약재 냄새가 골목 전체에 퍼진 큰 시장. 건조 과일과 인삼, 잡곡을 조금씩 사 두세요.', ja: '漢方薬のにおいが路地全体に広がった大きな市場。乾燥果物と高麗人参、雑穀を少しずつ買っておきます。', zh: '很大的市场，整个巷子里都弥漫着草药的香味。少量储备干果、人参和全谷物。', en: 'A big market where the smell of herbal medicine fills the alleys — dried fruit, ginseng, grains by the handful.' },
        photo: 'th-market' },
      { phase: 'morning', time: '11:00', name: { ko: '서울풍물시장', ja: 'ソウル風物市場', zh: '首尔民俗跳蚤市场', en: 'Seoul Folk Flea Market' }, q: '서울풍물시장', move: { ko: '지하철 약 15분', ja: '地下鉄約15分', zh: '乘坐地铁约15分钟', en: 'Subway, about 15 min' },
        desc: { ko: '옛 생활용품과 LP, 카메라가 쌓인 시장. 값을 부르면 깎는 재미가 있는 곳입니다.', ja: '昔の生活用品とLP、カメラがたまった市場。値を呼ぶと削る面白いところです。', zh: '市场里摆满了旧家居用品、黑胶唱片和相机。这是一个当你询问价格时可以得到折扣的地方，这很有趣。', en: 'Old household goods, records and cameras stacked high — a place where the price is a starting point.' } },
      { phase: 'lunch', time: '12:30', name: { ko: '광장시장', ja: '広場市場', zh: '广藏市场', en: 'Gwangjang Market' }, q: '광장시장', move: { ko: '지하철 약 15분', ja: '地下鉄約15分', zh: '乘坐地铁约15分钟', en: 'Subway, about 15 min' },
        desc: { ko: '점심은 여기서. 앉을 자리가 없으면 안쪽 골목으로 한 블록 들어가면 금방 생깁니다.', ja: 'ランチはここ。座る席がなければ内側の路地に1ブロック入るとすぐにできます。', zh: '午餐就到这里了。如果你没有地方坐，沿着小巷走一个街区，你马上就能找到一个座位。', en: 'Lunch here; if the stools are full, one alley deeper usually opens up.' },
        photo: 'th-market-p2' },
      { phase: 'afternoon', time: '14:30', name: { ko: '남대문시장', ja: '南大門市場', zh: '南大门市场', en: 'Namdaemun Market' }, q: '남대문시장', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '수입품과 먹자골목이 미로처럼 얽힌 시장. 길을 잃어도 곧 뭔가 나옵니다.', ja: '輸入品と食べる路地が迷路のように絡み合った市場。迷ってもすぐに何か出てきます。', zh: '进口商品和美食街错综复杂的市场。即使你迷路了，很快就会发现一些东西。', en: 'Import goods and food alleys in a maze — getting lost is part of it.' } },
      { phase: 'afternoon', time: '16:00', name: { ko: '방산종합시장', ja: '放散総合市場', zh: '芳山综合市场', en: 'Bangsan Market' }, q: '방산종합시장', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '인쇄 골목과 포장지 가게가 이어지는 작업하는 시장. 관광지 느낌이 없어 오히려 좋습니다.', ja: '印刷路地および包装紙店が続く働く市場。観光地の感じがなくてむしろいいです。', zh: '设有印刷巷和包装纸店的营业市场。它没有旅游的感觉，这实际上很好。', en: 'Printing alleys and packaging shops — a working market with no tourist gloss, which is the appeal.' } },
      { phase: 'evening', time: '17:30', name: { ko: '신당동 떡볶이타운', ja: '新堂洞トッポッキタウン', zh: '新堂洞炒年糕镇', en: 'Sindang-dong tteokbokki town' }, q: '신당동 떡볶이타운', move: { ko: '지하철 약 10분', ja: '地下鉄約10分', zh: '乘坐地铁约10分钟', en: 'Subway, about 10 min' },
        desc: { ko: '저녁은 즉석떡볶이로. 여러 명이 둘러앉아 사리로 양을 늘리는 방식입니다.', ja: '夕方は即席トッポッキで。何人かが囲まれてサリに羊を増やす方式です。', zh: '晚餐是即食炒年糕。这是几个人围坐在一起，增加纱丽数量的方法。', en: 'Dinner is tteokbokki cooked at the table, with extra portions added as you go.' } },
      { phase: 'return', time: '19:00', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 약 15분', ja: '地下鉄約15分', zh: '乘坐地铁约15分钟', en: 'Subway, about 15 min' },
        desc: { ko: '6호선에서 1호선으로 한 번 갈아타면 서울역. 사 온 것이 많으면 보관함에서 짐을 찾으세요.', ja: '6号線から1号線に一度乗り換えればソウル駅。買ってきたものが多い場合は、ロッカーで荷物を探してください。', zh: '从6号线换乘1号线到达首尔站。如果你买了很多东西，检查一下储物柜里的行李。', en: 'Line 6 to Line 1 and you are back; collect the bag from the locker on the way.' } }
    ]
  },
  conds: [
    { k: { ko: '5일장', ja: '五日市', zh: '五日集', en: 'Five-day markets' }, v: { ko: '지역마다 장날이 2·7 / 3·8 / 4·9 / 5·10으로 다름', ja: '地域ごとに長日が2・7/3・8/4・9/5・10と異なる', zh: '集市日因地区而异：2·7 / 3·8 / 4·9 / 5·10', en: 'Market days fall on 2·7, 3·8, 4·9 or 5·10 depending on the town' } },
    { k: { ko: '결제', ja: 'お支払い', zh: '付款', en: 'Paying' }, v: { ko: '현금이 편한 노점이 많음, 소액권 준비', ja: '現金が楽な露点が多い、小額券の準備', zh: '街边摊位很多，现金很方便，可以买到小额钞票。', en: 'Many stalls prefer cash — bring small notes' } },
    { k: { ko: '시간', ja: '時間', zh: '时间', en: 'Timing' }, v: { ko: '오전 10시 전 가장 한산, 오후 5시 이후 닫는 곳 많음', ja: '午前10時前、最も寒山、午後5時以降は閉じる場所が多い', zh: '上午10点前最繁忙，下午5点后很多地方关门。', en: 'Quietest before ten; many stalls close after five' } }
  ],
  places: [
    { name: { ko: '광장시장', ja: '広場市場', zh: '广藏市场', en: 'Gwangjang Market' }, region: 'capital', q: '광장시장', note: { ko: '서울 종로. 100년 넘은 상설시장, 먹거리 골목이 유명합니다.', ja: 'ソウル鍾路100年以上の常設市場、グルメ路地が有名です。', zh: '首尔钟路。这是一个已有100多年历史的永久性市场，以其美食街而闻名。', en: 'Jongno, Seoul: a market over a century old, known for its food alleys.' } },
    { name: { ko: '경동시장', ja: '慶東市場', zh: '京东市场', en: 'Gyeongdong Market' }, region: 'capital', q: '경동시장', note: { ko: '한약재·건강식품. 약령시와 이어져 있습니다.', ja: '漢方薬・健康食品。薬令市とつながっています。', zh: '草药和保健食品。与药令市相连。', en: 'Herbal medicine and health foods, joined to the herbal street.' } },
    { name: { ko: '남대문시장', ja: '南大門市場', zh: '南大门市场', en: 'Namdaemun Market' }, region: 'capital', q: '남대문시장', note: { ko: '600년 역사. 의류·수입품·먹자골목.', ja: '600年の歴史。衣類・輸入品・食べよう路地。', zh: '已有600多年的历史。服装、进口商品、美食一条街。', en: 'Six centuries of trade: clothes, imports and food alleys.' } },
    { name: { ko: '동대문종합시장', ja: '東大門総合市場', zh: '东大门综合市场', en: 'Dongdaemun Market' }, region: 'capital', q: '동대문종합시장', note: { ko: '새벽부터 도매가 도는 시장. 밤늦게까지 불이 켜져 있습니다.', ja: '夜明けから卸売りが回る市場。夜遅くまで火が点灯しています。', zh: '市场一大早就开始提供批发价格。灯一直亮到深夜。', en: 'Wholesale from dawn; the lights stay on late.' } },
    { name: { ko: '서울풍물시장', ja: 'ソウル風物市場', zh: '首尔民俗跳蚤市场', en: 'Seoul Folk Flea Market' }, region: 'capital', q: '서울풍물시장', note: { ko: '골동품·LP·옛 생활용품. 동묘앞역 9번 출구.', ja: 'アンティーク・LP・旧生活用品。東名前駅9番出口。', zh: '古董、唱片、旧家居用品。东庙站9号出口。', en: 'Antiques, records and old household things, by Dongmyo exit 9.' } },
    { name: { ko: '강화 풍물시장', ja: '江華風物市場', zh: '江华风物市场', en: 'Ganghwa Folk Market' }, region: 'capital', q: '강화 풍물시장', note: { ko: '2·7일 장날. 화문석과 인삼, 순무로 유명합니다.', ja: '2・7日の長日。化門石と高麗人参、カブで有名です。', zh: '2日和7日为集市日。以花文石、人参、萝卜而闻名。', en: 'Market days on the 2nd and 7th; known for reed mats, ginseng and turnips.' } },
    { name: { ko: '안동 구시장', ja: '安東旧市長', zh: '安东旧市场', en: 'Andong Gu Market' }, region: 'gyeongsang', q: '안동 구시장', note: { ko: '2·7일 장날. 찜닭 골목과 함께 보세요.', ja: '2・7日の長日。蒸し鶏の路地と一緒に見てください。', zh: '2日和7日为集市日。去Jjimdak Alley 看看吧。', en: 'Market days on the 2nd and 7th, beside the jjimdak alleys.' } },
    { name: { ko: '전주 남부시장', ja: '全州南部市場', zh: '全州南部市场', en: 'Jeonju Nambu Market' }, region: 'jeolla', q: '전주 남부시장', note: { ko: '상설 + 금·토 야시장. 청년몰이 붙어 있습니다.', ja: '常設＋金・土夜市。青年モールがついています。', zh: '常设+周五周六夜市。附有一个青年购物中心。', en: 'Permanent stalls plus a Friday–Saturday night market.' } },
    { name: { ko: '대구 서문시장', ja: '大邱西門市場', zh: '大邱西门市场', en: 'Daegu Seomun Market' }, region: 'gyeongsang', q: '대구 서문시장', note: { ko: '조선 시대부터 이어진 대형 시장. 야시장이 특히 붐빕니다.', ja: '朝鮮時代から続いた大型市場。ナイトマーケットは特に混雑しています。', zh: '自朝鲜王朝以来就存在的大型市场。夜市尤其热闹。', en: 'A large market running since Joseon times; the night market is the busiest part.' } },
    { name: { ko: '부산 국제시장', ja: '釜山国際市場', zh: '釜山国际市场', en: 'Busan Gukje Market' }, region: 'gyeongsang', q: '부산 국제시장', note: { ko: '전쟁 뒤 형성된 시장. 자갈치·부평깡통시장과 이어집니다.', ja: '戦争の後に形成された市場。チャガルチ・富平缶市場とつながります。', zh: '战后形成了市场。它连接札嘎其和富平康通市场。', en: 'Born after the war, linked to Jagalchi and Bupyeong markets.' } },
    { name: { ko: '통영 서호시장', ja: '統営西湖市場', zh: '统营西湖市场', en: 'Tongyeong Seoho Market' }, region: 'gyeongsang', q: '통영 서호시장', note: { ko: '꿀빵과 어묵, 해산물. 아침 일찍이 활기찹니다.', ja: '蜂蜜と魚、魚介類。朝早く賑わいます。', zh: '蜂蜜面包、鱼饼、海鲜。一大早就很热闹。', en: 'Honey buns, fish cake and seafood; liveliest early.' } },
    { name: { ko: '속초관광수산시장', ja: '束草観光水産市場', zh: '束草观光水产市场', en: 'Sokcho Fish Market' }, region: 'gangwon', q: '속초관광수산시장', note: { ko: '오징어순대와 닭강정. 관광객과 주민이 함께 쓰는 시장.', ja: 'イカスンデとチキンカンジョン。観光客と住民が一緒に使う市場。', zh: '鱿鱼圣代和鸡肉姜丁。游客和居民共享的市场。', en: 'Squid sundae and fried chicken, used by visitors and locals alike.' } },
    { name: { ko: '제주 동문시장', ja: '済州東門市場', zh: '济州东门市场', en: 'Jeju Dongmun Market' }, region: 'jeju', q: '동문시장', note: { ko: '감귤과 해산물, 저녁 야시장. 공항에서 차로 15분.', ja: 'みかんとシーフード、夜のナイトマーケット。空港から車で15分。', zh: '橘子，海鲜，晚上夜市。距离机场15分钟车程。', en: 'Tangerines, seafood and an evening night market, 15 minutes from the airport.' } },
    { name: { ko: '청주 육거리시장', ja: '清州陸距離市場', zh: '清州玉溪里市场', en: 'Cheongju Yukgeori Market' }, region: 'jeolla', q: '청주 육거리시장', note: { ko: '2·7일 장날. 충북에서 가장 큰 전통시장입니다.', ja: '2・7日の長日。忠北最大の伝統市場です。', zh: '2日和7日为集市日。它是忠清北道最大的传统市场。', en: 'Market days on the 2nd and 7th — the largest traditional market in North Chungcheong.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '국밥 · 잔치국수', ja: 'クッパ・ごちそう', zh: '汤饭·宴会面', en: 'Rice soup · thin noodles' }, note: { ko: '시장 안 국수집은 아침 8시에 문을 엽니다.', ja: '市場の中の麺は朝8時にドアを開けます。', zh: '市场里的面馆早上8点开门。', en: 'Market noodle counters open at eight.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥘', dish: { ko: '빈대떡 · 육회 · 꼬마김밥', ja: 'ビン大餅・六会・小キムバプ', zh: 'Bindaetok、Yukhoe、小紫菜包饭', en: 'Mung-bean pancake · raw beef · mini kimbap' }, note: { ko: '광장시장에서는 막걸리 한 사발과 함께.', ja: '広場市場ではマッコリ一ボールと共に。', zh: '在广藏市场喝一碗马格利酒。', en: 'At Gwangjang, with a bowl of makgeolli.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍡', dish: { ko: '호떡 · 꿀빵 · 약과', ja: '餅・蜂蜜・薬', zh: '火锅、蜂蜜面包、药果', en: 'Hotteok · honey buns · yakgwa' }, note: { ko: '갓 튀긴 것부터. 식으면 맛이 절반입니다.', ja: '揚げたばかりから。冷えると味が半分です。', zh: '刚炸出来的。冷却后，味道会减半。', en: 'Straight from the fryer — half the pleasure goes when they cool.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍢', dish: { ko: '즉석떡볶이 · 순대 · 어묵', ja: '即席トッポッキ・スンデ・オムク', zh: '即食炒年糕、圣代、鱼糕', en: 'Table tteokbokki · sundae · fish cake' }, note: { ko: '여럿이 사리를 늘려 먹는 방식.', ja: '多くがサリーを増やして食べる方法。', zh: '一种多人通过拉纱丽吃饭的方式。', en: 'Add portions as you eat — that is how it works.' } }
  ],
  photos: [
    { file: 'th-market', cap: { ko: '시장 골목의 좌판', ja: '市場路地の座板', zh: '市场胡同摊位', en: 'Stalls in a market alley' } },
    { file: 'th-market-p2', cap: { ko: '시장에서 파는 간식', ja: '市場で売っている軽食', zh: '市场上卖的零食', en: 'Snacks sold at the market' } }
  ],
  tip: { ko: '5일장은 오전 10시부터 오후 4시가 가장 붐빕니다. 장날은 지역마다 달라 미리 확인하세요.', ja: '五日市は午前10時から午後4時が一番賑わいます。長日は地域によって異なり、事前に確認してください。', zh: '为期5天的市场从上午10点到下午4点最为繁忙。集市日期因地区而异，因此请提前查询。', en: 'Five-day markets peak between ten and four. Dates differ by town — check first.' }
},
