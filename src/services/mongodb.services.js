const mongoose = require("mongoose");
require('../../config/index.config')

const ConctarDB = process.env.URI_MONGODB +'/'+ process.env.MONGODB;

mongoose.connect(ConctarDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
}).then(db => console.log("Conectado correctamente ha la base de datos"))
  .catch(err => console.error(err)) 