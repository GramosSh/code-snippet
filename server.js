const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const Snippet = require("./models/snippet.model");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://snippet-codeks.netlify.app",
      "https://snippet-tool.codeks.tech",
    ],
  })
);

app.get("/api/snippet/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const snippet = await Snippet.find({ _id: id });

    if (!snippet) {
      return res
        .status(200)
        .json({ success: false, message: "Snippet not found" });
    }

    return res.status(200).json({ success: true, snippet });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
});

app.post("/api/snippet", async (req, res) => {
  try {
    const { code, language } = req.body;

    const snippet = new Snippet({
      code,
      language,
    });

    const createdSnippet = await snippet.save();

    return res.status(201).json({
      success: true,
      message: "Snippet saved successfully",
      snippet: createdSnippet,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;

require("./db.js");

app.listen(5000, () => console.log(`Server is running in PORT: ${PORT}`));
