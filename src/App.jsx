import "./App.css";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { Explore } from "./Pages/Explore";
import { Notification } from "./Pages/Notification";
import { Messages } from "./Pages/Messages";
import { Bookmarks } from "./Pages/Bookmarks";
import { Lists } from "./Pages/Lists.jsx";
import { Profile } from "./Pages/Profile";
import { Grid } from "@material-ui/core";
import { Posts } from "./Pages/Posts";

function App() {
  return (
    <Grid container className="App">
      <Grid item sm={2} md={3} align="center">
        <Sidebar />
      </Grid>
      <Grid item sm={9} md={6}>
        <Switch>
          <Route path="/home">
            <Posts />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/bookmark">
            <Bookmarks />
          </Route>
          <Route path="/list">
            <Lists />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
}

export default App;
