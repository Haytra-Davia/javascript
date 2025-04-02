// tipe data object yaitu tipe data array yang di gunakan buat string
const object = {
    nama : "hadi bayu saputra",
    sekolah: "gak ada",
    "asal usul": "bekasi"
};
//menghapus
delete object[1];
document.writeln(object)
// untuk memanggil property
console.info(`${object.nama}`)
// memanggil semua
console.table(object)
