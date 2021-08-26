---
sidebar_position: 9
---

# Jika, Boolean dan Nil

Jika lapar, makan.

Jika belum mengerjakan PR, tidak boleh menonton TV.

Jika lampu lalu lintas berwarna merah, harus berhenti.

Semua hal diatas berisi aturan yang dijalankan atau dihentika jika suatu kondisi terpenuhi. Dalam bahasan ini kita akan membahas tentang `jika`, tipe data `Boolean` dan juga `nil`.

## Pengondisian menggunakan jika

`jika` adalah suatu kondisi yang memiliki blok yang akan dijalankan jika kondisi bernilai `benar`. Bentuk sintaksis `jika` adalah sebagai berikut:

```
jika <kondisi bernilai benar> {
    <baris-baris kode>
}
```

Sebenarnya, kita telah menggunakan `jika` sebelumnya saat kita mendiskusikan topik tentang [iterasi](/docs/iterasi).


```gara
ada ganjil = []

dari ada angka = 1; angka <= 10; angka++ {
    jika angka % 2 == 1 {
        ganjil += [angka]
    }
}
```

Kode `jika` diatas sangat sederhana bukan? Kode tersebut akan menambahkan suatu angka ke deret `ganjil` jikalau `angka` tidak habis saat dibagi dengan `2`. Misalnya, `3` tidak habis saat dibagi secara bulat dengan angka `2`, karena ia menyisahkan `1`. Oleh karena itu, `3` adalah angka ganjil, seperti halnya `1`, `5`, `7`, `9` dan seluruh kelipatan `2` seterusnya.

:::tip Penting
`jika` adalah suatu kondisi yang memiliki blok yang akan dijalankan jika kondisi bernilai `benar`
:::

## Pengondisian menggunakan jika dan lain

Kode `jika` juga bisa menerima blok `lain`. Blok `lain` akan dijalankan jika tidak ada blok `jika` yang memenuhi syarat. Bentuk sintaksisnya adalah sebagai berikut:

```
jika <kondisi bernilai benar> {
    <baris-baris kode A>
} lain {
    <baris-baris kode B>
}
```

Dalam pengondisian `jika`-`lain`, `<baris-baris kode A>` hanya akan dijalankan jika kondisi bernilai benar. Jika tidak, maka `<baris-baris kode B>` lah yang akan dijalankan.

:::tip Penting
Blok `lain` akan dijalankan jika tidak ada blok `jika` yang memenuhi syarat.
:::

Contoh penggunaan blok `lain` adalah sebagai berikut:

```gara
ada ganjil = [], genap = []

dari ada angka = 1; angka <= 10; angka++ {
    jika angka % 2 == 1 {
        ganjil += [angka]
    } lain {
        genap += [angka]
    }
}

cetak("Ganjil: " + ganjil)
cetak("Genap: " + genap)
```

Dalam contoh diatas, kita menambahkan `angka` ke deret `ganjil` jika `angka` tersebut tidak habis saat dibagi secara bulat dengan angka `2`. Selain itu, maka `angka` akan disatukan dengan deret `genap`.

Mudah bukan?

## Boolean

Boolean adalah cara menentukan nilai kebenaran. Di Gara, terdapat dua nilai `Boolean` yakni:

- `benar`
- `salah`

Pada hakikatnya, komputer hanya dapat memahami nilai-nilai `Boolean` dalam bentuk biner, seperti `0` yang melambangkan `salah` dan `1` yang melambangkan adanya arus atau kebenaran. Oleh karenanya banyak film-film hacker yang menunjukkan deretan angka `0` dan `1` seperti `101010010010101010101010100`.

## Operasi logika

Layaknya integer yang memiliki operator-operator penjumlahan, pengurangan dan lain sebagainya; `Boolean` pun memiliki operator-operatornya sendiri, meski tentu bukan operator matematika seperti penjumlahan dan pengurangan.

Kira-kira operator seperti apa ya? Coba kita bayangkan...

Katakanlah kita membuat aturan untuk sekolah taman kanak-kanak. Tiga aturan tersebut berbunyi:

1. Jika selesai makan dan masih jam istirahat, anak-anak dapat bermain dikelas
2. Jika berumur 4 atau 5 tahun, bisa mendaftar sebagai siswa taman kanak-kanak
3. Jika tidak dijemput orangtua, antarkan siswa ke rumah orangtuanya

Dalam aturan pertama, kita temukan kata hubung **dan**, dan dalam aturan kedua terdapat kata hubung **atau**. Nah, sebenarnya **dan** dan **atau** merupakan operator logika.

### Operator && (dan)

Di Gara, operator _dan_ disimbolkan dengan `&&`. Misal:

```
ada selesaiMakan = benar
ada masihJamIstirahat = salah

jika selesaiMakan && masihJamIstirahat {
    cetak("boleh main dikelas!")
}
```

Saat `benar` di-`&&`-kan dengan `salah`, maka hasilnya `salah`. Operator `&&` akan menghasilkan nilai `benar` jika seluruh syarat bernilai `benar`. Sebagai referensi, tabel nilai logika untuk operator `&&` adalah sebagai berikut.

| Boolean 1 | Boolean 2 | Boolean 1 && Boolean 2 |
|---|---|---|
| benar | benar | benar |
| benar | salah | salah |
| salah | benar | salah |
| salah | salah | salah |

:::tip Penting
Operator `&&` menghasilkan nilai `benar` jika semua syarat bernilai `benar`
:::

### Operator || (atau)

Tidak seperti operator `&&` yang menharuskan seluruh syarat bernilai `benar` agar hasil operator bernilai `benar`, operator `||` (_atau_) hanya perlu satu syarat bernilai `benar` agar nilai operasi bernilai `benar`.

