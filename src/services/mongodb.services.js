const mongoose = require("mongoose");
const config = require('../../config/index.config');

const uri = config.configurations.MONGO_URI;

(async () => {
    try {
      const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Mongodb is connected");
    } catch (error) {
      console.error(error);
    }
  })();