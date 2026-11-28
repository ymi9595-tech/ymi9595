/* 단비랩 AI 가이드 — 실전 기능 콘텐츠 (2026-11)
   · UITEXT   : 새 화면에 쓰는 문구 (data.js 의 UI 에 합쳐집니다)
   · PURPOSES : 🧭 무엇을 할까요? — 하고 싶은 일 8가지
   · TOOLSPEC : 도구 상세의 표준 항목 (가입·무료 범위·시작 4단계·개인정보)
   · PROMPTS  : 📚 프롬프트 도서관 10분야
   · COURSE   : 🎓 초보자 6단계
   · LAB      : ⚖️ 세 AI 답 비교 (직접 만든 예시 — 실제 화면 캡처가 아닙니다)
   · FIXES    : 🛠️ 오류 해결 9가지
   모든 문구는 {ko, en} 두 벌입니다. */

const UITEXT = {
  ko: {
    navPractice: "실전 도구",
    navPracticeCount: "5개",
    pickNav: "무엇을 할까요?",
    pickSub: "하고 싶은 일 8가지에서 출발",
    pickTitle: "🧭 AI, 무엇을 할까요?",
    pickLead: "AI 이름을 몰라도 됩니다. 하고 싶은 일을 고르면 맞는 AI와, 바로 붙여 넣을 프롬프트를 보여 드립니다.",
    pickHint: "아래에서 하나를 눌러 보세요.",
    pickTools: "추천 AI",
    pickWhy: "왜 이 AI인가",
    pickPrompt: "바로 쓰는 프롬프트",
    pickRecipe: "이 일을 다루는 레시피",
    pickOpen: "이 도구 설명 보기",
    pickChange: "다른 일 고르기",
    promptsNav: "프롬프트 도서관",
    promptsSub: "10분야 · 복사해서 바로 쓰기",
    promptsTitle: "📚 프롬프트 도서관",
    promptsLead: "일이 정해져 있을 때 꺼내 쓰는 서랍입니다. 분야를 고르고, 프롬프트를 복사한 뒤 [ ] 안만 내 상황으로 바꾸세요. 각 프롬프트에는 입력 예시와 완성 결과, 더 좋게 만드는 법이 함께 있습니다.",
    promptsCount: (n) => `${n}개 프롬프트`,
    promptsHomeTitle: "📚 프롬프트 도서관 & 오늘의 프롬프트",
    promptsHomeLead: "블로그부터 홈페이지까지 열 가지 분야, 스물일곱 개. 오늘 것은 날마다 바뀝니다.",
    todayTitle: "✨ 오늘의 프롬프트",
    todayLead: "날짜가 바뀌면 다른 프롬프트가 나옵니다. 오늘 것을 오늘 한 번 써 보세요.",
    todayDate: (d) => `${d}의 프롬프트`,
    allPrompts: "프롬프트 도서관 전체 보기",
    promptUse: "쓰는 곳",
    promptInput: "입력 예시",
    promptOutput: "이렇게 나옵니다",
    promptTip: "더 좋게 만드는 법",
    promptMore: "입력 예시 · 결과 예시 · 팁 보기",
    promptCatCount: (n) => `${n}개`,
    courseNav: "초보자 6단계 코스",
    courseSub: "하루 20분, 여섯 걸음",
    courseTitle: "🎓 초보자 6단계 학습 코스",
    courseLead: "AI를 처음 켠 사람이 여섯 걸음으로 익히는 순서입니다. 한 걸음에 20분이면 충분하고, 각 단계 끝의 프롬프트를 그대로 복사해 연습하면 됩니다. 순서를 건너뛰면 6단계에서 시간을 잃습니다.",
    courseStep: (n) => `${n}단계`,
    courseDo: "따라 하기",
    coursePractice: "연습 프롬프트",
    courseDone: "이 단계 마쳤어요",
    courseProgress: (a, b) => `${b}단계 중 ${a}단계 마침`,
    courseReset: "진행 기록 지우기",
    labNav: "AI 결과물 비교실",
    labSub: "같은 질문, 세 AI의 답",
    labTitle: "⚖️ AI 결과물 비교실",
    labLead: "같은 질문을 ChatGPT · Claude · Gemini에 넣으면 답의 결이 다릅니다. 어느 쪽이 낫다기보다, 어떤 일에 어느 결이 맞는지 보는 곳입니다.",
    labQ: "같은 질문",
    labTone: "답의 결",
    labVerdict: "이런 일에는 이 AI",
    labNote: "아래 답은 세 AI가 흔히 보이는 결을 단비랩이 정리한 예시입니다. 실제 화면 캡처가 아니며, 같은 질문에도 답은 매번 달라집니다. 기능과 요금은 2026년 11월 기준입니다.",
    labNotBest: "어느 AI도 모든 일에 최고는 아닙니다. 중요한 문서는 두 곳에 넣어 답을 비교해 보세요.",
    fixNav: "AI 오류 해결실",
    fixSub: "막혔을 때 9가지",
    fixTitle: "🛠️ AI 오류 해결실",
    fixLead: "처음 쓰는 사람이 가장 자주 멈추는 곳을 모았습니다. 증상에서 찾아 순서대로 따라 하면 대부분 풀립니다.",
    fixSymptom: "이런 증상",
    fixCause: "왜 그럴까요",
    fixDo: "이렇게 해결하세요",
    fixAsk: "이렇게 물어보세요",
    specTitle: "처음 시작하기",
    specSignup: "가입 필요 여부",
    specFree: "무료 범위",
    specSteps: "처음 4단계",
    specPrivacy: "개인정보 주의",
    specNote: "2026년 11월 기준입니다. 무료 범위와 가격은 각 서비스 정책에 따라 바뀌니, 시작 전에 공식 요금 페이지에서 한 번 더 확인하세요.",
    searchGroupPrompt: "프롬프트",
    searchGroupFix: "오류 해결",
    searchGroupCourse: "학습 코스",
    searchGroupPractice: "실전 도구",
    newTag: "새 기능"
  },
  en: {
    navPractice: "Practice",
    navPracticeCount: "5",
    pickNav: "What do you want to do?",
    pickSub: "Start from the job, not the tool",
    pickTitle: "🧭 What do you want to do?",
    pickLead: "You do not need to know the AI by name. Pick the job and you get the right tool, the reason, and a prompt you can paste in.",
    pickHint: "Pick one below.",
    pickTools: "Suggested AI",
    pickWhy: "Why this one",
    pickPrompt: "Prompt to paste",
    pickRecipe: "Recipe for this job",
    pickOpen: "Open the tool guide",
    pickChange: "Pick another job",
    promptsNav: "Prompt library",
    promptsSub: "Ten fields, copy and go",
    promptsTitle: "📚 Prompt library",
    promptsLead: "The drawer you open when the job is already decided. Choose a field, copy the prompt, and change only the [brackets]. Each one comes with a sample input, a sample answer and a way to make it better.",
    promptsCount: (n) => `${n} prompts`,
    promptsHomeTitle: "📚 Prompt library & today's prompt",
    promptsHomeLead: "Ten fields from blogging to websites, twenty-seven prompts. Today's changes every day.",
    todayTitle: "✨ Today's prompt",
    todayLead: "A different prompt each day. Try today's once, today.",
    todayDate: (d) => `Prompt for ${d}`,
    allPrompts: "Open the whole library",
    promptUse: "Where it helps",
    promptInput: "Sample input",
    promptOutput: "What comes back",
    promptTip: "Make it better",
    promptMore: "Sample input · answer · tip",
    promptCatCount: (n) => `${n}`,
    courseNav: "Six-step starter course",
    courseSub: "Six steps, 20 minutes each",
    courseTitle: "🎓 A six-step starter course",
    courseLead: "The order a first-time user should learn in. Twenty minutes per step, and each step ends with a prompt to copy and try. Skip a step and you will pay for it at step six.",
    courseStep: (n) => `Step ${n}`,
    courseDo: "Do this",
    coursePractice: "Practice prompt",
    courseDone: "I finished this step",
    courseProgress: (a, b) => `${a} of ${b} steps done`,
    courseReset: "Clear progress",
    labNav: "AI comparison room",
    labSub: "One question, three answers",
    labTitle: "⚖️ The comparison room",
    labLead: "The same question in ChatGPT, Claude and Gemini comes back with a different shape. Not which is better, but which shape fits which job.",
    labQ: "The question",
    labTone: "Shape of the answer",
    labVerdict: "For this job, start here",
    labNote: "These answers are DanbiLab's summary of the shape each AI usually gives. They are not screen captures, and the same question will answer differently each time. Features and pricing as of November 2026.",
    labNotBest: "No AI is best at everything. For anything that matters, put the question to two of them and compare.",
    fixNav: "Troubleshooting",
    fixSub: "Nine places people stop",
    fixTitle: "🛠️ When AI will not cooperate",
    fixLead: "The nine places beginners stop most. Find the symptom and work down the list — most of it clears.",
    fixSymptom: "What you see",
    fixCause: "Why it happens",
    fixDo: "What to do",
    fixAsk: "Say this",
    specTitle: "Getting started",
    specSignup: "Sign-up",
    specFree: "Free range",
    specSteps: "First four steps",
    specPrivacy: "Personal data",
    specNote: "As of November 2026. Free limits and prices follow each service's own policy — check the official pricing page once before you start.",
    searchGroupPrompt: "Prompts",
    searchGroupFix: "Troubleshooting",
    searchGroupCourse: "Course",
    searchGroupPractice: "Practice",
    newTag: "New"
  }
};

/* ───────── 🧭 무엇을 할까요? ───────── */
const PURPOSES = [
  {
    id: "blog", emoji: "📝",
    label: { ko: "블로그 글 쓰기", en: "Write a blog post" },
    tools: ["chatgpt", "claude"], recipe: "blog-sns",
    why: { ko: "사진과 메모만 주면 1,000자 초안을 10분에 만듭니다. 긴 글은 Claude, 표와 잡무는 ChatGPT가 편합니다.", en: "Give it a photo and a note and a 1,000-character draft comes back in ten minutes. Claude for long pieces, ChatGPT for tables and odd jobs." },
    prompt: {
      ko: "너는 동네 가게를 오래 운영해 온 사장의 글을 정리하는 사람이야. 아래 메모로 블로그 글을 써 줘.\n\n· 메모: [오늘 있었던 일, 손님이 한 말, 내가 고친 것]\n· 독자: [동네 40~50대 여성]\n· 분량: 1,000자, 소제목 2개\n· 첫 문장은 인사 없이 장면부터\n· 금지: “~에 대해 알아보겠습니다”, “결론적으로”, “많은 분들이”\n· 메모에 없는 사실은 쓰지 말고 [확인 필요]로 표시\n\n다 쓴 뒤에 네가 뺀 문장과 그 이유를 두 줄로 알려 줘.",
      en: "You are tidying up a blog post for someone who has run a neighbourhood shop for years. Write from the notes below.\n\n· Notes: [what happened today, what a customer said, what I fixed]\n· Reader: [women in their forties and fifties nearby]\n· Length: 600 words, two subheads\n· Open on the scene, no greeting\n· Ban stock openings and “in conclusion”\n· Invent nothing; mark gaps [needs checking]\n\nThen tell me in two lines which sentences you cut and why."
    }
  },
  {
    id: "photo", emoji: "🎨",
    label: { ko: "사진 만들기", en: "Make a picture" },
    tools: ["image-ai", "chatgpt"], recipe: "ebook",
    why: { ko: "쓸 만한 그림은 재능이 아니라 설명에서 나옵니다. 무엇이·어디서·빛·구도·재질, 다섯 칸을 채우면 됩니다.", en: "A usable image comes from the description, not from talent. Fill five slots: what, where, light, framing, surface." },
    prompt: {
      ko: "아래 다섯 칸으로 이미지를 만들어 줘.\n\n· 무엇이: [나무 테이블 위의 라테 한 잔]\n· 어디서: [비 내리는 창가]\n· 빛: [아침의 부드러운 옆빛, 왼쪽]\n· 구도: [테이블 높이에서 가까이]\n· 재질: [무광 도자기, 우유 거품의 결]\n· 넣지 말 것: 사람, 글자, 로고\n\n가로 3:2, 실사 사진처럼. 다 만든 뒤에 이 장면에서 어색한 부분을 한 줄로 알려 줘.",
      en: "Make an image from these five slots.\n\n· What: [a latte on a wooden table]\n· Where: [beside a rainy window]\n· Light: [soft morning side light from the left]\n· Framing: [close, at table height]\n· Surface: [matte ceramic, the grain of the foam]\n· Exclude: people, text, logos\n\n3:2 landscape, photographic. Then tell me in one line what looks off in the scene."
    }
  },
  {
    id: "video", emoji: "🎬",
    label: { ko: "동영상 만들기", en: "Make a video" },
    tools: ["video-ai", "chatgpt"], recipe: "blog-sns",
    why: { ko: "긴 영상 하나보다 5초 컷 여러 개를 이어 붙이는 편이 현실적입니다. 컷마다 지시문을 따로 씁니다.", en: "Several five-second clips joined together beat one long scene. Write a prompt per clip." },
    prompt: {
      ko: "아래 장면을 5초짜리 영상 클립 3개로 나눠서, 클립마다 만들기 지시문을 써 줘.\n\n· 전체 이야기: [체리 농장에서 아침에 체리를 따서 매장에 내놓는 하루]\n· 클립 1: 손이 체리를 따는 순간 / 클립 2: 바구니에 담긴 체리 / 클립 3: 매장 진열대\n· 각 클립: 화면에 보이는 것, 카메라 움직임(고정·천천히 당김), 빛\n· 사람 얼굴은 나오지 않게, 손과 사물 중심으로\n\n세 클립이 이어져 보이도록 마지막에 “연결할 때 주의할 점”을 세 줄로 알려 줘.",
      en: "Split the scene below into three five-second clips and write a generation prompt for each.\n\n· Story: [a morning picking cherries and putting them out in the shop]\n· Clip 1 hands picking / clip 2 cherries in a basket / clip 3 the shelf\n· Per clip: what is on screen, camera move (locked off, slow push), light\n· No faces — hands and objects only\n\nFinish with three lines on keeping the three clips continuous."
    }
  },
  {
    id: "pdf", emoji: "📄",
    label: { ko: "PDF 읽고 요약하기", en: "Read and summarise a PDF" },
    tools: ["claude", "chatgpt"], recipe: "realtor",
    why: { ko: "긴 문서를 통째로 넣고 물을 수 있습니다. 다만 요약은 원문과 달라질 수 있어 금액·기한은 직접 봅니다.", en: "It can hold the whole document and answer questions. Summaries drift, so check amounts and deadlines yourself." },
    prompt: {
      ko: "첨부한 PDF를 읽고 아래 순서로 정리해 줘.\n\n① 무슨 문서인지 세 줄\n② 내가 해야 할 일 (기한·금액 포함)\n③ 자격·조건\n④ 원문에 없어서 따로 확인해야 할 것\n\n숫자와 날짜는 원문 표기 그대로 쓰고, 읽기 어렵거나 애매하면 “확인 필요”로 남겨 줘. 네 판단으로 채우지 마.\n마지막에 “이 문서에서 내가 놓치기 쉬운 한 곳”을 짚어 줘.",
      en: "Read the attached PDF and set it out in this order.\n\n(1) What the document is, in three lines\n(2) What I have to do, with deadlines and amounts\n(3) Who qualifies and under what conditions\n(4) What is missing and must be checked elsewhere\n\nKeep numbers and dates exactly as printed; mark anything unclear “needs checking”. Do not fill gaps with your own reading.\nFinish by naming the one place in this document I am most likely to miss."
    }
  },
  {
    id: "research", emoji: "🔍",
    label: { ko: "자료 조사하기", en: "Research something" },
    tools: ["perplexity", "chatgpt"], recipe: "farm",
    why: { ko: "출처가 붙는 조사는 Perplexity가 빠릅니다. 지원사업·정책처럼 마감과 자격이 중요한 일에 맞습니다.", en: "Perplexity is quickest when sources must come with the answer — grants and policy, where deadlines and eligibility matter." },
    prompt: {
      ko: "2026년 12월 기준, [경기도 안성시]에서 [소상공인]이 신청할 수 있는 지원사업을 찾아 줘.\n\n각 항목마다 ① 사업명 ② 지원 내용과 금액 ③ 신청 자격 ④ 마감일 ⑤ 공식 공고 링크 ⑥ 공고 발행일\n· 마감이 지난 것은 빼 줘\n· 블로그·카페 글 말고 공공기관·공식 공고만\n· 확인한 날짜를 맨 위에 적어 줘\n· 확실하지 않은 항목은 “확인 필요”로 표시\n\n표로 정리하고, 내가 전화로 물어볼 질문 세 개를 마지막에 붙여 줘.",
      en: "Find grants that [a small business] in [Ansan, Gyeonggi-do] can apply for, as of December 2026.\n\nFor each: (1) name (2) what it gives and how much (3) eligibility (4) deadline (5) official notice link (6) publication date\n· Drop anything already closed\n· Official notices only — no blog or forum posts\n· Put the date you checked at the top\n· Mark anything uncertain “needs checking”\n\nAs a table, then three questions I should ask on the phone."
    }
  },
  {
    id: "excel", emoji: "📊",
    label: { ko: "엑셀 정리하기", en: "Tidy up a spreadsheet" },
    tools: ["chatgpt", "automation"], recipe: "small-shop",
    why: { ko: "수식은 말로 시키면 되고, 매달 같은 정리는 한 번 만들어 두면 계속 돕니다.", en: "Ask for the formula in words; for the same monthly tidy-up, build it once and it keeps running." },
    prompt: {
      ko: "아래 카드 내역을 정리해 줘.\n\n[카드 내역 붙여넣기]\n\n① 표로: 날짜 / 사용처 / 금액 / 분류 / 메모\n② 합계와 분류별 비중\n③ 세금 신고 때 헷갈릴 항목 3개와 그 이유\n④ 다음 달에 줄일 수 있는 지출 2개\n\n숫자는 원문에 있는 것만 쓰고, 읽기 어려운 값은 “확인 필요”로 표시해 줘.\n그리고 이 표를 엑셀에서 다시 만들 때 쓸 수식 세 개를 알려 줘.",
      en: "Tidy up the card statement below.\n\n[Paste the statement]\n\n(1) A table: date / merchant / amount / category / note\n(2) Totals and share by category\n(3) Three items that get confusing at tax time, and why\n(4) Two expenses I could cut next month\n\nUse only numbers in the source; mark unclear values “needs checking”.\nThen give me three Excel formulas to rebuild this table."
    }
  },
  {
    id: "website", emoji: "🌐",
    label: { ko: "홈페이지 만들기", en: "Build a web page" },
    tools: ["claude", "automation"], recipe: "ebook",
    why: { ko: "한 페이지짜리 소개 사이트는 대화 한 번으로 뼈대가 나옵니다. 고칠 곳을 알려 주게 하는 게 핵심입니다.", en: "A one-page site comes out of a single conversation. The trick is asking where to edit it." },
    prompt: {
      ko: "한 페이지짜리 소개 사이트를 HTML 한 파일로 만들어 줘.\n\n· 누구: [안성에서 체험농장을 준비하는 사람]\n· 무엇을: [체험 프로그램 소개와 예약 문의]\n· 넣을 것: 이름, 한 줄 소개, 프로그램 3개, 오시는 길, 문의\n· 조건: 외부 라이브러리 없이 한 파일, 휴대폰에서 안 깨지게, 사진 없이 색과 글자로만\n· 하지 말 것: 실제 주소·전화번호 대신 [ ] 자리표시자, 없는 후기·수상\n\n완성 코드와 함께 ① 어디를 고치면 문구가 바뀌는지 ② 공개할 때 필요한 것 두 가지를 세 줄로 알려 줘.",
      en: "Build a one-page introduction site as a single HTML file.\n\n· Who: [someone preparing a pick-your-own farm in Korea]\n· What: [programmes and booking enquiries]\n· Include: name, one-line pitch, three programmes, how to get there, contact\n· Rules: one file, no external libraries, must not break on a phone, no photos — colour and type only\n· Do not: invent addresses, reviews or awards; use [placeholders]\n\nWith the code, give me three lines on (1) where to edit the copy (2) what you need before publishing."
    }
  },
  {
    id: "english", emoji: "🗣️",
    label: { ko: "영어 번역하기", en: "Translate into English" },
    tools: ["chatgpt", "claude"], recipe: "english",
    why: { ko: "직역보다 상황에 맞는 영어가 필요합니다. 두 가지 버전을 받아 고르는 편이 안전합니다.", en: "You need English that fits the situation, not a word-for-word transfer. Ask for two versions and choose." },
    prompt: {
      ko: "아래 한국어를 영어로 옮겨 줘.\n\n① 자연스러운 일상 영어 ② 격식 있는 이메일 영어 — 두 가지로\n· 직역투 금지, 미국식 관용 표현으로\n· 한국어에만 있는 뉘앙스는 억지로 옮기지 말고 빼 줘\n· 원문에 없는 내용은 더하지 마\n\n마지막에 “한국어에는 있지만 영어로 옮기면 어색해지는 부분”을 한 줄로 알려 줘.\n\n[한국어]",
      en: "Put the Korean below into English.\n\n(1) natural everyday English (2) formal email English — two versions\n· No literal translation; use idiomatic American English\n· Drop nuance that only exists in Korean rather than forcing it\n· Add nothing that is not in the original\n\nFinish with one line on what reads awkwardly when carried over from Korean.\n\n[Korean]"
    }
  }
];

