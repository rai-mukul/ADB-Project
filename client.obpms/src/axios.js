import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'cloud api url'
});


export default instance;