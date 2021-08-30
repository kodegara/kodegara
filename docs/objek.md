---
sidebar_position: 3
---

# Objek

Gara adalah bahasa pemrograman berbasis objek. Apapun dalam Gara adalah objek. Karena apapun dalam Gara adalah objek, mereka semua dapat menerima pesan, _lho_.

Untuk melihat pesan apa saja yang dapat diterima oleh suatu objek, kita bisa kirim pesan `metode` pada objek tersebut.

Katakanlah, kita memiliki objek kata "Gara":

```gara
"Gara"
```

Nah, jika kita ingin mengetahui pesan apa saja yang dapat diterima oleh objek tersebut, kita bisa mengirimkan pesan: `metode` seperti berikut:

```gara
"Gara".metode
```

Gara langsung akan menjawab pesan-pesan yang dapat diterima oleh objek `"Gara"` tersebut, atau dalam kata lain: tingkah laku apa saja yang dapat dilakukan oleh objek `"Gara"` tersebut.

> ["akhir?", "awal?", "beda?", "berisi?", "besar", "besar?", "cari", "cuil", "ganda", "ganti", "hantar", "keKata", "kecil", "kecil?", "kelas", "kobit", "kosong?", "metode", "nil?", "padaPosisi", "panjang", "pisah", "rapi", "sama?", "sambut?", "sesuai?", "tambah", "tiap", "tuk", "variabel"]

Dalam daftar diatas, kita bisa tahu bahwa salah satu tingkah laku tersebut adalah `kecil`. Jika kita mengirim pesan ini ke objek `"Gara"`, apa yang akan terjadi ya?

```gara
"Gara".kecil
```

Ternyata, hasilnya adalah:

```
gara
```

Menarik ya? Dengan mengirim pesan pada suatu objek, objek tersebut akan merespon. Dalam kasus ini, kita mendapatkan objek baru yakni `"gara"` (semua huruf kecil).

Inilah yang dinamakan dengan pemrograman berbasis objek, paradigma dimana pemrogram mengirimkan pesan-pesan pada objek-objek.
