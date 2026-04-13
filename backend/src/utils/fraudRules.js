const { isIpAddress, countSubdomains, getTld } = require("./helpers");

function runFraudRules(parsedUrl) {
  let score = 0;
  const reasons = [];

  const riskyTlds = ["xyz", "top", "click", "shop", "info"];
  const suspiciousWords = [
    "login",
    "verify",
    "secure",
    "bank",
    "account",
    "update",
    "wallet",
    "password",
    "signin"
  ];

  const fullValue = `${parsedUrl.hostname}${parsedUrl.pathname}${parsedUrl.search}`.toLowerCase();

  if (isIpAddress(parsedUrl.hostname)) {
    score += 20;
    reasons.push("Uses IP address instead of domain");
  }

  if (countSubdomains(parsedUrl.hostname) >= 3) {
    score += 15;
    reasons.push("Too many subdomains");
  }

  const tld = getTld(parsedUrl.hostname);
  if (riskyTlds.includes(tld)) {
    score += 15;
    reasons.push(`Risky TLD .${tld}`);
  }

  const hyphens = (parsedUrl.hostname.match(/-/g) || []).length;
  if (hyphens >= 2) {
    score += 10;
    reasons.push("Too many hyphens");
  }

  for (const word of suspiciousWords) {
    if (fullValue.includes(word)) {
      score += 7;
      reasons.push(`Suspicious keyword: ${word}`);
    }
  }

  return { score, reasons };
}

module.exports = { runFraudRules };