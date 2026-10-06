import { AbstractControl, ValidationErrors } from '@angular/forms';

/** Nama yang isinya spasi saja dianggap kosong. Kuncinya 'required' supaya memakai pesan yang sama. */
export function tidakKosong(kontrol: AbstractControl): ValidationErrors | null {
  const nilai = kontrol.value;
  if (typeof nilai === 'string' && nilai.length > 0 && nilai.trim() === '') {
    return { required: true };
  }
  return null;
}

/** Harga: bilangan bulat lebih dari 0. Kolom kosong diurus Validators.required. */
export function hargaValid(kontrol: AbstractControl): ValidationErrors | null {
  const nilai = String(kontrol.value ?? '').trim();
  if (nilai === '') {
    return null;
  }
  if (/^-\d+$/.test(nilai)) {
    return { lebihDariNol: true };
  }
  if (!/^\d+$/.test(nilai) || !Number.isSafeInteger(Number(nilai))) {
    return { bukanAngka: true };
  }
  return Number(nilai) > 0 ? null : { lebihDariNol: true };
}

/** Stok: bilangan bulat, 0 boleh, negatif tidak. */
export function stokValid(kontrol: AbstractControl): ValidationErrors | null {
  const nilai = String(kontrol.value ?? '').trim();
  if (nilai === '') {
    return null;
  }
  if (/^-\d+$/.test(nilai)) {
    return { negatif: true };
  }
  if (!/^\d+$/.test(nilai) || !Number.isSafeInteger(Number(nilai))) {
    return { bukanAngka: true };
  }
  return null;
}

/** Alamat foto boleh kosong. Kalau diisi, harus diawali http:// atau https://. */
export function urlFotoValid(kontrol: AbstractControl): ValidationErrors | null {
  const nilai = String(kontrol.value ?? '').trim();
  if (nilai === '') {
    return null;
  }
  return /^https?:\/\/\S+$/i.test(nilai) ? null : { urlTidakValid: true };
}
