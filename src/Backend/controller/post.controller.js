const express = require("express");

const router = express.Router();
// const { body, validationResult } = require("express-validator");

const Post = require("../model/post.model");

router.post("", async function (req, res) {
  // const error = validationResult(res);

  const user = await Post.create(req.body);

  // if (!error.isEmpty()) {
  //   return res.status(400).send({ error: error.array() });
  // }
  return res.status(200).send({ user });
});

router.get("", async function (req, res) {
  const post = await Post.find().lean().exec();

  return res.status(201).json(post);
});

module.exports = router;
