const ThreatCard = ({ category, title, description, tag, date }) => {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg text-left flex flex-col justify-between">

      <div>
        {/* Category + Date */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-cyan-400 text-sm font-semibold">
            {category}
          </span>
          <span className="text-gray-500 text-xs">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-2">
          {description}
        </p>
      </div>

      {/* Tag */}
      <div className="mt-4">
        <span className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          {tag}
        </span>
      </div>

    </div>
  );
};

export default ThreatCard;