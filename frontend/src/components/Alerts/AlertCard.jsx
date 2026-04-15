import { AlertTriangle } from "lucide-react";

const AlertCard = ({ title, description, level, time }) => {
  const getColor = () => {
    if (level === "CRITICAL") return "text-red-500";
    if (level === "HIGH") return "text-orange-400";
    return "text-yellow-400";
  };

  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex justify-between items-start">

      <div className="flex gap-4">
        <AlertTriangle className={`${getColor()}`} />

        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
          <p className="text-gray-500 text-xs mt-2">{time}</p>
        </div>
      </div>

      <span className={`text-sm font-semibold ${getColor()}`}>
        {level}
      </span>

    </div>
  );
};

export default AlertCard;