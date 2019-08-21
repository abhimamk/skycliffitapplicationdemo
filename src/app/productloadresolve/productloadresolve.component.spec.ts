import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductloadresolveComponent } from './productloadresolve.component';

describe('ProductloadresolveComponent', () => {
  let component: ProductloadresolveComponent;
  let fixture: ComponentFixture<ProductloadresolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductloadresolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductloadresolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
