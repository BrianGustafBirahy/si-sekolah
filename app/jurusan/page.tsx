"use client";

import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

import CardJurusan from "@/components/cardJurusan/CardJurusan";

export default function Jurusan() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const jurusanList = [
    {
      title: "IPA",
      description:
        "Jurusan Ilmu Pengetahuan Alam dengan fokus pada Matematika, Fisika, Kimia, dan Biologi.",
      color: "blue",
      image: "/images/jurusan/ipa.png",
      reverse: false,
      delay: 0,
    },
    {
      title: "IPS",
      description:
        "Jurusan Ilmu Pengetahuan Sosial dengan fokus pada Ekonomi, Sosiologi, Geografi, dan Sejarah.",
      color: "purple",
      image: "/images/jurusan/ips.png",
      reverse: true,
      delay: 100,
    },
    {
      title: "Bahasa",
      description:
        "Jurusan Bahasa dengan fokus pada Bahasa Indonesia, Bahasa Inggris, dan Bahasa Asing lainnya.",
      color: "green",
      image: "/images/jurusan/bahasa.png",
      reverse: false,
      delay: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* =========================
            JUDUL JURUSAN
        ========================== */}
        <div className="text-center md:text-left">
        <h1
          className="text-4xl sm:text-5xl md:pl-10 font-extrabold mb-14 text-blue-700 relative inline-block 
          after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2 after:mx-auto 
          hover:after:w-28 after:transition-all after:duration-300"
          data-aos="fade-down"
        >
          Jurusan
        </h1>
        </div>

        {/* =========================
            LIST JURUSAN
        ========================== */}
        <div className="space-y-16">
          {jurusanList.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <CardJurusan
                title={item.title}
                description={item.description}
                color={item.color}
                image={item.image}
                reverse={item.reverse}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
