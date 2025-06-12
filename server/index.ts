import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDb";

dotenv.config();

// password=NPoaBYeJFFMy0PY5
// username=farahjannatmithila

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at port ${PORT}`);
});
