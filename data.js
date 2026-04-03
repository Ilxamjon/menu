const categories = [
  { id: 'all', name_uz: 'Hammasi', name_ru: 'Все', name_en: 'All', icon: 'grid' },
  { id: 'starters', name_uz: 'Dengiz gazaklari', name_ru: 'Морские закуски', name_en: 'Seafood Starters', icon: 'leaf' },
  { id: 'main', name_uz: 'Baliqli taomlar', name_ru: 'Рыбные блюда', name_en: 'Fish Main Courses', icon: 'utensils-cross' },
  { id: 'soups', name_uz: 'Dengiz shoʻrvalari', name_ru: 'Морские супы', name_en: 'Seafood Soups', icon: 'utensils' },
  { id: 'drinks', name_uz: 'Ichimliklar', name_ru: 'Напитки', name_en: 'Drinks', icon: 'cup-straw' }
];

const menuItems = [
  // Starters
  {
    id: 101,
    categoryId: 'starters',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=500&q=80',
    name_uz: 'Krevetkali kokteyl',
    name_ru: 'Коктейль из креветок',
    name_en: 'Shrimp Cocktail',
    desc_uz: 'Yangi krevetkalar va maxsus rukkola sousi bilan.',
    desc_ru: 'Свежие креветки со специальным соусом и рукколой.',
    desc_en: 'Fresh shrimps with special sauce and arugula.',
    kcal: 180
  },
  {
    id: 102,
    categoryId: 'starters',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1546272989-40c92939c6c2?w=500&q=80',
    name_uz: 'Siyobas Carpaccio',
    name_ru: 'Карпаччо из сибаса',
    name_en: 'Sea Bass Carpaccio',
    desc_uz: 'Limon va zaytun yogʻida marinadlangan yupqa baliq boʻlaklari.',
    desc_ru: 'Тонкие ломтики рыбы, маринованные в лимоне и оливковом масле.',
    desc_en: 'Thin slices of fish marinated in lemon and olive oil.',
    kcal: 150
  },
  // Main
  {
    id: 15,
    categoryId: 'main',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80',
    name_uz: 'Grilda pishirilgan Amur',
    name_ru: 'Амур на гриле',
    name_en: 'Grilled Black Amur',
    desc_uz: 'Kafemizning imzosi boʻlgan qora amur baligʻi, sabzavotlar bilan.',
    desc_ru: 'Фирменный черный амур на гриле с овощами.',
    desc_en: 'Signature grilled Black Amur served with vegetables.',
    kcal: 420
  },
  {
    id: 103,
    categoryId: 'main',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80',
    name_uz: 'Forel steyki',
    name_ru: 'Стейк из форели',
    name_en: 'Salmon Steak',
    desc_uz: 'Pexta pishirilgan yumshoq forel baligʻi.',
    desc_ru: 'Нежный стейк из форели, запеченный до совершенства.',
    desc_en: 'Tender trout steak baked to perfection.',
    kcal: 380
  },
  // Soups
  {
    id: 104,
    categoryId: 'soups',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1555124817-3d9614749f99?w=500&q=80',
    name_uz: 'Ozarbayjoncha Baliq Shoʻrva',
    name_ru: 'Рыбный суп по-азербайджански',
    name_en: 'Fish Soup Azerbaijan style',
    desc_uz: 'Yangi tutilgan baliq va ziravorlar bilan boyitilgan shoʻrva.',
    desc_ru: 'Рыбный суп со свежепойманной рыбой и специями.',
    desc_en: 'Rich fish soup with fresh catch and spices.',
    kcal: 250
  },
  // Drinks
  {
    id: 5,
    categoryId: 'drinks',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80',
    name_uz: 'Yalpizli Limonad',
    name_ru: 'Мятный Лимонад',
    name_en: 'Mint Lemonade',
    desc_uz: 'Tetiklantiruvchi dengiz shabbodasi kabi sovuq ichimlik.',
    desc_ru: 'Освежающий холодный напиток, как морской бриз.',
    desc_en: 'Refreshing cold drink like a sea breeze.',
    kcal: 110
  }
];


const translations = {
  uz: {
    currency: "so'm",
    noResults: 'Hech narsa topilmadi',
    categories: 'Kategoriyalar',
    footerLocation: 'Manzil: Toshkent sh., Amir Temur koʻchasi, 12',
    callWaiter: 'Ofitsiantni chaqirish',
    order: 'Buyurtma berish',
    search: 'Taomlarni qidirish...',
    swipeList: 'Surgichli ro\'yxat',
    all: 'Barchasi',
    calories: 'Kaloriya'
  },
  ru: {
    currency: "сум",
    noResults: 'Ничего не найдено',
    categories: 'Категории',
    footerLocation: 'Адрес: г. Ташкент, ул. Амира Темура, 12',
    callWaiter: 'Вызвать официанта',
    order: 'Заказать',
    search: 'Поиск блюд...',
    swipeList: 'Листайте список',
    all: 'Все',
    calories: 'Калории'
  },
  en: {
    currency: "UZS",
    noResults: 'Nothing found',
    categories: 'Categories',
    footerLocation: 'Address: 12 Amir Temur Str., Tashkent',
    callWaiter: 'Call Waiter',
    order: 'Order Now',
    search: 'Search dishes...',
    swipeList: 'Swipe for more',
    all: 'All',
    calories: 'Calories'
  }
};


