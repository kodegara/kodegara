---
sidebar_position: 4
---

# Daftar operator

Terdapat dua jenis operator:

- Operator ikaritas (_unary_)
- Operator dwiritas (_binary_)
- Operator berlapis (_compound operator_)

## Operator ikaritas

Operator ikaritas adalah operator yang hanya bisa dioperasikan pada satu operand/variabel/objek.

### = (penempatan nilai)

Nilai bisa ditempatkan pada variabel saat variabel tersebut pertama kali didefinisikan:

```gara
ada satu = 1
ada dua = satu + satu
```

Atau saat variabel telah terdefinisikan:

```gara
ada tiga
tiga = dua + satu
```

Penempatan pada banyak variabel saat inisialiasi juga dapat dilakukan bersamaan, dipisahkan dengan tanda `,`:

```gara
ada empat = dua + dua,
    lima = 4 + 1,
    enam = tiga * dua
```

Jika variabel telah dideklarasikan, kita juga bisa melakukan penempatan pada banyak variabel sekaligus, dipisahkan dengan tanda `,`:

```gara
empat = dua * dua, lima = empat + satu, enam = tiga + tiga
```

Operator penempatan juga dapat digunakan dengan opreator keduk, menjadikan operasi penempatan nilai lebih sederhana:

```gara
empat, lima, enam = ..[4, 5, tiga * dua]
ada tujuh, delapan, sembilan = ..<7, empat + empat, lima + empat>
```

### ++ (naikSetingkat)

Metode yang akan dipanggil: `naikSetingkat`

Operator ini menaikkan nilai dari suatu variabel ke satu tingkat yang lebih tinggi.

```gara
ada a = 1
a++ // menjadi 2
```

Operator ini membutuhkan variabel, dan operator ini akan mengubah nilai dari variabel itu sendiri.

Contoh penerapan operator ini pada kelas buatan sendiri.

```gara
kelas Cabai {
    ada level

    fn sta baru() {
        punca.tuk(fn (obj) {
            obj.level = "normal"
        })
    }

    fn naikSetingkat() {
        jika ini.level == "normal" {
            ini.level = "pedas"
        } lain jika ini.level == "pedas" {
            ini.level = "sangat pedas"
        } lain jika ini.level = "sangat pedas" {
            ini.level = "pedas gila"
        }

        ini
    }
}

ada cabai = Cabai.baru
cabai++
cabai++
cetak(cabai)
```

Menjalankan kode diatas akan mengeluarkan hasil seperti dibawah ini.

```
<Cabai: level="sangat pedas" @0x1e380d0>
```

### -- (turunSetingkat)

Metode yang akan dipanggil: `turunSetingkat`

Operator ini menurunkan nilai dari suatu variabel ke satu tingkat yang lebih rendah.

```gara
ada a = 1
a-- // menjadi 0
```

Operator ini membutuhkan variabel, dan operator ini akan mengubah nilai dari variabel itu sendiri.

Contoh penerapan operator ini pada kelas buatan sendiri.

```gara
kelas Cabai {
    ada level

    fn sta baru() {
        punca.tuk(fn (obj) {
            obj.level = "normal"
        })
    }

    fn turunSetingkat() {
        jika ini.level == "pedas gila" {
            ini.level = "sangat pedas"
        } lain jika ini.level == "sangat pedas" {
            ini.level = "pedas"
        } lain jika ini.level = "pedas" {
            ini.level = "normal"
        }

        ini
    }
}

ada cabai = Cabai.baru
cabai.level = "sangat pedas"
cabai--
cetak(cabai)
```

Menjalankan kode diatas akan mengeluarkan hasil seperti dibawah ini.

```
<Cabai: level="pedas" @0x693c10>
```

### ! (negasi Boolean)

Operator negasi yang menegasikan nilai `Boolean` menjadi kebalikannya, `nil` menjadi `salah`, dan nilai sebenar lain menjadi `salah`.

