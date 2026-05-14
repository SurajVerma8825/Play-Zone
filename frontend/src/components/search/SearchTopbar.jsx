// ==========================================
// FILE: src/components/search/SearchTopbar.jsx
// ==========================================

import { Bell, ChevronDown, Search, User } from "lucide-react";

const SearchTopbar = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 px-6 py-4 flex items-center justify-between gap-6 shadow-sm">

      {/* LOGO */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white font-bold">
          G
        </div>

        <h1 className="text-xl font-bold text-slate-900">
          Game Zone Finder
        </h1>
      </div>

      {/* SEARCH */}
      <div className="hidden md:flex flex-1 max-w-xl relative">
        <input
          type="text"
          placeholder="Find Game Zones"
          className="w-full h-12 rounded-xl border border-slate-200 px-5 pr-12 outline-none focus:border-violet-500"
        />

        <Search
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
          <User size={20} />
        </div>

        <ChevronDown
          className="cursor-pointer text-slate-500"
          size={18}
        />

        <div className="relative cursor-pointer">
          <Bell size={22} className="text-slate-700" />

          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </div>
      </div>
    </div>
  );
};

export default SearchTopbar;
