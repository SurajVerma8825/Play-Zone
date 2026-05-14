// ==========================================
// FILE: src/components/forms/LoginForm.jsx
// ==========================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      {/* LOGO */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white shadow-lg">
          <Gamepad2 size={22} />
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          Game Zone Finder
        </h1>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8">
        <h2 className="text-4xl font-black text-center text-slate-900">
          Welcome Back
        </h2>

        <p className="text-center text-slate-500 mt-3 mb-8">
          Login to continue your gaming journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500 transition-all"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500 transition-all"
          />

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="cursor-pointer" />
              Remember me
            </label>

            <button
              type="button"
              className="text-violet-600 font-semibold hover:underline cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full h-12 rounded-2xl cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Login
          </button>

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            className="
              w-full
              h-12
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              text-slate-700
              font-semibold
              shadow-sm
              hover:bg-slate-50
              hover:border-violet-300
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />

            Continue with Google
          </button>

          {/* SIGNUP LINK */}
          <p className="text-center text-slate-500 text-sm pt-2">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-violet-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;
