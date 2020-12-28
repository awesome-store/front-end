import axios from 'axios';

export const axiosWithAuth = (auth = true) => {
    let headers = {};
    if (auth) {
        const token = localStorage.getItem('token');
        headers = { ...headers, Authorization: token }
    }

    return axios.create({
        baseURL: 'https://aw-store.herokuapp.com/auth/',
        headers,
    });
};