const {DataTypes} = require("sequelize")
const sequelize = require("./connection")

//* SCHEMA TABLE mahasiswa
const Mahasiswa = sequelize.define( "mahasiswa", {
  nama_lengkap : {
    type : DataTypes.STRING,
    allowNull : false,
    validate : {
      len : {
        args : [5, 100],
        msg : "Masukan Nama lengkap Anda dengan benar !!"
      }
    }
  },
  email : {
    type : DataTypes.STRING,
    allowNull : false,
    unique: true,
    validate : {
      len : {
        args : [10, 50],
        msg: "Masukan Email dengan benar"
      },
      isEmail : true
    }
  },
  phone : {
    type: DataTypes.STRING,
    allowNull : false,
    validate: {
      len : {
        args : [10, 20],
        msg: "Masukan No Telp Anda dengan benar"
      }
    }
  },
  nim : {
    type : DataTypes.INTEGER,
    allowNull: false,

  }
} )

//* SCHEMA TABLE alamat
const Alamat = sequelize.define("alamat", {
  nama_jalan : {
    type : DataTypes.STRING,
    allowNull : false,
    
  },
  no_rumah : {
    type : DataTypes.INTEGER,
    allowNull : false,
    
  },
  rt_rw : {
    type : DataTypes.STRING,
    allowNull : false,
    
  },
  kelurahan : {
    type : DataTypes.STRING,
    allowNull : false,
    
  },
  kecamatan : {
    type : DataTypes.STRING,
    allowNull : false,
    
  },
  kota : {
    type : DataTypes.STRING,
    allowNull : false,
    
  },
  kode_pos : {
    type : DataTypes.STRING,
    allowNull : false,
    
  },
})

//* SCHEMA TABLE photo
const Photo = sequelize.define("photo", {
  photo : {
    type : DataTypes.STRING,
    allowNull : false
  }
})

//TODO: Relasi -> mahasiswa
Mahasiswa.hasOne(Alamat, {
  foreignKey : "mahasiswa_id", 
  sourceKey : "id",
  onDelete : "CASCADE",
  onUpdate: "CASCADE"
}) 

Alamat.belongsTo(Mahasiswa, {
  foreignKey: "mahasiswa_id"
})

// TODO: Relasi -> photo
Mahasiswa.hasMany(Photo, {
  foreignKey : "mahasiswa_id",
  sourceKey : "id",
  onDelete : "CASCADE",
  onUpdate: "CASCADE"
  // STRICK
})

Photo.belongsTo(Mahasiswa, {
  foreignKey : "mahasiswa_id"
})


module.exports = {Mahasiswa, Alamat, Photo}