import { useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import { failedAlert } from '../../sharedComponents(user+admin)/UI/Alert';

const useFetchData = (url) => {
    const [shouldReFetch, setShouldReFetch] = useState(false)
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const loadGames = async () => {
            try {
                const res = await axios.get(url || "http://localhost:5000/user/games");
                setState(prevState => ({
                    ...prevState,
                    data: res.data,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error
                }))
            } finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        }

        loadGames();

    }, [url, shouldReFetch]);


    const [loggedInUser] = useContext(UserContext)
    const [data, setData] = useState({});

    const fetchSingleData = async (id) => {
        setData({});
        try {
            const res = await axios.get(`http://localhost:5000/user/game/${id}`, {
                headers: {
                    "Authorization": loggedInUser.token
                }
            })
            setData(res.data)
        } catch (error) {
            failedAlert(error.response.data)
        }
    }

    return { state, setShouldReFetch, fetchSingleData, data }
}

export default useFetchData