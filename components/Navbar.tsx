"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menus = [
    { name: "Beranda", href: "/" },
    {
      name: "Profil",
      items: [
        { name: "Profil Sekolah", href: "/profil/profil-sekolah" },
        { name: "Struktur Organisasi", href: "/profil/struktur" },
        { name: "Guru", href: "/profil/guru" },
        { name: "Akreditasi", href: "/profil/akreditasi" },
      ],
    },
    {
      name: "Siswa",
      items: [
        { name: "OSIS", href: "/osis" },
        { name: "Jurusan", href: "/jurusan" },
        { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
        { name: "Prestasi", href: "/prestasi" },
      ],
    },
    { name: "Pengumuman", href: "/pengumuman" },
    { name: "Alumni", href: "/alumni" },
  ];

  // Klik luar untuk tutup dropdown (desktop)
  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (e.target instanceof Node && navRef.current.contains(e.target)) return;
      setOpenDropdown(null);
    };

    document.addEventListener("click", handleDocClick);
    return () => {
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-xl font-bold">
            SMAN 1 MANOKWARI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menus.map((menu) =>
              menu.items ? (
                <div
                  key={menu.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="hover:text-gray-200 flex items-center gap-1">
                    {menu.name} ▾
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${
                      openDropdown === menu.name
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-blue-100/95 backdrop-blur-sm text-gray-800 rounded-lg overflow-hidden">
                      {menu.items.map((sub, idx) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-200 hover:pl-6 ${
                            idx !== menu.items.length - 1
                              ? "border-b border-blue-200/70"
                              : ""
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={menu.name}
                  href={menu.href!}
                  className="hover:text-gray-200"
                >
                  {menu.name}
                </Link>
              )
            )}
          </div>

          {/* Tombol Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu dengan animasi dropdown */}
        <div
          className={`md:hidden bg-blue-500/50 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 p-4">
            {menus.map((menu) =>
              menu.items ? (
                <div key={menu.name} className="flex flex-col">
                  {/* Tombol utama */}
                  <button
                    className="flex justify-between items-center py-2"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === menu.name ? null : menu.name
                      )
                    }
                  >
                    {menu.name}
                    {/* Panah dengan animasi rotate */}
                    <span
                      className={`transform transition-transform duration-300 ${
                        openDropdown === menu.name ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Dropdown Mobile */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === menu.name
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 flex flex-col space-y-1 py-2 rounded-lg bg-blue-500 text-white">
                      {menu.items.map((sub, idx) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className={`px-2 py-1 rounded transition-all duration-200 hover:bg-blue-300/80 ${
                            idx !== menu.items.length - 1
                              ? "border-b border-blue-400/50"
                              : ""
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={menu.name}
                  href={menu.href!}
                  onClick={() => setIsOpen(false)}
                >
                  {menu.name}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      {/* <div className="-mt-13" /> */}
    </>
  );
}
