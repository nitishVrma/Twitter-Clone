import React, {useState} from 'react'
import "./signup.scss";
import Modal from 'react-modal'
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
// import AppleIcon from '@mui/icons-material/Apple';

const customStyles = {
    content: {
      height: "600px",
      width: "540px",
      borderRadius: "20px",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    // .center {
    //     border: 1px solid red;
    //   }
  };

export default function Signup() {

    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        dob:""
    })
    let name,value;
    const handleInputs = (e) => {
        // e.preventDefault(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]: value})
        // console.log(user)
    }
 
    const handleSubmit = (e) => {
        e.preventDefault(e)
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user))
        
    }

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
                contentLabel="Example Modal">
                <div className="modal">
                    <div>
                        <div className="top">
                        <button onClick={closeModal}><CloseIcon></CloseIcon></button>
                        <div className="center">
                            <TwitterIcon></TwitterIcon>
                        </div>
                        </div>
                        <div className="form">
                            <h2>Create your account</h2>
                            <form className="input" action="">
                                <input value={user.name} onChange={handleInputs} type="text" placeholder="Name" name="name"/>
                                <input value={user.email} onChange={handleInputs} type="text" placeholder="email" name="email"/>
                                <input value={user.phone} onChange={handleInputs} type="number" placeholder="Phone" name="phone"/>
                                <input value={user.password} onChange={handleInputs} type="password" placeholder="Password"name="password" />
                                <input value={user.dob} onChange={handleInputs} type="date" placeholder="Date Of Birth" name="dob"/>
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
                <div className="icon"><img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="" /></div>
                <h1>Happening now</h1>
                <h2>Sign in to Twitter.</h2>
                <div className="signbox">Sign in with Google</div>
                <div className="signbox"><div>
                    {/* <div className="apple">
                        <img src="https://w7.pngwing.com/pngs/468/690/png-transparent-apple-logo-iphone-5c-iphone-x-iphone-8-apple-ios-apple-mac-icon-miscellaneous-heart-logo-thumbnail.png" alt="" />
                    </div> */}
                    {/* <AppleIcon className="icon"></AppleIcon> */}
                    Sign in with Apple
                    </div></div>
                <div className="signbox" onClick={openModal} > Use phone, email or username </div>
                <p>Don’t have an account? <span>Sign up</span></p>
            </div>
            
        </div>
    )
}
