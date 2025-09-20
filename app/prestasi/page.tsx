"use client";

import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

export default function Prestasi() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const prestasiList = [
    {
      title: "Juara 1 Olimpiade Matematika 2024",
      description:
        "Siswa SMA Negeri 1 Contoh berhasil meraih juara tingkat nasional dengan menyisihkan ratusan peserta dari seluruh Indonesia.",
      image: "/images/prestasi/olimpiade-matematika.jpg",
      waktu: "Maret 2024",
      tempat: "Jakarta",
      color: "blue",
      delay: 0,
    },
    {
      title: "Juara 2 Lomba Debat Bahasa Inggris 2023",
      description:
        "Tim debat SMA Negeri 1 Contoh membawa pulang piala dalam ajang provinsi dengan performa luar biasa.",
      image: "/images/prestasi/debat-bahasa.jpg",
      waktu: "Agustus 2023",
      tempat: "Manokwari",
      color: "purple",
      delay: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* =========================
            JUDUL PRESTASI
        ========================== */}
        <div className="text-center md:text-left">
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-14 text-blue-700 relative inline-block 
            after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2 after:mx-auto 
            hover:after:w-28 after:transition-all after:duration-300"
            data-aos="fade-down"
          >
            Prestasi
          </h1>
        </div>

        {/* =========================
            LIST PRESTASI
        ========================== */}
        <section className="grid gap-10 md:grid-cols-2">
          {prestasiList.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:scale-[1.02] transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              {/* Gambar */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              {/* Konten */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-col text-sm text-gray-600">
                  <span>
                    <strong>Waktu:</strong> {item.waktu}
                  </span>
                  <span>
                    <strong>Tempat:</strong> {item.tempat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
