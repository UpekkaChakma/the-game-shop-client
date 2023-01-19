import useAxiosConfig from "./useAxiosConfig"

const useGetJwtToken = () => {
    const { axiosConfig } = useAxiosConfig();
    const getJwtToken = async (email) => {
        const token = await axiosConfig.post('auth/get-token', {
            email
        })
        return token
    }
    return { getJwtToken }
}

export default useGetJwtToken