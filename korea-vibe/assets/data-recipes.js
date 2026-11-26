/* Jeong — K-food home kitchen recipes (amounts for the base serving size) */
window.JEONG_RECIPES = [
  {
    id: 'kimchi-jjigae',
    ko: '김치찌개', ro: 'Kimchi-jjigae', en: 'Kimchi Stew',
    tag: 'Comfort in a pot', time: '25 min', level: 'Easy', base: 2,
    intro: 'The stew every Korean household argues about and nobody gets wrong. Sour, ripe kimchi does the work — you just have to let it simmer until the kitchen smells like home.',
    ingredients: [
      { ko: '잘 익은 김치', ro: 'jal ikgeun kimchi', en: 'ripe, sour kimchi', qty: 200, unit: 'g', note: 'about 2 loose cups, chopped', where: 'korean', tip: 'Look for a bag marked 잘 익은 김치 (well-fermented). Pale, fresh kimchi will taste flat here.' },
      { ko: '돼지고기 앞다리살', ro: 'dwaejigogi apdarisal', en: 'pork shoulder, thinly sliced', qty: 150, unit: 'g', where: 'korean', tip: 'Ask for 찌개용 (jjigae-yong) — cut for stew. Spam or canned tuna works too.' },
      { ko: '두부', ro: 'dubu', en: 'firm tofu', qty: 0.5, unit: 'block', note: 'about 150 g', where: 'asian' },
      { ko: '양파', ro: 'yangpa', en: 'onion', qty: 0.5, unit: 'ea', where: 'any' },
      { ko: '대파', ro: 'daepa', en: 'large spring onion', qty: 1, unit: 'ea', where: 'asian' },
      { ko: '고춧가루', ro: 'gochugaru', en: 'Korean red chilli flakes', qty: 1, unit: 'tbsp', where: 'korean' },
      { ko: '국간장', ro: 'guk-ganjang', en: 'soup soy sauce', qty: 1, unit: 'tsp', where: 'korean', tip: 'Ordinary soy sauce is saltier — use half and taste.' },
      { ko: '다진 마늘', ro: 'dajin maneul', en: 'minced garlic', qty: 0.5, unit: 'tbsp', where: 'any' },
      { ko: '설탕', ro: 'seoltang', en: 'sugar', qty: 0.5, unit: 'tsp', where: 'any' },
      { ko: '참기름', ro: 'chamgireum', en: 'toasted sesame oil', qty: 1, unit: 'tsp', where: 'korean' },
      { ko: '물', ro: 'mul', en: 'water', qty: 400, unit: 'ml', where: 'any' }
    ],
    steps: [
      'Heat a heavy pot, add the pork and a pinch of salt, and fry until the edges turn golden.',
      'Add the kimchi and sugar. Stir for 4–5 minutes — this is where the sourness softens into sweetness.',
      'Stir in gochugaru, garlic and soup soy sauce, then pour in the water. Boil gently for 12 minutes.',
      'Add the onion and tofu. Simmer 5 more minutes.',
      'Finish off the heat with sesame oil and the sliced spring onion. Serve with rice.'
    ],
    grocery: [
      'Korean mart: the chilled kimchi wall is usually at the back. Bags are sold by weight (1 kg, 3 kg).',
      'Two spoons decide the taste: gochugaru for warmth, soup soy sauce for depth. Do not swap in Chinese chilli powder.',
      'No Korean mart nearby? Any Asian grocer with a kimchi section will have tofu, gochugaru and sesame oil in the same aisle.'
    ]
  },
  {
    id: 'tteokbokki',
    ko: '떡볶이', ro: 'Tteokbokki', en: 'Spicy Rice Cakes',
    tag: 'Street food at home', time: '20 min', level: 'Easy', base: 2,
    intro: 'Chewy rice cakes in a glossy red sauce — the food of every Korean after-school memory. Sweet first, then the heat arrives a second later.',
    ingredients: [
      { ko: '가래떡', ro: 'garaetteok', en: 'cylindrical rice cakes', qty: 300, unit: 'g', where: 'korean', tip: 'Frozen or vacuum-packed. Soak in warm water 10 minutes if they feel hard.' },
      { ko: '어묵', ro: 'eomuk', en: 'fish cake sheets', qty: 100, unit: 'g', where: 'korean', tip: 'Flat folded sheets, usually frozen. Cut into triangles.' },
      { ko: '삶은 달걀', ro: 'salmeun dalgyal', en: 'boiled eggs', qty: 2, unit: 'ea', where: 'any' },
      { ko: '대파', ro: 'daepa', en: 'large spring onion', qty: 1, unit: 'ea', where: 'asian' },
      { ko: '양배추', ro: 'yangbaechu', en: 'cabbage', qty: 100, unit: 'g', where: 'any' },
      { ko: '고추장', ro: 'gochujang', en: 'Korean chilli paste', qty: 2, unit: 'tbsp', where: 'korean' },
      { ko: '고춧가루', ro: 'gochugaru', en: 'Korean red chilli flakes', qty: 1, unit: 'tbsp', where: 'korean' },
      { ko: '설탕', ro: 'seoltang', en: 'sugar', qty: 1, unit: 'tbsp', where: 'any' },
      { ko: '물엿', ro: 'mulyeot', en: 'corn syrup', qty: 1, unit: 'tbsp', where: 'korean', tip: 'Honey or sugar works: add 1 extra tsp.' },
      { ko: '간장', ro: 'ganjang', en: 'soy sauce', qty: 1, unit: 'tsp', where: 'any' },
      { ko: '물', ro: 'mul', en: 'water', qty: 400, unit: 'ml', where: 'any' }
    ],
    steps: [
      'Soak the rice cakes in warm water while you prepare everything else.',
      'Whisk gochujang, gochugaru, sugar, corn syrup, soy sauce and the water in a wide pan. Bring to a simmer.',
      'Add the rice cakes and cabbage. Cook 8 minutes, stirring so nothing sticks.',
      'Add the fish cake and boiled eggs, and cook 4 more minutes until the sauce coats the back of a spoon.',
      'Scatter the spring onion, take it off the heat, and eat straight from the pan.'
    ],
    grocery: [
      'Gochujang comes in a square red tub — check the label for 태양초 (sun-dried chilli).',
      'Rice cakes are in the freezer or the chilled aisle, near dumplings.',
      'If the sauce tastes only hot, it needs more sugar, not less chilli.'
    ]
  },
  {
    id: 'bulgogi',
    ko: '불고기', ro: 'Bulgogi', en: 'Marinated Grilled Beef',
    tag: 'The dinner guests remember', time: '20 min + 30 min marinade', level: 'Easy', base: 2,
    intro: 'Sweet, garlicky, impossibly tender. Bulgogi is what Korean families cook when someone is coming over — and what everyone asks for afterwards.',
    ingredients: [
      { ko: '소고기 불고기용', ro: 'sogogi bulgogiyong', en: 'beef, sliced thin for bulgogi', qty: 300, unit: 'g', where: 'korean', tip: 'Ribeye or sirloin shaved paper-thin. Freeze 20 minutes to slice it yourself.' },
      { ko: '양파', ro: 'yangpa', en: 'onion', qty: 1, unit: 'ea', where: 'any' },
      { ko: '대파', ro: 'daepa', en: 'large spring onion', qty: 1, unit: 'ea', where: 'asian' },
      { ko: '당근', ro: 'danggeun', en: 'carrot', qty: 0.3, unit: 'ea', where: 'any' },
      { ko: '간장', ro: 'ganyang', en: 'soy sauce', qty: 3, unit: 'tbsp', where: 'any' },
      { ko: '설탕', ro: 'seoltang', en: 'sugar', qty: 1, unit: 'tbsp', where: 'any' },
      { ko: '배즙', ro: 'baejeup', en: 'pear juice (or grated apple)', qty: 3, unit: 'tbsp', where: 'korean', tip: 'The secret tenderiser. Blended Asian pear or apple is perfect.' },
      { ko: '다진 마늘', ro: 'dajin maneul', en: 'minced garlic', qty: 1, unit: 'tbsp', where: 'any' },
      { ko: '참기름', ro: 'chamgireum', en: 'toasted sesame oil', qty: 1, unit: 'tbsp', where: 'korean' },
      { ko: '후추', ro: 'huchu', en: 'black pepper', qty: 0.3, unit: 'tsp', where: 'any' },
      { ko: '통깨', ro: 'tongkkae', en: 'sesame seeds', qty: 1, unit: 'tsp', where: 'asian' }
    ],
    steps: [
      'Mix soy sauce, sugar, pear juice, garlic, sesame oil and pepper in a bowl.',
      'Add the beef and sliced onion, and massage with your hands. Rest 30 minutes (or overnight).',
      'Heat a wide pan until it is properly hot. Add the beef in one layer and let it sear without stirring for 1 minute.',
      'Add the carrot and spring onion, and stir-fry 2–3 minutes until the sauce glazes the meat.',
      'Sprinkle sesame seeds. Serve with rice, lettuce leaves and ssamjang if you have it.'
    ],
    grocery: [
      'Bulgogi cuts are labelled 불고기용 — often in the freezer section, pre-sliced.',
      'Asian pear is sold singly in Korean marts; one pear makes enough juice for two batches.',
      'Lettuce-leaf wraps (상추) turn this into a proper Korean table.'
    ]
  },
  {
    id: 'japchae',
    ko: '잡채', ro: 'Japchae', en: 'Sweet Potato Glass Noodles',
    tag: 'The dish that disappears first', time: '40 min', level: 'Medium', base: 2,
    intro: 'Slippery, chewy, faintly sweet noodles with a rainbow of vegetables. Every Korean holiday table has a plate of it, and it is always empty first.',
    ingredients: [
      { ko: '당면', ro: 'dangmyeon', en: 'sweet potato starch noodles', qty: 100, unit: 'g', where: 'korean', tip: 'Look for thick, grey-brown noodles — not mung bean threads.' },
      { ko: '소고기', ro: 'sogogi', en: 'beef, thinly sliced', qty: 100, unit: 'g', where: 'korean' },
      { ko: '시금치', ro: 'sigeumchi', en: 'spinach', qty: 100, unit: 'g', where: 'any' },
      { ko: '당근', ro: 'danggeun', en: 'carrot', qty: 0.5, unit: 'ea', where: 'any' },
      { ko: '양파', ro: 'yangpa', en: 'onion', qty: 0.5, unit: 'ea', where: 'any' },
      { ko: '표고버섯', ro: 'pyogobeoseot', en: 'shiitake mushrooms', qty: 3, unit: 'ea', where: 'asian' },
      { ko: '간장', ro: 'ganyang', en: 'soy sauce', qty: 3, unit: 'tbsp', where: 'any' },
      { ko: '설탕', ro: 'seoltang', en: 'sugar', qty: 1, unit: 'tbsp', where: 'any' },
      { ko: '참기름', ro: 'chamgireum', en: 'toasted sesame oil', qty: 1, unit: 'tbsp', where: 'korean' },
      { ko: '다진 마늘', ro: 'dajin maneul', en: 'minced garlic', qty: 0.5, unit: 'tbsp', where: 'any' },
      { ko: '통깨', ro: 'tongkkae', en: 'sesame seeds', qty: 1, unit: 'tsp', where: 'asian' }
    ],
    steps: [
      'Boil the noodles 6 minutes, rinse in cold water, and cut them roughly with scissors.',
      'Blanch the spinach for 30 seconds, squeeze it dry, and season with a pinch of salt and sesame oil.',
      'Stir-fry the carrot, onion and mushrooms separately, each with a little salt, so the colours stay bright.',
      'Stir-fry the beef with garlic and 1 tbsp soy sauce until just cooked.',
      'Toss everything with the noodles, remaining soy sauce, sugar and sesame oil. Taste, add salt, and finish with sesame seeds.'
    ],
    grocery: [
      'Dangmyeon is sold in 300–500 g bags — one bag makes five batches.',
      'Do not soak the noodles; boil them and rinse. Soaking makes them glue together.',
      'Japchae is equally good cold the next day, which is why Koreans make double.'
    ]
  },
  {
    id: 'bibimbap',
    ko: '비빔밥', ro: 'Bibimbap', en: 'Mixed Rice Bowl',
    tag: 'A whole garden in a bowl', time: '35 min', level: 'Easy', base: 2,
    intro: 'Rice, a handful of seasoned vegetables, an egg and a spoon of gochujang — then you mix it all together until it looks like a mess and tastes like a feast.',
    ingredients: [
      { ko: '밥', ro: 'bap', en: 'cooked short-grain rice', qty: 2, unit: 'bowl', where: 'any' },
      { ko: '콩나물', ro: 'kongnamul', en: 'soybean sprouts', qty: 150, unit: 'g', where: 'korean' },
      { ko: '시금치', ro: 'sigeumchi', en: 'spinach', qty: 100, unit: 'g', where: 'any' },
      { ko: '애호박', ro: 'aehobak', en: 'Korean courgette', qty: 0.5, unit: 'ea', where: 'asian' },
      { ko: '당근', ro: 'danggeun', en: 'carrot', qty: 0.5, unit: 'ea', where: 'any' },
      { ko: '소고기', ro: 'sogogi', en: 'beef, minced or sliced thin', qty: 100, unit: 'g', where: 'korean' },
      { ko: '달걀', ro: 'dalgyal', en: 'eggs', qty: 2, unit: 'ea', where: 'any' },
      { ko: '고추장', ro: 'gochujang', en: 'Korean chilli paste', qty: 2, unit: 'tbsp', where: 'korean' },
      { ko: '참기름', ro: 'chamgireum', en: 'toasted sesame oil', qty: 2, unit: 'tsp', where: 'korean' },
      { ko: '다진 마늘', ro: 'dajin maneul', en: 'minced garlic', qty: 0.5, unit: 'tbsp', where: 'any' },
      { ko: '통깨', ro: 'tongkkae', en: 'sesame seeds', qty: 1, unit: 'tsp', where: 'asian' }
    ],
    steps: [
      'Boil the soybean sprouts 5 minutes with a pinch of salt; drain and season with sesame oil.',
      'Blanch the spinach 30 seconds, squeeze dry, and season with salt and sesame oil.',
      'Stir-fry the courgette and carrot separately with a little salt until just soft.',
      'Fry the beef with garlic and a splash of soy sauce.',
      'Warm the rice in bowls. Arrange the vegetables and beef in sections on top, add a fried egg, and spoon gochujang in the middle.',
      'Drizzle sesame oil, sprinkle sesame seeds, and mix everything together at the table before eating.'
    ],
    grocery: [
      'Bibimbap vegetables are whatever is in the fridge — courgette, carrot, sprouts, spinach, mushrooms, fern.',
      'Gochujang for bibimbap is often mixed with a little sesame oil and sugar to make 초고추장-style sauce.',
      'A stone bowl (돌솥) gives you crispy rice at the bottom if you want the restaurant version.'
    ]
  },
  {
    id: 'gyeran-mari',
    ko: '계란말이', ro: 'Gyeran-mari', en: 'Rolled Omelette',
    tag: 'The side dish everyone fights over', time: '15 min', level: 'Easy', base: 2,
    intro: 'A fat, golden roll of egg with sweet vegetables hidden inside. It is in every Korean lunchbox, and it takes fifteen minutes from cold kitchen to table.',
    ingredients: [
      { ko: '달걀', ro: 'dalgyal', en: 'eggs', qty: 4, unit: 'ea', where: 'any' },
      { ko: '당근', ro: 'danggeun', en: 'carrot, finely diced', qty: 0.3, unit: 'ea', where: 'any' },
      { ko: '대파', ro: 'daepa', en: 'large spring onion, finely chopped', qty: 1, unit: 'ea', where: 'asian' },
      { ko: '우유', ro: 'uyu', en: 'milk', qty: 2, unit: 'tbsp', where: 'any', tip: 'Makes the roll softer. Water works too.' },
      { ko: '소금', ro: 'sogeum', en: 'salt', qty: 0.3, unit: 'tsp', where: 'any' },
      { ko: '식용유', ro: 'sigyongyu', en: 'cooking oil', qty: 1, unit: 'tbsp', where: 'any' }
    ],
    steps: [
      'Beat the eggs with milk and salt until smooth, then stir in the carrot and spring onion.',
      'Heat a small non-stick pan over low heat and wipe it with oil.',
      'Pour in a thin layer of egg. When it is half set, roll it to one side.',
      'Push the roll to the edge, oil the empty side, and pour another thin layer. Roll again over the first roll.',
      'Repeat until the egg is used up. Rest 2 minutes, then slice into thick rounds.'
    ],
    grocery: [
      'A small pan (20 cm) makes rolling much easier than a wide one.',
      'Keep the heat low — high heat makes the egg brown and tough.',
      'Add chopped kimchi or cheese for the version Korean kids ask for.'
    ]
  },
  {
    id: 'doenjang-jjigae',
    ko: '된장찌개', ro: 'Doenjang-jjigae', en: 'Soybean Paste Stew',
    tag: 'The everyday table', time: '25 min', level: 'Easy', base: 2,
    intro: 'Earthy, deep and quietly savoury — the stew Koreans eat on ordinary weeknights. It tastes like a kitchen that has been used for a long time.',
    ingredients: [
      { ko: '된장', ro: 'doenjang', en: 'Korean fermented soybean paste', qty: 1.5, unit: 'tbsp', where: 'korean', tip: 'Every brand is saltier or sweeter than the next. Start with 1 tbsp and taste.' },
      { ko: '두부', ro: 'dubu', en: 'firm tofu', qty: 0.5, unit: 'block', where: 'asian' },
      { ko: '애호박', ro: 'aehobak', en: 'Korean courgette', qty: 0.5, unit: 'ea', where: 'asian' },
      { ko: '감자', ro: 'gamja', en: 'potato', qty: 1, unit: 'ea', where: 'any' },
      { ko: '양파', ro: 'yangpa', en: 'onion', qty: 0.5, unit: 'ea', where: 'any' },
      { ko: '표고버섯', ro: 'pyogobeoseot', en: 'shiitake mushrooms', qty: 2, unit: 'ea', where: 'asian' },
      { ko: '대파', ro: 'daepa', en: 'large spring onion', qty: 1, unit: 'ea', where: 'asian' },
      { ko: '다진 마늘', ro: 'dajin maneul', en: 'minced garlic', qty: 0.5, unit: 'tbsp', where: 'any' },
      { ko: '고춧가루', ro: 'gochugaru', en: 'Korean red chilli flakes', qty: 0.5, unit: 'tsp', where: 'korean' },
      { ko: '물', ro: 'mul', en: 'water', qty: 500, unit: 'ml', where: 'any' }
    ],
    steps: [
      'Bring the water to a boil and whisk in the soybean paste until it dissolves.',
      'Add the potato and simmer 6 minutes.',
      'Add the courgette, onion, mushrooms and garlic. Simmer 5 minutes more.',
      'Add the tofu and gochugaru and cook 3 minutes.',
      'Finish with the spring onion. Taste before adding salt — doenjang is salty already.'
    ],
    grocery: [
      'Doenjang tubs sit next to gochujang in the Korean mart. Refrigerate after opening; it keeps for months.',
      'A piece of dried kelp (다시마) boiled in the water for 5 minutes gives restaurant depth.',
      'Doenjang also makes an excellent dip for cucumber and carrot sticks.'
    ]
  },
  {
    id: 'gimbap',
    ko: '김밥', ro: 'Gimbap', en: 'Seaweed Rice Rolls',
    tag: 'Lunchbox, picnic, road trip', time: '40 min', level: 'Medium', base: 2,
    intro: 'Rice and a dozen thin fillings rolled in seaweed and sliced into coins. Korea takes gimbap on trains, to picnics, and to every school trip since 1975.',
    ingredients: [
      { ko: '밥', ro: 'bap', en: 'cooked short-grain rice', qty: 2, unit: 'bowl', where: 'any' },
      { ko: '김', ro: 'gim', en: 'roasted seaweed sheets', qty: 4, unit: 'sheet', where: 'korean', tip: 'For gimbap, not snack gim — look for 김밥용.' },
      { ko: '단무지', ro: 'danmuji', en: 'yellow pickled radish', qty: 80, unit: 'g', where: 'korean' },
      { ko: '시금치', ro: 'sigeumchi', en: 'spinach', qty: 100, unit: 'g', where: 'any' },
      { ko: '당근', ro: 'danggeun', en: 'carrot, cut into thin strips', qty: 1, unit: 'ea', where: 'any' },
      { ko: '달걀', ro: 'dalgyal', en: 'eggs', qty: 2, unit: 'ea', where: 'any' },
      { ko: '어묵', ro: 'eomuk', en: 'fish cake, cut into strips', qty: 60, unit: 'g', where: 'korean' },
      { ko: '참기름', ro: 'chamgireum', en: 'toasted sesame oil', qty: 1, unit: 'tbsp', where: 'korean' },
      { ko: '소금', ro: 'sogeum', en: 'salt', qty: 0.5, unit: 'tsp', where: 'any' },
      { ko: '통깨', ro: 'tongkkae', en: 'sesame seeds', qty: 1, unit: 'tsp', where: 'asian' }
    ],
    steps: [
      'Season the warm rice with salt and 2 tsp sesame oil. Let it cool to warm, not cold.',
      'Blanch the spinach, squeeze dry, and season with salt and sesame oil. Stir-fry the carrot strips with a pinch of salt.',
      'Fry the egg as a flat omelette and cut into strips. Stir-fry the fish cake briefly.',
      'Lay a seaweed sheet on a bamboo mat, spread a thin layer of rice leaving 2 cm at the top, and line up the fillings in the lower third.',
      'Roll tightly, pressing with the mat. Rub the finished roll with sesame oil and sprinkle sesame seeds.',
      'Slice with a wet knife into 8 pieces. Wipe the knife between cuts.'
    ],
    grocery: [
      'Bamboo rolling mats (김발) cost a few dollars and make the difference between tight and loose rolls.',
      'Danmuji keeps for months in the fridge — one bag lasts many rolls.',
      'Short-grain rice matters. Jasmine rice will not hold together.'
    ]
  }
];

window.JEONG_AISLE_PHRASES = [
  { ko: '이거 주세요.', ro: 'Igeo juseyo.', en: 'This one, please.', note: 'Point at the shelf and say it. Works everywhere.' },
  { ko: '덜 맵게 해주세요.', ro: 'Deol maepge haejuseyo.', en: 'Less spicy, please.', note: 'For the sauce counter and the restaurant table.' },
  { ko: '이거 얼마예요?', ro: 'Igeo eolmayeyo?', en: 'How much is this?', note: 'Korean prices are usually on the label, but asking is friendly.' },
  { ko: '카드 돼요?', ro: 'Kadeu dwaeyo?', en: 'Can I pay by card?', note: 'Almost always yes — even at tiny market stalls.' },
  { ko: '봉투 주세요.', ro: 'Bongtu juseyo.', en: 'A bag, please.', note: 'Shops charge a few cents for bags, so bring one.' }
];
