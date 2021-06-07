import http from '../adapters/http';

const getAllAppointments = () => http.get('/appointments').then(({ data }) => data);

export default getAllAppointments;
