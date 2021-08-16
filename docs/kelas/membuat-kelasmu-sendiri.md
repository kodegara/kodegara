---
sidebar_position: 3
---

# Membuat kelasmu sendiri

Gara memiliki kelas-kelas bawaan seperti `Integer`, `Kata`, `Deret` dan lain sebagainya. Tapi, Gara tidak memiliki kelas seperti `Siswa`. Sama halnya, Gara juga tidak memiliki kelas untuk merepresentasikan `Guru`, `Sekolah`, `Buku`, `Musium`, dan lain sebagainya.

Kenapa?

Bayangkan apa yang terjadi jika Gara harus mendefinisikan seluruh kelas yang ada di dunia ini:

1. Gara menjadi susah dipelajari karena terdapat banyak sekali kelas-kelas yang ada.
2. Gara menjadi terlalu besar untuk dapat didownload dan dipakai, karena ia berisi banyak sekali kode yang sebenarnya hanya diperlukan kasus-per-kasus.
3. Pembuat Gara harus mengerti seluk beluk hal apapun yang ada didunia. Padahal, tidak ada manusia yang dapat menguasai seluruh cabang ilmu untuk membuat representasi kelas secara akurat.

Oleh karena itu, Gara hanya mendefinisikan kelas-kelas dasar. Namun, Gara menyediakan fasilitas bagi para penggunanya untuk membuat kelas mereka sendiri. Justru dengan cara ini pemrogramn dapat mendefinisikan kelasnya masing-masing sesuai dengan apa yang dibutuhkan.

Sebenarnya, kita telah membuat kelas kita sendiri sebelumnya, saat kita bereksperimen dengan `Halo, dunia!`. Untuk membuat suatu kelas, kita menggunakan kata kunci `kelas` disusul dengan nama kelas tersebut:

```gara
kelas Orang {}
```

Kita bisa membuat objek dari suatu kelas dengan cara memanggil fungsi `baru`:

```gara
ada orang = Orang.baru()
```

Kita bisa mengecek apakah suatu objek itu bertipe suatu kelas menggunakan kata kunci `itu`:

```gara
cetak(orang itu Orang)
```

Kode diatas akan menghasilkan nilai logika `benar`. Seluruh objek di Gara bisa kita cek tipenya menggunakan `itu`:

```gara
1 itu Angka
2 itu Angka
"1" itu Kata
benar itu Boolean
```

## Data dalam kelas

Suatu kelas bisa memiliki berbagai data, atau disebut juga sebagai variabel instansi. Katakanlah, setiap `Orang` pasti punya nama, sehingga kita bisa menambahkan `nama` sebagai variabel instansi di kelas `Orang`:

```gara
kelas Orang {
    ada nama
}
```

Kita bisa mengisi suatu variabel instansi seperti dalam contoh berikut:

```gara
ada orang1 = Orang.baru()
orang1.nama = "Rudi"

ada orang2 = Orang.baru()
orang2.nama = "Ferlin"
```

Jika kita memberi nilai untuk variabel instansi yang belum kita `ada`-kan, tentu akan terjadi masalah:

```gara
orang1.umur = 7
```

Agar kita bisa memberi nilai untuk `umur`, kita harus mengadakan `umur` terlebih dahulu:

```gara
kelas Orang {
    ada nama
    ada umur
}
```

Membaca data suatu variabel instansi juga sangat sederhana:

```gara
orang1.nama
```

:::tip Penting
Suatu kelas bisa memiliki berbagai data, atau disebut juga sebagai variabel instansi
:::

## Tingkah laku kelas

Selain menampung data atau variabel instansi, kelas dapat menampung tingkah laku. Dalam pemrograman berorientasi objek, terdapat suatu konsep bernama enkapsulasi. Konsep ini mengatakan bahwa kelas adalah gabungan data dan tingkah laku yang bisa dilakukan pada data tersebut.

Misal, apa yang bisa dilakukan seseorang? Salah satunya adalah memperkenalkan dirinya sendiri. Sehingga, kita bisa menambahkan tingkah laku `perkenalkanDiri` pada kelas `Orang`. Untuk mendefinisikan tingkah laku dalam kelas, kita perlu membuat fungsi.

```gara
kelas Orang {
    ada nama
    ada umur

    fn perkenalkanDiri() {
        cetak("Halo, namaku " + nama + ", aku berumur " + umur + " tahun")
    }
}
```

Sekarang, kelas `Orang` bisa memperkenalkan dirinya sendiri:

```gara
ada orang1 = Orang.baru()
orang1.nama = "Rudi"
orang1.umur = 7
orang1.perkenalkanDiri()
```

Kelas-kelas seperti `Kata`, `Integer`, `Deret` dan banyak kelas lainnya juga memiliki data dan tingkah lakunya masing-masing.

Kelas `Kata` misalnya, memiliki tingkah laku `besar` yang bisa membuat tulisan dalam kata tersebut tercetak dalam huruf besar:

```gara
ada namaHurufKecil = "rudi"
ada namaHurufBesar = namaHurufKecil.besar()
```

Kelas `Integer` misalnya, memiliki tingkah laku `antara?` untuk mengecek apakah angka tersebut diantara dua angka lainnya:

```gara
cetak(5.antara?(1, 10))
cetak(5.antara?(11, 20))
```

Nah, untuk mengetahui apa saja tingkah laku yang bisa dilakukan oleh suatu kelas, kita bisa mencari tahunya _lho_, dengan menggunakan `metode`:

```gara
cetak("adam".metode())
```

Kode diatas akan mencetak deret yang berisi tingkah laku apa saja yang terdapat dalam kelas. Dan benar, suatu tingkah laku dalam kelas disebut sebagai _metode_ dari kelas tersebut.

:::tip Penting
Suatu tingkah laku dalam kelas disebut sebagai _metode_ dari kelas tersebut
:::

## Kesimpulan

Jadi suatu kelas dapat memiliki dua hal:

1. Variabel instansi untuk mencatat data
2. Metode, yakni tingkah laku yang dapat dilakukan suatu kelas terhadap datanya
