function nama(hadi, haytra){
    return(`hallo ${hadi} ${haytra}`)
}
let nama1 = nama("hadi bayu", "haytra")
document.writeln(nama1)
document.writeln(`<hr>`)

//bisa buat menghentikan sebuah if
function cek(cek1){
    if(cek1 > 70){
        return "A"
    }
    else if(cek1 > 60){
        return "B"
    }
    else if(cek1 > 50){
        return "c"
    }
    else if(cek1 > 10){
        return "d"
    }else{
        "salah"
    }
}
const silahkan = cek(60)
document.writeln(`Jawabanya ${silahkan}`)
