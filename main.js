import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { filmRouter } from "./router/allFilmesRouter.js";
import { User } from "./router/userRouter.js";
import cors from "cors";
const app = express();
const baseUrl = "/web";
const port = 5060;

app.use(express.json());
app.use(cors());
app.use(`${baseUrl}/film
`, filmRouter);
app.use(`${baseUrl}/user`, userRouter);

const dbUrl = process.env.DB_URL;

const connectToDb = async () => {
  try {
    await mongoose.connect(dbUrl);
  } catch (e) {
    console.error(e);
  }
};

connectToDb().then(() =>
  app.listen(port, console.log(`server listening on port ${port}`))
);
