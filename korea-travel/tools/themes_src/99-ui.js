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
  themeSub: '산, 바다, 시장, 축제, 동물농장, 반려견, 일출까지 — 테마마다 대표 추천지와 당일 하루 코스가 있습니다.',
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
  themeSub: 'Mountains, sea, markets, festivals, animal farms, dogs, sunrise — every theme comes with places to go and a one-day course.',
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
