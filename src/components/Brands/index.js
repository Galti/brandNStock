import React from 'react';
import PropTypes from 'prop-types';
import Brand from '../../models/Brand';
import { Grid, Col, Row, Glyphicon } from 'react-bootstrap';
import {
    ImageSmall,
    InfoOverlay,
    PaginationContainer,
    BrandName,
    Characteristics,
    AgePriceSpan,
    MinorInfoWrapper,
} from './StyledComponents';
import Pagination from './Pagination';
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

    scrollToBrand = () => {
        if (this.searchedNode) {
            this.searchedNode.scrollIntoView();
        }
    };

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

    handleItemMouseEnter = (name) => {
        const newBrands = this.state.brands.map((brand) =>
            brand.name === name ? Object.assign({}, brand, { isHovered: true }) : Object.assign({}, brand, { isHovered: false }));
        this.setState({
            brands: newBrands
        })
    };

    handleItemMouseLeave = (name) => {
        const newBrands = this.state.brands.map((brand) =>
            brand.name === name ? Object.assign({}, brand, { isHovered: false }) : brand);
        this.setState({
            brands: newBrands
        })
    };

    searchedNode;

    render() {
        return (
            <div>
                <PageHeader
                    text='Brands'
                    bgImage={bgImage}
                >
                </PageHeader>
                <Grid style={{ padding: 0 }}>
                    <Row>
                        {
                            this.state.brands.map((brand, index) => {
                                if ([1, 2, 7].some((num) => index === num)) {
                                    return (
                                        <Col xs={12} sm={6} md={8} style={{ marginTop: '20px' }}
                                            key={`colBrands${index.toString()}`}
                                        >
                                            <div
                                                onClick={() => {
                                                    if (brand.isHovered) {
                                                        this.handleItemMouseLeave(brand.name)
                                                    } else {
                                                        this.handleItemMouseEnter(brand.name)
                                                    }
                                                }}
                                                ref={(node) => {
                                                    if (index.toString() === this.props.searchedBrand) {
                                                        if (node) {
                                                            this.searchedNode = node;
                                                        }
                                                    }
                                                }}
                                                style={{ cursor: 'pointer' }}
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
                                                                                style={{ display: 'inline' }}
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
                                                        <div>{brand.typology.trim() ? `#${brand.typology}` : ''}</div>
                                                        <div>{brand.gender.trim() ? `#${brand.gender}` : ''}</div>
                                                    </Characteristics>
                                                </InfoOverlay>
                                                <ImageSmall
                                                    src={brand.image}
                                                    onLoad={() => {
                                                        if (index.toString() === this.props.searchedBrand) {
                                                            this.scrollToBrand();
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </Col>
                                    )
                                } else {
                                    return (
                                        <Col xs={12} sm={6} md={4} style={{ marginTop: '20px' }}
                                            key={`colBrands${index.toString()}`}
                                        >
                                            <div
                                                onClick={() => {
                                                    if (brand.isHovered) {
                                                        this.handleItemMouseLeave(brand.name)
                                                    } else {
                                                        this.handleItemMouseEnter(brand.name)
                                                    }
                                                }}
                                                ref={(node) => {
                                                    if (index.toString() === this.props.searchedBrand) {
                                                        if (node) {
                                                            this.searchedNode = node;
                                                        }
                                                    }
                                                }}
                                                style={{ cursor: 'pointer' }}
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
                                                                                style={{ display: 'inline' }}
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
                                                        <div>{brand.typology.trim() ? `#${brand.typology}` : ''}</div>
                                                        <div>{brand.gender.trim() ? `#${brand.gender}` : ''}</div>
                                                    </Characteristics>
                                                </InfoOverlay>
                                                <ImageSmall
                                                    src={brand.image}
                                                    onLoad={() => {
                                                        if (index.toString() === this.props.searchedBrand) {
                                                            this.scrollToBrand();
                                                        }
                                                    }}
                                                    style={{ alignSelf: 'center', display: 'flex' }}
                                                />
                                            </div>
                                        </Col>
                                    )
                                }
                            })
                        }
                    </Row>
                    <PaginationContainer>
                        <Pagination
                            itemsCount={this.props.pagesCount}
                            activePage={this.props.paginationActivePage}
                            onSelect={(eventKey) => this.props.onPaginationRouteChange(eventKey)}
                        />
                    </PaginationContainer>
                </Grid>

            </div>
        )
    }
}

Brands.propTypes = {
    brands: PropTypes.arrayOf(Brand),
    pagesCount: PropTypes.number,
    paginationActivePage: PropTypes.number,
    onPaginationRouteChange: PropTypes.func,
    searchedBrand: PropTypes.number,
};

export default Brands;