/* ───────── 도구 상세 표준 항목 (2026-11 기준) ───────── */
const TOOLSPEC = {
  chatgpt: {
    signup: { ko: "이메일 하나로 가입. 구글·애플 계정으로 바로 시작할 수도 있습니다.", en: "One email address. You can also start with a Google or Apple account." },
    free: { ko: "무료 플랜 있음. 하루 메시지 수와 이미지 생성 횟수에 제한이 있고, 가장 최신 모델은 제한적으로 열립니다.", en: "Free plan. Daily message and image limits apply, and the newest model is only partly available." },
    steps: [
      { ko: "chatgpt.com 을 엽니다.", en: "Open chatgpt.com." },
      { ko: "오른쪽 위에서 로그인하고, 내 이름이 보이는지 확인합니다.", en: "Sign in top right and check your name appears." },
      { ko: "아래 입력창에 첫 요청을 한 문장으로 씁니다.", en: "Type your first request in one sentence." },
      { ko: "답이 나오면 “더 짧게”, “표로”처럼 한 번 더 고쳐 봅니다.", en: "When the answer arrives, ask once more: “shorter”, “as a table”." }
    ],
    privacy: { ko: "대화가 모델 학습에 쓰일 수 있습니다. 설정에서 학습 사용을 끄고, 이름·연락처·계좌·주민번호는 넣지 마세요.", en: "Chats may be used for training. Turn that off in settings, and never type names, contacts, account or ID numbers." }
  },
  claude: {
    signup: { ko: "이메일로 가입. 구글 계정 로그인도 됩니다.", en: "Sign up with email, or use a Google account." },
    free: { ko: "무료 플랜 있음. 하루 대화량과 파일 업로드 횟수에 제한이 있습니다.", en: "Free plan, with daily limits on messages and file uploads." },
    steps: [
      { ko: "claude.ai 를 엽니다.", en: "Open claude.ai." },
      { ko: "로그인 후 새 대화를 시작합니다.", en: "Sign in and start a new chat." },
      { ko: "문서를 올린 뒤 “이해했으면 세 줄로 확인해 줘”라고 먼저 묻습니다.", en: "Upload the document, then ask it to confirm the gist in three lines first." },
      { ko: "확인한 뒤에 실제 질문을 합니다.", en: "Only then ask the real question." }
    ],
    privacy: { ko: "긴 문서를 넣을 때 손님 이름·연락처·계약 금액은 가리고 넣으세요. 학습 사용 여부는 설정에서 확인합니다.", en: "Mask customer names, contacts and contract amounts before uploading. Check the training setting." }
  },
  gemini: {
    signup: { ko: "구글 계정으로 바로 시작합니다. 별도 가입이 없습니다.", en: "Start with your Google account — no separate sign-up." },
    free: { ko: "무료로 쓸 수 있고, 무거운 모델과 기능은 하루 횟수 제한이 있습니다.", en: "Free, with daily limits on the heavier models and features." },
    steps: [
      { ko: "gemini.google.com 을 엽니다.", en: "Open gemini.google.com." },
      { ko: "오른쪽 위 프로필이 내 계정인지 확인합니다. 회사 계정이면 자료 접근 범위가 다릅니다.", en: "Check the profile top right is the account you mean; a work account sees different material." },
      { ko: "사진이나 유튜브 링크를 붙이고 무엇을 뽑을지 씁니다.", en: "Attach a photo or a YouTube link and say what to pull out." },
      { ko: "표로 나온 값 중 흐린 글자는 원본과 대조합니다.", en: "Compare any value it read from a blurry photo against the original." }
    ],
    privacy: { ko: "구글 앱과 연결하면 메일·드라이브까지 볼 수 있습니다. 연결 범위를 좁히고, 손님 정보가 있는 계정은 연결하지 마세요.", en: "Connected to Google apps it can see mail and Drive. Narrow the scope, and do not connect an account holding customer data." }
  },
  perplexity: {
    signup: { ko: "이메일 또는 구글 계정으로 가입합니다.", en: "Sign up with email or Google." },
    free: { ko: "무료 플랜 있음. 하루 검색 횟수 제한이 있고, 깊은 조사 모드는 횟수가 적습니다.", en: "Free plan with a daily search limit; the deeper research mode allows fewer runs." },
    steps: [
      { ko: "perplexity.ai 를 엽니다.", en: "Open perplexity.ai." },
      { ko: "로그인하고 검색창에 기간과 지역을 넣어 묻습니다.", en: "Sign in and put a date and a place in the question." },
      { ko: "답 아래 출처 번호를 눌러 원문을 엽니다.", en: "Open the numbered sources under the answer." },
      { ko: "마감·자격은 원문에서 다시 확인합니다.", en: "Confirm deadlines and eligibility in the source itself." }
    ],
    privacy: { ko: "검색 기록이 남습니다. 회사 내부 자료나 손님 이름이 들어간 질문은 피하세요.", en: "Searches are kept. Avoid questions containing internal documents or customer names." }
  },
  "image-ai": {
    signup: { ko: "도구마다 다릅니다. Adobe Firefly는 어도비 계정, Midjourney는 디스코드나 웹 계정이 필요합니다.", en: "It depends: Firefly needs an Adobe account, Midjourney a Discord or web account." },
    free: { ko: "Firefly는 월 무료 크레딧이 있고, Midjourney는 유료입니다. ChatGPT 안에서도 이미지를 만들 수 있습니다.", en: "Firefly gives monthly free credits; Midjourney is paid. ChatGPT can also make images." },
    steps: [
      { ko: "쓸 도구의 공식 사이트를 엽니다.", en: "Open the tool's official site." },
      { ko: "로그인하고 남은 크레딧을 확인합니다.", en: "Sign in and check remaining credits." },
      { ko: "다섯 칸(무엇이·어디서·빛·구도·재질)으로 설명을 씁니다.", en: "Describe in five slots: what, where, light, framing, surface." },
      { ko: "마음에 드는 한 장이 나오면 상업적 이용 조건을 확인합니다.", en: "When one works, check the commercial-use terms." }
    ],
    privacy: { ko: "실제 손님 얼굴 사진을 넣어 다른 그림을 만들지 마세요. 초상권 문제가 됩니다.", en: "Do not feed real customers' photos in to make new images — that is a likeness problem." }
  },
  "video-ai": {
    signup: { ko: "Kling·Runway 모두 이메일 또는 구글 계정으로 가입합니다.", en: "Kling and Runway both sign up with email or Google." },
    free: { ko: "무료 크레딧이 조금 있고, 무료 결과에는 워터마크가 붙는 경우가 많습니다.", en: "A few free credits, and free output usually carries a watermark." },
    steps: [
      { ko: "도구 사이트에 로그인하고 크레딧을 봅니다.", en: "Sign in and check credits." },
      { ko: "5초 클립 하나부터 만듭니다.", en: "Start with one five-second clip." },
      { ko: "같은 장면을 두 번 만들어 나은 쪽을 씁니다.", en: "Generate the same scene twice and keep the better one." },
      { ko: "클립을 이어 붙이고 소리는 따로 입힙니다.", en: "Join the clips, then add sound separately." }
    ],
    privacy: { ko: "얼굴이 나오는 영상은 당사자 동의 없이 만들지 마세요. 매장 손님이 찍힌 영상도 마찬가지입니다.", en: "Never generate a recognisable person without consent, including customers caught on shop footage." }
  },
  "music-ai": {
    signup: { ko: "Suno는 이메일 또는 구글 계정으로 가입합니다.", en: "Suno signs up with email or Google." },
    free: { ko: "무료로 하루 몇 곡까지 만들 수 있지만, 무료 결과의 상업적 사용이 막혀 있는 경우가 많습니다.", en: "A few songs a day free, but free output is often barred from commercial use." },
    steps: [
      { ko: "suno.com 에 로그인합니다.", en: "Sign in at suno.com." },
      { ko: "가사 없이(instrumental)로 설정합니다.", en: "Set it to instrumental." },
      { ko: "분위기·악기·빠르기를 한 줄로 적습니다.", en: "Describe mood, instruments and tempo in one line." },
      { ko: "매장에 틀기 전에 상업적 이용 조건을 확인합니다.", en: "Check commercial terms before playing it in a shop." }
    ],
    privacy: { ko: "유명 가수의 목소리를 흉내 내는 요청은 하지 마세요. 초상·저작권 문제가 됩니다.", en: "Do not ask it to imitate a known singer's voice." }
  },
  automation: {
    signup: { ko: "Apps Script는 구글 계정만 있으면 됩니다. Notion은 이메일로 가입합니다.", en: "Apps Script needs only a Google account; Notion signs up by email." },
    free: { ko: "Apps Script는 무료입니다. Notion은 개인 무료 플랜이 있고 팀 기능은 유료입니다.", en: "Apps Script is free. Notion has a free personal plan; team features are paid." },
    steps: [
      { ko: "script.google.com 을 열고 새 프로젝트를 만듭니다.", en: "Open script.google.com and create a project." },
      { ko: "시키고 싶은 일을 한 문장으로 적어 둡니다.", en: "Write the job you want done in one sentence." },
      { ko: "AI에게 코드 초안을 받아 붙여 넣고 한 번 실행합니다.", en: "Get a draft from an AI, paste it, run it once." },
      { ko: "결과를 확인한 뒤에 매일 실행으로 예약합니다.", en: "Check the result, then schedule it daily." }
    ],
    privacy: { ko: "자동화는 한 번 잘못 돌면 계속 틀립니다. 처음에는 메일 발송·결제 없이 “정리만” 하게 만드세요.", en: "Automation repeats its mistakes. At first, let it tidy only — no sending, no paying." }
  }
};

/* ───────── 📚 프롬프트 도서관 ───────── */
const PROMPTCATS = [
  { id: "blog", emoji: "📝", name: { ko: "블로그 · SNS", en: "Blog & social" } },
  { id: "biz", emoji: "📑", name: { ko: "사업계획서 · 보고서", en: "Plans & reports" } },
  { id: "ad", emoji: "📣", name: { ko: "광고 · 홍보 문구", en: "Ads & promo copy" } },
  { id: "image", emoji: "🎨", name: { ko: "이미지 생성", en: "Image prompts" } },
  { id: "shorts", emoji: "🎬", name: { ko: "쇼츠 · 영상 대본", en: "Shorts scripts" } },
  { id: "travel", emoji: "🧳", name: { ko: "여행 계획", en: "Travel plans" } },
  { id: "study", emoji: "🎓", name: { ko: "공부 · 교육", en: "Study & teaching" } },
  { id: "lang", emoji: "🗣️", name: { ko: "번역 · 외국어", en: "Translation" } },
  { id: "data", emoji: "📊", name: { ko: "엑셀 · 자료 분석", en: "Sheets & data" } },
  { id: "web", emoji: "🌐", name: { ko: "홈페이지 · 코딩", en: "Web & code" } }
];

