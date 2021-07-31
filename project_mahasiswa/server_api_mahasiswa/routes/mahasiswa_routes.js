const express = require("express");
const { Mahasiswa, Alamat, Photo } = require("../model/Model");
const mahasiswa = express.Router();

//* Create Data Mahasiswa
mahasiswa.post("/create-mahasiswa", (req, res) => {
  // * Tangkap req body
  const data = req.body;

  // * Server merespon
  // res.status(201).json({
  //   success : true,
  //   data : data
  // })

  // TODO: memasukan data ke table mahasiswa
  Mahasiswa.create(data)
    .then((result) => {
      // TODO: Server merespon
      res.status(201).json(result);
    })
    .catch((err) => {
      // *Apabila ditemukan error
      res.status(500).json(err);
    });
});

// *Read all data mahasiswa
mahasiswa.get("/read-mahasiswas", (req, res) => {
  Mahasiswa.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", "nama_lengkap", "email", "phone", "nim"],
    include: [
      {
        model: Alamat,
        attributes: ["nama_jalan", "rt_rw", "no_rumah", "kode_pos"],
      },
      {
        model: Photo,
        attributes: ["photo", "mahasiswa_id"],
        order: [["createdAt", "DESC"]],
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = mahasiswa;
