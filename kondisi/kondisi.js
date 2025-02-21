// ini tentang pengkondisian
let kondisi = 10;

if (kondisi == 19) {
    document.write(`lu bener sekali kawan`);
}
else if (kondisi == 10) {
    document.write("lu berada di tengah-tengah");
}
else (document.write("salah lu"));

document.write("<br/>");
// bisa kita serdehanain lagi
let kondisi1 = 9;

if (kondisi1 == 1) {
    kondisi1 = "bener juga jawaban lu";
}
else if (kondisi1 == 3) {
    kondisi1 = "lu berada di tengah-tengah";
}
else {
    kondisi1 = "salah lu kocak"
};

document.write(kondisi1);
document.write("<br/>");

// dan ini yang paling simpel
let kondisi3 = 50;
let kondisi2 = (kondisi3 == 30) ? "lu bener" : "lu salah";
document.write(kondisi2);