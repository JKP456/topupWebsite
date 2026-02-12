import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import GameCard from './components/Gamecard';
import ProductCard from './components/ProductCard';
import Banner from './components/Banner';

const games = [
  { name: 'ROV', icon: '/games/rov.png' },
  { name: 'MLBB', icon: '/games/mlbb.png' },
  { name: 'Honkai', icon: '/games/honkai.png' },
];

export default function Home() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <div className="p-6 space-y-10">
          {/* Banner */}
          <Banner />

          {/* Flash Sale */}
          <section>
            <h2 className="text-xl font-bold mb-4">🔥 Flash Sale</h2>
            <div className="grid grid-cols-4 gap-4">
              <ProductCard name="Card 1" price="2,500 ฿" />
              <ProductCard name="Card 2" price="2,500 ฿" />
            </div>
          </section>

          {/* Games */}
          <section>
            <h2 className="text-xl font-bold mb-4">🎮 เกมยอดนิยม</h2>
            <div className="grid grid-cols-5 gap-4">
              {games.map((g) => (
                <GameCard key={g.name} {...g} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
