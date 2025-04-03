//**Jadi, ?? di JavaScript dipake buat ngecek apakah suatu nilai itu null atau undefined, terus ngegantiin dengan nilai default kalau iya. */

let nol =null
let nama = nol ?? "gak ada nilai"
document.writeln(nama)