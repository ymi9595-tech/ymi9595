/* ---------------------------------------------------- 14 반려견 동반 */
{
  id: 'dog', emoji: '🐶', tint: '#FFD9A0',
  name: { ko: '반려견 동반', ja: '犬と一緒に', zh: '携宠同行', en: 'Travelling with your dog' },
  sub: { ko: '목줄 하나로 떠나는 하루', ja: 'リード一本で出かける一日', zh: '一条牵引绳就出发的一天', en: 'A day out on the lead' },
  tag: { ko: '반려견 해변 · 놀이터 · 산책로', ja: '犬と入れる海辺・遊び場・散歩道', zh: '可带狗的海滩·游乐场·散步道', en: 'Dog beaches, parks, forest paths' },
  intro: {
    ko: '반려견 여행에서 가장 중요한 건 도착지가 아니라 조건입니다. 입장 가능한 구역, 체중 제한, 실내 출입 여부, 목줄·이동장 규정이 장소마다 다릅니다. 여기서는 조건이 비교적 명확한 춘천 강아지숲을 중심으로 하루를 짰어요. 해변과 숲, 놀이터는 아래 목록에서 골라 다녀오세요.', ja: 'ペット犬旅行で最も重要なのは、到着地ではなく条件です。入場可能な区域、体重制限、室内出入可否、リード・移動場規定が場所によって異なります。ここでは条件が比較的明確な春川子犬の森を中心に一日を絞ります。ビーチと森、遊び場は以下のリストから選んでください。', zh: '带狗狗旅行时，最重要的不是目的地，而是条件。进入区域、重量限制、室内通道以及牵引绳和背带规定因地点而异。在这里，我计划在春川狗林周围度过一天，那里的条件相对较好。从下面的列表中选择海滩、森林或游乐场。',
    en: 'With a dog the conditions matter more than the destination: which areas admit dogs, weight limits, indoor access, lead and carrier rules — they differ place by place. This day is built around the dog park at Chuncheon, where the rules are clear. Beaches, forests and playgrounds are listed below.'
  },
  seasons: [{ ko: '봄', ja: '春', zh: '春天', en: 'Spring' }, { ko: '가을', ja: '秋', zh: '秋天', en: 'Autumn' }, { ko: '여름 해변', ja: '夏のビーチ', zh: '夏季海滩', en: 'Summer beaches' }],
  transport: { ko: '전철 + 택시', ja: '電車＋タクシー', zh: '地铁＋出租车', en: 'Metro + taxi' },
  duration: { ko: '약 7시간', ja: '約7時間', zh: '约7小时', en: 'About 7 hours' },
  hub: {
    ko: '춘천역', ja: '春川駅', zh: '春川站', en: 'Chuncheon Station', q: '춘천역',
    note: {
      ko: '경춘선·ITX-청춘. 서울 용산에서 1시간 10분. 반려견과 함께 탈 때는 이동장 또는 목줄을 확인하고, 역에서 강아지숲까지 택시로 20분입니다.', ja: '慶春線・ITX-青春。ソウル龍山から1時間10分。ペットと一緒に乗るときは、移動場やリードを確認し、駅から犬の森までタクシーで20分です。', zh: '京春线·ITX-清春。距离首尔龙山1小时10分钟。与您的狗一起骑行时，请确保它有背带或牵引绳。从车站乘坐出租车到狗森林需要20分钟。',
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
        desc: { ko: '호수를 끼고 난 넓은 길. 목줄을 하고 걷기 좋고, 물놀이는 금지 구역을 확인하세요.', ja: '湖を挟んで私は広い道。リードをして歩きやすく、水遊びの禁止区域を確認してください。', zh: '湖边有一条宽阔的马路。请检查哪些区域可以用牵引绳牵引安全行走，哪些区域禁止玩水。', en: 'A wide path along the lake — good on a lead; check where swimming is off limits.' },
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
    { k: { ko: '목줄', ja: 'リード', zh: '牵引绳', en: 'Lead' }, v: { ko: '전 구역 목줄 필수(놀이터 예외), 이동장 준비', ja: '全ゾーンリード必須（遊び場例外）、移動場準備', zh: '所有区域（游乐场除外）均需拴绳，并提供交通设施。', en: 'Lead required everywhere except fenced runs; bring a carrier' } },
    { k: { ko: '준비물', ja: '準備', zh: '你需要什么', en: 'Bring' }, v: { ko: '예방접종 증명, 배변봉투, 물·식기, 수건', ja: '予防接種証明、排便袋、水・食器、タオル', zh: '疫苗接种证明、粪便袋、水、餐具、毛巾', en: 'Vaccination record, waste bags, water and bowl, towel' } }
  ],
  places: [
    { name: { ko: '강아지숲', ja: '子犬の森', zh: '小狗森林', en: 'Dog forest park' }, region: 'gangwon', q: '강아지숲', note: { ko: '춘천. 반려견 전용 테마파크, 운동장·수영장·전시.', ja: '春川。ペット犬専用テーマパーク、運動場・水泳場・展示。', zh: '春川。一个专门为狗、游乐场、游泳池和展览而设的主题公园。', en: 'Chuncheon: a theme park for dogs with runs, a pool and exhibitions.' } },
    { name: { ko: '오산반려동물테마파크', ja: 'オサンペット動物テーマパーク', zh: '乌山宠物主题公园', en: 'Osan pet theme park' }, region: 'capital', q: '오산반려동물테마파크', note: { ko: '경기 오산. 놀이와 교육 프로그램.', ja: '試合の誤算。遊びと教育プログラム。', zh: '京畿道乌山市。游戏和教育项目。', en: 'Osan: play areas and training programmes.' } },
    { name: { ko: '인천대공원 반려견놀이터', ja: '仁川大公園ペット犬遊び場', zh: '仁川大公园狗狗游乐场', en: 'Incheon Grand Park dog run' }, region: 'capital', q: '인천대공원 반려견놀이터', note: { ko: '무료 야외 놀이터, 목줄 해제 구역 별도.', ja: '無料の屋外遊び場、リード解除ゾーンは別途。', zh: '免费的室外游乐场，独立的免拴绳区域。', en: 'A free outdoor run with a separate off-lead area.' } },
    { name: { ko: '멍비치', ja: 'マンビーチ', zh: '猛海滩', en: 'Meong Beach' }, region: 'gangwon', q: '멍비치', note: { ko: '양양. 반려견 전용 해변, 여름 시즌 운영.', ja: 'ヤンヤン。ペット犬専用ビーチ、夏シーズン運営。', zh: '阳阳。仅限狗入内的海滩，夏季开放。', en: 'Yangyang: a dog-only beach, open in the summer season.' } },
    { name: { ko: '명사해수욕장', ja: '名詞海水浴場', zh: '明沙海滩', en: 'Myeongsa Beach' }, region: 'gyeongsang', q: '명사해수욕장', note: { ko: '거제. 반려견 해수욕 운영 사례가 있는 해변.', ja: '巨済。ペット犬海水浴の運営事例があるビーチ。', zh: '巨济。曾有狗狗洗澡事件发生的海滩。', en: 'Geoje: a beach with a history of dog-friendly bathing.' } },
    { name: { ko: '안목해변', ja: '目のビーチ', zh: '安木海滩', en: 'Anmok Beach' }, region: 'gangwon', q: '안목해변', note: { ko: '강릉. 산책과 바다, 여름엔 펫 비치 운영.', ja: '江陵。散歩や海、夏にはペットビーチ運営。', zh: '江陵。散步和大海，夏天还有宠物海滩。', en: 'Gangneung: a walk and the sea, with a pet beach in summer.' } },
    { name: { ko: '꽃지해수욕장', ja: '花地海水浴場', zh: '科奇海滩', en: 'Ggotji Beach' }, region: 'jeolla', q: '꽃지해수욕장', note: { ko: '태안. 넓은 모래사장과 노을.', ja: '泰安。広い砂浜と夕焼け。', zh: '泰安。宽阔的沙滩和日落。', en: 'Taean: wide sand and a famous sunset.' } },
    { name: { ko: '신두리해수욕장', ja: 'シンドゥリビーチ', zh: '辛杜里海滩', en: 'Sinduri Beach' }, region: 'jeolla', q: '신두리해수욕장', note: { ko: '태안. 모래언덕과 긴 해변.', ja: '泰安。砂丘と長いビーチ。', zh: '泰安。沙丘和长长的海滩。', en: 'Taean: dunes and a long shore.' } },
    { name: { ko: '와온해변', ja: 'ワオンビーチ', zh: '瓦恩海滩', en: 'Waon Beach' }, region: 'jeolla', q: '와온해변', note: { ko: '순천. 갯벌과 일몰, 물때 확인.', ja: '順天。干潟と夕日、水の中で確認。', zh: '顺天。检查潮滩、日落和潮汐时间。', en: 'Suncheon: tidal flats and sunset; check the tide.' } },
    { name: { ko: '해파랑길 44·45코스', ja: 'クラゲギル44・45コース', zh: 'Haeparang 路44和45路线', en: 'Haeparang trail 44–45' }, region: 'gangwon', q: '해파랑길', note: { ko: '양양·속초 해안 도보 구간. 목줄 필수.', ja: '陽陽・束草海岸徒歩区間。リード必須。', zh: '襄阳-束草海岸步行段。需要牵引绳。', en: 'Coastal walking between Yangyang and Sokcho; lead required.' } },
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
  tip: { ko: '대부분의 관광지는 목줄과 배변봉투를 확인합니다. 체중 제한은 시설마다 달라 방문 전 전화가 가장 확실합니다.', ja: 'ほとんどの観光地はリードと排便袋を確認します。体重制限は施設によって異なり、訪問前の電話が最も確実です。', zh: '大多数旅游景点都会检查牵引绳和垃圾袋。重量限制因设施而异，因此最好在参观前致电。', en: 'Almost everywhere checks lead and bags. Weight limits vary by venue — a phone call is the surest check.' }
},
