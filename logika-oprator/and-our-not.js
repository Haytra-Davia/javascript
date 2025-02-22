// and &&
//pengecekan and iti dia akan salah jika salah satunya ada yang salah

let angka =2
if(angka < 9 && angka > 18){
    angka ="jawabanlu bener";
}
else{
    angka="jawabanlu salah";
}
document.write(angka);
document.write("<br/>")

// our ||
// klo our dia akan bener jika salah satunya ada yang bener

let angka1 =2
if(angka1 < 9 || angka1 > 18){
    angka1 ="jawabanlu bener";
}
else{
    angka1="jawabanlu salah";
}
document.write(angka1);
document.write("<br/>");
//not dia akan kebalikan jika tidak dia bener jika iya dia salah

let angka2 =2
if(!(angka2 < 1 || angka2 > 18)){
    angka2 ="jawabanlu bener";
}
else{
    angka2="jawabanlu salah";
}
document.write(angka2);