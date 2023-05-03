import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import user from '../../images/user.jpg';
const Header = () => {
    return (
        <nav className="header">
            <h2>Knowledge Cafe</h2>
            <div className="">
                <img src={user}  width="60" height="60" alt="" />
            </div>

        </nav>
    );
};

export default Header;