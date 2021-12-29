// Генерация случайного числа

const randomNum = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  } else if (max === min) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Генерация числа с плавающей запятой

const coordinates = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  } else if (max === min) {
    return min;
  }
  return Math.random() * (max - min) + min;
}

// Рандомный элемент массива

const getRandomArrayElement = (elements) => elements[randomNum(0, elements.length - 1)];

// Функция для сортировки случайной длинны

const getSortingArray = (arr) => arr.slice(randomNum(0, arr.length - 1));

// Временные константы

const ALL_LOCATION = 10;
const locationList = [];

const TITLE = [
      'Пентхаус',
      'Лофт-отель',
      'Хибара',
      'Шикарная квартира',
      'Простенький домик',
      'Отель с шикарным видом',
      'Необычный дом',
      'Дом с привидениями',
      'Комфортный люкс',
      'Двухкомнотная квартира',
];
const ADRESS = 'location.x, location.y';
const PRICE = {
      min: 11000,
      max: 79000
};
const TYPE = ['palace', 'flat', 'house', 'bungalow']
const ROOMS = {
      min: 1,
      max: 7
};
const GUESTS = {
      min: 2,
      max: 8
};
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner'
];
const DESCRIPTION = [
      'Шикарный пентхаус cо всеми удобствами',
      'В нашем отеле о вас будут думать только хорошее',
      'Уникальная хибара, одна на весь город',
      'В нашей квартире есть всё что душе угодно',
      'Просто и со вкусом, ничего лишнего',
      'Отсюда шикарный вид на центральную часть города',
      'Тут всё необычно, даже хоязева',
      'Тут обитают призраки, заглядывай',
      'Люкс. Для солидных господ',
      'Сдаётся 2х-комнатная квартира с удобствами',
];
const PHOTOS = [
      'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const locations = {
    x: coordinates(35.65000, 35.70000),
    y: coordinates(139.70000, 139.80000)
};

// Создание обьектов

const createLocation = function () {
  for (let i = 1; i <= ALL_LOCATION; i++) {
    locationList.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png'
      },
      offer: {
        title: getRandomArrayElement(TITLE),
        address: '' + coordinates(locations.x, locations.y),
        price: randomNum(PRICE.min, PRICE.max),
        type: getRandomArrayElement(TYPE),
        rooms: randomNum(ROOMS.min, ROOMS.max),
        guests: randomNum(GUESTS.min, GUESTS.max),
        checkin: getRandomArrayElement(CHECKIN),
        checkout: getRandomArrayElement(CHECKOUT),
        features: getSortingArray(FEATURES),
        description: getRandomArrayElement(DESCRIPTION),
        photos: getSortingArray(PHOTOS),
      },
      location: {
        x: coordinates(35.65000, 35.70000),
        y: coordinates(139.70000, 139.80000),
      },
    })
  }
  return locationList;
};

createLocation();
console.log(locationList);
