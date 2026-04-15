import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/api";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/signup", {
        fullName,
        email,
        password
      });

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save user (optional)
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to dashboard
      navigate("/");

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-6">

      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">

        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        {/* Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-lg text-black font-semibold"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;