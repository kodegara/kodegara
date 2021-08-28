---
slug: jenis-jenis-bahasa-pemrograman-yang-banyak-digunakan
title: Jenis-jenis bahasa pemrograman yang banyak digunakan
author: Adam Notodikromo
author_title: Pencipta Gara
author_url: https://github.com/adamnoto
author_image_url: https://avatars.githubusercontent.com/u/166730?v=4
tags: [gara, pemrograman]
---

Saat kita menggunakan peramban seperti Chrome atau Firefox, kemudian mengetik alamat URL, katakanlah: `https://kodegara.org`, peramban kita akan mendownload file HTML dari suatu server untuk kemudian ditampilkan. Tentunya, seluruh instruksi-instruksi tersebut ditulis dalam suatu bahasa pemrograman.

Ada banyak bahasa pemrograman di dunia ini: C, C++, Elixir, Python, Java, Ruby dan tidak terkecuali Gara. Pun demikian, ada banyak jenis bahasa pemrograman didunia ini.

Apa saja jenis-jenis bahasa pemrograman tersebut?

<!--truncate-->

## Bahasa pemrograman prosedural

Kita awali dengan yang pertama yakni bahasa pemrograman prosedural. Tipe ini adalah salah satu yang paling tua. Disebut bahasa pemrograman prosedural karena susunan program yang ditulis dengan bahasa ini terdiri dari prosedur-prosedur.

