'use client';

import Image from 'next/image';

const menu = [
  { label: 'หน้าแรก', icon: 'app/publice/Icon/home.png' },
  { label: 'เติมเกม', icon: '/Icon/console.png' },
  { label: 'เติมเครดิต', icon: '/Icon/credit.png' },
  { label: 'ประวัติการสั่งซื้อ', icon: '/Icon/history.png' },
];

export default function Sidebar() {
  return (
    <aside className="w-56 bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">GAME TOPUP</h1>

      <nav className="space-y-2">
        {menu.map((m) => (
          <div
            key={m.label}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            <Image src={m.icon} alt={m.label} width={22} height={22} unoptimized />
            <span>{m.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
