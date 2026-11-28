/* 단비랩 AI 활용·응용 가이드 — 콘텐츠 데이터
   · ITEMS : 왼쪽 메뉴에 나오는 항목 (tool 8 + recipe 6)
   · BOOKS : 단비랩 전자책 서가 (실제 책에서 뽑은 맛보기 포함)
   모든 문구는 {ko, en} 두 벌. 책 속 인용(quote.b)은 책에 실린 한국어 원문 그대로입니다. */

const STORE = 'https://smartstore.naver.com/danbilab';
const PAYHIP = 'https://payhip.com/DanbiLab';
const pUrl = (id) => `${STORE}/products/${id}`;

const UI = {
  ko: {
    htmlLang: 'ko',
    brand: '단비랩 AI 가이드',
    brandSub: 'AI별로, 목적별로 바로 쓰는 법',
    navTools: 'AI 도구별 활용법',
    navRecipes: '목적별 응용 레시피',
    navBooks: '단비랩 전자책 서가',
    navToolsCount: '8종',
    navRecipesCount: '6종',
    navBooksCount: '14권',
    sideHint: '왼쪽에서 궁금한 항목을 누르면 바로 열립니다.',
    home: '처음으로',
    back: '목록으로',
    kicker: '단비랩 무료 가이드 · 2026년 11월 기준',
    title: 'AI별로, 목적별로<br>바로 쓰는 법',
    lead: '여덟 가지 AI와 여섯 가지 목적을, 실제 매장·농장·책 만들기 현장에서 쓰는 순서 그대로 정리했습니다. 각 항목 끝에는 단비랩 전자책에서 뽑은 핵심 노하우와 책 속 프롬프트도 조금씩 담았습니다.',
    chipTools: 'AI 도구 8종',
    chipRecipes: '목적별 레시피 6종',
    chipPrompts: '복사되는 프롬프트',
    chipBooks: '책 속 맛보기 14권',
    chipFree: '무료 · 회원가입 없음',
    toolsTitle: '🤖 AI 도구별 활용법',
    toolsLead: '어떤 AI를 언제 열어야 하는지부터. 각 도구의 성격을 알고 나면 헤매는 시간이 줄어듭니다.',
    recipesTitle: '🎯 목적별 응용 레시피',
    recipesLead: '일이 정해져 있을 때는 목적에서 출발하는 편이 빠릅니다. 블로그, 매장, 부동산, 농장, 책, 영어까지.',
    promptsCount: (n) => `프롬프트 ${n}개`,
    bookshelfTitle: '📚 단비랩 전자책 서가',
    bookshelfLead: '이 가이드에 맛보기를 담은 책들입니다. 각 책의 핵심 노하우와 프롬프트는 해당 항목 안에서 더 볼 수 있습니다.',
    shelfExcerpt: '맛보기 보기',
    shelfBuy: '스마트스토어',
    shelfPages: (p) => `${p}쪽`,
    howTitle: '이 가이드 쓰는 법',
    how: [
      { t: '① 도구를 고릅니다', d: '하려는 일이 정해져 있으면 [목적별 응용 레시피]에서, AI 자체가 궁금하면 [AI 도구별 활용법]에서 시작하세요.' },
      { t: '② 설명 세 줄을 읽습니다', d: '"이럴 때 쓰세요"는 그 도구를 열어야 하는 순간, "핵심 팁 3가지"는 결과가 달라지는 지점입니다.' },
      { t: '③ 프롬프트를 복사해 씁니다', d: '📋 Copy를 누르고, [ ] 안의 내 상황만 바꿔 붙여넣으세요. 그대로 쓰는 것보다 한 줄 내 얘기를 더하는 게 훨씬 좋습니다.' }
    ],
    promiseTitle: '쓰기 전에 꼭 지켜 주세요',
    promises: [
      { t: '개인정보는 넣지 않습니다', d: '주민등록번호·계좌번호·손님 연락처·차량번호는 AI에 입력하지 않습니다. 이름은 "김○○"처럼 가려서 씁니다.' },
      { t: '저작권과 상업적 이용을 확인합니다', d: '무료 요금제에서 만든 이미지·영상·음악은 상업적 사용이 제한될 수 있습니다. 서비스 약관의 "상업적 이용" 항목을 확인하고, 남의 사진·음악을 그대로 넣지 않습니다.' },
      { t: '숫자와 법은 원문을 봅니다', d: 'AI는 그럴듯하게 틀린 답을 합니다. 지원사업 자격, 세금, 계약 조항, 요금제는 반드시 공식 페이지나 원문으로 다시 확인하세요.' }
    ],
    whenLabel: '① 이럴 때 쓰세요',
    tipsLabel: '② 핵심 사용 팁 3가지',
    promptsLabel: '③ 실전 프롬프트',
    promptsHint: '📋 를 누르면 전체 문장이 복사됩니다. [ ] 안은 내 상황으로 바꿔 주세요.',
    notesLabel: '주의할 점',
    bookLabel: '관련 단비랩 전자책',
    bookPreviewTitle: '📖 책 속 핵심 맛보기',
    bookPreviewLead: '지은이가 직접 쓴 책에서, 이 항목에 바로 쓸 수 있는 부분만 옮겼습니다. 프롬프트는 책에 실린 그대로입니다.',
    fromBook: '책 속 위치',
    bookPrompts: '책 속 프롬프트',
    bookKeys: '이 책이 알려 주는 것',
    bookStore: '스마트스토어에서 보기',
    bookPayhip: 'Payhip 영문판',
    bookAll: '단비랩 책 전체 보기',
    bookNote: '전자책(PDF) · 구매 후 바로 내려받기',
    quoteLang: '책에 실린 한국어 원문 그대로',
    copy: 'Copy',
    copied: '복사됨 ✓',
    copyFail: '길게 눌러 복사해 주세요',
    share: '공유',
    shareDone: '링크를 복사했습니다',
    prev: '이전',
    next: '다음',
    disclosureTitle: '안내',
    disclosure: '단비랩(DanbiLab)이 제작한 독립 AI 활용·프롬프트 가이드입니다. 각 AI 서비스의 공식 사이트가 아닙니다.',
    disclosureEn: 'An independent AI usage & prompt guide by DanbiLab. This is not an official site of any AI service.',
    dateNote: '2026년 11월 기준 안내 · 기능과 요금제는 각 서비스 정책에 따라 변동될 수 있습니다.',
    footMade: '만든 곳 · 단비랩 DanbiLab',
    footFree: '무료로 나눕니다. 출처를 밝히고 자유롭게 공유해 주세요.',
    footBooks: '단비랩 전자책',
    footHome: '단비랩 놀이터',
    notFound: '찾으시는 항목이 없습니다. 목록에서 다시 골라 주세요.',
    menu: '메뉴',
    langLabel: 'Language / 언어'
  },
  en: {
    htmlLang: 'en',
    brand: 'DanbiLab AI Guide',
    brandSub: 'One guide per tool, one per job',
    navTools: 'AI tools',
    navRecipes: 'Recipes by goal',
    navBooks: 'DanbiLab books',
    navToolsCount: '8',
    navRecipesCount: '6',
    navBooksCount: '14',
    sideHint: 'Pick anything on the left and it opens right here.',
    home: 'Home',
    back: 'Back to list',
    kicker: 'A free DanbiLab guide · as of November 2026',
    title: 'Which AI,<br>and for what job',
    lead: 'Eight AI tools and six real jobs, written in the order we actually use them — at the shop, on the farm, and while making books. Each page ends with know-how and prompts taken from a DanbiLab e-book.',
    chipTools: '8 AI tools',
    chipRecipes: '6 recipes by goal',
    chipPrompts: 'copy-ready prompts',
    chipBooks: 'inside 14 books',
    chipFree: 'Free · no sign-up',
    toolsTitle: '🤖 One page per AI tool',
    toolsLead: 'Start with which AI to open, and when. Knowing what each one is good at saves the wandering.',
    recipesTitle: '🎯 Recipes by goal',
    recipesLead: 'When the work is already decided, start from the work. Blog, shop, real estate, farm, books, English.',
    promptsCount: (n) => `${n} prompts`,
    bookshelfTitle: '📚 The DanbiLab shelf',
    bookshelfLead: 'These are the books previewed in this guide. Each one\'s key ideas and prompts appear inside its topic page.',
    shelfExcerpt: 'See the preview',
    shelfBuy: 'Smart Store',
    shelfPages: (p) => `${p} pp.`,
    howTitle: 'How to use this guide',
    how: [
      { t: '① Choose a starting point', d: 'If you know the job, open Recipes by goal. If you are curious about the AI itself, open AI tools.' },
      { t: '② Read three short notes', d: '"When to use it" is the moment to open that tool. "Three tips" is where the result actually changes.' },
      { t: '③ Copy and paste a prompt', d: 'Press 📋 Copy and replace only the [brackets] with your own situation. One line about you beats the prompt as written.' }
    ],
    promiseTitle: 'Three promises before you type',
    promises: [
      { t: 'Never type personal data', d: 'No resident numbers, bank accounts, customer phone numbers or plate numbers. Mask names as "Kim ○○".' },
      { t: 'Check copyright and commercial use', d: 'Images, video and music made on a free plan may not be licensed for commercial use. Read the service terms, and never drop in other people\'s photos or music.' },
      { t: 'Numbers and law: go to the source', d: 'AI answers sound right and can be wrong. Verify grant eligibility, tax, contract clauses and pricing on the official page.' }
    ],
    whenLabel: '① When to use it',
    tipsLabel: '② Three working tips',
    promptsLabel: '③ Prompts that work',
    promptsHint: 'Press 📋 to copy the whole prompt. Swap the [brackets] for your own details.',
    notesLabel: 'Watch out for',
    bookLabel: 'DanbiLab e-books',
    bookPreviewTitle: '📖 Inside the book',
    bookPreviewLead: 'Excerpts from the author\'s own books, chosen for this topic. The prompts are printed as they appear in the book.',
    fromBook: 'In the book',
    bookPrompts: 'Prompts from the book',
    bookKeys: 'What the book teaches',
    bookStore: 'Open in Smart Store',
    bookPayhip: 'Payhip (English)',
    bookAll: 'All DanbiLab books',
    bookNote: 'PDF e-book · instant download',
    quoteLang: 'Shown as printed in the Korean edition',
    copy: 'Copy',
    copied: 'Copied ✓',
    copyFail: 'Press and hold to copy',
    share: 'Share',
    shareDone: 'Link copied',
    prev: 'Previous',
    next: 'Next',
    disclosureTitle: 'Note',
    disclosure: 'An independent AI usage & prompt guide by DanbiLab. It is not an official site of any AI service listed here.',
    disclosureEn: '단비랩(DanbiLab)이 제작한 독립 AI 활용·프롬프트 가이드입니다. 각 AI 서비스의 공식 사이트가 아닙니다.',
    dateNote: 'Accurate as of November 2026. Features and pricing change with each service\'s own policy.',
    footMade: 'Made by DanbiLab',
    footFree: 'Free to share, with credit.',
    footBooks: 'DanbiLab books',
    footHome: 'DanbiLab playground',
    notFound: 'That page is not here. Pick one from the list.',
    menu: 'Menu',
    langLabel: 'Language / 언어'
  }
};

/* ───────────── 단비랩 전자책 (스마트스토어 상품번호 기준) ───────────── */
const BOOKS = {
  ai1: { emoji: '💬', c: '#D8F0E6', pages: 96, price: '10,000원', id: '13890353547',
    title: { ko: '말만 하면 AI 비서가 척척! ① 실전 활용편', en: 'Just Say It: AI Assistant ①' },
    desc: { ko: '다섯 AI 비서를 처음 켜는 사람을 위한 실전편. 사례 220개와 프롬프트 620개, 안전 3줄, 처음 일주일 연습 코스를 담았습니다.', en: 'A first-run guide to five AI assistants: 220 real cases, 620 prompts and a one-week practice course.' } },
  ai2: { emoji: '🗂️', c: '#E7DEF7', pages: 233, price: '10,000원', id: '13890358094',
    title: { ko: '말만 하면 AI 비서가 척척! ② 500 프롬프트', en: 'Just Say It: AI Assistant ② 500 Prompts' },
    desc: { ko: '상황만 고르면 되는 카드 500장. 카드 한 장의 구조와 공통 마스터 프롬프트, 승인 규칙을 함께 담았습니다.', en: '500 situation cards, plus the master prompt and approval rules that sit under all of them.' } },
  agent10: { emoji: '🤖', c: '#D6E8FA', pages: 117, price: '14,000원', id: '13884645054',
    title: { ko: '나도 이제 AI 쓴다! 내 비서 10명', en: 'I Use AI Now: Ten Assistants' },
    desc: { ko: '에이전트 10종을 같은 순서로 비교한 안내서. 제미나이 Tasks와 퍼플렉시티 코메트 장에 화면 순서와 프롬프트가 있습니다.', en: 'Ten agents compared in the same order, including Gemini Tasks and Perplexity Comet, screen by screen.' } },
  realtor: { emoji: '🏡', c: '#E4E1F5', pages: 245, price: '24,000원', id: '13881172082',
    title: { ko: 'AI가 일하고, 공인중개사는 계약만 하세요!', en: 'The AI Handbook for Realtors' },
    desc: { ko: '매물 관리·상담·마케팅·계약 서류·자동화까지 20장. 부록에 실무 프롬프트 100선과 30일 구축 프로젝트가 있습니다.', en: 'Twenty chapters from listings to contracts and automation, with 100 prompts in the appendix.' } },
  realtor200: { emoji: '📋', c: '#EDE8FA', pages: 230, price: '5,900원', id: '13881807675',
    title: { ko: '공인중개사 AI 프롬프트 200선', en: '200 AI Prompts for Realtors' },
    desc: { ko: '매물 홍보부터 문자 응대, 계약·특약, 시세 분석까지 8개 카테고리 200개. 복사해서 대괄호만 바꾸면 됩니다.', en: '200 prompts in eight categories, from listing copy to texts, clauses and market analysis.' } },
  farmai: { emoji: '🌱', c: '#DFEFD8', pages: 118, price: '14,000원', id: '13899350232',
    title: { ko: '내 농장에 똑똑한 AI 비서 들이기', en: 'Smart AI Assistant for Your Farm' },
    desc: { ko: '농사로·흙토람·NCPMS·PSIS 같은 공식 자료를 AI와 함께 읽는 법. 질문 3단계와 병해충 확인 순서를 담았습니다.', en: 'Reading Korea\'s official farm sources with AI: three-step questions and a pest-check order.' } },
  farm200: { emoji: '🍒', c: '#F3EBC8', pages: 222, price: '4,900원', id: '13881917912',
    title: { ko: '농산물 판매 AI 프롬프트 200선', en: '200 AI Prompts for Selling Produce' },
    desc: { ko: '상세페이지·당근·로컬푸드·쇼츠 대본·CS 응대까지 200개. 체리·감자 같은 실제 예시가 붙어 있습니다.', en: '200 prompts for product pages, local markets, Shorts scripts and customer service, with worked examples.' } },
  adobe: { emoji: '🎨', c: '#FBD9E2', pages: 110, price: '14,000원', id: '13899890024',
    title: { ko: '어도비 스톡 한 권으로 끝내는 AI·사진·그림 달러 수익화 실전서', en: 'Adobe Stock in Practice' },
    desc: { ko: '가입·W-8BEN·Payoneer·첫 출금부터 AI 이미지 표시 규정, 제목·키워드 30장 예시까지.', en: 'From sign-up and tax forms to AI disclosure rules and thirty title-and-keyword examples.' } },
  stock: { emoji: '📷', c: '#FCEBC2', pages: 54, price: '10,000원', id: '13899816264',
    title: { ko: '내 사진·그림, 달러로 팔아볼까?', en: 'Selling Your Photos and Art in Dollars' },
    desc: { ko: 'Adobe Stock·Dreamstime·Vecteezy 가입과 Payoneer 정산을 화면 순서대로. 하루 한 곳씩 두 주면 세 곳이 열립니다.', en: 'Sign-up and payouts for three stock sites, one screen at a time.' } },
  localmkt: { emoji: '📣', c: '#FFE3D3', pages: 112, price: '10,000원', id: '13899484906',
    title: { ko: '광고비 0원! 당근·블로그·쇼츠 소상공인 마케팅 실전서', en: 'Zero-Ad Marketing for Small Shops' },
    desc: { ko: '가게 정보 카드 10칸, 프롬프트 3줄, 3-20-7 쇼츠 구조, 일주일 0원 루틴까지. 현장에서 쓴 문장 그대로.', en: 'A ten-line shop card, three-line prompts, the 3-20-7 Shorts structure and a weekly zero-budget routine.' } },
  unmanned: { emoji: '🏬', c: '#D3EDEA', pages: 151, price: '10,000원', id: '13901015972',
    title: { ko: '사장 없이 돌아가는 무인매장 자동화 실전서', en: 'Running an Unmanned Store' },
    desc: { ko: 'QR 안내 3장, 자동응대 문구 24개, AI 초안 워크플로우, 4부 12장과 부록 A~H.', en: 'Three QR posters, 24 reply scripts, an AI drafting workflow and eight appendices.' } },
  farm365: { emoji: '🌾', c: '#E9EFD0', pages: 135, price: '19,000원', id: '13889854489',
    title: { ko: '하루도 비지 않는 365일 체험·치유농장 프로그램 대백과', en: 'A Year of Farm Programmes' },
    desc: { ko: '1월 1일부터 12월 31일까지 날짜별 프로그램 표, 절기별 지도안 33편, 실내 대체 30선.', en: 'A day-by-day programme table for the whole year, 33 seasonal lesson plans and 30 indoor alternatives.' } },
  overseas: { emoji: '🌏', c: '#D8E9F8', pages: 178, price: '14,000원', id: '13899704729',
    title: { ko: '내 전자책, 달러로 팔아볼까?', en: 'Selling Your E-book in Dollars' },
    desc: { ko: 'PayPal·Payoneer·Payhip·Gumroad·Ko-fi·KDP·Redbubble의 가입·인증·정산과 상품 페이지·가격 전략.', en: 'Sign-up, verification and payouts across seven platforms, plus listing and pricing strategy.' } },
  host50: { emoji: '🗺️', c: '#D9E4F7', pages: 108, price: '14,000원', id: '13899476557',
    title: { ko: '외국인 친구 한국 왔을 때 꼭 함께 해보는 50가지', en: 'When a Foreign Friend Visits Korea' },
    desc: { ko: '5개 테마 50가지 체험을 시간·비용·동선으로 정리하고, 현장에서 쓰는 한국어 40선을 붙였습니다.', en: 'Fifty experiences by theme with time, cost and route, plus forty phrases to use on the spot.' } }
};

