import express from "express";

import { postUser } from "../controller/userController.js";

export const userRouter = express.Router();

userRouter.route("/").post(postUser);
