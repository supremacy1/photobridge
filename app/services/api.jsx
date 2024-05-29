import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const fetchUsers = () => api.get('/users');
export const fetchUserImages = (userId) => api.get(`/user-images/${userId}`);
