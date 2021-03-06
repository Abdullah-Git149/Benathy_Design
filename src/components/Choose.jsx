import React from 'react';
import { FaAccusoft, FaAngleRight, FaDochub, FaRegImages } from 'react-icons/fa';

const Choose = () => {
    
    return (

        <div className="choose">
            <div className="container">

                <div className="choose__data">

                    <div  className="choose_left " data-aos="fade-right"   data-aos-duration="1500">
                        <h3>Why Choose Bethany for your company website?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos.
                        Autem tempore quibusdam vel
                        necessitatibus optio ad corporis.</p>
                        <div className="choose__left__btn">
                            <a href="" className="btn__choose">Learn More <FaAngleRight className="icon__choose" /></a>
                        </div>
                    </div>
                    <div className="choose__right " >
                        <div className="choose__right__flex">
                            <div className="choose__right__data"  data-aos="zoom-in">
                                <h2><FaDochub className="choose__icon" /></h2>
                                <h4>Corporis voluptates sit</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>

                            </div>

                            <div className="choose__right__data" data-aos="zoom-in">
                                <h2><FaAccusoft className="choose__icon" /></h2>
                                <h4>Ullamco laboris ladore pan</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>

                            </div>

                            <div className="choose__right__data " data-aos="zoom-in">
                                <h2><FaRegImages className="choose__icon" /></h2>
                                <h4>Labore consequatus</h4>
                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Choose;