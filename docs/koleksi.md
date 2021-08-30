---
sidebar_position: 7
---

# Koleksi

Gara memiliki 3 koleksi bawaan yang utama:

- Deret
- Rangkap
- Peta

## Deret

Deret, yang dibuat dengan tanda `[]`, adalah koleksi untuk menyimpan data apapun secara sambung-menyambung:

```gara
ada angka = [1, 2, 3, 4, 5]
```

Karena sifatnya dimana data sambung-menyambung seperti tali, kita bisa mendapatkan data-data tersebut satu-per-satu dari kiri ke kanan menggunakan operator `[]`, dimana ditengahnya kita sisipkan angka yang disebut sebagai angka indeks. Di Gara, indeks dimulai dari 0:

```gara
cetak(angka[0]) // menyetak 1
cetak(angka[1)] // menyetak 2
cetak(angka[2]) // menyetak 3
```

Untuk menambah angka baru dalam koleksi `angka`, kita dapat menggunakan operasi `+`:

```gara
angka + [6]
```

Untuk mengubah data dalam `Deret`, kita menggunakan sintaksis berikut:

```gara
<variabel-penyimpan-perubahan> = <deret>[<indeks-yang-diubah>: <nilai-barunya>]
```

Misal, deret `angka` diatas berisi nilai `[1, 2, 3, 4, 5]` dan kita ingin mengubah nilai indeks ke-1 yang berisi `2` menjadi `2.5`. Dengan sintaksis diatas, maka kode untuk mengubah data `Deret` adalah:

```gara
angka = angka[1: 2.5]
```

Untuk menghapus data delam `Deret`, kita menggunakan metode `hapusDi`:

```
<variabel-penyimpan-perubahan> = <deret>.hapusDi(<indeks>).akhir
```

Jadi, untuk menghapus elemen dalam sebuah `Deret`, kita perlu tahu posisi elemen tersebut. Katakanlah, kita ingin menghapus nilai `2.5` dalam deret `angka`, kita tahu bahwa posisi (atau indeks) nilai `2.5` dalam deret tersebut adalah `1` (ingat, nilai indeks dimulai dari 0), maka kode untuk menghapus nilai `2.5` adalah:

```gara
angka = angka.hapusDi(1).akhir
```

Pemanggilan `akhir()` diperlukan, karena metode `hapus` mengutus `Rangkap` dengan dua data yakni: pertama, elemen yang terkait dengan kunci yang dihapus, dan kedua adalah objek `Deret` baru tanpa elemen tersebut. Karena objek deret baru tersebut adalah elemen terakhir dari `Rangkap` yang diutus, makanya kita memanggil `akhir`.

Untuk mencari posisi suatu elemen dalam `Deret`, kita bisa menggunakan metode `cari`. Jika terdapat lebih dari satu elemen yang sama, `cari` akan mengutus indeks yang paling dekat.

```gara
angka.cari(3)
```

## Rangkap

`Rangkap`, yang dibuat dengan tanda `<>`, sangat mirip dengan `Deret`. Yang membedakan adalah `Rangkap` tidak dapat ditambahkan dengan elemen baru, dan juga `Rangkap` menggunakan notasi `<>` bukan `[]`:

```gara
ada angka = <1, 2, 3, 4, 5>
```

Indeks dalam `Rangkap` dimulai dari 0, dan diawali dari elemen paling kiri, dan diakhiri dengan elemen paling kanan. Hal yang tentu saja sama dengan `Deret`.

```gara
cetak(angka[0]) // menyetak 1
cetak(angka[1)] // menyetak 2
cetak(angka[2]) // menyetak 3
```

Karena sifatnya yang tidak dapat diubah setelah didefinisikan, kita akan mendapati masalah jika kita mencoba menambahkan elemen baru dalam suatu `Rangkap`:

```gara
angka + [6]
```

### Rangkap::Pabrik

Tipe data `Rangkap` juga memiliki suatu mekanisme yang memungkinkan kita memastikan bahwa rangkap memiliki karakteristik khusus, misalnya terdiri dari 2-rangkap dengan data pertama berupa nama, dan data kedua berupa umur. Untuk membuat pabrik tersebut, kita menggunakan kode seperti berikut:

```gara
ada pabSiswa = Rangkap::Pabrik.baru(["nama", "umur"])
    .kelasUntuk("nama", Kata)
    .kelasUntuk("umur", Integer)

pabSiswa("Adam Notodikromo", 7)
```

