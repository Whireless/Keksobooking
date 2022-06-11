import {formNotice, noticeFieldsets, formFilters, filtersFieldset, filtersOptions, homeAddress} from './form.js';
import {createAnnouncement} from './announcement.js';
import {createFetch} from './server.js';

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

homeAddress.value = marker.getLatLng();

marker.on('moveend', (evt) => {
  homeAddress.value = evt.target.getLatLng();
});

createFetch().then((announceList) => {
  announceList.forEach((elem) => {
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
