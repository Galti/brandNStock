import React from 'react';
import PropTypes from 'prop-types';
import MdDrafts from 'react-icons/lib/md/drafts';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import Icon from 'material-ui/Icon';
import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';

import {Wrapper, InfoA, IconSpan, InfoAForPhone} from './StyledComponents';

let searchText = '';

const InfoBar = (props) => (
    <Wrapper>
        <div style={{ display: 'flex', justifyContent: 'center', width: '300px' }}>
            <FormGroup style={{width: '250px', marginTop: '-5px'}}>
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
                        style={{
                            borderRadius: '3px'
                        }}
                    />
                    <div
                        onClick={() => props.onSearch(searchText)}
                        style={{ 
                            width: '40px',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            marginLeft: '-40px',
                            zIndex: '123'
                        }}
                    >
                        <Icon style={{fontSize: '30px', color: 'rgba(0,0,0,0.4)'}}>search</Icon>
                    </div>
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
