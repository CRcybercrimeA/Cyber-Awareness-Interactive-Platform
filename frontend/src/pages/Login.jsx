import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg relative z-10">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Shield className="text-cyan-400" />
          <h2 className="text-xl font-semibold">SafeClick</h2>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-center mb-6">
          Login to your account
        </h3>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-white/10 outline-none text-sm placeholder-gray-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-2 rounded-lg bg-black/40 border border-white/10 outline-none text-sm placeholder-gray-500"
        />

        {/* Forgot Password */}
        <div className="text-right text-sm text-gray-400 mb-4">
          Forgot password?
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition">
          Login
        </button>

        {/* Divider */}
        <div className="text-center text-gray-500 text-sm my-4">
          OR
        </div>

        {/* Google Button (UI only) */}
        <button className="w-full border border-white/10 py-3 rounded-lg text-gray-300 hover:bg-white/10 transition">
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;