"use client";

import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

export default function OsisPage() {
  const struktur = [
    { nama: "Nama Ketua", jabatan: "Ketua OSIS", foto: "/osis/ketua.jpg" },
    { nama: "Nama Wakil", jabatan: "Wakil Ketua", foto: "/osis/wakil.jpg" },
    { nama: "Nama Sekretaris", jabatan: "Sekretaris", foto: "/osis/sekretaris.jpg" },
    { nama: "Nama Bendahara", jabatan: "Bendahara", foto: "/osis/bendahara.jpg" },
    { nama: "Bidang Kerohanian", jabatan: "Bidang", foto: "/osis/kerohanian.jpg" },
    { nama: "Bidang Olahraga", jabatan: "Bidang", foto: "/osis/olahraga.jpg" },
    { nama: "Bidang Seni", jabatan: "Bidang", foto: "/osis/seni.jpg" },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 mt-20 -mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* =========================
            JUDUL HALAMAN OSIS
        ========================== */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-blue-700 relative block 
          after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 
          hover:after:w-28 after:transition-all after:duration-300"
          data-aos="fade-down"
        >
          Organisasi Siswa Intra Sekolah (OSIS)
        </h1>

        {/* =========================
            LOGO OSIS
        ========================== */}
        <div className="flex flex-col items-center mb-14 mt-14" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="/images/osis.png" // ganti dengan path logo osis kamu
            alt="Logo OSIS"
            className="w-60 h-60 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <p className="mt-3 text-gray-600 text-sm italic">Logo Resmi OSIS SMA Negeri 1 Manokwari</p>
        </div>

        {/* =========================
            PENGANTAR OSIS
        ========================== */}
        <section className="mb-20">
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 md:px-16 border border-white 
            hover:border-blue-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.03] 
            transition-all duration-500 mx-auto"
            data-aos="fade-up"
          >
            <p className="text-gray-700 text-justify md:text-lg leading-relaxed">
              OSIS SMA Negeri 1 Manokwari adalah wadah pengembangan potensi siswa dalam
              bidang kepemimpinan, kreativitas, dan pengabdian. OSIS menjadi sarana untuk
              menyalurkan aspirasi siswa serta mendukung kegiatan sekolah baik akademik
              maupun non-akademik.
            </p>
          </div>
        </section>

        {/* =========================
            VISI & MISI
        ========================== */}
        <h2
          className="text-3xl font-bold mb-10 text-center text-blue-700 relative block 
          after:content-[''] after:block after:w-12 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2"
          data-aos="fade-down"
        >
          Visi & Misi
        </h2>

        <section className="grid gap-10 md:grid-cols-2 mb-20">
          {/* Visi */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white 
            hover:border-purple-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.03] transition-all duration-500"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-5">
              <i className="ri-lightbulb-flash-line text-4xl text-purple-600"></i>
              <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menjadikan OSIS sebagai organisasi yang inovatif, kreatif, dan
              berkarakter, serta mampu menjadi teladan bagi seluruh siswa.
            </p>
          </div>

          {/* Misi */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white 
            hover:border-green-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-[1.03] transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-5">
              <i className="ri-compasses-2-line text-4xl text-green-600"></i>
              <h3 className="text-2xl font-semibold text-gray-800">Misi</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Meningkatkan semangat kebersamaan dan kekeluargaan di sekolah.</li>
              <li>Mengembangkan potensi siswa dalam bidang akademik, seni, dan olahraga.</li>
              <li>Menanamkan sikap disiplin, tanggung jawab, dan kepedulian sosial.</li>
              <li>Mendukung seluruh program sekolah demi tercapainya visi bersama.</li>
            </ul>
          </div>
        </section>

        {/* =========================
            STRUKTUR KEPENGURUSAN
        ========================== */}
        <h2
          className="text-3xl font-bold mb-10 text-center text-blue-700 relative block 
          after:content-[''] after:block after:w-12 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2"
          data-aos="fade-down"
        >
          Struktur Kepengurusan
        </h2>

        <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
          {struktur.map((anggota, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md border border-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center 
              hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-200 transition-all duration-500"
              data-aos="zoom-in"
            >
              <img
                src={anggota.foto}
                alt={anggota.nama}
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-100"
              />
              <h3 className="font-semibold text-gray-800">{anggota.nama}</h3>
              <p className="text-sm text-gray-600">{anggota.jabatan}</p>
            </div>
          ))}
        </section>

        {/* =========================
            KEGIATAN OSIS
        ========================== */}
        <h2
          className="text-3xl font-bold mb-10 text-center text-blue-700 relative block 
          after:content-[''] after:block after:w-12 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2"
          data-aos="fade-down"
        >
          Kegiatan OSIS
        </h2>

        <section
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 md:px-16 border border-white 
          hover:border-blue-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.03] 
          transition-all duration-500 mx-auto"
          data-aos="fade-up"
        >
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            OSIS SMA Negeri 1 Manokwari rutin menyelenggarakan berbagai kegiatan
            seperti lomba antar kelas, pentas seni, peringatan hari besar, bakti
            sosial, hingga kegiatan ekstrakurikuler yang mendukung minat dan bakat siswa.
          </p>
        </section>
      </div>
    </div>
  );
}
