---
sidebar_position: 3
---

# Membuat kelas masalah sendiri

Terlepas dari [kelas-kelas masalah bawaan](/docs/catatan/daftar-masalah), kita juga bisa membuat kelas masalah kita sendiri, _lho_, menggunakan sintaksis berikut:

```gara
kelas <nama masalah> -> <kelas masalah punca> {
    <baris-baris kode jika diperlukan>
}
```

Dalam sintaksis diatas, suatu kelas masalah harus menurun dari kelas masalah lain. Jika bingung kelas apa yang menjadi kelas punca, ada baiknya kita gunakan kelas `MasalahEksekusi`.

:::tip Penting
Suatu kelas masalah harus menurun dari kelas masalah lain.
:::

Nah, katakanlah kita ingin membuat kelas masalah kita sendiri. Misalnya, kita dapat membuat kelas `MasalahWaktu` sebagai berikut:

```gara
kelas MasalahWaktu -> MasalahEksekusi {}
```

Yang kemudian dapat kita `lempar` dengan kode berikut ini:

```gara
lempar MasalahWaktu.baru("waktu hanyalah ilusi")
```

Untuk program-program sederhana, tentu kita tidak perlu membuat kelas-kelas masalah kita sendiri. Kita tentu bisa menggunakan kelas-kelas masalah yang sudah ada.
