import { PostCard } from "../components/Post/PostCard";
import { useState, useEffect } from "react";
import db from "../Configs/firebase";
import { collection, getDocs } from "firebase/firestore";
import axios from "axios";

async function query() {
  return await getDocs(collection(db, "posts"));
}

export function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {posts.splice(0, 10).map((post) => (
        <PostCard
          key={post._id}
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
