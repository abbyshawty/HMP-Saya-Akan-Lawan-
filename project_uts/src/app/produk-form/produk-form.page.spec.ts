import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukFormPage } from './produk-form.page';

describe('ProdukFormPage', () => {
  let component: ProdukFormPage;
  let fixture: ComponentFixture<ProdukFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
