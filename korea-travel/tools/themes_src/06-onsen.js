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
