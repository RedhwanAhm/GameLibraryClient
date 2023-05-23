import { Component, OnInit } from '@angular/core';
import { GameapiService } from '../services/gameapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent implements OnInit {
  genreName!: string;
  currentGenreName!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private gameapiService: GameapiService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const genreId = params['id'];
      // Perform any additional operations using the genreId if needed
    });
  }

  updateGenre() {
    this.activatedRoute.params.subscribe(params => {
      const genreId = params['id'];
      const body = { id: genreId, name: this.genreName };

      this.gameapiService.updateGenreById(genreId, body).subscribe(
        response => {
          // Handle the response from the API call
          console.log('Genre updated successfully', response);
          this.router.navigate(['/genres']);

        },
        error => {
          // Handle error response
          console.error('Error updating genre', error);
        }
      );
    });
  }
}