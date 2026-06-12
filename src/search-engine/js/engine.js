// js/engine.js
export const VoiceEngine = {
    timer: null,
    
    // 1. انجن کو شروع کرنا (Initialization)
    init() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.error("Speech Recognition ناٹ سپورٹڈ");
            return null;
        }
        const recognition = new SpeechRecognition();
        recognition.lang = navigator.language; 
        recognition.continuous = false;
        // کانفیڈنس لیول کے لیے ضروری ہے کہ انٹرٹیم رزلٹ آن نہ ہو یا کسٹم لاجک استعمال ہو
        recognition.interimResults = false; 
        return recognition;
    },

    // 2. یوزر کی آواز کا موازنہ (Biometric Verification)
    verifyUser(currentAudioHash) {
        const savedHash = localStorage.getItem("user_voice_hash");
        return savedHash === currentAudioHash;
    },

    // 3. سلیپ موڈ ٹائمر (Inactivity Timer)
    startInactivityTimer(callback, duration = 30000) { 
        this.timer = setTimeout(callback, duration);
    },

    resetTimer(callback, duration = 30000) {
        clearTimeout(this.timer);
        this.startInactivityTimer(callback, duration);
    },

    // 4. Noise Filter: آڈیو کو فلٹر کرنا
    async setupAudioContext(stream) {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioCtx.createMediaStreamSource(stream);
        const filter = audioCtx.createBiquadFilter();
        
        filter.type = 'bandpass';
        filter.frequency.value = 1000; // انسانی آواز کی فریکوئنسی
        source.connect(filter);
        return filter;
    },

    // 5. Confidence Check: آواز کے یقین کا معیار (80%+)
    isConfidenceValid(result) {
        // نوٹ: SpeechRecognition Result میں confidence براہ راست دستیاب نہیں ہوتا،
        // یہ Web Speech API کے ڈیزائن میں ہے، لہذا یہ لاجک ان انٹرفیسز کے لیے ہے 
        // جہاں confidence سپورٹڈ ہے۔
        return result.confidence >= 0.8;
    }
};
