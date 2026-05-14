// ==========================================
// FILE: src/pages/institution/AddGame.jsx
// ==========================================

import { UploadCloud } from 'lucide-react';

import { motion } from 'framer-motion';

import { useState } from 'react';

const AddGame = () => {
  // ==========================================
  // STATES
  // ==========================================

  const [formData, setFormData] = useState({
    gameName: '',
    gameType: '',
    price: '',
    state: '',
    city: '',
    address: '',
    slots: '',
    description: '',
  });

  // ==========================================
  // HANDLE CHANGE
  // ==========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="relative">
      {/* BG GLOW */}
      <div
        className="
        absolute
        top-0
        right-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-violet-400/20
        blur-[120px]
      "
      ></div>

      {/* CONTAINER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          max-w-5xl
          mx-auto
          bg-white/80
          backdrop-blur-xl
          border
          border-white/40
          rounded-[36px]
          shadow-[0_20px_50px_rgba(0,0,0,0.06)]
          p-10
        "
      >
        {/* TOP */}
        <div className="mb-10">
          <h1 className="text-5xl font-black text-slate-900">Add New Game</h1>

          <p className="text-slate-500 mt-3">
            Publish a new indoor game for users.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GAME NAME */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Game Name
              </label>

              <input
                type="text"
                name="gameName"
                placeholder="Enter game name"
                value={formData.gameName}
                onChange={handleChange}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  outline-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                  transition-all
                "
              />
            </div>

            {/* GAME TYPE */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Game Type
              </label>

              <select
                name="gameType"
                value={formData.gameType}
                onChange={handleChange}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  outline-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                  transition-all
                "
              >
                <option value="">Select Game Type</option>

                <option>VR Arena</option>

                <option>Bowling</option>

                <option>Snooker</option>

                <option>Arcade</option>

                <option>Escape Room</option>
              </select>
            </div>
          </div>

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PRICE */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Price
              </label>

              <input
                type="number"
                name="price"
                placeholder="₹ Price"
                value={formData.price}
                onChange={handleChange}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  outline-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                "
              />
            </div>

            {/* STATE */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                State
              </label>

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  outline-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                "
              >
                <option value="">Select State</option>

                <option>Madhya Pradesh</option>

                <option>Maharashtra</option>

                <option>Delhi</option>

                <option>Karnataka</option>
              </select>
            </div>

            {/* CITY */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                City
              </label>

              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  outline-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                "
              >
                <option value="">Select City</option>

                <option>Bhopal</option>

                <option>Mumbai</option>

                <option>Delhi</option>

                <option>Bengaluru</option>
              </select>
            </div>
          </div>

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ADDRESS */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Address
              </label>

              <input
                type="text"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  outline-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                "
              />
            </div>

            {/* SLOTS */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Available Slots
              </label>

              <input
                type="number"
                name="slots"
                placeholder="Total slots"
                value={formData.slots}
                onChange={handleChange}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  outline-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                "
              />
            </div>
          </div>

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UPLOAD */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Upload Game Image
              </label>

              <label
                className="
                h-[220px]
                rounded-[28px]
                border-2
                border-dashed
                border-violet-200
                bg-violet-50/40
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:bg-violet-100/50
                transition-all
              "
              >
                <UploadCloud size={42} className="text-violet-600" />

                <h3 className="font-bold text-slate-800 mt-5">Upload Image</h3>

                <p className="text-sm text-slate-500 mt-2">
                  Drag & drop or browse file
                </p>

                <input type="file" className="hidden" />
              </label>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Description
              </label>

              <textarea
                rows="9"
                name="description"
                placeholder="Write game details..."
                value={formData.description}
                onChange={handleChange}
                className="
                  w-full
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-5
                  outline-none
                  resize-none
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                "
              ></textarea>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-end gap-4 pt-3">
            {/* CANCEL */}
            <button
              type="button"
              className="
                h-14
                px-8
                rounded-2xl
                border
                border-slate-200
                bg-white
                text-slate-700
                font-semibold
                hover:bg-slate-50
                transition-all
                cursor-pointer
              "
            >
              Cancel
            </button>

            {/* SUBMIT */}
            <button
              type="submit"
              className="
                h-14
                px-10
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-500
                text-white
                font-semibold
                shadow-xl
                hover:scale-[1.02]
                transition-all
                cursor-pointer
              "
            >
              Publish Game
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddGame;
