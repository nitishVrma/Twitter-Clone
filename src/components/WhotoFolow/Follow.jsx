import styled from "styled-components"
import { useState,useEffect } from "react";

import axios from "axios"
const A = styled.div`
margin-top: 10px;
width: 100%;
height: 300px;
overflow-y: scroll;
background-color: rgb(247,249,249);
padding: 15px;
.image{
width: 30px;
height: 30px;
border-radius: 50%;
border:1px solid black
}
.itbox{
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.8fr;
    padding: 8px;
}
.itbox:hover{
background-color:rgb(199,201,202);
}
.fright{
    border:1px solid black;
     border-radius: 15px;
    float: right;
    padding: 8px;
    margin-right: 15px;
    background-color:rgb(15,20,25) ;
    color:white;



}
.fright:hover{
cursor: pointer;
}
.text{
    float:left;

}
.header{
    margin-bottom: 30px;
    color:rgb(15,20,25);
    font-size: 20px;
    font-weight:bold;
}
`
export function Folow() {
 const [mypost, setMypost] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:8000/user').then((res) => {
            const data = res.data;
          
            setMypost(data.reverse());
            console.log(mypost)
        });
    }

    return <A>
        <div className="header">Who to follow</div>
        {mypost.map(e => {
            return (
           <div key={e._id} className="itbox">
            <div> <img className="image" src="https://www.bing.com/th?id=OIP.-UqHWg7MI4KvhdnQBpFLPwHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" /></div>
            <div className="text">
                <div>{e.displayName}</div>
                <div>ranjan</div>
            </div>
       
            <div ><button className="fright">Follow</button></div>
                </div>
            )
       })} 
        </A>
}