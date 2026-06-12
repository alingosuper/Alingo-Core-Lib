// js/intent-handler.js
export const IntentHandler = {
    handle(transcript) {
        const text = transcript.toLowerCase();

        // 1. کیب کی درخواست (AlinGo Ride)
        if (text.includes("گھر جانا ہے") || text.includes("ride") || text.includes("کیب")) {
            return { route: "BOOK_RIDE", data: { destination: "home" } };
        }

        // 2. کال کرنے کا فنکشن (کالنگ ایپ/سروس کو ٹرگر کرنا)
        if (text.includes("کال کرنی ہے") || text.includes("call")) {
            const contactName = text.split("کال کرنی ہے")[1] || "unknown";
            return { route: "MAKE_CALL", data: { target: contactName } };
        }

        // 3. ڈیفالٹ سرچ
        return { route: "GENERAL_SEARCH", query: transcript };
    }
};
