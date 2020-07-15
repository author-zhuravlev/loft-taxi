import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../logo/Logo';

const HeaderComponent = ({ logOut }) => {
    return (
        <div className="wrapper-header">
            <header>
                <Logo />
                <nav className="nav">
                    <Link className="link map" to="/map">Карта</Link>
                    <Link className="link profile-link" to="/profile">Профиль</Link>
                    <Link className="link logout" onClick={logOut} to="/login">Выйти</Link>
                </nav>
            </header>
        </div>
    );
};

HeaderComponent.protoTypes = {
    logOut: PropTypes.func
};

export default HeaderComponent;