import { successAlert, failedAlert } from '../../sharedComponents(user+admin)/UI/Alert'
import useAxiosConfig from './useAxiosConfig';

const useFormSubmit = (imageURL, http_method, targetRoute) => {
    const { axiosConfig } = useAxiosConfig();

    const onSubmit = async (data) => {
        const { image, ...res } = data;
        const formData = { ...res, img: imageURL };

        try {
            let successRes;
            http_method === "post" ? successRes = await axiosConfig.post(targetRoute, formData) : successRes = await axiosConfig.put(targetRoute, formData);
            successAlert(successRes.data);
        } catch (error) {
            failedAlert(error.response.data)
        }
    };
    return [onSubmit]
}

export default useFormSubmit

