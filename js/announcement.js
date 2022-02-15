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
  const photo = popup.querySelector('.popup__photo');

  image.src = elem.author.avatar;
  title.textContent = elem.offer.title;
  address.textContent = elem.offer.address;
  price.textContent = `${elem.offer.price} ₽/ночь`;
  type.textContent = elem.offer.type;
  capacity.textContent = `${elem.offer.rooms} комнаты для ${elem.offer.guests} гостей`;
  time.textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;
  features.textContent = '';
  const getFeatures = (arr) => arr.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');
  features.insertAdjacentHTML('afterbegin', getFeatures(elem.offer.features));
  description.textContent = elem.offer.description;
  photo.src = elem.offer.photos;

  return popup;
};

export {createAnnouncement};
