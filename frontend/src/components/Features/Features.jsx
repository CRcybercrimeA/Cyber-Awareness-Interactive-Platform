import FeatureCard from "./FeatureCard";
import { featuresData } from "../../data/featuresData";

const Features = () => {
  const handleFeatureClick = (targetId) => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Powerful Cybersecurity Features
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          SafeClick provides advanced tools to protect you from cyber threats.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              onClick={() => handleFeatureClick(feature.targetId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;