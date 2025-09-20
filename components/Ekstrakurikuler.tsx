import Card from "@/components/Card";

export default function Ekstrakurikuler() {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Ekstrakurikuler</h2>

      <div className="space-y-6">
        <Card
          title="Pramuka"
          description="Membentuk karakter disiplin, mandiri, dan kepemimpinan."
          color="orange"
        />
        <Card
          title="Paskibra"
          description="Melatih kedisiplinan, kekompakan, dan cinta tanah air."
          color="red"
        />
        <Card
          title="Karya Ilmiah Remaja (KIR)"
          description="Wadah bagi siswa yang gemar meneliti dan menulis karya ilmiah."
          color="blue"
        />
        <Card
          title="Basket"
          description="Ekstrakurikuler olahraga untuk mengembangkan bakat dan kerjasama tim."
          color="green"
        />
      </div>
    </section>
  );
}
