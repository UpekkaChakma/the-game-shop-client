import { useEffect, useState } from "react";
import useAxiosConfig from "./useAxiosConfig";

const useCheckCurrentGameInLibrary = (id) => {
    const [isAlreadyPurchased, setIsAlreadyPurchased] = useState(false);
    const { axiosConfig, email } = useAxiosConfig();

    useEffect(() => {
        const checkIsCurrentGameInLibrary = async () => {
            try {
                const res = await axiosConfig.post('user/check-is-in-library', {
                    id,
                    email
                })
                res && setIsAlreadyPurchased(true)
            } catch (error) {
                console.log(error.response)
            }
        }

        email && checkIsCurrentGameInLibrary()
    }, [axiosConfig, email, id])

    return { isAlreadyPurchased }
}

export default useCheckCurrentGameInLibrary