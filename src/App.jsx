
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Sidebar from "./components/sidebar";
import { Explore } from "./Pages/Explore";
import { Notification } from "./Pages/Notification";
import { Messages } from "./Pages/Messages";
import { Bookmarks } from "./Pages/Bookmarks";
import { Lists } from "./Pages/Lists.jsx";
import Profile from "./components/profile/Profile";
import { Grid } from "@material-ui/core";
import { Feed } from "./components/Feed/Feed"
import { useState } from "react";
import { Folow } from "./components/WhotoFolow/Follow";
import { SearchBar } from "./components/WhotoFolow/srearcTweeter";
import Login from "./components/login/Login"

// import { Widgets } from "./components/widgets/Widgets"
function App() {
  const [login, setLogin] = useState(true);

  let history = useHistory();

  if (login === false) {
    history.push("/home");
  }

  return (
    <>
      
      {/* <Widgets/> */}
      {login ? (
        <Signup setLogin={setLogin} />
        
      ) : (
        <Grid container className="App">
          <Grid item sm={2} md={3}>
            <Sidebar />
          </Grid>
          <Grid item sm={9} md={6}>
            <Switch>
              <Route exact path="/home">
                <Feed/>
              </Route>
              <Route exact path="/explore">
                <Explore />
              </Route>
              <Route exact path="/notification">
                <Notification />
              </Route>
              <Route exact path="/messages">
                <Messages />
              </Route>
              <Route exact path="/bookmark">
                <Bookmarks />
              </Route>
              <Route exact path="/list">
                <Lists />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              
            </Switch>
            </Grid>
            <Grid><SearchBar/><Folow/></Grid>
        </Grid>
      )}
    </>
  );
}

export default App;
