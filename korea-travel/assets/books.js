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
    ja: {
      title: 'Korea, Corner by Corner',
      meta: '84ページ · 実写写真 · はじめての韓国ガイド',
      excerpt: '「旅はいつも、お腹の小さな結び目から始まります。……韓国に何年も住んでいる友だちが、あなたが聞く前にそっと次のことを教えてくれる。そんな本です」 — 出発前に'
    },
    zh: {
      title: 'Korea, Corner by Corner',
      meta: '84页 · 实拍照片 · 第一次来韩国',
      excerpt: '“旅行总是从肚子里一个小小的结开始……把它想成一位在韩国住了多年的朋友，在你开口之前就俯身悄悄告诉你下一步该做什么。” — 出发之前'
    },
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
    ja: {
      title: 'Korea After Midnight',
      meta: '135ページ · 夜のコース · その場で使う韓国語',
      excerpt: '「韓国は夜も安全な国ですが、酔った人、空っぽの路地、近距離を断るタクシーはどの街にもあります。この本の夜コースは明るく人通りの多い道で組みました。ひとりなら、あなたも同じように」 — 使い方'
    },
    zh: {
      title: 'Korea After Midnight',
      meta: '135页 · 夜间路线 · 现场能用的韩语',
      excerpt: '“韩国夜里是安全的，但醉汉、空巷子、偶尔拒载短途的出租车，哪座城市都有。这本书的夜间路线都沿着明亮、人多的街道排。如果你一个人，也请这样做。” — 如何使用'
    },
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
    ja: {
      title: 'Healing in the Soil',
      meta: '94ページ · 写真44点 · 図13点',
      excerpt: '「30代の私は鉢をひとつも買ったことがありませんでした。……40を過ぎて変わりました。朝、目を覚ますとまず窓を見ます。葉先が黄色くなっていないか、土が乾いていないか、新しい芽が出たか」 — この本について'
    },
    zh: {
      title: 'Healing in the Soil',
      meta: '94页 · 44张照片 · 13幅图',
      excerpt: '“三十岁时我一个花盆也没买过……四十岁以后变了。早上睁开眼先看窗户：叶尖黄了没有，土干了没有，有没有冒出新芽。” — 关于这本书'
    },
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
    ja: {
      title: 'Cozy Korean Countryside Coloring Book',
      meta: '印刷できる30ページ · 四季 · 300dpiの線画',
      excerpt: '「春の色で一度、秋にもう一度、青だけで一度——家で何度でも印刷してください。どのページも片面で、半インチの余白があるので、プリンターで切れることがありません」 — 本より'
    },
    zh: {
      title: 'Cozy Korean Countryside Coloring Book',
      meta: '可打印30页 · 四季 · 300dpi线稿',
      excerpt: '“在家想印几次就印几次——先用春天的颜色印一次，秋天再印一次，只用蓝色再印一次。每页都是单面，留了半英寸边距，打印机不会切掉内容。” — 摘自书中'
    },
    match: { cities: ['anseong', 'damyang', 'gangneung'], themes: ['farm', 'seasons', 'healing'] }
  }
];

const BOOK_SHOPS = {
  ko: { url: 'https://smartstore.naver.com/danbilab', label: '단비랩 스마트스토어 전체 서가' },
  en: { url: 'https://payhip.com/DanbiLab', label: 'DanbiLab Global Shop' },
  ja: { url: 'https://payhip.com/DanbiLab', label: 'DanbiLab グローバル書店（Payhip）' },
  zh: { url: 'https://payhip.com/DanbiLab', label: 'DanbiLab 全球书店（Payhip）' }
};

/* KR 은 국내판, EN·JP·CN 은 영어판(전 세계 배송)을 보여 줍니다. */
function booksFor(lang) {
  return BOOKS.filter((b) => b.lang === (lang === 'ko' ? 'ko' : 'en'));
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
