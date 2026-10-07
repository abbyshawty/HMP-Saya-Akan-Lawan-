import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransaksiDetailPage } from './transaksi-detail.page';

describe('TransaksiDetailPage', () => {
  let component: TransaksiDetailPage;
  let fixture: ComponentFixture<TransaksiDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
