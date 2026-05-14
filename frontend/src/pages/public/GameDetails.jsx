// ==========================================
// FILE: src/pages/public/GameDetails.jsx
// ==========================================

import { games } from "@/data/gamesData";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";

const GameDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const game = games.find(
    (item) => item.id === Number(id)
  );

  // ==========================================
  // STATES
  // ==========================================

  const [selectedDate, setSelectedDate] = useState(26);

  const [selectedSlot, setSelectedSlot] =
    useState("16:00 - 17:30");

  const [players, setPlayers] = useState(3);

  // ==========================================
  // DATES
  // ==========================================

  const dates = [24, 25, 26, 27, 28, 29, 30];

  // ==========================================
  // TIME SLOTS
  // ==========================================

  const slots = [
    "16:00 - 17:30",
    "17:00 - 18:30",
    "18:00 - 19:30",
    "19:00 - 20:30",
    "20:00 - 21:30",
  ];

  // ==========================================
  // TOTAL
  // ==========================================

  const subtotal = Number(game.price) * players;

  const gst = Math.floor(subtotal * 0.18);

  const platformFee = players * 50;

  const total = subtotal + gst + platformFee;

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Game Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4FF] px-5 py-8">

      <div className="max-w-7xl mx-auto">

        {/* MAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-7 mt-">

          {/* LEFT */}
          <div className="bg-white rounded-[32px] border border-slate-200 p-7 shadow-sm">

            {/* TITLE */}
            <h2 className="text-4xl font-black text-slate-900">
              Booking Details
            </h2>

            {/* IMAGE */}
            <div className="relative mt-6 rounded-[28px] overflow-hidden h-[280px]">

              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 text-white">

                <div className="flex items-center gap-2 mb-3">

                  <div className="bg-yellow-400 text-black px-3 h-8 rounded-full flex items-center gap-1 text-sm font-semibold">
                    <Star
                      size={14}
                      fill="currentColor"
                    />

                    {game.rating}
                  </div>
                </div>

                <h2 className="text-4xl font-black">
                  {game.title}
                </h2>

                <div className="flex items-center gap-2 mt-3 text-white/90">

                  <MapPin size={17} />

                  <p>
                    {game.location}, {game.state}
                  </p>
                </div>
              </div>
            </div>

            {/* DATE + SLOT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">

              {/* DATE PICKER */}
              <div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Select Date
                </h3>

                <div className="flex items-center gap-3 flex-wrap">

                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() =>
                        setSelectedDate(date)
                      }
                      className={`
                        w-14
                        h-14
                        rounded-2xl
                        font-semibold
                        transition-all
                        duration-300
                        cursor-pointer

                        ${
                          selectedDate === date
                            ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg"
                            : "bg-slate-100 text-slate-700 hover:bg-violet-100"
                        }
                      `}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* SLOT PICKER */}
              <div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Select Time Slot
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() =>
                        setSelectedSlot(slot)
                      }
                      className={`
                        h-12
                        rounded-2xl
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        cursor-pointer

                        ${
                          selectedSlot === slot
                            ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg"
                            : "bg-slate-100 text-slate-700 hover:bg-violet-100"
                        }
                      `}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* PLAYERS */}
            <div className="mt-9">

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Number of Players
              </h3>

              <div className="w-full max-w-sm h-14 rounded-2xl bg-slate-100 flex items-center justify-between px-5">

                <button
                  onClick={() =>
                    players > 1 &&
                    setPlayers(players - 1)
                  }
                  className="cursor-pointer"
                >
                  <Minus size={20} />
                </button>

                <div className="flex items-center gap-3">
                  <Users size={20} />

                  <span className="text-xl font-bold">
                    {players}
                  </span>
                </div>

                <button
                  onClick={() =>
                    setPlayers(players + 1)
                  }
                  className="cursor-pointer"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* NOTES */}
            <div className="mt-9">

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Booking Notes
              </h3>

              <textarea
                rows="5"
                placeholder="Add booking notes..."
                className="
                  w-full
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                  outline-none
                  resize-none
                  focus:border-violet-500
                "
              ></textarea>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* SUMMARY */}
            <div className="bg-white rounded-[32px] border border-slate-200 p-7 shadow-sm sticky top-8">

              <h2 className="text-3xl font-black text-slate-900">
                Price Summary
              </h2>

              <div className="space-y-5 mt-8">

                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Booking Price
                  </span>

                  <span className="font-semibold">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    GST Charges
                  </span>

                  <span className="font-semibold">
                    ₹{gst}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Platform Fee
                  </span>

                  <span className="font-semibold">
                    ₹{platformFee}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-5 flex items-center justify-between">

                  <span className="text-2xl font-bold text-slate-900">
                    Total
                  </span>

                  <span className="text-4xl font-black text-violet-600">
                    ₹{total}
                  </span>
                </div>
              </div>

              {/* PAYMENT BUTTON */}
              <button
                onClick={() =>
                  navigate("/payment-success")
                }
                className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-500
                  text-white
                  text-lg
                  font-bold
                  mt-8
                  cursor-pointer
                  hover:opacity-90
                  transition-all
                  shadow-xl
                "
              >
                Pay with Razorpay
              </button>

              {/* PAYMENT OPTIONS */}
              <div className="grid grid-cols-3 gap-3 mt-5">

                <div className="h-24 rounded-2xl border border-violet-300 bg-violet-50 flex flex-col items-center justify-center font-semibold text-slate-700">
                  UPI
                </div>

                <div className="h-24 rounded-2xl border border-slate-200 flex flex-col items-center justify-center font-semibold text-slate-700">
                  Cards
                </div>

                <div className="h-24 rounded-2xl border border-slate-200 flex flex-col items-center justify-center font-semibold text-slate-700">
                  Wallets
                </div>
              </div>

              {/* SECURITY */}
              <div className="mt-6 h-14 rounded-2xl bg-slate-100 flex items-center gap-3 px-4 text-slate-700 font-semibold">

                <ShieldCheck className="text-green-600" />

                Secure Payment Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
