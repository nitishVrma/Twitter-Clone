const express = require('express');
const Post = require('../models/post.model');
const app = express();

const router = express.Router();

router.post('/', async (req, res) => {
    const post = await Post.create(req.body);

    res.status(201).json({ post });
});

router.get('/', async (req, res) => {
    const posts = await Post.find().lean().exec();

    res.status(200).json({ posts });
});

module.exports = router;