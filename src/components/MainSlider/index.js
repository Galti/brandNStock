import React from 'react';
import Slider from 'react-slick';
import {
    Wrapper
} from "./StyedComponents";
import mainSlider from '../../resources/images/mainSlider';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
};

class MainSlider extends React.Component {
    render() {
        return (
            <Wrapper>
                <Slider {...settings}>
                    {
                        mainSlider.map((imgLink, index)=> (
                            <div key={index.toString()}>
                                <img
                                    src={imgLink}
                                    style={{ width: '100%'}}
                                    alt=""
                                />
                            </div>
                        ))
                    }
                </Slider>
            </Wrapper>
        );
    }
}

export default MainSlider;