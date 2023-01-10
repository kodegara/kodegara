---
slug: beda-bahasa-oop-procedural-fungsional
title: "Beda Bahasa Pemrograman Procedural, OOP dan Fungsional"
author: Adam Noto Hakarsa
author_title: Pencipta Gara
author_url: https://github.com/adamnoto
author_image_url: https://avatars.githubusercontent.com/u/166730?v=4
tags: [paradigma, pemrograman]
---

Terdapat tiga jenis utama bahasa pemrograman: prosedural (procedural), fungsional (functional) dan berbasis-objek (object-oriented). 
Kita bisa menggunakan model paradigma apapun untuk belajar pemrograman, meski perbedaan antara ketiga paradigma tersebut sangat mendasar.
Sehingga mungkin perlu diketahui seperti apa perbedaan antara ketiganya.

<!--truncate-->

## Prosedural (Procedural)

Pernah dengar bahasa-bahasa seperti C? Atau bahkan Pascal? Mungkin C masih iya, tapi Pascal mungkin sudah jarang yang tahu dewasa ini. Bahasa-bahasa tersebut adalah contoh bahasa prosedural. Bahasa-bahasa jaman dulu umumnya semuanya berparadigma/beraliran/berjenis prosedural.

Bayangkan saja, jika kamu lapar dan ingin makan mie goreng, kamu mungkin perlu langkah-langkah ini:

1. Masukkan air ke dalam panci
2. Nyalakan kompor
3. Naikkan panci ke atas kompor
4. Tunggu air mendidih
5. Memasukkan mie ke dalam panci
6. Siapkan piring
7. Tunggu 5 menit
8. Tiriskan mie dari panci
9. Tuang mie ke dalam piring
10. Taburkan bumbu ke dalam piring
11. Aduk bumbu hingga rata

Nah, langkah-langkah tersebut juga disebut _prosedur_. Jadi, prosedur = langkah-langkah. Yap! Prosedur bisa diartikan langkah-langkah.

Dalam paradigma prosedural, konsep yang berbeda sangat mungkin untuk bercampur-baur. Tidak ada struktur yang jelas. Oleh karenanya, bahasa ini lebih mudah dipelajari bagi pemula.

Kode dalam bahasa ini tidak jauh berbeda dari langkah-langkahnya:

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
tuang(bumbu, piring)
aduk(piring)
```

Bandingkan kode diatas dengan langkah-langkah prosedurnya, sangat mirip bukan? Tidak ada sekat sama sekali, fungsi (atau lebih tepatnya prosedur) `tiriskan` untuk panci berada di suatu struktur yang sama dengan ~fungsi~ prosedur `nyalakan_kompor`. Tidak ada strukturnya sama sekali. Semua fungsi/prosedur dapat berada di file yang sama.

Ketika suatu program menjadi lebih rumit, kode dalam bahasa prosedural kemungkinan jadi lebih susah dibaca ataupun diubah. Bayangkan saja, jika mie yang harus dimasak ada 10 dan masing-masing berbeda merk-nya, memiliki bumbu yang berbeda, membutuhkan waktu memasak yang berbeda dan lain sebagainya. Maka langkah prosedur diatas bisa saja jadi jauh lebih rumit untuk dibaca/diubah, kan?

Misalnya, kodenya akan menjadi seperti ini:

```gr
masukkan(mie1, panci)
siapkan_piring()
tiriskan(panci)
tuang(panci, piring1)
tuang(bumbu, piring1)

masukkan(mie2, panci)
siapkan_piring()
tiriskan(panci)
tuang(panci, piring2)
tuang(bumbu, piring2)

...
```

Sisi positif:
- Sederhana

Sisi negatif:
- Sukar dibaca/diubah jika program menjadi lebih rumit

## Pemrograman Berbasis Objek (Object-Oriented Programming)

Bahasa pemrograman berbasis objek, atau juga disebut Object-Oriented Programming (singkatannya: OOP), memberi struktur pada bahasa yang minim struktur seperti halnya bahasa prosedural. Basis disini berarti "tersusun dari apa" dalam artian, bahasa ini memandang bahwa program harus tersusun dari objek-objek. Objek-objek tersebut sejatinya terinspirasi dari cara pandang manusia yang melihat dunia di sekelilingnya sebagai objek. Misal, kita memiliki objek-objek mobil, yang mana objek-objek tersebut dapat diparkirkan di dalam suatu objek rumah, atau objek mall, atau objek sekolah dan lain sebagainya. Ada objek hewan, objek tumbuhan, bahkan planet ini adalah suatu objek!

Karena adanya objek-objek tersebut, dapat dikatakan bahwa kode dalam bahasa ini menjadi jauh lebih terstruktur. Pada contoh memasak mie sebelumnya, dalam bahasa OOP kita akan menjumpai objek-objek seperti:

1. Kompor
2. Mie bungkus
3. Air
4. Panci
5. Piring

Jika ~fungsi~ prosedur dalam bahasa prosedural tidak terikat dalam struktur manapun, fungsi-fungsi dalam bahasa ini akan terikat pada suatu objek. Fungsi yang terikat pada suatu objek juga dinamakan sebagai _metode_. Oleh karena keterikatan antara fungsi dan objek lah bahasa ini terlihat menjadi lebih terstruktur. Kode dalam bahasa ini bisa saja menjadi seperti ini:

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

Untuk memasak mie yang berbada-beda juga akan menjadi jauh lebih sederhana:

```gr
ada anton = Orang.baru()
ada budi = Orang.baru()
ada reva = Orang.baru()

