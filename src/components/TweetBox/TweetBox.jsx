import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
import "./TweetBox.css";

export const TweetBox = ({ getData }) => {
  const [postTweet, setPostTweet] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    const data = {
      [name]: value,
    };
    setPostTweet({ ...postTweet, ...data });
  };

  const handlePost = (e) => {
    e.preventDefault();
    console.log(postTweet);

    const username = localStorage.getItem("username");

    setPostTweet({ ...postTweet, username: username });

    axios
      .post("http://localhost:8000/posts", postTweet)
      .then((res) => {
        if (res.status === 201) {
          console.log("your post request is successfull");
          getData();
        }
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  return (
    <div className="TweetBox">
      <form>
        <div className="TweetBox_Input">
          <Avatar src="https://i.pinimg.com/236x/51/b6/90/51b6908a55dce145f45eaafac221930d--harry-potter-art-love-it.jpg?nii=t"></Avatar>
          <input
            placeholder="What's happening"
            type="text"
            name="text"
            onChange={handleChange}
          ></input>
        </div>
        <input
          placeholder="Enter image url"
          type="text"
          name="image"
          onChange={handleChange}
        ></input>
        <Button
          value=""
          variant="contained"
          color="primary"
          onClick={handlePost}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};
