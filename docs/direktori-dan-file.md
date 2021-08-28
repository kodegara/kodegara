---
sidebar_position: 11
---

# Direktori dan File

Suatu komputer memiliki hardisk yang menyimpan file dalam suatu struktur. Struktur-struktur ini diatur oleh sesuatu yang disebut dengan direktori atau folder. Gara memiliki dua kelas yang dapat membantu kita untuk mengakses file dan direktori-direktori tersebut.

Harap perhatikan bahwa sebagian besar kode-kode dalam tutorial ini tidak akan bisa dijalankan di dalam [Tadika Gara](https://tadika.kodegara.org/), hal ini karena [Tadika Gara](https://tadika.kodegara.org/) dieksekusi dalam peramban yang tidak memiliki struktur sistem file.

## Direktori

### Memindai isi suatu direktori

Kelas `Direktori` memiliki fungsi statis `pindai(arg1)` yang dapat digunakan untuk memindai isi dari suatu direktori. Misal, kita bisa memanggil fungsi ini sebagai berikut:

```gara
ada derDir = Dir.pindai(".")
```

Jika terdapat file dan folder dalam direktori tersebut, maka `derDir` akan ditempati oleh instansi `Deret` yang berisi `Dir::Entri`.

Contohnya, menjalankan kode berikut:

```gara
cetak(derDir[0])
```

Akan mencetak representasi `Kata` dari instansi `Dir::Entri`.

```
<Dir::Entri: nama=".git" dir=benar alamat="/home/adamnoto/Documents/works/gara/.git" @0xc0003b0530>
```

### Dir::Entri

Kelas `Dir::Entri` adalah kelas yang merepresentasikan suatu direktori atau file. Kelas ini memiliki tiga atribut sebagai berikut:

- `nama` merepresentasikan nama file/direktori
- `dir` merepresentasikan suatu `Boolean` yang berisi `benar` jika `Dir::Entri` ini adalah sebuah direktori
- `alamat` merepresentasikan alamat lengkap dari `Dir::Entri` yang bersangkutan

Kelas ini juga memiliki metode-metode berikut:

- `dir?` mengutus `benar` jika `Dir::Entri` bersangkutan adalah suatu direktori
- `file?` mengutus `benar` jika `Dir::Entri` bersangkutan adalah suatu file
- `symlink?` mengutus `benar` jika `Dir::Entri` bersangkutan adalah suatu _symbolic link_
- `unixSocket?` mengutus `benar` jika `Dir::Entri` bersangkutan adalah suatu unix socket

## File

### Membaca suatu file

Kelas `File` memiliki fungsi statis `baca(arg1)` yang dapat digunakan untuk membaca suatu file.

```gara
ada data = File.baca(alamatFile)
```

Fungsi statis ini akan mengutus `Kata` yang merepresentasikan isi file. Jika file tidak dapat dibaca, atau file tidak ada, maka sistem akan melempar masalah.
