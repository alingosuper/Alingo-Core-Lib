import { initMap } from './components/MapEngine.js';

export const connectSearchToMap = (mapInstance, searchData) => {
    // سرچ سے آنے والے ڈیٹا کو میپ پر پن کرنا
    console.log("Connecting search query to Map Engine...");
    
    if (searchData && searchData.coords) {
        const { lat, lng, name } = searchData;
        
        // میپ کو اس لوکیشن پر لے جائیں
        mapInstance.setView([lat, lng], 15);
        
        // پن (Marker) شامل کریں
        L.marker([lat, lng])
            .addTo(mapInstance)
            .bindPopup(`<b>${name}</b>`)
            .openPopup();
    }
};
