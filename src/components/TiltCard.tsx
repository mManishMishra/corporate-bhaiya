import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export interface CardData {
  title?: string;
  text?: string;
  image?: string;
  route?: string;
  buttonText?: string;
}

interface TiltCardProps {
  card: CardData;
}

export const TiltCard = ({ card }: TiltCardProps) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);
  const glow = useTransform(x, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative glow-card bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl transition-shadow duration-300 group"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glow.get()}, 30%, rgba(255,165,0,0.2), transparent)`,
        }}
      ></div>
      <img
        src={card?.image}
        alt={card?.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {card.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{card.text}</p>
        {card.route !== "" && (
          <button
            onClick={() => navigate(card.route)}
            className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300 cursor-pointer"
          >
            {card.buttonText} <ArrowRight size={20} />
          </button>
        )}
      </div>
    </motion.div>
  );
};

interface FeatureCardsProps {
  cards: CardData[];
}

export const FeatureCards = ({ cards }: FeatureCardsProps) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 perspective-[1000px]">
      {cards.map((card, index) => (
        <TiltCard key={index} card={card} />
      ))}
    </div>
  );
};
