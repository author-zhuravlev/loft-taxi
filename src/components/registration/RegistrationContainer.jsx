import React from 'react';

import Logo from '../logo/Logo';
import FormRegistration from './FormRegistration';

import './registration.css';

const Registration = () => {
    return (
        <div className="wrapper d-flex-center">
            <div className="registration">
                <Logo />
                <FormRegistration />
            </div>
        </div>
    );
};

export default Registration;