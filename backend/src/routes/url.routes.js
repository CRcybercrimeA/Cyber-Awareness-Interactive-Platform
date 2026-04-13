const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { checkUrl } = require("../controllers/url.controller");

router.post("/check", authMiddleware, checkUrl);

module.exports = router;