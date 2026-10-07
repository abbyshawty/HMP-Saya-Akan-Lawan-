import { Injectable } from '@angular/core';

export interface Transaction {
  id: number;
  tanggal: Date;
  items: any[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  constructor() { }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(items: any[], total: number) {
    const newTransaction: Transaction = {
      id: this.transactions.length + 1,
      tanggal: new Date(),
      items: [...items],
      total: total
    };
    this.transactions.push(newTransaction);
  }

  getById(id: number): Transaction | undefined {
    return this.transactions.find(t => t.id === id);
  }

    private hariIni(t: Transaction): boolean {
    return t.tanggal.toDateString() === new Date().toDateString();
  }

  getTotalTransaksiHariIni(): number {
    return this.transactions.filter(t => this.hariIni(t)).length;
  }

  getProdukTerlaris(): string {
    const jumlah: { [nama: string]: number } = {};
    for (const t of this.transactions) {
      for (const i of t.items) {
        jumlah[i.nama] = (jumlah[i.nama] || 0) + i.qty;
      }
    }

    let terlaris = '-';
    let terbanyak = 0;
    for (const nama in jumlah) {
      if (jumlah[nama] > terbanyak) {
        terbanyak = jumlah[nama];
        terlaris = nama;
      }
    }
    return terlaris;
  }
}
