---
sidebar_position: 13
---

# Ekspresi reguler

Bagaimana kita bisa memastikan bahwa suatu objek `Kata` adalah email? Bagaimana kita memastikan bahwa suatu objek `Kata` adalah nomor telpon?

Untuk kasus-kasus seperti itu, kita menggunakan sesuatu yang disebut sebagai ekspresi reguler (_regular expression_).

Ekspresi reguler adalah topik bahasan yang susah difahami dalam sekali baca. Ia juga bukan bahasan yang sederhana. Puluhan buku ditulis untuk membahas topik ini. Jelas, sebagai pemrogram yang handal kita wajib mengetahui apa itu ekspresi regular dan kegunaanya.

Jika pada akhirnya pembaca dapat mengatakan: "oh, untuk validasi apakah email itu betul atau tidak, kita bisa gunakan ekspresi reguler lho..." maka tujuan dari artikel ini dapat dikatakan terpenuhi; yakni, untuk memperkenalkan topik yang ekspresi reguler dan kegunaannya.

## Sintaksis

Suatu `EkspresiRegular` dibuat menggunakan sintaksis literal sebagai berikut:

```
#r{<pola ekspresi regular>}
```

Kita kemudian dapat menggunakan operator `=~` untuk mencocokkan apakah suatu `Kata` sesuai dengan suatu `EkspresiRegular`.

## Jangkar: pengawal dan pengakhir

`\AGa` mengutus benar jika suatu baris kata diawali dengan kata `"Ga"`:

```gara
cetak("Gara" =~ #r{\AGa})
cetak("Gabung" =~ #r{\AGa})
cetak("Gajah" =~ #r{\AGa})
cetak("Gagak" =~ #r{\AGa})
cetak("Guru" =~ #r{\AGa})
```

Karena `\A` hanya mencocokkan untuk suatu `Kata` yang hanya memiliki satu baris, maka pola ini akan mengutus `salah` jika `Kata` yang sebenarnya dapat cocok, diawali dengan (`\n`), misal:

```gara
cetak("\nGara\n" =~ #r{\AGa})
```

<!-- Agar bisa mencocokkan awal dari suatu `Kata` yang dapat memiliki banyak baris, kita menggunakan `^` diikuti dengan `m`:

```gara
cetak("Gara\nGagaga" =~ #r{\AGara})
``` -->

Sedangkan untuk mencocokkan selama akhir kata memenuhi suatu pola, kita menggunakan `\z` (`z` nya kecil):

```gara
cetak("raga" =~ #r{ga\z})
cetak("boga" =~ #r{ga\z})
cetak("toga" =~ #r{ga\z})
cetak("naga" =~ #r{ga\z})
cetak("cagar" =~ #r{ga\z})
```

Jadi yang perlu diingat:

- `\A` mencocokkan `Kata` (tanpa pembaris) yang diawali dengan suatu pola
- `\z` mencocokkan `Kata` (tanpa pembaris) yang diakhiri dengan suatu pola

## Pengulangan — * + ? dan \{\}

Kita bisa menggunakan `*`, `+`, `?` dan pola `{}` sebagai pola pengulangan. Pengulangan disini bermaksud: seberapa banyak huruf-huruf, angka-angka atau pola-pola yang dapat diterima agar suatu `EkspresiRegular` bisa dikatakan cocok.

- `abc*` cocok jika ada subkata berpola `"ab"` kemudian diikuti `"c"` sebanyak-banyaknya ataupun tidak sama sekali (misal: `"abc"`, `"ab"`, `"abccccccccc"`)
- `abc+` cocok jika ada subkata berpola `"ab"` diikuti minimal satu karakter `"c"` (misal: `"abc"`, `"abcc"`, `"abccccccccc"`)
- `abc?` cocok jika ada subkata berpola `"ab"` kemudian diikuti dengan ada/tidak-adanya `"c"` (misal: `"ab"`, `"abc"`, `"abcc"`)
- `abc{2}` cocok jika ada subkata berpola `"ab"` diikuti 2 `"c"` (misal: `"abcc"`)
- `abc{2,}` cocok jika ada subkata berpola `"ab"` diikuti minimal 2 `"c"` (misal: `"abcc"`, `"abccc"`, `"abccccccccc"`)
- `abc{2,5}` cocok jika ada subkata berpola `"ab"` diikuti minimal 2 `"c"` dan maksimal 5 `"c"` (misal: `"abcc"`, `"abccc"`, `"abccccc"`). Pastikan tidak ada spasi antara `2`, `,` dan `,5`.
- `a(bc)*` cocok jika ada subkata berpola `"a"` diikuti `"bc"` sebanyak-banyaknya ataupun tidak sama sekali (misal: `"a"`, `"abc"`, `"axyz"`)
- `a(bc){2,5}` cocok jika ada subkata berpola `"a"` diikuti minimal 2 dan maksimal 5 `"bc"` (misal: `"a"`, `"abcbc"`, `"abcbcbc"`). Pastikan tidak ada spasi antara `2`, `,` dan `,5`.


