import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';
function SelectField(props) {
    const {
        field, form,
        label, placeholder, disabled, options } = props;
    const { name, value } = field;
    const selectedOptionValue = options.find(option => option.value === value)
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOptionValue}
                onChange={handleSelectedOptionChange}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
            />
        </FormGroup>
    )
}

SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,

}
SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

export default SelectField

