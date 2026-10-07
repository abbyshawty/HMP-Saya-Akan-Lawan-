import { ChangeDetectorRef, Component } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { TemaService } from '../services/tema.service';
import { KeranjangService } from '../services/keranjang.service';
import { formatRupiah } from '../shared/format';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage {
  keyword: string = '';
  pesan: string = '';
  rp = formatRupiah;

  readonly fotoBawaan =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#E7E4D6"/><path d="M30 46 60 32l30 14v32L60 92 30 78z" fill="none" stroke="#5A5D63" stroke-width="3"/><path d="M30 46 60 60l30-14M60 60v32" fill="none" stroke="#5A5D63" stroke-width="3"/></svg>'
    );

  constructor(private productService: ProductService, public temaService: TemaService, private keranjangService: KeranjangService, private cd: ChangeDetectorRef) { }

  /** Stok bisa berubah dari tab Keranjang, jadi tampilan diperiksa ulang tiap tab Produk dibuka. */
  ionViewWillEnter() {
    this.cd.detectChanges();
  }

  /**
   * Daftar dihitung dari service setiap kali tampilan diperiksa, jadi selalu mengikuti kata kunci
   * dan barang baru dari form. Hook ionViewWillEnter tidak terpanggil saat kembali ke tab Produk
   * dari halaman di luar Tab, dan aplikasi ini berjalan tanpa zone.js.
   */
  get produk(): Product[] {
    return this.productService.cariProduk(this.keyword);
  }

  /** Foto yang gagal dimuat diganti gambar bawaan. */
  gantiKeBawaan(event: Event): void {
    (event.target as HTMLImageElement).src = this.fotoBawaan;
  }

  /** Model produk memakai hargaJual, KeranjangService memakai harga. */
  tambahKeKeranjang(p: Product): void {
    const hasil = this.keranjangService.tambah({ id: p.id, nama: p.nama, harga: p.hargaJual, stok: p.stok });
    if (hasil === 'ok') {
      this.pesan = p.nama + ' masuk keranjang. Isi keranjang: ' + this.keranjangService.jumlahSatuan() + ' barang.';
    } else if (hasil === 'habis') {
      this.pesan = 'Stok ' + p.nama + ' habis.';
    } else {
      this.pesan = 'Stok ' + p.nama + ' hanya ' + p.stok + ', semuanya sudah di keranjang.';
    }
  }

}
