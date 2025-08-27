const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  phone: String,
  address: String,
  dateOfBirth: Date,
  password: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
