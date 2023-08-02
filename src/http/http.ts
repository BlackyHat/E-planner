import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://e-backend-v379.onrender.com/api/',
});
