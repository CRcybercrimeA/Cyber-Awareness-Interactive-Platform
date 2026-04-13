const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    totalModules: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);