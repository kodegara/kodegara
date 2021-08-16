---
sidebar_position: 2
---

# Struktur fungsi

## Struktur fungsi

Apakah pembaca memiliki kalkulator? Apakah pembaca pernah menggunakan kalkulator? Katakanlah kita memiliki fungsi berikut, yang mana angka apapun yang diberikan kedalam fungsi berikut, akan selalu ditambah dengan 1.

```gara
fn tambahSatu(angka) {
    angka + 1
}
```

Ketika kita memicu fungsi diatas:

```gara
tambahSatu(1)
```

Kita akan menerima nilai `2`! Ketika kiti memicu fungsi diatas dengan `tambahSatu(2)`, kita akan menerima nilai `3`.

Fungsi pada hakikatnya memiliki:

- Nilai yang diterima
- Isi fungsi yang berisi langkah-langkah yang akan dilakukan fungsi tersebut
- Nilai yang dihasilkan

Dalam contoh `tambahSatu(1)` diatas, nilai yang diterima adalah `1` dan yang dihasilkan adalah `2`, sedangkan isi fungsinya adalah penjumlahan sederhana:

```gara
angka + 1
```

## Cara membuat fungsi

Fungsi dibuat dengan menggunakan kata kunci `fn` diikuti:

- Nama fungsi
- Argumen fungsi
- Isi fungsi

Atau dalam bentuk kode:

```
fn <nama fungsi> (argumen fungsi) {
    isi fungsi
}
```

Argumen memungkinkan fungsi untuk menerima data:

```
fn sapa(nama) {
    "Hai, " + nama
}
```

Dalam contoh diatas, fungsi `sapa` menerima satu argumen yakni `nama`.

Fungsi yang tidak memiliki argumen, maka tanda kurungnya akan kosong tidak berisi apapun:

```
fn tidur() {
    matikanLampu()
    keKasur()
    pejamkanMata()
}
```

Umumnya semua fungsi memiliki nama, namun ada beberapa fungsi yang tidak memiliki nama. Fungsi-fungsi yang tidak memiliki nama disebut sebagai fungsi anonim.

:::tip Penting

Fungsi yang tidak memiliki nama disebut sebagai fungsi anonim.

:::

## Cara memanggil fungsi

Untuk memanggil fungsi, kita menggunakan operasi yang dinamakan sebagai operasi picu: `()` sebelum nama fungsi yang ingin dipanggil. Diantara tanda kurung tersebut, kita memberi argumen yang dibutuhkan oleh suatu fungsi. Jika fungsi yang kita panggil tidak memiliki argumen, maka tentu isi dari `()`-nya itu sendiri akan kosong. Tapi jika fungsi tersebut memiliki argumen, kita wajib memberi nilai pada masing-masing argumen.

Katakanlah kita memiliki fungsi `sapa` yang memiliki satu argumen bernama `nama`:

```gara
fn sapa(nama) {
    "Hai, " + nama
}
```

Untuk memanggil fungsi, kita tuliskan nama fungsi yang ingin kita panggil, kemudian operasi picu yang didalamnya berisi argumen yang dibutuhkan oleh fungsi tersebut:

```
<fungsi yang akan dipanggil>(<argumen fungsi>)
```

Misal, untuk memanggil fungsi `sapa` diatas:

```gara
sapa("Gara")
```

Tentu saja, jika suatu fungsi tidak memiliki argumen, maka saat pemanggilan kita tidak perlu menuliskan argumen apapun:

```gara
fn sapaGara() {
    cetak("Hai, Gara")
}

sapaGara()
```
