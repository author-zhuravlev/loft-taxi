import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { PrivateRoute } from './PrivateRoute';
import Login from "../login/authorization/FormLoginContainer";
import Registration from "../login/registration/RegistrationContainer";
import Map from "../map/MapContainer";
import Profile from "../profile/ProfileContainer";

const AppRoutes = ({ isAuthorize }) => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path='/registration' component={Registration} />
            <PrivateRoute path='/profile' exact component={Profile} isAuthorize={isAuthorize} />
            <PrivateRoute path='/map' exact component={Map} isAuthorize={isAuthorize} />
            <Redirect to='/login' />
        </Switch>
    );
};

const mapStateToProps = (state) => ({ isAuthorize: state.authReducer.isAuthorize });

export default connect(mapStateToProps)(AppRoutes);
