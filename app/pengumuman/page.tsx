"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

const announcements = [
  {
    title: "Penerimaan Siswa Baru 2025",
    description: "Pendaftaran dibuka mulai 1 Juni - 15 Juli 2025.",
    date: "1 Juni 2025",
    time: "08:00 WIT",
    image: "/images/pengumuman/ppdb2025.jpg",
  },
  {
    title: "Libur Semester Genap",
    description: "Libur semester dimulai 20 Desember 2025 hingga 5 Januari 2026.",
    date: "20 Desember 2025",
    time: "07:30 WIT",
    image: "/images/pengumuman/libur2025.jpg",
  },
];

export default function Pengumuman() {
  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      easing: "ease-in-out",
      once: true, // animasi hanya sekali
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 mt-10">
      {/* Judul konsisten */}
      <h2
        data-aos="fade-up"
        className="text-4xl sm:text-5xl font-extrabold mb-14 
        text-blue-700 relative w-fit 
        mx-auto md:mx-0 
        text-center md:text-left md:pl-8
        after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 
        after:mt-2 after:transition-all after:duration-300 
        after:mx-auto hover:after:w-28"
      >
        Pengumuman
      </h2>

      {/* Card list */}
      <div className="max-w-7xl mx-auto space-y-12">
        {announcements.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay={idx * 200} // supaya muncul berurutan
            className="flex flex-col md:flex-row bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden 
                       hover:shadow-xl transition-all duration-500"
          >
            {/* Gambar Thumbnail */}
            <div className="md:w-1/3 relative h-56 md:h-64 lg:h-72">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Konten Teks */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              {/* Tanggal & Waktu */}
              <div className="flex items-center mb-4 text-gray-600 text-sm md:text-base">
                <CalendarDays className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2" />
                <span className="font-medium">
                  {item.date} • {item.time}
                </span>
              </div>

              {/* Judul */}
              <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
                {item.title}
              </h3>

              {/* Deskripsi */}
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
