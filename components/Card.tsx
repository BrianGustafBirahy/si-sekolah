type CardProps = {
  title: string;
  description: string;
  color?: string; // warna border opsional
};

export default function Card({ title, description, color = "blue" }: CardProps) {
  return (
    <div
      className="p-6 rounded-lg shadow-md border-l-4 bg-white"
      style={{ borderColor: color }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
