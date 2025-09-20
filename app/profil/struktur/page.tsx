"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

const teachers = [
  {
    position: "Kepala Sekolah",
    name: "Andrew T. Liem, S.Si., MT., Ph.D",
    nip: "NIP. 19670512 199203 1 001",
    image: "/images/struktur/Kepsek.jpeg",
    contact: "andrew@example.com",
    research: "Bidang penelitian: AI, IoT, Big Data",
  },
  {
    position: "Wakil Kepala Sekolah Bidang Kurikulum",
    name: "Green Ferry Mandias, S.Kom., M.Cs., M.M",
    nip: "NIP. 19720817 199903 1 002",
    image: "/images/struktur/wakil1.jpeg",
    contact: "green@example.com",
    research: "Bidang penelitian: Software Engineering, Cloud",
  },
  {
    position: "Wakil Kepala Sekolah Bidang Kesiswaan",
    name: "Stenly R. Pungus, S.Kom., MT., M.M., Ph.D",
    nip: "NIP. 19750521 200101 1 003",
    image: "/images/struktur/wakil2.jpeg",
    contact: "stenly@example.com",
    research: "Bidang penelitian: Sistem Informasi, Data Science",
  },
];

export default function StrukturOrganisasiPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
      <div className="container mx-auto px-4">
        {/* =========================
            JUDUL STRUKTUR ORGANISASI
        ========================== */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-14 text-center text-blue-700 relative inline-block mx-auto 
          after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 
          hover:after:w-28 after:transition-all after:duration-300"
          data-aos="fade-down"
        >
          Struktur Organisasi
        </h1>

        {/* =========================
            KONTEN GURU/DOSEN
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
              {/* Foto */}
              <div className="w-48 h-64 relative overflow-hidden rounded-2xl mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Jabatan */}
              <p className="text-sm text-gray-500 font-medium mb-1">
                {t.position}
              </p>

              {/* Nama */}
              <h2 className="font-semibold text-blue-700 text-lg">
                {t.name}
              </h2>

              {/* NIP */}
              <p className="text-sm text-gray-600 mb-3">{t.nip}</p>

              {/* Accordion */}
              <div className="w-full text-left space-y-3">
                {/* Contact */}
                <div>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i * 2 ? null : i * 2)
                    }
                    className="w-full text-blue-700 font-semibold flex justify-between items-center border-b py-2"
                  >
                    CONTACT
                    <span>{openIndex === i * 2 ? "−" : "+"}</span>
                  </button>
                  {openIndex === i * 2 && (
                    <p className="text-gray-600 mt-2">{t.contact}</p>
                  )}
                </div>

                {/* Penelitian */}
                <div>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i * 2 + 1 ? null : i * 2 + 1)
                    }
                    className="w-full text-blue-700 font-semibold flex justify-between items-center border-b py-2"
                  >
                    PENELITIAN
                    <span>{openIndex === i * 2 + 1 ? "−" : "+"}</span>
                  </button>
                  {openIndex === i * 2 + 1 && (
                    <p className="text-gray-600 mt-2">{t.research}</p>
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
