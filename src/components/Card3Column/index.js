import React from 'react';
import PropTypes from 'prop-types';
import MdDrafts from 'react-icons/lib/md/drafts';
import Button from 'material-ui/Button';


import {
    Wrapper,
    Image,
    Price,
    Feature,
    // Quantity,
    Description,
} from "./StyedComponents";

const Card3Column = (props) => (
    <Wrapper>
        <Image src={props.image}/>
        <div> {/* this div combine below components */}
            {
                props.email ?
                    (
                        <a href={`mailto:${props.email}?Subject=${props.category}`} target="_top">
                            <Button style={{right: '0', position: 'absolute', marginTop: '10px'}}>
                                <MdDrafts
                                    style={{height: '40px', width: '40px'}}
                                />
                            </Button>
                        </a>
                    )
                    :
                    ''
            }
            <Feature>{props.category}</Feature>
            <Price>{props.price}</Price>
            {/*<Quantity>Minimum quantity 1000piece</Quantity>*/}
            <Description>{props.description}</Description>
        </div>
    </Wrapper>
);

Card3Column.propTypes = {
    image: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
};

export default Card3Column;