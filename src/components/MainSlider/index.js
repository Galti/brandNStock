import React from 'react';
import Slider from 'react-slick';
import {
    Wrapper
} from "./StyedComponents";

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
                    <img
                        src='https://www.artsfon.com/pic/201602/1920x1080/artsfon.com-80683.jpg'
                        style={{
                            width: '100%',
                        }}
                    />
                    <img
                        src='https://wallpaperscraft.com/image/me_city_orlando_bloom_boy_girl_bench_clothing_collection_48623_1920x1080.jpg'
                        style={{
                            width: '100%',
                        }}
                    />
                    <img
                        src='http://media.gqindia.com/wp-content/uploads/2016/10/GQ-India-shahid-kapoor-skult-brand.jpg'
                        style={{
                            width: '100%',
                        }}
                    />
                    <img
                        src='http://media.gqindia.com/wp-content/uploads/2016/10/GQ-India-shahid-kapoor-skult-brand.jpg'
                        style={{
                            width: '100%',
                        }}
                    />
                    <img
                        src='http://media.gqindia.com/wp-content/uploads/2016/10/GQ-India-shahid-kapoor-skult-brand.jpg'
                        style={{
                            width: '100%',
                        }}
                    />
                    <img
                        src='http://media.gqindia.com/wp-content/uploads/2016/10/GQ-India-shahid-kapoor-skult-brand.jpg'
                        style={{
                            width: '100%',
                        }}
                    />
                </Slider>
            </Wrapper>
        );
    }
}

export default MainSlider;