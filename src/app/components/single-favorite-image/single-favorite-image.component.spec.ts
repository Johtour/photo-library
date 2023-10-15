import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFavoriteImageComponent } from './single-favorite-image.component';

describe('SingleFavoriteImageComponent', () => {
  let component: SingleFavoriteImageComponent;
  let fixture: ComponentFixture<SingleFavoriteImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleFavoriteImageComponent]
    });
    fixture = TestBed.createComponent(SingleFavoriteImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
