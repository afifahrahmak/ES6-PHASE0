// ----------------------------------------------------------------------------
// const and let - Solution 1
// ----------------------------------------------------------------------------
let variablePertama = 'hello1'
variablePertama = 'hello2'

console.log(variablePertama)

const pi = 3.14
const vocal = 'aiueo'
pi = 3.21
vocal = 'bcd'

// console.log(pi, vocal) //error 

// ----------------------------------------------------------------------------
// const and let - Solution 2
// ----------------------------------------------------------------------------
variableKedua = 'ini adalah value yang diassign ke variable'
let variableKedua

// console.log(variableKedua) // error karna init dulu, harusnya declare dulu

// ----------------------------------------------------------------------------
// const and let - Solution 3
// ----------------------------------------------------------------------------
let variableKetiga = 'angka 3' // global

if (true) {
    let variableKetiga = 'angka empat' // local
    console.log(variableKetiga) // angka empat
}

// console.log(variableKetiga) // angka 3 

// ----------------------------------------------------------------------------
// const and let - Solution 4
// ----------------------------------------------------------------------------

let name = 'afi' //G
let variableKeempat = 3 //G

for (let i = 0; i < 5; i++) { //L1 => i
    console.log(name) // name, variablekeempat, i
    console.log(i)
    for (let j = 0; j < 2; j++){ //L2 => j
        console.log(i) // name, variablekeempat, i, j
    }
    console.log(j) // error
}
console.log(i,j) //error
//GLOBAL
console.log(variableKeempat) //undefined, 4