Di Gara, operator _atau_ disimbolkan dengan `||`. Misal:

```
ada berumur4 = benar
ada berumur5 = salah

jika berumur4 || berumur5 {
    cetak("Bisa mendaftar sebagai siswa")
}
```

Sebagai referensi, tabel nilai logika untuk operator `||` adalah sebagai berikut.

| Boolean 1 | Boolean 2 | Boolean 1 || Boolean 2 |
|---|---|---|
| benar | benar | benar |
| benar | salah | benar |
| salah | benar | benar |
| salah | salah | salah |

:::tip Penting
Operator `||` menghasilkan nilai `benar` jika salah satu syarat bernilai `benar`
:::

### Operator ! (tidak)

Operator `!` (tidak) diletakkan didepan suatu nilai `Boolean` untuk mengubah nilai tersebut dari `benar` menjadi `salah`, atau sebaliknya dari `salah` menjadi `benar`. Sintaksisnya adalah sebagai berikut:

```
!<suatu nilai>
```

Sebagai referensi, tabel nilainya sebagai berikut.

| Boolean 1 | !Boolean 1 |
|---|---|
| benar | salah |
| salah | benar |

Sangat sederhana bukan? Contoh penerapan operator `!` adalah sebagai berikut:

```gara
ada dijemputOrtu = salah

jika !dijemputOrtu {
    cetak("antarkan siswa ke rumah orang tuanya")
}
```

:::tip Penting
Operator `!` menghasilkan nilai `benar` menjadi `salah`, dan sebaliknya menjadikan nilai `salah` menjadi `benar`
:::

## Pengondisian multi-cabang

Terkadang kita perlu membuat pengondisian dengan lebih dari 2 cabang. Misalkan, seorang dokter menilai suhu tubuh pasiennya dalam tiga kategori:

- Normal (tidak hangat dan tidak demam, antara 36,5 - 37,2 derajat Celcius)
- Subfebris (tubuh hangat tapi tidak demam, antara 37,2 - 37,5 derajat Celcius)
- Febris (tubuh sedang demam, > 37,5 derajat Celcius)

Dalam contoh diatas, kita bisa menggunakan kode berikut:

```gara
ada suhu = 37.4

jika suhu > 36.5 && suhu < 37.2 {
    cetak("Normal")
} lain {
    jika suhu >= 37.2 && suhu < 37.5 {
        cetak("Subfebris: hangat")
    } lain {
        cetak("Febris: demam")
    }
}
```

Perhatikan bahwa dalam kode diatas, blok `lain` memiliki kodisi `jika`-`lain` lagi. Sebenarnya, kita bisa menambahkan cabang bersyarat lainnya menggunakan `lain jika` seperti pada contoh dibawah ini.

```gara
ada suhu = 37.4

jika suhu > 36.5 && suhu < 37.2 {
    cetak("Normal")
} lain jika suhu >= 37.2 && suhu < 37.5 {
    cetak("Subfebris: hangat")
} lain {
    cetak("Febris: demam")
}
```

Seperti pada contoh diatas, cabang `lain jika` hanya akan dieksekusi jika cabang-cabang diatasnya tidak ada yang dieksekusi. Selain itu, maka cabang `lain` yang akan dieksekusi.

Tentu saja, kita bisa memiliki banyak cabang dengan `lain jika` seperti pada contoh dibawah ini.

```gara
ada nilai = 25.7

jika nilai >= 80 {
    cetak("A")
} lain jika nilai >= 70 {
    cetak("B")
} lain jika nilai >= 60 {
    cetak("C")
} lain jika nilai >= 50 {
    cetak("D")
} lain {
    cetak("F")
}
```

Dalam kasus diatas, `F` akan dicetak karena tidak ada cabang bersyarat yang dapat dijalankan. Jika kita hapus cabang `lain` pada kode diatas, maka tidak akan ada `kata` apapun yang dicetak, karena semua cabang tidak memenuhi syarat.

## Nirdefinisi

Saat kita mendeklarasikan suatu variabel:

```gara
ada a
```

Maka variabel tersebut bernilai `nil`, yang merupakan suatu nilai `Nirdefinisi` (belum terdefinisikan). Nilai `nil` ini juga ada di bahasa pemrograman lain sebagai `null` di Java, JavaScript, C dan C++ serta banyak bahasa lainnya.

Nilai `nil` sendiri bukanlah nilai `Boolean`, tapi nilai dari suatu kelas yang bernama `Nirdefinisi`. Akan tetap, nilai `nil` juga dapat menerima seluruh operator logika layaknya `Boolean`.

## Nilai yang dianggap benar dan yang dianggap salah

Ada dua nilai yang dianggap `salah` oleh Gara:

1. Nilai `salah` itu sendiri
2. Nilai `nil`

Selain kedua nilai tersebut, Gara akan menganggapnya sebagai `benar` jika nilai-nilai tersebut digunakan dalam operasi logika.

```gara
jika 123 { cetak("Aku dianggap benar") }
jika 123 && benar { cetak("Aku juga dianggap benar") }
```

Dalam contoh kode diatas, meskipun `123` bukanlah nilai `Boolean`, tapi ia dianggap bernilai `benar` dalam konteks tersebut.

Jika kita ganti `123` dengan `nil`, maka tidak akan ada `Kata` yang tercetak, karena `nil` dianggap sebagai `salah` jika digunakan dalam konteks operasi logika.

```gara
jika nil { cetak("Aku dianggap benar") }
jika 123 && nil { cetak("Aku juga dianggap benar") }
```

:::tip Penting
`nil` dan `salah` adalah nilai sesalah, yakni nilai yang bernilai `salah` jika digunakan dalam konteks operasi logika
:::
