import { useState } from "react";
import { Link, Shield } from "lucide-react";

const UrlChecker = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkUrl = () => {
    if (!url) return;

    const isSecure = url.startsWith("https");

    if (isSecure) {
      setResult({
        safe: true,
        ssl: "Valid",
        reputation: "Trusted",
      });
    } else {
      setResult({
        safe: false,
        ssl: "Invalid",
        reputation: "Suspicious",
      });
    }
  };

  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-lg">

      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <Link className="text-cyan-400" />
        <h3 className="text-lg font-semibold">URL Safety Checker</h3>
      </div>

      {/* Input */}
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10 outline-none text-sm"
      />

      {/* Button */}
      <button
        onClick={checkUrl}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-lg text-black font-medium"
      >
        <Shield size={16} />
        Check URL
      </button>

      {/* Result */}
      {result && (
        <div className="mt-6 space-y-4">

          {/* Safe Status */}
          <div
            className={`p-3 rounded-lg border ${
              result.safe
                ? "bg-green-500/10 border-green-500 text-green-400"
                : "bg-red-500/10 border-red-500 text-red-400"
            }`}
          >
            {result.safe ? "Safe to visit" : "Unsafe website"}
          </div>

          {/* SSL + Reputation */}
          <div className="grid grid-cols-2 gap-4">

            <div className="p-3 rounded-lg bg-black/40 border border-white/10">
              <p className="text-xs text-gray-400">SSL Status</p>
              <p className="font-semibold">{result.ssl}</p>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-white/10">
              <p className="text-xs text-gray-400">Reputation</p>
              <p className="font-semibold">{result.reputation}</p>
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default UrlChecker;