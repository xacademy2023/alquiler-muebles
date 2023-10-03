import jwt_decode from 'jwt-decode';

export const authRole = (role: string[]) => {
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken: any = jwt_decode(token);
    const userRoles = decodedToken.role;
    const userId = decodedToken.userId;
    console.log(userId);

    if (userRoles.includes(role)) {
      return true;
    }
  }
  return false;
};
