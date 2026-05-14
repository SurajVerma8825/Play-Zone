// ==========================================
// FILE: src/pages/public/About.jsx
// ==========================================

import {
  CalendarCheck,
  Gamepad2,
  MapPinned,
  ShieldCheck,
  Star,
  Trophy,
  Users,
  WalletCards,
} from 'lucide-react';

import { motion } from 'framer-motion';

const About = () => {
  // ==========================================
  // MISSION DATA
  // ==========================================

  const missionCards = [
    {
      icon: CalendarCheck,
      title: 'Easy Booking',
      description:
        'Book indoor gaming experiences instantly with a clean and smooth booking flow.',
    },

    {
      icon: MapPinned,
      title: 'Trusted Centers',
      description:
        'Discover verified and premium gaming centers near your location.',
    },

    {
      icon: WalletCards,
      title: 'Secure Payments',
      description:
        'Safe and secure payment experience with modern payment gateways.',
    },

    {
      icon: Gamepad2,
      title: 'Fun Experiences',
      description:
        'Enjoy VR games, bowling, arcade, snooker and more with friends.',
    },
  ];

  // ==========================================
  // STATS
  // ==========================================

  const stats = [
    {
      icon: Gamepad2,
      title: 'Total Game Zones',
      value: '500+',
      color: 'text-violet-600',
    },

    {
      icon: Users,
      title: 'Happy Users',
      value: '10k+',
      color: 'text-pink-500',
    },

    {
      icon: MapPinned,
      title: 'Cities Covered',
      value: '30+',
      color: 'text-green-500',
    },

    {
      icon: Trophy,
      title: 'Bookings Completed',
      value: '50k+',
      color: 'text-orange-500',
    },
  ];

  // ==========================================
  // TEAM
  // ==========================================

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },

    {
      name: 'Sarah Lee',
      role: 'COO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },

    {
      name: 'Emily Watson',
      role: 'UI Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },

    {
      name: 'Canchasson',
      role: 'Team Member',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
  ];

  // ==========================================
  // WHY CHOOSE US
  // ==========================================

  const whyChooseUs = [
    {
      icon: Gamepad2,
      title: 'Diverse Games',
      description: 'Explore bowling, VR games, snooker, arcade and more.',
    },

    {
      icon: Star,
      title: 'Top Ratings',
      description: 'Most trusted indoor gaming centers with excellent reviews.',
    },

    {
      icon: CalendarCheck,
      title: 'Instant Booking',
      description: 'Book your slots instantly without waiting in long queues.',
    },

    {
      icon: ShieldCheck,
      title: 'Community Events',
      description: 'Participate in tournaments and exciting gaming events.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4FF] overflow-hidden">
      {/* MAIN */}
      <section className="relative px-5 py-12">
        {/* GLOW */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-violet-400/20 blur-[130px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-white/40
              rounded-[36px]
              px-8
              py-20
              shadow-[0_20px_50px_rgba(0,0,0,0.06)]
              text-center
            "
          >
            {/* FLOATING ICONS */}
            <div className="absolute top-10 left-10 text-violet-200 text-2xl">
              🎮
            </div>

            <div className="absolute top-16 right-14 text-violet-200 text-2xl">
              🕹️
            </div>

            <div className="absolute bottom-10 left-20 text-violet-200 text-2xl">
              ✨
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Making Indoor Gaming
              <br />
              More Accessible
            </h1>

            <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto leading-8">
              Discover and book the best indoor gaming experiences near you with
              secure booking and verified gaming centers.
            </p>
          </motion.div>

          {/* MISSION */}
          <div className="mt-16">
            <h2 className="text-4xl font-black text-slate-900 text-center">
              Our Mission
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {missionCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="
                      bg-white/80
                      backdrop-blur-xl
                      border
                      border-white/40
                      rounded-3xl
                      p-6
                      shadow-lg
                      hover:-translate-y-2
                      transition-all
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-5">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-7 mt-3">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* STATS */}
          <div className="mt-20">
            <h2 className="text-4xl font-black text-slate-900 text-center">
              Statistics Section
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="
                      bg-white/80
                      backdrop-blur-xl
                      border
                      border-white/40
                      rounded-3xl
                      p-6
                      text-center
                      shadow-lg
                    "
                  >
                    <div className={`flex justify-center ${item.color}`}>
                      <Icon size={34} />
                    </div>

                    <p className="text-slate-500 text-sm mt-4">{item.title}</p>

                    <h3 className="text-5xl font-black text-slate-900 mt-2">
                      {item.value}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* TEAM */}
          <div className="mt-20">
            <h2 className="text-4xl font-black text-slate-900 text-center">
              Team Section
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-white/40
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    hover:-translate-y-2
                    transition-all
                  "
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-slate-900">
                      {member.name}
                    </h3>

                    <p className="text-slate-500 mt-2">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WHY CHOOSE */}
          <div className="mt-20">
            <h2 className="text-4xl font-black text-slate-900 text-center">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="
                      bg-white/80
                      backdrop-blur-xl
                      border
                      border-white/40
                      rounded-3xl
                      p-6
                      shadow-lg
                      hover:-translate-y-2
                      transition-all
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-5">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-7 mt-3">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default About;
