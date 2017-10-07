import React from 'react';
import MainSlider from '../../components/MainSlider';
import LayerRecommended from '../../components/LayerRecommended';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div style={{width: '100%', marginBottom: '30px', marginTop: '5px'}}>
                    <MainSlider/>
                </div>
                <LayerRecommended/>

            </div>
        )
    }
}

export default HomePage;
