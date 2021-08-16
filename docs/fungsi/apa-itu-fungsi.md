---
sidebar_position: 1
---

# Apa itu fungsi?

## Apa itu fungsi?

Fungsi adalah langkah-langkah untuk mencapai suatu tujuan. Katakanlah kita akan pergi ke suatu pesta ulang tahun, mungkin kita akan memiliki fungsi berikut:

```gara
fn pergiKePesta() {
    mandi()
    pakaiBaju()
    pakaiCelana()
    sisiran()
    pakaiSepatu()
    datangKePesta()
}
```

Dalam contoh diatas, kita memiliki fungsi `pergiKePesta()` yang berisi cara-cara agar kita, atau suatu objek, bisa pergi ke pesta. Ketika fungsi `pergiKePesta` tersebut dipicu, maka baris-baris kode didalamnya akan dipicu juga, mulai dari `mandi()`, `pakaiBaju()`, hingga `datangKePesta()`.


:::tip Penting

Fungsi adalah langkah-langkah untuk mencapai suatu tujuan

:::


## Kenapa kita memiliki fungsi?

### Menyederhanakan program

Fungsi adalah cara kita bisa menyederhanakan program. Dalam contoh fungsi `pergiKePesta` diatas, perhatikan bahwa kita juga memanggil fungsi `pakaiSepatu()`. Perhatikan bahwasannya kita tidak peduli langkah-langkah apa saja yang diambil untuk mencapat tujuan dalam memakai sepatu, kita hanya peduli bahwa objek tersebut memakai sepatu.

Sebagai catatan, katakanlah fungsi `pakaiSepatu()` memiliki langkah berikut:

```gara
fn pakaiSepatu() {
    pilihSepatu()
    pasangSepatu()
    taliSepatu()
}
```

Dengan adanya fungsi, kita menyederhanakan langkah-langkah pemakaian sepatu kedalam satu fungsi yang bisa dipanggil. Jika kita tidak memiliki fungsi `pakaiSepatu`, maka program kita akan terlihat lebih rumit dan kurang terstruktur:

```gara
fn pergiKePesta() {
    mandi()
    pakaiBaju()
    pakaiCelana()
    sisiran()
    pilihSepatu()
    pasangSepatu()
    taliSepatu()
    datangKePesta()
}
```

Itu baru tentang sepatu, bayangkan bila `mandi()`, `pakaiBaju()` dan sebagainya tidak disederhakan dalam bentuk fungsi, maka fungsi `pergiKePesta` akan sangat panjang dan susah dipahami.

### Sebagai alat pengulangan

Sebelumnya untuk diketahui, kode berikut hanyalah ilustrasi dan contoh suatu masalah. Kode berikut tidak dapat dieksekusi.

Katakanlah kita memiliki dua buah file:

- a.txt
- b.txt

Kita ingin membaca isi kedua buah file tersebut, untuk kemudian dibandingkan apakah isi dari dua file tersebut sama atau tidak.

Kita bisa melakukan hal berikut:

```gara
ada fileA = fileUntuk("a.txt")
ada fileB = fileUntuk("b.txt")
```

Kemudian, kita membaca datanya:

```gara
ada dataFileA = ""
ada dataFileB = ""

selama fileA.adaBarisSelanjutnya? {
    dataFileA += fileA.bacaBarisSelanjutnya()
}

selama fileB.adaBarisSelanjutnya? {
    dataFileB += fileB.bacaBarisSelanjutnya()
}
```

Kemudian bisa kita bandingkan apakah isi file `a.txt` dan `b.txt` sama atau tidak:

```gara
ada fileSamaIsi = dataFileA == dataFileB
```

Pada contoh kasus diatas dapat kita amati bahwa metode untuk membaca file sebenarnya sama. Dan memang, karena pada hakikatnya komputer diciptakan agar dapat menjalankan tugas yang sama terus-menerus, akan ada banyak hal yang sebenarnya berulang-ulang dalam pemrograman yang sekali lagi dapat kita sederhanakan dalam bentuk fungsi.

Dalam kasus ini, contoh diatas dapat dijadikan fungsi `bacaFile` yang memiliki langkah sebagai berikut:

```gara
fn bacaFile(alamatFile) {
    ada file = fileUntuk(alamatFile)
    ada data = ""

    selama file.adaBarisSelanjutnya? {
        data += file.bacaBarisSelanjutnya()
    }

    data
}
```

Kemudian, kita dengan mudah melakukan hal berikut:

```gara
ada fileSamaIsi = bacaFile("a.txt") == bacaFile("b.txt")
```

Bahkan, saat kita perlu membaca file `c.txt`, kita hanya perlu memanggil fungsi `bacaFile("c.txt")` tanpa perlu mengulang mengetik langkah-langkah cara membaca isi filenya lagi, karena kita telah menyederhanakan langkah-langkah tersebut kedalam fungsi yang sama: `bacaFile`.
