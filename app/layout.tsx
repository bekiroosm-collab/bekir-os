import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Activity, Briefcase, Music, Heart, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bekir OS",
  description: "Personal Life Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} flex h-screen overflow-hidden bg-black text-white`}>
        
        {/* SOL MENÜ (SIDEBAR) */}
        <aside className="w-20 md:w-64 border-r border-gray-800 bg-black/50 backdrop-blur-xl flex flex-col justify-between p-4">
          <div>
            <div className="mb-8 flex items-center justify-center md:justify-start gap-3">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">B</div>
              <span className="hidden md:block font-bold text-xl tracking-wider">BEKİR OS</span>
            </div>

            <nav className="space-y-2">
              <Link href="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all text-gray-300 hover:text-white">
                <LayoutDashboard size={22} />
                <span className="hidden md:block">Ana Komuta</span>
              </Link>

              <div className="pt-4 pb-2 text-xs text-gray-500 font-bold hidden md:block">MODÜLLER</div>

              <Link href="/paramedik" className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 hover:text-red-400 transition-all text-gray-400">
                <Activity size={22} />
                <span className="hidden md:block">Paramedik 112</span>
              </Link>

              <Link href="/business" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-500/20 hover:text-blue-400 transition-all text-gray-400">
                <Briefcase size={22} />
                <span className="hidden md:block">Neva & EsnafPro</span>
              </Link>

              <Link href="/bexy-studio" className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-500/20 hover:text-purple-400 transition-all text-gray-400">
                <Music size={22} />
                <span className="hidden md:block">BEXY Studio</span>
              </Link>

              <Link href="/relationship" className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-500/20 hover:text-pink-400 transition-all text-gray-400">
                <Heart size={22} />
                <span className="hidden md:block">İlişki Log</span>
              </Link>
            </nav>
          </div>

          <div className="p-3 rounded-xl bg-gray-900/50 border border-gray-800 text-xs text-gray-500 text-center">
            v1.0.0 Stable
          </div>
        </aside>

        {/* ANA EKRAN */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
          {children}
        </main>

      </body>
    </html>
  );
}
