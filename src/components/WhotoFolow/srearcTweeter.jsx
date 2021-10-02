
import styled from "styled-components"
const Search = styled.div`
margin-top: 10px;
width: 100%;
.inputtag{
    width:95%;
    height: 20px;
    margin: auto;
    border: none;
    background-color: rgb(239,243,244);


}
.inputtag:focus{
    border: none;
}
.cont{
    width: 95%;
    margin: auto;
    padding:12px;
    border-radius: 20px;
  
    background-color: rgb(239,243,244);
}`

export function SearchBar() {
    return <Search>
        <div>
            <div className="cont"><input className="inputtag" type="text" placeholder="Search Twitter" /></div>
        </div>
         </Search>
}