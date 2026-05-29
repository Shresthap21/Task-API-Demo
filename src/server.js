import express from "express";
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {

});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Task API running on port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
});