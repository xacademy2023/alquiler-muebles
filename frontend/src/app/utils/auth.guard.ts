import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken: any = jwt_decode(token);
    const userRoles = decodedToken.role;
    if (userRoles.includes('admin') && route.data['role'] === 'admin') {
      return true;
    } else if (
      userRoles.includes('vendedor') &&
      route.data['role'] === 'vendedor'
    ) {
      return true;
    } else if (
      userRoles.includes('comprador') &&
      route.data['role'] === 'comprador'
    ) {
      return true;
    }
  }
  router.navigate(['/login']);
  return false;
};
