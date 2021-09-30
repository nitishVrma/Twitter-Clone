const express = require("express");

const router = express.Router();
// const { body, validationResult } = require("express-validator");

const User = require("../model/user.model");

router.post("", async function (req, res) {
  // const error = validationResult(res);

  const user = await User.create(req.body);

  // if (!error.isEmpty()) {
  //   return res.status(400).send({ error: error.array() });
  // }
  return res.status(200).send({ user });
});

router.get("", async function (req, res) {
  const user = await User.find().lean().exec();

  return res.status(201).json(user);
});

module.exports = router;
