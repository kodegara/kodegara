---
sidebar_position: 1
---

# Pengantar

Gara bukanlah bahasa pemrograman biasa karena Gara mengombinasikan paradigma prosedural, fungsional, dan juga pemrograman berbasis objek dengan sintaksis bahasa Indonesia untuk membuatnya mudah dipahami, dipelajari dan dipergunakan.

## Karakteristik Gara

Secara karakteristik, Gara itu:

### **1. Prosedural**

Pengguna tidak dipaksa untuk menuliskan kelas hanya untuk mencetak `Halo, Dunia!`, tidak seperti di bahasa pemrograman Java, misalnya.

### **2. Modern dan inovatif**

Gara dilengkapi dengan fitur-fitur modern yang bahkan tidak ada di bahasa pemrograman lainnya seperti PHP, Ruby ataupun Python. Misalnya, Gara memiliki tipe data `Rangkap` (atau biasa disebut tuple) yang bersifat alami selayaknya tipe data koleksi lainnya seperti `Deret` dan `Peta`. Gara bertekad untuk selalu berkembang dan menerapkan ide-ide modern.

### **3. Fungsional**

Di Gara, fungsi adalah suatu tipe data, daripada suatu konstruksi yang khas. Sehingga, fungsi bisa diasosiasikan dengan variabel, ataupun dijadikan sebagai suatu argumen picu bagi fungsi lain.

```gara
fn (fungsi, nilai) { fungsi(nilai) } (fn (n) { n + 1 }, 1)
```

Namun, konsep fungsional lebih luas daripada itu. Dalam dunia fungsional, data dan objek diinstansiasi untuk kemudiaan digunakan. Namun, objek-objek tersebut tidak berubah nilai dan statusnya. Di Gara, tipe data bawaan seperti `Deret`, `Peta` dan juga `Kata` menerapkan paradigma fungsional tersebut yang dikenal dengan kekekalan data (_immutability_).

Awalnya, konsep pemrograman ini banyak digunakan di kalangan akademis. Namun kini, banyak ide-ide pemrograman fungsional yang mulai diadopsi oleh dunia industri.

### **4. Benar-benar berbasis objek**

Seluruh nilai dan data dalam Gara adalah objek: fungsi, kelas, angka, dan lain sebagainya adalah objek. Pemrograman berbasis objek memungkinkan pengguna untuk membuat sistem yang kompleks dari bagian-bagian kecil yang lebih mudah dipahami.

Tidak hanya itu, Gara juga menerapkan hal-hal yang umum dijumpai pada bahasa pemrograman berparadigma objek. Misalnya, Gara juga memiliki konsep kelas punca (_super class_), pusparagam (_polymorphism_), turunan (_inheritance_), dan banyak lainnya.

Konsep pemrograman ini digunakan secara luas oleh berbagai industri di lapangan.

### **5. Bersifat dinamis**

Banyak hal dalam Gara didesain untuk membuat Gara lebih ekspresif dan dinamis. Misalnya, Gara memiliki konsep pengayaan (_monkey patching_) yang memungkinkan kelas yang sudah didefinisikan untuk diperkaya.

Contoh lainnya, hampir seluruh notasi pemrograman, seperti blok `jika`, `selama`, bahkan `coba`-`tahan` dianggap sebagai ekspresi yang memungkinkan blok tersebut untuk menghasilkan suatu nilai balik.

```gara
ada nilai = coba { 1 + "1" } tahan { 2 } // bernilai 2
```

## Kenapa belajar Gara?

Gara didesain untuk mudah dipelajari bagi siapapun. Dilengkapi dengan fitur-fitur yang tak kalah dari bahasa pemrograman konvensional seperti Java, Python, C dan Ruby; pelajar tidak kekurangan satu halpun yang dapat dipelajari, yang mana hal-hal tersebut dapat ditransfer saat memelajari banyak bahasa pemrograman umum lainnya.

Karena sintaksis Gara yang menggunakan bahasa Indonesia, praktis pelajar terutama anak-anak tidak perlu lagi merasa canggung. Mereka seharusnya tidak lagi dipusingkan antara belajar pemrograman atau bahasa Inggris, suatu bahasa yang asing dan sulit dipelajari bagi anak-anak Indonesia pada umumnya. Dengan kata lain, Gara memungkinkan anak-anak untuk dapat belajar pemrograman dan berpikir ala seorang insinyur sejak usia sedini mungkin.

Namun, pengguna dewasa tentu tetap bisa menggunakan Gara untuk menciptakan sistem untuk dunia industri, bisnis ataupun akademis. Gara adalah proyek yang lebih dari bahasa pemrograman untuk anak-anak. Gara adalah bahasa pemrograman yang didesain untuk menjawab tantangan riil, seperti pemrograman web, pemrograman _multi-thread_, dan sebagainya seiring perkembangannya.

## Kenapa Gara diciptakan, _kan_ sudah ada X, Y, Z?

Pada 17 Agustus 1945 bangsa Indonesia merdeka, dipersatukan oleh bahasa Indonesia yang sederhana, mudah difahami, dipelajari, dan dipergunakan oleh siapapun, tak mengenal suku, agama, atau latar belakang sosioekonomi lainnya.

Akan sangat disayangkan jika bahasa Indonesia yang begitu sederhana tidak digunakan sebagai media untuk memelajari dan menguasai teknologi. Akan sangat begitu sia-sia jika anak-anak kita dan para pelajar pada umumnya diharuskan memelajari bahasa Inggris terlebih dahulu sebagai landasan memelajari teknologi. Padahal pada hakikatnya, kemahiran dalam berteknologi adalah salah satu faktor kemajuan dan kemakmuran suatu bangsa itu sendiri.

Oleh karena itulah Gara diciptakan. Proyek yang pada awalnya disebut dengan _Proyek Kartini_ ini dimulai dengan suatu tekad untuk memudahkan insan cendekia Indonesia dalam memelajari dan menguasai teknologi.

Untuk menggunakan Gara, kita bisa langsung menggunakannya lewat peramban (_browser_) _lho_, tanpa perlu instalasi, cukup buka laman taman belajar [Tadika Gara](https://tadika.kodegara.org). _Yuk_, mari kita bersama kuasai teknologi.

