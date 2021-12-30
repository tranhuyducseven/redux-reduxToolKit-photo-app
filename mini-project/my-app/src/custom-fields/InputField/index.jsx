import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled, } = props;

    const { name, value, onChange, onBlur } = field;
    //Mot field co 4 cai qtr: name, value, onChange, onBlur

    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Input
                id={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
                
                invalid={showError}/>
            <ErrorMessage className='errors-msg' name={name} component={FormFeedback} />
        </FormGroup>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

export default InputField

