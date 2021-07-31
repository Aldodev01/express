const multer = require("multer");

const memory = multer.memoryStorage();

const upload = multer({ storage: memory });

module.exports = upload;
