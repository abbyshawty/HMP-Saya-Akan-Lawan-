import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction, TransactionService } from '../services/transaction.service';
import { formatRupiah } from '../shared/format';

@Component({
  selector: 'app-transaksi-detail',
  templateUrl: './transaksi-detail.page.html',
  styleUrls: ['./transaksi-detail.page.scss'],
  standalone: false,
})
export class TransaksiDetailPage implements OnInit {
  transaksi: Transaction | undefined;
  rp = formatRupiah;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.transaksi = this.transactionService.getById(Number(params['id']));
    });
  }
}