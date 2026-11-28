/* --------------------------------------------------- 18 레트로·빈티지 */
{
  id: 'retro', emoji: '📻', tint: '#E2C9A0',
  name: { ko: '레트로 · 빈티지', ja: 'レトロ・ヴィンテージ', zh: '复古·怀旧', en: 'Retro & vintage' },
  sub: { ko: '지난 세기의 거리를 걷는 하루', ja: '前の世紀の街を歩く一日', zh: '在上个世纪的街上走的一天', en: 'A day in the last century' },
  tag: { ko: '옛 거리 · 극장 · 골동품', ja: '古い街・劇場・骨董', zh: '老街·剧场·古董', en: 'Old streets, cinemas, flea markets' },
  intro: {
    ko: '레트로 여행은 두 갈래입니다. 실제로 그 시대에 지어진 거리와, 그 시대를 다시 지어 놓은 세트장. 군산은 앞쪽입니다. 일제강점기와 1960~70년대 건물이 그대로 남아 있어, 낮에 걸으면 사진이 저절로 옛날이 됩니다. 오전에 시간여행마을, 오후에 철길마을로 이어지는 하루를 잡았어요.', ja: 'レトロ旅行は二股です。実際にその時代に建てられた街並みと、その時代を再建したセット場。群山は正面です。日帝強占期と1960～70年代の建物がそのまま残っており、日中に歩くと写真が自然に昔となります。午前に時間旅行村、午後に鉄道村につながる一日をとりました。', zh: '复古旅行有两个方面。一条是那个时代实际修建的街道，一个是那个时代重建的布景。群山在前面。日本殖民时期以及1960年代和1970年代的建筑仍然保留着，所以如果你白天走来走去，照片就会自动变旧。我们安排了一天上午参观时光旅行村，下午参观铁路村。',
    en: 'Retro travel splits in two: streets actually built in that era, and sets rebuilt to look like it. Gunsan is the first kind — Japanese colonial and 1960s–70s buildings still standing, so a daytime walk photographs itself into the past. This day runs the time-travel village in the morning and the railway village in the afternoon.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }],
  transport: { ko: 'KTX + 버스·도보', ja: 'KTX＋バス・徒歩', zh: 'KTX＋巴士·步行', en: 'KTX + bus or on foot' },
  duration: { ko: '약 8시간', ja: '約8時間', zh: '约8小时', en: 'About 8 hours' },
  hub: {
    ko: '군산역', ja: '群山駅', zh: '群山站', en: 'Gunsan Station', q: '군산역',
    note: {
      ko: 'KTX 장항선. 용산에서 2시간 30분. 역에서 시간여행마을까지 버스로 20분, 택시로 15분입니다.', ja: 'KTX長航船。龍山から2時間30分。駅から時間旅行村までバスで20分、タクシーで15分です。', zh: 'KTX长项线。距离龙山2小时30分钟。从车站乘坐巴士20分钟或乘坐出租车15分钟即可到达时光旅行村。',
      en: 'On the KTX Janghang line, two and a half hours from Yongsan. The time-travel village is 20 minutes by bus, 15 by taxi.'
    }
  },
  course: {
    title: { ko: '군산 — 시간여행마을에서 철길마을까지', ja: '群山 — 時間旅行村から鉄路村まで', zh: '群山——从时光旅行村到铁道村', en: 'Gunsan — time-travel village to the railway village' },
    meta: { ko: '6곳 · 약 8시간 · 버스 2회', ja: '6か所・約8時間・バス2回', zh: '6个地点，约8小时，2辆巴士', en: '6 stops · about 8 hours · 2 buses' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '군산역', ja: '群山駅', zh: '群山站', en: 'Gunsan Station' }, q: '군산역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역에서 시간여행마을 방면 버스로. 짐은 역 보관함에 맡기고 가볍게 걷습니다.', ja: '駅から時間旅行村方面バスで。荷物は駅のロッカーに預けて軽く歩きます。', zh: '从车站乘坐前往时光旅行村的巴士。将行李寄存在车站储物柜内，轻装上阵。', en: 'A bus to the time-travel village; leave the bag in a station locker and walk light.' } },
      { phase: 'morning', time: '10:20', name: { ko: '군산 시간여행마을', ja: '群山時間旅行村', zh: '群山时光旅行村', en: 'Gunsan time-travel village' }, q: '군산 시간여행마을', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
        desc: { ko: '일본식 가옥과 근대 상점, 옛 사진관이 이어지는 골목. 교복 대여점이 많아 사진이 확실히 달라집니다.', ja: '和風家屋や近代商店、昔の写真館が続く路地。制服レンタル店が多く、写真がしっかり変わります。', zh: '一条小巷里遍布着日式房屋、现代商店和古老的照相馆。这里有很多校服租赁店，所以你的照片肯定会看起来不一样。', en: 'Japanese-era houses, old shops and a period photo studio; uniform rental changes the photographs completely.' },
        photo: 'th-retro' },
      { phase: 'lunch', time: '12:00', name: { ko: '군산 시내 점심', ja: '群山市内ランチ', zh: '在群山市中心享用午餐', en: 'Lunch in Gunsan' }, q: '군산시', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '군산은 짬뽕과 빵으로 알려진 항구 도시. 점심시간을 조금 비켜 가면 한산합니다.', ja: '群山はチャンポンとパンとして知られる港町。ランチタイムを少し飛ばしていくと寒山します。', zh: '群山是一座港口城市，以炸酱面和面包而闻名。如果你在午餐时间去的话，这里会很安静。', en: 'A port town known for jjambbong and bakeries; go a little after noon.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '경암동 철길마을', ja: '京岩洞鉄道村', zh: '庆岩洞铁路村', en: 'Gyeongam-dong railway village' }, q: '경암동철길마을', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
        desc: { ko: '집 사이로 철길이 지나는 동네. 문방구와 옛 간판, 교복 체험이 있습니다.', ja: '家の間に鉄道が通る近所。文房具や旧看板、制服体験があります。', zh: '铁路穿过房屋之间的街区。有文具店、老招牌、校服体验。', en: 'A neighbourhood with a railway running between the houses — stationery shops, old signs and uniform rental.' },
        photo: 'th-retro-p2' },
      { phase: 'afternoon', time: '15:00', name: { ko: '군산 근대역사박물관', ja: '群山近代歴史博物館', zh: '群山近代历史博物馆', en: 'Gunsan modern history museum' }, q: '군산근대역사박물관', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '항구 도시가 어떻게 생겼는지 한 번에 보는 곳. 실내라 더위를 피하기도 좋습니다.', ja: '港町がどのように見えるかを一度に見る場所。屋内で暑さを避けるのも良いです。', zh: '可以一睹港口城市面貌的地方。由于是在室内，所以是避暑的好地方。', en: 'How the port grew, in one building — and a cool indoor pause.' } },
      { phase: 'evening', time: '16:30', name: { ko: '은파호수공원', ja: 'ウンパ湖公園', zh: '银波湖公园', en: 'Eunpa lake park' }, q: '은파호수공원', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '호수를 도는 산책로와 조명. 해 질 무렵 한 바퀴가 좋습니다.', ja: '湖を回る遊歩道と照明。夕暮れ時の車輪が良いです。', zh: '湖周围的步道和灯光。日落时绕一圈是个好主意。', en: 'A lakeside path with lighting — one loop at dusk.' } },
      { phase: 'return', time: '18:00', name: { ko: '군산역', ja: '群山駅', zh: '群山站', en: 'Gunsan Station' }, q: '군산역', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '역으로 돌아와 기차. 저녁은 역 근처에서 가볍게.', ja: '駅に戻って電車。夕方は駅近くで軽く。', zh: '返回车站并乘坐火车。在车站附近吃一顿简单的晚餐。', en: 'Back to the station; eat lightly nearby.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Cost' }, v: { ko: '옛 거리 무료, 박물관·세트장 3,000~10,000원', ja: '旧通り無料、博物館・セット場 3,000～10,000ウォン', zh: '老街免费，博物馆/套3,000~10,000韩元', en: 'Old streets free; museums and sets ₩3,000–10,000' } },
    { k: { ko: '대여', ja: 'レンタル', zh: '出租', en: 'Rental' }, v: { ko: '교복·옷 대여 10,000~20,000원, 주말 대기', ja: '制服・洋服レンタル10,000～20,000ウォン、週末待ち', zh: '校服/服装租赁10,000~20,000韩元，周末可使用', en: 'Uniform or costume hire ₩10,000–20,000; queues at weekends' } },
    { k: { ko: '주의', ja: '注意', zh: '小心', en: 'Note' }, v: { ko: '실제 주거지가 많아 조용히, 상점 촬영은 양해를 구하세요', ja: '実際の住居が多く、静かに、店舗撮影はご了承ください', zh: '由于实际住宅区较多，请保持安静，拍摄商店照片请先征得许可。', en: 'Many are lived-in: keep quiet, and ask before photographing inside shops' } }
  ],
  places: [
    { name: { ko: '돈의문박물관마을', ja: 'お金の門博物館村', zh: '敦义门博物馆村', en: 'Donuimun museum village' }, region: 'capital', q: '돈의문박물관마을', note: { ko: '서울. 옛 골목·교실·음악다방을 재현한 무료 공간.', ja: 'ソウル。旧路地・教室・音楽喫茶店を再現した無料空間。', zh: '首尔。一个再现旧巷子、教室和音乐咖啡馆的自由空间。', en: 'Seoul: recreated alleys, classrooms and a music room, free.' } },
    { name: { ko: '익선동 한옥거리', ja: '益善洞韓屋通り', zh: '益善洞韩屋街', en: 'Ikseon-dong hanok street' }, region: 'capital', q: '익선동', note: { ko: '빈티지 한옥 골목과 작은 가게.', ja: 'ビンテージ韓屋路地と小さなお店。', zh: '复古韩屋小巷和小商店。', en: 'Vintage hanok alleys and small shops.' } },
    { name: { ko: '세운상가', ja: 'セウン商店街', zh: '盛恩购物中心', en: 'Sewoon Plaza' }, region: 'capital', q: '세운상가', note: { ko: '1960년대 전자상가, 아날로그 기기.', ja: '1960年代電子商店街、アナログ機器。', zh: '20世纪60年代的电子商店，模拟设备。', en: 'A 1960s electronics arcade full of analogue machines.' } },
    { name: { ko: '서울풍물시장', ja: 'ソウル風物市場', zh: '首尔民俗跳蚤市场', en: 'Seoul Folk Flea Market' }, region: 'capital', q: '서울풍물시장', note: { ko: '골동품·LP·옛 생활용품.', ja: 'アンティーク・LP・旧生活用品。', zh: '古董、唱片、旧家居用品。', en: 'Antiques, records, old household goods.' } },
    { name: { ko: '동묘벼룩시장', ja: '東名フリーマーケット', zh: '东庙跳蚤市场', en: 'Dongmyo flea market' }, region: 'capital', q: '동묘벼룩시장', note: { ko: '구제 의류와 오래된 물건, 아침이 활기찹니다.', ja: '救済服や古いもの、朝が賑わいます。', zh: '回收的衣服和旧物品让早晨充满活力。', en: 'Second-hand clothes and old objects; best in the morning.' } },
    { name: { ko: '인천 개항장거리', ja: '仁川開港長距離', zh: '仁川开港口长街', en: 'Incheon open port street' }, region: 'capital', q: '인천 개항장거리', note: { ko: '근대 은행·일본식 건축·오래된 골목.', ja: '近代銀行・日本式建築・古い路地。', zh: '现代银行、日式建筑、老胡同。', en: 'Modern banks, Japanese-era buildings, old lanes.' } },
    { name: { ko: '수도국산달동네박물관', ja: '首都国産ダルドンネ博物館', zh: '须道国山达东博物馆', en: 'Sudoguksan museum of housing' }, region: 'capital', q: '수도국산달동네박물관', note: { ko: '1960~70년대 달동네 생활상 재현.', ja: '1960～70年代の月間の生活上再現。', zh: '再现20世纪60年代和1970年代达尔东的生活。', en: 'Recreated 1960s–70s hillside life.' } },
    { name: { ko: '추억의 청춘뮤지엄', ja: '思い出の青春ミュージアム', zh: '青年记忆博物馆', en: 'Youth nostalgia museum' }, region: 'capital', q: '추억의청춘뮤지엄', note: { ko: '양평. 옛 교복·교실·음악다방과 포토존.', ja: '楊平。昔の制服・教室・音楽喫茶店とフォトゾーン。', zh: '杨平.旧校服、教室、音乐咖啡馆和拍照区。', en: 'Yangpyeong: uniforms, classrooms, a music room and photo zones.' } },
    { name: { ko: '한국근현대사박물관', ja: '韓国近現代史博物館', zh: '韩国近现代史博物馆', en: 'Korean modern history museum' }, region: 'capital', q: '한국근현대사박물관', note: { ko: '파주. 1960~90년대 옛 상점과 거리.', ja: '坡州。 1960～90年代の昔の店と街。', zh: '坡州。 20世纪60年代至90年代的老商店和街道。', en: 'Paju: shops and streets from the 1960s to 1990s.' } },
    { name: { ko: '동광극장', ja: '東光劇場', zh: '东光剧场', en: 'Donggwang cinema' }, region: 'capital', q: '동광극장', note: { ko: '1959년 개관한 단관 극장, 실제 영화 상영.', ja: '1959年に開館した団管劇場、実際の映画上映。', zh: '1959年开业的单屏影院，放映真人电影。', en: 'A single-screen cinema opened in 1959, still showing films.' } },
    { name: { ko: '철암탄광역사촌', ja: '鉄岩炭広域いとこ', zh: '铁岩煤矿历史村', en: 'Cheoram coal town' }, region: 'gangwon', q: '철암탄광역사촌', note: { ko: '태백. 광부들의 생활상이 남은 탄광촌.', ja: '太白。鉱夫たちの生活像が残った炭鉱村。', zh: '太白。煤矿小镇，仍保留着矿工的生活方式。', en: 'Taebaek: a coal town with miners\u2019 houses intact.' } },
    { name: { ko: '판교 시간이 멈춘 마을', ja: '板橋時間が止まった町', zh: '板桥，时间停止的村庄', en: 'Pangyo frozen-in-time village' }, region: 'jeolla', q: '판교 시간이멈춘마을', note: { ko: '서천. 옛 극장·사진관·주조장 거리.', ja: '西川。旧劇場・写真館・鋳造場街。', zh: '舒川。街道上遍布着古老的剧院、照相馆和啤酒厂。', en: 'Seocheon: an old cinema, photo studio and brewery street.' } },
    { name: { ko: '규암마을 자온길', ja: 'キュアム村', zh: '龟岩村藏街', en: 'Gyugam Jaon-gil' }, region: 'jeolla', q: '규암마을', note: { ko: '부여. 담배 가게를 고친 책방과 공방, 한옥 숙소.', ja: '付与。タバコ屋を修理した本屋と工房、韓屋宿。', zh: '扶余。由烟草店改建而成的书店和工坊，以及韩屋旅馆。', en: 'Buyeo: bookshops and workshops in old shops, with hanok stays.' } },
    { name: { ko: '의림지파크랜드', ja: '義林寺パークランド', zh: '义林地公园乐园', en: 'Uirimji Parkland' }, region: 'jeolla', q: '의림지파크랜드', note: { ko: '제천. 종이 티켓과 회전목마가 남은 옛 놀이공원.', ja: '済川。紙のチケットとカルーセルが残る古い遊園地。', zh: '堤川。一个古老的游乐园，留下了纸质门票和旋转木马。', en: 'Jecheon: paper tickets and a carousel in an old amusement park.' } },
    { name: { ko: '화본역', ja: '花本駅', zh: '华本站', en: 'Hwabon Station' }, region: 'gyeongsang', q: '화본역', note: { ko: '군위. 1938년 간이역과 급수탑, 벚꽃길.', ja: '軍隊。 1938年 簡易駅と給水塔、桜の道。', zh: '军威。 1938年：简易车站、水塔、樱花路。', en: 'Gunwi: a 1938 country station, water tower and cherry road.' } },
    { name: { ko: '엄마아빠어렸을적에', ja: 'お母さんお父さん幼い頃', zh: '小时候爸爸妈妈', en: 'When Mum and Dad Were Young' }, region: 'gyeongsang', q: '엄마아빠어렸을적에', note: { ko: '폐교를 고친 옛 교실·문방구·이발소.', ja: '廃校を修理した旧教室・文房具・理髪店。', zh: '由关闭的学校改建而成的旧教室、文具店、理发店。', en: 'A closed school remade as old classrooms, a stationer and a barber.' } },
    { name: { ko: '향촌문화관', ja: '郷村文化館', zh: '乡村文化中心', en: 'Hyangchon cultural centre' }, region: 'gyeongsang', q: '향촌문화관', note: { ko: '대구. 1950년대 피란 시절의 거리와 문화.', ja: '大邱。 1950年代のピラン時代の街と文化。', zh: '鳕鱼。 20世纪50年代难民时期的街道和文化。', en: 'Daegu: wartime streets and culture of the 1950s.' } },
    { name: { ko: '추억보물섬', ja: '思い出宝島', zh: '回忆金银岛', en: 'Nostalgia treasure island' }, region: 'gyeongsang', q: '추억보물섬', note: { ko: '부산. 삐삐·워크맨·브라운관·오락실 게임.', ja: '釜山。ピピ・ウォークマン・ブラウン管・娯楽室ゲーム。', zh: '釜山。蜂鸣器、随身听、阴极射线管、街机游戏。', en: 'Busan: pagers, Walkmans, CRT televisions and arcade games.' } },
    { name: { ko: '장생포고래문화마을', ja: '長生浦鯨文化村', zh: '长生浦鲸鱼文化村', en: 'Jangsaengpo whale village' }, region: 'gyeongsang', q: '장생포고래문화마을', note: { ko: '울산. 1970년대 고래잡이 마을 재현.', ja: '蔚山。 1970年代のクジラ漁村再現。', zh: '蔚山。重现20世纪70年代的捕鲸村。', en: 'Ulsan: a 1970s whaling village rebuilt.' } },
    { name: { ko: '합천영상테마파크', ja: 'ハプチョンビデオテーマパーク', zh: '陕川影视主题公园', en: 'Hapcheon image theme park' }, region: 'gyeongsang', q: '합천영상테마파크', note: { ko: '경성과 1950~80년대 서울 거리 세트.', ja: '京城と1950～80年代のソウルストリートセット。', zh: '20世纪50年代至80年代的庆城和首尔街道场景。', en: 'Sets of Gyeongseong and mid-century Seoul.' } },
    { name: { ko: '경암동 철길마을', ja: '京岩洞鉄道村', zh: '庆岩洞铁路村', en: 'Gyeongam-dong railway village' }, region: 'jeolla', q: '경암동철길마을', note: { ko: '군산. 집 사이 철길과 옛 간판, 교복 체험.', ja: '群山。家の間の鉄道と古い看板、制服体験。', zh: '群山。体验房屋之间的铁路、古老的标志和校服。', en: 'Gunsan: a railway between houses, old signs, uniform rental.' } },
    { name: { ko: '군산 시간여행마을', ja: '群山時間旅行村', zh: '群山时光旅行村', en: 'Gunsan time-travel village' }, region: 'jeolla', q: '군산 시간여행마을', note: { ko: '근대 가옥과 상점, 옛 사진관.', ja: '近代的な家屋や店、古い写真館。', zh: '现代房屋、商店和古老的照相馆。', en: 'Modern-era houses, shops and a period photo studio.' } },
    { name: { ko: '전주난장', ja: '全州混乱', zh: '全州南京', en: 'Jeonju Nanjang' }, region: 'jeolla', q: '전주난장', note: { ko: '옛 가정집·교실·상점을 모은 추억 테마관.', ja: '昔の家屋・教室・商店を集めた思い出テーマ館。', zh: '一个以记忆为主题的博物馆，聚集了老房子、教室、商店。', en: 'A nostalgia hall of old homes, classrooms and shops.' } },
    { name: { ko: '순천드라마촬영장', ja: '順天ドラマ撮影場', zh: '顺天电视剧拍摄地', en: 'Suncheon drama set' }, region: 'jeolla', q: '순천드라마촬영장', note: { ko: '1960~80년대 읍내와 달동네 세트.', ja: '1960～80年代の町内とダルドンネセット。', zh: '1960年代至1980年代的一组城镇和村庄。', en: 'Country-town and hillside sets from the 1960s–80s.' } },
    { name: { ko: '담양 추억의 골목', ja: '潭陽の思い出の路地', zh: '潭阳记忆胡同', en: 'Damyang memory alley' }, region: 'jeolla', q: '담양 추억의골목', note: { ko: '옛 극장·학교·만화방 재현.', ja: '昔の劇場・学校・漫画部屋再現。', zh: '重建旧剧院、学校和漫画书。', en: 'An old cinema, school and comic room rebuilt.' } },
    { name: { ko: '부평역 지하상가', ja: '富平駅地下街', zh: '富平站地下商场', en: 'Bupyeong underground arcade' }, region: 'capital', q: '부평 지하상가', note: { ko: '인천. Y2K 감성의 상가와 패션.', ja: '仁川。 Y2K感性の商店街とファッション。', zh: '仁川。具有千年敏感度的购物中心和时尚。', en: 'Incheon: a Y2K arcade of shops and fashion.' } },
    { name: { ko: '아스카 게임박물관', ja: '飛鳥ゲーム博物館', zh: '飞鸟游戏博物馆', en: 'Aska game museum' }, region: 'capital', q: '아스카게임박물관', note: { ko: '옛 오락실 게임기와 아케이드.', ja: '古いエンターテイメントゲーム機とアーケード。', zh: '旧街机游戏机和街机。', en: 'Old arcade machines and games.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍞', dish: { ko: '옛날식 빵 · 커피', ja: '昔ながらのパン・コーヒー', zh: '老式面包和咖啡', en: 'Old-style bread · coffee' }, note: { ko: '군산은 오래된 빵집이 많은 항구 도시입니다.', ja: '群山は古いパン屋さんの多い港町です。', zh: '群山是一座港口城市，有许多老面包店。', en: 'Gunsan is a port town of old bakeries.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '짬뽕 · 짜장면', ja: 'チャンポン・チャジャン面', zh: '炸酱面·炸酱面', en: 'Spicy noodle soup · black bean noodles' }, note: { ko: '항구 도시의 중국 음식.', ja: '港町の中華料理。', zh: '港口城市的中餐。', en: 'The Chinese-Korean food of a port.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍬', dish: { ko: '달고나 · 옛날 과자 · 아이스크림', ja: 'ダルゴナ・昔のお菓子・アイスクリーム', zh: '达尔戈纳·老式小吃·冰淇淋', en: 'Dalgona · old sweets · ice cream' }, note: { ko: '문방구 간식이 이 여행의 절반입니다.', ja: '文房具のおやつがこの旅の半分です。', zh: '文具零食是此行的一半。', en: 'Stationery-shop sweets are half the trip.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍲', dish: { ko: '국밥 · 해물칼국수', ja: 'クッパ・シーフードナイフ麺', zh: '汤包·海鲜刀削面', en: 'Rice soup · seafood noodles' }, note: { ko: '역 근처에서 따뜻하게.', ja: '駅の近くで暖かく。', zh: '车站附近很暖和。', en: 'Something warm near the station.' } }
  ],
  photos: [
    { file: 'th-retro', cap: { ko: '옛 거리의 건물', ja: '古い通りの建物', zh: '老街建筑', en: 'Buildings on an old street' } },
    { file: 'th-retro-p2', cap: { ko: '철길과 골목', ja: '鉄道と路地', zh: '铁轨和小巷', en: 'A railway and its alleys' } }
  ],
  tip: { ko: '교복 대여는 오전이 한산합니다. 실제 주거지가 많으니 골목에서는 조용히 걷고, 상점 안은 양해를 구하고 찍으세요.', ja: '制服レンタルは午前が寒山です。実際の住宅地が多いので路地では静かに歩き、店内はご了承をお願いします。', zh: '早上校服出租很安静。由于实际住宅区较多，请安静地在巷子里行走，并在店内拍照时征求许可。', en: 'Rent the uniform in the morning. Many streets are lived in — walk quietly and ask before photographing inside shops.' }
},
