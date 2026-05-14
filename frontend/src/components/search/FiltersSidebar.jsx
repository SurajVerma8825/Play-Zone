// ==========================================
// FILE: src/components/search/FiltersSidebar.jsx
// ==========================================

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

const FiltersSidebar = () => {
  // ==========================================
  // LOCATION DATA
  // ==========================================

  const locationData = {
    Bihar: {
      cities: {
        Patna: ["Kankarbagh", "Boring Road", "Danapur"],
        Gaya: ["Civil Lines", "AP Colony"],
      },
    },

    Maharashtra: {
      cities: {
        Mumbai: ["Bandra", "Andheri", "Juhu"],
        Pune: ["Hinjewadi", "Wakad"],
      },
    },

    Karnataka: {
      cities: {
        Bengaluru: ["Indiranagar", "Whitefield"],
        Mysore: ["VV Mohalla", "Nazarbad"],
      },
    },

    Delhi: {
      cities: {
        Delhi: ["Rohini", "Dwarka"],
      },
    },
  };

  // ==========================================
  // STATES
  // ==========================================

  const states = Object.keys(locationData);

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================

  const [selectedState, setSelectedState] = useState("Bihar");

  const [selectedCity, setSelectedCity] = useState("Patna");

  // ==========================================
  // DYNAMIC CITY
  // ==========================================

  const cities = useMemo(() => {
    return Object.keys(locationData[selectedState].cities);
  }, [selectedState]);

  // ==========================================
  // DYNAMIC COLONIES
  // ==========================================

  const colonies = useMemo(() => {
    return locationData[selectedState].cities[selectedCity];
  }, [selectedCity, selectedState]);

  // ==========================================
  // GAME TYPES
  // ==========================================

  const gameTypes = [
    "Bowling",
    "VR Arena",
    "Arcade",
    "Snooker",
    "Escape Rooms",
    "Kids Zone",
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 h-fit shadow-sm">

      {/* TITLE */}
      <div className="pb-5 border-b border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">
          Filter Results
        </h2>
      </div>

      <div className="space-y-7 mt-7">

        {/* STATE */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-3">
            State
          </h3>

          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);

                const firstCity = Object.keys(
                  locationData[e.target.value].cities
                )[0];

                setSelectedCity(firstCity);
              }}
              className="
                w-full
                h-12
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                pr-10
                text-slate-700
                outline-none
                appearance-none
                focus:border-violet-500
                transition-all
              "
            >
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>

        {/* CITY */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-3">
            City
          </h3>

          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="
                w-full
                h-12
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                pr-10
                text-slate-700
                outline-none
                appearance-none
                focus:border-violet-500
                transition-all
              "
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>

        {/* COLONY */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-3">
            Colony
          </h3>

          <div className="relative">
            <select
              className="
                w-full
                h-12
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                pr-10
                text-slate-700
                outline-none
                appearance-none
                focus:border-violet-500
                transition-all
              "
            >
              {colonies.map((colony, index) => (
                <option key={index}>
                  {colony}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>

        {/* PRICE
        <div>
          <h3 className="font-semibold text-slate-800 mb-4">
            Price Range
          </h3>

          <input
            type="range"
            min="500"
            max="5000"
            className="w-full accent-violet-600 cursor-pointer"
          />

          <div className="flex items-center justify-between mt-3 text-slate-600 font-medium">
            <span>₹500</span>
            <span>₹5000</span>
          </div>
        </div> */}

        {/* GAME TYPES */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-4">
            Game Types
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {gameTypes.map((game, index) => (
              <button
                key={index}
                className="
                  h-11
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  text-sm
                  font-medium
                  text-slate-700
                  hover:border-violet-400
                  hover:bg-violet-50
                  hover:text-violet-700
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                {game}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
