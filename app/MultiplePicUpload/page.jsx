import React from 'react';
import axios from 'axios';

const MultiplePicUpload = ({ userId, onUpload }) => {
    const handleMultipleUpload = async (e) => {
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('photos', e.target.files[i]);
        }
        formData.append('userId', userId);
        await axios.post('http://localhost:3001/upload/multiple', formData);
        onUpload();
    };

    return (
        <div>
            <label>Upload Multiple Pictures</label>
            <input type="file" multiple onChange={handleMultipleUpload} />
        </div>
    );
};

export default MultiplePicUpload;
