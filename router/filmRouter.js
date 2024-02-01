import express from "express";

import { postFilm } from "../controller/filmController.js";

export const filmRouter = express.Router();

filmRouter.route("/").post(postFilm);
