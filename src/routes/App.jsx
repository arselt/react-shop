import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Account from "../pages/Account";
import SignUp from "../pages/SignUp";
import RecoveryPassword from "../pages/RecoveryPassword";
import NewPassword from "../pages/NewPassword";
import "../styles/global.css"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/login' component={ Login }/>
                    <Route exact path='/sign-up' component={ SignUp } />
                    <Route exact path='/account' component={ Account } />
                    <Route exact path='/recovery-password' component={ RecoveryPassword }/>
                    <Route exact path='/new-password' component={ NewPassword }/>
                    <Route path='*' component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;