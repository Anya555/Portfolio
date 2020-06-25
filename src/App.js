import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Shopdesk from "./pages/Shopdesk";
import Bidbot from "./pages/Bidbot";
import WeatherDashboard from "./pages/WeatherDashboard";
import ToDo from "./pages/ToDo";

function App() {
  return (
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
          <Route exact path="/Shopdesk">
            <Shopdesk />
          </Route>
          <Route exact path="/Bidbot">
            <Bidbot />
          </Route>
          <Route exact path="/WeatherDashboard">
            <WeatherDashboard />
          </Route>
          <Route exact path="/ToDo">
            <ToDo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
