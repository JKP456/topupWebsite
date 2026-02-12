"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "หน้าแรก", path: "/", icon: "/Icon/home (1).png" },
  { name: "บริการเติมเกม", path: "/game", icon: "/Icon/console.png" },
  { name: "เติมเครดิต", path: "/credit", icon: "/Icon/credit-card (1).png" },
  { name: "บัตรเติมเงิน", path: "/topup-card", icon: "/Icon/profit (1).png" },
  { name: "Privacy Policies", path: "/privacy", icon: "/Icon/policy (1).png" },
  { name: "Return Policies", path: "/return", icon: "/Icon/google-docs.png" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // ตรวจว่ามีตัวอักษรไทยไหม
  const isThai = (text: string) => /[ก-๙]/.test(text);

  return (
    <>
      {/* 🔥 Mobile Top Bar */}
      <div className="md:hidden bg-[#1D1818] p-4 flex items-center justify-between">
        <span className="text-lg font-bold text-white en tracking-wide">
          LOGO
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* 🔥 Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔥 Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 min-h-screen p-6 flex flex-col
        bg-[#1D1818] text-[#909090] transform transition-transform duration-300 ease-in-out shadow-xl md:shadow-none
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between md:justify-start gap-3 mb-8 pb-5 border-b border-[#333333]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#333333]">
              <Image src="/Icon/home.png" alt="logo" width={20} height={20} />
            </div>
            <span className="text-lg font-bold text-white en tracking-wide">
              LOGO
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-xl text-white"
          >
            ✕
          </button>
        </div>

        {/* 🔥 User Section (Clickable → /login) */}
        <Link
          href="/login"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 mb-8 pb-5 border-b border-[#333333]
          p-3 rounded-xl transition-all duration-300 hover:bg-[#2a2626] hover:shadow-md hover:translate-x-1"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/Icon/user (1).png"
              alt="user"
              width={40}
              height={40}
            />
          </div>

          <span className="text-[24px] text-white thai font-medium">
            เข้าสู่ระบบ
          </span>
        </Link>

        {/* 🔥 Menu */}
        <nav className="flex-1 space-y-4 mt-2">
          {menuItems.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "bg-[#FF8C00] text-black font-semibold shadow-lg"
                    : "hover:bg-[#2a2626] hover:text-white hover:translate-x-1"
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-full"></span>
                )}

                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                />

                <span
                  className={`text-[16px] leading-relaxed ${
                    isThai(item.name) ? "thai" : "en"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
