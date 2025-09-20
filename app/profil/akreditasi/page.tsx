"use client";

import { useEffect } from "react";
const AOS = require('aos');
import "aos/dist/aos.css";

export default function AkreditasiPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Judul */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-14 text-blue-700 relative 
          block text-center md:inline-block md:mx-auto 
          after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 
          after:mx-auto after:mt-2 hover:after:w-28 
          after:transition-all after:duration-300"
          data-aos="fade-down"
        >
          Akreditasi
        </h1>

        {/* Konten */}
        <section className="max-w-3xl mx-auto text-center space-y-10">
          <p className="text-gray-700 text-lg" data-aos="fade-up">
            SMA Negeri 1 Manokwari telah terakreditasi dengan predikat:
          </p>

          <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-white hover:border-green-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-[1.03] transition-all duration-500"
            data-aos="zoom-in"
          >
            <div className="flex flex-col items-center">
              <i className="ri-award-line text-5xl text-green-600 mb-4"></i>
              <h2 className="text-3xl font-bold text-green-700">Akreditasi A</h2>
              <p className="mt-4 text-gray-700 max-w-xl">
                Berdasarkan hasil penilaian dari Badan Akreditasi Nasional (BAN-S/M),
                sekolah ini memenuhi standar mutu pendidikan nasional.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
