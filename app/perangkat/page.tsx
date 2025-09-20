import Card from "@/components/Card";

export default function PerangkatSekolah() {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Perangkat Sekolah</h2>

      <div className="space-y-6">
        <Card
          title="Drs. Ahmad Hidayat"
          description="Kepala Sekolah SMA Negeri 1 Contoh."
          color="blue"
        />
        <Card
          title="Siti Aminah, M.Pd"
          description="Wakil Kepala Sekolah bidang kurikulum."
          color="purple"
        />
        <Card
          title="Rudi Hartono, S.Pd"
          description="Wakil Kepala Sekolah bidang kesiswaan."
          color="green"
        />
      </div>
    </section>
  );
}
