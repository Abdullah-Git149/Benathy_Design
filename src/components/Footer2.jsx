import React from 'react';
import { FaFacebookF, FaTwitter,FaInstagram,FaSkype, FaLinkedinIn } from "react-icons/fa"
const Footer2 = () => {
    return (
        <div className="footer2">
            <div className="container">
                <div className="footerflex">
                    <div className="footer2__left">
                        <div className="copyright">
                            © Copyright <strong><span>Bethany.</span> </strong>  All Rights Reserved <br />
                        </div>
                        <div className="credit">
                            Designed by <span>Abdullah Amjad</span>
                        </div>


                    </div>
                    <div className="footer2__right">
                        <div className="footer2__right__flex">
                            <ul>
                                <li><FaFacebookF/> </li>
                                <li><FaTwitter/> </li>
                                <li><FaInstagram/> </li>
                                <li><FaSkype/> </li>
                                <li><FaLinkedinIn/> </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer2;