import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GameapiService } from '../services/gameapi.service';

@Component({
  selector: 'app-game-by-genre',
  templateUrl: './game-by-genre.component.html',
  styleUrls: ['./game-by-genre.component.css']
})
export class GameByGenreComponent implements OnInit {
  genreId!: number;
  genreName!: string;
  games: any[] = [];

  constructor(private route: ActivatedRoute, private gameService: GameapiService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        this.genreId = id ? +id : 0;
        return this.gameService.getGenres(); // Retrieve all genres
      }),
      switchMap((genres: any[]) => {
        const genre = genres.find(g => g.id === this.genreId); // Find the genre by ID
        this.genreName = genre ? genre.name : ''; // Assign the genre name
        return this.gameService.getGameByGenre(this.genreId); // Retrieve games by genre
      })
    ).subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.log('Error fetching games by genre');
      }
    );
  }

  goBack() {
    window.history.back();
  }
}