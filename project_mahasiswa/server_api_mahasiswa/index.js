// import dependencies
const express = require("express")
const cors = require("cors")
const { urlencoded } = require("express")
const sequelize = require("./model/connection")
const mahasiswa = require("./routes/mahasiswa_routes")
const alamat = require("./routes/alamat_routes")
const photo = require("./routes/photo_routes")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT

// Middleware
app.use(cors())
app.use(express.json({limit: "100mb"}))
app.use(urlencoded({extended : false}))

// connection to database
sequelize.sync({force : true})
.then(() => [
  console.log("database terkonek.")
])
.catch((err) => {
  console.log(err)
})

// *Routes
// app.get("/", (req, res) => {
//   res.send("berhasil")
// })
app.use("/api", mahasiswa)
app.use("/api", alamat)
app.use("/api", photo)


app.listen( PORT , () => {
  console.log("server berjalan pada " + PORT)
})