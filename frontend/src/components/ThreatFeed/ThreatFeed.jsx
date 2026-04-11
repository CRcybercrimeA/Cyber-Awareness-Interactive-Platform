import ThreatCard from "./ThreatCard";
import { threatsData } from "../../data/threatsData";

const ThreatFeed = () => {
  return (
    <section id="threats" className="py-20 px-6">

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Threat Intelligence Feed
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Latest cyber attack updates and global security insights.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {threatsData.map((threat, index) => (
            <ThreatCard key={index} {...threat} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThreatFeed;