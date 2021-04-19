import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers['Authorization'];
    }
};

export default setAuthToken;
