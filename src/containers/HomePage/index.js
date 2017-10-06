import React from 'react';
import MainSlider from '../../components/MainSlider';
import TitleLayer from '../../components/TitleLayer';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <MainSlider/>
                <TitleLayer text='Recommended Products'/>
            </div>
        )
    }
}

export default HomePage;