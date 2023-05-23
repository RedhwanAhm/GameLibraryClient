import { Component, OnInit } from '@angular/core';
import { Authenticate } from './services/authenticate.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: Observable<boolean> = of(false); // Initialize with an empty observable

  constructor(private authService: Authenticate) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}