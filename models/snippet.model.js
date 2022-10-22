const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SnippetSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "plaintext",
    },
  },
  { timestamps: true }
);

const SnippetModel = new mongoose.model("Snippet", SnippetSchema);

module.exports = SnippetModel;
