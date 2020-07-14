import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthorize, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthorize ? <Component {...props} /> : <Redirect to='/login' />
        }
    />
);

export default connect(
    state => ({
        isAuthorize: state.auth.isAuthorize 
    }),
)(PrivateRoute);