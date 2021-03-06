import React from 'react';
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact" id="con">
            <div className="container">
                <div className="contact__row">
                    <div className="contact30">
                        <div className="contact__left" data-aos="fade-right">
                            <h2>CONTACT</h2>
                            <div className="contact__line"></div>
                            <p>Magnam dolores commodi suscipit.
                            Necessitatibus eius consequatur ex aliquid
                            fuga eum quidem. Sit sint consectetur velit
                            . Quisquam quos quisquam cupiditate. Et nemo
                            qui impedit suscipit alias ea. Quia fugiat
                            sit in iste officiis commodi quidem hic quas.
                            </p>
                        </div>

                    </div>
                    <div className="contact70">
                        <div className="contact__right" data-aos="fade-up">
                            <div className="contact__map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3807536283653!2d67.00172751508228!3d24.850842151762965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e03e02fabc1%3A0x96c129db3ee25a57!2sSindh%20Madressa-tul-Islam%20University%2C%20City%20Campus%2C%20Karachi!5e0!3m2!1sen!2s!4v1614788656820!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
                            </div>

                            <div className="location">
                                <FaMapMarkerAlt className="contact__icon" />
                                <div className="location__child">
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                            </div>
                            <div className="contact__flex"> 
                                <div className="email">
                                    <FaMailBulk className="contact__icon" />
                                    <div className="location__child">
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                </div>

                                <div className="calll">
                                    <FaPhoneAlt className="contact__icon" />
                                    <div className="location__child">
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;