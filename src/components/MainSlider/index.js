import React from 'react';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    height: 300,
    slidesToShow: 1,
    slidesToScroll: 1
};

class MainSlider extends React.Component {
    render () {
        return (
            <Slider {...settings}>
                <div style={{ height: '100px' }}><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
        );
    }
}

export default MainSlider;