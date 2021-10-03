const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    displayName: { type: String, required: true },
    userName: { type: String, required: true },
    verified: { type: Boolean, required: true },
    text: { type: String, required: true },
    avatar: { type: String, required: true },
    image: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true,
});

const Post = mongoose.model('twitterpost', postSchema); //twitterposts collections

module.exports = Post;