import { Injectable } from '@angular/core';

export interface ProdukKeranjang {
  id: number;
  nama: string;
  harga: number;
  stok: number;
}

export interface ItemKeranjang extends ProdukKeranjang {
  qty: number;
}

export type HasilTambah = 'ok' | 'habis' | 'melebihi-stok';

@Injectable({ providedIn: 'root' })
export class KeranjangService {
  items: ItemKeranjang[] = [];

  tambah(produk: ProdukKeranjang): HasilTambah {
    if (produk.stok === 0) {
      return 'habis';
    }
    const ada = this.items.find((i) => i.id === produk.id);
    if (ada) {
      if (ada.qty >= produk.stok) {
        return 'melebihi-stok';
      }
      ada.qty++;
    } else {
      this.items.push({ ...produk, qty: 1 });
    }
    return 'ok';
  }

  /** delta +1 atau -1. Turun sampai 0 menghapus barang dari keranjang. */
  ubahQty(id: number, delta: number): void {
    const item = this.items.find((i) => i.id === id);
    if (!item) {
      return;
    }
    const baru = item.qty + delta;
    if (baru <= 0) {
      this.hapus(id);
    } else if (baru <= item.stok) {
      item.qty = baru;
    }
  }

  hapus(id: number): void {
    this.items = this.items.filter((i) => i.id !== id);
  }

  subtotal(item: ItemKeranjang): number {
    return item.harga * item.qty;
  }

  total(): number {
    return this.items.reduce((jumlah, i) => jumlah + this.subtotal(i), 0);
  }

  jumlahSatuan(): number {
    return this.items.reduce((jumlah, i) => jumlah + i.qty, 0);
  }

  kosongkan(): void {
    this.items = [];
  }
}
