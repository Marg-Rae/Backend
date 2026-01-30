import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed!!", error);
  }
};

startServer();