const mongoose = require("mongoose");

const userCourseProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },
    completedModules: {
      type: Number,
      default: 0
    },
    completionPercent: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserCourseProgress", userCourseProgressSchema);