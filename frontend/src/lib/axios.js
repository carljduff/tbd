import axios from "axios";

export const axiosInstance = axios.create({
    // Enter URL for API
    baseURL: 'http://localhost:5005/api',
    withCredentials: true,
});

