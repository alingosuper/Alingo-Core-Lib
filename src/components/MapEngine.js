
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';



export const initMap = (containerId, lat, lng) => {

  const map = L.map(containerId).setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: 'AlinGo Map Engine'

  }).addTo(map);

  return map;

};

