import React from 'react';

import Header from '../components/Header';
import FormProfile from '../components/FormProfile';

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

export default Profile;