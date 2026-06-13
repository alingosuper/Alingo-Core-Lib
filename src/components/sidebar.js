export const renderSidebar = () => {
    return `
    <div id="AlinGo-sidebar" class="fixed inset-0 z-50 invisible transition-all duration-300 select-none">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="window.toggleAlinGoSidebar(false)"></div>
        
        <div id="sidebar-content" class="absolute top-0 right-0 bottom-0 w-64 bg-white shadow-2xl flex flex-col translate-x-full transition-transform duration-300 border-l border-gray-200">
            
            <div class="bg-[#0A192F] p-4 text-white flex items-center gap-3">
                <div class="w-10 h-10 bg-green-600 flex items-center justify-center font-black text-sm border border-green-500">
                    SZ
                </div>
                <div>
                    <h4 class="text-xs font-black tracking-wide">شاہ زیب بھائی</h4>
                    <p class="text-[8px] text-gray-400 font-bold">+92 300 1234567</p>
                </div>
            </div>

            <div class="flex-grow overflow-y-auto py-2">
                ${buildSidebarLink("🏠", "Home Dashboard", "window.switchMainTab('home'); window.toggleAlinGoSidebar(false);")}
                ${buildSidebarLink("💳", "My Wallet / Cards", "window.switchMainTab('wallet'); window.toggleAlinGoSidebar(false);")}
                ${buildSidebarLink("📦", "Order History", "window.switchMainTab('bookings'); window.toggleAlinGoSidebar(false);")}
                ${buildSidebarLink("🛡️", "Security & Privacy", "alert('Security Engine Active')")}
                ${buildSidebarLink("🛠️", "Partner Registration", "alert('AlinGo Partner Portal')")}
                ${buildSidebarLink("📞", "Help & Support 24/7", "alert('Connecting Support...')")}
                
                <hr class="border-gray-100 my-2">
                
                ${buildSidebarLink("⚙️", "App Settings", "alert('Settings Panel')")}
            </div>

            <div class="p-3 bg-gray-50 border-t border-gray-200">
                <button onclick="alert('Logging out...')" class="w-full bg-red-600 text-white text-[10px] font-black py-2 hover:bg-red-700 active:scale-95 transition-transform flex items-center justify-center gap-1">
                    <span class="material-icons text-xs">logout</span>
                    LOGOUT FROM TEZRO
                </button>
            </div>
        </div>
    </div>
    `;
};

// ہیلپر: سائیڈ بار لنک میکر
function buildSidebarLink(emoji, title, action) {
    return `
    <div onclick="${action}" class="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-black border-r-2 border-transparent hover:border-green-600 transition-all">
        <span class="text-xs">${emoji}</span>
        <span class="text-[10px] font-bold">${title}</span>
    </div>
    `;
}