```gara
cetak(!benar)
cetak(!salah)
cetak(!nil)
cetak(!123)
```

### - (negasi angka)

Operator ikaritas `-` mengubah angka yang positif menjadi negatif, dan negatif menjadi positif.

```gara
ada angka1 = -12.5
ada angka2 = 42

cetak(-angka1)
cetak(-angka2)
```

### [] (padaPosisi)

Operator ini digunakan untuk mengakses elemen pada lokasi tertentu dalam `Deret`, `Rangkap`, `Peta` atau kelas-kelas lain yang mengimplementasikan metode `padaPosisi`.

```gara
ada ibukota = ["Jakarta", "London", "Tokyo"]
cetak(ibukota[0])
```

### \[k: n\] (isiDi)

Operator ini digunakan untuk memanipulasi nilai pada lokasi tertentu dalam `Deret`, `Peta` atau kelas-kelas lain yang mengimplementasikan metode `isiPosisi`.

```gara
ada biodata = {"nama": "Adam Notodikromo", "umur": 5}
biodata = biodata["umur": 6]
```

### .. (keduk)

Operator ini sering disandingkan dengan objek dari kelas `Deret` ataupun `Rangkap` dalam suatu operasi penempatan.

```gara
ada nama, umur = ..["Adam Notodikromo", 6]
```

## Operator dwiritas

Operator dwiritas adalah operator yang membutuhkan dua operand/variabel/objek untuk dapat dioperasikan.

### + (tambah)

Operator ini digunakan untuk menambahkan suatu objek ke objek lain. Operator ini sangat sering digunakan dengan tipe data angka seperti `Integer` dan `Real`, dan juga `Deret`.

```gara
cetak(1 + 2)
cetak([1] + [2])
```

Contoh penerapan operator `+` pada kelas buatan sendiri adalah sebagai berikut.

```gara
kelas Pecahan {
    ada pembilang
    ada penyebut

    fn sta baru(pembilang, penyebut) {
        baru.tuk(fn (p) {
            p.pembilang = pembilang
            p.penyebut = penyebut
        })
    }

    fn tambah(pecLain) {
        tuntut pecLain itu Pecahan

        jika penyebut == pecLain.penyebut {
            Pecahan.baru(pembilang + pecLain.pembilang, penyebut)
        } lain {
            // menyamakan penyebut
            ada pIni = Pecahan.baru(pembilang * pecLain.penyebut, penyebut * pecLain.penyebut)
            ada pItu = Pecahan.baru(pecLain.pembilang * penyebut, pecLain.penyebut * penyebut)

            pIni + pItu
        }
    }
}

ada p1 = Pecahan.baru(1, 3)
ada p2 = Pecahan.baru(2, 7)
cetak(p1 + p2)
```

### - (kurang)

Operator ini digunakan untuk mengurangi suatu objek dari objek lain. Operator ini sangat sering digunakan dengan tipe data angka seperti `Integer` dan `Real`, dan juga `Deret`.

```gara
cetak(5 - 1)
cetak(-1.1253 - 5)
```

Contoh penerapan operator `-` pada kelas buatan sendiri adalah sebagai berikut.

```gara
kelas Pecahan {
    ada pembilang
    ada penyebut

    fn sta baru(pembilang, penyebut) {
        baru.tuk(fn (p) {
            p.pembilang = pembilang
            p.penyebut = penyebut
        })
    }

    fn kurang(pecLain) {
        tuntut pecLain itu Pecahan

        jika penyebut == pecLain.penyebut {
            Pecahan.baru(pembilang - pecLain.pembilang, penyebut)
        } lain {
            // menyamakan penyebut
            ada pIni = Pecahan.baru(pembilang * pecLain.penyebut, penyebut * pecLain.penyebut)
            ada pItu = Pecahan.baru(pecLain.pembilang * penyebut, pecLain.penyebut * penyebut)

            pIni - pItu
        }
    }
}

ada p1 = Pecahan.baru(1, 3)
ada p2 = Pecahan.baru(2, 7)
cetak(p1 - p2)
```

