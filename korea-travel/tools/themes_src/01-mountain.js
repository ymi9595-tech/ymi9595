/* ------------------------------------------------------------------ 01 산 */
{
  id: 'mountain', emoji: '⛰️', tint: '#9BD3C4',
  name: { ko: '산 · 트레킹', ja: '山・トレッキング', zh: '登山·徒步', en: 'Mountains & trekking' },
  sub: { ko: '능선에 올라 하루를 보내는 코스', ja: '尾根に上がって一日を過ごすコース', zh: '登上山脊过一天的路线', en: 'A day spent above the treeline' },
  tag: { ko: '계곡 · 능선 · 정상 전망', ja: '渓谷・尾根・山頂の眺め', zh: '溪谷·山脊·山顶展望', en: 'Valleys, ridges, a summit view' },
  intro: {
    ko: '산은 준비물이 조금 필요하지만, 그만큼 하루가 단단해집니다. 서울 안에서 시작해 저녁에는 다시 도심으로 내려올 수 있는 도봉산 코스를 기본으로 잡았어요. 계곡을 따라 오르다가 마당바위에서 숨을 고르고, 신선대에서 서울을 내려다보고 내려옵니다. 전국 명산은 아래 목록에서 골라 같은 방식으로 하루를 짜면 됩니다.', ja: '山は少し準備が必要ですが、それだけ一日が硬くなります。ソウルの中で始まり、夕方には再び都心に降りることができる道鳳山コースを基本にとりました。渓谷に沿って登り、庭の岩から息を取り、新鮮な台からソウルを見下ろします。全国名産は以下のリストから選んで同じように一日を組むだけです。', zh: '爬山需要一些准备，但它会让你的一天更加充实。我决定参加道峰山路线，该路线从首尔市内出发，晚上返回市中心。沿着山谷攀登，在马当巴威岩休息一下，然后从神仙台下来，俯瞰首尔。您可以从下面的列表中选择该国的一座名山，并以同样的方式计划您的一天。',
    en: 'A mountain day needs a little preparation and gives back a solid day. This route starts inside Seoul and still gets you back to the city by evening: up a valley, a rest at Madangbawi, a look down over Seoul from Sinseondae, then down. Pick any of the peaks listed below and shape the same kind of day around it.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을 단풍', ja: '秋の紅葉', zh: '秋天的树叶', en: 'Autumn leaves' }, { ko: '겨울 설경', ja: '冬の雪景色', zh: '冬天的雪景', en: 'Snow' }],
  transport: { ko: '지하철 + 도보', ja: '地下鉄＋徒歩', zh: '地铁＋步行', en: 'Subway + on foot' },
  duration: { ko: '약 7시간 · 도보 7km', ja: '約7時間・徒歩7km', zh: '步行约7公里，约7小时', en: 'About 7 hours · 7 km on foot' },
  hub: {
    ko: '도봉산역', ja: '道鳳山駅', zh: '道峰山站', en: 'Dobongsan Station', q: '도봉산역',
    note: {
      ko: '1호선과 7호선이 만나는 역이라 어디서 출발해도 한 번에 닿습니다. 역 앞에서 물과 김밥을 사 두면 산 위 준비가 끝납니다.', ja: '1号線と7号線が出会う駅なので、どこから出発しても一度に届きます。駅前で水とキンバプを買っておくと、山の上の準備が終わります。', zh: '由于是1号线和7号线的交汇站，所以无论从哪里出发都可以立即到达。只要在车站前买点水和紫菜包饭就可以上山了。',
      en: 'Lines 1 and 7 meet here, so you reach it in one ride from most of Seoul. Buy water and a roll of kimbap by the exit and you are ready.'
    }
  },
  course: {
    title: { ko: '도봉산 — 계곡에서 신선대까지', ja: '道峰山 — 渓谷から神仙台まで', zh: '道峰山——从溪谷到神仙台', en: 'Dobongsan — from the valley to Sinseondae' },
    meta: { ko: '6곳 · 약 7시간 · 도보 7km', ja: '6ヶ所・約7時間・徒歩7km', zh: '6个地点，约7小时，步行7公里', en: '6 stops · about 7 hours · 7 km' },
    steps: [
      { phase: 'start', time: '08:00', name: { ko: '도봉산역', ja: '道鳳山駅', zh: '道峰山站', en: 'Dobongsan Station' }, q: '도봉산역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역 2번 출구로 나오면 등산로 안내판이 보입니다. 화장실과 매점이 여기까지라 마지막 준비는 역 앞에서 하세요.', ja: '駅2番出口から出ると登山道案内板が見えます。トイレと売店がここまでと最後の準備は駅前でしてください。', zh: '从车站2号出口出来，你会看到远足径的标志。一路上都有厕所和商店，所以请在车站前做好最后的准备。', en: 'Exit 2 leads straight to the trail board. Toilets and the last shop are here, so finish your preparations before you walk in.' } },
      { phase: 'morning', time: '08:20', name: { ko: '도봉탐방지원센터', ja: 'ドボンタンバン支援センター', zh: '道峰探索支援中心', en: 'Dobong trail centre' }, q: '도봉산 탐방지원센터', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '산길이 본격적으로 시작되는 지점. 통제 구간과 일몰 시간을 안내판에서 확인하고 들어가세요.', ja: '山道が本格的に始まる地点。制御区間と日没時間を案内板で確認して入ってください。', zh: '山路正式开始的地方。进入前请查看信息板上的限制区域和日落时间。', en: 'Where the real climb begins. Check the board for closed sections and sunset time before you go in.' },
        photo: 'th-mountain-p2' },
      { phase: 'morning', time: '09:10', name: { ko: '천축사', ja: '天使', zh: '天竹寺', en: 'Cheonchuksa Temple' }, q: '천축사', move: { ko: '도보 약 40분', ja: '徒歩約40分', zh: '步行约40分钟', en: 'Walk, about 40 min' },
        desc: { ko: '계곡을 따라 완만하게 오르는 길 끝의 절. 마당에서 잠깐 앉아 물을 마시기 좋습니다.', ja: '谷に沿ってゆっくりと登る道の終わりの寺院。庭でしばらく座って水を飲むのに最適です。', zh: '一座寺庙位于一条沿着山谷缓缓攀登的道路尽头。在院子里坐一会儿喝点水真是太好了。', en: 'A temple at the top of a gentle valley path — a good courtyard to sit in and drink some water.' } },
      { phase: 'morning', time: '10:20', name: { ko: '마당바위', ja: '庭の岩', zh: '马当巴维岩', en: 'Madangbawi rock' }, q: '마당바위', move: { ko: '도보 약 40분', ja: '徒歩約40分', zh: '步行约40分钟', en: 'Walk, about 40 min' },
        desc: { ko: '너른 바위 마당이 갑자기 열립니다. 여기서부터 계단이 가팔라지니 이곳에서 간식을 꺼내세요.', ja: '広い岩の庭が突然開きます。ここから階段が盛り上がるので、ここからおやつを取り出してください。', zh: '一个宽阔的岩石院子突然开阔了。从这里开始楼梯越来越陡，所以在这里吃点小吃吧。', en: 'A wide rock terrace opens suddenly. The stairs get steep after this — take out your snacks here.' } },
      { phase: 'lunch', time: '11:30', name: { ko: '신선대 아래 점심', ja: '新鮮な台の下で昼食', zh: '神仙台下午餐', en: 'Lunch below Sinseondae' }, q: '신선대', move: { ko: '도보 약 30분', ja: '徒歩約30分', zh: '步行约30分钟', en: 'Walk, about 30 min' },
        desc: { ko: '바위 그늘에 앉아 도시락을 먹습니다. 산 위에서는 취사가 안 되니 미리 싸 온 것으로.', ja: '岩の陰に座って弁当を食べる。山の上では炊事ができないのであらかじめ安くしてきたもの。', zh: '我们坐在岩石的树荫下，吃盒装午餐。山上不允许做饭，所以我提前带了。', en: 'Sit in the rock shade with a packed lunch — cooking is not allowed up here, so bring it ready-made.' } },
      { phase: 'afternoon', time: '12:30', name: { ko: '신선대', ja: '新鮮台', zh: '神仙台', en: 'Sinseondae' }, q: '도봉산 신선대', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
        desc: { ko: '서울이 통째로 내려다보이는 바위 전망대. 난간 밖으로 나가지 말고 앉을 수 있는 넓은 바위를 찾으세요.', ja: 'ソウルが丸ごと見下ろす岩展望台。手すりの外に出ないで座ることができる広い岩を探してください。', zh: '可以俯瞰整个首尔市的岩石展望台。不要离开壁架并找一块宽的岩石坐下。', en: 'A rock lookout with the whole city below. Stay inside the rail and find one of the broad flat rocks to sit on.' },
        photo: 'th-mountain' },
      { phase: 'afternoon', time: '13:30', name: { ko: '도봉대피소', ja: 'トボン避難所', zh: '道峰避难所', en: 'Dobong shelter' }, q: '도봉대피소', move: { ko: '도보 약 30분', ja: '徒歩約30分', zh: '步行约30分钟', en: 'Walk, about 30 min' },
        desc: { ko: '하산길에 만나는 대피소. 무릎이 아프면 여기서 스트레칭을 하고 천천히 내려오세요.', ja: 'ハサン道に出会う避難所。膝が痛くなったら、ここでストレッチをしてゆっくり降りてください。', zh: '下山途中遇到的避难所。如果你的膝盖受伤了，就伸展一下这里，然后慢慢下来。', en: 'The shelter on the way down. If your knees complain, stretch here and take the descent slowly.' } },
      { phase: 'return', time: '15:30', name: { ko: '도봉산역', ja: '道鳳山駅', zh: '道峰山站', en: 'Dobongsan Station' }, q: '도봉산역', move: { ko: '도보 약 50분', ja: '徒歩約50分', zh: '步行约50分钟', en: 'Walk, about 50 min' },
        desc: { ko: '역으로 내려와 마무리. 7호선으로 두 정거장이면 온천과 시장이 있는 도심이라 저녁까지 이어집니다.', ja: '駅に降りてきて仕上げ。 7号線で2駅であれば、温泉と市場がある都心なので夕方まで続きます。', zh: '到车站就结束了。乘坐7号线两站即可到达市中心，那里有温泉和市场，因此一直持续到晚上。', en: 'Back at the station. Two stops on Line 7 puts you in the middle of town for dinner.' } }
    ]
  },
  conds: [
    { k: { ko: '난이도', ja: '難易度', zh: '难度级别', en: 'Difficulty' }, v: { ko: '중급 · 왕복 7km · 오르막 3시간', ja: '中級・往復7km・上り3時間', zh: '中级·往返7公里·上坡3小时', en: 'Moderate · 7 km round trip · 3 hours up' } },
    { k: { ko: '준비물', ja: '準備', zh: '你需要什么', en: 'What to bring' }, v: { ko: '물 1.5L, 도시락, 등산화, 바람막이', ja: '水1.5L、弁当、等酸化、風防', zh: '1.5升水、饭盒、登山鞋、风衣', en: '1.5 L water, packed lunch, boots, windbreaker' } },
    { k: { ko: '통제', ja: 'コントロール', zh: '控制', en: 'Closures' }, v: { ko: '산불 조심 기간·호우 시 입산 통제, 일몰 1시간 전 하산', ja: '山火事警戒期間・豪市入山統制、日没1時間前下山', zh: '森林火灾警戒期和大雨期间禁止入山，日落前1小时下山。', en: 'Closed in fire-risk or heavy-rain periods; start down an hour before sunset' } }
  ],
  places: [
    { name: { ko: '설악산 대청봉', ja: '雪岳山大清峰', zh: '雪岳山大青峰', en: 'Seoraksan Daecheongbong' }, region: 'gangwon', q: '설악산 대청봉', note: { ko: '1,708m. 당일은 소공원~비선대~양폭 코스가 무리 없습니다. 대청봉은 새벽 출발 또는 1박.', ja: '1708メートル。当日は小公園～非線大～両幅コースが無理ではありません。大清峰は夜明け出発または1泊。', zh: '1,708米当天的小公园~飞仙台~阳坡路线并不难。黎明时分从大清峰出发或过夜。', en: '1,708 m. For a day, the Sogongwon–Biseondae–Yangpok route is comfortable; the summit needs a dawn start or a night.' } },
    { name: { ko: '지리산 노고단', ja: '千里山の御殿', zh: '智异山老古坛', en: 'Jirisan Nogodan' }, region: 'jeolla', q: '지리산 노고단', note: { ko: '성삼재에서 30분이면 능선. 운해가 뜨는 이른 아침이 가장 좋습니다.', ja: '城三材から30分で尾根。雲海が浮かぶ早朝が最高です。', zh: '距离圣三斋约30分钟路程。最好的时间是清晨云海升起的时候。', en: 'Thirty minutes from Seongsamjae to the ridge; best early, when cloud fills the valleys.' } },
    { name: { ko: '소백산 비로봉', ja: '小白山ビロボン', zh: '小白山飞卢峰', en: 'Sobaekasan Birobong' }, region: 'gyeongsang', q: '소백산 비로봉', note: { ko: '풍기에서 출발. 봄 철쭉과 겨울 눈꽃으로 이름난 능선입니다.', ja: '風機から出発。春ツツジと冬の雪花で名付けられた尾根です。', zh: '从丰基出发。这条山脊以春天的杜鹃花和冬天的雪花而闻名。', en: 'Start from Punggi; famous for spring azaleas and winter snow on the ridge.' } },
    { name: { ko: '태백산 천제단', ja: '太白山天帝団', zh: '太白山天祭坛', en: 'Taebaeksan Cheonjedan' }, region: 'gangwon', q: '태백산 천제단', note: { ko: '당골에서 왕복 4시간 남짓. 겨울 설경과 일출이 특히 좋습니다.', ja: '当骨から往復4時間余り。冬の雪景色と日の出は特に良いです。', zh: '从丹谷来回大约需要4小时。冬天的雪景和日出尤其好看。', en: 'About four hours round trip from Danggol; best in snow at sunrise.' } },
    { name: { ko: '오대산', ja: '五台山', zh: '五台山', en: 'Odaesan' }, region: 'gangwon', q: '오대산', note: { ko: '상원사와 월정사를 잇는 숲길이 완만해 가족 산행에 좋습니다.', ja: '上院寺と月情寺をつなぐ森の道がゆるやかで家族散歩に最適です。', zh: '连接上院寺和月精寺的缓和的森林小路非常适合家庭徒步旅行。', en: 'A gentle forest path linking Sangwonsa and Woljeongsa — good for families.' } },
    { name: { ko: '월악산', ja: '月岳山', zh: '月岳山', en: 'Woraksan' }, region: 'jeolla', q: '월악산', note: { ko: '덕주사~영봉 코스. 마지막 철계단이 가파릅니다.', ja: '徳州寺～英峰コース。最後の鉄階段が急である。', zh: '德寿寺～灵峰路线。最后的铁梯很陡。', en: 'Deokjusa to Yeongbong; the final steel stairs are steep.' } },
    { name: { ko: '속리산', ja: 'ソクリサン', zh: '俗离山', en: 'Songnisan' }, region: 'jeolla', q: '속리산', note: { ko: '법주사에서 문장대까지. 절과 산을 한 번에 담는 코스.', ja: '法注射から文章台まで。寺と山を一度に盛り込むコース。', zh: '从法住寺到文将台。同时包含寺庙和山脉的路线。', en: 'Beopjusa up to Munjangdae — a temple and a peak in one walk.' } },
    { name: { ko: '무등산', ja: '無登山', zh: '无等山', en: 'Mudeungsan' }, region: 'jeolla', q: '무등산', note: { ko: '광주 도심에서 20분. 서석대 주상절리대가 볼거리입니다.', ja: '光州市中心部から20分。ソソクデ柱状節理隊が見どころです。', zh: '距光州市中心20分钟路程。西石台柱状节理是必看景点。', en: 'Twenty minutes from central Gwangju; the Seoseokdae column cliffs are the sight.' } },
    { name: { ko: '치악산', ja: 'チアク山', zh: '雉岳山', en: 'Chiaksan' }, region: 'gangwon', q: '치악산', note: { ko: '구룡사~비로봉. 가을 단풍철에는 아침 일찍 들어가세요.', ja: '九龍寺～ビロボン。秋の紅葉には朝早く入ります。', zh: '九龙寺~毗卢峰。秋叶季节，一早就去。', en: 'Guryongsa to Birobong; in autumn colour, go early.' } },
    { name: { ko: '한라산', ja: '漢拏山', zh: '汉拿山', en: 'Hallasan' }, region: 'jeju', q: '한라산', note: { ko: '성판악 코스는 왕복 9시간. 당일은 어리목~윗세오름이 현실적입니다.', ja: '聖板楽コースは往復9時間。当日は愚かな〜上の上がりが現実的です。', zh: '城板岳路线往返9小时。当天，Eorimok ~ Witse Oreum 很现实。', en: 'Seongpanak is nine hours round trip; for one day, Eorimok to Witseoreum is realistic.' } },
    { name: { ko: '북한산 백운대', ja: '北朝鮮山白雲台', zh: '北汉山百云台', en: 'Bukhansan Baegundae' }, region: 'capital', q: '북한산 백운대', note: { ko: '서울 안에서 정상까지. 주말에는 입산 대기가 길어집니다.', ja: 'ソウルの中から頂上まで。週末には入産待ちが長くなります。', zh: '从首尔到山顶。周末，进山的等待时间会更长。', en: 'A summit inside Seoul; weekend queues at the trailhead get long.' } },
    { name: { ko: '주왕산', ja: 'ジュワンサン', zh: '周王山', en: 'Juwangsan' }, region: 'gyeongsang', q: '주왕산', note: { ko: '계곡과 기암이 이어지는 짧은 코스. 여름이 시원합니다.', ja: '谷と奇岩が続く短いコース。夏は涼しいです。', zh: '一条短途路线，有山谷和奇形怪状的岩石。夏天很凉爽。', en: 'A short route through gorge and rock; cool in summer.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍙', dish: { ko: '김밥 · 주먹밥', ja: 'キムバップ・おにぎり', zh: '紫菜包饭·饭团', en: 'Kimbap · rice balls' }, note: { ko: '산에서는 취사가 안 되니 역 앞에서 사 가세요.', ja: '山では炊事ができないので駅前で買ってください。', zh: '山上不能做饭，就在车站前买。', en: 'No cooking on the trail — buy it at the station.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥢', dish: { ko: '도시락 · 삶은 달걀 · 과일', ja: 'お弁当・ゆで卵・果物', zh: '饭盒、煮鸡蛋、水果', en: 'Packed lunch · boiled eggs · fruit' }, note: { ko: '바위 그늘에서 먹는 도시락이 산행의 절반입니다.', ja: '岩の陰で食べる弁当は山の半分です。', zh: '在岩石树荫下吃一顿外带午餐就已经成功了一半。', en: 'A lunch in rock shade is half the climb.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍫', dish: { ko: '초콜릿 · 견과 · 인절미', ja: 'チョコレート・ナッツ・イン節味', zh: '巧克力、坚果、因加米', en: 'Chocolate · nuts · injeolmi rice cake' }, note: { ko: '당이 떨어지면 계단이 두 배로 힘듭니다.', ja: '党が落ちると、階段は2倍になります。', zh: '当你的糖用完时，爬楼梯就会变得更加困难。', en: 'When your sugar drops the stairs double in weight.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍲', dish: { ko: '해장국 · 칼국수 · 막걸리와 파전', ja: 'ヘジャングク・カルグクス・マッコリとパジョン', zh: '解酒汤、刀削面、马格利酒、葱饼', en: 'Hangover soup · noodles · makgeolli with scallion pancake' }, note: { ko: '하산 후에는 뜨끈한 국물이 답입니다.', ja: '下産後は熱いスープが答えです。', zh: '下山后的答案就是热汤。', en: 'After a descent, hot broth is the answer.' } }
  ],
  photos: [
    { file: 'th-mountain', cap: { ko: '능선에서 내려다본 계곡', ja: '尾根から見下ろす谷', zh: '从山脊上看到的山谷', en: 'A valley seen from the ridge' } },
    { file: 'th-mountain-p2', cap: { ko: '탐방로 입구의 숲길', ja: '探訪路入口の森道', zh: '小径入口处的森林小路', en: 'The forest path at the trailhead' } }
  ],
  tip: { ko: '겨울에는 해가 17시 전에 집니다. 정상에서 14시를 넘기면 바로 내려오세요.', ja: '冬には太陽が17時前になります。頂上で14時を過ぎたらすぐ降りてください。', zh: '冬季，太阳在17:00之前落山。山顶过了14:00就下来。', en: 'In winter the sun sets before five — turn around at the summit by two.' }
},
