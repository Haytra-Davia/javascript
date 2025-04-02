// ** jawaban no 1
// let uang = 10
// let kembalian = "5"
// let kembalianWarung = uang * kembalian;

// document.writeln(kembalianWarung)

// ** jawaban no 2
const yaTidak = parseInt(prompt("Masukkan angka:"));
if (yaTidak === 23) {
    document.writeln("bener");
} else {
    document.writeln("salah");
}


// ** jawaban no 3
// kenapa 10+"10" hasilnya 1010 karena aritmatika di cuman bisa menambahkan di bagian number. karena js terdeteksi string maka hasilnya 1010, kecuali dia number dua duanya dia akan otomatis menambahkan 20

// contoh str
// const str = "10"
// const tambah = 10
// const hasilnya = str + tambah

// document.writeln(hasilnya)

// contoh num
// const num = 10
// const tambah = 10
// const hasilnya = num + tambah

// document.writeln(hasilnya)

//**jawaban no 4
// karena si const tidak bisa di ubah isinya setelah di deklarasikan kalo mau bisa diubah menggunakan let

// let nambah = "hayta"
// nambah = "haytra"

// document.writeln(nambah)

// ** jawaban no 5
//hasilnya akan Nan kenapa soalnya dia terdetek bukan angka

// document.writeln(4 / "saya")

// ** jawaban no 6
//karena tanda == dia akan mengecek angka saja walaupun dia statusnya string dia tidak peduli . kalo === dia mengecek apakah nomor dan apakah statusnya dia number

// const cek = 10
// const lihat = "10"
// const hasil = cek == lihat 

// document.writeln(hasil)

// const cek = 10
// const lihat = "10"
// const hasil = cek === lihat 

// document.writeln(hasil)

//** jawaban no 7
// kalo || dia klo ada true1 hasilnya pasti true klo && dia harus true dua duanya

//contoh

// document.writeln(true || false)
// document.writeln(true && false)


//** jawaban no 8 */
//karena dia akan mengasih tau erornya dimana

//**jawaban no 9 */
//bactic itu sangat simple dansupaya kita tidak bg dan dia juga bisa loh jadiin tipe data aritmatika
//+ lebih sulit klo mempunyai variable yang banyak

// const nama= "haytra" 
// const kelas = 4
// const pelajaran = "tik"

// document.writeln(`${nama} ${kelas} ${pelajaran}`)
// document.writeln(`${nama} hallo ${kelas}`)

//**jawaban no 10 */
//mengunakan parseInt karena kita buat mengubah dari str ke int supaya nanti jika di jumkahkan tidak rusak

// const str = "12"
// const num = parseInt(str)
// const hasil = num + 12

// document.writeln(hasil)

//**jawaban no 11 */
//Array ketika kita igin mengisi yang sebuah data
//object ketika kita ingin mengisi data str dan juga bisa mengisi data yang panjang

// const ary = ["nama saya", 123 ,true];

// const object = {
// nama: "hadi bayu saputra",
// no: 123,
// hasil:true
// };

// console.log(ary)
// console.log(object)

//**jawaban no 12 */
//karena object memiliki sebuah di ibaratkan variable sendiri nah di dalam itu kita bisa isi nama kontak kita

// const kontak={
//     nama:"hadi"
// }

//**jawaban no 13 */

let str =parseInt(prompt("masukan angka"))
if (str > 25) {
    document.writeln("Panas banget!");
}else if (str < 15){
document.writeln("dingin banget");
}
else {
    document.writeln("Masih adem");
}
