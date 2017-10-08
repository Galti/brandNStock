import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../models/Product';
import image from '../../resources/images/home-img-05-370x250.jpg';

import {
    Wrapper,
    Image,
    Price,
    Link,
    Quantity,
} from "./StyedComponents";

class CardRecommended extends React.Component {
    render() {
        return (
            <Wrapper>
                <Image src={image}/>
                <Link to='/'>AVA Nob Hill</Link>
                <Price>$1888</Price>
                <Quantity>Minimum quantity 1000piece</Quantity>
                <p>AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design
                    that extends beyond your walls and throughout the entire community.</p>
            </Wrapper>
        )
    }
}

CardRecommended.propTypes = {
    products: PropTypes.objectOf(Product),
};

export default CardRecommended;