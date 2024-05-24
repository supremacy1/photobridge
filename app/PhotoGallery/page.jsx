import React from 'react';

const PhotoGallery = ({ photos }) => {
    return (
        <div>
            <h2>Photos</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map(photo => (
                    <div key={photo.id} style={{ margin: 10 }}>
                        <img src={`http://localhost:3001/${photo.path}`} alt="User Upload" width={100} height={100} style={{ cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/${photo.path}`, '_blank')} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
