import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { AnimasiService } from '../services/animasi.service';
import { hargaValid, stokValid, tidakKosong, urlFotoValid } from '../shared/validators';

type NamaKolom = 'nama' | 'kategori' | 'hargaBeli' | 'hargaJual' | 'stok' | 'gambar';

@Component({
  selector: 'app-produk-form',
  templateUrl: './produk-form.page.html',
  styleUrls: ['./produk-form.page.scss'],
  standalone: false,
})
export class ProdukFormPage implements OnInit {
  form: FormGroup;

  idUbah: number | null = null;
  tidakDitemukan = false;

  private pesanPerKolom: Record<NamaKolom, Record<string, string>> = {
    nama: { required: 'Nama barang wajib diisi.' },
    kategori: { required: 'Pilih salah satu kategori.' },
    hargaBeli: {
      required: 'Harga beli wajib diisi.',
      bukanAngka: 'Harga beli harus berupa angka, tanpa huruf, titik, atau koma.',
      lebihDariNol: 'Harga beli harus lebih dari 0.',
    },
    hargaJual: {
      required: 'Harga jual wajib diisi.',
      bukanAngka: 'Harga jual harus berupa angka, tanpa huruf, titik, atau koma.',
      lebihDariNol: 'Harga jual harus lebih dari 0.',
    },
    stok: {
      required: 'Stok wajib diisi. Isi 0 kalau barang sedang habis.',
      bukanAngka: 'Stok harus berupa bilangan bulat, tanpa huruf, titik, atau koma.',
      negatif: 'Stok tidak boleh negatif.',
    },
    gambar: { urlTidakValid: 'Alamat foto harus diawali http:// atau https://.' },
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService,
    private animasiService: AnimasiService
  ) {
    // FormGroup dibuat di constructor, bukan di deklarasi field, karena this.fb belum ada saat field diisi.
    // Harga dan stok memakai input teks supaya huruf yang diketik tetap terbaca validator dan bisa diberi pesan.
    this.form = this.fb.nonNullable.group({
      nama: ['', [Validators.required, tidakKosong]],
      kategori: ['', [Validators.required]],
      hargaBeli: ['', [Validators.required, hargaValid]],
      hargaJual: ['', [Validators.required, hargaValid]],
      stok: ['', [Validators.required, stokValid]],
      gambar: ['', [urlFotoValid]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id'] === undefined) {
        return;
      }
      const produk = this.productService.getProductById(Number(params['id']));
      if (!produk) {
        this.tidakDitemukan = true;
        return;
      }
      this.idUbah = produk.id;
      this.form.patchValue({
        nama: produk.nama,
        kategori: produk.kategori,
        hargaBeli: String(produk.hargaBeli),
        hargaJual: String(produk.hargaJual),
        stok: String(produk.stok),
        gambar: produk.gambar,
      });
    });
  }

  /** Pesan hanya muncul untuk kolom yang sudah disentuh dan salah, supaya kolom lain tidak ikut dimarahi. */
  pesanError(kolom: NamaKolom): string {
    const kontrol = this.form.controls[kolom];
    if (!kontrol.invalid || !(kontrol.touched || kontrol.dirty) || !kontrol.errors) {
      return '';
    }
    const kunci = Object.keys(kontrol.errors)[0];
    return this.pesanPerKolom[kolom][kunci] ?? 'Isian ini belum benar.';
  }

  simpan(): void {
    if (this.form.invalid) {
      // Tandai semua kolom supaya semua yang salah langsung bertanda. Isian yang sudah benar tidak disentuh.
      this.form.markAllAsTouched();
      // Tunggu satu giliran supaya kelas .salah sudah terpasang sebelum dicari.
      setTimeout(() => this.animasiService.getarSebentar('app-produk-form ion-item.salah'));
      return;
    }
    const nilai = this.form.getRawValue();
    const data = {
      nama: nilai.nama.trim(),
      kategori: nilai.kategori,
      hargaBeli: Number(nilai.hargaBeli),
      hargaJual: Number(nilai.hargaJual),
      stok: Number(nilai.stok),
      gambar: nilai.gambar.trim(),
    };
    if (this.idUbah !== null) {
      this.productService.ubah(this.idUbah, data);
    } else {
      this.productService.tambah(data);
    }
    this.router.navigate(['/produk']);
  }
}
