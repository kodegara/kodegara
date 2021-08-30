---
sidebar_position: 2
---

# Melempar masalah

## Menggunakan `lempar`

Katakanlah, kita ingin membuat suatu fungsi yang mengubah dari detik ke menit. Kita ketahui bahwa dalam satu menit terdapat 60 detik. Maka, mula-mula kode program tersebut adalah sebagai berikut:

```gara
fn detikKeMenit(detik) {
    ada menit = detik / 60
    ada detikSisa = detik % 60

    utus <menit, detikSisa>
}
```

Fungsi `detikKeMenit` tersebut mengutus suatu `Rangkap` dimana elemen pertama adalah menit, dan elemen kedua adalah detik. Jadi, jika kita memicu fungsi tersebut dengan argumen `89`, kita akan dapati nilai `<1, 29>` karena 89 detik sama dengan 1 menit 29 detik.

```gara title="Memanggil fungsi detikKeMenit"
detikKeMenit(89)
```

Namun, apa yang terjadi jika kita memanggil `detikKeMenit` dengan argumen angka yang tidak seharusnya, misalnya: `-1`? Kita akan dapati nilai `<0, -1>` diutus dari pemanggilan fungsi `detikKeMenit(-1)`. Hal ini tentu tidak kita inginkan.

Yang kita inginkan adalah, jika suatu program atau suatu fungsi tidak dapat dijalankan sebagaimana mestinya, maka harusnya fungsi tersebut melempar masalah, sehingga kode-kode selanjutnya tidak dijalankan karena program sedang bermasalah.

Untuk melakukan hal tersebut, kita menggunakan kata kunci `lempar` yang memiliki sintaksis sebagai berikut:

```
lempar <pesan kata>
```

Yang dapat kita adopsi sehingga fungsi `detikKeMenit` menjadi:

```gara
fn detikKeMenit(detik) {
    jika detik < 0 {
        lempar "argumen detik harus angka >= 0"
    }

    ada menit = detik / 60
    ada detikSisa = detik % 60

    utus <menit, detikSisa>
}
```

:::tip Penting
Suatu fungsi sebaiknya melempar masalah jika fungsi tersebut tidak dapat dijalankan sebagaimana mestinya.
:::

Meskipun fungsi `detikKeMenit` sekarang sudah aman dari angka-angka yang tidak diinginkan, fungsi tersebut akan tetap bermasalah jika argumen `angka` bukan berjenis `Angka`. Misalnya, jika kita memicu `detikKeMenit(benar)` maka akan terjadi masalah sebagai berikut:

```
ERROR MasalahEksekusi: kesalahan tipe: Boolean < Integer
```

Hal ini dikarenakan kita tidak bisa melakukan operasi pembandingan `<` antara nilai `benar` yang bertipe data `Boolean` dengan nilai `0` yang bertipe data `Integer`.

Agar pesan masalah lebih mudah difahami, kita bisa melempar masalah kita sendiri sebagai mana dicontohkan dalam kode berikut:

```gara
fn detikKeMenit(detik) {
    jika !(detik itu Angka) {
        lempar "fungsi hanya menerima 1 argumen Angka"
    }

    jika detik < 0 {
        lempar "argumen detik harus angka >= 0"
    }

    ada menit = detik / 60
    ada detikSisa = detik % 60

    utus <menit, detikSisa>
}
```

Nah, kita telah pelajari bagaimana melempar masalah menggunakan kata kunci `lempar`.

Namun, sebelum kita akhiri diskusi penggunaan kata kunci `lempar`, perhatikan bahwa `lempar` akan selalu melempar `MasalahEksekusi`. Jika kita ingin melempar masalah dengan kelas selain `MasalahEksekusi`, kita bisa menggunakan sintaksis berikut:

```
lempar <kelas masalah>.baru(<pesan masalah>)
```

Misalnya:

```gara
lempar MasalahArgumen.baru("tidak dapat menerima objek berkelas Integer")
```

## Melakukan tuntutan

Kebanyakan masalah terjadi karena suatu tuntutan yang tidak terpenuhi. Gara memiliki kata kunci `tuntut` yang memudahkan kita melakukan suatu tuntutan. Jika tuntutan tersebut tidak terpenuhi, maka masalah akan timbul.

:::tip Penting
Jika tuntutan tidak terpenuhi (bernilai sesalah), masalah akan timbul.
:::

Misalnya, kode dibawah ini akan melempar `MasalahTuntutan` karena `salah` berarti tuntutan tersebut tidak dipenuhi:

```gara
tuntut salah
```

Sedangkan kode berikut tidak akan bermasalah, karena tuntutan dipenuhi:

```gara
tuntut benar
```

Dengan demikian, kita bisa mengubah fungsi `detikKeMenit` sebagai berikut:

```gara
fn detikKeMenit(detik) {
    tuntut detik itu Angka
    tuntut detik >= 0

    ada menit = detik / 60
    ada detikSisa = detik % 60

    utus <menit, detikSisa>
}
```

Sekarang, jika kita memicu fungsi `detikKeMenit` dengan argumen yang tidak diinginkan, misalnya `detikKeMenit(benar)`, maka kita akan mendapati masalah sebagai berikut:

```
ERROR MasalahTuntutan: tuntutan tidak terpenuhi: (detik itu Angka)
```

Jika dilihat-lihat, pesan yang tercetak `(detik itu Angka)` sangat-sangat tidak mudah difahami. Untuk memberi pesan ketika suatu tuntutan tidak terpenuhi, kita bisa menggunakan sintaksis sebagai berikut:

```
tuntut <logika tuntutan>: <pesan jika tuntutan tidak terpenuhi>
```

Sehingga, kita dapat memiliki kode sebagai berikut:

```gara
fn detikKeMenit(detik) {
    tuntut detik itu Angka: "argumen harus berupa Angka"
    tuntut detik >= 0: "detik harus >= 0"

    ada menit = detik / 60
    ada detikSisa = detik % 60

    utus <menit, detikSisa>
}
```

## Kesimpulan

Kita bisa melempar suatu masalah menggunakan sintaksisnya yang paling sederhana, yakni:

```
lempar <logika tuntutan>
```

Atau, melempar kelas masalah tertentu:

```
lempar <kelas masalah>.baru(<pesan masalah>)
```

Selain itu, kita bisa melakukan suatu tuntutan. Jika tuntutan tidak dipenuhi, maka `MasalahTuntutan` akan dilempar. Sintaksis untuk melakukan suatu tuntutan adalah sebagai berikut:

```
tuntut <logika tuntutan>
```

Atau, jika ingin dengan pesan tertentu:

```
tuntut <logika tuntutan>: <pesan jika tuntutan tidak terpenuhi>
```
