//**in operator di JavaScript itu dipake buat ngecek apakah suatu properti ada di dalam sebuah object atau array. Jadi, lo bisa make ini buat ngecek keberadaan properti tanpa harus akses langsung. */

const objek = ["haytra", null ,123 ,undefined]
document.writeln(1 in objek)

const ary = {
    nama: "hadi bayu saputra",
    kelas: undefined,
    pelajaran: null
};
document.writeln("kelas" in ary)