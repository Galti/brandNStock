import React from 'react';
import MainSlider from '../../components/MainSlider';
import LayerRecommended from '../../components/LayerRecommended';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <MainSlider/>
                <LayerRecommended />

            </div>
        )
    }
}

export default HomePage;