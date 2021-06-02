import http from '../adapters/http';

export const getAllPatients = () => http.get('/patients');
export const createPatient = (user) => http.post('/patients', user);