anton.makan(MiKwetiau.baru())
budi.makan(MiSpagheti.baru())
reva.makan(MiPangsit.baru())
```

Hanya saja, tidak semua hal dapat dengan mudah dibayangkan sebagai objek layaknya objek di dunia nyata manusia. Apalagi, dalam dunia komputer terdapat banyak hal yang tidak ada padanannya di dunia nyata. Hal-hal tersebut membuat bahasa pemrograman berbasis objek menjadi nampak aneh. Juga, untuk program-program sederhana, bahasa pemrograman berbasis objek bisa terkesan terlalu bertele-tele dibandingkan bahasa prosedural.

Sisi positif:
- Terstruktur

Sisi negatif:
- Ada kemungkinan bertele-tele
- Tidak semua konsep dapat dengan mudah dijadikan objek selayaknya di dunia manusia

## Fungsional (Functional)

Dalam bahasa OOP, objek adalah segalanya. Dalam bahasa fungsional, _fungsi_ adalah segalanya. Dalam bahasa ini, suatu sistem dibangun dari fungsi-fungsi. Fungsi-fungsi tersebut, ketika dipanggil, akan selalu menghasilkan keluaran yang sama jika diberi masukan yang sama. Hal ini yang membedakan bahasa fungsional dengan prosedural. Karena, meski bahasa fungsional dari luar sangat mirip dengan bahasa prosedural, bahasa prosedural tidak selalu menghasilkan keluaran yang sama meski diberi masukan yang sama! (ingat, kita sering menulis ~fungsi~ saat menyebut prosedur saat membahas bahasa prosedural)

Contohnya, katakanlah kita ingin mengetahui waktu saat ini, kita akan memiliki ~fungsi~ prosedur `waktu()`. Saat prosedur `waktu` dipanggil, maka langkah-langkah ini mungkin akan dilakukan:

1. Kirim instruksi ke sistem operasi untuk membaca waktu
2. Sistem operasi memberikan waktu _terbaru_ saat _saat ini_

Tapi, konsep _saat ini_ berbeda dari waktu ke waktu. Di detik pertama kita memanggil `waktu`, kita akan mendapatkan nilai `1`. Sedetik kemudian, saat memanggil `waktu`, kita akan mendapatkan nilai `2`, begitu seterusnya tergantung kapan `waktu` dipanggil. Nah kan, meski masukannya sama (yakni, cuma `waktu()`), keluarannya bisa berbeda.

Bahasa fungsional jauh lebih kaku. Perbedaan-perbedaan seperti itu tidak dapat diterima. Karena begitu "kaku" nya bahasa fungsional, memelajari bahasa ini biasanya butuh waktu yang lebih lama. Namun, sifat-sifat "kaku" dalam bahasa fungsional sebenarnya ada alasannya, dan dapat dibilang mampu memberikan untuk kasus-kasus tertentu. Misalnya, karena kita bisa pasti bahwa masukan yang sama pasti menghasilkan keluaran yang sama, kita bisa memecahkan suatu tugas besar ke tugas-tugas kecil tanpa perlu takut bahwa fungsi tersebut kemungkinan akan bertingkah lain tergantung kapan fungsi tersebut dipanggil. Karenanya, bahasa ini sangat cocok untuk mengerjakannya tugas-tugas yang dapat dipotong ke bagian-bagian kecil yang dapat diproses secara bersamaan sehingga waktu yang diperlukan untuk menyelesaikan tugas tersebut menjadi lebih singkat.

Sisi positif:
- Mampu memanfaatkan seluruh prosesor yang ada dengan lebih mudah jika tugasnya dapat dipisah ke bagian kecil-kecil

Sisi negatif:
- Kaku

## Pilih yang mana?

Tidak ada paradigma yang sempurna. Terkadang, bahkan kita "dipaksa" oleh keadaan untuk menggunakan suatu paradigma tertentu. Misalnya, saat memprogram hardware pada level paling rendah, kita sangat mungkin harus menggunakan bahasa seperti C (prosedural)--tidak bisa yang lainnya.

Namun, dalam banyak kasus lain kita bisa memilih paradigma yang kita suka. Umumnya, bahasa prosedural atau OOP sangat mudah dipahami sehingga untuk berganti dari bahasa prosedural ke OOP, ataupun sebaliknya, tidak butuh waktu yang sangat signifikan. Sedangkan bahasa fungsional sangat jauh berbeda dari segi filosofi sehingga programmer handal sekalipun dapat membutuhkan waktu yang lama untuk memelajari/pindah ke bahasa tersebut.

Apakah itu berarti bahasa fungsional jelek? Tidak juga. Bahasa fungsional banyak dipakai untuk riset. Hal ini karena bahasa fungsional memiliki konsep kekekalan data (imutabilitas), yang karenanya, singkatnya, bahasa ini sering digunakan dalam banyak kasus dimana _multi-threading_ diperlukan.

Gara sendiri adalah bahasa yang [terinspirasi dari tiga paradigma](https://kodegara.org/docs/pengantar#karakteristik-gara) tersebut. Misalnya, di Gara, [koleksi (seperti deret/array) bersifat kekal/_immutable_](https://kodegara.org/docs/koleksi#hukum-kekekalan-koleksi). Dengan diakomodirnya tiga paradigma tersebut, pengguna akan mampu mengeksperikan dirinya dengan lebih bebas saat memprogram menggunakan Gara. Selain itu, karena tujuan utama Gara diciptakan adalah untuk membantu belajar pemrograman, dengan Gara pelajar dapat mencicipi tiga paradigma yang berbeda meski fokus belajar menggunakan bahasa pemrograman yang sama.
