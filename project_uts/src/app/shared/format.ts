/** 12000 menjadi "Rp 12.000". */
export function formatRupiah(angka: number): string {
  return 'Rp ' + angka.toLocaleString('id-ID');
}

/** Gambar bawaan untuk produk tanpa foto. Berupa data URI, jadi tidak butuh berkas gambar. Sama dengan yang dipakai daftar produk. */
export const GAMBAR_BAWAAN =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#E7E4D6"/><path d="M30 46 60 32l30 14v32L60 92 30 78z" fill="none" stroke="#5A5D63" stroke-width="3"/><path d="M30 46 60 60l30-14M60 60v32" fill="none" stroke="#5A5D63" stroke-width="3"/></svg>'
  );
