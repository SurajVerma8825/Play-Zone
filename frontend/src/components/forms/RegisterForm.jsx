// ==========================================
// FILE: src/components/forms/RegisterForm.jsx
// ==========================================

import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [role, setRole] = useState('user');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    institutionName: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      role,
    });
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

        <h1 className="text-2xl font-bold text-slate-900">Game Zone Finder</h1>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8">
        <h2 className="text-4xl font-black text-center text-slate-900">
          Create Account
        </h2>

        <p className="text-center text-slate-500 mt-3 mb-8">
          Join the best indoor gaming platform
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* FULL NAME */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500"
          />

          {/* PHONE + PASSWORD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500"
          />

          {/* ROLE SELECTION */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              Role Selection
            </h3>

            <div className="bg-slate-100 rounded-2xl p-1 flex">
              <button
                type="button"
                onClick={() => setRole('user')}
                className={`flex-1 cursor-pointer h-12 rounded-xl font-semibold transition-all ${
                  role === 'user'
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg'
                    : 'text-slate-700'
                }`}
              >
                User
              </button>

              <button
                type="button"
                onClick={() => setRole('institution')}
                className={`flex-1 cursor-pointer h-12 rounded-xl font-semibold transition-all ${
                  role === 'institution'
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg'
                    : 'text-slate-700'
                }`}
              >
                Institution
              </button>
            </div>
          </div>

          {/* INSTITUTION FIELDS */}
          {role === 'institution' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <input
                type="text"
                name="institutionName"
                placeholder="Institution Name"
                value={formData.institutionName}
                onChange={handleChange}
                className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500"
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full h-12 rounded-2xl border border-slate-200 px-5 outline-none focus:border-violet-500"
              />

              <label className="w-full h-12 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center text-slate-500 cursor-pointer hover:border-violet-400 transition-all">
                Upload Documents
                <input type="file" className="hidden" />
              </label>
            </motion.div>
          )}

          {/* CREATE ACCOUNT BUTTON */}
          <button
            type="submit"
            className="w-full h-12 rounded-2xl cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Create Account
          </button>

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            className="w-full
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
    cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-slate-500 text-sm pt-2">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-violet-600 font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
