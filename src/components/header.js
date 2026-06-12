export const renderHeader = () => {
    return `
    <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-40 select-none">
        <div class="flex items-center justify-between p-2.5 gap-2">
            
            <div class="flex items-center gap-1.5 shrink-0">
                <button onclick="window.toggleAlinGoSidebar(true)" class="p-1 text-gray-700 active:scale-90 transition-transform">
                    <span class="material-icons text-2xl block">menu</span>
                </button>
                <div class="flex flex-col items-center">
                    <img src="logo.png" class="h-8 object-contain" alt="AlinGo" onerror="this.src='https://via.placeholder.com/80x30?text=TEZRO'">
                    <span class="text-[7px] text-green-600 font-bold -mt-0.5 uppercase tracking-tighter">All In One</span>
                </div>
            </div>
            
            <div class="flex-grow h-10 flex items-center justify-center overflow-hidden">
                <img src="header-stiker.png" class="w-full h-full object-contain rounded-md" alt="Promo Sticker" onerror="this.style.display='none'">
            </div>
            
            <div class="flex items-center shrink-0 pr-1">
                <button class="relative p-1 text-gray-600 active:scale-90 transition-transform">
                    <span class="material-icons text-xl block">notifications_none</span>
                    <span class="absolute top-0 right-0 h-3 w-3 bg-red-600 text-white text-[7px] font-black flex items-center justify-center rounded-full">3</span>
                </button>
            </div>

        </div>

        <div class="p-3 pt-1 flex items-center gap-2">
            <div class="relative flex-grow">
                <span class="material-icons absolute left-3 top-2.5 text-gray-400 text-lg">search</span>
                <input type="text" placeholder="Search services, shops & more..." class="w-full bg-gray-100 pl-10 pr-4 py-2 text-xs border border-transparent focus:bg-white focus:border-gray-300 outline-none transition-all rounded-lg">
            </div>
            <button class="bg-gray-100 p-2 text-gray-600 border border-transparent hover:border-gray-300 rounded-lg">
                <span class="material-icons text-lg block">tune</span>
            </button>
        </div>
    </header>
    `;
};

