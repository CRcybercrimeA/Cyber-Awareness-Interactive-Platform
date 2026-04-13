const UrlScan = require("../models/UrlScan");
const EmailScan = require("../models/EmailScan");
const QuizAttempt = require("../models/QuizAttempt");
const UserCourseProgress = require("../models/UserCourseProgress");

async function getDashboard(req, res) {
  try {
    const userId = req.user.userId;

    const dangerousUrls = await UrlScan.countDocuments({
      user: userId,
      status: "Dangerous"
    });

    const riskyEmails = await EmailScan.countDocuments({
      user: userId,
      riskLevel: { $in: ["Suspicious", "High Risk"] }
    });

    const latestQuiz = await QuizAttempt.findOne({ user: userId }).sort({
      createdAt: -1
    });

    const courseProgressList = await UserCourseProgress.find({ user: userId });

    const avgCourseCompletion =
      courseProgressList.length > 0
        ? Math.round(
            courseProgressList.reduce(
              (sum, item) => sum + item.completionPercent,
              0
            ) / courseProgressList.length
          )
        : 0;

    const securityScore = Math.max(
      100 - dangerousUrls * 10 - riskyEmails * 5,
      0
    );

    return res.json({
      securityScore,
      threatsBlocked: dangerousUrls + riskyEmails,
      courseCompletion: avgCourseCompletion,
      activeAlerts: dangerousUrls + riskyEmails,
      lastQuizPercentage: latestQuiz ? latestQuiz.percentage : 0
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { getDashboard };