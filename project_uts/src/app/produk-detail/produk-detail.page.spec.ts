import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukDetailPage } from './produk-detail.page';

describe('ProdukDetailPage', () => {
  let component: ProdukDetailPage;
  let fixture: ComponentFixture<ProdukDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
