import React from 'react';
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { registation } from '../store/actions';
import { Logo } from '../../../components/logo/Logo';
import { FormRegistration } from '../../../components/registration/FormRegistration';

const Registration = ({ registation, isAuth }) => {
    if (isAuth) {
        return <Redirect to="/map" />;
    }

    return (
        <div className="wrapper d-flex-center">
            <div className="registration">
                <Logo />
                <FormRegistration registation={registation} isRegister={isAuth} />
            </div>
        </div>
    );
};

Registration.protoTypes = {
    registation: PropTypes.func,
    isRegister: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuthorize
});
  
export default connect(mapStateToProps, { registation })(Registration);