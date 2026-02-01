"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Briefcase, MapPin, Users, DollarSign, Plus, Check, X, Phone } from 'lucide-react';

// Supabase Ayarları
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 81 İl Listesi (Örnek kısaltılmış, sen tamamlayabilirsin)
const cities = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı"];

export default function BusinessPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [currentCity, setCurrentCity] = useState({ plate: 6, name: 'Ankara' });
  const [newLead, setNewLead] = useState({ name: '', sector: '', phone: '', value: '' });
  const [loading, setLoading] = useState(false);

  // 81 Gün Projesi Hesaplama
  useEffect(() => {
    const startDate = new Date('2026-01-25'); // Başlangıç tarihi
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    // Plaka kodu gün sayısına eşit (Basit mantık)
    const plateIndex = (diffDays - 1) % 81; 
    setCurrentCity({ 
      plate: diffDays, 
      name: cities[plateIndex] || "Şehir Bulunamadı" 
    });

    fetchLeads();
  }, []);

  // Müşterileri Çek
  async function fetchLeads() {
    const { data } = await supabase.from('business_leads').select('*').order('created_at', { ascending: false });
    if (data) setLeads(data);
  }

  // Yeni Müşteri Ekle
  async function addLead() {
    if (!newLead.name) return;
    setLoading(true);
    await supabase.from('business_leads').insert([
      { 
        name: newLead.name, 
        sector: newLead.sector, 
        phone: newLead.phone, 
        potential_value: parseInt(newLead.value) || 0,
        city: "Çankırı" // Varsayılan
      }
    ]);
    setNewLead({ name: '', sector: '', phone: '', value: '' });
    fetchLeads();
    setLoading(false);
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* BAŞLIK */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Neva & Esnaf Yönetimi</h1>
          <p className="text-gray-400">Dijital Ajans ve Yazılım Satış Paneli</p>
        </div>
        <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl border border-green-500/20 font-bold flex items-center gap-2">
          <DollarSign size={18} />
          Tahmini Ciro: ₺{leads.reduce((acc, curr) => acc + (curr.potential_value || 0), 0)}
        </div>
      </div>

      {/* 81 GÜN 81 SİTE TAKİPÇİSİ */}
      <section className="bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/30 p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <MapPin size={120} className="text-blue-500" />
        </div>
        <div className="relative z-10">
          <div className="text-blue-400 font-mono text-sm mb-2">GÜNLÜK HEDEF (GÜN {currentCity.plate})</div>
          <h2 className="text-5xl font-extrabold text-white mb-4">{currentCity.plate < 10 ? `0${currentCity.plate}` : currentCity.plate} {currentCity.name}</h2>
          <p className="text-gray-300 max-w-xl">
            Bugün <strong>{currentCity.name}</strong> iline özel bir konsept tasarım yapılacak. 
            EsnafPro için bu şehirden potansiyel müşteri araştırması yap.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
              AI ile Slogan Bul
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
              Instagram Postu Hazırla
            </button>
          </div>
        </div>
      </section>

      {/* ESNAFPRO CRM (MÜŞTERİ EKLEME) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* SOL: MÜŞTERİ EKLEME FORMU */}
        <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl h-fit">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Plus size={20} className="text-green-500" /> Yeni Esnaf Ekle
          </h3>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Dükkan Adı (Örn: Cadde Burger)" 
              value={newLead.name}
              onChange={e => setNewLead({...newLead, name: e.target.value})}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Sektör" 
                value={newLead.sector}
                onChange={e => setNewLead({...newLead, sector: e.target.value})}
                className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-white outline-none"
              />
              <input 
                type="number" 
                placeholder="Değer (TL)" 
                value={newLead.value}
                onChange={e => setNewLead({...newLead, value: e.target.value})}
                className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-white outline-none"
              />
            </div>
            <input 
              type="text" 
              placeholder="Telefon No" 
              value={newLead.phone}
              onChange={e => setNewLead({...newLead, phone: e.target.value})}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white outline-none"
            />
            <button 
              onClick={addLead}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl font-bold transition-colors"
            >
              {loading ? 'Ekleniyor...' : 'Listeye Ekle'}
            </button>
          </div>
        </div>

        {/* SAĞ: MÜŞTERİ LİSTESİ */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Users size={20} className="text-blue-500" /> Müşteri Portföyü
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-[#0a0a0a] border border-gray-800 p-4 rounded-xl hover:border-blue-500/50 transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-blue-400">{lead.name}</h4>
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded mt-1 inline-block">{lead.sector}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded font-bold ${
                    lead.status === 'Anlaşıldı' ? 'bg-green-500/20 text-green-400' : 
                    lead.status === 'Red' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {lead.status}
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Phone size={14} /> {lead.phone || '-'}
                  </div>
                  <div className="font-bold text-white">₺{lead.potential_value}</div>
                </div>
              </div>
            ))}
            
            {leads.length === 0 && (
              <p className="text-gray-500 text-center col-span-2 py-8">Henüz müşteri eklenmedi. Satışa başla!</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
