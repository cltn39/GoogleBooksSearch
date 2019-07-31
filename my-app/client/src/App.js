import React from "react";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/books" component={Books} />
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
