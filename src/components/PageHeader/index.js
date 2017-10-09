import React from 'react';
import PropTypes from 'prop-types';
import {Parallax} from 'react-parallax';

import {
    Title,
    Wrapper
} from './StyledComponents';

const PageHeader = (props) => (
    <Parallax strength={300} bgImage={props.bgImage} bgHeight={'400px'} bgWidth={'100%'}>
        <Wrapper>
            <Title>
                {props.text}
            </Title>
            {props.children}
        </Wrapper>
    </Parallax>
);

PageHeader.propTypes = {
    text: PropTypes.string,
    bgImage: PropTypes.string,
};

export default PageHeader