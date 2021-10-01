const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect(
      `mongodb://127.0.0.1:27017/twitter`
    )
    .then(() => {
      console.log("connection successfull");
    })
    .catch((err) => {
      console.log("database connection failed");
    });
};


module.exports = connect;
