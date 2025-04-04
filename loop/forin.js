const objek ={
    nama:"hadi bayu saputra",
    panggilan:"haytra",
    hobi:"ngulik",
    nomor:123
};
for(let tuang in objek){
    document.writeln(`<p>${tuang} : ${objek[tuang]}</p>`)
}
const ary = ["haytra", "hadi bayu saputra", 123, 9712973621];
for(let arry in ary){
    document.writeln(`<p>${arry} : ${ary[arry]}</p>`)
}