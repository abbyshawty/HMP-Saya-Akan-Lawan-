import { Component, OnInit } from '@angular/core';
import { ProdukService } from '../produk';
import { TemaService } from '../services/tema.service';
import { KeranjangService } from '../services/keranjang.service';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  keyword: string = '';
  produk: any[] = [];
  pesan: string = '';

  readonly fotoBawaan =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#E7E4D6"/><path d="M30 46 60 32l30 14v32L60 92 30 78z" fill="none" stroke="#5A5D63" stroke-width="3"/><path d="M30 46 60 60l30-14M60 60v32" fill="none" stroke="#5A5D63" stroke-width="3"/></svg>'
    );

  constructor(private ProdukService: ProdukService, public temaService: TemaService, private keranjangService: KeranjangService) { }

  ngOnInit() {
    this.produk = this.ProdukService.cariProduk('');
  }

  /** Ionic menyimpan halaman di cache, jadi daftar dimuat ulang tiap halaman dibuka supaya barang baru muncul. */
  ionViewWillEnter() {
    this.cari();
  }

  cari() {
    this.produk = this.ProdukService.cariProduk(this.keyword);
  }

  /** Foto yang gagal dimuat diganti gambar bawaan. */
  gantiKeBawaan(event: Event): void {
    (event.target as HTMLImageElement).src = this.fotoBawaan;
  }

  /** Model produk memakai hargaJual, KeranjangService memakai harga. */
  tambahKeKeranjang(p: any): void {
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
