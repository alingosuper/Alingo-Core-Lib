import { triggerMapSearch } from '../search-api.js';

export const startVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ur-PK'; // اردو زبان
    
    recognition.onresult = (event) => {
        const query = event.results[0][0].transcript;
        console.log("Voice Input Detected:", query);
        triggerMapSearch(query); // آواز سے ملنے والے لفظ کو سرچ اور میپ پر بھیجیں
    };
    
    recognition.start();
};
