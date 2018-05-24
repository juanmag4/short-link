import React from 'react';

import { Switch, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Link } from "./Link";
import { NotFound } from "./NotFound";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/link" component={Link}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    }
}