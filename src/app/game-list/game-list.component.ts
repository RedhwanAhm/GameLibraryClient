import { Component, OnInit } from '@angular/core';
import { GameapiService } from '../services/gameapi.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameapiService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.log('Error fetching games');
      }
    );
  }

  // getGenreName(genreId: number) {
  //   this.gameService.getGenreById(genreId).subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error => {
  //       console.log('Error fetching genre name');
  //     }
  //   );
  // }
}