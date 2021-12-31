import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const params = useParams();
    const { photoId } = params;

    const isAddMode = !photoId

    const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId));
    // console.log(editedPhoto);


    const initialValues = isAddMode ? {
        title: '',
        categoryId: null,
        photo: '',
    } : editedPhoto;
    const handleSubmit = (values) => {
        // console.log('Form submit', values);
        if (isAddMode) {
            const action = addPhoto(values);
            dispatch(action);
        }
        else {
            const action = updatePhoto(values);
            dispatch(action);
        }

        navigate('/photos');

    }


    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photos" />
            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit} />
            </div>

        </div>
    )
}

AddEditPage.propTypes = {

}

export default AddEditPage

