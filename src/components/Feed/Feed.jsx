import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { TweetBox } from './TweetBox';
import { Post } from './Post';
import './Feed.css';

export const Feed = () => {
    const [mypost, setMypost] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:8000/post').then((res) => {
            const data = res.data;
            const post = data.posts;
            setMypost(post.reverse());
            console.log(post);
        });
    }

    return (
        <div className='Feed'>
              <div className="feed-header">
                  <h2>Home</h2>
              </div>
            
            <TweetBox getData={getData} />
            
          
       
            {mypost.map((item,i) => {
                return (
                    <Post key={i}
                    avatar={item.avatar}
                    displayName={item.displayName}
                    userName={item.userName}
                    text={item.text}
                    image={item.image}
                    verified={item.verified}  />
                )
            })}
               

         
        </div>
    )
}
