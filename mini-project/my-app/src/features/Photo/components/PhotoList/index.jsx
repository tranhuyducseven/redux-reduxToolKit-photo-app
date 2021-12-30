import React from 'react'
import PropTypes from 'prop-types'

import PhotoCard from '../PhotoCard';
import { Col, Row } from 'reactstrap';



function PhotoList(props) {
    const { photoList } = props;
    return (
        <Row>
            {photoList.map(photo => (
                <Col key={photo.title} xs="12" md="12" lg="3">
                    <PhotoCard
                        photo={photo}
                    />
                </Col>
            ))}
        </Row>
    );
}

PhotoList.propTypes = {
    photoList: PropTypes.array
}
PhotoList.defaultProps = {
    photoList: [],

}
export default PhotoList

