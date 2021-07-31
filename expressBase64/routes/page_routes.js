const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

page.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/upload.html"));
});

module.exports = page;
