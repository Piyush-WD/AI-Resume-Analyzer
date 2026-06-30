require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const resumeRoutes = require("./routes/resumeRoutes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Resume Analyzer API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.use("/api/resume", resumeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
