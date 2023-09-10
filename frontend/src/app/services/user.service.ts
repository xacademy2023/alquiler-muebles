import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/*
export interface User {
  name: string;
  email: string;
  isSeller: boolean;
}
*/
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'users/';
  }

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user)
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}/${email}`);
  }

  deleteUser(email: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${email}`);
  }

  /*
  setUserSellerState(email: string, isSeller: boolean): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${email}`, isSeller);
  }
  */
}
