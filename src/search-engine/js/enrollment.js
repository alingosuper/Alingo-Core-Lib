// js/enrollment.js
export const Enrollment = {
    async registerVoice() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        let chunks = [];

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = async () => {
            const blob = new Blob(chunks);
            const arrayBuffer = await blob.arrayBuffer();
            // آواز کو SHA-256 ہیش میں بدلنا (قلیل ڈیٹا)
            const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const voiceHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            
            localStorage.setItem("user_voice_hash", voiceHash);
            alert("آواز کامیابی سے محفوظ کر لی گئی!");
        };
        mediaRecorder.start();
        setTimeout(() => mediaRecorder.stop(), 3000); // 3 سیکنڈ کی ریکارڈنگ
    }
};
