const formFilters = document.querySelector('.map__filters');
const filtersOptions = formFilters.querySelectorAll('select');
const filtersFieldset = formFilters.querySelector('fieldset');
const formNotice = document.querySelector('.ad-form');
const noticeFieldsets = formNotice.querySelectorAll('fieldset');
const homeAddress = formNotice.querySelector('#address');
const homeType = formNotice.querySelector('#type');
const homePrice = formNotice.querySelector('#price');
const timeIn = formNotice.querySelector('#timein');
const timeOut = formNotice.querySelector('#timeout');

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

timeIn.addEventListener('change', function () {
  if (timeIn.value === '12:00') {
    timeOut.value = '12:00';
  } else if (timeIn.value === '13:00') {
    timeOut.value = '13:00';
  } else {
    timeOut.value = '14:00';
  }
});

timeOut.addEventListener('change', function () {
  if (timeOut.value === '12:00') {
    timeIn.value = '12:00';
  } else if (timeOut.value === '13:00') {
    timeIn.value = '13:00';
  } else {
    timeIn.value = '14:00';
  }
});

export {formNotice, noticeFieldsets, formFilters, filtersOptions, filtersFieldset, homeAddress};
