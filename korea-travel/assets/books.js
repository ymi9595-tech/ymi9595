/* ==========================================================================
   당장 가볼까? · books.js
   단비랩 여행·한국 체험 전자책 — 사이드바·홈·상세 페이지에서 함께 보여 줍니다.
   국내(KR)는 스마트스토어, 영문(EN)은 Payhip 의 실제 상품 링크입니다.
   match.cities / match.themes 로 어느 도시·테마 상세에 붙일지 정합니다.
   '*' 는 모든 곳.  excerpt 는 책 본문에서 그대로 옮긴 두세 줄입니다.
   ========================================================================== */

const BOOKS = [
  {
    id: 'host50',
    lang: 'ko',
    emoji: '🎒',
    c1: '#FFE1D1', c2: '#FFF4EB',
    title: '외국인 친구 한국 왔을 때 꼭 함께 해보는 50가지',
    meta: '108쪽 · 밤과 새벽 코스 5개 · 현장 한국어 40선',
    pages: 108,
    price: '12,600원',
    was: '14,000원',
    shop: '스마트스토어',
    url: 'https://smartstore.naver.com/danbilab/products/13899476557',
    excerpt: '“낮에는 같이 구경하고, 밤에는 같이 섞여 들어가 보세요. 한국은 밤에 더 친절해져요.” — 프롤로그에서. 손님이 오는 날 어디부터 데려갈지, 한 장에 한 가지씩 정리한 호스트용 목록입니다.',
    match: { cities: '*', themes: ['night', 'market', 'hanok', 'beauty', 'drama', 'photo', 'retro'] }
  },
  {
    id: 'farm365',
    lang: 'ko',
    emoji: '🌾',
    c1: '#E4F5DE', c2: '#F6FBF1',
    title: '하루도 비지 않는 365일 체험·치유농장 프로그램 대백과',
    meta: '135쪽 · 절기별 지도안 33편 · 365일 표',
    pages: 135,
    price: '19,000원',
    was: '',
    shop: '스마트스토어',
    url: 'https://smartstore.naver.com/danbilab/products/13889854489',
    excerpt: '“365일 프로그램표가 필요한 이유는 거창하지 않습니다. 12월의 어느 날 갑자기 방문이 잡혀도, 그날 할 일이 이미 정해져 있게 하려는 것입니다.” — 이 책에 대하여',
    match: { cities: ['anseong'], themes: ['farm', 'animal', 'seasons', 'camp'] }
  },
  {
    id: 'soil4050',
    lang: 'ko',
    emoji: '🌿',
    c1: '#DFF1EA', c2: '#F4FAF6',
    title: '도시농업·반려식물로 마음 돌보는 4050 치유농업 에세이',
    meta: '87쪽 · 12개월 달력 · 손으로 채우는 부록',
    pages: 87,
    price: '12,600원',
    was: '14,000원',
    shop: '스마트스토어',
    url: 'https://smartstore.naver.com/danbilab/products/13899320208',
    excerpt: '“화분 하나로 인생이 바뀌지는 않아요. 다만 화분 하나가 하루의 중심을 조금 옮겨 놓지요. 그리고 그 조금이, 마흔 이후의 삶에서는 생각보다 큽니다.” — 이 책에 대하여',
    match: { cities: ['anseong', 'damyang'], themes: ['healing', 'farm', 'seasons'] }
  },
  {
    id: 'corner',
    lang: 'en',
    emoji: '🧭',
    c1: '#FFE1D1', c2: '#FFF4EB',
    title: 'Korea, Corner by Corner',
    meta: '84 pages · real photographs · first-visit guide',
    pages: 84,
    price: 'US$9.99',
    was: '',
    shop: 'Payhip',
    url: 'https://payhip.com/b/3Ojtv',
    excerpt: '“Travel always begins with a small knot in the stomach… Think of it as the friend who has lived in Korea for years, leaning over and telling you quietly what to do next, before you have to ask.” — Before you go',
    match: { cities: '*', themes: '*' }
  },
  {
    id: 'aftermidnight',
    lang: 'en',
    emoji: '🌙',
    c1: '#E2DFF7', c2: '#F6F3FF',
    title: 'Korea After Midnight: 50 Unforgettable Things You Have to Try',
    meta: '135 pages · night routes · Korean on the spot',
    pages: 135,
    price: 'US$12.99',
    was: '',
    shop: 'Payhip',
    url: 'https://payhip.com/b/3pOhb',
    excerpt: '“Korea is a safe country at night, but drunk people, empty alleys and the occasional taxi refusing a short fare exist in any city. The night routes in this book are built along busy, well-lit streets. If you are on your own, do the same.” — How to use',
    match: { cities: ['seoul', 'busan'], themes: ['night', 'market', 'drama', 'beauty', 'photo'] }
  },
  {
    id: 'soil',
    lang: 'en',
    emoji: '🌿',
    c1: '#DFF1EA', c2: '#F4FAF6',
    title: 'Healing in the Soil: Urban Gardening and Companion Plant Essays',
    meta: '94 pages · 44 photographs · 13 diagrams',
    pages: 94,
    price: 'US$14.99',
    was: '',
    shop: 'Payhip',
    url: 'https://payhip.com/b/2lEfc',
    excerpt: '“At thirty I had never bought a pot… After forty that changed. I open my eyes in the morning and look at the window first. Are the leaf tips yellowing, is the soil dry, has a new shoot come up.” — About this book',
    match: { cities: ['anseong', 'damyang'], themes: ['healing', 'farm', 'seasons'] }
  },
  {
    id: 'coloring',
    lang: 'en',
    emoji: '🖍️',
    c1: '#FDEBD2', c2: '#FFF8EE',
    title: 'Cozy Korean Countryside Coloring Book',
    meta: '30 printable pages · four seasons · 300 dpi line art',
    pages: 33,
    price: 'US$6.99',
    was: '',
    shop: 'Payhip',
    url: 'https://payhip.com/b/QHgIV',
    excerpt: '“Print it at home as often as you like — once in spring colors, once in autumn, once in nothing but blues. Every page is single-sided, with a half-inch margin so nothing gets clipped by your printer.” — from the book',
    match: { cities: ['anseong', 'damyang', 'gangneung'], themes: ['farm', 'seasons', 'healing'] }
  }
];

const BOOK_SHOPS = {
  ko: { url: 'https://smartstore.naver.com/danbilab', label: '단비랩 스마트스토어 전체 서가' },
  en: { url: 'https://payhip.com/DanbiLab', label: 'DanbiLab Global Shop' }
};

function booksFor(lang) {
  return BOOKS.filter((b) => b.lang === lang);
}

function bookPick(lang, kind, id) {
  const pool = booksFor(lang);
  const hit = pool.filter((b) => {
    const m = b.match || {};
    const all = m.cities === '*' && m.themes === '*';
    if (all) return true;
    if (kind === 'city' && (m.cities === '*' || (m.cities || []).indexOf(id) > -1)) return true;
    if (kind === 'theme' && (m.themes === '*' || (m.themes || []).indexOf(id) > -1)) return true;
    return false;
  });
  const specific = hit.filter((b) => !(b.match.cities === '*' && b.match.themes === '*'));
  const out = (specific.length ? specific : hit).slice(0, 2);
  if (!out.length && pool.length) out.push(pool[0]);
  return out;
}
