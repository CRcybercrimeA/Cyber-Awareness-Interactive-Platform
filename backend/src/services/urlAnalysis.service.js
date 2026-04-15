const { parseAndNormalizeUrl } = require("../utils/parseUrl");
const { runFraudRules } = require("../utils/fraudRules");
const { checkSslCertificate } = require("./sslCheck.service");
const { checkReputation } = require("./reputation.service");

function getStatus(score) {
  if (score >= 70) return "Dangerous";
  if (score >= 35) return "Suspicious";
  return "Safe to visit";
}

async function analyzeUrl(inputUrl) {
  const parsed = parseAndNormalizeUrl(inputUrl);

  if (!parsed.isValid) {
    return {
      status: "Dangerous",
      sslStatus: "Invalid",
      reputation: "Unknown",
      score: 100,
      reasons: [parsed.message]
    };
  }

  const localResult = runFraudRules(parsed);
  let score = localResult.score;
  const reasons = [...localResult.reasons];

  const sslResult = await checkSslCertificate(parsed.hostname);
  if (!sslResult.sslValid) {
    score += 20;
    reasons.push("SSL certificate check failed");
  }

  const reputationResult = await checkReputation(parsed.normalizedUrl);
  if (reputationResult.flagged) {
    score += 50;
    reasons.push("Flagged by reputation service");
  }

  if (score > 100) score = 100;

  return {
    normalizedUrl: parsed.normalizedUrl,
    status: getStatus(score),
    sslStatus: sslResult.sslStatus,
    reputation: reputationResult.reputation,
    score,
    reasons
  };
}

module.exports = { analyzeUrl };