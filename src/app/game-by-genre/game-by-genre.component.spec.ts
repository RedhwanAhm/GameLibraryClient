import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameByGenreComponent } from './game-by-genre.component';

describe('GameByGenreComponent', () => {
  let component: GameByGenreComponent;
  let fixture: ComponentFixture<GameByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameByGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
