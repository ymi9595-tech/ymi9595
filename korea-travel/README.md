# 당장 가볼까? · Go Now? Korea Day-Trip Courses

열 곳의 도시를, 도착 터미널에서 시작하는 **당일치기 하루 코스**로 소개하는 무료 여행 노트입니다.
Ten Korean destinations, each with one practical one-day course that starts at the terminal you arrive at.

- `index.html` — 표지 + 도시 카드 + 상세 보기 (한 페이지)
- `assets/data.js` — 도시·코스·음식 데이터 (도시를 추가하려면 여기에 한 블록)
- `assets/app.js` — 렌더링, KR/EN 전환, `#seoul` 같은 해시 주소, 통합 찾기(검색·취향 칩), 하루 실용 정보
- `assets/practical.js` — 코스마다의 1인 예상 예산과 귀환 안내 (`city:<id>` · `theme:<id>`)
- `../danbi-guide-bar.js` — 세 사이트 공통 하단 연결 띠 (`DanbiGuide.render('ko'|'en')`)
- `assets/style.css` — 파스텔 스티커 스타일
- `images/` — 위키미디어 공용에서 내려받아 로컬에 둔 실제 촬영 사진 (외부 핫링크 없음)
- `CREDITS.md` / 사이트 하단 '사진 출처' — 촬영자와 라이선스

식당 이름은 넣지 않았습니다. 그 동네의 대표 음식만 소개합니다.
No restaurant names — only the dishes each town is known for.

`tools/` holds the small scripts used to fetch the photographs from Wikimedia Commons
(`commons.py` searches, `download.py` fetches with the licence metadata, `spec*.json` records
which file each slot came from). They are not needed to serve the site.
