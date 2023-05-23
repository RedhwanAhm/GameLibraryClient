import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/Server';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameapiService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getGames(): Observable<any> {
    const gamesUrl = `${this.apiUrl}/api/Games`;
    return this.http.get(gamesUrl);
  }

  createGame(body: { title: string, genreId: number, genreName: string }): Observable<any> {
    const createGameUrl = `${this.apiUrl}/api/Games`;
    return this.http.post(createGameUrl, body);
  }

  getGenres(): Observable<any> {
    const genresUrl = `${this.apiUrl}/api/Genres`;
    return this.http.get(genresUrl);
  }

  createGenre(body: { name: string }): Observable<any> {
    const createGenreUrl = `${this.apiUrl}/api/Genres`;
    return this.http.post(createGenreUrl, { name: body.name });
  }

  getGameByGenre(genreId: number): Observable<any> {
    const gameUrl = `${this.apiUrl}/api/Genres/${genreId}/Games`;
    return this.http.get(gameUrl);
  }

  updateGenreById(genreId: number, body: { id:number, name: string }): Observable<any> {
    const request = {
      id: body.id,
      name: body.name
    }
    const updateGenreUrl = `${this.apiUrl}/api/Genres/${genreId}`;
    return this.http.put(updateGenreUrl, request);
  }

}
