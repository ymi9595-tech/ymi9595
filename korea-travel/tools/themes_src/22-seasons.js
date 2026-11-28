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
