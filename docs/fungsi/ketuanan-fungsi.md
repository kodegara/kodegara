---
sidebar_position: 3
---

# Ketuanan Fungsi

Gara adalah bahasa yang fungsional. Salah satu fitur utama bahasa fungsional adalah ketuanan fungsi (_first-class function_) dimana fungsi adalah data yang memungkinkan fungsi untuk diciptakan, ditempatkan, dan diutuskan.

Contoh penciptaan fungsi:

```gara
fn (nama) { "Hai, " + nama }
```

Contoh penempatan fungsi pada variabel:

```gara
ada sapa = fn (nama) { "Hai, " + nama }
```

Contoh penempatan fungsi sebagai argumen picu suatu fungsi lainnya:

```gara
fn hitung(operasi, angka1, angka2) { operasi(angka1, angka2) }
fn tambah(angka1, angka2) { angka1 + angka2 }
hitung(tambah, 1, 2)
```

Contoh fungsi yang diutuskan:

```gara
ada tambah = fn (jumlah) { fn (n) { jumlah + n } }
ada tambah5 = tambah(5)
```

Dan karena Gara adalah bahasa pemrograman berbasis objek, semua fungsi adalah instansi dari kelas `Fungsi`.

:::tip Penting

Ketuanan fungsi memungkinkan fungsi untuk diciptakan, ditempatkan, dan diutuskan

:::
