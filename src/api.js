import axios from 'axios';

const api = axios.create({
    baseURL: 'https://django-ecomerce-backend.onrender.com/api', // Cambia esto según la URL de tu API
    
});

export default api;
