import {
  Clock3,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const GameCard = ({
  id,
  image,
  title,
  location,
  state,
  price,
  rating,
  slots,
  players,
}) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/games/${id}`)}
      className="
        group
        bg-white
        rounded-[28px]
        border
        border-slate-200
        overflow-hidden
        shadow-sm
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-56
            object-cover
            group-hover:scale-105
            transition-all
            duration-500
          "
        />

        {/* RATING */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 h-9 rounded-full flex items-center gap-2 shadow-sm">
          <Star
            size={15}
            className="text-yellow-500"
            fill="currentColor"
          />

          <span className="text-sm font-semibold text-slate-800">
            {rating}
          </span>
        </div>

        {/* PRICE */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-4 h-9 rounded-full flex items-center text-sm font-semibold shadow-lg">
          ₹{price}/hr
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* TITLE */}
        <h2 className="text-xl font-bold text-slate-900 line-clamp-1">
          {title}
        </h2>

        {/* LOCATION */}
        <div className="flex items-center gap-2 mt-2 text-slate-500">
          <MapPin size={16} />

          <p className="text-sm">
            {location}, {state}
          </p>
        </div>

        {/* INFO */}
        <div className="flex items-center justify-between mt-5">

          <div className="flex items-center gap-2 text-slate-600">
            <Clock3 size={16} />

            <span className="text-sm font-medium">
              {slots}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <Users size={16} />

            <span className="text-sm font-medium">
              {players} Players
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/checkout/${id}`);
          }}
          className="
            mt-6
            w-full
            h-10
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-500
            text-white
            text-sm
            font-semibold
            cursor-pointer
            hover:opacity-90
            transition-all
            duration-300
          "
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;
