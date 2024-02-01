import express from "express";

import {
  postFilm,
  getFilm,
  getAllFilmes,
  patchFilm,
  deleteFilm,
  deleteAllFilmes,
} from "../controller/filmController.js";

export const filmRouter = express.Router();

filmRouter.route("/").post(postFilm).get(getAllFilmes).delete(deleteAllFilmes);
filmRouter.route("/:id").get(getFilm).patch(patchFilm).delete(deleteFilm);
