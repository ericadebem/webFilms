import express from "express";

import { postUser,getUser, getAllUser,  } from "../controller/userController.js";

export const userRouter = express.Router();

userRouter.route("/").post(postUser).get(getAllUser);
userRouter.route("/:id").get(getUser)