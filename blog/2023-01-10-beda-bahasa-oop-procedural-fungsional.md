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

## Pemrograman Berbasis Objek (OOP)

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

Oh ya, bahasa ini juga biasa disebut sebagai bahasa berbasis objek (_object-oriented programming_ (OOP)).

## Fungsional

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

Apakah itu berarti bahasa fungsional jelek? Tidak juga. Bahasa fungsional banyak dipakai dikalangan riset. Karena bahasa ini memiliki konsep [kekekalan data](https://kodegara.org/docs/koleksi#hukum-kekekalan-koleksi) yang sangat kuat, singkatnya, bahasa ini juga sering digunakan dalam banyak kasus _multi-threading_ karena dalam kasus tersebut bahasa OOP susah untuk dapat diandalkan dengan baik dan benar.
