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
