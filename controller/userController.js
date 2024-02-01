import { User } from "../model/userModel.js";
import { handleError} from "../util/handleError.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user
      ? res.status(201).json({ user })
      : res.status(404).json({ msg: "User not found" });
  } catch (e) {
    handleError(res, e);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ users });
  } catch (e) {
    handleError(res, e);
  }
};
export const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(req.body);
    res.status(201).json({ user });
  } catch (error) {
    handleError(res, e);
  }
};
export const patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    user
      ? res.status(201).json({ user })
      : res.status(404).json({ msg: `User ${req.params.id} not found` });
  } catch (error) {
    handleError(res, e);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(201).json({ user });
  } catch (error) {
    handleError(res, e);
  }
};
export const deleteAllUsers = async (req, res) => {
  try {
    const users = await User.deleteMany();
    res.status(201).json(users);
  } catch (error) {
    handleError(res, e);
  }
};
