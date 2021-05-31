import http from '../adapters/http';

export const createUser = (user) => http.post('/users', user);

export const getAllUsers = () => http.get('/users');
