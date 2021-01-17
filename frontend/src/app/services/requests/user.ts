import api from '../api';

export const createUser = async (login: string, password: string) => {
  return await api
    .post('/users', {login, password})
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

// export const ListUsers = async () => {
//   console.log('cheguei');
//   const resp = await api.get('/users');
//   console.log('rrrrrrrrreso', resp);
// };
