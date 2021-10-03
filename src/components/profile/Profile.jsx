import React,{useState} from 'react'
import "./Profile.scss";
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tweets from "./Tweets";
import Likes from "./Likes";
import Media from "./Media";
import Replies from "./Replies";
export default function Profile() {

    const[content, setContent] = useState(<Tweets/>)

    return (
        <div className="profile">
            <div className="header">
            <div className="arrow"><ArrowBackIcon></ArrowBackIcon></div>
            <div className="name">
                <h3>Nitish Verma</h3>
                <p>0 Tweets</p>
            </div>
            </div>
            
            <div className="pic">
                <div>
                    <img src="https://pbs.twimg.com/profile_banners/935348263007301632/1609837322/1080x360" alt="" />
                </div>
                <button>Edit profile</button>
                <div className="profilePic">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                
            </div>
            <div className="details">
                    <h2>Nitish Verma</h2>
                    <p><span>@nkvoorion</span></p>
                    <div className="date"><DateRangeIcon className="icon"></DateRangeIcon>
                    <span>Joined November 2017</span></div>
                    <div>
                        <p>21<span> Following</span></p>
                        <p>10<span> Followers</span></p>
                    </div>
            </div>
            <div className="navbar">
                <button onClick={() => {setContent(<Tweets/>)}}>Tweets</button>
                <button onClick={() => {setContent(<Replies/>)}}>Tweets & replies</button>
                <button onClick={() => {setContent(<Media/>)}}>Media</button>
                <button onClick={() => {setContent(<Likes/>)}}>Likes</button>
            </div>
            {/* <hr /> */}
            <div className="content">
                {content}
            </div>
        </div>
    )
}
