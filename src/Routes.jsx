import React from "react";
import { Route, Switch } from "react-router";
import Component from "./components";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login">
        {/* <Register /> */}
        <Component.Register />
      </Route>
      <Route path="/">
        <Component.App />
      </Route>
    </Switch>
  );
}
