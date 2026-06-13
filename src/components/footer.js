export const renderFooter = (activeTab = 'home') => {
    return `
    <footer class="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 select-none flex flex-col">
        <div class="relative bg-[#0A192F] px-1 py-1 flex items-center justify-between shadow-2xl rounded-t-2xl h-14">
            <div class="flex flex-1 justify-around items-center z-10">
                ${buildFooterTab("scan", "qr_code_2", "Scan & Pay", activeTab)}
                ${buildFooterTab("categories", "apps", "Categories", activeTab)}
                ${buildFooterTab("bookings", "receipt_long", "Orders", activeTab)}
            </div>
            <div class="relative -top-5 flex flex-col items-center justify-center shrink-0 mx-2 z-20">
                <button onclick="window.switchMainTab('home')" class="w-14 h-14 bg-white border-4 border-[#0A192F] rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-all bg-gradient-to-b from-white to-gray-50">
                    <img src="logo.png" class="w-9 h-9 object-contain" alt="Home" onerror="this.src='https://via.placeholder.com/40?text=TZ'">
                </button>
            </div>
            <div class="flex flex-1 justify-around items-center z-10">
                ${buildFooterTab("wallet", "account_balance_wallet", "Wallet", activeTab)}
                ${buildFooterTab("offers", "local_offer", "Offers", activeTab)}
                ${buildFooterTab("profile", "person", "Account", activeTab)}
            </div>
        </div>
        <div class="bg-[#F4F9F5] border-t border-gray-100 py-1.5 px-2 flex items-center justify-between gap-1 text-center shadow-inner">
            <div class="flex flex-col items-center flex-1"><div class="flex items-center gap-0.5"><span class="material-icons text-[10px] text-green-700">verified</span><span class="text-[6px] font-black text-[#0A192F]">SAFE & SECURE</span></div><span class="text-[5.5px] font-medium text-gray-500">آپ کی حفاظت ہماری ترجیح</span></div>
            <div class="flex flex-col items-center flex-1"><div class="flex items-center gap-0.5"><span class="material-icons text-[10px] text-green-700">touch_app</span><span class="text-[6px] font-black text-[#0A192F]">EASY TO USE</span></div><span class="text-[5.5px] font-medium text-gray-500">آسان اور تیز استعمال</span></div>
            <div class="flex flex-col items-center flex-1"><div class="flex items-center gap-0.5"><span class="material-icons text-[10px] text-green-700">credit_card</span><span class="text-[6px] font-black text-[#0A192F]">MULTIPLE PAYMENT</span></div><span class="text-[5.5px] font-medium text-gray-500">کئی ادائیگی کے طریقے</span></div>
            <div class="flex flex-col items-center flex-1"><div class="flex items-center gap-0.5"><span class="material-icons text-[10px] text-green-700">stars</span><span class="text-[6px] font-black text-[#0A192F]">100% SATISFACTION</span></div><span class="text-[5.5px] font-medium text-gray-500">مکمل اطمینان کی ضمانت</span></div>
        </div>
    </footer>`;
};
function buildFooterTab(id, icon, label, activeTab) {
    const isActive = id === activeTab;
    const colorClass = isActive ? "text-green-400" : "text-white/80";
    return `<button onclick="window.switchMainTab('${id}')" class="flex flex-col items-center justify-center w-11 h-11 active:scale-90 transition-transform ${colorClass}"><span class="material-icons text-base block">${icon}</span><span class="text-[7px] font-black tracking-tighter mt-0.5 whitespace-nowrap">${label}</span></button>`;
}
export const Footer = () => `
  <footer style="background:#0a1930; color:white; padding:15px; display:flex; justify-content:space-around; align-items:center; border-radius:15px 15px 0 0;">
    <div style="text-align:center;">🏠<br><small>Home</small></div>
    <div style="text-align:center;">▦<br><small>Categories</small></div>
    <div style="text-align:center;">💼<br><small>Orders</small></div>
    <div style="background:green; padding:10px; border-radius:50%; margin-top:-30px;">TEZRO</div>
    <div style="text-align:center;">💳<br><small>Wallet</small></div>
    <div style="text-align:center;">⭐<br><small>Offers</small></div>
    <div style="text-align:center;">👤<br><small>Account</small></div>
  </footer>

  <div style="background:#f4f7f6; padding:15px; display:flex; justify-content:space-between; font-size:10px; border-top:1px solid #ddd;">
    <div style="text-align:center;">🛡️<br><b>SAFE</b><br>محفوظ</div>
    <div style="text-align:center;">👆<br><b>EASY</b><br>آسان</div>
    <div style="text-align:center;">💳<br><b>PAYMENT</b><br>ادائیگی</div>
    <div style="text-align:center;">✅<br><b>SATISFIED</b><br>اطمینان</div>
  </div>
`;
