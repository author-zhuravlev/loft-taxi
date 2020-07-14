import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import Map from '../pages/map/Map';
import Profile from '../pages/profile/Profile';
import { logIn } from '../redux/actions';

const useRoutes = ({ isAuthorize }) => {
    return (
        <>
            {isAuthorize ? (
                <Switch>
                    <Route path="/map" component={Map} />
                    <Route path="/profile" component={Profile} />
                    <Redirect to="/map" component={Map} />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Redirect to='/login' component={Login} />
                </Switch>
            )}
        </>
    );
};

export default connect(
    state => ({ isAuthorize: state.auth.isAuthorize }),
    { logIn }
)(useRoutes);
