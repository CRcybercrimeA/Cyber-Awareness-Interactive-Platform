import { Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToTools = () => {
    document
      .getElementById("tools")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid pt-24 px-6"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
          <Shield className="text-cyan-400" size={18} />
          <span className="text-sm text-gray-300">
            AI Powered Cyber Security Platform
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold">
          Stay Safe in the
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}Digital World
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          SafeClick helps detect phishing emails and unsafe URLs.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={scrollToTools}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-xl text-black"
          >
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 border border-white/10 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;