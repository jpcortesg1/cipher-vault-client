import Image from "next/image";

interface CardInfoProps {
  title: string;
  description: string | JSX.Element;
  img: string;
  reverse?: boolean;
}

export default function CardInfo({
  title,
  description,
  img,
  reverse,
}: CardInfoProps) {
  return (
    <div
      className={`flex justify-center flex-col gap-8 shadow-gray-900 shadow-2xl p-4 rounded-xl md:px-6 md:${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex flex-col justify-evenly flex-1 text-xl">
        <h2 className="text-2xl font-bold text-center text-[#6C63FF]">{title}</h2>
        {description}
      </div>
      <div className="relative min-w-[250px] w-full md:min-w-[300px] flex flex-1 min-h-[300px]">
        <Image src={img} alt="Encryption" fill={true} />
      </div>
    </div>
  );
}
