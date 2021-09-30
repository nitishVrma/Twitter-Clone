const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
    username: { type: String, required: true },
    verified: { type: Boolean, required: false },
    text: { type: String, required: true },
    avatar: { type: String, required: false },
    image: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
