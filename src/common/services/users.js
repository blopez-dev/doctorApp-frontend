import http from '../adapters/http';

export const getAllUsers = () => http.get('/users').then(({ data }) => data);
export const createUser = (user) => http.post('/users', user);
