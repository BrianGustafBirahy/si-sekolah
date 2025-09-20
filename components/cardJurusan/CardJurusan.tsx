import Image from "next/image";

interface CardJurusanProps {
  title: string;
  description: string;
  color: string;
  image: string;
  reverse?: boolean;
}

export default function CardJurusan({
  title,
  description,
  color,
  image,
  reverse = false,
}: CardJurusanProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Gambar */}
      <div className="flex-1 relative w-full h-64 md:h-96 bg-white rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4" // gambar selalu muat dalam container
        />
      </div>

      {/* Teks */}
      <div className="flex-1">
        <h3 className={`text-3xl font-bold text-${color}-600 mb-4`}>
          {title}
        </h3>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
    </div>
  );
}
