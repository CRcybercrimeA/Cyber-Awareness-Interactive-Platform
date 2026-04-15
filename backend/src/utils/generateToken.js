const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}

module.exports = generateToken;