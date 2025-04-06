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
// berubah outputnya jadi gagal

//** soal 3 */
let username = null;
let displayName = username ?? "Guest";
console.log(displayName);

//Guest
//bedanya klo ?? buat pengecekan null dan undifine klo tanda||buat cari trutly
