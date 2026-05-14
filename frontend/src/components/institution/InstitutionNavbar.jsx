import { Bell, ChevronDown, Search } from 'lucide-react';

const InstitutionNavbar = () => {
  return (
    <div
      className="
      h-20
      bg-white/80
      backdrop-blur-xl
      border-b
      border-slate-200
      px-6
      flex
      items-center
      justify-between
    "
    >
      {/* SEARCH */}
      <div
        className="
        w-[420px]
        h-12
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        flex
        items-center
        px-4
        gap-3
      "
      >
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="
            flex-1
            bg-transparent
            outline-none
            text-sm
          "
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* NOTIFICATION */}
        <button
          className="
          relative
          w-11
          h-11
          rounded-2xl
          bg-slate-100
          flex
          items-center
          justify-center
          cursor-pointer
        "
        >
          <Bell size={18} />

          <span
            className="
            absolute
            top-2
            right-2
            w-2
            h-2
            rounded-full
            bg-red-500
          "
          ></span>
        </button>

        {/* PROFILE */}
        <button
          className="
          h-12
          rounded-2xl
          bg-white
          border
          border-slate-200
          px-3
          flex
          items-center
          gap-3
          cursor-pointer
        "
        >
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="
              w-9
              h-9
              rounded-xl
            "
          />

          <div className="text-left">
            <h3 className="text-sm font-semibold">GameX Arena</h3>

            <p className="text-xs text-slate-500">Institution</p>
          </div>

          <ChevronDown size={18} />
        </button>
      </div>
    </div>
  );
};

export default InstitutionNavbar;
