import {getRandomNum, getFloatNum, getRandomArrElement, getSortingArr} from './util.js';

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

const locations = {
  x: getFloatNum(35.65000, 35.70000),
  y: getFloatNum(139.70000, 139.80000),
};

const PRICE = {
  min: 0,
  max: 50000,
};

const TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const ROOMS = {
  min: 2,
  max: 7,
};

const GUESTS = {
  min: 2,
  max: 8,
};

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
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

// Создание обьектов с данными
const generationData = () => {
  for (let i = 1; i <= ALL_LOCATION; i++) {
    locationList.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png',
      },
      offer: {
        title: getRandomArrElement(TITLE),
        address: `${locations.x}, ${locations.y}`,
        price: getRandomNum(PRICE.min, PRICE.max),
        type: getRandomArrElement(Object.values(TYPE)),
        rooms: getRandomNum(ROOMS.min, ROOMS.max),
        guests: getRandomNum(GUESTS.min, GUESTS.max),
        checkin: getRandomArrElement(CHECKIN),
        checkout: getRandomArrElement(CHECKOUT),
        features: getSortingArr(FEATURES),
        description: getRandomArrElement(DESCRIPTION),
        photos: getRandomArrElement(PHOTOS),
      },
      location: {
        x: getFloatNum(35.65000, 35.70000),
        y: getFloatNum(139.70000, 139.80000),
      },
    })
  }
  return locationList;
};
generationData();

export {locationList};
