import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoartComponent } from './productoart.component';

describe('ProductoartComponent', () => {
  let component: ProductoartComponent;
  let fixture: ComponentFixture<ProductoartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
