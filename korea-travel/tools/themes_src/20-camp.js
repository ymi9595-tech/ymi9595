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
      { emoji: '🐕', name: { ko: '애견 동반', ja: '愛犬同伴', zh: '适合带狗', en: 'With the dog' }, desc: { ko: '반려견 전용 사이트와 운동장. 체중·목줄 조건을 확인하세요.', ja: 'ペット犬専用サイトと運動場。体重・リード条件を確認してください。', zh: '专为狗狗提供的场地和游乐场。检查重量和牵引绳状况。', en: 'Dog pitches and runs; check weight and lead rules.' } },
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
