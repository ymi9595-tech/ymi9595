/* --------------------------------------------- 17 전국 인생샷 명소 */
{
  id: 'photo', emoji: '📸', tint: '#D9CCFF',
  name: { ko: '전국 인생샷 명소', ja: '全国の映えスポット', zh: '全国出片胜地', en: 'Photo spots' },
  sub: { ko: '한 장을 위해 움직이는 하루', ja: '一枚のために動く一日', zh: '为了一张照片出发的一天', en: 'A day that moves for one picture' },
  tag: { ko: '정원 · 호수 · 이국적 풍경', ja: '庭園・湖・異国の風景', zh: '庭园·湖泊·异国风景', en: 'Gardens, lakes, foreign-looking corners' },
  intro: {
    ko: '사진 명소는 빛의 시간이 절반입니다. 같은 자리도 오전과 해 질 무렵이 전혀 다르게 나옵니다. 여기서는 포천의 폐채석장 정원에서 시작해 호수와 수목원으로 이어지는 하루를 잡았습니다. 사람이 적은 평일 오전이 가장 좋고, 계절마다 주제를 바꿔 다시 갈 만한 곳입니다.', ja: '写真スポットは光の時間が半分です。同じ席も午前と夕暮れ頃が全く違って出ます。ここでは、浦川の廃採石場庭園から始まり、湖と樹木園につながる一日をとりました。人が少ない平日の午前が一番良く、季節ごとにテーマを変えてまた行くところです。', zh: '拍照点的光照时间只有一半。同一个地方在早晨和日落时看起来完全不同。在这里，我们花了一天的时间从抱川市废弃的采石场花园出发，继续前往湖泊和植物园。最好是在工作日的早上，人比较少，而且根据季节的不同，有不同的主题，值得一去。',
    en: 'At a photo spot half of it is the light: the same place at ten and at dusk are different photographs. This day starts in a disused quarry garden in Pocheon and ends at a lake and an arboretum. Weekday mornings are quietest, and it is worth returning each season for a different subject.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울 설경', ja: '冬の雪景色', zh: '冬天的雪景', en: 'Snow' }],
  transport: { ko: '전철 + 버스·택시', ja: '電車＋バス・タクシー', zh: '地铁＋巴士·出租车', en: 'Metro + bus or taxi' },
  duration: { ko: '약 9시간', ja: '約9時間', zh: '约9小时', en: 'About 9 hours' },
  hub: {
    ko: '의정부역', ja: 'ウィジョンブ駅', zh: '议政府站', en: 'Uijeongbu Station', q: '의정부역',
    note: {
      ko: '1호선과 의정부경전철이 만나는 곳. 포천 방면 버스가 역 앞에서 출발하고, 택시로는 30분 안팎입니다.', ja: '1号線とウィジョンブ京電鉄が出会う場所。浦川方面バスが駅前から出発し、タクシーで30分前後です。', zh: '1号线和议政府轻轨交汇处。车站前有开往抱川的巴士，乘坐出租车约需30分钟。',
      en: 'Line 1 meets the Uijeongbu light rail here; buses for Pocheon leave outside, and a taxi takes about half an hour.'
    }
  },
  course: {
    title: { ko: '포천 — 채석장 정원에서 호수까지', ja: '抱川 — 採石場の庭から湖まで', zh: '抱川——从采石场花园到湖', en: 'Pocheon — quarry garden to the lake' },
    meta: { ko: '6곳 · 약 9시간 · 차 3회', ja: '6か所・約9時間・車3回', zh: '6个地点，约9小时，自驾3次', en: '6 stops · about 9 hours · 3 drives' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '의정부역', ja: 'ウィジョンブ駅', zh: '议政府站', en: 'Uijeongbu Station' }, q: '의정부역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '포천 방면 버스로. 사진은 오전 빛이 좋으니 첫 목적지에 10시 전에 닿는 게 좋습니다.', ja: 'ポチョン方面バスで。写真は午前の光が良いので、最初の目的地に10時前に届くことをお勧めします。', zh: '乘巴士前往抱川。由于早晨的光线比较适合拍照，所以最好在10点之前到达第一个目的地。', en: 'Take a Pocheon bus; morning light is best, so aim to be at the first stop before ten.' } },
      { phase: 'morning', time: '09:50', name: { ko: '포천아트밸리', ja: 'ポチョンアートバレー', zh: '抱川艺术谷', en: 'Pocheon Art Valley' }, q: '포천아트밸리', move: { ko: '버스 약 50분', ja: 'バス約50分', zh: '巴士约50分钟', en: 'Bus, about 50 min' },
        desc: { ko: '폐채석장 절벽과 에메랄드빛 호수. 전망대에서 내려다보는 구도가 대표 사진입니다.', ja: '廃採石場崖とエメラルドの湖。展望台から見下ろす構図が代表写真です。', zh: '废弃的采石场悬崖和翡翠湖。代表性的照片是从展望台看到的景色。', en: 'Quarry cliffs over an emerald lake — the view from the upper terrace is the photograph.' },
        photo: 'th-photo' },
      { phase: 'lunch', time: '12:00', name: { ko: '포천 점심', ja: 'ポチョンランチ', zh: '抱川午餐', en: 'Lunch in Pocheon' }, q: '포천', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '포천은 이동갈비와 막걸리로 알려져 있습니다. 점심시간을 조금 비켜 가면 한산합니다.', ja: '布川は移動カルビとマッコリとして知られています。ランチタイムを少し飛ばしていくと寒山します。', zh: '抱川以二东排骨和马格利酒而闻名。如果你在午餐时间去的话，这里会很安静。', en: 'Pocheon is galbi and makgeolli country; go a little after noon and it is quiet.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '허브아일랜드', ja: 'ハーブアイランド', zh: '香草岛', en: 'Herb Island' }, q: '허브아일랜드', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '정원과 온실, 계절별 꽃밭. 입구보다 안쪽 정원이 사진이 잘 나옵니다.', ja: '庭園と温室、季節の花畑。入り口より奥の庭が写真がよく出てきます。', zh: '花园、温室和季节性花田。内花园比入口更适合拍照。', en: 'Gardens, greenhouses and seasonal beds — the inner gardens photograph better than the entrance.' },
        photo: 'th-photo-p2' },
      { phase: 'afternoon', time: '15:30', name: { ko: '산정호수', ja: '山頂湖', zh: '山井湖', en: 'Sanjeong lake' }, q: '산정호수', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
        desc: { ko: '산이 물에 비치는 호수. 둘레길을 40분쯤 걸으면 반대편 구도가 나옵니다.', ja: '山が水に映る湖。周りを40分ほど歩くと反対側の構図が出ます。', zh: '一个湖，山倒映在水中。沿着步道步行约40分钟，即可到达对岸。', en: 'A lake with the mountain in it; forty minutes around gives you the opposite view.' } },
      { phase: 'evening', time: '17:30', name: { ko: '노을 · 귀환', ja: '夕焼け・帰還', zh: '日落·归来', en: 'Sunset & back' }, q: '산정호수', move: { ko: '차 약 30분', ja: '車約30分', zh: '车程约30分钟', en: 'Drive, about 30 min' },
        desc: { ko: '해 질 무렵 물 위 색이 가장 진합니다. 어두워지기 전에 버스 시간을 확인하세요.', ja: '日没時に水の上の色が最も濃いです。暗くなる前にバス時間を確認してください。', zh: '日落时水面的颜色最深。天黑前查看公交车时间。', en: 'The water is deepest at sunset; check the bus before it gets dark.' } },
      { phase: 'return', time: '19:00', name: { ko: '의정부역', ja: 'ウィジョンブ駅', zh: '议政府站', en: 'Uijeongbu Station' }, q: '의정부역', move: { ko: '차 약 40분', ja: '車約40分', zh: '车程约40分钟', en: 'Drive, about 40 min' },
        desc: { ko: '1호선으로 귀가. 사진은 그날 밤에 한 장만 골라 두세요.', ja: '1号線で帰り。写真はその夜に一枚だけ選んでおいてください。', zh: '乘坐1号线回家。仅选择一张当晚的照片。', en: 'Home on Line 1 — pick just one photograph from the day before bed.' } }
    ]
  },
  conds: [
    { k: { ko: '빛', ja: '光', zh: '光', en: 'Light' }, v: { ko: '오전 9~11시, 해 지기 40분 전이 가장 좋음', ja: '午前9～11時、解約40分前が一番', zh: '上午9点至11点，日落前40分钟最佳。', en: '9–11 a.m. and forty minutes before sunset are best' } },
    { k: { ko: '계절', ja: '季節', zh: '季节', en: 'Season' }, v: { ko: '봄 꽃 · 여름 물 · 가을 단풍 · 겨울 눈', ja: '春の花・夏の水・秋の紅葉・冬の雪', zh: '春花、夏水、秋叶、冬雪', en: 'Spring flowers, summer water, autumn leaves, winter snow' } },
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Cost' }, v: { ko: '정원·수목원 8,000~15,000원, 호수·공원 무료', ja: '庭園・樹木園8,000～15,000ウォン、湖・公園無料', zh: '花园/植物园8,000~15,000韩元, 湖泊/公园免费', en: 'Gardens ₩8,000–15,000; lakes and parks free' } }
  ],
  places: [
    { name: { ko: '올림픽공원 나홀로나무', ja: 'オリンピック公園ナホロの木', zh: '奥林匹克公园一棵树', en: 'Olympic Park lone tree' }, region: 'capital', q: '올림픽공원 나홀로나무', note: { ko: '서울. 넓은 잔디와 홀로 선 나무, 가을 오전.', ja: 'ソウル。広い草と一人で並ぶ木、秋の朝。', zh: '首尔。宽阔的草坪和孤独的树，秋天的早晨。', en: 'Seoul: one tree in a wide lawn, autumn mornings.' } },
    { name: { ko: '북촌한옥마을', ja: '北村韓屋村', zh: '北村韩屋村', en: 'Bukchon hanok village' }, region: 'capital', q: '북촌한옥마을', note: { ko: '한복 사진. 주거지라 오전 일찍, 조용히.', ja: '韓服の写真。住宅だから朝早く、静かに。', zh: '韩服照片。这里是住宅区，所以一大早，很安静。', en: 'Hanbok photographs — early, and quietly, since people live here.' } },
    { name: { ko: '세빛섬·반포한강', ja: 'セライト島・盤浦漢江', zh: '塞维特岛和盘浦汉江', en: 'Sebitseom & Banpo' }, region: 'capital', q: '세빛섬', note: { ko: '야경과 분수. 분수 운영 일정 확인.', ja: '夜景と噴水。噴水運営スケジュールの確認。', zh: '夜景和喷泉。检查喷泉运行时间表。', en: 'Night views and the fountain; check its schedule.' } },
    { name: { ko: '송월동 동화마을', ja: '松月洞おとぎ話村', zh: '松月洞童话村', en: 'Songwol-dong fairy village' }, region: 'capital', q: '송월동동화마을', note: { ko: '인천. 알록달록한 골목과 벽화.', ja: '仁川。とても甘い路地と壁画。', zh: '仁川。色彩缤纷的小巷和壁画。', en: 'Incheon: bright alleys and murals.' } },
    { name: { ko: '아침고요수목원', ja: '朝高陽樹木園', zh: '晨静花园', en: 'Garden of Morning Calm' }, region: 'capital', q: '아침고요수목원', note: { ko: '계절 정원과 야간 조명.', ja: '季節の庭と夜の照明。', zh: '季节性花园和夜间照明。', en: 'Seasonal gardens and evening lighting.' } },
    { name: { ko: '포천아트밸리', ja: 'ポチョンアートバレー', zh: '抱川艺术谷', en: 'Pocheon Art Valley' }, region: 'capital', q: '포천아트밸리', note: { ko: '채석장 절벽과 호수.', ja: '採石場の崖と湖。', zh: '采石场悬崖和湖泊。', en: 'Quarry cliffs and a lake.' } },
    { name: { ko: '하슬라아트월드', ja: 'ハスラアートワールド', zh: '哈斯拉艺术世界', en: 'Haslla Art World' }, region: 'gangwon', q: '하슬라아트월드', note: { ko: '강릉. 바다를 액자처럼 담는 조형물.', ja: '江陵。海を額縁のように盛る造形物。', zh: '江陵。一座像相框一样框住大海的雕塑。', en: 'Gangneung: frames that hold the sea.' } },
    { name: { ko: '육백마지기', ja: '六百の終わり', zh: '六百匹马', en: 'Yukbaek Majigi' }, region: 'gangwon', q: '육백마지기', note: { ko: '정선. 고산 초원과 풍력발전기. 도로 통제 확인.', ja: 'チョンソン。高山草原と風力発電機。道路制御の確認。', zh: '贞善。高山草甸和风力涡轮机。检查道路管制。', en: 'Jeongseon: high meadow and turbines; check road closures.' } },
    { name: { ko: '원대리 자작나무숲', ja: '園代白樺の森', zh: '院岱里白桦林', en: 'Wondae-ri birch forest' }, region: 'gangwon', q: '원대리 자작나무숲', note: { ko: '인제. 겨울 설경, 입산 기간 확인.', ja: 'インジェ。冬の雪景色、入産期間確認。', zh: '注射。冬季雪景，查看入场时间。', en: 'Inje: snow among birches; check the access period.' } },
    { name: { ko: '미인폭포', ja: '美人滝', zh: '美丽瀑布', en: 'Miin waterfall' }, region: 'gangwon', q: '미인폭포', note: { ko: '삼척. 에메랄드빛 폭포와 협곡.', ja: '三尺。エメラルドの滝と峡谷。', zh: '三陟。翡翠瀑布和峡谷。', en: 'Samcheok: an emerald fall in a gorge.' } },
    { name: { ko: '꽃지해수욕장', ja: '花地海水浴場', zh: '科奇海滩', en: 'Ggotji Beach' }, region: 'jeolla', q: '꽃지해수욕장', note: { ko: '태안. 할미·할아비바위와 붉은 석양.', ja: '泰安。ハルミ・ハルビー岩と赤い夕日。', zh: '泰安。哈尔米/爷爷岩石和红色的日落。', en: 'Taean: the old-couple rocks and a red sunset.' } },
    { name: { ko: '궁남지', ja: '宮南地', zh: '宫南地', en: 'Gungnamji' }, region: 'jeolla', q: '궁남지', note: { ko: '부여. 연꽃과 정자, 여름 아침.', ja: '扶余。蓮と亭、夏の朝。', zh: '扶余。莲花与亭子，夏天的清晨。', en: 'Buyeo: lotus and pavilion on a summer morning.' } },
    { name: { ko: '도담삼봉', ja: 'ドダムサムボン', zh: '岛潭三峰', en: 'Dodamsambong' }, region: 'jeolla', q: '도담삼봉', note: { ko: '단양. 강 위 세 봉우리.', ja: '丹陽。川の上の3つのピーク。', zh: '丹阳。河流之上三座山峰。', en: 'Danyang: three peaks in the river.' } },
    { name: { ko: '문광저수지 은행나무길', ja: 'ムンクァン貯水池イチョウの道', zh: '闻王水库银杏树路', en: 'Mungwang reservoir ginkgo road' }, region: 'jeolla', q: '문광저수지', note: { ko: '괴산. 가을 노란 은행나무 반영.', ja: 'ゲッサン。秋の黄色いイチョウの反射。', zh: '槐山。秋天黄色银杏树的倒影。', en: 'Goesan: yellow ginkgoes doubled in the water.' } },
    { name: { ko: '감천문화마을', ja: '甘川文化村', zh: '甘川文化村', en: 'Gamcheon culture village' }, region: 'gyeongsang', q: '감천문화마을', note: { ko: '부산. 알록달록한 집과 골목.', ja: '釜山。とても甘い家と路地。', zh: '釜山。色彩缤纷的房屋和小巷。', en: 'Busan: coloured houses and alleys.' } },
    { name: { ko: '매미성', ja: 'セミソン', zh: '蝉堡', en: 'Maemiseong' }, region: 'gyeongsang', q: '매미성', note: { ko: '거제. 바다를 배경으로 한 돌성.', ja: '巨済。海を背景にした突星。', zh: '巨济。一座石头城堡，背景是大海。', en: 'Geoje: a stone castle against the sea.' } },
    { name: { ko: '바람의 언덕', ja: '風の丘', zh: '风之丘', en: 'Windy Hill' }, region: 'gyeongsang', q: '바람의언덕', note: { ko: '거제. 초록 언덕과 풍차.', ja: '巨済。抽象的な丘と風車。', zh: '巨济。绿色的山丘和风车。', en: 'Geoje: a green hill and a windmill.' } },
    { name: { ko: '실안노을 전망교', ja: 'シルアンノール展望橋', zh: '士兰日落观景桥', en: 'Silan sunset bridge' }, region: 'gyeongsang', q: '실안낙조', note: { ko: '사천. 바다와 섬, 노을을 한 프레임에.', ja: '四川。海と島、夕焼けのフレームに。', zh: '四川.大海、岛屿和日落融为一体。', en: 'Sacheon: sea, islands and sunset in one frame.' } },
    { name: { ko: '첨성대', ja: '瞻星台', zh: '瞻星台', en: 'Cheomseongdae' }, region: 'gyeongsang', q: '첨성대', note: { ko: '경주. 유적과 계절 꽃밭.', ja: '慶州。遺跡と季節の花畑。', zh: '种族。遗址和季节性花田。', en: 'Gyeongju: the observatory and seasonal flowers.' } },
    { name: { ko: '성이시돌목장 테쉬폰', ja: '城石石牧場テッシュフォン', zh: '圣基斯多牧场 Teshphone', en: 'Isidore Ranch teshpon' }, region: 'jeju', q: '성이시돌목장', note: { ko: '제주. 곡선형 건축과 초원.', ja: '済州。湾曲した建築と牧草地。', zh: '济州岛。弯曲的建筑和草地。', en: 'Jeju: curved buildings on a meadow.' } },
    { name: { ko: '신창풍차해안도로', ja: '新昌風車海岸道路', zh: '新昌风车海岸路', en: 'Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '풍차와 바다, 노을.', ja: '風車と海、夕焼け。', zh: '风车，大海，日落。', en: 'Turbines, sea and sunset.' } },
    { name: { ko: '사려니숲길', ja: '思いやりの森の道', zh: 'Saryeoni 森林步道', en: 'Saryeoni forest path' }, region: 'jeju', q: '사려니숲길', note: { ko: '삼나무 숲길, 빛이 내려오는 오전.', ja: '杉の森の道、光が降りてくる午前。', zh: '杉林小道，晨光洒落。', en: 'A cedar path, best in morning light.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '☕', dish: { ko: '커피 · 베이커리', ja: 'コーヒー・ベーカリー', zh: '咖啡·面包店', en: 'Coffee · bakery' }, note: { ko: '이동이 긴 날이라 아침은 간단히.', ja: '移動が長い日だから朝は簡単に。', zh: '由于这是一整天的旅行，所以我吃了一顿简单的早餐。', en: 'A long travel day wants a simple breakfast.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥩', dish: { ko: '이동갈비 · 막국수', ja: '移動カルビ・マクグクス', zh: '伊东排骨·玛格库苏', en: 'Galbi · buckwheat noodles' }, note: { ko: '포천의 대표 점심.', ja: 'ポチョンの代表的なランチ。', zh: '抱川的代表性午餐。', en: 'The Pocheon lunch.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍦', dish: { ko: '아이스크림 · 허브차', ja: 'アイスクリーム・ハーブティー', zh: '冰淇淋和花草茶', en: 'Ice cream · herb tea' }, note: { ko: '정원 안에서 잠깐 쉬어 가세요.', ja: '庭の中で少し休んでください。', zh: '到花园里休息一下。', en: 'Take a pause inside the garden.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍲', dish: { ko: '닭갈비 · 국밥', ja: 'チキンリブ・クッパ', zh: '鸡排·汤饭', en: 'Chicken galbi · rice soup' }, note: { ko: '돌아오는 길에 따뜻하게.', ja: '帰り道に暖かく。', zh: '回来的路上注意保暖。', en: 'Something warm on the way back.' } }
  ],
  photos: [
    { file: 'th-photo', cap: { ko: '채석장 절벽과 호수', ja: '採石場の崖と湖', zh: '采石场悬崖和湖泊', en: 'Quarry cliffs and lake' } },
    { file: 'th-photo-p2', cap: { ko: '정원의 꽃밭', ja: '庭の花畑', zh: '花园里的花园', en: 'Flower beds in the garden' } }
  ],
  tip: { ko: '같은 자리도 시간에 따라 전혀 다릅니다. 한 곳에서 두 번(오전·해 질 무렵) 찍을 계획을 세우면 성공률이 높아집니다.', ja: '同じ席も時間によって全く異なります。 1か所で2回（午前・日没頃）撮る計画を立てると成功率が高くなります。', zh: '即使是同一个地点，随着时间的推移，也会完全不同。如果您计划在一个地点拍摄两次（早上和黄昏），您的成功率将会提高。', en: 'The same place at two hours is two photographs — plan to shoot one spot twice, morning and dusk.' }
},
