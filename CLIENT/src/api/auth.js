import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // your backend
  withCredentials:true
});

export const login = (formData) => API.post('/login', formData);
export const register = (formData) => API.post('/register', formData);
export const getProtected = (token) => API.get('/protected', {
  headers: { Authorization: `Bearer ${token}` }
});
