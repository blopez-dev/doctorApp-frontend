import http from '../adapters/http';

const getAllRooms = () => http.get('/rooms').then(({ data }) => data);

export default getAllRooms;
