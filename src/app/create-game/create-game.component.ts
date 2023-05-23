import { Component, OnInit } from '@angular/core';
import { GameapiService } from '../services/gameapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  title: string = '';
  selectedGenreId: number = 0;
  selectedGenreName: string = '';
  genres: any[] = [];

  constructor(private gameService: GameapiService, private router: Router) { }

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

  createGame(): void {
    const selectedGenre = this.genres.find(genre => genre.id === this.selectedGenreId);
    if (selectedGenre) {
      this.selectedGenreName = selectedGenre.name;
    }

    this.gameService.createGame({ title: this.title, genreId: this.selectedGenreId, genreName: this.selectedGenreName }).subscribe(
      response => {
        console.log('Game created successfully:', response);
        // Redirect to game list or perform other actions
        this.router.navigate(['/games']);
      },
      error => {
        console.error('Error creating game:', error);
        // Handle the error
      }
    );
  }
}