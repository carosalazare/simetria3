import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageTemplateComponent } from './product-page-template.component';

describe('ProductPageTemplateComponent', () => {
  let component: ProductPageTemplateComponent;
  let fixture: ComponentFixture<ProductPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPageTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