### * (ganda)

Operator ini digunakan untuk menggandakan/mengalikan suatu objek dengan objek lain. Operator ini sangat sering digunakan dengan tipe data angka seperti `Integer` dan `Real`.

```gara
cetak(2 * 5)
cetak(2.5 * 5)
```

Contoh penerapan operator `*` pada kelas buatan sendiri adalah sebagai berikut.

```gara
kelas Porsi {
    ada isi = {}

    fn ganda(angka) {
        tuntut angka itu Angka

        ada isiBaru = {}
        isi.tiap(fn (n, k) {
            isiBaru = isiBaru[n: k * angka]
        })

        Porsi.baru.tuk(fn (p) { p.isi = isiBaru })
    }
}

ada p = Porsi.baru
p.isi = {"Nasi": 1, "Ayam Goreng": 2, "Es Soda": 1}
cetak(p * 2)
```

### / (bagi)

Operator ini digunakan untuk menggandakan/mengalikan suatu objek dengan objek lain. Operator ini sangat sering digunakan dengan tipe data angka seperti `Integer` dan `Real`.

```gara
cetak(5 / 2)
cetak(15.12 / 2.33)
```

Contoh penerapan operator `/` pada kelas buatan sendiri adalah sebagai berikut.


```gara
kelas Porsi {
    ada isi = {}

    fn bagi(angka) {
        tuntut angka itu Angka

        ada isiBaru = {}
        isi.tiap(fn (n, k) {
            isiBaru = isiBaru[n: k.keRiil / angka]
        })

        Porsi.baru.tuk(fn (p) { p.isi = isiBaru })
    }
}

ada p = Porsi.baru
p.isi = {"Nasi": 1, "Ayam Goreng": 2, "Es Soda": 1}
cetak(p / 2)
```

### % (modulo)

Operator ini sering digunakan pada tipe data `Integer` yang fungsinya adalah untuk mencari sisa hasil bagi suatu bilangan `Integer` dengan bilangan `Integer` lainnya. Operator.

```gara
cetak(5 % 2)
```

### ** (pangkat)

Operator ini umum digunakan dengan tipe data turunan dari `Angka`. Dengan operator ini, kita bisa mendapatkan bilangan hasil pangkat antara bilangan tersebut dengan bilangan lainnya.

```gara
cetak(4 ** 7)
cetak(2 ** 2.5)
```

### == (sama?)

Operator yang mengutus `benar` jika dua objek dapat dianggap sama.

```gara
cetak(1 == 1)
cetak("Gara" == "Gara")
cetak(benar == salah)
```

Contoh penerapan operator `==` ini pada kelas buatan sendiri adalah sebagai berikut.

```gara
kelas Siswa {
    ada nomorInduk
    ada nama

    fn sta baru(nomorInduk, nama) {
        baru.tuk(fn (s) {
            s.nomorInduk = nomorInduk
            s.nama = nama
        })
    }

    fn sama?(siswaLain) {
        nomorInduk == siswaLain.nomorInduk &&
            nama == siswaLain.nama
    }
}

ada s1 = Siswa.baru(10122, "Feriawan")
ada s2 = Siswa.baru(10123, "Ferlin")
ada s3 = Siswa.baru(10122, "Feriawan")

cetak(s1 == s3)
cetak(s1 == s2)
cetak(s2 == s3)
```

### != (beda?)

Operator yang mengutus `benar` jika dua objek tidak dapat dianggap sama.

```gara
cetak(benar != salah)
cetak(1 != 1)
```

Meskipun operator ini dapat ditimpa disuatu kelas dengan cara mengimplementasikan metode `beda?`, ada baiknya hal tersebut tidak dilakukan.

### =~ (sesuai?)

