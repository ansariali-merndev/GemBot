import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const URI = process.env.MONGODBURI;
export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("db connected successfully");
  } catch (error) {
    console.log("Error db failed: ", error.message);
  }
};
