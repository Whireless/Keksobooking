const MIN_TITLE_LENGTH = 30;
const MAX__TITLE_LENGTH = 100;
const MAX__PRICE = 1000000;

const formFilters = document.querySelector('.map__filters');
const filtersOptions = formFilters.querySelectorAll('select');
const filtersFieldset = formFilters.querySelector('fieldset');
const formNotice = document.querySelector('.ad-form');
const noticeFieldsets = formNotice.querySelectorAll('fieldset');
const homeTitle = formNotice.querySelector('#title');
const homeAddress = formNotice.querySelector('#address');
const homeType = formNotice.querySelector('#type');
const homePrice = formNotice.querySelector('#price');
const timeIn = formNotice.querySelector('#timein');
const timeOut = formNotice.querySelector('#timeout');
const rooms = formNotice.querySelector('#room_number');
const capacity = formNotice.querySelector('#capacity');
const capOption = capacity.querySelectorAll('#capacity option');

formNotice.classList.add('ad-form--disabled');
formFilters.classList.add('map__filters--disabled');

homeAddress.disabled = true;
filtersFieldset.disabled = true;

noticeFieldsets.forEach(fieldset => {
  fieldset.disabled = true;
});

filtersOptions.forEach(option => {
  option.disabled = true;
});

homeTitle.addEventListener('input', () => {
  const valueLength = homeTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    homeTitle.setCustomValidity(`Заголовок должен быть более 30 символов.
                                  (Добавьте ещё ${MIN_TITLE_LENGTH - valueLength} симв.)`);
  } else if (valueLength > MAX__TITLE_LENGTH) {
    homeTitle.setCustomValidity(`Заголовок должен быть менее 100 символов.
                                  (Удалите лишние ${valueLength - MAX__TITLE_LENGTH} симв.)`);
  } else {
    homeTitle.setCustomValidity('');
  };

  homeTitle.reportValidity();
});

homeType.addEventListener('change', function () {
  if (homeType.value === 'bungalow') {
    homePrice.min = 0;
    homePrice.placeholder = 0;
   } else if (homeType.value === 'flat') {
     homePrice.min = 1000;
     homePrice.placeholder = 1000;
   } else if (homeType.value === 'house') {
     homePrice.min = 5000;
     homePrice.placeholder = 5000;
   } else {
     homePrice.min = 10000;
     homePrice.placeholder = 10000;
   }
});

homePrice.addEventListener('input', () => {
  const value = homePrice.value;

  if (value > MAX__PRICE) {
    homePrice.setCustomValidity(`Нельзя установить ценник выше ${MAX__PRICE}`);
  } else {
    homePrice.setCustomValidity('');
  };

  homePrice.reportValidity();
});

timeIn.addEventListener('change', () => {
  if (timeIn.value === '12:00') {
    timeOut.value = '12:00';
  } else if (timeIn.value === '13:00') {
    timeOut.value = '13:00';
  } else {
    timeOut.value = '14:00';
  }
});

timeOut.addEventListener('change', () => {
  if (timeOut.value === '12:00') {
    timeIn.value = '12:00';
  } else if (timeOut.value === '13:00') {
    timeIn.value = '13:00';
  } else {
    timeIn.value = '14:00';
  }
});

rooms.addEventListener('change', () => {
  if (rooms.value === '1') {
    capacity.value = '1';
    capOption[0].disabled = true;
    capOption[1].disabled = true;
    capOption[3].disabled = true;
  } else if (rooms.value === '2') {
    capacity.value = '2';
    capOption[0].disabled = true;
    capOption[1].disabled = false;
    capOption[2].disabled = false;
    capOption[3].disabled = true;
  } else if (rooms.value === '3') {
    capacity.value = '3';
    capOption[0].disabled = false;
    capOption[1].disabled = false;
    capOption[2].disabled = false;
    capOption[3].disabled = true;
  } else {
    capacity.value = '0';
    capOption[0].disabled = true;
    capOption[1].disabled = true;
    capOption[2].disabled = true;
    capOption[3].disabled = false;
  };
});

export {formNotice, noticeFieldsets, formFilters, filtersOptions, filtersFieldset, homeAddress};
