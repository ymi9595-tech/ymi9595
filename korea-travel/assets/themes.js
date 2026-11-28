/* ==========================================================================
   당장 가볼까? · Go Now? Korea Day-Trip Courses
   themes.js — 22 one-day themes (generated; edit tools/themes_src/*.js)
   --------------------------------------------------------------------------
   Every theme: name / tag / intro / hub (terminal, station or airport),
   one day course, key conditions (conds), representative places (places),
   local dishes only (no restaurant names), real photographs.
   ========================================================================== */

const THEMES = [
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
    { name: { ko: '고성 청간정', ja: '高城チョンガンジョン', zh: '高城清安亭', en: 'Goseong Cheongganjeong' }, region: 'gangwon', q: '청간정', note: { ko: '절벽 위 정자에서 보는 동해. 7번 국도 드라이브의 대표 정차 지점입니다.', ja: '崖の上の精子で見る東海。 7番国道ドライブの代表停車地点です。', zh: '从悬崖上的亭子看东海。这是7号公路大道上的一个主要站点。', en: 'A pavilion on the cliff over the East Sea — the classic stop on Route 7.' } }
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
/* ------------------------------------------------------- 05 계절 축제 */
{
  id: 'festival', emoji: '🎉', tint: '#FFB59B',
  name: { ko: '계절 축제', ja: '季節の祭り', zh: '季节庆典', en: 'Seasonal festivals' },
  sub: { ko: '그 계절에만 열리는 하루', ja: 'その季節にだけ開く一日', zh: '只在那个季节才有的一天', en: 'A day that exists only in its season' },
  tag: { ko: '축제 · 불빛 · 계절 한정', ja: '祭り・灯り・季節限定', zh: '庆典·灯光·季节限定', en: 'Festivals, lights, one season only' },
  intro: {
    ko: '축제는 날짜가 전부입니다. 해가 지고 불이 들어올 때가 하이라이트이므로, 오후에 도착해 천천히 둘러보다 어두워질 때 중심으로 들어가는 동선이 좋습니다. 여기서는 10월 진주 남강유등축제를 기본 코스로 잡았어요. 다른 축제는 아래 목록에서 시기를 보고 골라 같은 방식으로 하루를 짜면 됩니다.', ja: '祭りは日付がすべてです。太陽が降って火が入る時がハイライトなので、午後に到着してゆっくり回りより暗くなるとき中心に入る動線が良いです。ここでは、10月に真珠南江油灯祭りを基本コースとした。他の祭りは、以下のリストで時期を見て選んで同じように一日を組むことができます。', zh: '说到节日，日期就是一切。亮点是日落、华灯初上的时候，所以最好是下午到达，慢慢环顾四周，天黑了再进入中心。在这里，我们选择了十月份的晋州南江灯会作为我们的基础课程。对于其他节日，您可以从下面的列表中选择时间并以相同的方式计划您的一天。',
    en: 'For a festival the date is everything. The highlight comes when the lights go on, so arrive in the afternoon, wander, and move to the centre as it gets dark. This route follows the Jinju lantern festival in October; pick another from the list and plan the same shape of day.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울', ja: '冬', zh: '冬天', en: 'Winter' }],
  transport: { ko: 'KTX + 도보', ja: 'KTX＋徒歩', zh: 'KTX＋步行', en: 'KTX + on foot' },
  duration: { ko: '약 7시간', ja: '約7時間', zh: '约7小时', en: 'About 7 hours' },
  hub: {
    ko: '진주역', ja: '真珠駅', zh: '晋州站', en: 'Jinju Station', q: '진주역',
    note: {
      ko: 'KTX 경전선. 축제 기간에는 역에서 행사장까지 셔틀버스가 다니고, 도보로도 25분 거리입니다. 축제일은 도로가 통제되니 대중교통을 쓰세요.', ja: 'KTX軽戦線。フェスティバル期間中は駅からイベント場までシャトルバスがあり、徒歩でも25分です。祭りの日は道路が制御されるので公共交通機関を使う。', zh: 'KTX庆全线。节日期间，车站有班车前往活动场地，步行也需25分钟。节日期间道路封闭，因此请使用公共交通工具。',
      en: 'On the KTX Gyeongjeon line. During the festival a shuttle runs from the station, and the site is a 25-minute walk; roads close on festival days, so use transit.'
    }
  },
  course: {
    title: { ko: '진주 남강유등축제 — 해가 지면 불이 켜진다', ja: '晋州 南江流灯祭り — 日が沈むと灯がともる', zh: '晋州南江流灯节——太阳落下，灯就亮起', en: 'Jinju lantern festival — the lights come on at dusk' },
    meta: { ko: '6곳 · 약 7시간 · 셔틀 2회', ja: '6か所・約7時間・シャトル2回', zh: '6个地点，约7小时，2趟班车', en: '6 stops · about 7 hours · 2 shuttles' },
    steps: [
      { phase: 'start', time: '15:00', name: { ko: '진주역', ja: '真珠駅', zh: '晋州站', en: 'Jinju Station' }, q: '진주역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '축제 기간에는 역 앞 셔틀을 타고 행사장으로. 짐은 역 보관함에 맡기세요.', ja: '祭りの期間は駅前のシャトルに乗ってイベント場へ。荷物は駅のロッカーに預けてください。', zh: '节日期间，乘坐车站前的班车前往活动场地。请将行李寄存在车站储物柜内。', en: 'In festival week take the shuttle from outside the station; leave the bag in a locker.' } },
      { phase: 'afternoon', time: '15:40', name: { ko: '진주성 · 촉석루', ja: '真珠城・チュクソクル', zh: '晋州城和草石楼', en: 'Jinju Fortress & Chokseongnu' }, q: '진주성', move: { ko: '셔틀·도보 약 20분', ja: 'シャトル・徒歩約20分', zh: '有班车/步行约20分钟', en: 'Shuttle or walk, about 20 min' },
        desc: { ko: '남강을 굽어보는 누각. 축제 전에 조용히 올라가 보면 밤과는 다른 얼굴입니다.', ja: '南川を曲げる楼閣。祭りの前に静かに上がってみると夜とは違う顔です。', zh: '俯瞰南江的亭子。如果在节日前悄悄上去，你会看到与夜晚不同的面孔。', en: 'A pavilion over the Namgang. Go up before the festival and you see a different face from the night one.' } },
      { phase: 'afternoon', time: '16:40', name: { ko: '남강 둔치 유등 전시', ja: '南江鈍鬼油灯展示', zh: '南江江边灯展', en: 'Namgang lantern display' }, q: '남강유등축제', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '낮에는 유등의 뼈대와 색을 볼 수 있습니다. 해가 지기 전 둔치를 한 바퀴 돌아 두세요.', ja: '日中は石油の骨格と色を見ることができます。日が沈む前に、鈍いを一周してください。', zh: '白天可以看到油灯的结构和颜色。日落之前，在山上散步。', en: 'By daylight you can see how the lanterns are built; walk the whole bank once before dark.' },
        photo: 'th-festival' },
      { phase: 'evening', time: '18:00', name: { ko: '점등', ja: '点灯', zh: '亮起', en: 'Lights on' }, q: '남강유등축제', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '점등 순간이 이 축제의 전부입니다. 강 건너에서 보면 불빛이 물에 한 번 더 내려앉습니다.', ja: '点灯の瞬間がこの祭りの全てです。川を渡ると、光が水にもう一度降ります。', zh: '点亮灯光的时刻就是这个节日的意义所在。从河对岸看去，灯光再次落在水面上。', en: 'The moment of lighting is the whole festival — from across the water every lantern appears twice.' },
        photo: 'th-festival-p2' },
      { phase: 'evening', time: '19:00', name: { ko: '축제장 저녁', ja: '祭りの夜', zh: '节日的晚上', en: 'Dinner at the festival' }, q: '진주 남강', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '부스에서 조금씩 사 먹는 게 축제의 저녁입니다. 진주는 비빔밥과 냉면으로 알려져 있어요.', ja: 'ブースで少しずつ買って食べるのがお祭りの夜です。真珠はビビンバと冷麺として知られています。', zh: '从摊位上买一点，就是年夜饭了。晋州以拌饭和冷面而闻名。', en: 'Dinner is whatever you pick up stall by stall — Jinju is known for bibimbap and cold noodles.' } },
      { phase: 'evening', time: '20:30', name: { ko: '남강 야경 산책', ja: '南江の夜景を散歩', zh: '南江夜景散步', en: 'Night walk by the Namgang' }, q: '진주 남강', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '인파가 빠진 뒤 한 바퀴 더. 21시 전후가 사진 찍기 가장 좋습니다.', ja: '人波が抜けた後もう一輪。 21時前後が写真撮るのが一番です。', zh: '人群散去后，又跑了一圈。最佳拍照时间是21:00左右。', en: 'One more loop after the crowd thins — around nine is the best light for photographs.' } },
      { phase: 'return', time: '21:30', name: { ko: '진주역', ja: '真珠駅', zh: '晋州站', en: 'Jinju Station' }, q: '진주역', move: { ko: '셔틀 약 15분', ja: 'シャトル約15分', zh: '班车约15分钟', en: 'Shuttle, about 15 min' },
        desc: { ko: '막차 시간은 축제 기간에 연장되기도 합니다. 미리 확인해 두세요.', ja: '最後の時間は祭りの期間に延長されます。あらかじめ確認しておいてください。', zh: '节日期间末班车时间可能会延长。请提前确认。', en: 'Last trains are sometimes extended during the festival — check ahead.' } }
    ]
  },
  conds: [
    { k: { ko: '시기', ja: '時期', zh: '时期', en: 'When' }, v: { ko: '축제마다 1~2주, 해마다 날짜가 바뀜', ja: '祭りごとに1〜2週間、毎年日付が変わります', zh: '每个节日持续1-2周，每年日期都会变化。', en: 'Each festival runs one to two weeks; dates move every year' } },
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Tickets' }, v: { ko: '무료 축제가 많지만 일부는 입장료·체험비 별도', ja: '無料祭りが多いが、一部は入場料・体験費別途', zh: '有很多免费的节日，但有些需要入场费和体验费。', en: 'Many are free; some charge entry or per activity' } },
    { k: { ko: '교통', ja: '交通', zh: '交通', en: 'Traffic' }, v: { ko: '행사장 주변 도로 통제, 셔틀·전철 이용', ja: 'イベント場周辺道路制御、シャトル・電車利用', zh: '活动场地周围的道路管制、班车和地铁的使用', en: 'Roads around the site close — take the shuttle or the train' } }
  ],
  places: [
    { name: { ko: '진주 남강유등축제', ja: '真珠南江油灯まつり', zh: '晋州南江灯节', en: 'Jinju Namgang Lantern Festival' }, region: 'gyeongsang', q: '남강유등축제', note: { ko: '10월 초. 남강 위로 수만 개의 등이 뜹니다.', ja: '10月上旬。南江の上に数万本の灯りが浮かびます。', zh: '十月初。数以万计的灯笼漂浮在南江上。', en: 'Early October, when tens of thousands of lanterns float on the Namgang.' } },
    { name: { ko: '화천 산천어축제', ja: '華川山川魚祭り', zh: '华川山川鱼节', en: 'Hwacheon Sancheoneo Ice Festival' }, region: 'gangwon', q: '화천 산천어축제', note: { ko: '1월. 얼음 위 얼음낚시와 눈 조각. 방한복 필수.', ja: '1月。氷の上の氷釣りと雪片。防寒服必須。', zh: '一月。冰钓、冰上雪雕。需要穿冬衣。', en: 'January: ice fishing and snow sculpture; proper winter gear essential.' } },
    { name: { ko: '보령 머드축제', ja: '保寧マッドフェスティバル', zh: '保宁泥浆节', en: 'Boryeong Mud Festival' }, region: 'jeolla', q: '보령머드축제', note: { ko: '7월. 대천해수욕장에서 열리는 여름 축제.', ja: '7月。大川海水浴場で行われる夏祭り。', zh: '七月。在大川海水浴场举办的夏季祭典。', en: 'July on Daecheon beach — the big summer one.' } },
    { name: { ko: '함평 나비축제', ja: '咸平蝶祭り', zh: '咸平蝴蝶节', en: 'Hampyeong Butterfly Festival' }, region: 'jeolla', q: '함평나비축제', note: { ko: '4~5월. 나비와 봄꽃, 아이와 함께 좋습니다.', ja: '4～5月。蝶と春の花、子供と一緒に良いです。', zh: '四月至五月。蝴蝶和春天的花朵非常适合孩子们。', en: 'April–May: butterflies and spring flowers, good with children.' } },
    { name: { ko: '안동 국제탈춤축제', ja: '安東国際脱踊祭', zh: '安东国际假面舞节', en: 'Andong Mask Dance Festival' }, region: 'gyeongsang', q: '안동국제탈춤축제', note: { ko: '9~10월. 하회탈과 세계 탈춤 공연.', ja: '9～10月。下回りと世界脱ダンス公演。', zh: '九月至十月。河回假面和世界假面舞表演。', en: 'September–October: Hahoe masks and mask dance from around the world.' } },
    { name: { ko: '강릉 단오제', ja: '江陵檀', zh: '江陵端午节', en: 'Gangneung Danoje' }, region: 'gangwon', q: '강릉단오제', note: { ko: '5월 단오. 유네스코 인류무형유산, 관노가면극.', ja: '5月段午。ユネスコ人類無形遺産、関老仮面劇。', zh: '五月的达诺。联合国教科文组织人类非物质遗产，Gwanno Masquerade。', en: 'Around Dano in May: a UNESCO-listed shaman rite and mask play.' } },
    { name: { ko: '부산 불꽃축제', ja: '釜山花火祭り', zh: '釜山烟火大会', en: 'Busan Fireworks Festival' }, region: 'gyeongsang', q: '부산불꽃축제', note: { ko: '11월. 광안리 앞바다 위 불꽃. 숙소는 일찍 예약하세요.', ja: '11月。広安里沖の上の炎。宿泊施設は早めに予約してください。', zh: '十一月。广安里海上的烟花。尽早预订住宿。', en: 'November fireworks over Gwangalli — book a room early.' } },
    { name: { ko: '서울 빛초롱축제', ja: 'ソウルライトランタンフェスティバル', zh: '首尔元宵节', en: 'Seoul Lantern Festival' }, region: 'capital', q: '서울빛초롱축제', note: { ko: '12월. 청계천을 따라 등이 이어집니다.', ja: '12月。清渓川に沿って背中が続きます。', zh: '十二月。沿着清溪川继续行驶。', en: 'December: lanterns along the Cheonggyecheon.' } },
    { name: { ko: '진도 영등축제', ja: '珍島永登祭り', zh: '珍岛永登节', en: 'Jindo Yeongdeung Festival' }, region: 'jeolla', q: '진도 영등축제', note: { ko: '2~3월. 바닷길이 열리는 때에 맞춘 축제.', ja: '2～3月。海道が開かれる時に合わせたお祭り。', zh: '二月至三月。与海路开通同时举行的节日。', en: 'February–March, timed to the parting of the sea road.' } },
    { name: { ko: '문경 찻사발축제', ja: 'ムンギョンティーボールフェスティバル', zh: '闻庆茶碗节', en: 'Mungyeong Tea Bowl Festival' }, region: 'gyeongsang', q: '문경찻사발축제', note: { ko: '4~5월. 도자기를 직접 만져 보고 사는 축제.', ja: '4～5月。陶器を直接触って見て生きる祭り。', zh: '四月至五月。可以触摸、体验陶艺的祭典。', en: 'April–May: handle and buy pottery straight from the kilns.' } },
    { name: { ko: '청도 소싸움축제', ja: '青島牛の戦い祭り', zh: '清道斗牛节', en: 'Cheongdo Bullfighting Festival' }, region: 'gyeongsang', q: '청도소싸움축제', note: { ko: '3월. 국내 유일의 전통 소싸움.', ja: '3月。国内唯一の伝統的な戦い。', zh: '三月。韩国唯一的传统斗牛活动。', en: 'March: the country\u2019s traditional bull fighting.' } },
    { name: { ko: '제주 들불축제', ja: '済州野火祭り', zh: '济州野火节', en: 'Jeju Fire Festival' }, region: 'jeju', q: '제주들불축제', note: { ko: '3월. 오름에 불을 놓는 봄맞이 축제.', ja: '3月。上りに火をつける春祭り。', zh: '三月。在火山上放火的春节。', en: 'March: hillsides set alight to welcome spring.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍚', dish: { ko: '국밥 · 비빔밥', ja: 'クッパ・ビビンバ', zh: '汤饭·石锅拌饭', en: 'Rice soup · bibimbap' }, note: { ko: '축제장은 밤이 중심이라 낮은 간단히.', ja: '祭り場は夜が中心だから低い簡単に。', zh: '节日以夜晚为中心，因此白天很简单。', en: 'The festival peaks at night — keep the day light.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🥗', dish: { ko: '진주비빔밥 · 냉면', ja: '真珠ビビンバ・冷麺', zh: '晋州拌饭·冷面', en: 'Jinju bibimbap · cold noodles' }, note: { ko: '진주는 비빔밥과 냉면으로 알려진 동네입니다.', ja: '真珠はビビンバと冷麺として知られる町です。', zh: '晋州是一个以拌饭和冷面而闻名的街区。', en: 'Jinju is known for bibimbap and cold noodles.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍢', dish: { ko: '축제 부스 간식 · 붕어빵 · 츄러스', ja: 'お祭りブーススナック・パンパン・チュラス', zh: '节日摊位小吃、bungeoppang、油条', en: 'Festival stalls · bungeoppang · churros' }, note: { ko: '한 바퀴 돌며 조금씩 사 먹는 재미.', ja: '一周して少しずつ買って食べる楽しさ。', zh: '四处走走，一点一点地买，很有趣。', en: 'Buy a little from each lap.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🔥', dish: { ko: '닭강정 · 불고기 · 어묵국', ja: '鶏カンジョン・焼肉・魚黙', zh: '鸡江丁、烤肉、鱼饼汤', en: 'Fried chicken · bulgogi · fish-cake soup' }, note: { ko: '점등 뒤에는 줄이 길어져 미리 사 두세요.', ja: '点灯の後には線が長くなり、あらかじめ購入してください。', zh: '灯光亮起后，队伍会排得很长，所以一定要提前买票。', en: 'Queues get long after the lights go on — buy early.' } }
  ],
  photos: [
    { file: 'th-festival', cap: { ko: '강 위에 걸린 축제 등', ja: '川にかかった祭りなど', zh: '河边的节日', en: 'Festival lanterns on the water' } },
    { file: 'th-festival-p2', cap: { ko: '점등 뒤의 축제장', ja: '点灯後の祭り場', zh: '灯光后面的节日场地', en: 'The festival after the lights come on' } }
  ],
  tip: { ko: '축제 날짜는 해마다 바뀝니다. 가기 전에 공식 안내로 확정 날짜를 확인하세요.', ja: '祭りの日は毎年変わります。行く前に公式案内で確定日を確認してください。', zh: '节日日期每年都会变化。请在出发前查看官方信息以了解确认的日期。', en: 'Festival dates move every year — confirm on the official notice before travelling.' }
},
/* ------------------------------------------------------ 06 온천·찜질방 */
{
  id: 'onsen', emoji: '♨️', tint: '#FFC6DA',
  name: { ko: '온천 · 찜질방', ja: '温泉・チムジルバン', zh: '温泉·汗蒸房', en: 'Hot springs & jjimjilbang' },
  sub: { ko: '몸을 녹이고 하루를 늘어놓는 코스', ja: '体を温め、一日をゆったり過ごすコース', zh: '暖透身体、慢慢过一天的路线', en: 'A day of soaking and slowing down' },
  tag: { ko: '천연 온천 · 스파 · 찜질', ja: '天然温泉・スパ・チムジル', zh: '天然温泉·水疗·汗蒸', en: 'Natural springs, spas, saunas' },
  intro: {
    ko: '온천 여행은 많이 걷지 않는 게 요령입니다. 낮에는 동네를 조금 걷고, 오후에 온천에 들어가 오래 머물고, 저녁에 한 번 더 들어가는 순서가 좋아요. 다만 시설마다 성격이 다릅니다. 온천법 기준을 채운 천연 온천, 온천수를 이용한 온천 스파, 물놀이 시설 중심의 워터파크형 스파, 숙박과 결합한 호텔 스파를 구분해서 골라야 기대와 실제가 맞습니다. 여기서는 1호선으로 닿는 온양온천 하루를 기본 코스로 잡았어요.', ja: '温泉旅行はあまり歩かないのがコツです。日中は近所を少し歩いて、午後に温泉に入って長く滞在し、夕方にもう一度入る順序がいいです。ただし施設ごとに性格が異なります。温泉法基準を満たした天然温泉、温泉水を利用した温泉スパ、水遊び施設中心のウォーターパーク型スパ、宿泊と組み合わせたホテルスパを区分して選べば期待と実際が合います。ここでは1号線で届く温陽温泉の一日を基本コースとして捉えました。', zh: '去温泉旅行的秘诀是不要走太多路。我喜欢白天在附近散散步，下午去泡温泉，待上很长一段时间，晚上再进去。然而，每个设施都有不同的特点。必须区分符合《温泉法》标准的天然温泉、使用温泉水的温泉水疗中心、以戏水设施为主的水上乐园型水疗中心以及与住宿相结合的酒店水疗中心，确保期望与现实相符。在这里，我们决定以乘坐1号线到达的温阳温泉一日游作为我们的基本路线。',
    en: 'The trick with a hot-spring day is not to walk much: a little in the afternoon, a long soak, dinner, then one more. But the venues differ: a natural hot spring that meets the legal standard, a spa using spring water, a water park built around pools, and a hotel spa tied to a room. Knowing which you are booking is half the trip. This route is Onyang, reachable on Line 1.'
  },
  seasons: [{ ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울', ja: '冬', zh: '冬天', en: 'Winter' }, { ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }],
  transport: { ko: '전철 + 도보', ja: '電車＋徒歩', zh: '地铁＋步行', en: 'Metro + on foot' },
  duration: { ko: '약 9시간', ja: '約9時間', zh: '约9小时', en: 'About 9 hours' },
  hub: {
    ko: '온양온천역', ja: '温陽温泉駅', zh: '温阳温泉站', en: 'Onyang Oncheon Station', q: '온양온천역',
    note: {
      ko: '1호선(장항선) 급행으로 용산에서 1시간 30분. 역에서 온천 거리까지 걸어서 10분이고, 시장과 현충사는 버스로 10~20분입니다.', ja: '1号線（長航線）急行で龍山から1時間30分。駅から温泉街まで徒歩10分で、市長と顕忠寺はバスで10～20分です。', zh: '从龙山乘坐特快1号线（长项线）需要1小时30分钟。从车站步行10分钟即可到达温泉街，乘坐巴士10至20分钟即可到达市场和显忠寺。',
      en: 'Ninety minutes from Yongsan on the Line 1 express. The spa street is ten minutes on foot; the market and Hyeonchungsa are 10–20 minutes by bus.'
    }
  },
  course: {
    title: { ko: '온양온천 — 민속마을에서 찜질방까지', ja: '温陽温泉 — 民俗村からチムジルバンまで', zh: '温阳温泉——从民俗村到汗蒸房', en: 'Onyang — folk village to jjimjilbang' },
    meta: { ko: '7곳 · 약 9시간 · 버스 2회', ja: '7か所・約9時間・バス2回', zh: '7个地点，约9小时，2辆巴士', en: '7 stops · about 9 hours · 2 buses' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '온양온천역', ja: '温陽温泉駅', zh: '温阳温泉站', en: 'Onyang Oncheon Station' }, q: '온양온천역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역에서 외암민속마을 방면 버스로. 수건과 세면도구는 대부분 온천에서 빌려 줍니다.', ja: '駅から外岩民俗村方面バスで。タオルとバスアメニティはほとんどの温泉で貸し出しています。', zh: '从车站乘坐前往外岩民俗村的巴士。大多数温泉都提供出租毛巾和洗漱用品的服务。', en: 'A bus toward Oeam folk village from outside; most baths lend towels and toiletries.' } },
      { phase: 'morning', time: '10:30', name: { ko: '외암민속마을', ja: '外岩民俗村', zh: '外岩民俗村', en: 'Oeam folk village' }, q: '외암민속마을', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
        desc: { ko: '돌담과 초가, 오래된 나무가 이어지는 마을. 온천前 가볍게 걷기 좋은 코스입니다.', ja: '石垣と茅葺き、古い木が続く村。温泉前に軽く歩きやすいコースです。', zh: '村子里有石墙、茅草屋、古树。这是温泉前散步的好路线。', en: 'Stone walls, thatched roofs and old trees — an easy walk before the bath.' } },
      { phase: 'lunch', time: '12:00', name: { ko: '온양온천시장', ja: '温陽温泉市場', zh: '温阳温泉市场', en: 'Onyang Oncheon Market' }, q: '온양온천시장', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
        desc: { ko: '점심은 시장에서. 온양은 국밥과 칼국수, 순대가 기본입니다.', ja: 'ランチは市場で。温陽はクッパとカルグクス、スンデが基本です。', zh: '在市场吃午餐。温阳的基本菜单是汤、刀削面和圣代。', en: 'Lunch at the market — rice soup, noodles and sundae are the staples here.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '온천욕', ja: '温泉浴', zh: '温泉浴', en: 'A long soak' }, q: '온양온천', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '600년 된 온천지구. 알칼리성 물이라 미끈하고, 한 번에 10분씩 나눠 들어가는 편이 좋습니다.', ja: '600年の温泉地区。アルカリ性の水で滑らかで、一度に10分ずつ分けて入る方が良いです。', zh: '拥有600年历史的温泉区。因为是碱性水，所以比较滑，所以每次最好以10分钟为增量饮用。', en: 'A spa quarter six centuries old: alkaline water that feels slippery — soak in ten-minute spells.' },
        photo: 'th-onsen' },
      { phase: 'afternoon', time: '15:30', name: { ko: '현충사', ja: '顕忠寺', zh: '显忠寺', en: 'Hyeonchungsa Shrine' }, q: '현충사', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
        desc: { ko: '이순신 장군의 사당과 옛 집. 온천 뒤 몸을 식히며 걷기 좋은 숲길이 있습니다.', ja: '李舜臣将軍の祠と旧家。温泉の後、体を冷やしながら歩きやすい森の道があります。', zh: '李舜臣将军的祠堂和故居。泡完温泉后，有一条林间小路，非常适合散步消暑。', en: 'Admiral Yi Sun-sin\u2019s shrine and old house, with shaded paths to cool down after the bath.' } },
      { phase: 'evening', time: '17:30', name: { ko: '온천 거리 저녁', ja: '温泉街の夕方', zh: '温泉街傍晚', en: 'Dinner on the spa street' }, q: '온양온천', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
        desc: { ko: '온천지구 안에는 오래된 밥집이 많습니다. 목욕 후에는 수분을 먼저 채우세요.', ja: '温泉地区の中には古いご飯がたくさんあります。入浴後は水分を先に満たしてください。', zh: '温泉区有很多老字号的餐馆。沐浴后，首先补充水分。', en: 'The old quarter is full of plain lunch rooms; drink water before you eat.' } },
      { phase: 'evening', time: '19:00', name: { ko: '찜질방', ja: 'チムジルバン', zh: '汗蒸房', en: 'Jjimjilbang' }, q: '온양온천 찜질방', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '불가마는 짧게, 원적외선 방은 길게, 마지막은 서늘한 방에서. 훈제 달걀과 식혜가 마무리입니다.', ja: 'ブルガマは短く、遠赤外線の部屋は長く、最後は涼しい部屋で。スモークエッグとシックが仕上げです。', zh: '灯泡窑短暂，远红外室时间长，最后进入阴凉室。熏鸡蛋和锡克耶结束了这顿饭。', en: 'A short spell in the kiln, longer in the infrared room, then somewhere cool — smoked eggs and sweet rice drink to finish.' } },
      { phase: 'return', time: '21:00', name: { ko: '온양온천역', ja: '温陽温泉駅', zh: '温阳温泉站', en: 'Onyang Oncheon Station' }, q: '온양온천역', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '막차는 22시 전후. 온천 뒤에는 물을 한 병 더 마시고 타세요.', ja: '終車は22時前後。温泉の後には水を一本飲んでください。', zh: '末班车时间为22:00左右。泡完温泉再喝一瓶水。', en: 'Last trains run around ten; drink another bottle before boarding.' } }
    ]
  },
  subs: {
    title: { ko: '온천·스파 네 가지 유형', ja: '温泉・スパの4タイプ', zh: '温泉·水疗的四种类型', en: 'Four kinds of bath' },
    items: [
      { emoji: '💧', name: { ko: '천연 온천', ja: '天然温泉', zh: '天然温泉', en: 'Natural hot spring' }, desc: { ko: '온천법 기준을 채운 온천수를 쓰는 곳. 성분과 수온을 시설에서 표시합니다.', ja: '温泉法基準を満たした温泉水を使うところ。成分と水温を施設で表示します。', zh: '使用符合温泉法标准的温泉水的场所。设施内会显示成分和水温。', en: 'Spring water that meets the legal standard; composition and temperature are posted.' } },
      { emoji: '🛁', name: { ko: '온천 스파', ja: '温泉スパ', zh: '温泉水疗', en: 'Spring-water spa' }, desc: { ko: '온천수로 만든 테마 탕과 물놀이 시설. 가족 단위가 많습니다.', ja: '温泉水で作られたテーマ湯と水遊び施設。家族単位が多いです。', zh: '使用温泉水制成的主题浴池和水上游乐设施。有很多家庭单位。', en: 'Themed pools and water play using spring water, popular with families.' } },
      { emoji: '🌊', name: { ko: '워터파크형 스파', ja: 'ウォーターパーク型スパ', zh: '水上乐园型水疗中心', en: 'Water-park spa' }, desc: { ko: '실내외 풀 중심. 온천수가 아닐 수 있으니 표기를 확인하세요.', ja: '室内外プール中心。温泉水ではない場合がありますので、表記をご確認ください。', zh: '专注于室内和室外泳池。它可能不是温泉水，因此请检查标签。', en: 'Built around indoor and outdoor pools — not always spring water, so read the label.' } },
      { emoji: '🏨', name: { ko: '호텔 스파', ja: 'ホテルスパ', zh: '酒店水疗中心', en: 'Hotel spa' }, desc: { ko: '숙박과 프라이빗 스파를 결합한 시설. 당일은 데이유즈 상품을 확인하세요.', ja: '宿泊施設とプライベートスパを組み合わせた施設。当日はデイユーズ商品をご確認ください。', zh: '集住宿和私人水疗中心于一体的设施。当天查看我们的日用产品。', en: 'A room plus a private spa; for a day visit, check day-use rates.' } }
    ]
  },
  conds: [
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Cost' }, v: { ko: '대중탕 8,000~12,000원 · 스파 25,000~60,000원 · 찜질방 12,000~15,000원', ja: '大浴場8,000～12,000ウォン・スパ25,000～60,000ウォン・チムジルバン12,000～15,000ウォン', zh: '公共浴池8,000~12,000韩元 · SPA 25,000~60,000韩元 · 汗蒸房12,000~15,000韩元', en: 'Public bath ₩8,000–12,000; spa ₩25,000–60,000; jjimjilbang ₩12,000–15,000' } },
    { k: { ko: '준비', ja: '準備', zh: '准备', en: 'Bring' }, v: { ko: '세면도구·수건, 수영복(스파), 현금 소액', ja: '洗面具・タオル、水着（スパ）、現金少額', zh: '洗漱用品/毛巾、泳衣（水疗）、少量现金', en: 'Toiletries, towel, swimsuit for spas, small cash' } },
    { k: { ko: '확인', ja: '確認', zh: '确认', en: 'Check first' }, v: { ko: '천연 온천수 사용 여부, 노천탕·가족탕 유무, 휴무일', ja: '天然温泉水使用可否、露天風呂・家族湯の有無、休業日', zh: '有天然温泉水、有露天浴池或家庭浴池、休息日', en: 'Whether the water is natural, whether there is an open-air or family bath, and closing days' } }
  ],
  places: [
    { name: { ko: '온양온천', ja: '温陽温泉', zh: '温阳温泉', en: 'Onyang Oncheon' }, region: 'jeolla', q: '온양온천', note: { ko: '아산. 600년 전통 온천지구, 역에서 도보권. 부모님 모시기 좋습니다.', ja: '牙山。 600年の伝統温泉地区、駅から徒歩圏。両親を迎えてください。', zh: '阿三。拥有600年历史的传统温泉区，距离车站仅几步之遥。有父母真好。', en: 'Asan: a six-century spa quarter walkable from the station, easy with parents.' } },
    { name: { ko: '파라다이스 스파 도고', ja: 'パラダイススパドゴ', zh: '天堂温泉道后', en: 'Paradise Spa Dogo' }, region: 'jeolla', q: '파라다이스 스파 도고', note: { ko: '아산 도고. 온천수 풀과 야외 스파, 가족·커플에게 인기.', ja: '牙山道後。温泉プールと野外スパ、家族・カップルに人気。', zh: '阿桑多戈.温泉池和室外水疗中心，深受家庭和情侣的欢迎。', en: 'Dogo, Asan: spring-water pools and outdoor spas, popular with families and couples.' } },
    { name: { ko: '이천 테르메덴', ja: '利川テルメデン', zh: '利川泰尔梅登', en: 'Icheon Termeden' }, region: 'capital', q: '테르메덴', note: { ko: '독일식 온천 테마파크. 실내외 풀과 노천탕.', ja: 'ドイツ式温泉テーマパーク。屋内外のプールと露天風呂。', zh: '德式温泉主题公园。室内外游泳池和露天浴池。', en: 'A German-style spa park with indoor and outdoor pools.' } },
    { name: { ko: '율암온천', ja: '栗岩温泉', zh: '玉林温泉', en: 'Yuram Oncheon' }, region: 'capital', q: '율암온천', note: { ko: '화성. 숲속 노천탕, 조용한 휴식에 좋습니다.', ja: '火星。森の露天風呂、静かな休憩に最適です。', zh: '火星。森林中的露天浴池非常适合安静地放松身心。', en: 'Hwaseong: a wooded open-air bath, quiet and restful.' } },
    { name: { ko: '석모도 미네랄온천', ja: 'サクモドミネラル温泉', zh: '石毛岛矿物温泉', en: 'Seongmodo mineral spring' }, region: 'capital', q: '석모도미네랄온천', note: { ko: '강화 석모도. 바다 전망 노천탕, 일몰 시간대가 좋습니다. 보문사와 함께.', ja: '強化ソルモド。海の景色露天風呂、日没時間帯が良いです。普門寺と。', zh: '江华石毛岛。露天浴池可以看到海景，日落的时间也不错。与普文寺同在。', en: 'Ganghwa: an open-air bath facing the sea, best at sunset, with Bomunsa nearby.' } },
    { name: { ko: '파라다이스시티 씨메르', ja: 'パラダイスシティシーメール', zh: '天堂城西梅尔', en: 'Paradise City Cimer' }, region: 'capital', q: '씨메르', note: { ko: '인천 영종도. 유럽식 스파·아쿠아 시설. 일반 온천과는 다릅니다.', ja: '仁川永宗島。ヨーロッパ式スパ・アクア施設。通常の温泉とは異なります。', zh: '仁川永宗岛。欧式水疗和水上设施。它与普通的温泉不同。', en: 'Yeongjongdo: a European-style spa and aqua area — not a traditional hot spring.' } },
    { name: { ko: '유성온천', ja: '流星温泉', zh: '儒城温泉', en: 'Yuseong Oncheon' }, region: 'jeolla', q: '유성온천', note: { ko: '대전 도심. 지하철 1호선 유성온천역, 야외 족욕장이 무료입니다.', ja: '大田市の中心部。地下鉄1号線流星温泉駅、屋外足浴場が無料です。', zh: '大田市中心。地铁1号线儒城温泉站和露天足浴免费。', en: 'Central Daejeon on Line 1, with a free outdoor foot bath.' } },
    { name: { ko: '수안보온천', ja: 'スアンボ温泉', zh: '水安堡温泉', en: 'Suanbo Oncheon' }, region: 'jeolla', q: '수안보온천', note: { ko: '충주. 전통 온천마을과 족욕길, 월악산 아래.', ja: '忠州。伝統的な温泉村と足浴道、月顎山の下。', zh: '忠州。月岳山下的传统温泉村和足浴道。', en: 'Chungju: an old spa village and foot-bath path below Woraksan.' } },
    { name: { ko: '스플라스 리솜', ja: 'スプラスリソム', zh: '剪接位点', en: 'Splash Resom' }, region: 'jeolla', q: '스플라스 리솜', note: { ko: '예산 덕산온천수 스파·워터파크. 수덕사와 함께 1박.', ja: '予算徳山温泉水スパ・ウォーターパーク。スドクサと共に1泊。', zh: '礼山德山温泉水疗中心和水上乐园。在修德寺住一晚。', en: 'Yesan: spa and water park on Deoksan spring water, paired with Sudeoksa.' } },
    { name: { ko: '포레스트 리솜 해브나인', ja: 'フォレストリソムハブナイン', zh: '森林雷索姆有九个', en: 'Forest Resom Haven9' }, region: 'jeolla', q: '포레스트 리솜 해브나인', note: { ko: '제천. 숲 전망 인피니티풀과 테마 스파.', ja: '済川。森の景色インフィニティプールとテーマスパ。', zh: '堤川。森林景观无边泳池和主题水疗中心。', en: 'Jecheon: forest-view infinity pool and themed spas.' } },
    { name: { ko: '척산온천', ja: 'チャクサン温泉', zh: '尺山温泉', en: 'Cheoksan Oncheon' }, region: 'gangwon', q: '척산온천', note: { ko: '속초. 설악산 산행 뒤 노천탕으로 좋습니다.', ja: '束草。雪岳山の散歩の後、露天風呂でいいです。', zh: '束草。徒步雪岳山后，这里非常适合泡露天浴池。', en: 'Sokcho: the open-air bath to take after a Seoraksan walk.' } },
    { name: { ko: '오색탄산온천', ja: '五色炭酸温泉', zh: '五色碳酸温泉', en: 'Osaek carbonic spring' }, region: 'gangwon', q: '오색탄산온천', note: { ko: '양양. 탄산온천과 알칼리온천이 함께, 주전골과 이어집니다.', ja: 'ヤンヤン。炭酸温泉とアルカリ温泉が共に、主転骨とつながります。', zh: '阳阳。竹井谷与碳酸温泉和碱性温泉相连。', en: 'Yangyang: carbonic and alkaline baths together, next to Jujeongol.' } },
    { name: { ko: '설해원', ja: 'ソルヘウォン', zh: '雪海院', en: 'Seolhaeone' }, region: 'gangwon', q: '설해원', note: { ko: '양양. 온천 사우나와 스파를 갖춘 리조트형 시설.', ja: 'ヤンヤン。温泉サウナとスパを併設するリゾート型施設。', zh: '阳阳。设有温泉桑拿和水疗中心的度假型设施。', en: 'Yangyang: a resort-style spa with sauna and baths.' } },
    { name: { ko: '필례게르마늄온천', ja: '必礼ゲルマニウム温泉', zh: '皮耶锗温泉', en: 'Pillye germanium spring' }, region: 'gangwon', q: '필례온천', note: { ko: '인제. 산속 온천, 자작나무숲과 묶기 좋습니다.', ja: 'インジェ。山の温泉、白樺の森と結ぶのに最適です。', zh: '注射。非常适合与山间温泉和白桦林结合。', en: 'Inje: a mountain spring, good with the birch forest.' } },
    { name: { ko: '소노펠리체 델피노', ja: 'ソノフェリチェ・デルフィノ', zh: '索诺·菲利斯·德尔·皮诺', en: 'Sono Felice Delpino' }, region: 'gangwon', q: '델피노', note: { ko: '고성 원암온천지구. 울산바위가 보이는 숙박형 스파.', ja: '高城原岩温泉地区。蔚山岩が見える宿泊型スパ。', zh: '高城远南温泉区。可以欣赏蔚山岩美景的过夜水疗中心。', en: 'Goseong: a resort spa in the Wonam spring district, with Ulsanbawi in view.' } },
    { name: { ko: '설악 워터피아', ja: '雪岳ウォーターピア', zh: '雪岳水上乐园', en: 'Seorak Waterpia' }, region: 'gangwon', q: '설악 워터피아', note: { ko: '속초. 온천수 기반 워터파크, 가족 단위.', ja: '束草。温泉水ベースのウォーターパーク、家族単位。', zh: '束草。温泉水上乐园，适合家庭游玩。', en: 'Sokcho: a spring-water water park for families.' } },
    { name: { ko: '덕구온천 스파월드', ja: '徳区温泉スパワールド', zh: '德邱温泉温泉世界', en: 'Deokgu Spa World' }, region: 'gyeongsang', q: '덕구온천', note: { ko: '울진. 계곡에서 솟는 자연용출 온천수.', ja: 'ウルジン。渓谷から湧く自然溶出温泉水。', zh: '蔚珍。天然温泉水从山谷中涌出。', en: 'Uljin: water rising naturally in a valley.' } },
    { name: { ko: '소노벨 청송 솔샘온천', ja: 'ソノベルチョンソンソルサム温泉', zh: '索诺贝尔青松松仙温泉', en: 'Sono Bel Cheongsong Solsaem' }, region: 'gyeongsang', q: '솔샘온천', note: { ko: '청송. 주왕산과 함께 1박으로.', ja: '青松。朱王山と共に1泊で。', zh: '青松。在周王山住一晚。', en: 'Cheongsong: an overnight with Juwangsan.' } },
    { name: { ko: '문경 STX 온천스파', ja: 'ムンギョンSTX温泉スパ', zh: '闻庆STX温泉水疗中心', en: 'Mungyeong STX spa' }, region: 'gyeongsang', q: '문경 STX 리조트', note: { ko: '문경새재 아래 온천·숙박 시설.', ja: 'ムンギョンセジェの下の温泉・宿泊施設。', zh: '闻庆新斋下方的温泉和住宿设施。', en: 'Below Mungyeong Saejae: spa and lodging in one.' } },
    { name: { ko: '백암온천', ja: '白岩温泉', zh: '白岩温泉', en: 'Baegam Oncheon' }, region: 'gyeongsang', q: '백암온천', note: { ko: '울진 북부. 유황 성분으로 알려진 오래된 온천.', ja: 'ウルジン北部。硫黄成分として知られる古い温泉。', zh: '蔚珍北部。以硫磺含量而闻名的古老温泉。', en: 'Northern Uljin: an old spring known for its sulphur.' } },
    { name: { ko: '팔공산온천', ja: '八公山温泉', zh: '八公山温泉', en: 'Palgongsan Oncheon' }, region: 'gyeongsang', q: '팔공산온천', note: { ko: '대구. 동화사와 케이블카를 함께.', ja: '大邱。おとぎ話とケーブルカーを一緒に。', zh: '鳕鱼。连同桐华寺和缆车。', en: 'Daegu: pair it with Donghwasa and the cable car.' } },
    { name: { ko: '허심청', ja: '虚心庁', zh: '许心清', en: 'Hurshimchung' }, region: 'gyeongsang', q: '허심청', note: { ko: '부산 동래. 대규모 테마탕, 도심 온천.', ja: '釜山東来。大規模なテーマ、都心温泉。', zh: '东莱、釜山。大型主题浴池和城市温泉。', en: 'Dongnae, Busan: a large themed bath in the city.' } },
    { name: { ko: '부곡온천', ja: '釜谷温泉', zh: '釜谷温泉', en: 'Bugok Oncheon' }, region: 'gyeongsang', q: '부곡온천', note: { ko: '창녕. 원천 수온이 높은 온천지구, 가족탕이 많습니다.', ja: 'チャンニョン。源泉 水温の高い温泉地区、家族湯が多いです。', zh: '昌宁.是一个温泉区，源水温度较高，家庭浴池较多。', en: 'Changnyeong: a hot district with high source temperature and many family baths.' } },
    { name: { ko: '마금산온천', ja: 'マグムサン温泉', zh: '马锦山温泉', en: 'Mageumsan Oncheon' }, region: 'gyeongsang', q: '마금산온천', note: { ko: '창원. 전통 온천지구와 무료 족욕장.', ja: '昌原。伝統的な温泉地区と無料の足浴場。', zh: '昌原。传统温泉区，免费足浴。', en: 'Changwon: an old spa district with a free foot bath.' } },
    { name: { ko: '클럽디오아시스', ja: 'クラブディオアシス', zh: '迪奥西斯俱乐部', en: 'Club D Oasis' }, region: 'gyeongsang', q: '클럽디오아시스', note: { ko: '부산 해운대. 바다 전망 워터 스파, 온천수와는 다릅니다.', ja: '釜山海雲台。オーシャンビューのウォータースパ、温泉水とは異なります。', zh: '海云台，釜山。它与海景水疗中心和温泉水不同。', en: 'Haeundae: a water spa with sea views — not a spring bath.' } },
    { name: { ko: '거제 해수온천', ja: '巨済海水温泉', zh: '巨济海水温泉', en: 'Geoje seawater spa' }, region: 'gyeongsang', q: '거제 해수온천', note: { ko: '거제. 해수 온천과 물놀이 시설, 바람의 언덕과 함께.', ja: '巨済。海水温泉と水遊び施設、風の丘と。', zh: '巨济。还有海水温泉、戏水设施、风山。', en: 'Geoje: seawater baths and pools, with Windy Hill nearby.' } },
    { name: { ko: '고창 석정온천', ja: '高昌石井温泉', zh: '高敞石亭温泉', en: 'Gochang Seokjeong' }, region: 'jeolla', q: '석정온천', note: { ko: '고창. 게르마늄 온천과 스파, 선운사와 함께.', ja: '高昌。ゲルマニウム温泉とスパ、船運使と。', zh: '高敞。锗温泉和水疗中心，以及仙云寺。', en: 'Gochang: a germanium spring and spa, with Seonunsa nearby.' } },
    { name: { ko: '담양리조트 온천', ja: '潭陽リゾート温泉', zh: '潭阳度假村温泉', en: 'Damyang resort spa' }, region: 'jeolla', q: '담양리조트 온천', note: { ko: '담양. 죽녹원과 메타세쿼이아길을 묶은 1박.', ja: '潭陽。竹緑園とメタセコイアの道を結んだ1泊。', zh: '潭阳。竹绿园和水杉路结合的住宿一晚。', en: 'Damyang: an overnight with the bamboo garden and the tree road.' } },
    { name: { ko: '도곡온천', ja: '道谷温泉', zh: '道谷温泉', en: 'Dogok Oncheon' }, region: 'jeolla', q: '도곡온천', note: { ko: '화순. 운주사와 적벽을 함께 보는 코스.', ja: '花順。運柱と赤壁を一緒に見るコース。', zh: '和顺。一起游览云住寺和赤壁的路线。', en: 'Hwasun: combine with Unjusa and the red cliffs.' } },
    { name: { ko: '산방산 탄산온천', ja: '山房山炭山温泉', zh: '山房山碳酸温泉', en: 'Sanbangsan carbonic spring' }, region: 'jeju', q: '산방산탄산온천', note: { ko: '제주 서남부. 탄산수 거품이 몸에 붙는 야외 노천탕.', ja: '済州西南部。炭酸水の泡が体に付く屋外露天風呂。', zh: '济州岛西南部。碳酸水气泡附着在身体上的露天露天浴池。', en: 'South-west Jeju: outdoor baths where carbon dioxide bubbles cling to the skin.' } },
    { name: { ko: '디아넥스 호텔 온천', ja: 'ディアネックスホテル温泉', zh: '温泉附楼酒店', en: 'Dianex hotel spa' }, region: 'jeju', q: '디아넥스', note: { ko: '제주. 아라고나이트 온천과 실내 수영장.', ja: '済州。アラゴナイト温泉と屋内プール。', zh: '济州岛。文石温泉和室内游泳池。', en: 'Jeju: an aragonite spring and indoor pool.' } },
    { name: { ko: '제주 신화워터파크', ja: '済州神話ウォーターパーク', zh: '济州神话水上乐园', en: 'Jeju Shinhwa Water Park' }, region: 'jeju', q: '신화워터파크', note: { ko: '중문. 워터파크형 시설로 천연 온천이 아닙니다.', ja: '中文。ウォーターパーク型施設で、天然温泉ではありません。', zh: '正文。这是水上乐园类型的设施，并非天然温泉。', en: 'Jungmun: a water park, not a natural spring.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '죽 · 국밥', ja: 'お粥・クッパ', zh: '粥、汤饭', en: 'Porridge · rice soup' }, note: { ko: '온천 전에는 속을 가볍게.', ja: '温泉前には中を軽く。', zh: '去泡温泉之前先先调理一下胃。', en: 'Keep it light before bathing.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '칼국수 · 순대 · 국밥', ja: 'カルグクス・スンデ・クッパ', zh: '刀削面、圣代、汤包饭', en: 'Knife noodles · sundae · rice soup' }, note: { ko: '온양온천시장에서 한 끼.', ja: '温陽温泉市場で一食。', zh: '在温阳温泉市场吃饭。', en: 'One meal at the Onyang market.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🥚', dish: { ko: '훈제 달걀 · 식혜', ja: 'スモークエッグ・シック', zh: '熏蛋·Sikhye', en: 'Smoked eggs · sikhye' }, note: { ko: '찜질방 안에서 먹는 조합.', ja: 'チムジルバンの中で食べる組み合わせ。', zh: '在桑拿房里吃的组合。', en: 'The standard sauna combination.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍲', dish: { ko: '순두부 · 해장국 · 보쌈', ja: 'スンドゥブ・ヘジャングク・ボサム', zh: '软豆腐、解酒汤、Bossam', en: 'Soft tofu · hangover soup · boiled pork' }, note: { ko: '온천 뒤에는 따뜻한 국물이 잘 맞습니다.', ja: '温泉の後ろには温かいスープがよく合います。', zh: '泡完温泉后喝点热汤就很好了。', en: 'Hot broth sits well after a long soak.' } }
  ],
  photos: [
    { file: 'th-onsen', cap: { ko: '온천 거리의 족욕 자리', ja: '温泉街の足浴場', zh: '温泉小镇足浴区', en: 'A foot bath on the spa street' } },
    { file: 'th-onsen-p2', cap: { ko: '온천지구의 오래된 거리', ja: '温泉地区の古い通り', zh: '温泉区老街', en: 'The old spa quarter' } }
  ],
  tip: { ko: '온천은 10분씩 나눠 들어가고 물을 자주 드세요. 시설 예약 전에 천연 온천수인지, 노천탕이 있는지 확인하면 실망이 없습니다.', ja: '温泉は10分ずつ分けて入って水をよくお召し上がりください。施設予約前に天然温泉水か露天風呂があるか確認すれば失望はありません。', zh: '以10分钟为单位进入温泉并经常喝水。如果您在预订前检查该设施是否有天然温泉水或露天浴池，您将不会失望。', en: 'Soak in ten-minute spells and drink water. Before booking, check whether the water is natural and whether there is an open-air bath.' }
},
/* ------------------------------------- 07 한옥 · 고궁 · 전통문화 */
{
  id: 'hanok', emoji: '🏯', tint: '#E2C9A0',
  name: { ko: '한옥 · 고궁 · 전통문화', ja: '韓屋・古宮・伝統文化', zh: '韩屋·古宫·传统文化', en: 'Hanok, palaces & tradition' },
  sub: { ko: '지붕 아래로 하루를 걷는 코스', ja: '屋根の下を一日歩くコース', zh: '在屋檐下走一天的路线', en: 'A day under tiled roofs' },
  tag: { ko: '궁궐 · 고택 · 서원 · 한복', ja: '宮殿・古宅・書院・韓服', zh: '宫殿·古宅·书院·韩服', en: 'Palaces, old houses, academies, hanbok' },
  intro: {
    ko: '한국의 옛 건축은 세 가지로 나눠 보면 이해가 빠릅니다. 왕이 사는 궁궐, 양반이 사는 고택, 선비가 공부하던 서원. 여기에 사람이 사는 한옥마을과 전통 공예·음식 체험이 붙습니다. 서울의 궁궐은 서로 가까워 하루에 세 시대를 지나갈 수 있어요. 후원은 하루 인원이 정해져 있으니 예약이 이 코스의 유일한 숙제입니다.', ja: '韓国の昔の建築は三つに分けてみると理解が早い。王が住む宮殿、両班が住む古宅、ソンビが勉強していた書院。ここに人が住む韓屋村と伝統工芸・食体験がつきます。ソウルの宮殿は互いに近く、一日に三つの時代を過ぎることができます。スポンサーは一日の人数が決まっているので予約がこのコースの唯一の宿題です。', zh: '将韩国的古建筑分为三类更容易理解。国王居住的宫殿，贵族居住的古宅，学者学习的书院。在这里，您可以体验有人居住的韩屋村以及传统工艺品和美食。首尔的宫殿距离很近，一天可以穿越三个时代。每天的赞助数量有限，所以预约是这门课程唯一的功课。',
    en: 'Korean traditional architecture divides neatly: palaces for kings, large houses for the yangban, academies for scholars — with living hanok villages and craft or food experiences attached. Seoul\u2019s palaces sit close enough to cross three centuries in a day; the secret garden\u2019s daily quota is the only thing you must book.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울 설경', ja: '冬の雪景色', zh: '冬天的雪景', en: 'Snow' }],
  transport: { ko: '도보 + 지하철', ja: '徒歩＋地下鉄', zh: '步行＋地铁', en: 'Walking + subway' },
  duration: { ko: '약 10시간', ja: '約10時間', zh: '约10小时', en: 'About 10 hours' },
  hub: {
    ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station', q: '서울역',
    note: {
      ko: 'KTX·공항철도·1·4호선. 3호선으로 갈아타면 경복궁까지 20분입니다. 짐은 역 보관함에 두세요.', ja: 'KTX・空港鉄道・1・4号線。 3号線に乗り換えれば景福宮まで20分です。荷物は駅のロッカーに入れてください。', zh: 'KTX、机场铁路、1号线、4号线。如果换乘3号线，20分钟即可到达景福宫。请将行李寄存在车站储物柜内。',
      en: 'KTX, airport railroad, lines 1 and 4. Change to Line 3 and Gyeongbokgung is 20 minutes away; leave bags in the station.'
    }
  },
  course: {
    title: { ko: '경복궁에서 창덕궁 후원까지', ja: '景福宮から昌徳宮の後苑まで', zh: '从景福宫到昌德宫后苑', en: 'Gyeongbokgung to the secret garden' },
    meta: { ko: '7곳 · 약 10시간 · 도보 6km', ja: '7ヶ所・約10時間・徒歩6km', zh: '7个地点，约10小时，步行6公里', en: '7 stops · about 10 hours · 6 km on foot' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '3호선으로 경복궁역까지. 5번 출구로 나오면 궁 담장이 바로 보입니다.', ja: '3号線で景福宮駅まで。 5番出口から出ると宮塀がすぐに見えます。', zh: '乘坐地铁3号线至景福宫站。从5号出口出来，立刻就能看到宫墙。', en: 'Line 3 to Gyeongbokgung station — exit 5 puts you at the palace wall.' } },
      { phase: 'morning', time: '09:30', name: { ko: '경복궁', ja: '景福宮', zh: '景福宫', en: 'Gyeongbokgung Palace' }, q: '경복궁', move: { ko: '지하철 약 20분', ja: '地下鉄約20分', zh: '乘坐地铁约20分钟', en: 'Subway, about 20 min' },
        desc: { ko: '근정전 마당과 경회루 연못. 10시 수문장 교대식을 보려면 조금 서둘러 들어가세요. 화요일 휴무.', ja: '勤政殿庭と慶会楼池。 10時の水門場の交代式​​を見るには少し急いで入ってください。火曜日は休業。', zh: '勤政殿和庆会楼池塘。如果想看10点的卫兵换岗仪式，就早点到吧。每周二休息。', en: 'The Geunjeongjeon courtyard and Gyeonghoeru pond — be inside for the 10 a.m. guard change. Closed Tuesdays.' },
        photo: 'th-hanok' },
      { phase: 'morning', time: '11:30', name: { ko: '북촌한옥마을', ja: '北村韓屋村', zh: '北村韩屋村', en: 'Bukchon hanok street' }, q: '북촌한옥마을', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '기와지붕이 겹겹이 이어지는 언덕 골목. 실제 주민이 사는 곳이라 문 앞에서 조용히, 사진은 길에서만.', ja: '瓦屋根が重なり合う丘の路地。実際の住民が住んでいるところなので、ドアの前で静かに、写真は道でのみ。', zh: '山上的小巷，有层层叠叠的瓦顶。由于这里是真正的居民居住的地方，所以在门前保持安静，只在街上拍照。', en: 'Tiled roofs stacked up a hill. People live here: quiet at the gates, photographs from the street.' } },
      { phase: 'lunch', time: '12:40', name: { ko: '인사동', ja: '仁寺洞', zh: '仁寺洞', en: 'Insadong' }, q: '인사동', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '점심은 인사동에서. 골목 안쪽으로 들어가면 전통차를 내는 집과 공예 가게가 이어집니다.', ja: 'ランチは仁寺洞で。路地の内側に入ると、伝統的な車を作る家やクラフトショップが続きます。', zh: '午餐于仁寺洞。当你进入小巷时，你会看到一家提供传统茶的房子和一家工艺品店。', en: 'Lunch in Insadong; the inner alleys have tea rooms and craft shops.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '창덕궁', ja: '昌徳宮', zh: '昌德宫', en: 'Changdeokgung Palace' }, q: '창덕궁', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '담장이 낮고 건물이 언덕을 따라 앉아 있습니다. 월요일 휴무, 후원은 별도 예약.', ja: 'フェンスが低く、建物が丘に沿って座っています。月曜日は休業、スポンサーは別途予約。', zh: '栅栏很低，建筑物依山而建。周一闭馆，赞助必须单独预订。', en: 'Low walls and buildings following the slope. Closed Mondays; the garden needs its own booking.' },
        photo: 'th-hanok-p2' },
      { phase: 'afternoon', time: '15:00', name: { ko: '창덕궁 후원', ja: '昌徳宮後援', zh: '昌德宫赞助', en: 'Changdeokgung secret garden' }, q: '창덕궁 후원', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '해설사와 함께 90분. 연못과 정자가 계곡을 따라 놓여 있어 한 시간이 금방 갑니다.', ja: '解説士と共に90分。池と精子が谷に沿って置かれており、一時間がすぐ行きます。', zh: '90分钟有解说员。山谷里有池塘和亭子，一个小时很快就过去了。', en: 'Ninety minutes with a guide through ponds and pavilions set along a valley.' } },
      { phase: 'evening', time: '17:00', name: { ko: '종묘', ja: '種苗', zh: '宗庙', en: 'Jongmyo Shrine' }, q: '종묘', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
        desc: { ko: '조선 왕과 왕비의 신위를 모신 곳. 끝없이 이어지는 긴 마루가 인상적입니다.', ja: '朝鮮王と王妃の神位を祀った所。無限に続く長い床が印象的です。', zh: '供奉朝鲜国王和王后神龛的地方。绵长无尽的山脊令人印象深刻。', en: 'The royal ancestral shrine — one endless veranda is the thing to see.' } },
      { phase: 'evening', time: '18:30', name: { ko: '익선동 한옥골목', ja: '益善洞韓屋路地', zh: '益善洞韩屋胡同', en: 'Ikseon-dong hanok alleys' }, q: '익선동', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '백 년 된 한옥 사이 골목이 미로처럼 이어집니다. 저녁은 여기서.', ja: '百年の韓屋間の路地は迷路のようにつながります。夕方はここ。', zh: '百年韩屋之间的小巷像迷宫一样延伸。晚餐在这里。', en: 'A maze of alleys between century-old houses — dinner here.' } },
      { phase: 'return', time: '20:00', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 약 15분', ja: '地下鉄約15分', zh: '乘坐地铁约15分钟', en: 'Subway, about 15 min' },
        desc: { ko: '1호선 종로3가에서 두 정거장. 막차 전에 여유 있게.', ja: '1号線鍾路3街で2駅。終車前にゆったりと。', zh: '距1号线钟路3街两站。在末班车前慢慢来。', en: 'Two stops on Line 1 from Jongno 3-ga — comfortably before the last train.' } }
    ]
  },
  subs: {
    title: { ko: '한옥·전통문화 스물다섯 가지', ja: '韓屋・伝統文化の25', zh: '韩屋·传统文化的二十五种', en: 'Twenty-five ways into tradition' },
    items: [
      { emoji: '🏘️', name: { ko: '한옥마을', ja: '韓屋村', zh: '韩屋村', en: 'Hanok villages' }, desc: { ko: '전통 한옥이 모여 있는 마을. 주민 거주 여부를 구분하세요.', ja: '伝統韓屋が集まっている町。住民に住んでいるかどうかを区別してください。', zh: '一个充满韩国传统房屋的村庄。请区分您是否是居民。', en: 'Villages of hanok houses — note whether people live there.' } },
      { emoji: '🏚️', name: { ko: '전통 고택', ja: '伝統的な古屋', zh: '传统的老房子', en: 'Old noble houses' }, desc: { ko: '양반집·종가·명문가. 관람과 숙박이 다릅니다.', ja: '両反集・終値・名門家。観覧と宿泊が異なります。', zh: '名门望族，本家，名门望族。观赏和住宿是不同的。', en: 'Yangban houses and clan homes; visiting and staying differ.' } },
      { emoji: '🛏️', name: { ko: '한옥 숙박', ja: '韓屋の宿泊', zh: '韩屋住宿', en: 'Hanok stays' }, desc: { ko: '온돌방·툇마루·대청마루. 화장실과 난방을 확인하세요.', ja: 'オンドルルーム・トゥクトマル・デチョンマル。トイレと暖房を確認してください。', zh: '暖炕室、阳台、大青丸。检查厕所和暖气。', en: 'Ondol rooms and wooden verandas; check bathroom and heating.' } },
      { emoji: '🏯', name: { ko: '궁궐', ja: '宮殿', zh: '宫殿', en: 'Palaces' }, desc: { ko: '왕궁과 왕실 생활. 휴무일이 궁마다 다릅니다.', ja: '王宮と王室の生活。休業日が宮によって異なります。', zh: '皇宫和皇室生活。闭馆日因宫殿而异。', en: 'Royal palaces and court life; closing days differ.' } },
      { emoji: '⚰️', name: { ko: '왕릉', ja: '王陵', zh: '皇家陵墓', en: 'Royal tombs' }, desc: { ko: '조선왕릉과 왕실 역사. 산책로가 잘 나 있습니다.', ja: '朝鮮王陵と王室の歴史。遊歩道がよく出ています。', zh: '朝鲜王陵和王室历史。有很好的步行道。', en: 'Joseon royal tombs with good walking paths.' } },
      { emoji: '📜', name: { ko: '서원', ja: '書院', zh: '誓言', en: 'Seowon academies' }, desc: { ko: '선비문화와 교육기관. 세계유산 서원이 여럿입니다.', ja: 'サンビ文化と教育機関。世界遺産書院が多くです。', zh: '学者文化教育机构。有多个世界遗产书院。', en: 'Scholar culture and schools, several of them World Heritage.' } },
      { emoji: '🏫', name: { ko: '향교', ja: '香橋', zh: '乡校', en: 'Hyanggyo' }, desc: { ko: '지방 교육과 유교문화의 자리.', ja: '地方教育と儒教文化の場。', zh: '地方教育和儒家文化的场所。', en: 'Local Confucian schools.' } },
      { emoji: '🌾', name: { ko: '전통 마을', ja: '伝統的な村', zh: '传统村落', en: 'Traditional villages' }, desc: { ko: '옛 마을과 공동체 생활.', ja: '旧市街とコミュニティ生活。', zh: '老村庄和社区生活。', en: 'Old villages and communal life.' } },
      { emoji: '🎎', name: { ko: '민속촌', ja: '民俗村', zh: '民俗村', en: 'Folk villages' }, desc: { ko: '전통 생활과 옛 거리 재현.', ja: '伝統的な生活と古い通りの再現。', zh: '传统生活和古老街道被再现。', en: 'Recreated traditional life and streets.' } },
      { emoji: '🛕', name: { ko: '사찰·산사', ja: '寺院・山寺', zh: '寺庙和山寺', en: 'Temples' }, desc: { ko: '전통 목조건축과 불교문화.', ja: '伝統的な木造建築と仏教文化。', zh: '传统木结构建筑与佛教文化。', en: 'Timber architecture and Buddhist culture.' } },
      { emoji: '🧱', name: { ko: '성곽·읍성', ja: '城郭・邑城', zh: '堡垒/邑城', en: 'Fortresses' }, desc: { ko: '옛 성곽과 성 안의 마을.', ja: '古い城と城の中の村。', zh: '古老的城堡和城堡内的村庄。', en: 'Fortress walls and the villages inside them.' } },
      { emoji: '🪷', name: { ko: '전통 정원', ja: '伝統的な庭園', zh: '传统园林', en: 'Traditional gardens' }, desc: { ko: '연못과 누정의 한국식 정원.', ja: '池と沼の韓国式庭園。', zh: '韩国风格的花园，有池塘和凉亭。', en: 'Korean gardens of ponds and pavilions.' } },
      { emoji: '🌤️', name: { ko: '정자·누각', ja: '精子・楼閣', zh: '亭子，亭子', en: 'Pavilions' }, desc: { ko: '풍류문화의 자리. 해 질 무렵이 좋습니다.', ja: '風流文化の場。夕暮れ時が良いです。', zh: '风流文化的发源地。日落前后最好。', en: 'Places of music and company, best at dusk.' } },
      { emoji: '🍵', name: { ko: '전통 다도', ja: '伝統的な茶道', zh: '传统茶道', en: 'Tea ceremony' }, desc: { ko: '다례와 전통차. 하동·보성이 대표 산지.', ja: '茶道と伝統茶。ハドン・ポソンが代表産地。', zh: '茶道和传统茶。河东和宝城是代表性产地。', en: 'Tea ceremony; Hadong and Boseong are the tea country.' } },
      { emoji: '👘', name: { ko: '한복 체험', ja: '韓服体験', zh: '韩服体验', en: 'Hanbok' }, desc: { ko: '한복 대여와 사진. 궁궐 입장료가 면제됩니다.', ja: '韓服レンタルと写真。宮殿入場料が免除されます。', zh: '韩服租赁和照片。宫殿门票免收。', en: 'Rent a hanbok, and palace entry is free.' } },
      { emoji: '💍', name: { ko: '전통 혼례', ja: '伝統的な婚礼', zh: '传统婚礼', en: 'Traditional wedding' }, desc: { ko: '전통 혼례와 예절 체험.', ja: '伝統的な婚礼と礼儀体験。', zh: '体验传统婚礼和礼仪。', en: 'Traditional wedding and etiquette experiences.' } },
      { emoji: '🖌️', name: { ko: '한지·서예', ja: '韓紙・書道', zh: '汉字与书法', en: 'Paper & calligraphy' }, desc: { ko: '한지 제작과 붓글씨.', ja: '韓紙製作と筆文字。', zh: '汉字制作和书法。', en: 'Making hanji paper and brush writing.' } },
      { emoji: '🏺', name: { ko: '도자기·옹기', ja: '陶器・オンギ', zh: '陶器，陶器', en: 'Ceramics' }, desc: { ko: '도예·백자·청자·옹기.', ja: '陶芸・白磁・青磁・擁器。', zh: '陶瓷、白瓷、青瓷、陶器。', en: 'Pottery, white and celadon ware, onggi jars.' } },
      { emoji: '🪡', name: { ko: '전통 공예', ja: '伝統工芸', zh: '传统工艺', en: 'Crafts' }, desc: { ko: '나전칠기·목공·매듭·자수.', ja: '螺旋漆器・木工・ノット・刺繍。', zh: '珍珠母漆器、木工、结饰、刺绣。', en: 'Lacquer, woodwork, knotting, embroidery.' } },
      { emoji: '🍚', name: { ko: '전통 음식', ja: '伝統料理', zh: '传统食品', en: 'Traditional food' }, desc: { ko: '한식·향토음식·궁중음식.', ja: '韓国料理・郷土料理・宮中料理。', zh: '韩国菜，当地菜，皇家菜。', en: 'Korean, regional and court cuisine.' } },
      { emoji: '🧺', name: { ko: '전통시장', ja: '伝統市場', zh: '传统市场', en: 'Traditional markets' }, desc: { ko: '오일장과 옛 장터.', ja: 'オイルフィールドと古い場。', zh: '石油市场和旧市场。', en: 'Five-day and old market streets.' } },
      { emoji: '🥁', name: { ko: '전통 음악', ja: '伝統音楽', zh: '传统音乐', en: 'Traditional music' }, desc: { ko: '국악·판소리·풍물 공연.', ja: '国楽・パンソリ・風物公演。', zh: '韩国传统音乐、板索里和风物表演。', en: 'Gugak, pansori and percussion bands.' } },
      { emoji: '🎋', name: { ko: '전통 놀이', ja: '伝統遊び', zh: '传统游戏', en: 'Folk games' }, desc: { ko: '윷놀이·연날리기·탈춤.', ja: 'ウィン遊び・凧飛び・タルダンス。', zh: 'Yutnori、放风筝、面具舞。', en: 'Yut, kite flying, mask dance.' } },
      { emoji: '📖', name: { ko: '선비문화', ja: 'サンビ文化', zh: '士文化', en: 'Scholar culture' }, desc: { ko: '서책·고택·유교문화와 문학.', ja: '書籍・古宅・儒教文化と文学。', zh: '书籍、老房子、儒家文化和文学。', en: 'Books, old houses and Confucian letters.' } },
      { emoji: '🏮', name: { ko: '전통 야경', ja: '伝統的な夜景', zh: '传统夜景', en: 'Traditional nights' }, desc: { ko: '한옥 야경과 궁궐 야간개장.', ja: '韓屋夜景と宮殿夜間開場。', zh: '韩屋夜景和宫殿夜景开幕。', en: 'Lit hanok streets and palace night openings.' } }
    ]
  },
  conds: [
    { k: { ko: '휴무', ja: '休業日', zh: '休息日', en: 'Closing days' }, v: { ko: '경복궁 화 · 창덕궁·덕수궁·종묘 월', ja: '景福宮華・昌徳宮・徳寿宮・宗廟月', zh: '景福宫宫花、昌德宫、德寿宫、宗庙月', en: 'Gyeongbokgung Tue; Changdeokgung, Deoksugung, Jongmyo Mon' } },
    { k: { ko: '후원', ja: '後苑', zh: '后苑', en: 'Secret garden' }, v: { ko: '해설 시간제, 하루 인원 제한, 온라인 예약', ja: '解説時間制、一人数制限、オンライン予約', zh: '口译时间表、每日人数有限、在线预约', en: 'Timed guided entry with a daily cap; book online' } },
    { k: { ko: '구분', ja: '区分', zh: '类别', en: 'Know the difference' }, v: { ko: '주민 거주 마을 / 관람용 한옥마을, 관람 / 숙박 가능 고택', ja: '住民居住村/観覧用韓屋村、観覧/宿泊可能', zh: '住宅村/韩屋村可供参观，老房子可供参观/住宿', en: 'Lived-in village or tourist hanok village; houses you can visit or stay in' } },
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Tickets' }, v: { ko: '한복 착용 시 궁궐 입장료 무료', ja: '韓服着用時宮殿入場料無料', zh: '穿着韩服可免费进入宫殿', en: 'Palace entry is free in hanbok' } }
  ],
  places: [
    { name: { ko: '경복궁', ja: '景福宮', zh: '景福宫', en: 'Gyeongbokgung' }, region: 'capital', q: '경복궁', note: { ko: '조선 법궁. 수문장 교대식과 경회루.', ja: '朝鮮の法宮。水門場交代式と慶会楼。', zh: '朝鲜宫廷。卫兵换岗仪式和庆会楼。', en: 'The main Joseon palace: guard change and the Gyeonghoeru pond.' } },
    { name: { ko: '창덕궁', ja: '昌徳宮', zh: '昌德宫', en: 'Changdeokgung' }, region: 'capital', q: '창덕궁', note: { ko: '유네스코 세계유산. 후원이 핵심.', ja: 'ユネスコ世界遺産。スポンサーが核心。', zh: '联合国教科文组织世界遗产。赞助是关键。', en: 'A World Heritage site; the secret garden is the heart of it.' } },
    { name: { ko: '창경궁', ja: '昌慶宮', zh: '昌庆宫', en: 'Changgyeonggung' }, region: 'capital', q: '창경궁', note: { ko: '명정전과 춘당지. 창덕궁과 이어집니다.', ja: '明政殿と春堂寺。昌徳宮につながります。', zh: '明正殿和春堂池。它与昌德宫相连。', en: 'Myeongjeongjeon and the Chundang pond, joined to Changdeokgung.' } },
    { name: { ko: '덕수궁', ja: '徳寿宮', zh: '德寿宫', en: 'Deoksugung' }, region: 'capital', q: '덕수궁', note: { ko: '돌담길과 서양식 석조전.', ja: '石垣と西洋式の石造り展。', zh: '石墙路和西式石厅。', en: 'A stone wall road and a Western-style hall.' } },
    { name: { ko: '종묘', ja: '種苗', zh: '宗庙', en: 'Jongmyo' }, region: 'capital', q: '종묘', note: { ko: '유네스코 세계유산. 정전의 긴 마루.', ja: 'ユネスコ世界遺産。停電の長い床。', zh: '联合国教科文组织世界遗产。正殿的长脊。', en: 'World Heritage: one very long veranda.' } },
    { name: { ko: '북촌한옥마을', ja: '北村韓屋村', zh: '北村韩屋村', en: 'Bukchon hanok village' }, region: 'capital', q: '북촌한옥마을', note: { ko: '주거지. 오전이 한산하고 예절이 필요합니다.', ja: '住宅地。午前は寒くて礼儀が必要です。', zh: '居住区。早晨很安静，需要礼仪。', en: 'A lived-in neighbourhood: quiet in the morning, and behave accordingly.' } },
    { name: { ko: '남산골한옥마을', ja: '南山ゴール韓屋村', zh: '南山谷韩屋村', en: 'Namsangol hanok village' }, region: 'capital', q: '남산골한옥마을', note: { ko: '한옥 다섯 채와 전통정원, 한복·공예 체험.', ja: '韓屋五軒と伝統庭園、韓服・工芸体験。', zh: '五栋韩屋、一座传统花园和韩服/工艺体验。', en: 'Five hanok houses, a garden, hanbok and craft experiences.' } },
    { name: { ko: '은평한옥마을', ja: 'ウンピョン韓屋村', zh: '恩平韩屋村', en: 'Eunpyeong hanok village' }, region: 'capital', q: '은평한옥마을', note: { ko: '북한산 아래 현대 한옥마을, 산책로.', ja: '北韓山の下で現代韓屋村、遊歩道。', zh: '现代韩屋村和北汉山下的步行道。', en: 'A modern hanok quarter below Bukhansan.' } },
    { name: { ko: '수원 화성 · 행궁동', ja: '水原華城・行宮洞', zh: '水原华城行宫洞', en: 'Suwon Hwaseong & Haenggung' }, region: 'capital', q: '수원화성', note: { ko: '정조의 성곽과 한옥거리, 야간 조명.', ja: '正祖の城と韓屋街、夜間照明。', zh: '正祖的城堡、韩屋街和夜晚的灯光。', en: 'Jeongjo\u2019s fortress, a hanok street and night lighting.' } },
    { name: { ko: '강화 고려궁지', ja: '江華高麗宮址', zh: '江华高丽宫址', en: 'Ganghwa Goryeo palace site' }, region: 'capital', q: '고려궁지', note: { ko: '고려 궁궐 터와 조선의 전통가옥.', ja: '高麗宮殿と朝鮮の伝統家屋。', zh: '高丽宫殿遗址和朝鲜传统房屋。', en: 'A Goryeo palace site with later traditional houses.' } },
    { name: { ko: '한국민속촌', ja: '韓国民俗村', zh: '韩国民俗村', en: 'Korean Folk Village' }, region: 'capital', q: '한국민속촌', note: { ko: '전국 전통가옥과 생활문화, 공연.', ja: '全国の伝統家屋と生活文化、公演。', zh: '全国各地的传统民居、生活文化和表演。', en: 'Traditional houses from across the country, with performances.' } },
    { name: { ko: '강릉 선교장', ja: '江陵宣教長', zh: '江陵船桥庄', en: 'Gangneung Seongyojang' }, region: 'gangwon', q: '선교장', note: { ko: '연못을 품은 조선 상류 주택.', ja: '池を抱く朝鮮上流住宅。', zh: '带有池塘的朝鲜上层住宅。', en: 'A noble house with its own pond.' } },
    { name: { ko: '강릉 오죽헌', ja: '江陵オ・ジュンホン', zh: '江陵乌竹轩', en: 'Gangneung Ojukheon' }, region: 'gangwon', q: '오죽헌', note: { ko: '신사임당과 율곡의 집.', ja: '神社任堂と渓谷の家。', zh: '申师任堂和栗谷家。', en: 'The house of Shin Saimdang and Yulgok.' } },
    { name: { ko: '공주한옥마을', ja: 'プリンセス韓屋村', zh: '公州韩屋村', en: 'Gongju hanok village' }, region: 'jeolla', q: '공주한옥마을', note: { ko: '온돌 숙박과 한지·도자기 체험, 공산성 연계.', ja: 'オンドル宿泊と韓紙・陶器体験、共産省連携。', zh: '暖炕住宿、韩纸、陶艺体验、公山城连接。', en: 'Ondol stays, paper and ceramic workshops, next to Gongsanseong.' } },
    { name: { ko: '아산 외암민속마을', ja: '牙山外岩民俗村', zh: '牙山外岩民俗村', en: 'Asan Oeam folk village' }, region: 'jeolla', q: '외암민속마을', note: { ko: '초가·기와집·돌담길, 실제 마을.', ja: '茅葺・瓦屋・石垣道、実際の町。', zh: '茅草、瓦房、石墙路，一个真正的村庄。', en: 'Thatched and tiled houses with stone walls, still lived in.' } },
    { name: { ko: '서산 해미읍성', ja: '西山海美邑城', zh: '瑞山海美邑城', en: 'Seosan Haemieupseong' }, region: 'jeolla', q: '해미읍성', note: { ko: '조선 읍성의 모습이 남은 성곽.', ja: '朝鮮邑城の姿が残った城郭。', zh: '一座保留着朝鲜城墙遗迹的城堡。', en: 'A Joseon town fortress still standing.' } },
    { name: { ko: '논산 명재고택', ja: 'ノンサン名材高택', zh: '论山明斋古宅', en: 'Nonsan Myeongjae house' }, region: 'jeolla', q: '명재고택', note: { ko: '사대부 고택과 장독대, 전통 정원.', ja: '四大部の古屋と長督大、伝統庭園。', zh: '老贵族的房子、瓦罐、传统的花园。', en: 'A scholar\u2019s house with jar terraces and a garden.' } },
    { name: { ko: '전주한옥마을', ja: '全州韓屋村', zh: '全州韩屋村', en: 'Jeonju hanok village' }, region: 'jeolla', q: '전주한옥마을', note: { ko: '700여 채의 한옥, 한복·한식·한지.', ja: '700以上の韓屋、韓服・韓国料理・韓紙。', zh: '超过700间韩屋、韩服、韩餐、韩纸。', en: 'Seven hundred hanok houses, hanbok, food and paper.' } },
    { name: { ko: '고창읍성', ja: '高昌邑城', zh: '高敞邑城', en: 'Gochang eupseong' }, region: 'jeolla', q: '고창읍성', note: { ko: '조선 읍성과 성곽길.', ja: '朝鮮邑城と城郭道。', zh: '朝鲜城城堡和要塞路。', en: 'A Joseon town wall and its path.' } },
    { name: { ko: '순천 낙안읍성', ja: '順天楽安邑城', zh: '顺天乐安邑城', en: 'Suncheon Naganeupseong' }, region: 'jeolla', q: '낙안읍성', note: { ko: '주민이 사는 초가 마을과 성곽.', ja: '住民が住む茅葺の町と城。', zh: '居民居住的茅草村和城堡。', en: 'A thatched village inside walls, still inhabited.' } },
    { name: { ko: '구례 운조루', ja: '旧礼ウンゾル', zh: '求礼云觉鲁', en: 'Gurye Unjoru' }, region: 'jeolla', q: '운조루', note: { ko: '조선 양반 고택과 옛 생활문화.', ja: '朝鮮両班の家と昔の生活文化。', zh: '朝鲜贵族的古宅和古老的生活文化。', en: 'A yangban house and its old way of living.' } },
    { name: { ko: '안동 하회마을', ja: '安東下回村', zh: '安东河回村', en: 'Andong Hahoe' }, region: 'gyeongsang', q: '하회마을', note: { ko: '세계유산. 낙동강이 감싸는 마을과 탈놀이.', ja: '世界遺産。洛東江が包む村と脱遊び。', zh: '世界遗产。洛东江环绕的村庄和面具表演。', en: 'World Heritage: a village inside a river bend, with mask dance.' } },
    { name: { ko: '경주 양동마을', ja: '慶州バケツ村', zh: '庆州良洞村', en: 'Gyeongju Yangdong' }, region: 'gyeongsang', q: '양동마을', note: { ko: '세계유산. 조선 양반마을의 공간 구성.', ja: '世界遺産。朝鮮両盤村の空間構成。', zh: '世界遗产。朝鲜贵族村落的空间构成。', en: 'World Heritage: the layout of a yangban village.' } },
    { name: { ko: '안동 도산서원', ja: '安東道山書院', zh: '安东岛山书院', en: 'Andong Dosan Seowon' }, region: 'gyeongsang', q: '도산서원', note: { ko: '퇴계 이황과 선비문화, 야간개장.', ja: '退渓の利黄とサンビ文化、夜間開場。', zh: '退溪李黄和学者文化，晚上开放。', en: 'Toegye and scholar culture, with night openings.' } },
    { name: { ko: '안동 병산서원', ja: '安東病山書院', zh: '安东屏山书院', en: 'Andong Byeongsan Seowon' }, region: 'gyeongsang', q: '병산서원', note: { ko: '만대루와 낙동강 풍경.', ja: 'マンデルとナクドン川の風景。', zh: 'Mandaeru亭和洛东江的风景。', en: 'The Mandae pavilion over the Nakdong.' } },
    { name: { ko: '영주 소수서원', ja: '永州少数書院', zh: '荣州素水书院', en: 'Yeongju Sosu Seowon' }, region: 'gyeongsang', q: '소수서원', note: { ko: '우리나라 최초의 사액서원.', ja: '韓国初の謝罪書院。', zh: '韩国第一座色书院。', en: 'The country\u2019s first royally endowed academy.' } },
    { name: { ko: '경주 교촌한옥마을', ja: '慶州教村韓屋村', zh: '庆州教村韩屋村', en: 'Gyeongju Gyochon village' }, region: 'gyeongsang', q: '교촌한옥마을', note: { ko: '최부자댁과 전통마을, 첨성대 연계.', ja: '最父子宅と伝統村、瞻星台連携。', zh: '连接崔富翁家、传统村庄和瞻星台。', en: 'The Choi family house and old lanes, near Cheomseongdae.' } },
    { name: { ko: '영주 무섬마을', ja: '永州ムサム村', zh: '荣州博物馆村', en: 'Yeongju Museom village' }, region: 'gyeongsang', q: '무섬마을', note: { ko: '외나무다리로 이어지는 물 위의 마을.', ja: '片足につながる水の上の村。', zh: '一座水上村庄，由一座独树桥相连。', en: 'A village joined by a single-log bridge.' } },
    { name: { ko: '제주 성읍민속마을', ja: '済州城邑民俗村', zh: '济州城邑民俗村', en: 'Jeju Seongeup village' }, region: 'jeju', q: '성읍민속마을', note: { ko: '제주 초가와 돌담, 전통 주거.', ja: '済州初川と石垣、伝統的な住宅。', zh: '济州茅草和石墙，传统民居。', en: 'Jeju thatch, stone walls and traditional houses.' } },
    { name: { ko: '전주 전통한지원', ja: '全州伝統的な支援', zh: '全州传统韩地院', en: 'Jeonju hanji workshop' }, region: 'jeolla', q: '전주 전통한지원', note: { ko: '한지 제작과 전통 종이 체험.', ja: '漢紙製作と伝統紙体験。', zh: '韩纸制作和传统纸体验。', en: 'Making hanji paper by hand.' } },
    { name: { ko: '이천 도자예술마을', ja: '利川陶芸芸術村', zh: '利川陶瓷艺术村', en: 'Icheon ceramic village' }, region: 'capital', q: '이천 도자예술마을', note: { ko: '물레·공방 체험과 도자 전시.', ja: 'ムレ・工房体験と陶磁展示。', zh: '陶轮及作坊体验及陶艺展览。', en: 'Wheel throwing, workshops and ceramics displays.' } },
    { name: { ko: '안동 하회세계탈박물관', ja: '安東下回世界脱博物館', zh: '安东河回世界面具博物馆', en: 'Andong mask museum' }, region: 'gyeongsang', q: '하회세계탈박물관', note: { ko: '하회탈과 세계의 탈, 공연문화.', ja: '下回りと世界の脱、公演文化。', zh: '河回面具、世界各地的面具和表演文化。', en: 'Hahoetal, masks from elsewhere and performance culture.' } },
    { name: { ko: '나주 천연염색박물관', ja: 'ナジュ天然染色博物館', zh: '罗州天然染料博物馆', en: 'Naju natural dye museum' }, region: 'jeolla', q: '나주천연염색박물관', note: { ko: '천연염색과 전통 섬유문화.', ja: '天然染色と伝統的な繊維文化。', zh: '天然染色与传统纺织文化。', en: 'Natural dyeing and textile tradition.' } },
    { name: { ko: '보성 한국차문화공원', ja: 'ポソン韓国車文化公園', zh: '宝城韩国茶文化公园', en: 'Boseong tea culture park' }, region: 'jeolla', q: '한국차문화공원', note: { ko: '다례와 차밭 문화 체험.', ja: '茶礼と茶畑文化体験。', zh: '茶道及茶园文化体验。', en: 'Tea ceremony and tea-field experiences.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '설렁탕 · 북엇국', ja: 'ソルロンタン・北斗', zh: '宣陵汤·北明太鱼汤', en: 'Beef soup · pollack soup' }, note: { ko: '궁궐 근처 아침 식당은 8시부터.', ja: '宮殿近くの朝食レストランは8時から。', zh: '宫殿附近的早餐餐厅八点开门。', en: 'Places near the palaces open at eight.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍱', dish: { ko: '한정식 · 비빔밥', ja: '限定食・ビビンバ', zh: '韩定食·拌饭', en: 'Hanjeongsik · bibimbap' }, note: { ko: '인사동은 상 차림이 정갈한 집이 많습니다.', ja: '仁寺洞には上着の居酒屋がたくさんあります。', zh: '仁寺洞有很多餐桌布置整齐的房子。', en: 'Insadong does tidy set tables well.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍵', dish: { ko: '전통차 · 약과 · 떡', ja: '伝統茶・薬科・餅', zh: '传统茶、草药、年糕', en: 'Traditional tea · yakgwa · rice cake' }, note: { ko: '오후에 차 한 잔으로 쉬어 가세요.', ja: '午後にお茶を一杯で休んでください。', zh: '下午喝杯茶放松一下。', en: 'A tea break in the afternoon.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍶', dish: { ko: '삼겹살 · 전 · 막걸리', ja: 'サムギョプサル・元・マッコリ', zh: '五花肉、煎饼、马格利酒', en: 'Pork belly · pancakes · makgeolli' }, note: { ko: '익선동 골목에서 마무리.', ja: 'イクソンドン路地で仕上げ。', zh: '在益善洞的一条小巷里结束。', en: 'Finish in the Ikseon-dong alleys.' } }
  ],
  photos: [
    { file: 'th-hanok', cap: { ko: '궁궐의 전각', ja: '宮殿の全角', zh: '宫殿大厅', en: 'A palace hall' } },
    { file: 'th-hanok-p2', cap: { ko: '한옥 지붕이 이어지는 골목', ja: '韓屋屋根が続く路地', zh: '通往韩屋屋顶的小巷', en: 'An alley of tiled roofs' } }
  ],
  tip: { ko: '궁궐은 휴무일이 서로 다릅니다. 경복궁 화요일, 창덕궁·덕수궁·종묘 월요일을 피해 일정을 짜세요.', ja: '宮殿は休業日が異なります。景福宮火曜日、昌徳宮・徳寿宮・宗廟月曜日を避けてスケジュールを組んでください。', zh: '宫殿有不同的闭馆日。规划您的行程，避开周二参观景福宫，周一避开昌德宫、德寿宫和宗庙。', en: 'The palaces close on different days — Gyeongbokgung on Tuesday, the others on Monday.' }
},
/* ------------------------------------------------ 08 체험농장·수확 */
{
  id: 'farm', emoji: '🌾', tint: '#C9E4A5',
  name: { ko: '체험농장 · 수확', ja: '体験農場・収穫', zh: '体验农场·收获', en: 'Farm experiences & harvest' },
  sub: { ko: '손으로 거두는 하루', ja: '手で収穫する一日', zh: '用双手收获的一天', en: 'A day you pick yourself' },
  tag: { ko: '수확 · 농촌 체험 · 계절', ja: '収穫・農村体験・季節', zh: '收获·乡村体验·季节', en: 'Harvest, farm life, seasons' },
  intro: {
    ko: '체험농장은 품목마다 철이 다릅니다. 딸기는 겨울, 감자는 초여름, 사과와 배는 가을, 메밀꽃은 9월이에요. 여기서는 9월의 평창 봉평을 기본 코스로 잡았습니다. 메밀꽃밭과 감자밭, 물레방아가 한 동네에 있어 걷기만 해도 하루가 됩니다.', ja: '体験農場は品目ごとに鉄が異なります。イチゴは冬、ジャガイモは初夏、リンゴとお腹は秋、そばの花は9月です。ここでは、9月の平昌奉平を基本コースとした。そばの花畑とじゃがいも畑、ムレバナがある近所にあり、歩くだけでも一日になります。', zh: '体验农场的每个项目的季节都不同。草莓在冬天上市，土豆在初夏上市，苹果和梨在秋天上市，荞麦花在九月上市。在这里，我们选择了9月的平昌和蓬坪作为基础课程。荞麦花田、土豆田、水磨坊都在一个街区，光是逛一圈就需要一天的时间。',
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
/* ------------------------------------------------- 11 호캉스·도심 휴식 */
{
  id: 'hotel', emoji: '🏨', tint: '#D9CCFF',
  name: { ko: '호캉스 · 도심 휴식', ja: 'ホカンス・都心の休日', zh: '酒店度假·城市里的小憩', en: 'Hotel days & city rest' },
  sub: { ko: '멀리 가지 않고 하루를 쉬는 법', ja: '遠くへ行かずに一日を休む方法', zh: '不跑远也能休息一天的方法', en: 'A day off without going far' },
  tag: { ko: '호텔 · 스파 · 오션뷰', ja: 'ホテル・スパ・オーシャンビュー', zh: '酒店·水疗·海景', en: 'Hotels, spas, ocean views' },
  intro: {
    ko: '호캉스는 일정을 비우는 여행입니다. 체크인 시간에 맞춰 도착해 짐을 맡기고, 수영장과 사우나를 오가다가 해 질 무렵 산책하고, 저녁은 호텔 밖에서 먹는 정도가 가장 만족도가 높아요. 여기서는 해운대의 바다 보이는 호텔을 하루 쓰는 코스로 잡았습니다. 당일이면 데이유즈 상품을 확인하세요.', ja: 'ホカンスは、スケジュールを空にする旅行です。チェックイン時間に合わせて到着して荷物を預け、プールとサウナを行き来する頃散歩し、夕方はホテル外で食べる程度が一番満足度が高いです。ここでは海雲台の海に見えるホテルを一日使うコースでとりました。当日ならデイユーズ商品をご確認ください。', zh: '酒店度假是一种可以清理您的日程安排的旅行。最满意的体验就是准时到达办理入住、寄存行李、去泳池和桑拿、日落时散步、在酒店外吃晚餐。在这里，我们决定在海云台一家俯瞰大海的酒店住一天。如果是同一天，请查看我们的日用产品。',
    en: 'A hotel day is a trip with the schedule removed: arrive at check-in, leave the bag, drift between pool and sauna, walk at dusk, and eat dinner outside the hotel. This route uses a sea-facing hotel at Haeundae for one day — for a same-day visit, check day-use rates.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '겨울 실내', ja: '冬の屋内', zh: '冬天在室内', en: 'Winter indoors' }],
  transport: { ko: 'KTX + 도시철도', ja: 'KTX＋都市鉄道', zh: 'KTX＋地铁', en: 'KTX + metro' },
  duration: { ko: '약 9시간', ja: '約9時間', zh: '约9小时', en: 'About 9 hours' },
  hub: {
    ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station', q: '부산역',
    note: {
      ko: 'KTX 서울에서 2시간 40분. 1호선에서 2호선으로 갈아타 해운대까지 40분. 호텔에 짐을 먼저 맡기고 시작하세요.', ja: 'KTXソウルから2時間40分。 1号線から2号線に乗り換え、海雲台まで40分。ホテルに荷物を預けて始めましょう。', zh: '从首尔乘坐 KTX 2小时40分钟。从1号线换乘2号线，40分钟到达海云台。首先把行李寄存在酒店。',
      en: 'Two hours forty from Seoul. Line 1 to Line 2 puts you at Haeundae in forty minutes; leave the bag at the hotel first.'
    }
  },
  course: {
    title: { ko: '해운대 호캉스 — 체크인에서 야경까지', ja: '海雲台ホカンス — チェックインから夜景まで', zh: '海云台酒店度假——从入住到夜景', en: 'Haeundae hotel day — check-in to night view' },
    meta: { ko: '6곳 · 약 9시간 · 도보 4km', ja: '6ヶ所・約9時間・徒歩4km', zh: '6个地点，约9小时，步行4公里', en: '6 stops · about 9 hours · 4 km on foot' },
    steps: [
      { phase: 'start', time: '12:30', name: { ko: '부산역', ja: '釜山駅', zh: '釜山站', en: 'Busan Station' }, q: '부산역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '1호선 서면에서 2호선으로 갈아타 해운대까지. 짐은 호텔에 먼저 맡기면 몸이 가볍습니다.', ja: '1号線書面から2号線に乗り換え、海雲台まで。荷物はホテルに先に預ければ体が軽いです。', zh: '从西面站乘坐1号线，换乘2号线，前往海云台。如果先把行李寄存在酒店，会感觉轻松一些。', en: 'Line 1 to Seomyeon, change to Line 2 for Haeundae; drop the bag at the hotel first.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '해운대해수욕장', ja: '海雲台海水浴場', zh: '海云台海水浴场', en: 'Haeundae Beach' }, q: '해운대해수욕장', move: { ko: '도시철도 약 40분', ja: '都市鉄道約40分', zh: '乘坐城铁约40分钟', en: 'Metro, about 40 min' },
        desc: { ko: '체크인 전에 모래사장을 한 번 걷습니다. 여름이 아니어도 바람이 좋습니다.', ja: 'チェックイン前に砂浜を一度歩きます。夏じゃなくても風がいいです。', zh: '入住前在沙滩上散步。即使不是夏天，风也很好。', en: 'Walk the sand before check-in; even out of season the wind is worth it.' },
        photo: 'th-hotel' },
      { phase: 'afternoon', time: '14:20', name: { ko: '동백섬', ja: '椿島', zh: '冬柏岛', en: 'Dongbaekseom' }, q: '동백섬', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '해변 끝의 작은 섬을 잇는 산책로. 20분이면 한 바퀴입니다.', ja: 'ビーチの端の小さな島をつなぐ遊歩道。 20分なら一輪です。', zh: '连接海滩尽头的小岛的步行道。一圈需要20分钟。', en: 'A path around the little island at the end of the beach — twenty minutes.' } },
      { phase: 'afternoon', time: '15:00', name: { ko: '호텔 체크인 · 수영장', ja: 'ホテルチェックイン・プール', zh: '酒店入住·泳池', en: 'Check in & pool' }, q: '해운대 호텔', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '체크인하고 바로 수영장이나 스파로. 수영복과 수영모를 챙기세요. 사우나는 별도 요금인 경우가 많습니다.', ja: 'チェックインしてすぐにプールやスパで。水着と水泳帽を手に入れてください。サウナは別途料金の場合が多いです。', zh: '办理入住手续后直接前往泳池或水疗中心。带上泳衣和泳帽。使用桑拿浴室通常需要单独付费。', en: 'Check in and go straight to the pool or spa; bring a swimsuit and cap. The sauna is often charged separately.' } },
      { phase: 'evening', time: '17:30', name: { ko: '오션뷰 휴식', ja: 'オーシャンビューリラックス', zh: '海景放松', en: 'Rest with the view' }, q: '해운대', move: { ko: '객실', ja: '客室', zh: '客房', en: 'In the room' },
        desc: { ko: '해가 지는 시간을 객실에서 보냅니다. 이 코스에서 유일하게 아무것도 하지 않는 시간입니다.', ja: '日の入り時間をお部屋でお過ごしください。このコースで唯一何もしない時間です。', zh: '在您的房间里欣赏日落。这是本课程中唯一一次您什么都不做的时间。', en: 'Watch the sun go down from the room — the only hour of the day with nothing to do.' },
        photo: 'th-hotel-p2' },
      { phase: 'evening', time: '19:00', name: { ko: '해운대 저녁', ja: '海雲台の夜', zh: '海云台晚报', en: 'Dinner at Haeundae' }, q: '해운대', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '호텔 밖으로 나가 바다를 보며 저녁. 조개구이와 회, 밀면이 이 동네 기본입니다.', ja: 'ホテルから出て海を見て夕方。貝焼きと刺身、小麦麺がこの町の基本です。', zh: '在酒店外面吃晚饭，看海。烤蛤蜊、生鱼和面条是这个街区的主食。', en: 'Out for dinner facing the water — grilled shellfish, sashimi and cold noodles are the local set.' } },
      { phase: 'return', time: '21:00', name: { ko: '해변 야경 · 객실', ja: 'ビーチ夜景 · 客室', zh: '海滩夜景·房间', en: 'Beach at night & the room' }, q: '해운대해수욕장', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '모래사장을 한 번 더 걷고 들어갑니다. 1박으로 늘리면 다음 날 아침 일출까지 볼 수 있어요.', ja: '砂浜をもう一度歩いて入ります。 1泊に増やすと、翌朝の日の出まで見ることができます。', zh: '我又在沙滩上散步了。如果延长到1晚，第二天早上就可以看到日出。', en: 'One more turn on the sand, then in. Stretch it to a night and you can catch sunrise from the room.' } }
    ]
  },
  conds: [
    { k: { ko: '예약', ja: '予約', zh: '预约', en: 'Booking' }, v: { ko: '주말은 2~3주 전 마감, 평일이 20~30% 저렴', ja: '週末は2〜3週間前締め切り、平日は20〜30％安い', zh: '周末提前2-3周关闭，工作日便宜20-30%。', en: 'Weekends sell out two to three weeks ahead; weekdays run 20–30% less' } },
    { k: { ko: '당일', ja: '当日', zh: '同一天', en: 'Same day' }, v: { ko: '데이유즈 상품 여부와 입실 시간 확인', ja: 'デイユーズ商品の有無と入室時間の確認', zh: '检查日用产品的供应情况和入住时间', en: 'Check whether day-use is offered and from when' } },
    { k: { ko: '준비', ja: '準備', zh: '准备', en: 'Bring' }, v: { ko: '수영복·수영모·선크림, 사우나 이용 여부', ja: '水着・水泳母・サンクリーム、サウナ利用可', zh: '提供泳衣、泳帽、防晒霜、桑拿', en: 'Swimsuit, cap, sun cream; check sauna access' } }
  ],
  places: [
    { name: { ko: '해운대 오션뷰 호텔', ja: '海雲台オーシャンビューホテル', zh: '海云台海景酒店', en: 'Haeundae ocean-view hotels' }, region: 'gyeongsang', q: '해운대 호텔', note: { ko: '바다 정면 객실은 비싸지만 이 코스의 핵심입니다.', ja: '海の正面の部屋は高価ですが、このコースの中核です。', zh: '海滨房间价格昂贵，但这是本课程的亮点。', en: 'Front-row sea rooms cost more and are the point of the route.' } },
    { name: { ko: '송정·달맞이', ja: '松井・月見', zh: '松亭·迎月吉', en: 'Songjeong & Dalmaji' }, region: 'gyeongsang', q: '송정해수욕장', note: { ko: '해운대보다 한적한 바다와 언덕 호텔.', ja: '海雲台より静かな海と丘のホテル。', zh: '比海云台更安静的海山酒店。', en: 'A quieter beach and hillside hotels than Haeundae.' } },
    { name: { ko: '서울 도심 호텔', ja: 'ソウル市内中心部のホテル', zh: '首尔市中心酒店', en: 'Central Seoul hotels' }, region: 'capital', q: '서울 호텔', note: { ko: '광화문·을지로 쪽은 도보 관광과 함께 쓰기 좋습니다.', ja: '光化門・乙支路の方は徒歩観光と一緒に使いやすいです。', zh: '光化门和乙支路非常适合步行游览。', en: 'Gwanghwamun and Euljiro work well with sightseeing on foot.' } },
    { name: { ko: '한강뷰 호텔', ja: '漢江ビューホテル', zh: '汉江景观酒店', en: 'Han river-view hotels' }, region: 'capital', q: '한강뷰 호텔', note: { ko: '여의도·용산 쪽 객실에서 강과 다리를 봅니다.', ja: '汝矣島・龍山側の客室で川と橋を眺めます。', zh: '从汝矣岛/龙山一侧的房间可以看到河流和桥梁。', en: 'Rooms in Yeouido and Yongsan look onto the river and bridges.' } },
    { name: { ko: '경주 보문단지', ja: '慶州普門団地', zh: '庆州普门园区', en: 'Gyeongju Bomun resort area' }, region: 'gyeongsang', q: '보문관광단지', note: { ko: '호수를 끼고 리조트가 모여 있습니다.', ja: '湖を挟んでリゾートが集まっています。', zh: '度假村聚集在湖的周围。', en: 'Resorts gathered around a lake.' } },
    { name: { ko: '제주 중문 리조트', ja: '済州中文リゾート', zh: '济州中文度假村', en: 'Jeju Jungmun resorts' }, region: 'jeju', q: '중문관광단지', note: { ko: '바다와 곶자왈 사이의 대형 리조트 지구.', ja: '海と岬ジャワルの間の大きなリゾート地区。', zh: '位于大海和 Gotjawal 之间的大型度假区。', en: 'A resort district between the sea and the lava forest.' } },
    { name: { ko: '여수 오션뷰 호텔', ja: '麗水オーシャンビューホテル', zh: '丽水海景酒店', en: 'Yeosu ocean-view hotels' }, region: 'jeolla', q: '여수 호텔', note: { ko: '밤바다와 케이블카가 보이는 객실.', ja: '夜の海とケーブルカーが見える客室です。', zh: '房间可以看到夜海和缆车。', en: 'Rooms over the night sea and the cable car.' } },
    { name: { ko: '속초·양양 리조트', ja: '束草・陽陽リゾート', zh: '束草·襄阳度假村', en: 'Sokcho & Yangyang resorts' }, region: 'gangwon', q: '속초 리조트', note: { ko: '설악산과 바다를 한 번에. 온천 딸린 곳이 많습니다.', ja: '雪岳山と海を一度に。温泉付きの場所がたくさんあります。', zh: '雪岳山和大海融为一体。有很多地方都有温泉。', en: 'Mountain and sea together, often with a hot spring attached.' } },
    { name: { ko: '평창 리조트', ja: '平昌リゾート', zh: '平昌度假村', en: 'Pyeongchang resorts' }, region: 'gangwon', q: '평창 리조트', note: { ko: '여름엔 골프와 산책, 겨울엔 스키.', ja: '夏にはゴルフや散歩、冬にはスキー。', zh: '夏天打高尔夫球和散步，冬天滑雪。', en: 'Golf and walks in summer, skiing in winter.' } },
    { name: { ko: '대구 도심 호텔', ja: '大邱市内中心部のホテル', zh: '大邱市中心酒店', en: 'Daegu city hotels' }, region: 'gyeongsang', q: '대구 호텔', note: { ko: '도심 쇼핑과 야경을 함께.', ja: '市内のショッピングと夜景を一緒に。', zh: '城市购物与夜景融为一体。', en: 'City shopping and night views together.' } },
    { name: { ko: '전주 한옥 스테이', ja: '全州韓屋ステイ', zh: '全州韩屋住宿', en: 'Jeonju hanok stays' }, region: 'jeolla', q: '전주 한옥스테이', note: { ko: '마루에서 자는 작은 한옥 숙소.', ja: '床に寝る小さな韓屋宿。', zh: '一种小型韩屋住宿，您可以睡在地板上。', en: 'Small hanok houses where you sleep on the wooden floor.' } },
    { name: { ko: '부산 서면 비즈니스 호텔', ja: '釜山西面ビジネスホテル', zh: '釜山西面商务酒店', en: 'Seomyeon business hotels' }, region: 'gyeongsang', q: '서면 호텔', note: { ko: '가격이 낮고 교통이 편한 실속형.', ja: '価格が低く、交通が楽なストールタイプ。', zh: '实用产品，价格低廉，运输方便。', en: 'Cheaper, well connected, no view.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥐', dish: { ko: '호텔 조식 · 빵과 커피', ja: 'ホテルの朝食・パンとコーヒー', zh: '酒店早餐，面包和咖啡', en: 'Hotel breakfast · bread and coffee' }, note: { ko: '조식 포함 여부가 가격 차이를 만듭니다.', ja: '朝食を含めるかどうかは価格差を生み出します。', zh: '是否含早餐影响价格。', en: 'Breakfast included or not is where the price difference sits.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '밀면 · 국밥', ja: '押し面・クッパ', zh: '米尔面·汤包饭', en: 'Cold noodles · rice soup' }, note: { ko: '체크인 전에 가볍게.', ja: 'チェックイン前に軽く。', zh: '办理入住前先放松一下。', en: 'Something light before check-in.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍰', dish: { ko: '케이크 · 아이스크림', ja: 'ケーキ・アイスクリーム', zh: '蛋糕·冰淇淋', en: 'Cake · ice cream' }, note: { ko: '객실에서 먹을 디저트를 하나.', ja: 'お部屋で食べるデザートを一つ。', zh: '一份甜点可以在您的房间里吃。', en: 'One dessert for the room.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🦪', dish: { ko: '조개구이 · 회 · 스테이크', ja: '貝焼・刺身・ステーキ', zh: '烤蛤蜊、生鱼片、牛排', en: 'Grilled shellfish · sashimi · steak' }, note: { ko: '바다를 보는 자리에서.', ja: '海を見る席で。', zh: '从一个可以看到大海的地方。', en: 'At a table facing the water.' } }
  ],
  photos: [
    { file: 'th-hotel', cap: { ko: '바다를 보는 호텔', ja: '海を見るホテル', zh: '海景酒店', en: 'A hotel facing the sea' } },
    { file: 'th-hotel-p2', cap: { ko: '객실에서 본 노을', ja: '部屋から見た夕焼け', zh: '从房间看到的日落', en: 'Sunset from the room' } }
  ],
  tip: { ko: '데이유즈는 보통 10시~18시, 1박보다 30~50% 저렴합니다. 주말에는 조식과 수영장 시간을 미리 확인하세요.', ja: 'デイユーズは通常10時～18時、1泊より30～50%安いです。週末は朝食とプールの時間を事前に確認してください。', zh: '日间使用通常为10:00至18:00，比过夜住宿便宜30-50%。周末提前检查早餐和泳池开放时间。', en: 'Day-use usually runs 10:00–18:00 at 30–50% of an overnight. At weekends, confirm breakfast and pool hours.' }
},
/* ----------------------------------------- 12 데이트·K-뷰티 체험 */
{
  id: 'beauty', emoji: '💕', tint: '#FFC6DA',
  name: { ko: '데이트 · K-뷰티 체험', ja: 'デート・Kビューティー体験', zh: '约会·K美妆体验', en: 'Dates & K-beauty' },
  sub: { ko: '강남에서 한강까지, 둘이 걷는 하루', ja: '江南から漢江まで、ふたりで歩く一日', zh: '从江南到汉江，两个人走的一天', en: 'Gangnam to the Han, two of you walking' },
  tag: { ko: '퍼스널컬러 · 산책 · 야경', ja: 'パーソナルカラー・散歩・夜景', zh: '个人色彩·散步·夜景', en: 'Colour analysis, walks, night views' },
  intro: {
    ko: '요즘 서울 데이트의 절반은 체험입니다. 퍼스널컬러 진단을 받고, 그 결과로 옷과 화장을 골라 보고, 저녁에는 한강으로 나가는 흐름이 자연스러워요. 진단은 60~90분 예약제라 하루의 중심에 두고 나머지를 그 주위에 배치했습니다.', ja: '最近ソウルデートの半分は体験です。パーソナルカラー診断を受けて、その結果として服と化粧を選んでみて、夕方には漢江に出る流れが自然です。診断は60～90分予約制となり、一日の中心に置き、残りをその周囲に配置しました。', zh: '如今，首尔一半的约会都是关于体验。获得个人色彩诊断，根据结果选择衣服和化妆品，晚上出去汉江，感觉很自然。诊断时间安排在60到90分钟，所以我把它放在一天的中心位置，其余时间围绕它安排。',
    en: 'Half of a Seoul date now is an experience: a personal-colour analysis, then clothes and make-up chosen from the result, then the river in the evening. The session runs 60–90 minutes and needs booking, so it sits in the middle of the day with everything else around it.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '봄·가을 산책', ja: '春・秋の散歩', zh: '春季和秋季散步', en: 'Spring and autumn walks' }],
  transport: { ko: '지하철 + 도보', ja: '地下鉄＋徒歩', zh: '地铁＋步行', en: 'Subway + on foot' },
  duration: { ko: '약 10시간', ja: '約10時間', zh: '约10小时', en: 'About 10 hours' },
  hub: {
    ko: '강남역', ja: '江南駅', zh: '江南站', en: 'Gangnam Station', q: '강남역',
    note: {
      ko: '2호선과 신분당선이 만나는 곳. 퍼스널컬러 스튜디오가 모여 있는 신논현·강남 일대의 중심입니다.', ja: '2号線と身分堂線が出会う場所。パーソナルカラースタジオが集まっているシンノンヒョン・江南一帯の中心です。', zh: '2号线与新盆唐线交汇处。这里是新论岘和江南地区的中心，个人色彩工作室云集。',
      en: 'Where Line 2 meets the Shinbundang line, at the centre of the Sinnonhyeon and Gangnam studio district.'
    }
  },
  course: {
    title: { ko: '강남에서 한강까지 — 진단하고 걷고 노을 보기', ja: '江南から漢江まで — 診断して、歩いて、夕焼けを見る', zh: '从江南到汉江——做色彩诊断、散步、看晚霞', en: 'Gangnam to the Han — analyse, walk, watch the sunset' },
    meta: { ko: '7곳 · 약 10시간 · 지하철 3회', ja: '7か所・約10時間・地下鉄3回', zh: '7个地点，约10小时，乘坐3次地铁', en: '7 stops · about 10 hours · 3 subway rides' },
    steps: [
      { phase: 'start', time: '11:00', name: { ko: '강남역', ja: '江南駅', zh: '江南站', en: 'Gangnam Station' }, q: '강남역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '11시에 만나 브런치부터. 진단 전에는 화장을 평소처럼 하고 오는 게 결과가 정확합니다.', ja: '11時に会ってブランチから。診断前には化粧をいつものようにしてくるのが結果が正確です。', zh: '我们11点见面，从早午餐开始。如果在诊断前照常化妆，结果会更准确。', en: 'Meet at eleven for brunch. Come with your usual make-up — the reading is more accurate that way.' } },
      { phase: 'morning', time: '11:40', name: { ko: '퍼스널컬러 진단', ja: 'パーソナルカラー診断', zh: '个人色彩诊断', en: 'Personal-colour analysis' }, q: '강남 퍼스널컬러', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '조명 아래에서 천을 얼굴에 대 보며 톤을 찾습니다. 60~90분, 결과지를 받으면 옷 고르기가 쉬워집니다.', ja: '照明の下で布を顔に対向してトーンを探します。 60～90分、結果紙を受け取ると服の均一化が容易になります。', zh: '在灯光下将布贴在脸上，找到您的语气。 60-90分钟，一旦收到结果，选衣服就变得更容易了。', en: 'Drapes are held to your face under controlled light to find your tone; 60–90 minutes, and the report makes shopping simple.' },
        photo: 'th-beauty' },
      { phase: 'lunch', time: '13:30', name: { ko: '강남 점심', ja: '江南ランチ', zh: '江南午餐', en: 'Lunch in Gangnam' }, q: '강남역', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
        desc: { ko: '강남은 점심시간(12~13시)이 가장 붐빕니다. 13시 30분이면 한산해집니다.', ja: '江南は昼休み（12～13時）が一番賑わいます。 13時30分なら寒山になります。', zh: '午餐时间（中午12点至13点）江南区最为拥挤。 13点30分左右就安静下来了。', en: 'Gangnam peaks at lunch (12–13:00); by half past one it empties.' } },
      { phase: 'afternoon', time: '14:30', name: { ko: '신사동 가로수길', ja: '新沙洞カロスギル', zh: '新沙洞林荫树路', en: 'Garosu-gil, Sinsa' }, q: '가로수길', move: { ko: '지하철 약 15분', ja: '地下鉄約15分', zh: '乘坐地铁约15分钟', en: 'Subway, about 15 min' },
        desc: { ko: '은행나무 그늘 아래 옷가게와 작은 전시가 이어집니다. 진단 결과로 색을 골라 보세요.', ja: 'イチョウの木陰の下の洋服店と小さな展示が続きます。診断結果で色を選んでください。', zh: '银杏树荫下有一家服装店和一个小型展览。根据您的诊断结果选择颜色。', en: 'Clothes shops and small exhibitions under the ginkgoes — try the colours your report suggested.' } },
      { phase: 'afternoon', time: '16:00', name: { ko: '봉은사', ja: 'ボンウンサ', zh: '奉恩寺', en: 'Bongeunsa Temple' }, q: '봉은사', move: { ko: '지하철 약 20분', ja: '地下鉄約20分', zh: '乘坐地铁约20分钟', en: 'Subway, about 20 min' },
        desc: { ko: '도심 한가운데의 절. 마당에 앉아 있으면 소음이 한 겹 걷힙니다.', ja: '都心の真ん中の寺。庭に座ると、騒音が一重歩きます。', zh: '一座位于城市中心的寺庙。坐在院子里可以消除一层噪音。', en: 'A temple in the middle of the city; sit in the yard and one layer of noise lifts.' } },
      { phase: 'evening', time: '17:20', name: { ko: '코엑스 · 별마당', ja: 'COEX・別庭', zh: 'COEX·碧马堂', en: 'COEX & Starfield Library' }, q: '코엑스', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '높은 책장 아래에서 사진 한 장. 주말 오후에는 사람이 많으니 평일 저녁이 좋습니다.', ja: '高い本棚の下から一枚の写真。週末の午後には人が多いので、平日の夕方が良いです。', zh: '高书架下的一张照片。周末下午人很多，所以工作日晚上比较好。', en: 'One photograph beneath the tall shelves; weekday evenings are quieter than weekend afternoons.' } },
      { phase: 'evening', time: '18:30', name: { ko: '한강 반포', ja: '漢江バンポ', zh: '汉江半坡', en: 'Banpo on the Han' }, q: '반포한강공원', move: { ko: '지하철 약 20분', ja: '地下鉄約20分', zh: '乘坐地铁约20分钟', en: 'Subway, about 20 min' },
        desc: { ko: '해 질 무렵 강바람과 다리 조명. 달빛무지개분수는 계절 운영이라 시간을 확인하세요.', ja: '夕暮れ時の川風と橋の照明。月明かりの虹の噴水は季節運営なので時間を確認してください。', zh: '河风和日落时桥的灯光。月光彩虹喷泉按季节开放，因此请检查时间。', en: 'River wind and bridge lights at dusk; the rainbow fountain is seasonal, so check its hours.' },
        photo: 'th-beauty-p2' },
      { phase: 'return', time: '20:30', name: { ko: '강남역', ja: '江南駅', zh: '江南站', en: 'Gangnam Station' }, q: '강남역', move: { ko: '지하철 약 20분', ja: '地下鉄約20分', zh: '乘坐地铁约20分钟', en: 'Subway, about 20 min' },
        desc: { ko: '9호선에서 2호선으로 한 번. 저녁은 강남에서 마무리합니다.', ja: '9号線から2号線で一度。夕方は江南で仕上げます。', zh: '从9号线到2号线一次。晚上在江南结束。', en: 'Line 9 to Line 2, one change; finish with dinner in Gangnam.' } }
    ]
  },
  conds: [
    { k: { ko: '예약', ja: '予約', zh: '预约', en: 'Booking' }, v: { ko: '퍼스널컬러 1인 5~15만원 · 주말은 1~2주 전 마감', ja: 'パーソナルカラー1人5～15万ウォン・週末は1～2週間前締め切り', zh: '个人色彩50,000-150,000韩元/人 · 周末提前1-2周关闭', en: '₩50,000–150,000 per person; weekends book out one to two weeks ahead' } },
    { k: { ko: '진단 전', ja: '診断前', zh: '诊断前', en: 'Before the session' }, v: { ko: '평소 화장·민낯 중 선택, 흰 옷이 결과 보기 편함', ja: '普段の化粧・すっきりの選択、白い服が結果見やすさ', zh: '选择化妆或素颜，白色衣服更容易看到效果', en: 'Come as you normally are; white clothing makes the draping easier to see' } },
    { k: { ko: '동반', ja: '同伴', zh: '伴随', en: 'Together' }, v: { ko: '커플·친구 동반 가능, 2인 패키지가 많은 편', ja: 'カップル・友達同伴可能、2人パッケージが多い方', zh: '允许情侣和朋友入住，大多数套餐可供2人使用。', en: 'Couples and friends are welcome; many studios offer two-person packages' } }
  ],
  places: [
    { name: { ko: '강남 퍼스널컬러 스튜디오', ja: '江南パーソナルカラースタジオ', zh: '江南个人色彩工作室', en: 'Gangnam colour studios' }, region: 'capital', q: '강남 퍼스널컬러', note: { ko: '신논현·강남역 일대에 집중. 예약제 60~90분.', ja: 'シンノンヒョン・江南駅一帯に集中。予約制60～90分。', zh: '重点关注新论岘和江南站地区。需要预约，60至90分钟。', en: 'Clustered around Sinnonhyeon and Gangnam; 60–90 minutes, by booking.' } },
    { name: { ko: '신사동 가로수길', ja: '新沙洞カロスギル', zh: '新沙洞林荫树路', en: 'Garosu-gil' }, region: 'capital', q: '가로수길', note: { ko: '산책과 쇼핑을 같이. 오후 햇빛이 좋습니다.', ja: '散歩やショッピングなど。午後は日光が良いです。', zh: '一起散步、逛街。午后的阳光真好。', en: 'A walk and shopping in one; the afternoon light is best.' } },
    { name: { ko: '청담 뷰티 거리', ja: '清潭美容通り', zh: '清潭美容街', en: 'Cheongdam beauty street' }, region: 'capital', q: '청담동', note: { ko: '향수·스킨케어 매장이 모인 거리.', ja: '香水・スキンケア店が集まった街。', zh: '一条充满香水和护肤品商店的街道。', en: 'A street of fragrance and skincare stores.' } },
    { name: { ko: '성수동', ja: 'ソンスドン', zh: '圣水洞', en: 'Seongsu-dong' }, region: 'capital', q: '성수동', note: { ko: '오래된 공장을 고친 공간과 작은 편집숍.', ja: '古い工場を修理したスペースと小さな編集ショップ。', zh: '由旧工厂和小型精选店改造而成的空间。', en: 'Old factories turned into studios and small shops.' } },
    { name: { ko: '익선동 한옥골목', ja: '益善洞韓屋路地', zh: '益善洞韩屋胡同', en: 'Ikseon-dong' }, region: 'capital', q: '익선동', note: { ko: '한옥 사이 골목, 저녁 데이트에 좋습니다.', ja: '韓屋間の路地、夜のデートに最適です。', zh: '韩屋之间的小巷非常适合晚餐约会。', en: 'Alleys between hanok houses — good in the evening.' } },
    { name: { ko: '봉은사', ja: 'ボンウンサ', zh: '奉恩寺', en: 'Bongeunsa' }, region: 'capital', q: '봉은사', note: { ko: '도심 사찰. 템플스테이와 차담 프로그램도 있습니다.', ja: '都心の寺院。テンプルステイやチャダムプログラムもあります。', zh: '都市寺庙。还有寺庙住宿和茶旦项目。', en: 'A city temple with templestay and tea programmes.' } },
    { name: { ko: '코엑스 아쿠아리움', ja: 'COEXアクアリウム', zh: 'COEX水族馆', en: 'COEX Aquarium' }, region: 'capital', q: '코엑스 아쿠아리움', note: { ko: '실내 데이트 대안. 비 오는 날 좋습니다.', ja: '屋内デートの代替。雨の日はいいですね。', zh: '室内约会替代方案。下雨天还是不错的。', en: 'An indoor option for a rainy day.' } },
    { name: { ko: '서울스카이', ja: 'ソウルスカイ', zh: '首尔天空', en: 'Seoul Sky' }, region: 'capital', q: '롯데월드타워 서울스카이', note: { ko: '잠실 555m 전망대, 해 질 무렵이 좋습니다.', ja: '蚕室555m展望台、夕暮れ時は良いです。', zh: '蚕室555m展望台在日落时最美。', en: 'The 555 m observatory at Jamsil, best at sunset.' } },
    { name: { ko: '남산 케이블카', ja: '南山ケーブルカー', zh: '南山缆车', en: 'Namsan cable car' }, region: 'capital', q: '남산케이블카', note: { ko: '야경 데이트의 고전. 주말 저녁은 줄이 깁니다.', ja: '夜景デートの古典。週末の夕方は並んでいます。', zh: '经典的夜景约会。周末晚上排队的队伍很长。', en: 'The classic night-view date; weekend queues are long.' } },
    { name: { ko: '한강 유람선', ja: '漢江クルーズ船', zh: '汉江游船', en: 'Han river cruise' }, region: 'capital', q: '한강유람선', note: { ko: '여의도·잠실 선착장에서 40~60분 코스.', ja: '汝矣島・蚕室船着場から40～60分コース。', zh: '从汝矣岛/蚕室码头出发约40-60分钟。', en: 'Forty to sixty minutes from Yeouido or Jamsil piers.' } },
    { name: { ko: '부산 흰여울', ja: '釜山白瀬', zh: '釜山惠尼耶尔', en: 'Huinnyeoul, Busan' }, region: 'gyeongsang', q: '흰여울문화마을', note: { ko: '바다를 보는 절벽길, 해 질 무렵.', ja: '海を見る崖の道、夕暮れ頃。', zh: '悬崖路俯瞰大海，日落时分。', en: 'A cliff path over the water at dusk.' } },
    { name: { ko: '제주 카멜리아힐', ja: '済州カメリアヒル', zh: '济州山茶花山', en: 'Camellia Hill, Jeju' }, region: 'jeju', q: '카멜리아힐', note: { ko: '겨울 동백 정원. 사진 찍기 좋은 동선.', ja: '冬のツバキの庭。写真を撮るのに最適な銅線。', zh: '冬天的山茶园。不错的拍照路线。', en: 'A winter camellia garden laid out for photographs.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥐', dish: { ko: '브런치 · 커피', ja: 'ブランチ・コーヒー', zh: '早午餐·咖啡', en: 'Brunch · coffee' }, note: { ko: '11시에 만나 브런치로 시작.', ja: '11時に会ってブランチでスタート。', zh: '我们十一点见面，先吃早午餐。', en: 'Meet at eleven over brunch.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '냉면 · 파스타 · 덮밥', ja: '冷麺・パスタ・丼', zh: '冷面、面食、盖饭', en: 'Cold noodles · pasta · rice bowl' }, note: { ko: '13시 30분 이후가 한산합니다.', ja: '13時30分以降は空いています。', zh: '下午一点半以后人少。', en: 'After half past one it quiets down.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍰', dish: { ko: '케이크 · 마카롱 · 아이스크림', ja: 'ケーキ・マカロン・アイスクリーム', zh: '蛋糕、马卡龙、冰淇淋', en: 'Cake · macarons · ice cream' }, note: { ko: '가로수길에서 하나씩 골라 보세요.', ja: '並木道から一つずつ選んでみてください。', zh: '从林荫树路选一处。', en: 'Pick one each on Garosu-gil.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍷', dish: { ko: '이자카야 안주 · 파스타 · 고기', ja: '居酒屋 おつまみ・パスタ・肉', zh: '居酒屋小吃、面食、肉类', en: 'Izakaya plates · pasta · grilled meat' }, note: { ko: '한강 산책 뒤에는 강남에서 마무리.', ja: '漢江散歩の後ろは江南で仕上げ。', zh: '沿着汉江走完，我们就到了江南。', en: 'After the river, finish in Gangnam.' } }
  ],
  photos: [
    { file: 'th-beauty', cap: { ko: '진단을 받는 자리', ja: '診断を受ける場所', zh: '获得诊断的地方', en: 'In the colour-analysis chair' } },
    { file: 'th-beauty-p2', cap: { ko: '해 질 무렵의 도심', ja: '夕暮れ時の都心', zh: '日落时的市中心', en: 'The city at dusk' } }
  ],
  tip: { ko: '진단은 오전이 가장 정확합니다. 피곤하거나 술을 마신 다음 날은 피하세요.', ja: '診断は午前が最も正確です。疲れたり酒を飲んだ翌日は避けてください。', zh: '早上的诊断最准确。避免在疲倦时或饮酒后第二天服用。', en: 'Morning sessions read most accurately; avoid the day after drinking or a bad night.' }
},
/* ------------------------------------------ 13 K-드라마·영화 촬영지 */
{
  id: 'drama', emoji: '🎬', tint: '#C9B6F5',
  name: { ko: 'K-드라마 · 영화 촬영지', ja: 'Kドラマ・映画ロケ地', zh: '韩剧·电影拍摄地', en: 'K-drama & film locations' },
  sub: { ko: '화면 속 거리를 실제로 걷는 하루', ja: '画面の街を実際に歩く一日', zh: '真的走进屏幕里那条街的一天', en: 'Walking the streets you saw on screen' },
  tag: { ko: '촬영지 · 세트장 · 옛 거리', ja: 'ロケ地・セット・古い街', zh: '拍摄地·布景·老街', en: 'Sets, locations, old streets' },
  intro: {
    ko: '드라마 촬영지는 두 종류입니다. 실제 거리를 그대로 쓰는 곳과, 세트장을 지어 놓은 곳. 실제 거리는 사람이 살아서 낮에 좋고, 세트장은 시대를 통째로 옮겨 놓아서 사진이 잘 나옵니다. 여기서는 순천에서 둘 다 보는 하루를 잡았어요. 오전에 세트장, 오후에 실제 갈대밭과 바다입니다.', ja: 'ドラマ撮影地は二種類です。実際の通りをそのまま使うところと、セット場を建てたところ。実際の距離は人が生きて昼間に良く、セット場は時代を丸ごと移しておいて写真がよく出てきます。ここでは順天で両方見る一日をとりました。午前中にセット場、午後には実際の葦畑と海です。', zh: '电视剧的拍摄地点有两种。一个地方使用实际的街道，其他地方则搭建了一套。白天的实际街道很好，因为有人住在那里，而且布景来自不同的时代，所以照片效果很好。在这里，我们安排了一天去顺天看看。上午的布景，下午的实际芦苇地和大海。',
    en: 'There are two kinds of location: a real street used as it is, and a set built for the camera. Real streets are lived-in and best by day; sets move a whole era and photograph beautifully. This day in Suncheon does both — the set in the morning, the real reeds and sea in the afternoon.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '가을 갈대', ja: '秋の葦', zh: '秋天的芦苇', en: 'Autumn reeds' }],
  transport: { ko: 'KTX + 버스', ja: 'KTX＋バス', zh: 'KTX＋巴士', en: 'KTX + bus' },
  duration: { ko: '약 9시간', ja: '約9時間', zh: '约9小时', en: 'About 9 hours' },
  hub: {
    ko: '순천역', ja: '順天駅', zh: '顺天站', en: 'Suncheon Station', q: '순천역',
    note: {
      ko: 'KTX 전라선. 용산에서 2시간 40분. 역에서 촬영장까지 버스로 15분, 순천만까지 30분입니다.', ja: 'KTX全羅線。龍山から2時間40分。駅から撮影場までバスで15分、順天湾まで30分です。', zh: 'KTX全罗线。距离龙山2小时40分钟。从车站乘坐巴士到拍摄地需要15分钟，到顺天湾需要30分钟。',
      en: 'On the KTX Jeolla line, two hours forty from Yongsan. The film set is 15 minutes by bus, the bay thirty.'
    }
  },
  course: {
    title: { ko: '순천 — 세트장에서 갈대밭 노을까지', ja: '順天 — セット場から葦原の夕焼けまで', zh: '顺天——从拍摄场地到芦苇荡晚霞', en: 'Suncheon — film set to reeds at sunset' },
    meta: { ko: '6곳 · 약 9시간 · 버스 3회', ja: '6か所・約9時間・バス3回', zh: '6个地点，约9小时，3辆巴士', en: '6 stops · about 9 hours · 3 buses' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '순천역', ja: '順天駅', zh: '顺天站', en: 'Suncheon Station' }, q: '순천역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역에서 촬영장 방면 버스로. 짐은 역 보관함에 맡기세요.', ja: '駅から撮影場方面バスで。荷物は駅のロッカーに預けてください。', zh: '从车站乘坐公交车前往拍摄地。请将行李寄存在车站储物柜内。', en: 'A bus to the film set from outside; leave the bag in a station locker.' } },
      { phase: 'morning', time: '10:00', name: { ko: '순천드라마촬영장', ja: '順天ドラマ撮影場', zh: '顺天电视剧拍摄地', en: 'Suncheon drama set' }, q: '순천드라마촬영장', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
        desc: { ko: '1960~80년대 순천 읍내와 서울 달동네를 재현한 세트. 교복 대여와 옛 골목 체험이 있습니다.', ja: '1960～80年代順天邑内とソウルのダルドンネを再現したセット。制服レンタルと旧路地体験があります。', zh: '再现20世纪60年代至80年代顺天市和首尔棚户区的场景。有校服出租和老巷子体验。', en: 'Sets recreating a 1960s–80s country town and a Seoul hillside neighbourhood, with school-uniform rental.' },
        photo: 'th-drama' },
      { phase: 'lunch', time: '12:00', name: { ko: '순천 시내 점심', ja: '順天市内ランチ', zh: '在顺天市中心享用午餐', en: 'Lunch in town' }, q: '순천시', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
        desc: { ko: '순천은 국밥과 백반, 벌교 짱뚱어탕이 유명합니다. 시내 골목 안쪽이 한산합니다.', ja: '順天はクッパや白斑、蜂蜜ちゃんぽん湯が有名です。市内路地の内側が寒山です。', zh: '顺天市以汤、白米饭和Beolgyo Jjangtungeotang而闻名。城内的小巷很安静。', en: 'Suncheon is known for rice soup, set rice tables and mudskipper stew from Beolgyo.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '순천만국가정원', ja: '順天万国家庭園', zh: '顺天湾国家花园', en: 'Suncheon Bay National Garden' }, q: '순천만국가정원', move: { ko: '버스 약 25분', ja: 'バス約25分', zh: '巴士约25分钟', en: 'Bus, about 25 min' },
        desc: { ko: '세계 각국의 정원이 이어집니다. 입구에서 지도 한 장을 받아 동선을 정하세요.', ja: '世界各国の庭園が続いています。入り口で指導一枚を受けて銅線を決めてください。', zh: '来自世界各地的花园紧随其后。在入口处拿一张地图并决定您的路线。', en: 'Gardens from around the world; take a map at the gate and choose a route.' },
        photo: 'th-drama-p2' },
      { phase: 'afternoon', time: '15:30', name: { ko: '순천만습지', ja: '順天万湿地', zh: '顺天湾湿地', en: 'Suncheon Bay wetland' }, q: '순천만습지', move: { ko: '버스 약 15분', ja: 'バス約15分', zh: '巴士约15分钟', en: 'Bus, about 15 min' },
        desc: { ko: '갈대밭 사이로 난 데크길. S자 물길과 갈대가 이 동네의 사진입니다.', ja: '葦畑の間に出たデッキ道。 S字水道と葦がこの近所の写真です。', zh: '芦苇田之间的甲板小路。这是这个街区的照片，有S形水道和芦苇。', en: 'A boardwalk through the reeds — the S-shaped channel and the reeds are the photograph of this place.' } },
      { phase: 'evening', time: '17:20', name: { ko: '와온해변 노을', ja: 'ワオンビーチの夕焼け', zh: '瓦恩海滩日落', en: 'Sunset at Waon beach' }, q: '와온해변', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '갯벌 위로 해가 내려앉는 곳. 물때를 확인하면 물이 거울처럼 남습니다.', ja: '干潟の上に太陽が降る場所。水の時を確認すると、水が鏡のように残ります。', zh: '太阳落在泥滩上的地方。如果你检查刻度，水会保持像镜子一样。', en: 'The sun drops onto the tidal flats; check the tide and the water stays like a mirror.' } },
      { phase: 'return', time: '19:00', name: { ko: '순천역', ja: '順天駅', zh: '顺天站', en: 'Suncheon Station' }, q: '순천역', move: { ko: '차 약 25분', ja: '車約25分', zh: '车程约25分钟', en: 'Drive, about 25 min' },
        desc: { ko: '역으로 돌아와 저녁. 막차 시간은 미리 확인하세요.', ja: '駅に戻って夕方。最後の時間は事前に確認してください。', zh: '返回车站并吃晚饭。提前查询末班车时间。', en: 'Back to the station for dinner; check the last train ahead.' } }
    ]
  },
  conds: [
    { k: { ko: '촬영장', ja: '撮影場', zh: '拍摄地点', en: 'Sets' }, v: { ko: '입장료 3,000~5,000원, 촬영이 있을 때 일부 구역 통제', ja: '入場料3,000～5,000ウォン、撮影がある時、一部エリア統制', zh: '入场费：3,000~5,000韩元；拍摄期间某些区域受到限制。', en: 'Entry ₩3,000–5,000; parts close when filming is under way' } },
    { k: { ko: '물때', ja: '水の時', zh: '潮汐', en: 'Tide' }, v: { ko: '갯벌·바다 촬영지는 물때표 확인 필수', ja: '干潟・海の撮影地は潮見表確認必須', zh: '对于滩涂和海洋拍摄地点，检查潮汐表非常重要。', en: 'For flats and sea locations, check the tide table' } },
    { k: { ko: '예절', ja: '礼儀', zh: '礼仪', en: 'Respect' }, v: { ko: '주거지 촬영지는 조용히, 주차는 지정된 곳에', ja: '住宅地の撮影地は静かに、駐車場は指定された場所に', zh: '住宅拍摄场地安静，停车场位于指定区域。', en: 'Quiet in residential locations; park only where allowed' } }
  ],
  places: [
    { name: { ko: '순천드라마촬영장', ja: '順天ドラマ撮影場', zh: '顺天电视剧拍摄地', en: 'Suncheon drama set' }, region: 'jeolla', q: '순천드라마촬영장', note: { ko: '1960~80년대 옛 거리 세트. 교복 대여.', ja: '1960～80年代の旧ストリートセット。制服レンタル。', zh: '老街的背景是20世纪60年代至80年代。校服出租。', en: 'A 1960s–80s street set, with school-uniform rental.' } },
    { name: { ko: '합천영상테마파크', ja: 'ハプチョンビデオテーマパーク', zh: '陕川影视主题公园', en: 'Hapcheon image theme park' }, region: 'gyeongsang', q: '합천영상테마파크', note: { ko: '경성과 1950~80년대 서울 거리 재현.', ja: '京城と1950～80年代のソウル街再現。', zh: '再现了1950年代至1980年代的京城和首尔街道。', en: 'Recreated Gyeongseong and mid-century Seoul streets.' } },
    { name: { ko: '군산 시간여행마을', ja: '群山時間旅行村', zh: '群山时光旅行村', en: 'Gunsan time-travel village' }, region: 'jeolla', q: '군산 시간여행마을', note: { ko: '일본식 가옥과 근대 골목. 실제 거리 촬영지.', ja: '和風家屋と近代路地。実際の距離撮影地。', zh: '日式房屋和现代小巷。实际街头拍摄地点。', en: 'Japanese-era houses and modern alleys — a real street location.' } },
    { name: { ko: '양양 주문진 방파제', ja: '陽陽呪文防波堤', zh: '襄阳注文津防波堤', en: 'Jumunjin breakwater' }, region: 'gangwon', q: '주문진 방파제', note: { ko: '바다로 뻗은 방파제. 아침 빛이 좋습니다.', ja: '海に広がる防波堤。朝の光が良いです。', zh: '延伸到海里的防波堤。早晨的光线很好。', en: 'A breakwater running into the sea, best in morning light.' } },
    { name: { ko: '강릉 경포해변', ja: '江陵慶浦ビーチ', zh: '江陵镜浦海水浴场', en: 'Gyeongpo beach' }, region: 'gangwon', q: '경포해변', note: { ko: '모래사장과 소나무 숲이 배경.', ja: '砂浜と松林の背景。', zh: '背景是沙滩和松树林。', en: 'Sand and pine forest as a backdrop.' } },
    { name: { ko: '전주한옥마을', ja: '全州韓屋村', zh: '全州韩屋村', en: 'Jeonju hanok village' }, region: 'jeolla', q: '전주한옥마을', note: { ko: '기와지붕 골목. 한복 대여가 많습니다.', ja: '瓦屋根の路地。韓服レンタルが多いです。', zh: '瓦顶小巷。有很多韩服可供出租。', en: 'Tiled-roof alleys with plenty of hanbok rental.' } },
    { name: { ko: '서울 북촌', ja: 'ソウル北村', zh: '北村, 首尔', en: 'Bukchon, Seoul' }, region: 'capital', q: '북촌한옥마을', note: { ko: '주거지라 조용히. 오전이 한산합니다.', ja: '住宅だから静かに。午前は寒山です。', zh: '这是住宅区，所以要安静。早上很安静。', en: 'A residential area — quiet, and emptiest in the morning.' } },
    { name: { ko: '남산골한옥마을', ja: '南山ゴール韓屋村', zh: '南山谷韩屋村', en: 'Namsangol hanok village' }, region: 'capital', q: '남산골한옥마을', note: { ko: '도심 안의 한옥 다섯 채와 정원.', ja: '都心の中の韓屋五軒と庭園。', zh: '市中心有五间韩屋和一个花园。', en: 'Five hanok houses and a garden in the city centre.' } },
    { name: { ko: '인천 개항장거리', ja: '仁川開港長距離', zh: '仁川开港口长街', en: 'Incheon open port street' }, region: 'capital', q: '인천 개항장거리', note: { ko: '근대 건축과 일본식 골목.', ja: '近代建築と和風路地。', zh: '现代建筑和日式胡同。', en: 'Modern-era buildings and Japanese-style lanes.' } },
    { name: { ko: '제주 우도', ja: '済州ウド', zh: '济州牛岛', en: 'Udo, Jeju' }, region: 'jeju', q: '우도', note: { ko: '섬 전체가 배경. 배로 15분.', ja: '島全体の秋の背景。船で15分。', zh: '整个岛屿都在背景中。乘船15分钟。', en: 'A whole island for a backdrop, fifteen minutes by ferry.' } },
    { name: { ko: '문경새재', ja: 'ムンギョンセジェ', zh: '闻庆新斋', en: 'Mungyeong Saejae' }, region: 'gyeongsang', q: '문경새재', note: { ko: '옛길과 성문. 사극 촬영지로 자주 쓰입니다.', ja: '昔の道と城門。時代劇の撮影地としてよく使われます。', zh: '老路和门。它经常被用作历史剧的拍摄地点。', en: 'An old road and gate, often used for period drama.' } },
    { name: { ko: '파주 헤이리', ja: '坡州ヘイリ', zh: '坡州海里', en: 'Heyri, Paju' }, region: 'capital', q: '헤이리예술마을', note: { ko: '예술 마을의 건축과 골목.', ja: '芸術村の建築と路地。', zh: '艺术村的建筑和小巷。', en: 'Art-village buildings and lanes.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '국밥 · 해장국', ja: 'クッパ・ヘジャングク', zh: '汤饭·解酒汤', en: 'Rice soup · hangover soup' }, note: { ko: '역 근처에서 뜨끈하게.', ja: '駅近くで熱く。', zh: '车站附近很热。', en: 'Something hot near the station.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍚', dish: { ko: '순천 백반 · 짱뚱어탕', ja: '順天白斑・ちゃんぽん湯', zh: '顺天白饭·炸汤汤', en: 'Suncheon rice table · mudskipper stew' }, note: { ko: '벌교 짱뚱어탕은 이 지역 별미입니다.', ja: '蜂蜜ちゃんぽん湯はこの地域別味です。', zh: 'Beolgyo Jjangtungeotang 是当地的一道美食。', en: 'The mudskipper stew from Beolgyo is the local speciality.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍡', dish: { ko: '옛날 과자 · 달고나', ja: '昔のお菓子・ダルゴナ', zh: '老小吃·达尔戈纳', en: 'Old-fashioned sweets · dalgona' }, note: { ko: '세트장 안에서 추억 간식.', ja: 'セット場の中で思い出のおやつ。', zh: '片场令人难忘的小吃。', en: 'Nostalgic sweets inside the set.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🦀', dish: { ko: '꽃게탕 · 해물찜', ja: '花ゲタン・シーフード蒸し', zh: '炖螃蟹·清蒸海鲜', en: 'Blue crab stew · braised seafood' }, note: { ko: '순천만 근처에서 해산물로.', ja: '順天湾近くからシーフードへ。', zh: '顺天湾附近的海鲜。', en: 'Seafood near the bay.' } }
  ],
  photos: [
    { file: 'th-drama', cap: { ko: '촬영장의 옛 거리', ja: '撮影現場の古い通り', zh: '拍摄地的老街', en: 'An old street on the film set' } },
    { file: 'th-drama-p2', cap: { ko: '갈대밭의 물길', ja: '葦畑の水道', zh: '芦苇田里的水道', en: 'The channel through the reeds' } }
  ],
  tip: { ko: '세트장은 오전이 한산하고 사진이 잘 나옵니다. 실제 촬영이 있는 날은 일부 구역이 막히니 공지 확인은 필수.', ja: 'セット場は午前が寒山で写真がよく出てきます。実際の撮影がある日は一部区域が詰まるので、お知らせの確認は必須。', zh: '早上片场很安静，照片拍得很好。实际拍摄期间，部分区域会被封锁，请务必查看通知。', en: 'Sets are quietest and photograph best in the morning; check the notice, as filming closes sections.' }
},
/* ---------------------------------------------------- 14 반려견 동반 */
{
  id: 'dog', emoji: '🐶', tint: '#FFD9A0',
  name: { ko: '반려견 동반', ja: '犬と一緒に', zh: '携宠同行', en: 'Travelling with your dog' },
  sub: { ko: '목줄 하나로 떠나는 하루', ja: 'リード一本で出かける一日', zh: '一条牵引绳就出发的一天', en: 'A day out on the lead' },
  tag: { ko: '반려견 해변 · 놀이터 · 산책로', ja: '犬と入れる海辺・遊び場・散歩道', zh: '可带狗的海滩·游乐场·散步道', en: 'Dog beaches, parks, forest paths' },
  intro: {
    ko: '반려견 여행에서 가장 중요한 건 도착지가 아니라 조건입니다. 입장 가능한 구역, 체중 제한, 실내 출입 여부, 목줄·이동장 규정이 장소마다 다릅니다. 여기서는 조건이 비교적 명확한 춘천 강아지숲을 중심으로 하루를 짰어요. 해변과 숲, 놀이터는 아래 목록에서 골라 다녀오세요.', ja: 'ペット犬旅行で最も重要なのは、到着地ではなく条件です。入場可能な区域、体重制限、室内出入可否、首筋・移動場規定が場所によって異なります。ここでは条件が比較的明確な春川子犬の森を中心に一日を絞ります。ビーチと森、遊び場は以下のリストから選んでください。', zh: '带狗狗旅行时，最重要的不是目的地，而是条件。进入区域、重量限制、室内通道以及皮带和背带规定因地点而异。在这里，我计划在春川狗林周围度过一天，那里的条件相对较好。从下面的列表中选择海滩、森林或游乐场。',
    en: 'With a dog the conditions matter more than the destination: which areas admit dogs, weight limits, indoor access, lead and carrier rules — they differ place by place. This day is built around the dog park at Chuncheon, where the rules are clear. Beaches, forests and playgrounds are listed below.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '여름 해변', ja: '夏のビーチ', zh: '夏季海滩', en: 'Summer beaches' }],
  transport: { ko: '전철 + 택시', ja: '電車＋タクシー', zh: '地铁＋出租车', en: 'Metro + taxi' },
  duration: { ko: '약 7시간', ja: '約7時間', zh: '约7小时', en: 'About 7 hours' },
  hub: {
    ko: '춘천역', ja: '春川駅', zh: '春川站', en: 'Chuncheon Station', q: '춘천역',
    note: {
      ko: '경춘선·ITX-청춘. 서울 용산에서 1시간 10분. 반려견과 함께 탈 때는 이동장 또는 목줄을 확인하고, 역에서 강아지숲까지 택시로 20분입니다.', ja: '慶春線・ITX-青春。ソウル龍山から1時間10分。ペットと一緒に乗るときは、移動場や首筋を確認し、駅から犬の森までタクシーで20分です。', zh: '京春线·ITX-清春。距离首尔龙山1小时10分钟。与您的狗一起骑行时，请确保它有背带或皮带。从车站乘坐出租车到狗森林需要20分钟。',
      en: 'ITX-Cheongchun from Yongsan in seventy minutes. Check the carrier and lead rules for the train; the dog park is twenty minutes by taxi from the station.'
    }
  },
  course: {
    title: { ko: '춘천 — 강아지숲에서 의암호 산책까지', ja: '春川 — わんこの森から衣岩湖の散歩まで', zh: '春川——从狗狗森林到衣岩湖散步', en: 'Chuncheon — dog park to the Uiam lakeside' },
    meta: { ko: '5곳 · 약 7시간 · 택시 2회', ja: '5か所・約7時間・タクシー2回', zh: '5个地点，约7小时，乘坐2次出租车', en: '5 stops · about 7 hours · 2 taxi rides' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '춘천역', ja: '春川駅', zh: '春川站', en: 'Chuncheon Station' }, q: '춘천역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '물과 배변봉투, 수건을 챙겼는지 확인하고 택시로 이동합니다. 대형견은 택시 승차 전에 알려 주세요.', ja: '水と排便袋、タオルを持っていることを確認し、タクシーに行きます。大型犬はタクシー乗車前に教えてください。', zh: '确保带上水、便便袋和毛巾，然后乘坐出租车。如果您有大型犬，请在搭乘出租车前告知我们。', en: 'Check water, bags and a towel, then take a taxi; tell the driver in advance if the dog is large.' } },
      { phase: 'morning', time: '10:30', name: { ko: '강아지숲', ja: '子犬の森', zh: '小狗森林', en: 'Dog forest park' }, q: '강아지숲', move: { ko: '택시 약 20분', ja: 'タクシー約20分', zh: '出租车约20分钟', en: 'Taxi, about 20 min' },
        desc: { ko: '반려견 전용 테마파크. 운동장과 산책로, 계절별 수영장이 있고, 입장 전 예방접종 확인을 합니다.', ja: 'ペット犬専用テーマパーク。運動場や遊歩道、季節別プールがあり、入場前に予防接種確認をします。', zh: '专为狗狗打造的主题公园。有游乐场、步行道、季节性游泳池，进入前要检查疫苗接种情况。', en: 'A park built for dogs: exercise yards, paths and a seasonal pool, with vaccination checks at the gate.' },
        photo: 'th-dog' },
      { phase: 'lunch', time: '13:00', name: { ko: '춘천 시내 점심', ja: '春川市内ランチ', zh: '在春川市中心享用午餐', en: 'Lunch in Chuncheon' }, q: '춘천', move: { ko: '택시 약 20분', ja: 'タクシー約20分', zh: '出租车约20分钟', en: 'Taxi, about 20 min' },
        desc: { ko: '춘천은 닭갈비와 막국수. 실내 동반이 안 되는 곳이 많으니 테라스 자리를 미리 확인하세요.', ja: '春川はチキンリブとマクグクス。室内の同伴ができない場所が多いので、テラス席を事前に確認してください。', zh: '春川是炸鸡排和麻糖酥。有很多地方不允许客人进入室内，因此请提前检查露台座位。', en: 'Chuncheon runs on chicken galbi and buckwheat noodles; many rooms do not admit dogs, so ask about a terrace.' } },
      { phase: 'afternoon', time: '14:30', name: { ko: '의암호 산책로', ja: '義岩湖遊歩道', zh: '义岩湖步道', en: 'Uiam lakeside path' }, q: '의암호', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '호수를 끼고 난 넓은 길. 목줄을 하고 걷기 좋고, 물놀이는 금지 구역을 확인하세요.', ja: '湖を挟んで私は広い道。首輪をして歩きやすく、水遊びの禁止区域を確認してください。', zh: '湖边有一条宽阔的马路。请检查哪些区域可以用皮带牵引安全行走，哪些区域禁止玩水。', en: 'A wide path along the lake — good on a lead; check where swimming is off limits.' },
        photo: 'th-dog-p2' },
      { phase: 'afternoon', time: '16:00', name: { ko: '공지천 산책', ja: 'お知らせ布散歩', zh: '沿着孔之川散步', en: 'Gongjicheon walk' }, q: '공지천', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '도심 하천을 따라 이어지는 산책로. 그늘이 많아 오후에 걷기 좋습니다.', ja: '都心河川沿いに続く遊歩道。日陰が多く、午後に歩くのに最適です。', zh: '沿着市中心河流的步行道。树荫很多，非常适合下午散步。', en: 'A path along the stream through town, well shaded for the afternoon.' } },
      { phase: 'return', time: '17:30', name: { ko: '춘천역', ja: '春川駅', zh: '春川站', en: 'Chuncheon Station' }, q: '춘천역', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '역으로 돌아와 귀가. 열차 안에서는 이동장 또는 안아서, 다른 승객과의 거리를 지키세요.', ja: '駅に戻って帰り。電車の中では、移動場または抱きしめて、他の乗客との距離を守ってください。', zh: '返回车站并返回家中。在火车上时，通过携带或拥抱来与其他乘客保持距离。', en: 'Back to the station; on the train keep the dog in a carrier or your arms, with space from other passengers.' } }
    ]
  },
  conds: [
    { k: { ko: '체중', ja: '体重', zh: '重量', en: 'Weight' }, v: { ko: '5kg·10kg·15kg 제한이 흔함, 대형견 전용 구역 확인', ja: '5kg・10kg・15kg制限が一般的で、大型犬専用区域の確認', zh: '常见的限制为5公斤、10公斤和15公斤；检查大型犬的专用区域。', en: 'Limits of 5, 10 or 15 kg are common; check for large-dog areas' } },
    { k: { ko: '실내', ja: '屋内', zh: '室内的', en: 'Indoors' }, v: { ko: '식당·카페 대부분 실내 불가, 야외석만 가능', ja: '食堂・カフェほとんど室内不可、屋外席のみ可能', zh: '大多数餐馆和咖啡馆不允许进入室内，只允许户外座位。', en: 'Most restaurants and cafés allow dogs only at outdoor tables' } },
    { k: { ko: '목줄', ja: 'リード', zh: '牵引绳', en: 'Lead' }, v: { ko: '전 구역 목줄 필수(놀이터 예외), 이동장 준비', ja: '全ゾーンネックレス必須（遊び場例外）、移動場準備', zh: '所有区域（游乐场除外）均需拴绳，并提供交通设施。', en: 'Lead required everywhere except fenced runs; bring a carrier' } },
    { k: { ko: '준비물', ja: '準備', zh: '你需要什么', en: 'Bring' }, v: { ko: '예방접종 증명, 배변봉투, 물·식기, 수건', ja: '予防接種証明、排便袋、水・食器、タオル', zh: '疫苗接种证明、粪便袋、水、餐具、毛巾', en: 'Vaccination record, waste bags, water and bowl, towel' } }
  ],
  places: [
    { name: { ko: '강아지숲', ja: '子犬の森', zh: '小狗森林', en: 'Dog forest park' }, region: 'gangwon', q: '강아지숲', note: { ko: '춘천. 반려견 전용 테마파크, 운동장·수영장·전시.', ja: '春川。ペット犬専用テーマパーク、運動場・水泳場・展示。', zh: '春川。一个专门为狗、游乐场、游泳池和展览而设的主题公园。', en: 'Chuncheon: a theme park for dogs with runs, a pool and exhibitions.' } },
    { name: { ko: '오산반려동물테마파크', ja: 'オサンペット動物テーマパーク', zh: '乌山宠物主题公园', en: 'Osan pet theme park' }, region: 'capital', q: '오산반려동물테마파크', note: { ko: '경기 오산. 놀이와 교육 프로그램.', ja: '試合の誤算。遊びと教育プログラム。', zh: '京畿道乌山市。游戏和教育项目。', en: 'Osan: play areas and training programmes.' } },
    { name: { ko: '인천대공원 반려견놀이터', ja: '仁川大公園ペット犬遊び場', zh: '仁川大公园狗狗游乐场', en: 'Incheon Grand Park dog run' }, region: 'capital', q: '인천대공원 반려견놀이터', note: { ko: '무료 야외 놀이터, 목줄 해제 구역 별도.', ja: '無料の屋外遊び場、ネックライン解除ゾーンは別途。', zh: '免费的室外游乐场，独立的免拴绳区域。', en: 'A free outdoor run with a separate off-lead area.' } },
    { name: { ko: '멍비치', ja: 'マンビーチ', zh: '猛海滩', en: 'Meong Beach' }, region: 'gangwon', q: '멍비치', note: { ko: '양양. 반려견 전용 해변, 여름 시즌 운영.', ja: 'ヤンヤン。ペット犬専用ビーチ、夏シーズン運営。', zh: '阳阳。仅限狗入内的海滩，夏季开放。', en: 'Yangyang: a dog-only beach, open in the summer season.' } },
    { name: { ko: '명사해수욕장', ja: '名詞海水浴場', zh: '明沙海滩', en: 'Myeongsa Beach' }, region: 'gyeongsang', q: '명사해수욕장', note: { ko: '거제. 반려견 해수욕 운영 사례가 있는 해변.', ja: '巨済。ペット犬海水浴の運営事例があるビーチ。', zh: '巨济。曾有狗狗洗澡事件发生的海滩。', en: 'Geoje: a beach with a history of dog-friendly bathing.' } },
    { name: { ko: '안목해변', ja: '目のビーチ', zh: '安木海滩', en: 'Anmok Beach' }, region: 'gangwon', q: '안목해변', note: { ko: '강릉. 산책과 바다, 여름엔 펫 비치 운영.', ja: '江陵。散歩や海、夏にはペットビーチ運営。', zh: '江陵。散步和大海，夏天还有宠物海滩。', en: 'Gangneung: a walk and the sea, with a pet beach in summer.' } },
    { name: { ko: '꽃지해수욕장', ja: '花地海水浴場', zh: '科奇海滩', en: 'Ggotji Beach' }, region: 'jeolla', q: '꽃지해수욕장', note: { ko: '태안. 넓은 모래사장과 노을.', ja: '泰安。広い砂浜と夕焼け。', zh: '泰安。宽阔的沙滩和日落。', en: 'Taean: wide sand and a famous sunset.' } },
    { name: { ko: '신두리해수욕장', ja: 'シンドゥリビーチ', zh: '辛杜里海滩', en: 'Sinduri Beach' }, region: 'jeolla', q: '신두리해수욕장', note: { ko: '태안. 모래언덕과 긴 해변.', ja: '泰安。砂丘と長いビーチ。', zh: '泰安。沙丘和长长的海滩。', en: 'Taean: dunes and a long shore.' } },
    { name: { ko: '와온해변', ja: 'ワオンビーチ', zh: '瓦恩海滩', en: 'Waon Beach' }, region: 'jeolla', q: '와온해변', note: { ko: '순천. 갯벌과 일몰, 물때 확인.', ja: '順天。干潟と夕日、水の中で確認。', zh: '顺天。检查潮滩、日落和潮汐时间。', en: 'Suncheon: tidal flats and sunset; check the tide.' } },
    { name: { ko: '해파랑길 44·45코스', ja: 'クラゲギル44・45コース', zh: 'Haeparang 路44和45路线', en: 'Haeparang trail 44–45' }, region: 'gangwon', q: '해파랑길', note: { ko: '양양·속초 해안 도보 구간. 목줄 필수.', ja: '陽陽・束草海岸徒歩区間。ネックライン必須。', zh: '襄阳-束草海岸步行段。需要皮带。', en: 'Coastal walking between Yangyang and Sokcho; lead required.' } },
    { name: { ko: '남해 다랭이마을', ja: '南海ダランイ村', zh: '南海Daraengi村', en: 'Namhae Darangyi village' }, region: 'gyeongsang', q: '다랭이마을', note: { ko: '계단식 논과 바다. 좁은 길은 안고 가세요.', ja: 'カスケード水田と海。狭い道は抱きしめてください。', zh: '梯田和大海。与你一起走窄路。', en: 'Terraced paddies above the sea; carry the dog on the narrow steps.' } },
    { name: { ko: '국립천관산자연휴양림', ja: '国立天関山自然休養林', zh: '国立青冠山自然休养林', en: 'Cheongwansan recreational forest' }, region: 'jeolla', q: '천관산자연휴양림', note: { ko: '장흥. 반려견 동반 가능 숙소와 숲길.', ja: 'チャン・フン。ペット同伴可能な宿泊施設と森の道。', zh: '长兴.适合携带宠物狗的住宿和森林步道。', en: 'Jangheung: dog-friendly rooms and forest paths.' } },
    { name: { ko: '계족산 황톳길', ja: 'ゲジョクサンファントギル', zh: '鸡足山黄土路', en: 'Gyejoksan red-clay path' }, region: 'jeolla', q: '계족산 황톳길', note: { ko: '대전. 맨발 산책로 옆 숲길을 함께 걷습니다.', ja: '大田。裸足の遊歩道の横にある森の道を一緒に歩きます。', zh: '大田。我们一起走在赤脚小道旁边的林间小道上。', en: 'Daejeon: forest paths beside the barefoot clay trail.' } },
    { name: { ko: '보문관광단지', ja: '普門観光団地', zh: '普门旅游园区', en: 'Bomun resort area' }, region: 'gyeongsang', q: '보문관광단지', note: { ko: '경주. 호수 둘레 산책로와 반려동물 동반 숙소.', ja: '慶州。湖周辺の遊歩道とペット同伴の宿泊施設。', zh: '庆州。湖边的步道和宠物友好的住宿。', en: 'Gyeongju: lakeside paths and dog-friendly stays.' } },
    { name: { ko: '예당호 출렁다리', ja: 'イェダンホ', zh: '礼堂湖吊桥', en: 'Yedangho suspension bridge' }, region: 'jeolla', q: '예당호출렁다리', note: { ko: '예산. 호수 전망과 산책, 야간 경관.', ja: '予算。湖の景色と散歩、夜景。', zh: '预算。湖景、散步、夜景。', en: 'Yesan: a lake view, a walk and night lighting.' } },
    { name: { ko: '임실 오수의견관광지', ja: '臨室汚水意見観光地', zh: '任实奥苏民俗旅游胜地', en: 'Imsil dog memorial site' }, region: 'jeolla', q: '오수의견관광지', note: { ko: '오수개 설화와 반려동물 문화 공간.', ja: '五つの物語とペットの文化空間。', zh: '大须盖民间故事和宠物文化的空间。', en: 'The Osu dog legend and a companion-animal culture site.' } },
    { name: { ko: '의성 펫월드', ja: '義城ペットワールド', zh: '义城宠物世界', en: 'Uiseong Pet World' }, region: 'gyeongsang', q: '의성 펫월드', note: { ko: '반려견 중심 테마 공간, 대형견도 가능.', ja: 'ペット犬中心のテーマ空間、大型犬も可能。', zh: '以狗为中心的主题空间，也欢迎大型犬。', en: 'A dog-centred park that also admits large breeds.' } },
    { name: { ko: 'PTP 애견테마파크', ja: 'PTP愛犬テーマパーク', zh: 'PTP狗狗主题公园', en: 'PTP dog park' }, region: 'jeolla', q: 'PTP 애견테마파크', note: { ko: '익산. 대형견 이용 가능한 반려견 공간.', ja: '益山。大型犬利用可能なペット犬スペース。', zh: '益山。可供大型犬使用的狗空间。', en: 'Iksan: a park that takes large dogs.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥪', dish: { ko: '토스트 · 김밥', ja: 'トースト・キンバップ', zh: '吐司·紫菜包饭', en: 'Toast · kimbap' }, note: { ko: '이동 전에 가볍게, 강아지 물도 챙기세요.', ja: '移動前に軽く、子犬の水も取り出してください。', zh: '搬家之前，一定要给你的狗带一些水。', en: 'Something light before travelling; water for the dog too.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍗', dish: { ko: '닭갈비 · 막국수', ja: 'チキンリブ・マクグクス', zh: '炒鸡排·真苦水', en: 'Chicken galbi · buckwheat noodles' }, note: { ko: '야외석이 있는 곳을 고르세요.', ja: '屋外席がある場所を選んでください。', zh: '选择一个有户外座位的地方。', en: 'Choose a place with outdoor tables.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍠', dish: { ko: '군고구마 · 삶은 닭가슴살(강아지)', ja: 'サツマイモ・ゆで鶏胸肉（子犬）', zh: '烤红薯·水煮鸡胸肉（狗）', en: 'Roast sweet potato · boiled chicken for the dog' }, note: { ko: '기름진 음식은 피하세요.', ja: '脂っこい食べ物は避けてください。', zh: '避免脂肪食物。', en: 'Keep the dog away from fatty food.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍲', dish: { ko: '국밥 · 찜닭', ja: 'クッパ・蒸し鶏', zh: '汤包·姜达克', en: 'Rice soup · braised chicken' }, note: { ko: '돌아와서 실내에서 천천히.', ja: '帰ってきて屋内でゆっくり。', zh: '回来在室内慢慢来。', en: 'Back home, eat indoors at ease.' } }
  ],
  photos: [
    { file: 'th-dog', cap: { ko: '반려견과 걷는 길', ja: 'ペットと歩く道', zh: '与狗一起行走的小路', en: 'Walking with the dog' } },
    { file: 'th-dog-p2', cap: { ko: '해변의 반려견', ja: 'ビーチのペット犬', zh: '海滩上的狗', en: 'A dog on the beach' } }
  ],
  tip: { ko: '대부분의 관광지는 목줄과 배변봉투를 확인합니다. 체중 제한은 시설마다 달라 방문 전 전화가 가장 확실합니다.', ja: 'ほとんどの観光地は首輪と排便袋を確認します。体重制限は施設によって異なり、訪問前の電話が最も確実です。', zh: '大多数旅游景点都会检查皮带和垃圾袋。重量限制因设施而异，因此最好在参观前致电。', en: 'Almost everywhere checks lead and bags. Weight limits vary by venue — a phone call is the surest check.' }
},
/* ------------------------------------------- 15 혼자 떠나는 마음 치유 */
{
  id: 'healing', emoji: '🧘', tint: '#B9EBD6',
  name: { ko: '혼자 떠나는 마음 치유', ja: 'ひとり旅の心癒し', zh: '独自出发的心灵疗愈', en: 'A quiet day for the mind' },
  sub: { ko: '말하지 않고 걷고 쉬는 하루', ja: '話さずに歩いて休む一日', zh: '不说话，只是走路、休息的一天', en: 'A day of walking and resting, unspeaking' },
  tag: { ko: '명상 · 숲 · 템플스테이 · 차', ja: '瞑想・森・テンプルステイ・茶', zh: '冥想·森林·寺院寄宿·茶', en: 'Meditation, forest, temples, tea' },
  intro: {
    ko: '마음 치유 여행은 경치 좋은 곳을 찾는 일이 아닙니다. 호흡을 고르고, 숲을 걷고, 차를 마시고, 아무것도 하지 않는 시간을 하루에 넣는 일이에요. 여기서는 영주 풍기에서 시작하는 숲 치유 하루를 기본 코스로 잡았습니다. 아래에 여덟 가지 세부 유형과 전국 20곳을 정리했으니, 오늘 내게 필요한 유형부터 골라 보세요.', ja: '心の癒しの旅は景色の良い場所を見つけることではありません。呼吸を選んで、森を歩いて、お茶を飲んで、何もしない時間を一日に入れる事です。ここでは、永住風気から始まる森の癒しの一日を基本コースとして捉えました。以下に8つの詳細タイプと全国20カ所をまとめたので、今日私に必要なタイプから選んでみてください。', zh: '治愈心灵的旅程并不是寻找一个美丽的地方。它是关于呼吸、在森林中散步、喝茶，以及在一天中抽出时间什么也不做。在这里，我们选择了从瀛州丰基出发的森林治愈日作为基本路线。我们在下面整理了8种详细类型和全国20个地点，因此请立即选择您需要的类型。',
    en: 'A healing trip is not about a beautiful view. It is about putting breathing, a forest walk, a cup of tea and an hour of doing nothing into one day. This route starts at Punggi in Yeongju, built around forest therapy. Below are eight kinds of healing trip and twenty places across the country — start from the kind you need today.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울', ja: '冬', zh: '冬天', en: 'Winter' }],
  transport: { ko: '기차 + 버스·택시', ja: '列車＋バス・タクシー', zh: '火车＋巴士·出租车', en: 'Train + bus or taxi' },
  duration: { ko: '약 9시간', ja: '約9時間', zh: '约9小时', en: 'About 9 hours' },
  hub: {
    ko: '풍기역', ja: '風機駅', zh: '丰基站', en: 'Punggi Station', q: '풍기역',
    note: {
      ko: '중앙선 기차역. 서울 청량리에서 무궁화로 2시간 남짓. 역에서 국립산림치유원까지 차로 10분, 부석사까지 20분입니다. 프로그램은 예약제이니 미리 신청하세요.', ja: '中央線駅。ソウル清涼里からムグンファで2時間余り。駅から国立山林治癒園まで車で10分、釜石寺まで20分です。プログラムは予約制ですので、事前にお申し込みください。', zh: '中央线火车站。从首尔清凉里到木槿花大约需要2小时。从车站开车10分钟即可到达国家森林疗养中心，20分钟即可到达浮石寺。该项目需要预约，因此请提前申请。',
      en: 'A Jungang line station, a little over two hours from Cheongnyangni. The forest therapy centre is ten minutes by car, Buseoksa twenty. Programmes are booked in advance.'
    }
  },
  course: {
    title: { ko: '풍기 — 숲에서 시작해 절에서 끝나는 하루', ja: '豊基 — 森で始まり寺で終わる一日', zh: '丰基——从森林开始、在寺庙结束的一天', en: 'Punggi — a day that starts in forest and ends at a temple' },
    meta: { ko: '6곳 · 약 9시간 · 차 2회', ja: '6か所・約9時間・車2回', zh: '6个地点，约9小时，自驾2次', en: '6 stops · about 9 hours · 2 drives' },
    steps: [
      { phase: 'start', time: '09:00', name: { ko: '풍기역', ja: '風機駅', zh: '丰基站', en: 'Punggi Station' }, q: '풍기역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역에서 산림치유원으로. 아침에는 말을 아끼고 걸음만 세어 보세요. 그것으로 시작입니다.', ja: '駅から森林治癒園へ。朝は馬を惜しんで歩くだけを数えてみてください。それから始まります。', zh: '从车站到森林疗愈中心。早上，不要说话，只数步数。这就是开始。', en: 'From the station to the forest centre. Keep quiet on the way and count your steps; that is enough of a start.' } },
      { phase: 'morning', time: '09:40', name: { ko: '국립산림치유원', ja: '国立山林治癒園', zh: '国家森林疗愈中心', en: 'National forest therapy centre' }, q: '국립산림치유원', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '숲 활동 60분과 아쿠아테라피로 구성된 예약 프로그램. 해설사가 호흡과 걷기를 안내합니다.', ja: '森活動60分とアクアセラピーからなる予約プログラム。解説者が呼吸と歩行を案内します。', zh: '预约项目包括60分钟的森林活动和水疗。导游将指导您呼吸和行走。', en: 'A booked programme of sixty minutes of forest work and aqua therapy, guided through breath and walking.' },
        photo: 'th-healing' },
      { phase: 'lunch', time: '12:00', name: { ko: '풍기 시내 점심', ja: '風機ダウンタウンランチ', zh: '丰基市午餐', en: 'Lunch in Punggi' }, q: '풍기', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '풍기는 인삼과 한우로 알려진 동네. 혼자여도 한 상 차려 주는 집이 많습니다.', ja: '豊かな人参と韓牛として知られる町。一人でも一賞を置く家が多いです。', zh: '以香人参和韩国牛肉而闻名的小镇。即使你一个人，很多房子也会为你准备一张桌子。', en: 'Punggi is ginseng and beef country; plenty of places will set a table for one.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '부석사', ja: '副石寺', zh: '浮石寺', en: 'Buseoksa Temple' }, q: '부석사', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '무량수전 마루에 앉아 마당을 봅니다. 사진은 밖에서, 안에서는 조용히.', ja: '無量受電の床に座って庭を見てください。写真は外から、中では静かに。', zh: '我坐在无量水殿的地板上，眺望着院子。外面拍照，里面安静。', en: 'Sit on the Muryangsujeon veranda and look at the courtyard; photographs outside, quiet inside.' },
        photo: 'th-healing-p2' },
      { phase: 'afternoon', time: '15:20', name: { ko: '소수서원', ja: '少数書院', zh: '素水书院', en: 'Sosu Seowon' }, q: '소수서원', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '우리나라 첫 서원. 숲과 물길 사이에 앉아 책 한 장을 읽거나 일기를 씁니다.', ja: '韓国初の書院。森と水道の間に座って本を読んだり、日記を書く。', zh: '韩国第一书院。坐在森林和水道之间，阅读一本书的一章或写下日记。', en: 'The country\u2019s first Confucian academy — sit between the trees and the water with a book or a notebook.' } },
      { phase: 'afternoon', time: '16:40', name: { ko: '풍기 시내 차 한 잔', ja: '風機のダウンタウンの紅茶のカップ', zh: '丰吉市的一杯茶', en: 'A cup of tea in town' }, q: '풍기', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
        desc: { ko: '하루의 마무리는 차 한 잔. 휴대전화는 가방에 넣고 30분만 두세요.', ja: '一日の仕上げはお茶一杯。携帯電話はバッグに入れて30分だけ置いてください。', zh: '以一杯茶结束一天。将手机放入包中并放置30分钟。', en: 'Finish with tea; put the phone in the bag for thirty minutes.' } },
      { phase: 'return', time: '18:00', name: { ko: '풍기역', ja: '風機駅', zh: '丰基站', en: 'Punggi Station' }, q: '풍기역', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '역으로 돌아와 기차. 창밖을 보며 오늘 걸은 것을 다시 한 번 떠올려 보세요.', ja: '駅に戻って電車。窓の外を見て、今日歩いたことをもう一度思い出してみてください。', zh: '返回车站并乘坐火车。看看窗外，再想想你今天走过的路。', en: 'Back to the station for the train; watch the window and run the day through once more.' } }
    ]
  },
  subs: {
    title: { ko: '마음 치유 여행 여덟 가지', ja: '心癒しの旅8', zh: '心灵疗愈旅行八种', en: 'Eight kinds of quiet trip' },
    items: [
      { emoji: '🌬️', name: { ko: '명상 · 호흡', ja: '瞑想・呼吸', zh: '冥想·呼吸', en: 'Meditation & breath' }, desc: { ko: '호흡과 마음챙김으로 내면에 집중합니다. 처음이면 30분 프로그램부터.', ja: '呼吸と心取りで内面に集中します。初めてなら30分プログラムから。', zh: '通过呼吸和正念集中注意力。如果您是第一次，请从30分钟的节目开始。', en: 'Breath and mindfulness, inward. Start with a thirty-minute session.' } },
      { emoji: '🌲', name: { ko: '숲속 치유', ja: '森の癒し', zh: '森林疗愈', en: 'Forest therapy' }, desc: { ko: '피톤치드와 산림욕. 걷는 속도만 늦춰도 효과가 다릅니다.', ja: 'ピトンチッドと森林浴。歩く速度だけ遅くしても効果が異なります。', zh: '芬多精和森林浴。即使只是放慢步行速度，效果也会不一样。', en: 'Phytoncides and forest air — slowing the pace alone changes it.' } },
      { emoji: '🛕', name: { ko: '템플스테이', ja: 'テンプルステイ', zh: '寺庙住宿', en: 'Templestay' }, desc: { ko: '예불·참선·차담. 1박 2일이 기본이지만 당일 체험도 있습니다.', ja: '予払・参船・チャダム。 1泊2日が基本ですが、当日体験もあります。', zh: '祈祷服务、冥想、茶道。基本方案为2天1夜，但也提供一日体验。', en: 'Chanting, sitting, tea. Two days is standard, with day programmes too.' } },
      { emoji: '🍵', name: { ko: '차 명상', ja: 'お茶瞑想', zh: '茶禅', en: 'Tea meditation' }, desc: { ko: '다도와 차 한 잔의 고요. 하동·보성 같은 차 산지가 좋습니다.', ja: '茶道とお茶のカップの静けさ。河東・宝城のような茶産地が良いです。', zh: '一场茶道，一杯茶的寂静。河东、宝城等茶叶产区都不错。', en: 'The quiet of a tea ceremony — tea country such as Hadong or Boseong suits it.' } },
      { emoji: '🌊', name: { ko: '바다 마음 치유', ja: '海の心の癒し', zh: '海心疗愈', en: 'Sea for the mind' }, desc: { ko: '파도 소리와 해변 걷기. 몽돌해변의 돌 구르는 소리가 대표적입니다.', ja: '波の音とビーチを歩きます。モンドールビーチの石転がる音が代表的です。', zh: '海浪声和在海滩上行走的声音。 Mongdol海滩的滚石声就是一个典型的例子。', en: 'Waves and a beach walk; the rolling stones of a pebble beach are the classic sound.' } },
      { emoji: '🧎', name: { ko: '요가 · 몸과 마음', ja: 'ヨガ・体と心', zh: '瑜伽·身体与心灵', en: 'Yoga & the body' }, desc: { ko: '요가와 스트레칭으로 몸부터 풉니다. 리조트·웰니스 시설에 많습니다.', ja: 'ヨガとストレッチで体から緩めます。リゾート・ウェルネス施設に多いです。', zh: '首先通过瑜伽和伸展运动放松身体。有许多度假村和健康设施。', en: 'Yoga and stretching to loosen the body first, common at resorts.' } },
      { emoji: '🔔', name: { ko: '소리 치유', ja: 'サウンドヒーリング', zh: '声音治愈', en: 'Sound healing' }, desc: { ko: '싱잉볼과 사운드 배스. 누워서 소리만 듣는 시간.', ja: 'シンイングボールとサウンドバス。横になって音だけ聞く時間。', zh: '颂钵和音浴。是时候躺下来听听声音了。', en: 'Singing bowls and sound baths — lying down, only listening.' } },
      { emoji: '📖', name: { ko: '독서 · 사색', ja: '読書・思索', zh: '阅读·沉思', en: 'Reading & reflection' }, desc: { ko: '독서와 일기, 자기 성찰. 서원·정원·도서관이 어울립니다.', ja: '読書と日記、自己洞察。書院・庭園・図書館が似合います。', zh: '读书、写日记、自我反思。书院、花园、图书馆都适合。', en: 'Books, a notebook, reflection — academies, gardens and libraries.' } }
    ]
  },
  conds: [
    { k: { ko: '예약', ja: '予約', zh: '预约', en: 'Booking' }, v: { ko: '산림치유·템플스테이는 예약제, 주말은 2주 전 마감', ja: '森林癒し・テンプルステイは予約制、週末は2週間前締め切り', zh: '森林疗愈和寺庙住宿需要预约，周末提前两周关闭', en: 'Forest therapy and templestay need booking; weekends close two weeks out' } },
    { k: { ko: '비용', ja: '費用', zh: '费用', en: 'Cost' }, v: { ko: '숲길·사찰 산책은 무료~5,000원, 프로그램 2~10만원', ja: '森道・査察散策は無料～5,000ウォン、プログラム2～10万ウォン', zh: '森林步道和寺庙散步免费 - 5,000韩元，项目费用为20,000 - 100,000韩元。', en: 'Forest paths and temples ₩0–5,000; programmes ₩20,000–100,000' } },
    { k: { ko: '숙박', ja: '宿泊', zh: '住宿', en: 'Staying over' }, v: { ko: '당일 가능, 1박으로 늘리면 아침 명상까지', ja: '当日可能、1泊に増やすと朝瞑想まで', zh: '当天可用，如果延长至1晚，您甚至可以享受早晨冥想。', en: 'Day visits work; a night adds the morning sitting' } },
    { k: { ko: '주의', ja: '注意', zh: '小心', en: 'Note' }, v: { ko: '치료가 아닌 휴식·성찰의 여행입니다. 몸이 아프면 병원이 먼저입니다.', ja: '治療ではなく休息・省察の旅です。体が痛くなったら、病院が最初です。', zh: '这是一个休息和反思的旅程，而不是治疗的旅程。如果你生病了，请先去医院。', en: 'This is rest and reflection, not treatment; if you are ill, a doctor comes first' } }
  ],
  places: [
    { hot: true, name: { ko: '로미지안 가든', ja: 'ロミジアンガーデン', zh: '罗梅恩花园', en: 'Romian Garden' }, region: 'gangwon', q: '로미지안가든', note: { ko: '정선. 산과 정원을 따라 걷는 자연 명상. 혼자 조용히 생각을 정리하기 좋습니다.', ja: 'チョンソン。山と庭に沿って歩く自然瞑想。一人で静かに思考を整理することをお勧めします。', zh: '贞善。沿着山峦和花园漫步的自然冥想。这是一个安静的独处时间来整理你的思绪。', en: 'Jeongseon: a garden set into a mountain for walking meditation — good for sorting out thoughts alone.' } },
    { hot: true, name: { ko: '깊은산속 옹달샘', ja: '深い山のオンダルサム', zh: '深山里的瓮达泉', en: 'Deep Mountain Spring' }, region: 'jeolla', q: '깊은산속 옹달샘', note: { ko: '제천. 통나무 명상·걷기 명상·요가. 숙박형 프로그램이 중심입니다.', ja: '済川。丸太瞑想・歩く瞑想・ヨガ。宿泊型プログラムが中心です。', zh: '堤川。日志冥想、步行冥想、瑜伽。重点是住宿计划。', en: 'Jecheon: log meditation, walking meditation and yoga, mostly as residential programmes.' } },
    { hot: true, name: { ko: '국립산림치유원', ja: '国立山林治癒園', zh: '国家森林疗愈中心', en: 'National forest therapy centre' }, region: 'gyeongsang', q: '국립산림치유원', note: { ko: '영주. 숲 활동 60분·아쿠아테라피 등 예약 프로그램. 숙박 가능.', ja: '永住。森活動60分・アクアセラピーなど予約プログラム。宿泊可能。', zh: '永久居留权。预订计划包括60分钟的森林活动和水疗。提供住宿。', en: 'Yeongju: booked programmes of forest work and aqua therapy, with lodging.' } },
    { hot: true, name: { ko: '취다선 리조트 Tea & Meditation', ja: '就田線リゾートティー＆メディテーション', zh: 'Chwidaseon度假村茶与冥想', en: 'Chuidasun tea & meditation' }, region: 'jeju', q: '취다선', note: { ko: '제주. 차 명상과 요가 중심의 숙박형 웰니스.', ja: '済州。お茶瞑想とヨガ中心の宿泊型ウェルネス。', zh: '济州岛。住宿健康以茶禅和瑜伽为主。', en: 'Jeju: a stay built around tea meditation and yoga.' } },
    { name: { ko: '메이필드호텔 서울', ja: 'メイフィールドホテルソウル', zh: '梅菲尔德酒店 首尔', en: 'Mayfield Hotel Seoul' }, region: 'capital', q: '메이필드호텔', note: { ko: '정원 산책과 전통 공간에서의 휴식. 멀리 떠나지 않고 하루 쉬고 싶을 때.', ja: '庭の散歩と伝統的な空間でリラックス。遠く離れずに一日休みたい時。', zh: '穿过花园，在传统的空间中放松身心。当你想休息一天而不去太远的时候。', en: 'Garden walks and traditional rooms — for a day off without leaving the city.' } },
    { name: { ko: '비스타 워커힐 웰니스클럽', ja: 'ビスタウォーカーヒルウェルネスクラブ', zh: '维斯塔华克山庄养生会所', en: 'Vista Walkerhill wellness club' }, region: 'capital', q: '비스타 워커힐', note: { ko: '호텔 웰니스 시설과 휴식 프로그램.', ja: 'ホテルのウェルネス施設とリラクゼーションプログラム。', zh: '酒店的健康设施和休闲项目。', en: 'Hotel wellness facilities and rest programmes.' } },
    { name: { ko: '트리비움', ja: 'トリビウム', zh: '琐事', en: 'Trivium' }, region: 'capital', q: '트리비움', note: { ko: '경기. 2025년 신규 우수 웰니스 관광지. 운영 프로그램 확인 필요.', ja: '試合。 2025年新規優秀ウェルネス観光地。オペレーティングプログラムの確認が必要です。', zh: '游戏。 2025年新的优秀康养旅游目的地。需进行运营方案验证。', en: 'Gyeonggi: a newly listed wellness destination; confirm the programme is running.' } },
    { name: { ko: '미리내 힐빙클럽', ja: 'ミリ内ヒルビングクラブ', zh: '米里娜治疗俱乐部', en: 'Mirinae healing club' }, region: 'capital', q: '미리내 힐빙클럽', note: { ko: '양평. 자연 속 웰니스 공간에서 몸과 마음을 쉽니다.', ja: '楊平。自然の中のウェルネス空間で体と心を楽にします。', zh: '杨平.让您的身心在大自然的健康空间中得到休息。', en: 'Yangpyeong: a wellness space in nature for body and mind.' } },
    { name: { ko: '경원재 앰배서더 인천', ja: '京畿道アンバサダー仁川', zh: '庆源斋大使 仁川', en: 'Gyeongwonjae Ambassador Incheon' }, region: 'capital', q: '경원재 앰배서더', note: { ko: '한옥 스테이. 조용하고 특별한 숙박 여행.', ja: '韓屋ステイ。静かで特別な宿泊旅行。', zh: '韩屋住宿。安静而特别的一晚住宿。', en: 'A hanok stay for a quiet, particular night.' } },
    { name: { ko: '하이힐링원', ja: 'ハイヒーリングワン', zh: '高治愈一号', en: 'Hi Healing One' }, region: 'gangwon', q: '하이힐링원', note: { ko: '홍천. 산림치유와 휴식 프로그램.', ja: 'ホンチョン。森林治癒とリラクゼーションプログラム。', zh: '洪川.森林疗愈和放松计划。', en: 'Hongcheon: forest therapy and rest programmes.' } },
    { name: { ko: '하이원 리조트', ja: 'ハイワンリゾート', zh: '海一度假村', en: 'High1 Resort' }, region: 'gangwon', q: '하이원리조트', note: { ko: '정선. 산악 풍경과 숙박을 결합한 휴식.', ja: 'チョンソン。山の風景と宿泊を組み合わせたリラクゼーション。', zh: '贞善。山景与住宿相结合的休闲度假。', en: 'Jeongseon: mountain scenery with a bed.' } },
    { name: { ko: '파크로쉬 리조트앤웰니스', ja: 'パークロッシュリゾート＆ウェルネス', zh: '公园罗氏疗养度假村', en: 'Park Roche resort & wellness' }, region: 'gangwon', q: '파크로쉬', note: { ko: '정선. 요가·명상 중심의 웰니스 프로그램.', ja: 'チョンソン。ヨガ・瞑想中心のウェルネスプログラム。', zh: '贞善。以瑜伽和冥想为中心的健康计划。', en: 'Jeongseon: wellness programmes built on yoga and meditation.' } },
    { name: { ko: '뮤지엄 SAN 명상관', ja: 'ミュージアムSAN瞑想館', zh: '博物馆SAN禅堂', en: 'Museum SAN meditation hall' }, region: 'gangwon', q: '뮤지엄 SAN', note: { ko: '원주. 자연과 건축, 예술을 함께 보는 조용한 공간.', ja: '周り。自然と建築、芸術を一緒に見る静かな空間。', zh: '原州。一个可以同时看到自然、建筑和艺术的安静空间。', en: 'Wonju: nature, architecture and art in one quiet place.' } },
    { name: { ko: '국립제천치유의숲', ja: '国立除天癒しの森', zh: '国立堤川治愈林', en: 'Jecheon healing forest' }, region: 'jeolla', q: '국립제천치유의숲', note: { ko: '숲을 활용한 치유 체험. 천천히 걷고 싶은 날.', ja: '森を活用した癒し体験。ゆっくり歩きたい日。', zh: '利用森林进行治愈的体验。想要慢慢走的一天。', en: 'Forest-based therapy for a day of slow walking.' } },
    { name: { ko: '구이안덕 건강힐링체험마을', ja: 'グイアンドク健康癒し体験村', zh: '冠德健康疗愈体验村', en: 'Guian Deok healing village' }, region: 'jeolla', q: '구이안덕', note: { ko: '완주. 전통 건강 체험과 자연 휴식.', ja: '完走。伝統的な健康体験と自然リラクゼーション。', zh: '已完成。传统养生体验，自然放松。', en: 'Wanju: traditional health practices and rest.' } },
    { name: { ko: '대흥사', ja: '大興寺', zh: '大兴寺', en: 'Daeheungsa' }, region: 'jeolla', q: '대흥사', note: { ko: '해남 두륜산. 산사 명상과 숲길, 템플스테이.', ja: '海南二輪山。サンサー瞑想と森の道、テンプルステイ。', zh: '海南头云山。山寺禅修，林间小路，寺院住宿。', en: 'Haenam, on Duryunsan: temple meditation, forest paths and templestay.' } },
    { name: { ko: '정남진 편백숲 우드랜드', ja: 'チョンナムジン片白森ウッドランド', zh: '正南津柏树林林地', en: 'Jeongnamjin cypress forest' }, region: 'jeolla', q: '정남진 편백숲', note: { ko: '장흥. 편백숲 산책과 목재 체험.', ja: 'チャン・フン。片白森の散歩や木材体験。', zh: '长兴.漫步柏树林，体验木材。', en: 'Jangheung: cypress walks and wood workshops.' } },
    { name: { ko: '하동 차 문화시설', ja: '河東茶文化施設', zh: '河东茶文化设施', en: 'Hadong tea culture centres' }, region: 'gyeongsang', q: '하동 차문화', note: { ko: '다도와 차 명상. 야생차밭이 이어지는 동네.', ja: '茶道と紅茶瞑想。野生茶畑が続く町。', zh: '茶道和茶禅。附近有野生茶田。', en: 'Tea ceremony and tea meditation among wild tea fields.' } },
    { name: { ko: '숲애서', ja: '森の愛書', zh: '在森林里', en: 'Supae-seo' }, region: 'gyeongsang', q: '숲애서', note: { ko: '양산. 산림치유와 건강 프로그램을 결합한 공간.', ja: '量産。森林治癒と健康プログラムを組み合わせた空間。', zh: '阳伞。一个结合森林疗愈和健康项目的空间。', en: 'Yangsan: forest therapy combined with health programmes.' } },
    { name: { ko: '서귀포 치유의 숲', ja: '西帰浦癒しの森', zh: '西归浦治愈森林', en: 'Seogwipo healing forest' }, region: 'jeju', q: '서귀포치유의숲', note: { ko: '제주 고유의 숲 풍경과 산책로.', ja: '済州のユニークな森の風景と遊歩道。', zh: '济州岛独特的森林风景和步道。', en: 'Jeju\u2019s own forest, with walking trails.' } },
    { name: { ko: '법주사', ja: '法注射', zh: '法住寺', en: 'Beopjusa' }, region: 'jeolla', q: '법주사', note: { ko: '보은 속리산. 2박 3일 호흡 명상·108배·세조길 걷기 프로그램이 있습니다.', ja: '見たソクサン。 2泊3日呼吸瞑想・108倍・洗潮道歩行プログラムがあります。', zh: '报恩俗离山。有一个为期3天2夜的呼吸冥想、108次鞠躬和沿着 Sejo-gil 行走的项目。', en: 'Boeun, Songnisan: breath meditation, 108 bows and the Sejo path over two nights.' } },
    { name: { ko: '용연사', ja: 'ヨンヨンサ', zh: '龙渊寺', en: 'Yongyeonsa' }, region: 'gangwon', q: '용연사', note: { ko: '강릉. 치유 요가·스님과의 차담·타종 체험 프로그램.', ja: '江陵。癒しヨガ・僧侶とのチャダム・他種体験プログラム。', zh: '江陵。疗愈瑜伽、僧人茶、敲钟体验项目。', en: 'Gangneung: healing yoga, tea with a monk and bell ringing.' } },
    { name: { ko: '산청 대원사', ja: '山清大原寺', zh: '山清大院寺', en: 'Daewonsa, Sancheong' }, region: 'gyeongsang', q: '대원사', note: { ko: '아침 명상·염주 만들기·계곡 산책.', ja: '朝瞑想・塩酒作り・渓谷散策。', zh: '早晨冥想、制作念珠、在山谷中散步。', en: 'Morning sitting, bead making and a valley walk.' } },
    { name: { ko: '귀정사', ja: '帰政士', zh: '归精寺', en: 'Gwijeongsa' }, region: 'jeolla', q: '귀정사', note: { ko: '남원. 5박 6일 1인 1실 수행 프로그램으로 알려진 암자.', ja: '南原。 5泊6日1人1室遂行プログラムとして知られる暗字。', zh: '南原。该寺以6天5晚1人1室的训练计划而闻名。', en: 'Namwon: a hermitage known for a five-night solo practice programme.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥣', dish: { ko: '죽 · 산채비빔밥', ja: 'お粥・山菜ビビンバ', zh: '粥野菜拌饭', en: 'Porridge · wild-vegetable bibimbap' }, note: { ko: '사찰 음식은 맵지 않고 담백합니다.', ja: 'お寺の食べ物は辛くなく淡白です。', zh: '寺庙的食物不辣，清淡。', en: 'Temple food is mild and clean.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍲', dish: { ko: '인삼갈비탕 · 산채정식', ja: '高麗人参カルビタン・山菜定食', zh: '人参排骨汤·野菜套餐', en: 'Ginseng rib soup · wild-vegetable table' }, note: { ko: '풍기는 인삼과 산나물의 동네입니다.', ja: '風化は高麗人参と山菜の町です。', zh: '这是一个盛产人参、野菜的小镇。', en: 'Punggi is ginseng and mountain greens.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍵', dish: { ko: '차 · 약과 · 떡', ja: 'お茶・薬科・餅', zh: '茶、药、年糕', en: 'Tea · yakgwa · rice cake' }, note: { ko: '차는 천천히, 세 모금에 나눠 마십니다.', ja: 'お茶はゆっくりと、三口に分けて飲みます。', zh: '慢慢地喝茶，分三口喝。', en: 'Drink tea slowly, in three sips.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🥗', dish: { ko: '산채비빔밥 · 버섯전골', ja: '山菜ビビンバ・きのこ鍋', zh: '野菜拌饭·蘑菇火锅', en: 'Wild-vegetable bibimbap · mushroom hotpot' }, note: { ko: '가볍게 먹고 일찍 잠자리에 드세요.', ja: '軽く食べて早めに寝てください。', zh: '吃得清淡，早点睡觉。', en: 'Eat lightly and go to bed early.' } }
  ],
  photos: [
    { file: 'th-healing', cap: { ko: '숲길', ja: '森の道', zh: '森林路', en: 'A forest path' } },
    { file: 'th-healing-p2', cap: { ko: '산사의 마당', ja: '山寺の庭', zh: '山寺院子', en: 'A temple courtyard' } }
  ],
  tip: { ko: '프로그램은 대부분 예약제입니다. 혼자 참가할 수 있는지, 묵언이 가능한지 먼저 물어보면 하루가 훨씬 편안해집니다.', ja: 'プログラムはほとんど予約制です。一人で参加できるのか、黙言が可能かを最初に聞いてみると、一日がずっと快適になります。', zh: '大多数项目都需要预订。如果您先询问是否可以单独参加或是否允许保持沉默，您的一天会更加舒适。', en: 'Most programmes need booking. Ask first whether you can come alone and whether silence is kept — it changes the day.' }
},
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
    { name: { ko: '궁남지', ja: '宮南地', zh: '宫南地', en: 'Gungnamji' }, region: 'jeolla', q: '궁남지', note: { ko: '부여. 연꽃과 정자, 여름 아침.', ja: '付与。蓮の花と精子、夏の朝。', zh: '扶余。莲花和亭子，夏天的早晨。', en: 'Buyeo: lotus and pavilion on a summer morning.' } },
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
/* ------------------------------------------------------- 19 일출·일몰 */
{
  id: 'sunrise', emoji: '🌅', tint: '#FFB59B',
  name: { ko: '일출 · 일몰 코스', ja: '日の出・日没コース', zh: '日出·日落路线', en: 'Sunrise & sunset' },
  sub: { ko: '해가 뜨고 지는 시간에 맞춘 하루', ja: '日の出と日の入りに合わせた一日', zh: '跟着日出日落走的一天', en: 'A day timed to the sun' },
  tag: { ko: '동해 일출 · 서해 낙조', ja: '東海の日の出・西海の夕日', zh: '东海日出·西海晚霞', en: 'Sunrise in the east, sunset in the west' },
  intro: {
    ko: '일출·일몰 여행은 시각표가 일정표입니다. 해 뜨는 시각은 계절에 따라 두 시간 넘게 차이가 나므로, 날짜를 정한 뒤 기상청 안내로 시각을 확인하고 거꾸로 하루를 짜야 합니다. 여기서는 강릉 정동진 일출로 하루를 여는 코스를 잡았습니다. 동해는 수평선에서 해가 떠오르고, 서해는 갯벌 위로 내려앉습니다.', ja: '日の出・日没旅行は時刻表が日程表です。日の出時間は季節によって2時間以上差がありますので、日付を決めた後、気象庁案内で時刻を確認し、逆に一日を組む必要があります。ここでは江陵正東津日の出で一日を開くコースをとりました。東海は地平線から太陽が昇り、西海は干潟の上に降ります。', zh: '对于日出/日落旅行，时间表即为行程。由于日出时间根据季节的不同而变化超过两个小时，因此您必须设定日期，并根据气象局的指导检查时间，并向后计划您的一天。在这里，我们决定以江陵正东津的日出开始新的一天。在东海，太阳从地平线升起，在西海，太阳从泥滩上落下。',
    en: 'For a sunrise trip the timetable is the itinerary: sunrise moves by more than two hours across the year, so fix the date, check the time, then build the day backwards. This route opens with sunrise at Jeongdongjin near Gangneung. In the east the sun rises out of the horizon; in the west it sinks onto the tidal flats.'
  },
  seasons: [{ ko: '겨울 일출', ja: '冬の日の出', zh: '冬天日出', en: 'Winter sunrise' }, { ko: '여름 일출', ja: '夏の日の出', zh: '夏季日出', en: 'Summer sunrise' }, { ko: '사계절 일몰', ja: '四季の夕日', zh: '四季都有日落', en: 'Sunset all year' }],
  transport: { ko: 'KTX + 버스·택시', ja: 'KTX＋バス・タクシー', zh: 'KTX＋巴士·出租车', en: 'KTX + bus or taxi' },
  duration: { ko: '약 12시간', ja: '約12時間', zh: '约12小时', en: 'About 12 hours' },
  hub: {
    ko: '정동진역', ja: '正東津駅', zh: '正东津站', en: 'Jeongdongjin Station', q: '정동진역',
    note: {
      ko: '강릉선 KTX가 서는 바닷가 역. 서울 청량리에서 2시간 안팎. 역에서 해변까지 걸어서 5분이라 일출 보기에 가장 편합니다.', ja: '江陵線KTXが立つ浜駅。ソウル清涼里から2時間前後。駅からビーチまで徒歩5分なので、日の出の眺めに最適です。', zh: '江陵线KTX停靠的海滩站。距首尔清凉里约2小时车程。从车站步行5分钟即可到达海滩，是观看日出最方便的地方。',
      en: 'A seaside station on the Gangneung KTX line, about two hours from Cheongnyangni; the beach is five minutes on foot.'
    }
  },
  course: {
    title: { ko: '정동진 일출에서 경포·안목까지', ja: '正東津の日の出から鏡浦・安木まで', zh: '从正东津日出到镜浦、安木', en: 'Jeongdongjin sunrise, then Gyeongpo and Anmok' },
    meta: { ko: '7곳 · 약 12시간 · 버스 3회', ja: '7か所・約12時間・バス3回', zh: '7个地点，约12小时，3辆巴士', en: '7 stops · about 12 hours · 3 buses' },
    steps: [
      { phase: 'start', time: '05:30', name: { ko: '정동진역', ja: '正東津駅', zh: '正东津站', en: 'Jeongdongjin Station' }, q: '정동진역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '일출 40분 전에 도착하도록 첫차를 잡습니다. 시각은 계절에 따라 다르니 기상청 안내로 확인하세요.', ja: '日の出の40分前に到着するように最初の車をキャッチします。時刻は季節によって異なりますので、気象庁案内でご確認ください。', zh: '搭乘日出前40分钟到达的首班车。时间因季节而异，请向韩国气象厅确认。', en: 'Take a train that lands forty minutes before sunrise; the time shifts with the season, so check it first.' } },
      { phase: 'morning', time: '05:45', name: { ko: '정동진 해변 · 모래시계공원', ja: '正東津ビーチ・砂時計公園', zh: '正东津海水浴场·沙漏公园', en: 'Jeongdongjin beach' }, q: '정동진해수욕장', move: { ko: '도보 약 5분', ja: '徒歩約5分', zh: '步行约5分钟', en: 'Walk, about 5 min' },
        desc: { ko: '수평선이 트인 모래사장. 파도가 조용한 날은 물 위에 해가 한 번 더 뜹니다.', ja: '地平線のある砂浜。波が静かな日は水の上に太陽がもう一回浮かびます。', zh: '地平线开阔的沙滩。在海浪平静的日子里，太阳会再次从水面升起。', en: 'Open horizon from the sand; on a calm day the sun rises twice.' },
        photo: 'th-sunrise' },
      { phase: 'morning', time: '06:30', name: { ko: '일출', ja: '日の出', zh: '日出', en: 'Sunrise' }, q: '정동진', move: { ko: '해변', ja: 'ビーチ', zh: '海滩', en: 'On the beach' },
        desc: { ko: '해가 다 오르면 사람들이 조용히 돌아섭니다. 그 10분이 이 코스의 전부입니다.', ja: '太陽が上がると、人々は静かに戻ります。その10分がこのコースの全部です。', zh: '当太阳升起的时候，人们静静地转身。这10分钟就是本课程的全部内容。', en: 'Once it is up, everyone turns away quietly — those ten minutes are the whole point.' } },
      { phase: 'morning', time: '07:10', name: { ko: '아침 국밥', ja: '朝クッパ', zh: '早餐汤', en: 'Breakfast soup' }, q: '정동진', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '역 근처에서 뜨끈한 국물로 몸을 녹입니다. 이 시간에 문을 여는 집이 몇 곳 있습니다.', ja: '駅の近くで熱いスープで体を溶かします。今回はドアを開ける家がいくつかあります。', zh: '在车站附近喝点热汤暖暖身子。有一些房子在这段时间开放。', en: 'Something hot near the station; a few places open at this hour.' } },
      { phase: 'morning', time: '08:30', name: { ko: '경포호', ja: '鏡浦ホ', zh: '镜浦湖', en: 'Gyeongpo lake' }, q: '경포호', move: { ko: '버스 약 30분', ja: 'バス約30分', zh: '巴士约30分钟', en: 'Bus, about 30 min' },
        desc: { ko: '호수와 바다가 나란히 있는 곳. 아침 빛에 둘레길이 조용합니다.', ja: '湖と海が並んでいるところ。朝の光の周りは静かです。', zh: '一个湖和海毗邻的地方。晨曦中的小路很安静。', en: 'A lake running beside the sea; the loop is quiet in morning light.' },
        photo: 'th-sunrise-p2' },
      { phase: 'morning', time: '10:00', name: { ko: '안목해변', ja: '目のビーチ', zh: '安木海滩', en: 'Anmok Beach' }, q: '안목해변', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
        desc: { ko: '바다를 창에 담은 커피거리. 일출을 본 뒤의 커피 한 잔은 이유가 다릅니다.', ja: '海を窓に入れたコーヒー通り。日の出を見た後のコーヒー1杯は理由が異なります。', zh: '一条咖啡街，窗外就是大海。看完日出后喝杯咖啡，却有着不一样的理由。', en: 'A coffee street with the sea in the window; after sunrise the cup means something else.' } },
      { phase: 'lunch', time: '11:30', name: { ko: '강릉중앙시장', ja: '江陵中央市場', zh: '江陵中央市场', en: 'Gangneung Jungang Market' }, q: '강릉중앙시장', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '점심과 간식을 시장에서. 닭강정과 감자옹심이가 이 동네 기본입니다.', ja: 'ランチとスナックを市場で。鶏カンジョンとジャガイモがこの町の基本です。', zh: '午餐和市场小吃。 Chicken Gangjeong 和 Gamja Ongsimi 是这个街区的主食。', en: 'Lunch and snacks at the market: fried chicken and potato dumpling soup.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '오죽헌', ja: 'ヒョンホン', zh: '乌竹轩', en: 'Ojukheon House' }, q: '오죽헌', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
        desc: { ko: '신사임당과 율곡의 집. 일찍 일어난 하루를 오후에 천천히 닫는 자리입니다.', ja: '神社任堂と渓谷の家。早く起きた日を午後にゆっくり閉める席です。', zh: '申师任堂和栗谷家。这是一个你早起并在下午慢慢结束一天的地方。', en: 'The house of Shin Saimdang and Yulgok — a slow close to an early day.' } },
      { phase: 'return', time: '16:00', name: { ko: '강릉역', ja: '江陵駅', zh: '江陵站', en: 'Gangneung Station' }, q: '강릉역', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: 'KTX로 귀가. 서해 일몰을 보고 싶다면 아래 목록에서 서해 쪽 거점을 골라 같은 방식으로 짜세요.', ja: 'KTXで帰宅。西海の夕日を見たい場合は、下のリストから西海側の拠点を選んで同じ方法で絞ってください。', zh: '乘坐KTX 回家。如果你想看西海日落，请从下面的列表中选择西海一侧的位置，并以同样的方式进行计划。', en: 'Home by KTX. For a west-coast sunset, pick a base from the list and plan the day the same way.' } }
    ]
  },
  conds: [
    { k: { ko: '시각', ja: '時刻', zh: '时间', en: 'Timing' }, v: { ko: '일출·일몰 시각은 계절에 따라 2시간 이상 차이 — 기상청 안내 확인', ja: '日の出・日没時刻は季節によって2時間以上差 - 気象庁案内確認', zh: '日出和日落时间根据季节变化超过2小时 — 查看韩国气象局信息', en: 'Sunrise and sunset shift by more than two hours across the year' } },
    { k: { ko: '날씨', ja: '天気', zh: '天气', en: 'Weather' }, v: { ko: '구름·안개·미세먼지로 해가 안 보일 수 있음', ja: '雲・霧・微粉塵で太陽が見えないことがある', zh: '由于云、雾或细尘，太阳可能看不见。', en: 'Cloud, fog or dust can hide it entirely' } },
    { k: { ko: '안전', ja: '安全', zh: '安全', en: 'Safety' }, v: { ko: '갯벌·해안은 물때와 파도 확인, 산 정상은 통제 시간 확인', ja: '干潟・海岸は水の時と波確認、山頂は制御時間確認', zh: '检查泥滩和海岸的潮位和波浪，并检查山峰的控制时间。', en: 'Check tides and surf on the coast, and closing times on peaks' } }
  ],
  places: [
    { name: { ko: '정동진해수욕장', ja: '正東津ビーチ', zh: '正东津海滩', en: 'Jeongdongjin Beach' }, region: 'gangwon', q: '정동진해수욕장', note: { ko: '동해 일출의 대표. 역에서 도보 5분.', ja: '東海日の出の代表。駅から徒歩5分。', zh: '代表东海日出。距离车站步行5分钟。', en: 'The classic east-coast sunrise, five minutes from the station.' } },
    { name: { ko: '경포해변', ja: '鏡浦ビーチ', zh: '镜浦海水浴场', en: 'Gyeongpo Beach' }, region: 'gangwon', q: '경포해변', note: { ko: '넓은 백사장과 수평선 일출.', ja: '広い白い砂浜と地平線の日の出。', zh: '宽阔的白色沙滩和地平线上的日出。', en: 'Wide sand and an open horizon.' } },
    { name: { ko: '추암 촛대바위', ja: 'チュアムローソク足岩', zh: 'Chuam烛台岩', en: 'Chuam rock formations' }, region: 'gangwon', q: '추암 촛대바위', note: { ko: '동해. 바위 사이로 해가 오릅니다.', ja: '東海。岩の間に太陽が昇ります。', zh: '东海。太阳从岩石之间升起。', en: 'Donghae: the sun rising between the rocks.' } },
    { name: { ko: '영금정', ja: 'ヤングムジョン', zh: '灵金亭', en: 'Yeonggeumjeong' }, region: 'gangwon', q: '영금정', note: { ko: '속초. 바위 위 정자에서 보는 해돋이.', ja: '束草。岩の上の精子から見る日の出。', zh: '束草。从岩石上的亭子看到的日出。', en: 'Sokcho: sunrise from a pavilion on the rocks.' } },
    { name: { ko: '낙산사 의상대', ja: 'ナクサン寺衣装隊', zh: '洛山寺义尚台', en: 'Naksansa Uisangdae' }, region: 'gangwon', q: '의상대', note: { ko: '사찰과 동해가 함께 있는 일출.', ja: '寺と東海が一緒にいる日の出。', zh: '日出与寺庙和东海。', en: 'A temple and the East Sea in one sunrise.' } },
    { name: { ko: '하조대', ja: 'ハジョデ', zh: '河城台', en: 'Hajodae' }, region: 'gangwon', q: '하조대', note: { ko: '양양. 기암절벽과 등대, 바다 전망.', ja: 'ヤンヤン。奇岩の崖と灯台、海の景色。', zh: '阳阳。奇形怪状的悬崖、灯塔、海景。', en: 'Yangyang: cliffs, lighthouse and open sea.' } },
    { name: { ko: '남애항', ja: '南愛港', zh: '生前港', en: 'Namae harbour' }, region: 'gangwon', q: '남애항', note: { ko: '빨간 등대와 어선, 수평선 일출.', ja: '赤い灯台と漁船、地平線の日の出。', zh: '红色灯塔、渔船和地平线上的日出。', en: 'A red lighthouse, boats and the horizon.' } },
    { name: { ko: '호미곶 해맞이광장', ja: 'ホミ岬日の出広場', zh: '虎尾峪日出广场', en: 'Homigot sunrise square' }, region: 'gyeongsang', q: '호미곶', note: { ko: '포항. 상생의 손 사이로 해가 오릅니다.', ja: '浦項。生涯の手の間に害があります。', zh: '浦项。太阳在共同繁荣的双手之间升起。', en: 'Pohang: the sun between the great hands.' } },
    { name: { ko: '간절곶', ja: 'カンジョルゴッ（竿切串）', zh: '竿切串', en: 'Ganjeolgot' }, region: 'gyeongsang', q: '간절곶', note: { ko: '울주. 육지에서 해가 가장 먼저 뜨는 곳 중 하나.', ja: 'ウルジュ。陸上で太陽が最初に浮かぶ場所の一つ。', zh: '乌尔朱。陆地上太阳最早升起的地方之一。', en: 'Ulju: among the first places on the mainland to see the sun.' } },
    { name: { ko: '문무대왕릉', ja: '文武大王陵', zh: '文武王陵墓', en: 'Tomb of King Munmu' }, region: 'gyeongsang', q: '문무대왕릉', note: { ko: '경주. 바다 위 수중릉과 일출.', ja: '慶州。海の上の水中陵と日の出。', zh: '种族。水下的山脊和海上的日出。', en: 'Gyeongju: a tomb in the sea at sunrise.' } },
    { name: { ko: '토함산', ja: 'トハムサン', zh: '吐含山', en: 'Tohamsan' }, region: 'gyeongsang', q: '토함산', note: { ko: '산 정상의 일출과 운해.', ja: '山頂の日の出と雲海。', zh: '山顶的日出和云海。', en: 'A summit sunrise above the cloud sea.' } },
    { name: { ko: '성산일출봉', ja: '城山日出峰', zh: '城山日出峰', en: 'Seongsan Ilchulbong' }, region: 'jeju', q: '성산일출봉', note: { ko: '제주 대표 해돋이. 정상까지 20분.', ja: '済州代表の日の出。頂上まで20分。', zh: '济州岛代表性的日出。 20分钟到达山顶。', en: 'Jeju\u2019s signature sunrise; twenty minutes to the rim.' } },
    { name: { ko: '광치기해변', ja: '狂気のビーチ', zh: '广其吉海滩', en: 'Gwangchigi Beach' }, region: 'jeju', q: '광치기해변', note: { ko: '물웅덩이에 성산과 해가 반영됩니다.', ja: '水たまりに城山と太陽が反映されます。', zh: '圣山和太阳倒映在水坑里。', en: 'Seongsan and the sun reflected in the pools.' } },
    { name: { ko: '우도 검멀레', ja: '尖刀ガム', zh: '乌多黑虫', en: 'Udo Geommeolle' }, region: 'jeju', q: '우도 검멀레해변', note: { ko: '검은 모래와 절벽, 섬의 아침.', ja: '黒い砂と崖、島の朝。', zh: '黑沙和悬崖，岛上的早晨。', en: 'Black sand, cliffs and an island morning.' } },
    { name: { ko: '함덕·서우봉', ja: '咸徳・ソウボン', zh: '咸德、徐雨峰', en: 'Hamdeok & Seoubong' }, region: 'jeju', q: '서우봉', note: { ko: '푸른 바다와 오름 능선의 아침.', ja: '青い海と昇る尾根の朝。', zh: '蓝色大海和Oreum山脊的早晨。', en: 'Turquoise water and a ridge in the morning.' } },
    { name: { ko: '섭지코지', ja: '摂地コージー', zh: '涉地可支', en: 'Seopjikoji' }, region: 'jeju', q: '섭지코지', note: { ko: '등대와 해안 절벽의 일출.', ja: '灯台と海岸の崖の日の出。', zh: '日出在灯塔和沿海悬崖上。', en: 'A lighthouse and cliffs at sunrise.' } },
    { name: { ko: '장화리 낙조 전망대', ja: '長華里落潮展望台', zh: '长花里日落展望台', en: 'Janghwa-ri sunset lookout' }, region: 'capital', q: '장화리 낙조전망대', note: { ko: '강화. 갯벌과 섬 사이로 지는 해.', ja: '強化。干潟と島の間に負ける年。', zh: '执行。太阳在泥滩和岛屿之间落下。', en: 'Ganghwa: the sun going down between flats and islands.' } },
    { name: { ko: '동막해변', ja: '東幕ビーチ', zh: '东幕海滩', en: 'Dongmak Beach' }, region: 'capital', q: '동막해변', note: { ko: '강화. 넓은 갯벌과 서해 낙조.', ja: '江華。広い干潟と西海の夕日。', zh: '江华。宽阔的泥滩与西海晚霞。', en: 'Ganghwa: wide flats and a west-coast sunset.' } },
    { name: { ko: '오이도', ja: '大井戸', zh: '还有黄瓜', en: 'Oido' }, region: 'capital', q: '오이도', note: { ko: '시흥. 빨간 등대와 노을, 전철로 접근.', ja: '始興。赤い灯台と夕焼け、電車でアクセス。', zh: '始兴。红色灯塔和日落，可乘坐地铁到达。', en: 'Siheung: a red lighthouse at sunset, on the subway.' } },
    { name: { ko: '탄도항·누에섬', ja: '弾道港・ヌエ島', zh: '炭岛港和蚕岛', en: 'Tando harbour & Nueseom' }, region: 'capital', q: '탄도항', note: { ko: '안산. 풍력발전기와 바닷길. 물때 확인.', ja: '安山。風力発電機と海道。水の中で確認。', zh: '安山。风力涡轮机和海路。检查潮位。', en: 'Ansan: turbines and a tidal path; check the tide.' } },
    { name: { ko: '구봉도 낙조전망대', ja: '九峰島落潮展望台', zh: '九峰岛日落展望台', en: 'Gubongdo sunset lookout' }, region: 'capital', q: '구봉도 낙조전망대', note: { ko: '안산. 바다 위 조형물 사이로 지는 해.', ja: '安山。海の上の造形物の間に負けた年。', zh: '安山。太阳落在海上的雕塑之间。', en: 'Ansan: sunset between sculptures over the water.' } },
    { name: { ko: '꽃지해수욕장', ja: '花地海水浴場', zh: '科奇海滩', en: 'Ggotji Beach' }, region: 'jeolla', q: '꽃지해수욕장', note: { ko: '태안. 서해 3대 낙조, 할미·할아비바위.', ja: '泰安。西海三大落潮、ハルミ・ハラビ岩。', zh: '泰安。西海三大日落，哈密岩和爷爷岩。', en: 'Taean: one of the west coast\u2019s great sunsets.' } },
    { name: { ko: '왜목마을', ja: 'なぜ牧村', zh: '瓦莫克村', en: 'Waemok village' }, region: 'jeolla', q: '왜목마을', note: { ko: '당진. 지형 따라 일출과 일몰을 모두.', ja: '唐津。地形に従って日の出と日没の両方。', zh: '唐津。日出和日落取决于地形。', en: 'Dangjin: by shape of the coast, both sunrise and sunset.' } },
    { name: { ko: '마량포구', ja: 'マヤンポグ', zh: '马良港', en: 'Maryang harbour' }, region: 'jeolla', q: '마량포구', note: { ko: '서천. 해돋이와 해넘이를 함께 보는 포구.', ja: '西川。日の出と日の出を一緒に見る砲口。', zh: '舒川。可以同时看到日出和日落的港口。', en: 'Seocheon: a harbour that sees both sun-up and sun-down.' } },
    { name: { ko: '무창포해수욕장', ja: '無昌浦海水浴場', zh: '木场坡海滩', en: 'Muchangpo Beach' }, region: 'jeolla', q: '무창포해수욕장', note: { ko: '보령. 바닷길과 석양, 물때 확인.', ja: '保霊。海道と夕日、水の中で確認。', zh: '保宁。检查海路、日落和潮位。', en: 'Boryeong: the parting sea road and sunset; check the tide.' } },
    { name: { ko: '간월암', ja: 'カンウォルアム（看月庵）', zh: '看月庵', en: 'Ganwolam' }, region: 'jeolla', q: '간월암', note: { ko: '서산. 물이 차면 섬이 되는 암자와 노을.', ja: '西山。水が溜まると島になる庵と夕焼け。', zh: '瑞山。当水位上涨和日落时，一座隐修院就变成了一座岛屿。', en: 'Seosan: a hermitage that becomes an island, at sunset.' } },
    { name: { ko: '채석강', ja: '採石川', zh: '彩石江', en: 'Chaeseokgang' }, region: 'jeolla', q: '채석강', note: { ko: '부안. 퇴적암 절벽과 바다 위 석양.', ja: '扶安。堆積岩の崖と海の上の夕日。', zh: '布安。沉积岩悬崖和大海上的日落。', en: 'Buan: layered cliffs and the sun on the water.' } },
    { name: { ko: '적벽강', ja: '赤壁川', zh: '赤碧河', en: 'Jeokbyeokgang' }, region: 'jeolla', q: '적벽강', note: { ko: '부안. 붉은 절벽과 노을.', ja: '扶安。赤い崖と夕焼け。', zh: '布安。红色的悬崖和日落。', en: 'Buan: red cliffs at sunset.' } },
    { name: { ko: '와온해변', ja: 'ワオンビーチ', zh: '瓦恩海滩', en: 'Waon Beach' }, region: 'jeolla', q: '와온해변', note: { ko: '순천. S자 물길과 갯벌 노을.', ja: '順天。 S字水道と干潟の夕焼け。', zh: '顺天。 S形水道和泥滩日落。', en: 'Suncheon: an S-shaped channel and sunset on the flats.' } },
    { name: { ko: '순천만 용산전망대', ja: '順天湾龍山展望台', zh: '顺天湾龙山展望台', en: 'Suncheon Bay lookout' }, region: 'jeolla', q: '순천만 용산전망대', note: { ko: '황금빛 갈대와 갯벌의 일몰.', ja: '黄金の葦と干潟の夕日。', zh: '金色的芦苇和泥滩上的日落。', en: 'Golden reeds and the bay at sunset.' } },
    { name: { ko: '세방낙조', ja: '洗房落潮', zh: '三路夕阳', en: 'Sebang sunset' }, region: 'jeolla', q: '세방낙조', note: { ko: '진도. 여러 섬 사이로 해가 내려앉습니다.', ja: '震度。いくつかの島の間に太陽が降ります。', zh: '进步。太阳在岛屿之间落下。', en: 'Jindo: the sun setting between islands.' } },
    { name: { ko: '땅끝마을 전망대', ja: '地上村の展望台', zh: 'Ttangkkeut 村天文台', en: 'Ttangkkeut lookout' }, region: 'jeolla', q: '땅끝마을', note: { ko: '해남. 육지의 끝에서 보는 저녁.', ja: '海南。陸の終わりから見る夕方。', zh: '海南。从土地尽头看到的夜景。', en: 'Haenam: evening at the end of the land.' } },
    { name: { ko: '달아공원', ja: 'ダルア公園', zh: '达拉公园', en: 'Dara Park' }, region: 'gyeongsang', q: '달아공원', note: { ko: '통영. 다도해 낙조.', ja: '統営。茶道して落潮。', zh: '统营.多多海日落。', en: 'Tongyeong: sunset over the archipelago.' } },
    { name: { ko: '상주은모래비치', ja: 'サンジュサンドビーチ', zh: '尚州银沙滩', en: 'Sangju silver sand' }, region: 'gyeongsang', q: '상주은모래비치', note: { ko: '남해. 은빛 모래와 저녁 바다.', ja: '南海。銀色の砂と夕方の海。', zh: '南海。银色的沙滩和傍晚的大海。', en: 'Namhae: silver sand and an evening sea.' } },
    { name: { ko: '다랭이마을', ja: 'ダランイ村', zh: '达兰吉村', en: 'Darangyi village' }, region: 'gyeongsang', q: '다랭이마을', note: { ko: '남해. 계단식 논과 바다의 노을.', ja: '南海。カスケード水田と海の夕焼け。', zh: '南海。水稻梯田和海上日落。', en: 'Namhae: terraced paddies and the sea at sunset.' } },
    { name: { ko: '실안해안도로', ja: '実案海岸道路', zh: '士兰滨海路', en: 'Silan coastal road' }, region: 'gyeongsang', q: '실안낙조', note: { ko: '사천. 노을 드라이브.', ja: '四川。夕焼けドライブ。', zh: '四川.日落驱动器。', en: 'Sacheon: a sunset drive.' } },
    { name: { ko: '다대포해수욕장', ja: '多大浦海水浴場', zh: '多大浦海滩', en: 'Dadaepo Beach' }, region: 'gyeongsang', q: '다대포해수욕장', note: { ko: '부산 도심의 노을 명소.', ja: '釜山市中心部の夕焼けスポット。', zh: '釜山市中心的日落景点。', en: 'Busan\u2019s city sunset.' } },
    { name: { ko: '황령산', ja: '黄霊山', zh: '皇令山', en: 'Hwangnyeongsan' }, region: 'gyeongsang', q: '황령산봉수대', note: { ko: '도시 전체를 내려다보는 일몰과 야경.', ja: '街全体を見下ろす夕日と夜景。', zh: '俯瞰整个城市的日落和夜景。', en: 'Sunset and lights over the whole city.' } },
    { name: { ko: '협재해수욕장', ja: 'ヒョプジェビーチ', zh: '挟才海水浴场', en: 'Hyeopjae Beach' }, region: 'jeju', q: '협재해수욕장', note: { ko: '비양도와 에메랄드빛 바다의 노을.', ja: '非譲渡とエメラルド色の海の夕焼け。', zh: '碧阳岛和翡翠海的夕阳。', en: 'Biyangdo and turquoise water at sunset.' } },
    { name: { ko: '신창풍차해안도로', ja: '新昌風車海岸道路', zh: '新昌风车海岸路', en: 'Sinchang windmill road' }, region: 'jeju', q: '신창풍차해안도로', note: { ko: '풍차와 붉은 하늘.', ja: '風車と赤い空。', zh: '风车和红色的天空。', en: 'Turbines and a red sky.' } },
    { name: { ko: '수월봉', ja: 'スウォルボン', zh: '水月峰', en: 'Suwolbong' }, region: 'jeju', q: '수월봉', note: { ko: '차귀도와 지질 절벽 위의 석양.', ja: '崇高と地質の崖の上の夕日。', zh: '遮归岛和地质悬崖上的日落。', en: 'Sunset over Chagwido from a geological cliff.' } },
    { name: { ko: '송악산', ja: '松岳山', zh: '松岳山', en: 'Songaksan' }, region: 'jeju', q: '송악산', note: { ko: '산방산과 형제섬, 바다를 배경으로.', ja: '山房山と兄弟島、海を背景に。', zh: '山房山、凶济岛和大海为背景。', en: 'Sanbangsan, the twin islets and the sea.' } },
    { name: { ko: '노고단', ja: 'ノゴダン', zh: '老古坛', en: 'Nogodan' }, region: 'jeolla', q: '지리산 노고단', note: { ko: '운해와 산 정상 일출.', ja: '雲海と山頂の日の出。', zh: '山顶的云海和日出。', en: 'A summit sunrise above the cloud sea.' } },
    { name: { ko: '설악산 울산바위', ja: '雪岳山蔚山岩', zh: '雪岳山蔚山岩', en: 'Ulsanbawi' }, region: 'gangwon', q: '울산바위', note: { ko: '기암과 일출, 은하수.', ja: '奇岩と日の出、天の川。', zh: '奇石、日出、银河。', en: 'Rock, sunrise and a dark sky.' } },
    { name: { ko: '태백산 천제단', ja: '太白山天帝団', zh: '太白山天祭坛', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산 천제단', note: { ko: '겨울 설경과 해돋이.', ja: '冬の雪景色と日の出。', zh: '冬天的雪景和日出。', en: 'Snow and sunrise in winter.' } },
    { name: { ko: '치악산 비로봉', ja: 'チアクサンビロボン', zh: '雉岳山 毗卢峰', en: 'Chiaksan Birobong' }, region: 'gangwon', q: '치악산 비로봉', note: { ko: '산 정상 일출, 이른 출발 필요.', ja: '山頂日の出、早い出発が必要。', zh: '山顶看日出，需要早点出发。', en: 'A summit sunrise; start early.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🍲', dish: { ko: '해장국 · 국밥', ja: 'ヘジャングク・クッパ', zh: '解酒汤和汤饭', en: 'Hangover soup · rice soup' }, note: { ko: '일출 뒤에 먹는 국물이 이 여행의 보상입니다.', ja: '日の出の後に食べるスープがこの旅の報酬です。', zh: '日出后吃的汤就是此行的犒赏。', en: 'The soup after sunrise is the reward.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍜', dish: { ko: '감자옹심이 · 짬뽕', ja: 'ジャガイモのオンジミ・チャンポン', zh: '土豆丸子汤·辣海鲜面', en: 'Potato dumpling soup · spicy noodles' }, note: { ko: '강릉은 감자와 해물 요리.', ja: '江陵はジャガイモとシーフード料理。', zh: '江陵以土豆和海鲜菜肴而闻名。', en: 'Gangneung runs on potatoes and seafood.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍗', dish: { ko: '닭강정 · 커피', ja: '鶏カンジョン・コーヒー', zh: '鸡江正·咖啡', en: 'Fried chicken · coffee' }, note: { ko: '시장에서 닭강정, 바다 앞에서 커피.', ja: '市場でチキンカンジョン、海の前でコーヒー。', zh: '市场里的鸡江亭，海边的咖啡。', en: 'Chicken from the market, coffee by the sea.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🐟', dish: { ko: '회 · 물회 · 해물탕', ja: '会・水会・海鮮湯', zh: '生鱼、生鱼汤、海鲜炖菜', en: 'Sashimi · cold fish soup · seafood stew' }, note: { ko: '동해는 회, 서해는 조개구이.', ja: '東海は回、西海は貝焼。', zh: '东海有生鱼，西海有烤蛤。', en: 'Sashimi in the east, grilled shellfish in the west.' } }
  ],
  photos: [
    { file: 'th-sunrise', cap: { ko: '수평선 위로 오르는 해', ja: '地平線を上る年', zh: '太阳从地平线升起', en: 'The sun rising over the horizon' } },
    { file: 'th-sunrise-p2', cap: { ko: '일출 뒤의 물빛', ja: '日の出の後ろの光', zh: '日出后的水', en: 'The water after sunrise' } }
  ],
  tip: { ko: '일출 시각은 계절에 따라 두 시간 넘게 차이 납니다. 겨울은 7시 30분 전후, 여름은 5시 전후로 보고 하루를 거꾸로 짜세요.', ja: '日の出時間は季節によって2時間以上異なります。冬は7時30分前後、夏は5時前後と見て一日を逆に絞ってください。', zh: '日出时间根据季节不同会有两个多小时的变化。向后计划您的一天，冬季从7:30左右开始，夏季从5:00左右开始。', en: 'Sunrise moves by more than two hours across the year — around 7:30 in winter, before 5 in summer. Build the day backwards from it.' }
},
/* -------------------------------------------------- 20 글램핑·캠핑 */
{
  id: 'camp', emoji: '⛺', tint: '#C9E4A5',
  name: { ko: '글램핑 · 캠핑', ja: 'グランピング・キャンプ', zh: '豪华露营·露营', en: 'Glamping & camping' },
  sub: { ko: '하룻밤을 야외에서 보내는 코스', ja: 'ひと晩を野外で過ごすコース', zh: '在户外过一晚的路线', en: 'A night outdoors, or a whole day of one' },
  tag: { ko: '글램핑 · 카라반 · 오션뷰', ja: 'グランピング・キャラバン・オーシャンビュー', zh: '豪华露营·房车·海景', en: 'Glamping, caravans, sea views' },
  intro: {
    ko: '캠핑은 장비가 아니라 조건을 고르는 일입니다. 텐트를 세울지, 침대가 있는 글램핑을 쓸지, 카라반이나 차박을 할지에 따라 준비물이 완전히 달라집니다. 여기서는 장비 없이 갈 수 있는 가평의 계곡 글램핑을 하루 코스로 잡았습니다. 1박으로 늘리면 불멍과 별이 남습니다. 여덟 가지 유형과 지역별 캠핑장은 아래에 정리했어요.', ja: 'キャンプは機器ではなく条件を選ぶことです。テントを立てるのか、ベッドのあるグランピングを使うのか、カラバンやチャバクをするのかによって準備物が完全に変わります。ここでは装備なしで行ける加平の渓谷グランピングを一日コースでとりました。 1泊に増やすと、あざと星が残ります。 8つのタイプと地域別のキャンプ場は以下にまとめました。', zh: '露营是选择条件，而不是装备。根据您是搭建帐篷、带床的豪华露营还是入住大篷车或汽车住宿，您需要准备的东西将完全不同。在这里，我们决定在加平山谷进行一日豪华露营之旅，无需任何装备即可完成。如果你延长到一晚，你就会剩下一个火坑和一颗星星。下面列出了八种类型和区域的露营地。',
    en: 'Camping is less about gear than about which conditions you choose: a tent you pitch, a glamping unit with a bed, a caravan, or sleeping in the car. This route is a valley glamping site in Gapyeong that needs no equipment, run as a day; add a night and the fire and stars are what you keep. Eight types and regional sites are below.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '여름 계곡', ja: '夏の谷', zh: '夏谷', en: 'Summer valleys' }, { ko: '가을 불멍', ja: '秋の焚き火でぼんやり', zh: '秋天的篝火发呆', en: 'Autumn fires' }, { ko: '겨울 온돌', ja: '冬のオンドル', zh: '冬季暖炕', en: 'Winter ondol' }],
  transport: { ko: '전철 + 셔틀·택시', ja: '電車＋シャトル・タクシー', zh: '地铁＋班车·出租车', en: 'Metro + shuttle or taxi' },
  duration: { ko: '약 10시간 (1박 권장)', ja: '約10時間（1泊推奨）', zh: '约10小时（建议1晚）', en: 'About 10 hours (a night is better)' },
  hub: {
    ko: '가평역', ja: '加平駅', zh: '加平站', en: 'Gapyeong Station', q: '가평역',
    note: {
      ko: '경춘선·ITX-청춘. 용산에서 1시간. 역에서 캠핑장까지 택시로 15분이고, 장을 볼 곳은 역 앞 마트가 마지막입니다.', ja: '慶春線・ITX-青春。龍山から1時間。駅からキャンプ場までタクシーで15分で、場を見る場所は駅前マートが最後です。', zh: '京春线·ITX-清春。距离龙山1小时。从车站打车到露营地需要15分钟，最后购物的地方是站前的超市。',
      en: 'ITX-Cheongchun from Yongsan in an hour. The campsite is fifteen minutes by taxi, and the mart by the station is the last place to shop.'
    }
  },
  course: {
    title: { ko: '가평 — 계곡 글램핑에서 불멍까지', ja: '加平 — 渓谷のグランピングから焚き火まで', zh: '加平——从溪谷露营到篝火发呆', en: 'Gapyeong — valley glamping to the fire' },
    meta: { ko: '6곳 · 약 10시간 · 택시 2회', ja: '6か所・約10時間・タクシー2回', zh: '6个地点，约10小时，乘坐2次出租车', en: '6 stops · about 10 hours · 2 taxi rides' },
    steps: [
      { phase: 'start', time: '10:00', name: { ko: '가평역', ja: '加平駅', zh: '加平站', en: 'Gapyeong Station' }, q: '가평역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '역 앞에서 장을 봅니다. 숯과 얼음, 물은 캠핑장에서도 팔지만 값이 다릅니다.', ja: '駅の前で章を見てください。炭や氷、水はキャンプ場でも売れますが、値が異なります。', zh: '我在车站前购物。露营地也出售木炭、冰和水，但价格各不相同。', en: 'Shop by the station — charcoal, ice and water are sold at the site too, at other prices.' } },
      { phase: 'morning', time: '10:30', name: { ko: '계곡 글램핑장', ja: '谷のグランピング場', zh: '山谷露营地', en: 'A valley glamping site' }, q: '가평 글램핑', move: { ko: '택시 약 15분', ja: 'タクシー約15分', zh: '出租车约15分钟', en: 'Taxi, about 15 min' },
        desc: { ko: '짐을 먼저 맡기고 사이트를 확인합니다. 데크와 침구, 취사도구가 갖춰져 있어 텐트는 필요 없습니다.', ja: '荷物をまず預けてサイトを確認してください。デッキと寝具、炊事道具が揃っており、テントは必要ありません。', zh: '先寄存行李，然后去现场看看。不需要帐篷，因为有甲板、床上用品和炊具。', en: 'Drop the bags and see the site: deck, bedding and cooking gear are there, so no tent is needed.' },
        photo: 'th-camp' },
      { phase: 'lunch', time: '12:00', name: { ko: '바비큐 점심', ja: 'バーベキューランチ', zh: '烧烤午餐', en: 'Barbecue lunch' }, q: '가평 글램핑', move: { ko: '사이트', ja: 'サイト', zh: '站点', en: 'At the site' },
        desc: { ko: '개별 화로가 있는 곳을 고르세요. 불 피우는 시간과 소화기 위치를 먼저 확인합니다.', ja: '個々の炉があるところを選んでください。火災の時間と消火器の位置を最初に確認してください。', zh: '选择一个有独立火坑的地方。首先检查起火时间和灭火器的位置。', en: 'Choose a site with its own brazier, and check the fire hours and extinguisher first.' } },
      { phase: 'afternoon', time: '14:00', name: { ko: '계곡 산책 · 물놀이', ja: '谷の散歩・水遊び', zh: '山谷漫步和戏水', en: 'Valley walk & water' }, q: '가평 계곡', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '여름에는 계곡물이 가장 좋은 시간. 수심이 얕은 곳을 골라 들어가세요.', ja: '夏には渓谷が最高の時間。水深の浅いところを選んでください。', zh: '夏季是享受谷水的最佳时节。选择一个水浅的地方，进去。', en: 'In summer the valley is at its best; pick a shallow stretch to step in.' },
        photo: 'th-camp-p2' },
      { phase: 'afternoon', time: '16:00', name: { ko: '자라섬 · 남이섬 산책', ja: 'ザラ島・ナミ島散策', zh: '游览龟岛和南怡岛', en: 'Jarasum & Nami walk' }, q: '자라섬', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '강 위의 섬을 한 바퀴. 자전거를 빌리면 40분이면 충분합니다.', ja: '川の上の島を一輪。自転車を借りれば40分で十分です。', zh: '绕河岛散步。如果租自行车的话40分钟就够了。', en: 'A loop of the island in the river; forty minutes by rented bike.' } },
      { phase: 'evening', time: '18:00', name: { ko: '저녁 · 불멍', ja: '夕方・あざ', zh: '晚上·佛明', en: 'Dinner & the fire' }, q: '가평 글램핑', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
        desc: { ko: '해가 지면 화로 앞에 앉습니다. 장작은 마른 것만, 불은 22시 전에 정리하는 곳이 많습니다.', ja: '太陽が落ちると火災の前に座ります。薪は乾いたものだけで、火は22時前にまとめるところが多いです。', zh: '太阳落山时，我坐在壁炉前。很多地方只使用干柴，并在22:00之前将火扑灭。', en: 'After dark you sit at the brazier. Dry wood only, and most sites want the fire out by ten.' } },
      { phase: 'return', time: '21:00', name: { ko: '가평역', ja: '加平駅', zh: '加平站', en: 'Gapyeong Station' }, q: '가평역', move: { ko: '택시 약 15분', ja: 'タクシー約15分', zh: '出租车约15分钟', en: 'Taxi, about 15 min' },
        desc: { ko: '당일이면 막차로 돌아옵니다. 1박이면 다음 날 아침 계곡 안개까지 보고 오세요.', ja: '当日なら終車に戻ります。 1泊の場合は、翌朝、渓谷の霧まで見てください。', zh: '如果是当天，则乘坐末班车返回。如果住一晚，第二天早上甚至可以看到山谷里的雾气。', en: 'For a day trip, take the last train; with a night, stay for the valley mist in the morning.' } }
    ]
  },
  subs: {
    title: { ko: '캠핑 여덟 가지 유형', ja: 'キャンプの8タイプ', zh: '露营的八种类型', en: 'Eight ways to camp' },
    items: [
      { emoji: '🛏️', name: { ko: '럭셔리 글램핑', ja: '高級グランピング', zh: '豪华露营', en: 'Luxury glamping' }, desc: { ko: '침대·냉난방·가구가 갖춰진 숙박형. 장비가 필요 없습니다.', ja: 'ベッド・冷暖房・家具が揃った宿泊型。機器は必要ありません。', zh: '住宿类型配备床、空调、暖气和家具。无需任何设备。', en: 'Bed, heating and furniture provided — no gear at all.' } },
      { emoji: '🚗', name: { ko: '오토캠핑', ja: 'オートキャンプ', zh: '汽车露营', en: 'Auto camping' }, desc: { ko: '차와 개인 텐트로. 사이트 크기와 전기 사용 여부를 확인하세요.', ja: 'お茶とプライベートテントロ。サイトのサイズと電気の使用を確認してください。', zh: '开车和私人帐篷。检查场地大小和电力供应情况。', en: 'Car and your own tent; check pitch size and whether power is available.' } },
      { emoji: '🚐', name: { ko: '카라반', ja: 'カラバン', zh: '大篷车', en: 'Caravan' }, desc: { ko: '이동식 숙소. 개별 화장실·주방 유무가 만족도를 가릅니다.', ja: '取り外し可能な宿泊施設。個別トイレ・キッチン有無が満足度を分けます。', zh: '流动住宿。是否有独立的浴室和厨房决定了满意度。', en: 'A mobile cabin — private bathroom and kitchen decide the experience.' } },
      { emoji: '🌊', name: { ko: '오션뷰 캠핑', ja: 'オーシャンビューキャンプ', zh: '海景露营', en: 'Sea-view camping' }, desc: { ko: '바다를 앞에 둔 사이트. 바람과 소음, 일출 시간을 확인하세요.', ja: '海を前にしたサイト。風、騒音、日の出時間を確認してください。', zh: '面向大海的场地。检查风、噪音和日出时间。', en: 'A pitch facing the water; check wind, noise and sunrise time.' } },
      { emoji: '🌲', name: { ko: '숲속 캠핑', ja: '森の中のキャンプ', zh: '在森林里露营', en: 'Forest camping' }, desc: { ko: '산림·계곡의 그늘. 여름에 가장 시원합니다.', ja: '森林・谷の陰。夏に一番涼しいです。', zh: '森林和山谷的树荫。夏天最凉爽。', en: 'Shade of forest and valley — coolest in summer.' } },
      { emoji: '🔮', name: { ko: '돔·이글루', ja: 'ドーム・イグルー', zh: '圆顶/圆顶冰屋', en: 'Dome & igloo' }, desc: { ko: '투명 돔과 이글루형 숙소. 사진이 잘 나오고 겨울에도 따뜻합니다.', ja: '透明なドームとイグルーの宿泊施設。写真がよく出て、冬でも暖かいです。', zh: '透明的圆顶和冰屋式住宿。照片拍出来效果很好，即使是冬天也很温暖。', en: 'Transparent domes and igloos: photogenic and warm in winter.' } },
      { emoji: '🐕', name: { ko: '애견 동반', ja: '愛犬同伴', zh: '适合带狗', en: 'With the dog' }, desc: { ko: '반려견 전용 사이트와 운동장. 체중·목줄 조건을 확인하세요.', ja: 'ペット犬専用サイトと運動場。体重・首筋条件を確認してください。', zh: '专为狗狗提供的场地和游乐场。检查重量和皮带状况。', en: 'Dog pitches and runs; check weight and lead rules.' } },
      { emoji: '🎠', name: { ko: '키즈 캠핑', ja: 'キッズキャンプ', zh: '孩子们露营', en: 'Camping with children' }, desc: { ko: '놀이터·수영장·체험시설. 개별 화장실이 있으면 훨씬 편합니다.', ja: '遊び場・水泳場・体験施設。個々のトイレがあればはるかに快適です。', zh: '游乐场、游泳池、体验设施。有独立卫生间就方便多了。', en: 'Playground, pool and activities; a private bathroom makes it far easier.' } }
    ]
  },
  conds: [
    { k: { ko: '숙박 유형', ja: '宿泊タイプ', zh: '住宿类型', en: 'Type' }, v: { ko: '글램핑·카라반·텐트·차박 — 준비물이 완전히 다름', ja: 'グランピング・カラバン・テント・チャバク - 準備物が完全に異なる', zh: '豪华露营、大篷车、帐篷、汽车露营——您需要准备的东西完全不同。', en: 'Glamping, caravan, tent or car — the packing list differs completely' } },
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Cost' }, v: { ko: '글램핑 주중 10~20만원, 주말 20~35만원, 성수기 할증', ja: 'グランピング平日10～20万ウォン、週末20～35万ウォン、ピークシーズン割増', zh: 'Glamping 平日100,000-200,000韩元，周末200,000-350,000韩元，旺季额外收费', en: 'Glamping ₩100,000–200,000 midweek, ₩200,000–350,000 at weekends, more in peak season' } },
    { k: { ko: '확인', ja: '確認', zh: '确认', en: 'Check' }, v: { ko: '개별 화장실·샤워, 온수, 난방, 바비큐·화로, 반려견 동반 여부', ja: '個別トイレ・シャワー、温水、暖房、バーベキュー・火炉、伴侶犬同伴可否', zh: '独立卫生间/淋浴、热水、暖气、烧烤/壁炉、允许携带宠物狗', en: 'Private bathroom and shower, hot water, heating, barbecue, dog policy' } },
    { k: { ko: '예약', ja: '予約', zh: '预约', en: 'Booking' }, v: { ko: '주말·성수기는 1~2달 전 마감, 취소 규정 확인', ja: '週末・繁忙期は1～2ヶ月前締め切り、キャンセル規定確認', zh: '周末和旺季提前1-2个月关闭，查看取消政策', en: 'Weekends and peak season close one to two months out; read the cancellation terms' } }
  ],
  places: [
    { name: { ko: '캠핑어클락', ja: 'キャンプクラブ', zh: '露营点', en: 'Camping O’Clock' }, region: 'capital', q: '캠핑어클락', note: { ko: '가평. 맑은 계곡과 그늘의 자연형 캠핑장.', ja: '加平。澄んだ谷と日陰の自然なキャンプ場。', zh: '加平。山谷清澈、绿荫成荫的天然露营地。', en: 'Gapyeong: a natural site on a clear valley with shade.' } },
    { name: { ko: '안성맞춤 캠핑장', ja: 'おすすめのキャンプ場', zh: '完美的露营地', en: 'Anseong Matchum campsite' }, region: 'capital', q: '안성맞춤 캠핑장', note: { ko: '안성. 숲속·가족 캠핑, 안성맞춤랜드와 연계.', ja: '安城。森の中・家族キャンプ、お得なランドと連携。', zh: '安城。森林/家庭露营，与安城Machum Land相连。', en: 'Anseong: forest camping for families, next to Matchum Land.' } },
    { name: { ko: '왕송호수 캠핑장', ja: '王松湖キャンプ場', zh: '望松湖露营地', en: 'Wangsong lake campsite' }, region: 'capital', q: '왕송호수 캠핑장', note: { ko: '의왕. 호수 전망 카라반·글램핑, 초보에게 좋습니다.', ja: '義王。湖の眺めカラバン・グランピング、初心者に最適です。', zh: '义王。湖景大篷车/豪华露营，适合初学者。', en: 'Uiwang: lake-view caravans and glamping, good for beginners.' } },
    { name: { ko: '평화누리캠핑장', ja: '平和ヌリキャンプ場', zh: '平和Nuri露营地', en: 'Pyeonghwa Nuri campsite' }, region: 'capital', q: '평화누리캠핑장', note: { ko: '파주. 임진각·DMZ 여행과 연계.', ja: '坡州。臨津閣・DMZ旅行と連携。', zh: '坡州。与临津阁/DMZ 旅行相关。', en: 'Paju: paired with Imjingak and the DMZ.' } },
    { name: { ko: '수원 솔내음 캠핑장', ja: '水原ソルネムキャンプ場', zh: '水原Solnaeum露营地', en: 'Suwon Solnaeeum campsite' }, region: 'capital', q: '솔내음캠핑장', note: { ko: '수원. 도심형 글램핑·카라반, 대중교통으로 접근.', ja: '水原。都心型グランピング・カラバン、公共交通機関でアクセス。', zh: '水原。城市露营/大篷车，可乘坐公共交通工具到达。', en: 'Suwon: city glamping and caravans, reachable by transit.' } },
    { name: { ko: '글램포레스트 대부도', ja: 'グランフォレスト貸付け金', zh: '魅力森林大阜岛', en: 'Glamp Forest Daebudo' }, region: 'capital', q: '글램포레스트 대부도', note: { ko: '안산 대부도. 바다와 숲을 함께, 일몰이 좋습니다.', ja: '安山ローンも。海と森を一緒に、夕日が良いです。', zh: '安山大扶岛。日落很棒，大海和森林在一起。', en: 'Daebudo, Ansan: sea and forest, with a good sunset.' } },
    { name: { ko: '남이섬 베스트카라반', ja: 'ナミ島ベストカラバン', zh: '南怡岛最佳房车', en: 'Nami Island best caravan' }, region: 'capital', q: '남이섬 카라반', note: { ko: '가평. 카라반과 글램핑, 남이섬 관광 연계.', ja: '加平。カラバンとグランピング、ナミ島観光連携。', zh: '加平。大篷车、豪华露营和南怡岛旅游链接。', en: 'Gapyeong: caravans and glamping tied to Nami Island.' } },
    { name: { ko: '캠프 오후 4시', ja: 'キャンプ午後4時', zh: '下午4点营地', en: 'Camp 4PM' }, region: 'capital', q: '캠프 오후 4시', note: { ko: '포천. 소규모 감성 캠핑, 커플에게 인기.', ja: 'ポチョン。小規模感性キャンプ、カップルに人気。', zh: '抱川。小型情感露营，深受情侣欢迎。', en: 'Pocheon: a small, atmospheric site popular with couples.' } },
    { name: { ko: '평화강변수목 캠핑장', ja: '平和川辺樹木キャンプ場', zh: '和平河树营地', en: 'Pyeonghwa riverside campsite' }, region: 'capital', q: '평화강변수목캠핑장', note: { ko: '연천. 강변과 수목, 조용한 자연.', ja: 'ヨンチョン。川辺と樹木、静かな自然。', zh: '涟川.河边，绿树成荫，自然静谧。', en: 'Yeoncheon: riverside trees and quiet.' } },
    { name: { ko: '스테이네이처', ja: 'ステイネイチャー', zh: '保持自然', en: 'Stay Nature' }, region: 'capital', q: '스테이네이처', note: { ko: '양평. 혼자 또는 둘이 조용히 쉬는 캠핑.', ja: '楊平。一人でまたは二人が静かに休むキャンプ。', zh: '杨平.露营，您可以独自或与两个人一起安静地休息。', en: 'Yangpyeong: camping for one or two, quietly.' } },
    { name: { ko: '박사마을 어린이 글램핑장', ja: '博士村子供グランピング場', zh: '巴克萨村儿童豪华露营地', en: 'Baksa village kids glamping' }, region: 'gangwon', q: '박사마을 글램핑장', note: { ko: '춘천. 북한강 전망과 별, 아이 동반 가족.', ja: '春川。北朝鮮川の眺めと星、子供連れの家族。', zh: '春川。北汉江河景和星星，有孩子的家庭。', en: 'Chuncheon: a view over the Bukhan river, stars, and children welcome.' } },
    { name: { ko: '하이원 추추파크', ja: 'ハイワンチュチュパーク', zh: 'High1楚楚公园', en: 'High1 Choo Choo Park' }, region: 'gangwon', q: '추추파크', note: { ko: '삼척. 기차·레일바이크와 캠핑을 함께.', ja: '三尺。電車・レールバイクとキャンプを一緒に。', zh: '三陟。火车、铁路自行车和露营一起。', en: 'Samcheok: trains, rail bikes and camping in one.' } },
    { name: { ko: '석산계곡 코코비발디', ja: '石山渓谷ココビバルディ', zh: '石山谷 可可·维瓦尔第', en: 'Seoksan valley Coccobivaldi' }, region: 'gangwon', q: '코코비발디', note: { ko: '홍천. 숲과 계곡, 여름 가족 여행.', ja: 'ホンチョン。森と谷、夏の家族旅行。', zh: '洪川.森林和山谷，夏季家庭旅行。', en: 'Hongcheon: forest and valley, a summer family site.' } },
    { name: { ko: '망상오토캠핑리조트', ja: '妄想オートキャンプリゾート', zh: '芒桑汽车露营度假村', en: 'Mangsang auto camping resort' }, region: 'gangwon', q: '망상오토캠핑리조트', note: { ko: '동해. 망상해변 바로 앞, 오션뷰 사이트.', ja: '東海。妄想ビーチのすぐ前、オーシャンビューサイト。', zh: '东海。海景场地就在芒桑海滩前面。', en: 'Donghae: right at Mangsang beach, with sea-view pitches.' } },
    { name: { ko: '라라플레이스 글램핑', ja: 'ララプレイスグランピング', zh: '拉拉广场豪华露营', en: 'Lala Place glamping' }, region: 'gangwon', q: '라라플레이스', note: { ko: '양양. 하조대 해변 도보 접근.', ja: 'ヤンヤン。ハチョデビーチへの徒歩アクセス。', zh: '阳阳。河赵台海水浴场步行可达。', en: 'Yangyang: walking distance to Hajodae beach.' } },
    { name: { ko: '동강전망자연휴양림', ja: '東江展望自然休養林', zh: '东港观自然休养林', en: 'Donggang recreational forest' }, region: 'gangwon', q: '동강전망자연휴양림', note: { ko: '정선. 강과 운해, 사진 찍기 좋은 야영장.', ja: 'チョンソン。川と雲海、写真を撮る良いキャンプ場。', zh: '贞善。非常适合拍摄河流和云朵的露营地。', en: 'Jeongseon: river and cloud sea, a photographer\u2019s campsite.' } },
    { name: { ko: '청포대솔밭야영장', ja: 'チョンポデソル畑キャンプ場', zh: '青浦台松林露营地', en: 'Cheongpodae pine campsite' }, region: 'jeolla', q: '청포대솔밭야영장', note: { ko: '태안. 해수욕장 앞 솔밭, 일몰 캠핑.', ja: '泰安。海水浴場前のソル畑、サンセットキャンプ。', zh: '泰安。海滩前的松田，日落露营。', en: 'Taean: pines in front of the beach, for a sunset camp.' } },
    { name: { ko: '더반 힐 글램핑', ja: 'ダーバンヒルグランピング', zh: '德班山豪华露营', en: 'The Ban Hill glamping' }, region: 'jeolla', q: '더반힐 글램핑', note: { ko: '보령. 오션뷰와 잔디광장.', ja: '保霊。オーシャンビューと芝生広場。', zh: '保宁。海景和草坪广场。', en: 'Boryeong: sea views and a lawn.' } },
    { name: { ko: '황토둥지 글램핑', ja: '黄土巣グランピング', zh: '红土巢豪华露营酒店', en: 'Hwangto Dunji glamping' }, region: 'jeolla', q: '황토둥지 글램핑', note: { ko: '제천. 청풍호와 황토방, 아이 동반.', ja: '済川。清風湖と黄土房、子供連れ。', zh: '堤川。清风湖和黄土房，带着孩子。', en: 'Jecheon: Cheongpung lake and clay rooms, children welcome.' } },
    { name: { ko: '서천 장항글램핑장', ja: '西川長港グランピング場', zh: '舒川长项豪华露营地', en: 'Seocheon Janghang glamping' }, region: 'jeolla', q: '장항글램핑장', note: { ko: '서천. 객실별 썬룸과 바비큐, 겨울 감성.', ja: '西川。客室別サンルームとバーベキュー、冬感性。', zh: '舒川。每个房间都有日光浴室和烧烤设施，冬天的感觉。', en: 'Seocheon: sunrooms and barbecues, good in winter.' } },
    { name: { ko: '포레스트카라반', ja: 'フォレストカラバン', zh: '森林商队', en: 'Forest Caravan' }, region: 'jeolla', q: '포레스트카라반', note: { ko: '천안. 문암제 저수지 전망 카라반.', ja: '天安。門岩製貯水池の展望カラバン。', zh: '天安。 Munamje 水库景观大篷车。', en: 'Cheonan: caravans over the Munam reservoir.' } },
    { name: { ko: '임실 저스트 글램핑', ja: '臨室ジャストグランピング', zh: '任实杰斯特豪华露营酒店', en: 'Imsil Just glamping' }, region: 'jeolla', q: '저스트글램핑', note: { ko: '임실. 장비 없이 즐기는 숙박 캠핑.', ja: '臨室。機器なしで楽しむ宿泊キャンプ。', zh: '任实。不带任何装备过夜露营。', en: 'Imsil: glamping with no equipment at all.' } },
    { name: { ko: '느랭이골 자연휴양림', ja: 'ゆるいゴール自然休養林', zh: '诺兰恩戈自然休养林', en: 'Neuraengigol recreational forest' }, region: 'jeolla', q: '느랭이골', note: { ko: '광양. 편백숲과 야간 조명.', ja: '光陽。漂白の森と夜の照明。', zh: '光阳。柏树林和夜间灯光。', en: 'Gwangyang: cypress forest and night lighting.' } },
    { name: { ko: '대숲글램핑장', ja: '大森グランピング場', zh: '大瑟露营地', en: 'Daesup glamping' }, region: 'jeolla', q: '대숲글램핑장', note: { ko: '담양. 대나무숲과 광주호 전망.', ja: '潭陽。竹林と光州湖の眺め。', zh: '潭阳。竹林和光州湖的景色。', en: 'Damyang: bamboo and the Gwangju lake.' } },
    { name: { ko: '지리산천왕봉오토캠핑장', ja: '千里山天王峰オートキャンプ場', zh: '智异山天王峰汽车露营场', en: 'Jirisan Cheonwangbong campsite' }, region: 'jeolla', q: '지리산천왕봉오토캠핑장', note: { ko: '남원. 지리산 트레킹과 연계.', ja: '南原。ジリサントレッキングと連携。', zh: '南原。与智异山徒步旅行相关。', en: 'Namwon: base for Jirisan walks.' } },
    { name: { ko: '웅천친수공원 야영장', ja: 'ウンチョン親水公園キャンプ場', zh: '熊川海滨公园露营地', en: 'Ungcheon waterfront campsite' }, region: 'jeolla', q: '웅천친수공원 야영장', note: { ko: '여수. 바다와 도심이 가까운 가벼운 캠핑.', ja: '麗水。海と都心が近い軽いキャンプ。', zh: '丽水。靠近大海和市中心的轻型露营。', en: 'Yeosu: light camping close to sea and town.' } },
    { name: { ko: '럭셔리 비토섬 제이글램핑', ja: '高級ビート島ジェイグランピング', zh: '维托岛 J 豪华露营地', en: 'Bito island J glamping' }, region: 'gyeongsang', q: '비토섬 제이글램핑', note: { ko: '사천. 섬과 바다를 앞에 둔 럭셔리 글램핑.', ja: '四川。島と海を前にしたラグジュアリーグランピング。', zh: '四川.前面是岛屿和大海的豪华豪华露营。', en: 'Sacheon: luxury glamping facing an island and the sea.' } },
    { name: { ko: '황매산잣나무숲야영장', ja: '黄梅山の松林キャンプ場', zh: '黄梅松林露营地', en: 'Hwangmaesan pine campsite' }, region: 'gyeongsang', q: '황매산잣나무숲야영장', note: { ko: '합천. 숲과 별, 황매산 억새.', ja: 'ハプチョン。森と星、黄梅山のスズメ。', zh: '陕川。森林和星星，黄梅山芒草。', en: 'Hapcheon: forest, stars and the Hwangmaesan reeds.' } },
    { name: { ko: '별자리 캠핑랜드', ja: '星座キャンプランド', zh: '星座露营地', en: 'Constellation camping land' }, region: 'gyeongsang', q: '별자리캠핑랜드', note: { ko: '경주. 별 관측과 역사 여행을 함께.', ja: '慶州。星観測と歴史旅行を一緒に。', zh: '庆州。观星与历史之旅并存。', en: 'Gyeongju: stargazing with the history sights.' } },
    { name: { ko: '썬라이즈 코스트 호미곶', ja: 'サンライズコーストホミ岬', zh: '霍米戈特日出海岸', en: 'Sunrise Coast Homigot' }, region: 'gyeongsang', q: '썬라이즈코스트', note: { ko: '포항. 호미곶 일출을 앞에 둔 오션뷰.', ja: '浦項。ホミ岬日の出を前にしたオーシャンビュー。', zh: '浦项。 Homigot 日出前的海景。', en: 'Pohang: sea views facing the Homigot sunrise.' } },
    { name: { ko: '화금지 숲속캠핑장', ja: '金庫の森のキャンプ場', zh: '花金地森林露营地', en: 'Hwageumji forest campsite' }, region: 'gyeongsang', q: '화금지 숲속캠핑장', note: { ko: '청도. 저수지와 새벽 안개.', ja: '青島。貯水池と夜明けの霧。', zh: '清道。水库和晨雾。', en: 'Cheongdo: a reservoir and dawn mist.' } },
    { name: { ko: '통영해뜰캠핑농원', ja: '統営中庭キャンプ農園', zh: '统营海特露营农场', en: 'Tongyeong Haetteul campsite' }, region: 'gyeongsang', q: '통영해뜰캠핑농원', note: { ko: '통영. 글램핑·캠핑·차박이 함께.', ja: '統営。グランピング・キャンプ・チャバクが一緒。', zh: '统营.豪华露营、露营和汽车露营在一起。', en: 'Tongyeong: glamping, tents and car camping together.' } },
    { name: { ko: '곽지몬스터캠핑', ja: 'クァクジモンスターキャンプ', zh: '郭支怪物露营', en: 'Gwakji Monster camping' }, region: 'jeju', q: '곽지몬스터캠핑', note: { ko: '제주 애월. 바다와 야자수 숲.', ja: '済州の愛月。海とヤシの木の森。', zh: '涯月，济州岛。海和棕榈林。', en: 'Aewol, Jeju: sea and palm grove.' } },
    { name: { ko: '어반티지 글램핑 카라반', ja: 'アーバンテージグランピングカラバン', zh: '乌尔班塔奇豪华露营大篷车', en: 'Urban Tige glamping caravan' }, region: 'capital', q: '어반티지 글램핑', note: { ko: '인천 강화. 카라반과 글램핑 복합형.', ja: '仁川強化。カラバンとグランピング複合型。', zh: '仁川江华.房车和豪华露营相结合的类型。', en: 'Ganghwa: caravans and glamping combined.' } },
    { name: { ko: '오크힐 글램핑', ja: 'オークヒルグランピング', zh: '橡树山豪华露营酒店', en: 'Oak Hill glamping' }, region: 'capital', q: '오크힐 글램핑', note: { ko: '인천 강화. 숲속 가족 캠핑.', ja: '仁川強化。森の中の家族キャンプ。', zh: '仁川江华.一家人在森林里露营。', en: 'Ganghwa: forest camping for families.' } },
    { name: { ko: '선재담 글램핑 & 카라반', ja: 'サンジェダムグランピング＆カラバン', zh: '仙才潭豪华露营及大篷车', en: 'Seonjaedam glamping & caravan' }, region: 'capital', q: '선재담 글램핑', note: { ko: '옹진 선재도. 섬과 바다, 카라반.', ja: 'オンジン先在図。島と海、カラバン。', zh: '瓮津仙才道。岛屿、海洋、商队。', en: 'Seonjaedo island: sea and caravans.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥖', dish: { ko: '빵 · 커피 · 과일', ja: 'パン・コーヒー・フルーツ', zh: '面包、咖啡、水果', en: 'Bread · coffee · fruit' }, note: { ko: '장을 볼 때 아침거리도 함께.', ja: '場を見る時の朝の街も一緒。', zh: '当你去杂货店购物时，你还可以吃早餐。', en: 'Buy breakfast with the rest of the shopping.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🔥', dish: { ko: '바비큐 · 구이', ja: 'バーベキュー・焼き', zh: '烧烤·烤', en: 'Barbecue' }, note: { ko: '숯과 그릴, 개별 화로 여부를 확인하세요.', ja: '炭とグリル、個別火炉かどうかを確認してください。', zh: '检查是否有木炭、烤架和单独的火盆。', en: 'Check charcoal, grill and whether the brazier is private.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '🍠', dish: { ko: '군고구마 · 감자 · 마시멜로', ja: 'サツマイモ・ジャガイモ・マシュマロ', zh: '烤红薯、土豆、棉花糖', en: 'Roast sweet potato · potatoes · marshmallows' }, note: { ko: '불멍의 기본 조합.', ja: '焚き火の基本的な組み合わせ。', zh: '佛明的基本组合。', en: 'The fire-side standard.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍜', dish: { ko: '라면 · 버섯전골 · 캠핑 스튜', ja: 'ラーメン・キノコ鍋・キャンプシチュー', zh: '拉面、蘑菇火锅、野营炖菜', en: 'Noodles · mushroom hotpot · camp stew' }, note: { ko: '기온이 떨어지면 국물이 답입니다.', ja: '気温が下がるとスープが答えです。', zh: '当气温下降时，汤就是答案。', en: 'When the temperature drops, a pot is the answer.' } }
  ],
  photos: [
    { file: 'th-camp', cap: { ko: '숲속 글램핑 사이트', ja: '森の中のグランピングサイト', zh: '森林中的豪华露营地', en: 'A glamping pitch in the trees' } },
    { file: 'th-camp-p2', cap: { ko: '캠핑장의 저녁', ja: 'キャンプ場の夜', zh: '晚上在露营地', en: 'Evening at the campsite' } }
  ],
  tip: { ko: '글램핑은 개별 화장실·샤워 유무가 만족도를 크게 가릅니다. 예약 전에 이 세 가지(화장실·난방·화로)를 확인하세요.', ja: 'グランピングは個別トイレ・シャワーの有無が満足度を大きく分けます。予約前にこの3つ（トイレ・暖房・火炉）を確認してください。', zh: '说到豪华露营，是否有独立的浴室和淋浴很大程度上决定了满意度。预订前请检查这三件事（厕所、暖气和炉子）。', en: 'At a glamping site the private bathroom decides how the night goes. Check three things before booking: bathroom, heating, fire pit.' }
},
/* ------------------------------------------------ 21 박물관·과학관 */
{
  id: 'museum', emoji: '🏛️', tint: '#C9D8F0',
  name: { ko: '박물관 · 과학관', ja: '博物館・科学館', zh: '博物馆·科学馆', en: 'Museums & science centres' },
  sub: { ko: '비가 와도 좋은 하루', ja: '雨の日でもいい一日', zh: '下雨也很棒的一天', en: 'A day that works in the rain' },
  tag: { ko: '역사 · 과학 · 자연사 · 미술', ja: '歴史・科学・自然史・美術', zh: '历史·科学·自然史·美术', en: 'History, science, natural history, art' },
  intro: {
    ko: '박물관 여행은 날씨를 이기기 쉽고, 하루에 두세 곳이면 충분히 찹니다. 국립박물관은 상설전시가 대부분 무료라 부담도 적어요. 여기서는 서울역에서 시작해 고대사에서 근현대까지 한 줄로 이어 보는 하루를 잡았습니다. 아래에 스무 가지 세부 주제와 전국 전시·체험지를 정리했으니, 관심 있는 주제부터 골라 보세요.', ja: '博物館への旅行は天気に勝ちやすく、1日に2〜3か所で十分に切ります。国立博物館は常設展示がほとんど無料で負担も少ないです。ここではソウル駅から始まり、古代史から近現代まで一行に続く一日をとりました。以下に20の細部テーマと全国展示・体験地をまとめたので、興味のあるテーマから選んでみてください。', zh: '博物馆之旅很容易不受天气影响，一天内可以轻松安排两到三个行程。国家博物馆的常设展览大部分都是免费的，所以负担比较小。在这里，我们预留一天时间从首尔站出发，一条线从古代历史到现代。我们在下面组织了20个详细的主题和全国性的展览和体验点，所以先选择您感兴趣的主题。',
    en: 'A museum day beats the weather, and two or three places fill it. Permanent exhibitions at the national museums are mostly free. This route starts at Seoul Station and runs ancient history to modern Korea in one line; below are twenty subject areas and venues across the country.'
  },
  seasons: [{ ko: '사계절', ja: '四季', zh: '四个季节', en: 'All year' }, { ko: '비 오는 날', ja: '雨の日', zh: '下雨天', en: 'Rainy days' }],
  transport: { ko: '지하철 + 도보', ja: '地下鉄＋徒歩', zh: '地铁＋步行', en: 'Subway + on foot' },
  duration: { ko: '약 8시간', ja: '約8時間', zh: '约8小时', en: 'About 8 hours' },
  hub: {
    ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station', q: '서울역',
    note: {
      ko: 'KTX·공항철도·1·4호선. 짐은 역 물품보관함에 맡기고 4호선으로 이촌역까지 한 정거장이면 첫 박물관입니다.', ja: 'KTX・空港鉄道・1・4号線。ジムは駅物品保管箱に預け、4号線で利村駅まで行った駅であれば初めての博物館です。', zh: 'KTX、机场铁路、1号线、4号线。将行李寄存在车站储物柜，乘坐4号线到二村站，一站路即可到达第一博物馆。',
      en: 'KTX, the airport railroad and lines 1 and 4. Leave the bag in a locker; one stop on Line 4 to Ichon and you are at the first museum.'
    }
  },
  course: {
    title: { ko: '서울 역사 하루 — 고대사에서 근현대까지', ja: 'ソウルの歴史一日 — 古代から近現代まで', zh: '首尔历史一天——从古代史到近现代', en: 'A day of Korean history — ancient to modern' },
    meta: { ko: '5곳 · 약 8시간 · 지하철 3회', ja: '5か所・約8時間・地下鉄3回', zh: '5个地点，约8小时，乘坐3次地铁', en: '5 stops · about 8 hours · 3 subway rides' },
    steps: [
      { phase: 'start', time: '09:30', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
        desc: { ko: '4호선으로 이촌역까지. 박물관은 10시에 열고, 오전이 가장 조용합니다.', ja: '4号線で利村駅まで。博物館は10時にオープンし、午前は最も静かです。', zh: '乘坐地铁4号线至二村站。博物馆十点开门，早上最安静。', en: 'Line 4 to Ichon; the museum opens at ten and the morning is quietest.' } },
      { phase: 'morning', time: '10:00', name: { ko: '국립중앙박물관', ja: '国立中央博物館', zh: '국립중앙박물관', en: 'National Museum of Korea' }, q: '국립중앙박물관', move: { ko: '지하철 약 15분', ja: '地下鉄約15分', zh: '乘坐地铁约15分钟', en: 'Subway, about 15 min' },
        desc: { ko: '선사시대부터 근현대까지 한 건물에서. 두 시간으로는 다 못 보니 시대를 골라 집중하세요.', ja: '先史時代から近現代まである建物で。両方の時間では見えないので、時代を選んで集中してください。', zh: '从史前时代到现代，在一栋建筑内。你不可能在两个小时内看完全部，所以选择一个时代并专注于它。', en: 'Prehistory to the present in one building; two hours will not cover it, so choose one period.' },
        photo: 'th-museum' },
      { phase: 'lunch', time: '12:20', name: { ko: '이촌동 점심', ja: 'イチョンドンランチ', zh: '촌동 점심', en: 'Lunch in Ichon' }, q: '이촌동', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '박물관 앞 골목에 식당이 많습니다. 12시 정각을 피하면 줄이 짧습니다.', ja: '博物館の前の路地にはレストランがたくさんあります。 12時の角を避けると、行が短くなります。', zh: '博物馆前的小巷里有很多餐馆。如果避开12点整，队伍会更短。', en: 'Plenty of places by the museum; avoid the stroke of noon.' } },
      { phase: 'afternoon', time: '13:30', name: { ko: '전쟁기념관', ja: '戦争記念館', zh: '战争纪念馆', en: 'War Memorial of Korea' }, q: '전쟁기념관', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
        desc: { ko: '전쟁사를 다루는 큰 전시관과 야외 장비. 무거운 주제라 오후에 시간을 넉넉히 두세요.', ja: '戦士を扱う大きな展示館と屋外機器。重いテーマなので、午後に時間を十分に残してください。', zh: '大型展厅，涵盖战争历史和户外装备。这是一个沉重的话题，所以下午要留出充足的时间。', en: 'Large galleries and outdoor equipment; the subject is heavy, so give it a full afternoon.' } },
      { phase: 'afternoon', time: '15:40', name: { ko: '대한민국역사박물관', ja: '韓国歴史博物館', zh: '国立韩国历史博物馆', en: 'National Museum of Korean Contemporary History' }, q: '대한민국역사박물관', move: { ko: '지하철 약 20분', ja: '地下鉄約20分', zh: '乘坐地铁约20分钟', en: 'Subway, about 20 min' },
        desc: { ko: '광화문. 개항기부터 오늘까지의 사회사. 실내가 넓어 마지막 관람지로 좋습니다.', ja: '光化門。開港期から今日までの社会史。室内が広く、最後の観覧地としてもいいです。', zh: '光化门。从开埠至今的社会历史。内部空间很大，是一个很好的最终观赏点。', en: 'Gwanghwamun: social history from the open ports to today — a good last stop.' },
        photo: 'th-museum-p2' },
      { phase: 'evening', time: '17:30', name: { ko: '광화문 · 경복궁 담장', ja: '光化門・景福宮フェンス', zh: '光化门·景福宫围墙', en: 'Gwanghwamun & the palace wall' },
        q: '광화문', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
        desc: { ko: '박물관에서 본 것을 실제 자리에서 한 번 더. 해 질 무렵 담장길이 좋습니다.', ja: '博物館で見たものを実際の席でもう一度。夕暮れ時のフェンスが良いです。', zh: '我在博物馆所看到的，又是在现实生活中看到的。栅栏小路在日落时很美。', en: 'One more look at the real place after the exhibits — the wall is best at dusk.' } },
      { phase: 'return', time: '18:30', name: { ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station' }, q: '서울역', move: { ko: '지하철 약 15분', ja: '地下鉄約15分', zh: '乘坐地铁约15分钟', en: 'Subway, about 15 min' },
        desc: { ko: '1호선으로 한 정거장, 또는 걸어서 20분. 저녁은 역 근처에서.', ja: '1号線にした停留所、または徒歩20分。夕方は駅の近くで。', zh: '乘坐1号线一站，步行20分钟。车站附近吃晚饭。', en: 'One stop on Line 1, or twenty minutes on foot; eat near the station.' } }
    ]
  },
  subs: {
    title: { ko: '박물관·과학관 스무 가지 주제', ja: '博物館・科学館の20のテーマ', zh: '博物馆·科学馆的二十个主题', en: 'Twenty kinds of museum' },
    items: [
      { emoji: '🏺', name: { ko: '역사·고고학', ja: '歴史・考古学', zh: '历史/考古学', en: 'History & archaeology' }, desc: { ko: '선사시대·고대국가·근현대사.', ja: '先史時代・古代国家・近現代史。', zh: '史前史、古代国家、近现代史。', en: 'Prehistory, ancient states, modern history.' } },
      { emoji: '🏠', name: { ko: '민속·전통문화', ja: '民俗・伝統文化', zh: '民俗和传统文化', en: 'Folk & tradition' }, desc: { ko: '의식주와 세시풍속, 민속놀이.', ja: '儀式酒とセシ風俗、民俗遊び。', zh: '食、衣、住、时令、民俗游戏。', en: 'Daily life, seasonal customs, folk play.' } },
      { emoji: '🔬', name: { ko: '과학관', ja: '科学館', zh: '科学博物馆', en: 'Science centres' }, desc: { ko: '물리·화학·생명과학·기술 체험.', ja: '物理・化学・生命科学・技術体験。', zh: '体验物理、化学、生命科学和技术。', en: 'Physics, chemistry, biology and technology.' } },
      { emoji: '🚀', name: { ko: '우주·천문', ja: '宇宙・天文', zh: '太空/天文学', en: 'Space & astronomy' }, desc: { ko: '행성·별·천문대·천체투영관.', ja: '惑星・星・天文台・天体投影館。', zh: '行星、恒星、天文台、天文馆。', en: 'Planets, stars, observatories, planetariums.' } },
      { emoji: '🦕', name: { ko: '자연사·공룡', ja: '自然史・恐竜', zh: '自然历史和恐龙', en: 'Natural history & dinosaurs' }, desc: { ko: '화석·광물·생물 진화.', ja: '化石・鉱物・生物進化。', zh: '化石、矿物和生物进化。', en: 'Fossils, minerals, evolution.' } },
      { emoji: '🖼️', name: { ko: '미술관·예술', ja: '美術館・芸術', zh: '美术馆和艺术', en: 'Art museums' }, desc: { ko: '회화·조각·현대미술.', ja: '絵画・彫刻・現代美術。', zh: '绘画、雕塑、现代艺术。', en: 'Painting, sculpture, contemporary art.' } },
      { emoji: '📐', name: { ko: '건축·디자인', ja: '建築・デザイン', zh: '建筑/设计', en: 'Architecture & design' }, desc: { ko: '건축물·공간·산업디자인.', ja: '建築物・空間・産業デザイン。', zh: '建筑、空间和工业设计。', en: 'Buildings, space and industrial design.' } },
      { emoji: '🚂', name: { ko: '교통·철도·자동차', ja: '交通・鉄道・自動車', zh: '交通、铁路、汽车', en: 'Transport' }, desc: { ko: '기차·자동차·항공·선박.', ja: '電車・自動車・航空・船舶。', zh: '火车、汽车、飞机、轮船。', en: 'Trains, cars, aircraft, ships.' } },
      { emoji: '✈️', name: { ko: '항공·우주항공', ja: '航空・宇宙航空', zh: '航空/航天', en: 'Aviation & aerospace' }, desc: { ko: '비행기와 조종 체험.', ja: '飛行機と操縦体験。', zh: '飞机和驾驶经验。', en: 'Aircraft and flight simulators.' } },
      { emoji: '🚢', name: { ko: '해양·선박', ja: '海洋・船舶', zh: '海洋/船舶', en: 'Maritime' }, desc: { ko: '바다·배·해양생태·항구.', ja: '海・船・海洋生態・港。', zh: '海，船舶，海洋生态，港口。', en: 'Sea, ships, marine life and ports.' } },
      { emoji: '🌾', name: { ko: '농업·농촌', ja: '農業・農村', zh: '农业/农村', en: 'Agriculture' }, desc: { ko: '농기구·식량·농업기술.', ja: '農機具・食糧・農業技術。', zh: '农业设备、食品、农业技术。', en: 'Farm tools, food and farming technology.' } },
      { emoji: '🍲', name: { ko: '음식·식문화', ja: '食品・食文化', zh: '饮食与饮食文化', en: 'Food culture' }, desc: { ko: '한식·발효·전통음식.', ja: '韓国料理・発酵・伝統料理。', zh: '韩国食品、发酵食品、传统食品。', en: 'Korean food, fermentation, tradition.' } },
      { emoji: '🏺', name: { ko: '공예·도자기', ja: '工芸・陶器', zh: '工艺品/陶器', en: 'Craft & ceramics' }, desc: { ko: '도자·목공·금속·섬유.', ja: '陶磁・木工・金属・繊維。', zh: '陶瓷、木工、金属、纺织品。', en: 'Ceramics, wood, metal, textiles.' } },
      { emoji: '🕊️', name: { ko: '독립운동·전쟁·평화', ja: '独立運動・戦争・平和', zh: '独立运动、战争、和平', en: 'Independence & war' }, desc: { ko: '독립운동·전쟁·인권.', ja: '独立運動・戦争・人権。', zh: '独立运动、战争、人权。', en: 'Independence, war, human rights.' } },
      { emoji: '💡', name: { ko: '미디어아트·디지털', ja: 'メディアアート・デジタル', zh: '媒体艺术/数字', en: 'Media art' }, desc: { ko: '몰입형 전시와 디지털 기술.', ja: '没入型展示とデジタル技術。', zh: '沉浸式展览和数字技术。', en: 'Immersive shows and digital technology.' } },
      { emoji: '🧒', name: { ko: '어린이 체험', ja: '子供体験', zh: '孩子们的经历', en: 'For children' }, desc: { ko: '놀이·교육·직접 체험.', ja: '遊び・教育・直接体験。', zh: '玩耍、教育、实践经验。', en: 'Play, learning, hands-on rooms.' } },
      { emoji: '🪨', name: { ko: '지질·광물·화석', ja: '地質・鉱物・化石', zh: '地质、矿物、化石', en: 'Geology' }, desc: { ko: '암석·지층·화석.', ja: '岩石・地層・化石。', zh: '岩石、地层、化石。', en: 'Rocks, strata, fossils.' } },
      { emoji: '🌳', name: { ko: '생태·환경', ja: '生態・環境', zh: '生态/环境', en: 'Ecology & environment' }, desc: { ko: '생태계·기후·환경보호.', ja: '生態系・気候・環境保護。', zh: '生态系统、气候和环境保护。', en: 'Ecosystems, climate, conservation.' } },
      { emoji: '🏘️', name: { ko: '지역 역사·향토', ja: '地域の歴史・郷土', zh: '当地历史/地区', en: 'Local history' }, desc: { ko: '지역 인물·유물·문화유산.', ja: '地域人物・遺物・文化遺産。', zh: '当地人、遗迹和文化遗产。', en: 'Local figures, objects, heritage.' } },
      { emoji: '🎲', name: { ko: '이색·전문 테마', ja: '異色・専門テーマ', zh: '색·전문 테마', en: 'Unusual themes' }, desc: { ko: '특이한 수집품과 전문 주제.', ja: '珍しいコレクションとプロのトピック。', zh: '不寻常的收藏和专门的主题。', en: 'Unusual collections and specialist subjects.' } }
    ]
  },
  conds: [
    { k: { ko: '관람료', ja: '観覧料', zh: '入场费', en: 'Tickets' }, v: { ko: '국립박물관 상설전 무료가 많음, 특별전·체험은 유료', ja: '国立博物館常設展無料が多い、特別展・体験は有料', zh: '国家博物馆的许多常设展览都是免费的，但特别展览和体验需要付费。', en: 'Permanent shows at national museums are often free; specials and workshops charge' } },
    { k: { ko: '휴관', ja: '休館日', zh: '闭馆日', en: 'Closing days' }, v: { ko: '대부분 월요일 휴관, 시설별 확인', ja: 'ほとんど月曜日休館、施設別確認', zh: '大多数周一休息，请咨询各设施', en: 'Most close on Mondays — check each one' } },
    { k: { ko: '시간', ja: '時間', zh: '时间', en: 'Time' }, v: { ko: '큰 박물관은 2~3시간, 과학관 체험은 4시간 이상', ja: '大きな博物館は2～3時間、科学館体験は4時間以上', zh: '大型博物馆需要2-3小时，科技馆体验至少需要4小时。', en: 'Two to three hours for a big museum; four or more at a science centre' } }
  ],
  places: [
    { name: { ko: '국립중앙박물관', ja: '国立中央博物館', zh: '국립중앙박물관', en: 'National Museum of Korea' }, region: 'capital', q: '국립중앙박물관', note: { ko: '서울 용산. 선사부터 근현대까지, 상설전 무료.', ja: 'ソウル龍山。先史から近現代まで、常設戦無料。', zh: '首尔龙山。从史前时代到现代，常设展览都是免费的。', en: 'Yongsan: prehistory to the present, permanent shows free.' } },
    { name: { ko: '국립민속박물관', ja: '国立民俗博物館', zh: '国立民俗博物馆', en: 'National Folk Museum' }, region: 'capital', q: '국립민속박물관', note: { ko: '경복궁 안. 의식주와 세시풍속.', ja: '景福宮の中。儀式主とセシ風俗。', zh: '景福宫内。饮食、衣服、住所和季节习俗。', en: 'Inside Gyeongbokgung: daily life and seasonal custom.' } },
    { name: { ko: '국립과천과학관', ja: '国立果川科学館', zh: '国立果川科学馆', en: 'Gwacheon National Science Museum' }, region: 'capital', q: '국립과천과학관', note: { ko: '우주·항공·자연사·천문관. 하루가 걸립니다.', ja: '宇宙・航空・自然史・天文館。一日かかります。', zh: '太空、航空、自然历史、天文馆。 하루า 걸립니다。', en: 'Space, aviation, natural history and a planetarium — a full day.' } },
    { name: { ko: '서울시립과학관', ja: 'ソウル市立科学館', zh: '首尔科学馆', en: 'Seoul Science Center' }, region: 'capital', q: '서울시립과학관', note: { ko: '참여형 전시, 어린이와 입문자에게.', ja: '参加型展示、子供や入門者に。', zh: '参与性展览，适合儿童和初学者。', en: 'Hands-on exhibits for children and beginners.' } },
    { name: { ko: '전쟁기념관', ja: '戦争記念館', zh: '战争纪念馆', en: 'War Memorial of Korea' }, region: 'capital', q: '전쟁기념관', note: { ko: '전쟁사와 야외 장비 전시.', ja: '戦士と屋外機器の展示。', zh: '军事历史和户外装备展览。', en: 'War history with outdoor equipment.' } },
    { name: { ko: '국립현대미술관 서울', ja: '国立現代美術館ソウル', zh: '国立现代美术馆，首尔', en: 'MMCA Seoul' }, region: 'capital', q: '국립현대미술관 서울', note: { ko: '현대미술과 미디어아트, 경복궁 옆.', ja: '現代美術とメディアアート、景福宮の隣。', zh: '景福宫旁边的当代艺术和媒体艺术。', en: 'Contemporary and media art beside Gyeongbokgung.' } },
    { name: { ko: '대한민국역사박물관', ja: '韓国歴史博物館', zh: '国立韩国历史博物馆', en: 'National Museum of Korean Contemporary History' }, region: 'capital', q: '대한민국역사박물관', note: { ko: '광화문. 개항기부터 오늘까지.', ja: '光化門。開港期から今日まで。', zh: '光化门。从开港到今天。', en: 'Gwanghwamun: from the open ports to today.' } },
    { name: { ko: '국립항공박물관', ja: '国立航空博物館', zh: '国家航空博物馆', en: 'National Aviation Museum' }, region: 'capital', q: '국립항공박물관', note: { ko: '김포. 항공 역사와 조종 시뮬레이터.', ja: '金浦。航空の歴史と操縦シミュレータ。', zh: '金浦。航空历史和驾驶模拟器。', en: 'Gimpo: aviation history and flight simulators.' } },
    { name: { ko: '국립농업박물관', ja: '国立農業博物館', zh: '国家农业博物馆', en: 'National Agricultural Museum' }, region: 'capital', q: '국립농업박물관', note: { ko: '수원. 농기구·식량·농업기술과 식물원.', ja: '水原。農機具・食糧・農業技術科植物園。', zh: '水原。农业设备、食品、农业技术和植物园。', en: 'Suwon: tools, food, farming technology and a garden.' } },
    { name: { ko: '수원화성박물관', ja: '水原華城博物館', zh: '水原华城博物馆', en: 'Suwon Hwaseong Museum' }, region: 'capital', q: '수원화성박물관', note: { ko: '정조와 화성의 도시·건축.', ja: '正祖と火星の都市・建築。', zh: '正祖和华城的城市和建筑。', en: 'Jeongjo, the fortress and its architecture.' } },
    { name: { ko: '삼성이노베이션뮤지엄', ja: 'サムスンイノベーションミュージアム', zh: '三星创新博物馆', en: 'Samsung Innovation Museum' }, region: 'capital', q: '삼성이노베이션뮤지엄', note: { ko: '수원. 반도체·디스플레이·전자산업사. 예약 확인.', ja: '水原。半導体・ディスプレイ・電子産業会社。予約確認。', zh: '水原。半导体、显示器和电子行业。确认预订。', en: 'Suwon: semiconductors, displays and electronics history; check booking.' } },
    { name: { ko: '경기도자박물관', ja: '京畿道博物館', zh: '京畿道陶瓷博物馆', en: 'Gyeonggi Ceramic Museum' }, region: 'capital', q: '경기도자박물관', note: { ko: '광주. 조선백자와 도자 체험.', ja: '広州。朝鮮白磁と陶磁体験。', zh: '光州。朝鲜白瓷和陶瓷体验。', en: 'Gwangju: Joseon white porcelain and hands-on ceramics.' } },
    { name: { ko: '한국민속촌', ja: '韓国民俗村', zh: '韩国民俗村', en: 'Korean Folk Village' }, region: 'capital', q: '한국민속촌', note: { ko: '용인. 전통가옥과 생활문화, 공연.', ja: '龍仁。伝統家屋と生活文化、公演。', zh: '员工。传统民居、生活文化和表演。', en: 'Yongin: traditional houses, daily life and performances.' } },
    { name: { ko: '국립인천해양박물관', ja: '国立仁川海洋博物館', zh: '仁川国立海洋博物馆', en: 'National Maritime Museum Incheon' }, region: 'capital', q: '국립인천해양박물관', note: { ko: '해양 역사·항만·선박.', ja: '海洋歴史・港湾・船舶。', zh: '航海历史、港口和船舶。', en: 'Maritime history, ports and ships.' } },
    { name: { ko: '국립중앙과학관', ja: '国立中央科学館', zh: '国立科学博物馆', en: 'National Science Museum' }, region: 'jeolla', q: '국립중앙과학관', note: { ko: '대전. 자연사·과학기술·천체관.', ja: '大田。自然史・科学技術・天体館。', zh: '大田。自然历史、科学技术、天文馆。', en: 'Daejeon: natural history, technology and a planetarium.' } },
    { name: { ko: '독립기념관', ja: '独立記念館', zh: '独立厅', en: 'Independence Hall of Korea' }, region: 'jeolla', q: '독립기념관', note: { ko: '천안. 독립운동사와 야외 조형물.', ja: '天安。独立運動会社と屋外造形物。', zh: '天安。独立运动历史和户外雕塑。', en: 'Cheonan: the independence movement, with outdoor monuments.' } },
    { name: { ko: '국립공주박물관', ja: '国立プリンセス博物館', zh: '国立公州博物馆', en: 'Gongju National Museum' }, region: 'jeolla', q: '국립공주박물관', note: { ko: '무령왕릉과 백제 왕실 문화.', ja: '武霊王陵と百済王室文化。', zh: '武宁王陵墓与百济王室文化。', en: 'The Muryeong royal tomb and Baekje court culture.' } },
    { name: { ko: '국립부여박물관', ja: '国立付与博物館', zh: '扶余国立博物馆', en: 'Buyeo National Museum' }, region: 'jeolla', q: '국립부여박물관', note: { ko: '백제금동대향로와 사비 백제.', ja: '百済金東対向路と私費百済。', zh: '百济鎏金铜香炉和Sabi百济。', en: 'The Baekje incense burner and Sabi-period Baekje.' } },
    { name: { ko: '한국조폐공사 화폐박물관', ja: '韓国造幣公社貨幣博物館', zh: '韩国造币公社货币博物馆', en: 'Currency Museum' }, region: 'jeolla', q: '화폐박물관', note: { ko: '대전. 화폐의 역사와 위조방지 기술.', ja: '大田。通貨の歴史と偽造防止技術。', zh: '大田。货币史和防伪技术。', en: 'Daejeon: the history of money and anti-counterfeiting.' } },
    { name: { ko: '국립청주박물관', ja: '国立清州博物館', zh: '国立清州博物馆', en: 'Cheongju National Museum' }, region: 'jeolla', q: '국립청주박물관', note: { ko: '금속공예와 불교미술.', ja: '金属工芸と仏教美術。', zh: '金属工艺品和佛教艺术。', en: 'Metalwork and Buddhist art.' } },
    { name: { ko: '국립춘천박물관', ja: '国立春川博物館', zh: '国立春川博物馆', en: 'Chuncheon National Museum' }, region: 'gangwon', q: '국립춘천박물관', note: { ko: '강원 역사와 불교미술.', ja: '江原の歴史と仏教美術。', zh: '江原道历史和佛教艺术。', en: 'Gangwon history and Buddhist art.' } },
    { name: { ko: '국립산악박물관', ja: '国立山岳博物館', zh: '国家山地博物馆', en: 'National Mountain Museum' }, region: 'gangwon', q: '국립산악박물관', note: { ko: '속초. 한국 등산사와 장비.', ja: '束草。韓国登山士と装備。', zh: '束草。韩国登山者和装备。', en: 'Sokcho: the history of Korean climbing and its gear.' } },
    { name: { ko: '태백석탄박물관', ja: '太白石炭博物館', zh: '太白煤炭博物馆', en: 'Taebaek Coal Museum' }, region: 'gangwon', q: '태백석탄박물관', note: { ko: '광산의 역사와 갱도 체험.', ja: '鉱山の歴史と坑道体験。', zh: '采矿历史和隧道经验。', en: 'Mining history and a mine tunnel experience.' } },
    { name: { ko: '국립경주박물관', ja: '国立慶州博物館', zh: '国立庆州博物馆', en: 'Gyeongju National Museum' }, region: 'gyeongsang', q: '국립경주박물관', note: { ko: '신라 금관과 성덕대왕신종.', ja: '新羅金管と城徳大王神宗。', zh: '新罗金冠和圣德王神钟。', en: 'Silla gold crowns and the Emille Bell.' } },
    { name: { ko: '국립대구과학관', ja: '国立大邱科学館', zh: '国立大邱科学馆', en: 'Daegu National Science Museum' }, region: 'gyeongsang', q: '국립대구과학관', note: { ko: '자동차·로봇·어린이 체험.', ja: '自動車・ロボット・子供体験。', zh: '汽车、机器人和儿童体验。', en: 'Cars, robots and children\u2019s exhibits.' } },
    { name: { ko: '국립해양과학관', ja: '国立海洋科学館', zh: '国立海洋科学馆', en: 'National Marine Science Museum' }, region: 'gyeongsang', q: '국립해양과학관', note: { ko: '울진. 해중전망대와 바닷속 생태.', ja: 'ウルジン。海中展望台と海中生態。', zh: '蔚珍。海底观测站和水下生态。', en: 'Uljin: an underwater observatory and marine ecology.' } },
    { name: { ko: '국립등대박물관', ja: '国立灯台博物館', zh: '国家灯塔博物馆', en: 'National Lighthouse Museum' }, region: 'gyeongsang', q: '국립등대박물관', note: { ko: '포항. 등대와 항로표지 기술.', ja: '浦項。灯台と航路標識技術。', zh: '浦项。灯塔和导航信标技术。', en: 'Pohang: lighthouses and navigation aids.' } },
    { name: { ko: '국립부산과학관', ja: '国立釜山科学館', zh: '国立釜山科学馆', en: 'Busan National Science Museum' }, region: 'gyeongsang', q: '국립부산과학관', note: { ko: '자동차·항공우주·에너지.', ja: '自動車・航空宇宙・エネルギー。', zh: '汽车、航空航天、能源。', en: 'Cars, aerospace and energy.' } },
    { name: { ko: '국립해양박물관', ja: '国立海洋博物館', zh: '国家海事博物馆', en: 'National Maritime Museum' }, region: 'gyeongsang', q: '국립해양박물관', note: { ko: '부산. 선박과 해양문화, 수족관.', ja: '釜山。船舶と海洋文化、水族館。', zh: '釜山。船舶、海洋文化、水族馆。', en: 'Busan: ships, maritime culture and an aquarium.' } },
    { name: { ko: '국립김해박물관', ja: '国立金海博物館', zh: '国立金海博物馆', en: 'Gimhae National Museum' }, region: 'gyeongsang', q: '국립김해박물관', note: { ko: '가야의 철기문화와 고분.', ja: 'ガヤの鉄器文化と古墳。', zh: '加雅的铁器文化和古墓葬。', en: 'Gaya ironwork and tombs.' } },
    { name: { ko: '국립진주박물관', ja: '国立真珠博物館', zh: '国立晋州博物馆', en: 'Jinju National Museum' }, region: 'gyeongsang', q: '국립진주박물관', note: { ko: '임진왜란과 동아시아 전쟁사.', ja: '壬辰倭乱と東アジア戦争史。', zh: '临津战争与东亚战争史。', en: 'The Imjin war and East Asian conflict.' } },
    { name: { ko: '국립광주과학관', ja: '国立広州科学館', zh: '国立光州科学馆', en: 'Gwangju National Science Museum' }, region: 'jeolla', q: '국립광주과학관', note: { ko: '우주·에너지·생활과학.', ja: '宇宙・エネルギー・生活科学。', zh: '空间、能源和生命科学。', en: 'Space, energy and everyday science.' } },
    { name: { ko: '국립광주박물관', ja: '国立広州博物館', zh: '国立光州博物馆', en: 'Gwangju National Museum' }, region: 'jeolla', q: '국립광주박물관', note: { ko: '아시아 도자문화와 신안 해저 유물.', ja: 'アジア陶磁文化と新案海底遺物。', zh: '亚洲陶瓷文化与市南水下遗迹.', en: 'Asian ceramics and the Sinan shipwreck finds.' } },
    { name: { ko: '국립나주박물관', ja: '国立ナジュ博物館', zh: '国立罗州博物馆', en: 'Naju National Museum' }, region: 'jeolla', q: '국립나주박물관', note: { ko: '마한·영산강 유역 고분문화.', ja: '麻韓・永山江流域高粉文化。', zh: '马汉-岭山流域古墓葬文化.', en: 'Mahan and Yeongsan river tomb culture.' } },
    { name: { ko: '해남공룡박물관', ja: '海南恐竜博物館', zh: '海南恐龙博物馆', en: 'Haenam Dinosaur Museum' }, region: 'jeolla', q: '해남공룡박물관', note: { ko: '공룡 화석과 발자국, 골격 전시.', ja: '恐竜化石と足跡、骨格展示。', zh: '展出恐龙化石、脚印和骨骼。', en: 'Fossils, footprints and mounted skeletons.' } },
    { name: { ko: '고창고인돌박물관', ja: '高倉庫インドール博物館', zh: '高敞吲哚博物馆', en: 'Gochang Dolmen Museum' }, region: 'jeolla', q: '고창고인돌박물관', note: { ko: '청동기 고인돌 유적과 선사문화.', ja: '青銅器のドルメン遺跡と先史文化。', zh: '青铜时代支石墓遗址和史前文化。', en: 'Bronze Age dolmens and prehistoric life.' } },
    { name: { ko: '국립제주박물관', ja: '国立済州博物館', zh: '国立济州博物馆', en: 'Jeju National Museum' }, region: 'jeju', q: '국립제주박물관', note: { ko: '탐라 역사와 해양문화.', ja: 'タムラの歴史と海洋文化。', zh: '耽罗历史和海洋文化。', en: 'Tamna history and maritime culture.' } },
    { name: { ko: '제주민속자연사박물관', ja: '済州民俗自然史博物館', zh: '济州民俗自然历史博物馆', en: 'Jeju folklore & natural history museum' }, region: 'jeju', q: '제주민속자연사박물관', note: { ko: '화산섬의 지질과 생활문화.', ja: '火山島の地質と生活文化。', zh: '火山岛的地质和生活文化。', en: 'The geology and life of a volcanic island.' } },
    { name: { ko: '제주항공우주박물관', ja: '済州航空宇宙博物館', zh: '济州航空宇宙博物馆', en: 'Jeju Aerospace Museum' }, region: 'jeju', q: '제주항공우주박물관', note: { ko: '항공사와 우주과학, 비행 체험.', ja: '航空会社と宇宙科学、飛行体験。', zh: '航空、空间科学和飞行体验。', en: 'Aviation history, space science and flight experiences.' } },
    { name: { ko: '넥슨컴퓨터박물관', ja: 'ネクソンコンピュータ博物館', zh: '尼克森计算机博物馆', en: 'Nexon Computer Museum' }, region: 'jeju', q: '넥슨컴퓨터박물관', note: { ko: '옛 컴퓨터와 게임의 역사.', ja: '古いコンピュータとゲームの歴史。', zh: '旧电脑和游戏的历史。', en: 'Old computers and the history of games.' } },
    { name: { ko: '뮤지엄김치간', ja: 'ミュージアムキムチガン', zh: '泡菜根博物馆', en: 'Museum Kimchikan' }, region: 'capital', q: '뮤지엄김치간', note: { ko: '서울. 김치와 발효문화.', ja: 'ソウル。キムチと発酵文化。', zh: '首尔。泡菜和发酵文化。', en: 'Seoul: kimchi and fermentation.' } },
    { name: { ko: '철도박물관', ja: '鉄道博物館', zh: '铁路博物馆', en: 'Railroad Museum' }, region: 'capital', q: '철도박물관', note: { ko: '의왕. 기차와 철도 역사, 야외 차량.', ja: '義王。電車と鉄道の歴史、屋外車。', zh: '义王。火车和铁路历史、户外车辆。', en: 'Uiwang: trains, railway history and outdoor rolling stock.' } },
    { name: { ko: '국립세계문자박물관', ja: '国立世界文字博物館', zh: '国立世界人物博物馆', en: 'National Museum of World Writing' }, region: 'capital', q: '국립세계문자박물관', note: { ko: '인천 송도. 세계 문자와 문명.', ja: '仁川松島。世界の文字と文明。', zh: '松岛、仁川。世界文学和文明。', en: 'Songdo: writing systems and civilisations.' } }
  ],
  food: [
    { slot: { ko: '아침', ja: '朝', zh: '早上', en: 'Breakfast' }, emoji: '🥐', dish: { ko: '토스트 · 커피', ja: 'トースト・コーヒー', zh: '吐司·咖啡', en: 'Toast · coffee' }, note: { ko: '개관 시간에 맞춰 일찍 움직입니다.', ja: '開館時間に合わせて早く動きます。', zh: '根据开放时间提早出发。', en: 'Move early enough to be at the door when it opens.' } },
    { slot: { ko: '점심', ja: 'ランチ', zh: '午餐', en: 'Lunch' }, emoji: '🍱', dish: { ko: '정식 · 덮밥 · 국수', ja: '定食・丼・麺', zh: '套餐、盖饭、面条', en: 'Set meal · rice bowl · noodles' }, note: { ko: '박물관 앞 골목은 12시에 붐빕니다.', ja: '博物館前の路地は12時に混雑しています。', zh: '中午12点，博物馆门前的小巷里就挤满了人。', en: 'The alleys by the museum fill at noon.' } },
    { slot: { ko: '간식', ja: 'おやつ', zh: '小吃', en: 'Snack' }, emoji: '☕', dish: { ko: '커피 · 케이크', ja: 'コーヒー・ケーキ', zh: '咖啡·蛋糕', en: 'Coffee · cake' }, note: { ko: '관람 사이 한 시간을 쉬어 갑니다.', ja: '観覧の間に一時間休んでいきます。', zh: '我们在两次观看之间休息一个小时。', en: 'Take an hour between buildings.' } },
    { slot: { ko: '저녁', ja: '夕方', zh: '晚餐', en: 'Dinner' }, emoji: '🍲', dish: { ko: '국밥 · 찌개 · 고기', ja: 'クッパ・チゲ・肉', zh: '汤、炖菜、肉', en: 'Rice soup · stew · grilled meat' }, note: { ko: '하루에 많이 걸었으니 든든하게.', ja: '一日にたくさん歩いたので心強く。', zh: '一天走了很多路，所以我很有信心。', en: 'You have walked a lot; eat properly.' } }
  ],
  photos: [
    { file: 'th-museum', cap: { ko: '박물관의 전시실', ja: '博物館の展示室', zh: '博物馆展览室', en: 'A museum gallery' } },
    { file: 'th-museum-p2', cap: { ko: '전시장의 유물', ja: '展示場の遺物', zh: '展厅内的文物', en: 'Objects on display' } }
  ],
  tip: { ko: '국립박물관은 월요일 휴관이 많고 상설전은 무료입니다. 특별전은 예약이 필요한 경우가 있으니 홈페이지를 먼저 보세요.', ja: '国立博物館は月曜日休館が多く、常設展は無料です。特別展は予約が必要な場合がありますので、ホームページを先にご覧ください。', zh: '国家博物馆每周一闭馆，其常设展览免费。特别展览可能需要预约，因此请先查看网站。', en: 'National museums mostly close on Mondays and permanent shows are free; special exhibitions sometimes need booking.' }
},
/* ------------------------------------------------- 22 사계절 테마여행 */
{
  id: 'seasons', emoji: '🌸', tint: '#FFC6DA',
  name: { ko: '사계절 테마여행', ja: '四季のテーマ旅', zh: '四季主题旅行', en: 'Four seasons' },
  sub: { ko: '봄·여름·가을·겨울, 계절마다 다른 하루', ja: '春・夏・秋・冬、季節ごとに違う一日', zh: '春、夏、秋、冬，每个季节都不一样的一天', en: 'A different day in each season' },
  tag: { ko: '꽃 · 바다 · 단풍 · 눈', ja: '花・海・紅葉・雪', zh: '花·海·红叶·雪', en: 'Blossom, sea, leaves, snow' },
  intro: {
    ko: '계절은 여행지의 성격을 바꿉니다. 같은 산이라도 봄에는 철쭉, 가을에는 단풍, 겨울에는 눈꽃이 됩니다. 아래에서 계절을 고르면 그 계절의 세부 테마 스무 가지와 대표 여행지, 그리고 역·터미널에서 시작하는 당일 코스가 나옵니다. 꽃과 단풍, 얼음축제는 해마다 시기가 달라지니 떠나기 전에 공지를 확인하세요.', ja: '季節は旅行先の性格を変えます。同じ山でも春にはツツジ、秋には紅葉、冬には雪の花になります。下から季節を選ぶと、その季節の細部テーマ二十枝と代表旅行先、そして駅・ターミナルで始まる当日コースが出ます。花や紅葉、氷祭りは毎年時期が変わるので、出発前にお知らせを確認してください。', zh: '季节会改变目的地的特征。即使在同一座山上，春天也是杜鹃花，秋天是枫叶，冬天是雪花。如果您选择以下季节，则会显示该季节的20个详细主题、代表性旅行目的地以及从车站或客运站出发的一日路线。每年的花期、红叶期和冰雪节时间都会有所不同，因此请在出发前查看通知。',
    en: 'Season changes what a place is: the same mountain is azaleas in spring, maples in autumn and snow in winter. Choose a season below for its twenty sub-themes, the places to go, and a one-day course starting at a station or terminal. Blooming, peak foliage and ice festivals shift every year — check the notice before you go.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '겨울', ja: '冬', zh: '冬天', en: 'Winter' }],
  transport: { ko: 'KTX·기차 + 버스', ja: 'KTX・列車＋バス', zh: 'KTX·火车＋巴士', en: 'KTX or train + bus' },
  duration: { ko: '계절별 8~12시간', ja: '季節別8～12時間', zh: '8-12小时，视季节而定', en: '8–12 hours per season' },
  hub: {
    ko: '서울역', ja: 'ソウル駅', zh: '首尔站', en: 'Seoul Station', q: '서울역',
    note: {
      ko: '사계절 코스는 각 계절의 대표 역·터미널에서 시작합니다. 아래 계절을 골라 출발지와 시간을 확인하세요. 서울에서는 KTX로 두 시간 안팎이면 대부분 닿습니다.', ja: '四季コースは各季節の代表駅・ターミナルから始まります。以下の季節を選んで、出発地と時間を確認してください。ソウルではKTXで2時間内外であればほとんど届きます。', zh: '四个季节的路线从每个季节的代表车站/客运站出发。选择下面的季节以查看出发点和时间。乘坐KTX大约两个小时即可到达首尔的大部分地方。',
      en: 'Each seasonal course starts at its own station or terminal — pick a season below to see the start and the times. Most are within about two hours of Seoul by KTX.'
    }
  },
  conds: [
    { k: { ko: '시기', ja: '時期', zh: '时期', en: 'Timing' }, v: { ko: '꽃·단풍·얼음은 해마다 2~3주 차이 — 개화·절정 공지 확인', ja: '花・紅葉・氷は毎年2～3週間違い — 開花・絶頂お知らせ確認', zh: '花朵、树叶和冰河期每年都会有2-3周的变化 — 查看开花/旺季通知', en: 'Blooms, foliage and ice shift by two to three weeks a year' } },
    { k: { ko: '요금', ja: '料金', zh: '费率', en: 'Cost' }, v: { ko: '공원·산 무료, 축제·케이블카·수목원은 유료', ja: '公園・山無料、祭り・ケーブルカー・樹木園は有料', zh: '公园和山脉免费，节日、缆车和植物园付费', en: 'Parks and mountains free; festivals, cable cars and gardens charge' } },
    { k: { ko: '준비', ja: '準備', zh: '准备', en: 'Bring' }, v: { ko: '계절별 복장·신발, 물, 주말엔 주차보다 대중교통', ja: '季節別服装・靴、水、週末には駐車より公共交通機関', zh: '季节性服装/鞋子、水、公共交通，而不是周末停车。', en: 'Season-appropriate clothes and shoes, water; transit beats parking at weekends' } }
  ],
  seasons4: {
    title: { ko: '계절을 골라 보세요', ja: '季節を選んでください', zh: '请选择季节', en: 'Pick a season' },
    items: [
      {
        key: 'spring', emoji: '🌸',
        name: { ko: '봄 여행', ja: '春の旅', zh: '春季旅行', en: 'Spring' }, months: { ko: '3~5월', ja: '3～5月', zh: '3月~5月', en: 'March–May' },
        blurb: { ko: '꽃과 새싹, 정원과 봄나들이. 벚꽃·매화·산수유·유채가 차례로 피고, 남도에서는 봄나물과 주꾸미가 제철입니다.', ja: '花と芽、庭と春の出かけ。桜・梅・サンシュユ・菜種が順番に咲き、南道では春のハーブと桃が旬です。', zh: '鲜花和花蕾、花园和春天郊游。樱花、梅花、山茱萸、油菜花相继绽放，春季蔬菜、章鱼等在南岛上市。', en: 'Blossom and new green: cherry, plum, cornel and rapeseed in turn, with spring greens and webfoot octopus in the south.' },
        themes: [
          { ko: '벚꽃', ja: '桜', zh: '樱花', en: 'Cherry blossom' }, { ko: '진달래·철쭉', ja: 'チンダルレ・ツツジ', zh: '金达莱·杜鹃', en: 'Azalea' }, { ko: '유채꽃', ja: '菜の花', zh: '油菜花', en: 'Rapeseed' }, { ko: '튤립', ja: 'チューリップ', zh: '郁金香', en: 'Tulips' },
          { ko: '매화', ja: '梅', zh: '梅花', en: 'Plum blossom' }, { ko: '산수유', ja: 'サンシュユ', zh: '山茱萸', en: 'Cornelian cherry' }, { ko: '목련', ja: 'モクレン', zh: '玉兰', en: 'Magnolia' }, { ko: '복사꽃·배꽃', ja: 'コピー花・お花', zh: '桃花和梨花', en: 'Peach & pear blossom' },
          { ko: '봄 야생화', ja: '春の野生の花', zh: '春天的野花', en: 'Wildflowers' }, { ko: '봄 정원', ja: '春の庭', zh: '春天的花园', en: 'Spring gardens' }, { ko: '봄 바다', ja: '春の海', zh: '春海', en: 'Spring sea' }, { ko: '봄 섬', ja: '春の島', zh: '泉岛', en: 'Spring islands' },
          { ko: '봄 산행', ja: '春の散歩', zh: '春季远足', en: 'Spring hiking' }, { ko: '봄 트레킹', ja: '春のトレッキング', zh: '春季徒步旅行', en: 'Spring trails' }, { ko: '봄 피크닉', ja: '春のピクニック', zh: '春天野餐', en: 'Picnics' }, { ko: '봄 캠핑', ja: '春のキャンプ', zh: '春季露营', en: 'Spring camping' },
          { ko: '봄 농촌 체험', ja: '春の農村体験', zh: '春天乡村体验', en: 'Farm visits' }, { ko: '봄 먹거리', ja: '春の食べ物', zh: '春季食品', en: 'Spring food' }, { ko: '봄 사진', ja: '春の写真', zh: '春天的照片', en: 'Spring photography' }, { ko: '봄 감성', ja: '春の感性', zh: '春天的情感', en: 'Quiet spring corners' }
        ],
        places: [
          { name: { ko: '진해 여좌천', ja: '鎮海女座川', zh: '镇海余佐川', en: 'Jinhae Yeojwacheon' }, region: 'gyeongsang', q: '여좌천', note: { ko: '벚꽃 터널과 개천 산책. 봄 벚꽃축제의 대표 명소.', ja: '桜トンネルと開川散策。春桜まつりの代表スポット。', zh: '樱花隧道和溪流步道。春季樱花祭的代表性景点。', en: 'A tunnel of cherries over the stream — the classic blossom walk.' } },
          { name: { ko: '광양 매화마을', ja: '光陽梅村', zh: '光阳梅村', en: 'Gwangyang plum village' }, region: 'jeolla', q: '광양 매화마을', note: { ko: '섬진강을 배경으로 한 하얀 매화. 3월 중순.', ja: '島津川を背景にした白い梅。 3月中旬。', zh: '以蟾津江为背景的白梅花。三月中旬。', en: 'White plum against the Seomjin river, mid-March.' } },
          { name: { ko: '구례 산수유마을', ja: '求礼サンシュユ村', zh: '求礼山茱萸村', en: 'Gurye cornelian village' }, region: 'jeolla', q: '구례 산수유마을', note: { ko: '노란 산수유꽃 군락과 산촌 풍경. 3월.', ja: '黄色いサンシュユの花の群落と山村の風景。3月。', zh: '黄色的山茱萸花海与山村风景。3月。', en: 'Yellow cornel blossoms over a mountain village, March.' } },
          { name: { ko: '하동 십리벚꽃길', ja: '河東十里桜の道', zh: '河东西普尼樱花路', en: 'Hadong cherry road' }, region: 'gyeongsang', q: '하동 십리벚꽃길', note: { ko: '섬진강을 따라 이어지는 벚꽃 드라이브.', ja: '島津川沿いの桜ドライブ。', zh: '沿着蟾津江行驶樱花。', en: 'A cherry drive along the Seomjin.' } },
          { name: { ko: '경주 보문호', ja: '慶州ボムンホ', zh: '庆州普门湖', en: 'Gyeongju Bomun lake' }, region: 'gyeongsang', q: '보문호', note: { ko: '호수 둘레 벚꽃과 유적 여행을 함께.', ja: '湖の周りの桜と遺跡旅行を一緒に。', zh: '游览湖边的樱花和遗迹。', en: 'Lakeside blossom with the Silla sites.' } },
          { name: { ko: '보성 녹차밭', ja: '宝城緑茶畑', zh: '宝城绿茶田', en: 'Boseong tea fields' }, region: 'jeolla', q: '보성 녹차밭', note: { ko: '봄 신록의 차밭. 차 문화 체험과 함께.', ja: '春新緑の茶畑。お茶文化体験とともに。', zh: '春天的新鲜绿茶田。具有茶文化体验。', en: 'Spring green tea terraces, with tea culture.' } },
          { name: { ko: '제주 섭지코지', ja: '済州ソプジコージー', zh: '济州涉地可支', en: 'Seopjikoji, Jeju' }, region: 'jeju', q: '섭지코지', note: { ko: '유채꽃과 푸른 바다, 봄 해안 드라이브.', ja: '菜の花と青い海、春の海岸ドライブ。', zh: '油菜花，碧海，春风滨海。', en: 'Rapeseed and blue water on a spring drive.' } },
          { name: { ko: '태안 튤립꽃밭', ja: '泰安チューリップ花畑', zh: '泰安郁金香花田', en: 'Taean tulip fields' }, region: 'jeolla', q: '태안 세계튤립꽃박람회', note: { ko: '4월 튤립 정원. 행사 개최 여부 확인.', ja: '4月のチューリップガーデン。イベント開催を確認。', zh: '四月的郁金香花园。检查是否会举办该活动。', en: 'Tulip gardens in April; check whether the event runs.' } }
        ],
        course: {
          title: { ko: '진해 — 벚꽃터널 하루', ja: '鎮海 — 桜のトンネルの一日', zh: '镇海——樱花隧道的一天', en: 'Jinhae — a day under the cherry tunnel' },
          meta: { ko: '6곳 · 약 8시간 · 도보 5km', ja: '6ヶ所・約8時間・徒歩5km', zh: '6个地点，约8小时，步行5公里', en: '6 stops · about 8 hours · 5 km on foot' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '진해역', ja: '金海駅', zh: '镇海站', en: 'Jinhae Station' }, q: '진해역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
              desc: { ko: '경전선 기차역. 축제 기간에는 열차가 증편되고, 역에서 여좌천까지 걸어서 20분입니다.', ja: '軽戦線駅。祭り期間には列車が増便され、駅から女座川まで徒歩20分です。', zh: '庆全线火车站。节日期间车次较多，从车站步行20分钟即可到达余佐川。', en: 'On the Gyeongjeon line; trains are added in festival week and the stream is twenty minutes on foot.' } },
            { phase: 'morning', time: '09:30', name: { ko: '여좌천 벚꽃터널', ja: '女座川桜トンネル', zh: '余佐川樱花隧道', en: 'Yeojwacheon cherry tunnel' }, q: '여좌천', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
              desc: { ko: '개천 위로 벚나무가 터널을 만듭니다. 오전 10시 전이 사람이 가장 적습니다.', ja: '開川の上に桜がトンネルを作ります。午前10時、転移者が一番少ない。', zh: '樱桃树在溪流上形成了一条隧道。上午10点前人最少。', en: 'The cherries close over the stream; before ten is the quietest.' },
              photo: 'th-seasons' },
            { phase: 'morning', time: '11:00', name: { ko: '경화역 벚꽃길', ja: '硬化駅桜道', zh: '庆和站樱花路', en: 'Gyeonghwa Station cherry road' }, q: '경화역', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
              desc: { ko: '기차 선로 옆으로 벚나무가 이어지는 사진 명소. 열차 통과 시간을 확인하세요.', ja: '電車線の横に桜が続く写真スポット。列車の通過時間を確認してください。', zh: '铁轨旁有樱花树的拍照地点。检查火车通过时间。', en: 'Cherries along the track — a famous photograph; check when a train passes.' } },
            { phase: 'lunch', time: '12:30', name: { ko: '진해 중앙시장', ja: '金海中央市場', zh: '镇海中央市场', en: 'Jinhae central market' }, q: '진해 중앙시장', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
              desc: { ko: '점심은 시장에서. 진해는 해물과 회, 군항제 기간의 거리 음식이 많습니다.', ja: 'ランチは市場で。鎮海には海鮮や刺身、軍港制期間の街並みがたくさんあります。', zh: '在市场吃午餐。军航节期间，镇海有很多海鲜、生鱼和街头小吃。', en: 'Lunch at the market: seafood, raw fish and festival street food.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '진해루 · 해양공원', ja: '金海楼・海洋公園', zh: 'Jinhaeru·海洋公园', en: 'Jinhaeru & marine park' }, q: '진해루', move: { ko: '차 약 10분', ja: '車約10分', zh: '车程约10分钟', en: 'Drive, about 10 min' },
              desc: { ko: '호수와 바다를 잇는 공원. 벚꽃 아래에서 쉬기 좋습니다.', ja: '湖と海を結ぶ公園。桜の下でお休みください。', zh: '连接湖和海的公园。在樱花树下休息真是太好了。', en: 'A park between lake and sea — a good place to sit under the blossom.' } },
            { phase: 'afternoon', time: '15:30', name: { ko: '안민고개', ja: 'アンミンの頭', zh: '安民关', en: 'Anmin ridge' }, q: '안민고개', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
              desc: { ko: '진해 시내와 바다를 내려다보는 고개. 벚꽃과 어우러진 전망이 좋습니다.', ja: '鎮海のダウンタウンと海を見下ろす頭。桜との調和のとれた景色が良いです。', zh: '一座俯瞰镇海市中心和大海的小山。与樱花相结合的景色真是太棒了。', en: 'A ridge over town and sea, with blossom in the foreground.' } },
            { phase: 'return', time: '17:00', name: { ko: '진해역', ja: '金海駅', zh: '镇海站', en: 'Jinhae Station' }, q: '진해역', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
              desc: { ko: '역으로 돌아와 기차. 축제 기간 막차는 일찍 매진될 수 있습니다.', ja: '駅に戻って電車。祭りの期間の終わりは早く完売することができます。', zh: '返回车站并乘坐火车。节日期间的末班车可能会提前售完。', en: 'Back to the station; festival-week trains sell out early.' } }
          ]
        }
      },
      {
        key: 'summer', emoji: '🌊',
        name: { ko: '여름 여행', ja: '夏の旅', zh: '夏季旅行', en: 'Summer' }, months: { ko: '6~8월', ja: '6～8月', zh: '六月~八月', en: 'June–August' },
        blurb: { ko: '물과 그늘. 해수욕장과 계곡, 폭포, 서핑과 래프팅, 연꽃과 수국, 그리고 더위를 피하는 숲길과 동굴입니다.', ja: '水と日陰。海水浴場や渓谷、滝、サーフィンとラフティング、蓮の花とアジサイ、そして熱を避ける森の道と洞窟です。', zh: '水和阴影。海滩、山谷、瀑布、冲浪和漂流、莲花和绣球花、以及避暑的森林小道和洞穴。', en: 'Water and shade: beaches, valleys, waterfalls, surfing and rafting, lotus and hydrangea, and forest paths or caves to escape the heat.' },
        themes: [
          { ko: '해수욕장', ja: '海水浴場', zh: '海滩', en: 'Beaches' }, { ko: '계곡', ja: '谷', zh: '山谷', en: 'Valleys' }, { ko: '폭포', ja: '滝', zh: '瀑布', en: 'Waterfalls' }, { ko: '섬 여행', ja: '島旅行', zh: '海岛之旅', en: 'Islands' },
          { ko: '서핑', ja: 'サーフィン', zh: '冲浪', en: 'Surfing' }, { ko: '수상레포츠', ja: '水上レポート', zh: '水上运动', en: 'Water sports' }, { ko: '래프팅', ja: 'ラフティング', zh: '漂流', en: 'Rafting' }, { ko: '워터파크', ja: 'ウォーターパーク', zh: '水上乐园', en: 'Water parks' },
          { ko: '자연휴양림', ja: '自然休養林', zh: '自然休闲林', en: 'Recreational forests' }, { ko: '계곡 캠핑', ja: '谷のキャンプ', zh: '山谷露营', en: 'Valley camping' }, { ko: '여름 숲길', ja: '夏の森の道', zh: '夏季森林公路', en: 'Forest walks' }, { ko: '여름 정원', ja: '夏の庭', zh: '夏季花园', en: 'Summer gardens' },
          { ko: '연꽃', ja: '蓮の花', zh: '莲花', en: 'Lotus' }, { ko: '수국', ja: 'あじさい', zh: '绣球花', en: 'Hydrangea' }, { ko: '여름 꽃', ja: '夏の花', zh: '夏天的花', en: 'Summer flowers' }, { ko: '여름 야간', ja: '夏の夜', zh: '夏夜', en: 'Summer nights' },
          { ko: '여름 별빛', ja: '夏のスターライト', zh: '夏日星光', en: 'Summer stars' }, { ko: '여름 축제', ja: '夏祭り', zh: '夏日祭', en: 'Summer festivals' }, { ko: '여름 먹거리', ja: '夏の食べ物', zh: '夏季食物', en: 'Summer food' }, { ko: '여름 휴양', ja: '夏休み', zh: '夏季休闲', en: 'Summer rest' }
        ],
        places: [
          { name: { ko: '양양 서피비치', ja: '陽陽サーフィービーチ', zh: '襄阳冲浪海滩', en: 'Surfyy Beach, Yangyang' }, region: 'gangwon', q: '서피비치', note: { ko: '서핑과 해변 액티비티. 강습과 보드 대여.', ja: 'サーフィンとビーチのアクティビティ。レッスンとボードレンタル。', zh: '冲浪和海滩活动。课程和董事会租赁。', en: 'Surfing and beach activities, with lessons and board hire.' } },
          { name: { ko: '해운대해수욕장', ja: '海雲台海水浴場', zh: '海云台海水浴场', en: 'Haeundae Beach' }, region: 'gyeongsang', q: '해운대해수욕장', note: { ko: '대표 여름 해변. 야경과 해양레포츠.', ja: '代表的な夏のビーチ。夜景と海洋レポート。', zh: '具有代表性的夏季海滩。夜景及海上休闲运动。', en: 'The big summer beach, with night views and water sports.' } },
          { name: { ko: '함덕해수욕장', ja: '咸徳海水浴場', zh: '咸德海滩', en: 'Hamdeok Beach' }, region: 'jeju', q: '함덕해수욕장', note: { ko: '에메랄드빛 얕은 바다, 가족에게 좋습니다.', ja: 'エメラルド光の浅い海、家族に最適です。', zh: '翡翠色的浅水区，非常适合家庭游玩。', en: 'Shallow turquoise water, good for families.' } },
          { name: { ko: '문경 용추계곡', ja: 'ムンギョンヨンチュ渓谷', zh: '闻庆龙湫溪谷', en: 'Mungyeong Yongchu valley' }, region: 'gyeongsang', q: '용추계곡', note: { ko: '숲과 계곡의 시원한 물. 여름 피서.', ja: '森と谷の涼しい水。夏のフィサー。', zh: '森林和山谷中的清凉水。暑假。', en: 'Cold water under forest — a summer retreat.' } },
          { name: { ko: '포천 백운계곡', ja: '浦川白雲渓谷', zh: '抱川白云溪谷', en: 'Pocheon Baegun valley' }, region: 'capital', q: '백운계곡', note: { ko: '수도권에서 가까운 계곡 물놀이.', ja: '首都圏に近い渓谷の水遊び。', zh: '在靠近首都圈的山谷里戏水。', en: 'A valley close to Seoul for a water day.' } },
          { name: { ko: '정선 화암동굴', ja: 'チョンソン花岩洞窟', zh: '旌善画岩洞', en: 'Jeongseon Hwaam cave' }, region: 'gangwon', q: '화암동굴', note: { ko: '연중 서늘한 동굴, 더위를 피하는 이색 여행.', ja: '一年中涼しい洞窟、暑さを避ける異色の旅。', zh: '在终年凉爽的洞穴中避暑的独特之旅。', en: 'A cave that stays cool — an unusual way to escape the heat.' } },
          { name: { ko: '담양 죽녹원', ja: '潭陽竹緑園', zh: '潭阳竹绿园', en: 'Juknokwon, Damyang' }, region: 'jeolla', q: '죽녹원', note: { ko: '대나무숲 그늘길, 여름이 가장 좋습니다.', ja: '竹林の日陰、夏が一番です。', zh: '竹林里的绿荫小道，夏天最好看。', en: 'Bamboo shade, at its best in summer.' } },
          { name: { ko: '무안 회산백련지', ja: '武安会産白蓮寺', zh: '务安会山白莲池', en: 'Muan white lotus pond' }, region: 'jeolla', q: '회산백련지', note: { ko: '7~8월 연꽃 군락. 아침에 피어 있습니다.', ja: '7～8月蓮の群落。朝に咲いています。', zh: '莲花群落从七月到八月。它在早晨开花。', en: 'Lotus in July and August, open in the morning.' } },
          { name: { ko: '고성 상족암', ja: '古城上足がん', zh: '高城上曹庵', en: 'Goseong Sangjokam' }, region: 'gyeongsang', q: '상족암', note: { ko: '해안 절경과 공룡 발자국, 해식동굴.', ja: '海岸の絶景と恐竜の足跡、海食洞窟。', zh: '美丽的海岸风光、恐龙足迹、海蚀洞。', en: 'Sea cliffs, dinosaur footprints and a sea cave.' } },
          { name: { ko: '울릉도', ja: '鬱陵島', zh: '郁陵岛', en: 'Ulleungdo' }, region: 'gyeongsang', q: '울릉도', note: { ko: '맑은 바다와 해안도로, 섬 트레킹.', ja: '澄んだ海と海岸道路、島のトレッキング。', zh: '清澈的海水、沿海的道路、海岛徒步。', en: 'Clear water, a coastal road and island walking.' } },
          { name: { ko: '삼척 장호항', ja: 'サムチョクチャンホ港', zh: '三陟江湖港', en: 'Samcheok Jangho' }, region: 'gangwon', q: '장호항', note: { ko: '맑은 항구, 스노클링과 해안 산책.', ja: '日当たりの良い港、シュノーケリング、海岸の散歩。', zh: '清澈的海港、浮潜和沿海散步。', en: 'A clear harbour for snorkelling and a coast walk.' } },
          { name: { ko: '인제 내린천', ja: 'インジェナリンチョン', zh: '仁济乃仁川溪流', en: 'Inje Naerincheon' }, region: 'gangwon', q: '내린천', note: { ko: '래프팅과 급류. 5~9월 예약제.', ja: 'ラフティングと急流。 5～9月の予約制。', zh: '漂流和白水。 5月至9月实行预约制。', en: 'Rafting on white water, May to September, by booking.' } }
        ],
        course: {
          title: { ko: '양양 — 서핑과 동해 바다 하루', ja: '襄陽 — サーフィンと東海の一日', zh: '襄阳——冲浪与东海的一天', en: 'Yangyang — a day of surf and the East Sea' },
          meta: { ko: '6곳 · 약 9시간 · 버스 3회', ja: '6か所・約9時間・バス3回', zh: '6个地点，约9小时，3辆巴士', en: '6 stops · about 9 hours · 3 buses' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '양양시외버스터미널', ja: '陽陽市外バスターミナル', zh: '襄阳市外巴士客运站', en: 'Yangyang bus terminal' }, q: '양양시외버스터미널', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
              desc: { ko: '동서울에서 2시간 남짓. 터미널에서 해변까지 버스로 20분입니다.', ja: '東ソウルで2時間余り。ターミナルからビーチまでバスで20分です。', zh: '距东首尔约2小时车程。从客运站乘坐巴士20分钟即可到达海滩。', en: 'A little over two hours from Dong Seoul; the beach is twenty minutes by bus.' } },
            { phase: 'morning', time: '09:40', name: { ko: '서피비치', ja: 'サーフィービーチ', zh: '冲浪海滩', en: 'Surfyy Beach' }, q: '서피비치', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
              desc: { ko: '오전 파도가 초보에게 좋습니다. 강습은 2시간, 보드와 슈트는 현장 대여가 됩니다.', ja: '午前の波は初心者に良いです。講習は2時間、ボードとスーツは現場レンタルとなります。', zh: '晨浪对于初学者来说很有好处。课程时长2小时，可以在现场租用冲浪板和套装。', en: 'Morning waves suit beginners; lessons run two hours and boards are hired on site.' },
              photo: 'th-seasons-p2' },
            { phase: 'lunch', time: '12:30', name: { ko: '해변 점심', ja: 'ビーチランチ', zh: '海滩午餐', en: 'Lunch at the beach' }, q: '양양', move: { ko: '도보', ja: '歩く', zh: '步行', en: 'On foot' },
              desc: { ko: '바다를 보며 한 끼. 여름 양양은 해물라면과 냉면이 기본입니다.', ja: '海を見ながら一食。夏の陽陽はシーフードラーメンと冷麺が基本です。', zh: '一边吃饭一边看海。夏日洋洋以海鲜拉面和冷面为主。', en: 'A meal facing the water: seafood noodles and cold noodles.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '죽도해변', ja: '竹島ビーチ', zh: '竹岛海滩', en: 'Jukdo Beach' }, q: '죽도해변', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
              desc: { ko: '서핑으로 유명한 작은 해변. 물이 빠지면 넓은 모래밭이 드러납니다.', ja: 'サーフィンで有名な小さなビーチ。水が落ちると広い砂場が現れます。', zh: '以冲浪而闻名的小海滩。当水退去时，露出一片宽阔的沙地。', en: 'A small surf beach; at low tide a wide sand flat appears.' } },
            { phase: 'afternoon', time: '15:30', name: { ko: '하조대', ja: 'ハジョデ', zh: '河城台', en: 'Hajodae' }, q: '하조대', move: { ko: '차 약 15분', ja: '車約15分', zh: '车程约15分钟', en: 'Drive, about 15 min' },
              desc: { ko: '절벽 위 정자와 등대. 동해가 한눈에 들어옵니다.', ja: '崖の上の精子と灯台。東海が一目で入ります。', zh: '悬崖上的亭子和灯塔。东海一览无余。', en: 'A pavilion and lighthouse on the cliff, with the East Sea below.' } },
            { phase: 'evening', time: '17:00', name: { ko: '양양전통시장', ja: '陽陽伝統市場', zh: '襄阳传统市场', en: 'Yangyang market' }, q: '양양전통시장', move: { ko: '차 약 20분', ja: '車約20分', zh: '车程约20分钟', en: 'Drive, about 20 min' },
              desc: { ko: '저녁과 간식은 시장에서. 해산물과 옥수수가 여름의 맛입니다.', ja: '夕食と軽食は市場で。シーフードとトウモロコシが夏の味です。', zh: '在市场享用晚餐和小吃。海鲜和玉米是夏天的美味。', en: 'Dinner and snacks at the market — seafood and sweetcorn.' } },
            { phase: 'return', time: '18:30', name: { ko: '양양시외버스터미널', ja: '陽陽市外バスターミナル', zh: '襄阳市外巴士客运站', en: 'Yangyang bus terminal' }, q: '양양시외버스터미널', move: { ko: '도보 약 10분', ja: '徒歩約10分', zh: '步行约10分钟', en: 'Walk, about 10 min' },
              desc: { ko: '터미널로 돌아와 버스. 여름 주말 막차는 미리 예매하세요.', ja: 'ターミナルに戻ってバス。夏の週末の終わりは事前に予約してください。', zh: '返回客运站并乘坐巴士。提前预订夏季周末的末班车。', en: 'Back at the terminal; book the weekend evening bus ahead.' } }
          ]
        }
      },
      {
        key: 'autumn', emoji: '🍁',
        name: { ko: '가을 여행', ja: '秋の旅', zh: '秋季旅行', en: 'Autumn' }, months: { ko: '9~11월', ja: '9～11月', zh: '9月~11月', en: 'September–November' },
        blurb: { ko: '색과 수확. 단풍과 억새, 은행나무, 갈대와 메밀꽃, 그리고 사과·감·고구마 수확과 황금 들녘입니다.', ja: '色と収穫。紅葉とスズメ、イチョウ、葦とそばの花、そしてリンゴ・柿・さつまいも収穫と黄金の浮き彫りです。', zh: '颜色和收获。秋天的树叶、芒草、银杏树、芦苇、荞麦花、苹果、柿子、红薯的丰收，还有金色的田野。', en: 'Colour and harvest: maples and silver grass, ginkgo, reeds and buckwheat, apples and persimmons, and golden rice fields.' },
        themes: [
          { ko: '단풍', ja: '紅葉', zh: '秋天的树叶', en: 'Autumn leaves' }, { ko: '은행나무', ja: 'イチョウの木', zh: '银杏树', en: 'Ginkgo' }, { ko: '억새', ja: 'スキップ', zh: '银草', en: 'Silver grass' }, { ko: '갈대', ja: '葦', zh: '芦苇', en: 'Reeds' },
          { ko: '코스모스', ja: 'コスモス', zh: '宇宙', en: 'Cosmos' }, { ko: '핑크뮬리', ja: 'ピンクミュリー', zh: '粉红穆赫利', en: 'Pink muhly' }, { ko: '국화', ja: '菊', zh: '菊花', en: 'Chrysanthemum' }, { ko: '구절초', ja: '詩', zh: '九节町', en: 'Wild aster' },
          { ko: '메밀꽃', ja: 'そばの花', zh: '荞麦花', en: 'Buckwheat' }, { ko: '가을 정원', ja: '秋の庭', zh: '秋天的花园', en: 'Autumn gardens' }, { ko: '가을 산행', ja: '秋の散歩', zh: '秋季徒步旅行', en: 'Autumn hiking' }, { ko: '가을 트레킹', ja: '秋のトレッキング', zh: '秋季徒步旅行', en: 'Autumn trails' },
          { ko: '가을 드라이브', ja: '秋のドライブ', zh: '秋季驾驶', en: 'Autumn drives' }, { ko: '농촌 수확', ja: '農村収穫', zh: '农村丰收', en: 'Harvest visits' }, { ko: '황금 들녘', ja: 'ゴールデンバイク', zh: '金色的田野', en: 'Rice fields' }, { ko: '가을 캠핑', ja: '秋のキャンプ', zh: '秋季露营', en: 'Autumn camping' },
          { ko: '가을 섬', ja: '秋の島', zh: '秋岛', en: 'Autumn islands' }, { ko: '가을 축제', ja: '秋祭り', zh: '秋季节', en: 'Autumn festivals' }, { ko: '가을 먹거리', ja: '秋の食べ物', zh: '秋季食物', en: 'Autumn food' }, { ko: '가을 감성', ja: '秋の感性', zh: '秋天的感性', en: 'Quiet autumn corners' }
        ],
        places: [
          { name: { ko: '설악산', ja: '雪岳山', zh: '雪岳山', en: 'Seoraksan' }, region: 'gangwon', q: '설악산', note: { ko: '10월 중순 단풍 절정. 케이블카와 계곡 코스.', ja: '10月中旬の紅葉絶頂。ケーブルカーと谷のコース。', zh: '十月中旬是红叶盛期。缆车和山谷课程。', en: 'Peak colour mid-October, by cable car or valley path.' } },
          { name: { ko: '내장산', ja: '内臓山', zh: '内藏山', en: 'Naejangsan' }, region: 'jeolla', q: '내장산', note: { ko: '단풍터널로 유명한 산. 11월 초가 절정.', ja: '紅葉トンネルで有名な山。 11月初秋絶頂。', zh: '以枫树隧道而闻名的山。 11月初是高峰期。', en: 'The famous maple tunnel, peaking in early November.' } },
          { name: { ko: '화담숲', ja: '花談の森', zh: '和谈森林', en: 'Hwadam forest' }, region: 'capital', q: '화담숲', note: { ko: '단풍과 정원, 모노레일. 예약제 운영 확인.', ja: '紅葉と庭、モノレール。予約制運営確認。', zh: '秋叶，花园，单轨铁路。确认预订系统运行。', en: 'Maples, gardens and a monorail; check the booking system.' } },
          { name: { ko: '담양 메타세쿼이아길', ja: '潭陽メタセコイアギル', zh: '潭阳水杉路', en: 'Damyang metasequoia road' }, region: 'jeolla', q: '메타세쿼이아길', note: { ko: '가을 드라이브와 산책의 대표 길.', ja: '秋のドライブと散歩の代表的な道。', zh: '秋季驾车、散步的代表性路线。', en: 'The classic autumn drive and walk.' } },
          { name: { ko: '정선 민둥산', ja: 'チョンソンミンドン山', zh: '旌善民东山', en: 'Jeongseon Mindungsan' }, region: 'gangwon', q: '민둥산', note: { ko: '10월 억새 축제. 산 전체가 은빛이 됩니다.', ja: '10月のスキップ祭り。山全体が銀色になります。', zh: '十月紫芒节。整座山都变成了银色。', en: 'Silver grass in October covering the whole mountain.' } },
          { name: { ko: '서울 하늘공원', ja: 'ソウル空公園', zh: '首尔天空公园', en: 'Haneul Park, Seoul' }, region: 'capital', q: '하늘공원', note: { ko: '억새와 노을, 도심 속 가을 산책.', ja: 'スズメと夕焼け、都心の中で秋の散歩。', zh: '银草夕阳，秋日漫步城中。', en: 'Silver grass and sunset, a city autumn walk.' } },
          { name: { ko: '순천만습지', ja: '順天万湿地', zh: '顺天湾湿地', en: 'Suncheon Bay wetland' }, region: 'jeolla', q: '순천만습지', note: { ko: '갈대 군락과 갯벌, 일몰.', ja: '葦の群落と干潟、日没。', zh: '芦苇丛、泥滩、日落。', en: 'Reeds, tidal flats and sunset.' } },
          { name: { ko: '제주 새별오름', ja: '済州鳥星の上昇', zh: '济州新星岳', en: 'Saebyeol oreum' }, region: 'jeju', q: '새별오름', note: { ko: '가을 억새와 오름 능선.', ja: '秋のススキとオルムの尾根。', zh: '秋天的芒草与火山丘山脊。', en: 'Autumn silver grass on a volcanic ridge.' } },
          { name: { ko: '고창 선운산', ja: '高昌ソンウンサン', zh: '高敞禅云山', en: 'Gochang Seonunsan' }, region: 'jeolla', q: '선운산', note: { ko: '단풍과 선운사, 도솔천 계곡.', ja: '紅葉と船運使、ドソルチョン渓谷。', zh: '秋叶、仙云寺、土松川溪谷。', en: 'Maples, Seonunsa and the Dosol valley.' } },
          { name: { ko: '문광저수지', ja: 'ムンクァン貯水池', zh: '梦王水库', en: 'Mungwang reservoir' }, region: 'jeolla', q: '문광저수지', note: { ko: '노란 은행나무가 물에 비치는 가을길.', ja: '黄色いイチョウの木が水に映る秋の道。', zh: '秋天的路，黄色的银杏树倒映在水中。', en: 'Ginkgoes doubled in the water.' } }
        ],
        course: {
          title: { ko: '정읍 — 내장산 단풍 하루', ja: '井邑 — 内蔵山の紅葉の一日', zh: '井邑——内藏山红叶的一天', en: 'Jeongeup — a day of maples at Naejangsan' },
          meta: { ko: '6곳 · 약 9시간 · 버스 3회', ja: '6か所・約9時間・バス3回', zh: '6个地点，约9小时，3辆巴士', en: '6 stops · about 9 hours · 3 buses' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '정읍역', ja: '井邑駅', zh: '井邑站', en: 'Jeongeup Station' }, q: '정읍역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
              desc: { ko: 'KTX 호남선. 용산에서 1시간 40분. 역에서 내장산 입구까지 버스로 30분입니다.', ja: 'KTX湖南線。龍山から1時間40分。駅から内装山入口までバスで30分です。', zh: 'KTX湖南线。距离龙山1小时40分钟。从车站乘坐巴士到内藏山入口需要30分钟。', en: 'On the KTX Honam line, a hundred minutes from Yongsan; the park entrance is thirty minutes by bus.' } },
            { phase: 'morning', time: '09:40', name: { ko: '내장산 입구', ja: '内装山入口', zh: '内藏山入口', en: 'Naejangsan entrance' }, q: '내장산', move: { ko: '버스 약 30분', ja: 'バス約30分', zh: '巴士约30分钟', en: 'Bus, about 30 min' },
              desc: { ko: '단풍철에는 입장 대기와 주차 대기가 깁니다. 오전 10시 전에 들어가야 합니다.', ja: '紅葉には入場待ちと駐車待ちが長い。午前10時前に入る必要があります。', zh: '在秋叶季节，进入和停车要排很长的队。您必须在上午10点之前进入。', en: 'In peak season the queues are long — be inside before ten.' } },
            { phase: 'morning', time: '10:40', name: { ko: '내장사', ja: 'ビルダー', zh: '内藏寺', en: 'Naejangsa Temple' }, q: '내장사', move: { ko: '도보 약 40분', ja: '徒歩約40分', zh: '步行约40分钟', en: 'Walk, about 40 min' },
              desc: { ko: '단풍터널을 지나 절에 닿습니다. 마당의 나무들이 가장 붉은 때입니다.', ja: '紅葉トンネルを通り過ぎて寺院に届きます。庭の木々が一番赤い時です。', zh: '穿过枫叶隧道，到达寺庙。这是院子里的树最红的时候。', en: 'Through the maple tunnel to the temple, whose courtyard trees are at their reddest.' },
              photo: 'th-seasons' },
            { phase: 'lunch', time: '12:30', name: { ko: '산 아래 점심', ja: '山の下で昼食', zh: '山下吃午饭', en: 'Lunch below the mountain' }, q: '내장산', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
              desc: { ko: '정읍은 산채와 국밥, 한우로 알려져 있습니다. 단풍철 식당은 12시에 붐빕니다.', ja: '井邑は山菜やクッパ、ハンウとして知られています。紅葉の食堂は12時に賑わいます。', zh: '井邑以其野菜、汤饭和韩国牛肉而闻名。红叶季节，中午12点餐厅就人满为患。', en: 'Jeongeup is known for mountain greens, rice soup and beef; eat early in leaf season.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '케이블카 · 전망대', ja: 'ケーブルカー・展望台', zh: '缆车·观景台', en: 'Cable car & lookout' }, q: '내장산 케이블카', move: { ko: '도보 약 15분', ja: '徒歩約15分', zh: '步行约15分钟', en: 'Walk, about 15 min' },
              desc: { ko: '케이블카로 올라가 능선을 봅니다. 표는 현장 발권이라 대기가 길면 산책로로 대신하세요.', ja: 'ケーブルカーに乗り、尾根を見ます。表は現場発券なので大気が長い場合は遊歩道に代わってください。', zh: '坐缆车上去就可以看到山脊。门票是现场发放的，所以如果等待时间较长，可以步行前往。', en: 'Ride up for the ridge view; tickets are on site, so walk a trail instead if the queue is long.' } },
            { phase: 'afternoon', time: '15:40', name: { ko: '우화정', ja: 'ウファジョン', zh: '宇华亭', en: 'Uhwajeong pond' }, q: '내장산 우화정', move: { ko: '도보 약 20분', ja: '徒歩約20分', zh: '步行约20分钟', en: 'Walk, about 20 min' },
              desc: { ko: '단풍이 물 위에 비치는 자리. 이 산의 대표 사진이 여기서 나옵니다.', ja: '紅葉が水の上に映る席。この山の代表写真がここから出てきます。', zh: '秋天的树叶倒映在水面的地方。这里出现了这座山的代表性照片。', en: 'Where the maples double in the pond — the photograph of this mountain.' } },
            { phase: 'return', time: '17:30', name: { ko: '정읍역', ja: '井邑駅', zh: '井邑站', en: 'Jeongeup Station' }, q: '정읍역', move: { ko: '버스 약 30분', ja: 'バス約30分', zh: '巴士约30分钟', en: 'Bus, about 30 min' },
              desc: { ko: '역으로 돌아와 KTX. 단풍철 막차는 미리 예매하세요.', ja: '駅に戻ってKTX。紅葉の鉄道車は事前に予約してください。', zh: '返回车站并乘坐 KTX。提前预订秋叶季节末班车。', en: 'Back to the station; book the peak-season train ahead.' } }
          ]
        }
      },
      {
        key: 'winter', emoji: '❄️',
        name: { ko: '겨울 여행', ja: '冬の旅', zh: '冬季旅行', en: 'Winter' }, months: { ko: '12~2월', ja: '12～2月', zh: '12月-2月', en: 'December–February' },
        blurb: { ko: '눈과 얼음, 그리고 따뜻한 쉼. 눈꽃 산행과 얼음낚시, 겨울 바다와 일출, 온천과 실내 여행입니다.', ja: '雪と氷、そして暖かい休み。雪花の散歩と氷釣り、冬の海と日の出、温泉と屋内旅行。', zh: '雪、冰和温暖的休息。雪地徒步、冰钓、冬海日出、温泉、室内旅游。', en: 'Snow and ice, and somewhere warm: snowy peaks, ice fishing, the winter sea and sunrise, hot springs and indoor days.' },
        themes: [
          { ko: '눈꽃', ja: '雪の花', zh: '雪花', en: 'Snow scenery' }, { ko: '설산 산행', ja: '雪山山行', zh: '雪山徒步', en: 'Snowy peaks' }, { ko: '눈꽃 트레킹', ja: '雪花トレッキング', zh: '雪花徒步', en: 'Snow trails' }, { ko: '스키', ja: 'スキー', zh: '滑雪', en: 'Skiing' },
          { ko: '눈썰매', ja: '雪そり', zh: '雪橇', en: 'Sledding' }, { ko: '얼음축제', ja: '氷祭り', zh: '冰雪节', en: 'Ice festivals' }, { ko: '얼음낚시', ja: '氷釣り', zh: '冰钓', en: 'Ice fishing' }, { ko: '겨울 호수', ja: '冬の湖', zh: '冬天湖', en: 'Frozen lakes' },
          { ko: '겨울 폭포', ja: '冬の滝', zh: '冬天的瀑布', en: 'Frozen falls' }, { ko: '겨울 바다', ja: '冬の海', zh: '冬天的海', en: 'Winter sea' }, { ko: '일출', ja: '日の出', zh: '日出', en: 'Sunrise' }, { ko: '겨울 섬', ja: '冬の島', zh: '冬季岛', en: 'Winter islands' },
          { ko: '온천·스파', ja: '温泉・スパ', zh: '温泉和水疗中心', en: 'Hot springs' }, { ko: '찜질·휴식', ja: '蒸し・休息', zh: '蒸/休息', en: 'Saunas' }, { ko: '겨울 캠핑', ja: '冬のキャンプ', zh: '冬季露营', en: 'Winter camping' }, { ko: '겨울 별빛', ja: '冬のスターライト', zh: '冬天的星光', en: 'Winter stars' },
          { ko: '빛축제', ja: '光祭り', zh: '灯光节', en: 'Light festivals' }, { ko: '크리스마스', ja: 'クリスマス', zh: '圣诞节', en: 'Christmas' }, { ko: '겨울 먹거리', ja: '冬の食べ物', zh: '冬季食物', en: 'Winter food' }, { ko: '따뜻한 실내 여행', ja: '暖かい屋内旅行', zh: '温暖的室内旅行', en: 'Indoor days' }
        ],
        places: [
          { name: { ko: '태백산', ja: '太白山', zh: '太白山', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산', note: { ko: '눈꽃과 주목 군락. 1~2월 설경이 절정.', ja: '雪の花と注目の群落。 1～2月の雪景色が絶頂。', zh: '一群雪花和红豆杉。一月到二月是雪景的高峰期。', en: 'Snow on yew trees, best in January and February.' } },
          { name: { ko: '덕유산 향적봉', ja: '徳裕山香積峰', zh: '德裕山香积峰', en: 'Deogyusan Hyangjeokbong' }, region: 'jeolla', q: '덕유산', note: { ko: '곤돌라로 오르는 설경. 운행 확인.', ja: 'ゴンドラに登る雪景色。運行確認。', zh: '乘坐缆车上升的雪景。检查操作。', en: 'A gondola up to the snow; check it is running.' } },
          { name: { ko: '대관령 양떼목장', ja: '大管領羊群牧場', zh: '大关岭羊牧场', en: 'Daegwallyeong sheep ranch' }, region: 'gangwon', q: '대관령양떼목장', note: { ko: '눈 덮인 초원과 목장 풍경.', ja: '雪に覆われた牧草地と牧場の風景。', zh: '白雪皑皑的草地和牧场景观。', en: 'Snow-covered pasture and ranch.' } },
          { name: { ko: '화천 산천어축제', ja: '華川山川魚祭り', zh: '华川山川鱼节', en: 'Hwacheon ice festival' }, region: 'gangwon', q: '화천 산천어축제', note: { ko: '1월 얼음낚시. 개최 여부와 얼음 상태 확인.', ja: '1月の氷釣り。開催可否と氷の状態確認。', zh: '一月冰钓。检查可用性和冰况。', en: 'Ice fishing in January; check the ice and event status.' } },
          { name: { ko: '평창송어축제', ja: '平昌マスフェスティバル', zh: '平昌鳟鱼节', en: 'Pyeongchang trout festival' }, region: 'gangwon', q: '평창송어축제', note: { ko: '송어 얼음낚시와 눈썰매.', ja: 'マスの氷釣りと雪そり。', zh: '冰钓鳟鱼和雪橇。', en: 'Trout fishing on ice and sledding.' } },
          { name: { ko: '철원 한탄강 주상절리길', ja: 'チョルウォンハンタン川', zh: '铁原汉滩江柱状联合道路', en: 'Cheorwon Hantangang columnar path' }, region: 'gangwon', q: '한탄강 주상절리길', note: { ko: '협곡과 겨울 강. 결빙 통제 확인.', ja: '峡谷と冬の川。氷結制御の確認。', zh: '峡谷和冬季河流。检查冰控制。', en: 'A gorge in winter; check closures for ice.' } },
          { name: { ko: '인제 원대리 자작나무숲', ja: 'インジェウォンデリ白樺の森', zh: '麟蹄院岱里白桦林', en: 'Wondae-ri birch forest' }, region: 'gangwon', q: '원대리 자작나무숲', note: { ko: '하얀 자작나무와 눈길. 입산 통제 확인.', ja: '白い白樺の木と目。入産管理の確認。', zh: '白桦树和雪。检查进入控制。', en: 'White birch and snow; check access.' } },
          { name: { ko: '포천 산정호수', ja: 'ポチョン山頂湖', zh: '抱川山井湖', en: 'Sanjeong lake, Pocheon' }, region: 'capital', q: '산정호수', note: { ko: '겨울 호수와 산, 산책과 드라이브.', ja: '冬の湖と山、散歩とドライブ。', zh: '冬季湖泊和山脉，步行和驾车。', en: 'A frozen lake under the mountain.' } },
          { name: { ko: '포항 호미곶', ja: '浦項ホミ岬', zh: '浦项虎尾谷', en: 'Homigot, Pohang' }, region: 'gyeongsang', q: '호미곶', note: { ko: '새해 해돋이와 상생의 손.', ja: '新年の日の出と共生の手。', zh: '新年朝阳，携手共赢。', en: 'New-year sunrise and the great hands.' } },
          { name: { ko: '정동진', ja: '正東津', zh: '郑东进', en: 'Jeongdongjin' }, region: 'gangwon', q: '정동진', note: { ko: '겨울 바다 일출과 기차역.', ja: '冬の海の日の出と鉄道駅。', zh: '冬海日出和火车站。', en: 'Winter sunrise by the seaside station.' } },
          { name: { ko: '아침고요수목원 겨울빛축제', ja: '朝高陽樹木園冬光まつり', zh: '晨静花园冬季灯光节', en: 'Morning Calm winter lights' }, region: 'capital', q: '아침고요수목원 오색별빛정원전', note: { ko: '겨울철 조명 정원, 계절 한정.', ja: '冬季照明ガーデン、季節限定。', zh: '冬季有照明的花园，仅限季节性。', en: 'A lit winter garden, seasonal only.' } },
          { name: { ko: '여수 향일암', ja: '麗水香一岩', zh: '丽水香吉林寺', en: 'Hyangiram, Yeosu' }, region: 'jeolla', q: '향일암', note: { ko: '겨울 동해 일출과 절벽 사찰.', ja: '冬の東海の日の出と崖の寺。', zh: '冬季东海日出和悬崖寺庙。', en: 'Winter sunrise at a cliffside hermitage.' } }
        ],
        course: {
          title: { ko: '태백 — 눈꽃 산행 하루', ja: '太白 — 雪の花の山歩き一日', zh: '太白——看雪花的登山一天', en: 'Taebaek — a day in the snow' },
          meta: { ko: '5곳 · 약 10시간 · 도보 8km', ja: '5ヶ所・約10時間・徒歩8km', zh: '5个地点，约10小时，步行8公里', en: '5 stops · about 10 hours · 8 km on foot' },
          steps: [
            { phase: 'start', time: '08:30', name: { ko: '태백역', ja: '太白駅', zh: '太白站', en: 'Taebaek Station' }, q: '태백역', move: { ko: '출발', ja: '出発', zh: '出发', en: 'Start' },
              desc: { ko: '태백선 기차역. 청량리에서 3시간 반. 역에서 당골 입구까지 버스로 20분입니다. 아이젠과 장갑을 챙기세요.', ja: '太白線駅。清涼里から3時間半。駅から当骨入口までバスで20分です。アイゼンと手袋を手に入れてください。', zh: '太白线火车站。距离清凉里3个半小时。从车站乘坐巴士到Danggol入口需要20分钟。带上冰爪和手套。', en: 'On the Taebaek line, three and a half hours from Cheongnyangni; Danggol is twenty minutes by bus. Bring spikes and gloves.' } },
            { phase: 'morning', time: '09:10', name: { ko: '당골광장', ja: '糖骨広場', zh: '党谷广场', en: 'Danggol plaza' }, q: '태백산 당골', move: { ko: '버스 약 20분', ja: 'バス約20分', zh: '巴士约20分钟', en: 'Bus, about 20 min' },
              desc: { ko: '탐방로 입구. 겨울에는 일몰이 이르니 하산 시간을 안내판에서 확인하세요.', ja: '探訪路への入り口。冬には日没が早いので、夏期を案内板で確認してください。', zh: '步道入口处。冬季，日落来得较早，因此请查看信息板上的下降时间。', en: 'The trailhead. Winter sunsets are early — note the descent time on the board.' } },
            { phase: 'morning', time: '10:00', name: { ko: '주목 군락', ja: '注目群落', zh: '红豆杉群落', en: 'Yew grove' }, q: '태백산 주목군락', move: { ko: '도보 약 50분', ja: '徒歩約50分', zh: '步行约50分钟', en: 'Walk, about 50 min' },
              desc: { ko: '눈을 머금은 주목이 능선을 따라 이어집니다. 바람이 세면 체감이 크게 떨어집니다.', ja: '目を留めた注目は尾根に沿ってつながります。風が数えると体感が大きく落ちます。', zh: '积雪覆盖的红豆杉树沿着山脊延伸。当风变强时，这种感觉会明显减弱。', en: 'Snow-laden yews along the ridge; the wind chill is severe up here.' },
              photo: 'th-seasons-p2' },
            { phase: 'lunch', time: '12:00', name: { ko: '대피소 점심', ja: '避難所ランチ', zh: '避难所午餐', en: 'Lunch at the shelter' }, q: '태백산 대피소', move: { ko: '도보 약 30분', ja: '徒歩約30分', zh: '步行约30分钟', en: 'Walk, about 30 min' },
              desc: { ko: '대피소에서 도시락. 취사는 안 되니 미리 싸 오세요.', ja: '避難所で弁当。自炊はできないのであらかじめ安くしてください。', zh: '避难所的午餐盒。不允许做饭，所以请提前自带食物。', en: 'A packed lunch at the shelter — no cooking, so bring it ready.' } },
            { phase: 'afternoon', time: '13:00', name: { ko: '천제단', ja: '天帝団', zh: '天节团', en: 'Cheonjedan altar' }, q: '태백산 천제단', move: { ko: '도보 약 40분', ja: '徒歩約40分', zh: '步行约40分钟', en: 'Walk, about 40 min' },
              desc: { ko: '정상의 제단. 눈과 바람이 만드는 풍경이 이 산의 겨울입니다.', ja: '頂上の祭壇。雪と風が作る風景がこの山の冬です。', zh: '山顶的祭坛。雪和风创造的景观是这座山的冬天。', en: 'The summit altar — snow and wind are what this mountain is in winter.' } },
            { phase: 'return', time: '16:30', name: { ko: '태백역', ja: '太白駅', zh: '太白站', en: 'Taebaek Station' }, q: '태백역', move: { ko: '도보·버스 약 60분', ja: '徒歩・バス約60分', zh: '步行或乘坐巴士约60分钟', en: 'Walk and bus, about 60 min' },
              desc: { ko: '해가 지기 전에 내려와야 합니다. 역 근처에서 국밥으로 몸을 녹이세요.', ja: '日が暮れる前に降りてください。駅の近くでクッパで体を溶かしてください。', zh: '你必须在太阳落山之前下来。车站附近喝汤暖身。', en: 'Be down before dark, and warm up with rice soup near the station.' } }
          ]
        }
      }
    ]
  },
  places: [
    { name: { ko: '진해 여좌천', ja: '鎮海女座川', zh: '镇海余佐川', en: 'Jinhae Yeojwacheon' }, region: 'gyeongsang', q: '여좌천', note: { ko: '봄 벚꽃터널.', ja: '春の桜トンネル。', zh: '春天的樱花隧道。', en: 'Spring cherry tunnel.' } },
    { name: { ko: '양양 서피비치', ja: '陽陽サーフィービーチ', zh: '襄阳冲浪海滩', en: 'Surfyy Beach' }, region: 'gangwon', q: '서피비치', note: { ko: '여름 서핑과 바다.', ja: '夏のサーフィンと海。', zh: '夏季冲浪和大海。', en: 'Summer surf and sea.' } },
    { name: { ko: '내장산', ja: '内臓山', zh: '内藏山', en: 'Naejangsan' }, region: 'jeolla', q: '내장산', note: { ko: '가을 단풍터널.', ja: '秋の紅葉トンネル。', zh: '秋叶隧道。', en: 'Autumn maple tunnel.' } },
    { name: { ko: '태백산', ja: '太白山', zh: '太白山', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산', note: { ko: '겨울 눈꽃과 천제단.', ja: '冬の雪花と天帝団。', zh: '冬天的雪花和天帝祭坛。', en: 'Winter snow and the summit altar.' } }
  ],
  food: [
    { slot: { ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, emoji: '🌿', dish: { ko: '봄나물 · 주꾸미 · 도다리', ja: '春のハーブ・スナック・ドッグ', zh: '春季蔬菜、章鱼、比目鱼', en: 'Spring greens · webfoot octopus · flounder' }, note: { ko: '남도는 3~4월이 제철입니다.', ja: '南道は3～4月が旬です。', zh: '南方的季节是三月到四月之间。', en: 'In the south, March and April are the season.' } },
    { slot: { ko: '여름', ja: '夏', zh: '夏天', en: 'Summer' }, emoji: '🍜', dish: { ko: '냉면 · 물회 · 옥수수', ja: '冷麺・水会・トウモロコシ', zh: '冷面、生生鱼、玉米', en: 'Cold noodles · cold fish soup · corn' }, note: { ko: '더울수록 차가운 것이 답입니다.', ja: '暑いほど冷たいのが答えです。', zh: '天越热，天就越冷。', en: 'The hotter it gets, the colder the bowl.' } },
    { slot: { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, emoji: '🦐', dish: { ko: '대하 · 전어 · 버섯', ja: '大河・鮫・キノコ', zh: '虾、肫鲥鱼、蘑菇', en: 'Prawns · gizzard shad · mushrooms' }, note: { ko: '가을 바다의 맛은 구이와 회.', ja: '秋の海の味は焼きと刺身。', zh: '秋海的味道是烤鱼和生鱼。', en: 'Autumn seafood is grilled or raw.' } },
    { slot: { ko: '겨울', ja: '冬', zh: '冬天', en: 'Winter' }, emoji: '🦪', dish: { ko: '굴 · 대게 · 과메기', ja: '牡蠣・大根・グアメギ', zh: '牡蛎、雪蟹、gwamegi', en: 'Oysters · snow crab · dried saury' }, note: { ko: '겨울 바다의 진한 맛.', ja: '冬の海の濃い味。', zh: '冬海的浓郁味道。', en: 'The deep taste of the winter sea.' } }
  ],
  photos: [
    { file: 'th-seasons', cap: { ko: '계절의 색', ja: '季節の色', zh: '季节的颜色', en: 'The colour of the season' } },
    { file: 'th-seasons-p2', cap: { ko: '산과 물의 계절', ja: '山と水の季節', zh: '山与水的季节', en: 'A season of mountain and water' } }
  ],
  tip: { ko: '꽃과 단풍, 얼음축제는 해마다 2~3주씩 달라집니다. 떠나기 전에 공식 개화·절정 공지를 확인하고, 주말은 대중교통을 이용하세요.', ja: '花や紅葉、氷祭りは毎年2〜3週間変わります。出発前に公式開花・絶頂のお知らせを確認し、週末は公共交通機関をご利用ください。', zh: '花节、秋叶节和冰雪节每年都会有所不同，持续2-3周。出发前请查看官方的花期/旺季通知，并在周末使用公共交通工具。', en: 'Blooms, foliage and ice shift by two to three weeks each year — check the official notice before travelling, and take transit at weekends.' }
},
];

/* --------------------------------------------------------------------------
   UI strings for the theme layer (merged into the city UI above)
   -------------------------------------------------------------------------- */
Object.assign(UI.ko, {
  navCity: '도시별 여행',
  navTheme: '테마별 당일 코스',
  navOpen: '메뉴 열기',
  navClose: '메뉴 닫기',
  sideHint: '가고 싶은 곳을 누르면 하루 코스가 바로 열립니다.',
  sideCount: (n) => `${n}곳`,
  themeTitle: '무엇을 하러 갈까요?',
  themeSub: '산, 바다, 시장, 축제, 동물농장, 반려견, 일출, 사계절까지 — 스물두 가지 테마마다 대표 추천지와 당일 하루 코스가 있습니다.',
  themeCount: (n) => `테마 ${n}가지`,
  themeTag: '테마',
  heroThemeBtn: '테마 전체 보기',
  placesTitle: '대표 추천지',
  placesSub: '지역으로 골라 보세요. 위치와 조건을 함께 적었습니다.',
  placesCount: (n) => `${n}곳`,
  condsTitle: '핵심 조건',
  themeBack: '테마 목록',
  nextTheme: '다른 테마',
  nextCity: '다른 도시',
  regionAll: '전체',
  allThemes: '테마 전체',
  dayTheme: '테마 하루 코스'
});
Object.assign(UI.en, {
  navCity: 'Cities',
  navTheme: 'Day themes',
  navOpen: 'Open menu',
  navClose: 'Close menu',
  sideHint: 'Tap a place and its one-day course opens.',
  sideCount: (n) => `${n}`,
  themeTitle: 'What would you like to do?',
  themeSub: 'Mountains, sea, markets, festivals, animal farms, dogs, sunrise, all four seasons — twenty-two themes, each with places to go and a one-day course.',
  themeCount: (n) => `${n} themes`,
  themeTag: 'Theme',
  heroThemeBtn: 'See all themes',
  placesTitle: 'Places to go',
  placesSub: 'Filter by region; locations and conditions are noted for each.',
  placesCount: (n) => `${n} places`,
  condsTitle: 'Key conditions',
  themeBack: 'All themes',
  nextTheme: 'Another theme',
  nextCity: 'Another city',
  regionAll: 'All',
  allThemes: 'All themes',
  dayTheme: 'One-day theme'
});
