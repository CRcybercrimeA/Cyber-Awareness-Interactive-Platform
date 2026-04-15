import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#020617]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]"></div>
          <h1 className="text-lg font-semibold tracking-wide">
            SafeClick
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <button onClick={() => scrollToSection("home")} className="hover:text-white">
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className="hover:text-white">
            Features
          </button>
          <button onClick={() => scrollToSection("tools")} className="hover:text-white">
            Tools
          </button>
          <button onClick={() => scrollToSection("dashboard")} className="hover:text-white">
            Dashboard
          </button>
          <button onClick={() => scrollToSection("alerts")} className="hover:text-white">
            Alerts
          </button>
          <button onClick={() => scrollToSection("threats")} className="hover:text-white">
            Threats
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-white">
            Contact
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm text-white placeholder-gray-500"
            />
          </div>

          {/* Auth Buttons */}
          <Link to="/login">
            <button className="border border-cyan-400 text-cyan-400 px-4 py-1.5 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-1.5 rounded-lg text-black font-medium hover:opacity-90 transition">
              Sign Up
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#020617] border-t border-white/10 flex flex-col items-center gap-4 py-4">

          <button onClick={() => scrollToSection("home")} className="hover:text-white">
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className="hover:text-white">
            Features
          </button>
          <button onClick={() => scrollToSection("tools")} className="hover:text-white">
            Tools
          </button>
          <button onClick={() => scrollToSection("dashboard")} className="hover:text-white">
            Dashboard
          </button>
          <button onClick={() => scrollToSection("alerts")} className="hover:text-white">
            Alerts
          </button>
          <button onClick={() => scrollToSection("threats")} className="hover:text-white">
            Threats
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-white">
            Contact
          </button>

          {/* Mobile Auth */}
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="border border-cyan-400 text-cyan-400 px-4 py-1.5 rounded-lg">
              Login
            </button>
          </Link>

          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-1.5 rounded-lg text-black">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;