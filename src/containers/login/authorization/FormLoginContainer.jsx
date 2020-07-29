import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logIn } from "../store/actions";
import { Logo } from "../../../components/logo/Logo";
import { FormLogin } from "../../../components/login/FormLogin";

const Login = ({ logIn, isAuth, userData = {} }) => {
    if (isAuth) {
        return <Redirect to="/map" />;
    }

    return (
        <div className="wrapper d-flex-center">
            <div className="login">
                <Logo />
                <FormLogin logIn={logIn} userData={userData} />
            </div>
        </div>
    );
};

Login.protoTypes = {
    logIn: PropTypes.func,
    isAuth: PropTypes.bool,
    userData: PropTypes.object
};

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuthorize,
    userData: state.authReducer.userData,
});
  
export default connect(mapStateToProps, { logIn })(Login);
