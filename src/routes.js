import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Map from './pages/map/Map';
import Profile from './pages/profile/Profile';

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/map" exact>
                    <Map />
                </Route>
                <Route path="/profile" exact>
                    <Profile />
                </Route>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Redirect to="/map" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/registration" exact>
                <Registration />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
};

export default useRoutes;