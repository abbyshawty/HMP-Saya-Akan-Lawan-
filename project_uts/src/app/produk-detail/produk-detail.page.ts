import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk, ProdukService } from '../produk';
import { KeranjangService } from '../services/keranjang.service';
import { AnimasiService } from '../services/animasi.service';
import { formatRupiah, GAMBAR_BAWAAN } from '../shared/format';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.page.html',
  styleUrls: ['./produk-detail.page.scss'],
  standalone: false,
})
export class ProdukDetailPage implements OnInit {
  produk: Produk | undefined;
  pesan = '';
  fotoBawaan = GAMBAR_BAWAAN;
  rp = formatRupiah;

  constructor(
    private route: ActivatedRoute,
    private produkService: ProdukService,
    private keranjangService: KeranjangService,
    private animasiService: AnimasiService
  ) {}

  ngOnInit(): void {
    // Parameter :id dari URL /produk/:id. Memakai subscribe supaya halaman ikut berubah kalau id berubah.
    this.route.params.subscribe((params) => {
      this.produk = this.produkService.ambil(Number(params['id']));
      this.pesan = '';
    });
  }

  /** Animasi 1: foto dan isi detail muncul bergantian saat halaman dibuka. */
  ionViewDidEnter(): void {
    this.animasiService.munculBertahap('app-produk-detail .foto, app-produk-detail .isi > *');
  }

  untungPerBuah(): number {
    return this.produk ? this.produk.hargaJual - this.produk.hargaBeli : 0;
  }

  /** Model produk memakai hargaJual, KeranjangService memakai harga. */
  tambahKeKeranjang(): void {
    if (!this.produk) {
      return;
    }
    const p = this.produk;
    const hasil = this.keranjangService.tambah({ id: p.id, nama: p.nama, harga: p.hargaJual, stok: p.stok });
    if (hasil === 'ok') {
      this.pesan = p.nama + ' masuk keranjang. Isi keranjang: ' + this.keranjangService.jumlahSatuan() + ' barang.';
    } else if (hasil === 'melebihi-stok') {
      this.pesan = 'Stok ' + p.nama + ' hanya ' + p.stok + ', semuanya sudah di keranjang.';
    } else {
      this.pesan = 'Stok ' + p.nama + ' habis.';
    }
  }

  /** Foto yang gagal dimuat diganti gambar bawaan. */
  gantiKeBawaan(event: Event): void {
    const gambar = event.target as HTMLImageElement;
    if (gambar.src !== this.fotoBawaan) {
      gambar.src = this.fotoBawaan;
    }
  }
}
