const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor", "admin"], required: true },
    email: { type: String, unique: true },
    phone: { type: String },
    address: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ["male", "female", "other"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
