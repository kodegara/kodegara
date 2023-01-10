---
slug: beda-bahasa-oop-procedural-fungsional
title: "Beda Bahasa Pemrograman Procedural, OOP dan Fungsional"
author: Adam Notodikromo
author_title: Pencipta Gara
author_url: https://github.com/adamnoto
author_image_url: https://avatars.githubusercontent.com/u/166730?v=4
tags: [paradigma, pemrograman]
---

Terdapat tiga jenis utama bahasa pemrograman: procedural, fungsional dan object-oriented (pemrograman berbasis objek). 
Meski perbedaan antara ketiga paradigma tersebut sangat mendasar, kita bisa menggunakan model paradigma apapun untuk 
belajar pemrograman.

<!--truncate-->

## Procedural (Prosedural)

Pernah dengar bahasa-bahasa seperti C? Atau bahkan Pascal? Mungkin C masih iya, tapi Pascal mungkin sudah jarang yang tahu dewasa ini. Bahasa-bahasa tersebut adalah contoh bahasa prosedural. Bahasa-bahasa jaman dulu umumnya semuanya berparadigman prosedural.

Bayangkan jika kamu ingin memasak mie goreng, kamu mungkin perlu langkah-langkah ini:

1. Memasukkan air ke dalam panci
2. Menyalakan kompor
3. Menaikkan panci dalam kompor
4. Menunggu hingga air agar mendidih
5. Memasukkan mie dalam panci
6. Siapkan piring
7. Menunggu 5 menit
8. Tiriskan mie dari panci
9. Tuang mie ke dalam piring
10. Beri bumbu

Nah, langkah-langkah tersebut juga disebut _prosedur_. Jadi, prosedur = langkah-langkah. Dengan bahasa ini, tidak ada bedanya antara _mi_, koki yang memasak, panci dan sebagainya. Semuanya ada kemungkinan untuk campur-baur dan tidak ada strukturnya. Oleh karenanya, bahasa ini juga sangat mudah dipelajari bagi pemula. Namun, ketika suatu program menjadi lebih rumit, kode dalam bahasa prosedural bisa saja lebih susah dibaca ataupun diubah. Bayangkan saja, jika mie yang harus dimasak ada 10, masing-masing berbeda merk-nya, memiliki bumbu yang berbeda, membutuhkan waktu memasak yang berbeda dan lain sebagainya. Maka langkah prosedur diatas bisa saja jadi jauh lebih rumit untuk dibaca/diubah, kan?

Kode dalam bahasa ini tidak akan jauh berbeda dari langkah-langkahnya. Sangat satu-per-satu:

```gr
ada mie, kompor, panci, mie, piring
masukkan(air, panci)
nyalakan_kompor(kompor)
taruh_ke_kompor(kompor, panci)

selama panci_belum_mendidih(panci) {
  tunggu()
}

masukkan(mie, panci)
siapkan_piring()
tunggu_5_menit()
tiriskan(panci)
tuang(panci, piring)
tabur_bumbu(piring)
```

Sisi positif:
- Sederhana

Sisi negatif:
- Sukar dibaca/diubah jika program menjadi lebih besar

## Pemrograman Berbasis Objek

Bahasa pemrograman berbasis objek mencoba memberi struktur pada bahasa yang sebelumnya prosedural. Bahasa berparadigma ini memiliki konsep yang disebut _objek_. Konsep tersebut terinspirasi dari dunia nyata dimana kita melihat sekeliling kita sebagai objek.

Bayangkan prosedur memasak mie sebelumnya. Dalam bahasa pemrograman berbasis objek, kita akan memiliki objek-objek berikut:

1. Mie bungkus
2. Air
3. Panci
4. Kompor
5. Piring

Dalam bahasa ini, kita tidak perlu "tahu" langkah-langkah yang diperlukan dalam interaksi tiap-tiap objek yang ada. Langkah-langkah tersebut dianggap pengetahuan internal dari suatu objek. Katakanlah, kompor nya sangat canggih sehingga dapat mendeteksi merk mie dan mendapatkan informasi misal seberapa lama mie tersebut harus dimasak agar matang. Maka, meski mie merk A butuh waktu 5 menit sedangkan mie merk B butuh waktu 2.5 menit, kita tidak perlu tahu detail perbedaan waktu itu. Dengan cara inilah, bahasa pemrograman berbasis objek memiliki suatu struktur dibanding bahasa prosedural.

Kode dalam bahasa ini bisa saja menjadi seperti ini:

```gr
kelas Orang {
  fn makan(mieBungkus) {
    kompor = Kompor.baru()
    piringIsiMie = kompor.masak(mie)
    selama piringIsiMie.belumHabis? {
      piringIsiMie.habiskan(ini)
    }
  }

}
```

Namun, sayangnya, tidak semua hal dapat dengan mudah dibayangkan sebagai _objek_ layaknya objek di dunia manusia. Kita harus ingat bahwa dikomputer terdapat berbagai hal yang tidak ada di dunia nyata. Hal-hal tersebut membuat bahasa pemrograman berbasis objek menjadi nampak aneh.

Untuk program-program sederhana, bahasa pemrograman berbasis objek juga terkesan bertele-tele.

Sisi positif:
- Terstruktur

Sisi negatif:
- Ada kemungkinan bertele-tele
- Tidak semua konsep dapat dengan mudah dijadikan objek layaknya di dunia manusia

## Paradigma yang terbaik antara OOP, Procedural, ataupun Fungsional?
