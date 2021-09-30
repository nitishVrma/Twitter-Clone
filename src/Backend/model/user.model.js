const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    // profile_pic: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
