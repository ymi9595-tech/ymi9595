# 나만의 아이디어 창고 (숨은 경로)

- 라이브: `https://ymi9595-tech.github.io/ymi9595/vault-ideas-k9m4/`
- 비공개 원칙: `noindex, nofollow, noarchive` — 이 주소는 공개 사이트(`ai-guide`, `korea-travel`, `playground`)와 `danbi-guide-bar.js` 어디에도 링크하지 않는다.

## 파일

| 파일 | 역할 |
| --- | --- |
| `index.html` | 화면 전체(검색·카테고리 탭·별표/메모·홈 화면 추가). 목록은 `ideas.json`을 읽어 그림 |
| `ideas.json` | 아이디어 데이터. 매일 아침 스케줄이 이 파일만 고친다 |
| `manifest.webmanifest` | PWA 설정 (`id: /ymi9595/vault-ideas-k9m4/`, `scope`·`start_url`: `./`) |
| `sw.js` | 캐시 없는 통과 전용 서비스 워커 (설치 조건용) |
| `icon-192.png` `icon-512.png` `apple-touch-icon.png` | 전구·열쇠 아이콘 |
| `favicon.png` `favicon-32.png` | 탭 아이콘 |

## ideas.json 형식

```json
{
  "updatedAt": "2026.11.28",
  "categories": [{ "key": "무인매장", "label": "☕ 무인매장" }],
  "ideas": [
    {
      "id": "i19",
      "cat": "요즘 트렌드",
      "date": "2026.11.28",
      "isNew": true,
      "title": "카드 제목",
      "summary": "두 줄 요약",
      "apply": "영미 님 사업에 써먹는 법 — 구체적인 적용 팁",
      "source": { "label": "출처 이름", "url": "https://..." }
    }
  ]
}
```

- `id`: 겹치지 않게 계속 올린다(`i21`, `i22` …).
- `cat`: `categories[].key` 중 하나. 새 분야가 필요하면 `categories`에 한 줄 추가하면 탭이 자동으로 생긴다.
- `isNew`: 그날 새로 넣은 카드만 `true`, 지난 카드는 `false`로 내린다.
- `date`: `YYYY.MM.DD`. 화면은 날짜 내림차순으로 보여 주므로 새 카드는 JSON 배열 맨 위에 넣으면 맨 앞에 온다.
- 개인정보(연락처·주소·계좌·사업자번호·매출 숫자)는 넣지 않는다.
