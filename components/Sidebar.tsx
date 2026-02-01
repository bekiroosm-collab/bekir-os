"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Activity, Briefcase, Music2, Heart, Settings, LogOut } from 'lucide-react';

const menuItems = [
  { name: 'Ana Komuta', icon: LayoutDashboard, path: '/' },
  { name: 'Paramedik 112', icon: Activity, path: '/paramedik' },
  { name: 'Neva & Esnaf', icon: Briefcase, path: '/business' },
  { name: 'BEXY Studio', icon: Music2, path: '/bexy-studio' },
  { name: 'İlişki Log', icon: Heart, path: '/relationship' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-black/95 border-r border-gray-800 flex flex-col fixed left-0 top-0 z-50">
      {/* LOGO ALANI */}
      <div className="p-6 flex items-center gap-3 border-b border-gray-800/50">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-900/20">
          B
        </div>
        <div>
          <h1 className="font-bold text-white tracking-wider">BEKİR OS</h1>
          <p className="text-[10px] text-gray-500 font-mono">v3.0.0 PRO</p>
        </div>
      </div>

      {/* MENÜLER */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-white'} />
              <span className="font-medium text-sm">{item.name}</span>
              {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
            </Link>
          );
        })}
      </nav>

      {/* ALT KISIM */}
      <div className="p-4 border-t border-gray-800/50">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 hover:text-red-400 hover:bg-red-500/5 rounded-xl transition-colors">
          <LogOut size={20} />
          <span className="font-medium text-sm">Sistemi Kapat</span>
        </button>
      </div>
    </aside>
  );
}
