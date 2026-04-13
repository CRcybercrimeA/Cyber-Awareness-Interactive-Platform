const Quiz = require("../models/Quiz");
const QuizAttempt = require("../models/QuizAttempt");
const { calculateQuizResult } = require("../services/quiz.service");

async function submitQuiz(req, res) {
  try {
    const { quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const result = calculateQuizResult(quiz, answers);

    const attempt = await QuizAttempt.create({
      user: req.user.userId,
      quiz: quizId,
      score: result.score,
      totalQuestions: result.totalQuestions,
      percentage: result.percentage
    });

    return res.json({
      message: "Quiz submitted successfully",
      data: attempt
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { submitQuiz };