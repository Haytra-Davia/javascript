//**Truthy itu kebalikan dari falsy, yaitu nilai yang dianggap true dalam kondisi.Intinya, kalau suatu nilai bukan falsy, berarti dia truthy. */
/*Daftar nilai yang falsy:
false

0 (angka nol)

-0 (minus nol, tapi jarang banget dipake)

"" (string kosong)

null

undefined

NaN (Not a Number)
*/

const trut = -0
const fal = trut? "true":"false"
document.writeln(fal)