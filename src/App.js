import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Bidbot from "./pages/Bidbot";
import WeatherDashboard from "./pages/WeatherDashboard";
import ToDo from "./pages/ToDo";
import Ecommerce from "./pages/Ecommerce";
import RubberDuck from "./pages/RubberDuck";
import JustBookIt from "./pages/JustBookIt";

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
          <Route exact path="/Bidbot">
            <Bidbot />
          </Route>
          <Route exact path="/WeatherDashboard">
            <WeatherDashboard />
          </Route>
          <Route exact path="/ToDo">
            <ToDo />
          </Route>
          <Route exact path="/E-commerce">
            <Ecommerce />
          </Route>
          <Route exact path="/RubberDuck">
            <RubberDuck />
          </Route>
          <Route exact path="/JustBookIt">
            <JustBookIt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
