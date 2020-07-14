import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from './Logo';
import { logOut } from '../../redux/actions'

const Header = ({ logOut }) => {
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

Header.protoTypes = {
    logOut: PropTypes.func
}

export default connect(
    null,
    { logOut }
)(Header);