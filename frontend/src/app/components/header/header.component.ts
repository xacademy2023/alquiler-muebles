import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const hasToken = localStorage.getItem('token');
    if (hasToken) {
      this.isLogged = true;
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
