import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import  VerfiedUserIcon  from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import { useState } from 'react';




export const Post = ({ displayName, userName, verified, text, image, avatar }) => {
    const [love,setLove]=useState(false)
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar}></Avatar>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_text">
                        <h3>{displayName} {""} <span className="post_hasgtag">
                            {verified && <VerfiedUserIcon className="post_badge" />} @ {userName}
                        </span></h3>
                    </div>

                    <div className="post_headerdescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                {image?<img src={image} alt='harry' />:""}
                <div className="post_footer">
                    <ChatBubbleOutlinedIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon className={love?"icon1":""} onClick={()=>setLove(!love)} fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    ) 
}




