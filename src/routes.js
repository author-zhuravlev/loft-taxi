import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Map from './pages/map/Map';
import Profile from './pages/profile/Profile';

const useRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/map" component={Map} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/login" component={Login} />
        </Switch>
    );
};

export default useRoutes;