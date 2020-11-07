import React from 'react';
import Nav from '../Home/Header/Nav';
import ImageUploading from 'react-images-uploading';

const PreviewImage = () => {

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>
            <Nav />
            <div className="container py-3">
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <div className="text-center py-3">
                                    <button className="btn btn-warning font-weight-bold mr-5"
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Click or Drop here
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-warning font-weight-bold" onClick={onImageRemoveAll}>Remove all images</button>
                                </div>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item text-center pt-3">
                                        <img src={image['data_url']} alt="" width="100" />
                                        <div className="image-item__btn-wrapper py-3">
                                            <button className="btn btn-warning font-weight-bold mr-4" onClick={() => onImageUpdate(index)}>Update</button>
                                            <button className="btn btn-warning font-weight-bold" onClick={() => onImageRemove(index)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                </ImageUploading>
            </div>
        </>
    );
};

export default PreviewImage;