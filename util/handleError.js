import { User } from "../controller/userController.js";
import { AllFilmes } from "../controller/allFilmesController.js";
export { handleError } from "../util/handleError.js";

export const handleError = (error, res) => {
  console.error(error.msg);
  return res.status(500).json(error);
};
