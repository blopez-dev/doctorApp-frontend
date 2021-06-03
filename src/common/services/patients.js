import http from '../adapters/http';

export const getAllPatients = () => http.get('/patients').then(({ data }) => data);
export const createPatient = (user) => http.post('/patients', user);
