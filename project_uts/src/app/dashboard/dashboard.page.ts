import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  totalProduk: number = 0;
  totalTransaksiHariIni: number = 0;
  produkTerlaris: string = '';

  constructor(
    private productService: ProductService,
    private transactionService: TransactionService
  ) {}

  ionViewWillEnter() {
    this.loadDashboardData();
  }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.totalProduk = this.productService.getTotalProduk();
    this.totalTransaksiHariIni = this.transactionService.getTotalTransaksiHariIni();
    this.produkTerlaris = this.transactionService.getProdukTerlaris();
  }
}
