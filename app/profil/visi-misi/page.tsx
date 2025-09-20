export default function VisiMisiPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Visi, Misi, dan Moto
      </h1>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Visi</h2>
          <p>
            Menjadi sekolah unggul dalam prestasi, berkarakter, dan berwawasan global.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Misi</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Menyelenggarakan pembelajaran yang inovatif dan menyenangkan.</li>
            <li>Mengembangkan potensi peserta didik secara optimal.</li>
            <li>Menanamkan nilai-nilai karakter dan kedisiplinan.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Moto</h2>
          <p>"Bersama Kita Bisa, Bersama Kita Hebat"</p>
        </div>
      </section>
    </div>
  );
}
