import Banner from 'components/Banner'
import Images from 'constants/images'
import PhotoList from 'features/Photo/components/PhotoList'
import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'



function MainPage(props) {
    //state <-> root reducer
    const photos = useSelector(state => state.photos);
    console.log('List of photos', photos);
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
                    />
                </div>
            </Container>

        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

