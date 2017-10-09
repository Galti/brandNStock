import React from 'react';
import PropType from 'prop-types';
import MainSlider from '../../components/MainSlider';
import LayerRecommended from '../../components/LayerRecommended';
import BrandsSlider from '../../components/BrandsSlider';
import Quote from '../../components/Quote';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <LayerRecommended
                    contacts={this.props.contacts}
                />
                <Quote/>
                <BrandsSlider/>
            </div>
        )
    }
}

HomePage.propTypes = {
    contacts: PropType.object,
};

export default HomePage;
