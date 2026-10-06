import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nama: string;
  harga: number;
  stok: number;
  foto?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, nama: 'Kopi Susu Gula Aren', harga: 18000, stok: 20 },
    { id: 2, nama: 'Americano', harga: 15000, stok: 15 },
    { id: 3, nama: 'Matcha Latte', harga: 22000, stok: 10 }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
