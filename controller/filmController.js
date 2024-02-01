import { Film } from "../model/filmModel.js";
import { HandleError } from "../util/handleError.js";

export const getFilm = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    film
      ? res.status(201).json({ film })
      : res.status(404).json({ msg: "Filme not found" });
  } catch (e) {
    HandleError(res, e);
  }
};

export const getAllFilmes = async (req, res) => {
  try {
    const allFilmes = await Film.find();
    allFilmes;
    await res.status(201).json({ allFilmes });
  } catch (e) {
    HandleError(res, e);
  }
};
export const postFilm = async (req, res) => {
  try {
    const film = await Film.create(req.body);
    console.log(req.body);
    res.status(201).json({ film });
  } catch (error) {
    HandleError(res, e);
  }
};
export const patchFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    film
      ? res.status(201).json({ film })
      : res.status(404).json({ msg: `Film ${req.params.id} not found` });
  } catch (error) {
    HandleError(res, e);
  }
};
export const deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);
    res.status(201).json({ film });
  } catch (error) {
    HandleError(res, e);
  }
};
export const deleteAllFilmes = async (req, res) => {
  try {
    const filmes = await Film.deleteMany();
    res.status(201).json({ filmes });
  } catch (error) {
    HandleError(res, e);
  }
};

