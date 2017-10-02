import React from 'react';
import MdDrafts from 'react-icons/lib/md/drafts';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import {Wrapper, InfoA, IconSpan, InfoAForPhone} from './StyledComponents';

const InfoBar = () => (
    <Wrapper>
        <InfoA href="mailto:test@test.com">
            <IconSpan>
                <MdDrafts/>
            </IconSpan>
            example@example.com
        </InfoA>
        <InfoAForPhone href="tel:+37499554324">
            <IconSpan>
                <MdLocalPhone/>
            </IconSpan>
            +37499554324
        </InfoAForPhone>
    </Wrapper>
);

export default InfoBar;
