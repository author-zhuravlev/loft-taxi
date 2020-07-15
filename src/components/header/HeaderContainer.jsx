import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderComponent from './Header';
import { logOut } from '../../store/header/actions';

const Header = ({ logOut }) => {
    return (
        <HeaderComponent logOut={logOut} />
    );
};

Header.protoTypes = {
    logOut: PropTypes.func
};

export default connect(
    null,
    { logOut }
)(Header);