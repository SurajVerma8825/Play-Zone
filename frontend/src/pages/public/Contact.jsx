// ==========================================
// FILE: src/pages/public/Contact.jsx
// ==========================================

import {
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F7F4FF] overflow-hidden">

      {/* MAIN SECTION */}
      <section className="relative px-5 pt-12 pb-16">

        {/* GLOW */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-400/20 blur-[120px] rounded-full"></div>

        {/* FLOATING ICONS */}
        <div className="absolute top-24 left-24 text-violet-200 text-2xl">
          🎮
        </div>

        <div className="absolute top-40 right-20 text-violet-200 text-2xl">
          🕹️
        </div>

        <div className="max-w-5xl mx-auto relative z-10">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Get in Touch With Us
            </h1>

            <p className="text-slate-500 text-sm md:text-base mt-4">
              We are here to help you book the best
              indoor gaming experiences.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 mt-14">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >

              {/* PHONE */}
              <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                    <Phone size={18} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Phone Number
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                      +91 823 525 4558
                    </p>

                    <p className="text-slate-500 text-sm">
                      +91 823 825 8585
                    </p>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                    <Mail size={18} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Email
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                      gamezonefinder@gmail.com
                    </p>

                    <p className="text-slate-500 text-sm">
                      support@gamezone.com
                    </p>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Office Address
                    </h3>

                    <p className="text-slate-500 text-sm mt-1 leading-6">
                      MP Nagar Zone-2,
                      <br />
                      Bhopal, Madhya Pradesh,
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">

                <h3 className="text-lg font-bold text-slate-900">
                  Follow Us
                </h3>

                <div className="flex items-center gap-3 mt-4">

                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                    <FaFacebookF size={16} />
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                    <FaInstagram size={16} />
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                    <FaXTwitter size={16} />
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                    <FaLinkedinIn size={16} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                bg-white/80
                backdrop-blur-xl
                border
                border-white/40
                rounded-3xl
                p-6
                shadow-lg
              "
            >

              {/* <h2 className="text-2xl font-black text-slate-900">
                Send Message
              </h2>

              <p className="text-slate-500 text-sm mt-2">
                Feel free to contact us anytime.
              </p> */}

              {/* FORM */}
              <form className="space-y-5 ">

                {/* NAME */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="
                      w-full
                      h-11
                      rounded-xl
                      border
                      border-slate-200
                      bg-white/80
                      px-4
                      mt-2
                      text-sm
                      outline-none
                      transition-all
                      focus:border-violet-500
                      focus:ring-4
                      focus:ring-violet-100
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="
                      w-full
                      h-11
                      rounded-xl
                      border
                      border-slate-200
                      bg-white/80
                      px-4
                      mt-2
                      text-sm
                      outline-none
                      transition-all
                      focus:border-violet-500
                      focus:ring-4
                      focus:ring-violet-100
                    "
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="
                      w-full
                      h-11
                      rounded-xl
                      border
                      border-slate-200
                      bg-white/80
                      px-4
                      mt-2
                      text-sm
                      outline-none
                      transition-all
                      focus:border-violet-500
                      focus:ring-4
                      focus:ring-violet-100
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Type Your Message..."
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white/80
                      p-4
                      mt-2
                      text-sm
                      outline-none
                      resize-none
                      transition-all
                      focus:border-violet-500
                      focus:ring-4
                      focus:ring-violet-100
                    "
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    w-full
                    h-11
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    to-fuchsia-500
                    text-white
                    text-sm
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    cursor-pointer
                    hover:scale-[1.01]
                    transition-all
                    shadow-lg
                  "
                >
                  Send Message

                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>

          {/* PREMIUM MAP */}



        </div>
      </section>
    </div>
  );
};

export default Contact;
