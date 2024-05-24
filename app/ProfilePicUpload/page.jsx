import React from 'react';
import axios from 'axios';

const ProfilePicUpload = ({ userId, onUpload }) => {
    const handleProfilePicUpload = async (e) => {
        const formData = new FormData();
        formData.append('profilePic', e.target.files[0]);
        formData.append('userId', userId);
        await axios.post('http://localhost:3001/upload/profile', formData);
        onUpload();
    };

    return (
        <div>
            <label>Upload Profile Picture</label>
            <input type="file" onChange={handleProfilePicUpload} />
        </div>
    );
};

export default ProfilePicUpload;
