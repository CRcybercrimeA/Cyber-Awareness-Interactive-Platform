const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { submitQuiz } = require("../controllers/quiz.controller");

router.post("/submit", authMiddleware, submitQuiz);

module.exports = router;