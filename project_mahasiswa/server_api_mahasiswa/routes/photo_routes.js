const express = require('express')
const { Photo } = require('../model/Model')
const photo = express.Router()

//* Create Data Photo
photo.post("/create-photo", (req, res) => {
  const data = req.body

  // * Server merespon
  // res.status(201).json({
  //   success : true,
  //   data : data
  // })

  Photo.create(data)
  .then(result => {
    // TODO: Server merespon
    res.status(201).json(result)
  })
  .catch(err => {
    // *Apabila ditemukan error
    res.status(500).json(err)
  })
})


module.exports = photo