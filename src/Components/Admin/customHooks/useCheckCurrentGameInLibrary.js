import { useEffect, useState } from "react";
import useAxiosConfig from "./useAxiosConfig";

const useCheckCurrentGameInLibrary = (id) => {
    const [isAlreadyPurchased, setIsAlreadyPurchased] = useState(false);
    const { axiosConfig, email } = useAxiosConfig();

    useEffect(() => {
        const checkIsCurrentGameInLibrary = async () => {
            try {
                const res = await axiosConfig.get('check-is-in-library', {
                    id,
                    email
                })
                console.log(id, email)
                res && setIsAlreadyPurchased(true)
            } catch (error) {
                console.log(error)
            }
        }

        checkIsCurrentGameInLibrary()
    }, [axiosConfig, email, id])

    return { isAlreadyPurchased }
}

export default useCheckCurrentGameInLibrary