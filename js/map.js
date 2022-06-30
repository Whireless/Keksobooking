import {formNotice, noticeFieldsets, formFilters, filtersFieldset, filtersOptions, homeAddress, formReset} from './form.js';
import {createAnnouncement} from './announcement.js';
import {getData, sendData} from './server.js';
import {sendSuccess, sendFail} from './form.js';

const map = L.map('map-canvas')
  .on('load', () => {
    formNotice.classList.remove('ad-form--disabled');
    formFilters.classList.remove('map__filters--disabled');

    noticeFieldsets.forEach(fieldset => {
      fieldset.disabled = false;
    });

    filtersOptions.forEach(option => {
      option.disabled = false;
    });

    filtersFieldset.disabled = false;
  })
  .setView({
    lat: 35.6880,
    lng: 139.740,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const youPinIcon = L.icon({
  iconUrl: '../leaflet/images/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.6837,
    lng: 139.753,
  },
  {
    draggable: true,
    icon: youPinIcon,
  },
).addTo(map);

homeAddress.value = Object.values(marker.getLatLng());

marker.on('moveend', (evt) => {
  homeAddress.value = Object.values(evt.target.getLatLng());
});

formNotice.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  console.log(formData);
  sendData(sendSuccess, sendFail, formData);
});

// getResetAddress(marker, homeAddress);

// formReset.addEventListener('click', () => {

//   const newMarker = L.marker(
//     {
//       lat: 35.6837,
//       lng: 139.753,
//     },
//     {
//       draggable: true,
//       icon: youPinIcon,
//     },
//   ).addTo(map);
//   homeAddress.value = newMarker.getLatLng();
// });

getData().then((announces) => {
  announces.forEach((elem) => {
    const icon = L.icon(
      {
        iconUrl: './leaflet/images/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      },
    );

    const marker = L.marker(
      {
        lat: elem.location.lat,
        lng: elem.location.lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(createAnnouncement(elem),
        {
          keepInView: true,
        },
      );
  });
});
