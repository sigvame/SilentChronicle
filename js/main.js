// Функция для случайного перемешивания массива
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Подтягивание места (руины древний мир и тд)
let originalPlaces = [];
let storageKeyPrefix = 'default';

if (typeof ruinsPlaces !== 'undefined') {
  originalPlaces = ruinsPlaces;
  storageKeyPrefix = 'ruins';
} else if (typeof ancientPlaces !== 'undefined') {
  originalPlaces = ancientPlaces;
  storageKeyPrefix = 'ancient';
} else if (typeof conquerorsPlaces !== 'undefined') {
  originalPlaces = conquerorsPlaces;
  storageKeyPrefix = 'conquerors';
} else if (typeof places !== 'undefined' && Array.isArray(places)) {
  originalPlaces = places;
}

const SHUFFLED_STORAGE_KEY = `shuffled_places_${storageKeyPrefix}`;
const ACTIVE_CATEGORY_KEY = `active_category_${storageKeyPrefix}`;

function getSessionPlaces() {
  const savedPlaces = sessionStorage.getItem(SHUFFLED_STORAGE_KEY);
  if (savedPlaces) {
    return JSON.parse(savedPlaces);
  }
  const newlyShuffled = shuffleArray(originalPlaces);
  sessionStorage.setItem(SHUFFLED_STORAGE_KEY, JSON.stringify(newlyShuffled));
  return newlyShuffled;
}

let places = [];
let fuse = null; // экземпляр Fuse

// Настройки Fuse.js
function initFuse() {
  const options = {
    // Поиск по названию, описанию и тегам
    keys: ['title', 'desc', 'tag', 'country'],
    // Прощает 1-2 опечатки и не выдает мусор
    threshold: 0.4,
    // Насколько сильно учитывать расстояние опечатки от начала слова
    distance: 100,
    // Минимальное количество символов для запуска нечеткого поиска
    minMatchCharLength: 2,
    // Игнорирование регистра
    isCaseSensitive: false
  };

  fuse = new Fuse(places, options);
}

// Карточки
function generateCardsHTML(items) {
  if (items.length === 0) {
    return `<div class="col-12 text-center text-muted py-5">Ничего не найдено</div>`;
  }

  return items.map(place => `
    <div class="col">
      <a href="${place.link}" class="card-clickable-link">
        <article class="card h-100 custom-card">
          <div class="card-img-wrapper">
            <img src="${place.image}" class="card-img-top" alt="${place.title}">
            <span class="badge-tag">${place.tag}</span>
          </div>
          <div class="card-body p-2 p-sm-3 d-flex flex-column">
            <h3 class="card-title h6 h5-sm mb-1">${place.title}</h3>
            <p class="card-text text-muted small flex-grow-1 mb-2">
              ${place.desc}
            </p>
            <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top border-dark-subtle">
              <span class="location-label">${place.country}</span>
              <span class="card-link-text">Читать →</span>
            </div>
          </div>
        </article>
      </a>
    </div>
  `).join('');
}

function closeMobileMenu() {
  const mobileMenuEl = document.getElementById('mobileMenu');
  if (mobileMenuEl) {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(mobileMenuEl);
    if (bsOffcanvas) bsOffcanvas.hide();
  }

  const navmenuEl = document.getElementById('navmenu');
  if (navmenuEl && navmenuEl.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navmenuEl) || new bootstrap.Collapse(navmenuEl);
    if (bsCollapse) bsCollapse.hide();
  }
}

// Переключение категорий
function filterAndRender(targetCategory) {
  const container = document.getElementById('places-container');
  if (!container) return;

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const filteredPlaces = targetCategory === 'all' 
    ? places 
    : places.filter(place => place.categories && place.categories.includes(targetCategory));

  container.innerHTML = generateCardsHTML(filteredPlaces);

  sessionStorage.setItem(ACTIVE_CATEGORY_KEY, targetCategory);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.category === targetCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  closeMobileMenu();
}

// Функция поиска с поддержкой опечаток
function handleSearch(query) {
  const container = document.getElementById('places-container');
  if (!container) return;

  const cleanQuery = query.trim().replaceAll('ё', 'е').replaceAll('Ё', 'Е');

  // Если строка пустая — возвращаем выбранную категорию
  if (!cleanQuery) {
    const savedCategory = sessionStorage.getItem(ACTIVE_CATEGORY_KEY) || 'all';
    filterAndRender(savedCategory);
    return;
  }

  if (fuse) {
    const results = fuse.search(cleanQuery);
    const searchResults = results.map(result => result.item);
    container.innerHTML = generateCardsHTML(searchResults);
  }
}

// Запуск при старте
document.addEventListener('DOMContentLoaded', () => {
  places = getSessionPlaces();

  initFuse();

  const savedCategory = sessionStorage.getItem(ACTIVE_CATEGORY_KEY) || 'all';
  filterAndRender(savedCategory);

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category;
      filterAndRender(category);
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });
  }
});

// Кнопка Наверх
const btnScrollToTop = document.getElementById('btnScrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnScrollToTop.classList.add('show');
    } else {
        btnScrollToTop.classList.remove('show');
    }
});

let focusTimeout;

btnScrollToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    clearTimeout(focusTimeout);

    focusTimeout = setTimeout(() => {
        this.blur();
    }, 1500); 
});
