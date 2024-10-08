import axios from "axios";
export const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_SERVER_URL,
    timeout: 5000
})