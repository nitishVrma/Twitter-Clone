import TwitterIcon from "@material-ui/icons/Twitter";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import styled from "styled-components";

import { NavLink } from "react-router-dom";



const A = styled.div`

  position: fixed;
  margin-left: 30px;
 
  color: rgb(112, 115, 118);
  .sidebar-center {
    margin-left: 16%;
  
  }
  .tweeticon {
    color: rgb(29, 155, 240);
 
    font-size: 33px;
    padding: 10px;
  }
  .tweeticon:hover {
    cursor: pointer;
    background-color: #c1dee6;
    border-radius: 50%;
  }
  .twt {
    width: 50px;
  }
  .btn {
    margin-left: 17px;
    margin-bottom: auto;
    border: none;
 
    font-size: 1.3rem;

  }
  .icon {
  
    font-size: 30px;
   
  }
  .body {
    margin-bottom: 2px;
    background-color: white;
    display: flex;
    align-content: center;
    align-items: baseline;
    width: 200px;
    padding: 10px;
  
  }
  .body:hover {
    background-color: rgb(239, 243, 244);
    cursor: pointer;
    border-radius: 25px;
    .btn {
      cursor: pointer;
      background-color: rgb(239, 243, 244);
    }
    .tweetbtn {
      cursor: pointer;
    }
  }
  .tweetbtn {
    width: 300px;
    text-align: center;
    background-color: rgb(29, 155, 240);
    height: 50px;
    border-radius: 25px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: bolder;
  }
  .backblack {
    //color: black;
  }

  .ic {
    margin-top: 30px;
    width: 200px;
    height: 50px;
  }
  .img {
    margin-left: 10px;
    margin-top: 6px;
    width: 30px;
    height: 30px;
    padding: 2px;
    border: 1px solid black;
    border-radius: 50%;
    float: left;
  }
  .ic:hover {
    background-color: rgb(196, 195, 195);
    border-radius: 25px;
    cursor: pointer;
  }
  .twtbtn:hover {
    background-color: white;
  }
  .selected {
    background-color: #c1dee6;
    font-weight: 500;
    color: #0f1419;
  }
  .navlink {
  
    text-decoration: none;
    color: rgb(112, 115, 118);
  }
  nav .selected {
    color: black;
    background-color: red;
  }
`;

const menuItems = [
  {
    icon: <HomeRoundedIcon />,
    name: "Home",
  },
  {
    icon: <SearchIcon />,
    name: "Explore",
  },
  {
    icon: <NotificationsNoneIcon />,
    name: "Notifications",
  },
  {
    icon: <MailOutlineIcon />,
    name: "Messages",
  },
  {
    icon: <BookmarkBorderIcon />,
    name: "Bookmarks",
  },
  {
    icon: <ListAltIcon />,
    name: "Lists",
  },
  {
    icon: <PermIdentityIcon />,
    name: "Profile",
  },
];

function Sidebar() {
  const name =JSON.parse(localStorage.getItem("name"))
  const username = JSON.parse(localStorage.getItem("username"));
  return (
    <A>
      <div className="sidebar-center">
        <div className="twt">
          <TwitterIcon className="tweeticon" />
        </div>

      

        <nav>
          <NavLink to="/home" className="navlink" activeClassName="selected">
            <div className="body">
              <HomeRoundedIcon className="icon" />
              <div className="btn">Home</div>
            </div>
          </NavLink>
          <NavLink to="/explore" className="navlink" activeClassName="selected">
            <div className="body">
              <SearchIcon className="icon" />
              <div className="btn">Explore</div>
            </div>
          </NavLink>
          <NavLink
            to="/notification"
            className="navlink"
            activeClassName="selected"
          >
            <div className="body">
              <NotificationsNoneIcon className="icon" />
              <div className="btn">Notifications</div>
            </div>
          </NavLink>
          <NavLink
            to="/messages"
            className="navlink"
            activeClassName="selected"
          >
            <div className="body">
              <MailOutlineIcon className="icon" />
              <div className="btn">Messages</div>
            </div>
          </NavLink>
          <NavLink
            to="/bookmark"
            className="navlink"
            activeClassName="selected"
          >
            <div className="body">
              <BookmarkBorderIcon className="icon" />
              <div className="btn ">Bookmarks</div>
            </div>
          </NavLink>
          <NavLink to="/list" className="navlink" activeClassName="selected">
            <div className="body">
              <ListAltIcon className="icon" />
              <div className="btn ">List</div>
            </div>
          </NavLink>
          <NavLink to="/profile" className="navlink" activeClassName="selected">
            <div className="body">
              <PermIdentityIcon className="icon" />
              <div className="btn ">Profile</div>
            </div>
          </NavLink>
        </nav>
        <div className="body">
          <MoreHorizIcon className="icon" />
          <div className="btn liggg">More</div>
        </div>
        <div className="body twtbtn">
          <button className="tweetbtn">Tweet</button>
        </div>
        <div className="ic">
          <img className="img" src="https://www.bing.com/th?id=OIP.-UqHWg7MI4KvhdnQBpFLPwHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="profilepic"></img>{" "}
          <span style={{ lineHeight: "3px",marginLeft:"5px" }}>
            {name}<p style={{ lineHeight: "0px" ,marginLeft:"5px"}}>@{ username}</p>
          </span>
        </div>
      </div>
    </A>
  );
}
export default Sidebar;
