import React from 'react';
import PropTypes from 'prop-types';
import MdDrafts from 'react-icons/lib/md/drafts';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import {Wrapper, InfoA, IconSpan, InfoAForPhone} from './StyledComponents';

const InfoBar = (props) => (
    <Wrapper>
        {/*<InfoA href={`mailto:${props.contacts.email}`}>*/}
            {/*<IconSpan>*/}
                {/*<img src={whatsUpIcon} style={{ height: '28px' }}/>*/}
            {/*</IconSpan>*/}
            {/*<IconSpan>*/}
                {/*<img src={viberIcon} style={{ height: '32px' }}/>*/}
            {/*</IconSpan>*/}
            {/*{props.contacts.phone}*/}
        {/*</InfoA>*/}
        <InfoA href={`mailto:${props.contacts.email}`}>
            <IconSpan>
                <MdDrafts/>
            </IconSpan>
            {props.contacts.email}
        </InfoA>
        <InfoAForPhone href={`tel:${props.contacts.phone}`}>
            <IconSpan>
                <MdLocalPhone/>
            </IconSpan>
            {props.contacts.phone}
        </InfoAForPhone>
    </Wrapper>
);

InfoBar.propTypes = {
    contacts: PropTypes.object,
};

export default InfoBar;
