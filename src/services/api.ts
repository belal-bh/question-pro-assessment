import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPosts = () => api.get('/posts');
export const getComments = () => api.get('/comments'); 