import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/MainPage" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
