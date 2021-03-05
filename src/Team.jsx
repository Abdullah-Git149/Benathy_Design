import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa';

const Team = () => {
    return (
        <div className="team">
            <div className="container">
                <div className="team__row">
                    <div className="team__width30">
                        <div className="team__left">
                            <h2>TEAM</h2>
                            <div className="team__line"></div>
                            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
                        </div>
                    </div>

                    <div className="team__width70">
                        <div className="team__box__flex">
                            <div className="team__box">
                                <div className="team__img">
                                    <img src="https://bootstrapmade.com/demo/templates/Bethany/assets/img/team/team-1.jpg" alt="" />
                                </div>
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <div className="span__line"></div>
                                <span>Explicabo voluptatem mollitia et repellat qui dolorum quasi</span>
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li> <FaTwitter /> </li>
                                    <li><FaInstagram /> </li>
                                    <li><FaLinkedin /> </li>
                                </ul>
                            </div>

                            <div className="team__box">
                                <div className="team__img">
                                    <img src="https://bootstrapmade.com/demo/templates/Bethany/assets/img/team/team-4.jpg" alt="" />
                                </div>
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <div className="span__line"></div>
                                <span>Explicabo voluptatem mollitia et repellat qui dolorum quasi</span>
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li> <FaTwitter /> </li>
                                    <li><FaInstagram /> </li>
                                    <li><FaLinkedin /> </li>
                                </ul>
                            </div>

                            <div className="team__box">
                                <div className="team__img">
                                    <img src="https://bootstrapmade.com/demo/templates/Bethany/assets/img/team/team-2.jpg" alt="" />
                                </div>
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <div className="span__line"></div>
                                <span>Explicabo voluptatem mollitia et repellat qui dolorum quasi</span>
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li> <FaTwitter /> </li>
                                    <li><FaInstagram /> </li>
                                    <li><FaLinkedin /> </li>
                                </ul>
                            </div>

                            <div className="team__box">
                                <div className="team__img">
                                    <img src="https://bootstrapmade.com/demo/templates/Bethany/assets/img/team/team-3.jpg" alt="" />
                                </div>
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <div className="span__line"></div>
                                <span>Explicabo voluptatem mollitia et repellat qui dolorum quasi</span>
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li> <FaTwitter /> </li>
                                    <li><FaInstagram /> </li>
                                    <li><FaLinkedin /> </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Team;