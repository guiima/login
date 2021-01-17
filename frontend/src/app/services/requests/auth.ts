import api from '../api';

export const auth = async (login: string, password: string) => {
  return await api
    .get(`/users?login=${login}&password=${password}`)
    .then((response) => {
      if (
        response.data.length > 0 &&
        response.data[0].login === login &&
        response.data[0].password === password
      ) {
        return true;
      } else {
        throw 'user not found!';
      }
    })
    .catch((err) => {
      throw err;
    });
};
