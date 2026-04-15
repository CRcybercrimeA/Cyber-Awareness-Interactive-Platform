import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Tools from "../components/Tools/Tools";
import Dashboard from "../components/Dashboard/Dashboard";
import Alerts from "../components/Alerts/Alerts";
import ThreatFeed from "../components/ThreatFeed/ThreatFeed";
import Footer from "../components/Footer/Footer";
import Chatbot from "../components/Chatbot/Chatbot";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <Features />
      <Tools />
      <Dashboard />
      <Alerts />
      <ThreatFeed />

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot */}
      <Chatbot />
    </>
  );
};

export default Home;