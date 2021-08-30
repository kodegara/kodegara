---
sidebar_position: 4
---

# Blok lalu

Dalam [materi dasar penanganan masalah](/docs/masalah/penanganan-masalah) kita telah pelajari sintaksis berikut:

```
coba {
    <baris-baris kode>
} tahan (<variabel>) {
    <kode setelahnya>
}
```

Bahasan selanjutnya adalah tentang blok `lalu`. Blok `lalu` adalah bagian dari mekanisme penanganan masalah, dimana, kode-kode dalam blok ini akan selalu dijalankan terlepas dari apakah terjadi masalah atau tidak. Sintaksisnya sangat sederhana:

```
coba {
    <baris-baris kode>
} tahan (<variabel>) {
    <kode setelahnya>
} lalu {
    <kode yang pasti dijalankan ada/tidak adanya masalah>
}
```

Bahkan, kita tidak perlu memiliki blok `tahan` jika kita memiliki blok `lalu`:

```
coba {
    <baris-baris kode>
} lalu {
    <kode yang pasti dijalankan ada/tidak adanya masalah>
}
```

:::tip Penting
Kode dalam blok `lalu` akan selalu dijalankan terlepas dari ada/tidaknya masalah
:::
