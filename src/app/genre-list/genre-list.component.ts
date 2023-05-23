import { Component, OnInit } from '@angular/core';
import { GameapiService } from '../services/gameapi.service';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genres: any[] = [];

  constructor(private gameService: GameapiService) { }

  ngOnInit(): void {
    this.gameService.getGenres().subscribe(
      data => {
        this.genres = data;
      },
      error => {
        console.log('Error fetching genres');
      }
    );
  }
}
