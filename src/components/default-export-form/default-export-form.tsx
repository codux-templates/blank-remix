import { useState } from 'react';
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const semanticFormLabels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    submit: 'Submit',
};

const FormExampleForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFirstName(e.target.value);

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setLastName(e.target.value);

    const handleClick = () => {
        alert(`Here you need to handle the form submission and not just alert ;)`);
        setFirstName('');
        setLastName('');
    };

    return (
        <Form>
            <FormField>
                <label>{semanticFormLabels.firstName}</label>
                <input
                    placeholder={semanticFormLabels.firstName}
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </FormField>
            <FormField>
                <label>{semanticFormLabels.lastName}</label>
                <input
                    placeholder={semanticFormLabels.lastName}
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </FormField>
            <FormField>
                <Checkbox label="I agree to the Terms and Conditions" />
            </FormField>
            <Button type="submit" onClick={handleClick}>
                {semanticFormLabels.submit}
            </Button>
        </Form>
    );
};

export default FormExampleForm;
