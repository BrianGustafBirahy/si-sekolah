"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "remixicon/fonts/remixicon.css";
const AOS = require("aos");
import "aos/dist/aos.css";

// Import data alumni dari file terpisah
import { alumniList } from "./data/alumni";

export default function Home() {
  const images = [
    "/images/beranda/img1.jpeg",
    "/images/beranda/img2.jpeg",
    "/images/beranda/img3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Slideshow interval
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Init AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col justify-center items-center text-center py-20 bg-white min-h-screen px-4 mt-0 relative">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Background ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 text-white px-4 flex flex-col items-center">
          {/* Logo Sekolah */}
          <img
            src="/images/beranda/Logo.png"
            alt="Logo Sekolah"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 mb-2 drop-shadow-lg 
                      transform transition-transform duration-300 ease-in-out 
                      hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            data-aos="zoom-in"
          />

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight transition-all duration-300"
            data-aos="fade-up"
          >
            <span className="block hover:text-blue-300 hover:scale-105 transform transition duration-300 ">
              Selamat Datang di Website Resmi
            </span>
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent 
                  hover:from-indigo-300 hover:to-blue-300 hover:scale-110 transform transition duration-500 text-stroke-white">
              SMA NEGERI 1 MANOKWARI
            </span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto transition duration-300 hover:text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Sekolah unggulan yang mencetak generasi berprestasi, berkarakter, dan
            siap menghadapi masa depan.
          </p>

          
        </div>
      </section>
      {/* ================= SAMBUTAN KEPALA SEKOLAH ================= */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 -mt-45 mx-4 md:mx-0 relative z-30"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Foto Kepala Sekolah */}
                <div className="md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src="/images/struktur/Kepsek.jpeg"
                    alt="Kepala Sekolah"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-8 border-white -mt-12 md:mt-0"
                  />
                </div>

                {/* Teks Sambutan */}
                <div className="md:w-2/3 text-center md:text-left">
                  {/* Judul di mobile: center, split jadi 2 baris */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 leading-snug">
                    <span className="block md:inline">Sambutan</span>{" "}
                    <span className="block md:inline">Kepala Sekolah</span>
                  </h2>

                  {/* Garis: center di mobile, left di desktop */}
                  <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto md:mx-0 mt-3 mb-6 animate-pulse"></span>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    Assalamu’alaikum warahmatullahi wabarakatuh. Selamat datang di website resmi
                    SMA Negeri 1 Manokwari. Kami berkomitmen untuk mencetak generasi yang
                    berprestasi, berkarakter, dan siap menghadapi tantangan masa depan. Melalui
                    website ini, kami berharap dapat menjalin komunikasi yang lebih baik dengan
                    siswa, orang tua, alumni, dan masyarakat luas.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 font-semibold">
                    Drs. Ahmad Fauzi, M.Pd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* ================= SECTION TAMBAHAN ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Quick Links */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
            data-aos="fade-up"
          >
            {[
              { label: "Profil", link: "/profil/profil-sekolah" },
              { label: "Ekstrakurikuler", link: "/ekstrakurikuler" },
              { label: "Prestasi", link: "/prestasi" },
              { label: "Kontak", link: "/kontak" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="px-4 py-3 bg-blue-600 text-white rounded-xl shadow-md font-medium 
                           hover:bg-blue-700 hover:scale-105 transform transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Highlight Features */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            data-aos="fade-up"
          >
            {[
              {
                title: "Guru Berpengalaman",
                desc: "Tenaga pendidik profesional & berdedikasi tinggi.",
              },
              {
                title: "Prestasi Unggul",
                desc: "Berbagai prestasi akademik & non-akademik tingkat nasional.",
              },
              {
                title: "Fasilitas Lengkap",
                desc: "Ruang belajar modern, laboratorium, & sarana olahraga.",
              },
              {
                title: "Global Connection",
                desc: "Kerja sama dengan sekolah & universitas internasional.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
              >
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ================= PREVIEW PENGUMUMAN ================= */}
          <div
            className="max-w-3xl mx-auto bg-blue-50 rounded-2xl p-6 shadow-md mb-20"
            data-aos="fade-up"
          >
            {/* Judul */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-700 relative inline-block">
                Pengumuman Terbaru
                <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 rounded-full"></span>
              </h2>
            </div>

            {/* Isi List */}
            <ul className="space-y-3 text-gray-700 mt-6 text-left">
              <li className="hover:text-blue-600 transition">
                📢 Pendaftaran siswa baru dibuka hingga 30 Juni 2025
              </li>
              <li className="hover:text-blue-600 transition">
                🎓 Ujian akhir semester akan dimulai tanggal 10 Juli 2025
              </li>
              <li className="hover:text-blue-600 transition">
                🏆 Selamat kepada tim debat atas juara 1 tingkat provinsi
              </li>
            </ul>

            {/* Tombol */}
            <div className="text-center">
              <a
                href="/pengumuman"
                className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md 
                           hover:bg-blue-700 hover:scale-105 transform transition duration-300"
              >
                Lihat Semua
              </a>
            </div>
          </div>

          {/* ================= STATISTIK SEKOLAH ================= */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-700 text-center relative inline-block mb-12">
                Data Sekolah
                <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 rounded-full"></span>
              </h2>

              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-8"
                data-aos="fade-up"
              >
                {/* Card Guru */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <div className="text-blue-600 text-5xl mb-4">
                    <i className="ri-user-2-fill"></i>
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-800 mb-2">
                    45
                  </h3>
                  <p className="text-gray-600 font-medium">Guru</p>
                </div>

                {/* Card Siswa */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <div className="text-green-600 text-5xl mb-4">
                    <i className="ri-team-fill"></i>
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-800 mb-2">
                    780
                  </h3>
                  <p className="text-gray-600 font-medium">Siswa</p>
                </div>

                {/* Card Kelas */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <div className="text-purple-600 text-5xl mb-4">
                    <i className="ri-building-2-fill"></i>
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-800 mb-2">
                    24
                  </h3>
                  <p className="text-gray-600 font-medium">Kelas</p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= TESTIMONI ALUMNI ================= */}
          <div className="max-w-6xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-blue-700 text-center relative inline-block mb-12">
              Testimoni Alumni
              <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 rounded-full"></span>
            </h2>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              data-aos="fade-up"
            >
              {alumniList.map((alumni, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="h-full min-h-[280px] flex flex-col bg-white p-6 rounded-2xl shadow-md border 
                                  hover:shadow-lg hover:scale-105 transform transition duration-300 text-left">
                    <div className="flex items-center mb-4">
                      <img
                        src={alumni.img}
                        alt={alumni.name}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {alumni.name}
                        </h3>
                        <p className="text-sm text-gray-500">{alumni.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic flex-grow">
                      “{alumni.quote}”
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ================= SECTION KONTAK & LOKASI ================= */}
      <section className="bg-blue-50 py-20 px-6 -mb-12 sm:-mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 text-center relative inline-block mb-12">
            Kontak
            <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up">
            {/* Info Kontak */}
            <div className="text-left space-y-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Hubungi Kami
              </h3>
              <p className="text-gray-700">
                <strong>Alamat:</strong> Jalan Palapa Reremi No.1, Kelurahan
                Manokwari Barat, Kecamatan Manokwari Barat, Kabupaten Manokwari,
                Papua Barat 98312
              </p>
              <p className="text-gray-700">
                <strong>Telepon:</strong> (0986) 211767
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:sma1manokwari@yahoo.co.id"
                  className="text-blue-600 hover:underline"
                >
                  sma1manokwari@yahoo.co.id
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.smansamanokwari.sch.id"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  www.smansamanokwari.sch.id
                </a>
              </p>

              <div className="flex justify-center lg:justify-start mt-4 space-x-12">
                <a
                  href="https://www.facebook.com/profile.php?id=403778399736838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition text-2xl"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill"></i>
                </a>

                <a
                  href="https://www.instagram.com/smanegeri01manokwari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition text-2xl"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-fill"></i>
                </a>

                <a
                  href="https://www.youtube.com/@SMAN01MANOKWARI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 transition text-2xl"
                  aria-label="YouTube"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="h-80 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.9808334863556!2d134.05932697472383!3d-0.8573830991343074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d540aa4384c9ad5%3A0x9e2c3c2fe424f52a!2sSMA%20Negeri%201%20Manokwari!5e1!3m2!1sen!2sus!4v1758199445344!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="rounded-2xl border-0 shadow-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
