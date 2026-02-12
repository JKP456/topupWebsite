export default function ProductCard({ name, price }: any) {
  return (
    <div className="bg-white border-2 border-orange-300 rounded-lg p-4 text-center">
      <p className="text-gray-500 line-through">3,000 ฿</p>
      <p className="text-xl font-bold text-red-600">{price}</p>
      <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded">
        ซื้อเลย
      </button>
    </div>
  );
}
