const form = document.querySelector('.ad-form');
const homeType = form.querySelector('#type');
const homePrice = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

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
