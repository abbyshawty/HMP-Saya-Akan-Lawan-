import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionService } from '../services/transaction.service';
import { formatRupiah } from '../shared/format';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  daftar: Transaction[] = [];
  rp = formatRupiah;


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.daftar = this.transactionService.getTransactions();
  }

  ionViewWillEnter(): void {
    this.daftar = this.transactionService.getTransactions().slice().reverse();
  }
}
