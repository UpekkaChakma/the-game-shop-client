import axios from 'axios';
import { useContext } from 'react'
import { UserContext } from '../../../App'

const useAxiosConfig = () => {
    const { loggedInUser } = useContext(UserContext);
    const { email, token } = loggedInUser;
    const baseURL = 'https://the-game-shop.onrender.com/';

    const axiosConfig = axios.create({
        baseURL,
        timeout: 8000,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return { axiosConfig, email }
}

export default useAxiosConfig