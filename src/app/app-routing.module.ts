import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GameByGenreComponent } from './game-by-genre/game-by-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { CreateGenreComponent } from './create-genre/create-genre.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'games', component: GameListComponent, canActivate: [AuthGuard] },
  { path: 'genres', component: GenreListComponent, canActivate: [AuthGuard] },
  { path: 'genres/:id', component: GameByGenreComponent, canActivate: [AuthGuard] },
  { path: 'add', component: CreateGameComponent, canActivate: [AuthGuard] },
  { path: 'add-genre', component: CreateGenreComponent, canActivate: [AuthGuard] },
  { path: 'update-genre/:id', component: UpdateGenreComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard // Add AuthGuard as a provider
  ]
})
export class AppRoutingModule { }