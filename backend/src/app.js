import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.url}`);
  next();
});

// Test route to confirm server works
app.get("/test", (req, res) => {
  res.json({ message: "Test route works!" });
});

// User routes
app.use("/api/v1/users", userRouter);

console.log("✅ Routes registered: /api/v1/users/register and /api/v1/users/login");

export default app;