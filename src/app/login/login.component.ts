import { Component } from '@angular/core';
import { Authenticate } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private auth: Authenticate, private router: Router) { }

  onSubmit() {
    this.auth.login({ username: this.username,password: this.password }).subscribe(
      data => {
        // console.log('Login successful');
        this.router.navigate(['/genres']);

      },
      error => {
        console.log('Login failed');
      }
    );
  }
}