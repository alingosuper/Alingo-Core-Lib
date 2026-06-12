
// js/firebase-sync.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { 
    getFirestore, 
    enableIndexedDbPersistence, 
    doc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// 1. کنفیگریشن
const firebaseConfig = { 
    /* اپنی Firebase کنسول سے حاصل کردہ کنفیگریشن یہاں لگائیں */ 
};

// 2. انیشلائزیشن
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 3. آف لائن سپورٹ (IndexedDB)
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
        console.error("متعدد ٹیبز کھلے ہونے کی وجہ سے آف لائن سپورٹ فعال نہ ہو سکی۔");
    } else if (err.code == 'unimplemented') {
        console.error("براؤزر آف لائن سپورٹ نہیں کرتا۔");
    }
});

// 4. سیکیور ڈیٹا سنک (صرف ہیش اپلوڈ کریں)
export async function secureSync(userId, voiceHash) {
    try {
        await setDoc(doc(db, "users", userId), {
            voiceHash: voiceHash, // سیکیورٹی: صرف ہیش، کوئی آڈیو فائل نہیں
            lastUpdated: new Date().toISOString()
        });
        console.log("ڈیٹا کامیابی سے سنک ہو گیا");
    } catch (error) {
        console.error("ڈیٹا سنک کرنے میں غلطی:", error);
    }
}
