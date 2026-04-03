// State
let currentLang = 'uz';
let currentCategory = 'all';
let searchQuery = '';
let isDark = false;

// Icons Mapping
const icons = {
    grid: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    utensils: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
    'utensils-cross': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2 4 4-4 4"/><path d="m2 2 11 11"/><path d="m2 2 10-10"/><path d="m16 20 4-4-4-4"/></svg>`,
    sandwich: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11a9 9 0 0 1 18 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z"/><path d="M3 18h18"/><path d="M19 14v4"/><path d="M5 14v4"/></svg>`,
    leaf: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 21 2c-2.4 4-3 5.5-4.1 11.2A7 7 0 0 1 11 20Z"/><path d="M11 20V5"/></svg>`,
    'ice-cream': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 5 11 5-11"/><path d="M11.7 3a5 5 0 0 0-4.7 3.2 5.5 5.5 0 0 0 0 10.6 5 5 0 0 0 9.4 0 5.5 5.5 0 0 0 0-10.6A5 5 0 0 0 11.7 3z"/></svg>`,
    'cup-straw': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 22H7a2 2 0 0 1-2-2L3 3h18l-2 17a2 2 0 0 1-2 2z"/><path d="M7 22 5 3"/><path d="M17 22 19 3"/><path d="m15 3 2-2"/></svg>`
};

// DOM Elements
const categoriesContainer = document.getElementById('categories-container');
const menuItemsContainer = document.getElementById('menu-items-container');
const categoryTitle = document.getElementById('category-title');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const itemCount = document.getElementById('item-count');

// Initialize
function init() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderMenu();
    });

    themeToggle.addEventListener('click', toggleTheme);

    setLanguage('uz');

    // Globals
    window.setLanguage = setLanguage;
    window.filterByCategory = filterByCategory;
}

function toggleTheme() {
    isDark = !isDark;
    document.body.classList.toggle('dark-theme', isDark);
    moonIcon.classList.toggle('hidden', isDark);
    sunIcon.classList.toggle('hidden', !isDark);
}

function setLanguage(lang) {
    currentLang = lang;

    searchInput.placeholder = translations[lang].search;
    document.getElementById('categories-label').textContent = translations[lang].categories;
    document.getElementById('swipe-text').textContent = translations[lang].swipeList;
    noResults.textContent = translations[lang].noResults;

    // Active Lang UI
    ['uz', 'ru', 'en'].forEach(l => {
        const btn = document.getElementById(`btn-${l}`);
        if (btn) btn.classList.toggle('active', l === lang);
    });

    renderCategories();
    renderMenu();
}

function filterByCategory(catId) {
    currentCategory = catId;
    renderCategories();
    renderMenu();
}

function renderCategories() {
    categoriesContainer.innerHTML = categories.map(cat => `
    <div onclick="filterByCategory('${cat.id}')" 
         class="category-item flex flex-col items-center gap-3 cursor-pointer shrink-0 ${currentCategory === cat.id ? 'active' : ''}">
        <div class="category-icon-wrapper w-16 h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-muted">
            ${icons[cat.icon] || icons.grid}
        </div>
        <span class="text-[11px] font-bold text-muted uppercase tracking-widest whitespace-nowrap">
            ${cat[`name_${currentLang}`]}
        </span>
    </div>
  `).join('');
}

function renderMenu() {
    const filtered = menuItems.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.categoryId === currentCategory;
        const matchesSearch = item[`name_${currentLang}`].toLowerCase().includes(searchQuery) ||
            item[`desc_${currentLang}`].toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const cat = categories.find(c => c.id === currentCategory);
    categoryTitle.textContent = cat ? cat[`name_${currentLang}`] : translations[currentLang].all;
    itemCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'ITEM' : 'ITEMS'}`;

    if (filtered.length === 0) {
        menuItemsContainer.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    menuItemsContainer.innerHTML = filtered.map((item, index) => `
    <div class="item-card p-5 rounded-[2rem] flex gap-5 fade-in-up" 
         style="animation-delay: ${index * 0.05}s">
        <div class="w-24 h-24 rounded-3xl overflow-hidden shrink-0 bg-surface shadow-inner">
            <img src="${item.image}" alt="${item[`name_${currentLang}`]}" 
                 class="w-full h-full object-cover"
                 onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80'">
        </div>
        <div class="flex-1 flex flex-col justify-between py-1">
            <div>
                <h4 class="text-base font-bold mb-1">${item[`name_${currentLang}`]}</h4>
                <p class="text-[11px] text-muted line-clamp-1 mb-2">${item.kcal || 0} ${translations[currentLang].calories}</p>
            </div>
            <div class="flex justify-between items-center mt-2">
                <div class="bg-black text-white px-4 py-1.5 rounded-full text-sm font-black flex items-center gap-1.5 shadow-lg">
                    ${item.price.toLocaleString()} <span class="text-[9px] opacity-70 font-bold uppercase">${translations[currentLang].currency}</span>
                </div>
            </div>
        </div>
    </div>
  `).join('');
}

init();


