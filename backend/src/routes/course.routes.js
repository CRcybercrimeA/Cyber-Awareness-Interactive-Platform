const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { markCourseProgress } = require("../controllers/course.controller");

router.post("/progress", authMiddleware, markCourseProgress);

module.exports = router;