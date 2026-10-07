# Panduan kontribusi

Aturan kerja tim UTS. Riwayat commit ikut dinilai, jadi aturan ini sengaja ketat.

## Branch

```text
main                  selalu bisa dibuild, hanya menerima merge dari Pull Request
feat/<bagian>         fitur baru
fix/<bagian>          perbaikan
docs/<topik>          dokumentasi
```

Satu orang satu branch per bagian. Jangan commit langsung ke `main`.

## Pesan commit

Format: `jenis: ringkasan singkat dalam bahasa Indonesia`

| Jenis | Dipakai untuk |
|---|---|
| `feat` | fitur baru |
| `fix` | perbaikan bug |
| `style` | tampilan (SCSS), tanpa mengubah logic |
| `refactor` | merapikan tanpa mengubah perilaku |
| `docs` | dokumentasi |
| `chore` | konfigurasi dan dependensi |

Contoh yang baik: `feat: tambah pencarian produk real-time dengan ngModel`.
Contoh yang tidak dipakai: `update`, `fix`, `final`, `revisi 3`.

Satu commit untuk satu hal yang bisa dijelaskan dalam satu kalimat.

## Alur kerja harian

```powershell
git checkout main
git pull
git checkout -b feat/nama-bagian
# kerjakan, commit kecil-kecil
git push -u origin feat/nama-bagian
```

Lalu buka Pull Request ke `main` di GitHub. Perintah dijalankan satu per baris (Windows PowerShell 5 tidak mengenal `&&`).

## Sebelum membuka Pull Request

- `npm run build` lolos tanpa error.
- Konsol browser bersih.
- Alur yang diubah sudah diklik sendiri, di mode terang dan gelap.
- Perubahan pada berkas milik anggota lain sudah disepakati dengan pemiliknya.

## Pull Request

- Dibaca minimal satu anggota lain sebelum merge.
- Merge dengan **Create a merge commit** atau **Rebase and merge**. **Jangan Squash**, karena menghapus commit satu per satu yang akan diperiksa dosen.

## Larangan

- `git push --force` pada `main`.
- Meng-commit `node_modules`, `dist`, `www`, atau `.angular`.
- Menimpa berkas anggota lain tanpa sepengetahuannya.
