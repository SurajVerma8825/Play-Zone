import { GameCard } from "@/Index";
import {games} from '@/data/gamesData'

const FeaturedGames = () => {

  return (
    <section className="pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900">
          Featured Game Zones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
