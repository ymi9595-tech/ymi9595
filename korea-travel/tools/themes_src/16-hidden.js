/* ----------------------------------------------- 16 숨은 명소·이색 여행 */
{
  id: 'hidden', emoji: '🧭', tint: '#A8C9E8',
  name: { ko: '숨은 명소 · 이색 여행', ja: '穴場・ひと味違う旅', zh: '小众秘境·特色旅行', en: 'Hidden & unusual places' },
  sub: { ko: '지도에 잘 안 나오는 곳으로', ja: '地図にあまり出てこない場所へ', zh: '去地图上不太出现的地方', en: 'Off the usual map' },
  tag: { ko: '동굴 · 폐광 · 비밀 정원', ja: '洞窟・廃鉱・秘密の庭', zh: '洞穴·废矿·秘密花园', en: 'Caves, old mines, secret gardens' },
  intro: {
    ko: '이색 여행은 "여기가 한국 맞나" 싶은 장면을 찾는 일입니다. 폐광을 예술 공간으로 바꾼 동굴, 강물이 감싸 도는 섬, 배를 타야만 닿는 암자까지. 여기서는 영월에서 시작하는 하루를 잡았어요. 버스로 닿는 거리에 동굴 같은 미술관과 강이 함께 있습니다.', ja: '異色の旅は「ここが韓国に合っている」シーンを探すことです。廃鉱を芸術空間に変えた洞窟、川が包み込む島、船に乗ってこそ届く暗字まで。ここでは永月から始まる一日をとりました。バスでの距離には洞窟のような美術館と川があります。', zh: '独特的旅行就是寻找让你想知道“这真的是韩国吗？”的场景。一个将废弃矿山变成艺术空间的洞穴，一个被河流包围的岛屿，甚至是一个只能乘船到达的隐居处。在这里，我们安排了从宁越出发的一天。乘坐巴士即可到达一个洞穴般的艺术博物馆和一条河流。',
    en: 'An unusual trip is about the moment you wonder whether you are still in Korea: a mine turned into an art cave, an island inside a bend of a river, a hermitage reached by water. This day starts in Yeongwol, where an art park and a river sit within a bus ride of each other.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '여름 동굴', ja: '夏の洞窟', zh: '夏日洞穴', en: 'Caves in summer' }],
  transport: { ko: '기차 + 버스·택시', ja: '列車＋バス・タクシー', zh: '火车＋巴士·出租车', en: 'Train + bus or taxi' },
  duration: { ko: '약 8시간', ja: '約8時間', zh: '约8小时', en: 'About 8 hours' },
  hub: {
    ko: '영월역', ja: 'ヨンウォル駅', zh: '宁越站', en: 'Yeongwol Station', q: '영월역',
    note: {
      ko: '태백선 기차역. 청량리에서 3시간 안팎. 역에서 시내까지 도보 15분, 젊은달와이파크까지 차로 15분입니다.', ja: '太白線駅。清涼里から3時間前後。駅から市内まで徒歩15分、若い月ワイパークまで車で15分です。', zh: '太白线火车站。距清凉里约3小时车程。从车站步行15分钟即可到达市中心，距离Young Dalwai公园有15分钟车程。',
      en: 'A Taebaek line station, about three hours from Cheongnyangni. Town is fifteen minutes on foot; the art park fifteen by car.'
    }
  },
  course: {
    title: { ko: '영월 — 붉은 조형물과 강 위의 섬', ja: '寧越 — 赤い造形と川の上の島', zh: '宁越——红色雕塑与河上的岛', en: 'Yeongwol — red sculptures and an island in the river' },
    meta: { ko: '6곳 · 약 8시간 · 차 3회', ja: '6か所・約8時間・車3回', zh: '6个地点，约8小时，自驾3次', en: '6 stops · about 8 hours · 3 drives' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '영월역', ja: 'ヨンウォル駅', zh: '宁越站', en: 'Yeongwol Station' }, q: '영월역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역에서 택시로 젊은달와이파크까지. 대중교통은 배차가 길어 택시를 권합니다.', ja: '駅からタクシーで若い月ワイパークまで。公共交通機関は配車が長く、タクシーをお勧めします。', zh: '从车站乘坐出租车前往Young Dalwai 公园。公共交通服务时间较长，建议乘坐出租车。', en: 'A taxi to the art park; buses are infrequent here.' } },
      { phase: 'morning', time: '10:30', name: { ko: '젊은달와이파크', ja: '若い月ワイパーク', zh: '年轻的达尔维公园', en: 'Youngwol Y Park' }, q: '젊은달와이파크', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '붉은 대형 조형물과 설치미술. 폐산업 시설을 예술로 바꾼 공간이라 사진이 독특하게 나옵니다.', ja: '赤い大型造形物と設置美術。廃産業施設を芸術に変えた空間なので、写真がユニークに出てきます。', zh: '大型红色雕塑和装置艺术。这些照片之所以独特，是因为这是一个废弃的工业设施已变成艺术品的空间。', en: 'Big red sculptures and installations in a former industrial site — photographs come out unlike anywhere else.' },
        photo: 'th-hidden' },
      { phase: 'lunch', time: '12:00', name: { ko: '영월 시내 점심', ja: '永月市内ランチ', zh: '宁越市午餐', en: 'Lunch in Yeongwol' }, q: '영월읍', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '영월은 감자와 메밀, 산채의 동네. 시내 골목 식당이 12시에 붐빕니다.', ja: '永月はジャガイモとそば、山菜の近所。市内路地のレストランが12時に混雑しています。', zh: '宁越是土豆、荞麦、野菜之乡。中午12点，市中心的巷子里的餐馆就挤满了人。', en: 'Potatoes, buckwheat and mountain greens; town fills at noon.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '한반도섬', ja: '朝鮮半島', zh: '朝鲜半岛岛屿', en: 'Hanbando island' }, q: '한반도섬', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '강물이 감싸 도는 섬. 전망대에 올라야 한반도 모양이 보입니다.', ja: '川が包み込む島。展望台に登ると朝鮮半島の形が見えます。', zh: '一个被河流包围的岛屿。要想看到朝鲜半岛的形状，就得上展望台。', en: 'An island wrapped by the river — the peninsula shape only appears from the lookout.' } },
      { phase: 'afternoon', time: '15:00', name: { ko: '청령포', ja: '清霊浦', zh: '清岭浦', en: 'Cheongnyeongpo' }, q: '청령포', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '단종이 유배되었던 강 위의 숲. 배로 건너 20분이면 한 바퀴입니다.', ja: '中絶が流刑になった川の上の森。船で渡って20分であれば一輪です。', zh: '河上的森林，端宗王被流放的地方。乘船20分钟即可完成一趟。', en: 'The river grove where King Danjong was exiled; a short crossing and a twenty-minute loop.' },
        photo: 'th-hidden-p2' },
      { phase: 'evening', time: '16:30', name: { ko: '별마로천문대', ja: '別に天文台', zh: '星马路展望台', en: 'Byeolmaro observatory' }, q: '별마로천문대', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '해가 지기 전에 올라가 노을과 첫 별을 함께 봅니다. 야간 개장 시간을 확인하세요.', ja: '日が沈む前に登り、夕焼けと最初の星を一緒に見てください。夜のオープン時間を確認してください。', zh: '在太阳落山之前上去，一起看日落和第一颗星星。检查每晚的开放时间。', en: 'Go up before sunset for both the afterglow and the first stars; check the evening opening.' } },
      { phase: 'return', time: '18:30', name: { ko: '영월역', ja: 'ヨンウォル駅', zh: '宁越站', en: 'Yeongwol Station' }, q: '영월역', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '역으로 돌아와 기차. 하루에 두세 곳만 봐도 충분히 이상한 날이 됩니다.', ja: '駅に戻って電車。 1日に2～3ヶ所だけ見ても十分に奇妙な日になります。', zh: '返回车站并乘坐火车。一天只看两三个地方就足以让这一天变得奇怪了。', en: 'Back at the station. Two or three places is enough to make the day feel strange in the right way.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Cost' }, v: { ko: '동굴·미술관 5,000~15,000원, 마을·섬은 무료가 많음', ja: '洞窟・美術館5,000～15,000ウォン、村・島は無料が多い', zh: '洞穴和艺术博物馆5,000至15,000韩元，村庄和岛屿通常是免费的。', en: 'Caves and museums ₩5,000–15,000; villages and islands often free' } },
    { k: { ko: '이동', ja: '移動', zh: '移动', en: 'Getting around' }, v: { ko: '대중교통 배차가 길어 렌터카·택시가 현실적', ja: '公共交通機関の配車が長く、レンタカー・タクシーが現実的', zh: '租一辆汽车或出租车是现实的，因为公共交通的间隔很长。', en: 'Buses are sparse; a car or taxi is realistic' } },
    { k: { ko: '물때', ja: '水の時', zh: '潮汐', en: 'Tide' }, v: { ko: '갯벌·부교 명소는 물때 확인 필수', ja: '干潟・浮き桟橋は潮見表の確認が必須', zh: '泥滩和浮桥要看潮汐表', en: 'For tidal flats and pontoon paths, check the tide' } }
  ],
  places: [
    { name: { ko: '광명동굴', ja: '光明洞窟', zh: '光明洞窟', en: 'Gwangmyeong Cave' }, region: 'capital', q: '광명동굴', note: { ko: '폐광을 예술 공간으로. 연중 12℃, 실내 관광.', ja: '廃光を芸術空間に。年中12℃、屋内観光。', zh: '将废弃矿井改造成艺术空间。常年12℃，室内旅游。', en: 'A disused mine turned art space, 12℃ all year.' } },
    { name: { ko: '젊은달와이파크', ja: '若い月ワイパーク', zh: '年轻的达尔维公园', en: 'Youngwol Y Park' }, region: 'gangwon', q: '젊은달와이파크', note: { ko: '영월. 붉은 조형물과 설치미술.', ja: '永月。赤い造形物と設置美術。', zh: '宁越。红色雕塑和装置艺术。', en: 'Yeongwol: red sculptures and installations.' } },
    { name: { ko: '한반도섬', ja: '朝鮮半島', zh: '朝鲜半岛岛屿', en: 'Hanbando island' }, region: 'gangwon', q: '한반도섬', note: { ko: '양구. 인공습지 안의 한반도 모양 섬.', ja: '両口。人工湿地の中の朝鮮半島形の島。', zh: '阳谷。人工湿地中的朝鲜半岛形状的岛屿。', en: 'Yanggu: a peninsula-shaped island in a wetland.' } },
    { name: { ko: '청령포', ja: '清霊浦', zh: '清岭浦', en: 'Cheongnyeongpo' }, region: 'gangwon', q: '청령포', note: { ko: '영월. 강 위의 숲, 배로 건넙니다.', ja: '永月。川の上の森、船に渡ります。', zh: '宁越。河上林，船渡。', en: 'Yeongwol: a river grove reached by boat.' } },
    { name: { ko: '무진정', ja: 'ムジンジョン', zh: '无镇静作用', en: 'Mujinjeong' }, region: 'gyeongsang', q: '무진정', note: { ko: '함안. 물 위로 불꽃이 흩날리는 낙화놀이로 유명. 행사일 확인.', ja: 'ハムアン。水の上に花火が飛び散る落花遊びで有名。イベント日を確認してください。', zh: '哈曼。它以烟花在水面上飞舞的落花节而闻名。检查活动日期。', en: 'Haman: known for the falling-fire flower play over water; check event dates.' } },
    { name: { ko: '운곡람사르습지', ja: '雲谷ラムサール湿地', zh: '温谷拉姆萨尔湿地', en: 'Ungok Ramsar wetland' }, region: 'jeolla', q: '운곡람사르습지', note: { ko: '고창. 회복된 습지 생태계와 숲길.', ja: '高昌。回復した湿地生態系と森の道。', zh: '高敞。恢复湿地生态系统和林道。', en: 'Gochang: a recovered wetland and forest paths.' } },
    { name: { ko: '초곡용굴촛대바위길', ja: 'チョゴクヨングールローソク足岩道', zh: '草谷龙谷草台石路', en: 'Chogok rock-arch coast path' }, region: 'gangwon', q: '초곡용굴촛대바위', note: { ko: '삼척. 기암과 바다 절벽을 따라 걷는 길.', ja: '三尺。奇岩と海の崖に沿って歩く道。', zh: '三陟。沿着形状奇特的岩石和海崖的步行道。', en: 'Samcheok: a path along rock formations and sea cliffs.' } },
    { name: { ko: '단양강 잔도', ja: '丹陽川残島', zh: '丹阳河残迹', en: 'Danyang cliff walkway' }, region: 'jeolla', q: '단양강 잔도', note: { ko: '암벽 옆에 붙은 강변 산책로.', ja: '岩壁の横についた川沿いの遊歩道。', zh: '石墙旁边的河边步道。', en: 'A walkway pinned to the cliff above the river.' } },
    { name: { ko: '신창풍차해안도로', ja: '新昌風車海岸道路', zh: '新昌风车海岸路', en: 'Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '바다 위 풍력발전기와 데크.', ja: '海の上の風力発電機とデッキ。', zh: '海上风力涡轮机和甲板。', en: 'Turbines over the water, with a boardwalk.' } },
    { name: { ko: '행남해안산책로', ja: 'ハンナム海岸遊歩道', zh: '杏南海岸步道', en: 'Haengnam coastal path' }, region: 'gyeongsang', q: '울릉도 행남해안산책로', note: { ko: '울릉도. 절벽과 자연동굴을 잇는 길.', ja: '鬱陵島。崖と自然洞窟をつなぐ道。', zh: '郁陵岛。连接悬崖和天然洞穴的道路。', en: 'Ulleungdo: cliffs and a natural cave linked by a path.' } },
    { name: { ko: '안면암', ja: '顔面がん', zh: '面部癌', en: 'Anmyeonam' }, region: 'jeolla', q: '안면암', note: { ko: '태안. 바다 위 부교로 들어가는 암자, 물때 확인.', ja: '泰安。海の上の副教に入る庵、水際確認。', zh: '泰安。通过海上浮桥进入隐居处，查看潮汐。', en: 'Taean: a hermitage reached by a floating bridge; check the tide.' } },
    { name: { ko: '퍼플섬 반월도·박지도', ja: 'パープル島半月島・朴地図', zh: '紫岛半月岛和朴智岛', en: 'Purple Island' }, region: 'jeolla', q: '퍼플섬', note: { ko: '신안. 섬 전체가 보라색, 보행교로 연결.', ja: '新案。島全体が紫色、歩行橋でつながります。', zh: '石南。整个岛呈紫色，由一座人行天桥相连。', en: 'Sinan: an island painted purple, linked by footbridges.' } },
    { name: { ko: '문무대왕릉', ja: '文武大王陵', zh: '文武王陵墓', en: 'Tomb of King Munmu' }, region: 'gyeongsang', q: '문무대왕릉', note: { ko: '경주. 바다의 바위섬에 자리한 수중릉.', ja: '慶州。海の岩島にある水中陵。', zh: '庆州。位于海中岩石岛上的水下坟墓。', en: 'Gyeongju: a royal tomb on a rock in the sea.' } },
    { name: { ko: '옻골마을', ja: '漆の村', zh: '奥特戈尔村', en: 'Otgol village' }, region: 'gyeongsang', q: '옻골마을', note: { ko: '대구. 400년 고택과 돌담길.', ja: '大邱。 400年の古宅と石垣道。', zh: '鳕鱼。 400年历史的老房子和石墙路。', en: 'Daegu: a four-hundred-year-old house and stone walls.' } },
    { name: { ko: '면천읍성', ja: '面川邑城', zh: '面川邑城', en: 'Myeoncheon fortress' }, region: 'jeolla', q: '면천읍성', note: { ko: '당진. 성곽 안에 주민이 사는 마을.', ja: '唐津。城の中に住民が住む町。', zh: '唐津。居民居住在城墙内的村庄。', en: 'Dangjin: a village living inside fortress walls.' } },
    { name: { ko: '강경근대거리', ja: '江景近代街', zh: '江景近代街', en: 'Ganggyeong modern street' }, region: 'jeolla', q: '강경근대거리', note: { ko: '논산. 옛 상업도시의 근대 건축 골목.', ja: '論山。旧商業都市の近代建築路地。', zh: '论山。老商业城里的一条现代建筑胡同。', en: 'Nonsan: the modern buildings of an old trading town.' } },
    { name: { ko: '성안올레', ja: 'サンアンオレ', zh: '城安偶来', en: 'Seongan Olle' }, region: 'jeju', q: '제주 성안올레', note: { ko: '제주 원도심의 역사 골목길.', ja: '済州原都心の歴史通り。', zh: '原来济州市中心的一条历史小巷。', en: 'Historic lanes in old Jeju town.' } },
    { name: { ko: '순창발효테마파크', ja: '淳昌発酵テーマパーク', zh: '顺昌发酵主题公园', en: 'Sunchang fermentation park' }, region: 'jeolla', q: '순창발효테마파크', note: { ko: '발효와 미생물을 주제로 한 체험 공간.', ja: '発酵や微生物をテーマにした体験空間。', zh: '以发酵和微生物为主题的体验空间。', en: 'A park built around fermentation and microbes.' } },
    { name: { ko: '클레이아크김해미술관', ja: 'クレイアーク金海美術館', zh: 'Clayarch 金海博物馆', en: 'Clayarch Gimhae museum' }, region: 'gyeongsang', q: '클레이아크김해미술관', note: { ko: '도자와 건축을 결합한 돔 형태 미술관.', ja: '陶磁と建築を組み合わせたドーム型美術館。', zh: '一座集陶瓷与建筑于一体的圆顶形艺术博物馆。', en: 'A domed museum combining ceramics and architecture.' } },
    { name: { ko: '가우도', ja: 'カウド（加牛島）', zh: '加牛岛', en: 'Gawdo island' }, region: 'jeolla', q: '가우도', note: { ko: '강진. 출렁다리와 짚트랙으로 이어지는 섬.', ja: 'カンジン。跳ね橋とわらトラックにつながる島。', zh: '刚进。一座由吊桥和滑索连接的岛屿。', en: 'Gangjin: an island reached by a suspension bridge and a zipline.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 감자수제비', ja: 'クッパ・ジャガイモ手作り', zh: '汤包·马铃薯Sujebi', en: 'Rice soup · potato dumplings' }, note: { ko: '영월은 감자 요리가 흔합니다.', ja: 'ヨンウォルはジャガイモ料理が一般的です。', zh: '在宁越，土豆菜肴很常见。', en: 'Potato dishes are everywhere in Yeongwol.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥘', dish: { ko: '산채비빔밥 · 메밀전', ja: '山菜ビビンバ・そば展', zh: '野菜拌饭·荞麦煎饼', en: 'Wild-vegetable bibimbap · buckwheat pancake' }, note: { ko: '산간 지역은 나물이 신선합니다.', ja: '山間地域はハーブが新鮮です。', zh: '山区的蔬菜很新鲜。', en: 'Mountain regions have the fresh greens.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍠', dish: { ko: '군고구마 · 옥수수', ja: 'サツマイモ・トウモロコシ', zh: '烤红薯和玉米', en: 'Roast sweet potato · corn' }, note: { ko: '동굴 앞에서 먹는 군고구마가 별미.', ja: '洞窟の前で食べるサツマイモが別美。', zh: '洞前吃的烤红薯是一道美味。', en: 'A roast sweet potato outside a cave tastes better.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍲', dish: { ko: '올갱이국 · 닭백숙', ja: 'オールギャング局・鶏白宿', zh: 'Olgaengi汤·水煮鸡肉', en: 'Freshwater snail soup · chicken broth' }, note: { ko: '강이 있는 동네의 저녁.', ja: '川のある近所の夜。', zh: '傍晚，河边小镇。', en: 'Dinner in a river town.' } }
  ],
  photos: [
    { file: 'th-hidden', cap: { ko: '이색 공간의 조형물', ja: '二色空間の造形物', zh: '独特空间中的雕塑', en: 'Sculpture in an unusual space' } },
    { file: 'th-hidden-p2', cap: { ko: '강과 숲', ja: '川と森', zh: '河流和森林', en: 'River and forest' } }
  ],
  tip: { ko: '이색 명소는 운영이 자주 바뀝니다. 떠나기 전에 전화로 영업 여부를 확인하면 헛걸음이 없습니다.', ja: '異色スポットは運営が頻繁に変わります。出発前に電話で営業しているかどうかを確認すると、無駄はありません。', zh: '独特景点的运营经常发生变化。您可以在离开前致电询问商店是否营业，以避免浪费时间。', en: 'Unusual places change hands and hours often — a phone call before you go saves the trip.' }
},
