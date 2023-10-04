import jwt_decode from 'jwt-decode';

export const getUserData = () => {
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken: any = jwt_decode(token);
    return decodedToken;
  }
  return false;
};
