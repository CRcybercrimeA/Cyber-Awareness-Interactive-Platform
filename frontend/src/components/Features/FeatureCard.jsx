import { Shield } from "lucide-react";

const FeatureCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-cyan-400/50 transition duration-300 group cursor-pointer"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl"></div>

      {/* Icon */}
      <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 relative z-10">
        <Shield />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm relative z-10">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;