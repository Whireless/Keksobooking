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

// Cортировка массива случайной длинны
const getSortingArray = (arr) => arr.slice(randomNum(0, arr.length - 1));

export {randomNum, coordinates, getRandomArrayElement, getSortingArray};
