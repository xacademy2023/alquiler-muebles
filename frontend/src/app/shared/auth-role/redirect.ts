import { Router } from '@angular/router';
import { authRole } from './authRole';

export const redirect = (router: Router) => {
  if (authRole(['vendedor'])) {
    router.navigate(['/dashboard']);
    return;
  } else if (authRole(['comprador'])) {
    router.navigate(['/home']);
    return;
  } else if (authRole(['admin'])) {
    router.navigate(['/adminDashboard']);
    return;
  }
};
