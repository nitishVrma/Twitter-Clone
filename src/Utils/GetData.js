import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function GetData() {
  axios
    .get("http://localhost:8000/posts")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = GetData;
