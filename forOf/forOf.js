// contoh aray dan string
const str = "hadi bayu"
for(let nama of str){
    document.writeln(`<br> ${nama}`)
}

const ary = ["hadi bayu", 123, "haytra"]
for(singkatan of ary){
    document.writeln(`<p> ${singkatan}</p><br>`)
}
//pakai function
function cetak(namaList){
    for(const nama1 of namaList){
        document.writeln(`<p>Hallo ${nama1}</p><hr>`)
    }
}
const DaftarNama =["haytra", 'hadi bey', "bey"]
cetak(DaftarNama);

function angka(Hitung){
    let total = 0
    for(ang of Hitung){
        total += ang
    }
    return total;
}
document.writeln(`<p>${angka([123,12])}</p>`);
