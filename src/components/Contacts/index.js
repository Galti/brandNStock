import React from 'react';
import PropType from 'prop-types';
import Information from './Information';
import TitleLayer from '../TitleLayer';
import MailingForm from './MailingForm';
import PageHeader from '../PageHeader';
import bgImage from '../../resources/images/contacts-information-background.jpg';

class Contacts extends React.Component {
    render() {
        return (
            <div>
                <PageHeader
                    text="Контакты"
                    bgImage={bgImage}
                />
                <Information contacts={this.props.contacts}/>
                <TitleLayer text='Отправить Письмо' />
                <MailingForm/>
            </div>
        )
    }
}

Contacts.propTypes = {
    contacts: PropType.object,
};

export default Contacts;