Operator yang mengutus `benar` jika suatu objek dapat dinyatakan sesuai dengan suatu pola tertentu. Operator ini akan sering digunakan untuk mencocokkan suatu `Kata` dengan suatu `EkspresiRegular`.

```gara
ada erEmail = #r{^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$}
cetak("gara@kodegara.net" =~ erEmail)
cetak("bukan email yang @benar.com" =~ erEmail)
```

Operator ini juga dapat digunakan pada tipe data `Riil` untuk mengecek apakah suatu nilai `Riil` mendeketai nilai `Riil` lainnya:

```gara
ada a = 1.25
ada b = a - 0.005
cetak(a =~ b)
```

Contoh penerapan operator `=~` ini pada kelas buatan sendiri adalah sebagai berikut.

```gara
// representasi seluruh warna dalam komputer dihitung dari
// perpaduan 3 komponen warna utama: merah, hijau, biru
kelas Warna {
    ada merah, hijau, biru

    fn sta baru(merah, hijau, biru) {
        baru.tuk(fn (w) {
            tuntut merah.antara?(0, 255)
            tuntut hijau.antara?(0, 255)
            tuntut biru.antara?(0, 255)

            w.merah = merah
            w.hijau = hijau
            w.biru = biru
        })
    }

    fn sesuai?(wLain) {
        ((persenBedaMerah(wLain) +
            persenBedaHijau(wLain) +
            persenBedaBiru(wLain)) / 3 * 100) < 50.0
    }

    pribadi {
        fn persenBedaMerah(wLain) { (merah - wLain.merah).mutlak.keRiil / 255 }
        fn persenBedaHijau(wLain) { (hijau - wLain.hijau).mutlak.keRiil / 255 }
        fn persenBedaBiru(wLain) { (biru - wLain.biru).mutlak.keRiil / 255 }
    }
}

ada hijauTua = Warna.baru(0, 100, 0)
ada hijauLimau = Warna.baru(50, 205, 50)
ada merahMuda = Warna.baru(255, 105, 180)
ada tomat = Warna.baru(255, 99, 71)

cetak(hijauTua =~ hijauLimau)
cetak(hijauLimau =~ merahMuda)
cetak(tomat =~ merahMuda)
```

### > (lebihDari?)

Operator yang mengutus `benar` jika suatu objek dapat dinyatakan lebih besar atau lebih tinggi urutannya dari objek lain. Operator ini sering digunakan untuk membandingkan suatu `Angka` (baik itu `Integer` ataupun `Riil`) dengan `Angka` lainnya.

```gara
cetak(1.1 > 1)
cetak(2 > 3)
cetak(3 > 2)
```

Operator `>` ini juga dapat diterapkan pada kelas buatan sendiri dengan menimplementasikan metode `lebihDari?`.

### >= (samaAtauLebihDari?)

Operator yang mengutus `benar` jika suatu objek memenuhi salah satu syarat berikut ini:

- Lebih besar atau lebih tinggi urutannya dari objek lain
- Kedua objek dapat dinyatakan sama satu dengan lainnya

Operator ini sering digunakan untuk membandingkan suatu `Angka` dengan `Angka` lainnya.

```gara
cetak(1.1 >= 1.1)
cetak(2 >= 3)
cetak(3 >= 2)
```

Operator `>=` ini juga dapat diterapkan pada kelas buatan sendiri dengan mengimplementasikan metode `samaAtauLebihDari?`.

### < (kurangDari?)

Operator yang mengutus `benar` jika suatu objek dapat dinyatakan lebih kecil atau lebih rendah urutannya dari objek lain. Operator ini sering digunakan untuk membandingkan suatu `Angka` (baik itu `Integer` ataupun `Riil`) dengan `Angka` lainnya.

```gara
cetak(1.1 < 1)
cetak(2 < 3)
cetak(3 < 2)
```

Operator `<` ini juga dapat diterapkan pada kelas buatan sendiri dengan mengimplementasikan metode `kurangDari`.

### <= (samaAtauKurangDari?)

