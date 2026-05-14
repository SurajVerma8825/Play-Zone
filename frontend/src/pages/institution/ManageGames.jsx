// ==========================================
// FILE: src/pages/institution/ManageGames.jsx
// ==========================================

import { MoreHorizontal, Pencil, Search, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { motion } from 'framer-motion';

const ManageGames = () => {
  // ==========================================
  // DUMMY DATA
  // ==========================================

  const games = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
      game: 'VR Combat Arena',
      institution: 'GameX Arena',
      city: 'Bhopal',
      price: '₹1200',
      status: 'Active',
    },

    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      game: 'Bowling Zone',
      institution: 'Strike Hub',
      city: 'Mumbai',
      price: '₹800',
      status: 'Active',
    },

    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
      game: 'Arcade Universe',
      institution: 'Fun Kingdom',
      city: 'Delhi',
      price: '₹650',
      status: 'Inactive',
    },

    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
      game: 'Escape Mystery',
      institution: 'EscapeX',
      city: 'Bengaluru',
      price: '₹1400',
      status: 'Active',
    },

    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
      game: 'Snooker Club',
      institution: 'Cue Masters',
      city: 'Indore',
      price: '₹500',
      status: 'Active',
    },
  ];

  return (
    <div className="relative">
      {/* BG GLOW */}
      <div
        className="
        absolute
        top-0
        right-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-violet-400/20
        blur-[120px]
      "
      ></div>

      {/* TOP */}
      <motion.div
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
        }}
        className="flex items-center justify-between"
      >
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-black text-slate-900">Manage Games</h1>

          <p className="text-slate-500 mt-3">
            Manage all your indoor games here.
          </p>
        </div>

        {/* BUTTON */}
        <button
          className="
          h-14
          px-7
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-500
          text-white
          font-semibold
          shadow-xl
          hover:scale-[1.02]
          transition-all
          cursor-pointer
        "
        >
          Add New Game
        </button>
      </motion.div>

      {/* FILTER BAR */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="
          mt-8
          flex
          flex-col
          md:flex-row
          gap-4
          justify-between
        "
      >
        {/* SEARCH */}
        <div
          className="
          w-full
          md:w-[420px]
          h-14
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          backdrop-blur-xl
          px-5
          flex
          items-center
          gap-3
          shadow-sm
        "
        >
          <Search size={20} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search games..."
            className="
              flex-1
              bg-transparent
              outline-none
              text-sm
            "
          />
        </div>

        {/* FILTER */}
        <select
          className="
            h-14
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            backdrop-blur-xl
            px-5
            outline-none
            shadow-sm
            cursor-pointer
          "
        >
          <option>All Games</option>

          <option>Active</option>

          <option>Inactive</option>
        </select>
      </motion.div>

      {/* TABLE */}
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
          delay: 0.2,
        }}
        className="
          mt-8
          bg-white/80
          backdrop-blur-xl
          border
          border-white/40
          rounded-[32px]
          shadow-[0_20px_50px_rgba(0,0,0,0.06)]
          overflow-hidden
        "
      >
        <Table>
          {/* HEADER */}
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="h-16 pl-6">Game</TableHead>

              <TableHead>Institution</TableHead>

              <TableHead>City</TableHead>

              <TableHead>Price</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>

          {/* BODY */}
          <TableBody>
            {games.map((game) => (
              <TableRow key={game.id} className="hover:bg-violet-50/40">
                {/* GAME */}
                <TableCell className="pl-6 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={game.image}
                      alt={game.game}
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        object-cover
                      "
                    />

                    <div>
                      <h3 className="font-bold text-slate-900">{game.game}</h3>

                      <p className="text-sm text-slate-500 mt-1">
                        Indoor Gaming
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* INSTITUTION */}
                <TableCell className="font-medium text-slate-700">
                  {game.institution}
                </TableCell>

                {/* CITY */}
                <TableCell className="text-slate-600">{game.city}</TableCell>

                {/* PRICE */}
                <TableCell className="font-semibold text-slate-900">
                  {game.price}
                </TableCell>

                {/* STATUS */}
                <TableCell>
                  <span
                    className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        game.status === 'Active'
                          ? 'bg-violet-100 text-violet-700'
                          : 'bg-red-100 text-red-600'
                      }
                    `}
                  >
                    {game.status}
                  </span>
                </TableCell>

                {/* ACTIONS */}
                <TableCell className="text-right pr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="
                          w-10
                          h-10
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          flex
                          items-center
                          justify-center
                          hover:bg-violet-50
                          transition-all
                          cursor-pointer
                        "
                      >
                        <MoreHorizontal size={18} />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="end"
                      className="
                        rounded-2xl
                        border-slate-200
                        p-2
                      "
                    >
                      {/* EDIT */}
                      <DropdownMenuItem
                        className="
                          h-11
                          rounded-xl
                          cursor-pointer
                        "
                      >
                        <Pencil size={16} className="mr-2" />
                        Edit
                      </DropdownMenuItem>

                      {/* DELETE */}
                      <DropdownMenuItem
                        className="
                          h-11
                          rounded-xl
                          text-red-600
                          cursor-pointer
                        "
                      >
                        <Trash2 size={16} className="mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {/* PAGINATION */}
      <div
        className="
        flex
        items-center
        justify-center
        gap-3
        mt-8
      "
      >
        <button
          className="
          w-11
          h-11
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-500
          text-white
          font-semibold
          cursor-pointer
        "
        >
          1
        </button>

        <button
          className="
          w-11
          h-11
          rounded-2xl
          border
          border-slate-200
          bg-white
          font-semibold
          hover:bg-violet-50
          transition-all
          cursor-pointer
        "
        >
          2
        </button>

        <button
          className="
          w-11
          h-11
          rounded-2xl
          border
          border-slate-200
          bg-white
          font-semibold
          hover:bg-violet-50
          transition-all
          cursor-pointer
        "
        >
          3
        </button>
      </div>
    </div>
  );
};

export default ManageGames;
