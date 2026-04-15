const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    title: String,
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);