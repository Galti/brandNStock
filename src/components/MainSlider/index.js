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
};

class MainSlider extends React.Component {
    render() {
        return (
            <Wrapper>
                <Slider {...settings}>
                    {
                        mainSlider.map((imgLink) => (
                            <img src={imgLink} />
                        ))
                    }
                </Slider>
            </Wrapper>
        );
    }
}

export default MainSlider;