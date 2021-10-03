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
                    <img src="https://pbs.twimg.com/profile_images/1346380180999139334/Slz_9h7y_400x400.jpg" alt="" />
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
