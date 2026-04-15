const StatsCard = ({ value, label, sub, color }) => {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#020617]/80 backdrop-blur-xl text-center shadow-lg hover:shadow-cyan-500/10 transition duration-300">

      {/* Value */}
      <h3 className={`text-3xl font-bold ${color}`}>
        {value}
      </h3>

      {/* Label */}
      <p className="mt-2 text-gray-300">
        {label}
      </p>

      {/* Sub text */}
      <p className="text-sm text-gray-500 mt-1">
        {sub}
      </p>

    </div>
  );
};

export default StatsCard;