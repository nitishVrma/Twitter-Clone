import { PostCard } from "../components/Post/PostCard";
import { useState, useEffect } from "react";
import db from "../Configs/firebase";
import { collection, getDocs } from "firebase/firestore";
import axios from "axios";
import { TweetBox } from "../components/TweetBox/TweetBox";
// import { GetData } from "../Utils/GetData";

async function query() {
  return await getDocs(collection(db, "posts"));
}

export function Posts(data) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // setPosts(GetData());

  console.log(posts);

  return (
    <>
      <TweetBox />
      {posts.map((post) => (
        <PostCard
          key={post._id}
          id={post._id}
          displayName={post.name}
          username={post.username}
          verified={post.verified}
          text={post.post}
          time_posted={post.time_posted}
          image={post.picture}
          likes={post.likes}
          reply={post.reply}
          retweet={post.retweet}
        />
      ))}
    </>
  );
}
