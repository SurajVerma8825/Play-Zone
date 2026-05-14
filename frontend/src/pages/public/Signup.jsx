// ==========================================
// FILE: src/pages/public/Signup.jsx
// ==========================================

import { RegisterForm } from '@/Index';
import { motion } from 'framer-motion';


const Signup = () => {
  return (
    <div className="min-h-screen bg-[#F7F4FF] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-7xl bg-white/60 backdrop-blur-xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex items-center justify-center bg-gradient-to-br from-violet-100 to-fuchsia-100 p-10"
        >
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
            alt="Game Zone"
            className="rounded-3xl object-cover h-full w-full shadow-2xl"
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center p-8 lg:p-14"
        >
          <RegisterForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
