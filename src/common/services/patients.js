import http from '../adapters/http';

export const getAllPatients = (page, limit) => http.get('/patients', { params: { page, limit } }).then(({ data }) => data);
export const createPatient = (user) => http.post('/patients', user);
