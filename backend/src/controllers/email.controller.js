const EmailScan = require("../models/EmailScan");
const { analyzeEmail } = require("../services/emailAnalysis.service");

async function checkEmail(req, res) {
  try {
    const { senderEmail } = req.body;

    if (!senderEmail) {
      return res.status(400).json({
        message: "senderEmail is required"
      });
    }

    const result = await analyzeEmail(senderEmail);

    const saved = await EmailScan.create({
      user: req.user.userId,
      senderEmail,
      riskLevel: result.riskLevel,
      progressPercent: result.progressPercent,
      reasons: result.reasons
    });

    return res.json({
      message: "Email address analyzed successfully",
      data: saved
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

module.exports = { checkEmail };