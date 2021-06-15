import http from '../adapters/http';

export const getAllPatients = (page, limit) => http.get('/patients', { params: { page, limit } }).then(({ data }) => data);
export const getPatientById = (id) => http.get(`/patients/${id}`).then(({ data }) => data);
export const createPatient = (user) => http.post('/patients', user);
export const deletePatient = (id) => http.delete(`/patients/${id}`).then(({ data }) => data);
export const updateById = (id, data) => http.patch(`/patients/${id}`, data);
