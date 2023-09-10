import jwt_decode from 'jwt-decode';

export const authRole = (role: string[]) => {
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken: any = jwt_decode(token);
    const userRoles = decodedToken.role;

    if (userRoles.includes(role)) {
      return true;
    }
  }
  return false;
};
