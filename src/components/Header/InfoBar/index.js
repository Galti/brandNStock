import React from 'react';
import PropTypes from 'prop-types';
import MdDrafts from 'react-icons/lib/md/drafts';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

import {Wrapper, InfoA, IconSpan, InfoAForPhone} from './StyledComponents';

let searchText = '';

const InfoBar = (props) => (
    <Wrapper>
        <div style={{ display: 'flex', justifyContent: 'center', width: '300px' }}>
            <FormGroup style={{width: '200px', marginTop: '-2px'}}>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Searh ..."
                        onChange={(e) => searchText = e.target.value}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                props.onSearch(searchText);
                            }
                        }}
                    />
                    <InputGroup.Addon
                        onClick={() => props.onSearch(searchText)}
                    >
                        <Glyphicon glyph="search" style={{cursor: 'pointer'}}/>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
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
        </div>
    </Wrapper>
);

InfoBar.propTypes = {
    contacts: PropTypes.object,
    onSearch: PropTypes.func,
};

export default InfoBar;
