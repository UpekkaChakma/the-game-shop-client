import { successAlert, failedAlert } from '../../sharedComponents(user+admin)/UI/Alert'
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const useFormSubmit = (imageURL, http_method, url) => {
    const [loggedInUser] = useContext(UserContext);

    const onSubmit = async (data) => {
        const { image, ...extractedData } = data;
        const formData = { ...extractedData, img: imageURL };

        try {
            const client = axios.create({
                baseURL: "http://localhost:5000/admin/",
                headers: {
                    "Authorization": loggedInUser.token
                }
            })
            let successRes;
            http_method === "post" ? successRes = await client.post(url, formData) : successRes = await client.put(url, formData);
            successAlert(successRes.data);
        } catch (error) {
            failedAlert(error.response.data)
        }
    };
    return [onSubmit]
}

export default useFormSubmit

