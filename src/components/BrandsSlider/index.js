import React from 'react';
import Slider from 'react-slick';
import {
    Wrapper,
    SliderItem,
    ArrowWrapper,
    Image,
    ArrowPrev,
    ArrowNext,
} from "./StyledComponents";
import TitleLayer from '../TitleLayer';
import popularBrands from '../../resources/images/popularBrands';
import arrow from '../../resources/images/arrow-right.svg';
import theme from '../../ThemeForStyledComponents';
console.log(popularBrands);

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 3000,
};

class BrandsSlider extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         settings: {
    //             infinite: true,
    //             speed: 500,
    //             slidesToShow: 7,
    //             slidesToScroll: 1,
    //             arrows: true,
    //             lazyLoad: false,
    //             autoplay: true,
    //             autoplaySpeed: 3000,
    //         }
    //     }
    // }

    // componentDidMount() {
    //     window.addEventListener('resize', this.checkSliderToShowCount);
    // }
    //
    // checkSliderToShowCount = () => {
    //     if (window.innerWidth <= Number(theme.BootstrapSizes.md.replace( /^\D+/g, '').match(/\d/g).join(""))) {
    //         if (this.state.settings.slidesToShow !== 5) {
    //             this.setState({
    //                 settings: {
    //                     infinite: true,
    //                     speed: 500,
    //                     slidesToShow: 5,
    //                     slidesToScroll: 1,
    //                     arrows: true,
    //                     lazyLoad: false,
    //                     autoplay: true,
    //                     autoplaySpeed: 3000,
    //                 }
    //             })
    //         }
    //     } else if ()
    // };

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
                    responsive={[
                        { breakpoint: 480, settings: { slidesToShow: 2 } },
                        { breakpoint: 768, settings: { slidesToShow: 3 } },
                        { breakpoint: 1024, settings: { slidesToShow: 5 } },
                        { breakpoint: 1920, settings: { slidesToShow: 7 } } ]}
                >
                    {
                        popularBrands.map((link, index) => (
                            <SliderItem key={`${index.toString()}SliderItems`}>
                                <Image
                                    src={link}
                                />
                            </SliderItem>
                        ))
                    }
                </Slider>
            </Wrapper>
        )
    }
}

export default BrandsSlider;
