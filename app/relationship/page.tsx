"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Heart, Gift, Calendar, Sparkles, Trash2 } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function RelationshipPage() {
  const [daysTogether, setDaysTogether] = useState(0);
  const [valentineDays, setValentineDays] = useState(0);
  const [gifts, setGifts] = useState<any[]>([]);
  const [newGift, setNewGift] = useState({ idea: '', price: '' });

  useEffect(() => {
    // 1. İlişki Süresi Hesapla (Örn: Başlangıç 2023-01-01 varsaydım, sen tarihi aşağıdan değiştir)
    const startDate = new Date('2023-01-01'); 
    const today = new Date();
    const diff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDaysTogether(diff);

    // 2. 14 Şubat Geri Sayımı
    const valDate = new Date(today.getFullYear(), 1, 14); // Şubat = 1
    if (today > valDate) valDate.setFullYear(valDate.getFullYear() + 1);
    const vDiff = Math.ceil((valDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    setValentineDays(vDiff);

    fetchGifts();
  }, []);

  async function fetchGifts() {
    const { data } = await supabase.from('relationship_gifts').select('*').order('created_at', { ascending: false });
    if (data) setGifts(data);
  }

  async function addGift() {
    if (!newGift.idea) return;
    await supabase.from('relationship_gifts').insert([{ idea: newGift.idea, price: parseInt(newGift.price) || 0 }]);
    setNewGift({ idea: '', price: '' });
    fetchGifts();
  }

  async function deleteGift(id: number) {
    await supabase.from('relationship_gifts').delete().eq('id', id);
    fetchGifts();
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* SEVGİ KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Sayaç */}
        <div className="bg-gradient-to-br from-pink-900/40 to-black border border-pink-500/30 p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-pink-500/5 blur-3xl"></div>
          <Heart size={48} className="text-pink-500 mb-4 animate-pulse" fill="currentColor" />
          <h2 className="text-5xl font-extrabold text-white mb-2">{daysTogether}</h2>
          <p className="text-pink-200 font-medium">Gündür Birliktesiniz</p>
          <div className="mt-4 text-xs text-pink-400 bg-pink-900/30 px-3 py-1 rounded-full">
            3 Yılın devrildi, hedef sonsuzluk.
          </div>
        </div>

        {/* 14 Şubat Alarmı */}
        <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <Calendar size={24} className="text-red-500" />
            <h3 className="text-xl font-bold">Önemli Tarihler</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-900/10 border border-red-500/20 rounded-xl">
              <div>
                <span className="block font-bold text-red-400">14 Şubat Sevgililer Günü</span>
                <span className="text-xs text-gray-400">Plan yapılması gerekiyor.</span>
              </div>
              <div className="text-2xl font-bold text-white">{valentineDays} Gün</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-xl opacity-60">
              <div>
                <span className="block font-bold text-gray-300">Yıldönümü</span>
                <span className="text-xs text-gray-500">25 Eylül 2026</span>
              </div>
              <div className="text-sm font-mono">Beklemede</div>
            </div>
          </div>
        </div>
      </div>

      {/* HEDİYE VE PLAN KUTUSU */}
      <section className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
          <Gift size={24} className="text-purple-500" /> Hediye Fikirleri & İstek Listesi
        </h3>

        <div className="flex gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Aklına gelen hediye fikri..." 
            value={newGift.idea}
            onChange={e => setNewGift({...newGift, idea: e.target.value})}
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
          />
          <input 
            type="number" 
            placeholder="Fiyat" 
            value={newGift.price}
            onChange={e => setNewGift({...newGift, price: e.target.value})}
            className="w-32 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
          />
          <button 
            onClick={addGift}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            Ekle
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gifts.map((gift) => (
            <div key={gift.id} className="bg-gray-900/50 p-4 rounded-xl flex justify-between items-center group hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-yellow-500" />
                <div>
                  <p className="font-medium text-white">{gift.idea}</p>
                  <p className="text-xs text-gray-500">~₺{gift.price}</p>
                </div>
              </div>
              <button onClick={() => deleteGift(gift.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          {gifts.length === 0 && <p className="text-gray-500 text-sm">Hediye fikri eklenmemiş.</p>}
        </div>
      </section>

    </div>
  );
}
