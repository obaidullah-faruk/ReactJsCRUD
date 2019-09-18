import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import {
  Navigation,
  Home,
  About,
  Crud,
  Error
  // DataInputForm,
  // ShowData,
  // Sidebar,
  // Footer
} from "./components";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/crud" component={Crud} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
