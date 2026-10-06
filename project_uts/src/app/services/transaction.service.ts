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
}
