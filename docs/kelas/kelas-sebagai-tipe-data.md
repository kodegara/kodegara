---
sidebar_position: 2
---

# Kelas sebagai tipe data

Karena fungsinya sebagai pemersatu objek yang sekelas, kelas dapat digunakan sebagai penentu tipe dari suatu data/objek. Dalam kasus `1`, `2`, `3`, dan `1000` misalnya, semua objek tersebut berkelas `Integer`, dan semuanya _pun_ bertipe `Integer`.

:::tip Penting
Kelas dapat digunakan sebagai penentu tipe dari suatu data/objek
:::

Dalam bahasa pemrograman berbasis objek seperti Gara, data apapun itu pasti memiliki kelasnya masing-masing.

Sebagai contoh, kita memiliki kelas `Kata` untuk objek-objek tulisan, atau teks. Tipe data `Kata` ini bisa digunakan untuk menampung, misalnya, suatu huruf, atau nama kita sendiri, ataupun nama suatu negara, atau bahkan suatu bait puisi. Atau apapun itu yang berupa tulisan.

```gara
ada kota = "Surabaya"
ada provinsi = "Jawa Timur"
ada negara = "Indonesia"
```

Dalam contoh diatas, `kota`, `provinsi`, dan `negara` memiliki data bertipe `Kata`.

Kelas-kelas penting lainnya yang ada dalam Gara yakni:

| Kelas   | Deskripsi                                 | Contoh                       |
|---------|-------------------------------------------|------------------------------|
| Deret   | Untuk menampung data-data lainnya         | `[17, "Agustus", 1945]`      |
| Riil    | Merepresentasikan bilangan riil (desimal) | `1.5`, `2.7`, `0.1`, `-5.25` |
| Boolean | Nilai perhitungan logika                  | `benar`, `salah`             |

`Deret` misalnya, digunakan untuk menampung data-data lainnya. Sebagai contoh, katakanlah kita memiliki 5 sahabat. Tentu saja, kita bisa menggunakan `Kata` untuk menampung semua sahabat kita:

```gara
ada teman = "Ardi, Didin, Teguh, Ruri, Ferlin"
```

Dalam contoh diatas, kita memiliki 1 objek, yakni `Kata` `teman`. Sebaliknya, dalam contoh dibawah ini, kita memiliki 1 objek, yang berisi 5 objek `Kata` lainnya:

```gara
ada deretTeman = ["Ardi", "Didin", "Teguh", "Ruri", "Ferlin"]
```

Kita akan membicarakan berbagai tipe data lain secara lebih detail, karena tentu saja, selain kelas-kelas diatas, Gara juga memiliki kelas-kelas lainnya. Menguasai kelas-kelas tersebut tidak bisa dilakukan dalam sehari atau dua hari. Dan, sebenarnya wajar jika kita lupa kelas-kelas apa saja yang ada dalam suatu bahasa pemrograman. Jangan pernah canggung untuk membaca ulang, karena dengan mengulang dan mengulang, kita bisa menjadi lebih mudah mengingat.

Oh iya, kamu bisa membuat kelas kamu sendiri, _lho_.
