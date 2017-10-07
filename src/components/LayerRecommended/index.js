import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../models/Product';
import CardRecommended from '../CardRecommended';
import TitleLayer from '../../components/TitleLayer';
import {
    Wrapper,
    Content,
    Col,
} from './StyledComponents';

class LayerRecommended extends React.Component {
    render() {
        return (
            <Wrapper>
                <TitleLayer text='Recommended Products'/>
                <Content>
                    <Col xs={12} sm={6} md={4}>
                        <CardRecommended/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <CardRecommended/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <CardRecommended/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <CardRecommended/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <CardRecommended/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <CardRecommended/>
                    </Col>
                </Content>
            </Wrapper>
        )
    }
}

LayerRecommended.propTypes = {
    products: PropTypes.arrayOf(Product),
};

export default LayerRecommended;