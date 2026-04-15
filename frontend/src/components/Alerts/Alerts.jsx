import AlertCard from "./AlertCard";
import { alertsData } from "../../data/alertsData";

const Alerts = () => {
  return (
    <section id="alerts" className="py-20 px-6">

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Cyber Alerts
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Stay informed about the latest cybersecurity threats.
        </p>

        {/* Alerts List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {alertsData.map((alert, index) => (
            <AlertCard key={index} {...alert} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-sm text-gray-500">
          Live updates every 30 minutes
        </div>

      </div>
    </section>
  );
};

export default Alerts;