const PROMPTS = [
  /* ── 블로그 · SNS ── */
  {
    id: "blog-draft", cat: "blog",
    t: { ko: "사진 메모 하나로 블로그 한 편", en: "One photo note into a blog post" },
    use: { ko: "찍어 둔 사진은 있는데 글이 안 써질 때", en: "When you have the photo but not the words" },
    b: {
      ko: "너는 동네 가게 사장의 글을 정리하는 사람이야. 아래 메모로 블로그 글을 써 줘.\n\n· 사진: [무엇이 찍혔는지]\n· 그날 있었던 일: [손님이 한 말, 내가 고친 것, 헷갈린 것]\n· 독자: [동네 40~50대 여성]\n· 1,000자, 소제목 2개\n· 첫 문장은 인사 없이 장면부터\n· 금지: “~에 대해 알아보겠습니다”, “결론적으로”, “많은 분들이”\n· 메모에 없는 사실은 만들지 말고 [확인 필요]로 표시\n\n다 쓴 뒤에 뺀 문장과 그 이유를 두 줄로 알려 줘.",
      en: "You tidy up writing for a neighbourhood shop owner. Write from the notes below.\n\n· Photo: [what is in it]\n· What happened: [what a customer said, what I fixed, what confused me]\n· Reader: [women in their forties and fifties nearby]\n· 600 words, two subheads\n· Open on the scene, no greeting\n· Ban “in conclusion”, “many people say”, stock openings\n· Invent nothing; mark gaps [needs checking]\n\nThen tell me in two lines what you cut and why."
    },
    inp: { ko: "사진: 창가 자리에 놓인 라테 두 잔. 손님이 “여기 앉으면 비 오는 게 잘 보이네요”라고 했다. 오전에 우유 거품기를 두 번 닦았다. 8시에 문을 열었는데 9시까지 손님이 없어서 불을 다 켜 두었다.", en: "Photo: two lattes by the window. A customer said “you can watch the rain from here”. I cleaned the milk frother twice. Opened at eight, nobody until nine, so every light was on." },
    out: { ko: "제목 후보: “비 오는 날 창가 자리가 비어 있는 이유” / “8시에 열었지만 9시까지 아무도 오지 않은 날”\n\n첫 문장: “오늘 아침 8시, 불을 다 켜 두고 9시까지 아무도 오지 않았다.”\n이어서 창가 자리 이야기, 우유 거품기 청소 이야기, 마지막에 “비 오는 날엔 창가 자리를 미리 잡아 두시면 좋습니다” 한 줄로 닫음. 뺀 문장: “라테가 정말 맛있습니다” — 사진이 이미 말하고 있어서.", en: "Titles: “Why the window seat is empty on rainy days” / “Opened at eight, nobody until nine”\n\nOpening: “Eight o'clock, every light on, and nobody until nine.” Then the window seat, the frother, and a closing line: “On rainy days, ask us to hold the window seat.” Cut: “our latte is really good” — the photo already says it." },
    tip: { ko: "“뺀 문장과 이유”를 꼭 받으세요. 그게 다음 글을 내가 쓰는 법이 됩니다.", en: "Always ask what it cut and why. That is how you learn to write the next one." }
  },
  {
    id: "blog-caption", cat: "blog",
    t: { ko: "인스타 캡션 3가지 결", en: "Three Instagram captions, three moods" },
    use: { ko: "사진 한 장으로 오늘 올릴 글을 정할 때", en: "One photo, and you need today's post" },
    b: {
      ko: "아래 사진과 상황으로 인스타그램 캡션을 세 가지로 써 줘.\n\n· 사진: [설명]\n· 상황: [오늘의 재료, 날씨, 바뀐 것]\n· ① 짧고 담백 ② 손님에게 쓸모 있는 정보 ③ 질문형(댓글 유도)\n· 각 2~3줄, 해시태그는 넣지 말고 따로 10개\n· 이모지는 한 줄에 하나까지만\n· 없는 혜택·과장 금지\n\n셋 중 이 사진에 가장 맞는 것을 골라 이유를 한 줄로 알려 줘.",
      en: "Write three Instagram captions from the photo and situation.\n\n· Photo: [describe]\n· Situation: [today's ingredient, the weather, what changed]\n· (1) short and dry (2) useful to a customer (3) a question that invites replies\n· Two or three lines each; ten hashtags separately\n· One emoji per line at most\n· No invented offers, no hype\n\nThen pick the one that fits this photo and say why in a line."
    },
    inp: { ko: "사진: 오늘 아침 들어온 감귤 상자. 상황: 겨울이라 귤라테를 시작했고, 오늘은 귤을 직접 졸여서 시럽을 만들었다.", en: "Photo: a crate of tangerines that arrived this morning. Situation: winter, so we started a tangerine latte, and today I reduced the fruit for syrup myself." },
    out: { ko: "① 오늘 아침 귤이 왔습니다. 졸여서 시럽을 만들었어요. 오늘부터 귤라테. (좋아요 대신 매장 방문이 더 반갑습니다.)\n② 귤라테는 시럽을 직접 졸여서 만듭니다. 단맛을 줄이고 싶으시면 주문할 때 말씀해 주세요.\n③ 귤라테, 얼음 많이는 말고 적당히 넣는 게 좋을까요? 손님들 취향이 궁금합니다. — 추천: ②, 사진에 이미 온도감이 보여서 설명이 보태는 쪽이 낫습니다.", en: "(1) Tangerines arrived this morning. Reduced them into syrup. Tangerine latte from today.\n(2) The syrup is reduced in house. Ask for less sweet and we will adjust.\n(3) Tangerine latte — how much ice do you like? — Pick: (2); the photo already carries the mood." },
    tip: { ko: "“이 중 뭐가 나아?”를 물으면 고르는 기준까지 배웁니다. 그냥 3개 받고 끝내지 마세요.", en: "Ask which one is better — you get the reasoning, not just three options." }
  },
  {
    id: "blog-week", cat: "blog",
    t: { ko: "한 주치 올릴 것 일곱 개", en: "Seven posts for one week" },
    use: { ko: "월요일 아침에 일주일치를 미리 정해 둘 때", en: "Planning a week on Monday morning" },
    b: {
      ko: "나는 [안성에서 무인카페를 운영]하고, 이번 주는 [주말에 손님이 몰림]이야. 월~일 하루 하나씩 올릴 것 7개를 짜 줘.\n\n· 각 항목: 주제 한 줄 + 첫 문장(훅) + 사진 없이도 되는 대안\n· 홍보는 7개 중 2개까지만, 나머지는 손님에게 쓸모 있는 것\n· 같은 이야기가 겹치면 각도를 바꿔서\n· 표로: 요일 / 주제 / 첫 문장 / 필요한 사진\n\n마지막에 “이번 주에 실제로 쓰기 어려운 것 2개”를 솔직히 짚어 줘.",
      en: "I [run an unmanned cafe in Korea] and this week [weekends get busy]. Plan seven posts, Monday to Sunday.\n\n· Each: one-line topic + opening hook + an option that needs no photo\n· At most two promotional; the rest useful to customers\n· Change the angle where two overlap\n· Table: day / topic / first line / photo needed\n\nFinish by honestly naming two you would struggle to produce this week."
    },
    inp: { ko: "매장은 안성, 무인카페. 이번 주말에 근처 대학 시험이 끝난다.", en: "Unmanned cafe in Ansan; university exams end nearby this weekend." },
    out: { ko: "월: 시험 끝난 주에 자리 잡기 좋은 시간대 (표)\n화: 무인카페에서 처음 오면 헷갈리는 3가지\n수: 이번 주 원두 바뀐 것 — 맛 차이 한 줄\n목: 시험 끝나고 몰릴 시간 미리 알림 (홍보 1)\n금: 주말 대비 음료 준비 장면\n토: 11월 안성 아침 날씨와 따뜻한 음료 (홍보 2)\n일: 손님이 남긴 한마디 소개\n어려운 것: 토요일 날씨 글(사진이 필요), 일요일 후기 글(후기가 아직 없음).", en: "Mon: best hours in exam week\nTue: three things that confuse first-timers\nWed: the beans changed\nThu: when it will be busy (promo 1)\nFri: prepping for the weekend\nSat: cold mornings and a hot drink (promo 2)\nSun: something a customer said\nHard: Saturday needs a photo; Sunday needs a review you do not have yet." },
    tip: { ko: "“어려운 것”을 물으면 빈 칸이 보입니다. 그 빈 칸이 다음 주에 찍어야 할 사진입니다.", en: "The honest “hard ones” show you the gaps — those gaps are next week's photo list." }
  },

  /* ── 사업계획서 · 보고서 ── */
  {
    id: "biz-onepage", cat: "biz",
    t: { ko: "지원사업용 1장 사업 요약", en: "A one-page summary for a grant" },
    use: { ko: "신청서 첫 장, 심사위원이 30초 안에 읽는 부분", en: "The first page a reviewer reads in thirty seconds" },
    b: {
      ko: "아래 내용으로 지원사업 신청서의 1장 요약을 써 줘.\n\n· 사업: [체험농장 준비, 안성]\n· 지금까지 한 것: [농지 답사, 품목 결정, 견적]\n· 이번 지원으로 할 것: [관수 시설, 체험 공간]\n· 기대 효과: [매출·고용·지역]\n\n형식: ① 한 문장 요약 ② 문제 ③ 해결 ④ 실행 계획 3줄 ⑤ 숫자로 된 기대 효과\n· 심사위원이 의심할 만한 곳은 숨기지 말고 “아직 확인 중”으로 표시\n· 형용사 빼고 숫자·날짜로\n· 500자 안쪽",
      en: "Write the one-page summary for a grant application from the notes below.\n\n· Project: [a pick-your-own farm in Korea]\n· Done so far: [site visits, crops chosen, quotes]\n· What the grant pays for: [irrigation, a visitor space]\n· Expected effect: [revenue, jobs, the area]\n\nForm: (1) one-sentence summary (2) problem (3) solution (4) three lines of plan (5) expected effect in numbers\n· Mark what is still unconfirmed rather than hiding it\n· Numbers and dates, no adjectives\n· Under 350 words"
    },
    inp: { ko: "체리 300평, 관수 시설 견적 1,200만원, 체험 공간 20평, 예상 방문객 주 40명, 1인 고용.", en: "300 pyeong of cherries, irrigation quote 12M won, 20 pyeong visitor space, 40 visitors a week, one job." },
    out: { ko: "요약: 안성의 300평 체리 과수원을 주 40명이 찾는 체험 공간으로 바꾸는 사업입니다.\n문제: 지금은 수확철에만 손님이 오고, 관수 시설이 없어 흉작 위험이 큽니다.\n해결: 관수 시설로 수확을 안정시키고, 20평 체험 공간에서 예약제 프로그램을 운영합니다.\n계획: 3월 시설, 5월 시범 운영, 6월 정식 개장.\n기대: 주 40명 × 6주, 1인 고용. 방문객 수는 아직 확인 중입니다.", en: "Summary: turning 300 pyeong of cherry trees in Korea into a visitor space for forty people a week.\nProblem: visitors only come at harvest, and without irrigation a bad year wipes the season.\nSolution: irrigation for stable yield, plus a booked programme in a twenty-pyeong space.\nPlan: build in March, trial in May, open in June.\nEffect: 40 visitors a week for six weeks, one job. Visitor numbers still being confirmed." },
    tip: { ko: "“의심할 곳을 표시해 달라”가 핵심입니다. 숨긴 약점은 심사에서 반드시 드러납니다.", en: "Asking it to flag weak spots is the point. Hidden weaknesses always surface in review." }
  },
  {
    id: "biz-report", cat: "biz",
    t: { ko: "월간 보고서 뼈대 잡기", en: "The skeleton of a monthly report" },
    use: { ko: "매달 같은 형식으로 실적을 정리해야 할 때", en: "The same monthly format, every month" },
    b: {
      ko: "아래 숫자와 메모로 이번 달 보고서를 만들어 줘.\n\n[숫자·메모 붙여넣기]\n\n① 한 줄 요약(가장 중요한 변화)\n③ 잘된 것 3 ④ 아쉬운 것 3 ⑤ 다음 달 할 일 3 (담당·기한 포함)\n· 표로: 항목 / 이번 달 / 지난달 / 증감\n· 숫자는 내가 준 것만 쓰고, 계산이 필요한 값은 식을 보여 줘\n· 원인 추정은 “추정”이라고 표시\n· 1장 안쪽",
      en: "Build this month's report from the figures and notes below.\n\n[Paste]\n\n(1) One-line summary of the biggest change (2) table: item / this month / last month / change (3) three things that worked (4) three that did not (5) three actions for next month, with owner and date\n· Use only the numbers I gave; show the arithmetic where you calculate\n· Label every guess “estimate”\n· One page"
    },
    inp: { ko: "10월 매출 412만원, 11월 368만원. 주말 손님은 늘었는데 평일이 줄었다. 원두 값이 올랐다.", en: "October revenue 4.12M won, November 3.68M. Weekend visitors up, weekdays down. Bean prices rose." },
    out: { ko: "요약: 주말은 늘고 평일이 줄어 매출이 10.7% 감소했습니다 ((412-368)/412).\n표: 매출 368 / 412 / -44만원, 주말 방문 +18%, 평일 방문 -24%\n잘된 것: 주말 동선 정리, 신메뉴 반응, 안내문 개선\n아쉬운 것: 평일 오후 공실, 원두 원가 상승(추정 6%)\n다음 달: 평일 3시 이후 할인 실험(담당 사장, 12/5), 원두 대체 견적 2곳(12/10), 주말 예약 안내문 교체(12/12)", en: "Summary: weekends up, weekdays down, revenue -10.7% ((412-368)/412).\nTable: revenue 368 / 412 / -440k; weekend visits +18%; weekday -24%\nWorked: weekend flow, new menu, clearer signage\nDid not: empty weekday afternoons; bean cost up (estimate 6%)\nNext month: weekday 3pm discount test (owner, Dec 5), two alternative bean quotes (Dec 10), new weekend booking notice (Dec 12)" },
    tip: { ko: "계산식을 보여 달라고 하세요. 숫자가 틀렸을 때 어디서 틀렸는지 바로 보입니다.", en: "Ask for the arithmetic. When a number is wrong, you see where." }
  },
  {
    id: "biz-meeting", cat: "biz",
    t: { ko: "회의록을 할 일 목록으로", en: "Meeting notes into a to-do list" },
    use: { ko: "회의는 길었는데 누가 뭘 하기로 했는지 기억이 안 날 때", en: "A long meeting, and nobody remembers who agreed to what" },
    b: {
      ko: "아래 회의 메모를 정리해 줘.\n\n[메모 붙여넣기]\n\n① 결정된 것 (누가 언제까지)\n② 결정되지 않은 것 (다음에 정할 사람)\n③ 할 일 목록 — 담당 / 기한 / 끝났다고 볼 기준\n④ 다시 물어볼 질문 3개\n\n메모에 없는 담당자·기한은 만들어 내지 말고 “미정”으로 남겨 줘.\n표로 정리하고, 5줄 요약을 맨 위에 붙여 줘.",
      en: "Tidy up the meeting notes below.\n\n[Paste]\n\n(1) What was decided, by whom and when (2) what was left open, and who decides next (3) action list with owner, date, and what “done” means (4) three questions to send back\n\nDo not invent owners or dates — write “unassigned”.\nAs a table, with a five-line summary on top."
    },
    inp: { ko: "관수 견적 두 곳 비교하기로 함. 체험 공간 바닥은 다음에. 예약 페이지는 내가 만들어 보기로. 예산은 아직.", en: "Agreed to compare two irrigation quotes. Flooring deferred. I will try building the booking page. Budget not set." },
    out: { ko: "요약: 관수 견적 비교와 예약 페이지가 이번 달 안건, 바닥과 예산은 다음 회의로.\n결정: 관수 견적 2곳 비교 — 담당 미정, 기한 미정\n미결정: 체험 공간 바닥(다음 회의), 예산(대표)\n할 일: 예약 페이지 초안 — 나, 12/8, “문의 폼까지 동작”\n되물을 것: 견적 비교 마감일? 예산 확정 시점? 바닥 결정에 필요한 자료?", en: "Summary: quotes and booking page this month; flooring and budget next meeting.\nDecided: compare two irrigation quotes — owner and date unassigned\nOpen: flooring (next meeting), budget (the owner)\nAction: booking page draft — me, Dec 8, “form works end to end”\nAsk back: quote deadline? budget date? what is needed to decide the floor?" },
    tip: { ko: "“미정”을 남기게 하는 게 중요합니다. AI는 빈칸을 그럴듯하게 채우는 습관이 있습니다.", en: "Insist on “unassigned”. AI loves to fill an empty owner with a plausible name." }
  },

  /* ── 광고 · 홍보 문구 ── */
  {
    id: "ad-shop", cat: "ad",
    t: { ko: "가게 소식, 세 가지 길이로", en: "A shop notice in three lengths" },
    use: { ko: "문에 붙일 것, 문자, 동네 앱에 올릴 것", en: "For the door, for a text, for the neighbourhood app" },
    b: {
      ko: "아래 상황으로 손님께 알릴 소식을 세 가지 길이로 써 줘.\n\n· 상황: [12월 3일 화요일, 커피머신 점검으로 오전 11시까지 휴무]\n· ① 문에 붙일 200자 ② 문자용 60자 ③ 동네 앱용 3문장\n· 톤: 짧고 담백하게, 사과는 한 번만\n· 금지: 과장된 사과, 없는 혜택·보상, 이모지\n\n세 버전을 따로 보여 주고, 마지막에 “문자에서 뺀 내용”을 한 줄로 알려 줘.",
      en: "Write the same news at three lengths.\n\n· Situation: [Tuesday Dec 3, closed until 11am for coffee machine service]\n· (1) 200 characters for the door (2) 60 for a text (3) three sentences for the neighbourhood app\n· Short and dry; one apology only\n· No over-apologising, no invented compensation, no emoji\n\nShow all three, then one line on what you cut from the text version."
    },
    inp: { ko: "12월 3일 화요일, 커피머신 점검. 오전 11시 오픈. 무인카페라 직원이 없음.", en: "Tuesday Dec 3, machine service, open at 11. Unmanned, so no staff on site." },
    out: { ko: "문: 12월 3일(화)은 커피머신 점검으로 11시에 문을 엽니다. 무인 매장이라 기다리실 곳이 없어, 11시 이후에 오시는 편이 좋습니다. 불편을 드려 죄송합니다.\n문자: [가게명] 12/3(화) 11시 오픈합니다. 커피머신 점검 때문입니다.\n앱: 이번 화요일은 11시에 엽니다. 커피머신 점검 날이라 아침에는 음료가 나오지 않습니다. 급하시면 옆 골목 편의점 커피를 권합니다.\n문자에서 뺀 것: 대체 장소 안내 — 문자에서는 길어집니다.", en: "Door: On Tue Dec 3 we open at 11 for machine service. There is no staff on site, so please come after 11. Sorry for the wait.\nText: [shop] opens 11am Tue 12/3 for machine service.\nApp: This Tuesday we open at 11. No drinks before that while the machine is serviced. If you need coffee early, the convenience store around the corner is open.\nCut from the text: the alternative — too long for a text." },
    tip: { ko: "무인매장은 “기다릴 곳이 없다”가 핵심 정보입니다. 이런 현장 사정을 프롬프트에 꼭 넣으세요.", en: "For an unmanned shop, “nowhere to wait” is the key fact. Put the real constraint in the prompt." }
  },
  {
    id: "ad-price", cat: "ad",
    t: { ko: "가격표 문구, 과장 없이", en: "Price-card copy without the hype" },
    use: { ko: "메뉴판·가격표에 쓸 짧은 설명이 필요할 때", en: "Short lines to sit under a price" },
    b: {
      ko: "아래 메뉴의 가격표 문구를 써 줘.\n\n· 메뉴: [귤라테 4,500원]\n· 실제로 다른 점: [귤을 직접 졸여 시럽을 만듦, 단맛 조절 가능]\n· 손님: [동네 40~50대 여성]\n\n· 메뉴마다 한 줄, 15자 안팎\n· 사실만, 효능·최고·완벽·특별한 금지\n· “수제”처럼 뜻이 흐린 말 대신 구체적인 행동으로\n\n5개를 주고, 그중 과장으로 읽힐 수 있는 것을 하나 짚어 줘.",
      en: "Write price-card lines from the notes.\n\n· Item: [tangerine latte, 4,500 won]\n· What is actually different: [syrup reduced in house, sweetness adjustable]\n· Customer: [women in their forties and fifties nearby]\n\n· One line each, under 15 characters\n· Facts only; no health claims, no “best”, “perfect”, “special”\n· Replace vague words like “artisan” with a concrete action\n\nGive me five, then flag the one that could read as exaggeration."
    },
    inp: { ko: "겨울 한정, 귤 시럽 직접 조리. 얼음 양 조절 가능. 테이크아웃 300원 할인.", en: "Winter only, syrup reduced in house, ice adjustable, 300 won off takeaway." },
    out: { ko: "· 귤을 졸여 만든 시럽, 겨울에만\n· 단맛은 주문할 때 말씀해 주세요\n· 얼음 적게도 됩니다\n· 테이크아웃은 300원 덜 받습니다\n· 오늘 아침에 졸인 시럽입니다\n과장으로 읽힐 수 있는 것: “오늘 아침에 졸인” — 매일 아침이 아니라면 빼세요.", en: "· Syrup reduced from whole tangerines, winter only\n· Say the word and we make it less sweet\n· Light ice is fine\n· 300 won off when you bring it back to go\n· Reduced this morning\nCould read as hype: “this morning” — if it is not every morning, drop it." },
    tip: { ko: "과장으로 읽힐 문구를 하나 짚어 달라고 하면, 내가 쓴 말의 습관이 보입니다.", en: "Asking it to flag one over-claim shows you your own habits." }
  },
  {
    id: "ad-review", cat: "ad",
    t: { ko: "리뷰 답글, 칭찬과 불만 각각", en: "Reply to a review — good and bad" },
    use: { ko: "리뷰가 달렸는데 감정이 앞설 때", en: "When a review lands and you are annoyed" },
    b: {
      ko: "아래 리뷰에 답글을 써 줘.\n\n· 리뷰: [내용 붙여넣기]\n· 실제 있었던 일: [내가 아는 사실]\n· ① 정중한 답글 150자 ② 사실을 바로잡는 부분을 넣은 답글 200자\n· 변명조·반박조 금지, 감정적인 말 금지\n· 확인되지 않은 부분은 “확인해 보겠습니다”로\n· 마지막에 사과 한 번, 다음에 바뀌는 것 한 줄\n\n둘 중 공개에 더 적합한 것을 골라 이유를 한 줄로 알려 줘.",
      en: "Write replies to the review below.\n\n· Review: [paste]\n· What actually happened: [what I know]\n· (1) a polite 150-character reply (2) a 200-character reply that corrects the facts\n· No defensiveness, no arguing, no emotion\n· Say “we will check” where you are not sure\n· One apology, then one line on what changes\n\nPick the one better suited to posting publicly and say why in a line."
    },
    inp: { ko: "리뷰: “무인카페라 그런지 컵이 지저분했어요. 직원도 없고.” 실제: 오후 3시 청소, 그날 손님이 많아 4시까지 밀림.", en: "Review: “Cups were dirty, and there is nobody there.” Fact: cleaning is at 3pm; that day a rush pushed it to 4." },
    out: { ko: "① 불편을 드려 죄송합니다. 컵 상태는 바로 확인했습니다. 청소 시간을 오후 2시와 5시 두 번으로 나누겠습니다.\n② 불편을 드려 죄송합니다. 매장 청소는 오후 3시에 한 번 하는데, 그날은 손님이 몰려 4시까지 밀렸습니다. 말씀하신 컵은 확인해 보겠습니다. 청소를 두 번으로 나누고, 컵을 더 자주 바꾸겠습니다.\n공개에 적합한 것: ② — 사실을 담백하게 밝히고 바뀌는 것을 약속해서, 읽는 다른 손님에게도 안심이 됩니다.", en: "(1) Sorry for the trouble. We checked the cups. Cleaning will now run twice, at 2 and 5.\n(2) Sorry for the trouble. We clean once at 3pm; that day a rush pushed it to 4. We will check the cup you had. Cleaning now runs twice and cups are changed more often.\nPost this one: (2) — it states the fact plainly and promises a change, which reassures the next reader too." },
    tip: { ko: "공개 답글은 리뷰 쓴 사람보다 다음 손님이 읽습니다. 그 사람을 기준으로 고르세요.", en: "A public reply is read by the next customer more than the reviewer. Choose for them." }
  }
];

