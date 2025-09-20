import Link from "next/link";

export default function ProfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-8 pt-20 pb-10">
      {/* Breadcrumb */}
      {/* <nav className="text-sm mb-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Beranda
        </Link>{" "}
        /{" "}
        <span className="text-gray-600">Profil</span>
      </nav> */}

      {/* Judul Umum */}
      <div className="prose max-w-none">
        {children}
      </div>

      {/* Konten halaman */}
      
    </div>
  );
}
