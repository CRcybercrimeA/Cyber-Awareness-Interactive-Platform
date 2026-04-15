const mongoose = require("mongoose");

const urlScanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    inputUrl: String,
    normalizedUrl: String,
    status: String,
    sslStatus: String,
    reputation: String,
    score: Number,
    reasons: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("UrlScan", urlScanSchema);