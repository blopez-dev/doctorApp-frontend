import http from '../adapters/http';

export const getAllUsers = () => http.get('/users');
export const createUser = (user) => http.post('/users', user);
