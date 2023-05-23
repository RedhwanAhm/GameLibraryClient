import { Component } from '@angular/core';
import { GameapiService } from '../services/gameapi.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {
  genreName: string = '';

  constructor(private gameService: GameapiService) { }

  createGenre() {
    if (this.genreName.trim()) {
      const genreData = { name: this.genreName };
      this.gameService.createGenre(genreData).subscribe(
        response => {
          console.log('Genre created successfully:', response);
          // Redirect to genre list or perform other actions
        },
        error => {
          console.error('Error creating genre:', error);
          // Handle error scenarios
        }
      );
    }
  }
}