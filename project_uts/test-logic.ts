import { ProductService } from './src/app/services/product.service';
import { KeranjangService } from './src/app/services/keranjang.service';

const ps = new ProductService();
const ks = new KeranjangService();

// Simulasikan tambah barang baru
const baru = ps.tambah({
  nama: 'Garam 1kg',
  kategori: 'Sembako',
  hargaBeli: 4000,
  hargaJual: 5000,
  stok: 10,
  gambar: ''
});

console.log("Produk baru:", baru);

// Simulasikan masuk keranjang
const p = ps.getProductById(baru.id);
if (p) {
  const hasil = ks.tambah({ id: p.id, nama: p.nama, harga: p.hargaJual, stok: p.stok });
  console.log("Hasil tambah:", hasil);
  console.log("Isi keranjang:", ks.items);
} else {
  console.log("Produk tidak ditemukan!");
}
