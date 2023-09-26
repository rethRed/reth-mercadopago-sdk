import axios from "axios";

export const getAxiosInstance = () => {
    return axios.create({
        validateStatus: (status) => true,
    
    });
}
