import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.bidells.com/app-processing'
});

export default instance;