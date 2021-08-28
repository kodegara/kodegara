---
sidebar_position: 2
---

# Riil

## Apa itu bilangan Riil?

Bilangan riil adalah bilangan yang memiliki angka dibelakang suatu pemisah, atau disebut juga sebagai bilangan desimal. Di ruang kelas, pemisah tersebut adalah koma, misal: 1,2 adalah bilangan riil. Dalam Gara, pemisah tersebut disimbolkan dengan titik, sehingga 1,2 dalam kelas menjadi `1.2` dalam Gara.

Contoh bilangan riil yang terkenal adalah PI, yang bernilai kira-kira `3.14`.

:::tip Penting
Bilagan `Riil` disebut juga bilangan desimal.
:::

## Operasi-operasi dalam bilangan Riil

Seluruh operasi yang melibatkan bilangan riil akan bernilai riil.

```gara
cetak(2 + 2)
cetak(2 + 2.5)
cetak(2.5 + 2)
```

Bilangan riil juga mendukung operasi-operasi penjumlahan, pengurangan, pengalian, dan pembagian. Namun, bilangan riil tidak mendukung operasi modulo (`%`).

Kita suatu variabel berisi bilangan `Riil`, ia dapat menerima operasi lapis seperti `+=`, seperti halnya bilangan integer. Begitu pula operasi `++` dan `--`.

## Keanehan bilangan Riil

Seluruh komputer didunia ini menggunakan sistem yang disebut _floating_ untuk merepresentasikan bilangan riil. Dan perlu kita ketahui, komputer pada hakikatnya hanya mengerti `0` dan `1` atau yang disebut sebagai sistem biner. Sehingga, angka riil-pun pada dasarnya direpresentasikan sebagai angka biner.

Terus, apa anehnya?

Keanehan yang dapat terjadi adalah, terkadang, komputer tidak bisa merepresentasikan angka secara pas dan sesuai.

_Lho_, maksudnya bagaimana?

Iya, coba kita jalankan kode berikut:

```gara
cetak(0.1 + 0.2)
```

Pasti akan tercetak nilai `0.3` pada layar. Betul kan? Tidak ada yang aneh kan?

Memang tidak ada yang nampak aneh karena hampir seluruh bahasa pemrograman, tidak terkecuali Gara, berusaha menampilkan agar bilangan riil terlihat senormal mungkin.

Masalahnya adalah, mayoritas kita manusia menghitung dengan basis 10. Dimana, `0.1 + 0.2` masih dapat dihitung dengan sempurnah menjadi `0.3`. Sedangkan dalam basis-2 (basis biner) yang dimengerti komputer, penghitungan `0.1 + 0.2` menghasilkan angka yang kira-kira bernilai `0.3000000000000000000108420217248550443400745280086994171142578125`.

Angka-angka seperti `0.3`, `0.4`, `0.6`, dan sebagainya memiliki nilai-nilai dibelakang koma yang sebenarnya lebih panjang. Untuk mengetahui nilai-nilai tersebut, kita bisa memanggil metode `keKataPersis` seperti berikut:

```gara
cetak(0.6.keKataPersis)
```

Singkatnya, terkadang apa yang ditunjukkan komputer sebagai `0.3` sebenarnya tidak bernilai persis `0.3`, tapi memiliki banyak angka dibelakang koma. Hal ini karena komputer menganut sistem biner yang tidak dapat secara tepat merepresentasikan beberapa nilai desimal. Umumnya, hal ini tidak menjadi masalah namun aplikasi perbankan atau aplikasi-aplikasi keuangan lainnya pada umumnya tidak pernah menggunakan bilangan `Riil` dalam menghitung keuangan.

## Operasi pembandingan

Karena sifat bilangan Riil yang terkadang tidak dapat direpresentasikan dengan tepat dalam sistem biner yang diterapkan oleh komputer, terkadang terdapat hal tak terduga saat melakukan pembandingan bilangan Riil.

Misalnya, seperti yang pernah kita bahas dalam [bab pengantar](/docs/pengantar), kode dalam bahasa JavaScript berikut mencetak nilai `11` bukan `10`:

```javascript
let count = 0

for (let i = 0; i < 1.0; i += 0.1) {
    count++
}

console.log(count)
```

Namun dalam Gara, kode mencetak nilai `10` dengan benar. Pertanyaannya adalah, bagaimana mungkin?

JavaScript, Gara, dan banyak bahasa lainnya termasuk Ruby, C, Java, C++, dan lain-lain sama-sama menerapkan sistem floating yang berdasarkan pada sistem [IEEE-754](https://standards.ieee.org/standard/754-2019.html). Bedanya, jika suatu nilai riil dengan nilai riil lainnya hanya berbeda 0.000000000001, atau 1.0e-12, maka Gara akan menganggap nilai tersebut sangat mirip dan dapat dianggap sama.

Untuk itu, Gara juga memiliki metode `.persis?` yang membandingkan apakah nilai suatu `Riil` persis sama dengan nilai `Riil` lain. Sehingga, pembandingan dua Riil menggunakan `persis?` sebagai berikut akan bernilai `salah`:

```gara
0.30000001.persis?(0.30000001000000001)
```

Meskipun jika dibandingkan menggunakan `==`, kedua `Riil` tersebut dapat dikategorikan sebagai sama, sehingga pembandingan berikut mengutus nilai `benar`:

```gara
0.30000001 == 0.30000001000000001
```

Hal itu dikarenakan nilai persis dari `0.30000001` dan `0.30000001000000001` tidak sama, karena berbeda `0.000000000000000010001765041178778`.

Selain operator pembanding `==`, `Riil` juga dapat dibandingkan menggunakan operator-operator berikut:

| Operator | Makna |
|---|---|
| == | Sama dengan |
| > | Lebih dari |
| < | Kurang dari |
| >= | Lebih dari, atau sama dengan |
| <= | Kurang dari, atau sama dengan |
| =~ | Mendekati (hanya berbeda sebanyak 0.01) |

Operator yang bersifat persis akan melakukan pembandingan dimana dua angka tidak dapat berbeda sedikitpun

## Kesimpulan

Kita dapat merepresentasikan angka desimal menggunakan tipe data `Riil`. Tetapi, ada angka-angka dalam bilangan `Riil` yang tidak dapat direpresentasikan dengan sempurna dalam sistem komputer biner. Oleh karenanya, Gara menggunakan pendekatan dalam melakukan pembandingan bilangan `Riil`. Jika pendekatan tersebut tidak diperlukan, kita bisa menggunakan `.persis?` untuk mengecek apakah dua angka `Riil` benar-benar bernilai sama.

Sekarang, kira-kira kenapa ya aplikasi perbankan biasanya tidak menggunakan Riil?

Iya, karena ada banyak bilangan yang tidak dapat direpresentasikan dengan tepat oleh sistem `Riil`. Padahal, sistem bank tidak boleh ada kekurangan atau kelebihan uang.

Namun demikian, bukan berarti `Riil` adalah tipe data yang cacat dan tidak bisa digunakan. Karena dalam aplikasi _scientific_, riset, kecerdasan buatan dan banyak lainnya, angka `Riil` akan lebih sering digunakan.
