import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getUserData } from 'src/app/shared/userData/getUserData';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  userName: string = '';
  showDashboardBtn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const hasToken = localStorage.getItem('token');
    const { userName, role } = getUserData();
    if (hasToken) {
      this.isLogged = true;
      this.userName = userName;
    }
    if (role === 'vendedor' || role === 'admin') {
      this.showDashboardBtn = true;
    } else {
      this.showDashboardBtn = false;
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    Swal.fire({
      title: 'Vas a cerrar tu sesión ¿Estas seguro/a?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
      background: '#724a72',
      color: '#FFF',
      confirmButtonColor: 'green',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        this.isLogged = false;
        Swal.fire('Cerraste tu sesíon, redireccionando...', '', 'success');
        window.location.reload();
      }
    });
  }
}
