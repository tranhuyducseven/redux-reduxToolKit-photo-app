import React from 'react'
import PropTypes from 'prop-types'

import PhotoCard from '../PhotoCard';
import { Col, Row } from 'reactstrap';



function PhotoList(props) {
    const { photoList, onPhotoListEdit, onPhotoListRemove } = props;
    return (
        <Row>
            {photoList.map(photo => (
                <Col key={photo.title} xs="12" md="12" lg="3">
                    <PhotoCard
                        photo={photo}
                        onPhotoCardEdit={onPhotoListEdit}
                        onPhotoCardRemove={onPhotoListRemove}
                    />
                </Col>
            ))}
        </Row>
    );
}

PhotoList.propTypes = {
    photoList: PropTypes.array,
    onPhotoListEdit: PropTypes.func,
    onPhotoListRemove: PropTypes.func,
}
PhotoList.defaultProps = {
    photoList: [],
    onPhotoListEdit: null,
    onPhotoListRemove: null,

}
export default PhotoList

