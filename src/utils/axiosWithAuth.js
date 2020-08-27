import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://aw-store.herokuapp.com/auth/login',
        headers: {
            Authorization: token
        }
    })
}