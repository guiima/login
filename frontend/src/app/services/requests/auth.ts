import api from '../api';

export const auth = async (login: string, password: string) => {
  const resp = await api.get('/users', {params: {login, password}});
  console.log('resp1', resp.data);
};
