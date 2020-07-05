import React, { useContext } from 'react';

import Logo from './Logo';
import AuthContext from '../../context/AuthContext';

const Header = () => {
    const auth = useContext(AuthContext);

    return (
        <div className="wrapper-header">
            <header>
                <Logo />
                <nav className="nav">
                    <a className="link map" href="/map">Карта</a>
                    <a className="link profile-link" href="/profile">Профиль</a>
                    <a className="link logout" onClick={auth.logOut} href="/login">Выйти</a>
                </nav>
            </header>
        </div>
    )
};

export default Header;