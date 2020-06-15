// ----------------------------------------------------------------------------
// var - Problem 4
// ----------------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
  var variableKeempat1 = 3;
}
console.log(variableKeempat1);


(function () {
  for (var i = 0; i < 5; i++) {
    var variableKeempat2 = 3;
  }
})();

console.log(variableKeempat2);
