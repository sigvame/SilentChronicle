// База данных заброшенных мест
const ruinsPlaces = [
  {
    title: "Замок Лип (Leap Castle)",
    categories: ["europe", "castle", "medieval"],
    tag: "Европа • Замок • Средневековье",
    country: "📍 Ирландия",
    date: "2026-07-21",
    desc: "Ирландия. Самый проклятый замок с кровавой историей междоусобиц, скрытой темницей и легендами о призрачном «Элементале».",
    image: "images/leap-castle/leap-castle.jpg",
    link: "places/europe/leap-castle.html"
  },
  {
    title: "Деревня Инунаки (Inunaki)",
    categories: ["asia", "village"],
    tag: "Азия • Деревня",
    country: "📍 Япония",
    date: "2026-07-22",
    desc: "Забытая мистическая деревня за заблокированным тоннелем, о которой ходят легенды о полном отсутствии законов.",
    image: "images/inunaki/inunaki.jpg",
    link: "places/asia/inunaki.html"
  },
  {
    title: "Психиатрическая больница Гонджиам (Gonjiam)",
    categories: ["asia", "hospital"],
    tag: "Азия • Больница",
    country: "📍 Южная Корея",
    date: "2026-07-26",
    desc: "Один из самых известных заброшенных объектов Азии с множеством городских легенд о пропавших пациентах.",
    image: "images/gonjiam/gonjiam.jpg",
    link: "places/asia/gonjiam.html"
  },
  {
    title: "Припять",
    categories: ["europe", "city"],
    tag: "Европа • Город",
    country: "📍 Украина",
    date: "2026-07-26",
    desc: "Мёртвый атомный город-призрак в Чернобыльской зоне отчуждения, застывший во времени с 1986 года.",
    image: "images/pripyat/pripyat.jpg",
    link: "places/europe/pripyat.html"
  },
  {
    title: "Остров Хасима (Гункандзима)",
    categories: ["asia", "island", "city"],
    tag: "Азия • Остров • Город",
    country: "📍 Япония",
    date: "2026-07-22",
    desc: "Заброшенный шахтерский остров-крепость, полностью оставленный жителями после закрытия угольных шахт.",
    image: "images/gunkandzima/gunkandzima.jpg",
    link: "places/asia/gunkandzima.html"
  },
  {
    title: "Замок Моосхам (Moosham Castle)",
    categories: ["europe", "castle", "medieval"],
    tag: "Европа • Замок • Средневековье",
    country: "📍 Австрия",
    date: "2026-07-28",
    desc: "Мрачная цитадель ведьм, инквизиции и оборотней. Древняя австрийская крепость XIII века, прославившаяся масштабными судами над колдовством и мистическими легендами.",
    image: "images/moosham-castle/moosham-castle.jpg",
    link: "places/europe/moosham-castle.html"
  },
  {
    title: "Кёльнский собор (Kölner Dom)",
    categories: ["europe", "cathedral", "medieval"],
    tag: "Европа • Собор • Средневековье",
    country: "📍 Германия",
    date: "2026-07-28",
    desc: "Величественный шедевр готики и святыня Трёх Царей, строившийся более шести веков и чудом выстоявший в эпицентре Второй мировой войны.",
    image: "images/cologne-cathedral/cologne-cathedral.jpg",
    link: "places/europe/cologne-cathedral.html"
  },
  {
    title: "Замок и Аббатство Линдисфарн",
    categories: ["europe", "castle", "medieval"],
    tag: "Европа • Замок • Средневековье",
    country: "📍 Великобритания",
    date: "2026-08-01",
    desc: "Остров, который дважды в день отрезает морем от всего мира. Именно здесь в 793 году под небесные знамения «огненных драконов» высадились викинги, заложив начало самой кровавой эпохе Европы.",
    image: "images/lindisfarne/lindisfarne-castle.jpg",
    link: "places/europe/lindisfarne-castle.html"
  },
  {
    title: "Замок Шато де Веос",
    categories: ["europe", "castle", "medieval"],
    tag: "Европа • Замок • Средневековье",
    country: "📍 Франция",
    date: "2026-08-07",
    desc: "Французский замок Оверни с тысячелетней историей, овеянный мрачной легендой о призраке заточенной служанки Люси и скрывающий тайны древних башен.",
    image: "images/veauce/veauce-castle.jpg",
    link: "places/europe/veauce-castle.html"
  },
  {
    title: "Собор Святого Вита (Katedrála svatého Víta)",
    categories: ["europe", "cathedral", "medieval"],
    tag: "Европа • Собор • Средневековье",
    country: "📍 Чехия",
    date: "2026-08-17",
    desc: "Готический шедевр и главная святыня Праги, строившаяся почти 600 лет, где покоятся чешские короли и хранятся древние коронационные регалии.",
    image: "images/prague-castle/prague-castle.jpg",
    link: "places/europe/prague-castle.html"
  },
  {
    title: "Замок Троски (Trosky Castle)",
    categories: ["europe", "castle", "medieval"],
    tag: "Европа • Замок • Средневековье",
    country: "📍 Чехия",
    date: "2026-08-25",
    desc: "Живописные руины средневековой крепости XIV века на двух базальтовых скалах потухшего вулкана, ставшие неофициальным символом региона Чешский Рай.",
    image: "images/trosky-castle/trosky-main.jpg",
    link: "places/europe/trosky-castle.html"
  }
];

