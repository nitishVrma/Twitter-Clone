const express = require("express");
const cors = require("cors");

const userController = require("./controller/user.controller");
const postController = require("./controller/post.controller");

const app = express();
app.use(express.json());
app.use(cors());

const connect = require("./config/db");

app.use("/users", userController);
app.use("/posts", postController);

app.listen(8000, async function () {
  await connect();
  console.log("Listening to port 8000");
});
