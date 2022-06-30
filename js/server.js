const ANNOUNCEMENT_COUNT = 10;

const getData = () => {
  return fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((announces) => announces.splice(0, ANNOUNCEMENT_COUNT))
    .catch((err) => {throw err})
};

const sendData = (success, fail, formData) => {
  return fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
  .then((response) => {
    console.log(response.ok, response.status);

    if (response.ok) {
      success();
      return response.json;
    } else {
      fail();
    }
  })
  .catch((err) => console.log(err))
};

export {sendData, getData};
