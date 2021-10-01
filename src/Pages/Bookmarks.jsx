import styled from "styled-components"
const A = styled.div`
margin-top: 10px;
.line{
  line-height: 1;
}
.her{
  line-height: 1.2;
    color: black;
  font-size: xx-large;
  font-weight: bolder;
}
.last{
  margin-top: 15px;
}
.heade{
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
}`

export function Bookmarks() {
  return <A>
    <div className="heade"> Bookmarks</div>
  <div className="her">You haven’t added</div> <div className="her">any Tweets to your </div><div className="her">Bookmarks yet</div>
    <div className="last">When you do, they’ll show up here.</div>;
    </A>
}
