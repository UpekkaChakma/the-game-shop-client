import axios from 'axios';
import { useContext } from 'react'
import { UserContext } from '../../../App'

const useAxiosConfig = () => {
    const [loggedInUser] = useContext(UserContext);
    const { email, token } = loggedInUser;
    const axiosConfig = axios.create({
        baseURL: 'http://localhost:5000/user/',
        timeout: 2000,
        headers: {
            "Authorization": token
        }
    });
    return { axiosConfig, email }
}

export default useAxiosConfig