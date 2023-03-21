import { useEffect, useState } from 'react'
import { failedAlert } from '../../sharedComponents(user+admin)/UI/Alert';
import useAxiosConfig from './useAxiosConfig';

const useFetchData = (url) => {
    const { email, axiosConfig } = useAxiosConfig();
    const [shouldReFetch, setShouldReFetch] = useState(false)
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                let response;
                if (url) {
                    response = await axiosConfig.post(url, {
                        email
                    });
                } else {
                    response = await axiosConfig.get("user/games");
                }

                setState(prevState => ({
                    ...prevState,
                    data: response.data,
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error
                }))
            }
        }

        loadData();

    }, [url, shouldReFetch, email]);


    const [data, setData] = useState({});

    const fetchSingleData = async (id) => {
        setData({});
        try {
            const res = await axiosConfig.get(`user/game/${id}`)
            setData(res.data)
        } catch (error) {
            failedAlert(error.response.data)
        }
    }

    return { state, setShouldReFetch, fetchSingleData, data }
}

export default useFetchData