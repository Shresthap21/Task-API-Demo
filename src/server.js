import express from "express";
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Task API is running"
  });
});

// port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Task API running on port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
});