---
sidebar_position: 2
---

# Halo, dunia!

Mari kita mulai dengan menyapa, berikut adalah kode untuk mencetak "Halo, dunia!" di Gara:

```gara title="Halo dunia"
cetak("Halo, dunia!")
```

Tentu saja, kita juga bisa menggunakan nama kita sendiri:

```gara title="Halo dengan nama"
ada nama = "Gara"
cetak("Halo, " + nama)
```

Atau, menggunakan style pemrograman berbasis objek, yang tentunya akan kita pelajari dalam bagian selanjutnya.

```gara title="Halo berbasis objek"
kelas Orang {
  ada nama

  fn sta baru(nama) {
    ada obj = baru()
    obj.nama = nama
    obj
  }

  fn sapa() {
    cetak("Halo, " + nama)
  }

  pribadi {
    fn sta baru() { super() }
  }
}

ada gara = Orang.baru("Gara")
gara.sapa()
```

Bagaimana, pemrograman itu, mudah, _kan_?