Karena dengan menggunakan `Rangkap::Pabrik` kita memberi nama pada data-data dalam rangkap tersebut, kita juga bisa memanggil rangkap menggunakan kuncinya yang berupa `Kata`:

```gara
cetak(siswa["nama"]) // sama dengan siswa[0]
cetak(siswa["umur"]) // sama dengan siswa[1]
```

## Peta

Peta, yang dibuat dengan tanda `{}`, adalah tipe data yang memetakan nilai satu dengan nilai yang lainnya. Misalnya, kita bisa memetakan data Kata `"nama"` ke data Kata `"Gara"` misalnya, dalam `Peta` berikut:

```gara
ada bahasaPemrograman = {
    "nama": "Gara",
    "tglRilis": "17 Agustus"
}
```

Sama halnya dengan `Deret` dan `Rangkap`, untuk mendapatkan data dalam `Peta` kita menggunakan tanda `[]`:

```gara
bahasaPemrograman = bahasaPemrograman["tglRilis": "17 Agustus 2021"]
```

Untuk menambahkan data baru dalam suatu `Peta`, kita juga menggunakan notasi `[]` yang sama:

```
<variabel-penyimpan-perubahan> = <peta>[<kunci>: <nilai>]
```

Misalnya, kita bisa menambahkan data `"kunci"` dalam peta `bahasaPemrograman` sebagai berikut:

```gara
bahasaPemrograman = bahasaPemrograman["versi": "0.1.0"]
```

Untuk menghapus data dalam `Peta`, kita menggunakan metode `hapus` seperti berikut:

```
<variabel-penyimpan-perubahan> = <peta>.hapus(<kunci>).akhir
```

Misal, kode berikut menghapus kunci `"versi"` dari `bahasaPemrograman`:

```gara
bahasaPemrograman = bahasaPemrograman.hapus("versi").akhir
```

Pemanggilan `akhir()` diperlukan, karena metode `hapus` mengutus `Rangkap` dengan dua data yakni: pertama, elemen yang terkait dengan kunci yang dihapus, dan kedua adalah objek `Peta` baru tanpa elemen tersebut. Karena objek peta baru tersebut adalah elemen terakhir dari `Rangkap` yang diutus, makanya kita memanggil `akhir`.

## Hukum kekekalan koleksi

Gara adalah bahasa yang berparadigma fungsional. Salah satu prinsip bahasa ini adalah kekekalan data atau juga disebut dengan imutabilitas. Seluruh koleksi, baik itu `Deret`, `Rangkap` ataupun `Peta` bersifat kekal.

Misalkan, saat kita menambahkan data ke dalam `Deret`, sebenarnya objek `Deret` yang lama tidak berubah:

```gara
ada angka = [1, 2, 3]
angka + [4]
cetak(angka) // [1, 2, 3]
```

Oleh karenanya, untuk menambahkan elemen pada deret, kita perlu mengasosiasikan nilai yang baru ke variabel yang sama:

```gara
ada angka = [1, 2, 3]
angka = angka + [4] // atau: angka += [4]
```

Begitupula saat kita ingin menghapus, kita perlu mengasosiasikan nilai yang baru ke dalam variabel yang sama.

Tapi tentu saja, kita tidak harus mengasosiasikan dengan variabel yang sama:

```gara
ada angka = [1, 2, 3]
ada angkaBaru = angka + [4]
ada angkaBaruLagi = angkaBaru.hapusDi(0).akhir
```

Ketiga variabel diatas akan memiliki nilai yang berbeda, itulah yang dinamakan dengan kekekalan data, karena variabel tersebut memiliki koleksi yang nilainya kekal dan tidak berubah. Tentu saja, `Rangkap` selalu tidak dapat diubah isi nilainya setelah inisialisasi.

Kekekalan data ini memiliki banyak keunggulan, terlebih saat kita perlu mendesain sistem multithreading.

## Kesimpulan

- Semua tipe koleksi di Gara, baik itu `Deret`, `Rangkap`, atau `Peta` bersifat kekal atau _imutabel_.
- `Deret` dibuat dengan tanda `[]`.
- `Rangkap` dibuat dengan tanda `<>`.
- `Peta` dibuat dengan tanda `{}`.
