import React from 'react';
import PropTypes from 'prop-types';
import Brand from '../../models/Brand';
import {Grid, Col, Row, Pagination, Glyphicon} from 'react-bootstrap';
import {
    ImageSmall,
    InfoOverlay,
    PaginationContainer,
    BrandName,
    Characteristics,
    AgePriceSpan,
} from './StyledComponents';
import PageHeader from '../PageHeader';

class Brands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            brands: this.props.brands.map((brand) => {
                return {
                    isHovered: false,
                    ...brand
                }
            })
        }

    }

    handleSelect = (eventKey) => {
        this.setState({
            activePage: eventKey
        });
    };

    handleItemMouseEnter = (name) => {
        const newBrands = this.state.brands.map((brand) =>
            brand.name === name ? Object.assign({}, brand, {isHovered: true}) : Object.assign({}, brand, {isHovered: false}));
        this.setState({
            brands: newBrands
        })
    };

    handleItemMouseLeave = (name) => {
        const newBrands = this.state.brands.map((brand) =>
            brand.name === name ? Object.assign({}, brand, {isHovered: false}) : brand);
        this.setState({
            brands: newBrands
        })
    };

    render() {
        console.log(this.state.brands);
        return (
            <div>
                <PageHeader
                    text='Brands'
                    bgImage='http://i.huffpost.com/gen/1605280/images/o-CLOTHING0205-facebook.jpg'
                >
                </PageHeader>
                <Grid style={{padding: 0}}>
                    {
                        this.state.brands.map((brand, index) => {
                            if ([1, 2, 7].some((num) => index === num)) {
                                return (
                                    <Col xs={12} sm={6} md={8} style={{marginTop: '20px'}} key={`colBrands${index.toString()}`}>
                                        <div
                                            onMouseEnter={() => this.handleItemMouseEnter(brand.name)}
                                            onMouseLeave={() => this.handleItemMouseLeave(brand.name)}
                                        >
                                            <InfoOverlay
                                                isHovered={brand.isHovered}
                                            >
                                                <BrandName>
                                                    {brand.name}
                                                </BrandName>
                                                <Row>
                                                    <Col md={6}>
                                                        <AgePriceSpan>
                                                            <Glyphicon
                                                                glyph="glyphicon glyphicon-user"
                                                            />
                                                            {brand.age}
                                                        </AgePriceSpan>
                                                    </Col>
                                                    <Col md={6}>
                                                        <AgePriceSpan>
                                                            <Glyphicon
                                                                glyph="glyphicon glyphicon-eur"
                                                                style={{display: 'inline'}}
                                                            />
                                                            {brand.price}
                                                        </AgePriceSpan>
                                                    </Col>
                                                </Row>
                                                <Characteristics>
                                                    #{brand.typology} #{brand.gender}
                                                </Characteristics>
                                            </InfoOverlay>
                                            <ImageSmall src={brand.image}/>
                                        </div>
                                    </Col>
                                )
                            } else {
                                return (
                                    <Col xs={12} sm={6} md={4} style={{marginTop: '20px'}}>
                                        <div
                                            onMouseEnter={() => this.handleItemMouseEnter(brand.name)}
                                            onMouseLeave={() => this.handleItemMouseLeave(brand.name)}
                                        >
                                            <InfoOverlay
                                                isHovered={brand.isHovered}
                                            >
                                                <BrandName>
                                                    {brand.name}
                                                </BrandName>
                                                <Row>
                                                    <Col md={6}>
                                                        <AgePriceSpan>
                                                            <Glyphicon
                                                                glyph="glyphicon glyphicon-user"
                                                            />
                                                            {brand.age}
                                                        </AgePriceSpan>
                                                    </Col>
                                                    <Col md={6}>
                                                        <AgePriceSpan>
                                                            <Glyphicon
                                                                glyph="glyphicon glyphicon-eur"
                                                                style={{display: 'inline'}}
                                                            />
                                                            {brand.price}
                                                        </AgePriceSpan>
                                                    </Col>
                                                </Row>
                                                <Characteristics>
                                                    #{brand.typology} #{brand.gender}
                                                </Characteristics>
                                            </InfoOverlay>
                                            <ImageSmall src={brand.image}/>
                                        </div>
                                    </Col>
                                )
                            }
                        })
                    }
                </Grid>
                <PaginationContainer>
                    <Pagination
                        bsSize="medium"
                        items={5}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect}/>
                </PaginationContainer>
            </div>
        )
    }
}

Brands.propTypes = {
    brands: PropTypes.arrayOf(Brand)
};

export default Brands;
