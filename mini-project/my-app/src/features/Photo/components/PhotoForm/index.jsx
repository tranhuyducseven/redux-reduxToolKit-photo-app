import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';


import * as Yup from 'yup';
import './PhotoForm.scss';

PhotoForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,

};

PhotoForm.defaultProps = {
    initialValues: {},
    onSubmit: null,
}

function PhotoForm(props) {
    const { isAddMode, initialValues, onSubmit } = props;
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        categoryId: Yup.number().required('This field is required').nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired(),
        })

    })
    //onSubmit cua Formik co tham so values, nen onSubmit cua PhotoForm xu ly dc
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >


            {formikProps => {
                const { values, errors, touched } = formikProps;
                // console.log({ values, errors, touched })
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

                            label="Photo"

                        />
                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>{isAddMode ? 'Add to album' : 'Update the photo'}</Button>
                        </FormGroup>


                    </Form>
                )
            }}

        </Formik>
    );
}

export default PhotoForm;