PROMPTS.push(
  /* ── 이미지 생성 ── */
  {
    id: "img-product", cat: "image",
    t: { ko: "상품 사진 설명 다섯 칸", en: "A product shot in five slots" },
    use: { ko: "상세페이지·스톡에 쓸 사진을 만들 때", en: "Images for a product page or a stock library" },
    b: {
      ko: "아래 다섯 칸으로 상품 사진을 만들어 줘.\n\n· 무엇이: [유리병에 담긴 수제 귤청, 뚜껑 옆에 귤 한 조각]\n· 어디서: [회색 콘크리트 선반]\n· 빛: [창에서 들어오는 부드러운 아침 빛, 오른쪽]\n· 구도: [정면, 살짝 위에서, 배경 여백 넉넉히]\n· 재질: [유리 반사, 시럽의 점도, 껍질의 결]\n· 넣지 말 것: 사람, 글자, 브랜드, 손가락\n\n정사각 1:1, 실사 사진처럼. 다 만든 뒤 “상세페이지에 쓸 때 어색한 부분”을 한 줄로 알려 줘.",
      en: "Make a product photo from these five slots.\n\n· What: [a glass jar of homemade tangerine marmalade, one slice beside the lid]\n· Where: [a grey concrete shelf]\n· Light: [soft morning light from a window on the right]\n· Framing: [straight on, slightly high, generous space around]\n· Surface: [glass reflection, the thickness of the syrup, the peel texture]\n· Exclude: people, text, brands, fingers\n\nSquare 1:1, photographic. Then tell me in one line what would look wrong on a product page."
    },
    inp: { ko: "겨울 한정 상품. 병은 250ml. 상세페이지 첫 이미지로 쓸 것.", en: "A winter-only product, 250ml jar, for the first image on a product page." },
    out: { ko: "(이미지) 유리병이 화면 왼쪽 3분의 1, 오른쪽은 콘크리트 여백. 반사는 오른쪽 창빛. 귤 조각은 뚜껑 앞.\n어색한 부분: 유리 반사가 강해서 라벨을 붙일 자리가 비어 보이지 않을 수 있습니다. 반사를 줄이거나 여백을 더 달라고 한 번 더 요청하세요.", en: "(image) The jar sits in the left third, concrete negative space to the right, reflections from the right, the slice in front of the lid.\nWhat looks wrong: the reflection may leave no clean space for a label. Ask for less reflection or more space." },
    tip: { ko: "상세페이지 사진은 “라벨 붙일 빈 자리”가 필요합니다. 처음부터 여백을 말하세요.", en: "A product page needs empty space for a label. Ask for it up front." }
  },
  {
    id: "img-blog", cat: "image",
    t: { ko: "블로그 삽화, 얼굴 없이", en: "A blog illustration, no faces" },
    use: { ko: "글에 넣을 분위기 그림이 필요할 때", en: "When the post needs a mood image" },
    b: {
      ko: "아래 글에 넣을 삽화를 만들어 줘.\n\n· 글 요약: [비 오는 날 창가 자리에서 라테를 마시는 이야기]\n· 화면에 나올 것: [창가 테이블, 김 오르는 잔, 빗방울 맺힌 유리]\n· 사람은 손만, 얼굴·뒷모습도 넣지 말 것\n· 빛: [흐린 오후, 차분한 회청색]\n· 구도: [테이블 옆에서 본 눈높이]\n· 넣지 말 것: 글자, 로고, 다른 브랜드 컵\n\n가로 16:9. 그림체는 “필름 사진처럼 담백하게”. 한 장 더 만들 때 이어지도록 스타일 설명을 한 줄로 정리해 줘.",
      en: "Make an illustration for the post below.\n\n· Summary: [a latte at the window on a rainy day]\n· On screen: [window table, steaming cup, rain on the glass]\n· Hands only — no faces, not even from behind\n· Light: [overcast afternoon, calm blue-grey]\n· Framing: [eye level beside the table]\n· Exclude: text, logos, other brands' cups\n\n16:9, “plain like a film photograph”. Then write one line of style description I can reuse for the next image."
    },
    inp: { ko: "블로그 글: 11월의 비 오는 오후, 창가 자리 이야기. 1,200자.", en: "A 600-word post about a rainy November afternoon and the window seat." },
    out: { ko: "(이미지) 젖은 유리 너머 흐린 골목, 테이블 위 잔 하나, 오른쪽 아래에 손끝만.\n스타일 한 줄: “35mm film photograph, overcast daylight, muted blue-grey palette, shallow depth of field, no people.”", en: "(image) A blurred alley through wet glass, one cup, fingertips at the lower right.\nStyle line: “35mm film photograph, overcast daylight, muted blue-grey palette, shallow depth of field, no people.”" },
    tip: { ko: "스타일 설명을 한 줄로 받아 두면 다음 글의 그림이 같은 분위기로 나옵니다.", en: "Keep the style line and the next post's image will match." }
  },
  {
    id: "img-char", cat: "image",
    t: { ko: "같은 캐릭터로 네 컷", en: "Four panels, one character" },
    use: { ko: "이모티콘·카드뉴스에 같은 캐릭터를 이어 쓸 때", en: "Stickers or card news that need the same character" },
    b: {
      ko: "아래 캐릭터가 네 장면에서 같은 모습으로 나오게 만들어 줘.\n\n· 캐릭터: [동그란 얼굴의 회색 고양이, 빨간 목도리, 통통한 몸]\n· 장면 1: [잠에서 깨는] 2: [커피를 기다리는] 3: [비를 보는] 4: [웃으며 손을 흔드는]\n· 화풍: [부드러운 색연필, 크림색 배경], 선 굵기와 색은 네 장 모두 같게\n· 배경은 단순하게, 글자 없이\n\n네 장을 만들고, 캐릭터가 흔들린 부분(목도리 색·눈 모양·비율)을 장마다 짚어 줘.",
      en: "Keep one character identical across four panels.\n\n· Character: [a round grey cat, red scarf, plump]\n· Panels: waking up / waiting for coffee / watching rain / waving\n· Style: [soft coloured pencil, cream background], same line weight and palette in all four\n· Simple backgrounds, no text\n\nMake all four, then tell me per panel where the character drifted (scarf colour, eyes, proportions)."
    },
    inp: { ko: "카카오 이모티콘 후보. 360×360. 배경 투명이 필요하면 따로 요청.", en: "For a sticker set, 360×360. Ask separately if transparent background is needed." },
    out: { ko: "네 장 완성. 흔들린 곳: 2번 목도리 색이 조금 밝고, 3번 눈이 커졌고, 4번 몸 비율이 길쭉합니다. “목도리 색 #C0392B로 통일, 눈 크기 1번과 같게”라고 다시 요청하세요.", en: "Four panels done. Drift: panel 2's scarf is lighter, panel 3's eyes are bigger, panel 4 is stretched. Ask again with “scarf #C0392B in all, eyes the size of panel 1”." },
    tip: { ko: "한 번에 네 장을 받으면 반드시 하나는 어긋납니다. 어긋난 곳을 짚어 주게 하는 게 빠릅니다.", en: "Four at once always drifts somewhere. Ask it to name where." }
  },

  /* ── 쇼츠 · 영상 대본 ── */
  {
    id: "video-shorts", cat: "shorts",
    t: { ko: "45초 쇼츠 대본, 표로", en: "A 45-second Shorts script as a table" },
    use: { ko: "글은 있는데 영상으로 못 바꿀 때", en: "You have the post but not the video" },
    b: {
      ko: "아래 글을 45초 쇼츠 대본으로 바꿔 줘.\n\n· 글: [붙여넣기]\n· 0~3초 훅: 말로 하는 한 문장\n· 3~20초 본문: 장면 두 개\n· 20~45초: 마무리 한 장면 + 저장·팔로우 부담 없는 한 줄\n· 표로: 시간 / 화면에 보이는 것 / 자막(15자 이내) / 촬영 팁\n· 휴대폰 하나로 찍을 수 있는 범위에서\n· 자막에 없는 말은 하지 않게\n\n마지막에 “이 대본에서 찍기 어려운 컷”을 하나 짚어 줘.",
      en: "Turn the post below into a 45-second script.\n\n· Post: [paste]\n· 0–3s hook, one spoken line\n· 3–20s body, two scenes\n· 20–45s close plus one light nudge to save or follow\n· Table: time / what is on screen / caption under 15 characters / shooting tip\n· Only what one phone can shoot\n· No narration beyond the captions\n\nFinish by naming one shot that would be hard to get."
    },
    inp: { ko: "글: 비 오는 날 창가 자리에서 라테. 우유 거품기 청소 이야기. 8시에 열었는데 9시까지 손님이 없었다.", en: "A post about a rainy window seat, cleaning the frother, and opening at eight with nobody until nine." },
    out: { ko: "0-3초 | 젖은 창문 클로즈업 | “비 오는 날, 창가 자리 비어 있습니다” | 창문에 초점, 손은 안 나오게\n3-12초 | 잔에 라테를 따르는 손 | “오늘 아침 8시에 열었는데” | 위에서 내려찍기, 30cm\n12-20초 | 거품기 닦는 모습 | “9시까지 아무도 안 왔어요” | 소리 없이, 자막으로만\n20-32초 | 창가 자리에 앉은 잔 | “그래서 오늘은 조용합니다” | 창밖 초점 흐리게\n32-45초 | 가게 입구 | “비 오면 창가, 미리 말해 주세요” | 저장 유도 한 줄\n찍기 어려운 컷: 거품기 닦는 장면 — 손이 젖어 폰을 잡기 어렵습니다. 삼각대를 쓰세요.", en: "0–3s | close on a wet window | “Rainy day, the window seat is free” | focus on the glass, hands out\n3–12s | pouring the latte | “Opened at eight” | top-down, 30cm\n12–20s | wiping the frother | “Nobody until nine” | silent, captions only\n20–32s | the cup at the window | “So it is quiet today” | outside out of focus\n32–45s | the doorway | “Rainy day? Ask us to hold the seat” | one nudge to save\nHard shot: wiping the frother — wet hands. Use a tripod." },
    tip: { ko: "“찍기 어려운 컷”을 물으면 현실적인 대본이 됩니다. 대부분 손이 젖거나 조명이 어두운 장면입니다.", en: "Asking for the hard shot keeps it real — usually wet hands or bad light." }
  },
  {
    id: "video-silent", cat: "shorts",
    t: { ko: "소리 없이 보는 15초", en: "Fifteen seconds with no sound" },
    use: { ko: "매장 안, 조용한 곳에서 볼 영상", en: "For watching in a quiet shop, sound off" },
    b: {
      ko: "소리 없이 봐도 이해되는 15초 영상을 기획해 줘.\n\n· 보여 줄 것: [체리에 물을 주는 아침, 잎에 맺힌 물방울, 바구니]\n· 3장면, 각 5초\n· 자막만으로 이야기가 이어지게 (한 장면에 한 줄, 12자 이내)\n· 첫 장면 1초 안에 눈에 들어올 움직임이 있어야 함\n· 음악 없이도 되게, 소리는 선택 사항으로\n\n표로: 초 / 화면 / 자막 / 왜 이 장면인지 한 줄. 그리고 “소리를 켰을 때 넣으면 좋은 소리” 3개.",
      en: "Plan a fifteen-second video that works with the sound off.\n\n· Show: [a morning watering cherries, droplets on leaves, a basket]\n· Three scenes, five seconds each\n· Captions alone must carry the story (one line per scene, under 12 characters)\n· Something must move within the first second\n· Work without music; sound optional\n\nTable: seconds / screen / caption / why this scene. Then three sounds worth adding if sound is on."
    },
    inp: { ko: "체리 농장, 6월 아침. 손은 나오지만 얼굴은 안 나오게.", en: "A cherry farm on a June morning. Hands may show, faces may not." },
    out: { ko: "0-5 | 물줄기가 잎에 닿는 순간 | “6월, 아침 6시” | 첫 1초에 물방울이 떨어져 움직임이 생김\n5-10 | 물방울 맺힌 잎 클로즈업 | “체리는 아직 초록” | 색 대비가 강해 눈이 머묾\n10-15 | 빈 바구니를 든 손 | “한 달 뒤에 채웁니다” | 다음을 기대하게 함\n소리: 물소리, 새소리, 바구니 손잡이 소리", en: "0–5 | water hitting leaves | “6am, June” | a droplet falls in the first second\n5–10 | macro of wet leaves | “Still green” | strong colour contrast holds the eye\n10–15 | hands with an empty basket | “Full in a month” | leaves something to expect\nSound: water, birds, the basket handle" },
    tip: { ko: "무음 영상은 첫 1초의 움직임이 전부입니다. 그 한 줄을 꼭 요구하세요.", en: "With sound off, the first second is everything. Ask for movement in it." }
  },
  {
    id: "video-hook", cat: "shorts",
    t: { ko: "첫 3초 훅 열 개", en: "Ten openings for the first three seconds" },
    use: { ko: "영상은 만들었는데 초반에 다 넘어갈 때", en: "The video is fine but everyone scrolls away" },
    b: {
      ko: "아래 영상의 첫 3초에 쓸 말 열 개를 만들어 줘.\n\n· 영상 내용: [무인카페에서 아침에 하는 일 세 가지]\n· 보는 사람: [동네에서 아침을 시작하는 사람]\n\n· 유형을 섞어서: 질문형 3 / 숫자형 3 / 반전형 2 / 장면 묘사형 2\n· 15자 안팎, 말로 했을 때 자연스럽게\n· “충격”, “역대급”, “꼭 보세요” 같은 낚시 표현 금지\n· 영상에 실제로 있는 내용만\n\n각 훅 옆에 “이 훅이 통할 시청자”를 한 줄로 적어 줘.",
      en: "Write ten ways to open the first three seconds.\n\n· Video: [three morning jobs in an unmanned cafe]\n· Viewer: [people starting their morning nearby]\n\n· Mix the types: three questions, three numbers, two twists, two scene descriptions\n· About 15 characters spoken aloud\n· No bait words like “shocking” or “you must see”\n· Only what is actually in the video\n\nBeside each, one line on who it would stop."
    },
    inp: { ko: "영상 60초. 오픈 준비, 원두 확인, 안내문 교체. 손님은 7시부터.", en: "A 60-second video: opening prep, checking beans, swapping the notice. Customers from seven." },
    out: { ko: "1 “7시에 문 열기 전에 뭘 할까요” — 궁금한 동네 주민\n2 “3가지만 하면 끝납니다” — 바쁜 자영업자\n3 “문은 열렸는데 커피가 없던 날” — 실패담을 좋아하는 사람\n4 “사장 없는 카페의 아침” — 무인매장에 관심 있는 사람\n… 10개 중 1·3번부터 테스트해 보세요.", en: "1 “What happens before we open at seven” — curious neighbours\n2 “Three jobs and we are done” — busy owners\n3 “The day we opened without coffee” — people who like honest failures\n4 “Morning in a shop with no staff” — the unmanned-curious\n… Test 1 and 3 first." },
    tip: { ko: "훅은 열 개 받고 둘만 씁니다. 하나 고르면 취향이 아니라 데이터가 아니라는 걸 기억하세요.", en: "Ten hooks, use two. Remember one pick is taste, not data." }
  },

  /* ── 여행 계획 ── */
  {
    id: "trip-route", cat: "travel",
    t: { ko: "2박 3일 동선, 이동 시간 포함", en: "A three-day route with travel times" },
    use: { ko: "가고 싶은 곳은 많은데 순서를 못 정할 때", en: "Too many places, no order" },
    b: {
      ko: "아래 조건으로 2박 3일 여행 동선을 짜 줘.\n\n· 어디: [전주]\n· 누구와: [50대 부부, 하루 8,000보 정도 걷기 가능]\n· 가고 싶은 곳: [한옥마을, 시장, 미술관, 근교 카페]\n· 숙소: [한옥마을 근처]\n· 이동: [자가용, 첫날 오전 도착]\n\n· 하루를 오전/오후/저녁으로 나누고, 이동 시간과 이동 수단을 적기\n· 식사는 “무엇을 먹을지”보다 “어디서 시간을 내는지”\n· 하루에 한 곳은 비워 두기\n· 확실하지 않은 영업시간은 “확인 필요”로 표시\n\n표로 정리하고 마지막에 “이 일정에서 가장 빡빡한 날”을 짚어 줘.",
      en: "Plan a three-day route.\n\n· Where: [Jeonju]\n· With: [a couple in their fifties, about 8,000 steps a day]\n· Want: [hanok village, market, museum, a cafe outside town]\n· Stay: [near the hanok village]\n· Travel: [own car, arriving first morning]\n\n· Split each day into morning, afternoon, evening, with travel time and mode\n· Say where the time goes for meals, not what to eat\n· Leave one slot empty each day\n· Mark uncertain opening hours “needs checking”\n\nAs a table, then name the tightest day."
    },
    inp: { ko: "11월 말 주말. 비 예보 30%. 자가용. 예산은 하루 15만원 안쪽.", en: "A late-November weekend, 30% chance of rain, own car, under 150,000 won a day." },
    out: { ko: "1일 오전: 한옥마을 도착(주차 20분) → 오후: 시장(도보 12분) → 저녁: 숙소 근처\n2일 오전: 미술관(차 15분) → 오후: 근교 카페(차 25분) → 저녁: 비우기\n3일 오전: 한옥마을 산책 → 오후: 귀가\n가장 빡빡한 날: 2일. 미술관 관람 2시간 + 이동 40분이 겹칩니다. 미술관을 1일 오후로 옮기면 하루가 가벼워집니다.", en: "Day 1 morning: arrive, park (20 min); afternoon: market (12 min walk); evening: near the stay\nDay 2 morning: museum (15 min drive); afternoon: cafe outside town (25 min); evening: free\nDay 3 morning: walk the village; afternoon: home\nTightest: day 2 — two hours in the museum plus 40 minutes of driving. Move the museum to day 1 afternoon." },
    tip: { ko: "“가장 빡빡한 날”을 물으면 일정이 실제로 걸어지는지 보입니다. 그날을 고치세요.", en: "Naming the tightest day shows whether the plan walks. Fix that day." }
  },
  {
    id: "trip-rain", cat: "travel",
    t: { ko: "비 오는 날 대체 일정", en: "A wet-weather plan B" },
    use: { ko: "야외 일정이 많은데 비 예보가 있을 때", en: "An outdoor trip with rain forecast" },
    b: {
      ko: "아래 일정에서 비가 오면 바꿀 수 있는 대체안을 만들어 줘.\n\n· 원래 일정: [붙여넣기]\n· 날씨: [토요일 오후 비 60%]\n· 조건: [차 있음, 아이 없음, 걷기 오래는 싫음]\n\n· 비가 오는 시간대만 바꾸는 안 ① 과 하루 전체를 바꾸는 안 ②\n· 각 대안: 장소, 이동 시간, 실내인지, 예약이 필요한지\n· 실내 후보는 확실한 곳만, 애매하면 “후보”로 표시\n· 취소 비용이 생기는 예약은 미리 표시\n\n표로 보여 주고, “언제 결정하면 늦지 않는지” 시각을 알려 줘.",
      en: "Make a rain plan for the itinerary below.\n\n· Original: [paste]\n· Weather: [60% rain Saturday afternoon]\n· Constraints: [car, no children, not much walking]\n\n· One version that swaps only the wet hours, one that swaps the whole day\n· Each: place, travel time, indoors or not, whether booking is needed\n· Only certain indoor options; mark doubtful ones “candidate”\n· Flag anything with a cancellation fee\n\nAs a table, then tell me the time by which I must decide."
    },
    inp: { ko: "토요일 오후 한옥마을 산책 + 야시장. 일요일 오전 귀가.", en: "Saturday afternoon: village walk and night market; Sunday morning: home." },
    out: { ko: "비 오는 오후만 바꾸기: 한옥마을 실내 전시 2곳(도보 8분), 야시장은 지붕 있는 구간만\n하루 바꾸기: 시내 미술관(차 15분) + 실내 시장\n예약 필요: 없음 / 취소 비용: 없음\n결정 시각: 토요일 오전 10시 — 그때 레이더를 보고 정하세요.", en: "Swap the wet hours: two indoor exhibitions in the village (8 min walk); only the covered part of the night market\nSwap the day: city museum (15 min drive) plus an indoor market\nBooking: none / cancellation: none\nDecide by: 10am Saturday — check the radar then." },
    tip: { ko: "“결정 시각”을 물어 두면 여행지에서 우왕좌왕하지 않습니다.", en: "Ask for the decision time and you will not dither on the day." }
  },

  /* ── 공부 · 교육 ── */
  {
    id: "study-explain", cat: "study",
    t: { ko: "어려운 개념을 내 말로", en: "A hard idea in plain words" },
    use: { ko: "용어는 외웠는데 설명을 못 할 때", en: "You know the word but cannot explain it" },
    b: {
      ko: "[검색 증강 생성(RAG)]을 세 단계로 설명해 줘.\n\n① 초등학생에게 말하듯 두 문장\n② 비유 하나 (내 일상: [동네 도서관 사서])\n③ 실제로 쓰는 장면 하나\n④ 자주 헷갈리는 것 한 가지\n\n어려운 말은 쓰지 말고, 꼭 써야 하면 괄호 안에 풀어 써 줘.\n마지막에 “내가 이걸 제대로 이해했는지 확인할 질문” 하나를 내게 물어봐 줘.",
      en: "Explain [retrieval-augmented generation] in three steps.\n\n(1) Two sentences, as to a child\n(2) One analogy from my world: [a neighbourhood librarian]\n(3) One real situation where it is used\n(4) One thing people mix it up with\n\nNo jargon; if a term is unavoidable, gloss it in brackets.\nFinish by asking me one question that shows whether I actually understood."
    },
    inp: { ko: "강의에서 나온 말인데 설명을 못 하겠다. 도서관 사서 비유로 듣고 싶다.", en: "Heard it in a lecture, cannot explain it. A librarian analogy please." },
    out: { ko: "① AI가 답하기 전에 내 자료를 먼저 찾아 읽고 그 안에서 답을 만드는 방법입니다. 기억에 의존하지 않습니다.\n② 사서가 손님 질문을 받으면 기억으로 답하지 않고 서가에서 책을 찾아 펴 보는 것과 같습니다.\n③ 회사 규정집을 올려 두고 “휴가 며칠 남았나”를 물으면, 규정집 해당 줄을 찾아 답합니다.\n④ 검색과 헷갈리기 쉽습니다. 검색은 자료를 찾아 주는 것, RAG는 찾은 자료로 답까지 만드는 것입니다.\n확인 질문: “그럼 자료에 없는 질문을 하면 어떻게 될까요?”", en: "(1) The AI looks through your own documents before answering, instead of relying on memory.\n(2) Like a librarian who walks to the shelf rather than answering from memory.\n(3) Upload the staff handbook, ask how many leave days are left, and it quotes the line.\n(4) Easily confused with search: search finds, RAG answers from what it found.\nCheck: “So what happens if I ask something the documents never cover?”" },
    tip: { ko: "“확인 질문”을 받아 두면 외운 느낌과 아는 느낌을 구분할 수 있습니다.", en: "Take the check question: it separates having read from having understood." }
  },
  {
    id: "study-plan", cat: "study",
    t: { ko: "3주 계획, 하루 20분", en: "Three weeks, twenty minutes a day" },
    use: { ko: "시험이나 자격증 공부를 다시 시작할 때", en: "Restarting study for an exam" },
    b: {
      ko: "[정보처리기사 실기]를 3주 뒤 시험에 맞춰 공부하려 해. 하루 20분씩.\n\n· 지금 상태: [전공자 아님, 4년 전 필기 합격, 요즘은 거의 못 봄]\n· 약한 부분: [SQL, 프로그래밍 언어 활용]\n· 하루 20분 중 10분은 문제 풀이에 쓰고 싶음\n\n① 3주 × 7일 계획표 (요일별 주제)\n② 매일 20분 구성 (읽기 8분 / 문제 10분 / 정리 2분)\n③ 1주·2주·3주 끝에 볼 자체 점검 3문항씩\n④ 하루를 놓쳤을 때의 만회 규칙\n\n표로. 계획을 예쁘게 꾸미지 말고 지킬 수 있게.",
      en: "I have a practical exam in three weeks and twenty minutes a day.\n\n· Now: [not a CS graduate, passed the written four years ago, barely touched since]\n· Weak: [SQL, programming language use]\n· Ten of the twenty minutes should be questions\n\n(1) A 3 × 7 plan by day and topic (2) the shape of each 20 minutes (8 read / 10 questions / 2 tidy) (3) three self-check questions at the end of each week (4) a rule for a missed day\n\nAs a table. Keep it plain enough to follow."
    },
    inp: { ko: "출퇴근 지하철에서 공부. 출력물보다 폰으로 본다. 시험은 토요일 오전.", en: "Studying on the commute, on a phone rather than print. Exam on Saturday morning." },
    out: { ko: "1주: SQL 기본(1-3일), 조인(4-5일), 6일 복습, 7일 점검\n매일 20분: 어제 틀린 문제 3개(8분) → 새 문제 4개(10분) → 틀린 이유 한 줄(2분)\n2주: 프로그래밍 활용 / 3주: 기출 + 오답만\n놓친 날 규칙: 다음 날 새 문제를 늘리지 말고, 그날 몫만 한다. 밀린 것은 일요일에 몰아 하지 않는다.\n1주 점검: 조인 두 개를 말로 설명할 수 있는가 / 서브쿼리 예제 하나를 직접 쓸 수 있는가 / 틀린 문제 유형이 무엇인가", en: "Week 1: SQL basics (days 1–3), joins (4–5), review (6), check (7)\nEach 20 minutes: three wrong questions from yesterday (8), four new (10), one line on why (2)\nWeek 2: programming; week 3: past papers and mistakes only\nMissed day: do that day's share only; never double up on Sunday\nWeek 1 check: can I explain two joins aloud / write one subquery / name the pattern in my mistakes" },
    tip: { ko: "“놓쳤을 때의 규칙”을 꼭 넣으세요. 계획이 무너지는 건 대개 하루를 놓쳐서입니다.", en: "Include the missed-day rule. Plans break on one missed day, not on the exam." }
  },

  /* ── 번역 · 외국어 ── */
  {
    id: "lang-mail", cat: "lang",
    t: { ko: "한국어를 자연스러운 영어 메일로", en: "Korean into a natural English email" },
    use: { ko: "숙소·업체에 영어로 문의해야 할 때", en: "Writing to a hotel or supplier in English" },
    b: {
      ko: "아래 내용을 영어 이메일로 써 줘.\n\n· 받는 사람: [숙소 예약 담당자]\n· 하고 싶은 말: [2월 3일 도착 예정인데 체크인 시간 전에 짐을 맡길 수 있는지, 조식 시간이 몇 시인지]\n· 톤: 정중하지만 짧게, 5문장 안쪽\n· 제목 한 줄 포함\n· 직역투 금지, 미국식 일상 표현으로\n· 확답을 요구하는 문장은 하나만\n\n마지막에 “이 메일에서 오해될 수 있는 문장” 한 곳을 짚어 줘.",
      en: "Write the email below in English.\n\n· To: [the booking contact at a hotel]\n· Say: [arriving Feb 3, can we leave luggage before check-in, and what time is breakfast]\n· Tone: polite and short, under five sentences\n· Include a subject line\n· No literal translation; idiomatic American English\n· Only one sentence that asks for a firm answer\n\nFinish by flagging one sentence that could be misread."
    },
    inp: { ko: "2월 3일 도착. 체크인은 오후 3시로 알고 있음. 오전 10시쯤 도착 예정. 조식 시간 확인 필요.", en: "Arriving Feb 3, check-in known to be 3pm, arriving around 10am, need breakfast times." },
    out: { ko: "Subject: Arriving Feb 3 — luggage and breakfast\n\nHello,\nWe are arriving on February 3 around 10am, before the 3pm check-in. Could we leave our bags with you until the room is ready? Also, what time is breakfast served?\nThank you,\n[Name]\n\n오해될 수 있는 문장: “Could we leave our bags” — 짐 보관이 무료인지 물어보려면 “Is there a charge?”를 한 줄 붙이세요.", en: "Subject: Arriving Feb 3 — luggage and breakfast\n\nHello,\nWe arrive on February 3 around 10am, before the 3pm check-in. Could we leave our bags with you until the room is ready? Also, what time is breakfast served?\nThank you,\n[Name]\n\nCould be misread: “Could we leave our bags” does not ask whether it costs anything — add “Is there a charge?”" },
    tip: { ko: "영어 메일은 문장을 줄이는 게 예의입니다. 5문장을 넘기면 답이 늦어집니다.", en: "Shorter is politer in English email. Past five sentences, replies slow down." }
  },
  {
    id: "lang-phrase", cat: "lang",
    t: { ko: "내 상황 영어 표현 스무 개", en: "Twenty phrases for my own situation" },
    use: { ko: "교재 표현이 내 생활과 안 맞을 때", en: "Textbook phrases that do not fit your life" },
    b: {
      ko: "내 상황에서 바로 쓰는 영어 표현 20개를 만들어 줘.\n\n· 상황: [무인카페와 스터디카페를 운영, 외국인 손님 응대, 체험농장 준비]\n· 수준: [중급, 말은 되는데 자연스럽지 않음]\n\n· 표로: 상황 / 한국어 / 영어 / 발음 힌트 / 쓰면 안 되는 상황\n· 실제로 입에 붙는 짧은 문장으로 (12단어 이내)\n· 교재체(“I would like to”)보다 실제 대화체, 단 무례하지 않게\n\n마지막에 “이 중 한국인이 자주 틀리는 것 3개”와 바른 표현을 짚어 줘.",
      en: "Give me twenty English phrases for my own situations.\n\n· Context: [running an unmanned cafe and a study cafe, serving foreign customers, preparing a farm]\n· Level: [intermediate — speaks, but not naturally]\n\n· Table: situation / Korean / English / pronunciation hint / when not to use it\n· Short enough to say (under 12 words)\n· Real spoken English rather than textbook, without being rude\n\nFinish with three that Korean speakers commonly get wrong, and the right version."
    },
    inp: { ko: "외국인 손님이 카드 결제, 와이파이, 화장실을 물을 때가 많다.", en: "Foreign customers often ask about card payment, wifi and the toilet." },
    out: { ko: "카드 결제 | 카드 되세요? | Do you take card? | 데 유 테이크 카드 | 현금만 받는 곳에서는 쓰지 않기\n와이파이 | 와이파이 비번이 뭐예요? | What is the wifi password? | 왓 이즈 더 와이파이 패스워드\n자리 | 앉으셔도 돼요 | Grab any seat. | 그랩 애니 시트 | 예약석이 있을 때는 쓰지 않기\n자주 틀리는 것: “Do you take card?”를 “Can I card?”로 옮기는 것 / “Grab any seat”를 손님에게 명령조로 들릴까 봐 “Please, grab any seat”로 / “wifi”를 “wifi-y”처럼 발음하는 것", en: "Card | Do you take card? | 데 유 테이크 카드 | not where cash only\nWifi | What is the wifi password? | 왓 이즈 더 와이파이 패스워드\nSeating | Grab any seat. | 그랩 애니 시트 | not with reserved tables\nCommon slips: “Can I card?” instead of “Do you take card?” / “Grab any seat” softened with “Please” / “wifi” pronounced “wifi-y”" },
    tip: { ko: "“쓰면 안 되는 상황” 칸이 실수를 막습니다. 표현만 외우면 엉뚱한 자리에서 나옵니다.", en: "The “when not to use it” column prevents the worst mistakes." }
  },
  {
    id: "lang-check", cat: "lang",
    t: { ko: "번역 검수, 직역과 자연스러움 비교", en: "Check a translation: literal vs natural" },
    use: { ko: "AI가 옮긴 영어가 어색해 보일 때", en: "The AI's English reads oddly" },
    b: {
      ko: "아래 한국어 원문과 영어 번역을 비교해 줘.\n\n[원문]\n[번역]\n\n① 뜻이 달라진 곳 (원문 / 번역 / 왜)\n② 문법 오류\n③ 어색한 표현 — 자연스러운 대안과 함께\n④ 원문에 없는데 더해진 내용\n⑤ 빠진 내용\n\n번역을 통째로 다시 쓰지 말고, 문제가 있는 부분만 짚어 줘.\n마지막에 “이 번역을 그대로 보내도 되는지” 예/아니오로 답해 줘.",
      en: "Compare the Korean original with the English translation.\n\n[Original]\n[Translation]\n\n(1) Where the meaning shifted (original / translation / why) (2) grammar errors (3) awkward phrasing with a natural alternative (4) anything added (5) anything dropped\n\nDo not rewrite the whole thing — only the parts with problems.\nFinish with a yes or no: is this safe to send as it stands?"
    },
    inp: { ko: "원문: “주차는 건물 뒤편에 있으며, 만차일 경우 도로변 주차를 이용해 주세요.” 번역: “Parking is behind the building, if full please use the roadside parking.”", en: "Original: parking is behind the building; if full, use the roadside. Translation: “Parking is behind the building, if full please use the roadside parking.”" },
    out: { ko: "① 뜻 변화 없음 ② 문법: 쉼표만으로 두 문장을 이어 붙였습니다(comma splice) ③ “roadside parking” → “parking on the street”가 자연스럽습니다 ④ 더해진 것 없음 ⑤ 빠진 것 없음\n수정안: “Parking is behind the building. If the lot is full, please park on the street.”\n보내도 되나: 아니오 — 쉼표 연결만 고치면 됩니다.", en: "(1) No shift (2) Grammar: two sentences joined by a comma (3) “roadside parking” reads stiff — “parking on the street” (4) nothing added (5) nothing dropped\nFix: “Parking is behind the building. If the lot is full, please park on the street.”\nSafe to send: No — one comma fix and it is." },
    tip: { ko: "“통째로 다시 쓰지 말고 짚어만 달라”가 중요합니다. 그러면 내가 배우면서 고칩니다.", en: "Ask it to point, not rewrite. Then you learn while fixing." }
  },

  /* ── 엑셀 · 자료 분석 ── */
  {
    id: "data-receipt", cat: "data",
    t: { ko: "영수증·카드 내역을 표로", en: "Receipts into a table" },
    use: { ko: "경비 정리, 부가세 신고 준비", en: "Expense tidy-up before tax" },
    b: {
      ko: "아래 영수증·카드 내역을 표로 정리해 줘.\n\n[붙여넣기 또는 사진]\n\n① 표: 날짜 / 사용처 / 금액 / 부가세 포함 여부 / 분류 / 메모\n② 합계와 분류별 비중\n③ 세금 신고 때 헷갈릴 항목 3개와 이유\n④ 읽기 어려운 값은 “확인 필요”로\n\n숫자는 원문에 있는 것만 쓰고, 합계는 계산식을 함께 보여 줘.\n마지막에 “이 중 개인 사용으로 보일 수 있는 항목”을 짚어 줘.",
      en: "Turn the receipts below into a table.\n\n[Paste or photo]\n\n(1) Columns: date / merchant / amount / VAT included / category / note (2) totals and share by category (3) three items that get confusing at tax time, and why (4) mark unclear values “needs checking”\n\nUse only numbers in the source and show the arithmetic for totals.\nFinish by flagging anything that could look like personal use."
    },
    inp: { ko: "11월 카드 12건. 원두 도매 2건, 생활용품 3건, 주유 2건, 식비 5건.", en: "Twelve card entries in November: two wholesale coffee, three household, two fuel, five meals." },
    out: { ko: "표 12줄 / 합계 1,284,000원 (원두 412,000 + 생활 96,000 + 주유 148,000 + 식비 628,000)\n비중: 식비 48.9%, 원두 32.1%, 주유 11.5%, 생활 7.5%\n헷갈릴 항목: 생활용품(매장용인지 집용인지), 식비(손님 접대인지 직원 식사인지), 주유(사업용 차량인지)\n개인 사용으로 보일 수 있는 것: 생활용품 3건 중 2건은 매장 사용 근거를 남기세요.", en: "Twelve rows / total 1,284,000 (beans 412,000 + household 96,000 + fuel 148,000 + meals 628,000)\nShare: meals 48.9%, beans 32.1%, fuel 11.5%, household 7.5%\nConfusing: household (shop or home), meals (client or staff), fuel (business vehicle)\nPersonal-use risk: keep proof that two of the three household buys were for the shop." },
    tip: { ko: "“개인 사용으로 보일 항목”을 물으면 신고 전에 근거를 챙기게 됩니다.", en: "Asking what could look personal makes you keep the receipts that matter." }
  },
  {
    id: "data-formula", cat: "data",
    t: { ko: "엑셀 수식, 설명과 함께", en: "An Excel formula, explained" },
    use: { ko: "하고 싶은 계산은 있는데 수식을 모를 때", en: "You know the calculation, not the formula" },
    b: {
      ko: "엑셀에서 [B열 날짜가 이번 달인 행의 D열 금액 합계]를 구하려 해.\n\n· 시트 구조: [A 상호, B 날짜, C 분류, D 금액, E 메모]\n· 엑셀 버전: [마이크로소프트 365]\n\n① 쓸 수 있는 수식 두 가지\n② 각 수식이 무슨 뜻인지 한 줄씩 (어느 부분이 어떤 역할인지)\n③ 흔한 오류 — 날짜가 글자로 저장된 경우, 빈 행, 합계 행 포함\n④ 이 수식을 다른 시트에서 쓸 때 고칠 곳\n\n수식은 복사해서 붙일 수 있게 한 줄로 주고, 설명은 표로.",
      en: "In Excel I want [the sum of column D where the date in column B is this month].\n\n· Structure: [A shop, B date, C category, D amount, E note]\n· Version: [Microsoft 365]\n\n(1) Two formulas that would work (2) one line per part on what it does (3) common failures — dates stored as text, blank rows, a total row (4) what to change when using it on another sheet\n\nGive each formula on one line to copy, and the explanation as a table."
    },
    inp: { ko: "월별 합계를 시트 위쪽에 두고 싶다. 날짜는 2026-11-03 형식으로 입력했다.", en: "Monthly totals at the top of the sheet; dates typed as 2026-11-03." },
    out: { ko: "① =SUMIFS(D:D,B:B,\">=\"&DATE(2026,11,1),B:B,\"<\"&DATE(2026,12,1))\n② =SUMPRODUCT((TEXT(B2:B500,\"YYYYMM\")=\"202611\")*D2:D500)\n설명: SUMIFS는 조건 두 개(시작일 이상, 다음 달 미만)로 더합니다. SUMPRODUCT는 날짜를 연월 글자로 바꿔 비교합니다.\n오류: 날짜가 글자면 SUMIFS가 0을 냅니다 → 날짜 서식으로 바꾸세요. 합계 행이 범위에 들어가면 두 번 더해집니다.\n다른 시트: D:D, B:B를 '11월'!D:D처럼 시트 이름을 붙입니다.", en: "1 =SUMIFS(D:D,B:B,\">=\"&DATE(2026,11,1),B:B,\"<\"&DATE(2026,12,1))\n2 =SUMPRODUCT((TEXT(B2:B500,\"YYYYMM\")=\"202611\")*D2:D500)\nSUMIFS adds between two dates; SUMPRODUCT compares the month as text.\nFailure: text dates give 0 — convert to date format; a total row inside the range doubles.\nOther sheet: prefix ranges with 'Nov'!D:D." },
    tip: { ko: "“흔한 오류”를 함께 물으면 0원이 나오는 이유를 스스로 찾게 됩니다.", en: "Ask for the common failures and you will find why it returns zero." }
  },
  {
    id: "data-insight", cat: "data",
    t: { ko: "숫자에서 눈에 띄는 것 셋", en: "Three things standing out in the numbers" },
    use: { ko: "표는 있는데 무슨 말인지 모를 때", en: "You have the table, not the story" },
    b: {
      ko: "아래 표에서 눈에 띄는 것 세 가지를 찾아 줘.\n\n[표 붙여넣기]\n\n· 각 항목: 무엇이 눈에 띄는지 / 숫자 근거 / 왜 그럴 수 있는지(추정이라고 표시) / 확인해 볼 것\n· 전체 평균만 보지 말고, 평균을 벗어난 줄을 찾기\n· 표본이 작으면 “표본이 작아 단정할 수 없음”을 먼저 말하기\n· 숫자로 확인되지 않는 해석은 하지 않기\n\n마지막에 “이 표로는 알 수 없는 것” 두 가지.",
      en: "Find three things that stand out in the table below.\n\n[Paste]\n\n· Each: what stands out / the numbers behind it / why it might be (labelled as a guess) / what to check next\n· Look past the average for the rows that break it\n· If the sample is small, say so before anything else\n· Draw no conclusion the numbers do not support\n\nFinish with two things this table cannot tell you."
    },
    inp: { ko: "11월 4주간 요일별 방문자: 월 32, 화 28, 수 41, 목 39, 금 66, 토 98, 일 74. 10월 같은 기간: 금 58, 토 92, 일 71.", en: "November weekly visitors by day: Mon 32, Tue 28, Wed 41, Thu 39, Fri 66, Sat 98, Sun 74. October same period: Fri 58, Sat 92, Sun 71." },
    out: { ko: "1. 금요일이 10월 58 → 11월 66으로 늘었습니다(+14%). 토·일은 거의 그대로입니다. 추정: 금요일 저녁 프로그램 효과. 확인: 프로그램 시작일과 방문 시간대.\n2. 화요일이 가장 낮습니다(28). 평일 평균 35보다 7명 적습니다. 추정: 인근 대학 수업일. 확인: 시간대별 그래프.\n3. 주말 집중도가 10월보다 조금 낮아졌습니다(주말 비중 57% → 52%).\n알 수 없는 것: 손님 1인당 지출, 신규인지 재방문인지.", en: "1. Friday rose from 58 to 66 (+14%) while Saturday and Sunday held. Guess: the Friday evening programme. Check: its start date and visit hours.\n2. Tuesday is lowest at 28, seven below the weekday average of 35. Guess: class schedules nearby. Check: hourly counts.\n3. Weekend concentration fell slightly (57% to 52%).\nCannot tell: spend per visitor, new versus returning." },
    tip: { ko: "“알 수 없는 것”을 받아 두면 표에 없는 자료를 찾게 됩니다. 그게 진짜 분석입니다.", en: "The “cannot tell” list points to the data you are missing — that is the analysis." }
  },

  /* ── 홈페이지 · 코딩 ── */
  {
    id: "web-onepage", cat: "web",
    t: { ko: "한 페이지 소개 사이트", en: "A one-page site" },
    use: { ko: "간단한 소개 페이지가 급히 필요할 때", en: "A simple introduction page, quickly" },
    b: {
      ko: "한 페이지짜리 소개 사이트를 HTML 한 파일로 만들어 줘.\n\n· 누구: [안성에서 체험농장을 준비하는 사람]\n· 무엇을: [체험 프로그램 소개와 예약 문의]\n· 넣을 것: 이름, 한 줄 소개, 프로그램 3개, 오시는 길, 문의\n· 조건: 외부 라이브러리 없이 한 파일, 휴대폰에서 안 깨지게, 사진 없이 색과 글자로만\n· 하지 말 것: 실제 주소·전화번호 대신 [ ] 자리표시자, 없는 후기·수상\n\n완성 코드와 함께 ① 어디를 고치면 문구가 바뀌는지 ② 공개할 때 필요한 것 두 가지를 세 줄로 알려 줘.",
      en: "Build a one-page introduction site as one HTML file.\n\n· Who: [someone preparing a pick-your-own farm in Korea]\n· What: [programmes and booking enquiries]\n· Include: name, one-line pitch, three programmes, how to get there, contact\n· Rules: one file, no external libraries, works on a phone, no photos — colour and type only\n· Do not invent addresses, reviews or awards; use [placeholders]\n\nWith the code, three lines on where to edit the copy and what you need before publishing."
    },
    inp: { ko: "프로그램: 체리 따기(6월), 허브 산책(연중), 어린이 텃밭(4~10월). 문의는 이메일만.", en: "Programmes: cherry picking (June), herb walk (all year), children's garden (April–October). Email only." },
    out: { ko: "(HTML 한 파일, 약 120줄) 머리 부분 h1 · 한 줄 소개 · 프로그램 카드 3개(grid, 좁은 화면에서 1열) · 오시는 길 · 문의 버튼\n고칠 곳: 문구는 <main> 안의 h1·p, 프로그램은 .card 세 개, 색은 :root의 --c1 하나만 바꾸면 전체가 바뀝니다.\n공개 전: ① 실제 주소·연락처 채우기 ② 호스팅(깃허브 페이지 등)에 파일 올리고 주소 확인", en: "(One HTML file, about 120 lines) header, pitch, three programme cards (grid, one column on narrow screens), directions, contact button\nEdit: copy in the h1 and p tags inside main, programmes in the three .card blocks, colour in one :root variable\nBefore publishing: fill in the real address and contact, upload the file to a host and check the URL" },
    tip: { ko: "색을 변수 하나로 받아 두세요. 나중에 분위기를 바꿀 때 한 줄만 고치면 됩니다.", en: "Ask for one colour variable. Changing the mood later is one line." }
  },
  {
    id: "web-error", cat: "web",
    t: { ko: "에러 메시지로 원인 찾기", en: "Find the cause from an error message" },
    use: { ko: "코드가 안 돌아가는데 어디가 틀렸는지 모를 때", en: "It will not run and you cannot see where" },
    b: {
      ko: "아래 에러가 났어. 원인을 찾아 줘.\n\n[에러 메시지 전문 붙여넣기]\n[관련 코드 20줄]\n\n① 가장 가능성 높은 원인 (한 문장)\n② 그렇게 보는 이유 — 에러 메시지의 어느 부분 때문인지\n③ 고치는 방법 두 가지 (코드 한 줄로)\n④ 확인 방법 — 무엇을 실행하면 고쳐졌는지 알 수 있는지\n\n확실하지 않으면 “확신 없음”이라고 먼저 말하고, 추측을 사실처럼 쓰지 마.",
      en: "Here is the error. Find the cause.\n\n[Paste the whole message]\n[Paste 20 relevant lines]\n\n(1) The most likely cause, in one sentence (2) why — which part of the message points there (3) two fixes, one line of code each (4) how to check: what to run to know it is fixed\n\nIf you are unsure, say “not certain” first and do not write a guess as fact."
    },
    inp: { ko: "TypeError: Cannot read properties of undefined (reading 'map') — 배열을 불러온 뒤 map을 돌리는 부분.", en: "TypeError: Cannot read properties of undefined (reading 'map') — a map call after loading an array." },
    out: { ko: "원인: 데이터가 아직 도착하기 전에 map을 호출했습니다.\n이유: “of undefined”는 값이 비어 있다는 뜻이고, 읽으려 한 것이 map입니다.\n고치기: ① items || [] 로 감싸기 ② 불러온 뒤에만 그리도록 if (!items) return; 추가\n확인: 새로고침했을 때 콘솔에 같은 에러가 없고 화면이 비어 있지 않으면 고쳐진 것입니다.", en: "Cause: map ran before the data arrived.\nWhy: “of undefined” means the value was empty and the thing being read was map.\nFix: wrap with items || [], or return early with if (!items) return;.\nCheck: reload; if the console shows no such error and the view is not empty, it is fixed." },
    tip: { ko: "“확인 방법”을 반드시 받으세요. 고쳤는지 아닌지를 알 수 있어야 다음으로 갑니다.", en: "Always take the “how to check”. You need to know it is fixed before moving on." }
  }
);

