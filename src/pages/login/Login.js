import React from 'react';

import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';

const Login = () => {
    return (
        <div className="wrapper d-flex-center">
            <div className="login">
                <Logo />
                <FormLogin />
            </div>
        </div>
    );
};

export default Login;