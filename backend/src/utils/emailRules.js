const validator = require("validator");

function getDomainFromEmail(email = "") {
  const parts = email.split("@");
  return parts.length === 2 ? parts[1].toLowerCase() : "";
}

function getLocalPartFromEmail(email = "") {
  const parts = email.split("@");
  return parts.length === 2 ? parts[0].toLowerCase() : "";
}

function looksLikeBrandImpersonation(domain) {
  const patterns = ["paypa1", "g00gle", "arnazon", "micr0soft", "faceb00k"];
  return patterns.some((item) => domain.includes(item));
}

function analyzeEmailAddress(senderEmail) {
  let score = 0;
  const reasons = [];

  if (!validator.isEmail(senderEmail || "")) {
    return {
      riskLevel: "High Risk",
      progressPercent: 100,
      reasons: ["Invalid email format"]
    };
  }

  const domain = getDomainFromEmail(senderEmail);
  const localPart = getLocalPartFromEmail(senderEmail);

  const riskyTlds = ["xyz", "top", "click", "shop", "info"];
  const suspiciousWords = [
    "secure",
    "verify",
    "login",
    "account",
    "support",
    "bank",
    "password",
    "update"
  ];

  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];

  if (riskyTlds.includes(tld)) {
    score += 20;
    reasons.push(`Risky TLD detected: .${tld}`);
  }

  const hyphenCount = (domain.match(/-/g) || []).length;
  if (hyphenCount >= 2) {
    score += 15;
    reasons.push("Too many hyphens in domain");
  }

  const subdomainCount = domainParts.length > 2 ? domainParts.length - 2 : 0;
  if (subdomainCount >= 3) {
    score += 15;
    reasons.push("Too many subdomains in domain");
  }

  for (const word of suspiciousWords) {
    if (localPart.includes(word) || domain.includes(word)) {
      score += 8;
      reasons.push(`Suspicious word found: ${word}`);
    }
  }

  if (looksLikeBrandImpersonation(domain)) {
    score += 25;
    reasons.push("Possible brand impersonation detected");
  }

  if (score > 100) score = 100;

  let riskLevel = "Safe";
  if (score >= 70) riskLevel = "High Risk";
  else if (score >= 35) riskLevel = "Suspicious";

  return {
    riskLevel,
    progressPercent: score,
    reasons
  };
}

module.exports = { analyzeEmailAddress };