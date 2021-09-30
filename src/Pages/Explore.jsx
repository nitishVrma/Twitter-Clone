import styled from "styled-components"
const A = styled.div`
.line{
  line-height: 1;
}
.imgs{
  margin-top: 10px;
}
.btn{
  background-color: white;
  border: none;
  padding: 15px;
  margin: auto;

  font-size: large;

 }
 .btn:hover{
   border-bottom: 2px solid blue;
   cursor: pointer;
 }
 img{
   margin-top: 30px;
width: 98%;
height: 400px;
margin: auto;
 }
 .btncc{
 
   width: 600px;
   margin: auto;
     margin-top: 2px;
 }
`

export function Explore() {
  const data = [["corona", "medical","covid-19"],["corona", "medical","covid-19"],["corona", "medical","covid-19"]];
  return <A>
    <div className="btncc">
    <button className="btn">For you</button>
    <button className="btn">Covid-90</button>
    <button className="btn">Trending</button>
    <button className="btn">News</button>
    <button className="btn">Sports</button>
      <button className="btn">Entertainment</button>
    </div>
    <div className="imgs">
      <img src="https://th.bing.com/th/id/OIP.dFMwmHEa74JfY3CmES7vMAHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7" alt="" alt="image" />
    </div>
    {data.map((e,i) => {
      return <div style={{ display: "flex",marginTop:"20px"}}>
        <div className="line" >
          <div className="line">{ data[i][0]}</div>
          <div className="line">{ data[i][1]}</div>
          <div className="sknckjn">{ data[i][2]}</div>
        </div>
        <div>corona update live </div>
        <div>---</div>
      </div>
    })}
  
  </A>
}
