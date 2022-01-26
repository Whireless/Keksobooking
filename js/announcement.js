import {createElement, getRandomArrElement} from './util.js';
import {locationList} from './data.js';

const promo = document.querySelector('.promo');
const card = document.querySelector('#card').content;
const fragment = document.createDocumentFragment();

const createAnnouncement = () => {
  for (let i = 0; i < locationList.length; i++) {
    const popup = card.children[0].cloneNode(false);
    popup.appendChild(createElement('img', 'popup__avatar', null, null, 70, 70, locationList[i].author.avatar, 'Аватар пользователя'));
    popup.appendChild(createElement('h3', 'popup__title', null, locationList[i].offer.title));
    popup.appendChild(createElement('p', 'popup__text', 'popup__text--address', locationList[i].offer.address));
    popup.appendChild(createElement('p', 'popup__text', 'popup__text--price', `${locationList[i].offer.price} ₽/ночь`));
    popup.appendChild(createElement('h4', 'popup__type', null, locationList[i].offer.type));
    popup.appendChild(createElement('p', 'popup__text', 'popup__text--capacity', `${locationList[i].offer.rooms} комнаты для ${locationList[i].offer.guests} гостей`));
    popup.appendChild(createElement('p', 'popup__text', 'popup__text--time', `Заезд после ${locationList[i].offer.checkin}, выезд до ${locationList[i].offer.checkout}`));

    const features = popup.appendChild(createElement('ul', 'popup__features'));
    for (let j = 0; j < locationList[i].offer.features.length; j++) {
      features.appendChild(createElement('li', 'popup__feature', `popup__feature--${locationList[i].offer.features[j]}`));
    };

    popup.appendChild(createElement('p', 'popup__description', null, locationList[i].offer.description));
    const photos = popup.appendChild(createElement('div', 'popup__photos'));
    photos.appendChild(createElement('img', 'popup__photo', null, null, 45, 40, getRandomArrElement(locationList[i].offer.photos), 'Фотография жилья'));
    fragment.appendChild(popup);
  }
  return fragment;
};
createAnnouncement();

promo.appendChild(fragment);