/* ───────── 🎓 초보자 6단계 ───────── */
const COURSE = [
  {
    id: "c1", n: 1, emoji: "🌱",
    t: { ko: "AI가 무엇인지 이해하기", en: "Understand what AI is" },
    why: {
      ko: "AI는 답을 아는 기계가 아니라, 다음에 올 말을 확률로 고르는 기계입니다. 그래서 그럴듯하게 틀립니다. 이 한 가지를 알고 시작하면 실망이 줄고, 확인하는 습관이 먼저 생깁니다.",
      en: "AI is not a machine that knows the answer; it picks the most likely next words. That is why it can be confidently wrong. Knowing this first saves you disappointment and builds the habit of checking."
    },
    steps: [
      { ko: "쓰던 AI 하나를 엽니다(ChatGPT·Claude·Gemini 중 아무거나).", en: "Open one AI you already use — any of ChatGPT, Claude, Gemini." },
      { ko: "로그인되어 내 이름이나 프로필이 보이는지 확인합니다.", en: "Check that your name or profile shows you are signed in." },
      { ko: "“너는 무엇을 잘하고, 무엇을 잘 못하니?”라고 물어봅니다.", en: "Ask: “What are you good at, and what are you bad at?”" },
      { ko: "답 중에서 과장처럼 들리는 부분을 하나 골라, 같은 것을 다시 물어 확인합니다.", en: "Pick one claim that sounds like a boast and ask again to see if it holds." }
    ],
    practice: {
      ko: "너는 무엇을 잘하고, 무엇을 잘 못하니? 내가 [동네 카페를 운영]하는 사람이라고 할 때, 네가 도와줄 수 있는 일 3가지와 도와주면 안 되는 일 2가지를 솔직하게 나눠서 알려 줘. 잘하는 척하지 말고.",
      en: "What are you good at and what are you bad at? I [run a neighbourhood cafe]. Give me three things you can genuinely help with and two you should not, and do not pretend."
    },
    tip: { ko: "첫날 목표는 “잘 쓰기”가 아니라 “믿을 것과 확인할 것을 나누기”입니다.", en: "Day one is not about using it well; it is about knowing what to trust and what to check." }
  },
  {
    id: "c2", n: 2, emoji: "❓",
    t: { ko: "좋은 질문 vs 나쁜 질문", en: "A good question versus a bad one" },
    why: {
      ko: "같은 AI라도 질문에 따라 답이 완전히 달라집니다. 좋은 질문에는 네 가지가 들어 있습니다 — 내가 누구인지, 무엇을 하려는지, 어떤 형식으로 받고 싶은지, 무엇을 하면 안 되는지.",
      en: "The same AI gives completely different answers depending on the question. A good one carries four things: who you are, what you are doing, what form you want back, and what it must not do."
    },
    steps: [
      { ko: "나쁜 질문을 하나 적습니다. 예: “블로그 글 써 줘”.", en: "Write a bad question: “write me a blog post”." },
      { ko: "그 아래에 네 가지를 채워 좋은 질문으로 고칩니다.", en: "Fill in the four parts underneath to make it good." },
      { ko: "두 질문을 차례로 넣고 답을 나란히 놓고 봅니다.", en: "Send both, in order, and put the answers side by side." },
      { ko: "달라진 점을 내 말로 한 줄 적어 둡니다.", en: "Write one line, in your own words, on what changed." }
    ],
    practice: {
      ko: "아래 두 질문의 답을 각각 만들어서 나란히 보여 주고, 무엇이 달라졌는지 네가 설명해 줘.\n\n나쁜 질문: 블로그 글 써 줘.\n좋은 질문: 나는 [안성에서 무인카페를 운영]해. [주말에 손님이 몰려 평일이 비는 문제]를 다루는 글을, [동네 40~50대 여성]이 읽도록 800자로 써 줘. 첫 문장은 장면부터, 홍보는 마지막 두 줄만. 없는 사실은 쓰지 마.",
      en: "Answer both questions below, show them side by side, then explain what changed.\n\nBad: write me a blog post.\nGood: I [run an unmanned cafe]. Write 500 words for [women in their forties and fifties nearby] about [weekends are packed and weekdays are empty]. Open on a scene; only the last two lines may promote. Invent nothing."
    },
    tip: { ko: "질문 네 칸을 종이에 적어 두면, 어떤 AI를 쓰든 답이 좋아집니다.", en: "Write the four slots on paper and every AI answers better." }
  },
  {
    id: "c3", n: 3, emoji: "✍️",
    t: { ko: "글쓰기 실습 — 이메일·안내문·블로그", en: "Writing practice: email, notice, blog" },
    why: {
      ko: "가장 빨리 늘는 방법은 세 가지 글을 한 번씩 써 보는 것입니다. 짧은 이메일, 손님에게 붙이는 안내문, 남에게 보여 주는 블로그. 형식이 다르면 AI에게 시키는 법도 다릅니다.",
      en: "The fastest way in is one of each: a short email, a notice for the door, a blog post others will read. Different forms need different instructions."
    },
    steps: [
      { ko: "메일부터. 받는 사람과 하고 싶은 말 두 가지만 정합니다.", en: "Start with the email: the recipient and the two things you must say." },
      { ko: "안내문. 상황과 기한, 손님이 해야 할 행동을 적습니다.", en: "The notice: the situation, the date, what the customer must do." },
      { ko: "블로그. 내가 겪은 일 한 가지를 먼저 적습니다.", en: "The blog: one thing that actually happened to you." },
      { ko: "세 결과를 소리 내어 읽고, 입에 안 붙는 문장만 고쳐 달라고 합니다.", en: "Read all three aloud, then ask it to fix only the lines that do not sit in the mouth." }
    ],
    practice: {
      ko: "세 가지 글을 한 번에 써 줘. 각각 200자 안쪽, 존댓말, 상투어 금지.\n① [거래처에 견적서를 다음 주 월요일까지 보내 달라는 메일] ② [12월 1일부터 가격이 오른다는 매장 안내문] ③ [오늘 손님이 남긴 말에서 시작하는 블로그 첫 문단]\n\n세 글을 다 쓴 뒤, 내가 소리 내어 읽었을 때 걸릴 문장을 하나씩 짚어 줘.",
      en: "Write three pieces at once, each under 200 characters, polite, no stock phrases.\n(1) an email asking a supplier for a quote by next Monday (2) a shop notice that prices rise on December 1 (3) the first paragraph of a blog post starting from something a customer said today\n\nThen flag one line in each that would catch when read aloud."
    },
    tip: { ko: "“소리 내어 읽었을 때 걸리는 문장”을 물으면 AI 티가 가장 빨리 빠집니다.", en: "Asking what catches when read aloud removes the AI smell fastest." }
  },
  {
    id: "c4", n: 4, emoji: "🎨",
    t: { ko: "이미지 만들기 — 설명 공식", en: "Making images: the formula" },
    why: {
      ko: "그림은 재능이 아니라 설명에서 나옵니다. 다섯 칸만 채우면 됩니다 — 무엇이, 어디서, 빛, 구도, 재질. 그리고 “넣지 말 것”을 꼭 붙입니다. 손가락과 글자가 깨지는 문제도 이 칸들로 크게 줄어듭니다.",
      en: "An image comes from the description, not from talent. Five slots: what, where, light, framing, surface. Then say what to leave out. That is also what stops broken fingers and garbled text."
    },
    steps: [
      { ko: "이미지 AI를 엽니다(ChatGPT 이미지, Firefly 등).", en: "Open an image AI — ChatGPT images, Firefly, whichever you have." },
      { ko: "로그인과 남은 크레딧을 확인합니다.", en: "Check you are signed in and how many credits remain." },
      { ko: "다섯 칸을 한 줄씩 적어 넣습니다.", en: "Write the five slots, one line each." },
      { ko: "마음에 드는 한 장이 나올 때까지 “빛만 바꿔서”, “구도만 바꿔서”로 한 번에 하나씩 바꿉니다.", en: "Until one works, change one thing at a time: “same scene, different light”." }
    ],
    practice: {
      ko: "아래 다섯 칸으로 이미지를 만들어 줘.\n· 무엇이: [나무 테이블 위의 라테 한 잔] · 어디서: [비 내리는 창가] · 빛: [아침의 부드러운 옆빛, 왼쪽] · 구도: [테이블 높이에서 가까이] · 재질: [무광 도자기, 우유 거품의 결]\n· 넣지 말 것: 사람, 글자, 로고\n\n가로 3:2, 실사 사진처럼. 만든 뒤에 이 장면에서 어색한 부분을 한 줄로 알려 줘.",
      en: "Make an image from these slots.\n· What: [a latte on a wooden table] · Where: [beside a rainy window] · Light: [soft morning side light, left] · Framing: [close, table height] · Surface: [matte ceramic, foam texture]\n· Exclude: people, text, logos\n\n3:2 landscape, photographic. Then name one thing that looks off."
    },
    tip: { ko: "한 번에 다섯 개를 바꾸면 왜 좋아졌는지 모릅니다. 한 번에 하나만 바꾸세요.", en: "Change five things at once and you learn nothing. Change one." }
  },
  {
    id: "c5", n: 5, emoji: "📄",
    t: { ko: "PDF·문서 요약하기", en: "Summarising a PDF" },
    why: {
      ko: "문서를 넣고 바로 “요약해 줘”라고 하면 엉뚱한 부분을 요약합니다. 먼저 “무슨 문서인지 세 줄로 확인해 줘”라고 묻고, 맞으면 그때 질문합니다. 이 순서 하나로 결과가 달라집니다.",
      en: "Upload and say “summarise” and it may summarise the wrong part. First ask it to confirm in three lines what the document is; then ask. That one order changes the result."
    },
    steps: [
      { ko: "문서에서 이름·연락처·계좌를 가립니다.", en: "Mask names, contacts and account numbers first." },
      { ko: "파일을 올리고 “이해했으면 세 줄로 확인해 줘”라고 먼저 묻습니다.", en: "Upload, then ask it to confirm the gist in three lines." },
      { ko: "맞으면 내가 해야 할 일을 기한·금액과 함께 물어봅니다.", en: "If that is right, ask what you must do, with dates and amounts." },
      { ko: "원문을 열어 금액·기한·자격을 직접 대조합니다.", en: "Open the original and check the amounts, dates and eligibility yourself." }
    ],
    practice: {
      ko: "첨부한 문서를 읽고 ① 무슨 문서인지 세 줄 ② 내가 해야 할 일(기한·금액) ③ 자격·조건 ④ 원문에 없어서 확인이 필요한 것 — 순서로 정리해 줘. 숫자는 원문 표기 그대로, 애매하면 “확인 필요”. 네 판단으로 채우지 마.",
      en: "Read the attached document and give me: (1) three lines on what it is (2) what I must do, with dates and amounts (3) eligibility (4) what is missing and must be checked. Keep numbers as printed; mark anything unclear “needs checking”. Do not fill gaps."
    },
    tip: { ko: "“세 줄 확인”을 건너뛰면 요약이 아니라 상상이 나옵니다.", en: "Skip the three-line check and you get imagination, not summary." }
  },
  {
    id: "c6", n: 6, emoji: "🔎",
    t: { ko: "결과 검증하기", en: "Checking the result" },
    why: {
      ko: "여기까지 온 사람이 아끼는 단계입니다. AI 답은 초안이고, 책임은 내 몫입니다. 세 가지만 습관으로 만들면 됩니다 — 숫자·날짜는 원문에서, 법·세금은 공식 페이지에서, 출처 없는 주장은 빼기.",
      en: "The step people skip. The answer is a draft; the responsibility is yours. Three habits cover most of it: numbers and dates from the source, law and tax from the official page, and drop any claim with no source."
    },
    steps: [
      { ko: "답에서 숫자·날짜·금액을 모두 표시합니다.", en: "Mark every number, date and amount in the answer." },
      { ko: "그것들을 원문이나 공식 페이지에서 하나씩 확인합니다.", en: "Check each against the original or the official page." },
      { ko: "출처가 없는 주장은 지웁니다. 아깝더라도 지웁니다.", en: "Delete claims with no source, even the good ones." },
      { ko: "확인한 날짜를 글이나 문서 끝에 적습니다.", en: "Write the date you checked at the end." }
    ],
    practice: {
      ko: "네가 방금 한 답에서 ① 숫자·날짜·금액만 뽑아 표로 ② 각각 어디서 확인할 수 있는지(공식 페이지 이름) ③ 출처가 없어서 빼야 할 문장 ④ 내가 직접 확인해야 할 것 세 가지 — 로 정리해 줘. 확실하지 않으면 “확인 필요”로 표시해.",
      en: "From the answer you just gave me: (1) every number, date and amount as a table (2) where each can be verified, by official page (3) which sentences have no source and should go (4) three things I must check myself. Mark anything uncertain “needs checking”."
    },
    tip: { ko: "확인한 날짜를 적는 습관 하나로, 반년 뒤 같은 문서를 다시 믿을 수 있게 됩니다.", en: "Dating your checks is what lets you trust the same document six months later." }
  }
];

