import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, isAuthorize, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthorize ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);