import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const mongoUri = process.env.MONGODB_CONNECTION;
if (!mongoUri) {
  throw new Error("MONGODB_CONNECTION is not defined in .env file");
}

const conn = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

export default conn;
