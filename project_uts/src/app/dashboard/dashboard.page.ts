import { Component, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { TransactionService } from '../services/transaction.service';
import { formatRupiah } from '../shared/format';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  //styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage {
  rp = formatRupiah;

  constructor(
    private productService: ProductService,
    private transactionService: TransactionService,
    private cd: ChangeDetectorRef
  ) {}

  ionViewWillEnter() {
    this.cd.detectChanges();
  }

  get totalProduk(): number {
    return this.productService.getTotalProduk();
  }

  get totalTransaksiHariIni(): number {
    return this.transactionService.getTotalTransaksiHariIni();
  }

  get produkTerlaris(): string {
    return this.transactionService.getProdukTerlaris();
  }
}
