// Генерация случайного числа
const getRandomNum = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  } else if (max === min) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Генерация числа с плавающей запятой
const getFloatNum = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  } else if (max === min) {
    return min;
  }
  return Math.random() * (max - min) + min;
};

// Рандомный элемент массива
const getRandomArrElement = (elements) => elements[getRandomNum(0, elements.length - 1)];

// Cортировка массива случайной длинны
const getSortingArr = (arr) => arr.slice(getRandomNum(0, arr.length - 1));

// Создание отдельных DOM - элементов
const createElement = (tagName, parentTag, classOne, classTwo, text, width, height, src, alt) => {
  let element = document.createElement(tagName);
  element.classList.add(classOne);

  if (parentTag) {
    parentTag.appendChild(element);
  }

  if (classTwo) {
    element.classList.add(classTwo);
  }

  if (text) {
    element.textContent = text;
  }

  if (width && height && src && alt) {
    element.setAttribute('width', width);
    element.setAttribute('height', height);
    element.setAttribute('src', src);
    element.setAttribute('alt', alt);
  }
  return element;
};

const isEscEvt = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc'
};

export {getRandomNum, getFloatNum, getRandomArrElement, getSortingArr, createElement, isEscEvt};
