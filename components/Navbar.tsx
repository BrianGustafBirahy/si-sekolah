"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const menus = [
    { name: "Beranda", href: "/" },
    {
      name: "PROFIL",
      items: [
        { name: "Profil Sekolah", href: "/profil/profil-sekolah" },
        { name: "Struktur Organisasi", href: "/profil/struktur" },
        { name: "Guru", href: "/profil/guru" },
        { name: "Akreditasi", href: "/profil/akreditasi" },
      ],
    },
    {
      name: "SISWA",
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

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const navbarStyle =
    scrolled || pathname !== "/" || isOpen
      ? "bg-white text-gray-900 shadow-md border-b"
      : "bg-transparent text-white";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarStyle}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-wide whitespace-nowrap"
        >
          SMAN 1 MANOKWARI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center text-base font-semibold uppercase tracking-wide">
          {menus.map((menu) =>
            menu.items ? (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 pb-1 border-b-2 border-transparent transition-all duration-200 ${
                    scrolled || pathname !== "/" || isOpen
                      ? "hover:text-gray-700 hover:border-gray-400"
                      : "hover:text-gray-200 hover:border-gray-200"
                  }`}
                >
                  {menu.name} ▾
                </button>
                <div
                  className={`absolute left-0 mt-3 w-56 rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${
                    openDropdown === menu.name
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white text-gray-800 rounded-lg shadow-md normal-case">
                    {menu.items.map((sub, idx) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:pl-6 ${
                          idx !== menu.items.length - 1
                            ? "border-b border-gray-200"
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
                className={`pb-1 border-b-2 border-transparent transition-all duration-200 ${
                  scrolled || pathname !== "/" || isOpen
                    ? "hover:text-gray-700 hover:border-gray-400"
                    : "hover:text-gray-200 hover:border-gray-200"
                }`}
              >
                {menu.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Button */}
        <button
          className={`md:hidden text-2xl ${
            scrolled || pathname !== "/" || isOpen
              ? "text-gray-900"
              : "text-white"
          }`}
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } ${isOpen ? "bg-white text-gray-900" : "bg-transparent text-white"}`}
      >
        <div className="flex flex-col space-y-2 p-5 text-sm font-semibold uppercase tracking-wide">
          {menus.map((menu) =>
            menu.items ? (
              <div key={menu.name} className="flex flex-col">
                <button
                  className="flex justify-between items-center py-2"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === menu.name ? null : menu.name
                    )
                  }
                >
                  {menu.name}
                  <span
                    className={`transform transition-transform duration-300 ${
                      openDropdown === menu.name ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === menu.name
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 flex flex-col space-y-1 py-2 rounded-lg shadow-md bg-white text-gray-900 text-xs normal-case">
                    {menu.items.map((sub, idx) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-2 py-1 transition-all duration-200 hover:bg-gray-100 ${
                          idx !== menu.items.length - 1
                            ? "border-b border-gray-200"
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
                className="py-2"
              >
                {menu.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
