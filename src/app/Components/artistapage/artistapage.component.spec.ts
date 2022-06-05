import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaPageComponent } from './artistapage.component';

describe('ArtistaPageComponent', () => {
  let component: ArtistaPageComponent;
  let fixture: ComponentFixture<ArtistaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
