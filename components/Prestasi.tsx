import Card from "@/components/Card";

export default function Prestasi() {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Prestasi</h2>

      <div className="space-y-6">
        <Card
          title="Juara 1 Olimpiade Matematika 2024"
          description="Siswa SMA Negeri 1 Contoh meraih juara tingkat nasional."
          color="blue"
        />
        <Card
          title="Juara 2 Lomba Debat Bahasa Inggris 2023"
          description="Tim debat berhasil membawa pulang piala provinsi."
          color="purple"
        />
      </div>
    </section>
  );
}