Apa itu prosedur? Prosedur sederhananya adalah [fungsi-fungsi bebas](/docs/fungsi/jenis-fungsi#fungsi-bebas). Fungsi-fungsi tersebut tidak terikat dengan kelas, modul atau konsep-konsep pemrograman berbasis objek lainnya.

Jadi, dalam satu program, bisa terdiri dari ribuan fungsi yang memanggil satu sama lain.

Salah satu bahasa prosedural yang paling terkenal dan masih digunakan hingga kini adalah C. Contoh lainnya adalah Pascal (yang digunakan dijaman ayah-ibu kita), ALGOL (yang digunakan oleh kakek kita), dan juga BASIC (yang juga digunakan kakek kita).

Contoh implementasi algoritma _bubble sort_ dalam bahasa Pascal adalah sebagai berikut:

```pascal
Procedure BubbleSort(numbers : Array of Integer; size : Integer);
Var
	i, j, temp : Integer;

Begin
	For i := size-1 DownTo 1 do
		For j := 2 to i do
			If (numbers[j-1] > numbers[j]) Then
			Begin
				temp := numbers[j-1];
				numbers[j-1] := numbers[j];
				numbers[j] := temp;
			End;

End.
```

Nah, karena bahasa ini tidak memiliki konsep kelas dan sejenisnya, pemrogram dalam bahasa ini sering menggunakan sistem struktural yang mengaitkan nama "objek" ke prosedur-prosedur yang mereka tulis.

Misalnya, jika Gara adalah bahasa yang benar-benar prosedural, Gara akan memiliki prosedur-prosedur seperti:

- `Deret_baru` untuk membuat suatu deret
- `Deret_Akhir` untuk mengutus elemen terakhir pada suatu deret
- `Deret_Cari` untuk mengutus posisi elemen dalam suatu deret
- `Deret_Hapus`, dan sebagainya.

Apakah bahasa ini masih digunakan? Jawabannya adalah sangat, sangat, sangat jarang digunakan, kecuali C yang masih banyak digunakan, dan akan terus digunakan. Kenapa? Karena C adalah bahasa yang sangat dekat dengan mesin.

## Bahasa pemrograman berbasis objek

Sesuai namanya, bahasa ini memiliki konsep objek dan kelas. Dalam bahasa Inggris, jenis bahasa ini disebut sebagai _object-oriented programming language_. Bahasa jenis ini bisa dianggap sebagai pengembangan, atau evolusi, dari bahasa pemrograman prosedural.

Buktinya, banyak bahasa-bahasa yang awalnya prosedural kemudian ditambahi fitur kelas lalu diberi nama baru. Misal, bahasa C yang prosedural, kemudian ditambahi fitur kelas dan kemudian dinamai C++. Begitu juga, Apple mengubah bahasa C menjadi Objective-C setelah ditambahi fitur-fitur pemrograman berbasis objek. Begitupun Pascal yang dirombak menjadi Object Pascal.

Bahkan, ada beberapa bahasa dalam golongan ini yang sepenuhnya tidak memungkinkan kita untuk memprogram dengan paradigma prosedural, misalnya Java. Di Java, semua fungsi/prosedur pasti berada di dalam suatu konstruksi kelas.

Contoh algoritma _bubble sort_ dalam bahasa Java, disadur dari situs [Geeksforgeeks](https://www.geeksforgeeks.org/bubble-sort/).

```java
// Java program for implementation of Bubble Sort
class BubbleSort
{
    void bubbleSort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1])
                {
                    // swap arr[j+1] and arr[j]
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }

    /* Prints the array */
    void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver method to test above
    public static void main(String args[])
    {
        BubbleSort ob = new BubbleSort();
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        ob.bubbleSort(arr);
        System.out.println("Sorted array");
        ob.printArray(arr);
    }
}
/* This code is contributed by Rajat Mishra */
```

Bahasa pemrograman prosedural dan berbasis objek juga disebut dengan bahasa imperatif, suatu tipe bahasa yang menjabarkan bagaimana cara melaksanakan suatu tugas secara detil.

## Bahasa pemrograman fungsional

Bahasa fungsional adalah salah satu paradigma pemrograman deklaratif. Disebut deklaratif, lawan dari imperatif, karena bahasa jenis ini berfokus ke apa yang ingin dicapai, bukan bagaimana cara mencapainya.

Misalkan, di bahasa imperatif seperti Java, untuk mengecek apakah suatu deret hanya berisi bilangan genap, kita dapat menggunakan kode sebagai berikut.

```java
public boolean isEvens (int[] array){
    for (int i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            return false;
        }
    }
    return true;
}
```

Sedangkan di bahasa deklaratif seperti bahasa-bahasa fungsional, kodenya akan tampak sebagai berikut:

```gara
fn semuaGenap(deret) {
    deret.semua?(fn (a) { a % 2 == 0 })
}
```

Perhatikan bahwa kode deklaratif biasanya lebih singkat, karena kita tidak perlu menjabarkan apa langkah-langkah yang perlu diambil, kita bisa fokus langsung ke inti masalah atau ke algoritma atau ke logika yang ingin diterapkan.

Bahasa-bahasa fungsional yang terkenal dan banyak digunakan di dunia industri salah satunya adalah Elixir, Scala dan Erlang. Sedangkan Elm adalah bahasa fungsional yang cukup banyak digunakan sebagai pengganti JavaScript dalam memprogram situs mereka.

Di dunia akademis, Haskell sangat banyak digunakan. Tipe bahasa ini memang pada awalnya lebih sering digunakan oleh akademisi/periset, daripada oleh dunia industri.

Sayangnya, bahasa yang 100% fungsional terkadang susah untuk dipelajari/dibaca bagi orang awam. Hal ini karena bahasa fungsional memiliki karekteristik khas yang bersumber dari konsep-konsep matematis.

Contoh algoritma _bubble sort_ dalam Haskell yang disadur dari situs [Rosettacode](https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort#Haskell) adalah sebagai berikut:

```haskell
bsort :: Ord a => [a] -> [a]
bsort s = case _bsort s of
               t | t == s    -> t
                 | otherwise -> bsort t
  where _bsort (x:x2:xs) | x > x2    = x2:(_bsort (x:xs))
                         | otherwise = x:(_bsort (x2:xs))
        _bsort s = s
```

## Gara termasuk yang mana?

Gara bertradisi imperatif, karena bahasa imperatif sangat mudah digunakan. Namun, Gara juga menerapkan banyak dari konsep-konsep dan ide-ide fungsional.

Misalnya, tidak seperti sebagian besar bahasa imperatif lainnya, Gara memungkinkan kita untuk menciptakan fungsi, atau mengutus fungsi dari fungsi/metode lainnya.

Memang, Gara mencoba menggabungkan paradigma deklaratif dan imperatif karena pengembang Gara meyakini tidak ada paradigma yang 100% sempurna. Karenanya pula, para pengguna Gara diharapkan akan memiliki pengetahuan yang lebih luas sehingga memungkinkan mereka berpindah ke bahasa lain tanpa merasa _shock_.

Apakah Gara satu-satunya bahasa yang mencoba menggabungkan keduanya? Ternyata tidak juga. Bahasa seperti Scala yang dikembangkan di Swiss, juga mencoba hal yang sama. Meskipun, Scala mungkin akan terlihat lebih rumit daripada Gara.

Nah, Gara tidak hanya menggabungkan kedua paradigma yang seperti air dan minyak itu. Gara mencoba agar proses penggabungan itu berakhir dengan sesuatu yang diharapkan tetap mudah difahami dan dipelajari, karena tujuan utama diciptakannya Gara adalah sebagai alat bantu pelajar menjadi _software engineer_ yang handal.