Operator yang mengutus `benar` jika suatu objek memenuhi salah satu syarat berikut ini:

- Lebih kecil atau lebih rendah urutannya dari objek lain
- Kedua objek dapat dinyatakan sama satu dengan lainnya

Operator ini sering digunakan untuk membandingkan suatu `Angka` dengan `Angka` lainnya.

```gara
cetak(1.1 <= 1.1)
cetak(2 <= 3)
cetak(3 <= 2)
```

Operator `<=` ini juga dapat diterapkan pada kelas buatan sendiri dengan mengimplementasikan metode `samaAtauKurangDari?`.

### && (logika "dan")

Operator logika yang mengutus nilai sebenar jika dua objek bernilai sebenar.

```gara
cetak(benar && benar)
cetak(1 && 2)
cetak(1 && salah)
cetak(1 && nil)
```

### || (logika "atau")

Operator logika yang mengutus nilai sebenar jika salah satu objek bernilai sebenar.

```gara
cetak(salah || benar)
cetak(salah || 123)
cetak(nil || benar)
```

### << (dorongMasuk!)

Operator ini mungkin akan sangat jarang digunakan. Belum ada tipe data yang menggunakan operator ini.

Contoh penerapan operator `<<` ini pada kelas buatan sendiri adalah sebagai berikut.

```gara
kelas RuangKelas {
    ada tingkat
    ada derSiswa = []

    fn dorongMasuk!(siswa) {
        tuntut siswa itu Siswa

        jika siswa.klas.tingkat == tingkat {
            jika !derSiswa.berisi?(siswa) {
                derSiswa += [siswa.nama]
            }
        } lain {
            lempar "Beda tingkatan"
        }
    }
}
```

### >> (dorongKeluar!)

Operator ini mungkin akan sangat jarang digunakan. Belum ada tipe data yang menggunakan operator ini.

Contoh penerapan operator `>>` ini pada kelas buatan sendiri adalah sebagai berikut.


```gara
kelas RuangKelas {
    ada derSiswa = []

    fn dorongKeluar!(siswa) {
        tuntut siswa itu Siswa

        ada indeks = derSiswa.cari(siswa)

        jika indeks != nil && indeks >= 0 {
            ada terhapus, derSiswaBaru = ..derSiswa.hapusDi(indeks)
            derSiswa = derSiswaBaru
            terhapus
        }
    }
}
```

### () (picu)

Operator ini digunakan untuk memicu suatu fungsi. Namun, jika sebuah metode dengan nama `picu` didefinisikan di dalam sebuah kelas, maka instansi dari kelas tersebut dapat dipicu layaknya suatu fungsi, seperti dalam kasus `Rangkap::Pabrik` yang telah kita diskusikan [disini](/docs/koleksi#rangkappabrik).

Umumnya sebaiknya kita tidak mendefinisikan metode ini dalam suatu kelas, tapi jika dirasa diperlukan dan tepat dalam penggunaannya, maka tentu kita bisa menggunakan fitur ini.

Contoh penerapan operator `()` ini pada kelas buatan sendiri adalah sebagai berikut. Kode berikut hanyalah demonstrasi, dan bukan merupakan contoh penerapan operator `()` yang layak ditiru.

```gara
kelas Contoh {
    fn picu(rgArg) {
        cetak("aku dipicu dengan argumen yakni: " + rgArg)
    }
}
```

## Operator berlapis

Operator berlapis adalah operator yang melibatkan satu variabel dan suatu objek. Terdapat empat jenis operator berlapis:

- `+=` (setara dengan `var = var + obj`)
- `-=` (setara dengan `var = var - obj`)
- `*=` (setara dengan `var = var * obj`)
- `/=` (setara dengan `var = var / obj`)

Contoh penggunaan operator berlapis:

```gara
ada angka = 1
angka += 1
cetak(angka)

ada deret = [1, 2, 3]
deret += [4, 5, 6]
cetak(deret)
```
