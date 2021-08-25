---
sidebar_position: 3
---

# Urutan Operasi

Terdapat begitu banyak operasi yang dapat kita lakukan dengan angka, salah satunya tentu penjumlahan dan pengalian. Tahukah anda, pembagian dan pengalian itu, memiliki "kedudukan" yang tidak setingkat lho!

Di sekolahpun kita telah memelajari bahwa dalam operasi berikut:

```gara
1 + 2 * 3
```

Hasilnya bukanlah 9, melainkan 7. Hal ini dikarenakan kedudukan operator perkalian lebih tinggi daripada operator penjumlahan. Jika terdapat operator yang lebih tinggi, maka operasi yang melibatkan operator tersebut akan dilaksanakan terlebih dahulu. Dengan kata lain, notasi matematika diatas setara dengan:

```gara
1 + (2 * 3)
```

Di Gara pun di semua bahasa pemrograman umum lainnya, operator `+` dan `-` selalu lebih rendah daripada operator `/` (bagi), `*` (kali), `**` (pangkat) dan `%` (modulo).

:::tip Penting
Operator `+` dan `-` lebih rendah daripada operator hitung-hitungan lainnya.
:::


Tetapi, meskipun operator `+` dan `-` selalu lebih rendah daripada operator matematika lainnya, kita bisa menggunakan tanda kurung untuk memaksa agar operator yang lebih rendah memiliki kedudukan yang lebih tinggi daripada biasanya.

Misal, dua baris kode dibawah ini akan menghasilkan nilai yang berbeda.

```gara
cetak(1 + (2 * 3))
cetak((1 + 2) * 3)
```

Baris yang pertama tentu nilainya sama dengan `1 + 2 * 3`, karena ada/tidak-nya tanda kurung `()` tidak memberi makna yang lebih, karena perkalian sudah memiliki posisi yang lebih tinggi daripada penjumlahan.

Namun, lain cerita dengan baris ke-2 dalam kode diatas. Karena operasi `1 + 2` diletakkan didalam kurung, maka operasi tersebut dijalankan terlebih dahulu untuk kemudian hasilnya dikalikan dengan angka `3`.

:::tip Penting
Tanda kurung (`()`) memaksa operator yang semula berkedudukan lebih rendah untuk memiliki kedudukan yang lebih tinggi
:::
