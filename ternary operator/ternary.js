//**Ternary operator di JavaScript itu versi simpel dari if...else, bentuknya kayak gini:

const iff = 75;

if( iff === 75){
    document.writeln(`<p>kamu bener</p>`)
}else{
    document.writeln(`<p>kamu salah</p>`)
}

// contoh ternary
const ternary = iff === 75 ? "kamu bener":"kamu salah"
document.writeln(ternary    )
