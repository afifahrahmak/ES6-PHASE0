// ----------------------------------------------------------------------------
// var - Problem 3
// ----------------------------------------------------------------------------
var variableKetiga = 'angka 3';

if (true) {
  var variableKetiga = 'angka empat';
}

console.log(variableKetiga);

// --------------------------------------------------
for (var i = 0; i < 5; i++) {
  console.log(i, '---- luar') // 0 1 2 3 4
}
console.log(i) // 5

// --------------------------------------------------
for (var i = 0; i < 5; i++) {
  console.log(i, '---- luar') // 0 1 2 3 4
  for (var i = 0; i < 5; i++) {
    console.log(i, '++++ dalam');
  }
}
console.log(i) // 5

