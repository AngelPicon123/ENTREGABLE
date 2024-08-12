import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // Asegúrate de que esta URL sea la correcta
});

export default instance;
