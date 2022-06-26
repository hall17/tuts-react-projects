import React, { useEffect } from 'react'

import { ROUTES } from '../utils/constants'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// ROUTES
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Login from '../pages/Login'
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import LandingPage from '../pages/LandingPage/LandingPage';


const AppRouter = () => {

    useEffect(() => {
        console.log("inside useeffect")
    }, [])
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path={ROUTES.LOGIN} component={Login} />
                <PublicRoute exact path={ROUTES.LANDING_PAGE} component={LandingPage} />
                {/* <ProtectedRoute exact path={ROUTES.INDEX} component={Home} /> */}
                <ProtectedRoute exact path={ROUTES.PROFILE} component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
