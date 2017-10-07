import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {
    Wrapper,
    AboutUsTitle,
    Copyright,
} from './StyledComponents';
import LogoLight from '../../resources/images/logo-light.png';

import {
    IconSpan,
} from "../Header/Menu/StyledComponents";
import MdDrafts from 'react-icons/lib/md/drafts';
import MdLocalPhone from 'react-icons/lib/md/local-phone';

class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
                <Row>
                    <Col xs={12} sm={6} md={4}
                         style={{
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center',
                             height: '150px'
                         }}
                    >
                        <img src={LogoLight} />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AboutUsTitle>What We Do?</AboutUsTitle>
                        <p>
                            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AboutUsTitle>
                            Contacts
                        </AboutUsTitle>
                        <IconSpan>
                            <MdDrafts/>
                        </IconSpan>
                        <a href={`mailto:${this.props.contacts.email}`}>{this.props.contacts.email}</a>
                        <br />
                        <IconSpan>
                            <MdLocalPhone/>
                        </IconSpan>
                        <a href={`mailto:${this.props.contacts.email}`}>{this.props.contacts.phone}</a>
                    </Col>
                </Row>
                <Row style={{ padding: '20px 0'}}>
                    <Copyright>Intense Real Estate © 2017.</Copyright>
                    <Copyright>Made with Love by T&G LLC.</Copyright>
                </Row>
            </Wrapper>
        )
    }
}

Footer.propTypes = {
    contacts: PropTypes.object,
};

export default Footer;
