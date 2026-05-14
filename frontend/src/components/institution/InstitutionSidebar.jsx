import {
  LayoutDashboard,
  PlusSquare,
  TableProperties,
  LogOut,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

const InstitutionSidebar = () => {
  return (
    <div className="
      w-[260px]
      bg-white/80
      backdrop-blur-xl
      border-r
      border-slate-200
      p-5
      flex
      flex-col
      justify-between
    ">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10">

          <div className="
            w-11
            h-11
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-500
            flex
            items-center
            justify-center
            text-white
            font-bold
          ">
            G
          </div>

          <div>
            <h2 className="font-black text-slate-900">
              Game Zone
            </h2>

            <p className="text-sm text-slate-500">
              Finder
            </p>
          </div>
        </div>

        {/* MENUS */}
        <div className="space-y-3">

          <NavLink
            to="/institution/dashboard"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                font-medium
                transition-all

                ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-violet-100'
                }
              `
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/institution/add-game"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                font-medium
                transition-all

                ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-violet-100'
                }
              `
            }
          >
            <PlusSquare size={18} />
            Add Game
          </NavLink>

          <NavLink
            to="/institution/manage-games"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                font-medium
                transition-all

                ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-violet-100'
                }
              `
            }
          >
            <TableProperties size={18} />
            Manage Games
          </NavLink>
        </div>
      </div>

      {/* LOGOUT */}
      <button className="
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-2xl
        text-slate-700
        hover:bg-red-100
        hover:text-red-600
        transition-all
        cursor-pointer
      ">
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default InstitutionSidebar;
