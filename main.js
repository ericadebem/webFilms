import express from "express";
import mongoose from "mongoose";
import { AllFilmes } from "./router/allFilmesRouter.js";
import { User } from "./router/userRouter.js";
import cors from "cors";

const app = express();

const baseUrl = "/web";

app.use(express.json());
app.use(cors());
app.use(`${baseUrl}/filmes`, allFilmesRouter);
app.use(`${baseUrl}/user`, userRouter);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://ericadebemm:cQQVdsTUT6ZrSsMj@cluster0.mu3nqdl.mongodb.net/webFilmes"
    );
  } catch (e) {
    console.error(e);
  }
};
const port = 5060;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
});
