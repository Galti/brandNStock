import React from 'react';
import PropTypes from 'prop-types';
import {
    QuoteMessage,
    Author,
} from './StyledComponents'
import {Parallax} from 'react-parallax';
import background from '../../resources/images/quote.jpg';

class Quote extends React.Component {
    render() {
        return (
            <div>
                <Parallax
                    bgImage={background}

                    bgHeight={'600px'}
                    strength={400}
                    blur={{min: 0, max: 2}}
                >
                    <QuoteMessage>
                        Говорят, что женщины одеваются ради женщин, что их вдохновляет дух соперничества. Это правда. Но
                        если бы на свете больше не осталось мужчин, они перестали бы одеваться.
                        <Author>
                            - Coco Channel
                        </Author>
                    </QuoteMessage>
                </Parallax>
            </div>
        );
    }
}


Quote.propTypes = {
    text: PropTypes.string,
};

export default Quote;
