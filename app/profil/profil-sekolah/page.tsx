"use client";

import { useEffect } from "react";
const AOS = require('aos');
import "aos/dist/aos.css";

export default function ProfilSekolahPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* =========================
            JUDUL PROFIL SEKOLAH
        ========================== */}
        <div className="text-center md:text-left">
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-14 text-blue-700 relative inline-block 
            after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2 after:mx-auto 
            hover:after:w-28 after:transition-all after:duration-300"
            data-aos="fade-down"
          >
            Profil Sekolah
          </h1>
        </div>

        {/* =========================
            KONTEN PROFIL SEKOLAH
        ========================== */}
        <section className="grid gap-10 md:grid-cols-2 mb-20">
          {/* Sejarah */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white hover:border-blue-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.03] hover:-rotate-1 transition-all duration-500"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-5">
              <i className="ri-book-open-line text-4xl text-blue-600"></i>
              <h2 className="text-2xl font-semibold text-gray-800">Sejarah</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              SMA Negeri 1 Manokwari berdiri sebagai salah satu sekolah unggulan
              yang berkomitmen dalam membentuk generasi berprestasi, berkarakter,
              dan berwawasan global.
            </p>
          </div>

          {/* Identitas Sekolah */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white hover:border-green-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-[1.03] hover:rotate-1 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-5">
              <i className="ri-school-line text-4xl text-green-600"></i>
              <h2 className="text-2xl font-semibold text-gray-800">
                Identitas Sekolah
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nama: SMA Negeri 1 Manokwari</li>
              <li>Alamat: Jl. Contoh No. 123, Manokwari</li>
              <li>Akreditasi: A</li>
              <li>Status: Negeri</li>
            </ul>
          </div>

          {/* Tujuan */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white hover:border-purple-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.03] transition-all duration-500 md:col-span-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-5">
              <i className="ri-flag-line text-4xl text-purple-600"></i>
              <h2 className="text-2xl font-semibold text-gray-800">Tujuan</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Membentuk peserta didik yang unggul dalam akademik, aktif dalam
              kegiatan ekstrakurikuler, serta memiliki akhlak mulia.
            </p>
          </div>
        </section>

        {/* =========================
            VISI, MISI, MOTO
        ========================== */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-14 text-center text-blue-700 relative inline-block mx-auto after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 hover:after:w-28 after:transition-all after:duration-300"
          data-aos="fade-down"
        >
          Visi, Misi, dan Moto
        </h1>

        <section className="grid gap-10 md:grid-cols-3">
          {/* Visi */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white hover:border-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-[1.03] transition-all duration-500"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Visi</h2>
            <p className="text-gray-700">
              Menjadi sekolah unggul dalam prestasi, berkarakter, dan berwawasan global.
            </p>
          </div>

          {/* Misi */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white hover:border-pink-300 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] hover:scale-[1.03] transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Misi</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Menyelenggarakan pembelajaran yang inovatif dan menyenangkan.</li>
              <li>Mengembangkan potensi peserta didik secara optimal.</li>
              <li>Menanamkan nilai-nilai karakter dan kedisiplinan.</li>
            </ul>
          </div>

          {/* Moto */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white hover:border-indigo-300 hover:shadow-[0_0_30px_rgba(165,180,252,0.3)] hover:scale-[1.03] transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Moto</h2>
            <p className="text-gray-700 italic">
              "Bersama Kita Bisa, Bersama Kita Hebat"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
