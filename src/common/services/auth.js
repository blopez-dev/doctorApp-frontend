import http from '../adapters/http';

export const signIn = (token) => http.post('/auth', { token });
