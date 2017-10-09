import React from 'react';
import PropType from 'prop-types';
import Contacts from '../../components/Contacts';

class ContactsPage extends React.Component {
    render() {
        return (
            <div>
                <Contacts contacts={this.props.contacts}/>
            </div>
        )
    }
}

ContactsPage.propTypes = {
    contacts: PropType.object,
};

export default ContactsPage;