Tentu saja, kita bisa menggabungkan pola pembilang dengan pola jangkar. Misal, suatu ekspresi reguler `#r{abc{2}}` akan cocok dengan: `"abcc"`, pun `"abccc"` ataupun `"abcccd"`. Jika kita inginkan agar ia hanya bisa cocok jika diakhiri dengan pola tersebut, maka kita gunakan `#r{abc{2}\z}`:

```gara
cetak("abcc" =~ #r{abc{2}\z})  // benar
cetak("abccc" =~ #r{abc{2}\z}) // salah
```

## Atau — | dan \[\]

Operator `[]` digunakan untuk mencocokkan apapun yang ada dalam `[]` tersebut:

```gara
cetak("abcbc" =~ #r{a[bc]})
cetak("ab" =~ #r{a[bc]})
cetak("ac" =~ #r{a[bc]})
cetak("ad" =~ #r{a[bc]}) // salah
```

Atau, menggunakan `|`:

```gara
cetak("ab" =~ #r{a(b|c)})
cetak("ac" =~ #r{a(b|c)})
cetak("abc" =~ #r{a(b|c)})
cetak("ad" =~ #r{a(b|c)}) // salah
```

Tentu saja, kita bisa menggabungkan pola ini dengan pola jangkar dan pola-pola lainnya.

```gara
cetak("toga" =~ #r{g(a|u)\z})
cetak("tugu" =~ #r{g(a|u)\z})
cetak("gugur" =~ #r{g(a|u)\z}) // salah
```

Dengan menggunakan `[]` kita juga bisa mencocokkan karakter dalam lingkup tertentu:

```
cetak("abc" =~ #r{[a-z]})
cetak("ABC" =~ #r{[A-Z]})
cetak("aBc" =~ #r{[A-Za-z]})
cetak("0123" =~ #r{[0-9]})
cetak("aBc123" =~ #r{[A-Za-z0-9]})
```

Jika `[]` diawali dengan `^`, maka berarti tidak. Misal: `[^a-z]` berarti apapun yang tidak dari `"a"` hingga `"z"`.

## Kelas

Ekspresi reguler juga memiliki beberapa kelas:

- `\d` cocok dengan satu digit angka `0`, `1`, `2`, `3` hingga `9` (sama seperti `0-9` dalam `[0-9]`)
- `\w` cocok dengan satu karakter alfabet, angka, dan juga tanda hubung `_`
- `\s` cocok dengan satu karakter spasi (termasuk `tab` (`\t`) dan karakter pembaris (`\n`))
- `.` cocok dengan karakter apapun
- `\D` kebalikan dari `\d`, cocok dengan apapun selain angka (sama seperti `^0-9` dalam `[^0-9]`)
- `\W` kebalikan dari `\w`
- `\S` kebalikan dari `\s`

## Karakter lepas

