import EmailAnalyzer from "./EmailAnalyzer";
import UrlChecker from "./UrlChecker";

const Tools = () => {
  return (
    <section
      id="tools"
      className="py-20 px-6 bg-[#020617] relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Security Tools
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Analyze threats in real-time using SafeClick’s advanced tools.
        </p>

        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ✅ ADD THIS ID */}
          <div id="email-analyzer">
            <EmailAnalyzer />
          </div>

          {/* ✅ ADD THIS ID */}
          <div id="url-checker">
            <UrlChecker />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Tools;