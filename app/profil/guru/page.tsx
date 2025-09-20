"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

const teachers = [
  {
    position: "Guru Matematika",
    name: "Drs. Nama Guru",
    nip: "NIP. 19680101 199001 1 001",
    image: "/images/struktur/Kepsek.jpeg",
    subject: "Matematika",
    contact: "guru1@example.com",
  },
  {
    position: "Guru Bahasa Indonesia",
    name: "Dra. Nama Guru",
    nip: "NIP. 19690115 199502 1 002",
    image: "/images/struktur/wakil1.jpeg",
    subject: "Bahasa Indonesia",
    contact: "guru2@example.com",
  },
  {
    position: "Guru Fisika",
    name: "Bapak Nama Guru",
    nip: "NIP. 19700310 199703 1 003",
    image: "/images/struktur/wakil2.jpeg",
    subject: "Fisika",
    contact: "guru3@example.com",
  },
];

export default function GuruPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
      <div className="container mx-auto px-4">
        {/* =========================
            JUDUL HALAMAN GURU
        ========================== */}
        <div className="text-center md:text-left">
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-14 text-blue-700 relative inline-block 
            after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2 after:mx-auto 
            hover:after:w-28 after:transition-all after:duration-300"
            data-aos="fade-down"
          >
            Daftar Guru
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Berikut adalah daftar guru yang mengajar di SMA Negeri 1 Manokwari:
        </p>

        {/* =========================
            GRID DAFTAR GURU
        ========================== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 
              hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Foto Guru */}
              <div className="w-48 h-64 relative overflow-hidden rounded-2xl mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Jabatan/Mapel */}
              <p className="text-sm text-gray-500 font-medium mb-1">
                {t.position}
              </p>

              {/* Nama Guru */}
              <h2 className="font-semibold text-blue-700 text-lg">
                {t.name}
              </h2>

              {/* NIP */}
              <p className="text-sm text-gray-600 mb-2">{t.nip}</p>

              {/* Mata Pelajaran */}
              <p className="text-gray-700 text-sm mb-3">
                Mata Pelajaran: <span className="font-medium">{t.subject}</span>
              </p>

              {/* Accordion sederhana */}
              <div className="w-full text-left space-y-3">
                <div>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="w-full text-blue-700 font-semibold flex justify-between items-center border-b py-2"
                  >
                    CONTACT
                    <span>{openIndex === i ? "−" : "+"}</span>
                  </button>
                  {openIndex === i && (
                    <p className="text-gray-600 mt-2">{t.contact}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
