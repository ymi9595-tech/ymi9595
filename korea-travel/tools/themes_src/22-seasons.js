/* ------------------------------------------------- 22 사계절 테마여행 */
{
  id: 'seasons', emoji: '🌸', tint: '#FFC6DA',
  name: { ko: '사계절 테마여행', en: 'Four seasons' },
  sub: { ko: '봄·여름·가을·겨울, 계절마다 다른 하루', en: 'A different day in each season' },
  tag: { ko: '꽃 · 바다 · 단풍 · 눈', en: 'Blossom, sea, leaves, snow' },
  intro: {
    ko: '계절은 여행지의 성격을 바꿉니다. 같은 산이라도 봄에는 철쭉, 가을에는 단풍, 겨울에는 눈꽃이 됩니다. 아래에서 계절을 고르면 그 계절의 세부 테마 스무 가지와 대표 여행지, 그리고 역·터미널에서 시작하는 당일 코스가 나옵니다. 꽃과 단풍, 얼음축제는 해마다 시기가 달라지니 떠나기 전에 공지를 확인하세요.',
    en: 'Season changes what a place is: the same mountain is azaleas in spring, maples in autumn and snow in winter. Choose a season below for its twenty sub-themes, the places to go, and a one-day course starting at a station or terminal. Blooming, peak foliage and ice festivals shift every year — check the notice before you go.'
  },
  seasons: [{ ko: '봄', en: 'Spring' }, { ko: '여름', en: 'Summer' }, { ko: '가을', en: 'Autumn' }, { ko: '겨울', en: 'Winter' }],
  transport: { ko: 'KTX·기차 + 버스', en: 'KTX or train + bus' },
  duration: { ko: '계절별 8~12시간', en: '8–12 hours per season' },
  hub: {
    ko: '서울역', en: 'Seoul Station', q: '서울역',
    note: {
      ko: '사계절 코스는 각 계절의 대표 역·터미널에서 시작합니다. 아래 계절을 골라 출발지와 시간을 확인하세요. 서울에서는 KTX로 두 시간 안팎이면 대부분 닿습니다.',
      en: 'Each seasonal course starts at its own station or terminal — pick a season below to see the start and the times. Most are within about two hours of Seoul by KTX.'
    }
  },
  conds: [
    { k: { ko: '시기', en: 'Timing' }, v: { ko: '꽃·단풍·얼음은 해마다 2~3주 차이 — 개화·절정 공지 확인', en: 'Blooms, foliage and ice shift by two to three weeks a year' } },
    { k: { ko: '요금', en: 'Cost' }, v: { ko: '공원·산 무료, 축제·케이블카·수목원은 유료', en: 'Parks and mountains free; festivals, cable cars and gardens charge' } },
    { k: { ko: '준비', en: 'Bring' }, v: { ko: '계절별 복장·신발, 물, 주말엔 주차보다 대중교통', en: 'Season-appropriate clothes and shoes, water; transit beats parking at weekends' } }
  ],
  seasons4: {
    title: { ko: '계절을 골라 보세요', en: 'Pick a season' },
    items: [
      {
        key: 'spring', emoji: '🌸',
        name: { ko: '봄 여행', en: 'Spring' }, months: { ko: '3~5월', en: 'March–May' },
        blurb: { ko: '꽃과 새싹, 정원과 봄나들이. 벚꽃·매화·산수유·유채가 차례로 피고, 남도에서는 봄나물과 주꾸미가 제철입니다.', en: 'Blossom and new green: cherry, plum, cornel and rapeseed in turn, with spring greens and webfoot octopus in the south.' },
        themes: [
          { ko: '벚꽃', en: 'Cherry blossom' }, { ko: '진달래·철쭉', en: 'Azalea' }, { ko: '유채꽃', en: 'Rapeseed' }, { ko: '튤립', en: 'Tulips' },
          { ko: '매화', en: 'Plum blossom' }, { ko: '산수유', en: 'Cornelian cherry' }, { ko: '목련', en: 'Magnolia' }, { ko: '복사꽃·배꽃', en: 'Peach & pear blossom' },
          { ko: '봄 야생화', en: 'Wildflowers' }, { ko: '봄 정원', en: 'Spring gardens' }, { ko: '봄 바다', en: 'Spring sea' }, { ko: '봄 섬', en: 'Spring islands' },
          { ko: '봄 산행', en: 'Spring hiking' }, { ko: '봄 트레킹', en: 'Spring trails' }, { ko: '봄 피크닉', en: 'Picnics' }, { ko: '봄 캠핑', en: 'Spring camping' },
          { ko: '봄 농촌 체험', en: 'Farm visits' }, { ko: '봄 먹거리', en: 'Spring food' }, { ko: '봄 사진', en: 'Spring photography' }, { ko: '봄 감성', en: 'Quiet spring corners' }
        ],
        places: [
          { name: { ko: '진해 여좌천', en: 'Jinhae Yeojwacheon' }, region: 'gyeongsang', q: '여좌천', note: { ko: '벚꽃 터널과 개천 산책. 봄 벚꽃축제의 대표 명소.', en: 'A tunnel of cherries over the stream — the classic blossom walk.' } },
          { name: { ko: '광양 매화마을', en: 'Gwangyang plum village' }, region: 'jeolla', q: '광양 매화마을', note: { ko: '섬진강을 배경으로 한 하얀 매화. 3월 중순.', en: 'White plum against the Seomjin river, mid-March.' } },
          { name: { ko: '구례 산수유마을', en: 'Gurye cornelian village' }, region: 'jeolla', q: '구례 산수유마을', note: { ko: '노란 산수유꽃 군락과 산촌 풍경. 3월.', en: 'Yellow cornel blossoms over a mountain village, March.' } },
          { name: { ko: '하동 십리벚꽃길', en: 'Hadong cherry road' }, region: 'gyeongsang', q: '하동 십리벚꽃길', note: { ko: '섬진강을 따라 이어지는 벚꽃 드라이브.', en: 'A cherry drive along the Seomjin.' } },
          { name: { ko: '경주 보문호', en: 'Gyeongju Bomun lake' }, region: 'gyeongsang', q: '보문호', note: { ko: '호수 둘레 벚꽃과 유적 여행을 함께.', en: 'Lakeside blossom with the Silla sites.' } },
          { name: { ko: '보성 녹차밭', en: 'Boseong tea fields' }, region: 'jeolla', q: '보성 녹차밭', note: { ko: '봄 신록의 차밭. 차 문화 체험과 함께.', en: 'Spring green tea terraces, with tea culture.' } },
          { name: { ko: '제주 섭지코지', en: 'Seopjikoji, Jeju' }, region: 'jeju', q: '섭지코지', note: { ko: '유채꽃과 푸른 바다, 봄 해안 드라이브.', en: 'Rapeseed and blue water on a spring drive.' } },
          { name: { ko: '태안 튤립꽃밭', en: 'Taean tulip fields' }, region: 'jeolla', q: '태안 세계튤립꽃박람회', note: { ko: '4월 튤립 정원. 행사 개최 여부 확인.', en: 'Tulip gardens in April; check whether the event runs.' } }
        ],
        course: {
          title: { ko: '진해 — 벚꽃터널 하루', en: 'Jinhae — a day under the cherry tunnel' },
          meta: { ko: '6곳 · 약 8시간 · 도보 5km', en: '6 stops · about 8 hours · 5 km on foot' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '진해역', en: 'Jinhae Station' }, q: '진해역', move: { ko: '출발', en: 'Start' },
              desc: { ko: '경전선 기차역. 축제 기간에는 열차가 증편되고, 역에서 여좌천까지 걸어서 20분입니다.', en: 'On the Gyeongjeon line; trains are added in festival week and the stream is twenty minutes on foot.' } },
            { phase: 'morning', time: '09:30', name: { ko: '여좌천 벚꽃터널', en: 'Yeojwacheon cherry tunnel' }, q: '여좌천', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
              desc: { ko: '개천 위로 벚나무가 터널을 만듭니다. 오전 10시 전이 사람이 가장 적습니다.', en: 'The cherries close over the stream; before ten is the quietest.' },
              photo: 'th-seasons' },
            { phase: 'morning', time: '11:00', name: { ko: '경화역 벚꽃길', en: 'Gyeonghwa Station cherry road' }, q: '경화역', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
              desc: { ko: '기차 선로 옆으로 벚나무가 이어지는 사진 명소. 열차 통과 시간을 확인하세요.', en: 'Cherries along the track — a famous photograph; check when a train passes.' } },
            { phase: 'lunch', time: '12:30', name: { ko: '진해 중앙시장', en: 'Jinhae central market' }, q: '진해 중앙시장', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '점심은 시장에서. 진해는 해물과 회, 군항제 기간의 거리 음식이 많습니다.', en: 'Lunch at the market: seafood, raw fish and festival street food.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '진해루 · 해양공원', en: 'Jinhaeru & marine park' }, q: '진해루', move: { ko: '차 약 10분', en: 'Drive, about 10 min' },
              desc: { ko: '호수와 바다를 잇는 공원. 벚꽃 아래에서 쉬기 좋습니다.', en: 'A park between lake and sea — a good place to sit under the blossom.' } },
            { phase: 'afternoon', time: '15:30', name: { ko: '안민고개', en: 'Anmin ridge' }, q: '안민고개', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '진해 시내와 바다를 내려다보는 고개. 벚꽃과 어우러진 전망이 좋습니다.', en: 'A ridge over town and sea, with blossom in the foreground.' } },
            { phase: 'return', time: '17:00', name: { ko: '진해역', en: 'Jinhae Station' }, q: '진해역', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '역으로 돌아와 기차. 축제 기간 막차는 일찍 매진될 수 있습니다.', en: 'Back to the station; festival-week trains sell out early.' } }
          ]
        }
      },
      {
        key: 'summer', emoji: '🌊',
        name: { ko: '여름 여행', en: 'Summer' }, months: { ko: '6~8월', en: 'June–August' },
        blurb: { ko: '물과 그늘. 해수욕장과 계곡, 폭포, 서핑과 래프팅, 연꽃과 수국, 그리고 더위를 피하는 숲길과 동굴입니다.', en: 'Water and shade: beaches, valleys, waterfalls, surfing and rafting, lotus and hydrangea, and forest paths or caves to escape the heat.' },
        themes: [
          { ko: '해수욕장', en: 'Beaches' }, { ko: '계곡', en: 'Valleys' }, { ko: '폭포', en: 'Waterfalls' }, { ko: '섬 여행', en: 'Islands' },
          { ko: '서핑', en: 'Surfing' }, { ko: '수상레포츠', en: 'Water sports' }, { ko: '래프팅', en: 'Rafting' }, { ko: '워터파크', en: 'Water parks' },
          { ko: '자연휴양림', en: 'Recreational forests' }, { ko: '계곡 캠핑', en: 'Valley camping' }, { ko: '여름 숲길', en: 'Forest walks' }, { ko: '여름 정원', en: 'Summer gardens' },
          { ko: '연꽃', en: 'Lotus' }, { ko: '수국', en: 'Hydrangea' }, { ko: '여름 꽃', en: 'Summer flowers' }, { ko: '여름 야간', en: 'Summer nights' },
          { ko: '여름 별빛', en: 'Summer stars' }, { ko: '여름 축제', en: 'Summer festivals' }, { ko: '여름 먹거리', en: 'Summer food' }, { ko: '여름 휴양', en: 'Summer rest' }
        ],
        places: [
          { name: { ko: '양양 서피비치', en: 'Surfyy Beach, Yangyang' }, region: 'gangwon', q: '서피비치', note: { ko: '서핑과 해변 액티비티. 강습과 보드 대여.', en: 'Surfing and beach activities, with lessons and board hire.' } },
          { name: { ko: '해운대해수욕장', en: 'Haeundae Beach' }, region: 'gyeongsang', q: '해운대해수욕장', note: { ko: '대표 여름 해변. 야경과 해양레포츠.', en: 'The big summer beach, with night views and water sports.' } },
          { name: { ko: '함덕해수욕장', en: 'Hamdeok Beach' }, region: 'jeju', q: '함덕해수욕장', note: { ko: '에메랄드빛 얕은 바다, 가족에게 좋습니다.', en: 'Shallow turquoise water, good for families.' } },
          { name: { ko: '문경 용추계곡', en: 'Mungyeong Yongchu valley' }, region: 'gyeongsang', q: '용추계곡', note: { ko: '숲과 계곡의 시원한 물. 여름 피서.', en: 'Cold water under forest — a summer retreat.' } },
          { name: { ko: '포천 백운계곡', en: 'Pocheon Baegun valley' }, region: 'capital', q: '백운계곡', note: { ko: '수도권에서 가까운 계곡 물놀이.', en: 'A valley close to Seoul for a water day.' } },
          { name: { ko: '정선 화암동굴', en: 'Jeongseon Hwaam cave' }, region: 'gangwon', q: '화암동굴', note: { ko: '연중 서늘한 동굴, 더위를 피하는 이색 여행.', en: 'A cave that stays cool — an unusual way to escape the heat.' } },
          { name: { ko: '담양 죽녹원', en: 'Juknokwon, Damyang' }, region: 'jeolla', q: '죽녹원', note: { ko: '대나무숲 그늘길, 여름이 가장 좋습니다.', en: 'Bamboo shade, at its best in summer.' } },
          { name: { ko: '무안 회산백련지', en: 'Muan white lotus pond' }, region: 'jeolla', q: '회산백련지', note: { ko: '7~8월 연꽃 군락. 아침에 피어 있습니다.', en: 'Lotus in July and August, open in the morning.' } },
          { name: { ko: '고성 상족암', en: 'Goseong Sangjokam' }, region: 'gyeongsang', q: '상족암', note: { ko: '해안 절경과 공룡 발자국, 해식동굴.', en: 'Sea cliffs, dinosaur footprints and a sea cave.' } },
          { name: { ko: '울릉도', en: 'Ulleungdo' }, region: 'gyeongsang', q: '울릉도', note: { ko: '맑은 바다와 해안도로, 섬 트레킹.', en: 'Clear water, a coastal road and island walking.' } },
          { name: { ko: '삼척 장호항', en: 'Samcheok Jangho' }, region: 'gangwon', q: '장호항', note: { ko: '맑은 항구, 스노클링과 해안 산책.', en: 'A clear harbour for snorkelling and a coast walk.' } },
          { name: { ko: '인제 내린천', en: 'Inje Naerincheon' }, region: 'gangwon', q: '내린천', note: { ko: '래프팅과 급류. 5~9월 예약제.', en: 'Rafting on white water, May to September, by booking.' } }
        ],
        course: {
          title: { ko: '양양 — 서핑과 동해 바다 하루', en: 'Yangyang — a day of surf and the East Sea' },
          meta: { ko: '6곳 · 약 9시간 · 버스 3회', en: '6 stops · about 9 hours · 3 buses' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '양양시외버스터미널', en: 'Yangyang bus terminal' }, q: '양양시외버스터미널', move: { ko: '출발', en: 'Start' },
              desc: { ko: '동서울에서 2시간 남짓. 터미널에서 해변까지 버스로 20분입니다.', en: 'A little over two hours from Dong Seoul; the beach is twenty minutes by bus.' } },
            { phase: 'morning', time: '09:40', name: { ko: '서피비치', en: 'Surfyy Beach' }, q: '서피비치', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
              desc: { ko: '오전 파도가 초보에게 좋습니다. 강습은 2시간, 보드와 슈트는 현장 대여가 됩니다.', en: 'Morning waves suit beginners; lessons run two hours and boards are hired on site.' },
              photo: 'th-seasons-p2' },
            { phase: 'lunch', time: '12:30', name: { ko: '해변 점심', en: 'Lunch at the beach' }, q: '양양', move: { ko: '도보', en: 'On foot' },
              desc: { ko: '바다를 보며 한 끼. 여름 양양은 해물라면과 냉면이 기본입니다.', en: 'A meal facing the water: seafood noodles and cold noodles.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '죽도해변', en: 'Jukdo Beach' }, q: '죽도해변', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '서핑으로 유명한 작은 해변. 물이 빠지면 넓은 모래밭이 드러납니다.', en: 'A small surf beach; at low tide a wide sand flat appears.' } },
            { phase: 'afternoon', time: '15:30', name: { ko: '하조대', en: 'Hajodae' }, q: '하조대', move: { ko: '차 약 15분', en: 'Drive, about 15 min' },
              desc: { ko: '절벽 위 정자와 등대. 동해가 한눈에 들어옵니다.', en: 'A pavilion and lighthouse on the cliff, with the East Sea below.' } },
            { phase: 'evening', time: '17:00', name: { ko: '양양전통시장', en: 'Yangyang market' }, q: '양양전통시장', move: { ko: '차 약 20분', en: 'Drive, about 20 min' },
              desc: { ko: '저녁과 간식은 시장에서. 해산물과 옥수수가 여름의 맛입니다.', en: 'Dinner and snacks at the market — seafood and sweetcorn.' } },
            { phase: 'return', time: '18:30', name: { ko: '양양시외버스터미널', en: 'Yangyang bus terminal' }, q: '양양시외버스터미널', move: { ko: '도보 약 10분', en: 'Walk, about 10 min' },
              desc: { ko: '터미널로 돌아와 버스. 여름 주말 막차는 미리 예매하세요.', en: 'Back at the terminal; book the weekend evening bus ahead.' } }
          ]
        }
      },
      {
        key: 'autumn', emoji: '🍁',
        name: { ko: '가을 여행', en: 'Autumn' }, months: { ko: '9~11월', en: 'September–November' },
        blurb: { ko: '색과 수확. 단풍과 억새, 은행나무, 갈대와 메밀꽃, 그리고 사과·감·고구마 수확과 황금 들녘입니다.', en: 'Colour and harvest: maples and silver grass, ginkgo, reeds and buckwheat, apples and persimmons, and golden rice fields.' },
        themes: [
          { ko: '단풍', en: 'Autumn leaves' }, { ko: '은행나무', en: 'Ginkgo' }, { ko: '억새', en: 'Silver grass' }, { ko: '갈대', en: 'Reeds' },
          { ko: '코스모스', en: 'Cosmos' }, { ko: '핑크뮬리', en: 'Pink muhly' }, { ko: '국화', en: 'Chrysanthemum' }, { ko: '구절초', en: 'Wild aster' },
          { ko: '메밀꽃', en: 'Buckwheat' }, { ko: '가을 정원', en: 'Autumn gardens' }, { ko: '가을 산행', en: 'Autumn hiking' }, { ko: '가을 트레킹', en: 'Autumn trails' },
          { ko: '가을 드라이브', en: 'Autumn drives' }, { ko: '농촌 수확', en: 'Harvest visits' }, { ko: '황금 들녘', en: 'Rice fields' }, { ko: '가을 캠핑', en: 'Autumn camping' },
          { ko: '가을 섬', en: 'Autumn islands' }, { ko: '가을 축제', en: 'Autumn festivals' }, { ko: '가을 먹거리', en: 'Autumn food' }, { ko: '가을 감성', en: 'Quiet autumn corners' }
        ],
        places: [
          { name: { ko: '설악산', en: 'Seoraksan' }, region: 'gangwon', q: '설악산', note: { ko: '10월 중순 단풍 절정. 케이블카와 계곡 코스.', en: 'Peak colour mid-October, by cable car or valley path.' } },
          { name: { ko: '내장산', en: 'Naejangsan' }, region: 'jeolla', q: '내장산', note: { ko: '단풍터널로 유명한 산. 11월 초가 절정.', en: 'The famous maple tunnel, peaking in early November.' } },
          { name: { ko: '화담숲', en: 'Hwadam forest' }, region: 'capital', q: '화담숲', note: { ko: '단풍과 정원, 모노레일. 예약제 운영 확인.', en: 'Maples, gardens and a monorail; check the booking system.' } },
          { name: { ko: '담양 메타세쿼이아길', en: 'Damyang metasequoia road' }, region: 'jeolla', q: '메타세쿼이아길', note: { ko: '가을 드라이브와 산책의 대표 길.', en: 'The classic autumn drive and walk.' } },
          { name: { ko: '정선 민둥산', en: 'Jeongseon Mindungsan' }, region: 'gangwon', q: '민둥산', note: { ko: '10월 억새 축제. 산 전체가 은빛이 됩니다.', en: 'Silver grass in October covering the whole mountain.' } },
          { name: { ko: '서울 하늘공원', en: 'Haneul Park, Seoul' }, region: 'capital', q: '하늘공원', note: { ko: '억새와 노을, 도심 속 가을 산책.', en: 'Silver grass and sunset, a city autumn walk.' } },
          { name: { ko: '순천만습지', en: 'Suncheon Bay wetland' }, region: 'jeolla', q: '순천만습지', note: { ko: '갈대 군락과 갯벌, 일몰.', en: 'Reeds, tidal flats and sunset.' } },
          { name: { ko: '제주 새별오름', en: 'Saebyeol oreum' }, region: 'jeju', q: '새별오름', note: { ko: '가을 억새와 오름 능선.', en: 'Autumn silver grass on a volcanic ridge.' } },
          { name: { ko: '고창 선운산', en: 'Gochang Seonunsan' }, region: 'jeolla', q: '선운산', note: { ko: '단풍과 선운사, 도솔천 계곡.', en: 'Maples, Seonunsa and the Dosol valley.' } },
          { name: { ko: '문광저수지', en: 'Mungwang reservoir' }, region: 'jeolla', q: '문광저수지', note: { ko: '노란 은행나무가 물에 비치는 가을길.', en: 'Ginkgoes doubled in the water.' } }
        ],
        course: {
          title: { ko: '정읍 — 내장산 단풍 하루', en: 'Jeongeup — a day of maples at Naejangsan' },
          meta: { ko: '6곳 · 약 9시간 · 버스 3회', en: '6 stops · about 9 hours · 3 buses' },
          steps: [
            { phase: 'start', time: '09:00', name: { ko: '정읍역', en: 'Jeongeup Station' }, q: '정읍역', move: { ko: '출발', en: 'Start' },
              desc: { ko: 'KTX 호남선. 용산에서 1시간 40분. 역에서 내장산 입구까지 버스로 30분입니다.', en: 'On the KTX Honam line, a hundred minutes from Yongsan; the park entrance is thirty minutes by bus.' } },
            { phase: 'morning', time: '09:40', name: { ko: '내장산 입구', en: 'Naejangsan entrance' }, q: '내장산', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
              desc: { ko: '단풍철에는 입장 대기와 주차 대기가 깁니다. 오전 10시 전에 들어가야 합니다.', en: 'In peak season the queues are long — be inside before ten.' } },
            { phase: 'morning', time: '10:40', name: { ko: '내장사', en: 'Naejangsa Temple' }, q: '내장사', move: { ko: '도보 약 40분', en: 'Walk, about 40 min' },
              desc: { ko: '단풍터널을 지나 절에 닿습니다. 마당의 나무들이 가장 붉은 때입니다.', en: 'Through the maple tunnel to the temple, whose courtyard trees are at their reddest.' },
              photo: 'th-seasons' },
            { phase: 'lunch', time: '12:30', name: { ko: '산 아래 점심', en: 'Lunch below the mountain' }, q: '내장산', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
              desc: { ko: '정읍은 산채와 국밥, 한우로 알려져 있습니다. 단풍철 식당은 12시에 붐빕니다.', en: 'Jeongeup is known for mountain greens, rice soup and beef; eat early in leaf season.' } },
            { phase: 'afternoon', time: '14:00', name: { ko: '케이블카 · 전망대', en: 'Cable car & lookout' }, q: '내장산 케이블카', move: { ko: '도보 약 15분', en: 'Walk, about 15 min' },
              desc: { ko: '케이블카로 올라가 능선을 봅니다. 표는 현장 발권이라 대기가 길면 산책로로 대신하세요.', en: 'Ride up for the ridge view; tickets are on site, so walk a trail instead if the queue is long.' } },
            { phase: 'afternoon', time: '15:40', name: { ko: '우화정', en: 'Uhwajeong pond' }, q: '내장산 우화정', move: { ko: '도보 약 20분', en: 'Walk, about 20 min' },
              desc: { ko: '단풍이 물 위에 비치는 자리. 이 산의 대표 사진이 여기서 나옵니다.', en: 'Where the maples double in the pond — the photograph of this mountain.' } },
            { phase: 'return', time: '17:30', name: { ko: '정읍역', en: 'Jeongeup Station' }, q: '정읍역', move: { ko: '버스 약 30분', en: 'Bus, about 30 min' },
              desc: { ko: '역으로 돌아와 KTX. 단풍철 막차는 미리 예매하세요.', en: 'Back to the station; book the peak-season train ahead.' } }
          ]
        }
      },
      {
        key: 'winter', emoji: '❄️',
        name: { ko: '겨울 여행', en: 'Winter' }, months: { ko: '12~2월', en: 'December–February' },
        blurb: { ko: '눈과 얼음, 그리고 따뜻한 쉼. 눈꽃 산행과 얼음낚시, 겨울 바다와 일출, 온천과 실내 여행입니다.', en: 'Snow and ice, and somewhere warm: snowy peaks, ice fishing, the winter sea and sunrise, hot springs and indoor days.' },
        themes: [
          { ko: '눈꽃', en: 'Snow scenery' }, { ko: '설산 산행', en: 'Snowy peaks' }, { ko: '눈꽃 트레킹', en: 'Snow trails' }, { ko: '스키', en: 'Skiing' },
          { ko: '눈썰매', en: 'Sledding' }, { ko: '얼음축제', en: 'Ice festivals' }, { ko: '얼음낚시', en: 'Ice fishing' }, { ko: '겨울 호수', en: 'Frozen lakes' },
          { ko: '겨울 폭포', en: 'Frozen falls' }, { ko: '겨울 바다', en: 'Winter sea' }, { ko: '일출', en: 'Sunrise' }, { ko: '겨울 섬', en: 'Winter islands' },
          { ko: '온천·스파', en: 'Hot springs' }, { ko: '찜질·휴식', en: 'Saunas' }, { ko: '겨울 캠핑', en: 'Winter camping' }, { ko: '겨울 별빛', en: 'Winter stars' },
          { ko: '빛축제', en: 'Light festivals' }, { ko: '크리스마스', en: 'Christmas' }, { ko: '겨울 먹거리', en: 'Winter food' }, { ko: '따뜻한 실내 여행', en: 'Indoor days' }
        ],
        places: [
          { name: { ko: '태백산', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산', note: { ko: '눈꽃과 주목 군락. 1~2월 설경이 절정.', en: 'Snow on yew trees, best in January and February.' } },
          { name: { ko: '덕유산 향적봉', en: 'Deogyusan Hyangjeokbong' }, region: 'jeolla', q: '덕유산', note: { ko: '곤돌라로 오르는 설경. 운행 확인.', en: 'A gondola up to the snow; check it is running.' } },
          { name: { ko: '대관령 양떼목장', en: 'Daegwallyeong sheep ranch' }, region: 'gangwon', q: '대관령양떼목장', note: { ko: '눈 덮인 초원과 목장 풍경.', en: 'Snow-covered pasture and ranch.' } },
          { name: { ko: '화천 산천어축제', en: 'Hwacheon ice festival' }, region: 'gangwon', q: '화천 산천어축제', note: { ko: '1월 얼음낚시. 개최 여부와 얼음 상태 확인.', en: 'Ice fishing in January; check the ice and event status.' } },
          { name: { ko: '평창송어축제', en: 'Pyeongchang trout festival' }, region: 'gangwon', q: '평창송어축제', note: { ko: '송어 얼음낚시와 눈썰매.', en: 'Trout fishing on ice and sledding.' } },
          { name: { ko: '철원 한탄강 주상절리길', en: 'Cheorwon Hantangang columnar path' }, region: 'gangwon', q: '한탄강 주상절리길', note: { ko: '협곡과 겨울 강. 결빙 통제 확인.', en: 'A gorge in winter; check closures for ice.' } },
          { name: { ko: '인제 원대리 자작나무숲', en: 'Wondae-ri birch forest' }, region: 'gangwon', q: '원대리 자작나무숲', note: { ko: '하얀 자작나무와 눈길. 입산 통제 확인.', en: 'White birch and snow; check access.' } },
          { name: { ko: '포천 산정호수', en: 'Sanjeong lake, Pocheon' }, region: 'capital', q: '산정호수', note: { ko: '겨울 호수와 산, 산책과 드라이브.', en: 'A frozen lake under the mountain.' } },
          { name: { ko: '포항 호미곶', en: 'Homigot, Pohang' }, region: 'gyeongsang', q: '호미곶', note: { ko: '새해 해돋이와 상생의 손.', en: 'New-year sunrise and the great hands.' } },
          { name: { ko: '정동진', en: 'Jeongdongjin' }, region: 'gangwon', q: '정동진', note: { ko: '겨울 바다 일출과 기차역.', en: 'Winter sunrise by the seaside station.' } },
          { name: { ko: '아침고요수목원 겨울빛축제', en: 'Morning Calm winter lights' }, region: 'capital', q: '아침고요수목원 오색별빛정원전', note: { ko: '겨울철 조명 정원, 계절 한정.', en: 'A lit winter garden, seasonal only.' } },
          { name: { ko: '여수 향일암', en: 'Hyangiram, Yeosu' }, region: 'jeolla', q: '향일암', note: { ko: '겨울 동해 일출과 절벽 사찰.', en: 'Winter sunrise at a cliffside hermitage.' } }
        ],
        course: {
          title: { ko: '태백 — 눈꽃 산행 하루', en: 'Taebaek — a day in the snow' },
          meta: { ko: '5곳 · 약 10시간 · 도보 8km', en: '5 stops · about 10 hours · 8 km on foot' },
          steps: [
            { phase: 'start', time: '08:30', name: { ko: '태백역', en: 'Taebaek Station' }, q: '태백역', move: { ko: '출발', en: 'Start' },
              desc: { ko: '태백선 기차역. 청량리에서 3시간 반. 역에서 당골 입구까지 버스로 20분입니다. 아이젠과 장갑을 챙기세요.', en: 'On the Taebaek line, three and a half hours from Cheongnyangni; Danggol is twenty minutes by bus. Bring spikes and gloves.' } },
            { phase: 'morning', time: '09:10', name: { ko: '당골광장', en: 'Danggol plaza' }, q: '태백산 당골', move: { ko: '버스 약 20분', en: 'Bus, about 20 min' },
              desc: { ko: '탐방로 입구. 겨울에는 일몰이 이르니 하산 시간을 안내판에서 확인하세요.', en: 'The trailhead. Winter sunsets are early — note the descent time on the board.' } },
            { phase: 'morning', time: '10:00', name: { ko: '주목 군락', en: 'Yew grove' }, q: '태백산 주목군락', move: { ko: '도보 약 50분', en: 'Walk, about 50 min' },
              desc: { ko: '눈을 머금은 주목이 능선을 따라 이어집니다. 바람이 세면 체감이 크게 떨어집니다.', en: 'Snow-laden yews along the ridge; the wind chill is severe up here.' },
              photo: 'th-seasons-p2' },
            { phase: 'lunch', time: '12:00', name: { ko: '대피소 점심', en: 'Lunch at the shelter' }, q: '태백산 대피소', move: { ko: '도보 약 30분', en: 'Walk, about 30 min' },
              desc: { ko: '대피소에서 도시락. 취사는 안 되니 미리 싸 오세요.', en: 'A packed lunch at the shelter — no cooking, so bring it ready.' } },
            { phase: 'afternoon', time: '13:00', name: { ko: '천제단', en: 'Cheonjedan altar' }, q: '태백산 천제단', move: { ko: '도보 약 40분', en: 'Walk, about 40 min' },
              desc: { ko: '정상의 제단. 눈과 바람이 만드는 풍경이 이 산의 겨울입니다.', en: 'The summit altar — snow and wind are what this mountain is in winter.' } },
            { phase: 'return', time: '16:30', name: { ko: '태백역', en: 'Taebaek Station' }, q: '태백역', move: { ko: '도보·버스 약 60분', en: 'Walk and bus, about 60 min' },
              desc: { ko: '해가 지기 전에 내려와야 합니다. 역 근처에서 국밥으로 몸을 녹이세요.', en: 'Be down before dark, and warm up with rice soup near the station.' } }
          ]
        }
      }
    ]
  },
  places: [
    { name: { ko: '진해 여좌천', en: 'Jinhae Yeojwacheon' }, region: 'gyeongsang', q: '여좌천', note: { ko: '봄 벚꽃터널.', en: 'Spring cherry tunnel.' } },
    { name: { ko: '양양 서피비치', en: 'Surfyy Beach' }, region: 'gangwon', q: '서피비치', note: { ko: '여름 서핑과 바다.', en: 'Summer surf and sea.' } },
    { name: { ko: '내장산', en: 'Naejangsan' }, region: 'jeolla', q: '내장산', note: { ko: '가을 단풍터널.', en: 'Autumn maple tunnel.' } },
    { name: { ko: '태백산', en: 'Taebaeksan' }, region: 'gangwon', q: '태백산', note: { ko: '겨울 눈꽃과 천제단.', en: 'Winter snow and the summit altar.' } }
  ],
  food: [
    { slot: { ko: '봄', en: 'Spring' }, emoji: '🌿', dish: { ko: '봄나물 · 주꾸미 · 도다리', en: 'Spring greens · webfoot octopus · flounder' }, note: { ko: '남도는 3~4월이 제철입니다.', en: 'In the south, March and April are the season.' } },
    { slot: { ko: '여름', en: 'Summer' }, emoji: '🍜', dish: { ko: '냉면 · 물회 · 옥수수', en: 'Cold noodles · cold fish soup · corn' }, note: { ko: '더울수록 차가운 것이 답입니다.', en: 'The hotter it gets, the colder the bowl.' } },
    { slot: { ko: '가을', en: 'Autumn' }, emoji: '🦐', dish: { ko: '대하 · 전어 · 버섯', en: 'Prawns · gizzard shad · mushrooms' }, note: { ko: '가을 바다의 맛은 구이와 회.', en: 'Autumn seafood is grilled or raw.' } },
    { slot: { ko: '겨울', en: 'Winter' }, emoji: '🦪', dish: { ko: '굴 · 대게 · 과메기', en: 'Oysters · snow crab · dried saury' }, note: { ko: '겨울 바다의 진한 맛.', en: 'The deep taste of the winter sea.' } }
  ],
  photos: [
    { file: 'th-seasons', cap: { ko: '계절의 색', en: 'The colour of the season' } },
    { file: 'th-seasons-p2', cap: { ko: '산과 물의 계절', en: 'A season of mountain and water' } }
  ],
  tip: { ko: '꽃과 단풍, 얼음축제는 해마다 2~3주씩 달라집니다. 떠나기 전에 공식 개화·절정 공지를 확인하고, 주말은 대중교통을 이용하세요.', en: 'Blooms, foliage and ice shift by two to three weeks each year — check the official notice before travelling, and take transit at weekends.' }
},
