import axios from 'axios';
import { useState } from 'react'
import { failedAlert } from '../../sharedComponents(user+admin)/UI/Alert'

const useImageUpload = () => {
    const [imageURL, setIMageURL] = useState("");

    const handleImageUpload = async (event) => {
        const imageData = new FormData();
        imageData.set('key', '51794bdd439c0ef7fc6590b2dd17c754');
        imageData.append('image', event.target.files[0]);

        try {
            const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
            setIMageURL(res.data.data.display_url);
        } catch (error) {
            failedAlert();
        }
    }
    return [imageURL, handleImageUpload]
}

export default useImageUpload