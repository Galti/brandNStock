import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {
    Wrapper,
    AboutUsTitle,
    Copyright,
    WrapperFooterLogo,
    ContactsTitle,
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
                <WrapperFooterLogo>
                    <img src={LogoLight} style={{width: '100%', marginTop: '-15px', opacity: '0.5'}}/>
                </WrapperFooterLogo>
                <Row>
                    <Col xs={12} sm={6} md={9}>
                        <AboutUsTitle>Что Мы Делаем?</AboutUsTitle>
                        Мы предлагаем вашему вниманию брендовую одежду и аксессуары от ведущих итальянских
                        производителей,
                        которую вы сможете приобрести оптом по самым выгодным ценам. Готовы ответить на все ваши вопросы
                        круглосуточно в любое удобное для вас время!
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{padding: '0 15px'}}>
                        <ContactsTitle>
                            Контакты
                        </ContactsTitle>
                        <IconSpan>
                            <MdDrafts/>
                        </IconSpan>
                        <a href={`mailto:${this.props.contacts.email}`}>{this.props.contacts.email}</a>
                        <br/>
                        <IconSpan>
                            <MdLocalPhone/>
                        </IconSpan>
                        <a href={`tel:${this.props.contacts.phone}`}>{this.props.contacts.phone}</a>
                    </Col>
                </Row>
                <Row style={{padding: '20px 0'}}>
                    <Copyright>Copyright © 2017 Brand and Stock.</Copyright>
                    <Copyright>Made with Love by <b style={{ color: '#fff'}}><i>Fabrika</i></b>.</Copyright>
                </Row>
            </Wrapper>
        )
    }
}

Footer.propTypes = {
    contacts: PropTypes.object,
};

export default Footer;
