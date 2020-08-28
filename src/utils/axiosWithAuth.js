import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://aw-store.herokuapp.com/auth/',
        headers: {
            Authorization: token
        }
    });
};