const mongoose = require("mongoose");
require("dotenv").config();
const dbHost = process.env.DB_HOST;

const db = mongoose.connect(dbHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
