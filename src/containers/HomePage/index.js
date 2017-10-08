import React from 'react';
import MainSlider from '../../components/MainSlider';
import LayerRecommended from '../../components/LayerRecommended';
import BrandsSlider from '../../components/BrandsSlider';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <LayerRecommended/>
                <BrandsSlider/>
            </div>
        )
    }
}

export default HomePage;
