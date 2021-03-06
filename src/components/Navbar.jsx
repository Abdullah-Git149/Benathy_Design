import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__text">
                    <div className="navbar__left">
                        <h1>Bethany</h1>
                    </div>
                    <div className="navbar__right">
                        <ul>
                            <li><a className="firstchild" href="">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Service</a></li>
                            <li><a href="#teamm">Team</a></li>
                            <li><a href="#con">Contact</a></li>

                        </ul>
                        <div className="navbar__btn">
                          <a href="" className="navbar__btn__text">Get Started</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;