const { analyzeEmailAddress } = require("../utils/emailRules");

async function analyzeEmail(senderEmail) {
  return analyzeEmailAddress(senderEmail);
}

module.exports = { analyzeEmail };