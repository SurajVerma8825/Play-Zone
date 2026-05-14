// ==========================================
// FILE: src/components/navbar/PrivateNavbar.jsx
// ==========================================

import { Bell, ChevronDown, Heart, Search } from 'lucide-react';

import { motion } from 'framer-motion';

import { Link, NavLink } from 'react-router-dom';

const PrivateNavbar = () => {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        sticky
        top-0
        z-50
        bg-white/80
        backdrop-blur-xl
        border-b
        border-slate-200
      "
    >
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-5">
        {/* NAVBAR */}
        <div className="h-20 flex items-center justify-between gap-5">
          {/* LEFT */}
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <div
                className="
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
                shadow-lg
              "
              >
                🎮
              </div>

              <div>
                <h2 className="text-lg font-black text-slate-900 leading-none">
                  Game Zone
                </h2>

                <p className="text-sm text-slate-500 mt-1">Finder</p>
              </div>
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-7">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `
                    text-sm
                    font-semibold
                    transition-all
                    ${
                      isActive
                        ? 'text-violet-600'
                        : 'text-slate-600 hover:text-violet-600'
                    }
                  `
                }
              >
                Explore
              </NavLink>

              <NavLink
                to="/user/bookings"
                className={({ isActive }) =>
                  `
                    text-sm
                    font-semibold
                    transition-all
                    ${
                      isActive
                        ? 'text-violet-600'
                        : 'text-slate-600 hover:text-violet-600'
                    }
                  `
                }
              >
                My Bookings
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `
                    text-sm
                    font-semibold
                    transition-all
                    ${
                      isActive
                        ? 'text-violet-600'
                        : 'text-slate-600 hover:text-violet-600'
                    }
                  `
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `
                    text-sm
                    font-semibold
                    transition-all
                    ${
                      isActive
                        ? 'text-violet-600'
                        : 'text-slate-600 hover:text-violet-600'
                    }
                  `
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* CENTER SEARCH */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div
              className="
              w-full
              h-12
              rounded-2xl
              bg-slate-100
              border
              border-slate-200
              flex
              items-center
              px-4
              gap-3
            "
            >
              <Search size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Find Game Zones..."
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                  text-slate-700
                  placeholder:text-slate-400
                "
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* FAVORITE */}
            <button
              className="
                w-11
                h-11
                rounded-2xl
                bg-slate-100
                border
                border-slate-200
                flex
                items-center
                justify-center
                text-slate-700
                hover:bg-violet-100
                hover:text-violet-600
                transition-all
                cursor-pointer
              "
            >
              <Heart size={18} />
            </button>

            {/* NOTIFICATION */}
            <button
              className="
                relative
                w-11
                h-11
                rounded-2xl
                bg-slate-100
                border
                border-slate-200
                flex
                items-center
                justify-center
                text-slate-700
                hover:bg-violet-100
                hover:text-violet-600
                transition-all
                cursor-pointer
              "
            >
              <Bell size={18} />

              {/* DOT */}
              <span
                className="
                absolute
                top-2.5
                right-2.5
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
                h-11
                rounded-2xl
                border
                border-slate-200
                bg-white
                pl-2
                pr-3
                flex
                items-center
                gap-3
                shadow-sm
                hover:shadow-md
                transition-all
                cursor-pointer
              "
            >
              {/* AVATAR */}
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="
                  w-8
                  h-8
                  rounded-xl
                  object-cover
                "
              />

              {/* INFO */}
              <div className="hidden sm:block text-left">
                <h3 className="text-sm font-semibold text-slate-900 leading-none">
                  Suraj Kumar
                </h3>

                <p className="text-xs text-slate-500 mt-1">Premium User</p>
              </div>

              <ChevronDown size={18} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default PrivateNavbar;
