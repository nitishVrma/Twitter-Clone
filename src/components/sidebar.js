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
import profilepic from "../images/profilepic.jpeg";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';


const A = styled.div`
  width: 100%;
   color: rgb(112, 115, 118);
  .sidebar-center {
    margin-left: 16%;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
  .tweeticon {
    color: rgb(29, 155, 240);
    /* margin-left: 25px; */
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
    border: none;
    color:rgb(112,115,118);
    background-color: white;
    font-size: 20px;
    line-height: 5px;
   
  }
  .icon {
    float: left;
    font-size: 30px;

  }
  .body {
    margin-bottom: 5px;
    background-color: white;
    display: flex;
    width: 200px;
    padding: 10px;
    // color: rgb(112, 115, 118);
  }
  .body:hover {
    background-color: rgb(239,243,244);
    cursor: pointer;
    border-radius: 25px;
    .btn {
      cursor: pointer;
      background-color: rgb(239,243,244);
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
    margin-top: 45px;
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
    // background-color: #c1dee6;
  }
  .navlink {
    text-decoration: none;
    color: rgb(112, 115, 118);
  }
nav .selected{
  color:black;
  background-color: red;

}

`;
function Sidebar() {

  return (  
    <A>
      <div className="sidebar-center">
        <div className="twt">
          <TwitterIcon className="tweeticon" />
        </div>
        <nav>
        <NavLink to="/home" className="navlink" activeClassName="selected">
          <div className="body backblack">
            <HomeRoundedIcon className="icon" />
            <button className="btn">Home</button>
          </div>
        </NavLink>
        <NavLink to="/explore" className="navlink" activeClassName="selected">
          <div className="body">
            <SearchIcon className="icon" />
            <button className="btn">Explore</button>
          </div>
        </NavLink>
        <NavLink to="/notification"  className="navlink" activeClassName="selected">
          <div className="body">
            <NotificationsNoneIcon className="icon" />
            <button className="btn">Notifications</button>
          </div>
        </NavLink>
        <NavLink to="/messages" className="navlink" activeClassName="selected">
          <div className="body">
            <MailOutlineIcon className="icon" />
            <button className="btn">Messages</button>
          </div>
        </NavLink>
        <NavLink to="/bookmark" className="navlink" activeClassName="selected">
          <div className="body">
            <BookmarkBorderIcon className="icon" />
            <button className="btn ">Bookmarks</button>
          </div>
        </NavLink>
        <NavLink to="/list" className="navlink" activeClassName="selected">
          <div className="body">
            <ListAltIcon className="icon" />
            <button className="btn ">List</button>
          </div>
        </NavLink>
        <NavLink to="/profile" className="navlink" activeClassName="selected">
          <div className="body">
            <PermIdentityIcon className="icon" />
            <button className="btn ">Profile</button>
          </div>
        </NavLink>
        </nav>
        {/* <NavLink to="/more"> */}
        <div className="body">
          <MoreHorizIcon className="icon" />
          <button className="btn liggg">More</button>
        </div>
        {/* </NavLink> */}
        <div className="body twtbtn">
          <button className="tweetbtn">Tweet</button>
        </div>
        <div className="ic">
          <img className="img" src={profilepic} alt="profilepic"></img>{" "}
          <span style={{ lineHeight: "5px" }}>
            name<p style={{ lineHeight: "0px" }}>ranjan@2002</p>
          </span>
        </div>
      </div>
    </A>
  );
}
export default Sidebar;
