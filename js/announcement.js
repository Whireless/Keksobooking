const cardTemp = document.querySelector('#card').content;

const createAnnouncement = (elem) => {
  const card = cardTemp.cloneNode(true);
  const popup = card.querySelector('.popup');
  const image = popup.querySelector('.popup__avatar');
  const title = popup.querySelector('.popup__title');
  const address = popup.querySelector('.popup__text--address');
  const price = popup.querySelector('.popup__text--price');
  const type = popup.querySelector('.popup__type');
  const capacity = popup.querySelector('.popup__text--capacity');
  const time = popup.querySelector('.popup__text--time');
  const features = popup.querySelector('.popup__features');
  const description = popup.querySelector('.popup__description');
  const photos = popup.querySelector('.popup__photos');

  image.src = elem.author.avatar;
  title.textContent = elem.offer.title;
  address.textContent = elem.offer.address;
  price.textContent = `${elem.offer.price} ₽/ночь`;

  if (elem.offer.type === 'flat') {
    type.textContent = 'Квартира'
  } else if (elem.offer.type === 'hotel') {
    type.textContent = 'Отель'
  } else if (elem.offer.type === 'house') {
    type.textContent = 'Дом'
  } else {
    type.textContent = 'Бунгало'
  }

  capacity.textContent = `${elem.offer.rooms} комнаты для ${elem.offer.guests} гостей`;
  time.textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;

  features.textContent = '';
  if (elem.offer.features) {
    const getFeatures = (arr) => arr.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');
    features.insertAdjacentHTML('afterbegin', getFeatures(elem.offer.features));
  }

  description.textContent = elem.offer.description;

  photos.textContent = '';
  if (elem.offer.photos) {
    const getPhotos = (arr) => arr.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join('');
    photos.insertAdjacentHTML('afterbegin', getPhotos(elem.offer.photos))
  }

  return popup;
};

export {createAnnouncement};
