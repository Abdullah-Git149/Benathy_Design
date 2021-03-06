import React from 'react';
import { FaAngleRight } from "react-icons/fa"
const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about__left" data-aos="fade-right" >
                            <h2 >EUM IPSAM LABORUM DELENITI VELITENA</h2>
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__right" data-aos="fade-left" >
                            <p>Ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit
                            anim id est laborum</p>
                            <ul className="right__ul">
                                <div className="cen"><FaAngleRight className="fa-color" /> <li> Ullamco laboris nisi ut aliquip ex ea commodo consequa </li></div>
                                <div className="cen"><FaAngleRight className="fa-color" />   <li> Duis aute irure dolor in reprehenderit in voluptate velit</li></div>
                                <div className="cen"> <FaAngleRight className="fa-color" />   <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </li></div>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                                   aliqua.</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;