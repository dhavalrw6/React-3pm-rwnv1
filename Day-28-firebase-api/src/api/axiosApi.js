import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : 'https://fir-1d4d1-default-rtdb.firebaseio.com/users'
})