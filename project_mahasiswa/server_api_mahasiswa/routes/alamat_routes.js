const express = require('express')
const { Alamat } = require('../model/Model')
const alamat = express.Router()

//* Create Data alamat
alamat.post("/create-alamat", (req, res) => {
  const data = req.body

  // * Server merespon
  // res.status(201).json({
  //   success : true,
  //   data : data
  // })

  // TODO: memasukan data ke table alamat

  Alamat.create(data)
  .then(result => {
    // TODO: Server merespon
    res.status(201).json(result)
  })
  .catch(err => {
    // *Apabila ditemukan error
    res.status(500).json(err)
  })
})

// *Read all data alamat
alamat.get("/read-alamats", (req, res) => {
  Alamat.findAll()
  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})


module.exports = alamat