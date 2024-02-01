import express from "express";

import { postAllFIlms } from "../controller/allFilmesController.js";

export const allFilmesRouter = express.Router();

allFilmesRouter.route("/").post(postAllFIlms);
