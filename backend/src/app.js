const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/auth.routes");
const emailRoutes = require("./routes/email.routes");
const urlRoutes = require("./routes/url.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const courseRoutes = require("./routes/course.routes");
const quizRoutes = require("./routes/quiz.routes");

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Cyber Awareness Backend Running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/url", urlRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/quizzes", quizRoutes);

module.exports = app;