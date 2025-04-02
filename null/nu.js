// ** tip data nul itu berbeda dengan undifine kalo nul dia ada isinya tpi kosong klo undifine dia bener bener kosong

let nama = null

switch(nama){
    case undefined:
        document.writeln("undifine")
        break
        case null:
            document.writeln("null")
            break
   default:
   document.writeln("bukan")
   break
}