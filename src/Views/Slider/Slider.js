import React, { useState } from 'react';
import Slider from 'react-slick';
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { Container } from 'react-bootstrap';


export default function BannerSlider() {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider
                {...settings}
                className='mb-5'
            >
                <div>
                    <img src="Images/as.jpg" alt="Banner" />
                </div>
                <div>
                    <img src="Images/as-2.jpg" alt="Banner" />
                </div>
                <div>
                    <img src="Images/as-3.jpg" alt="Banner" />
                </div>

            </Slider>

            <Container className='mb-5'>
                <div className="parralax">
                    <MouseParallax>
                        <div className="img">
                            <img src="Images/1.svg" alt="" />
                        </div>
                    </MouseParallax>
                    <MouseParallax>
                        <div className="img">
                            <img src="Images/2.svg" alt="" />
                        </div>
                    </MouseParallax>
                    <MouseParallax>
                        <div className="img">
                            <img src="Images/3.svg" alt="" />
                        </div>
                    </MouseParallax>
                    <MouseParallax>
                        <div className="img">
                            <img src="Images/4.svg" alt="" />
                        </div>
                    </MouseParallax>
                    <MouseParallax>
                        <div className="img">
                            <img src="Images/5.svg" alt="" />
                        </div>
                    </MouseParallax>


                </div>
            </Container>
        </div>
    );
}
