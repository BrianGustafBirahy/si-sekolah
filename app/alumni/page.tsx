"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

const alumniList = [
  {
    name: "Dr. Andi Wijaya",
    description: "Lulusan 2005, kini menjadi dokter spesialis di RS Nasional.",
    image: "/images/alumni/andi.jpg",
  },
  {
    name: "Budi Santoso",
    description: "Lulusan 2010, pengusaha sukses di bidang teknologi.",
    image: "/images/alumni/budi.jpg",
  },
  {
    name: "Clara Putri",
    description: "Lulusan 2012, bekerja sebagai dosen dan peneliti di bidang AI.",
    image: "/images/alumni/clara.jpg",
  },
  {
    name: "Dewi Anggraini",
    description: "Lulusan 2015, desainer UI/UX di perusahaan multinasional.",
    image: "/images/alumni/dewi.jpg",
  },
  {
    name: "Eko Pratama",
    description: "Lulusan 2018, atlet nasional cabang bulutangkis.",
    image: "/images/alumni/eko.jpg",
  },
  {
    name: "Farah Syafira",
    description: "Lulusan 2020, content creator edukasi dengan jutaan pengikut.",
    image: "/images/alumni/farah.jpg",
  },
];

export default function Alumni() {
  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
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
        Alumni
      </h2>

      {/* Grid Alumni */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {alumniList.map((alumnus, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay={idx * 200}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden 
                       hover:shadow-xl transition-all duration-500 flex flex-col"
          >
            {/* Foto Alumni */}
            <div className="relative h-56">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Info Alumni */}
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
                {alumnus.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {alumnus.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
