import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gray-100" id="pengumuman">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Selamat Datang di SMA Negeri 1 Contoh
        </h2>
        <p className="text-gray-700 mb-6">
          Sekolah unggulan yang mencetak generasi berprestasi, berkarakter, dan
          siap menghadapi masa depan.
        </p>
        <Link
          href="#pengumuman"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Lihat Pengumuman
        </Link>
      </div>
    </section>
  );
}
