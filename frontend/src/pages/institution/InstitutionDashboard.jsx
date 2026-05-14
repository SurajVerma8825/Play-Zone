// ==========================================
// FILE: src/pages/institution/InstitutionDashboard.jsx
// ==========================================

import { CalendarCheck, Gamepad2, Trophy } from 'lucide-react';

import { motion } from 'framer-motion';

const InstitutionDashboard = () => {
  // ==========================================
  // STATS
  // ==========================================

  const stats = [
    {
      title: 'Total Games',
      value: '128',
      icon: Gamepad2,
      gradient: 'from-violet-600 to-fuchsia-500',
    },

    {
      title: 'Active Games',
      value: '94',
      icon: Trophy,
      gradient: 'from-pink-500 to-fuchsia-500',
    },

    {
      title: 'Total Bookings',
      value: '2,450',
      icon: CalendarCheck,
      gradient: 'from-violet-600 to-purple-500',
    },
  ];

  // ==========================================
  // RECENT GAMES
  // ==========================================

  const recentGames = [
    {
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
      name: 'VR Combat',
      category: 'VR Arena',
      platform: 'GameX Arena',
      status: 'Premium',
      date: 'Apr 11, 2026',
    },

    {
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      name: 'Bowling Alley',
      category: 'Bowling',
      platform: 'Strike Zone',
      status: 'Premium',
      date: 'May 10, 2026',
    },

    {
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
      name: 'Arcade Zone',
      category: 'Arcade',
      platform: 'Fun Arena',
      status: 'Premium',
      date: 'Jun 15, 2026',
    },

    {
      image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
      name: 'Escape Room',
      category: 'Adventure',
      platform: 'Mystery Hub',
      status: 'Premium',
      date: 'Jul 20, 2026',
    },
  ];

  return (
    <div className="relative">
      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-400/20 blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-5xl font-black text-slate-900">
          Welcome Back, GameX Arena
        </h1>

        <p className="text-slate-500 mt-3">
          Manage your indoor games and bookings.
        </p>
      </motion.div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                bg-white/80
                backdrop-blur-xl
                border
                border-white/40
                rounded-[28px]
                p-6
                shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p className="text-slate-500 font-medium">{item.title}</p>

                <h2 className="text-5xl font-black text-slate-900 mt-3">
                  {item.value}
                </h2>
              </div>

              {/* ICON */}
              <div
                className={`
                  w-20
                  h-20
                  rounded-3xl
                  bg-gradient-to-r
                  ${item.gradient}
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-xl
                `}
              >
                <Icon size={34} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* RECENT GAMES */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="
          bg-white/80
          backdrop-blur-xl
          border
          border-white/40
          rounded-[32px]
          p-6
          shadow-[0_20px_50px_rgba(0,0,0,0.06)]
          mt-10
        "
      >
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-slate-900">Recent Games</h2>

          <button
            className="
            h-11
            px-5
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-500
            text-white
            font-semibold
            cursor-pointer
            shadow-lg
          "
          >
            View All
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-4 font-semibold text-slate-500">Game</th>

                <th className="pb-4 font-semibold text-slate-500">Category</th>

                <th className="pb-4 font-semibold text-slate-500">
                  Institution
                </th>

                <th className="pb-4 font-semibold text-slate-500">Status</th>

                <th className="pb-4 font-semibold text-slate-500">
                  Added Date
                </th>
              </tr>
            </thead>

            <tbody>
              {recentGames.map((game, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 hover:bg-violet-50/50 transition-all"
                >
                  {/* GAME */}
                  <td className="py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="
                          w-16
                          h-16
                          rounded-2xl
                          object-cover
                        "
                      />

                      <h3 className="font-bold text-slate-900">{game.name}</h3>
                    </div>
                  </td>

                  {/* CATEGORY */}
                  <td className="py-5 text-slate-600">{game.category}</td>

                  {/* PLATFORM */}
                  <td className="py-5 text-slate-600">{game.platform}</td>

                  {/* STATUS */}
                  <td className="py-5">
                    <span
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-violet-100
                      text-violet-700
                      text-sm
                      font-semibold
                    "
                    >
                      {game.status}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="py-5 text-slate-600">{game.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default InstitutionDashboard;
