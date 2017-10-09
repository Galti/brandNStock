import React from 'react';
import PropType from 'prop-types';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    HelpBlock,
    Grid,
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class Contacts extends React.Component {
    render() {
        return (
            <Grid>
                <form>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Имя Фамиля"
                        placeholder="Иван Василевич"
                    />
                    <FieldGroup
                        id="formControlsEmail"
                        type="email"
                        label="Почта"
                        placeholder="example@example.com"
                    />
                    <FieldGroup
                        id="formControlsEmail"
                        type="tel"
                        label="Телефон"
                        placeholder="+12345678900"
                    />
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Текст</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Ваш текст" />
                    </FormGroup>

                    <Button type="submit" style={{ margin: '0 auto', backgroundColor: 'rgb(255,161,57)', alignSelf: 'center', display: 'block', color: '#fff' }}>
                        Отправить
                    </Button>
                    <div style={{ marginBottom: '50px' }}></div>
                </form>
            </Grid>
        )
    }
}

Contacts.propTypes = {
    contacts: PropType.object,
};

export default Contacts;

