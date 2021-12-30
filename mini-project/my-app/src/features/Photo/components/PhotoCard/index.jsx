import React from 'react'
import PropTypes from 'prop-types'
import './PhotoCard.scss'
import { Button } from 'reactstrap';



function PhotoCard(props) {
    const { photo } = props;
    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title} />
            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light">
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button outline size="sm" color="danger">
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

PhotoCard.propTypes = {
    photo: PropTypes.object,
}
PhotoCard.defaultProps = {
    photo: {}
}

export default PhotoCard

