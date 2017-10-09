import React from 'react';
import PropTypes from 'prop-types';
import {Title, HorizontalLine, Wrapper} from './StyledComponents.'


class TitleLayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Wrapper>
                <Title>{this.props.text}</Title>
                <HorizontalLine/>
            </Wrapper>
        );
    }
}


TitleLayer.propTypes = {
    text: PropTypes.string,
};

export default TitleLayer;