import express from "express";

import {
  postUser,
  getUser,
  getAllUser,
  patchUser,
  deleteUser,
  deleteAllUsers,
} from "../controller/userController.js";

export const userRouter = express.Router();

userRouter.route("/").post(postUser).get(getAllUser).delete(deleteAllUsers);
userRouter.route("/:id").get(getUser).patch(patchUser).delete(deleteUser);
