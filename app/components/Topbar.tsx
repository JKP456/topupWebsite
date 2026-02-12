export default function Topbar() {
  return (
    <header className="h-16 bg-orange-500 flex items-center px-6">
      <input
        placeholder="ค้นหาเกม / UID"
        className="w-full max-w-md px-4 py-2 rounded-lg"
      />
    </header>
  );
}
