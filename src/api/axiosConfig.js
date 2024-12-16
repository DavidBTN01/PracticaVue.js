import axios from 'axios';

// Configura Axios con la URL base del backend
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Cambia esto según la URL de tu backend
  timeout: 5000, // Tiempo máximo para cada solicitud
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
