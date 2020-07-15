import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../login/FormLoginContainer';
import Registration from '../registration/RegistrationContainer';
import Map from '../map/MapContainer';
import Profile from '../profile/ProfileContainer';
import { logIn } from '../../store/auth/actions';

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
    state => ({ isAuthorize: state.authReducer.isAuthorize }),
    { logIn }
)(useRoutes);
