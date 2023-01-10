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
- Sukar dibaca/diubah jika program menjadi lebih besar

## Pemrograman Berbasis Objek (Object-Oriented Programming)

Bahasa pemrograman berbasis objek, atau juga disebut Object-Oriented Programming (singkatannya: OOP), memberi struktur pada bahasa yang minim struktur seperti halnya bahasa prosedural. Bahasa berparadigma ini memiliki konsep yang disebut _objek_. Konsep tersebut terinspirasi dari dunia manusia yang nyata dimana kita melihat sekeliling kita sebagai objek. Ada objek mobil, dimana objek tersebut dapat diparkirkan di dalam objek rumah, ataupun objek mall.

Jika dibandingkan dengan contoh memasak mie pada bahasa prosedural, kita akan menjumpai objek-objek yang memiliki fungsi. Dalam arti lain, kode menjadi terstruktur karena fungsi-fungsi menjadi terikat ke suatu objek. Misal, objek `Kompor` akan memiliki fungsi `nyala` untuk menyalakan kompor. Selain `Kompor` kita akan memiliki objek-objek berikut:

1. Mie bungkus
2. Air
3. Panci
4. Piring

Karena fungsi-fungsi tersebut terstruktur kedalam objek-objek tertentu, kita tidak perlu "tahu" langkah-langkah yang diperlukan dalam interaksi antar tiap-tiap objek yang ada. Jadi, meski mie merk A butuh waktu 5 menit sedangkan mie merk B butuh waktu 3 menit, kita tidak perlu tahu detail perbedaan waktu itu. Dengan cara inilah, bahasa pemrograman berbasis objek memiliki suatu struktur dibanding bahasa prosedural. Kode dalam bahasa ini bisa saja menjadi seperti ini:

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

Dalam bahasa OOP, objek adalah segalanya. Dalam bahasa fungsional, _fungsi_ adalah segalanya. Dalam bahasa ini, suatu sistem dibangun dari fungsi-fungsi. Fungsi-fungsi tersebut, ketika dipanggil, akan selalu menghasilkan keluaran yang sama jika diberi masukan yang sama. Hal ini yang membedakan bahasa fungsional dengan prosedural. Karena, meski bahasa fungsional dari luar mungkin mirip dengan bahasa prosedural, bedanya adalah bahasa prosedural tidak selalu menghasilkan keluaran yang sama meski diberi masukan yang sama!

Kok bisa?

Contohnya, katakanlah kita ingin mengetahui waktu saat ini, kita akan memiliki prosedur `waktu()`. Saat prosedur `waktu` dipanggil, maka langkah-langkah ini mungkin akan dilakukan:

1. Kirim instruksi ke sistem operasi untuk membaca waktu
2. Sistem operasi memberikan waktu _terbaru_ saat _ini_

Tapi, konsep _ini_ berbeda dari waktu ke waktu. Di detik pertama kita memanggil `waktu`, kita akan mendapatkan nilai `1`. Sedetik kemudian, saat memanggil `waktu`, kita akan mendapatkan nilai `2`, begitu seterusnya tergantuk kapan `waktu` dipanggil. Nah kan, meski masukannya sama (yakni, cuma `waktu()`), keluarannya berbeda.

Bahasa fungsional tidak menerima konsep itu. Dalam bahasa ini, data bersifat kekal (_immutable_). Karena begitu "kaku" nya bahasa fungsional, memelajari bahasa ini biasanya butuh waktu yang sedikit lebih lama. Namun, sifat-sifat "kaku" dalam bahasa fungsional sebenarnya memberikan banyak manfaat bagi sang pemrogram. Misalnya, karena kita bisa pasti bahwa masukan yang sama pasti menghasilkan keluaran yang sama, kita bisa memecahkan suatu tugas besar ke tugas-tugas kecil, dan mengerjakannya bersamaan dalam artian memanfaatkan semua prosesor yang ada.

Sisi positif:
- Mampu memanfaatkan seluruh prosesor yang ada dengan lebih mudah, jika tugasnya dapat dipisah ke bagian kecil-kecil

Sisi negatif:
- Kaku

## Pilih yang mana?

Tidak ada paradigma yang sempurna. Terkadang, bahkan kita "dipaksa" oleh keadaan untuk menggunakan suatu paradigma tertentu. Misalnya, saat memprogram hardware pada level paling rendah, kita sangat mungkin harus menggunakan bahasa seperti C (prosedural). Di saat itu, kita tidak dapat memilih untuk menggunakan bahasa Java (oop) meski kita ingin menggunakan bahasa yang berbasis objek.

Namun, dalam banyak kasus tentu kita bisa memilih bahasa paradigma apa yang ingin kita gunakan. Terkadang, pilihan tersebut tergantung selera dan preferensi masing-masing orang, tim, perusahaan, atau tuntutan-tuntutan lain. Umumnya, bahasa prosedural atau OOP sangat mudah dipahami sehingga untuk berganti dari bahasa prosedural ke OOP, ataupun sebaliknya, tidak butuh waktu yang sangat signifikan. Namun, bahasa fungsional sangat jauh berbeda dari segi filosofi sehingga hampir setiap programmer handal sekalipun akan membutuhkan waktu yang lama untuk memelajari/pindah ke bahasa tersebut.

Apakah itu berarti bahasa fungsional jelek? Tidak juga. Bahasa fungsional banyak dipakai dikalangan riset. Karena bahasa ini memiliki konsep kekekalan data yang sangat kuat, singkatnya, bahasa ini juga sering digunakan dalam banyak kasus _multi-threading_ karena dalam kasus tersebut bahasa OOP susah untuk dapat diandalkan dengan baik dan benar.

Gara sendiri adalah bahasa yang [terinspirasi dari tiga paradigma](https://kodegara.org/docs/pengantar#karakteristik-gara) tersebut. Misalnya, di Gara, [koleksi (seperti deret/array) bersifat kekal/immutable](https://kodegara.org/docs/koleksi#hukum-kekekalan-koleksi). Dengan diakomodirnya tiga paradigma tersebut, pengguna akan mampu mengeksperikan dirinya dengan lebih bebas saat memprogram. Selain itu, karena tujuan utama Gara diciptakan adalah untuk membantu belajar pemrograman, dengan diakomodirnya ketiga paradigma tersebut pelajar akan mampu mencicipi tiga paradigma yang berbeda meski fokus belajar satu bahasa pemrograman saja.
