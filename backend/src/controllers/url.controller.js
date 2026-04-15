const UrlScan = require("../models/UrlScan");
const { analyzeUrl } = require("../services/urlAnalysis.service");

async function checkUrl(req, res) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    const result = await analyzeUrl(url);

    const saved = await UrlScan.create({
      user: req.user.userId,
      inputUrl: url,
      normalizedUrl: result.normalizedUrl,
      status: result.status,
      sslStatus: result.sslStatus,
      reputation: result.reputation,
      score: result.score,
      reasons: result.reasons
    });

    return res.json({
      message: "URL checked successfully",
      data: saved
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { checkUrl };