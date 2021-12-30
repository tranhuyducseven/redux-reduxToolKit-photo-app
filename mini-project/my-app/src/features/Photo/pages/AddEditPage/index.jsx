import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddEditPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log('Form submit', values);
        const action = addPhoto(values);
        dispatch(action);
        navigate('/photos');

    }


    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photos" />
            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} />
            </div>

        </div>
    )
}

AddEditPage.propTypes = {

}

export default AddEditPage

