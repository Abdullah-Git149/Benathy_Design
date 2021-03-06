import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header">

            <Navbar />
            <div className="header__text" data-aos="zoom-in">
                <h1>Your New Online Presence with Bethany</h1>
                <h2>WE ARE TEAM OF TALENTED DESIGNERS MAKING WEBSITES WITH BOOTSTRAP</h2>
                <div className="header__btn">
                    <a href="" className="header__btn__text">Get Started</a>
                </div>
            </div>

        </div>
    );
};

export default Header;