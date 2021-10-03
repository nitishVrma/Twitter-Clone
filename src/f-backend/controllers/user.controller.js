// const express = require('express');
// const User = require('../models/user.model');
// const app = express();

// const router = express.Router();

// router.post('/', async (req, res) => {
//     const user = await User.create(req.body);

//     res.status(201).json({ user });
// });

// router.get('/', async (req, res) => {
//     const users = await User.find().lean().exec();

//     res.status(200).json({ users });
// });

// module.exports = router;
const express = require("express");

const router = express.Router();
// const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

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

router.get("/:getprofile", async function (req, res) {
  // console.log(req.body.username);

  const x = req.params.getprofile;
  console.log(x);

  // console.log(req.body.username);

  const user = await User.findOne({ $username: x })
    .lean()
    .exec();

  console.log(user);
  return res.status(201).send(user);
});

module.exports = router;
