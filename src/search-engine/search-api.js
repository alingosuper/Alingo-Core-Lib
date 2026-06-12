import { performSearch } from './js/search-engine.js';

export const triggerMapSearch = async (query) => {
    const results = await performSearch(query);
    if (results.length > 0) {
        // ایونٹ بس کے ذریعے میپ کو ڈیٹا بھیجنا
        window.dispatchEvent(new CustomEvent('SEARCH_RESULT_RECEIVED', { 
            detail: results[0] // پہلا رزلٹ نقشے پر پن کریں
        }));
    }
};
