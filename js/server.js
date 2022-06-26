import {isEscEvt} from './util.js'

const ANNOUNCEMENT_COUNT = 10;

const body = document.querySelector('body');

const getData = () => {
  return fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((announces) => announces.splice(0, ANNOUNCEMENT_COUNT))
    .catch((err) => {throw err})
};

const sendData = (formData) => {
  return fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
      type: 'multipart/form-data',
    },
  )
  .then((response) => {
    console.log(response.ok, response.status);

    if (response.ok) {
      const sccsTemplate = body.querySelector('#success').content;
      const sccsClone = sccsTemplate.cloneNode(true);
      const sccsBlock = sccsClone.querySelector('.success');
      sccsBlock.style.display = 'block';
      body.append(sccsBlock);

      body.addEventListener('keydown', (evt) => {
        if (isEscEvt(evt)) {
          evt.preventDefault();
          sccsBlock.remove();
        }
      });

      body.addEventListener('click', () => {
        sccsBlock.remove();
      });

      return response.json;
    } else {
      const errTemplate = body.querySelector('#error').content;
      const errClone = errTemplate.cloneNode(true);
      const errBlock = errClone.querySelector('.error');
      const errButton = errClone.querySelector('.error__button');
      errBlock.style.display = 'block';
      body.append(errBlock);

      body.addEventListener('keydown', (evt) => {
        if (isEscEvt(evt)) {
          evt.preventDefault();
          errBlock.remove();
        }
      });

      body.addEventListener('click', () => {
        errBlock.remove();
      });
    }
  })
  .catch((err) => console.log(err))
};

export {getData, sendData};
