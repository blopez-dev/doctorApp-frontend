import http from '../adapters/http';

export const getAllUsers = (page, limit) => http.get('/users', { params: { page, limit } }).then(({ data }) => data);
export const createUser = (user) => http.post('/users', user);
