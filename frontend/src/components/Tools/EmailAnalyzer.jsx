import { useState } from "react";
import { Mail, Search } from "lucide-react";

const EmailAnalyzer = () => {
  const [emailText, setEmailText] = useState("");
  const [risk, setRisk] = useState(null);

  const analyzeEmail = () => {
    if (!emailText) return;

    let score = 20;

    if (emailText.toLowerCase().includes("win")) score += 30;
    if (emailText.includes("http")) score += 30;
    if (emailText.toLowerCase().includes("urgent")) score += 20;

    if (score > 70) {
      setRisk({ level: "High Risk", color: "bg-red-500", width: "90%" });
    } else if (score > 40) {
      setRisk({ level: "Medium Risk", color: "bg-yellow-400", width: "60%" });
    } else {
      setRisk({ level: "Low Risk", color: "bg-green-400", width: "30%" });
    }
  };

  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-lg">

      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <Mail className="text-cyan-400" />
        <h3 className="text-lg font-semibold">Email Analyzer</h3>
      </div>

      {/* Textarea */}
      <textarea
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
        placeholder="Paste email content or headers here..."
        className="w-full h-32 p-3 rounded-lg bg-black/40 border border-white/10 outline-none text-sm"
      />

      {/* Button */}
      <button
        onClick={analyzeEmail}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-lg text-black font-medium"
      >
        <Search size={16} />
        Analyze Email
      </button>

      {/* Result */}
      {risk && (
        <div className="mt-6">

          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Threat Level</span>
            <span className="text-green-400">{risk.level}</span>
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`${risk.color} h-full`}
              style={{ width: risk.width }}
            ></div>
          </div>

        </div>
      )}
    </div>
  );
};

export default EmailAnalyzer;