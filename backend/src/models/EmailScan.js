const mongoose = require("mongoose");

const emailScanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    senderEmail: {
      type: String,
      required: true
    },
    riskLevel: String,
    progressPercent: Number,
    reasons: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmailScan", emailScanSchema);