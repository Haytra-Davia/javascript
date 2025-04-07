function nama(){
    return "hadi bayu"
};
document.writeln(`<p>${nama()}</p>`)
document.writeln(`<p>${nama()}</p>`)
document.writeln(`<p>${nama()}</p>`)
document.writeln(`<p>${nama()}</p>`)
document.writeln(`<hr>`)
// parameter
function haytra(muka){
    for(muk of muka){
        document.writeln(`<p>Hai ${muk}</p>`)
    }
}
const daftar = ["hadi", "haytra"]
haytra(daftar)