/* ───────── ⚖️ AI 결과물 비교실 ───────── */
const LAB = [
  {
    id: "lab-blog", emoji: "📝",
    t: { ko: "동네 카페 홍보 블로그 글", en: "A promo post for a neighbourhood cafe" },
    q: {
      ko: "안성에서 무인카페를 운영합니다. 주말은 붐비는데 평일 오후가 비어요. 평일 오후 손님을 부르는 블로그 글 300자로 써 주세요. 동네 40~50대 여성이 읽습니다.",
      en: "I run an unmanned cafe in Korea. Weekends are busy, weekday afternoons are empty. Write 300 characters of blog copy that brings people in on weekday afternoons, for women in their forties and fifties nearby."
    },
    answers: [
      { ai: "ChatGPT", mood: { ko: "정리된 목록형", en: "Tidy, list-like" }, out: { ko: "제목 3개를 붙이고, “이런 분께” 목록 → 평일 오후 혜택 → 이용 방법 순서로 정리합니다. 문장이 짧고 정보가 앞에 옵니다. 다만 “아늑한 분위기” 같은 흔한 말이 섞이고, 마지막에 혜택을 하나 더 지어내는 경우가 있습니다.", en: "It adds three titles, then “for whom” bullets, the weekday offer, then how to use the shop. Short sentences, information first. A stock phrase or two creeps in, and it sometimes invents one extra perk at the end." } },
      { ai: "Claude", mood: { ko: "사람 말투, 장면 중심", en: "Human, scene-led" }, out: { ko: "평일 오후 매장의 조용한 장면에서 시작해, 왜 그 시간이 좋은지를 담담하게 씁니다. “조용해서 책 한 장 넘기기 좋습니다” 같은 문장이 나옵니다. 대신 홍보 문구가 약해서, 링크나 혜택을 직접 붙여야 합니다.", en: "It opens on the quiet of a weekday afternoon and explains calmly why that hour is good: “quiet enough to turn one more page.” The sales line is weak — you add the link or the offer yourself." } },
      { ai: "Gemini", mood: { ko: "짧고 실용적, 지역 정보", en: "Short, practical, local" }, out: { ko: "평일 오후 시간대와 주차·와이파이 같은 실용 정보를 앞세우고, 지역 이름을 자연스럽게 넣습니다. 문장이 가장 짧습니다. 대신 글의 결이 밋밋해서 그대로 올리면 기억에 남지 않습니다.", en: "It leads with the hours plus parking and wifi, naming the area naturally. Shortest of the three. The tone is flat, though — posted as-is, nobody remembers it." } }
    ],
    verdict: {
      ko: "매장 분위기를 팔 때는 Claude, 실용 정보를 빨리 정리할 때는 Gemini, 여러 버전을 뽑아 고를 때는 ChatGPT가 편합니다. 어느 쪽이든 마지막 혜택이 실제와 맞는지 확인하세요.",
      en: "Selling the mood: Claude. Quick practical details: Gemini. Several versions to choose from: ChatGPT. Whichever you use, check that the closing offer is real."
    }
  },
  {
    id: "lab-grant", emoji: "📄",
    t: { ko: "지원사업 공고 요약", en: "Summarising a grant notice" },
    q: {
      ko: "첨부한 지원사업 공고문을 읽고, 신청 자격과 마감일, 준비 서류를 정리해 주세요. 해당되면 신청하고 싶습니다.",
      en: "Read the attached grant notice and set out eligibility, deadline and required documents. I may apply."
    },
    answers: [
      { ai: "ChatGPT", mood: { ko: "표로 정리, 빠른 파악", en: "Tabular, quick to scan" }, out: { ko: "자격·마감·서류를 표로 묶어 줍니다. 읽기 편하지만, 공고에 없는 서류를 “일반적으로 필요하다”는 이유로 한두 개 더 넣습니다. 표만 믿으면 서류를 잘못 준비합니다.", en: "Eligibility, deadline and documents in a table. Easy to read — but it adds a document or two that “are usually required”, which are not in the notice. Trust the table alone and you prepare the wrong papers." } },
      { ai: "Claude", mood: { ko: "문장 단위로 원문에 붙음", en: "Pinned to the text" }, out: { ko: "공고문의 어느 항목에서 나온 내용인지 함께 적습니다. “3쪽 2항”처럼 위치를 붙이고, 애매한 조항은 “해석이 갈릴 수 있음”이라고 남깁니다. 대신 답이 길어서 급할 때는 읽기 부담이 있습니다.", en: "It marks where each item came from — “page 3, item 2” — and leaves ambiguous clauses marked as open to interpretation. Long, though: heavy going when you are in a hurry." } },
      { ai: "Gemini", mood: { ko: "체크리스트형", en: "Checklist" }, out: { ko: "“신청 전 확인 5가지” 체크리스트로 바꿔 줍니다. 손으로 체크하며 준비하기 좋습니다. 다만 마감일을 요약하는 과정에서 “11월 30일까지”를 “11월 말”로 흐리게 쓰는 일이 있습니다.", en: "It turns the notice into a five-item pre-application checklist — good for working through by hand. But it sometimes blurs a hard date into “end of November”." } }
    ],
    verdict: {
      ko: "마감과 자격이 걸린 일은 Claude로 원문 위치까지 확인하고, 준비는 Gemini 체크리스트로 하되 날짜는 공고문에서 직접 보세요. 표만 보고 서류를 준비하지 마세요.",
      en: "For anything with a deadline, use Claude and check against the page, then work from a Gemini checklist — but read the date off the notice itself. Never prepare documents from a table alone."
    }
  },
  {
    id: "lab-mail", emoji: "✈️",
    t: { ko: "숙소에 보내는 영어 안내 메일", en: "An English email to a hotel" },
    q: {
      ko: "Write an email to a hotel asking whether we can leave luggage before check-in and what time breakfast is served. Arriving February 3, around 10am. Polite and short.",
      en: "Write an email to a hotel asking whether we can leave luggage before check-in and what time breakfast is served. Arriving February 3, around 10am. Polite and short."
    },
    answers: [
      { ai: "ChatGPT", mood: { ko: "정형화된 이메일", en: "Standard email form" }, out: { ko: "제목, 인사, 두 질문, 마무리가 빠짐없이 들어간 교과서적인 메일을 씁니다. 문법은 정확합니다. 다만 “I am writing to inquire” 같은 표현이 남아 있어 조금 딱딱합니다.", en: "Subject, greeting, two questions, sign-off — a complete, textbook email. Grammar is exact. It keeps phrases like “I am writing to inquire”, so it reads a little stiff." } },
      { ai: "Claude", mood: { ko: "짧고 자연스러운 일상체", en: "Short and natural" }, out: { ko: "다섯 문장 안쪽으로 줄여 씁니다. “We arrive on February 3 around 10am — could we leave our bags until the room is ready?”처럼 실제로 쓰는 문장이 나옵니다. 대신 짧게 줄이다가 “is there a charge?” 같은 조건을 빼먹을 수 있습니다.", en: "Five sentences or fewer: “We arrive on February 3 around 10am — could we leave our bags until the room is ready?” Real English. In trimming, though, it can drop a condition like “is there a charge?”." } },
      { ai: "Gemini", mood: { ko: "두 가지 버전 제안", en: "Offers two versions" }, out: { ko: "격식형과 간단형 두 가지를 주고, 어느 쪽을 쓸지 설명합니다. 호텔 예약 메일에는 간단형을 권합니다. 다만 두 버전이 섞여 나와 그대로 붙이기 전에 골라야 합니다.", en: "It gives a formal and a simple version and says which to use — simple, for a booking desk. The two can blend together, so choose before pasting." } }
    ],
    verdict: {
      ko: "짧은 실무 메일은 Claude가 가장 자연스럽고, 격식이 필요한 곳(관공서·거래처)은 ChatGPT의 정형 문장이 안전합니다. 어느 쪽이든 금액·날짜·조건이 빠지지 않았는지 직접 확인하세요.",
      en: "Claude reads most natural for short practical mail; ChatGPT's standard phrasing is safer for official or supplier correspondence. Either way, check that amounts, dates and conditions survived."
    }
  }
];

