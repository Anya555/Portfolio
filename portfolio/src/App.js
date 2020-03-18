import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage"

function App() {
  return(
  <Router>
  <div>
    {/* <Navbar/> */}
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/PortfolioPage">
        <PortfolioPage />
      </Route>
      {/* <Route exact path="/PostPage">
        <PostPage />
      </Route> */}
    </Switch>
  </div>
</Router>
  );
 
}

export default App;
