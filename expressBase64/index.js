require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const page = require("./routes/page_routes");
const users = require("./routes/users_routes");
const app = express();
const PORT = process.env.PORT;

//TODO: middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

//TODO: middleware routing
app.use("/", page);
app.use("/api", users);

//* router
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//* listener
app.listen(PORT, () => {
  console.log(`listen port ${PORT}`);
});

//* TEST .env
// const PORT = process.env.PORT;
// const HOST = process.env.HOST;
// const SECRET = process.env.SECRET_KEY;

// console.log(PORT);
// console.log(HOST);
// console.log(SECRET);
