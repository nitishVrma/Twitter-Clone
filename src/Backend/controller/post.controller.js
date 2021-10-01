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

router.patch("", async function (req, res) {
  const post = await Post.findById(req.body.id);

  post[req.body.button] = req.body.status
    ? post[req.body.button] + 1
    : post[req.body.button] - 1;

  console.log(req.body.button);

  await Post.findByIdAndUpdate(req.body.id, post);

  return res.status(200).send(post);
});

module.exports = router;
