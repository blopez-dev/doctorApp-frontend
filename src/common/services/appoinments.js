import http from '../adapters/http';

const getAllAppointments = () => http.get('/appointments').then(({ data }) => data);
export const createAppointment = (appointment) => http.post('/appointments', appointment);

export default getAllAppointments;
