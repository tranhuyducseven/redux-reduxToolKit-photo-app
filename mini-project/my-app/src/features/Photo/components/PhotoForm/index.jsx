import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { Formik, Form, FastField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, FormGroup, Input, Label } from 'reactstrap';


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {

    const initialValues = {
        title: '',
        categoryId: null,

    };
    return (
        <Formik
            initialValues={initialValues}
        >

            {formikProps => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched })
                return (
                    <Form style={{ "margin": "50px" }}>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />
                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            label="photo"

                        />





                        <FormGroup>
                            <Button color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}

        </Formik>
    );
}

export default PhotoForm;