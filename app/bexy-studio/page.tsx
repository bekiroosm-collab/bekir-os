"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Music, Save, Mic, PenTool } from 'lucide-react';

// Supabase Bağlantısı (Anahtarları Vercel'e ekleyince çalışacak)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function BexyStudio() {
  const [title, setTitle] = useState('');
  const [vibe, setVibe] = useState('Drill');
  const [lyrics, setLyrics] = useState('');
  const [savedLyrics, setSavedLyrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Sayfa açılınca eski sözleri çek
  useEffect(() => {
    fetchLyrics();
  }, []);

  async function fetchLyrics() {
    const { data } = await supabase.from('lyrics').select('*').order('created_at', { ascending: false });
    if (data) setSavedLyrics(data);
  }

  async function saveLyrics() {
    setLoading(true);
    const { error } = await supabase.from('lyrics').insert([{ title, vibe, content: lyrics }]);
    if (!error) {
      alert("Sözler Kasaya Atıldı! 🎤");
      setLyrics('');
      setTitle('');
      fetchLyrics(); // Listeyi güncelle
    } else {
      alert("Hata: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      
      {/* BAŞLIK */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-purple-600 rounded-xl shadow-lg shadow-purple-500/20">
          <Music size={32} className="text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">BEXY Studio</h1>
          <p className="text-gray-400">Yeni hit parçayı burada pişir.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* SOL: YAZMA ALANI */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-panel p-6 border border-gray-800 bg-black/40 rounded-xl">
            <div className="flex gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Şarkı Adı (Örn: Mahalle)" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
              />
              <select 
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
              >
                <option value="Drill">Drill (Blok3)</option>
                <option value="Melankolik">Duygusal (Ege)</option>
                <option value="Afro">Afro Trap</option>
              </select>
            </div>
            
            <textarea 
              placeholder="Sözleri buraya akıt..." 
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              className="w-full h-96 bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-white font-mono text-lg leading-relaxed focus:border-purple-500 outline-none resize-none"
            ></textarea>

            <div className="flex justify-between items-center mt-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mic size={18} />
                <span className="text-sm">Ses Kaydı (Yakında)</span>
              </button>
              <button 
                onClick={saveLyrics}
                disabled={loading}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                <Save size={18} />
                {loading ? 'Kaydediliyor...' : 'KASAYA AT'}
              </button>
            </div>
          </div>
        </div>

        {/* SAĞ: ARŞİV VE AI */}
        <div className="space-y-6">
          
          {/* AI TOOL (Görsel) */}
          <div className="glass-panel p-5 border border-purple-500/30 rounded-xl bg-purple-900/10">
            <h3 className="font-bold text-purple-400 flex items-center gap-2 mb-3">
              <PenTool size={18} />
              Kafiye Asistanı
            </h3>
            <p className="text-xs text-gray-400 mb-3">AI henüz aktif değil. Anahtarlar girilince burası sana uyumlu kafiyeleri verecek.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Geliyorum / Biliyorum</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Sokaklar / Yasaklar</span>
            </div>
          </div>

          {/* GEÇMİŞ PARÇALAR */}
          <div className="glass-panel p-5 border border-gray-800 rounded-xl">
            <h3 className="font-bold text-white mb-4">Arşivdeki Parçalar</h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {savedLyrics.length === 0 ? (
                <p className="text-gray-500 text-sm">Henüz kayıtlı parça yok.</p>
              ) : (
                savedLyrics.map((song) => (
                  <div key={song.id} className="p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800 cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-200 group-hover:text-purple-400">{song.title || 'İsimsiz'}</h4>
                      <span className="text-[10px] bg-gray-700 px-1.5 py-0.5 rounded text-gray-300">{song.vibe}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{song.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
