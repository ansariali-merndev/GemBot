import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello Express is Working",
  });
});

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("server is running on http://localhost:5000");
  });
});
