import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaProductosComponent } from './artistaproductos.component';

describe('ArtistaProductosComponent', () => {
  let component: ArtistaProductosComponent;
  let fixture: ComponentFixture<ArtistaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});