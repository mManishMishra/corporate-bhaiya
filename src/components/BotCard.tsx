import React, { useMemo } from "react";
// import { CalendarDays, Users, Clock } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { isTokenValid } from "../lib/TokenExpiry";
import { useNavigate } from "react-router-dom";

type BotCardProps = {
  image: string;
  title: string;
  join_url: string;
};

const BotCard: React.FC<BotCardProps> = ({ image, title, join_url }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const loggedUser = useMemo(() => {
    return user && isTokenValid(token || "");
  }, [user, token]);

  const imgSrc = image.startsWith("http")
    ? image
    : new URL(image, import.meta.env.VITE_SERVER_URL).href;

  const handleJoin = () => {
    if (loggedUser) {
      window.open(
        join_url
          ? join_url
          : "https://superprofile.bio/bookings/corporatebhaiya-analytics",
        "_blank"
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl duration-300 flex flex-col">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
        </div>

        <button
          onClick={handleJoin}
          className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg"
        >
          🚀 Join Now
        </button>
      </div>
    </div>
  );
};

export default BotCard;
