import React from 'react';
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { register } from '../store/actions';
import { Logo } from '../../../components/logo/Logo';
import { FormRegistration } from '../../../components/registration/FormRegistration';

const Registration = ({ register, isAuth }) => {
    if (isAuth) {
        return <Redirect to="/map" />;
    }

    return (
        <div className="wrapper d-flex-center">
            <div className="registration">
                <Logo />
                <FormRegistration register={register} isRegister={isAuth} />
            </div>
        </div>
    );
};

Registration.protoTypes = {
    register: PropTypes.func,
    isRegister: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuthorize
});
  
export default connect(mapStateToProps, { register })(Registration);