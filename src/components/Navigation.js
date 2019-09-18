import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import { Home, About, Crud, Error } from "../components";

const Navigation = () => {
  console.log("Navigation");

  return (
    <div>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/crud">Crud</NavLink>
        <NavLink to="/about">About</NavLink>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/crud" exact component={Crud} />
          <Route path="/about" exact component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
