import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import { Signup } from "../imports/ui/Signup";
// import { Link } from "../imports/ui/Link";
import { App } from "../imports/ui/App";

Meteor.startup(() => {
  ReactDOM.render(<BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById("app"));
});