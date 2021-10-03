// import React from 'react'
// import './Widgets.css';
// import SearchIcon from '@material-ui/icons/Search';
// import {
//     TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed
// } from 'react-twitter-embed';

// export const Widgets = () => {
//     return (
//         <div className="widgets">
//             <div className="widgets_input">
//                 <SearchIcon className='widgets_searchIcon' />
//                 <input placeholder='search Twitter' type="text" />
//             </div>

//             <div className="widgets_widgetContainer">
//                 <h2>Whta's happening</h2>

//                 <TwitterTweetEmbed tweetId={'858551177860055040'}/>
               
//                 <TwitterTimelineEmbed
//                     sourceType="profile"
//                     screenName='cleverqazi'
//                     options={{height:400}}
//                 />

//                 <TwitterShareButton
//                     url={'http://facebook.com/cleverprogrammer'}
//                     option={{text:'reactjs is awesome ', via:'cleverqazi'}}
//                 />
//             </div>
//         </div>
//     )
// }