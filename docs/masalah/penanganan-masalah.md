---
sidebar_position: 1
---

# Penanganan masalah

Suatu kode dapat memiliki eror, atau kesalahan-kesalahan. Di Gara, kesalahan-kesalahan tersebut disebut sebagai masalah. Proses untuk mencegah agar masalah tidak membuat program berhenti bekerja disebut sebagai _exception handling_, atau yang dalam bahasa Indonesia berarti penanganan masalah.

## Kode bermasalah

Mari kita mulai dengan suatu contoh. Kira-kira, apa yang akan terjadi jika kita menjalankan kode dibawah ini?

```gara
1 + nil
cetak("tidak dicetak")
```

Yang terjadi adalah Gara akan mencetak pesan bahwa terjadi Masalah, dan kode setelahnya untuk mencetak teks `"tidak dicetak"` tidak akan dijalankan.

```gara
ERROR MasalahArgumen: tidak dapat menerima Nirdefinisi
```

Itulah yang disebut dengan masalah. Masalah adalah eror yang timbul ketika suatu baris kode tidak dapat dijalankan sesuai yang diharapkan. Suatu masalah yang tidak ditangani akan menyebabkan kode selanjutnya tidak dijalankan.

:::tip Penting
Suatu masalah yang tidak ditangani akan menyebabkan kode selanjutnya tidak dijalankan.
:::


## Penanganan masalah

Untuk menangani suatu masalah, kita menggunakan blok `coba` dan `tahan` yang memiliki sintaksis sebagai berikut:

```
coba {
    <baris-baris kode>
} tahan (<variabel>) {
    <kode setelahnya>
}
```

Dalam contoh `1 + nil`, kita dapat mencoba menangani kasus yang bermasalah tersebut sebagai berikut.

```gara
coba {
    1 + nil
    cetak("tidak dicetak")
} tahan (e) {
    cetak("aku menahan masalah!!")
}

cetak("keluar dari blok coba-tahan")
```

Menajalankan kode diatas akan mencetak:

```
aku menahan masalah!!
keluar dari blok coba-tahan
```

## Kenapa masalah muncul?

Dalam kasus `1 + nil` diatas, masalah jelas muncul karena kita tidak diperbolehkan melakukan operasi penambahan antara suatu objek berkelas `Integer` dan objek `nil`. Jelas, itu merupakan kesalahan yang disengaja.

Tapi terkadang, terdapat masalah yang bisa saja tidak kita sengaja. Misal, saat kita ingin mendownload file dari internet, tiba-tiba koneksi internet terputus. Pada saat itu, masalah bisa saja terjadi.

Juga sebagai pemrogram terkadang kita melakukan kesalahan yang tidak kita sengaja. Kita menganggap kode kita baik-baik saja, namun ada baris-baris kode yang bermasalah, entah karena logikanya yang salah atau alasan apapun. Kode seperti itu disebut juga kode yang _buggy_. Kode yang _buggy_ seringnya melempar masalah.
