import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return(
  <Router>
  <div>
    
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/PortfolioPage">
        <PortfolioPage />
      </Route>
      <Route exact path="/AboutPage">
        <AboutPage />
      </Route>
      <Route exact path="/ContactPage">
        <ContactPage />
      </Route>
    </Switch>
  </div>
</Router>
  );
 
}

export default App;
