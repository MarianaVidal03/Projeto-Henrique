
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Clothes from "views/pages/Clothes";
import Kitchen from "views/pages/Kitchen";
import House from "views/pages/House";
import Books from "views/pages/Books";
import Login from "views/pages/Login/Login";
import Likes from "views/pages/Likes";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/roupa"
        render={(props) => <Clothes {...props} />}
      />
      <Route
        path="/cozinha"
        render={(props) => <Kitchen {...props} />}
      />
      <Route
        path="/casa"
        render={(props) => <House {...props} />}
      />
      <Route
        path="/livro"
        render={(props) => <Books {...props} />}
      />
      <Route
        path="/login"
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/Likes"
        render={(props) => <Likes {...props} />}
      />
      <Redirect to="/Login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
