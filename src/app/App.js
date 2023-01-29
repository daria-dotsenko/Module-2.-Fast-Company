import React from "react";
import NavBar from "./components/navBar";
import Users from "./layouts/users";
import MainPage from "./layouts/main";
import Login from "./layouts/login";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users" component={Users} />
                <Route path="/" component={MainPage} />
            </Switch>
        </div>
    );
    // <Users />
}

export default App;
