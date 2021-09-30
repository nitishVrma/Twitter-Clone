import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import styled from "styled-components"
const A = styled.div`
margin-top: 10px;
width: 90%;
.line{
  line-height: 1;
}
.headert{
  display: grid;
  grid-template-columns: 5% 80% 10%;
  border: 1px solid whitesmoke;
}
.headert1{
  margin-top: 20px;
  display: grid;
  grid-template-columns: 5% 80% 10%;
  border: 1px solid whitesmoke;
}
.hrigth{
  display: flex;
  width: 50px;
 
}
.icon{
  padding: 5px;
}
.text{
   margin-left: 30px;
}
.aroicon{
  border-radius: 50%;
  padding: 5px;
 
}
.carticon{
  background-color: rgb(29,155,240);
   font-size:40px;
   color:white;
   padding:4px;
   border-radius: 15px;
}
.card{
  width: 98%;
}
.fbtn{
  background-color: #414346;
  color: white;
  margin-top: 15%;
  height: 30px;
  padding:0px 15px ;

  font-weight: bolder;
  border-radius: 15px;
}
.pphg{
  color: black;
  font-size: 20px;
  font-weight: bolder;

}
.bl2{
  color: rgb(113,127,138);
  border: 1px solid whitesmoke;
}
.pptect{
  margin-left: 10%;
  margin-top: 40px;
}
.dsst{
    color: black;
  font-size: 20px;
  font-weight: bolder;
  margin-top: 30px;
}
.sht{
  margin-top: 15px;
  color: rgb(29,155,240);
}`


export function Lists() {
  return <A>
    <div className="headert">
      <div className="icon"><ArrowBackIcon className="aroicon"/></div>
      <div className="text"><div>Lists</div>
      <div>user@125</div></div>
    
      <div className="hrigth">
      <div className="icon"><PostAddIcon /></div>
      <div className="icon"><MoreHorizIcon/></div>
      </div>
    </div>
    
    <div className="bl2">
      <div className="pphg">Pinned List</div>
        <div className="pptect">Nothing to see here yet — pin your favorite Lists to access them quickly.</div>
    </div>
   <div className="dsst">Discover new Lists</div>
   <div className="headert1">
      <div className="icon"><PostAddIcon className="carticon"/></div>
      <div className="text"><div>Lists</div>
      <div>user@125</div></div>
    
      <div className="hrigth">
        <button className="fbtn">Follow</button>
      </div>
    </div>

    <div className="headert1">
      <div className="icon"><PostAddIcon className="carticon"/></div>
      <div className="text"><div>Lists</div>
      <div>user@125</div></div>
    
      <div className="hrigth">
        <button className="fbtn">Follow</button>
      </div>
    </div>

    <div className="headert1">
      <div className="icon"><PostAddIcon className="carticon" style={{backgroundColor:"rgb(254,205,120)"}}/></div>
      <div className="text"><div>Lists</div>
      <div>user@125</div></div>
    
      <div className="hrigth">
        <button className="fbtn">Follow</button>
      </div>
    </div>
    <div className="sht">Show more</div>
       <div className="bl2">
      <div className="pphg">Your List</div>
        <div className="pptect">You haven't created or followed any Lists. When you do, they'll show up here.</div>
    </div>
  </A>;
}
