import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nama: string;
  kategori: string;
  hargaBeli: number;
  hargaJual: number;
  stok: number;
  gambar: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  kategori: string[] = ['Sembako', 'Makanan', 'Minuman', 'Kebersihan', 'Lainnya'];

  produk: Product[] = [
      { id: 1, nama: 'Beras 5kg', kategori: 'Sembako', hargaBeli: 58000, hargaJual: 65000, stok: 20, gambar: '' },
      { id: 2, nama: 'Minyak Goreng 1L', kategori: 'Sembako', hargaBeli: 14000, hargaJual: 17000, stok: 35, gambar: '' },
      { id: 3, nama: 'Gula Pasir 1kg', kategori: 'Sembako', hargaBeli: 15000, hargaJual: 18000, stok: 0, gambar: '' },
      { id: 4, nama: 'Indomie Goreng', kategori: 'Makanan', hargaBeli: 2800, hargaJual: 3500, stok: 100, gambar: '' },
      { id: 5, nama: 'Teh Botol 450ml', kategori: 'Minuman', hargaBeli: 3500, hargaJual: 5000, stok: 48, gambar: '' },
      { id: 6, nama: 'Aqua 600ml', kategori: 'Minuman', hargaBeli: 2500, hargaJual: 4000, stok: 60, gambar: '' },
      { id: 7, nama: 'Sabun Mandi Lifebuoy', kategori: 'Kebersihan', hargaBeli: 3000, hargaJual: 4500, stok: 25, gambar: '' },
      { id: 8, nama: 'Sampo Sachet', kategori: 'Kebersihan', hargaBeli: 400, hargaJual: 1000, stok: 0, gambar: '' },
      { id: 9, nama: 'Kopi Kapal Api', kategori: 'Minuman', hargaBeli: 1200, hargaJual: 2000, stok: 80, gambar: '' },
      { id: 10, nama: 'Telur Ayam 1kg', kategori: 'Sembako', hargaBeli: 26000, hargaJual: 30000, stok: 15, gambar: '' },
      { id: 11, nama: 'Rokok Surya 12', kategori: 'Lainnya', hargaBeli: 24000, hargaJual: 27000, stok: 12, gambar: '' },
    ];

  constructor() { }

  getProducts(): Product[] {
    return this.produk;
  }

  getProductById(id: number): Product | undefined {
    return this.produk.find(p => p.id === id);
  }

  getTotalProduk(): number {
  return this.produk.length;
  }

  cariProduk(keyword: string) {
    const k = keyword.trim().toLowerCase();
    return this.produk.filter(p =>
      p.nama.toLowerCase().includes(k) ||
      p.kategori.toLowerCase().includes(k)
    );
  }

  tambah(data: Omit<Product, 'id'>): Product {
    const id = this.produk.reduce((terbesar, p) => Math.max(terbesar, p.id), 0) + 1;
    const baru: Product = { id, ...data };
    this.produk.push(baru);
    return baru;
  }

  /** Objek lama diubah di tempat, jadi daftar yang sudah memegangnya ikut berubah. */
  ubah(id: number, data: Omit<Product, 'id'>): boolean {
    const ada = this.getProductById(id);
    if (!ada) {
      return false;
    }
    Object.assign(ada, data);
    return true;
  }

  kurangiStok(id: number, qty: number): void {
    const p = this.getProductById(id);
    if (p) {
      p.stok = Math.max(0, p.stok - qty);
    }
  }
}
