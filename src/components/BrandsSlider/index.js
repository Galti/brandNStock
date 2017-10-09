import React from 'react';
import Slider from 'react-slick';
import {
    Wrapper,
    SliderItem,
    ArrowWrapper,
    Image,
    ArrowPrev,
    ArrowNext,
} from "./StyedComponents";
import TitleLayer from '../TitleLayer';


import arrow from '../../resources/images/arrow-right.svg';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true
};

class BrandsSlider extends React.Component {
    render() {
        return (
            <Wrapper>
                <TitleLayer
                    text={'Популярные Бренды'}
                />
                <Slider
                    {...settings}
                    nextArrow={<ArrowWrapper><ArrowNext src={arrow} /> </ArrowWrapper> }
                    prevArrow={<ArrowWrapper><ArrowPrev src={arrow} /></ArrowWrapper>}
                >
                    <SliderItem>
                        <Image
                            src='https://hdlogo.files.wordpress.com/2016/08/manchester-united-fc-logo.png'
                        />
                    </SliderItem>
                    <SliderItem>
                        <Image
                            src='http://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/barcelona_grande.png'
                        />
                    </SliderItem>
                    <SliderItem>
                        <Image
                            src='https://maxcdn.icons8.com/Share/icon/win10/Logos//real_madrid1600.png'
                        />
                    </SliderItem>
                    <SliderItem>
                        <Image
                            src='https://i.pinimg.com/originals/11/ec/be/11ecbe1e8bb2a878c687e3d9e41f16b5.png'
                        />
                    </SliderItem>
                    <SliderItem>
                        <Image
                            src='https://vignette.wikia.nocookie.net/logopedia/images/6/6d/AC-Milan-old-logo.png/revision/latest?cb=20120212143246'
                        />
                    </SliderItem>
                    <SliderItem>
                        <Image
                            src='https://4.bp.blogspot.com/-W7mZWnb6Ox0/WQadPtX5RPI/AAAAAAAAMJQ/6nN-6c4hZmMxvsyfbll1HAk1Gdox77lnwCEw/s1600/liverpool-125-anniversary-emblem.png'
                        />
                    </SliderItem>
                </Slider>
            </Wrapper>
        )
    }
}

export default BrandsSlider;
