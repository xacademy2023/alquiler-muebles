import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getUserData } from 'src/app/shared/userData/getUserData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const hasToken = localStorage.getItem('token');
    if (hasToken) {
      const { userName } = getUserData();
      this.isLogged = true;
      this.userName = userName;
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLogged = false;
    window.location.reload();
  }
}
