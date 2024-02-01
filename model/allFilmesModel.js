import mongoose from "mongoose";

export const allFilmesSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      require: true,
    },
    title: {
        type: String,
        require: true,
      },

    director: {
        type: Array,
        require: true,
      },

      cast: Array,
      summary: {
        type: String,
        require: true,
      },
      duration: {
        type: Number,
        require: true,
      },
      year: {
        type: Number,
        require: true,
      },
      genre: {
        type: Array, String,
        require: true,
      },
      AgeClassification: {
        type: Number,
        require: true,
      },
      trailer: {
        type: String,
        require: true,
      },
    },
  {
    collection: "allFilmes",
    versionKey: false,
    timestamps: true,
  }
);

export const AllFilmes = mongoose.model("AllFilmes", allFilmesSchema);
