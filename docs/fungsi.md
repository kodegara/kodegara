---
sidebar_position: 5
---

# Fungsi

Terdapat 3 jenis fungsi, atau aripicu, dalam Gara:

- Fungsi bebas
- Metode
- Fungsi statis

## Fungsi bebas

Fungsi bebas adalah fungsi yang tidak terikat pada suatu kelas.

```gara
ada sapa = fn (nama) { "Hai, " + nama }
sapa("Gara")
```

Pada contoh diatas, kita membuat suatu fungsi bebas baru yang kemudian kita tempatkan pada variabel `sapa`. Karena `sapa` adalah suatu variabel yang berisi fungsi, kita bisa memicunya seperti pada contoh diatas. Menjalankan [kode diatas](https://garatadika.herokuapp.com/sapa-fungsi-bebas) akan menghasilkan keluaran:

```
Hai, Gara
```