Ekspresi reguler juga memiliki karakter lepasnya. Karakter-karakter `^`, `.`, `[`, `$`, `(`, `)`, `|`, `*`, `+`, `?` memiliki arti spesial, seperti yang telah kita bahas. Oleh karenanya, untuk mencocokkan karakter-karakter tersebut, kita perlu menggunakan karakter lepasnya, yang diawali dengan tanda `\`.

Misal:

- Karakter lepas `.` adalah `\.` yang akan mencocokkan dengan suatu titik (bukan karakter apapun, jika hanya `.`)
- Karakter lepas `^` adalah `\^`
- Karakter lepas `[` adalah `\[`

Ada juga karakter lepas `\n` untuk pembaris, `\t` untuk tab, dan `\r` untuk _carriage return_.

<!-- ## Bendera

g berarti global, memulai pencarian dari akhir kata yang ditemukan. m berarti multiline (multi-baris), yang dapat digunakan dengan `^` dan `$`. dan `i` yang berarti _insensitive_ yakni dapat mencocokkan `a` dan `A` meskipun pola hanya menuliskan `a`. -->

## Batas

Setelah mengetahui karakter jangkar seperti `\A` dan `\z`, sekilas `\b` akan memiliki tingkah laku yang mirip dengan [jangkar](/docs/ekspresi-regular#jangkar-pengawal-dan-pengakhir), namun sebenarnya sangat berbeda.

Katakanlah, kita memiliki sebuah `Kata` sebagai berikut:

```
ab abc abcc babc
```

Kita ingin mengecek apakah kata tersebut memiliki subkata `"abc"` secara utuh dan bulat; dalam artian, tidak sebagian seperti `"ab"`, atau tidak berlebihan seperti `"abcc"` maupun `"babc"`. Dalam kasus ini, kita bisa menggunakan pembatas `\b`: `#r{\babc\b}`

`\b` dalam artian teknisnya akan cocok dengan suatu subkata yang pada posisi tersebut, satu sisi adalah suatu karakter layaknya `\w`, sedangkan sisi lainnya adalah non-karakter seperti spasi ataupun awal dari suatu kata. Itulah kenapa karakter `\b` disebut pembatas (_boundary_), karena ia akan mencocokkan secara penuh dan utuh suatu subkata jika ia diapit diantara 2 `\b` seperti dalam contoh `\babc\b`.

Kebalikannya, juga terdapat `\B`, yang akan cocok dalam semua kondisi dimana `\b` tidak cocok, alias `\B` adalah negasi atau kebalikan `\b`. Dengan begitu, pola ekspresi reguler `\Babc\B` akan cocok jika subkata tersebut diapit oleh karakter-karakter kata lainnya.

## Ekspresi yang tidak didukung

Gara tidak mendukung tiga jenis ekspresi yang didukung oleh beberapa bahasa lainnya. Ketiga jenis ekspresi tersebut adalah:

- Kilas balik (_back-reference_): `\1`, `\2`, `\3`.
- Lihat depan (_look ahead_): `?=`, `?!`
- Lihat belakang (_look behind_): `?<=`, `?<!`

Pola yang menggunakan ketiga ekspresi diatas kebanyakan tidak dapat diselesaikan dalam waktu linear (`O(n)`). Oleh karenanya, Gara tidak berencana untuk mendukung ketiga ekspresi tersebut.

Juga, suatu ekspresi reguler akan jauh lebih rumit untuk dapat difahami ketika ia menggunakan salah satu pola diatas.

Selain itu, ekspresi reguler, dari namanyapun, bisa ditebak bahwa kegunaannya adalah untuk hal-hal yang bersifat  reguler. Jika kita menggunakan kilas balik untuk melakukan pencocokan, maka sudah jelas itu sudah diluar ranah _regular grammar_ (tata bahasa reguler).

Namun, beberapa bahasa seperti Perl, PHP dan Ruby memang memiliki kemampuan untuk melakukan ketiga hal diatas.

## Ekspresi-ekspresi umum

### Email

Kode ekspresi reguler berikut akan cocok dengan email yang bisa dikatakan valid.

```gara
#r{\b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b}
```

### IPv4

Kode ekspresi reguler berikut akan cocok dengan alamat IPv4

```gara
#r{\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b}
```

### URL

Kode ekspresi reguler berikut akan cocok dengan URL yang bisa dikatakan valid.

```gara
#r{^(((h..ps?|f.p):\/\/)?(?:([\w\-\.])+(\[?\.\]?)([\w]){2,4}|(?:(?:25[0–5]|2[0–4]\d|[01]?\d\d?)\[?\.\]?){3}(?:25[0–5]|2[0–4]\d|[01]?\d\d?)))*([\w\/+=%&_\.~?\-]*)$}
```
