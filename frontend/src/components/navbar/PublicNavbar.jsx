import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white">
              <Gamepad2 size={22} />
            </div>

            <h1 className="font-bold text-xl text-slate-900">
              Game Zone Finder
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            <Link to="/">Home</Link>
            <Link to="/search">Explore</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-slate-200 font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
