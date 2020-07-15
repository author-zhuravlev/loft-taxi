import React from 'react';
import { connect } from 'react-redux';

import Header from '../header/HeaderContainer';
import FormProfile from './FormProfile';

import './profile.css';

const Profile = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="profile d-flex-center">
                <FormProfile />
            </div>
        </div>
    );
};

export default connect(null, null)(Profile);