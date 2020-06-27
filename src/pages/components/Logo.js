import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            <img
                src="/logo-icon.png"
                alt="Logo"
                className="logo"
            />
            <div className="logo-img">
                <div className="span">
                    <span className="yellow">Loft</span>
                    <span className="black">Taxi</span>
                </div>
            </div>
        </div>
    )
};

export default Logo;