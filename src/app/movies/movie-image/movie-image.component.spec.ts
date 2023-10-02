import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieImageComponent } from './movie-image.component';

describe('MovieImageComponent', () => {
  let component: MovieImageComponent;
  let fixture: ComponentFixture<MovieImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieImageComponent]
    });
    fixture = TestBed.createComponent(MovieImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
