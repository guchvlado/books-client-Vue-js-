import axios from "axios";
export const instance = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8081/',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
    },
    baseURL:'http://localhost:8080/',
    withCredentials: false
})
