import http from '../adapters/http';

const signIn = (token) => http.post('/auth', { token });

export default signIn;
