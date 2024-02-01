import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },

    password: array,
  },
  {
    collection: "users",
    versionKey: false,
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
