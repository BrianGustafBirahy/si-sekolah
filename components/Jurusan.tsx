import Card from "@/components/card";

export default function Jurusan() {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Jurusan</h2>

      <div className="space-y-6">
        <Card
          title="IPA"
          description="Jurusan Ilmu Pengetahuan Alam dengan fokus pada Matematika, Fisika, Kimia, dan Biologi."
          color="blue"
        />
        <Card
          title="IPS"
          description="Jurusan Ilmu Pengetahuan Sosial dengan fokus pada Ekonomi, Sosiologi, Geografi, dan Sejarah."
          color="purple"
        />
        <Card
          title="Bahasa"
          description="Jurusan Bahasa dengan fokus pada Bahasa Indonesia, Bahasa Inggris, dan Bahasa Asing lainnya."
          color="green"
        />
      </div>
    </section>
  );
}
