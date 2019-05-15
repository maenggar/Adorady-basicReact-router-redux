import React from 'react';

const NavBar = () => {
    return (
        <div className="nav-wrapper blue darken-2">
            <div className="container">
                <a className="brand-logo">React-Router</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;