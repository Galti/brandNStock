import React from 'react';
import PropType from 'prop-types';
import {
    WrapperInformation,
    ColInformation,
    WrapperInformationDescription,
    TitleInformation,
    EmailIcon,
    PhoneIcon,
    TimelapseIcon,
} from '../StyledComponents';
import {Grid} from 'react-bootstrap';
import viberIcon from '../../../resources/images/viber-icon.png';
import whatsAppIcon from '../../../resources/images/whatsapp-icon.png';


class Information extends React.Component {
    render() {
        return (
            <WrapperInformation>
                <Grid>
                    <ColInformation xs={12} sm={6} md={3}>
                        <PhoneIcon/>
                        <WrapperInformationDescription>
                            <TitleInformation>
                                Телефон
                            </TitleInformation>
                            <a href={`tel:${this.props.contacts.phone}`}
                               style={{color: '#000'}}>{this.props.contacts.phone}</a>
                        </WrapperInformationDescription>
                    </ColInformation>
                    <ColInformation xs={12} sm={6} md={3} style={{flexDirection: 'column'}}>
                        <TitleInformation>
                            Viber, WhatsApp
                        </TitleInformation>
                        <div><img src={viberIcon} width={'25px'}/> {this.props.contacts.phone} </div>
                        <div><img src={whatsAppIcon} width={'25px'}/> {this.props.contacts.phone} </div>
                    </ColInformation>
                    <ColInformation xs={12} sm={6} md={3}>
                        <EmailIcon/>
                        <WrapperInformationDescription>
                            <TitleInformation>
                                Почта
                            </TitleInformation>
                            <a href={`mailto:${this.props.contacts.email}`}
                               style={{color: '#000'}}>{this.props.contacts.email}</a>
                        </WrapperInformationDescription>
                    </ColInformation>
                    <ColInformation xs={12} sm={6} md={3}>
                        <TimelapseIcon/>
                        <WrapperInformationDescription>
                            <TitleInformation>
                                Работчее Время
                            </TitleInformation>
                            24 Часа в Сутки<br/>
                            7 Дней в Неделю
                        </WrapperInformationDescription>
                    </ColInformation>
                </Grid>
            </WrapperInformation>
        )
    }
}

Information.propTypes = {
    contacts: PropType.object,
};

export default Information;

