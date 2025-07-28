import axios from "axios";

export const axiosInstance = axios.create({
    // Enter URL for API
    baseURL: '',
    withCredentials: true,
});

