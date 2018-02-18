import React from 'react';
import PropTypes from 'prop-types';
import Card3Column from '../Card3Column';
import Card2Column from '../Card2Column';
import TitleLayer from '../../components/TitleLayer';
import {
    Wrapper,
    Content,
    Col,
} from './StyledComponents';
import { Row } from 'react-bootstrap';
import accessories from '../../resources/images/recommended/card3Columns/accessories.jpg';
import children from '../../resources/images/recommended/card3Columns/children.jpg';
import secondHand from '../../resources/images/recommended/card3Columns/second-hand.jpg';
import brandStock from '../../resources/images/recommended/card2Columns/brand-stock.jpg';
import womenStock from '../../resources/images/recommended/card2Columns/women-stock.jpg';

const card2Columns = [
    {
        image: brandStock,
        category: 'Брендовый сток',
        price: 'до 17 €/ед.',
        description: '',
    },
    {
        image: womenStock,
        category: 'Женский сток',
        price: 'до 10 €/ед.',
        description: '',
    },

];

const card3Columns = [
    {
        image: secondHand,
        category: 'Брендовый секонд хенд',
        price: 'до 3 €/кг.',
        description: '',
    },
    {
        image: children,
        category: 'Детский сток',
        price: 'до 7 €/ед.',
        description: '',
    },
    {
        image: accessories,
        category: 'Аксессуары',
        price: 'до 6 €/ед.',
        description: '',
    },

];


class LayerRecommended extends React.Component {
    render() {
        return (
            <Wrapper>
                <TitleLayer text='Актуальные предложения' />
                <Content>
                    <Row>
                        {
                            card2Columns.map((item, index) => (
                                <Col xs={12} sm={6} md={6} key={`${index.toString()}card2Columns`}>
                                    <Card2Column
                                        image={item.image}
                                        category={item.category}
                                        price={item.price}
                                        description={item.description}
                                        email={this.props.contacts.email}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                    <Row>
                        {
                            card3Columns.map((item, index) => (
                                <Col xs={12} sm={6} md={4} key={`${index.toString()}card3Columns`}>
                                    <Card3Column
                                        image={item.image}
                                        category={item.category}
                                        price={item.price}
                                        description={item.description}
                                        email={this.props.contacts.email}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </Content>
            </Wrapper>
        )
    }
}

LayerRecommended.propTypes = {
    contacts: PropTypes.object,
};

export default LayerRecommended;