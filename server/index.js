import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { route } from "./router/route.js";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(route);

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("server is running on http://localhost:5000");
  });
});
