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
    MinorInfoWrapper,
} from './StyledComponents';
import PageHeader from '../PageHeader';
import bgImage from '../../resources/images/brands-parallax-bgImage.jpg'

class Brands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: this.props.brands.map((brand) => {
                return {
                    isHovered: false,
                    ...brand
                }
            })
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            brands: nextProps.brands.map((brand) => {
                return {
                    isHovered: false,
                    ...brand
                }
            })
        })
    }

    // handleSelect = (eventKey) => {
    //     this.setState({
    //         activePage: eventKey
    //     });
    // };

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
                    bgImage={bgImage}
                >
                </PageHeader>
                <Grid style={{padding: 0}}>
                    {
                        this.state.brands.map((brand, index) => {
                            if ([1, 2, 7].some((num) => index === num)) {
                                return (
                                    <Col xs={12} sm={6} md={8} style={{marginTop: '20px'}}
                                         key={`colBrands${index.toString()}`}>
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
                                                <MinorInfoWrapper>
                                                    <AgePriceSpan>
                                                        {
                                                            brand.age ?
                                                                (
                                                                    <span>
                                                                    <Glyphicon
                                                                        glyph="glyphicon glyphicon-user"
                                                                    />
                                                                        {brand.age}
                                                                    </span>
                                                                )
                                                                :
                                                                ''
                                                        }
                                                    </AgePriceSpan>
                                                    <AgePriceSpan>
                                                        {
                                                            brand.price ?
                                                                (
                                                                    <span>
                                                                    <Glyphicon
                                                                        glyph="glyphicon glyphicon-eur"
                                                                        style={{display: 'inline'}}
                                                                    />
                                                                        {brand.price}
                                                                    </span>
                                                                )
                                                                :
                                                                ''
                                                        }
                                                    </AgePriceSpan>
                                                </MinorInfoWrapper>
                                                <Characteristics>
                                                    <div>{brand.typology ? `#${brand.typology}` : ''}</div>
                                                    <div>{brand.gender ? `#${brand.gender}` : ''}</div>
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
                                                <MinorInfoWrapper>
                                                    <AgePriceSpan>
                                                        {
                                                            brand.age ?
                                                                (
                                                                    <span>
                                                                    <Glyphicon
                                                                        glyph="glyphicon glyphicon-user"
                                                                    />
                                                                        {brand.age}
                                                                    </span>
                                                                )
                                                                :
                                                                ''
                                                        }
                                                    </AgePriceSpan>
                                                    <AgePriceSpan>
                                                        {
                                                            brand.price ?
                                                                (
                                                                    <span>
                                                                    <Glyphicon
                                                                        glyph="glyphicon glyphicon-eur"
                                                                        style={{display: 'inline'}}
                                                                    />
                                                                        {brand.price}
                                                                    </span>
                                                                )
                                                                :
                                                                ''
                                                        }
                                                    </AgePriceSpan>
                                                </MinorInfoWrapper>
                                                <Characteristics>
                                                    <div>{brand.typology ? `#${brand.typology}` : ''}</div>
                                                    <div>{brand.gender ? `#${brand.gender}` : ''}</div>
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
                        items={this.props.pagesCount}
                        activePage={this.props.paginationActivePage}
                        onSelect={(eventKey) => this.props.onPaginationRouteChange(eventKey)}/>
                </PaginationContainer>
            </div>
        )
    }
}

Brands.propTypes = {
    brands: PropTypes.arrayOf(Brand),
    pagesCount: PropTypes.number,
    paginationActivePage: PropTypes.number,
    onPaginationRouteChange: PropTypes.func,
};

export default Brands;
