import Image from 'next/image';

export default function GameCard({ name, icon }: any) {
  return (
    <div className="bg-white border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
      <Image src={icon} alt={name} width={64} height={64} className="mx-auto" />
      <p className="mt-2 font-semibold">{name}</p>
    </div>
  );
}