const ITEMS = [
  /* ───────────────────────── AI 도구 8종 ───────────────────────── */
  {
    id: 'chatgpt', group: 'tool', emoji: '💬', c1: '#D8F0E6', c2: '#BFE6D5',
    name: { ko: 'ChatGPT', en: 'ChatGPT' },
    sub: { ko: '만능 비서 · 초안 · 표 정리 · 역할 부여', en: 'All-round assistant · drafts · tables' },
    tag: { ko: '막막할 때 가장 먼저 여는 도구', en: 'The one to open when you are stuck' },
    when: {
      ko: '빈 화면에 앉아 한 시간 씨름할 안내문, 공지, 정리 표를 10분으로 줄여 줍니다. 잘 쓰는 도구라기보다, 시킨 일을 끝까지 물고 늘어지는 비서에 가깝습니다. 매장 공지, 손님 답변, 간단한 기획, 엑셀 수식까지 "말로 시키는 일"은 대부분 여기서 시작하면 됩니다.',
      en: 'Notices, announcements and tidy tables that would take an hour at a blank screen, done in ten minutes. It is less a writing tool than an assistant that keeps working until the job is finished — shop notices, replies to customers, rough plans, spreadsheet formulas.'
    },
    tips: [
      { ko: '"너는 누구고, 나는 누구다"를 한 줄 붙이세요. "너는 10년 차 소상공인 컨설턴트야. 나는 안성에서 무인카페를 운영해." 이 한 줄로 답의 결이 달라집니다.', en: 'Give it a role and your situation in one line: "You are a small-business consultant. I run an unmanned cafe in Korea." That single line changes the answer.' },
      { ko: '한 번에 완성본을 받으려 하지 말고, 초안 → 고치기 → 다듬기 세 번으로 나눠 시키세요. 두 번째 요청에서 훨씬 나아집니다.', en: 'Do not ask for the final version at once. Ask for a draft, then a revision, then a polish. The second pass is where it gets good.' },
      { ko: '결과물의 모양을 먼저 정해 주세요. "표로, 열은 항목·비용·주의사항으로", "3문장 이내 존댓말로"처럼 형식을 지정하면 정리된 답이 옵니다.', en: 'Say the shape first — "as a table with columns item / cost / caution", "three polite sentences" — and the answer comes back tidy.' }
    ],
    prompts: [
      {
        t: { ko: '매장 공지문 두 버전', en: 'A shop notice in two lengths' },
        b: {
          ko: '너는 동네 카페 사장님이야. 아래 상황으로 손님께 알릴 공지문을 써 줘.\n\n· 상황: [예: 12월 3일 화요일, 커피머신 점검으로 오전 11시까지 휴무]\n· 톤: 친절하지만 짧게, 사과는 한 번만\n· 형식: ① 문에 붙일 200자 ② 문자용 60자\n· 금지: 과장된 사과, 없는 혜택 약속\n\n두 버전을 따로 보여 주고, 마지막에 "문자 버전에서 뺀 내용"을 한 줄로 알려 줘.',
          en: 'You are the owner of a small neighborhood cafe. Write a notice for customers about the situation below.\n\n· Situation: [e.g. Tuesday Dec 3, closed until 11am for coffee machine service]\n· Tone: kind but short, one apology only\n· Format: (1) 200 characters for the door (2) 60 characters for a text message\n· Avoid: over-apologizing, promising anything we do not offer\n\nShow both versions separately, then tell me in one line what you cut from the text version.'
        }
      },
      {
        t: { ko: '지출 내역 표로 정리', en: 'Turn expenses into a table' },
        b: {
          ko: '아래 지출 내역을 정리해 줘.\n\n[영수증·카드 내역을 그대로 붙여넣기]\n\n① 항목별로 묶어서 표로 (항목 / 금액 / 날짜 / 메모)\n② 합계와 항목별 비중\n③ 세금 신고 때 헷갈릴 만한 항목 3개를 짚어 주기\n숫자는 원문에 있는 것만 쓰고, 읽기 어려운 값은 "확인 필요"로 표시해 줘.',
          en: 'Tidy up the expenses below.\n\n[Paste receipts or card statements here]\n\n(1) A table by category (item / amount / date / note)\n(2) Totals and share per category\n(3) Three items that often cause confusion at tax time\nUse only numbers that appear in the source; mark unclear values as "needs checking".'
        }
      },
      {
        t: { ko: '깐깐한 손님 역할로 검토', en: 'Get it reviewed by a picky customer' },
        b: {
          ko: '너는 깐깐하지만 예의 있는 단골손님이야. 내가 쓴 아래 안내문을 읽고,\n① 오해할 수 있는 문장 3개 (어느 문장인지 그대로 인용)\n② 불친절하게 들리는 곳 2곳\n③ 빠진 정보 2가지\n를 짚어 줘. 칭찬은 하지 말고, 고칠 문장을 바로 쓸 수 있게 대안과 함께 보여 줘.\n\n[안내문 붙여넣기]',
          en: 'You are a loyal but exacting customer. Read my notice below and point out:\n(1) three sentences that could be misread, quoting each\n(2) two places that sound unfriendly\n(3) two missing pieces of information\nNo praise. Show a replacement sentence for each item so I can fix it directly.\n\n[Paste the notice]'
        }
      },
      {
        t: { ko: '같은 글을 대상만 바꿔 다시 쓰기', en: 'Rewrite for a different reader' },
        b: {
          ko: '다음 글을 [50대 여성 손님]이 읽기 편하게 다시 써 줘.\n· 300자 이내, 존댓말\n· 한 문장은 40자 넘지 않게\n· 어려운 외래어는 쉬운 말로\n· 원문에 없는 내용은 절대 추가하지 말고, 빠뜨린 게 있으면 마지막에 따로 알려 줘\n\n[원문 붙여넣기]',
          en: 'Rewrite the text below for [a woman in her fifties].\n· Under 180 words, polite\n· No sentence longer than 25 words\n· Replace jargon with plain words\n· Add nothing that is not in the original; list anything you had to leave out at the end\n\n[Paste the text]'
        }
      }
    ],
    notes: [
      { ko: '주민등록번호·계좌번호·손님 연락처·차량번호는 입력하지 마세요. 이름은 "김○○"처럼 가립니다.', en: 'Never type resident numbers, bank accounts, customer contacts or plate numbers. Mask names.' },
      { ko: '숫자, 법 조항, 요금제는 그럴듯하게 틀릴 수 있습니다. 원문이나 공식 페이지로 다시 확인하세요.', en: 'Numbers, legal clauses and pricing can be confidently wrong. Check the source.' },
      { ko: 'AI가 쓴 티가 나는 상투어("~에 대해 알아보겠습니다")는 지워 달라고 미리 말해 두면 좋습니다.', en: 'Tell it up front to avoid stock phrasing — the sentences that smell like AI.' }
    ],
    preview: {
      books: ['ai1'],
      keys: [
        { ko: '프롬프트는 세 토막 — 무엇을 ＋ 어떤 조건 ＋ 어떻게 끝낼지. 날짜·시간·인원·예산을 구체적으로 채우는 것이 시작입니다.', en: 'A prompt has three parts: what, under what conditions, and where to stop. Fill in dates, times, headcount and budget first.' },
        { ko: '안전 3줄 — ① 결제·전송·예약 확정은 승인을 받은 뒤 ② 전화는 AI라고 먼저 밝히게 ③ 비밀번호·인증번호는 채팅창에 쓰지 않기.', en: 'Three safety lines: nothing is paid, sent or confirmed without your approval; say it is an AI on calls; never type passwords or codes.' },
        { ko: '결과는 AI의 요약이 아니라 원본 화면에서 확인합니다. 금액·시간·주소는 최종 결제·예약 화면에서 대조합니다.', en: 'Check results on the original screen, not the summary — amounts, times and addresses on the final confirmation page.' },
        { ko: '되는 일과 안 되는 일을 함께 적어 두었습니다. 공연 티켓팅 대기열, 은행 앱 로그인, 앱 안에서 직접 눌러야 하는 음악·영상 재생은 아직 어설픕니다.', en: 'It records what works and what does not: ticket queues, bank logins and in-app playback remain unreliable.' }
      ],
      quotes: [
        { n: '사례 57', t: { ko: '메일 요약', en: 'Summarise the mail' }, b: '오늘 온 메일 중 중요한 것만 5개로 요약해줘. 답장이 필요한 건 표시해줘.' },
        { n: '사례 72', t: { ko: '월요일 결정 요약', en: 'Monday decisions only' }, b: '매주 월요일 오전에 이번 주 일정에서 내가 직접 결정해야 할 일만 요약해줘. 다른 사람에게 메시지를 보내거나 일정을 바꾸지는 마.' },
        { n: '사례 71', t: { ko: '경비 정리', en: 'Expense tidy-up' }, b: '이번 출장 영수증 메일을 모아 경비 청구용 엑셀로 정리해줘.' }
      ]
    }
  },

  {
    id: 'claude', group: 'tool', emoji: '🧠', c1: '#E7DEF7', c2: '#D6C8F0',
    name: { ko: 'Claude', en: 'Claude' },
    sub: { ko: '긴 글 · 기획 · 자연스러운 한국어 · 문서 분석', en: 'Long text · planning · natural prose · documents' },
    tag: { ko: '긴 문서와 문체가 중요할 때', en: 'For long documents and a human voice' },
    when: {
      ko: '긴 문서를 통째로 읽히고 싶을 때, 그리고 "AI가 쓴 것 같은 문장"이 아니라 사람이 쓴 것 같은 문장이 필요할 때 씁니다. 계약서, 공고문, 책 원고처럼 길고 맥락이 중요한 자료를 한 번에 넣고 질문할 수 있고, 문장이 차분해서 블로그·책 원고 다듬기에도 잘 맞습니다.',
      en: 'Use it when a long document has to be read whole, or when the sentence must sound like a person wrote it. Contracts, public notices and book manuscripts can go in at once, and the calm tone suits polishing blog posts and book copy.'
    },
    tips: [
      { ko: '문서를 올린 뒤 바로 질문하지 말고 "이해했으면 3줄로 확인해 줘"라고 먼저 물으세요. 엉뚱한 부분을 읽고 답하는 걸 막을 수 있습니다.', en: 'After uploading, ask it to confirm in three lines what the document is about before any questions. It stops answers built on the wrong section.' },
      { ko: '문체를 말로 설명하는 것보다 내가 쓴 글 2~3문단을 예시로 붙이는 게 훨씬 정확합니다.', en: 'Two or three paragraphs of your own writing as an example beat any description of the style you want.' },
      { ko: '긴 원고는 목차를 먼저 합의하고, 각 장을 따로 시키세요. 한 번에 다 쓰게 하면 뒤로 갈수록 힘이 빠집니다.', en: 'For long manuscripts, agree the outline first and then ask for one chapter at a time. Asked all at once, it fades toward the end.' }
    ],
    prompts: [
      {
        t: { ko: '계약서에서 내 부담만 뽑기', en: 'Pull only my obligations out of a contract' },
        b: {
          ko: '첨부한 문서를 읽고, 내가(임차인/을) 부담하거나 지켜야 하는 조항만 뽑아 표로 정리해 줘.\n열: 조항 번호 / 원문 요약 / 기한·금액 / 놓치면 생기는 일\n\n① 원문에 없는 해석은 넣지 말고, 애매한 조항은 "해석 필요"로 표시\n② 마지막에 전문가(변호사·공인중개사)에게 확인해야 할 조항 3개\n이 답은 법률 자문이 아니라 정리를 돕는 것이라고 전제해 줘.',
          en: 'Read the attached document and list only the clauses I (the tenant / party B) must meet, as a table:\ncolumns: clause no. / what it says in plain words / deadline or amount / what happens if missed\n\n(1) No interpretation beyond the text; mark ambiguous clauses "needs a professional"\n(2) End with the three clauses to confirm with a lawyer or licensed agent\nState that this is organization, not legal advice.'
        }
      },
      {
        t: { ko: 'AI 티 안 나게 다시 쓰기', en: 'Rewrite so it does not read like AI' },
        b: {
          ko: '아래 원고를 사람이 쓴 것처럼 다시 써 줘.\n\n· 없애기: "~에 대해 알아보겠습니다", "결론적으로 말하면", "중요한 것은", 같은 상투적 도입·마무리, 형용사 남발, 같은 어미 반복\n· 살리기: 내가 겪은 구체적인 장면, 숫자, 대화\n· 길이는 원문과 비슷하게\n· 원문에 없는 사실은 절대 만들지 말 것\n\n다 쓴 뒤에 네가 바꾼 방식 3가지를 한 줄씩 설명해 줘.\n\n[원고 붙여넣기]',
          en: 'Rewrite the manuscript below so it reads like a person wrote it.\n\n· Remove: stock openings and endings, piled-up adjectives, the same sentence ending over and over\n· Keep: the concrete scenes, numbers and dialogue I actually wrote\n· Similar length\n· Invent no facts\n\nThen explain in three lines how you changed it.\n\n[Paste the manuscript]'
        }
      },
      {
        t: { ko: '1년치 콘텐츠 달력', en: 'A year of content, planned' },
        b: {
          ko: '나는 [안성에서 무인카페와 스터디카페를 운영하고, 체험농장을 준비 중]이야. 1년치 블로그·인스타 주제를 짜 줘.\n\n· 12개월 × 8개 = 96개\n· 계절·명절·24절기와 내 사업 이벤트를 반영\n· 같은 주제가 겹치지 않게, 비슷하면 각도를 바꿔서\n· 표 열: 월 / 주제 / 누구에게 유용한지 / 사진 아이디어\n\n마지막에 "이 중 실제로 쓰기 어려운 5개"를 솔직하게 짚어 줘.',
          en: 'I [run an unmanned cafe and a study cafe, and I am preparing a pick-your-own farm]. Plan a year of blog and social topics.\n\n· 12 months × 8 = 96 topics\n· Reflect the seasons, holidays and my own events\n· No repeats — change the angle when topics are close\n· Table columns: month / topic / who it helps / photo idea\n\nFinish by honestly naming five of them that would be hard to actually produce.'
        }
      }
    ],
    notes: [
      { ko: '긴 문서를 넣을 때 손님 이름·연락처·주민번호는 지우고 넣으세요.', en: 'Strip customer names, contacts and ID numbers before uploading a document.' },
      { ko: '요약이 원문과 다를 수 있습니다. 금액·기한·자격 조건은 원문과 직접 대조하세요.', en: 'Summaries drift from the source. Compare amounts, deadlines and eligibility yourself.' },
      { ko: '의료·법률·세무는 단정하지 않게, "전문가 확인"을 전제로 쓰게 하세요.', en: 'Keep it from asserting on medical, legal or tax matters; require "confirm with a professional".' }
    ],
    preview: {
      books: ['ai2'],
      keys: [
        { ko: '카드 한 장은 다섯 칸 — 상황, 붙여넣기 문장, 예시 입력, 기대 출력, 주의. 실제로 복사하는 곳은 붙여넣기 한 곳뿐입니다.', en: 'A card has five parts: situation, paste line, sample input, expected output, caution. You copy only one of them.' },
        { ko: '카드가 없어 직접 만들 때는 네 문장 — 상황, 조건, 출력, 승인. 네 번째 승인 문장은 지우지 않습니다.', en: 'When there is no card, four sentences: situation, conditions, output, approval. Never delete the approval line.' },
        { ko: '공통 마스터 프롬프트를 대화 맨 앞에 한 번 붙이면, 500개 카드가 같은 규칙 위에서 움직입니다.', en: 'Paste the master prompt once at the top of a conversation and all 500 cards run on the same rules.' },
        { ko: '첫 주에는 연결을 하나만 — 캘린더부터. 업무용 관리자 계정, 고객 개인정보 계정, 한도가 큰 카드는 연결하지 않습니다.', en: 'In the first week connect one thing only — the calendar. Never connect admin accounts, customer-data accounts or high-limit cards.' }
      ],
      quotes: [
        { n: 'PART 1 · 공통 마스터 프롬프트', t: { ko: '대화 맨 앞에 한 번', en: 'Once, at the top' }, b: "아래 규칙을 이 대화 내내 적용해. 1. 내 요청을 실행하기 전에 목표와 범위를 한 줄로 다시 정리하고, 지금 서비스에서 실제로 가능한 일인지 먼저 확인해. 안 되면 안 된다고 말해. 2. 작업은 조사 → 비교 → 초안 → 검토 → 승인 → 실행 → 결과 확인 일곱 단계로 나누고, 단계마다 끝났다고 볼 기준을 붙여. 3. 확인되지 않은 사실은 추측하지 말고 '미확인'으로 표시해. 4. 실제 인명·상점명·주소·연락처·계정은 쓰지 말고 가상 값으로 바꿔. 5. 메시지 발송, 예약 확정, 구매·결제, 게시, 파일 삭제·이동, 개인정보 제출은 실행 전에 대상·내용·금액·날짜·취소 조건을 보여 주고 내 명시적 승인을 받아. 6. 완료 보고는 확인한 사실, 처리 단계, 미확인 항목, 내가 할 일, 완료 증거 순서로 해." },
        { n: 'P-073', t: { ko: '예약 문의 표준 응대문', en: 'Standard reply to a booking enquiry' }, b: '[매장] 예약 문의에 답할 표준 응대문을 만들어 줘. 인원, 시간, 취소 규정, 주차 안내를 담고, 자리가 없을 때 대안 문장도 넣어 줘.' },
        { n: 'P-079', t: { ko: '반복 질문을 FAQ로', en: 'Turn repeat questions into an FAQ' }, b: "최근 문의에서 반복되는 질문 다섯 개를 뽑아 FAQ 초안을 만들어 줘. 답은 확인된 사실만 쓰고, 모르면 '확인 필요'로 남겨 줘." }
      ]
    }
  },

  {
    id: 'gemini', group: 'tool', emoji: '✨', c1: '#D6E8FA', c2: '#BFD9F5',
    name: { ko: 'Gemini', en: 'Gemini' },
    sub: { ko: '구글 연동 · 요약 · 일상 아이디어', en: 'Google links · summaries · everyday ideas' },
    tag: { ko: '구글 자료와 사진을 바로 보여줄 때', en: 'When your material already lives in Google' },
    when: {
      ko: '구글 문서·메일·드라이브에 있는 자료를 AI에게 바로 보여주고 싶을 때, 유튜브 영상을 글로 요약하고 싶을 때, 사진·캡처 속 글자를 읽어 표로 만들고 싶을 때 편합니다. 이미 구글 계정으로 매일 쓰고 있다면 따로 파일을 옮기는 수고가 줄어듭니다.',
      en: 'Handy when the material already sits in Google Docs, Gmail or Drive, when a YouTube video needs summarizing, or when text in a photo or screenshot has to become a table. If you already live in a Google account, there is no file to move.'
    },
    tips: [
      { ko: '유튜브는 링크만 붙이고 "핵심 주장 / 따라 할 단계 / 영상이 말하지 않은 것"으로 나눠 달라고 하면 쓸모가 확 올라갑니다.', en: 'Paste a YouTube link and ask for "main claims / steps to follow / what the video never says". The third part is the useful one.' },
      { ko: '사진은 글자만 뽑게 하지 말고 "읽기 어려운 부분은 확인 필요로 표시"를 붙이세요. 잘못 읽은 숫자를 걸러 줍니다.', en: 'With photos, always add "mark anything unclear as needs-checking". It catches misread numbers.' },
      { ko: '구글 계정 자료를 다룰 때는 "내 드라이브의 [파일명]만"처럼 범위를 좁혀 요청하세요.', en: 'For account material, narrow the scope: "only the file named [x] in my Drive".' }
    ],
    prompts: [
      {
        t: { ko: '유튜브 영상 3단 요약', en: 'A video in three parts' },
        b: {
          ko: '아래 유튜브 링크를 보고 정리해 줘.\n\n① 영상의 핵심 주장 3개 (각 한 문장)\n② 실제로 따라 할 수 있는 단계 (순서대로, 준비물 포함)\n③ 영상에서 말하지 않은 것 — 내가 따로 확인해야 할 부분 3개\n\n광고·협찬 구간은 빼고, 영상에 없는 내용은 추측해서 채우지 마.\n[링크]',
          en: 'Watch the YouTube link below and give me:\n\n(1) Three main claims, one sentence each\n(2) Steps I can actually follow, in order, with what I need\n(3) Three things the video never covers that I should check myself\n\nSkip ads and sponsorships. Do not fill gaps with guesses.\n[link]'
        }
      },
      {
        t: { ko: '영수증·안내문 사진 읽기', en: 'Read a receipt or notice photo' },
        b: {
          ko: '이 사진에서 ① 업체명 ② 날짜 ③ 금액(부가세 포함/별도) ④ 품목만 뽑아 표로 만들어 줘.\n· 사진에 보이는 것만 쓰기\n· 흐리거나 잘린 글자는 "확인 필요"로 표시\n· 마지막에 "이 표로 경비 처리할 때 확인할 점" 2가지\n\n[사진 첨부]',
          en: 'From this photo, extract (1) business name (2) date (3) amount, with or without tax (4) line items, as a table.\n· Only what is visible\n· Mark blurry or cut-off text "needs checking"\n· End with two things to verify before booking it as an expense\n\n[attach photo]'
        }
      },
      {
        t: { ko: '이번 주 올릴 것 7개', en: 'Seven posts for this week' },
        b: {
          ko: '나는 [안성에서 무인카페를 운영]하고, 이번 주는 [주말에 손님이 몰림]이야. 이번 주 인스타그램에 올릴 짧은 아이디어 7개를 만들어 줘.\n\n· 하루에 하나씩, 월~일\n· 각 아이디어: 한 줄 설명 + 첫 문장(훅) + 사진 없이 찍을 수 있는 대안\n· 홍보글은 7개 중 2개까지만, 나머지는 손님에게 쓸모 있는 정보\n표로 정리해 줘.',
          en: 'I [run an unmanned cafe] and this week [weekends get busy]. Give me seven short ideas for Instagram this week.\n\n· One per day, Monday to Sunday\n· Each: one-line idea + opening hook + an alternative I can shoot without a photographer\n· At most two promotional posts; the rest should be useful to customers\nAs a table.'
        }
      }
    ],
    notes: [
      { ko: '구글 계정에 연결하면 접근 범위가 넓어집니다. 어떤 파일까지 읽히는지 설정에서 확인하세요.', en: 'Connecting a Google account widens access. Check in settings which files it can read.' },
      { ko: '메일·문서 요약은 원문과 다를 수 있으니, 계약·공문은 원문을 직접 확인하세요.', en: 'Summaries differ from the original. Read contracts and official notices yourself.' },
      { ko: '사진 속 타인 얼굴·차량번호·연락처는 가리고 올리세요.', en: "Blur other people's faces, plate numbers and contacts in photos." }
    ],
    preview: {
      books: ['agent10'],
      keys: [
        { ko: '제미나이는 내 Gmail·캘린더·Drive를 볼 수 있어서 내 자료를 길게 설명하지 않아도 됩니다. 대신 "어디까지 볼지"를 소스에서 정합니다.', en: 'Gemini can see your Gmail, calendar and Drive, so you never have to describe your material. In return, you decide in the sources how far it may look.' },
        { ko: '대화창을 닫아도 작업은 백그라운드에서 돌고, 끝나면 알림이 옵니다. 한국은 무료, 한 번에 15개까지입니다.', en: 'Close the chat and the task keeps running, then notifies you. Free in Korea, up to 15 tasks at a time.' },
        { ko: '첫 작업은 매일 아침 브리핑 — 같은 시간, 같은 형식으로 와서 "써 본 느낌"이 가장 빨리 옵니다.', en: 'The best first task is a morning briefing: same time, same format, so you feel it working immediately.' },
        { ko: '결과 형식은 항목 수로 못 박고("3개"), 시각은 실제로 일어나는 시간 +30분으로 잡습니다.', en: 'Pin the output by count ("three items") and set the time 30 minutes after you actually get up.' }
      ],
      quotes: [
        { n: '5장 · 첫 작업', t: { ko: '매일 아침 8시 브리핑', en: 'The 8am briefing' }, b: '매일 아침 8시에 아래 내용을 정리해서 알려 줘.\n1) 오늘 일정 3개 (시간·장소·준비물)\n2) 어제 받은 메일 중 내가 답해야 할 것 (보낸 사람 · 한 줄 요약)\n3) 이번 주 마감이 가까운 할 일 3개\n사용할 소스: Gmail, 캘린더, Tasks만.\n메일을 보내거나 일정을 바꾸지는 마. 정리만 해 줘.' },
        { n: '5장 · 소상공인', t: { ko: '매일 저녁 마감 정리', en: 'Evening close-out' }, b: '매일 저녁 10시에 우리 가게 운영을 정리해 줘.\n• 오늘 온 예약·문의 메일을 시간순으로 정리하고, 아직 답하지 않은 것 표시\n• 내일 재고 확인이 필요한 품목 (내가 Drive에 둔 "재고표" 기준으로 5개 이하인 것)\n• 이번 주 직원 근무표에서 빈 시간이 있는 날\n결과는 짧은 목록으로. 답장 초안이 필요하면 "초안 필요"라고만 표시해.' },
        { n: '5장 · 1인 사업자', t: { ko: '후속 연락 챙기기', en: 'Follow-ups that slipped' }, b: '내가 보낸 견적서 중 7일 넘게 답이 없는 건을 찾아서 알려 줘.\n• 표로: 고객명 / 보낸 날짜 / 금액 / 마지막 연락 / 다음에 할 일\n• 각 건마다 짧은 후속 메일 초안(3문장)을 만들어서 보여 줘.\n• 메일은 보내지 말고 초안만. 내가 확인한 뒤 직접 보낼게.' }
      ]
    }
  },

  {
    id: 'perplexity', group: 'tool', emoji: '🔍', c1: '#FBE6BF', c2: '#F7D9A0',
    name: { ko: 'Perplexity', en: 'Perplexity' },
    sub: { ko: '출처 기반 리서치 · 지원사업·트렌드 조사', en: 'Sourced research · grants · trends' },
    tag: { ko: '근거와 날짜가 필요한 조사', en: 'Research that needs sources and dates' },
    when: {
      ko: '숫자와 근거가 필요한 조사, 그리고 오늘 기준으로 바뀌는 것 — 지원사업 공고, 요금제, 정책, 트렌드 — 을 찾을 때 씁니다. 답마다 출처 링크가 붙어서, "어디서 나온 말인지" 확인하며 읽을 수 있는 게 가장 큰 차이입니다.',
      en: 'For research that needs numbers and sources, and for things that change by the day: grant calls, pricing, policy, trends. Every claim arrives with a link, so you can read knowing where it came from.'
    },
    tips: [
      { ko: '질문에 기간과 지역을 꼭 넣으세요. "소상공인 지원사업"보다 "2026년 12월, 경기도 안성시 소상공인 지원사업"이 훨씬 정확합니다.', en: 'Always put a date and a place in the question. "Grants for small business" is far weaker than "grants for small businesses in Gyeonggi-do, December 2026".' },
      { ko: '"각 출처의 발행일을 함께 표시하고, 마감 지난 것은 빼 줘"를 붙이면 쓸모없는 결과가 크게 줄어듭니다.', en: 'Add "show each source\'s publication date and drop anything already closed" and most of the noise disappears.' },
      { ko: '답을 받으면 링크를 직접 열어 보세요. AI가 요약한 조건과 공고문의 실제 자격이 다른 경우가 흔합니다.', en: 'Open the links. The summarized criteria and the real notice often differ.' }
    ],
    prompts: [
      {
        t: { ko: '지원사업 찾기 (마감 제외)', en: 'Find grants, closed ones excluded' },
        b: {
          ko: '2026년 12월 현재, [경기도 안성시]에서 [소상공인]이 신청할 수 있는 지원사업을 찾아 줘.\n\n표 열: 사업명 / 신청 기간 / 지원 내용·금액 / 자격 / 공식 공고 링크 / 출처 발행일\n\n· 마감이 지난 것은 빼기\n· 블로그·카페 글 말고 공공기관·공식 공고만\n· 확인되지 않은 항목은 "확인 불가"로 표시\n· 마지막에 "내가 전화로 확인해야 할 질문 3개"',
          en: 'As of December 2026, find grants that [a small business] in [Anseong, Gyeonggi-do] can apply for.\n\nColumns: programme / application window / support and amount / eligibility / official notice link / source date\n\n· Drop anything already closed\n· Official sources only, not blog reposts\n· Mark unverified items "unconfirmed"\n· End with three questions I should ask by phone'
        }
      },
      {
        t: { ko: '트렌드 근거 찾기', en: 'Find evidence behind a trend' },
        b: {
          ko: '최근 3개월 동안 한국에서 [무인 카페] 관련 관심이 늘었는지, 근거 기사 5개로 확인해 줘.\n각 기사마다 ① 발행일 ② 매체 ③ 핵심 한 줄 ④ 이 기사가 실제로 보여 주는 숫자 ⑤ 링크\n\n서로 반대되는 내용이 있으면 그것도 같이 알려 주고, 근거가 약하면 "근거 약함"이라고 적어 줘.',
          en: 'Check whether interest in [unmanned cafes] in Korea has grown in the last three months, using five articles.\nFor each: (1) date (2) outlet (3) one-line claim (4) the actual number it reports (5) link\n\nInclude any contradicting coverage, and mark weak evidence as weak.'
        }
      },
      {
        t: { ko: '내 글 팩트체크', en: 'Fact-check my own draft' },
        b: {
          ko: '아래 글에서 확인이 필요한 주장을 모두 뽑아 표로 정리해 줘.\n열: 주장 / 근거 링크 / 근거가 뒷받침하는가(예·아니오·부분) / 고칠 문장 제안\n\n근거를 못 찾은 주장은 지우지 말고 "확인 불가"로 남겨 줘. 내 글이라도 틀린 건 틀렸다고 말해 줘.\n\n[글 붙여넣기]',
          en: 'Pull every claim in my draft that needs checking, as a table:\ncolumns: claim / supporting link / does the source support it (yes / no / partly) / suggested rewording\n\nLeave unsupported claims in place marked "unconfirmed". If it is wrong, say so plainly — even though I wrote it.\n\n[Paste draft]'
        }
      }
    ],
    notes: [
      { ko: '출처의 날짜와 원문을 꼭 대조하세요. 오래된 기사가 최신처럼 보일 수 있습니다.', en: 'Compare dates and originals; old articles can look current.' },
      { ko: '요약된 자격 조건과 실제 공고문이 다를 수 있습니다. 신청 전 원문을 읽으세요.', en: 'Summarized eligibility can differ from the notice. Read it before applying.' },
      { ko: '확인되지 않은 내용은 "확인 안 됨"으로 남겨 두고, 내 판단으로 확정하지 마세요.', en: 'Keep unverified items marked, and never promote them to fact on your own.' }
    ],
    preview: {
      books: ['agent10'],
      keys: [
        { ko: '코메트는 브라우저 안에서 대신 눌러 주는 일손입니다. 페이지를 읽고 끝나지 않고 버튼을 누르고 입력창을 채웁니다.', en: 'Comet is a hand inside your browser: it does not stop at reading, it clicks and fills.' },
        { ko: '돈이 나가거나 제출되는 순간에는 확인 창에서 반드시 멈춥니다. 처음엔 "확인 후 누르기" 모드로 쓰세요.', en: 'It stops at every payment or submission. Start with "click after confirming".' },
        { ko: '무거운 작업은 컴퓨터 크레딧을 씁니다. 큰 작업 전에는 예상 사용량을 확인합니다.', en: 'Heavy jobs burn credits. Check the estimate before a big job.' },
        { ko: '탭을 오가며 조건을 모아 비교표 하나로 정리하는 일에 강합니다.', en: 'Its strength is opening many tabs and bringing the conditions back as one comparison table.' }
      ],
      quotes: [
        { n: '6장 · 소상공인', t: { ko: '지원금 공고 찾기', en: 'Find grant calls' }, b: "[○○시]에서 지금 신청할 수 있는 소상공인 지원사업을 찾아 줘.\n• 조건: 업종 [베이커리], 사업자등록 [2025년 이전], 직원 [5인 미만]\n• 표로: 사업명 / 지원 내용 / 신청 기간 / 필요한 서류 / 링크\n• 마감이 7일 이내인 것부터 위에.\n• 실제 신청 페이지까지 열어서 신청 버튼이 살아 있는지 확인해 주고, 서류는 초안만 만들어 줘." },
        { n: '6장 · 1인 사업자', t: { ko: '장비 구매 비교', en: 'Compare a purchase' }, b: '[업소용 제빙기]를 사려고 해. 예산은 [80만원] 이하.\n• 국내 쇼핑몰 3곳에서 가격·배송비·AS 기간·재고를 비교표로\n• 후기에서 반복해서 나오는 불만 3가지 (각 사이트 20개 이상 읽고)\n• 결제는 하지 말고, 장바구니까지만 담아서 링크를 알려 줘.' },
        { n: '6장 · 직장인', t: { ko: '근거 있는 조사', en: 'Research with evidence' }, b: '[2027년 업무용 AI 도입]을 검토하는 보고서를 쓰려고 해.\n• 국내 사례 5건을 찾아서, 각 사례의 업종·도입 목적·효과·출처 링크를 표로\n• 실패 사례도 2건 포함\n• 각 주장에는 원문 링크를 붙이고, 출처가 없는 내용은 빼 줘.\n• 마지막에 "우리 회사에 적용할 때 주의점" 3줄.' }
      ]
    }
  },

  {
    id: 'image-ai', group: 'tool', emoji: '🎨', c1: '#FBD9E2', c2: '#F6C3D2',
    name: { ko: '이미지 AI', en: 'Image AI' },
    sub: { ko: 'Midjourney · 이미지 생성 — 구도·조명·실사 팁', en: 'Midjourney & co. — framing, light, realism' },
    tag: { ko: '사진을 찍을 시간이 없을 때', en: 'When there is no time to shoot' },
    when: {
      ko: '블로그·쇼츠 썸네일, 책 표지 배경, 안내문 삽화가 필요한데 사진을 찍을 시간이 없을 때 씁니다. 요즘 도구는 "예쁜 그림"보다 "내가 원하는 구도의 사진"을 만드는 쪽으로 좋아졌습니다. 구도·조명·렌즈를 말로 지정하는 것이 핵심입니다.',
      en: 'For blog and Shorts thumbnails, book cover backgrounds and notice illustrations when there is no time to shoot. Modern tools are better at producing the photograph you framed in your head than a pretty drawing — the trick is to specify framing, light and lens.'
    },
    tips: [
      { ko: '구도·조명·렌즈를 문장에 넣으세요. "35mm, soft window light, eye-level, shallow depth of field"만 붙여도 결과가 달라집니다.', en: 'Put framing, light and lens in the prompt: "35mm, soft window light, eye-level, shallow depth of field."' },
      { ko: '원하는 분위기의 사진을 참고 이미지로 주고 "이 느낌으로"라고 하세요. 말로 100번 설명하는 것보다 빠릅니다.', en: 'Give a reference photo and say "this mood". Faster than a hundred words.' },
      { ko: '사람 얼굴은 피하고 손·사물·배경 중심으로 만드세요. 단비랩 책 삽화도 같은 기준입니다. 얼굴이 들어가면 실존 인물과 닮아 문제가 생기기 쉽습니다.', en: 'Avoid faces; build around hands, objects and background — the same rule we use for book illustrations. Faces drift toward real people and cause trouble.' }
    ],
    prompts: [
      {
        t: { ko: '카페 분위기 (16:9)', en: 'Cafe mood, 16:9' },
        b: {
          ko: 'cozy small cafe interior in the Korean countryside, golden late-afternoon light through a window, warm wooden tables, ceramic cups, a few green plants, soft film photography, 35mm lens, shallow depth of field, calm and inviting, no people, no text --ar 16:9',
          en: 'cozy small cafe interior in the Korean countryside, golden late-afternoon light through a window, warm wooden tables, ceramic cups, a few green plants, soft film photography, 35mm lens, shallow depth of field, calm and inviting, no people, no text --ar 16:9'
        }
      },
      {
        t: { ko: '블로그 썸네일 (4:3)', en: 'Blog thumbnail, 4:3' },
        b: {
          ko: 'overhead flat lay of fresh seasonal vegetables and herbs on a linen cloth, small ceramic bowls, scattered soil, natural daylight, pastel and muted palette, editorial food photography, sharp focus, generous empty space at the top for a title, no text, no hands --ar 4:3',
          en: 'overhead flat lay of fresh seasonal vegetables and herbs on a linen cloth, small ceramic bowls, scattered soil, natural daylight, pastel and muted palette, editorial food photography, sharp focus, generous empty space at the top for a title, no text, no hands --ar 4:3'
        }
      },
      {
        t: { ko: '책 표지 배경 (3:4)', en: 'Book cover background, 3:4' },
        b: {
          ko: 'minimal pastel background for a book cover, soft gradient of cream and mint green, subtle paper texture, a single small botanical line drawing in one corner, lots of empty space in the upper half, gentle vignette, no text, no people --ar 3:4',
          en: 'minimal pastel background for a book cover, soft gradient of cream and mint green, subtle paper texture, a single small botanical line drawing in one corner, lots of empty space in the upper half, gentle vignette, no text, no people --ar 3:4'
        }
      },
      {
        t: { ko: '손 작업 장면 (얼굴 없이)', en: 'Working hands, no face' },
        b: {
          ko: 'close-up of a woman\'s hands repotting a small seedling, soil on the fingertips, worn gardening gloves beside her, natural morning light, realistic documentary photography, 50mm lens, shallow depth of field, no face visible --ar 4:5',
          en: 'close-up of a woman\'s hands repotting a small seedling, soil on the fingertips, worn gardening gloves beside her, natural morning light, realistic documentary photography, 50mm lens, shallow depth of field, no face visible --ar 4:5'
        }
      }
    ],
    notes: [
      { ko: '상표·로고·유명 캐릭터를 그려 달라고 하지 마세요. 상업적으로 쓰면 문제가 됩니다.', en: 'Never ask for trademarks, logos or famous characters. Commercial use becomes a legal problem.' },
      { ko: '무료 요금제 결과물은 상업적 이용이 제한될 수 있습니다. 요금제별 이용 조건을 확인하세요.', en: 'Free-plan output is often restricted for commercial use. Read the plan terms.' },
      { ko: '실존 인물·연예인을 닮게 만들지 말고, 아마존 KDP 등록 시 AI 생성 이미지 고지를 체크하세요.', en: 'Do not imitate real people, and declare AI-generated images when publishing on Amazon KDP.' },
      { ko: '이미지 안의 글자는 거의 항상 틀립니다. 글자는 나중에 직접 얹으세요.', en: 'Text inside generated images is almost always wrong. Add text yourself afterwards.' }
    ],
    preview: {
      books: ['adobe', 'stock'],
      keys: [
        { ko: 'AI 이미지는 "Created using generative AI tools" 표시가 필수입니다. 빠뜨리면 심사에서 거절됩니다.', en: 'AI images must carry the "Created using generative AI tools" tag, or review rejects them.' },
        { ko: '프롬프트·제목·키워드에 브랜드명, 실존 인물, 특정 작품·건물 이름을 넣지 않습니다. 대신 일반 명사로 설명합니다.', en: 'No brand names, real people, specific works or buildings in prompts, titles or keywords — describe with ordinary nouns.' },
        { ko: '같은 프롬프트에서 조금씩 바꾼 이미지를 수십 장 올리면 유사 콘텐츠로 거절됩니다. 한 장면당 2~3장까지만.', en: 'Dozens of near-identical images are rejected as similar content. Two or three per scene.' },
        { ko: '제목은 짧고 구체적으로, 키워드는 30~40개를 "중심어 → 상황어 → 사용 맥락" 세 층으로 나눠 답니다.', en: 'Titles short and concrete; 30–40 keywords layered as subject, situation, then use.' }
      ],
      quotes: [
        { n: '어도비 스톡 · 14장', t: { ko: '안전한 프롬프트', en: 'A safe prompt' }, b: 'two hands harvesting fresh lettuce in a home garden, soft morning light, shallow depth of field, no faces' },
        { n: '어도비 스톡 · 19장', t: { ko: '한국어로 먼저, 영어로 옮기기', en: 'Korean first, then English' }, b: '① 한국어로 한 문장: 텃밭에서 상추를 수확하는 두 손, 아침 햇빛\n② 영어 제목: Hands harvesting fresh lettuce in a kitchen garden\n③ 키워드: lettuce, harvest, garden, hands, organic, fresh, vegetable' },
        { n: '내 사진·그림 · 1장', t: { ko: '세 곳 모두 무료 가입', en: 'All three are free to join' }, b: 'Adobe Stock · Dreamstime · Vecteezy 세 곳 모두 무료로 가입할 수 있고, 월 사용료나 가입비는 없습니다. 작품이 팔린 만큼만 수익이 쌓입니다. 세 곳의 돈을 모아 받으려면 Payoneer를 먼저 만듭니다. 하루에 한 곳씩만 끝내도 두 주면 세 곳이 모두 열립니다.' }
      ]
    }
  },

  {
    id: 'video-ai', group: 'tool', emoji: '🎬', c1: '#D9E4F7', c2: '#C3D4F0',
    name: { ko: '영상 AI', en: 'Video AI' },
    sub: { ko: 'Kling · 영상 생성 — 카메라 무빙·컷 연결·쇼츠 팁', en: 'Kling & co. — camera moves, cuts, Shorts' },
    tag: { ko: '5초 컷 몇 개로 쇼츠 한 편', en: 'One Short from a few five-second clips' },
    when: {
      ko: '쇼츠·릴스에 쓸 5~10초 장면이 필요한데 촬영이 어려울 때 씁니다. 제품 클로즈업, 매장 분위기, 계절 장면, 손이 무언가를 하는 장면이 잘 나옵니다. 긴 이야기를 만들기보다 짧은 컷을 여러 개 만들어 이어 붙이는 방식이 현실적입니다.',
      en: 'For five-to-ten second shots in Shorts and Reels when filming is impractical: product close-ups, shop atmosphere, seasonal scenes, hands at work. Realistically you make several short clips and join them, rather than one long scene.'
    },
    tips: [
      { ko: '한 컷에 한 동작만 시키세요. "걷다가 웃으며 커피를 든다"는 대개 어색하게 나옵니다.', en: 'One action per clip. "Walks, smiles and lifts the cup" usually comes out wrong.' },
      { ko: '카메라 움직임을 문장으로 지정하세요. slow push in / pan right / static tripod — 이 한 마디가 흔들림을 줄입니다.', en: 'Name the camera move: slow push in, pan right, static tripod. It cuts the wobble.' },
      { ko: '여러 컷을 이어 붙일 때는 같은 조명·같은 시간대·같은 색감으로 만들고, 첫 프레임 이미지를 고정하면 컷이 붙어 보입니다.', en: 'For a sequence, keep light, time of day and color grade the same across clips; fixing the first frame helps them cut together.' }
    ],
    prompts: [
      {
        t: { ko: '카페 클로즈업 5초', en: 'Cafe close-up, 5s' },
        b: {
          ko: 'slow push in on a ceramic cup of latte on a wooden table, steam rising, soft morning light through a window, blurred cafe background, shallow depth of field, cinematic, calm mood, static start then very gentle dolly in, 5 seconds, realistic photography',
          en: 'slow push in on a ceramic cup of latte on a wooden table, steam rising, soft morning light through a window, blurred cafe background, shallow depth of field, cinematic, calm mood, static start then very gentle dolly in, 5 seconds, realistic photography'
        }
      },
      {
        t: { ko: '농장 수확 장면', en: 'Harvest in the orchard' },
        b: {
          ko: 'a hand reaching up and picking a ripe cherry from a tree in a Korean orchard, sun flare through green leaves, slight handheld camera movement, natural colors, 5 seconds, realistic, no face in frame',
          en: 'a hand reaching up and picking a ripe cherry from a tree in a Korean orchard, sun flare through green leaves, slight handheld camera movement, natural colors, 5 seconds, realistic, no face in frame'
        }
      },
      {
        t: { ko: '스터디카페 밤 분위기', en: 'Study cafe at night' },
        b: {
          ko: 'empty study cafe at night, rows of desks with warm small lamps, quiet and tidy, slow pan right along the desks, cool blue window light mixed with warm interior light, 6 seconds, no people, steady tripod shot',
          en: 'empty study cafe at night, rows of desks with warm small lamps, quiet and tidy, slow pan right along the desks, cool blue window light mixed with warm interior light, 6 seconds, no people, steady tripod shot'
        }
      },
      {
        t: { ko: '계절 전환 8초', en: 'Season change, 8s' },
        b: {
          ko: 'the same small farm field seen from the same spot, changing from spring blossom to summer green to autumn leaves, slow cross dissolve between seasons, soft pastel color grade, 8 seconds, static camera, no people',
          en: 'the same small farm field seen from the same spot, changing from spring blossom to summer green to autumn leaves, slow cross dissolve between seasons, soft pastel color grade, 8 seconds, static camera, no people'
        }
      }
    ],
    notes: [
      { ko: '실존 인물·연예인 얼굴을 만들지 마세요. 초상권 문제가 됩니다.', en: 'Do not generate real people or celebrities. Publicity rights apply.' },
      { ko: '배경 음악과 효과음의 저작권을 확인하세요. 생성 음악이라도 서비스 약관을 봐야 합니다.', en: 'Check music and sound-effect rights, including generated music, against the service terms.' },
      { ko: 'AI로 만든 영상은 플랫폼 정책에 따라 표시해야 합니다. 매장 실제 모습과 다르면 "연출"임을 밝히세요.', en: 'Platforms may require labeling AI video. If it is not your real shop, say it is staged.' }
    ],
    preview: {
      books: ['localmkt', 'farm200'],
      keys: [
        { ko: '30초는 3-20-7 — 멈추게 하는 3초, 보여 주는 20초, 행동을 남기는 7초입니다.', en: 'Thirty seconds is 3-20-7: three to stop the scroll, twenty to show, seven to leave an action.' },
        { ko: '첫 3초는 결과·움직임·숫자·질문·현장음 다섯 가지 중 하나로 시작합니다. "안녕하세요"로 시작하면 그 3초에 아무 일도 일어나지 않습니다.', en: 'Open on one of five: result, movement, number, question, or the sound of the place. A greeting wastes the three seconds.' },
        { ko: '마지막 7초에는 "구독과 좋아요" 대신 "언제까지, 어디서"를 넣습니다.', en: 'In the last seven seconds, put "until when, and where" instead of asking for likes.' },
        { ko: '한 영상에 한 가지만. 과정을 다 담으려다 5분이 되면 아무도 끝까지 보지 않습니다.', en: 'One thing per video. Try to show the whole process and nobody watches to the end.' }
      ],
      quotes: [
        { n: '농산물 200선 · 081', t: { ko: '15초 쇼츠 기본 구조', en: 'The 15-second structure' }, b: '너는 농산물 쇼츠를 만드는 영상 작가다.\n아래 상품으로 15초 쇼츠 대본을 써 줘.\n- 상품: [감자 10kg, 18,000원]\n- 보여 줄 것: [흙 묻은 감자, 삶은 감자, 으깨는 장면]\n(1) 0~3초 훅 (2) 3~10초 본문 (3) 10~15초 행동 유도로 나눠 써 줘.\n각 구간에 화면 설명과 자막을 따로 적고, 말은 15초에 40자 안으로.' },
        { n: '농산물 200선 · 082', t: { ko: '수확 현장 쇼츠', en: 'Harvest-day Short' }, b: '너는 농장 영상을 만드는 작가다.\n아래 수확 장면으로 20초 쇼츠 대본을 써 줘.\n- 작물: [사과]\n- 장면: [새벽 이슬, 나무에서 따는 손, 상자에 담기]\n- 전할 말: [오늘 딴 것을 오늘 보낸다]\n(1) 첫 장면 (2) 수확 (3) 선별 (4) 포장 (5) 마지막 한 줄로 나눠 써 줘.\n말보다 소리(잎, 바구니, 테이프)를 살리는 지시를 넣어 줘.' },
        { n: '광고비 0원 · 3장', t: { ko: '첫 3초에 쓸 수 있는 다섯 가지', en: 'Five ways to open in three seconds' }, b: '결과 먼저 — 완성된 것이 클로즈업 (소금빵을 반으로 가르는 장면)\n움직임 — 손이나 기계가 움직이는 컷 (우유가 부어지는 장면)\n숫자 — 큰 글씨 한 줄 ("서른 개, 세 시")\n질문 — 글씨 + 사물 ("이 빵, 왜 아침에만 있을까")\n현장음 — 조용한 화면 + 소리 (오븐 문 여는 소리, 얼음 담기는 소리)' }
      ]
    }
  },

  {
    id: 'music-ai', group: 'tool', emoji: '🎵', c1: '#FCEBC2', c2: '#F8DFA2',
    name: { ko: '음악 AI', en: 'Music AI' },
    sub: { ko: 'Suno 등 — 매장 BGM·유튜브 배경음', en: 'Suno & co. — shop BGM, video beds' },
    tag: { ko: '저작권 걱정 없는 배경음', en: 'Background music without the worry' },
    when: {
      ko: '매장 BGM, 유튜브 배경음, 쇼츠 삽입음이 필요한데 저작권 걱정 없이 쓰고 싶을 때 씁니다. 장르·악기·분위기·속도만 정하면 몇 분 만에 3분짜리 곡이 나옵니다. 매장에서는 가사 없는 잔잔한 곡이 대화를 방해하지 않아 특히 유용합니다.',
      en: 'For shop BGM, YouTube beds and Shorts audio without rights worries. Set genre, instruments, mood and tempo and a three-minute track arrives in minutes. For a shop, quiet instrumental music is what keeps conversation comfortable.'
    },
    tips: [
      { ko: '장르 + 악기 + 분위기 + BPM + 보컬 유무를 한 줄에 담으세요. 이 다섯 가지가 있으면 결과가 안정됩니다.', en: 'Put genre, instruments, mood, BPM and vocals in one line. Those five keep results stable.' },
      { ko: '매장 BGM에는 "no vocals"를 꼭 넣으세요. 가사가 있으면 손님 대화를 방해하고, 같은 곡이 반복되면 더 거슬립니다.', en: 'Always add "no vocals" for shop music. Lyrics fight with conversation, and loops wear thin.' },
      { ko: '2~3분짜리 3~4곡을 만들어 순환시키고, 곡마다 "no sudden changes, loopable"을 붙이세요.', en: 'Make three or four tracks of two to three minutes and rotate them, each marked "no sudden changes, loopable".' }
    ],
    prompts: [
      {
        t: { ko: '매장 BGM (카페)', en: 'Cafe BGM' },
        b: {
          ko: 'warm acoustic guitar and soft piano, gentle bossa nova feel, 78 BPM, instrumental, no vocals, cozy cafe background music, steady and unobtrusive, no sudden changes, loopable, 3 minutes',
          en: 'warm acoustic guitar and soft piano, gentle bossa nova feel, 78 BPM, instrumental, no vocals, cozy cafe background music, steady and unobtrusive, no sudden changes, loopable, 3 minutes'
        }
      },
      {
        t: { ko: '스터디카페용 (집중)', en: 'Study cafe focus music' },
        b: {
          ko: 'quiet lo-fi hip hop for a study cafe, soft vinyl crackle, mellow Rhodes piano, light brushed drums, 72 BPM, instrumental, no vocals, no drops, very steady dynamics, loopable, 3 minutes',
          en: 'quiet lo-fi hip hop for a study cafe, soft vinyl crackle, mellow Rhodes piano, light brushed drums, 72 BPM, instrumental, no vocals, no drops, very steady dynamics, loopable, 3 minutes'
        }
      },
      {
        t: { ko: '유튜브 농장 브이로그 배경', en: 'Farm vlog background' },
        b: {
          ko: 'bright spring farm vlog background music, ukulele, light strings and soft hand percussion, 100 BPM, instrumental, no vocals, cheerful but not busy, leaves room for a voice-over, 2 minutes 30 seconds',
          en: 'bright spring farm vlog background music, ukulele, light strings and soft hand percussion, 100 BPM, instrumental, no vocals, cheerful but not busy, leaves room for a voice-over, 2 minutes 30 seconds'
        }
      },
      {
        t: { ko: '치유농장 영상용', en: 'Healing farm video' },
        b: {
          ko: 'calm ambient music with a Korean gayageum phrase blended into soft pads, 60 BPM, instrumental, no vocals, meditative and spacious, gentle rise and fall, suited to a slow healing-farm video, 3 minutes',
          en: 'calm ambient music with a Korean gayageum phrase blended into soft pads, 60 BPM, instrumental, no vocals, meditative and spacious, gentle rise and fall, suited to a slow healing-farm video, 3 minutes'
        }
      }
    ],
    notes: [
      { ko: '매장에서 음악을 틀면 공연권 문제가 생길 수 있습니다. 생성 음악도 서비스 약관의 상업적 이용 범위를 확인하세요.', en: 'Playing music in a shop can involve performance rights. Even generated music needs its commercial-use terms checked.' },
      { ko: '실존 가수의 목소리를 흉내 내지 마세요. 초상·음성 권리 문제가 됩니다.', en: "Do not imitate a real singer's voice. Voice rights apply." },
      { ko: '유튜브에 올릴 때 Content ID 등록 여부와 수익화 정책을 확인하세요.', en: 'Before uploading to YouTube, check Content ID registration and monetization policy.' }
    ],
    preview: {
      books: ['ai1'],
      keys: [
        { ko: '이 책은 AI 비서가 잘하는 일만 적지 않고, 안 되는 일도 표로 남겼습니다. "집중용 음악을 틀어 달라"고 했더니 재생되지 않는 링크만 보낸 사례가 그중 하나입니다.', en: 'The book lists what AI assistants cannot do as carefully as what they can. Asked to "play focus music", one sent a link that would not play.' },
        { ko: '그래서 음악은 "틀어 달라"가 아니라 "골라 달라"까지만 맡깁니다. 실제 재생은 내가 누릅니다.', en: 'So music is a "choose this for me" job, not a "play it" job. You press play.' },
        { ko: '새 곡을 만들어야 한다면 그건 대화형 AI가 아니라 음악 생성 도구의 일입니다. 이 페이지 위쪽 프롬프트를 쓰세요.', en: 'If the track has to be new, that is a music generator\'s job, not a chatbot\'s. Use the prompts above.' }
      ],
      quotes: [
        { n: '1.5 · 되는 일과, 안 되는 일', t: { ko: '음악 재생은 아직 어설픕니다', en: 'Playback is still shaky' }, b: ' 솔직한 안내 — "집중용 음악을 틀어 달라"고 했더니 재생되지 않는 링크만 보낸 사례도 있습니다. 음악·영상 재생처럼 앱 안에서 직접 눌러야 하는 일은 아직 어설픕니다.' },
        { n: '사례 98', t: { ko: '시험 집중 음악', en: 'Focus music' }, b: '시험 공부할 때 틀어둘 배경음악 링크를 추천해줘. 재생되는지 확인하고.' }
      ]
    }
  },

  {
    id: 'automation', group: 'tool', emoji: '⚙️', c1: '#DFEFD8', c2: '#C8E4BC',
    name: { ko: '업무 자동화', en: 'Work automation' },
    sub: { ko: 'Apps Script · 노션 · 시트 반복 업무 줄이기', en: 'Apps Script · Notion · sheets' },
    tag: { ko: '매주 같은 일을 세 번 이상 한다면', en: 'If you do the same task three times' },
    when: {
      ko: '매주 같은 표를 만들고, 같은 문자를 보내고, 같은 확인을 반복할 때 씁니다. AI는 이제 코드를 짜 주는 수준을 넘어 "내 시트 구조를 보고 맞춤 스크립트"를 만들어 줍니다. 다만 한 번에 다 자동화하려 하면 반드시 망가지므로, 제일 귀찮은 한 단계부터 시작해야 합니다.',
      en: 'For the same table every week, the same messages, the same checks. AI now writes scripts against your actual sheet, not just generic code. The catch: automating everything at once always breaks — start with the single most annoying step.'
    },
    tips: [
      { ko: '자동화하기 전에 지금 손으로 하는 순서를 5단계로 적으세요. 그 순서가 곧 스크립트의 설계도입니다.', en: 'Write the manual steps down in five lines first. That list is the design.' },
      { ko: 'AI가 준 코드는 바로 실행하지 말고 복사본 시트에서 시험하세요. 되돌릴 수 없는 삭제·발송은 마지막에 붙입니다.', en: 'Test on a copy of the sheet, never the live one. Add irreversible deletes and sends last.' },
      { ko: '"오류가 나면 내 메일로 알려 줘"를 꼭 넣으세요. 자동화는 조용히 멈추는 것이 제일 위험합니다.', en: 'Always include "email me if it fails". Silent failure is the real danger.' }
    ],
    prompts: [
      {
        t: { ko: '시트 → 정리 → 알림 스크립트', en: 'Sheet to tidy to email' },
        b: {
          ko: '구글 시트에 "주문" 탭이 있어. 열은 A:접수일, B:이름, C:연락처, D:상품, E:금액, F:처리여부 야.\n\n아래 일을 하는 Apps Script를 짜 줘.\n① 오늘 날짜 주문만 "발송" 탭으로 옮기기 (이미 있으면 건너뛰기)\n② 옮긴 뒤 "주문" 탭 F열에 "발송완료" 표시\n③ 오류가 나면 나에게 메일로 알림\n④ 실행 전에 "오늘 3건을 옮깁니다. 계속할까요?" 확인창\n\n초보자가 읽을 수 있게 한국어 주석을 달고, 설치 방법을 3단계로 설명해 줘. 개인정보가 들어 있는 시트라는 점을 염두에 둬.',
          en: 'I have a Google Sheet tab called "Orders" with columns A date, B name, C contact, D product, E amount, F status.\n\nWrite an Apps Script that:\n(1) moves today\'s orders to a "Sent" tab, skipping ones already there\n(2) marks F as "sent" in the Orders tab\n(3) emails me if anything fails\n(4) asks "Move 3 rows for today. Continue?" before running\n\nAdd beginner-friendly comments and a three-step install guide. Keep in mind the sheet holds personal data.'
        }
      },
      {
        t: { ko: '노션 관리 표 설계', en: 'Design a Notion tracker' },
        b: {
          ko: '노션에 [임대 공간 관리] 데이터베이스를 만들 거야. 필요한 속성(열) 설계를 제안해 줘.\n\n· 계약 만기 90일·30일·7일 전에 알 수 있게\n· 월세 입금 여부 체크\n· 임차인 연락처와 메모\n· 각 속성의 형식(날짜·선택·수식)과, 수식이 필요하면 수식 예시까지\n· 초보자가 자주 틀리는 설정 3가지',
          en: 'I want a Notion database for [managing rental units]. Propose the properties.\n\n· Ability to see contracts 90, 30 and 7 days before expiry\n· Rent received, checked off\n· Tenant contact and notes\n· Each property\'s type (date, select, formula) and a formula example where needed\n· Three settings beginners usually get wrong'
        }
      },
      {
        t: { ko: '시트 수식 3가지 비교', en: 'Three ways to write the formula' },
        b: {
          ko: '아래 표에서 A열 이름 기준으로 중복 없이 B열 금액 합계를 구하려고 해.\n\n① QUERY 함수 ② SUMIF 함수 ③ 피벗 테이블\n각각의 수식(또는 만드는 순서)을 알려 주고, 어떤 상황에서 어느 쪽이 나은지 한 줄씩 설명해 줘. 내가 쓰는 시트는 구글 스프레드시트야.\n\n[표 구조 설명 또는 붙여넣기]',
          en: 'I need the sum of column B per unique name in column A.\n\nShow me (1) a QUERY formula (2) SUMIF (3) a pivot table, and one line on when each is the better choice. The sheet is Google Sheets.\n\n[Paste the table structure]'
        }
      }
    ],
    notes: [
      { ko: '개인정보가 담긴 시트에 외부 스크립트 권한을 주기 전에, 그 스크립트가 무엇을 읽는지 확인하세요.', en: 'Before granting a script access to a sheet with personal data, check what it reads.' },
      { ko: '자동 발송은 내 번호로 먼저 시험하고, 손님에게는 테스트 문구가 나가지 않게 하세요.', en: 'Test auto-sends to your own number; never let a test reach a customer.' },
      { ko: '자동화가 멈추면 일이 밀립니다. 마지막 실행일을 시트 한 칸에 남기면 알아채기 쉽습니다.', en: 'A stopped automation piles up work. Leave the last-run date in a cell so you notice.' }
    ],
    preview: {
      books: ['unmanned'],
      keys: [
        { ko: 'AI에게 맡길 일과 맡기지 않을 일을 다섯 단계로 그어 두었습니다 — 안내 문장, 접수 문장, 초안, 판단, 기록 중 판단은 사람 몫입니다.', en: 'The book draws the line in five stages — guidance, acknowledgement, drafts, judgment, records — and leaves judgment to the person.' },
        { ko: '절대 맡기지 않는 세 가지: 금액·보상의 약속, 개인정보가 들어간 문의, 손님을 평가하는 말.', en: 'Three things never delegated: any promise of money or compensation, enquiries containing personal data, and words that judge a customer.' },
        { ko: '프롬프트는 다섯 줄이면 됩니다 — 역할, 상황, 조건, 형식, 금지. 매번 쓰기 번거로우면 저장해 두고 상황만 바꿉니다.', en: 'Five lines make a prompt: role, situation, conditions, format, prohibitions. Save them and swap only the situation.' },
        { ko: '무서운 것은 AI가 틀리는 것이 아니라, 틀린 것을 확인하지 않고 보내는 일입니다.', en: 'The risk is not that AI is wrong; it is sending its wrong answer unchecked.' }
      ],
      quotes: [
        { n: '6장 · 응대 프롬프트', t: { ko: '다섯 줄 프롬프트', en: 'The five-line prompt' }, b: '너는 무인매장 사장을 돕는 응대 도우미다.\n상황: 손님이 음료가 안 나왔다고 화가 난 상태로 문자를 보냈다.\n조건: 세 문장 이내, 첫 문장은 사과, 마지막은 처리 기한.\n형식: 문자로 바로 보낼 수 있게, 인사말 없이 본문만.\n금지: 규정에 없는 환불·보상을 약속하지 말 것. 추측하지 말 것.' },
        { n: '5-4 · 첫 문의', t: { ko: '첫 문의 자동 답변', en: 'First-reply template' }, b: '안녕하세요, [매장명]입니다. 문의 주셔서 감사합니다.\n확인 후 10분 안에 답드리겠습니다. 급하신 경우 매장 입구의 호출 버튼을 눌러 주세요.' },
        { n: '5-4 · 점검 공지', t: { ko: '휴무·점검을 알릴 때', en: 'Closure or service notice' }, b: '[날짜] [시간]에 정기 점검이 있습니다.\n해당 시간에는 [영향 범위] 이용이 어렵습니다. 문의는 문자로 남겨 주시면 점검 후 순서대로 답드리겠습니다.' }
      ]
    }
  },

  /* ───────────────────────── 목적별 레시피 6종 ───────────────────────── */
  {
    id: 'blog-sns', group: 'recipe', emoji: '📝', c1: '#FFE3D3', c2: '#FFD0B8',
    name: { ko: '블로그 · SNS · 쇼츠 대본', en: 'Blog · social · Shorts scripts' },
    sub: { ko: '주제 → 초안 → 제목 → 45초 대본', en: 'Idea → draft → title → 45-second script' },
    tag: { ko: '매일 올려야 하는 사람의 순서', en: "A daily poster's order of work" },
    when: {
      ko: '매일 올려야 하는데 매번 빈 화면부터 시작할 때 씁니다. 주제 뽑기, 초안, 제목과 해시태그, 쇼츠 대본까지 한 줄로 이어집니다. 핵심은 AI에게 "내가 겪은 일"을 먼저 주는 것입니다. 경험을 주면 글이 살아나고, 주지 않으면 어디서나 본 듯한 글이 나옵니다.',
      en: 'When you must post daily and every day starts at a blank screen. Topic, draft, title, hashtags and a Shorts script follow in one line. The key is to hand over something you actually lived through — with it the writing lives, without it you get what everyone else posts.'
    },
    tips: [
      { ko: '사진 설명과 그날 손님의 말 한마디를 먼저 적어 주세요. 그게 글의 뼈대가 됩니다.', en: 'Write down the photo and one thing a customer said. That becomes the spine.' },
      { ko: '제목은 10개를 받아 직접 고르세요. AI가 고른 첫 제목은 대개 무난합니다.', en: 'Ask for ten titles and choose yourself. The first one is usually the safest and dullest.' },
      { ko: '"상투어 금지 목록"을 프롬프트에 넣으세요. "~에 대해 알아보겠습니다", "결론적으로" 같은 문장이 빠지면 글이 훨씬 사람 같아집니다.', en: 'Put a banned-phrase list in the prompt. Removing stock openings is most of what makes it sound human.' }
    ],
    prompts: [
      {
        t: { ko: '주제 30개 뽑기', en: 'Thirty topics' },
        b: {
          ko: '나는 [안성에서 무인카페와 스터디카페를 운영]하고, 주 고객은 [40~50대 여성]이야. 블로그에 올릴 주제 30개를 뽑아 줘.\n\n① 매장 운영 팁 ② 계절 음료·메뉴 ③ 손님이 자주 묻는 질문에서 나온 답 ④ 동네 이야기 — 네 갈래로 나눠서\n· 서로 겹치지 않게, 제목처럼 짧게\n· 각 주제 옆에 "이걸 쓰려면 어떤 사진이 필요한지" 한 줄\n· 내가 실제로 겪은 일이 아니면 쓸 수 없다는 걸 감안해서, 체험 없이도 쓸 수 있는 주제는 표시해 줘',
          en: 'I [run an unmanned cafe and a study cafe], mainly serving [women in their forties and fifties]. Give me thirty blog topics in four branches:\n(1) running the shop (2) seasonal drinks and menu (3) answers to the questions customers ask (4) the neighborhood\n· Short, title-like, no overlaps\n· One line beside each on what photo it needs\n· Mark the ones I can write without a personal experience'
        }
      },
      {
        t: { ko: '블로그 초안 (1,200자)', en: 'A 1,200-character draft' },
        b: {
          ko: '아래 메모로 블로그 글을 써 줘.\n\n· 사진: [사진 설명]\n· 그날 있었던 일: [손님이 한 말, 내가 고친 것, 실수한 것]\n· 독자: [동네 40~50대 여성]\n\n조건\n① 1,200자, 소제목 3개\n② 첫 문장은 인사말 없이 장면부터\n③ 금지: "~에 대해 알아보겠습니다", "결론적으로", "중요한 것은", "많은 분들이"\n④ 없는 사실은 만들지 말고 [확인 필요]로 표시\n⑤ 마지막 문단은 정보 요약이 아니라 내 생각 한 문장으로',
          en: 'Write a blog post from these notes.\n\n· Photo: [describe it]\n· What happened: [what a customer said, what I fixed, what I got wrong]\n· Reader: [women in their forties and fifties nearby]\n\nRules\n(1) 1,200 characters, three subheads\n(2) Open on the scene, no greeting\n(3) Ban stock phrases\n(4) Invent nothing; mark gaps [needs checking]\n(5) End on one line of my own thought, not a summary'
        }
      },
      {
        t: { ko: '제목 10개 + 해시태그 20개', en: 'Ten titles and twenty tags' },
        b: {
          ko: '아래 글의 제목 후보 10개를 만들어 줘.\n· 검색형 5개(사람들이 실제로 검색할 말) / 호기심형 5개\n· 각 제목이 왜 클릭되는지 한 줄\n· 20자 안팎으로\n\n그리고 해시태그 20개를 ① 동네·상권 ② 업종 ③ 주제 ④ 넓은 유입용으로 나눠서. 너무 흔한 태그는 빼 줘.\n\n[글 요약 붙여넣기]',
          en: 'Give me ten title candidates for the post below.\n· Five search-style (what people actually type) / five curiosity-style\n· One line on why each would be clicked\n· Around 20 characters\n\nThen twenty hashtags split into (1) neighborhood (2) trade (3) topic (4) broad reach. Drop the overused ones.\n\n[Paste a summary]'
        }
      },
      {
        t: { ko: '45초 쇼츠 대본', en: 'A 45-second Shorts script' },
        b: {
          ko: '이 글을 45초 쇼츠 대본으로 바꿔 줘.\n\n· 0~3초 훅 (말로 하는 한 문장)\n· 장면 3개: 각 장면의 화면 설명, 자막(15자 이내), 촬영 컷\n· 마지막 3초: 저장·팔로우를 부담 없이 유도하는 한 줄\n· 표로 정리 (시간 / 화면 / 자막 / 촬영 팁)\n· 휴대폰 하나로 찍을 수 있는 범위에서\n\n[글 붙여넣기]',
          en: 'Turn this post into a 45-second Shorts script.\n\n· 0–3s hook, one spoken line\n· Three scenes: what is on screen, caption under 15 characters, the shot\n· Last 3s: one light nudge to save or follow\n· As a table: time / screen / caption / shooting tip\n· Only what one phone can shoot\n\n[Paste the post]'
        }
      }
    ],
    notes: [
      { ko: '손님 얼굴·연락처·차량번호가 사진에 찍히지 않게 하세요.', en: "Keep customers' faces, numbers and plates out of photos." },
      { ko: '매장에 없는 시설·서비스를 글에 넣지 마세요. 나중에 민원이 됩니다.', en: 'Never write about facilities or services you do not have. It comes back as a complaint.' },
      { ko: '대가를 받고 쓴 글은 표시하고, 타사 사진은 무단으로 쓰지 마세요.', en: "Disclose paid posts, and never use other people's photos without permission." }
    ],
    preview: {
      books: ['localmkt', 'farm200'],
      keys: [
        { ko: 'AI에게 글을 부탁하기 전에 "가게 정보 카드" 열 칸을 먼저 붙입니다 — 이름·위치, 하는 일, 손님, 가격대, 영업시간, 자랑거리, 약속, 금지, 말투, 오늘의 재료.', en: 'Before asking for text, paste a ten-line shop card: name, work, customer, price range, hours, what you are proud of, promises, prohibitions, tone, today\'s facts.' },
        { ko: '프롬프트는 세 줄 — 역할, 재료, 금지. 재료에 없는 것은 쓰지 말라고 못 박는 것이 핵심입니다.', en: 'Three lines: role, material, prohibitions. Pinning "do not use what is not in the material" is the whole trick.' },
        { ko: '초안을 고칠 때 쓰는 세 마디 — "더 짧게", "숫자를 넣어서", "사장이 말하듯이".', en: 'Three corrections do most of the work: "shorter", "put a number in", "sound like the owner".' },
        { ko: 'AI가 지어내기 쉬운 다섯: 영업시간·가격·재료와 원산지·효능 표현·주차나 예약 여부. 초안을 받으면 이 다섯 줄부터 확인합니다.', en: 'Five things AI invents: hours, prices, ingredients and origin, health claims, parking or booking. Check those five first.' }
      ],
      quotes: [
        { n: '광고비 0원 · 4장', t: { ko: '동네 앱 소식 초안', en: 'A neighborhood-app post' }, b: '너는 동네 빵집을 운영하는 사장이다. 아래 재료만 써서 동네 앱에 올릴 소식을 써 줘.\n· 재료: [가게 이름], [동네], 오늘 [메뉴] [수량]개, [시간]에 나옴, [가격]\n· 형식: 첫 문장에 시간과 수량. 3문장 이내. 마지막에 영업시간 한 줄.\n· 금지: 최고·완벽·특별한·감동 같은 말, 이모지, 없는 효능, 옆 가게 비교.\n· 말투: 짧고 담백하게, 사장 1인칭.' },
        { n: '광고비 0원 · 4장', t: { ko: '블로그 첫 단 초안', en: 'The first paragraph of a blog post' }, b: '너는 동네 가게 사장이다. 아래 검색어로 들어온 손님이 첫 세 줄만 읽고도 답을 얻도록 써 줘.\n· 검색어: [지역] [대상] [상황] (예: 한들동 아이랑 기다릴 곳)\n· 재료: [좌석 수], [아이 의자 유무], [주차], [영업시간], [대표 메뉴]\n· 형식: 첫 문장에 결론. 3~5줄. 과장 없이 사실만.\n· 금지: "많이 사랑받는", "숨은 명소", "인생 샷" 같은 상투어.' },
        { n: '농산물 200선 · 081', t: { ko: '15초 쇼츠 기본 구조', en: 'The 15-second structure' }, b: '너는 농산물 쇼츠를 만드는 영상 작가다.\n아래 상품으로 15초 쇼츠 대본을 써 줘.\n- 상품: [감자 10kg, 18,000원]\n- 보여 줄 것: [흙 묻은 감자, 삶은 감자, 으깨는 장면]\n(1) 0~3초 훅 (2) 3~10초 본문 (3) 10~15초 행동 유도로 나눠 써 줘.\n각 구간에 화면 설명과 자막을 따로 적고, 말은 15초에 40자 안으로.' }
      ]
    }
  },

  {
    id: 'small-shop', group: 'recipe', emoji: '🏬', c1: '#D3EDEA', c2: '#BCE2DE',
    name: { ko: '소상공인 · 무인매장 · 카페 운영', en: 'Small shop · unmanned store · cafe' },
    sub: { ko: '안내문 · FAQ · 민원 답변 · 직원 교육', en: 'Notices, FAQ, complaints, staff training' },
    tag: { ko: '매장에서 매일 쓰는 글', en: 'The writing a shop does every day' },
    when: {
      ko: '안내문, 가격표, 손님 응대 문구, 아르바이트생 교육 자료, 민원 답변까지 — 매장에서 매일 쓰는 글을 빠르게 만듭니다. 무인매장은 사람이 없어서 안내문이 곧 직원입니다. 문장 하나가 손님의 다음 행동을 정합니다.',
      en: 'Notices, price cards, replies, staff training, complaint answers — the everyday writing of a shop. An unmanned store has no staff on the floor, so the notice on the wall is the staff: one sentence decides what the customer does next.'
    },
    tips: [
      { ko: '우리 매장 규칙(운영시간·환불·주차·반려동물)을 먼저 붙여 주세요. 규칙을 모르는 AI는 일반론만 씁니다.', en: 'Give your shop rules first — hours, refunds, parking, pets. An AI without them writes generalities.' },
      { ko: '"친절한 버전"과 "단호한 버전" 두 개를 받아 상황에 골라 쓰세요. 무인매장은 특히 단호한 문장이 필요합니다.', en: 'Ask for a kind version and a firm version, and choose per situation. Unmanned stores need firm more often.' },
      { ko: '손님이 자주 묻는 질문 20개를 미리 만들어 두면, 답장 쓰는 시간이 절반으로 줄어듭니다.', en: 'Prepare twenty FAQs once and every reply takes half the time.' }
    ],
    prompts: [
      {
        t: { ko: '임시 휴무 안내문', en: 'Temporary closure notice' },
        b: {
          ko: '무인카페 운영자로서 임시 휴무 안내문을 써 줘.\n\n· 상황: [12월 3일 화요일 오전, 커피머신 점검]\n· 원인 설명은 짧게, 사과는 한 번만, 재방문 혜택은 과하지 않게\n· 형식: ① 문에 붙일 A4용 200자 ② 카카오톡 채널용 80자 ③ 인스타그램 스토리용 30자\n· 금지: "최선을 다하겠습니다" 같은 상투어, 책임 회피하는 표현\n\n세 버전을 따로 보여 주고, 어느 버전을 어디에 쓰면 좋은지 한 줄씩.',
          en: 'As the owner of an unmanned cafe, write a temporary closure notice.\n\n· Situation: [Tuesday Dec 3, morning, coffee machine service]\n· Short reason, one apology, no over-promising\n· Format: (1) 200 characters for the door (2) 80 for KakaoTalk (3) 30 for an Instagram story\n· Avoid: stock phrases and anything that dodges responsibility\n\nShow all three and say in one line where each belongs.'
        }
      },
      {
        t: { ko: '손님 FAQ 20개', en: 'Twenty customer FAQs' },
        b: {
          ko: '[무인카페·스터디카페] 손님이 자주 묻는 질문 20개와 답변을 만들어 줘.\n\n· 답변은 3문장 이내, 존댓말\n· 확실하지 않은 것은 "확인 후 안내드리겠습니다"로\n· 실제로 물어볼 만한 것만 (이용 시간, 결제, 환불, 주차, 소음, 단체, 반려동물, 분실물)\n· 표로: 질문 / 답변 / 직원이 추가로 확인할 것',
          en: 'Write twenty FAQs and answers for [an unmanned cafe and study cafe].\n\n· Answers under three sentences, polite\n· Anything uncertain: "we will confirm and get back to you"\n· Only questions people actually ask: hours, payment, refunds, parking, noise, groups, pets, lost items\n· Table: question / answer / what staff should double-check'
        }
      },
      {
        t: { ko: '항의에 답하는 문자', en: 'Answering a complaint' },
        b: {
          ko: '아래 손님 항의에 답할 문자를 써 줘.\n\n① 사실 확인 ② 사과 ③ 재발 방지 약속 순서로\n· 5문장 이내, 존댓말\n· 변명·감정적 표현 없이\n· 금전 보상은 약속하지 말고 "확인 후 안내"로\n· 손님이 원하는 게 무엇인지 내가 먼저 짚어 주는 문장 하나\n\n[항의 내용 붙여넣기]',
          en: 'Write a text reply to the complaint below.\n\n(1) acknowledge the facts (2) apologize (3) say what prevents a repeat\n· Under five sentences, polite\n· No excuses, no emotion\n· Promise no compensation; say it will be reviewed\n· Include one sentence naming what the customer actually wants\n\n[Paste the complaint]'
        }
      },
      {
        t: { ko: '신규 알바 첫 주 체크리스트', en: 'A first-week checklist for new staff' },
        b: {
          ko: '무인카페에 새로 온 아르바이트생이 첫 주에 알아야 할 것을 체크리스트로 만들어 줘.\n\n· 개점 / 마감 / 기계 / 클레임 / 비상연락 다섯 영역\n· 각 항목은 "무엇을, 언제, 어떻게 확인하는지" 한 줄\n· 헷갈리기 쉬운 것에는 ⚠️ 표시\n· 마지막에 첫날 30분 교육 순서(1~6단계)\n· 표로 정리하고, 인쇄해서 붙일 수 있게 간결하게',
          en: 'Make a first-week checklist for new part-time staff at an unmanned cafe.\n\n· Five areas: opening, closing, machines, complaints, emergency contacts\n· Each item: what, when, how to check — one line\n· Mark easy mistakes with ⚠️\n· End with a 30-minute first-day training order, steps 1–6\n· A table, short enough to print and pin up'
        }
      }
    ],
    notes: [
      { ko: '손님 정보·CCTV 화면·통화 녹음을 AI에 올리지 마세요.', en: 'Never upload customer data, CCTV stills or call recordings.' },
      { ko: '가격·환불·영업시간은 실제 약관과 같아야 합니다. 다르면 분쟁이 됩니다.', en: 'Prices, refunds and hours must match your actual policy. Differences become disputes.' },
      { ko: '식품·위생·효능 관련 표현은 과장하지 마세요. 표시광고 규정에 걸립니다.', en: 'Do not exaggerate food, hygiene or health claims; labeling rules apply.' }
    ],
    preview: {
      books: ['unmanned'],
      keys: [
        { ko: '답이 늦으면 답이 아닙니다. 매장 안에서 막힌 손님은 1분, 결제·환불은 10분, 예약은 30분을 기다립니다. 불만은 즉시 접수 신호만 있어도 절반이 진정됩니다.', en: 'A late answer is not an answer: one minute inside the shop, ten for payment, thirty for bookings. A complaint half-cools when it is acknowledged at once.' },
        { ko: '응대는 세 문장 — 첫 문장은 사과, 두 번째는 사실만, 세 번째는 시간 약속("언제까지 무엇을").', en: 'Three sentences: apology first, facts second, a time promise third.' },
        { ko: '손님이 실제로 묻는 열두 가지가 전체 문의의 90퍼센트였습니다. 화장실·와이파이·얼음·이용시간·환불·주차·영업시간·단체·분실물·고장·결제오류·청소.', en: 'Twelve questions were 90 percent of all enquiries: restroom, wifi, ice, hours, refunds, parking, opening hours, groups, lost items, breakdowns, payment errors, cleanliness.' },
        { ko: '네 창구(톡톡·카카오·문자·리뷰)의 역할을 나누고, 답은 한 곳에 모아 둡니다. 채널을 줄이는 것도 자동화입니다.', en: 'Split the four channels — chat, KakaoTalk, text, reviews — and keep one set of answers. Closing a channel is automation too.' }
      ],
      quotes: [
        { n: '5-4 · 첫 문의', t: { ko: '첫 문의 자동 답변', en: 'First-reply template' }, b: '안녕하세요, [매장명]입니다. 문의 주셔서 감사합니다.\n확인 후 10분 안에 답드리겠습니다. 급하신 경우 매장 입구의 호출 버튼을 눌러 주세요.' },
        { n: '5-4 · 환불 규정', t: { ko: '환불을 물을 때', en: 'When a refund is asked about' }, b: "이용 전에는 전액 환불, 이용 후에는 남은 시간 기준으로 환불됩니다.\n다만 할인 이용권과 이벤트권은 환불이 제한될 수 있습니다. 자세한 기준은 결제 화면의 '이용 규정'에서 확인하실 수 있습니다.\n예외 사유가 있으시면 상황을 알려 주세요. 제가 직접 확인하겠습니다." },
        { n: '5-4 · 만석일 때', t: { ko: '자리가 없을 때', en: 'When the seats are full' }, b: '지금은 만석입니다. 기다리시게 해서 죄송합니다.\n30분 뒤 자리가 나는 대로 문자로 알려 드릴까요? 가까운 [대체 지점]도 이용 가능합니다.' },
        { n: '5-4 · 분실물', t: { ko: '분실물 문의', en: 'Lost property' }, b: '분실물은 [보관 장소]에 7일간 보관합니다.\n물건의 특징과 대략적인 시간을 알려 주시면 확인해 드리겠습니다. 7일이 지나면 폐기 또는 기부 처리됩니다.' }
      ]
    }
  },

  {
    id: 'realtor', group: 'recipe', emoji: '🏡', c1: '#E4E1F5', c2: '#D2CDEE',
    name: { ko: '부동산 · 공인중개사 실무', en: 'Real estate practice' },
    sub: { ko: '매물 설명 · 계약 전 확인 · 상담 문자', en: 'Listings, pre-contract checks, replies' },
    tag: { ko: '법은 원문, 글은 AI', en: 'Law from the source, writing from AI' },
    when: {
      ko: '매물 설명, 임대차 안내, 계약 전 확인 목록, 고객 상담 문자를 정리할 때 씁니다. 글을 다듬는 일은 AI가 잘하지만, 법 조항과 권리관계 판단은 반드시 원문과 전문가 확인이 필요합니다. AI에게는 "확인할 항목 목록"을 만들게 하고, 판단은 내가 합니다.',
      en: 'For listing copy, lease guidance, pre-contract checklists and customer replies. AI is good at the writing; law and rights analysis must come from the source and a professional. Have AI build the checklist, and make the call yourself.'
    },
    tips: [
      { ko: '매물 정보를 표로 정리해 주고 "과장 없이, 확인된 정보만"을 조건으로 붙이세요.', en: 'Give the facts as a table and require "no exaggeration, confirmed facts only".' },
      { ko: '계약 관련은 결론이 아니라 "확인해야 할 항목"으로 받으세요. AI가 법적 판단을 대신하면 위험합니다.', en: 'Ask for items to check, not conclusions. An AI standing in for legal judgment is a risk.' },
      { ko: '상담 기록 요약은 이름·연락처를 지우고 "A고객"처럼 바꿔서 넣으세요.', en: 'Summarize consultations with names and numbers replaced by "Customer A".' }
    ],
    prompts: [
      {
        t: { ko: '매물 설명 3종', en: 'Listing copy, three lengths' },
        b: {
          ko: '아래 매물 정보로 설명을 3개 써 줘.\n\n· 정보: [위치, 면적, 층, 월세/보증금, 주차, 입주 가능일, 특징]\n① 30자 요약(문자 첫 줄)\n② 200자 상세(블로그·플랫폼)\n③ 임차인 관점의 장점 3 / 단점 2 (단점은 숨기지 말고 사실만)\n\n· 금지: "최고", "완벽", "무조건" 같은 단정 표현\n· 확인되지 않은 정보는 빼기',
          en: 'Write three descriptions from the details below.\n\n· Details: [location, size, floor, rent/deposit, parking, move-in date, features]\n(1) 30-character summary (2) 200-character detail for listings (3) three pros and two cons from a tenant\'s view — cons told honestly\n\n· No "best", "perfect", "must"\n· Drop anything unconfirmed'
        }
      },
      {
        t: { ko: '상가 계약 전 체크리스트', en: 'Pre-contract checklist for a commercial lease' },
        b: {
          ko: '상가 임대차 계약 전에 임차인이 확인해야 할 항목 15개를 체크리스트로 만들어 줘.\n\n· 등기부등본, 건축물대장, 권리관계, 원상복구, 관리비, 갱신·해지 조건 포함\n· 각 항목마다 "어디서 확인하는지" 한 줄 (예: 인터넷등기소, 정부24)\n· 놓치면 생기는 일을 한 줄로\n· 마지막에 "이건 전문가에게 물어야 하는 항목" 3개 표시\n\n법률 자문이 아니라 확인 목록이라는 점을 전제로 써 줘.',
          en: 'Make a 15-item checklist for a tenant before signing a commercial lease.\n\n· Include the register, building ledger, rights, restoration, maintenance fees, renewal and termination\n· One line per item on where to check it\n· One line on what goes wrong if missed\n· Mark three items that need a professional\n\nFrame it as a checklist, not legal advice.'
        }
      },
      {
        t: { ko: '상담 후 문자', en: 'A follow-up text after a viewing' },
        b: {
          ko: '아래 상담 메모로 고객에게 보낼 문자를 써 줘.\n\n· 3문장, 존댓말\n· ① 오늘 확인한 내용 한 줄 ② 다음에 확인할 것 한 줄 ③ 방문 시간을 묻는 질문\n· 압박하는 표현("서두르세요") 금지\n· 개인정보는 넣지 않기\n\n[상담 메모 붙여넣기]',
          en: 'Write a text to the customer from the notes below.\n\n· Three sentences, polite\n(1) one line on what we confirmed today (2) one line on what comes next (3) a question about a time to meet\n· No pressure ("act fast")\n· No personal data\n\n[Paste notes]'
        }
      }
    ],
    notes: [
      { ko: 'AI의 법 해석은 참고만 하세요. 주택임대차보호법·상가건물임대차보호법 원문과 전문가 확인이 먼저입니다.', en: 'Treat AI legal reading as reference only. Read the housing and commercial lease acts, and ask a professional.' },
      { ko: '임차인 연락처·주민번호·계좌는 절대 입력하지 마세요.', en: "Never enter tenants' contacts, ID numbers or accounts." },
      { ko: '매물 사진은 촬영·사용 권한이 있는 것만 쓰세요.', en: 'Use only photos you have the right to take and publish.' }
    ],
    preview: {
      books: ['realtor', 'realtor200'],
      keys: [
        { ko: '책은 프롬프트 끝에 붙이는 한 문장을 먼저 가르칩니다 — "제공된 정보와 확인되지 않은 정보를 구분하고, 누락된 정보는 임의로 채우지 마세요. 법률·제도는 공식 출처를 확인하고 기준일과 출처를 표시하세요."', en: 'The book starts with one sentence to append to every prompt: separate what is given from what is not, never fill gaps, and cite the official source for anything legal.' },
        { ko: '매물 한 건을 12개 항목으로 표준화하고, 누락·불일치·추가 확인을 나눠 점검합니다.', en: 'Standardise a listing into twelve fields, then sort the gaps into missing, conflicting and needs-checking.' },
        { ko: '현장 체크리스트는 "확인·미확인·해당 없음" 세 칸으로 기록합니다. 현장에서 보지 않은 것을 확인 완료로 표시하지 않습니다.', en: 'On-site checks are recorded as confirmed, unconfirmed, or not applicable — never mark unseen items as confirmed.' },
        { ko: '200선 워크북은 대괄호를 비워 두면 AI가 그럴듯한 값을 지어낸다고 못 박습니다. 모르는 값은 "미확인"이라고 적어 넣습니다.', en: 'The 200-prompt workbook is blunt: leave a bracket empty and AI invents a plausible value. Write "unconfirmed" instead.' }
      ],
      quotes: [
        { n: '공인중개사 AI 바이블 · 프롬프트 38', t: { ko: '신규 매물 등록 정보 정리', en: 'Standardise a new listing' }, b: '당신은 공인중개사무소의 매물 관리 전문가입니다. 아래 매물 정보를 분석해 매물관리 시스템에 등록할 수 있도록 정리하세요.\n매물 정보: 여기에 확인된 정보를 입력합니다. 다음 항목으로 정리하세요.\n1. 매물명 / 2. 주소 / 3. 매물 종류 / 4. 거래 유형 / 5. 가격 / 6. 면적 / 7. 층수 / 8. 방향 / 9. 주차 여부 / 10. 관리비 / 11. 주요 특징 / 12. 확인이 필요한 사항\n제공되지 않은 정보는 추측하지 말고 "미확인"으로 표시하세요.' },
        { n: '공인중개사 AI 바이블 · 프롬프트 39', t: { ko: '매물 정보 누락 점검', en: 'Find what is missing' }, b: '당신은 부동산 매물 정보 검수 담당자입니다. 제공한 매물 정보를 확인하고 누락되거나 서로 일치하지 않는 항목을 찾아주세요.\n확인 항목: 주소 / 면적 / 층수 / 거래 유형 / 가격 / 관리비 / 방향 / 주차 / 건축물 관련 정보 / 현재 거래 가능 여부\n결과를 다음과 같이 구분하세요. 1. 확인 완료 / 2. 추가 확인 필요 / 3. 서로 불일치하는 정보 / 4. 고객에게 안내하기 전 확인할 사항\n정보를 임의로 수정하지 마세요.' },
        { n: '프롬프트 200선 · NO.001', t: { ko: '매물 소개글 한 편 완성', en: 'A complete listing piece' }, b: '당신은 10년 차 공인중개사무소의 홍보 담당자입니다. 아래 매물로 소개글을 써 주세요.\n[매물 정보]\n- 종류·거래: [아파트/전세] / - 소재지: [000동] / - 가격: [전세 2억 3,000만 원]\n- 면적·층: [84㎡, 9층/15층] / - 방·욕실: [3방 2욕실] / - 주차·교통: [세대당 1대, 시내버스 도보 3분]\n- 확인된 특징: [남향, 5년 차, 즉시 입주]\n조건\n1. 확인된 특징에 없는 내용은 쓰지 말고, 필요한데 없는 항목은 "미확인"으로 표시하세요.\n2. 첫 두 줄에 가장 센 장점을 배치하세요.\n3. 제목 3개(검색용·감성용·질문형), 본문 400자, 문자용 80자로 나눠 주세요.\n4. 과장·최상급 표현은 쓰지 마세요.\n5. 공인중개사법 제18조의2에 따른 명시사항(사무소 명칭·소재지·연락처·등록번호·성명)을 글 끝에 넣고 빠진 항목을 점검해 주세요.' }
      ]
    }
  },

  {
    id: 'farm', group: 'recipe', emoji: '🌾', c1: '#F3EBC8', c2: '#E9DEA9',
    name: { ko: '농산물 판매 · 체험농장', en: 'Farm produce · pick-your-own' },
    sub: { ko: '제철 안내 · 체험 프로그램 · 12개월 달력', en: 'Seasonal notes, programmes, a 12-month plan' },
    tag: { ko: '농사 지으면서 글 쓸 시간이 없을 때', en: 'When there is no time to write between rows' },
    when: {
      ko: '제철 안내, 체험 프로그램 소개, 판매 문구, 손님 안내문을 만들 때 씁니다. 작물과 시기, 지역을 구체적으로 줄수록 결과가 좋아집니다. 체험농장은 "무엇을 하는지"보다 "무엇을 준비하고 몇 분 걸리는지"를 먼저 알려 줘야 예약이 잡힙니다.',
      en: 'For seasonal notices, programme descriptions, sales copy and visitor guidance. The more specific the crop, month and place, the better the output. For pick-your-own, bookings come when you say what to bring and how long it takes before you describe how lovely it is.'
    },
    tips: [
      { ko: '작물·시기·지역을 구체적으로: "안성, 6월, 체리"처럼 세 단어가 품질을 바꿉니다.', en: 'Crop, month, place — "Anseong, June, cherries" — three words that change quality.' },
      { ko: '체험 프로그램은 준비물·소요시간·연령·비 오는 날 대안까지 넣으세요. 이 네 가지가 예약 문의를 줄입니다.', en: 'Include what to bring, duration, ages and the rainy-day alternative. Those four cut the questions.' },
      { ko: '농산물에 효능·치료 표현은 쓰지 마세요. 맛과 재배 방식, 보관법으로 승부합니다.', en: 'No health or cure claims. Win on taste, how it was grown, and how to store it.' }
    ],
    prompts: [
      {
        t: { ko: '제철 판매 안내문', en: 'Seasonal produce notice' },
        b: {
          ko: '나는 [안성]에서 [6월]에 [체리]를 팔아. 블로그와 문자에 쓸 안내문을 써 줘.\n\n· 수확 시기와 맛, 보관법, 주문 방법(픽업·택배), 가격대\n· 300자 이내, 두 문단\n· 효능·건강 표현 금지\n· "올해는 비가 적어 알이 단단하다"처럼 실제로 겪은 사실을 한 줄 넣을 자리를 [ ]로 표시해 줘',
          en: 'I sell [cherries] in [June] in [Anseong]. Write a notice for the blog and for text messages.\n\n· Harvest window, taste, storage, how to order (pickup or delivery), price range\n· Under 200 words, two paragraphs\n· No health claims\n· Leave a [ ] where I should add one true detail from this year, such as the weather'
        }
      },
      {
        t: { ko: '체험 프로그램 소개', en: 'Describe a picking programme' },
        b: {
          ko: '1시간짜리 체리 체험 프로그램 소개 글을 써 줘.\n\n· 대상: [가족·어린이 동반]\n· 표로: 시간 / 진행 내용 / 준비물 / 안전 안내\n· 4단계 진행(입장·설명 → 수확 → 시식 → 포장)\n· 비 오는 날 대안\n· 예약 방법과 취소 규정\n· 마지막에 "처음 오는 분이 가장 많이 묻는 질문 3개"',
          en: 'Write a description of a one-hour cherry picking session.\n\n· For: [families with children]\n· Table: time / activity / what to bring / safety note\n· Four steps: welcome and briefing, picking, tasting, packing\n· Rainy-day alternative\n· Booking and cancellation\n· End with the three questions first-timers ask most'
        }
      },
      {
        t: { ko: '12개월 운영 달력', en: 'A 12-month operating calendar' },
        b: {
          ko: '안성 체험농장의 12개월 운영 달력을 만들어 줘.\n\n· 표 열: 월 / 그 달의 작물 / 체험 주제 / 준비할 일 / 비수기 대안\n· 24절기와 명절을 참고\n· 6월 체리 수확을 중심으로 앞뒤 달을 연결\n· 겨울처럼 손님이 적은 달은 "체험 없이 파는 것" 아이디어\n· 각 달에 실제로 확인해야 할 것 한 줄',
          en: 'Build a 12-month calendar for a pick-your-own farm in Anseong.\n\n· Columns: month / crop / programme theme / what to prepare / low-season alternative\n· Reference the 24 solar terms and holidays\n· Center it on the June cherry harvest and connect the months around it\n· For quiet months, ideas that sell without visitors\n· One line per month on what to verify'
        }
      }
    ],
    notes: [
      { ko: '농약·안전성·유기농 주장은 인증 없이 쓸 수 없습니다. 표시광고법을 확인하세요.', en: 'Pesticide, safety and organic claims need certification. Check labeling law.' },
      { ko: '체험 안전 안내와 보험 여부를 프로그램 소개에 함께 적으세요.', en: 'State safety guidance and insurance in the programme description.' },
      { ko: '체험 사진에 손님 얼굴이 나오면 동의를 받으세요.', en: "Get consent for photos showing visitors' faces." }
    ],
    preview: {
      books: ['farmai', 'farm200', 'farm365'],
      keys: [
        { ko: 'AI가 잘하는 일은 검색어 만들기·요약·일정표 초안이고, 못하는 일은 병 확정 진단·약제 결정·인허가 판정입니다. 이 선을 먼저 긋습니다.', en: 'AI is good at search terms, summaries and schedule drafts; it cannot confirm a disease, choose a pesticide or decide a permit. Draw that line first.' },
        { ko: '질문에는 다섯 가지를 넣습니다 — 지역, 작물과 품종, 면적과 주수, 재배방식, 재배 목적.', en: 'Put five things in the question: region, crop and variety, area and plant count, growing method, purpose.' },
        { ko: '답변은 네 칸으로 나눠 받습니다 — 확인된 공식 정보 / 내가 준 조건 / 추가 확인 사항 / 현장 작업 순서.', en: 'Ask for the answer in four blocks: confirmed official information, my conditions, what still needs checking, and the field work order.' },
        { ko: '365일 대백과는 24절기를 축으로 삼아, 절기 전 열흘은 준비, 당일은 대표 프로그램, 뒤 열흘은 마무리로 배치했습니다.', en: 'The 365-day book uses the 24 solar terms as its spine: ten days of preparation, the programme itself, then ten days of finishing.' }
      ],
      quotes: [
        { n: '내 농장 AI · 2장', t: { ko: '재배계획 초안', en: 'A cropping plan draft' }, b: '내 농장 상황을 고려해 재배계획 초안을 작성해줘. 지역: [시·도 / 시·군] 작물과 품종: [작물·품종] 면적과 주수: [면적·주수] 재배방식: [노지/시설] 토양검정 결과: [있으면 입력] 올해 목표: [생산/체험/판매 등]\n답변은 ➀ 확인된 공식 정보 ➁ 내가 제공한 조건 ➂ 추가 확인이 필요한 사항 ➃ 현장 작업 순서로 나눠 줘. 근거 없는 숫자는 만들지 말고, 공식 자료의 출처와 기준일을 표시해 줘.' },
        { n: '농산물 200선 · 029', t: { ko: '체리 상세페이지', en: 'Cherry product page' }, b: '너는 프리미엄 과일 상세페이지를 쓰는 사람이다.\n아래 정보로 체리 상세페이지를 써 줘.\n- 품종·중량: [생체리 1kg]\n- 가격: [26,900원]\n- 특징: [알 크기 28mm, 단단한 과육]\n- 고객: [선물, 아이 간식]\n(1) 첫 문장 (2) 알 크기와 개수 (3) 맛 (4) 씻는 법 (5) 보관 (6) 압상·곰팡이 교환 기준.\n체리는 씻으면 금방 상하므로 먹기 직전에 씻으라고 강조해 줘.' },
        { n: '농산물 200선 · 061', t: { ko: '당근마켓 첫 판매 글', en: 'A first local-market post' }, b: '너는 당근마켓에서 농산물을 파는 이웃이다.\n아래 정보로 첫 판매 글을 써 줘.\n- 동네: [○○동] / - 상품: [감자 3kg, 7,000원] / - 특징: [오늘 캤음, 분이 많음] / - 거래: [직거래, 동네 편의점 앞]\n(1) 제목 (2) 인사 (3) 상품 설명 (4) 가격 (5) 거래 장소와 시간 (6) 남은 수량.\n과장 없이 이웃에게 말하듯 쓰고, 300자 안으로 써 줘.' }
      ]
    }
  },

  {
    id: 'ebook', group: 'recipe', emoji: '📚', c1: '#F6DFE8', c2: '#EDCBDC',
    name: { ko: '전자책 · 디지털 상품 기획', en: 'E-books · digital products' },
    sub: { ko: '기획 → 목차 → 표지 문구 → 판매 페이지', en: 'Idea → contents → cover copy → sales page' },
    tag: { ko: '아이디어에서 목차까지가 제일 오래 걸린다', en: 'The longest part is idea to contents' },
    when: {
      ko: '책 한 권을 기획하고 목차를 잡고, 표지 문구와 판매 페이지를 만들 때 씁니다. 잘 팔리는 책은 대개 "누구를 위한 책인지"가 한 문장으로 정리됩니다. 독자를 한 명으로 특정하는 것이 첫 단계입니다.',
      en: 'For planning a book, shaping the contents, writing cover copy and building the sales page. Books that sell usually describe their reader in one sentence. Naming that single reader is step one.'
    },
    tips: [
      { ko: '독자를 한 명으로 특정하세요. "누구나"는 아무도 아닙니다. "안성에서 무인카페를 처음 여는 40대 여성"이 훨씬 셉니다.', en: 'Name one reader. "Everyone" is no one. "A woman in her forties opening her first unmanned cafe" sells.' },
      { ko: '목차를 먼저 확정하고 각 장을 따로 시키세요. 통째로 쓰게 하면 뒤로 갈수록 힘이 빠집니다.', en: 'Lock the contents, then write chapter by chapter. Asked for whole, it fades.' },
      { ko: '제목은 10개 이상 받아 직접 고르세요. 한 번에 정하지 말고 하루 묵혀 보면 판단이 갑니다.', en: 'Order ten or more titles and choose yourself. Sleep on it a day.' }
    ],
    prompts: [
      {
        t: { ko: '내 경험으로 책 3권 기획', en: 'Three books from my experience' },
        b: {
          ko: '나는 [건축 설계 10년, 무인카페·스터디카페 운영, 체험농장 준비, 전자책 출판] 경험이 있어. 이 경험으로 100쪽 안팎 전자책 3권을 기획해 줘.\n\n각 책마다\n① 한 줄 제목과 부제 ② 독자 한 명(구체적으로) ③ 이 책이 필요한 순간 ④ 목차 8장 ⑤ 같은 주제의 다른 책과 다른 점\n\n표로 정리하고, 세 권이 서로 겹치지 않게 역할을 나눠 줘.',
          en: 'I have [ten years of architectural design, run an unmanned cafe and a study cafe, am preparing a farm, and publish e-books]. Plan three e-books of about 100 pages each.\n\nFor each: (1) title and subtitle (2) one specific reader (3) the moment they need it (4) eight chapters (5) how it differs from what already exists\n\nAs a table, with the three books given distinct jobs.'
        }
      },
      {
        t: { ko: '목차 8장 확정', en: 'Settle eight chapters' },
        b: {
          ko: '위 책의 목차를 8장으로 확정해 줘.\n\n각 장에 ① 독자가 얻게 되는 것(한 문장) ② 들어갈 실제 사례 1개 ③ 분량(쪽) ④ 이 장에서 하지 말아야 할 것\n\n· 총 100쪽 안팎이 되게 배분\n· 첫 장은 이론이 아니라 "오늘 바로 해 볼 한 가지"로 시작\n· 마지막 장은 부록(체크리스트·양식)으로',
          en: 'Settle the contents at eight chapters.\n\nEach: (1) what the reader gains, one sentence (2) one real example (3) length in pages (4) what this chapter must not do\n\n· About 100 pages total\n· Chapter one starts with one thing to try today, not theory\n· The last chapter is an appendix of checklists and templates'
        }
      },
      {
        t: { ko: '제목·부제 10개씩', en: 'Ten titles, ten subtitles' },
        b: {
          ko: '이 책의 제목 10개와 부제 10개를 만들어 줘.\n\n· 독자: [40~50대 여성, 처음 시작하는 사람]\n· 서점에서 집어 들 만하게, 자극적이지 않게\n· 제목은 짧게(15자 안팎), 부제는 무엇을 얻는지\n· 각 후보 옆에 "이 제목이 약한 점"도 한 줄씩 솔직하게\n· 서로 다른 결로 5쌍(차분한 것, 실용적인 것)',
          en: 'Give me ten titles and ten subtitles for this book.\n\n· Reader: [women in their forties and fifties, first-timers]\n· Picked up in a bookshop, never sensational\n· Title short (about 15 characters), subtitle says what they gain\n· One honest line on each title\'s weakness\n· Two moods — calm and practical'
        }
      },
      {
        t: { ko: '판매 페이지 문구', en: 'Sales page copy' },
        b: {
          ko: '스마트스토어 상세페이지용 소개를 써 줘.\n\n① 이 책이 필요한 순간 (3문장) ② 목차 ③ 읽고 나면 할 수 있는 것 5가지 ④ 이 책이 맞지 않는 사람 ⑤ 분량·형식 안내\n\n· 800자 안팎\n· 과장·보장 표현 금지\n· "AI가 쓴 글" 느낌이 나는 상투어 금지\n· 마지막에 구매 전 확인할 점 한 줄',
          en: 'Write the product page for a Korean e-book marketplace.\n\n(1) The moment you need this book, three sentences (2) contents (3) five things you can do afterwards (4) who this book is not for (5) length and format\n\n· About 500 words\n· No guarantees or hype\n· No stock AI phrasing\n· End with one line to check before buying'
        }
      }
    ],
    notes: [
      { ko: '타사 책의 내용을 복사하지 마세요. 인용은 짧게, 출처를 표시합니다.', en: 'Never copy another book. Quote briefly, with credit.' },
      { ko: '표지에 실존 인물 사진·상표·캐릭터를 쓰지 마세요.', en: 'No real people, trademarks or characters on covers.' },
      { ko: '가격·환불·교환 규정을 상품 페이지에 명시하세요.', en: 'State price, refund and exchange terms on the page.' }
    ],
    preview: {
      books: ['overseas'],
      keys: [
        { ko: '제목은 "핵심 단어 + 구체적인 약속" 구조로 짓고, 부제에 "for beginners", "step by step" 같은 말을 넣습니다.', en: 'Titles are "key word + concrete promise", with "for beginners" or "step by step" in the subtitle.' },
        { ko: '표지는 휴대폰 썸네일 크기에서 제목이 읽혀야 팔립니다. 글꼴 두 종류, 단색 배경, 작은 글씨도 20pt 이상.', en: 'The cover must read at thumbnail size: two fonts, flat background, even small text at 20pt or more.' },
        { ko: '설명은 다섯 줄이면 됩니다 — 대상, 약속, 구성, 형식, 환불 안내. 첫 두 줄에서 "내 책이다"를 느끼게 해야 합니다.', en: 'A description needs five parts: who it is for, the promise, the contents, the file, the refund note. The first two lines must say "this is for me".' },
        { ko: '가격은 4.99~9.99달러에서 시작합니다. 고정 수수료(0.30~0.50달러) 때문에 너무 낮으면 남는 돈이 급격히 줄어듭니다.', en: 'Start at $4.99–9.99: fixed fees of $0.30–0.50 mean very low prices leave almost nothing.' }
      ],
      quotes: [
        { n: '부록 E · 고객 응대', t: { ko: '구매 감사 · 파일 재전송', en: 'Thank you · resending a file' }, b: 'Thank you for your purchase! Your download link is in your receipt email.\n\nI have sent the file again to this email address. Please check your spam folder as well.' },
        { n: '부록 E · 고객센터', t: { ko: '입금이 안 될 때', en: 'Payout has not arrived' }, b: 'My payout has not arrived. Could you check the payout status for my account?' },
        { n: '부록 E · 홍보', t: { ko: '상품 소개 한 줄', en: 'One-line product description' }, b: 'Stuck at the sign-up screen? You are not alone.\nA beginner-friendly guide with screen-by-screen steps.' }
      ]
    }
  },

  {
    id: 'english', group: 'recipe', emoji: '🗣️', c1: '#D8E9F8', c2: '#C3DCF3',
    name: { ko: '영어 회화 · 번역 · 해외 판매', en: 'English · translation · selling abroad' },
    sub: { ko: '역할극 · 교정 · 상품 설명 · 메일', en: 'Role-play, correction, listings, email' },
    tag: { ko: '말하기 연습은 상대가 없어도 된다', en: 'You do not need a partner to practise' },
    when: {
      ko: '해외 구매자와 메일을 주고받거나, 영어 상품 설명을 써야 할 때, 그리고 말하기를 연습하고 싶은데 상대가 없을 때 씁니다. AI는 틀린 문장을 부끄러워하지 않고 고쳐 주는 몇 안 되는 연습 상대입니다. 다만 계약·세무 문서는 사람 전문가의 확인이 필요합니다.',
      en: 'For email with overseas buyers, English product listings, and speaking practice without a partner. AI is one of the few partners that corrects you without embarrassment. Contracts and tax documents still need a human professional.'
    },
    tips: [
      { ko: '역할극으로 시작하세요. "너는 손님, 나는 직원"이라고 정하면 실제 상황과 비슷해집니다.', en: 'Start with role-play: "You are the customer, I am the staff."' },
      { ko: '교정은 "고친 문장 + 왜 고쳤는지"를 함께 받으세요. 이유를 알아야 다음에 안 틀립니다.', en: 'Ask for the correction and the reason. The reason is what you keep.' },
      { ko: '해외 판매 문구는 짧고 분명하게. 미사여구는 통하지 않고, 반품·배송 정보가 더 중요합니다.', en: 'Overseas listings should be short and clear. Ornament does not sell; shipping and returns do.' }
    ],
    prompts: [
      {
        t: { ko: '카페 손님 역할극', en: 'Role-play: a cafe customer' },
        b: {
          ko: 'Let\'s role-play. You are a customer at my small cafe in Korea. I am the owner.\n\n· Speak naturally, one or two sentences at a time\n· After each of my replies, gently correct my English and explain the main fix in one line\n· Start with a question about the menu\n· If I do not understand something, say it again more simply instead of switching to Korean',
          en: 'Let\'s role-play. You are a customer at my small cafe in Korea. I am the owner.\n\n· Speak naturally, one or two sentences at a time\n· After each of my replies, gently correct my English and explain the main fix in one line\n· Start with a question about the menu\n· If I do not understand, say it again more simply instead of switching to Korean'
        }
      },
      {
        t: { ko: '해외 구매자에게 보내는 메일', en: 'Email to an overseas buyer' },
        b: {
          ko: 'Rewrite my English below in natural, polite business English for an overseas buyer.\n\n· Keep it under 90 words\n· Keep every fact (price, date, shipping method) exactly as I wrote it\n· Then list the three main changes you made and why\n· If something in my draft could confuse the buyer, point it out\n\n[내 영어 초안]',
          en: 'Rewrite my English below in natural, polite business English for an overseas buyer.\n\n· Keep it under 90 words\n· Keep every fact (price, date, shipping method) exactly as I wrote it\n· Then list the three main changes you made and why\n· If something in my draft could confuse the buyer, point it out\n\n[my draft]'
        }
      },
      {
        t: { ko: '영문 상품 설명', en: 'An English product listing' },
        b: {
          ko: 'Write a product description in English for a 100-page practical guide to running an unmanned cafe in Korea.\n\n· Warm and practical tone, no hype, no exclamation marks\n· 150 words, then five bullet points\n· Say clearly what is inside and who it is not for\n· Include one line about the digital format and instant download\n· Avoid words that sound machine-written',
          en: 'Write a product description in English for a 100-page practical guide to running an unmanned cafe in Korea.\n\n· Warm and practical tone, no hype, no exclamation marks\n· 150 words, then five bullet points\n· Say clearly what is inside and who it is not for\n· Include one line about the digital format and instant download\n· Avoid words that sound machine-written'
        }
      },
      {
        t: { ko: '손님이 물을 질문 10개 연습', en: 'Ten guest questions to practise' },
        b: {
          ko: 'Give me ten short questions a foreign guest might ask at a small Korean guesthouse or cafe, with a natural answer for each — under 20 words per answer.\n\n· Then quiz me one at a time, in random order\n· Correct my answer and give a more natural version\n· Keep a short note at the end of what I kept getting wrong',
          en: 'Give me ten short questions a foreign guest might ask at a small Korean guesthouse or cafe, with a natural answer for each — under 20 words per answer.\n\n· Then quiz me one at a time, in random order\n· Correct my answer and give a more natural version\n· Keep a short note at the end of what I kept getting wrong'
        }
      }
    ],
    notes: [
      { ko: '자동 번역을 그대로 보내지 마세요. 이름·숫자·날짜·단위를 꼭 다시 읽으세요.', en: 'Never forward machine translation unseen. Re-read names, numbers, dates and units.' },
      { ko: '계약·세무·비자 문서는 사람 전문가(회계사·변호사)의 확인을 받으세요.', en: 'Contracts, tax and visa documents need a human accountant or lawyer.' },
      { ko: '해외 판매 시 세금·환불·배송 정책을 먼저 정하고 상품 페이지에 적으세요.', en: 'Set tax, refund and shipping terms before listing abroad.' }
    ],
    preview: {
      books: ['host50', 'overseas'],
      keys: [
        { ko: '체험 하나를 소개할 때 네 가지를 붙입니다 — 왜 꼭 해봐야 하는지, 이렇게 즐겨요 5단계, 현장에서 쓰는 한국어, 시간·비용.', en: 'Each experience carries four things: why it matters, five steps to enjoy it, phrases to use on the spot, time and cost.' },
        { ko: '외국인 손님 안내는 결론을 먼저 말합니다. "여기 웨이팅 어떻게 걸어요?"에는 방법부터, 설명은 그다음입니다.', en: 'For foreign guests, answer the question first and explain afterwards.' },
        { ko: '밤·새벽 코스 5개처럼 시간대를 바꿔 주면 같은 동네가 다른 코스가 됩니다.', en: 'Changing the hour — five night and dawn routes — turns the same neighborhood into a different itinerary.' },
        { ko: '해외 고객 문의는 "무엇을 하려는데, 어디서 막혔고, 무엇을 도와 달라" 세 가지만 있으면 한 문장으로 충분합니다.', en: 'For overseas support, one sentence is enough: what you are trying, where it stopped, what you need.' }
      ],
      quotes: [
        { n: '외국인 친구 50 · 체험 01', t: { ko: '성수동 팝업 순례 5단계', en: 'Five steps for pop-ups' }, b: '1. 떠나기 전에 검색 한 번. 인스타그램이나 지도 앱에서 동네 이름과 함께 "팝업"을 검색하면 이번 주 일정이 나와요.\n2. 평일 오후 두 시에서 다섯 시. 주말은 대기 40~90분이 기본이에요.\n3. 줄이 있으면 먼저 대기 등록. 현장에 QR 코드가 붙어 있거나, 직원이 태블릿을 들고 있어요.\n4. 무료 굿즈는 입구에서. "굿즈 어떻게 받아요?"라고 물으면 다 알려 줘요.\n5. 나올 때 옆 골목으로. 창고를 고친 편집숍, 작은 카페, 빵집이 골목마다 이어져요.' },
        { n: '외국인 친구 50 · 현장 한국어', t: { ko: '입구에서 쓰는 두 문장', en: 'Two lines at the door' }, b: '"여기 웨이팅 어떻게 걸어요?" — 입구에서 줄이 보이는데 방법을 모를 때\n"이거 오늘 구매할 수 있어요?" — 진열된 게 품절인지 확인할 때. "품절이에요"면 아쉽지만 다음 팝업이 있어요' },
        { n: '내 전자책 달러로 · 부록 E', t: { ko: '파일이 안 열릴 때', en: 'When a file will not open' }, b: 'The file is a PDF. Please try a free PDF reader on a computer. If it still does not open, let me know.\n\nSorry for the late reply. I have checked your order and here is what I found.' }
      ]
    }
  }
];
