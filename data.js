const categories = [
  { id: 'all', name_uz: 'Hammasi', name_ru: 'Все', name_en: 'All', icon: 'grid' },
  { id: 'starters', name_uz: 'Gazaklar', name_ru: 'Закуски', name_en: 'Starters', icon: 'utensils' },
  { id: 'main', name_uz: 'Asosiy taomlar', name_ru: 'Основные блюда', name_en: 'Main Courses', icon: 'utensils-cross' },
  { id: 'burgers', name_uz: 'Burgerlar', name_ru: 'Бургеры', name_en: 'Burgers', icon: 'sandwich' },
  { id: 'salads', name_uz: 'Salatlar', name_ru: 'Салаты', name_en: 'Salads', icon: 'leaf' },
  { id: 'desserts', name_uz: 'Shirinliklar', name_ru: 'Десерты', name_en: 'Desserts', icon: 'ice-cream' },
  { id: 'drinks', name_uz: 'Ichimliklar', name_ru: 'Напитки', name_en: 'Drinks', icon: 'cup-straw' }
];

const menuItems = [
  // Starters
  {
    id: 101,
    categoryId: 'starters',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?w=500&q=80',
    name_uz: 'Brusketta',
    name_ru: 'Брускетта',
    name_en: 'Bruschetta',
    desc_uz: 'Pomidor va bazilik bilan italyancha gazak.',
    desc_ru: 'Итальянская закуска с помидорами и базиликом.',
    desc_en: 'Italian starter with tomatoes and basil.',
    kcal: 220
  },
  // Main
  {
    id: 15,
    categoryId: 'main',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&q=80',
    name_uz: 'Mol goʻshtidan steyk',
    name_ru: 'Стейк из говядины',
    name_en: 'Beef Steak',
    desc_uz: 'Grilda pishirilgan suvli steyk, sabzavotlar bilan.',
    desc_ru: 'Сочный стейк на гриле с овощами гарниром.',
    desc_en: 'Juicy grilled beef steak served with vegetables.',
    kcal: 580
  },
  {
    id: 102,
    categoryId: 'main',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    name_uz: 'Bbq Chicken Pizza Delight',
    name_ru: 'Пицца Барбекю с курицей',
    name_en: 'BBQ Chicken Pizza',
    desc_uz: 'Grill tovuq va bbq sousli mazali pissa.',
    desc_ru: 'Вкусная пицца с жареной курицей и соусом барбекю.',
    desc_en: 'Delicious pizza with grilled chicken and BBQ sauce.',
    kcal: 550
  },
  {
    id: 103,
    categoryId: 'main',
    price: 78000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
    name_uz: 'Hawaiian Pizza',
    name_ru: 'Гавайская пицца',
    name_en: 'Hawaiian Pizza',
    desc_uz: 'Ananas va vetchina bilan mashhur pissa.',
    desc_ru: 'Популярная пицца с ананасами и ветчиной.',
    desc_en: 'Famous pizza with pineapple and ham.',
    kcal: 570
  },
  {
    id: 104,
    categoryId: 'main',
    price: 82000,
    image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&q=80',
    name_uz: 'Italian Supreme Pizza',
    name_ru: 'Итальянская суприм пицца',
    name_en: 'Italian Supreme Pizza',
    desc_uz: 'Barcha masalliqlar jamlangan boy italyancha pissa.',
    desc_ru: 'Богатая итальянская пицца со всеми ингредиентами.',
    desc_en: 'Rich Italian pizza with all the toppings.',
    kcal: 600
  },
  // Burgers
  {
    id: 105,
    categoryId: 'burgers',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    name_uz: 'Chizburger',
    name_ru: 'Чизбургер',
    name_en: 'Cheeseburger',
    desc_uz: 'Klassik chizburger maxsus sous bilan.',
    desc_ru: 'Классический чизбургер со специальным соусом.',
    desc_en: 'Classic cheeseburger with special house sauce.',
    kcal: 480
  },
  // Drinks
  {
    id: 5,
    categoryId: 'drinks',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80',
    name_uz: 'Limonad',
    name_ru: 'Лимонад',
    name_en: 'Lemonade',
    desc_uz: 'Yalpiz va limon bilan tayyorlangan tetiklantiruvchi ichimlik.',
    desc_ru: 'Освежающий напиток с мятой и лимоном.',
    desc_en: 'Refreshing drink with mint and lemon.',
    kcal: 120
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
    calories: 'Kaloriya',
    share: 'Ulashish'
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
    calories: 'Калории',
    share: 'Поделиться'
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
    calories: 'Calories',
    share: 'Share'
  }
};


