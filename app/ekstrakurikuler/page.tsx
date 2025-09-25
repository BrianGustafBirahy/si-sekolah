"use client";

import { useEffect } from "react";
import Image from "next/image";
const AOS = require("aos");
import "aos/dist/aos.css";

const ekstrakurikuler = [
  {
    title: "PRAMUKA",
    description: "Membentuk karakter disiplin, mandiri, dan kepemimpinan.",
    image: "/images/ekskul/pramuka.png",
  },
  {
    title: "PASKIBRA",
    description: "Melatih kedisiplinan, kekompakan, dan cinta tanah air.",
    image: "/images/ekskul/paskibra.png",
  },
  {
    title: "PMR(Palang Merah Remaja",
    description: "Wadah bagi siswa yang gemar meneliti dan menulis karya ilmiah.",
    image: "/images/ekskul/kir.png",
  },
  {
    title: "SMARCHING",
    description:
      "Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim.",
    image: "/images/ekskul/basket.png",
  },
  {
    title: "SMANTECH",
    description:
      "Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim.",
    image: "/images/ekskul/basket.png",
  },
  {
    title: "KRISAN",
    description:
      "Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim.",
    image: "/images/ekskul/basket.png",
  },
  {
    title: "JOOHOO",
    description:
      "Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim.",
    image: "/images/ekskul/basket.png",
  },
  {
    title: "KARATE",
    description:
      "Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim.",
    image: "/images/ekskul/basket.png",
  },
  {
    title: "PADUAN SUARA",
    description:
      "Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim.",
    image: "/images/ekskul/basket.png",
  },
  {
    title: "SOFTBALL",
    description:
      "Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim.",
    image: "/images/ekskul/basket.png",
  },
  
];

export default function Ekstrakurikuler() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 mt-10">
      {/* Judul konsisten */}
      <div className="text-center md:text-left">
        <h2
          className="text-4xl sm:text-5xl md:pl-10 font-extrabold mb-14 text-blue-700 relative inline-block 
          after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2 after:mx-auto 
          hover:after:w-28 after:transition-all after:duration-300"
          data-aos="fade-down"
        >
          Ekstrakurikuler
        </h2>
      </div>

      {/* Grid Card */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {ekstrakurikuler.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center 
            hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Logo Ekstrakurikuler */}
            <div className="w-20 h-20 relative mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Judul */}
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              {item.title}
            </h3>

            {/* Deskripsi */}
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
