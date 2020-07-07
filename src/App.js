import React from "react";
import "./sass/_base.module.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoomsContainer from "./pages/Rooms";
import About from "./pages/About";
import SingleRoom from "./components/SingleRoom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Rooms" component={RoomsContainer}></Route>
        <Route exact path="/About" component={About}></Route>

        <Route exact path="/SingleRoom/:slug" component={SingleRoom}></Route>
      </Switch>
    </>
  );
}

export default App;
