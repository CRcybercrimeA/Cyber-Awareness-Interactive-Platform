const Course = require("../models/Course");
const UserCourseProgress = require("../models/UserCourseProgress");

async function markCourseProgress(req, res) {
  try {
    const { courseId, completedModules } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const completionPercent = Math.round(
      (completedModules / course.totalModules) * 100
    );

    const progress = await UserCourseProgress.findOneAndUpdate(
      {
        user: req.user.userId,
        course: courseId
      },
      {
        completedModules,
        completionPercent
      },
      {
        new: true,
        upsert: true
      }
    );

    return res.json({
      message: "Course progress updated",
      data: progress
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { markCourseProgress };