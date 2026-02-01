"use client";
import { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, TrendingUp, AlertCircle, ArrowRight, BrainCircuit } from 'lucide-react';

export default function Dashboard() {
  const [greeting, setGreeting] = useState('');
  
  // Saate göre karşılama
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Günaydın');
    else if (hour < 18) setGreeting('Tünaydın');
    else setGreeting('İyi Geceler');
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* 1. HEADER BÖLÜMÜ */}
      <header className="flex justify-between items-end pb-6 border-b border-gray-800">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
            {greeting}, Bekir.
          </h1>
          <p className="text-gray-400 mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Sistemler %100 operasyonel. Çankırı Merkez lokasyonu aktif.
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-bold text-white">
            {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-sm text-gray-500 font-medium">
            {new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </div>
      </header>

      {/* 2. GÜNLÜK AI RAPORU (Dinamik Görünüm) */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <BrainCircuit size={100} />
        </div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <BrainCircuit size={24} /> Günlük Operasyon Özeti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* Paramedik Durumu */}
          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
            <div className="text-xs text-gray-400 font-mono mb-2">AKADEMİK DURUM</div>
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle size={20} className="text-red-400" />
              <span className="font-bold text-white">Fizyoloji Finali</span>
            </div>
            <p className="text-sm text-gray-300">Kalan süre: 3 Gün. Sinir sistemi notları henüz tekrar edilmedi.</p>
            <div className="w-full bg-gray-700 h-1.5 mt-3 rounded-full">
              <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>

          {/* İş Durumu */}
          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
            <div className="text-xs text-gray-400 font-mono mb-2">NEVAWEB & ESNAF</div>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={20} className="text-green-400" />
              <span className="font-bold text-white">81 Gün / 06 Ankara</span>
            </div>
            <p className="text-sm text-gray-300">Bugünün görevi: Ankara dönercisi için landing page tasarımı.</p>
            <button className="text-xs text-green-400 mt-3 font-bold hover:underline">Projeye Git →</button>
          </div>

          {/* İlişki Durumu */}
          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
            <div className="text-xs text-gray-400 font-mono mb-2">İLİŞKİ LOG</div>
            <div className="flex items-center gap-3 mb-2">
              <Heart size={20} className="text-pink-400" />
              <span className="font-bold text-white">14 Şubat Alarmı</span>
            </div>
            <p className="text-sm text-gray-300">Hediye araştırması için son hafta. Bütçe planlaması gerekli.</p>
          </div>
        </div>
      </section>

      {/* 3. HIZLI ERİŞİM & FİNANS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Sol Kolon: Yapılacaklar */}
        <div className="lg:col-span-2 bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Anlık Görev Listesi</h3>
            <button className="text-sm bg-white text-black px-3 py-1 rounded-lg font-bold hover:bg-gray-200">+ Ekle</button>
          </div>
          <div className="space-y-3">
            {[
              { title: 'İnovasyon dersi final özeti çıkar', tag: 'Okul', done: false },
              { title: 'EsnafPro veritabanı yedeğini al', tag: 'Yazılım', done: true },
              { title: 'Bexy - Yeni parça kapak tasarımı (DALL-E)', tag: 'Müzik', done: false },
              { title: 'Sevgiliyle akşam yemeği planı', tag: 'Özel', done: false },
            ].map((task, i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-gray-800">
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${task.done ? 'bg-green-500 border-green-500' : 'border-gray-600'}`}>
                    {task.done && <CheckCircle2 size={14} className="text-black" />}
                  </div>
                  <span className={task.done ? 'text-gray-600 line-through' : 'text-gray-200'}>{task.title}</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">{task.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Kolon: Finans & Sayaç */}
        <div className="space-y-6">
          {/* Finans Özeti */}
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-gray-400 text-sm mb-4">FİNANSAL DURUM</h3>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-3xl font-bold text-white">₺12.450</span>
              <span className="text-green-500 text-sm font-bold">+₺2.100 (Bu Ay)</span>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Nevaweb Gelir</span>
                <span className="text-white">₺8.000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">EsnafPro</span>
                <span className="text-white">₺4.450</span>
              </div>
              <div className="w-full bg-gray-800 h-1 mt-2 rounded-full">
                <div className="bg-blue-600 h-1 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-[10px] text-gray-500 text-right mt-1">Hedef: ₺20.000 / Ay</p>
            </div>
          </div>

          {/* Motivasyon / Quote */}
          <div className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 rounded-2xl p-6">
            <p className="font-serif italic text-lg text-gray-300">"Hayallerin, bahanelerinden büyük olsun Bekir."</p>
            <div className="mt-4 flex items-center gap-2 text-purple-400 text-sm font-bold cursor-pointer hover:text-white transition-colors">
              Savaş Modunu Aç <ArrowRight size={16} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
