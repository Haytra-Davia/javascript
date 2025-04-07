// ** soal 1
const user = {
    nama: "Aldi",
    umur: 25,
  };
  
  console.log("nama" in user);     // (1)
  console.log("alamat" in user);   // (2)


  // 1 output dari baris 1 dia akan mengeluarkan true karena ada isinya di dalam properti user kalo baris 2 dia akan false karena dia gk masuk properti user

  //karena in itu bagaikan anak dari properti itu sebagai ortunya nah in itu bisa akses true walaupun propertinya gk kelihatan
  
// ** soal 2

let nilai = 85;
let status = nilai >= 75 ? "Lulus" : "Gagal";
console.log(status);

// lulus
// berubah outputnya 60 berubah jadi gagal

//** soal 3 */
let username = null;
let displayName = username ?? "Guest";
console.log(displayName);

//Guest
//bedanya klo ?? buat pengecekan null dan undifine klo tanda||buat cari trutly

// ** soal 4
const user1 = {
  nama: "Andi",
  alamat: {
    kota: "Bandung",
    kodePos: 40123
  }
};

console.log(user1.alamat?.kota);        // (1)
console.log(user1.kontak?.email);       // (2)

// bandung
//karena ada tanda ? nah di sebut juga object cleaning dia akang mengencek apakah kontak ada di dalam user klo ga ada dia akan di undifinekan atau di null kan
//klo gk make ?. error

// ** soal 5
let a = 0;
let b = "Halo";
let c = "";
let d = undefined;

console.log(Boolean(a));  // (1)
console.log(Boolean(b));  // (2)
console.log(Boolean(c));  // (3)
console.log(Boolean(d));  // (4)

// baris 1 3 4
// karena kalo peraturanya falsy string kosong "" 0 undifine null

//**soal 6 */
let hasil1 = "Hello" && 123;
let hasil2 = 0 || "Fallback";
let hasil3 = null && "Tes";
let hasil4 = "Hai" || false;

console.log(hasil1);  // (1)
console.log(hasil2);  // (2)
console.log(hasil3);  // (3)
console.log(hasil4);  // (4)

// baris1 = 123, baris2 = fallback,baris3 = null, baris4 = hai
//karena operator non bolean gunanya buat cek true dan false nah klo tanda && dia akan mengecek false dan klo gk ada yang false dia akan mengambil baris ahir, klo tanda || dia akan mengecek true dan klo gk ada yang true dia akan mengambil baris ahir
// jadi dia tuh penjelasan truenya itu setara peraturanya si trutly dan false = fasly jadi klo di angap teori fasly dan trutly klo angka selain 0 dan -0 dianggap trutly dan selain string kosong dia di anggap truly, jadi klo lihat baris 1 diakan menggunakan && jadi dua duanyakan gk ada fasly dia akan mengambil di ahirnya

//**soal 7 */

// for (let i = 1; i < 10; i++) {
//   if (i % 2) {
//   console.log(i)
//   }
// }

//karena ada modulus di dalam if

// **soal 8

let angka = 5;

while (angka < 10) {
  console.log("Angka sekarang:", angka);
  angka++;
}

// 5 kali
// angka 9

//** soal 9 */
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  if (i === 5) {
    break;
  }
 console.log(i);
}

//124
// karena angka 3 kena di continue dan angka 5 kena break langsug terhenti

//** soal 10 */