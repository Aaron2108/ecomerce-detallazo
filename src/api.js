import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Cambia esto según la URL de tu API
    timeout: 10000,
});

export default api;
