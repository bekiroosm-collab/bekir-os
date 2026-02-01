import React from 'react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* BAŞLIK VE SELAMLAMA */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Günaydın, Bekir.
          </h1>
          <p className="text-gray-400 mt-2">Sistemler aktif. Hedeflere kilitlendi.</p>
        </div>
        <div className="text-right hidden md:block">
          <div className="text-3xl font-mono font-bold">12:02</div>
          <div className="text-sm text-gray-500">Çankırı Merkez</div>
        </div>
      </div>

      {/* KRİTİK METRİKLER (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KART 1: PARAMEDİK */}
        <div className="glass-panel p-5 hover:border-red-500/50 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <span className="text-xs font-mono text-gray-500">FİNAL: 3 GÜN</span>
          </div>
          <h3 className="font-bold text-lg text-white">Anatomi</h3>
          <p className="text-sm text-gray-400 mt-1">İskelet sistemi tekrarı gerekli.</p>
          <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-[65%]"></div>
          </div>
        </div>

        {/* KART 2: NEVAWEB */}
        <div className="glass-panel p-5 hover:border-blue-500/50 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            </div>
            <span className="text-xs font-mono text-green-400">AKTİF PROJE</span>
          </div>
          <h3 className="font-bold text-lg text-white">81 Gün 81 Site</h3>
          <p className="text-sm text-gray-400 mt-1">Bugün: 06 Ankara</p>
          <p className="text-xs text-gray-500 mt-3">EsnafPro Lead: 12 Yeni Aday</p>
        </div>

        {/* KART 3: BEXY STUDIO */}
        <div className="glass-panel p-5 hover:border-purple-500/50 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <span className="text-xs font-mono text-purple-400">YENİ DEMO</span>
          </div>
          <h3 className="font-bold text-lg text-white">Blok3 Vibe</h3>
          <p className="text-sm text-gray-400 mt-1">Kafiye şeması oluşturuluyor.</p>
          <div className="mt-3 flex gap-2">
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">Drill</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">Dark</span>
          </div>
        </div>

        {/* KART 4: İLİŞKİ */}
        <div className="glass-panel p-5 hover:border-pink-500/50 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <span className="text-xs font-mono text-pink-300">14 ŞUBAT</span>
          </div>
          <h3 className="font-bold text-lg text-white">Kalan: 12 Gün</h3>
          <p className="text-sm text-gray-400 mt-1">Hediye planı beklemede.</p>
          <button className="w-full mt-3 text-xs bg-pink-500/10 text-pink-400 py-2 rounded hover:bg-pink-500 hover:text-white transition-all">
            Plan Yap
          </button>
        </div>

      </div>

      {/* GENİŞ AI BÖLÜMÜ */}
      <div className="glass-panel p-6 border-blue-500/30">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Bekir AI Asistan
        </h2>
        {/* DÜZELTİLEN KISIM BURASI */}
        <div className="bg-black/40 rounded-xl p-4 min-h-[150px] text-gray-300 font-mono text-sm">
          &gt; Sistem taraması tamamlandı.<br/>
          &gt; EsnafPro veritabanında 2 yeni potansiyel müşteri var (Çankırı Merkez).<br/>
          &gt; Hatırlatma: İnovasyon ödevi için son 4 saat.<br/>
          <span className="animate-pulse">_</span>
        </div>
        <div className="mt-4 flex gap-2">
          <input type="text" placeholder="Bir komut ver (Örn: Yeni şarkı sözü yaz...)" className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Gönder
          </button>
        </div>
      </div>

    </div>
  );
}
