import styled from "styled-components"
const A = styled.div`
margin-top: 60px;
.line{
  line-height: 1;
}
.coleb{
  color: black;
  font-size: xx-large;
  font-weight: bolder;
}
.midl{
  margin-top: 10px;

}
.btnc{
  font-size: larger;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;
padding: 18px;
  width:250px;
  border-radius:25px;
  border:none;
  background-color:rgb(29,155,240) ;


}`
export function Messages() {
  return <A>
    <div className="coleb">Send a message,get</div>
    <div className="coleb">a mesage</div>
   <div className="midl">
    <div className="line">Direct Messages are private conversation</div>
    <div className="line">between you and other people on Twitter. Share</div>
      <div className="line">Tweets, media, and more!</div>
    </div>
    <button className="btnc">Start a conversation</button>
  </A>;
}
