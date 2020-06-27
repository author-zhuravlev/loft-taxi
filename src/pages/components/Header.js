import React from 'react';

import Logo from './Logo';

const Header = () => {
    return (
        <div className="wrapper-header">
            <header>
                <Logo />
                <nav className="nav">
                    <a className="link map" href="/map">Карта</a>
                    <a className="link profile-link" href="/profile">Профиль</a>
                    <a className="link logout" href="/">Выйти</a>
                </nav>
            </header>
        </div>
    )
};

export default Header;