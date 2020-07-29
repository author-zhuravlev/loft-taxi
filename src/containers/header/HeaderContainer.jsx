import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HeaderComponent } from '../../components/header/Header';
import { logOut } from '../login/store/actions';

const Header = ({ logOut }) => {
    return (
        <HeaderComponent logOut={logOut} />
    );
};

Header.protoTypes = {
    logOut: PropTypes.func
};

export default connect(null, { logOut })(Header);