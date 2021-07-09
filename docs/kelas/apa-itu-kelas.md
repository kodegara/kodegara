---
sidebar_position: 1
---

# Apa itu Kelas?

Saat kita SD, kita memiliki kelas-kelas. Kelas 1, berisi siswa-siswa yang sama-sama sedang dalam kelas 1. Mereka memelajari hal-hal yang sama, pada level yang juga sama. Dalam satu kelas yang sama, mata pelajaran matematika misalnya, akan membahas hal-hal yang sama: penjumlahan, pengurangan, dan sebagainya.

Iya. Kelas adalah suatu konsep yang mana hal yang sama berada di kelas yang sama. Secara lebih abstrak, dunia ini juga memiliki kelas-kelasnya. Ada kelas manusia, yang terdiri dari saya, dia, teman-teman kita, ibu dan bapak kita, adalah kelas manusia. Mereka memiliki mata, tangan, bisa berbicara dengan suatu bahasa, bisa lapar dan haus. Sama.

Dalam pemrograman juga dikenal suatu konsep yang bernama kelas. Suatu bahasa pemrograman yang memiliki konsep kelas disebut sebagai pemrograman berbasis objek. Hal ini dikarenakan, semua objek dalam bahasa pemrograman tersebut akan berasal dari suatu kelas.

Menarik bukan?

:::tip Penting

Suatu bahasa pemrograman yang memiliki konsep kelas disebut sebagai pemrograman berbasis objek.

:::

Mari kita buktikan:

```gara
1.kelas()
```

Jika kita menjalankan kode diatas, Gara akan memberitahu balik bahwa objek `1` adalah berkelas `Integer`, suatu kelas yang mewakili seluruh bilangan bulat. Sehingga, jika kita mengecek kelas-kelas lainnya pada objek-objek sejenis, kita pasti akan mendapati `Integer`:

```gara
cetak(2.kelas())
cetak(1000.kelas())
cetak(-1.kelas())
cetak(0.kelas())
```

Buktikan sendiri dalam [Tadika Gara](https://tadika.kodegara.org), bahwa seluruh baris diatas akan mencetak `Integer`.
