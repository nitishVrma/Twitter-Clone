import React, { useState } from "react";
import "./signup.scss";
import Modal from "react-modal";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuid } from "uuid";
import axios from "axios";

// import AppleIcon from '@mui/icons-material/Apple';

const customStyles = {
  content: {
    height: "600px",
    width: "540px",
    borderRadius: "20px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  // .center {
  //     border: 1px solid red;
  //   }
};

export default function Signup({ setLogin }) {
  const [user, setUser] = useState({
    displayName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const username = user.email.slice(0, 4) + String(user.phone).slice(0, 5);
    console.log(username);
    setUser({ ...user, username: username });
    setLogin(false);
    console.log(user);
    axios.post("http://localhost:8000/users", user);
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("name", JSON.stringify(user.displayName));
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <div>
            <div className="top">
              <button onClick={closeModal}>
                <CloseIcon></CloseIcon>
              </button>
              <div className="center">
                <TwitterIcon></TwitterIcon>
              </div>
            </div>
            <div className="form">
              <h2>Create your account</h2>
              <form className="input" action="">
                <input
                  value={user.displayName}
                  onChange={handleInputs}
                  type="text"
                  placeholder="Name"
                  name="displayName"
                />
                <input
                  value={user.email}
                  onChange={handleInputs}
                  type="text"
                  placeholder="email"
                  name="email"
                />
                <input
                  value={user.phone}
                  onChange={handleInputs}
                  type="number"
                  placeholder="Phone"
                  name="phone"
                />
                <input
                  value={user.password}
                  onChange={handleInputs}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <input
                  value={user.dob}
                  onChange={handleInputs}
                  type="date"
                  placeholder="Date Of Birth"
                  name="dob"
                />
                <button onClick={handleSubmit}>Next</button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      <div className="left">
        <TwitterIcon className="icon"></TwitterIcon>
      </div>
      <div className="right">
        <div className="icon">
          <img
            src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
            alt=""
          />
        </div>
        <h1>Happening now</h1>
        <h2>Join Twitter today.</h2>
        <div className="signbox">Sign in with Google</div>
        <div className="signbox">Sign in with Apple</div>
        <div className="signbox" onClick={openModal}>
          {" "}
          Use phone, email or username{" "}
        </div>
        <p>
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}
