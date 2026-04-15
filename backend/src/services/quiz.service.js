function calculateQuizResult(quiz, submittedAnswers) {
  let score = 0;

  quiz.questions.forEach((question, index) => {
    if (submittedAnswers[index] === question.correctAnswer) {
      score += 1;
    }
  });

  const totalQuestions = quiz.questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  return { score, totalQuestions, percentage };
}

module.exports = { calculateQuizResult };