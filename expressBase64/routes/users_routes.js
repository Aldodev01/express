const express = require("express");
const upload = require("../middleware/multer");
const users = express.Router();
const Users = require("../model/Users_model");
const path = require("path");

// * CREATE ROUTE
users.post("/users", upload.single("avatar"), (req, res) => {
  const data = req.body;
  const file = req.file;

  // res.json({
  //   data: data,
  //   file: Buffer.from(file.buffer).toString("base64"),
  // });

  Users.createUsers({
    username: data.username,
    password: data.password,
    avatar: Buffer.from(file.buffer).toString("base64"),
  })
    .then((result) => {
      // res.status(201).json(result);
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

users.get("/users", (req, res) => {
  Users.readUsers()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = users;
