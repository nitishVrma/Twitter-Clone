import React from 'react'
import "./Profile.scss";
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Profile() {
    return (
        <div className="profile">
            <div className="header">
            <div className="arrow"><ArrowBackIcon></ArrowBackIcon></div>
            <div className="name">
                <h4>Nitish Verma</h4>
                <p><span>0 Tweets</span></p>
            </div>
            </div>
            
            <div className="pic">
                <div>
                    <img src="https://pbs.twimg.com/profile_banners/935348263007301632/1609837322/1080x360" alt="" />
                </div>
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1346380180999139334/Slz_9h7y_400x400.jpg" alt="" />
                </div>
            </div>
            <div className="details">
                <button>Edit profile</button>
                <div>
                    <h2>Nitish Verma</h2>
                    <p><span>@nkvoorion</span></p>
                    <p><span>
                    <DateRangeIcon></DateRangeIcon>
                        Joined November 2017</span></p>
                    <div>
                        <span>21</span><p><span>Following</span></p>
                        <span>10</span><p><span>Followers</span></p>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <button>Tweets</button>
                <button>Tweets & replies</button>
                <button>Media</button>
                <button>Likes</button>
            </div>
        </div>
    )
}
