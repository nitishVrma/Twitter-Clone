const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String, required: false },
    likes: { type: Number, required: false, default: 0 },
    retweet: { type: Number, required: false, default: 0 },
    reply: { type: Number, required: false, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
