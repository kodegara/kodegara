---
sidebar_position: 3
---

# Fungsi itu sama

Fungsi itu sama? Sama dengan apa?

Gara adalah bahasa yang fungsional. Salah satu fitur utama bahasa fungsional adalah fungsi yang setaraf dengan tipe data lain (_first-class function_), yang memungkinkan fungsi untuk diciptakan, ditempatkan, dan diutuskan.

Contoh penciptaan suatu objek fungsi, yang merupakan fungsi anonim:

```gara
fn (nama) { "Hai, " + nama }
```

Contoh penempatan suatu fungsi pada suatu variabel:

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

Prinsip fungsi yang setaraf memungkinkan fungsi untuk dapat diciptakan dimanapun, ditempatkan ke variabel, dan diutuskan dari fungsi lain

:::

Di bahasa pemrograman yang hanya berbasis objek seperti Java, kita tidak bisa menempatkan fungsi ke variabel, atau mengutus fungsi dari fungsi lainnya. Oleh karena itu, dikatakanlah bahwa fungsi itu setaraf, yang maksudnya fungsi itu tak ubahnya seperti data-data lainnya di Gara yang bisa diciptakan, diutus, ditempatkan.
