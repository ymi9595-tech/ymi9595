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
