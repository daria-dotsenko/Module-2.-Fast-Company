import React from "react";
import NavBar from "./components/ui/navBar";
import Users from "./layouts/users";
import MainPage from "./layouts/main";
import Login from "./layouts/login";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
