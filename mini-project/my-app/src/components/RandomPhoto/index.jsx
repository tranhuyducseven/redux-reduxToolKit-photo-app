import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

const getRandomImageUrl = () =>{
    const randomId = Math.trunc(Math.random() *200);
    return `https://picsum.photos/id/${randomId}/200/300`
}

//1. name 
//2. value 
//3. onChange 
//4. onBlur   

function RandomPhoto(props) {
    const {name, imageUrl, onImageUrlChange,  onRandomButtonBlur} = props;
    const handleRandomPhotoClick = async () => {
        if(onImageUrlChange){
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    }
    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>

            <div className="random-photo__photo">
                {imageUrl && <img src={imageUrl} alt="Oops ... not found. Please click random again!" />}
            </div>
        </div>
    );
}

RandomPhoto.propTypes = {
    name: PropTypes.string,
    //value: imageUrl 
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
}
RandomPhoto.defaultProps = {
    name: '', 
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
}

export default RandomPhoto

