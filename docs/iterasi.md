---
sidebar_position: 8
---

# Iterasi

Bagaimana cara kita mencetak angka dari 0 hingga 10? Tentu saja, kita bisa mencetak angka tersebut satu per satu sebagai berikut:

```gara
cetak(0)
cetak(1)
cetak(2)
cetak(3)
cetak(4)
cetak(5)
cetak(6)
cetak(7)
cetak(8)
cetak(9)
cetak(10)
```

Terus, bagaimana kalau kita ingin mencetak angka dari 0 hingga 100? Menulis satu per satu? Tentu _capek_ bukan? Solusinya adalah: iterasi!

Terdapat 3 jenis iterasi dalam Gara:

- Iterasi dari satu titik ke titik lainnya
- Iterasi selama belum mencapai suatu titik
- Iterasi fungsional

## Iterasi dari satu titik ke titik lainnya

Sebelumnya, kita mencetak satu-per-satu angka dari `0` hingga `10`. Gara memiliki sintaksis iterasi `dari` yang memiliki struktur sebagai berikut:

```
dari ada <nama-variabel> = <kondisi-awal>; <pengecek>; <pengubah> {
    <baris-baris kode>
}
```

Mari kita gunakan iterasi `dari` untuk mencetak angka dari `0` hingga `10`:

```gara
dari ada i = 0; i <= 10; i++ {
    cetak(i)
}
```

Sangat sederhana bukan? Bahkan, dengan mengganti angka `10` diatas menjadi `100`, kita bisa mencetak angka dari 0 hingga 100, tanpa satu per satu menulis kode `cetak(0)` hingga `cetak(100)`.

Contoh lainnya, kode dibawah ini mencetak angka ganjil saja dari 1 hingga 1000.

```gara
dari ada angka = 1; angka <= 1000; angka++ {
    jika angka % 2 == 1 {
        cetak(angka)
    }
}
```

Bentuk iterasi ini sering digunakan saat batas awal dan batas akhir kode iterasi itu sendiri sudah diketahui.

:::tip Penting
Bentuk iterasi ini sering digunakan saat batas awal dan batas akhir kode iterasi itu sendiri **sudah** diketahui.
:::

## Iterasi selama belum mencapai suatu titik

Iterasi `selama` memiliki struktur sebagai berikut:

```
selama <pengecek> {
    <baris-baris kode>
}
```

Dengan operasi iterasi `selama`, selama kode `<pengecek>` diatas bernilai `benar`, maka operasi akan tetap dilakukan.

Hal ini, memungkinkan kita menulis kode yang bisa dieksekusi tiada hentinya (harap jangan ketik kode berikut atau komputer anda bisa saja hang):

```gara
selama benar {
    cetak("aku mengulang dan terus mengulang...")
    cetak("hingga sirna dunia ini...")
    cetak("atau komputer ini direstart...")
    cetak("atau tab peramban ini engkau tutup...")
    cetak("atau usahlah kau coba jalankan kode ini...")
}
```

Contoh kode berikut mencetak angka selama nilainya kurang dari `11`:

```gara
ada i = 0
selama i < 11 {
    cetak(i)
    i += 1
}
```

Bentuk iterasi ini sering digunakan jika batas awal dan batas akhir iterasi itu sendiri susah untuk diketahui.

Katakanlah, kita sendiri sebagai manusia selalu makan selama lapar. Tapi kita tidak tahu, kapan kita lapar, dimenit berapa, dan sebagainya. Dalam artian, batas awal dan batas akhirnya tidak diketahui. Dalam kasus tersebut, kita menggunakan kode iterasi `selama`.

```gara
selama aku.lapar? {
    aku.tetapMakan
    jika aku.tersendat {
        aku.minum
    }
}
```

Contoh lainnya adalah ketika baris pengecek berisi operasi-operasi `Boolean`. Misalnya, selama ruang bioskop belum penuh dan film belum diputar dan stok popcorn sudah hampir habis, kita masak popcorn. Kita bisa menuliskannya dengan kode berikut:

```gara
selama !ruang.penuh? && !film.diputarDi(ruang)? && popcorn.hampirHabis? {
    masakPopcorn()
}
```

:::tip Penting
Bentuk iterasi ini sering digunakan jika batas awal dan batas akhir iterasi itu sendiri **susah** diketahui.
:::

## Iterasi fungsional

Jika kita memiliki suatu `Deret` berisi angka `[0, 1, 2, 3, 4, 5]`, bagaimana cara kita mencetaknya?

Tentu, kita bisa menggunakan iterasi `dari` sebagai berikut:

```gara
ada derAngka = [0, 1, 2, 3, 4, 5]

dari ada i = 0; i < derAngka.panjang; i++ {
    cetak(i)
}
```

Atau, karena Gara adalah bahasa fungsional, beberapa data di Gara memiliki fungsi-fungsi yang dapat membantu kita untuk melakukan iterasi. Dalam contoh kasus `Deret`, kita bisa menggunakan metode `Deret.tiap`:

```gara
ada derAngka = [9, 1, 2, 3, 4, 5]

derAngka.tiap(fn (angka) {
    cetak(angka)
})
```

Selain itu, metode `tiap` dalam `Deret` juga dapat diberi aripicu dengan dua argumen:

```gara
ada teman = ["Ferlin", "Ian", "Wendy"]
teman.tiap(fn (nama, idk) {
    cetak(nama + " ada pada indeks ke-" + idk)
})
```

`Peta` pun juga memiliki metode `tiap` yang menerima fungsi dengan dua argumen: `kunci` dan `nilai`.

Iterasi fungsional ini tentu dapat kita gunakan selama ia memenuhi kebutuhan kita. Biasanya, kode iterasi fungsional ini jauh lebih mudah & lebih enak untuk dibaca, sehingga jika memungkinkan, baiknya kita gunakan iterasi fungsional ini sebanyak mungkin.

## Pemutusan iterasi

Iterasi dalam Gara dapat diputuskan kapanpun menggunakan kata kunci `putus`.

```gara
selama benar {
    cetak("aku mengulang dan terus mengulang...")
    cetak("hingga sirna dunia ini...")
    cetak("atau komputer ini direstart...")
    cetak("atau tab peramban ini engkau tutup...")
    cetak("atau usahlah kau coba jalankan kode ini...")

    putus
    cetak("aku tidak lagi mengulang-ulang")
}
```

Kata kunci `putus` ini dapat digunakan dalam iterasi apapun, baik itu iterasi `dari`, iterasi `selama` ataupun iterasi fungsional. Namun, penggunaan `putus` diluar konteks tersebut akan menjadi masalah.
