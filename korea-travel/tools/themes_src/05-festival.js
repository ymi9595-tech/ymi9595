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
