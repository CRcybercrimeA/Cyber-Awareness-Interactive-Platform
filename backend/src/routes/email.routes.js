const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { checkEmail } = require("../controllers/email.controller");

router.post("/check", authMiddleware, checkEmail);

module.exports = router;