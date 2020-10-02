// ----------------------------------------------------------------------------
// var - Problem 1
// ----------------------------------------------------------------------------
var variablePertama = 'hello1'
var variablePertama = 'hello2'

console.log(variablePertama) //

var pi = 3.14
pi = 4.13   


// ----------------------------------------------------------------------------
// var - Problem 2
// ----------------------------------------------------------------------------
var variableKedua;
variableKedua = 'ini adalah value yang diassign ke variable'

console.log(variableKedua)


// ----------------------------------------------------------------------------
// var - Problem 3
// ----------------------------------------------------------------------------
/* creation
var variableketiga;
var i;
var variableketiga;
*/

/*
execution
var variableketiga = 'angka 3;
var i = 0;
var variableketiga = 'angka empat"
*/

var variableKetiga = 'angka 3' // 'angka 3'

for (var i = 0; i < 3; i++) { // i ==> 0, 1, 2, 3
    var variableKetiga = 'angka empat'
}

console.log(variableKetiga, i) //angka 3, error not defined

// ----------------------------------------------------------------------------
// var - Problem 4
// ----------------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
  var variableKeempat = 3
}
console.log(variableKeempat, i)
    
    
/** SIAF => Self Invoking Anonymous Function */
(function () {
    for (var i = 0; i < 5; i++) {
        var variableKeempat = 3
    }
})()

console.log(variableKeempat, i)
