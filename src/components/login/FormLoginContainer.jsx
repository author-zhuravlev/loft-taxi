import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logIn } from '../../store/auth/actions';

import Logo from '../logo/Logo';
import FormLogin from './FormLogin';

const Login = ({ logIn }) => {
    return (
        <div className="wrapper d-flex-center">
            <div className="login">
                <Logo />
                <FormLogin logIn={logIn}/>
            </div>
        </div>
    );
};

FormLogin.protoTypes = {
    logIn: PropTypes.func
}

const mapDispatchToProps = { logIn };

export default connect(
    null,
    mapDispatchToProps
)(Login);

