---
sidebar_position: 4
---

# Jenis-jenis fungsi

Terdapat 3 jenis fungsi, atau aripicu, dalam Gara:

- Metode
- Fungsi bebas
- Fungsi statis

## Metode

Setiap data dalam Gara adalah objek dan setiap objek itu sendiri berasal dari suatu kelas. Sebelumnya kita pernah diskusikan bagaimana suatu [kelas bisa memiliki tingkah laku](/docs/kelas/membuat-kelasmu-sendiri#tingkah-laku-kelas). Tingkah laku itulah yang disebut sebagai _metode_. Jadi, metode adalah fungsi yang didefinisikan di dalam kelas, dan terikat dengan objek dari kelas tersebut.

:::tip Penting

Metode adalah fungsi yang didefinisikan di dalam kelas, dan terikat dengan objek dari kelas tersebut

:::

Kita akan membuat kelas `Negara` yang akan kita lengkapi satu per satu dengan berbagai contoh fungsi.

```gara
kelas Negara {
    ada nama = ""
    ada luasTanah = 0.0
    ada kota = []

    // menghitung kepadatan penduduk per 1km2
    fn kepadatan(jmlPenduduk) {
        1.0 * jmlPenduduk / luasTanah
    }
}
```

Kelas `Negara` diatas memiliki suatu metode bernama `kepadatan` untuk menghitung kepadatan penduduk per 1km persegi di suatu negara. Mari kita coba:

```gara
ada nkri = Negara.baru()
nkri.nama = "Indonesia"
nkri.luasTanah = 1811570
cetak("Terdapat " + nkri.kepadatan(276730535) + " penduduk per 1km2 di " + nkri.nama)
```

Dengan menjalankan [kode diatas](https://garatadika.herokuapp.com/negara-kepadatan-1), kita akan mendapatkan hasil berikut:

```
Terdapat 152.75729615747667 penduduk per 1km2 di Indonesia
```

## Fungsi statis

Fungsi statis hampir mirip dengan metode karena sama-sama berada dalam kelas. Bedanya, fungsi statis didefinisikan menggunakan `fn sta` sedangkan metode didefinisikan menggunakan `fn` saja. Bedanya lagi, fungsi statis adalah milik kelas, sedangkan metode dimiliki oleh instansi suatu kelas.

```gara
kelas Matematika {
    fn sta maksimal(angka1, angka2) {
        jika angka1 == angka2 {
            angka1
        } lain jika angka1 > angka2 {
            angka1
        } lain {
            angka2
        }
    }
}

Matematika.maksimal(24, 22)
```

:::tip Penting
Fungsi statis adalah milik kelas, sedangkan metode dimiliki oleh instansi suatu kelas
:::

## Fungsi bebas

Fungsi bebas adalah fungsi yang tidak terikat oleh suatu objek. Fungsi ini dapat ditempatkan pada variabel:

```gara
ada sapa = fn (nama) { "Hai, " + nama }
```



Pada contoh diatas, kita membuat suatu fungsi bebas baru yang kemudian kita tempatkan pada variabel `sapa`. Karena `sapa` adalah suatu variabel yang berisi fungsi, kita bisa memicunya seperti pada contoh diatas. Menjalankan [kode diatas](https://garatadika.herokuapp.com/sapa-fungsi-bebas) akan menghasilkan keluaran:

```
Hai, Gara
```

## Perbedaan fungsi dan metode

Fungsi dan metode sama-sama diadakan menggunakan kata kunci `fn`, namun ada perbedaan diantara keduanya. Pertama, dari segi penempatan, metode adalah fungsi yang diciptakan dalam sebuah kelas, dan menjadi bagian dari instansi kelas tersebut. Sedangkan fungsi selalu diciptakan diluar kelas, atau, saat fungsi diciptakan didalam kelas namun terdapat kata kunci `sta` yang berarti fungsi tersebut adalah fungsi statis.

Kedua, ketika kita menyebut pengenal metode/fungsi statis di dalam kelas, meski tanpa operator picu (`()`), Gara akan mengartikan itu sebagai perintah pemicuan ([demo](https://garatadika.herokuapp.com/kelas-metode-picu-tanpa-operasi-picu)):

```gara
kelas Xyz {
    fn sta c() {
        cetak("c() terpicu")
    }

    fn a() {
        cetak("a() terpicu")
    }

    fn b() {
        a
        Xyz.c
    }
}

Xyz.baru().b()
```

Perhatikan bahwa pada konteks pemicuan metode `b` diatas, kita hanya menyebut `a` dan `Xyz.c` tanpa melakukan pemicuan. Namun, Gara mengartikan itu sebagai pemicuan.

Ketika kita menyebut pengenal fungsi diluar kelas dan objek, maka kita akan mendapatkan fungsi itu sendiri, bukan hasil dari pemicuan fungsi tersebut.

```gara
ada a = fn () { "a() terpicu" }
ada b = a
cetak(b)
cetak(b())
```

Pada [contoh kasus](https://garatadika.herokuapp.com/fungsi-penempatan-pemicuan) diatas, kita menciptakan fungsi anonim dan menempatkannya ke dalam variabel `a`. Kemudian, kita menyebut variabel `a` dan menempatkannya ke dalam variabel `b`. Perhatikan bahwa dalam kasus ini, `a` tidak dipicu oleh Gara. Sebaliknya, kini variabel `b` berisi fungsi yang sama dengan variabel `a`.

Perbedaan ini ada karena di dalam kelas, pengguna tidak diperkenankan untuk mendapatkan aripicu itu sendiri. Sehingga, mau tidak mau penyebutan nama dari suatu aripicu dianggap oleh Gara sebagai pemicuan. Sedangkan diluar kelas dan objek, penyebutan pengenal suatu fungsi, tanpa operasi picu (`()`), akan mengutus fungsi itu sendiri.
