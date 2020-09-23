import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

// pages
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const pages = {
  home: Home,
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/news" component={pages.home} />
          <Route exact path="/publicrelation" component={pages.home} />
          <Route path="/home" component={pages.home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
