---
sidebar_position: 5
---

# Variabel

Variabel adalah tempat untuk menyimpan data. Kita telah berkali-kali membuat variabel sebelumnya. Ingatkah kamu, ketika kita melakukan hal ini, sebenarnya kita membuat suatu variabel:

```gara
ada orang = Orang.baru()
```

Kita membuat suatu variabel bernama `orang` yang berisi data berupa objek dari kelas `Orang`.

Iya, kita membuat suatu variabel menggunakan kata kunci `ada`:

```gara
ada namaVariabel
```

Saat kita membuat, atau mendeklarasikan, suatu variabel, kita bisa mengisinya dengan data, atau membiarkannya kosong seperti pada contoh diatas. Variabel yang dideklarasikan tanpa data, akan berisi nilai `nil`, suatu konsep dalam pemrograman yang berarti tidak adanya data.

Tentu saja, kita kemudian bisa mengisinya dengan data:

```gara
namaVariabel = 123
```

Dalam contoh diatas, kita mengisi variabel `namaVariabel` dengan nilai `123` yang tidak lain adalah suatu `Integer`.

Jika kita mencoba mengisi data pada variabel yang belum pernah dideklarasikan, maka akan timbul masalah:

```gara
variabel123 = 123
```

:::tip Penting
Mengisi data pada variabel yang belum pernah dideklarasikan akan menimbulkan masalah
:::

## Jenis-jenis variabel

Ada tiga jenis variabel dalam Gara:

- Variabel instansi
- Variabel statis
- Variabel bebas

### Variabel instansi

Saat kita mendiskusikan tentang [pembuatan kelas](/docs/kelas/membuat-kelasmu-sendiri), kita juga belajar bagaimana kita membuat suatu objek dari kelas tersebut menggunakan `baru`. Kemudian, kita bisa mengisi data-data untuk objek-objek tersebut:

```gara
orang1.nama = "Rudi"
orang2.nama = "Ferlin"
orang3.nama = "Wisnu"
orang4.nama = "Akbar"
```

Perhatikan bahwa setiap objek diatas, `orang1`, `orang2`, `orang3`, dan `orang4` memiliki data nama yang berbeda-beda. Data `nama` yang bisa berbeda-beda setiap objek inilah yang disebut sebagai variabel instansi.

Kenapa disebut variabel instansi? Adalah karena dalam bahasa pemrograman berbasis objek, _instansi_ memiliki makna yang sama dengan _objek_. Bahkan, proses pembuatan suatu objek dari suatu kelas itu disebut sebagai proses _instansiasi_.

Variabel instansi ini hanya bisa dideklarasikan dalam kelas, menggunakan `ada`:

```gara
kelas Orang {
    ada nama
}
```

### Variabel statis

Tahukah kamu jumlah jam dalam sehari? Iya, terdapat 24 jam dalam sehari. Jumlah jam dalam sehari ini bersifat tetap dan tidak berubah-ubah. Untuk menyimpan data seperti ini, kita menggunakan variabel statis.

Variabel statis dibuat menggunakan kata kunci `ada sta`, dan harus diadakan dalam suatu kelas:

```gara
kelas Hari {
    ada sta JUMLAH_JAM = 24
}
```

Untuk mengakses data tersebut, kita menggunakan nama kelas disusul dengan nama variabel statis tersebut:

```gara
Hari.JUMLAH_JAM
```

Karena sifatnya yang statis, variabel tipe ini diadakan untuk kelas, bukan untuk instansi dari kelas tersebut. Sehingga, masalah akan timbul jika kita mengakses variabel statis dari instansi kelas.

```gara
ada h = Hari.baru
h.JUMLAH_JAM // bermasalah
```

:::tip Penting
Variabel statis bersifat _statis_, yakni, variabelnya diadakan untuk kelas, bukan untuk instansi dari kelas tersebut.
:::

Secara umum, seluruh variabel statis bersifat `tetap`, yakni tidak dapat diubah nilainya setelah didefinisikan. Sehingga, jika kita mengubah nilai `JUMLAH_JAM` diatas, akan terjadi masalah:

```gara
Hari.JUMLAH_JAM = 123 // bermasalah
```

Tapi, ada beberapa kasus dimana kita perlu mengubah nilai variabel statis. Agar variabel statis dapat diubah, kita harus mendefinisikannya dengan kata kunci tambahan: `fana`. `fana` membuat variabel statis dapat diubah nilainya.

```gara
kelas Negara {
    ada sta fana IBUKOTA = []
}

Negara.IBUKOTA += ["Jakarta"]
Negara.IBUKOTA += ["Tokyo"]
```

:::tip Penting
`fana` membuat variabel statis dapat diubah nilainya.
:::

### Variabel biasa

Variabel bebas adalah variabel apapun yang bukan variabel instansi, ataupun variabel statis. Misal, perhatikan fungsi berikut:

```gara title="Fungsi tambah tanpa argumen"
fn tambah() {
    ada angka1 = 1
    ada angka2 = 2

    angka1 + angka2
}
```

Dalam contoh diatas, `angka1` dan `angka2` adalah variabel bebas. Variabel tersebut tidak dapat diakses diluar dari definisi dalam blok fungsinya. Jika kita mencoba memanggil `angka1` dari luar fungsi, hal tersebut akan menjadi masalah:

```gara
angka1
MasalahPengenal: pengenal `angka1` tidak ditemukan atau belum terdefinisikan
```

Variabel bebas juga bisa berupa _argumen_ dari suatu fungsi:

```gara title="Fungsi tambah dengan argumen"
fn tambah(angka1, angka2) {
    angka1 + angka2
}
```

Sama halnya pada contoh fungsi `tambah` tanpa argumen, versi `tambah` dengan argumen diatas juga memiliki variabel bebas `angka1` dan `angka2` yang hanya bisa diakses dari dalam blok `tambah`.
