"use client";
import { useState } from 'react';
import { BookOpen, Activity, PlayCircle, FileText } from 'lucide-react';

export default function ParamedicPage() {
  const [activeTab, setActiveTab] = useState('study');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Üst Başlık */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Paramedik 112 Üssü</h1>
          <p className="text-gray-400">Akademik takip ve simülasyon merkezi.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('study')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'study' ? 'bg-red-600 text-white' : 'bg-gray-900 text-gray-400'}`}
          >
            Ders Çalışma
          </button>
          <button 
            onClick={() => setActiveTab('sim')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'sim' ? 'bg-red-600 text-white' : 'bg-gray-900 text-gray-400'}`}
          >
            Vaka Simülatörü
          </button>
        </div>
      </div>

      {activeTab === 'study' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ders Kartı 1 */}
          <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl hover:border-red-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-red-900/20 text-red-500 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <span className="text-xs font-bold bg-red-900/30 text-red-400 px-2 py-1 rounded">FİNAL</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Anatomi</h3>
            <p className="text-sm text-gray-400 mb-4">İskelet sistemi, kas sistemi ve dolaşım sistemi detaylı tekrar.</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>İlerleme</span>
                <span>%65</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full w-[65%]"></div>
              </div>
            </div>
          </div>

          {/* Ders Kartı 2 */}
          <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-900/20 text-blue-500 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <span className="text-xs font-bold bg-blue-900/30 text-blue-400 px-2 py-1 rounded">SINAV: YARIN</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Fizyoloji</h3>
            <p className="text-sm text-gray-400 mb-4">Hücre fizyolojisi ve sinir sistemi potansiyelleri.</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>İlerleme</span>
                <span>%40</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[40%]"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SİMÜLATÖR ALANI */
        <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden flex flex-col md:flex-row h-[500px]">
          <div className="w-full md:w-1/3 bg-gray-900/50 p-6 border-r border-gray-800">
            <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2">
              <AlertCircle size={18} /> ACİL ÇAĞRI
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <p><strong className="text-white">Vaka:</strong> Trafik Kazası</p>
              <p><strong className="text-white">Yaş/Cinsiyet:</strong> 19 / Erkek</p>
              <p><strong className="text-white">Durum:</strong> Bilinç kapalı, solunum yüzeyel.</p>
              <div className="bg-black p-4 rounded-lg font-mono text-green-400 text-xs mt-6">
                > Nabız: 120/dk (Taşikardik)<br/>
                > TA: 90/60 mmHg<br/>
                > SpO2: %88<br/>
                > GKS: 7 (E2 V2 M3)
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center items-center relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <h2 className="text-2xl font-bold mb-6 z-10">Müdahale Seçin</h2>
            <div className="grid grid-cols-2 gap-4 z-10 w-full max-w-md">
              <button className="bg-gray-800 hover:bg-red-600 hover:text-white p-4 rounded-xl transition-all border border-gray-700 font-bold">
                A - Havayolu Aç (Entübasyon)
              </button>
              <button className="bg-gray-800 hover:bg-blue-600 hover:text-white p-4 rounded-xl transition-all border border-gray-700 font-bold">
                B - Oksijen Desteği
              </button>
              <button className="bg-gray-800 hover:bg-green-600 hover:text-white p-4 rounded-xl transition-all border border-gray-700 font-bold">
                C - IV Yol Aç / Sıvı
              </button>
              <button className="bg-gray-800 hover:bg-yellow-600 hover:text-white p-4 rounded-xl transition-all border border-gray-700 font-bold">
                D - GKS Değerlendir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
