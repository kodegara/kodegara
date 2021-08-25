---
sidebar_position: 1
---

# Integer

## Apa itu bilangan Integer?

Saat kita SD kelas 1, kita telah mengenal angka-angka seperti 1, 2, 3, 4 dan seterusnya. Naik ke kelas 2 dan 3, kita mulai mengenal angka negatif seperti -1, -2, -3 dan seterusnya. Ada juga angka yang tidak negatif, juga tidak positif, yakni 0. Seluruh angka-angka tersebut dalam Gara disebut sebagai `Integer`, atau yang dalam ruangan kelas disebut sebagai bilangan bulat.

:::tip Penting
`Integer` di dalam ruangan kelas disebut sebagai bilangan bulat.
:::

## Operasi-operasi untuk bilangan Integer

Operasi matematika yang bisa kita lakukan dengan angka-angka Integer adalah:

- Penjumlahan (`6 + 2`)
- Pengurangan (`6 - 2`)
- Pengalian (`6 * 2`)
- Pembagian (`6 / 2`)
- Pemangkatan (`6 ** 2`, sama dengan `6 * 6`)
- Sisa hasil bagi, atau disebut dengan modulo (`6 % 2` mengutus `0` karena pembagian 6 oleh 2 menyisahkan 0)

Kita juga bisa membandingkan angka satu dengan angka lainnya. Melakukan pembandingan antara dua angka akan menghasilkan nilai `Boolean`. Berikut operasi pembandingan yang dapat kita lakukan:

- Sama dengan (`1 == 0` mengutus `salah`)
- Lebih dari (`1 > 0` mengutus `benar`)
- Kurang dari (`1 < 0` mengutus `salah`)
- Lebih atau sama dengan (`1 >= 0` mengutus `benar`)
- Kurang atau sama dengan (`1 <= 0` mengutus `salah`)

## Integer dalam variabel

Seperti halnya tipe data lainnya, objek-objek `Integer` dapat ditempatkan ke dalam variabel:

```gara
ada totalHarga = 12000
ada dibeli = 1
ada hargaPerBarang = totalHarga / dibeli
```

Ketika suatu variabel berisi angka, kita bisa melakukan operasi-operasi yang disebut sebagai operasi lapis:

```gara
ada nilai = 0
nilai += 5
nilai -= 1
nilai *= 4
nilai /= 2
```

Operasi lapis seperti `+=` misalnya, dapat dibaca sebagai: penjumlahan variabel yang berisi angka dengan angka lain disisi kanan operator.

Berarti, jika kita melakukan:

```gara
ada nilai = 1
nilai += 5
```

Kode diatas sama artinya dengan kode dibawah ini:

```gara
ada nilai = 1
nilai = nilai + 5
```

Dalam kasus diatas, `nilai` bernilai `6`.

Untuk operasi penjumlahan (`+`) dan pengurangan (`-`), terdapat pula `++` dan `--` yang berarti menambahkan nilai `1` ke variabel. Sehingga, kode berikut nilainya sama dengan `nilai += 1`.

```gara
ada nilai = 0
nilai++
```

:::tip Penting
`Integer` yang ditempatkan dalam variabel dapat menerima operasi lapis dan juga operasi `++` dan `--`.
:::
