import React from 'react';
import { FaDochub, FaFreeCodeCamp, FaTachometerAlt, FaVolleyballBall } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="service__row">
                    <div className="service__width30">
                        <div className="service__left">
                            <h2>SERVICES</h2>
                            <div className="service__line"></div>
                            <p>Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                    </div>
                    <div className="service__width90">
                        <div className="service__right">
                            <div className="service__box">
                                <h2><FaVolleyballBall className="service_icon" /></h2>
                                <h2 className="service__h2">Lorem Ipsum</h2>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>

                            <div className="service__box">
                                <h2><FaDochub className="service_icon" /></h2>
                                <h2 className="service__h2">Lorem Ipsum</h2>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>

                            <div className="service__box">
                                <h2><FaTachometerAlt className="service_icon" /></h2>
                                <h2 className="service__h2">Lorem Ipsum</h2>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>

                            <div className="service__box">
                                <h2><FaFreeCodeCamp className="service_icon" /></h2>
                                <h2 className="service__h2">Lorem Ipsum</h2>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;