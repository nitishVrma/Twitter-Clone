import React, { useState, useEffect } from 'react';
import { Avatar, Button,Grid } from '@material-ui/core';
import axios from 'axios';
import './TweetBox.css';
import GifIcon from '@mui/icons-material/Gif';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PollIcon from '@mui/icons-material/Poll';
export const TweetBox = ({getData}) => {

    const [postTweet, setPostTweet] = useState({});
    
    const handleChange = (e) => {
        const { value, name } = e.target;
         const name1 =JSON.parse(localStorage.getItem("name"))
  const username = JSON.parse(localStorage.getItem("username"));
        const data = {
            [name]: value,
            avatar:"https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Harry-Potter-2.jpg",
            displayName:name1,
            userName: username,
            verified:true
        }
         
        setPostTweet({ ...postTweet, ...data });
    }

    const handlePost = (e) => {
        e.preventDefault();
     const name =JSON.parse(localStorage.getItem("name"))
  const username = JSON.parse(localStorage.getItem("username"));
    
    setPostTweet({ ...postTweet, username: username ,name:name});
    axios.post('http://localhost:8000/post',postTweet).then((res) => {
        if (res.status === 201) {
            console.log('your post request is successfull')
            getData();
        }
       // console.log(res.data);
      }).catch((err) => {
          console.log(err)
        })
    }
   

    
    return (
        <div className="TweetBox">
            <form>
                <div className="TweetBox_Input">
                    <Avatar src="https://i.pinimg.com/236x/51/b6/90/51b6908a55dce145f45eaafac221930d--harry-potter-art-love-it.jpg?nii=t"></Avatar>
                    <input placeholder="What's happening" type="text" name="text" onChange={handleChange}></input>
                </div>
                <input placeholder="Enter image url" type="text" name="image" onChange={handleChange}></input>

                <div style={{marginTop:"20px",marginLeft:"60px",border:"1px solid whitesmoke",padding:"10px 0"}}>
                    <div style={{display:"grid",gridTemplateColumns:"85% 15%" }} >
                        <div style={{display:"flex"}}>
                        <div className="gap"><InsertPhotoIcon/></div>
                        <div className="gap"><GifIcon/></div>
                        <div className="gap"><PollIcon/></div>
                        <div className="gap"><SentimentVerySatisfiedIcon/></div>
                        <div className="gap" ><ListAltIcon /></div>
                           </div>
                         <Button style={{width:"20px",backgroundColor:"rgb(29,155,240)",color:"white",borderRadius:"25px",fontSize:"13px",textTransform:"none",textAlign:"right"}}  variant="contained"  onClick={handlePost}>
                            Tweet
                        </Button>                       
                  
                     
                    </div>
                </div>
              
           </form>
        </div>
    )
}
