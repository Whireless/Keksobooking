const ANNOUNCEMENT_COUNT = 10;

// let announceList = [];

const createFetch = () => {
  return fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((announces) => {
   return announces.splice(0, ANNOUNCEMENT_COUNT);
  })
  .catch((err) => {
    throw err;
  })
};

export {createFetch};