/* ───────── 🛠️ 오류 해결 9가지 ───────── */
const FIXES = [
  {
    id: "fix-login", emoji: "🔑",
    t: { ko: "로그인이 안 됩니다", en: "I cannot sign in" },
    symptom: { ko: "비밀번호를 넣어도 계속 첫 화면으로 돌아오거나, “계정을 찾을 수 없습니다”가 나옵니다.", en: "The password goes in and the page returns to the start, or it says the account cannot be found." },
    cause: { ko: "가입할 때 쓴 방법(구글·애플·이메일)과 지금 누른 버튼이 다를 때 가장 많습니다. 이미 구글 계정으로 만든 계정에 이메일 비밀번호를 넣으면 계속 실패합니다.", en: "Usually the button you pressed is not the one you signed up with. An account created with Google will not accept an email password." },
    steps: [
      { ko: "로그인 화면의 버튼을 모두 읽어 봅니다 — “Google로 계속”, “Apple로 계속”, “이메일”.", en: "Read every button on the sign-in screen: continue with Google, with Apple, with email." },
      { ko: "처음에 쓴 방법을 고릅니다. 기억이 안 나면 구글부터 눌러 봅니다.", en: "Pick the one you first used; if unsure, try Google first." },
      { ko: "비밀번호 재설정은 “이메일” 가입자만 됩니다. 재설정 메일이 안 오면 스팸함을 봅니다.", en: "Password reset only works for email sign-ups. If no mail arrives, check spam." },
      { ko: "그래도 안 되면 새 계정을 만들지 말고, 서비스 고객센터에 “가입에 쓴 이메일”과 “오류 화면”을 보냅니다.", en: "If it still fails, do not make a new account; write to support with the email you used and a screenshot." }
    ],
    ask: { ko: "가입할 때 [구글 계정]으로 만들었는데 [이메일 비밀번호]로 로그인하려고 하면 안 됩니다. 어떤 방법으로 들어가야 하나요?", en: "I signed up with [Google] and I am trying an [email password]. Which way should I sign in?" }
  },
  {
    id: "fix-limit", emoji: "⏳",
    t: { ko: "무료 한도를 다 썼습니다", en: "I have hit the free limit" },
    symptom: { ko: "“한도에 도달했습니다. 나중에 다시 시도하세요”가 나오고 입력창이 잠깁니다.", en: "“You have reached your limit, try later” and the box locks." },
    cause: { ko: "무료 플랜은 대개 시간당·하루 단위로 횟수를 셉니다. 긴 문서를 여러 번 넣으면 한 번의 대화가 여러 번으로 계산되기도 합니다.", en: "Free plans usually count per hour or per day. Feeding a long document repeatedly can count as several uses." },
    steps: [
      { ko: "언제 풀리는지 확인합니다. 화면에 시각이 나오면 그때까지 다른 일을 합니다.", en: "Find when it resets; if a time is shown, do something else until then." },
      { ko: "급하면 다른 AI로 옮깁니다. 같은 프롬프트를 그대로 붙이면 됩니다.", en: "If urgent, move to another AI and paste the same prompt." },
      { ko: "남은 횟수를 아끼려면 질문을 한 번에 묶습니다. “세 가지를 한 번에 답해 줘”가 세 번 묻는 것보다 낫습니다.", en: "Bundle questions: “answer all three at once” saves uses." },
      { ko: "다음부터는 긴 문서는 필요한 부분만 잘라 넣습니다.", en: "From now on, feed only the pages you need." }
    ],
    ask: { ko: "무료 한도가 남아 있는 동안 쓸 수 있게, 내 질문 세 개를 한 번에 처리해 줘. 각 답은 세 문장 이내로 짧게.",
      en: "I have limited free uses left — handle all three questions in one go, three sentences each." }
  },
  {
    id: "fix-upload", emoji: "📎",
    t: { ko: "PDF·파일이 올라가지 않습니다", en: "My PDF will not upload" },
    symptom: { ko: "파일을 끌어다 놓아도 아무 일이 없거나, “지원하지 않는 형식”이라고 나옵니다.", en: "Nothing happens when you drop the file, or it says the format is unsupported." },
    cause: { ko: "세 가지가 흔합니다 — 용량 초과, 스캔한 이미지 PDF, 암호가 걸린 PDF. 스캔본은 글자가 아니라 사진이라 읽지 못하는 경우가 있습니다.", en: "Three common causes: too large, a scanned image PDF, or a password-protected file. A scan is a picture, not text." },
    steps: [
      { ko: "용량을 확인합니다. 큰 파일은 필요한 페이지만 나눕니다.", en: "Check the size; split large files to the pages you need." },
      { ko: "암호가 걸려 있으면 먼저 암호를 풉니다(본인 문서만).", en: "Remove the password first — your own documents only." },
      { ko: "스캔본이면 사진으로 올리고 “글자만 뽑아 줘”라고 합니다. 흐린 부분은 “확인 필요”로 표시하게 합니다.", en: "For a scan, upload it as an image and ask it to extract the text, marking blurry parts “needs checking”." },
      { ko: "그래도 안 되면 필요한 페이지만 캡처해 이미지로 넣습니다.", en: "If it still fails, screenshot the pages you need." }
    ],
    ask: { ko: "이 PDF는 스캔본이야. 글자만 뽑아서 표로 정리해 줘. 읽기 어려운 부분은 “확인 필요”로 표시하고, 숫자는 원문 그대로 써 줘.", en: "This PDF is a scan. Pull out the text as a table, mark unreadable parts “needs checking”, keep numbers exactly as printed." }
  },
  {
    id: "fix-tone", emoji: "🗣️",
    t: { ko: "한국어 말투가 어색합니다", en: "The Korean sounds off" },
    symptom: { ko: "번역체 같거나, “~에 대해 알아보겠습니다” 같은 말이 붙어 사람이 쓴 느낌이 나지 않습니다.", en: "It reads translated, or carries stock phrases that no person would say." },
    cause: { ko: "AI는 평균적인 글을 씁니다. 내 말투를 알려 주지 않으면 어디서나 본 듯한 문장이 나옵니다.", en: "AI writes the average. Without your own voice as an example, you get what everyone writes." },
    steps: [
      { ko: "내가 쓴 글 2~3문단을 붙여 줍니다. 설명보다 예시가 정확합니다.", en: "Paste two or three paragraphs you wrote. An example beats a description." },
      { ko: "빼고 싶은 말을 목록으로 줍니다 — “결론적으로”, “많은 분들이”, “~해 보시길 바랍니다”.", en: "List the phrases to ban." },
      { ko: "“문장 길이를 고르게”, “한 문장에 한 가지만”처럼 구체적으로 시킵니다.", en: "Ask concretely: even sentence length, one idea per sentence." },
      { ko: "마지막에 소리 내어 읽고, 걸리는 문장만 다시 고칩니다.", en: "Read it aloud and fix only the lines that catch." }
    ],
    ask: { ko: "아래 내 글을 예시로 삼아, 같은 말투로 다시 써 줘. 상투어는 빼고, 문장 길이는 비슷하게, 없는 사실은 넣지 마.\n\n[내 글 2문단]\n[고칠 글]",
      en: "Use my paragraphs below as the voice and rewrite in that voice: no stock phrases, similar sentence length, no invented facts.\n\n[My paragraphs]\n[Text to fix]" }
  },
  {
    id: "fix-hallucinate", emoji: "🌀",
    t: { ko: "없는 사실을 지어냅니다", en: "It invents facts" },
    symptom: { ko: "링크를 눌러 보면 없는 페이지고, 법 조항 번호나 지원사업 마감일이 실제와 다릅니다.", en: "The link is dead, the clause number is wrong, the grant deadline is not real." },
    cause: { ko: "AI는 “그럴듯한 다음 말”을 고르기 때문에, 모르는 것도 아는 것처럼 씁니다. 나쁜 의도가 아니라 구조가 그렇습니다.", en: "It picks the most plausible next words, so it writes as if it knows. It is the structure, not intent." },
    steps: [
      { ko: "묻기 전에 “모르면 모른다고 말해”를 붙입니다.", en: "Before asking, add “say so if you do not know”." },
      { ko: "답을 받은 뒤 “각 항목의 출처와 확인 날짜를 붙여 줘”라고 다시 물어봅니다.", en: "Then ask it to attach a source and date to each item." },
      { ko: "출처가 없는 항목은 지웁니다. 숫자·법·마감일은 공식 페이지에서 직접 봅니다.", en: "Delete anything without a source; read numbers, law and deadlines on the official page." },
      { ko: "중요한 문서는 두 AI에 같은 질문을 넣고 다른 곳을 비교합니다.", en: "For anything important, ask two AIs and compare where they disagree." }
    ],
    ask: { ko: "아래 답에서 ① 확인된 사실 ② 추정 ③ 출처가 없어 지워야 할 것 — 세 가지로 나눠 줘. 확실하지 않은 것은 “모르겠음”이라고 써 줘.",
      en: "Split your answer into (1) checked facts (2) guesses (3) things with no source that should be deleted. Write “do not know” where you are unsure." }
  },
  {
    id: "fix-image", emoji: "✋",
    t: { ko: "이미지 손가락·글자가 깨집니다", en: "Broken fingers and garbled text" },
    symptom: { ko: "손가락이 여섯 개거나, 간판 글자가 알아볼 수 없는 글자로 나옵니다.", en: "Six fingers, or a sign whose letters are nonsense." },
    cause: { ko: "이미지 AI는 글자를 “그림”으로 그립니다. 손과 글자는 가장 어려운 부분입니다. 특히 작은 글자일수록 심합니다.", en: "Image models draw letters as shapes. Hands and text are the hardest part, and small text worst of all." },
    steps: [
      { ko: "손이 나오지 않는 구도로 바꿉니다 — 사물·그림자·손끝만.", en: "Change the shot so no full hand appears — objects, shadows, fingertips." },
      { ko: "글자는 이미지에 넣지 않습니다. 나중에 편집 앱에서 올립니다.", en: "Never put text in the image; add it later in an editor." },
      { ko: "사람을 넣어야 하면 “멀리서, 뒷모습으로, 얼굴 없이”로 바꿉니다.", en: "If a person must appear, go for far away, from behind, no face." },
      { ko: "같은 설명으로 두세 장을 만들고 나은 것을 고릅니다.", en: "Generate two or three and keep the best." }
    ],
    ask: { ko: "같은 장면인데 손과 글자를 빼고 다시 만들어 줘. 사물과 빛으로만 보여 주고, 글자가 필요한 자리는 비워 둬.",
      en: "Same scene without hands or text — objects and light only, and leave the label area empty." }
  },
  {
    id: "fix-cutoff", emoji: "✂️",
    t: { ko: "긴 글이 중간에 끊깁니다", en: "Long output stops halfway" },
    symptom: { ko: "다섯 장짜리 원고를 시켰는데 3장쯤에서 문장이 끊기고 “계속”을 눌러도 어색하게 이어집니다.", en: "You asked for five chapters and it stops around three; “continue” picks up awkwardly." },
    cause: { ko: "한 번에 낼 수 있는 답의 양에 한계가 있습니다. 또 긴 글을 한 번에 시키면 뒤로 갈수록 힘이 빠집니다.", en: "There is a limit per answer, and long pieces weaken toward the end anyway." },
    steps: [
      { ko: "목차를 먼저 합의합니다. 각 장의 제목과 분량을 정합니다.", en: "Agree the outline first: chapter titles and lengths." },
      { ko: "장마다 따로 시킵니다. “1장만 써 줘. 끝나면 멈춰.”", en: "Ask chapter by chapter: “chapter one only, then stop.”" },
      { ko: "끊기면 “이어서” 대신 “○○ 부분 다음부터, 앞 문장을 반복하지 말고”라고 씁니다.", en: "When it cuts, say “from after X, do not repeat the last sentence” rather than “continue”." },
      { ko: "모아서 마지막에 “전체에서 겹치는 문장을 찾아 줘”로 한 번 훑습니다.", en: "At the end, ask it to find repeated sentences across the whole." }
    ],
    ask: { ko: "이 원고를 5장으로 나눠서, 1장부터 순서대로 쓰자. 지금은 1장만, 800자, 끝나면 “1장 끝”이라고만 써 줘. 내가 “다음”이라고 하면 2장.",
      en: "Let us write this in five chapters, one at a time. Now chapter one only, 400 words, then just say “end of chapter one”. I will say “next”." }
  },
  {
    id: "fix-privacy", emoji: "🔒",
    t: { ko: "개인정보를 넣어 버렸습니다", en: "I typed personal data in" },
    symptom: { ko: "주민등록번호·계좌번호·손님 연락처를 채팅창에 그대로 썼습니다.", en: "A resident number, bank account or customer phone number went straight into the chat." },
    cause: { ko: "대화는 대개 서버에 저장되고, 설정에 따라 모델 학습에 쓰일 수 있습니다. 이미 보낸 문장은 상대 화면에서 지워지지 않습니다.", en: "Chats are stored, may be used for training depending on settings, and a sent message does not vanish from the other side." },
    steps: [
      { ko: "그 대화를 삭제합니다. 서비스의 “대화 삭제”를 씁니다(기록에서 숨기는 것과 다릅니다).", en: "Delete the conversation with the service's delete option — hiding it from history is not deletion." },
      { ko: "설정에서 “모델 학습에 사용”을 끕니다.", en: "Turn off training on your data in settings." },
      { ko: "비밀번호를 넣었다면 그 비밀번호를 바꿉니다. 같은 비밀번호를 다른 곳에도 썼다면 모두 바꿉니다.", en: "If a password went in, change it — and everywhere you reused it." },
      { ko: "주민번호·계좌가 나갔다면 해당 기관(카드사·은행·주민센터)에 알리고 모니터링을 요청합니다.", en: "If an ID or account number went in, tell the bank or card issuer and ask them to watch it." },
      { ko: "앞으로는 이름을 “김○○”, 번호를 “010-****-1234”처럼 가려서 씁니다.", en: "From now on, mask: “Kim ○○”, “010-****-1234”." }
    ],
    ask: { ko: "아래 글에서 개인정보로 보이는 부분(이름·연락처·계좌·주소·차량번호)을 모두 찾아 [가림]으로 바꿔 줘. 그리고 어떤 정보가 위험한지 한 줄씩 알려 줘.",
      en: "Find every piece of personal data in the text below — names, contacts, accounts, addresses, plates — and replace it with [masked]. Then say in one line each why it matters." }
  },
  {
    id: "fix-repeat", emoji: "🔁",
    t: { ko: "같은 답만 반복합니다", en: "It keeps giving the same answer" },
    symptom: { ko: "“다시 써 줘”를 눌러도 비슷한 문장이 나오고, “더 좋게”라고 하면 말만 길어집니다.", en: "“Try again” returns something similar, and “make it better” just makes it longer." },
    cause: { ko: "“더 좋게”는 기준이 없어서 AI가 안전한 쪽(비슷한 답)을 고릅니다. 무엇이 문제인지 짚어 줘야 방향이 바뀝니다.", en: "“Better” has no criterion, so it picks the safe answer. Name the problem and the direction changes." },
    steps: [
      { ko: "무엇이 마음에 안 드는지 한 가지로 말합니다 — “너무 딱딱해”, “숫자가 없어”.", en: "Name one thing: “too stiff”, “no numbers”." },
      { ko: "구체적인 지시를 붙입니다 — “첫 문장을 질문으로”, “3문장으로 줄여”.", en: "Add a concrete instruction: “open with a question”, “cut to three sentences”." },
      { ko: "한 번에 하나씩 바꿉니다. 세 개를 동시에 시키면 다시 평균으로 돌아갑니다.", en: "Change one at a time; three at once drifts back to the average." },
      { ko: "그래도 안 되면 새 대화를 열고 조건을 처음부터 다시 씁니다. 대화가 길면 앞의 답에 끌려갑니다.", en: "If it persists, open a new chat and restate from the top — long chats drag the old answer along." }
    ],
    ask: { ko: "지금 답이 마음에 안 드는 이유는 [너무 일반적이고 숫자가 없어서]야. 같은 내용을 유지하되 ① 첫 문장을 내 상황으로 시작 ② 숫자 두 개 넣기 ③ 5문장으로 줄이기 — 이 세 가지만 바꿔서 다시 써 줘.",
      en: "The problem is [it is generic and has no numbers]. Keep the content, but (1) open with my situation (2) put in two numbers (3) cut to five sentences. Change only those three things." }
  }
];
