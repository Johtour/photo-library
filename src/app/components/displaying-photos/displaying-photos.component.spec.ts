import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingPhotosComponent } from './displaying-photos.component';

describe('DisplayingPhotosComponent', () => {
  let component: DisplayingPhotosComponent;
  let fixture: ComponentFixture<DisplayingPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayingPhotosComponent]
    });
    fixture = TestBed.createComponent(DisplayingPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
