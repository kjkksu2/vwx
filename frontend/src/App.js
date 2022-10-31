import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./routes/Post";

const App = () => {
  return (
    <Router>
      <Link to="/post">post</Link>

      <Switch>
        <Route exact path="/post" component={Post} />
      </Switch>
    </Router>
  );
};

export default App;
