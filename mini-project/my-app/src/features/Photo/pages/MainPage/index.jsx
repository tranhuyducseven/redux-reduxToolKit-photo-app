import Banner from 'components/Banner'
import Images from 'constants/images'
import PhotoList from 'features/Photo/components/PhotoList'
import { removePhoto } from 'features/Photo/photoSlice'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from 'reactstrap'



function MainPage(props) {
    //state <-> root reducer
    const photos = useSelector(state => state.photos);
    // console.log('List of photos', photos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePhotoListEdit = (photo) => {
        navigate(`/photos/${photo.id}`);
    }
    const handlePhotoListRemove = (photo) => {
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <div>
                    <Link to="/photos/add"> Add a new photo</Link>
                </div>
                <div>
                    <PhotoList
                        photoList={photos}
                        onPhotoListEdit={handlePhotoListEdit}
                        onPhotoListRemove={handlePhotoListRemove}
                    />
                </div>
            </Container>

        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

