import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environment/Server';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class Authenticate {
  private apiUrl = environment.baseUrl;
  private isAuthenticated: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = new BehaviorSubject<boolean>(this.getToken() !== null);
  }

  login(credentials: { username: string, password: string }): Observable<boolean> {
    const body = {
      userName: credentials.username,
      password: credentials.password,
    };
    const loginUrl = `${this.apiUrl}/api/Account`;
    console.log(loginUrl);
    console.log(body);
    return this.http.post<LoginResponse>(loginUrl, body).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.isAuthenticated.next(true);
          return true;
        } 
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}