import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label } from 'reactstrap'

function InputField(props) {
    const {
        field,form,
        type, label, placeholder, disabled, } = props;

    const { name, value, onChange, onBlur } = field;
    //Mot field co 4 cai qtr: name, value, onChange, onBlur
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
                placeholder={placeholder} />
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

