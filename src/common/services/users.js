import http from '../adapters/http';

export const getAllUsers = (page, limit, search) => http.get('/users', { params: { page, limit, search } }).then(({ data }) => data);
export const getUser = (id) => http.get(`/users/${id}`).then(({ data }) => data);
export const createUser = (user) => http.post('/users', user);
export const deleteUser = (id) => http.delete(`/users/${id}`).then(({ data }) => data);
export const updateById = (id, data) => http.patch(`/users/${id}`, data);
