// ==========================================
// FILE: src/components/search/GamesGrid.jsx
// ==========================================

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GameCard } from "@/Index";

const GamesGrid = ({ games }) => {

  // ==========================================
  // PAGINATION
  // ==========================================

  const cardsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================
  // TOTAL PAGES
  // ==========================================

  const totalPages = Math.ceil(games.length / cardsPerPage);

  // ==========================================
  // CURRENT PAGE DATA
  // ==========================================

  const currentGames = useMemo(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;

    const endIndex = startIndex + cardsPerPage;

    return games.slice(startIndex, endIndex);
  }, [currentPage, games]);

  // ==========================================
  // PAGE CHANGE
  // ==========================================

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>

      {/* TOP */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">

        {/* TITLE */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Explore Game Zones
          </h2>

          <p className="text-slate-500 mt-1">
            Showing {currentGames.length} of {games.length} game zones
          </p>
        </div>

        {/* SORT */}
        <div className="relative">
          <select
            className="
              h-11
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              pr-10
              outline-none
              appearance-none
              text-slate-700
              focus:border-violet-500
              transition-all
            "
          >
            <option>Sort By Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Highest Rated</option>
          </select>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {currentGames.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}

      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">

        {/* PREV */}
        <button
          onClick={() =>
            currentPage > 1 &&
            handlePageChange(currentPage - 1)
          }
          disabled={currentPage === 1}
          className="
            w-11
            h-11
            rounded-xl
            border
            border-slate-200
            bg-white
            flex
            items-center
            justify-center
            text-slate-700
            transition-all
            duration-300
            cursor-pointer
            disabled:opacity-40
            disabled:cursor-not-allowed
            hover:border-violet-400
            hover:text-violet-600
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* PAGE NUMBERS */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`
                w-11
                h-11
                rounded-xl
                font-semibold
                transition-all
                duration-300
                cursor-pointer

                ${
                  currentPage === page
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-violet-400 hover:text-violet-600"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          onClick={() =>
            currentPage < totalPages &&
            handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="
            w-11
            h-11
            rounded-xl
            border
            border-slate-200
            bg-white
            flex
            items-center
            justify-center
            text-slate-700
            transition-all
            duration-300
            cursor-pointer
            disabled:opacity-40
            disabled:cursor-not-allowed
            hover:border-violet-400
            hover:text-violet-600
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default GamesGrid;
